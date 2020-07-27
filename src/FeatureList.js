import React, { Component } from 'react';
import Features from './Features';
import './index.css';
import './App.css';

export default class FeatureList extends Component {
  render() {
    const { selected } = this.props;
    const features = Object.keys(this.props.features).map(key => {
      return (
        <Features 
          name={key}
          key={key}
          options={this.props.features[key]}
          selected={selected}
          onSelect={this.props.onSelect}
        />
      )
    })
    return (
      <section className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </section>
    )
  }
}