import { Route } from "@angular/router";
import { InfoComponent } from "./components/info/info.component";
import { ListitemComponent } from "./components/listitem/listitem.component";
import { ListcontainerComponent } from "./listcontainer/listcontainer.component";

export const routes: Route[] = [
    {
        path:'',
        redirectTo:'list',
        pathMatch:'full'
        },

{
path:'info',
component:InfoComponent
},{
path:'list',
component:ListcontainerComponent
}

];