import axios, {
AxiosResponse,
AxiosError} from "../../node_modules/axios";

interface IUser {
    id : number;
    firstName : string;
    lastName : string;
    userName : string;
    pass : string;
    age : number;
    gender : string;
    typeOfUser : string;
}

let output: HTMLDivElement = <HTMLDivElement> document.getElementById("output");
let showallUsersButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("showAllUsersButton");
showallUsersButton.addEventListener("click", showAllUsers);

function showAllUsers(): void {
    let uri: string = "http://localhost:65403/api/users";
    axios.get<IUser[]>(uri)
    .then(function(response:AxiosResponse<IUser[]>): void {
        let result: string = "<ol>";
        response.data.forEach((user: IUser) => {
            result += "<li>" + user.firstName + " " + user.lastName + "</li>"
        });
        result += "</ol>";
        output.innerHTML = result;
    })
    .catch (function (error: AxiosError): void {
        if (error.response) {
            output.innerHTML = error;}
        else {output.innerHTML = error;}
    });
}

let showSelectedUser:HTMLButtonElement = <HTMLButtonElement> document.getElementById("showSelectedUser");
showSelectedUser.addEventListener("click", showUser);

function showUser(): void {
    let selOutput: HTMLDivElement = <HTMLDivElement> document.getElementById("selOutput");
    let selInput : HTMLInputElement = <HTMLInputElement> document. getElementById("selInput");
    let id: string = selInput.value;
    let uri: string = "http://localhost:65403/api/users/" + id;
    axios.get<IUser>(uri)
    .then(function (response: AxiosResponse<IUser>): void {
        let user : IUser ;
        response.data = user.firstName;
        let result : string = user.firstName;
        selOutput.innerHTML =  result;
    })
    .catch (function (error: AxiosError): void {
         if (error.response) {
             selOutput.innerHTML = error;
         }
         else {selOutput.innerHTML = error;}
    });
}