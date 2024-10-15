import React, { useState } from 'react';
import Select from 'react-select';

const MySelect = ({ options, placeholder, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
    onChange(option ? option.value : null); 
  };

  return (
    <div>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        isClearable
        isSearchable
        placeholder={placeholder} 
      />
      {selectedOption && (
        <p>You selected: {selectedOption.label}</p>
      )}
    </div>
  );
};

export default MySelect;
