import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ICON_COLOR} from '../icons/Icon';

export const MATH_SYMBOL_TYPE = {
  SQUERE_ROOT: 'squere-root',
  NTH_ROOT: 'nth-root',
  POWER: 'power',
  SUBSCRIPT: 'subscript',
  LESSEQUAL: 'less-then-or-equal',
  GREATEREQUAL: 'greater-then-or-equal',
  INEQUALITY: 'inequality',
  DIVISION: 'division',
  PI: 'pi',
  ALPHA: 'alpha',
  BETA: 'beta',
  LINE: 'line',
  LIMIT: 'limit',
  MATRIX: 'matrix',
  INTEGRAL: 'integral',
  EQUATION_SYSTEM: 'equation-system'
};

const WIDE = [
  MATH_SYMBOL_TYPE.LIMIT,
  MATH_SYMBOL_TYPE.MATRIX,
  MATH_SYMBOL_TYPE.INTEGRAL,
  MATH_SYMBOL_TYPE.EQUATION_SYSTEM
];

export const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  NORMAL: 'normal'
};

const MathSymbol = ({type = MATH_SYMBOL_TYPE, size = SIZE.NORMAL, color, className, ...props}) => {
  const isWide = WIDE.indexOf(type) !== -1;
  const iconClass = classNames('sg-math-symbol-icon', {
    [`sg-math-symbol-icon--${size}`]: !isWide && size !== SIZE.NORMAL,
    [`sg-math-symbol-icon--wide-${size}`]: isWide && size !== SIZE.NORMAL,
    'sg-math-symbol-icon--wide': isWide && size === SIZE.NORMAL,
    [`sg-math-symbol-icon--${color}`]: color
  }, className);
  const iconType = `#sg-math-symbol-icon-${type}`;

  return (
    <svg {...props} className={iconClass}>
      <use xlinkHref={iconType} />
    </svg>
  );
};

MathSymbol.propTypes = {
  type: PropTypes.oneOf(Object.values(MATH_SYMBOL_TYPE)).isRequired,
  size: PropTypes.oneOf(Object.values(SIZE)),
  color: PropTypes.oneOf(Object.values(ICON_COLOR)),
  className: PropTypes.string
};

export default MathSymbol;
export {ICON_COLOR};
