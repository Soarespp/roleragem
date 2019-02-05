import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-detalhe-evento',
  templateUrl: './detalhe-evento.page.html',
  styleUrls: ['./detalhe-evento.page.scss'],
})
export class DetalheEventoPage implements OnInit {
  info = {};

  constructor(private route: ActivatedRoute,
  public router: Router) {
  firebase.database().ref('eventos/'+this.route.snapshot.paramMap.get('key')).on('value', resp => {
    this.info = snapshotToObject(resp);
  });
}

  ngOnInit() {
  }

}
export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;

  return item;
}
