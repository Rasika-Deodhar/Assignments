import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http'; 
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

import { HomePage }  from './Components/HomePage/HomePage';
import { HomeLoginPage }  from './Components/HomeLoginPage/HomeLoginPage';
import { Clothing }  from './Components/Clothing/Clothing';
import { Edit }  from './Components/EditAd/Edit';
import { Furniture }  from './Components/Furniture/Furniture';
import { Login }  from './Components/Login/Login';
import { Mobile }  from './Components/Mobile/Mobile';
import { Post }  from './Components/PostAd/Post';
import { RealEstate }  from './Components/RealEstate/RealEstate';
import { Register }  from './Components/Register/Register';
import { View }  from './Components/ViewAd/View';
import { NavBar }  from './Components/NavBar/NavBar';


@NgModule({
  imports:      [ BrowserModule , FormsModule , HttpModule ,RouterModule.forRoot([
    {path:'', component: HomePage},
    {path:'navBar', component: NavBar},
    {path:'login', component: Login},
    {path:'register', component: Register},
    {path:'home_login', component: HomeLoginPage}
    ]) ],
  declarations: [ AppComponent ,HomePage,HomeLoginPage,Clothing,Edit,Furniture,Login,Mobile,Post,RealEstate,Register,View,NavBar],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
//RouterModule.forRoot([ {path: 'first', component: FirstComponent}, {path: 'second', component: SecondComponent} ])
//HomePage,HomeLoginPage,Clothing,Edit,Furniture,Login,Mobile,Post,RealEstate,Register,View