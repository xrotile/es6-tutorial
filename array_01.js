// 基本数组的操作
const array1 = ["1", "2"]
for (let x in array1) {
	console.log(x);
}

array1.push("3")
for (let x in array1) {
	console.log(x);
}

array1.pop();
for (let x in array1) {
	console.log(x);
}