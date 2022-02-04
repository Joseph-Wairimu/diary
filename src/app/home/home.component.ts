import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  diarys:Diary[] =[
    new Diary(1, 'Watch movies', 'Stream the Originals series',new Date(2020,3,14)),
   
  ];

Hide(index:any){
    this.diarys[index].showDescription = !this.diarys[index].showDescription;
  }

  completeGoal(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.diarys[index].name}?`)

      if (toDelete){
        this.diarys.splice(index,1)
      }
    }
  }
  addNewDiary(diary:any){
    let goalLength = this.diarys.length;
    diary.id = goalLength+1;
    diary.completeDate = new Date(diary.completeDate)
    this.diarys.push(diary)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
