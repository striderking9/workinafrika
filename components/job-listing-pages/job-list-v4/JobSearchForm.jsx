"use client";

import React, { useState } from 'react';
import Categories from "../components/Categories";
import JobSelect from "../components/JobSelect";
import LocationBox from "../components/LocationBox";
import SearchBox from "../components/SearchBox";

const toggleButtonContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  margin: '20px 0',
};

const switchContainer = {
  position: 'relative',
  display: 'inline-block',
  width: '60px',
  height: '34px',
};

const inputStyle = {
  opacity: 0,
  width: 0,
  height: 0,
};

const sliderStyle = {
  position: 'absolute',
  cursor: 'pointer',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#ccc',
  transition: '.4s',
  borderRadius: '34px',
};

const sliderBeforeStyle = {
  position: 'absolute',
  content: '""',
  height: '26px',
  width: '26px',
  left: '4px',
  bottom: '4px',
  backgroundColor: 'white',
  transition: '.4s',
  borderRadius: '50%',
};

const sliderCheckedStyle = {
  transform: 'translateX(26px)',
};

const labelText = {
  fontSize: '12px',
  fontWeight: 'bold',
};

const ToggleButton = ({ onChange }) => {
  const [isJobOffer, setIsJobOffer] = useState(true);

  const handleToggle = () => {
    setIsJobOffer(!isJobOffer);
    onChange(!isJobOffer ? "stage" : "emploi");
  };

  return (
    <div style={toggleButtonContainer}>
      <span style={{ ...labelText, color: isJobOffer ? '#0047ab' : '#b0b0b0' }}>Offre d'emploi</span>
      <label style={switchContainer}>
        <input type="checkbox" checked={!isJobOffer} onChange={handleToggle} style={inputStyle} />
        <span style={sliderStyle}>
          <span style={{ ...sliderBeforeStyle, ...(isJobOffer ? {} : sliderCheckedStyle) }}></span>
        </span>
      </label>
      <span style={{ ...labelText, color: !isJobOffer ? '#0047ab' : '#b0b0b0' }}>Offre de stage</span>
    </div>
  );
};

const formGroupStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const iconStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
};

const JobSearchForm = ({ onFilterChange }) => {
  return (
    <>
      <div className="job-search-form">
        <div className="row">
          <div className="form-group col-lg-3 col-md-12 col-sm-12 location">
            <ToggleButton onChange={onFilterChange} />
          </div>
          {/* <!-- Form Group --> */}

          <div className="form-group col-lg-4 col-md-12 col-sm-12" style={formGroupStyle}>
            <div style={iconStyle}>
              <i className="icon-search"></i> {/* Add appropriate class for search icon */}
              <SearchBox />
            </div>
          </div>
          {/* <!-- Form Group --> */}

          <div className="form-group col-lg-3 col-md-12 col-sm-12 location" style={formGroupStyle}>
            <div style={iconStyle}>
              <i className="icon-location"></i> {/* Add appropriate class for location icon */}
              <LocationBox />
            </div>
          </div>
          {/* <!-- Form Group --> */}

          <div className="form-group col-lg-2 col-md-12 col-sm-12 text-right">
            <button
              type="submit"
              className="theme-btn btn-style-one"
            >
              Rechercher
            </button>
          </div>
          {/* <!-- Form Group --> */}
        </div>
      </div>

      <JobSelect />
      
    </>
  );
};

export default JobSearchForm;
