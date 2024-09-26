import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ImpressionComponent} from "./pages/impression/impression.component";
import {ImageComponent} from "./pages/impression/image/image.component";
import {GrandFormatComponent} from "./pages/impression/grand-format/grand-format.component";
import {PetitFormatComponent} from "./pages/impression/petit-format/petit-format.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'impression', component: ImpressionComponent , children:[
    {path: 'image',component:ImageComponent},
      {path:'grandFormat', component:GrandFormatComponent},
      {path:'petitFormat', component:PetitFormatComponent},
    ]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
