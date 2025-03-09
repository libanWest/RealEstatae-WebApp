import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs';
@Component({
    selector: 'app-details',
    standalone: true,
    imports: [CommonModule,ReactiveFormsModule],
    template: `
   <article class="top-class">
       <img class ="listing-photo" src={{housingLocation?.photo}}  alt="">  <!-- since this can be undefined as its a union type, ? guards against error as id wont be accessed if housingLocation is undefined-->
       <section class="listing-description">
           <h2 class="listing-heading" >{{housingLocation?.name}}</h2>
           <p class = "listing-location" >{{housingLocation?.city}}, {{housingLocation?.state}}</p>
        </section>
       <section class="listing-features"> 
           <h2 class="section-heading">About this Housing Location</h2>
            <ul>
              <li>Units Available:{{housingLocation?.availableUnits}}</li>
              <li>Does this location have Wifi: {{housingLocation?.wifi}}</li>
              <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
            </ul>  
       </section>
       <section class="listing-apply">
        <h2 class="section-heading">Apply to live here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()" > <!-- ()> event binding -->
          <label for = "first-name"> First Name </label>
          <input id="first-name" type="text" formControlName = "firstName">

          <label for = "last-name"> Last Name </label>
          <input id="last-name" type="text" formControlName = "lastName">

          <label for = "email"> Email</label>
          <input id="email" type="email" formControlName = "email">


        <button class="primary" type="submit">Apply Now</button>
        </form>
       </section>
   </article>
    `,
    styleUrls: ['./details.component.css']
})
export class DetailsComponent {
   route: ActivatedRoute = inject(ActivatedRoute); //reference of current route we are matched against in the app, we can gain access to information e.g parameters or in this case the ID 
   housingService = inject(HousingService); //dependency injection
   housingLocation : HousingLocation | undefined;
   applyForm = new FormGroup({  //represents a collection of form controls that make up a form
   firstName: new FormControl(''),
   lastName: new FormControl(''),
   email:new FormControl('')
   
   });
    constructor(){
      const housingLocationId = Number(this.route.snapshot.params['id']); // bindind the id in the param that we set as a placeholder in route to the housing id 
      //this.housingLocation = this.housingService.getHousingLocationById(housingLocationId); // service to retreive the housingLocation data
      this.housingService.getHousingLocationById(housingLocationId).then((data) => {
        this.housingLocation = data; 
      });
    }
    submitApplication(){
      this.housingService.submitApplication(
        this.applyForm.value.firstName ?? "", // '??'if value is on the left hand side is null or undefined then the value on the right hand side is used
        this.applyForm.value.lastName ?? "",
        this.applyForm.value.email ?? ""
      );
    }

}
