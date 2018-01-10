import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  baseConverter;
  ngOnInit(){
    this.baseConverter = new FormGroup({
      decimal: new FormControl(),
      binary: new FormControl(),
      octal: new FormControl(),
      hexa: new FormControl()
  });
  }

  decimalChanged = function(oldValue, newValue){
    if(newValue != ""){
      this.baseConverter.patchValue({binary: parseInt(newValue, 10).toString(2)});
      this.baseConverter.patchValue({octal: parseInt(newValue, 10).toString(8)});
      this.baseConverter.patchValue({hexa: parseInt(newValue, 10).toString(16).toUpperCase()});
    }else{
      this.baseConverter.patchValue({binary: ""});
      this.baseConverter.patchValue({octal: ""});
      this.baseConverter.patchValue({hexa: ""});

    }

  }
b=0;
o=0;
h=0;

  binaryChanged = function(oldValue, newValue){
    this.b = this.b + 1;
    if(this.b == 1){
      if(newValue != ""){
        this.baseConverter.patchValue({decimal: parseInt(newValue, 2).toString(10)});
      }else{
        this.baseConverter.patchValue({decimal: ""});
      }
      this.b = 0;
    }
  }

  octalChanged = function(oldValue, newValue){
    this.o = this.o + 1;
    if(this.o == 1){
      if(newValue != ""){
        this.baseConverter.patchValue({decimal: parseInt(newValue, 8).toString(10)});
      }else{
        this.baseConverter.patchValue({decimal: ""});
      }
      this.o = 0;
    }
  }

  hexaChanged = function(oldValue, newValue){
    this.h = this.h + 1;
    if(this.h == 1){
      if(newValue != ""){
        this.baseConverter.patchValue({decimal: parseInt(newValue, 16).toString(10)});
      }else{
        this.baseConverter.patchValue({decimal: ""});
      }
      this.h = 0;
    }
  }
}
