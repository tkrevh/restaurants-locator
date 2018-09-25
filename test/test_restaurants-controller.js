var expect = require('chai').expect
var RestaurantService = require('../services/restaurants-service')
var RestaurantController = require('../controllers/restaurants-controller')

describe('filterByDistance()', function () {

    it('should return a list of all restautants within 100km radius', function () {

        const restaurants = RestaurantService.getRestaurants()
        const [myLatitude, myLongitude] = [40.730610, -73.935242]  // New York center
        const restaurantsOpenAt3 = RestaurantController.filterByDistance(restaurants, myLatitude, myLongitude, 100)

        expect(restaurantsOpenAt3.length).to.be.equal(10)

    })

    it('should return a single restautant within a 6.5km radius', function () {

        const restaurants = RestaurantService.getRestaurants()
        const [myLatitude, myLongitude] = [40.730610, -73.935242] // New York center
        const restaurantsOpenAt3 = RestaurantController.filterByDistance(restaurants, myLatitude, myLongitude, 6.5)

        expect(restaurantsOpenAt3.length).to.be.equal(1)

    })

    it('should return 4 restautants within a 6.8km radius', function () {

        const restaurants = RestaurantService.getRestaurants()
        const [myLatitude, myLongitude] = [40.730610, -73.935242] // New York center
        const restaurantsOpenAt3 = RestaurantController.filterByDistance(restaurants, myLatitude, myLongitude, 6.8)

        expect(restaurantsOpenAt3.length).to.be.equal(4)

    })

    it('should return 9 restautants within a 7.1km radius', function () {

        const restaurants = RestaurantService.getRestaurants()
        const [myLatitude, myLongitude] = [40.730610, -73.935242] // New York center
        const restaurantsOpenAt3 = RestaurantController.filterByDistance(restaurants, myLatitude, myLongitude, 7.1)

        expect(restaurantsOpenAt3.length).to.be.equal(9)

    })

    it('should return 10 restautants within a 10km radius', function () {

        const restaurants = RestaurantService.getRestaurants()
        const [myLatitude, myLongitude] = [40.730610, -73.935242] // New York center
        const restaurantsOpenAt3 = RestaurantController.filterByDistance(restaurants, myLatitude, myLongitude, 10)

        expect(restaurantsOpenAt3.length).to.be.equal(10)

    })

})

describe('filterIsOpenAt()', function () {

    it('should return a list of all restautants open at 3', function () {

        const restaurants = RestaurantService.getRestaurants()
        const restaurantsOpenAt3 = RestaurantController.filterIsOpenAt(restaurants, 3)

        expect(restaurantsOpenAt3.length).to.be.equal(0)

    })

    it('should return a list of all restautants open at 7', function () {

        const restaurants = RestaurantService.getRestaurants()
        const restaurantsOpenAt7 = RestaurantController.filterIsOpenAt(restaurants, 7)

        expect(restaurantsOpenAt7.length).to.be.equal(1)

    })

    it('should return a list of all restautants open at 12', function () {

        const restaurants = RestaurantService.getRestaurants()
        const restaurantsOpenAt12 = RestaurantController.filterIsOpenAt(restaurants, 12)

        expect(restaurantsOpenAt12.length).to.be.equal(8)

    })

    it('should return a list of all restautants open at 23', function () {

        const restaurants = RestaurantService.getRestaurants()
        const restaurantsOpenAt23 = RestaurantController.filterIsOpenAt(restaurants, 23)

        expect(restaurantsOpenAt23.length).to.be.equal(4)

    })

})

describe('sortByRating()', function () {

    it('should sort the restautants by their rating', function () {

        const restaurants = RestaurantController.filterIsOpenAt(RestaurantService.getRestaurants(), 23)
        const sortedRestaurants = RestaurantController.sortByRating(restaurants)


        expect(sortedRestaurants.length).to.not.be.equal(0)

        // iterate over sorted restaurants and make sure that each next restaurant in the list
        // has same or lower average rating
        let previousRestaurant = null;
        for (let restaurant of sortedRestaurants) {
            if (previousRestaurant == null) {
                previousRestaurant = restaurant
            }
            expect(restaurant.avgRating <= previousRestaurant.avgRating).to.be.true
        }

    })

})

