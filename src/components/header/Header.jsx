import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Header = ({children, light, fixed}) => {

  const headerClass = classnames('sg-header', {
    'sg-header--light': light,
    'sg-header--fixed': fixed
  });

  return <div className={headerClass}>
    <div className="sg-header__container">
      {children}
    </div>
  </div>;
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
  fixed: PropTypes.bool
};

export default Header;