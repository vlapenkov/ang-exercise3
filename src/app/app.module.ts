import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { QuantComponent } from './components/quant/quant.component';
import { ListComponent } from './components/list/list.component';
import { ListitemComponent } from './components/listitem/listitem.component';
import { InfoComponent } from './components/info/info.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { ListcontainerComponent } from './listcontainer/listcontainer.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    QuantComponent,
    ListComponent,
    ListitemComponent,
    InfoComponent,
    ListcontainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
