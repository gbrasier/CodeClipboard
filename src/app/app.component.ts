import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CodeClipboard';
  rows = [new Clipboard()];


  addRow() {
    console.log('in add Row');
    this.rows.push(new Clipboard());
    console.log(this.rows.length);
  }

  removeRow() {
    if (this.rows.length > 1) {
      this.rows.pop();
    }
    console.log(this.rows);
  }
}

export class Clipboard {
  text: string;

  constructor() {
    this.text = null;
  }
}
