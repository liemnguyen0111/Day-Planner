let a = new Date()
let b = Date.now()
let ampm
// console.log("abc " + a)
// console.log(b)
let userData = []



for(let i = 0 ; i < 24; i++)
{
    (i > 12)? ampm = 'PM' : ampm = "AM"


let newElem = document.createElement('div')
newElem.innerHTML = `  
<div class = "row">

    <div class= "hour" data-hourIndex="${i}"> <p>${i}:00 ${ampm}</p> </div>
    <input type="textarea" class="description" id="description" data-descIndex="${i}" placeholder="Task">      
    <button class="saveBtn" type="button" id="saveBtn" data-btnIndex="${i}"=>Save</button>

</div>`

document.getElementById('container').append(newElem)
}


// Query items 
let timeList = document.querySelector('#container')
let descList = timeList.querySelectorAll('#description')
let hourList = timeList.querySelectorAll('.hour')



document.addEventListener('click', (event) =>
{
    if(event.target.id === "saveBtn")
    {
    let tempData = new Object()
    tempData.time = hourList[event.target.dataset.btnindex].textContent
    tempData.task = descList[event.target.dataset.btnindex].value

    let tempIndex = userData.findIndex(x => x.time === `${tempData.time}`)
    let tempLength = descList[event.target.dataset.btnindex].value.length 
    console.log(tempIndex)

        
    if( tempLength > 0 && tempIndex === -1)
    {
        console.log("is pushed")
       userData.push(tempData)
       console.log(userData.findIndex(x => x.time === `${tempData.time}`))
       console.log(userData)
       setData()
    }
    else
    {
    userData[tempIndex].task = descList[event.target.dataset.btnindex].value
    console.log(userData)
    setData()
    }
}

})

/** Query data from  */

/** Store task and time into client-side storage */
let setData = () =>
{
    localStorage.setItem("data", JSON.stringify(userData))
}

/** Check and get high score from client-side storage */
const getData = () =>
{
        return JSON.parse(localStorage.getItem('data'))
}

userData = getData()

for(let i = 0;i<24;i++)
{
    let tempIndex = userData.findIndex(x => x.time === hourList[i].textContent)
    // console.log(tempIndex)
   if(tempIndex !== -1)
    descList[i].value = userData[tempIndex].task
}

// Date
document.getElementById("currentDay").textContent = `${Date().slice(0,33)}`
setInterval(function(){ 
               
            document.getElementById("currentDay").textContent = `${Date().slice(0,33)}`
            check()
         }, 1000)

// Check and change color
let check = () =>
{
    let moment = Date().slice(16,18)
    // console.log(moment)
    for(let i = 0 ; i < 24; i++)
    {
        if(parseInt(moment) > parseInt(hourList[i].textContent.slice(0,3).replace(/:/g, "")))
       descList[i].setAttribute("class","past")
       if(parseInt(moment) === parseInt(hourList[i].textContent.slice(0,3).replace(/:/g, "")))
       descList[i].setAttribute("class","present")
       if(parseInt(moment) < parseInt(hourList[i].textContent.slice(0,3).replace(/:/g, "")))
       descList[i].setAttribute("class","future")
    }
}
