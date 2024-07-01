import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from '../Notifications/NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

describe('NotificationItem componente', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Renderiza sin romperse con la propiedad "default"', () => {
    const wrapper = shallow(<NotificationItem type="default" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Renderiza con 1 propiedad y un valor.', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.prop('data-notification-type')).toEqual('default');
    expect(wrapper.text()).toEqual('test');
  });

  it('Renderiza injectando HTML.', () => {
    const tagHtml = { __html: '<p>test</p>' };
    const wrapper = shallow(<NotificationItem type="default" html={tagHtml} />);
    expect(wrapper.html()).toContain('<p>test</p>');
  });
});