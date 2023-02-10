// Link challenge : https://edabit.com/challenge/qNMtrtizgssAQqP2b
interface NameClass {
  fname: string;
  lname: string;
  fullName: string;
  initials: string;
}

class Name implements NameClass {
  constructor(public fname: string, public lname: string) {
    this.fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase();
    this.lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
  }
  get fullName() {
    return `${this.fname} ${this.lname}`;
  }

  get initials() {
    return `${this.fname[0]}.${this.lname[0]}`;
  }
}

const a1 = new Name("john", "SMITH");

console.log(a1.fname);
console.log(a1.lname);
console.log(a1.fullName);
console.log(a1.initials);
