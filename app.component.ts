import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formularz';
  wpisanyText='';
  rozmiarTekstu=10;
  stylCzcionki='Arial';
  color='black'
  czyPogrubione=false
  zatwierdzonyTekst=""
  widoczny=false
  styl:any={}

 czcionki: string[] = ["Arial", "Courier New","Times New Roman"];

  zatwierdz(){
this.zatwierdzonyTekst=this.wpisanyText
this.widoczny=true
this.styl={
  'font-size':this.rozmiarTekstu+'px',
  'font-family':this.stylCzcionki,
  'color':this.color,
  'font-weight' : this.czyPogrubione? 'bold':'normal'
 
}
}
  
  reset(){
  this.wpisanyText='';
  this.rozmiarTekstu=10;
  this.stylCzcionki='Arial';
  this.color='black'
  this.czyPogrubione=false
  this.zatwierdzonyTekst=""
  this.widoczny=true
  }
}
