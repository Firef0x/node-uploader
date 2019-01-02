/* eslint-disable import/prefer-default-export */

import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Enzyme, { mount } from 'enzyme';

import FileUpload from './index';

Enzyme.configure({
  adapter: new Adapter()
});

describe('FileUpload', () => {
  it('renders without crashing', () => {
    const reactElement = (
      <FileUpload
        uploadText="File Upload"
      />
    );

    const wrapper = mount(reactElement);
    const wrapperHtml = wrapper.html();

    expect(wrapperHtml).toMatch(/File Upload/);
  });
});
