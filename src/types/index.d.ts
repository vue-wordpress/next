import Vue, { PluginFunction } from 'vue';
// import { Store } from 'vuex';

export class VueWordpress {
  constructor(options?: VueWordpressOptions);

  static install(): PluginFunction<any>;
  // static init(Vue: Vue, store: Store<any>): void;
  static init(Vue: Vue, store: any): void;

  // Your instance methods
  world(): string;
}

export interface VueWordpressOptions extends Object {
  accessorName?: string
}

declare module 'vue/types/vue' {
  interface Vue {
    $wordpress: VueWordpress;
    __$VueWordpressInstance: VueWordpress;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    wordpressSettings?: VueWordpressOptions | VueWordpress
  }
}
