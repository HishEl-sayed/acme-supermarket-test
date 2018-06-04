import Basket from '../src/basket.js'
import pricingRules from '../src/rules.js'
import { FR1, SR1, CF1 } from '../src/items'

describe('Basket', () => {
    let basket
    beforeEach(() => {
      basket = new Basket(pricingRules)
    })
    it('tests that a combination of items can be added', () => {
      basket.add(FR1)
      basket.add(SR1)
      basket.add(FR1)
      basket.add(CF1)
      expect(basket.Total).toBe(19.34)
    })
    it('tests if buy one get one free is applied', () => {
      basket.add(FR1)
      basket.add(FR1)
      expect(basket.Total).toBe(3.11)
    })
    it('tests the bulk purchase discount is applied when 3 or more strawberries are applied', () => {
      basket.add(SR1)
      basket.add(SR1)
      basket.add(SR1)
      basket.add(FR1)
      expect(basket.Total).toBe(16.61)
    })
    it('tests that the basket returns 0 when nothing is in it', () => {
      expect(basket.Total).toBe(0)
    })
    it('tests that I can add products to the basket', () => {
      basket.add(SR1)
      basket.add(CF1)
      basket.add(SR1)
      basket.add(CF1)
      basket.add(FR1)
      expect(basket.products).toEqual([SR1, CF1, SR1, CF1, FR1])
    })
})
