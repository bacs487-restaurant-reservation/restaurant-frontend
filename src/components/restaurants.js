export const getAllRestaurants = async () => {
    try {
        const response = await fetch(`http://143.198.139.94:3000/restaurants/`);
        return await response.json();
    } catch (err) {
        console.log(err);
    }
}