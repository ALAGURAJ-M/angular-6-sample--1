import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	serverStatus:String ='Offline';
	servers=['TestServer 1','TestServer 2'];

  constructor() {

this.serverStatus =Math.random()> 0.5 ?'Online':'Offline';

console.log(this.serverStatus);
}

  ngOnInit() {
  }
		getColor(){
		console.log(this.serverStatus);

		return this.serverStatus==='Online'? 'green':'red';
		}
}
