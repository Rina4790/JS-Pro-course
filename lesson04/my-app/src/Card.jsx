import { Component } from "react"

export function Card(props) {
	const {name, image, postText} = props

	return <div>
		<h2>{name}</h2>
		<img src= {image} alt="" style={{
			width: '500px',
			
			
		}}/>
		<p>{postText}</p>
	
	</div>

}

