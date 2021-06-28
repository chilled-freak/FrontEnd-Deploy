import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService : ApiService, public toast: ToastrService) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  login(value: any) {
    console.log(value);
    // this.authService.login(value).subscribe(data => {
    //   if(data){
    //     this.toast.success('You are logged in!!')
    // }
    // else {
    //   console.log();
    //   this.toast.error('You are not authorized')
    // }   
    //   console.log(data);
    // })
  }
}
