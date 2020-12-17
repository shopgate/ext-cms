import {
  NAV_MENU_TERMS, NAV_MENU_PRIVACY, NAV_MENU_IMPRINT, NAV_MENU_STORE_INFORMATION,
} from '@shopgate/engage/core';
import { NAV_MENU_SHIPPING, NAV_MENU_PAYMENT, NAV_MENU_RETURN_POLICY } from '@shopgate/engage/market';
import config from '../config';

const { navMenu = {} } = config;
const allOff = Object.values(navMenu).every(value => !value);

const {
  shipping = true,
  payment = true,
  terms = true,
  privacy = true,
  'return-policy': returnPolicy = true,
  imprint = true,
} = navMenu;

/**
 * Check if config is on for given portal
 * @param {string} name name of portal
 * @returns {boolean}
 */
const isMenuActive = (name) => {
  switch (name) {
    case NAV_MENU_SHIPPING: return shipping;
    case NAV_MENU_PAYMENT: return payment;
    case NAV_MENU_TERMS: return terms;
    case NAV_MENU_PRIVACY: return privacy;
    case NAV_MENU_RETURN_POLICY: return returnPolicy;
    case NAV_MENU_IMPRINT: return imprint;
    case NAV_MENU_STORE_INFORMATION: return !allOff;
    default: return true;
  }
};

/**
 * @returns {JSX}
 */
const MenuEntry = ({ name, children }) => {
  if (isMenuActive(name)) {
    return children;
  }
  return null;
};

export default MenuEntry;
