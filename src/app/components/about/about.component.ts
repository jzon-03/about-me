import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  aboutText = `I'm Jayson Guevarra, a passionate web developer based in Rochester, NY, with a keen eye for detail and a love for creating 
  beautiful, functional digital experiences. With expertise in modern web technologies and a strong foundation 
  in development principles, I transform ideas into engaging websites that not only look great but perform exceptionally.`;
  
  experiences = [
    {
      title: 'Senior Web Developer',
      company: 'Rochester Digital Agency',
      period: '2022 - Present',
      description: 'Lead developer for client projects in Rochester area, specializing in responsive web development and modern JavaScript frameworks.'
    },
    {
      title: 'Frontend Developer',
      company: 'NY Tech Company',
      period: '2020 - 2022',
      description: 'Developed modern web applications using Angular, React, and Vue.js with focus on performance and accessibility for NY-based clients.'
    },
    {
      title: 'Web Developer',
      company: 'Local Development Studio',
      period: '2018 - 2020',
      description: 'Built responsive websites and web applications for Rochester businesses, focusing on user experience and modern development practices.'
    }
  ];
  
  achievements = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '20+', label: 'Happy Clients' },
    { number: '5★', label: 'Average Rating' }
  ];
}