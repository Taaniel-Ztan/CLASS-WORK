password = prompt("Sisesta üks number 1-10-ni")
let proovis = 0
let imelik = Math.floor(Math.random() * 10) + 1;
while (password != imelik)
{
   console.log(imelik)
    proovis++
    if (proovis == 1){
    console.log("Oled proovinud " + proovis + " korra")
    }
    else console.log("Oled proovinud " + proovis + " korda")
    if (proovis == 3){
       break
        }
    if(password == imelik-1||password == imelik+1){
    console.log("Ai, sa pakkusid väga lähedale.")
}
    alert("Sorry, "+ password +" ei ole õige number.")
    password = prompt("Sisesta parool")
    if (password == null){
        break
        }
    if (password == imelik){
console.log("Yay! Arvasid õige numbri ära!")
    }
}
