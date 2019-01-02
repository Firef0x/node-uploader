/* eslint-disable import/noextraneous-dependencies, import/no-unresolved, import-extensions */

import { React } from 'react';
import { addDecorator, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withOptions } from '@storybook/addon-options';
import pkg from '../package.json';
import './storybook.less'

function loadStories() {
  const dynamicRequire = require.context('../stories', true, /.*Story\/.*\.js$/);
  dynamicRequire.keys().forEach(story => dynamicRequire(story).default());
};

// settings for addon-info
addDecorator(withInfo({
  header: true,
  inline: false,
  source: true,
  maxPropsIntoLine: 1,
  maxPropObjectKeys: 10,
  maxPropArrayLength: 10,
  maxPropStringLength: 100
}));

// storybook layout options
addDecorator(withOptions({
  name: `${pkg.description} ${pkg.version}`,
  url: pkg.repository.url,
  hierarchySeparator: /\/|\.| - /
}));

// storybook knobs addon
addDecorator(withKnobs);

configure(loadStories, module);
