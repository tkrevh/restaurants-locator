let GeoMath = require('../utils/geomath')

class RestaurantsController {

    static filterByDistance(restaurants, latitude, longitude, radiusInKilometers) {
        return restaurants.filter( restaurant =>
            GeoMath.distanceBetweenPoints(latitude, longitude, restaurant.latitude, restaurant.longitude) <= radiusInKilometers
        )
    }

    static filterIsOpenAt(restaurants, hour) {
        return restaurants.filter( restaurant => restaurant.openFrom <= hour && hour <= restaurant.openTo )
    }

    static sortByRating(restaurants, hour) {
        return restaurants.sort( (restaurant1, restaurant2) => restaurant1.avgRating < restaurant2.avgRating )
    }
}

module.exports = RestaurantsController