import { Component, ElementRef, Renderer, ViewEncapsulation } from '@angular/core';

import { Animation } from '../../animations/animation';
import { Config } from '../../config/config';
import { isDefined, isUndefined } from '../../util/util';
import { NavParams } from '../../navigation/nav-params';
import { Transition } from '../../transitions/transition';
import { ViewController } from '../../navigation/view-controller';


/**
* @private
*/
@Component({
  selector: 'ion-loading',
  template:
    '<ion-backdrop [class.hide-backdrop]="!d.showBackdrop"></ion-backdrop>' +
    '<div class="loading-wrapper">' +
      '<div *ngIf="showSpinner" class="loading-spinner">' +
        '<ion-spinner [name]="d.spinner"></ion-spinner>' +
      '</div>' +
      '<div *ngIf="d.content" [innerHTML]="d.content" class="loading-content"></div>' +
    '</div>',
  host: {
    'role': 'dialog'
  },
  encapsulation: ViewEncapsulation.None,
})
export class LoadingCmp {
  d: {
    spinner?: string;
    content?: string;
    cssClass?: string;
    showBackdrop?: boolean;
    dismissOnPageChange?: boolean;
    delay?: number;
    duration?: number;
  };
  id: number;
  showSpinner: boolean;
  durationTimeout: number;

  constructor(
    private _viewCtrl: ViewController,
    private _config: Config,
    private _elementRef: ElementRef,
    params: NavParams,
    renderer: Renderer
  ) {
    this.d = params.data;

    if (this.d.cssClass) {
      this.d.cssClass.split(' ').forEach(cssClass => {
        // Make sure the class isn't whitespace, otherwise it throws exceptions
        if (cssClass.trim() !== '') renderer.setElementClass(_elementRef.nativeElement, cssClass, true);
      });
    }

    this.id = (++loadingIds);
  }

  ngOnInit() {
    // If no spinner was passed in loading options we need to fall back
    // to the loadingSpinner in the app's config, then the mode spinner
    if (isUndefined(this.d.spinner)) {
      this.d.spinner = this._config.get('loadingSpinner', this._config.get('spinner', 'ios'));
    }

    // If the user passed hide to the spinner we don't want to show it
    this.showSpinner = isDefined(this.d.spinner) && this.d.spinner !== 'hide';
  }

  ionViewDidEnter() {
    let activeElement: any = document.activeElement;
    if (document.activeElement) {
      activeElement.blur();
    }

    // If there is a duration, dismiss after that amount of time
    if ( this.d && this.d.duration ) {
      this.durationTimeout = (<any> setTimeout( () => {
        this.dismiss('backdrop');
      }, this.d.duration));
    }

  }

  dismiss(role: any): Promise<any> {
    if (this.durationTimeout) {
      clearTimeout(this.durationTimeout);
    }
    return this._viewCtrl.dismiss(null, role);
  }
}


/**
 * Animations for loading
 */
 class LoadingPopIn extends Transition {
   init() {
     let ele = this.enteringView.pageRef().nativeElement;
     let backdrop = new Animation(ele.querySelector('ion-backdrop'));
     let wrapper = new Animation(ele.querySelector('.loading-wrapper'));

     wrapper.fromTo('opacity', 0.01, 1).fromTo('scale', 1.1, 1);
     backdrop.fromTo('opacity', 0.01, 0.3);

     this
       .easing('ease-in-out')
       .duration(200)
       .add(backdrop)
       .add(wrapper);
   }
 }
 Transition.register('loading-pop-in', LoadingPopIn);


 class LoadingPopOut extends Transition {
   init() {
     let ele = this.leavingView.pageRef().nativeElement;
     let backdrop = new Animation(ele.querySelector('ion-backdrop'));
     let wrapper = new Animation(ele.querySelector('.loading-wrapper'));

     wrapper.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);
     backdrop.fromTo('opacity', 0.3, 0);

     this
       .easing('ease-in-out')
       .duration(200)
       .add(backdrop)
       .add(wrapper);
   }
 }
 Transition.register('loading-pop-out', LoadingPopOut);


 class LoadingMdPopIn extends Transition {
   init() {
     let ele = this.enteringView.pageRef().nativeElement;
     let backdrop = new Animation(ele.querySelector('ion-backdrop'));
     let wrapper = new Animation(ele.querySelector('.loading-wrapper'));

     wrapper.fromTo('opacity', 0.01, 1).fromTo('scale', 1.1, 1);
     backdrop.fromTo('opacity', 0.01, 0.5);

     this
       .easing('ease-in-out')
       .duration(200)
       .add(backdrop)
       .add(wrapper);
   }
 }
 Transition.register('loading-md-pop-in', LoadingMdPopIn);


 class LoadingMdPopOut extends Transition {
   init() {
     let ele = this.leavingView.pageRef().nativeElement;
     let backdrop = new Animation(ele.querySelector('ion-backdrop'));
     let wrapper = new Animation(ele.querySelector('.loading-wrapper'));

     wrapper.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);
     backdrop.fromTo('opacity', 0.5, 0);

     this
       .easing('ease-in-out')
       .duration(200)
       .add(backdrop)
       .add(wrapper);
   }
 }
 Transition.register('loading-md-pop-out', LoadingMdPopOut);


 class LoadingWpPopIn extends Transition {
   init() {
     let ele = this.enteringView.pageRef().nativeElement;
     let backdrop = new Animation(ele.querySelector('ion-backdrop'));
     let wrapper = new Animation(ele.querySelector('.loading-wrapper'));

     wrapper.fromTo('opacity', 0.01, 1).fromTo('scale', 1.3, 1);
     backdrop.fromTo('opacity', 0.01, 0.16);

     this
       .easing('cubic-bezier(0,0 0.05,1)')
       .duration(200)
       .add(backdrop)
       .add(wrapper);
   }
 }
 Transition.register('loading-wp-pop-in', LoadingWpPopIn);


 class LoadingWpPopOut extends Transition {
   init() {
     let ele = this.leavingView.pageRef().nativeElement;
     let backdrop = new Animation(ele.querySelector('ion-backdrop'));
     let wrapper = new Animation(ele.querySelector('.loading-wrapper'));

     wrapper.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 1.3);
     backdrop.fromTo('opacity', 0.16, 0);

     this
       .easing('ease-out')
       .duration(150)
       .add(backdrop)
       .add(wrapper);
   }
 }
 Transition.register('loading-wp-pop-out', LoadingWpPopOut);

let loadingIds = -1;
