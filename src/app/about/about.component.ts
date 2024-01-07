import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  concat,
  fromEvent,
  interval,
  noop,
  observable,
  Observable,
  of,
  timer,
  merge,
  Subject,
  BehaviorSubject,
  AsyncSubject,
  ReplaySubject, from
} from 'rxjs';
import {delayWhen, filter, map, take, timeout} from 'rxjs/operators';



@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: true
})
export class AboutComponent implements OnInit {

  constructor(private title: Title){}

    ngOnInit() {
      this.title.setTitle("setting title from the about component");

    }


  run() {



  }


}






