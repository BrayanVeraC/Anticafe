var valueimp = document.getElementById("nmesa")

function Mesa(nummesa){
  valueimp.value = nummesa
}


const packselect = document.querySelector('#selPack');
console.log(packselect);
packselect.addEventListener('change',()=>{
  let valorOption = packselect.value;
  console.log(valorOption);

  var optionSelect = packselect.options[packselect.selectedIndex];
  console.log("Opcion:", optionSelect.text);
  console.log("Valor:", optionSelect.value);
  
  /*Mostrar en el imput*/
  let inputresult = document.querySelector('#Pack').value=(optionSelect.text);
})