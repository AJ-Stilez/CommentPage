// let data;
async function hello(){
    const data = await fetchData();
    console.log(data)
}

function fetchData(){
    let result =  fetch("data.json")
    .then(data => data.json())
    .then(response => response);
   
    return result;
}


hello()