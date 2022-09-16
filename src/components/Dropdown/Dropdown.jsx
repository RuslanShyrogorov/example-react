import React, { Component } from 'react';
import './Dropdown.css';

export default class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      // Если прийдет true то будет false и наоборот
      visible: !prevState.visible,
    }));
  };

  // show = () => {
  //   this.setState({ visible: true });
  // };

  // hide = () => {
  //   this.setState({ visible: false });
  // };

  render() {
    // const { show, hide } = this;
    const { toggle } = this;
    const { visible } = this.state;

    return (
      <div className="Dropdown">
        <button type="button" className="Dropdown__toggle" onClick={toggle}>
          {visible ? 'Скрыть' : 'Скрыть'}
        </button>

        {/* <button type="button" className="Dropdown__toggle" onClick={hide}>
          Показать
        </button> */}
        {/* Если visible:true то тогда ренедерится разметка(div), если нет то разметка не рендерится */}
        {visible && <div className="Dropdown__menu">Выпадающее меню</div>}
      </div>
    );
  }
}
