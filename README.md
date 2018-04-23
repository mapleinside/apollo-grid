# Apollo Grid

> A React grid package based over Bootstrap 4 grid system

## Why Apollo Grid?

Like me, you need a powerful 12 columns, flex based responsive grid system for React? Why not use one of the most famous and powerful system as a base: Bootstrap's grid.

This package is a lightweight and easy to use version of Bootstrap grid for React. It's composed of 3 components: **Container**, **Row**, and **Col**.

## How it works

The way this grid works is the same as Bootstrap's one. You need to start with a container then a row and finally the columns.

Each layer has its own component and each of these are customizable to reflect the original behavior. To use it you need to import the components in your JavaScript file using your favorite type of module.

### How to use it

Just as any other React component, you need to import them where you need:

```javascript
import { Container, Row, Col } from 'apollo-grid';
```

And, of course you need to import the style. Apollo Grid's style is made using SCSS but you can find a compiled CSS inside the lib folder:

```sass
// Using SCSS
@import './node_modules/apollo-grid/style';
```

## Components

### Container

Containers center your component’s contents and help align your grid content:

```html
<Container>...</Container>
```

#### Options

By default, the container is created as a `div` and is `fixed`.

| Component prop | Effect                                                       | Value     | Default | Remarks    |
|----------------|--------------------------------------------------------------|-----------|---------|------------|
| `element`      | Changes the default rendered element from `div` to anything. | `string`  | `div`   | *Optional* |
| `fluid`        | Makes the container fluid.                                   | `boolean` |         | *Optional* |

Note: every other properties added to the component will be passed down to it.

### Row

Rows are horizontal groups of columns that ensure your columns are lined up properly:

```html
<Row>...</Row>
```

#### Options

By default, rows are created as `div` components.

| Component prop | Effect                                                       | Value     | Default | Remarks    |
|----------------|--------------------------------------------------------------|-----------|---------|------------|
| `element`      | Changes the default rendered element from `div` to anything. | `string`  | `div`   | *Optional* |

Note: every other properties added to the component will be passed down to it.

### Col

Content should be placed within columns, and only columns may be immediate children of rows:

```html
<Col xs={12} md={8} lgHidden="down">...</Col>
```

#### Options

By default, cols are created as `div` components.

| Component prop | Effect                                                                                | Value     | Default    | Remarks                                 |
|----------------|---------------------------------------------------------------------------------------|-----------|------------|-----------------------------------------|
| `element`      | Changes the default rendered element from `div` to anything.                          | `string`  | `div`      | *Optional*                              |
| `xs`           | The number of columns you wish to span for extra small devices ( **<544px** )         | `number`  |            | *Optional*                              |
| `sm`           | The number of columns you wish to span for small devices ( **≥544px** )               | `number`  |            | *Optional*                              |
| `md`           | The number of columns you wish to span for medium devices ( **≥768px** )              | `number`  |            | *Optional*                              |
| `lg`           | The number of columns you wish to span for large devices ( **≥992px** )               | `number`  |            | *Optional*                              |
| `xl`           | The number of columns you wish to span for large devices ( **≥1200px** )              | `number`  |            | *Optional*                              |
| `xsHidden`     | Hide column above or below extra small devices ( **<544px** )                         | `string`  |            | *Optional* can be either `up` or `down` |
| `smHidden`     | Hide column above or below small devices ( **≥544px** )                               | `string`  |            | *Optional* can be either `up` or `down` |
| `mdHidden`     | Hide column above or below medium devices ( **≥768px** )                              | `string`  |            | *Optional* can be either `up` or `down` |
| `lgHidden`     | Hide column above or below large devices ( **≥992px** )                               | `string`  |            | *Optional* can be either `up` or `down` |
| `xlHidden`     | Hide column above or below extra large devices ( **≥1200px** )                        | `string`  |            | *Optional* can be either `up` or `down` |
| `xsOffset`     | Move columns to the right for extra small devices ( **<544px** )                      | `number`  |            | *Optional*                              |
| `smOffset`     | Move columns to the right for small devices ( **≥544px** )                            | `number`  |            | *Optional*                              |
| `mdOffset`     | Move columns to the right for medium devices ( **≥768px** )                           | `number`  |            | *Optional*                              |
| `lgOffset`     | Move columns to the right for large devices ( **≥992px** )                            | `number`  |            | *Optional*                              |
| `xlOffset`     | Move columns to the right for extra large devices ( **≥1200px** )                     | `number`  |            | *Optional*                              |
| `xsPush`       | Change the order of grid columns to the right for extra small devices ( **<544px** )  | `number`  |            | *Optional*                              |
| `smPush`       | Change the order of grid columns to the right for small devices ( **≥544px** )        | `number`  |            | *Optional*                              |
| `mdPush`       | Change the order of grid columns to the right for medium devices ( **≥768px** )       | `number`  |            | *Optional*                              |
| `lgPush`       | Change the order of grid columns to the right for large devices ( **≥992px** )        | `number`  |            | *Optional*                              |
| `xlPush`       | Change the order of grid columns to the right for extra large devices ( **≥1200px** ) | `number`  |            | *Optional*                              |
| `xsPull`       | Change the order of grid columns to the left for extra small devices ( **<544px** )   | `number`  |            | *Optional*                              |
| `smPull`       | Change the order of grid columns to the left for small devices ( **≥544px** )         | `number`  |            | *Optional*                              |
| `mdPull`       | Change the order of grid columns to the left for medium devices ( **≥768px** )        | `number`  |            | *Optional*                              |
| `lgPull`       | Change the order of grid columns to the left for large devices ( **≥992px** )         | `number`  |            | *Optional*                              |
| `xlPull`       | Change the order of grid columns to the left for extra large devices ( **≥1200px** )  | `number`  |            | *Optional*                              |

Note: every other properties added to the component will be passed down to it.

## Example

Here is a complete example of a component using a grid:

```html
<Container element="section" fluid={true}>
  <Row>
    <Col xs={10} md={8} xsPull={1} mdPull={2}>
      Some text
    </Col>
  </Row>
  <Row>
    <Col xs={6}>
      Some text
    </Col>
    <Col xs={6}>
      Some text
    </Col>
  </Row>
</Container>
```

## License

The MIT License (MIT)

Copyright (c) 2018 Nicolas Cava

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
