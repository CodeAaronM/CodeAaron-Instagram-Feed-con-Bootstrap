

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


window.onload = () => {
  
    document.querySelector("#random").innerHTML = random();
  };

  const random = () => {
    let a = Math.floor(Math.random() * 1000);
    console.log(a);
    return a
}