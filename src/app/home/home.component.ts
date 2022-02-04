import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  diarys:Diary[] =[
    new Diary(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2020,3,14)),
    new Diary(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9)),
    new Diary(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,1,12)),
    new Diary(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,0,18)),
    new Diary(5,'Solve math homework','Damn Math',new Date(2019,2,14)),
    new Diary(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2030,3,14)),
  ];

Hide(index:any){
    this.diarys[index].showDescription = !this.diarys[index].showDescription;
  }

  completeGoal(isComplete:any, index:any){
    if (isComplete) {
      this.diarys.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
