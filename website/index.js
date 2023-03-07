function myFunction(event) {
    event.preventDefault();
    const dropdowndiv = document.getElementById("dropdowndiv");
    const dropdownc = document.getElementById("countries");
    dropdowndiv.style.display = "block";
    fetch('https://eneb453.s3.us-east-2.amazonaws.com/country.json')
    .then (response => { return response. json();})
    .then (users => {
        dropdownc.innerHTML = "";
        dropdownc.appendChild(createOption("select a country",""))
        for(let i = 0; i<users.length;i++){
            dropdownc.appendChild(createOption(users [i].name,users [i].iso))
        }
    });
}

function createOption(label, value) {
    const opt = document.createElement('option');
    opt.textContent = label;
    opt.setAttribute('value', value );
    return opt;
}

function cfunction(event){
    const dropdownc = document.getElementById("countries");
    const imagediv = document.getElementById("imagediv");
    if (dropdownc.value == "") return;
    fetch('https://eneb453.s3.us-east-2.amazonaws.com/'+dropdownc.value+'/pictures.json')
    .then (response => { return response. json();})
    .then (pictures => {
        imagediv.innerHTML = "";
        for(let i = 0; i<pictures.length;i++){
            const img = document.createElement('img');
            img.src = 'https://eneb453.s3.us-east-2.amazonaws.com/'+dropdownc.value +'/'+pictures[i].filename;
            imagediv.appendChild(img);
        }
    });
}