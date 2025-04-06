import { Routes } from '@angular/router';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { EmployeeDetailsAddFormComponent } from './Employee/employee-details-add-form/employee-details-add-form.component';
export const routes: Routes = [
    {
      path: '',
      loadComponent: () =>
        import('./Employee/employee-list/employee-list.component').then(
          (m) => m.EmployeeListComponent
        ),
    },
    {
      path: 'employee-details',
      loadComponent: () =>
        import('./Employee/employee-details-add-form/employee-details-add-form.component').then(
          (m) => m.EmployeeDetailsAddFormComponent
        ),
    },
    {
      path: '**',
      redirectTo: '',
      pathMatch: 'full',
    },
  ];