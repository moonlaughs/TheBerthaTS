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
    axios.get<IUser[]>(uri)
    .then(function(response:AxiosResponse<IUser[]>) :void
    {
        console.log(response.data);
        //let result: 
        response.data.forEach((user: IUser) => {
            if (user.username !== null && user.username === usernameInput.toString()){
                                
            }            
        });
    })
}