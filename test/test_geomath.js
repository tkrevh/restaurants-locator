var expect = require('chai').expect
var GeoMath = require('../utils/geomath')

describe('distanceBetweenPoints()', function () {

    it('should raise error when longitude or latitude are invalid', function () {

        expect(() => GeoMath.distanceBetweenPoints(91, 180, 90, 180)).to.throw('Latitude1 is out of range')
        expect(() => GeoMath.distanceBetweenPoints(90, 180, 91, 180)).to.throw('Latitude2 is out of range')
        expect(() => GeoMath.distanceBetweenPoints(90, 181, 90, 180)).to.throw('Longitude1 is out of range')
        expect(() => GeoMath.distanceBetweenPoints(90, 180, 90, 181)).to.throw('Longitude2 is out of range')

    })

    it('should calculate distance 0 between the same coordinates', function () {

        const [lat1, lon1] = [40.730610, -73.935242] // New York
        const [lat2, lon2] = [40.730610, -73.935242] // New York

        const d = GeoMath.distanceBetweenPoints(lat1, lon1, lat2, lon2)

        expect(d).to.be.equal(0)

    })

    it('should calculate distance different to 0 km between two different coordinates', function () {

        const [lat1, lon1] = [40.730610, -73.935242] // New York
        const [lat2, lon2] = [40.792240, -73.138260] // Long Island

        const d = GeoMath.distanceBetweenPoints(lat1, lon1, lat2, lon2)

        expect(d).to.not.be.equal(0)
    })

    it('should calculate exact distance between two different coordinates', function () {

        const [lat1, lon1] = [40.730610, -73.935242] // New York
        const [lat2, lon2] = [40.792240, -73.138260] // Long Island

        const d = GeoMath.distanceBetweenPoints(lat1, lon1, lat2, lon2)

        expect(Math.round(d*100)/100).to.be.equal(67.47)
    })

})
