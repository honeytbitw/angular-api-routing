import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  p : number = 1;
  userId = '' ;
  id = '1';
  title = 'question1-angular';
  body = 'question1-angular';
 public data: any = []
 constructor(public http: HttpClient) {
  
 }

 getData(){
   const url ='https://jsonplaceholder.typicode.com/posts'
   this.http.get(url).subscribe((res)=>{
     this.data = res
     console.log(this.data)

   })
 }

 ngOnInit() {
   this.getData()
 }
}