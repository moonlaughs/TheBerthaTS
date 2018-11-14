import axios,
{
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios";

import {
    //ArrayEnumerable, 
    Enumerable,
    /*AsyncEnumerable, 
    ParallelEnumerable*/
} from "linq-to-typescript";

//import {Router} from '@angular/router';


interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    age: number;
    gender: string;
    typeOfUser: string;
}

let usernameInput: HTMLInputElement = <HTMLInputElement>document.getElementById("username");
let passwordInput: HTMLInputElement = <HTMLInputElement>document.getElementById("password");
let loginButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("loginButton");
loginButton.addEventListener("click", login);

function login(): void {

    let uri: string = "https://thebertharestconsumer20181031102055.azurewebsites.net/api/users/login/" + usernameInput.value + "/" + passwordInput.value;
    axios.get(uri)
        .then(function (response: AxiosResponse): void {
            console.log(response.data);
            //if (response.data === true){            }
            //link.href == "index.html";
            //this.router.navigate(['http://localhost:3000/index.html']);
            //this.router= Router;
            //this.router.navigateByUrl('/index.html');}
        })
        .catch(function (error: AxiosError): void {
            console.log(error);
        }
    }