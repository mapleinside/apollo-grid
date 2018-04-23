import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import classNames from 'classnames';
import { omit } from 'lodash';

/**
 * All the grid's available contexts
 *
 * @constant
 * @type {string[]}
 */
const contexts = ['xs', 'sm', 'md', 'lg', 'xl'];

/**
 * All the grid's available properties
 *
 * @constant
 * @type {string[]}
 */
const availableProps = [
  ...contexts,
  'xsOffset',
  'smOffset',
  'mdOffset',
  'lgOffset',
  'xlOffset',
  'xsHidden',
  'smHidden',
  'mdHidden',
  'lgHidden',
  'xlHidden',
  'xsPull',
  'smPull',
  'mdPull',
  'lgPull',
  'xlPull',
  'xsPush',
  'smPush',
  'mdPush',
  'lgPush',
  'xlPush',
];

/**
 * Builds the column classes based on its properties and the available contexts
 *
 * @method getCols
 * @returns {Array}
 */
function getCols(props) {
  const classes = [];

  contexts.forEach((context) => {
    const {
      [context]: size,
      [`${context}Offset`]: offset,
      [`${context}Hidden`]: hidden,
      [`${context}Pull`]: pull,
      [`${context}Push`]: push,
    } = props;

    if (size) classes.push(`col-${context}-${size}`);
    if (hidden) classes.push(`hidden-${context}-${hidden}`);
    if (offset) classes.push(`col-${context}-offset-${offset}`);
    if (pull) classes.push(`col-${context}-pull-${pull}`);
    if (push) classes.push(`col-${context}-push-${push}`);
  });

  return classes;
}

/**
 * Component representing a column from a layout grid
 *
 * In order to work properly it needs to be wrapped inside a <Row/> component.
 *
 * @method Col
 * @returns {React.Component}
 */
class Col extends PureComponent {
  static defaultProps = {
    element: 'div',
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,

    // Number of columns for extra small devices (<544px)
    xs: PropTypes.number.isRequired,

    // Number of columns for small devices (≥544px)
    sm: PropTypes.number.isRequired,

    // Number of columns for medium devices (≥768px)
    md: PropTypes.number.isRequired,

    // Number of columns for large devices (≥992px)
    lg: PropTypes.number.isRequired,

    // Number of columns for extra large devices (≥1200px)
    xl: PropTypes.number.isRequired,

    // Move columns to the right for extra small devices (<544px)
    xsOffset: PropTypes.number.isRequired,

    // Move columns to the right for small devices (≥544px)
    smOffset: PropTypes.number.isRequired,

    // Move columns to the right for medium devices (≥768px)
    mdOffset: PropTypes.number.isRequired,

    // Move columns to the right for large devices (≥992px)
    lgOffset: PropTypes.number.isRequired,

    // Move columns to the right for extra large devices (≥1200px)
    xlOffset: PropTypes.number.isRequired,

    // Hide column above or below extra small devices (<544px)
    xsHidden: PropTypes.oneOf(['up', 'down']).isRequired,

    // Hide column above or below small devices (≥544px)
    smHidden: PropTypes.oneOf(['up', 'down']).isRequired,

    // Hide column above or below medium devices (≥768px)
    mdHidden: PropTypes.oneOf(['up', 'down']).isRequired,

    // Hide column above or below large devices (≥992px)
    lgHidden: PropTypes.oneOf(['up', 'down']).isRequired,

    // Hide column above or below large devices (≥1200px)
    xlHidden: PropTypes.oneOf(['up', 'down']).isRequired,

    // Change the order of grid columns to the left for extra small devices (<544px)
    xsPull: PropTypes.number.isRequired,

    // Change the order of grid columns to the left for small devices (≥544px)
    smPull: PropTypes.number.isRequired,

    // Change the order of grid columns to the left for medium devices (≥768px)
    mdPull: PropTypes.number.isRequired,

    // Change the order of grid columns to the left for large devices (≥992px)
    lgPull: PropTypes.number.isRequired,

    // Change the order of grid columns to the left for extra large devices (≥1200px)
    xlPull: PropTypes.number.isRequired,

    // Change the order of grid columns to the right for extra small devices (<544px)
    xsPush: PropTypes.number.isRequired,

    // Change the order of grid columns to the right for small devices (≥544px)
    smPush: PropTypes.number.isRequired,

    // Change the order of grid columns to the right for medium devices (≥768px)
    mdPush: PropTypes.number.isRequired,

    // Change the order of grid columns to the right for large devices (≥992px)
    lgPush: PropTypes.number.isRequired,

    // Change the order of grid columns to the right for extra large devices (≥1200px)
    xlPush: PropTypes.number.isRequired,

    // Change the type of element used to generate the component
    element: PropTypes.string,
  };

  render() {
    const {
      children,
      className,
      element,
      ...rest
    } = this.props;
    const ColComponent = element;
    const componentProps = omit(rest, availableProps);

    return (
      <ColComponent
        className={classNames(className, getCols(rest))}
        {...componentProps}
      >
        {children}
      </ColComponent>
    );
  }
}

export default radium(Col);
