function mungeLocation(locationData) {
    try {
        const firstItem = locationData[0];
    
    
        return {
            formatted_query: firstItem.display_name,
            latitude: firstItem.lat,
            longitude: firstItem.lon
        };
    } catch (e) {
        return {};
    }
}

function mungeWeather(weatherData) {
    try {
        const transformedData = weatherData.data.map((forecast) => {

            return {
                forecast: forecast.weather.description,
                time: forecast.valid_date
            }; 
       
        });
        return transformedData.slice(0, 8);
    } catch (e){
        return [{}];

    }
}
module.exports = {
    mungeLocation, mungeWeather,
};