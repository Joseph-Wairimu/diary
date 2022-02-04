import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  diarys:Diary[] =[
    new Diary(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
    new Diary(2,'Buy Cookies','I have to buy cookies for the parrot'),
    new Diary(3,'Get new Phone Case','Diana has her birthday coming up soon'),
    new Diary(4,'Get Dog Food','Pupper likes expensive snacks'),
    new Diary(5,'Solve math homework','Damn Math'),
    new Diary(6,'Plot my world domination plan','Cause I am an evil overlord'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
