import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kayit } from 'src/app/models/kayit';
import { FbservisService } from 'src/app/services/fbservis.service';
import { Dosya } from '../register/dosya';

@Component({
  selector: 'app-kayitekle',
  templateUrl: './kayitekle.component.html',
  styleUrls: ['./kayitekle.component.scss']
})
export class KayitekleComponent implements OnInit {
  secKayit: Kayit = new Kayit();
  durumlar = [
    'Satılık', 'Kiralık', 'Günlük Kiralık'
  ];
  tipler = [
    'Daire', 'Müstakil', 'Çiftlik', 'Villa'
  ];
  dosyalar: Dosya[];
  files: FileList;

  constructor(
    public fbServis: FbservisService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  Kaydet() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.secKayit.uid = user.uid;
    const tarih = new Date();
    this.secKayit.kayTarih = tarih.getTime().toString();
    this.secKayit.duzTarih = tarih.getTime().toString();
    this.fbServis.KayitEkle(this.secKayit).then(d => {
      this.router.navigate(['/']);
    });

}
}
