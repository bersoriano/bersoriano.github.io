import { Router, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HackerGarageComponent } from './hacker-garage/hacker-garage.component';

export const routing = RouterModule.forRoot([
	{ path: '', component: HomeComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: 'hacker-garage', component: HackerGarageComponent }
]);