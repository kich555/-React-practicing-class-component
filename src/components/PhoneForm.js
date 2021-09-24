import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: '',
      phone: '',
    });
  };

  render() {
    const { name, phone } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="이름"
          onChange={this.handleChange}
          value={name}
        />
        <input
          name="phone"
          placeholder="전화번호"
          onChange={this.handleChange}
          value={phone}
        />
        <button type="submit">게시</button>
      </form>
    );
  }
}

export default PhoneForm;
