// object

const o1 = {
	firstName: "tom",
  lastName: "tt"
};

o1.name = "11";
console.log(o1.firstName);
console.log(o1.name);

// object get
const o2 = {
	firstName: "jog",
  get name() {
  	return this.firstName;
  },
  
  set name(value) {
  	this.firstName = value;
  }
};

o2.name = "1111"
console.log(o2.name);