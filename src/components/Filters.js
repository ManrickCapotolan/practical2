import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';

export default (props) => {
  const { onSubmit } = props;
  const [country, setCountry] = useState('');
  const [endpoint, setEndpoint] = useState('top-headlines');
  const [search, setSearch] = useState('');

  const countryOptions = [
    { value: 'au', name: 'Australia' },
    { value: 'cn', name: 'China' },
    { value: 'gr', name: 'Greece' },
    { value: 'in', name: 'India' },
    { value: 'it', name: 'Italy' },
    { value: 'jp', name: 'Japan' },
    { value: 'nz', name: 'New Zealand' },
    { value: 'ph', name: 'Philippines' },
    { value: 'kr', name: 'South Korea' },
    { value: 'us', name: 'United States of America' },
  ];

  const endpointOptions = [
    { value: 'top-headlines', name: 'Top Headlines' },
    { value: 'everything', name: 'Everything' },
  ];

  const onChange = (action) => (e) => action(e.target.value);

  const onKeyPress = (e) => {
    if (e.key === 'Enter' && country && endpoint) {
      onSubmit({ country, endpoint, search });
    }
  }

  useEffect(() => {
    if (country && endpoint) onSubmit({ country, endpoint, search });
  }, [country, endpoint]); // eslint-disable-line

  return (
    <div className="ui form ">
      <div className="three fields">
        <div className="field">
          <Dropdown 
            name= 'country'
            value={country}
            optionsList={countryOptions}
            placeholder='Select a country'
            onChange={onChange(setCountry)}
          />
        </div>
        <div className="field">
          <Dropdown 
            name='endpoint'
            value={endpoint}
            optionsList={endpointOptions}
            onChange={onChange(setEndpoint)}
          />
        </div>
        <div className='field'>
          <input 
          type="text" name="search" 
          value={search} 
          placeholder="Search article..." 
          onKeyPress={onKeyPress}
          onChange={onChange(setSearch)}
        />
        </div>
      </div>
    </div>
  );
}
