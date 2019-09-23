import { Component } from '@angular/core';
import { Clipboard } from 'src/models/clipboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CodeClipboard';
  rows: Array<Clipboard> = [new Clipboard()];

  addRow() {
    this.rows.push(new Clipboard());
    console.log(this.rows);
  }

  removeRow() {
    if (this.rows.length > 1) {
      this.rows.pop();
    }
    console.log(this.rows);
  }
}
