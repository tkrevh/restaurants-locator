let fs = require('fs')
let Restaurant = require('../models/restaurant')

let restaurants_json = JSON.parse(fs.readFileSync('restaurants.json', 'utf8'))

class RestaurantsService {

    static getRestaurants() {
        const result = []
        restaurants_json["restaurants"].forEach((restaurant) => {
            result.push(new Restaurant(
                restaurant['name'],
                restaurant['latitude'],
                restaurant['longitude'],
                restaurant['open_from'],
                restaurant['open_to'],
                restaurant['avg_rating'])
            )
        })

        return result
    }

}

module.exports = RestaurantsService