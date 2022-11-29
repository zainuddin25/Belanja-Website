import { Component } from "@angular/core" 
import { Router } from "@angular/router"

@Component({
    selector: 'message-succes',
    templateUrl: './massage.component.html'
})

export class MessageComponent {

    constructor(private router: Router) {}

    ngOnInit() {
        setTimeout(() => {
            this.router.navigate(["/product"])
        }, 2000)
    }

}