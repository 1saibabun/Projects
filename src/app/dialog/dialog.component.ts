import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  @Input() title;
  @Input() content;

  public isDisabled:true;
  ngOnInit() {
  }

}
