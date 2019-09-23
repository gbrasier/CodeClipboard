import { Component, ViewChild } from '@angular/core';
import { Clipboard } from 'src/models/clipboard';
import * as CodeMirror from 'codemirror';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CodeClipboard';
  rows: Array<Clipboard> = [new Clipboard()];

  @ViewChild('codeMirror', {static: false}) codeMirror: any;

  addRow() {
    this.rows.push(new Clipboard());
    console.log(this.rows);
    console.log(this.codeMirror);
    // this.codeMirror.setSize(null, 5);

    // CodeMirror.fromTextArea(this.codeMirror).setSize(500, 300);
  }

  removeRow() {
    if (this.rows.length > 1) {
      this.rows.pop();
    }
    console.log(this.rows);
  }
}
