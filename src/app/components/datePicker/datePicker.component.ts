import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datePicker',
  templateUrl: './datePicker.component.html',
  styleUrls: ['./datePicker.component.css'],
})
export class DatePickerComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    (<any>$('#datePicker1.input-group.date')).datepicker({});

    (<any>$('#datePicker2.input-group.date')).datepicker({
      todayBtn: 'linked',
      language: 'tr',
    });

    (<any>$('#datePicker3.input-daterange.input-group')).datepicker({
      todayBtn: 'linked',
      language: 'tr',
      orientation: 'bottom auto',
      autoclose: true,
    });
  }
}
