import { Component, OnInit, ViewEncapsulation,ElementRef,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Observable, fromEvent,Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title = 'assg2';
  currentvalue = "";
  
selectedImages = "";



  getVal(val){
    console.warn(val)
    this.currentvalue = val
  }

  onSelectImages(Images_id: any) {
    this.selectedImages = Images_id;
    }
  
  getImages() {
    return [
      {"name": "Daisi", "value": "https://bigvu-interviews-assets.s3.amazonaws.com/images/Daisi.png"},
      {"name": "Shiri", "value": "https://bigvu-interviews-assets.s3.amazonaws.com/images/Shiri.png"},
      {"name": "Sarha", "value": "https://bigvu-interviews-assets.s3.amazonaws.com/images/Sarha.png"},
      {"name": "Rivka", "value": "https://bigvu-interviews-assets.s3.amazonaws.com/images/Rivka.png"},
      {"name": "Noa", "value": "https://bigvu-interviews-assets.s3.amazonaws.com/images/Noa.png"},
      {"name": "Erika", "value": "https://bigvu-interviews-assets.s3.amazonaws.com/images/Erika.png"},
      {"name": "Eli", "value": "https://bigvu-interviews-assets.s3.amazonaws.com/images/Eli.png"}
  ];
    }
/*
    constructor(private name: ElementRef) {
    }

    @ViewChild('name') name : ElementRef;
    search = '';

    ngOnInit(){
      this.debounce(this.name.nativeElement, 'keyup').subscribe(val => {
        this.search = val;
      });
    }
  
    debounce(element, event, time = 500) {
      const eventObserver = fromEvent(this.name.nativeElement, 'keyup').pipe(
        map((i: any) => i.currentTarget.value)
      );
      return eventObserver.pipe(debounceTime(500));
    }
*/
    }

  
