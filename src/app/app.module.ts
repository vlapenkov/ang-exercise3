import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { QuantComponent } from './components/quant/quant.component';
import { ListComponent } from './components/list/list.component';
import { ListitemComponent } from './components/listitem/listitem.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    QuantComponent,
    ListComponent,
    ListitemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
