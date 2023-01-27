import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { MainPostComponent } from './main-post/main-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  {path:'subject' , component: SubjectComponent },
  {path:'details/:id' , component:DetailsComponent},
  {path:'main-post' , component:MainPostComponent},
  {path:'post-details/:id',component:PostDetailsComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
