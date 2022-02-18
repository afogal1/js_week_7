const getData = async () => {
    let response = await axios.get(`https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers`)
    console.log(response.data)
    return response.data
}

// Create Constant to hold DOM Elements 
const DOM_Elements = {
    rangers: '.ranger-list'

}

// Create Ranger List HTML
const create_ranger = (id, name, power_coin, color, season) => {
    const html = `<a href ='#' class= 'list-group-item list-group-item-action 
    list-group-item-light' id="${id}">${name} ${color} ${power_coin} ${season}</a>`

    // 'Paste' new list item on document
    document.querySelector(DOM_Elements.rangers).insertAdjacentHTML("beforeend",html)
}

// Function to Load Each Ranger 
const loadData = async () => {
    const rangerList = await getData();

    rangerList.forEach(ranger => create_ranger(ranger.id,ranger.name,ranger.color,ranger['power-coin'],ranger.season));

}

// function to Clear Data
const clearData = () =>{
    document.querySelector(DOM_Elements.rangers).innerHTML = '';
} 
