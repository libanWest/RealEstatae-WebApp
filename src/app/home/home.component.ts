import { Component , inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HousingLocationComponent], //we also have to add imports in this array
  template: `
    <section> 
     <form action="">
       <input type="text" placeholder="Filter by city">
       <button class="primary" type="button">Search</button>    
     </form>
    </section>
    <section class="results"> <!-- each component in its own section -->
      <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation] = "housingLocation"> </app-housing-location><!--ngFor Directive is angular syntax for loop to add functionality to components-->
    </section>                                                                 <!--[]> Binding value expected by the component to the items in the ngFor loop. Names have to match-->                                         
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
housingLocationList:HousingLocation[] = [ ]; //we can populate this list with data to serve in the component above 
housingService: HousingService = inject(HousingService); // dependency injection to create our own instance of the service

constructor(){
 // this.housingLocationList = this.housingService.getAllHousingLocation();
this.housingService.getAllHousingLocation().then((housingLocationList: HousingLocation[])=>{
  this.housingLocationList = housingLocationList;
});
}

}
