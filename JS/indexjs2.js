window.onload = ()=>{
    let users = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
        phone: "770-736-8031 x5644",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets"
        }
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
          street: "Victor Plains",
          suite: "Suite 879",
          city: "Wisokyburgh",
          zipcode: "90566-7771",
          geo: {
            lat: "-43.9509",
            lng: "-34.4618"
          }
        },
        phone: "010-692-6593 x0912",
        website: "anastasia.net",
        company: {
          name: "Deckow-Crist",
          catchPhrase: "Proactive didactic contingency",
          bs: "synergize scalable supply-chains"
        }
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
          street: "Douglas Extension",
          suite: "Suite 847",
          city: "McKenziehaven",
          zipcode: "59590-4157",
          geo: {
            lat: "-68.6102",
            lng: "-47.0653"
          }
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        company: {
          name: "Romaguera-Jacobson",
          catchPhrase: "Face to face bifurcated interface",
          bs: "e-enable strategic applications"
        }
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        address: {
          street: "Hoeger Mall",
          suite: "Apt. 692",
          city: "South Elvis",
          zipcode: "53919-4257",
          geo: {
            lat: "29.4572",
            lng: "-164.2990"
          }
        },
        phone: "493-170-9623 x156",
        website: "kale.biz",
        company: {
          name: "Robel-Corkery",
          catchPhrase: "Multi-tiered zero tolerance productivity",
          bs: "transition cutting-edge web services"
        }
      }
    ]
    let fragment = document.createDocumentFragment();
  
    let body = document.querySelector('body')
    body.style.backgroundColor = 'black'
  
      let divCont = document.createElement('div')
      divCont.className = 'container'
      fragment.appendChild(divCont)
  
        let divRow = document.createElement('div')
        divRow = document.createElement('div')
        divRow.className = 'row align-items-center'
        
        divRow.style.color = 'white'
        divCont.appendChild(divRow)
  
    for (let i = 0; i < users.length; i++){

        let divCol = document.createElement('div')
        divCol.className = 'col-3 bg-gray border'
        divRow.appendChild(divCol)
    
        let title = document.createElement('h2')
        title.innerHTML = users[i].name 
        divCol.appendChild(title)
    
        let username = document.createElement('h3')
        username.innerHTML = users[i].username
        divCol.appendChild(username)
    
        let email = document.createElement('a')
        email.innerHTML = users[i].email
        email.href = '#'
        divCol.appendChild(email)
    
        let address = document.createElement('h3')
        address.className = ''
        address.innerHTML = `city: ${users[i].address.city}`
        divCol.appendChild(address)
    
        let phone = document.createElement('h4')
        phone.className = 'text-nowrap';
        phone.innerHTML = `phone: ${users[i].phone}` 
        divCol.appendChild(phone)
    
        let website = document.createElement('a')
        website.innerHTML = users[i].website
        website.href = '#'
        divCol.appendChild(website)
    
        let companyblock = document.createElement('h5')
        companyblock.className = 'text-nowrap'
        companyblock.innerHTML = `company: ${users[i].company.name}`
        divCol.appendChild(companyblock)
    }
    document.body.appendChild(fragment);
}