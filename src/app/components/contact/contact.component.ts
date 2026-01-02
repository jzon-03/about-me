import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactInfo = {
    email: 'jzon_03@yahoo.com',
    location: 'Rochester, NY',
    linkedin: 'https://www.linkedin.com/in/deploy-jg'
  };
}