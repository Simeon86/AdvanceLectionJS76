// Rock, Paper, Scissor

function rockPaperScrissor(p1, p2) {
    if(p1 == p2) {
        return 'draw';
    }
    
    let choices = ['rock', 'scissor', 'paper']
    p1 = choices.indexOf(p1)
    p2 = choices.indexOf(p2)

    if(p1 === choices.length - 1 && p2 == 0)
        return 'Left wins'
    else if(p2 === choices.length - 1 && p1 == 0) 
        return 'Right wins'

    if(p1 < p2) {
      return 'Left wins'
    } else {
      return 'Right wins'
    }
}
  
console.log(rockPaperScrissor('paper', 'rock'))
console.log(rockPaperScrissor('paper', 'scissor'))
console.log(rockPaperScrissor('paper', 'paper'))
console.log(rockPaperScrissor('scissor', 'rock'))


