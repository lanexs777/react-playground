export const fetchExampleAPI = async () => {
    const response = await fetch(
        "https://run.mocky.io/v3/c7e9f04d-387b-471e-95bd-7a88a814e8f3?mocky-delay=500ms"
    );

    if(!response.ok) throw new Error("API Error");
    return response.json();
};
