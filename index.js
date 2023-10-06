
    

let homee = document.getElementById("home")
homee.onclick=function home () {

 document.body.style.backgroundColor='red'
 document.getElementById("home").innerText='Lorem ipsum dolor sit amet consectetur adipiscing elit Fusce sodales nulla nec libero rutrum, vel dignissim turpis euismod Suspendisse malesuada, justo eu iaculis sagittis, quam odio laoreet justo vel blandit justo metus in erat Nulla facilisi. Praesent facilisis augue ut ligula luctus, non sodales dui efficitur In et nunc purus Sed in metus eu odio cursus tincidunt ut et metus. Suspendisse ut libero in libero egestas facilisis Curabitur'
}
//

let aout = document.getElementById("a")
aout.onclick=function a () {
 document.body.style.backgroundColor='blue'
 document.getElementById("a").innerText='Lorem ipsum dolor sit amet consectetur adipiscing elit Fusce sodales nulla nec libero rutrum, vel dignissim turpis euismod Suspendisse malesuada, justo eu iaculis sagittis, quam odio laoreet justo vel blandit justo metus in erat Nulla facilisi. Praesent facilisis augue ut ligula luctus, non sodales dui efficitur In et nunc purus Sed'
}
let our =document.getElementById('s')
our.onclick=function s () {
 document.body.style.backgroundColor='green'
 document.getElementById('s').innerHTML=`
     <li>Service 1</li>
     <li>Service 2</li>
     <li>Service 3</li>`
}
