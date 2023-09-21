import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [
    { image: '~/../assets/img/Banner infantil.png', alt: 'Banner infantil' },
    { image: '~/../assets/img/Banner Moda Masculina.png', alt: 'Banner Moda Masculina' },
    { image: '~/../assets/img/Banner-Moda-Feminina.jpg', alt: 'Banner-Moda-Feminina' }
  ];

  activeSlideIndex = 0;

  constructor() { }

  ngOnInit(): void {
    // Inicializar o carrossel
    this.showSlide(this.activeSlideIndex);
  }

  showSlide(index: number) {
    this.activeSlideIndex = index;
  }

  nextSlide() {
    if (this.activeSlideIndex < this.slides.length - 1) {
      this.activeSlideIndex++;
    } else {
      this.activeSlideIndex = 0;
    }
    this.showSlide(this.activeSlideIndex);
  }

  prevSlide() {
    if (this.activeSlideIndex > 0) {
      this.activeSlideIndex--;
    } else {
      this.activeSlideIndex = this.slides.length - 1;
    }
    this.showSlide(this.activeSlideIndex);
  }
}
