import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'flights',
    loadChildren: () =>
      import('flights/Module').then((m) => m.FlightsModule),
      // import('./flights/flights.module').then((m) => m.FlightsModule),
  },{
    path: 'trains',
    loadChildren: () =>
      import('trains/Module').then((m) => m.TrainsModule),
      // import('./flights/flights.module').then((m) => m.FlightsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
