export const hexToBinary = (hex) => {
  return parseInt(hex || '0', 16).toString(2).padStart(8, '0');
};

export const splitMacAddress = (mac) => {
  const paddedMac = mac.padEnd(12, '0');
  return {
    oui: [paddedMac.slice(0, 2), paddedMac.slice(2, 4), paddedMac.slice(4, 6)],
    serial: [paddedMac.slice(6, 8), paddedMac.slice(8, 10), paddedMac.slice(10, 12)]
  };
};

export const isValidMacAddress = (mac) => {
  return /^[0-9A-F]{12}$/.test(mac);
};