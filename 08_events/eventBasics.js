// document.getElementById('japan').onclick = () => {
//     alert('Japan clicked')
// }  // it is not good approach because it gives less feature

// old days it were also used
// attachEvent
// jQuery

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget, 
// interview --> clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode


// document.getElementById('images').addEventListener('click', (e) => {
//     console.log('clicked inside the ul');
// }, false)

// document.getElementById('river').addEventListener('click', (e) => {
//     console.log('river clicked');
//     e.stopPropagation() // it stopes the event propagation or bubbling or capturing
// }, false)

// document.getElementById('google').addEventListener('click', (e) => {

//     console.log('google clicked');
//     e.preventDefault()
//     e.stopPropagation()
// }, false)

document.querySelector('#images').addEventListener('click', (e) => {
    // console.log(e.target.parentNode);
    console.log(e.target.tagName);

    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
    let removeIt = e.target.parentNode
    removeIt.remove() // it will remove the clicked parent li
   // removeIt.parentNode.removeChild(removeIt) 
    }
}, false)


