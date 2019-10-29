import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent} from '../app/dialog/dialog.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  closeResult: string;
  modalOptions: NgbModalOptions;
  isLoading: any;
  constructor(
    private modalService: NgbModal
  ) {
    // this.modalOptions = {     
    // }
  }
  ngOnInit() {
    this.isLoading = false;

  }
  open() {
    this.isLoading = true;
    const modalRef = this.modalService.open(DialogComponent,
      { backdrop: 'static', keyboard: false });


    modalRef.componentInstance.title = 'Dialog';
    modalRef.componentInstance.content = 'Do you want to .....';
  }
}