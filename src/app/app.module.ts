import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
//import { QuantComponent } from './components//quant/quant.component';
import { QuantComponent } from './components/listcontainer/quant/quant.component';
import { ListComponent } from './components/listcontainer/list/list.component';
import { ListitemComponent } from './components/listcontainer/list/listitem/listitem.component';
//import { InfoComponent } from './components/info/info.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { ListcontainerComponent } from './components/listcontainer/listcontainer.component';
import { UserComponent } from './components/listcontainer/user/user.component';
import { UserResolveService } from '../services/userresolve.service';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    QuantComponent,
    ListComponent,
    ListitemComponent,
   // InfoComponent,
    ListcontainerComponent,
    UserComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
