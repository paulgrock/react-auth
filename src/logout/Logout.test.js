import React from 'react';
import { shallow } from 'enzyme';
import Logout from './Logout';

describe('<Logout />', () => {
  it('renders without crashing', () => {
    shallow(<Logout />);
  });

  it('contains a headline', () => {
    const LogoutComp = shallow(<Logout />);
    const headline = <h3>You are now logged out.</h3>;
    expect(LogoutComp.contains(headline)).toEqual(true);
  })
});
