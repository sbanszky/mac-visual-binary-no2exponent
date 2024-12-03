import React, { useState } from 'react';
import MacSection from './MacSection';
import MacInput from './MacInput';
import { splitMacAddress } from '../utils/macUtils';

const MacAddress = () => {
  const [macAddress, setMacAddress] = useState('AABBCCDDEEFF');
  const macParts = splitMacAddress(macAddress);

  return (
    <div className="min-h-screen bg-black p-4 flex flex-col items-center justify-center">
      <MacInput value={macAddress} onChange={setMacAddress} />
      <div className="w-full max-w-2xl">
        <div className="flex justify-center gap-8">
          <MacSection title="OUI" values={macParts.oui} />
          <MacSection title="Serial" values={macParts.serial} />
        </div>
      </div>
    </div>
  );
};

export default MacAddress;