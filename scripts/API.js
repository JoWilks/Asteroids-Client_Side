const users = []
let topTenScores = []

class API {

static getUsers() {
  return fetch('http://localhost:3000/users')
  .then(resp => resp.json())
  .then(json =>
    json.forEach(user => users.push(user))
  )
  .then(API.getTopTenScores())
  .then(API.appendTopTenScores())
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

static addNewUser(name) {
  fetch('http://localhost:3000/users', {
    method: "POST",
    body: JSON.stringify({name: name}),
    headers: {"Content-Type": "application/json"}
  })
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
  .then(json => console.log(json))
}

static appendTopTenScores() {
  const list = document.querySelector("#list-all-scores")
  list.innerHTML = ''
  topTenScores.forEach( score => {
    let newLi = document.createElement("li")
    let user = users.find(user => user.id === score.user_id)
    newLi.innerText = `${score.points} | ${user.name}`
    list.append(newLi)
  })
}

}
