export default defineEventHandler(async (event) => {
    // handle query params
    const { name } = getQuery(event);

    // handle post data
    // const { age } = await readBody(event);
    // return {
    // message: `Hello ${name} You are ${age} years old`
    // };
    // api call with private key
    const data = await $fetch('https://api.openweathermap.org/data/3.0/onecall?lat=37.696255&lon=-122.049904&appid=7bf3d4a36141c0138cef4900809e0f9b');
    // console.log('data:', data);
    return data;
});
