import axios,
{
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios";

/*import 
{ 
    ArrayEnumerable, 
    Enumerable, 
    AsyncEnumerable, 
    ParallelEnumerable 
} from "linq-to-typescript";*/

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
    let uri: string = "https://thebertharestconsumer20181031102055.azurewebsites.net/api/users";
    axios.get<IUser[]>(uri)
        .then(function (response: AxiosResponse<IUser[]>): void {
            console.log(response.data);
            //Enumerable.from(response.data)
              //  .select((x: IUser) => x.username === usernameInput.value && x.password === passwordInput.value)            
                //this.router.navigate("http://localhost:3000/index.htm");
            

        })    
    .catch (function (error: AxiosError): void {
    console.log(error);
})
}

/*await Enumerable
    .from([bing, google, quackQuackGo])
    .asParallel()
    .selectAsync(downloadHtml)
    .select(getTitle)
    .toArray()

/*function login(): void
{
    let uri:string= "https://thebertharestconsumer20181031102055.azurewebsites.net/api/users";
    axios.get<IUser>(uri)
    .then(function(response:AxiosResponse<IUser>) :void
    {
        console.log(response.data);
        response.data.forEach((user: IUser) => {
            if (usernameInput !== null && passwordInput !== null && response.data.username.value === usernameInput.toString() && response.data.password.value === passwordInput.toString()){
                let divObj: HTMLDivElement = <HTMLDivElement>document.getElementById("divThing");
                let result: string = response.data.firstName + "got it";  
                divObj.innerHTML = result;   
                this.router.navigate('index.htm');               
            }            
        });
    })
    .catch(function (error: AxiosError): void {
        console.log(error);
    })
}


/*login() {
    this.loading = true;
    this.auth.login(this.credentials.email, this.credentials.password)
      .subscribe(
        data => {
          if (data) {
            this.router.navigate([this.returnUrl]);
          }
        },
        data => {
          this.loading = false;
          if (data.error && data.error.message) {
            this.loginError = data.error.message;
          }
        });
  }*/