let arr1 = ["11", "22", "33"];
for (let x in arr1) {
	console.log(arr1[x]);
}

function func(array1, ...items) {
	array1.push(...items);
}

const array1 = [];
func(array1, ...["14", "22"]);
for (let x in array1) {
	console.log(array1[x]);
}

