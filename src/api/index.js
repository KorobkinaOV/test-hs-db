import { getReq } from '../utils/axios';

export const getInfo = () => {
  return getReq('info');
};

export const getCardsByClass = (gameClass) => {
  return getReq(`cards/classes/${gameClass}`);
};

export const getCardsSet = () => {
  return getReq('cards/sets/Classic');
};

export const getSingleCard = (name) => {
  return getReq(`cards/${name}`);
};