import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
const routeConfig : Routes = [
    {
        path:'', // empty because we want the home component to be shown by default
        component: HomeComponent,
        title:'Home Page'
    },
    {
        path:'details/:id',
        component: DetailsComponent,
        title:'Details Page'
    }
] ;

export default routeConfig; //so routeConfig variable can be available to files that import routes  

