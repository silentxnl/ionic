/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './toast-component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../navigation/view-controller';
import * as import9 from '../../config/config';
import * as import10 from '@angular/core/src/linker/element_ref';
import * as import11 from '../../navigation/nav-params';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '@angular/common/src/directives/ng_if';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/metadata/view';
import * as import16 from '../button/button';
import * as import17 from '../button/button.ngfactory';
var renderType_ToastCmp_Host:import0.RenderComponentType = null;
class _View_ToastCmp_Host0 extends import1.AppView<any> {
  _el_0:any;
  private _appEl_0:import2.AppElement;
  _ToastCmp_0_4:import3.ToastCmp;
  private _expr_0:any;
  private _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ToastCmp_Host0,renderType_ToastCmp_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ion-toast',rootSelector,null);
    this.renderer.setElementAttribute(this._el_0,'role','dialog');
    this._appEl_0 = new import2.AppElement(0,null,this,this._el_0);
    var compView_0:any = viewFactory_ToastCmp0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ToastCmp_0_4 = new import3.ToastCmp(this.parentInjector.get(import8.ViewController),this.parentInjector.get(import9.Config),new import10.ElementRef(this._el_0),this.parentInjector.get(import11.NavParams),this.renderer);
    this._appEl_0.initComponent(this._ToastCmp_0_4,[],compView_0);
    compView_0.create(this._ToastCmp_0_4,this.projectableNodes,null);
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.ToastCmp) && (0 === requestNodeIndex))) { return this._ToastCmp_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this._ToastCmp_0_4.hdrId;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementAttribute(this._el_0,'aria-labelledby',((currVal_0 == null)? null: currVal_0.toString()));
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._ToastCmp_0_4.descId;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementAttribute(this._el_0,'aria-describedby',((currVal_1 == null)? null: currVal_1.toString()));
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._ToastCmp_0_4.ngAfterViewInit(); } }
  }
}
function viewFactory_ToastCmp_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_ToastCmp_Host === null)) { (renderType_ToastCmp_Host = viewUtils.createRenderComponentType('',0,null,[],{})); }
  return new _View_ToastCmp_Host0(viewUtils,parentInjector,declarationEl);
}
export const ToastCmpNgFactory:import12.ComponentFactory<import3.ToastCmp> = new import12.ComponentFactory<import3.ToastCmp>('ion-toast',viewFactory_ToastCmp_Host0,import3.ToastCmp);
const styles_ToastCmp:any[] = [];
var renderType_ToastCmp:import0.RenderComponentType = null;
class _View_ToastCmp0 extends import1.AppView<import3.ToastCmp> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _anchor_4:any;
  private _appEl_4:import2.AppElement;
  _TemplateRef_4_5:any;
  _NgIf_4_6:import13.NgIf;
  _text_5:any;
  _anchor_6:any;
  private _appEl_6:import2.AppElement;
  _TemplateRef_6_5:any;
  _NgIf_6_6:import13.NgIf;
  _text_7:any;
  _text_8:any;
  private _expr_0:any;
  private _expr_1:any;
  private _expr_2:any;
  private _expr_3:any;
  private _expr_4:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ToastCmp0,renderType_ToastCmp,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',null);
    this.renderer.setElementAttribute(this._el_0,'class','toast-wrapper');
    this._text_1 = this.renderer.createText(this._el_0,' ',null);
    this._el_2 = this.renderer.createElement(this._el_0,'div',null);
    this.renderer.setElementAttribute(this._el_2,'class','toast-container');
    this._text_3 = this.renderer.createText(this._el_2,' ',null);
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2,null);
    this._appEl_4 = new import2.AppElement(4,2,this,this._anchor_4);
    this._TemplateRef_4_5 = new import14.TemplateRef_(this._appEl_4,viewFactory_ToastCmp1);
    this._NgIf_4_6 = new import13.NgIf(this._appEl_4.vcRef,this._TemplateRef_4_5);
    this._text_5 = this.renderer.createText(this._el_2,' ',null);
    this._anchor_6 = this.renderer.createTemplateAnchor(this._el_2,null);
    this._appEl_6 = new import2.AppElement(6,2,this,this._anchor_6);
    this._TemplateRef_6_5 = new import14.TemplateRef_(this._appEl_6,viewFactory_ToastCmp2);
    this._NgIf_6_6 = new import13.NgIf(this._appEl_6.vcRef,this._TemplateRef_6_5);
    this._text_7 = this.renderer.createText(this._el_2,' ',null);
    this._text_8 = this.renderer.createText(this._el_0,' ',null);
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._anchor_4,
      this._text_5,
      this._anchor_6,
      this._text_7,
      this._text_8
    ]
    ,[],[]);
    return null;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import13.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6; }
    if (((token === import14.TemplateRef) && (6 === requestNodeIndex))) { return this._TemplateRef_6_5; }
    if (((token === import13.NgIf) && (6 === requestNodeIndex))) { return this._NgIf_6_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_3:any = this.context.d.message;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgIf_4_6.ngIf = currVal_3;
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this.context.d.showCloseButton;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgIf_6_6.ngIf = currVal_4;
      this._expr_4 = currVal_4;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = (this.context.d.position === 'bottom');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementClass(this._el_0,'toast-bottom',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = (this.context.d.position === 'middle');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_0,'toast-middle',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = (this.context.d.position === 'top');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_0,'toast-top',currVal_2);
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_ToastCmp0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.ToastCmp> {
  if ((renderType_ToastCmp === null)) { (renderType_ToastCmp = viewUtils.createRenderComponentType('/Users/dan/Dev/ionic2-build/src/components/toast/toast-component.ts class ToastCmp - inline template',0,import15.ViewEncapsulation.None,styles_ToastCmp,{})); }
  return new _View_ToastCmp0(viewUtils,parentInjector,declarationEl);
}
class _View_ToastCmp1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  private _expr_0:any;
  private _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ToastCmp1,renderType_ToastCmp,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement(null,'div',null);
    this.renderer.setElementAttribute(this._el_0,'class','toast-message');
    this._text_1 = this.renderer.createText(this._el_0,'',null);
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return null;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',this.parent.context.hdrId,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_0,'id',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = import4.interpolate(1,'',this.parent.context.d.message,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ToastCmp1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ToastCmp1(viewUtils,parentInjector,declarationEl);
}
class _View_ToastCmp2 extends import1.AppView<any> {
  _el_0:any;
  private _appEl_0:import2.AppElement;
  _Button_0_4:import16.Button;
  _text_1:any;
  private _expr_1:any;
  private _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ToastCmp2,renderType_ToastCmp,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement(null,'button',null);
    this.renderer.setElementAttribute(this._el_0,'class','toast-button');
    this.renderer.setElementAttribute(this._el_0,'clear','');
    this.renderer.setElementAttribute(this._el_0,'ion-button','');
    this._appEl_0 = new import2.AppElement(0,null,this,this._el_0);
    var compView_0:any = import17.viewFactory_Button0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Button_0_4 = new import16.Button('',this.parent.parentInjector.get(import9.Config),new import10.ElementRef(this._el_0),this.renderer);
    this._appEl_0.initComponent(this._Button_0_4,[],compView_0);
    this._text_1 = this.renderer.createText(null,'',null);
    compView_0.create(this._Button_0_4,[[].concat([this._text_1])],null);
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[disposable_0],[]);
    return null;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.Button) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._Button_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changed:boolean = true;
    changed = false;
    const currVal_1:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._Button_0_4.clear = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) { this._appEl_0.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if ((this.numberOfChecks === 0)) { this._Button_0_4.ngAfterContentInit(); }
      this._Button_0_4.ngAfterContentChecked();
    }
    const currVal_2:any = import4.interpolate(1,' ',(this.parent.context.d.closeButtonText || 'Close'),' ');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_1,currVal_2);
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.cbClick()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_ToastCmp2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ToastCmp2(viewUtils,parentInjector,declarationEl);
}