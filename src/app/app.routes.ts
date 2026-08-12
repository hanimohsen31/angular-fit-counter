import { Routes } from '@angular/router';
import { MuscleGroupComponent } from './components/muscle-group.component';
import { ExcercisesComponent } from './components/excercises.component';

export const routes: Routes = [
  { path: 'chest', component: MuscleGroupComponent, data: { groups: ['chest'] } },
  { path: 'bieceps', component: MuscleGroupComponent, data: { groups: ['biceps'] } },
  { path: 'back', component: MuscleGroupComponent, data: { groups: ['back'] } },
  { path: 'triceps', component: MuscleGroupComponent, data: { groups: ['triceps'] } },
  { path: 'buttocks', component: MuscleGroupComponent, data: { groups: ['buttocks'] } },
  { path: 'calf', component: MuscleGroupComponent, data: { groups: ['calf'] } },
  { path: 'shoulder', component: MuscleGroupComponent, data: { groups: ['shoulder'] } },
  { path: 'traps', component: MuscleGroupComponent, data: { groups: ['traps'] } },
  { path: 'legs', component: MuscleGroupComponent, data: { groups: ['legs', 'calf'] } },
  { path: 'wrist', component: MuscleGroupComponent, data: { groups: ['wrist'] } },
  { path: 'excercises', component: ExcercisesComponent },
  { path: '**', redirectTo: 'excercises' },
];
