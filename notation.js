const boutton1 = document.querySelector("#button1")
  const boutton2 = document.querySelector("#button2")
  const boutton3 = document.querySelector("#button3")
  const boutton4 = document.querySelector("#button4")
  const boutton5 = document.querySelector("#button5")
  const monSubmit = document.querySelector(".submit")
  let note = 0

  boutton1.addEventListener("focus",() =>{
    boutton1.style.backgroundColor = "hsl(25, 97%, 53%)"
    note = 1
  })
  boutton1.addEventListener("blur",() =>{
    boutton1.style.backgroundColor = "gray"
  })

  boutton2.addEventListener("focus",() =>{
    boutton2.style.backgroundColor = "hsl(25, 97%, 53%)"
    note = 2
  })
  boutton2.addEventListener("blur",() =>{
    boutton2.style.backgroundColor = "gray"
  })

  boutton3.addEventListener("focus",() =>{
    boutton3.style.backgroundColor = "hsl(25, 97%, 53%)"
    note = 3
  })
  boutton3.addEventListener("blur",() =>{
    boutton3.style.backgroundColor = "gray"
  })

  boutton4.addEventListener("focus",() =>{
    boutton4.style.backgroundColor = "hsl(25, 97%, 53%)"
    not = 4
  })
  boutton4.addEventListener("blur",() =>{
    boutton4.style.backgroundColor = "gray"
  })

  boutton5.addEventListener("focus",() =>{
    boutton5.style.backgroundColor = "hsl(25, 97%, 53%)"
    note = 5
  })
  boutton5.addEventListener("blur",() =>{
    boutton5.style.backgroundColor = "gray"
  })

  monSubmit.addEventListener("click",() =>{
    if(note === 0) {
      alert("choisissez une note")
    }else{
      window.location.href = "remerciements.html?variable=" + note
    }
  })