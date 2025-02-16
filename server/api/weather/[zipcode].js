export default defineEventHandler(async (event) => {
    const { zipcode } = event.context.params;
    console.log('zipcode:', zipcode);
    const { lat, lon } = {
        lat: 37.696255,
        lon: -122.049904
    };
    const { weatherAPIKey } = useRuntimeConfig();
    const uri = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}`;

    const data = await $fetch(uri);

    return data;
});
