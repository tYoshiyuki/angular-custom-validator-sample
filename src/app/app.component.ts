import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ValidatorService } from "./validator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck, OnInit {
  form!: FormGroup;

  get fieldOne() { return this.form.get('fieldOne') }

  get fieldTwo() { return this.form.get('fieldTwo') }

  constructor(private fb: FormBuilder, private validatorService: ValidatorService) { }

  ngDoCheck(): void {
    // デバッグ用の処理です。
    console.log('ngDoCheck');
    console.log(this.form.errors);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      fieldOne: ['', Validators.required],
      fieldTwo: ['', Validators.required],
    },{
      validators: Validators.compose([
        this.validatorService.GetMatchFieldValidator('fieldOne', 'fieldTwo')
      ]),
    });

    this.form.valueChanges.subscribe(x => {
      // デバッグ用の処理です。
      console.log('form.valueChanges');
      console.log(this.form.errors)
    });
  }
}
