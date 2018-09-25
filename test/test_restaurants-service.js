var expect = require('chai').expect
var RestaurantService = require('../services/restaurants-service')

describe('getRestaurants()', function () {

    it('should return a list of all restautants', function () {

        const restaurants = RestaurantService.getRestaurants()

        expect(restaurants).to.not.be.null
        expect(restaurants.length).to.be.equal(10)

    })

})