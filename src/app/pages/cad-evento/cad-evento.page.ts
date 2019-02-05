import { Component, OnInit } from '@angular/core';

import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { transition } from '@angular/core/src/animation/dsl';


@Component({
  selector: 'app-cad-evento',
  templateUrl: './cad-evento.page.html',
  styleUrls: ['./cad-evento.page.scss'],
})
export class CadEventoPage implements OnInit {
  ref = firebase.database().ref('eventos/');
  infoForm: FormGroup;
  photo: string = '';
 
  constructor(private camera: Camera,
    private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) {
      this.infoForm = this.formBuilder.group({
        'info_title' : [null, Validators.required],
        'info_description' : [null, Validators.required]
      });
    }

    takePicture() {
      this.photo = '';
   
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        allowEdit: true,
        targetWidth: 100,
        targetHeight: 100
      }
   
      this.camera.getPicture(options)
        .then((imageData) => {
          let base64image = 'data:image/jpeg;base64,' + imageData;
          this.photo = base64image;
   
        }, (error) => {
          console.error(error);
        })
        .catch((error) => {
          console.error(error);
        })
    }

  ngOnInit() {
  }

  saveInfo() {
    let newInfo = firebase.database().ref('eventos/').push();
    newInfo.set(this.infoForm.value);
    this.router.navigate(['/detalhe-evento/'+newInfo.key]);
  }

}
