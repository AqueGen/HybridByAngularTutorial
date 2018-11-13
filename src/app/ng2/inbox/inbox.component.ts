import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  public messages = [
    {name: 't1', body: ' t1 body'},
    {name: 't2', body: ' t2 body'},
    {name: 't3', body: ' t3 body'},
    {name: 't4', body: ' t4 body'},
    {name: 't5', body: ' t5 body'},
    {name: 't6', body: ' t6 body'},
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
