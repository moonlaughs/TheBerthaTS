import axios,
{
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios";

interface IUser
{
    username: string;
    password: string;
}

let usernameInput: HTMLInputElement = <HTMLInputElement>document.getElementById("username");
let passwordInput: HTMLInputElement = <HTMLInputElement>document.getElementById("password");
let loginButton: HTMLButtonElement =<HTMLButtonElement>document.getElementById("loginButton");
loginButton.addEventListener("click", login);

function login(): void
{
    let uri:string= "https://thebertharestconsumer20181031102055.azurewebsites.net/api/users";
    Axios.get<IUser[]>(uri)
    .then(function(response:AxiosResponse) :void
    {
        console.log(response.data);
        let result: 
    })
}