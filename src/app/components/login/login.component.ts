import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms"
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent{

    constructor(private httpClient: HttpClient, private router: Router) {};

    loginForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl(),
    });

    submit() {
        this.httpClient.post("http://localhost:3002/accountUser", {
            id : 11,
            username : this.loginForm.value.username,
            password : this.loginForm.value.password
        },
        {
            observe: 'response'
        })
        .subscribe(
            response => {
                if (response.status === 201) {
                    this.router.navigate(['/dashboard'])
                    localStorage.setItem("status", "Masuk")
                } else {
                    window.alert("Login Gagal")
                }
            }
        )
    }
}