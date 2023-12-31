import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { BiecepsComponent } from './pages/bieceps.component';
import { ChestComponent } from './pages/chest.component';
import { ShoulderComponent } from './pages/shoulder.component';
import { BackComponent } from './pages/back.component';
import { ButtocksComponent } from './pages/buttocks.component';
import { CalfComponent } from './pages/calf.component';
import { LegsComponent } from './pages/legs.component';
import { RestComponent } from './pages/rest.component';
import { TrapsComponent } from './pages/traps.component';
import { TricepsComponent } from './pages/triceps.component';
import { ExcercisesComponent } from './pages/excercises.component';
import { StatsComponent } from './pages/stats.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'bieceps', component: BiecepsComponent },
  { path: 'chest', component: ChestComponent },
  { path: 'shoulder', component: ShoulderComponent },
  { path: 'back', component: BackComponent },
  { path: 'buttocks', component: ButtocksComponent },
  { path: 'calf', component: CalfComponent },
  { path: 'legs', component: LegsComponent },
  { path: 'rest', component: RestComponent },
  { path: 'traps', component: TrapsComponent },
  { path: 'triceps', component: TricepsComponent },
  { path: 'stats', component: StatsComponent },

  { path: 'excercises', component: ExcercisesComponent },
  { path: 'settings', component: StatsComponent },
  { path: '**', redirectTo: 'excercises' },
];
