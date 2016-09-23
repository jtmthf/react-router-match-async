import React, { Component, PropTypes } from 'react';
import { Match } from 'react-router';

export default class MatchAsync extends Component {
  static propTypes = {
    getComponent: PropTypes.func.isRequired,
    onError: PropTypes.func,
  }

  getComponent = () => {
    const { getComponent } = this.props;
    const maybePromise = getComponent((err, component) => {
      if (err) {
        this.errorHandler(err);
      } else {
        this.setComponent(component);
      }
    });
    if (typeof maybePromise.then === 'function') {
      maybePromise.then(this.setComponent)
                  .catch(this.errorHandler);
    }
  }

  setComponent = (component) => {
    this.component = component;
    this.setState({ loaded: true });
  }

  errorHandler = (err) => {
    const { onError } = this.props;
    if (onError) {
      onError(err);
    } else {
      throw err;
    }
  }

  render() {
    const { component, getComponent } = this;
    if (component === undefined) {
      getComponent();
    }

    return (
      <Match
        {...this.props}
        render={() => (
        component !== undefined ? React.createElement(component) : null
      )}
      />
    );
  }
}
