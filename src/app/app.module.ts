import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
    ])
  ],
  declarations: [ AppComponent, HelloComponent, TopBarComponent, HomeComponent, PostListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
