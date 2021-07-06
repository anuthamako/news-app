const baseUrl = "http://localhost:5678/news/"

let APIs = {
    get: async function(type) {
        let options = {
            method: "GET"
        };
    
        var url = `${baseUrl}?type=${type}&query=${type}`;
        const response = await fetch(
            url,
            options
        );
        return response.json();
    }
}

export default APIs;