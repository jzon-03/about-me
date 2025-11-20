import { Component } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'design';
  featured: boolean;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  selectedCategory: string = 'all';
  
  projects: Project[] = [
    {
      id: 1,
      title: 'Golden Crust Bakery',
      description: 'Modern bakery website featuring online ordering, product showcase, and customer testimonials with warm, inviting design elements.',
      image: 'assets/Images/Golden_Crust_Bakery.png',
      technologies: ['Angular', 'SCSS', 'TypeScript', 'Bootstrap'],
      liveUrl: 'https://bakerydesigns.thepracticalapps.com/bakery-template-1',
      category: 'web',
      featured: true
    },
    {
      id: 2,
      title: 'Artisan Bakery',
      description: 'Elegant artisan bakery website with beautiful product photography showcase, custom order forms, and responsive gallery layout.',
      image: 'assets/Images/Artisan_Bakery.png',
      technologies: ['Angular', 'CSS3', 'JavaScript', 'Grid Layout'],
      liveUrl: 'https://bakerydesigns.thepracticalapps.com/bakery-template-2',
      category: 'web',
      featured: true
    },
    {
      id: 3,
      title: 'Sweet Dreams Bakery',
      description: 'Delightful bakery website with interactive menu, location finder, and special events calendar featuring pastel color schemes.',
      image: 'assets/Images/Sweet_Dreams_Bakery.png',
      technologies: ['HTML5', 'SCSS', 'JavaScript', 'Flexbox'],
      liveUrl: 'https://bakerydesigns.thepracticalapps.com/bakery-template-3',
      category: 'web',
      featured: false
    },
    {
      id: 4,
      title: 'Brew Haven Coffee',
      description: 'Contemporary coffee shop website with online ordering system, loyalty program integration, and atmospheric design elements.',
      image: 'assets/Images/Brew_Haven_Coffee.png',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'API Integration'],
      liveUrl: 'https://coffeeshopdesigns.thepracticalapps.com/coffee-template-1',
      category: 'web',
      featured: true
    },
    {
      id: 5,
      title: 'Roastery Coffee',
      description: 'Premium coffee roastery website featuring bean origin stories, brewing guides, and subscription service with rich, dark aesthetics.',
      image: 'assets/Images/Roastery_Coffee.png',
      technologies: ['Angular', 'CSS3', 'TypeScript', 'Responsive Design'],
      liveUrl: 'https://coffeeshopdesigns.thepracticalapps.com/coffee-template-2',
      category: 'web',
      featured: false
    },
    {
      id: 6,
      title: 'Brew And Beyond Coffee',
      description: 'Modern coffee shop website with social media integration, event booking system, and community features for coffee enthusiasts.',
      image: 'assets/Images/Brew_And_Beyond_Coffee.png',
      technologies: ['Angular', 'SCSS', 'JavaScript', 'Social API'],
      liveUrl: 'https://coffeeshopdesigns.thepracticalapps.com/coffee-template-3',
      category: 'web',
      featured: true
    }
  ];
  
  categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' }
  ];
  
  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedCategory);
  }
  
  get featuredProjects(): Project[] {
    return this.projects.filter(project => project.featured);
  }
  
  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}