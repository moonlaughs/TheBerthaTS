import axios,
{
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios";


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
            if (response.data === true) {
                window.location.href = 'http://localhost:3000/index.htm';
            }
            else {
                alert("Wrong cridentials")
            }
        })
        .catch(function (error: AxiosError): void {
            console.log(error);
        }
        )
}
>>>>>>> 680c9037ad43ef94028ccb68df30c2eef933d227
