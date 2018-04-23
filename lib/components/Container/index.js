import classNames from 'classnames';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * Component representing a container from a layout grid
 *
 * @method Container
 * @returns {React.Component}
 */
export default class extends PureComponent {
  static defaultProps = {
    element: 'div',
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    fluid: PropTypes.bool.isRequired,
    element: PropTypes.string,
  };

  render() {
    const {
      children,
      className,
      fluid,
      element,
      ...rest
    } = this.props;
    const Component = element;

    return (
      <Component
        {...rest}
        className={
          classNames({
            container: !fluid,
            'container-fluid': fluid,
          }, className)
        }
      >
        {children}
      </Component>
    );
  }
}
