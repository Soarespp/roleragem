import { Component, OnInit } from '@angular/core';

import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit-evento',
  templateUrl: './edit-evento.page.html',
  styleUrls: ['./edit-evento.page.scss'],
})
export class EditEventoPage implements OnInit {
  ref = firebase.database().ref('eventos/');
  infoForm: FormGroup;

  constructor(private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) {
      this.infoForm = this.formBuilder.group({
        'info_title' : [null, Validators.required],
        'info_description' : [null, Validators.required]
      });
      this.getInfo(this.route.snapshot.paramMap.get('key'));
    }

  ngOnInit() {
  }

  getInfo(key) {
    firebase.database().ref('eventos/'+key).on('value', resp => {
      let info = snapshotToObject(resp);
      this.infoForm.controls['info_title'].setValue(info.info_title);
      this.infoForm.controls['info_description'].setValue(info.info_description);
    });
  }

  updateInfo() {
    let newInfo = firebase.database().ref('eventos/'+this.route.snapshot.paramMap.get('key')).update(this.infoForm.value);
    this.router.navigate(['']);
  }
}

export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;

  return item;
}
