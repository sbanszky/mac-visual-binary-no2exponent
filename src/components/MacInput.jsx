import React from 'react';
import PropTypes from 'prop-types';
import { SOLANA_COLORS } from '../constants/colors';

const MacInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    const input = e.target.value.toUpperCase().replace(/[^0-9A-F]/g, '').slice(0, 12);
    onChange(input);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter MAC Address (e.g., AABBCCDDEEFF)"
        className="bg-black border-2 rounded-md px-3 py-2 w-64 text-center font-mono"
        style={{
          borderColor: SOLANA_COLORS.GREEN,
          color: SOLANA_COLORS.GREEN,
          caretColor: SOLANA_COLORS.GREEN,
        }}
      />
    </div>
  );
};

MacInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MacInput;