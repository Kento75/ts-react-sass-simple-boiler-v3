import {
  configure,
  addDecorator
} from '@storybook/react';
import {
  setConsoleOptions
} from '@storybook/addon-console';
import {
  withInfo
} from '@storybook/addon-info';
import {
  withKnobs
} from '@storybook/addon-knobs';


setConsoleOptions({
  panelExclude: [],
});

const req = require.context('../src', true, /.stories.(tsx|js)$/);

function loadStories() {
  addDecorator(withInfo);
  addDecorator(withKnobs);

  req.keys().forEach(req);
}

configure(loadStories, module);