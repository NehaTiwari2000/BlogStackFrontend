import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { StackComponent } from './components/stack/stack.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent},
  {path: "login", component: LoginComponent},
  {path: "blogs", component: BlogsComponent},
  {path: "stack", component:StackComponent},
  {path: "contact", component:ContactComponent},
  {path: "user-list", component:UserListComponent},
  {path: "update-user", component:UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }