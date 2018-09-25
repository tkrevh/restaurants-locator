class Restaurant {
    constructor(name, latitude, longitude, openFrom, openTo, avgRating) {
        this.name = name
        this.latitude = latitude
        this.longitude = longitude
        this.openFrom = openFrom
        this.openTo = openTo
        this.avgRating = avgRating
    }

    toString() {
        return `${this.name} open from ${this.openFrom} to ${this.openTo} (${this.avgRating}*)`
    }
}

module.exports = Restaurant