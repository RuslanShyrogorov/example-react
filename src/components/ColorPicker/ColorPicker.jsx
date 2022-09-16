import { act } from '@testing-library/react';
import { parseWithOptions } from 'date-fns/fp';
import React, { Component } from 'react';
import './ColorPicker.css';

export default class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveOption = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }
    return optionClasses.join(' ');
  };

  render() {
    const { options } = this.props;
    const activeOption = options[this.state.activeOptionIdx];
    // const {label} = options[this.state.activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">ColorPicker</h2>
        <p>Выбранный цвет: {activeOption.label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveOption(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
