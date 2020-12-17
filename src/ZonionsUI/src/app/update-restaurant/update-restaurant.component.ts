import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/restaurant';
import { from } from 'rxjs';
import {ZonionsServService} from '../zonions-serv.service';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css'],
  providers:[ZonionsServService]
})
export class UpdateRestaurantComponent implements OnInit {
  restaurantForm:FormGroup;
  data:any;
  restaurantData:any;
  restaurant:Restaurant;
  id:number;
  imagename:string;
  url:string;
  finalurl:string;
  file:any;
  open_time:string;
  close_time:string;
  constructor(private zonionsserve:ZonionsServService,private route: ActivatedRoute,private router: Router) { 
      
  }
  ngOnInit(): void {
    this.restaurant=new Restaurant();
    this.id=this.route.snapshot.params['id'];
    console.log(this.id)
    this.zonionsserve.getRestoId(this.id).subscribe(data=>{
      console.log(data)
      this.restaurant=data;
      console.log("image name",this.restaurant.name);
      this.finalurl="http://localhost:8080/zonions/file";
      this.url=`${this.finalurl}/${this.restaurant.name}/${this.id}`;
      
        console.log(this.url);
    })
  }
  updateResto(){
    
    this.zonionsserve.update(this.id,this.restaurant).subscribe(data=>{
      console.log(data);
     // alert("Updated Successfully");
      this.restaurant=new Restaurant();
      this.gotoRestaurantList();
    },error=>console.log(error)) 
  }
  onSubmit(){
    this.updateResto();
  }
  onChange(file){
      this.file=file;

  }
  updateImage(){
    console.log("I am in upload"+this.file);
    this.zonionsserve.pushFileToStorage(this.file,this.id).subscribe(resp=>{
      console.log(resp);
    
    },error=>console.log(error))
  }
  gotoRestaurantList(){
    this.router.navigate(['restaurantList'])
  } 
  backEvent(){
    this.router.navigate(['admin']);

  }
}
