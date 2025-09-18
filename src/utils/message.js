import CryptoJS from "crypto-js";

export const encryptMessage = (message, key) => {
  if (!message || !key) return;
  const SECRET_KEY = key;
  const result = CryptoJS.AES.encrypt(message, SECRET_KEY).toString();
  return result;
};

export const decryptMessage = (message, key) => {
  if (!message || !key) return;
  const SECRET_KEY = key;
  const bytes = CryptoJS.AES.decrypt(message, SECRET_KEY);
  const result = bytes.toString(CryptoJS.enc.Utf8);
  return result;
};
