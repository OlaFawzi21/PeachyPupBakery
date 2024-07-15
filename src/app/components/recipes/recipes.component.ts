import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Meals } from 'src/app/interfaces/meals';
import { MealsService } from './../../services/meals.service';

@Component( {
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
} )

export class RecipesComponent {

  mealsData: Meals;

  constructor( private mealService: MealsService ) { }

  ngOnInit(): void {
    this.getMealsData();
  }

  getMealsData() {
    this.mealService.getMeals().subscribe( {
      next: data => {
        this.mealsData = data;
        console.log( this.mealsData );

      },
      error: error => {
        console.log( error );
      }
    } );
  }

  Options: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      740: {
        items: 3,
      },
    },
    nav: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    autoplaySpeed: 1000
  };
}
