import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'home';
  
  navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];
  
  ngOnInit() {
    this.updateActiveSection();
  }
  
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isScrolled = window.pageYOffset > 50;
    this.updateActiveSection();
  }
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth > 768) {
      this.isMobileMenuOpen = false;
    }
  }
  
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId === 'home' ? 'hero' : sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.isMobileMenuOpen = false;
  }
  
  private updateActiveSection() {
    const sections = this.navItems.map(item => item.id === 'home' ? 'hero' : item.id);
    const scrollPosition = window.pageYOffset + 100;
    
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = sectionId === 'hero' ? 'home' : sectionId;
          break;
        }
      }
    }
  }
}