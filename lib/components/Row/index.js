import classNames from 'classnames';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * Component representing a row from a layout grid
 *
 * In order to work properly it needs to be wrapped inside a <Container/> component.
 *
 * @method Container
 * @returns {React.Component}
 */
export default class extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    element: PropTypes.string,
  };

  static defaultProps = {
    element: 'div',
  };

  render() {
    const {
      children,
      className,
      element,
      ...rest
    } = this.props;
    const Component = element;

    return (
      <Component
        className={classNames('row', className)}
        {...rest}
      >
        {children}
      </Component>
    );
  }
}
