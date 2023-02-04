const person = {
    first: "Julian",
    lastname: "Cabrera",
    nickName: "Cher",
    fullName() {
        console.log(this.first);
    }
};

person.fullName();
