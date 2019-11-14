import Vue from 'vue';
import Vuex from 'vuex';
import { storiesOf } from '@storybook/vue';

import VueWordpress from '../src/vue-wordpress';

Vue.use(Vuex);
Vue.use(VueWordpress);

const withSettings = component => ({
  wordpressSettings: new VueWordpress(),
  ...component
});

const stories = storiesOf('VueWordpress', module);

stories
  // Add some stories here to make your plugin more descriptive
  .add(
    'My Customs  Component',
    () =>
      withSettings({
        template: `
        <div>
          <vue-wordpress />
        </div>
      `
      }),
    {
      notes: `
        # Using \`vue-wordpress\`

        \`\`\`html
        <template>
          <vue-wordpress />
        </template>
        \`\`\`
      `
    }
  )
  .add(
    'My Custom Component with another markup',
    () =>
      withSettings({
        template: `
        <div>
          <b>Hello</b>
          <vue-wordpress />
          <i>world</i>
        </div>
      `
      }),
    {
      notes: `
        # Using \`vue-wordpress\` with other components

        \`\`\`html
        <template>
          <div>
            <b>Hello</b>
            <vue-wordpress />
            <i>world</i>
          </div>
        </template>
        \`\`\`
      `
    }
  );
