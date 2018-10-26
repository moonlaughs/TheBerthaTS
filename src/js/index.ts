interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user: Person = { firstName: "John", lastName: "Doe" };
let user2: Person = { firstName: "Megante", lastName: "Stepnoja"};

let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
element.innerHTML = greeter(user);