import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { NgSvgIconService } from 'ng-svg-icon';
import { Subject } from 'rxjs/Subject';
import "rxjs/add/operator/debounceTime";
import 'rxjs/add/operator/distinctUntilChanged';
import "rxjs/add/operator/do";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  iconNames: string[];
  color = "red";
  size = "50";
  viewBox = "0 0 24 24";

  searchTerm$ = new Subject<string>();
  iconsToShow: string[];

  constructor(private ngSvgIconService: NgSvgIconService,
    private toastCtrl: ToastController) {
    this.iconNames = Object.keys(ngSvgIconService.getShapes());
    this.iconsToShow = this.iconNames;
    this.searchTerm$.debounceTime(400)
      .distinctUntilChanged()
      .do(res => {
        this.iconsToShow = this.iconNames;
      })
      .filter(res => !!res)
      .map(res => res.toLowerCase())
      .subscribe(term => {
        this.iconsToShow = this.iconsToShow.filter(iconName => {
          return (iconName.toLowerCase().indexOf(term.toLowerCase()) !== -1);
        });
      });
  }

  copySuccess() {
    this.toastCtrl.create({
      message: "Coppied",
      duration: 1000
    }).present();
  }

  onRuleFilter(event) {
    this.searchTerm$.next(event.target.value);
  }
}
