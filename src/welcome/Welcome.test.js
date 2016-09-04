import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './Welcome';

describe('<Welcome />', () => {
  it('renders without crashing', () => {
    shallow(<Welcome />);
  });

  it('contains a headline', () => {
    const WelcomeComp = shallow(<Welcome />);
    const headline = <h3>Welcome to the totally secure area!</h3>;
    expect(WelcomeComp.contains(headline)).toEqual(true);
  })
})
