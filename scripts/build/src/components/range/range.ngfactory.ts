/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './range';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/security';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/common/src/directives/ng_if';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '../../util/form';
import * as import14 from '../item/item';
import * as import15 from '@angular/forms/src/directives/control_value_accessor';
import * as import16 from '@angular/core/src/linker/query_list';
import * as import17 from '@angular/common/src/directives/ng_for';
import * as import18 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import19 from '@angular/core/src/linker/element_ref';
var renderType_RangeKnob_Host:import0.RenderComponentType = null;
class _View_RangeKnob_Host0 extends import1.AppView<any> {
  _el_0:any;
  private _appEl_0:import2.AppElement;
  _RangeKnob_0_4:import3.RangeKnob;
  private _expr_0:any;
  private _expr_1:any;
  private _expr_2:any;
  private _expr_3:any;
  private _expr_4:any;
  private _expr_5:any;
  private _expr_6:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_RangeKnob_Host0,renderType_RangeKnob_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('div',rootSelector,null);
    this.renderer.setElementAttribute(this._el_0,'class','range-knob-handle');
    this.renderer.setElementAttribute(this._el_0,'role','slider');
    this.renderer.setElementAttribute(this._el_0,'tabindex','0');
    this._appEl_0 = new import2.AppElement(0,null,this,this._el_0);
    var compView_0:any = viewFactory_RangeKnob0(this.viewUtils,this.injector(0),this._appEl_0);
    this._RangeKnob_0_4 = new import3.RangeKnob(this.parentInjector.get(import3.Range));
    this._appEl_0.initComponent(this._RangeKnob_0_4,[],compView_0);
    compView_0.create(this._RangeKnob_0_4,this.projectableNodes,null);
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.RangeKnob) && (0 === requestNodeIndex))) { return this._RangeKnob_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._RangeKnob_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this._RangeKnob_0_4.pressed;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementClass(this._el_0,'range-knob-pressed',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = (this._RangeKnob_0_4._val === this._RangeKnob_0_4.range.min);
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_0,'range-knob-min',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = (this._RangeKnob_0_4._val === this._RangeKnob_0_4.range.max);
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_0,'range-knob-max',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this._RangeKnob_0_4._x;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementStyle(this._el_0,'left',((this.viewUtils.sanitizer.sanitize(import8.SecurityContext.STYLE,currVal_3) == null)? null: this.viewUtils.sanitizer.sanitize(import8.SecurityContext.STYLE,currVal_3).toString()));
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this._RangeKnob_0_4._val;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementAttribute(this._el_0,'aria-valuenow',((currVal_4 == null)? null: currVal_4.toString()));
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this._RangeKnob_0_4.range.min;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementAttribute(this._el_0,'aria-valuemin',((currVal_5 == null)? null: currVal_5.toString()));
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._RangeKnob_0_4.range.max;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementAttribute(this._el_0,'aria-valuemax',((currVal_6 == null)? null: currVal_6.toString()));
      this._expr_6 = currVal_6;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_RangeKnob_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_RangeKnob_Host === null)) { (renderType_RangeKnob_Host = viewUtils.createRenderComponentType('',0,null,[],{})); }
  return new _View_RangeKnob_Host0(viewUtils,parentInjector,declarationEl);
}
export const RangeKnobNgFactory:import9.ComponentFactory<import3.RangeKnob> = new import9.ComponentFactory<import3.RangeKnob>('.range-knob-handle',viewFactory_RangeKnob_Host0,import3.RangeKnob);
const styles_RangeKnob:any[] = [];
var renderType_RangeKnob:import0.RenderComponentType = null;
class _View_RangeKnob0 extends import1.AppView<import3.RangeKnob> {
  _anchor_0:any;
  private _appEl_0:import2.AppElement;
  _TemplateRef_0_5:any;
  _NgIf_0_6:import10.NgIf;
  _el_1:any;
  private _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_RangeKnob0,renderType_RangeKnob,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode,null);
    this._appEl_0 = new import2.AppElement(0,null,this,this._anchor_0);
    this._TemplateRef_0_5 = new import11.TemplateRef_(this._appEl_0,viewFactory_RangeKnob1);
    this._NgIf_0_6 = new import10.NgIf(this._appEl_0.vcRef,this._TemplateRef_0_5);
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',null);
    this.renderer.setElementAttribute(this._el_1,'class','range-knob');
    this._expr_0 = import7.UNINITIALIZED;
    this.init([],[
      this._anchor_0,
      this._el_1
    ]
    ,[],[]);
    return null;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import10.NgIf) && (0 === requestNodeIndex))) { return this._NgIf_0_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.range.pin;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgIf_0_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_RangeKnob0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.RangeKnob> {
  if ((renderType_RangeKnob === null)) { (renderType_RangeKnob = viewUtils.createRenderComponentType('/Users/dan/Dev/ionic2-build/src/components/range/range.ts class RangeKnob - inline template',0,import12.ViewEncapsulation.None,styles_RangeKnob,{})); }
  return new _View_RangeKnob0(viewUtils,parentInjector,declarationEl);
}
class _View_RangeKnob1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  private _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_RangeKnob1,renderType_RangeKnob,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement(null,'div',null);
    this.renderer.setElementAttribute(this._el_0,'class','range-pin');
    this._text_1 = this.renderer.createText(this._el_0,'',null);
    this._expr_0 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return null;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',this.parent.context._val,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_1,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_RangeKnob1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_RangeKnob1(viewUtils,parentInjector,declarationEl);
}
var renderType_Range_Host:import0.RenderComponentType = null;
class _View_Range_Host0 extends import1.AppView<any> {
  _el_0:any;
  private _appEl_0:import2.AppElement;
  _Range_0_4:import3.Range;
  __NG_VALUE_ACCESSOR_0_5:any[];
  private _expr_0:any;
  private _expr_1:any;
  private _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Range_Host0,renderType_Range_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  get _NG_VALUE_ACCESSOR_0_5():any[] {
    if ((this.__NG_VALUE_ACCESSOR_0_5 == null)) { (this.__NG_VALUE_ACCESSOR_0_5 = [this._Range_0_4]); }
    return this.__NG_VALUE_ACCESSOR_0_5;
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ion-range',rootSelector,null);
    this._appEl_0 = new import2.AppElement(0,null,this,this._el_0);
    var compView_0:any = viewFactory_Range0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Range_0_4 = new import3.Range(this.parentInjector.get(import13.Form),this.parentInjector.get(import14.Item,null),this.renderer);
    this._appEl_0.initComponent(this._Range_0_4,[],compView_0);
    compView_0.create(this._Range_0_4,this.projectableNodes,null);
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.Range) && (0 === requestNodeIndex))) { return this._Range_0_4; }
    if (((token === import15.NG_VALUE_ACCESSOR) && (0 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_0_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this._Range_0_4._disabled;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementClass(this._el_0,'range-disabled',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Range_0_4._pressed;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_0,'range-pressed',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Range_0_4._pin;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_0,'range-has-pin',currVal_2);
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Range_0_4.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Range_0_4.ngOnDestroy();
  }
}
function viewFactory_Range_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_Range_Host === null)) { (renderType_Range_Host = viewUtils.createRenderComponentType('',0,null,[],{})); }
  return new _View_Range_Host0(viewUtils,parentInjector,declarationEl);
}
export const RangeNgFactory:import9.ComponentFactory<import3.Range> = new import9.ComponentFactory<import3.Range>('ion-range',viewFactory_Range_Host0,import3.Range);
const styles_Range:any[] = [];
var renderType_Range:import0.RenderComponentType = null;
class _View_Range0 extends import1.AppView<import3.Range> {
  _viewQuery_bar_0:import16.QueryList<any>;
  _viewQuery_slider_1:import16.QueryList<any>;
  _viewQuery_RangeKnob_2:import16.QueryList<any>;
  _el_0:any;
  _anchor_1:any;
  private _appEl_1:import2.AppElement;
  _TemplateRef_1_5:any;
  _NgFor_1_6:import17.NgFor;
  _el_2:any;
  _el_3:any;
  _el_4:any;
  private _appEl_4:import2.AppElement;
  _RangeKnob_4_4:import3.RangeKnob;
  _anchor_5:any;
  private _appEl_5:import2.AppElement;
  _TemplateRef_5_5:any;
  _NgIf_5_6:import10.NgIf;
  private _expr_0:any;
  private _expr_1:any;
  private _expr_2:any;
  private _expr_3:any;
  private _expr_4:any;
  private _expr_5:any;
  private _expr_6:any;
  private _expr_7:any;
  private _expr_8:any;
  private _expr_9:any;
  private _expr_10:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Range0,renderType_Range,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._viewQuery_bar_0 = new import16.QueryList<any>();
    this._viewQuery_slider_1 = new import16.QueryList<any>();
    this._viewQuery_RangeKnob_2 = new import16.QueryList<any>();
    this.renderer.projectNodes(parentRenderNode,import4.flattenNestedViewRenderNodes(this.projectableNodes[0]));
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',null);
    this.renderer.setElementAttribute(this._el_0,'class','range-slider');
    this._anchor_1 = this.renderer.createTemplateAnchor(this._el_0,null);
    this._appEl_1 = new import2.AppElement(1,0,this,this._anchor_1);
    this._TemplateRef_1_5 = new import11.TemplateRef_(this._appEl_1,viewFactory_Range1);
    this._NgFor_1_6 = new import17.NgFor(this._appEl_1.vcRef,this._TemplateRef_1_5,this.parentInjector.get(import18.IterableDiffers),this.ref);
    this._el_2 = this.renderer.createElement(this._el_0,'div',null);
    this.renderer.setElementAttribute(this._el_2,'class','range-bar');
    this._el_3 = this.renderer.createElement(this._el_0,'div',null);
    this.renderer.setElementAttribute(this._el_3,'class','range-bar range-bar-active');
    this._el_4 = this.renderer.createElement(this._el_0,'div',null);
    this.renderer.setElementAttribute(this._el_4,'class','range-knob-handle');
    this.renderer.setElementAttribute(this._el_4,'role','slider');
    this.renderer.setElementAttribute(this._el_4,'tabindex','0');
    this._appEl_4 = new import2.AppElement(4,0,this,this._el_4);
    var compView_4:any = viewFactory_RangeKnob0(this.viewUtils,this.injector(4),this._appEl_4);
    this._RangeKnob_4_4 = new import3.RangeKnob(this.parentInjector.get(import3.Range));
    this._appEl_4.initComponent(this._RangeKnob_4_4,[],compView_4);
    compView_4.create(this._RangeKnob_4_4,[],null);
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_0,null);
    this._appEl_5 = new import2.AppElement(5,0,this,this._anchor_5);
    this._TemplateRef_5_5 = new import11.TemplateRef_(this._appEl_5,viewFactory_Range2);
    this._NgIf_5_6 = new import10.NgIf(this._appEl_5.vcRef,this._TemplateRef_5_5);
    this.renderer.projectNodes(parentRenderNode,import4.flattenNestedViewRenderNodes(this.projectableNodes[1]));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    this._expr_10 = import7.UNINITIALIZED;
    this._viewQuery_bar_0.reset([new import19.ElementRef(this._el_3)]);
    this.context._bar = this._viewQuery_bar_0.first;
    this._viewQuery_slider_1.reset([new import19.ElementRef(this._el_0)]);
    this.context._slider = this._viewQuery_slider_1.first;
    this.init([],[
      this._el_0,
      this._anchor_1,
      this._el_2,
      this._el_3,
      this._el_4,
      this._anchor_5
    ]
    ,[],[]);
    return null;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import17.NgFor) && (1 === requestNodeIndex))) { return this._NgFor_1_6; }
    if (((token === import3.RangeKnob) && (4 === requestNodeIndex))) { return this._RangeKnob_4_4; }
    if (((token === import11.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import10.NgIf) && (5 === requestNodeIndex))) { return this._NgIf_5_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = null;
    changes = null;
    const currVal_0:any = this.context._ticks;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgFor_1_6.ngForOf = currVal_0;
      if ((changes === null)) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_0,currVal_0);
      this._expr_0 = currVal_0;
    }
    if ((changes !== null)) { this._NgFor_1_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_1_6.ngDoCheck(); }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._RangeKnob_4_4.ngOnInit(); }
    const currVal_10:any = this.context._dual;
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this._NgIf_5_6.ngIf = currVal_10;
      this._expr_10 = currVal_10;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this.context._barL;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementStyle(this._el_3,'left',((this.viewUtils.sanitizer.sanitize(import8.SecurityContext.STYLE,currVal_1) == null)? null: this.viewUtils.sanitizer.sanitize(import8.SecurityContext.STYLE,currVal_1).toString()));
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.context._barR;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementStyle(this._el_3,'right',((this.viewUtils.sanitizer.sanitize(import8.SecurityContext.STYLE,currVal_2) == null)? null: this.viewUtils.sanitizer.sanitize(import8.SecurityContext.STYLE,currVal_2).toString()));
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this._RangeKnob_4_4.pressed;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_4,'range-knob-pressed',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = (this._RangeKnob_4_4._val === this._RangeKnob_4_4.range.min);
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementClass(this._el_4,'range-knob-min',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = (this._RangeKnob_4_4._val === this._RangeKnob_4_4.range.max);
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_4,'range-knob-max',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._RangeKnob_4_4._x;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementStyle(this._el_4,'left',((this.viewUtils.sanitizer.sanitize(import8.SecurityContext.STYLE,currVal_6) == null)? null: this.viewUtils.sanitizer.sanitize(import8.SecurityContext.STYLE,currVal_6).toString()));
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._RangeKnob_4_4._val;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementAttribute(this._el_4,'aria-valuenow',((currVal_7 == null)? null: currVal_7.toString()));
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._RangeKnob_4_4.range.min;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementAttribute(this._el_4,'aria-valuemin',((currVal_8 == null)? null: currVal_8.toString()));
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this._RangeKnob_4_4.range.max;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementAttribute(this._el_4,'aria-valuemax',((currVal_9 == null)? null: currVal_9.toString()));
      this._expr_9 = currVal_9;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if (this._viewQuery_RangeKnob_2.dirty) {
      this._viewQuery_RangeKnob_2.reset([
        this._RangeKnob_4_4,
        this._appEl_5.mapNestedViews(_View_Range2,(nestedView:_View_Range2):any => {
          return [nestedView._RangeKnob_0_4];
        })
      ]
      );
      this.context._knobs = this._viewQuery_RangeKnob_2;
      this._viewQuery_RangeKnob_2.notifyOnChanges();
    } }
  }
}
export function viewFactory_Range0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.Range> {
  if ((renderType_Range === null)) { (renderType_Range = viewUtils.createRenderComponentType('/Users/dan/Dev/ionic2-build/src/components/range/range.ts class Range - inline template',2,import12.ViewEncapsulation.None,styles_Range,{})); }
  return new _View_Range0(viewUtils,parentInjector,declarationEl);
}
class _View_Range1 extends import1.AppView<any> {
  _el_0:any;
  private _expr_0:any;
  private _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Range1,renderType_Range,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement(null,'div',null);
    this.renderer.setElementAttribute(this._el_0,'class','range-tick');
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return null;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this.context.$implicit.left;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementStyle(this._el_0,'left',((this.viewUtils.sanitizer.sanitize(import8.SecurityContext.STYLE,currVal_0) == null)? null: this.viewUtils.sanitizer.sanitize(import8.SecurityContext.STYLE,currVal_0).toString()));
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this.context.$implicit.active;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_0,'range-tick-active',currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_Range1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_Range1(viewUtils,parentInjector,declarationEl);
}
class _View_Range2 extends import1.AppView<any> {
  _el_0:any;
  private _appEl_0:import2.AppElement;
  _RangeKnob_0_4:import3.RangeKnob;
  private _expr_0:any;
  private _expr_1:any;
  private _expr_2:any;
  private _expr_3:any;
  private _expr_4:any;
  private _expr_5:any;
  private _expr_6:any;
  private _expr_7:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Range2,renderType_Range,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement(null,'div',null);
    this.renderer.setElementAttribute(this._el_0,'class','range-knob-handle');
    this.renderer.setElementAttribute(this._el_0,'role','slider');
    this.renderer.setElementAttribute(this._el_0,'tabindex','0');
    this._appEl_0 = new import2.AppElement(0,null,this,this._el_0);
    var compView_0:any = viewFactory_RangeKnob0(this.viewUtils,this.injector(0),this._appEl_0);
    this._RangeKnob_0_4 = new import3.RangeKnob(this.parent.parentInjector.get(import3.Range));
    this._appEl_0.initComponent(this._RangeKnob_0_4,[],compView_0);
    compView_0.create(this._RangeKnob_0_4,[],null);
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return null;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.RangeKnob) && (0 === requestNodeIndex))) { return this._RangeKnob_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = true;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._RangeKnob_0_4.upper = currVal_0;
      this._expr_0 = currVal_0;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._RangeKnob_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this._RangeKnob_0_4.pressed;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_0,'range-knob-pressed',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = (this._RangeKnob_0_4._val === this._RangeKnob_0_4.range.min);
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_0,'range-knob-min',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = (this._RangeKnob_0_4._val === this._RangeKnob_0_4.range.max);
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_0,'range-knob-max',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this._RangeKnob_0_4._x;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementStyle(this._el_0,'left',((this.viewUtils.sanitizer.sanitize(import8.SecurityContext.STYLE,currVal_4) == null)? null: this.viewUtils.sanitizer.sanitize(import8.SecurityContext.STYLE,currVal_4).toString()));
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this._RangeKnob_0_4._val;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementAttribute(this._el_0,'aria-valuenow',((currVal_5 == null)? null: currVal_5.toString()));
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._RangeKnob_0_4.range.min;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementAttribute(this._el_0,'aria-valuemin',((currVal_6 == null)? null: currVal_6.toString()));
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._RangeKnob_0_4.range.max;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementAttribute(this._el_0,'aria-valuemax',((currVal_7 == null)? null: currVal_7.toString()));
      this._expr_7 = currVal_7;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  dirtyParentQueriesInternal():void {
    (<_View_Range0>this.parent)._viewQuery_RangeKnob_2.setDirty();
  }
}
function viewFactory_Range2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_Range2(viewUtils,parentInjector,declarationEl);
}