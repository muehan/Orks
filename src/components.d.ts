/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import '@stencil/core';


import {
  OrkTableColumn,
} from './components/ork-table/orkTableColumn';


export namespace Components {

  interface MyFirstComponent {
    'age': string;
    'name': string;
  }
  interface MyFirstComponentAttributes extends StencilHTMLAttributes {
    'age'?: string;
    'name'?: string;
  }

  interface OrkDatepicker {}
  interface OrkDatepickerAttributes extends StencilHTMLAttributes {}

  interface OrkTable {
    'columns': Array<OrkTableColumn>;
    'dataSource': Array<any>;
  }
  interface OrkTableAttributes extends StencilHTMLAttributes {
    'columns'?: Array<OrkTableColumn>;
    'dataSource'?: Array<any>;
  }
}

declare global {
  interface StencilElementInterfaces {
    'MyFirstComponent': Components.MyFirstComponent;
    'OrkDatepicker': Components.OrkDatepicker;
    'OrkTable': Components.OrkTable;
  }

  interface StencilIntrinsicElements {
    'my-first-component': Components.MyFirstComponentAttributes;
    'ork-datepicker': Components.OrkDatepickerAttributes;
    'ork-table': Components.OrkTableAttributes;
  }


  interface HTMLMyFirstComponentElement extends Components.MyFirstComponent, HTMLStencilElement {}
  var HTMLMyFirstComponentElement: {
    prototype: HTMLMyFirstComponentElement;
    new (): HTMLMyFirstComponentElement;
  };

  interface HTMLOrkDatepickerElement extends Components.OrkDatepicker, HTMLStencilElement {}
  var HTMLOrkDatepickerElement: {
    prototype: HTMLOrkDatepickerElement;
    new (): HTMLOrkDatepickerElement;
  };

  interface HTMLOrkTableElement extends Components.OrkTable, HTMLStencilElement {}
  var HTMLOrkTableElement: {
    prototype: HTMLOrkTableElement;
    new (): HTMLOrkTableElement;
  };

  interface HTMLElementTagNameMap {
    'my-first-component': HTMLMyFirstComponentElement
    'ork-datepicker': HTMLOrkDatepickerElement
    'ork-table': HTMLOrkTableElement
  }

  interface ElementTagNameMap {
    'my-first-component': HTMLMyFirstComponentElement;
    'ork-datepicker': HTMLOrkDatepickerElement;
    'ork-table': HTMLOrkTableElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
