import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { Diary } from '../diary';
@Component({
  selector: 'app-diary-content',
  templateUrl: './diary-content.component.html',
  styleUrls: ['./diary-content.component.css']
})
export class DiaryContentComponent implements OnInit {
  @Input() diary!: Diary;
  @Output() isComplete = new EventEmitter<boolean>();


  diaryDelete(complete:boolean){
    this.isComplete.emit(complete);
  }  
  constructor() { }

  ngOnInit(): void {
  }

}
