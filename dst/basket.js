import pricingRules from './rules.js';
import { FR1, SR1, CF1 } from './items';

class Basket {
  constructor(rule, ...products) {
    this.rule = Object.keys(rule);
    this.products = [];
    this.discountedProductPrices = [];
    this.freeItems = 0;
    this.bulkItems = 0;
  }
  get Total() {
    this.products.forEach(product => {
      if (product.code === this.rule[0]) {
        return this.discountedProductPrices.push(this.getFree(product.price));
      } else if (product.code === this.rule[1]) {
        return this.discountedProductPrices.push(this.getBulk(product.price));
      }
      return this.discountedProductPrices.push(this.getNoRule(product.price));
    });
    return this.addTotal(this.discountedProductPrices);
  }

  add(item) {
    this.products.push(item);
  }

  getFree(freePrice) {
    this.freeItems++;
    if (this.freeItems % 2 === 0) {
      return freePrice - freePrice;
    }
    return freePrice;
  }

  getBulk(bulkPrice) {
    this.bulkItems++;
    const priceOff = 0.50;
    if (this.bulkItems >= 3) {
      // return this.discountedProductPricesforEach(function(element) {
      //   console.log(element);
      // });
    }
    return bulkPrice;
  }

  getNoRule(noRulePrice) {
    return noRulePrice;
  }

  addTotal(prices) {
    if (prices.length > 0) {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return prices.reduce(reducer);
    }
    return 0;
  }
}

export default Basket;