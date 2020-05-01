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
<div class="input-group mb-3">
    <div class= "hour" data-hourIndex="${i}"> <p>${i}:00 ${ampm}</p> </div>
    <input type="text" class="description" id="description" data-descIndex="${i}" placeholder="Task">      
    <button class="saveBtn" type="button" id="saveBtn" data-btnIndex="${i}"=>Save</button>
</div>
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

// for(let i = 0;i<userData.length;i++)
// {
//     console.log(userData)
   
//     if(hourList[i].textContent === userData[i].time)
//     {
//         console.log("match")
//         console.log
//     }
//     else{
//         console.log("not match")
//     }
// }
