var isEqual = true;
var num = 10;
var str = 'string';
var arr = [1, 2, 3];
var arr3 = [1, 2, 3];
var orderPhase;
(function (orderPhase) {
    orderPhase["DRAFT"] = "DRAFT";
    orderPhase["FINISH"] = "FINISH";
})(orderPhase || (orderPhase = {}));
var STATUS = orderPhase.DRAFT;
function getNumber() {
    console.log(Math.random());
}
function getNumber2() {
    return '' + Math.random();
}
var arr1 = [1, 3, 2, 1];
function sort(arr1) {
    var arrSort = arr.sort(function (a, b) {
        if (a > b) {
            return 1;
        }
        return -1;
    });
    return (arrSort);
}
console.log(sort(arr1));


