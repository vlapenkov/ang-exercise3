import { Route } from "@angular/router";
import { InfoComponent } from "./components/info/info.component";
import { ListitemComponent } from "./components/listcontainer/list/listitem/listitem.component";
import { ListcontainerComponent } from "./components/listcontainer/listcontainer.component";
import { ListComponent } from "./components/listcontainer/list/list.component";
import { UserComponent } from "./components/listcontainer/user/user.component";
import { UserResolveService } from "../services/userresolve.service";
import { FormComponent } from "./components/form/form.component";



export const routes: Route[] = [
    {
        path:'',
        redirectTo:'list',
        pathMatch:'full'
        },

{
path:'info',
loadChildren:"./info/info.module#InfoModule"
},
{
    path:'form',
    component:FormComponent
    },
{
path:'list',
component:ListcontainerComponent,
children: [
    
    {
        path: ':userId',
        component: UserComponent,
        data: {
          title: 'User Info'
        },
        resolve: {
          user: UserResolveService
        }
      },
      {
        path: '',
        component: ListComponent
      },
],
},
{
path:'**',
redirectTo:'list'
}
];

/*
export const routes: Route [] = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UsersListComponent
      },
      {
        path: ':userId',
        component: UserComponent,
        data: {
          title: 'User Info'
        },
        resolve: {
          user: UserResolveService
        }
      },
      {
        path: '**',
        redirectTo: '/info'
      }
    ]
  },
  {
    path: 'info',
    loadChildren: './content/info/info.module#InfoModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]; */