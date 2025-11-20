import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactInfo = {
    email: 'jzon_03@yahoo.com',
    phone: '(607) 768-6410',
    location: 'Rochester, NY',
    linkedin: 'https://linkedin.com/in/jaysonguevarra',
    github: 'https://github.com/jaysonguevarra',
    twitter: 'https://twitter.com/jaysonguevarra'
  };
  
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  isSubmitting = false;
  submitSuccess = false;
  
  onSubmit(): void {
    if (this.isFormValid()) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.resetForm();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      }, 2000);
    }
  }
  
  private isFormValid(): boolean {
    return !!(this.contactForm.name && 
              this.contactForm.email && 
              this.contactForm.subject && 
              this.contactForm.message);
  }
  
  private resetForm(): void {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}