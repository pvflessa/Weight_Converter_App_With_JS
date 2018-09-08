
document.querySelector('#results').style.visibility = 'hidden'
document.querySelector('#weightInput').addEventListener('input',(e)=>{


  let weightInput =e.target.value


document.querySelector('#gramsResult').innerHTML = weightInput/0.0022046
document.querySelector('#kgResult').innerHTML = weightInput/2.2046
document.querySelector('#ouncesResult').innerHTML = weightInput*16

document.querySelector('#results').style.visibility = 'visible'




})
