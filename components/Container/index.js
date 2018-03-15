import classNames from 'classnames';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

/**
 * Component representing a container from a layout grid.
 *
 * @method Container
 * @returns {React.Component}
 */
class Container extends PureComponent {
  static defaultProps = {
    element: 'div'
  };

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    fluid: PropTypes.bool,
    element: PropTypes.string
  };

  render() {
    const {children, className, fluid, element, ...rest} = this.props;
    const Component = element;
    return (
      <Component
        {...rest}
        className={
          classNames({
            container: !fluid,
            'container-fluid': fluid
          }, className)
        }
      >
        {children}
      </Component>
    );
  }
}

export default Container;
