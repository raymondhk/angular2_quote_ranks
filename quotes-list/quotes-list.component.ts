import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {
  @Input() quote;
  @Output() delete = new EventEmitter();
  count = 0;
  triggerDelete() {
    this.delete.emit();
  }
  up() {
    this.count++;
  }
  down() {
    this.count--;
  }

  constructor() { }

  ngOnInit() {
  }

}
