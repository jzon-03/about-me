import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  technicalSkills = [
    { name: 'HTML5', level: 95, icon: '🌐' },
    { name: 'CSS3/SCSS', level: 92, icon: '🎨' },
    { name: 'JavaScript', level: 88, icon: '⚡' },
    { name: 'TypeScript', level: 85, icon: '📘' },
    { name: 'Angular', level: 90, icon: '🅰️' },
    { name: 'Node.js', level: 78, icon: '🟢' },
    { name: 'Express.js', level: 75, icon: '🚀' },
    { name: 'MongoDB', level: 80, icon: '🍃' }
  ];
  
  designSkills = [
    { name: 'UI/UX Design', level: 90, icon: '✨' },
    { name: 'Photoshop', level: 85, icon: '🖼️' },
    { name: 'Responsive Design', level: 95, icon: '📱' },
    { name: 'Prototyping', level: 87, icon: '🔧' },
    { name: 'Wire-framing', level: 88, icon: '📝' },
    { name: 'Design Systems', level: 85, icon: '🎯' }
  ];
  
  tools = [
    { name: 'Git/GitHub', icon: '📂' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Webpack', icon: '📦' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Netlify', icon: '🚀' },
    { name: 'Vercel', icon: '▲' }
  ];
}