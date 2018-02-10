import { Component } from '@angular/core';
import { AfterViewInit, OnInit} from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(/**private http: HttpClient*/) {
  }

  ngOnInit() {
    /**this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log('Test: ' + data);
    });*/
  }

  test() {
  }
}
