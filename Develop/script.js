let a = new Date()
let b = Date.now()
let ampm
// console.log("abc " + a)
// console.log(b)



for(let i = 0 ; i < 24; i++)
{
    (i > 12)? ampm = 'PM' : ampm = "AM"
    
let newElem = document.createElement('div')
newElem.innerHTML = `  
<div class = "row">
<div class="input-group mb-3">
    <div class= "hour" data-hourIndex="${i}"> <p>${i}:00 ${ampm}</p> </div>
    <input type="text" class="description" id="description" data-descIndex="${i}" placeholder="Task">      
    <button class="saveBtn" type="button" id="saveBtn" data-btnIndex="${i}"=>Save</button>
</div>
</div>`

document.getElementById('container').append(newElem)
}

let timeList = document.querySelector('#container')
let descList = timeList.querySelectorAll('#description')
let hourList = timeList.querySelectorAll('.hour')

document.addEventListener('click', (event) =>
{
    if(event.target.id === "saveBtn")
    {
    console.log(hourList[event.target.dataset.btnindex].textContent)

    console.log(hourList[event.target.dataset.btnindex])
    }
    
  
   

})