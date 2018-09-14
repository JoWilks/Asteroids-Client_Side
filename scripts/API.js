const users = []
let topTenScores = []
let scoresOfUser = []
let currentUserID
let newUser = ''
let newlist = ''
let checkName

class API {

static getUsers() {
  return fetch('http://localhost:3000/users')
  .then(resp => resp.json())
  .then(json =>
    json.forEach(user => users.push(user))
  )
  .then(ev => API.getTopTenScores())
  .then(ev => API.appendTopTenScores()).then( ev => API.promptUser())
}

static getUser() {
  return fetch(`http://localhost:3000/users/${users.count + 1}`)
  .then(resp => resp.json())
  .then(json =>
    console.log(json)
  )
  
}

static getTopTenScores() {
  return fetch('http://localhost:3000/scores')
  .then(resp => resp.json())
  .then(json => {
    topTenScores = []
    json.forEach(score => {
      topTenScores.push(score)
    })
  })
}

static getTopThreeScoresOfUser(user_id) {
  return fetch(`http://localhost:3000/users/${user_id}`)
  .then(resp => resp.json())
  .then(json => {
    scoresOfUser = json.scores.sort( function(a,b){ 
      return b.points - a.points
    }).slice(0,3)
    }).then( ev => API.appendTopThreeScores() )
}

static addNewUser(name) {
  fetch('http://localhost:3000/users', {
    method: "POST",
    body: JSON.stringify({name: name}),
    headers: {"Content-Type": "application/json"}
  })
  .then(resp => resp.json())
  .then(json => {
    console.log(json)
    newUser = json
  }).then(ev => API.findUser())
}

static findUser() {
  fetch(`http://localhost:3000/users/${newUser.id}`)
  .then(resp => resp.json())
  .then(json => console.log(json))
}

static addNewScore(points, user_id) {
  fetch('http://localhost:3000/scores', {
    method: "POST",
    body: JSON.stringify({points, user_id}),
    headers: {"Content-Type": "application/json"}
  })
  .then(resp => resp.json())
  .then(json => console.log(json)).then( ev => API.getTopTenScores())
  .then( ev => API.getTopThreeScoresOfUser(currentUserID))
}

static appendTopTenScores() {
  const list = document.querySelector("#list-all-scores")
  list.innerHTML = ''
  topTenScores.forEach( score => {
    let newLi = document.createElement("li")
    let user = users.find(user => user.id === score.user_id)
    newLi.innerText = `${score.points}   |   ${user.name}`
    list.append(newLi)
  })
}

static appendTopThreeScores() {
  newlist = document.querySelector("#t3s")
  newlist.innerHTML = ''
  scoresOfUser.forEach( score => {
    
    let string = `<li>${score.points}</li>`
    
    newlist.innerHTML += string

  })
}

static promptUser() {
  var user = prompt("Please enter your name", "Your name");
  checkName = users.find( userObj => userObj.name === user )

  if (checkName !== undefined && checkName.name === user){
    currentUserID = checkName.id
    API.getTopThreeScoresOfUser(currentUserID)
  }
  else if (checkName === undefined){
    API.addNewUser(user)
  }
}

}
