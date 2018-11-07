import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Deaven';
}
// I'd go for this option
class Chats0 {
  messages: Message[] = [];
}

// Looks a little more oldschool, but same as above
class Chats1 {
  messages: Array<Message> = new Array();
}

// Don't do this unless you need to assert the type
class Chats2 {
  messages = [] as Message[];
}

// And really, don't do this
class Chats3 {
  messages = <Array<Message>>[];
}