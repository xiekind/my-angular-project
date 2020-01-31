import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Informations } from '../informations';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})

export class RegisteredComponent implements OnInit {
  public showRegistration : boolean = false;
  public showRegistered : boolean = true;
  public decryptedPassword: string;

  public disable : boolean = false;

  @Input() informations:  Informations[] = [];
  @Output() editEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  onEdit(info){
    this.editEvent.emit(info);
  }

  onDelete(info){
  
  }

}

