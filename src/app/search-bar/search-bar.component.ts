import { Component, OnInit,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

  onInput(value: string) {
    this.term = value;
  }

  onSubmitForm(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }

}
