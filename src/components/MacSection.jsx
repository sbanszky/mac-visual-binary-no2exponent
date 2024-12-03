import React from 'react';
import PropTypes from 'prop-types';
import MacOctet from './MacOctet';
import { SOLANA_COLORS } from '../constants/colors';

const MacSection = ({ title, values }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-center mb-1">
        <span 
          className="text-[10px] font-mono"
          style={{ color: SOLANA_COLORS.GREEN }}
        >
          {title}
        </span>
      </div>
      <div className="flex justify-center">
        {values.map((value, index) => (
          <MacOctet 
            key={`${title.toLowerCase()}-${index}`} 
            value={value} 
            label={`Octet ${index + (title === 'Serial' ? 4 : 1)}`} 
          />
        ))}
      </div>
    </div>
  );
};

MacSection.propTypes = {
  title: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MacSection;