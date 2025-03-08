import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
   <section class="listing">
     <img class="listing-photo"  [src]="housingLocation.photo" 
     alt="Exterior photo of {{housingLocation.name}}"> <!-- []-> property binding,tells angular that value in quotes is not a string but a  from component class -->
                                                       <!-- {{}} -> interpolation syntax to mix values/experessions into strings in our templates-->
     <h2 class="listing-heading">{{housingLocation.name}}</h2>
     <p class="listing-location"> {{housingLocation.city}}, {{housingLocation.state}}</p>
     <a [routerLink]="['/details', housingLocation.id]"> Learn more</a> <!-- instead of href link we put a routeLink to the 'details' route / component-->
                                                                        <!-- adding the Id to router link as a param so we can use it to identify which housingLocation to display when clicked in details-->
     <!-- <a routerLink="details">-->
   </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!:HousingLocation; // '!'non-null assertion operator, value wont be null or undefined
                                            // input meaning that the class will take in this property to use above in the component

}
