/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './AppModule';
import * as import2 from '@angular/common/index';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/http/http';
import * as import6 from '@angular/forms/src/directives';
import * as import7 from '@angular/forms/src/form_providers';
import * as import8 from '../../../../module';
import * as import9 from '../../../app/app';
import * as import10 from '@angular/core/src/application_init';
import * as import11 from '@angular/core/src/testability/testability';
import * as import12 from '@angular/core/src/application_ref';
import * as import13 from '@angular/core/src/linker/compiler';
import * as import14 from '../../../../gestures/gesture-config';
import * as import15 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import16 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import17 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import18 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import19 from '@angular/core/src/linker/view_utils';
import * as import20 from '@angular/core/src/linker/dynamic_component_loader';
import * as import21 from '@angular/http/src/backends/browser_xhr';
import * as import22 from '@angular/http/src/base_response_options';
import * as import23 from '@angular/http/src/backends/xhr_backend';
import * as import24 from '@angular/http/src/base_request_options';
import * as import25 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import26 from '@angular/forms/src/form_builder';
import * as import27 from '../../../../navigation/url-serializer';
import * as import28 from '@angular/common/src/location/hash_location_strategy';
import * as import29 from '@angular/common/src/location/location';
import * as import30 from '../../../action-sheet/action-sheet';
import * as import31 from '../../../alert/alert';
import * as import32 from '../../../../util/form';
import * as import33 from '../../../../util/feature-detect';
import * as import34 from '../../../../gestures/gesture-controller';
import * as import35 from '../../../../util/keyboard';
import * as import36 from '../../../loading/loading';
import * as import37 from '../../../menu/menu-controller';
import * as import38 from '../../../modal/modal';
import * as import39 from '../../../picker/picker';
import * as import40 from '../../../popover/popover';
import * as import41 from '../../../tap-click/tap-click';
import * as import42 from '../../../toast/toast';
import * as import43 from '../../../../translation/translate';
import * as import44 from '../../../../transitions/transition-controller';
import * as import45 from '@angular/core/src/di/injector';
import * as import46 from '../../../action-sheet/action-sheet-component.ngfactory';
import * as import47 from '../../../alert/alert-component.ngfactory';
import * as import48 from '../../../app/app-root.ngfactory';
import * as import49 from '../../../loading/loading-component.ngfactory';
import * as import50 from '../../../modal/modal-component.ngfactory';
import * as import51 from '../../../picker/picker-component.ngfactory';
import * as import52 from '../../../popover/popover-component.ngfactory';
import * as import53 from '../../../toast/toast-component.ngfactory';
import * as import54 from '@angular/core/src/application_tokens';
import * as import55 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import56 from '@angular/platform-browser/src/dom/events/key_events';
import * as import57 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import58 from '@angular/core/src/zone/ng_zone';
import * as import59 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import60 from '@angular/common/src/location/platform_location';
import * as import61 from '@angular/common/src/location/location_strategy';
import * as import62 from '../../../../navigation/deep-linker';
import * as import63 from '../../../../providers';
import * as import64 from '../../../../platform/query-params';
import * as import65 from '../../../../platform/platform';
import * as import66 from '../../../../config/config';
import * as import67 from '../../../../util/events';
import * as import68 from '@angular/core/src/console';
import * as import69 from '@angular/core/src/facade/exception_handler';
import * as import70 from '@angular/core/src/linker/component_resolver';
import * as import71 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import72 from '@angular/platform-browser/src/dom/animation_driver';
import * as import73 from '@angular/core/src/render/api';
import * as import74 from '@angular/core/src/security';
import * as import75 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import76 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import77 from '@angular/http/src/interfaces';
import * as import78 from '@angular/http/src/http';
import * as import79 from '../../../app/app-root';
import * as import80 from '@angular/core/src/render/api';
import * as import81 from '@angular/core/src/linker/view';
import * as import82 from '@angular/core/src/linker/element';
import * as import83 from '@angular/core/src/linker/view_utils';
import * as import84 from '@angular/core/src/linker/view_type';
import * as import85 from '@angular/core/src/change_detection/change_detection';
import * as import86 from '@angular/core/src/linker/component_factory';
import * as import87 from '../../../content/content';
import * as import88 from '../../../content/content.ngfactory';
import * as import89 from '@angular/core/src/linker/element_ref';
import * as import90 from '../../../../navigation/view-controller';
import * as import91 from '../../../tabs/tabs';
import * as import92 from '@angular/core/src/metadata/view';
import * as import93 from '../../nav';
import * as import94 from '../../nav.ngfactory';
import * as import95 from '../../../../navigation/nav-controller-base';
import * as import96 from '@angular/core/src/linker/component_factory_resolver';
class AppModuleInjector extends import0.NgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _HttpModule_3:import5.HttpModule;
  _InternalFormsSharedModule_4:import6.InternalFormsSharedModule;
  _FormsModule_5:import7.FormsModule;
  _ReactiveFormsModule_6:import7.ReactiveFormsModule;
  _IonicModule_7:import8.IonicModule;
  _AppModule_8:import1.AppModule;
  _ExceptionHandler_9:any;
  _UserUrl_10:any;
  _QueryParams_11:any;
  _UserAgent_12:any;
  _UserNavigatorPlatform_13:any;
  _UserDir_14:any;
  _UserLang_15:any;
  _Platform_16:any;
  _UserConfig_17:any;
  _Config_18:any;
  _App_19:import9.App;
  _APP_INITIALIZER_20:any[];
  _ApplicationInitStatus_21:import10.ApplicationInitStatus;
  _Testability_22:import11.Testability;
  _ApplicationRef__23:import12.ApplicationRef_;
  __ApplicationRef_24:any;
  __Compiler_25:import13.Compiler;
  __ComponentResolver_26:any;
  __APP_ID_27:any;
  __DOCUMENT_28:any;
  __HAMMER_GESTURE_CONFIG_29:import14.IonicGestureConfig;
  __EVENT_MANAGER_PLUGINS_30:any[];
  __EventManager_31:import15.EventManager;
  __DomSharedStylesHost_32:import16.DomSharedStylesHost;
  __AnimationDriver_33:any;
  __DomRootRenderer_34:import17.DomRootRenderer_;
  __RootRenderer_35:any;
  __DomSanitizationService_36:import18.DomSanitizationServiceImpl;
  __SanitizationService_37:any;
  __ViewUtils_38:import19.ViewUtils;
  __IterableDiffers_39:any;
  __KeyValueDiffers_40:any;
  __DynamicComponentLoader_41:import20.DynamicComponentLoader_;
  __SharedStylesHost_42:any;
  __BrowserXhr_43:import21.BrowserXhr;
  __ResponseOptions_44:import22.BaseResponseOptions;
  __XSRFStrategy_45:any;
  __XHRBackend_46:import23.XHRBackend;
  __RequestOptions_47:import24.BaseRequestOptions;
  __Http_48:any;
  __RadioControlRegistry_49:import25.RadioControlRegistry;
  __FormBuilder_50:import26.FormBuilder;
  __UserRoot_51:any;
  __UserDeepLinkConfig_52:any;
  __UrlSerializer_53:import27.UrlSerializer;
  __LocationStrategy_54:import28.HashLocationStrategy;
  __Location_55:import29.Location;
  __DeepLinker_56:any;
  __ActionSheetController_57:import30.ActionSheetController;
  __AlertController_58:import31.AlertController;
  __Form_59:import32.Form;
  __FeatureDetect_60:import33.FeatureDetect;
  __GestureController_61:import34.GestureController;
  __Keyboard_62:import35.Keyboard;
  __LoadingController_63:import36.LoadingController;
  __MenuController_64:import37.MenuController;
  __ModalController_65:import38.ModalController;
  __PickerController_66:import39.PickerController;
  __PopoverController_67:import40.PopoverController;
  __TapClick_68:import41.TapClick;
  __ToastController_69:import42.ToastController;
  __Translate_70:import43.Translate;
  __TransitionController_71:import44.TransitionController;
  constructor(parent:import45.Injector) {
    super(parent,[
      import46.ActionSheetCmpNgFactory,
      import47.AlertCmpNgFactory,
      import48.IonicAppNgFactory,
      import49.LoadingCmpNgFactory,
      import50.ModalCmpNgFactory,
      import51.PickerCmpNgFactory,
      import52.PopoverCmpNgFactory,
      import53.ToastCmpNgFactory,
      E2EAppNgFactory,
      E2EAppNgFactory,
      AsyncPageNgFactory,
      import48.IonicAppNgFactory
    ]
    ,[import48.IonicAppNgFactory]);
  }
  get _ApplicationRef_24():any {
    if ((this.__ApplicationRef_24 == null)) { (this.__ApplicationRef_24 = this._ApplicationRef__23); }
    return this.__ApplicationRef_24;
  }
  get _Compiler_25():import13.Compiler {
    if ((this.__Compiler_25 == null)) { (this.__Compiler_25 = new import13.Compiler()); }
    return this.__Compiler_25;
  }
  get _ComponentResolver_26():any {
    if ((this.__ComponentResolver_26 == null)) { (this.__ComponentResolver_26 = this._Compiler_25); }
    return this.__ComponentResolver_26;
  }
  get _APP_ID_27():any {
    if ((this.__APP_ID_27 == null)) { (this.__APP_ID_27 = import54._appIdRandomProviderFactory()); }
    return this.__APP_ID_27;
  }
  get _DOCUMENT_28():any {
    if ((this.__DOCUMENT_28 == null)) { (this.__DOCUMENT_28 = import4._document()); }
    return this.__DOCUMENT_28;
  }
  get _HAMMER_GESTURE_CONFIG_29():import14.IonicGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_29 == null)) { (this.__HAMMER_GESTURE_CONFIG_29 = new import14.IonicGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_29;
  }
  get _EVENT_MANAGER_PLUGINS_30():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_30 == null)) { (this.__EVENT_MANAGER_PLUGINS_30 = [
      new import55.DomEventsPlugin(),
      new import56.KeyEventsPlugin(),
      new import57.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_29)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_30;
  }
  get _EventManager_31():import15.EventManager {
    if ((this.__EventManager_31 == null)) { (this.__EventManager_31 = new import15.EventManager(this._EVENT_MANAGER_PLUGINS_30,this.parent.get(import58.NgZone))); }
    return this.__EventManager_31;
  }
  get _DomSharedStylesHost_32():import16.DomSharedStylesHost {
    if ((this.__DomSharedStylesHost_32 == null)) { (this.__DomSharedStylesHost_32 = new import16.DomSharedStylesHost(this._DOCUMENT_28)); }
    return this.__DomSharedStylesHost_32;
  }
  get _AnimationDriver_33():any {
    if ((this.__AnimationDriver_33 == null)) { (this.__AnimationDriver_33 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_33;
  }
  get _DomRootRenderer_34():import17.DomRootRenderer_ {
    if ((this.__DomRootRenderer_34 == null)) { (this.__DomRootRenderer_34 = new import17.DomRootRenderer_(this._DOCUMENT_28,this._EventManager_31,this._DomSharedStylesHost_32,this._AnimationDriver_33)); }
    return this.__DomRootRenderer_34;
  }
  get _RootRenderer_35():any {
    if ((this.__RootRenderer_35 == null)) { (this.__RootRenderer_35 = import59._createConditionalRootRenderer(this._DomRootRenderer_34)); }
    return this.__RootRenderer_35;
  }
  get _DomSanitizationService_36():import18.DomSanitizationServiceImpl {
    if ((this.__DomSanitizationService_36 == null)) { (this.__DomSanitizationService_36 = new import18.DomSanitizationServiceImpl()); }
    return this.__DomSanitizationService_36;
  }
  get _SanitizationService_37():any {
    if ((this.__SanitizationService_37 == null)) { (this.__SanitizationService_37 = this._DomSanitizationService_36); }
    return this.__SanitizationService_37;
  }
  get _ViewUtils_38():import19.ViewUtils {
    if ((this.__ViewUtils_38 == null)) { (this.__ViewUtils_38 = new import19.ViewUtils(this._RootRenderer_35,this._APP_ID_27,this._SanitizationService_37)); }
    return this.__ViewUtils_38;
  }
  get _IterableDiffers_39():any {
    if ((this.__IterableDiffers_39 == null)) { (this.__IterableDiffers_39 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_39;
  }
  get _KeyValueDiffers_40():any {
    if ((this.__KeyValueDiffers_40 == null)) { (this.__KeyValueDiffers_40 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_40;
  }
  get _DynamicComponentLoader_41():import20.DynamicComponentLoader_ {
    if ((this.__DynamicComponentLoader_41 == null)) { (this.__DynamicComponentLoader_41 = new import20.DynamicComponentLoader_(this._Compiler_25)); }
    return this.__DynamicComponentLoader_41;
  }
  get _SharedStylesHost_42():any {
    if ((this.__SharedStylesHost_42 == null)) { (this.__SharedStylesHost_42 = this._DomSharedStylesHost_32); }
    return this.__SharedStylesHost_42;
  }
  get _BrowserXhr_43():import21.BrowserXhr {
    if ((this.__BrowserXhr_43 == null)) { (this.__BrowserXhr_43 = new import21.BrowserXhr()); }
    return this.__BrowserXhr_43;
  }
  get _ResponseOptions_44():import22.BaseResponseOptions {
    if ((this.__ResponseOptions_44 == null)) { (this.__ResponseOptions_44 = new import22.BaseResponseOptions()); }
    return this.__ResponseOptions_44;
  }
  get _XSRFStrategy_45():any {
    if ((this.__XSRFStrategy_45 == null)) { (this.__XSRFStrategy_45 = import5._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_45;
  }
  get _XHRBackend_46():import23.XHRBackend {
    if ((this.__XHRBackend_46 == null)) { (this.__XHRBackend_46 = new import23.XHRBackend(this._BrowserXhr_43,this._ResponseOptions_44,this._XSRFStrategy_45)); }
    return this.__XHRBackend_46;
  }
  get _RequestOptions_47():import24.BaseRequestOptions {
    if ((this.__RequestOptions_47 == null)) { (this.__RequestOptions_47 = new import24.BaseRequestOptions()); }
    return this.__RequestOptions_47;
  }
  get _Http_48():any {
    if ((this.__Http_48 == null)) { (this.__Http_48 = import5.httpFactory(this._XHRBackend_46,this._RequestOptions_47)); }
    return this.__Http_48;
  }
  get _RadioControlRegistry_49():import25.RadioControlRegistry {
    if ((this.__RadioControlRegistry_49 == null)) { (this.__RadioControlRegistry_49 = new import25.RadioControlRegistry()); }
    return this.__RadioControlRegistry_49;
  }
  get _FormBuilder_50():import26.FormBuilder {
    if ((this.__FormBuilder_50 == null)) { (this.__FormBuilder_50 = new import26.FormBuilder()); }
    return this.__FormBuilder_50;
  }
  get _UserRoot_51():any {
    if ((this.__UserRoot_51 == null)) { (this.__UserRoot_51 = import1.E2EApp); }
    return this.__UserRoot_51;
  }
  get _UserDeepLinkConfig_52():any {
    if ((this.__UserDeepLinkConfig_52 == null)) { (this.__UserDeepLinkConfig_52 = null); }
    return this.__UserDeepLinkConfig_52;
  }
  get _UrlSerializer_53():import27.UrlSerializer {
    if ((this.__UrlSerializer_53 == null)) { (this.__UrlSerializer_53 = new import27.UrlSerializer(this._UserDeepLinkConfig_52)); }
    return this.__UrlSerializer_53;
  }
  get _LocationStrategy_54():import28.HashLocationStrategy {
    if ((this.__LocationStrategy_54 == null)) { (this.__LocationStrategy_54 = new import28.HashLocationStrategy(this.parent.get(import60.PlatformLocation),this.parent.get(import61.APP_BASE_HREF,null))); }
    return this.__LocationStrategy_54;
  }
  get _Location_55():import29.Location {
    if ((this.__Location_55 == null)) { (this.__Location_55 = new import29.Location(this._LocationStrategy_54)); }
    return this.__Location_55;
  }
  get _DeepLinker_56():any {
    if ((this.__DeepLinker_56 == null)) { (this.__DeepLinker_56 = import62.setupDeepLinker(this._App_19,this._UrlSerializer_53,this._Location_55)); }
    return this.__DeepLinker_56;
  }
  get _ActionSheetController_57():import30.ActionSheetController {
    if ((this.__ActionSheetController_57 == null)) { (this.__ActionSheetController_57 = new import30.ActionSheetController(this._App_19)); }
    return this.__ActionSheetController_57;
  }
  get _AlertController_58():import31.AlertController {
    if ((this.__AlertController_58 == null)) { (this.__AlertController_58 = new import31.AlertController(this._App_19)); }
    return this.__AlertController_58;
  }
  get _Form_59():import32.Form {
    if ((this.__Form_59 == null)) { (this.__Form_59 = new import32.Form()); }
    return this.__Form_59;
  }
  get _FeatureDetect_60():import33.FeatureDetect {
    if ((this.__FeatureDetect_60 == null)) { (this.__FeatureDetect_60 = new import33.FeatureDetect()); }
    return this.__FeatureDetect_60;
  }
  get _GestureController_61():import34.GestureController {
    if ((this.__GestureController_61 == null)) { (this.__GestureController_61 = new import34.GestureController(this._App_19)); }
    return this.__GestureController_61;
  }
  get _Keyboard_62():import35.Keyboard {
    if ((this.__Keyboard_62 == null)) { (this.__Keyboard_62 = new import35.Keyboard(this._Config_18,this._Form_59,this.parent.get(import58.NgZone))); }
    return this.__Keyboard_62;
  }
  get _LoadingController_63():import36.LoadingController {
    if ((this.__LoadingController_63 == null)) { (this.__LoadingController_63 = new import36.LoadingController(this._App_19)); }
    return this.__LoadingController_63;
  }
  get _MenuController_64():import37.MenuController {
    if ((this.__MenuController_64 == null)) { (this.__MenuController_64 = new import37.MenuController()); }
    return this.__MenuController_64;
  }
  get _ModalController_65():import38.ModalController {
    if ((this.__ModalController_65 == null)) { (this.__ModalController_65 = new import38.ModalController(this._App_19)); }
    return this.__ModalController_65;
  }
  get _PickerController_66():import39.PickerController {
    if ((this.__PickerController_66 == null)) { (this.__PickerController_66 = new import39.PickerController(this._App_19)); }
    return this.__PickerController_66;
  }
  get _PopoverController_67():import40.PopoverController {
    if ((this.__PopoverController_67 == null)) { (this.__PopoverController_67 = new import40.PopoverController(this._App_19)); }
    return this.__PopoverController_67;
  }
  get _TapClick_68():import41.TapClick {
    if ((this.__TapClick_68 == null)) { (this.__TapClick_68 = new import41.TapClick(this._Config_18,this._App_19,this.parent.get(import58.NgZone))); }
    return this.__TapClick_68;
  }
  get _ToastController_69():import42.ToastController {
    if ((this.__ToastController_69 == null)) { (this.__ToastController_69 = new import42.ToastController(this._App_19)); }
    return this.__ToastController_69;
  }
  get _Translate_70():import43.Translate {
    if ((this.__Translate_70 == null)) { (this.__Translate_70 = new import43.Translate()); }
    return this.__Translate_70;
  }
  get _TransitionController_71():import44.TransitionController {
    if ((this.__TransitionController_71 == null)) { (this.__TransitionController_71 = new import44.TransitionController()); }
    return this.__TransitionController_71;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule();
    this._HttpModule_3 = new import5.HttpModule();
    this._InternalFormsSharedModule_4 = new import6.InternalFormsSharedModule();
    this._FormsModule_5 = new import7.FormsModule();
    this._ReactiveFormsModule_6 = new import7.ReactiveFormsModule();
    this._IonicModule_7 = new import8.IonicModule();
    this._AppModule_8 = new import1.AppModule();
    this._ExceptionHandler_9 = import4._exceptionHandler();
    this._UserUrl_10 = import63.getWindowLocation();
    this._QueryParams_11 = import64.setupQueryParams(this._UserUrl_10);
    this._UserAgent_12 = import63.getWindowUserAgent();
    this._UserNavigatorPlatform_13 = import63.getWindowPlatform();
    this._UserDir_14 = import63.getDocumentDir();
    this._UserLang_15 = import63.getDocumentLang();
    this._Platform_16 = import65.setupPlatform(this._QueryParams_11,this._UserAgent_12,this._UserNavigatorPlatform_13,this._UserDir_14,this._UserLang_15,this.parent.get(import58.NgZone));
    this._UserConfig_17 = null;
    this._Config_18 = import66.setupConfig(this._UserConfig_17,this._QueryParams_11,this._Platform_16);
    this._App_19 = new import9.App(this._Config_18,this._Platform_16);
    this._APP_INITIALIZER_20 = [
      import67.setupProvideEvents(this._Platform_16),
      import41.setupTapClick(this._Config_18,this._App_19,this.parent.get(import58.NgZone))
    ]
    ;
    this._ApplicationInitStatus_21 = new import10.ApplicationInitStatus(this._APP_INITIALIZER_20);
    this._Testability_22 = new import11.Testability(this.parent.get(import58.NgZone));
    this._ApplicationRef__23 = new import12.ApplicationRef_(this.parent.get(import58.NgZone),this.parent.get(import68.Console),this,this._ExceptionHandler_9,this,this._ApplicationInitStatus_21,this.parent.get(import11.TestabilityRegistry,null),this._Testability_22);
    return this._AppModule_8;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.HttpModule)) { return this._HttpModule_3; }
    if ((token === import6.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_4; }
    if ((token === import7.FormsModule)) { return this._FormsModule_5; }
    if ((token === import7.ReactiveFormsModule)) { return this._ReactiveFormsModule_6; }
    if ((token === import8.IonicModule)) { return this._IonicModule_7; }
    if ((token === import1.AppModule)) { return this._AppModule_8; }
    if ((token === import69.ExceptionHandler)) { return this._ExceptionHandler_9; }
    if ((token === import64.UserUrl)) { return this._UserUrl_10; }
    if ((token === import64.QueryParams)) { return this._QueryParams_11; }
    if ((token === import65.UserAgent)) { return this._UserAgent_12; }
    if ((token === import65.UserNavigatorPlatform)) { return this._UserNavigatorPlatform_13; }
    if ((token === import65.UserDir)) { return this._UserDir_14; }
    if ((token === import65.UserLang)) { return this._UserLang_15; }
    if ((token === import65.Platform)) { return this._Platform_16; }
    if ((token === import66.UserConfig)) { return this._UserConfig_17; }
    if ((token === import66.Config)) { return this._Config_18; }
    if ((token === import9.App)) { return this._App_19; }
    if ((token === import10.APP_INITIALIZER)) { return this._APP_INITIALIZER_20; }
    if ((token === import10.ApplicationInitStatus)) { return this._ApplicationInitStatus_21; }
    if ((token === import11.Testability)) { return this._Testability_22; }
    if ((token === import12.ApplicationRef_)) { return this._ApplicationRef__23; }
    if ((token === import12.ApplicationRef)) { return this._ApplicationRef_24; }
    if ((token === import13.Compiler)) { return this._Compiler_25; }
    if ((token === import70.ComponentResolver)) { return this._ComponentResolver_26; }
    if ((token === import54.APP_ID)) { return this._APP_ID_27; }
    if ((token === import71.DOCUMENT)) { return this._DOCUMENT_28; }
    if ((token === import57.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_29; }
    if ((token === import15.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_30; }
    if ((token === import15.EventManager)) { return this._EventManager_31; }
    if ((token === import16.DomSharedStylesHost)) { return this._DomSharedStylesHost_32; }
    if ((token === import72.AnimationDriver)) { return this._AnimationDriver_33; }
    if ((token === import17.DomRootRenderer)) { return this._DomRootRenderer_34; }
    if ((token === import73.RootRenderer)) { return this._RootRenderer_35; }
    if ((token === import18.DomSanitizationService)) { return this._DomSanitizationService_36; }
    if ((token === import74.SanitizationService)) { return this._SanitizationService_37; }
    if ((token === import19.ViewUtils)) { return this._ViewUtils_38; }
    if ((token === import75.IterableDiffers)) { return this._IterableDiffers_39; }
    if ((token === import76.KeyValueDiffers)) { return this._KeyValueDiffers_40; }
    if ((token === import20.DynamicComponentLoader)) { return this._DynamicComponentLoader_41; }
    if ((token === import16.SharedStylesHost)) { return this._SharedStylesHost_42; }
    if ((token === import21.BrowserXhr)) { return this._BrowserXhr_43; }
    if ((token === import22.ResponseOptions)) { return this._ResponseOptions_44; }
    if ((token === import77.XSRFStrategy)) { return this._XSRFStrategy_45; }
    if ((token === import23.XHRBackend)) { return this._XHRBackend_46; }
    if ((token === import24.RequestOptions)) { return this._RequestOptions_47; }
    if ((token === import78.Http)) { return this._Http_48; }
    if ((token === import25.RadioControlRegistry)) { return this._RadioControlRegistry_49; }
    if ((token === import26.FormBuilder)) { return this._FormBuilder_50; }
    if ((token === import79.UserRoot)) { return this._UserRoot_51; }
    if ((token === import62.UserDeepLinkConfig)) { return this._UserDeepLinkConfig_52; }
    if ((token === import27.UrlSerializer)) { return this._UrlSerializer_53; }
    if ((token === import61.LocationStrategy)) { return this._LocationStrategy_54; }
    if ((token === import29.Location)) { return this._Location_55; }
    if ((token === import62.DeepLinker)) { return this._DeepLinker_56; }
    if ((token === import30.ActionSheetController)) { return this._ActionSheetController_57; }
    if ((token === import31.AlertController)) { return this._AlertController_58; }
    if ((token === import32.Form)) { return this._Form_59; }
    if ((token === import33.FeatureDetect)) { return this._FeatureDetect_60; }
    if ((token === import34.GestureController)) { return this._GestureController_61; }
    if ((token === import35.Keyboard)) { return this._Keyboard_62; }
    if ((token === import36.LoadingController)) { return this._LoadingController_63; }
    if ((token === import37.MenuController)) { return this._MenuController_64; }
    if ((token === import38.ModalController)) { return this._ModalController_65; }
    if ((token === import39.PickerController)) { return this._PickerController_66; }
    if ((token === import40.PopoverController)) { return this._PopoverController_67; }
    if ((token === import41.TapClick)) { return this._TapClick_68; }
    if ((token === import42.ToastController)) { return this._ToastController_69; }
    if ((token === import43.Translate)) { return this._Translate_70; }
    if ((token === import44.TransitionController)) { return this._TransitionController_71; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__23.ngOnDestroy();
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory(AppModuleInjector,import1.AppModule);
var renderType_AsyncPage_Host:import80.RenderComponentType = null;
class _View_AsyncPage_Host0 extends import81.AppView<any> {
  _el_0:any;
  private _appEl_0:import82.AppElement;
  _AsyncPage_0_4:import1.AsyncPage;
  constructor(viewUtils:import83.ViewUtils,parentInjector:import45.Injector,declarationEl:import82.AppElement) {
    super(_View_AsyncPage_Host0,renderType_AsyncPage_Host,import84.ViewType.HOST,viewUtils,parentInjector,declarationEl,import85.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import82.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,null);
    this._appEl_0 = new import82.AppElement(0,null,this,this._el_0);
    var compView_0:any = viewFactory_AsyncPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AsyncPage_0_4 = new import1.AsyncPage();
    this._appEl_0.initComponent(this._AsyncPage_0_4,[],compView_0);
    compView_0.create(this._AsyncPage_0_4,this.projectableNodes,null);
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.AsyncPage) && (0 === requestNodeIndex))) { return this._AsyncPage_0_4; }
    return notFoundResult;
  }
}
function viewFactory_AsyncPage_Host0(viewUtils:import83.ViewUtils,parentInjector:import45.Injector,declarationEl:import82.AppElement):import81.AppView<any> {
  if ((renderType_AsyncPage_Host === null)) { (renderType_AsyncPage_Host = viewUtils.createRenderComponentType('',0,null,[],{})); }
  return new _View_AsyncPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const AsyncPageNgFactory:import86.ComponentFactory<import1.AsyncPage> = new import86.ComponentFactory<import1.AsyncPage>('ng-component',viewFactory_AsyncPage_Host0,import1.AsyncPage);
const styles_AsyncPage:any[] = [];
var renderType_AsyncPage:import80.RenderComponentType = null;
class _View_AsyncPage0 extends import81.AppView<import1.AsyncPage> {
  _text_0:any;
  _el_1:any;
  private _appEl_1:import82.AppElement;
  _Content_1_4:import87.Content;
  _text_2:any;
  _text_3:any;
  private _expr_0:any;
  constructor(viewUtils:import83.ViewUtils,parentInjector:import45.Injector,declarationEl:import82.AppElement) {
    super(_View_AsyncPage0,renderType_AsyncPage,import84.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import85.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import82.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',null);
    this._el_1 = this.renderer.createElement(parentRenderNode,'ion-content',null);
    this.renderer.setElementAttribute(this._el_1,'padding','');
    this.renderer.setElementAttribute(this._el_1,'text-center','');
    this._appEl_1 = new import82.AppElement(1,null,this,this._el_1);
    var compView_1:any = import88.viewFactory_Content0(this.viewUtils,this.injector(1),this._appEl_1);
    this._Content_1_4 = new import87.Content(new import89.ElementRef(this._el_1),this.parentInjector.get(import66.Config),this.parentInjector.get(import9.App),this.parentInjector.get(import35.Keyboard),this.parentInjector.get(import58.NgZone),this.parentInjector.get(import90.ViewController,null),this.parentInjector.get(import91.Tabs,null));
    this._appEl_1.initComponent(this._Content_1_4,[],compView_1);
    this._text_2 = this.renderer.createText(null,'\n      Page be loaded!\n    ',null);
    compView_1.create(this._Content_1_4,[
      [].concat([this._text_2]),
      [],
      []
    ]
    ,null);
    this._text_3 = this.renderer.createText(parentRenderNode,'\n  ',null);
    this._expr_0 = import85.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3
    ]
    ,[],[]);
    return null;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import87.Content) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._Content_1_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Content_1_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this._Content_1_4._sbPadding;
    if (import83.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementClass(this._el_1,'statusbar-padding',currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._Content_1_4.ngOnDestroy();
  }
}
export function viewFactory_AsyncPage0(viewUtils:import83.ViewUtils,parentInjector:import45.Injector,declarationEl:import82.AppElement):import81.AppView<import1.AsyncPage> {
  if ((renderType_AsyncPage === null)) { (renderType_AsyncPage = viewUtils.createRenderComponentType('/Users/dan/Dev/ionic2-build/src/components/nav/test/init-async/AppModule.ts class AsyncPage - inline template',0,import92.ViewEncapsulation.None,styles_AsyncPage,{})); }
  return new _View_AsyncPage0(viewUtils,parentInjector,declarationEl);
}
var renderType_E2EApp_Host:import80.RenderComponentType = null;
class _View_E2EApp_Host0 extends import81.AppView<any> {
  _el_0:any;
  private _appEl_0:import82.AppElement;
  _E2EApp_0_4:import1.E2EApp;
  constructor(viewUtils:import83.ViewUtils,parentInjector:import45.Injector,declarationEl:import82.AppElement) {
    super(_View_E2EApp_Host0,renderType_E2EApp_Host,import84.ViewType.HOST,viewUtils,parentInjector,declarationEl,import85.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import82.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,null);
    this._appEl_0 = new import82.AppElement(0,null,this,this._el_0);
    var compView_0:any = viewFactory_E2EApp0(this.viewUtils,this.injector(0),this._appEl_0);
    this._E2EApp_0_4 = new import1.E2EApp();
    this._appEl_0.initComponent(this._E2EApp_0_4,[],compView_0);
    compView_0.create(this._E2EApp_0_4,this.projectableNodes,null);
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.E2EApp) && (0 === requestNodeIndex))) { return this._E2EApp_0_4; }
    return notFoundResult;
  }
}
function viewFactory_E2EApp_Host0(viewUtils:import83.ViewUtils,parentInjector:import45.Injector,declarationEl:import82.AppElement):import81.AppView<any> {
  if ((renderType_E2EApp_Host === null)) { (renderType_E2EApp_Host = viewUtils.createRenderComponentType('',0,null,[],{})); }
  return new _View_E2EApp_Host0(viewUtils,parentInjector,declarationEl);
}
export const E2EAppNgFactory:import86.ComponentFactory<import1.E2EApp> = new import86.ComponentFactory<import1.E2EApp>('ng-component',viewFactory_E2EApp_Host0,import1.E2EApp);
const styles_E2EApp:any[] = [];
var renderType_E2EApp:import80.RenderComponentType = null;
class _View_E2EApp0 extends import81.AppView<import1.E2EApp> {
  _el_0:any;
  private _appEl_0:import82.AppElement;
  _Nav_0_4:import93.Nav;
  private _expr_0:any;
  constructor(viewUtils:import83.ViewUtils,parentInjector:import45.Injector,declarationEl:import82.AppElement) {
    super(_View_E2EApp0,renderType_E2EApp,import84.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import85.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import82.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-nav',null);
    this._appEl_0 = new import82.AppElement(0,null,this,this._el_0);
    var compView_0:any = import94.viewFactory_Nav0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Nav_0_4 = new import93.Nav(this.parentInjector.get(import90.ViewController,null),this.parentInjector.get(import95.NavControllerBase,null),this.parentInjector.get(import9.App),this.parentInjector.get(import66.Config),this.parentInjector.get(import35.Keyboard),new import89.ElementRef(this._el_0),this.parentInjector.get(import58.NgZone),this.renderer,this.parentInjector.get(import96.ComponentFactoryResolver),this.parentInjector.get(import34.GestureController),this.parentInjector.get(import44.TransitionController),this.parentInjector.get(import62.DeepLinker,null));
    this._appEl_0.initComponent(this._Nav_0_4,[],compView_0);
    compView_0.create(this._Nav_0_4,[],null);
    this._expr_0 = import85.UNINITIALIZED;
    this.init([],[this._el_0],[],[]);
    return null;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import93.Nav) && (0 === requestNodeIndex))) { return this._Nav_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.root;
    if (import83.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._Nav_0_4.root = currVal_0;
      this._expr_0 = currVal_0;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Nav_0_4.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Nav_0_4.ngOnDestroy();
  }
}
export function viewFactory_E2EApp0(viewUtils:import83.ViewUtils,parentInjector:import45.Injector,declarationEl:import82.AppElement):import81.AppView<import1.E2EApp> {
  if ((renderType_E2EApp === null)) { (renderType_E2EApp = viewUtils.createRenderComponentType('/Users/dan/Dev/ionic2-build/src/components/nav/test/init-async/AppModule.ts class E2EApp - inline template',0,import92.ViewEncapsulation.None,styles_E2EApp,{})); }
  return new _View_E2EApp0(viewUtils,parentInjector,declarationEl);
}