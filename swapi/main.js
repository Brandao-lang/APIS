const btn = document.querySelector('button')

function clicker(evnt) {
    console.log("button clicked!")
}



btn.addEventListener('click', () => {
    axios 
        .get('https://swapi.dev/api/planets/?search=Alderaan')
        .then(function(res) {
            let alderaan = res.data
            
            for (let personURL in alderaan.results[0].residents) {
                console.log(personURL)
                axios
                    .get(alderaan.results[0].residents[personURL])
                    .then(function(res) {
                        let profile = res.data
                        console.log(profile.name)
                        let name = document.createElement("h2")
                        name.textContent = profile.name
                        document.body.appendChild(name)
                    })
            }
          
            })
})