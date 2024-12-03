import React from 'react';
import PropTypes from 'prop-types';
import { SOLANA_COLORS } from '../constants/colors';

const BinaryDigit = ({ value }) => {
  return (
    <div className="inline-block mx-[1px]">
      <div 
        className="w-3.5 h-3.5 border border-[1px] rounded-md flex items-center justify-center font-mono text-[10px]"
        style={{ 
          borderColor: SOLANA_COLORS.GREEN,
          color: SOLANA_COLORS.GREEN
        }}
      >
        {value}
      </div>
    </div>
  );
};

BinaryDigit.propTypes = {
  value: PropTypes.oneOf(['0', '1']).isRequired
};

export default BinaryDigit;