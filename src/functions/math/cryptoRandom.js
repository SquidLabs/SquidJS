// @flow
const crypto = window.crypto || window.msCrypto;

export default function cryptoRandom(length: number) {
  return crypto.getRandomValues(length);
};
