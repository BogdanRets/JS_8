window.onload = ()=>{

    let menuItems = ['index1','index2','index3','index4','index5','index6','index7','index8','index9','index10'];
  
    for (let i = 0; i < menuItems.length; i++) {
      let redirect = document.createElement('a');
      redirect.href = `${menuItems[i]}.html`;
      redirect.className = 'menu-item'
      if(i == 1){
        redirect.classList.add('active')
      }
      redirect.textContent = menuItems[i];
      document.body.appendChild(redirect); 
      redirect.style.display = 'inline-block'
      redirect.style.padding = '20px'
      redirect.style.color = 'red'
    }
  
    let [...inputs] = document.querySelectorAll('input')
    
    inputs.forEach(input =>{
      input.removeAttribute('disabled')
      input.style.backgroundColor = 'green'
      input.style.color = 'white'
    })
     
  
  }