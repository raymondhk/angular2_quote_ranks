import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = {
    quote: '',
    author: ''
  };

  allQuotes = [];

  onSubmit(myForm) {
    this.allQuotes.push(this.quotes);
    this.quotes = {
      quote: '',
      author: ''
    };
    myForm.form.markAsPristine();
    myForm.form.markAsUntouched();
  }
  delete(index) {
    this.allQuotes.splice(index, 1);
  }
  constructor() { }

  ngOnInit() {
  }

}
