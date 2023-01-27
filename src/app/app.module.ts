import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'

import { PostModule } from './post/post.module';
import { ForloopComponent } from './forloop/forloop.component';
import { SecondComponent } from './second/second.component';
import { SubjectComponent } from './subject/subject.component';
import { FirstComponent } from './first/first.component';
import { DetailsComponent } from './details/details.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { MainPostComponent } from './main-post/main-post.component';
import { RapidComponent } from './rapid/rapid.component';
import { RectivFormComponent } from './rectiv-form/rectiv-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectComponent } from './rect/rect.component';

@NgModule({
  declarations: [
    AppComponent,
    ForloopComponent,
    SecondComponent,
    SubjectComponent,
    FirstComponent,
    DetailsComponent,
    PostDetailsComponent,
    MainPostComponent,
    RapidComponent,
    RectivFormComponent,
    RectComponent
  ],
  imports: [
    BrowserModule,
    PostModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
