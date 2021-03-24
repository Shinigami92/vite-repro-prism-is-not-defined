// import { ComponentRenderProxy } from '@vue/composition-api';
import Vue, { VNode } from "vue";

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass {}
    // interface ElementClass extends ComponentRenderProxy {}
    interface ElementAttributesProperty {
      $props: any; // specify the property name to use
    }
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

// TypeScript SetupContext
// declare module '@vue/composition-api/dist/component/component' {
//   interface SetupContext {
//     readonly refs: { [key: string]: Vue | Element | Vue[] | Element[] };
//   }
// }
