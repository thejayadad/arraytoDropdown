
let tvs = [
    { name: "Samsung", size: 55},
    {name: "Sony", size: 65},
    {name: "LG", size: 60}
]


tvs.forEach((tv) => {
    let option = document.createElement("option");
    option.text = tv.name;
    option.value = tv.size;
    select.appendChild(option);
});
select.onchange = function(){
    result.innerText = select.value + " inch remaining";
}