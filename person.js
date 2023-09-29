class Person {
    constructor(firstName, lastName, age, gender, dob) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.dob=dob;
    }
}
    var c = new Person("mohankrishna","m","24","male","10.12.1998");
    console.log(c.firstName);
    console.log(c.lastName);
    console.log(c.age);
    console.log(c.gender);
    console.log(c.dob);