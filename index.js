import React, {useState} from 'react'
import './index.css'

function RangeInputExample() {
  const [value, setValue] = useState(20) // Initial value for the range input

  const handleRangeChange = event => {
    setValue(event.target.value)
  }

  return (
    <div>
      <div className="header">
        <h3 className="header-sub-heading">Global Style</h3>
        <h1 className="header-heading">Usage</h1>
      </div>
      <div className="wrapper">
        <div>
          <div className="card">
            <input
              type="range"
              id="rangeInput"
              name="rangeInput"
              min="0"
              max="100"
              value={value}
              onChange={handleRangeChange}
            />
            <p>{value}</p>
          </div>
          <p className="paragraph">
            The value tooltip will appear when hovering on handle (optional)
          </p>
        </div>
        <div>
          <div className="card">
            <input
              type="range"
              id="rangeInput"
              name="rangeInput"
              min="0"
              max="100"
              value={value}
              onChange={handleRangeChange}
            />
            <p>{value}</p>
          </div>
          <p className="paragraph">
            The discrete slider allow users to select a specific value from a
            predetermined range. Tick marks my be used to indicate available
            values.
          </p>
        </div>
        <div>
          <div className="card">
            <input
              type="range"
              id="rangeInput"
              name="rangeInput"
              min="0"
              max="100"
              value={value}
              onChange={handleRangeChange}
            />
            <p>{value}</p>
          </div>
          <p className="paragraph">
            The range slider is used to select a range of related values.
          </p>
        </div>
        <div>
          <div className="card">
            <input
              type="range"
              id="rangeInput"
              name="rangeInput"
              min="0"
              max="100"
              value={value}
              onChange={handleRangeChange}
            />
            <p>{value}</p>
          </div>
          <p className="paragraph">
            The value tooltip inherits values from Tooltip component
          </p>
        </div>
      </div>
      <div className="container">
        <div className="cont-card">
          <h1 className="card-heading">Slider bar</h1>
          <h1 className="card-heading1">Continuous</h1>
          <h1 className="card-heading2">Values</h1>
        </div>
        <div className="card">
          <input
            type="range"
            id="rangeInput"
            name="rangeInput"
            min="0"
            max="100"
            value={value}
            onChange={handleRangeChange}
          />
          <p>{value}</p>
        </div>
        <div className="cont-card">
          <div className="content">
            <h1 className="cont-heading">Auto Layout</h1>
            <h1 className="cont-heading">+</h1>
          </div>
        </div>
      </div>
      <h1 className="main-heading">Example</h1>
      <div className="wrapper1">
        <div className="card1">
          <img
            src="https://img.freepik.com/premium-vector/smartphone-blank-screen-phone-mockup_172533-421.jpg"
            alt="Img"
            className="card-img"
          />
        </div>
        <div className="card1">
          <img
            src="https://img.freepik.com/premium-vector/smartphone-blank-screen-phone-mockup_172533-421.jpg"
            alt="Img"
            className="card-img"
          />
        </div>
      </div>
      <div className="wrapper3">
        <div className="card">
          <input
            type="range"
            id="rangeInput"
            name="rangeInput"
            min="0"
            max="100"
            value={value}
            onChange={handleRangeChange}
          />
          <p>{value}</p>
        </div>
        <div className="card">
          <input
            type="range"
            id="rangeInput"
            name="rangeInput"
            min="0"
            max="100"
            value={value}
            onChange={handleRangeChange}
          />
          <p>{value}</p>
        </div>
      </div>
    </div>
  )
}

export default RangeInputExample
