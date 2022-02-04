import { Component, OnInit ,Input} from '@angular/core';
import { Diary } from '../diary';
@Component({
  selector: 'app-diary-content',
  templateUrl: './diary-content.component.html',
  styleUrls: ['./diary-content.component.css']
})
export class DiaryContentComponent implements OnInit {
  @Input() diary!: Diary;
  constructor() { }

  ngOnInit(): void {
  }

}
