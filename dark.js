let toggle=document.getElementById('toggle')
toggle.addEventListener('change', (event)=>{
    let checket=event.target.checket;
    document.body.classList.toggle('dark')
    
})