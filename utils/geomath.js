class GeoMath {

    static deg2rad(deg) {
        return deg * (Math.PI/180)
    }

    static distanceBetweenPoints(lat1,lon1,lat2,lon2) {
        if (Math.abs(lat1) > 90) {
            throw new Error('Latitude1 is out of range')
        }
        if (Math.abs(lat2) > 90) {
            throw new Error('Latitude2 is out of range')
        }
        if (Math.abs(lon1) > 180) {
            throw new Error('Longitude1 is out of range')
        }
        if (Math.abs(lon2) > 180) {
            throw new Error('Longitude2 is out of range')
        }
        const R = 6371                   // radius of earth
        const dLat = GeoMath.deg2rad(lat2-lat1)  // convert to radians first
        const dLon = GeoMath.deg2rad(lon2-lon1)
        const a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(GeoMath.deg2rad(lat1)) * Math.cos(GeoMath.deg2rad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2)
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
        const d = R * c
        return d // distance in km
    }
}


module.exports = GeoMath