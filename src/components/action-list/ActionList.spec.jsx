import React from 'react';
import ActionList, {DIRECTION} from './ActionList';
import {shallow} from 'enzyme';
import ButtonSecondary, {types as buttonSecondaryTypes} from '../buttons/ButtonSecondary';
import ButtonPrimary, {types as buttonPrimaryTypes} from '../buttons/ButtonPrimary';

const holes = [
  <ButtonSecondary type={buttonSecondaryTypes.alt} small={true}>
    accept
  </ButtonSecondary>,
  <ButtonPrimary type={buttonPrimaryTypes.dark_inverse}>
    Later
  </ButtonPrimary>
];

test('render', () => {
  const actionList = shallow(
    <ActionList holes={holes}/>
  );

  expect(actionList.hasClass('sg-actions-list')).toEqual(true);
});

test('render with holes', () => {
  const actionList = shallow(
    <ActionList holes={holes}/>
  );

  expect(actionList.find('.sg-actions-list__hole')).toHaveLength(holes.length);
});

test('error when no holes', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(<ActionList />);
  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
});

test('to-right', () => {
  const actionList = shallow(
    <ActionList holes={holes} direction={DIRECTION.toRight}/>
  );

  expect(actionList.hasClass('sg-actions-list--to-right')).toEqual(true);
});

test('to-top', () => {
  const actionList = shallow(
    <ActionList holes={holes} direction={DIRECTION.toTop}/>
  );

  expect(actionList.hasClass('sg-actions-list--to-top')).toEqual(true);
});

test('centered', () => {
  const actionList = shallow(
    <ActionList holes={holes} direction={DIRECTION.centered}/>
  );

  expect(actionList.hasClass('sg-actions-list--centered')).toEqual(true);
});

test('space-between', () => {
  const actionList = shallow(
    <ActionList holes={holes} direction={DIRECTION.spaceBetween}/>
  );

  expect(actionList.hasClass('sg-actions-list--space-between')).toEqual(true);
});

test('no-wrap', () => {
  const actionList = shallow(
    <ActionList holes={holes} noWrap={true}/>
  );

  expect(actionList.hasClass('sg-actions-list--no-wrap')).toEqual(true);
});

