/* eslint-disable import/prefer-default-export */

import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Enzyme, { mount } from 'enzyme';

import ApplicationHeader from './index';

Enzyme.configure({
  adapter: new Adapter()
});

describe('ApplicationHeader', () => {
  it('renders without crashing', () => {
    const reactElement = (
      <ApplicationHeader
        title="Node Uploader"
      />
    );

    const wrapper = mount(reactElement);
    const wrapperHtml = wrapper.html();

    expect(wrapperHtml).toMatch(/Node Uploader/);
  });
});
