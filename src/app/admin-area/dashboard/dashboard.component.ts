import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  model = "SAMSUNG"
  os = "OS-2024"
  imei = "4212121"
  network = "wifi"
  country = "tr"
  battery = "90%"
  client_status = "CONNECTED"
  last_sync = "1 hrs ago"
  product_key = "Optimizer"
  license_key = "rdw+Xiaomi_op_TEST"
  installation = "30-08-2024 02:01:58"
  product_version = "5.0.0"
  server_version = "1.0"
  responseData : any = null;
  
 calls =  [
    {id:1,phoneNumber:'+80 2123 443 43',direction:'INCOMING',time:new Date().getUTCHours()},
    {id:1,phoneNumber:'+80 2123 443 43',direction:'OUTGOING',time:new Date().getSeconds()},
    {id:1,phoneNumber:'+80 2123 443 43',direction:'INCOMING',time:new Date().getSeconds()},
    {id:1,phoneNumber:'+80 2123 443 43',direction:'INCOMING',time:new Date().getSeconds()}
  ]

  device_info = {
    address: {},
    battery: "",
    imei:"",
    id:0,
    license:0,
    model:"",
    network:"",
    os:"",
    permission:""
  }

  product_info = {
    aliase:"",
    country:"",
    expiration_date:"",
    license_key:"",
    phone:"",
    product_name:"",
    status:""
  }
}
