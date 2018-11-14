import axios from "../../node_modules/axios";
import 
{ 
    //ArrayEnumerable, 
    Enumerable, 
    /*AsyncEnumerable, 
    ParallelEnumerable*/ 
} from "linq-to-typescript";
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
var loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", login);
function login() {
    var uri = "https://thebertharestconsumer20181031102055.azurewebsites.net/api/users";
    axios.get(uri)
        .then(function (response) {
        console.log(response.data);
        Enumerable.from(response.data)
          .select(x.username === usernameInput.value && x.password === passwordInput.value)            
        this.router.navigate("http://localhost:3000/index.htm");
    })
        .catch(function (error) {
        console.log(error);
    });
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
