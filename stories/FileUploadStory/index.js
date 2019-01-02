import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import logAction from '../logAction';

import FileUpload from '../../client-react/components/FileUpload/index';

export default () => {
  storiesOf('Global - FileUpload', module)
    .add('Default',
      () => (
        <FileUpload />
      ))
    .add('With Text',
      () => (
        <FileUpload
          uploadText={text('Upload Text', 'ABC')}
        />
      ))
    .add('With Hint',
      () => (
        <FileUpload
          uploadHint={text('Upload Hint', 'ABC')}
        />
      ));
};
