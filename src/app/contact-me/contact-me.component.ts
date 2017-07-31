import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})

export class ContactMeComponent implements OnInit, OnDestroy {

  public contactMeForm: FormGroup;
  public subscription: Subscription[] = [];

  constructor(private _fb: FormBuilder) { }

  ngOnInit():void {
    this.contactMeForm = this._fb.group({
      name: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      subject: ['',Validators.required],
      message: ['',[ Validators.required , Validators.minLength(30)]]
    });
  }

  private clearForm() {
    this.contactMeForm.controls['name'].setValue('');
    this.contactMeForm.controls['email'].setValue('');
    this.contactMeForm.controls['subject'].setValue('');
    this.contactMeForm.controls['message'].setValue('');
  }

  ngOnDestroy(){
    this.subscription.forEach(sub => sub.unsubscribe());
  }

}
