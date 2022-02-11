import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { NgxPaginationModule} from 'ngx-pagination'
import { RandomUserService } from './services/random-user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [RandomUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }