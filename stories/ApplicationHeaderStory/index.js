import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import ApplicationHeader from '../../client-react/components/ApplicationHeader/index';

export default () => {
  storiesOf('Global - ApplicationHeader', module)
    .add('Default',
      () => (
        <ApplicationHeader title={text('Title', 'Node Uploader')} />
      ));
};
