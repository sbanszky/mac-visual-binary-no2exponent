import React from 'react';
import PropTypes from 'prop-types';
import BinaryDigit from './BinaryDigit';
import { hexToBinary } from '../utils/macUtils';
import { SOLANA_COLORS } from '../constants/colors';

const MacOctet = ({ value, label }) => {
  const binary = hexToBinary(value);
  
  return (
    <div className="flex flex-col items-center mx-0.5">
      <div 
        className="mb-0.5 font-bold text-[10px]"
        style={{ color: SOLANA_COLORS.BLUE }}
      >
        {value}
      </div>
      <div className="flex">
        {binary.split('').map((bit, index) => (
          <BinaryDigit key={index} value={bit} />
        ))}
      </div>
      <div 
        className="mt-0.5 font-bold text-[8.5px]"
        style={{ color: SOLANA_COLORS.BLUE }}
      >
        {label}
      </div>
    </div>
  );
};

MacOctet.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default MacOctet;