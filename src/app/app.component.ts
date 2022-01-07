import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Uye } from './models/uye';
import { FbservisService } from './services/fbservis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emlakportali1';
  adsoyad: string;
  uid: string;
  secKayit: Uye = new Uye();
  
  constructor(
    public fbServis: FbservisService,
    public router: Router
  ){}
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.adsoyad = user.displayName;
    this.uid = user.uid;
    console.log(this.adsoyad);
  }
  OturumKapat() {
    this.fbServis.OturumKapat().then(d => {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    });

  }
}
