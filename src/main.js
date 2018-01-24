let PayPalCheckout;

if (process.browser) {
  PayPalCheckout = require('./components/PayPalCheckout.vue');

  const components = {
    'paypal-checkout': PayPalCheckout,
  };

  Object.keys(components).forEach((name) => {
    // in browsers ~
    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.component(name, components[name]);
    }
  });
}

module.exports = PayPalCheckout;
