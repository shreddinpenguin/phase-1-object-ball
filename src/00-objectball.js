function gameObject(){
    return {
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12, 
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Allan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
    } 
}
const gameStats = gameObject()
console.log(gameStats)
homeTeam = gameStats["home"]["teamName"]
awayTeam = gameStats["away"]["teamName"]

const home = gameStats.home
const away = gameStats.away
const allPlayers = {...home["players"], ...away["players"]}

function numPointsScored(name){
    if (gameStats.away.players[name]){
        return gameStats.away.players[name].points
    }
    else if (gameStats.home.players[name]){
        return gameStats.home.players[name].points
    }
    else {
        return "player not found"
    }
}
console.log(numPointsScored("Jeff Adrien"))

function shoeSize(name){
    if (gameStats.away.players[name]){
        return gameStats.away.players[name].shoe
    }
    else if (gameStats.home.players[name]){
        return gameStats.home.players[name].shoe
    }
    else {
        return "player not found"
    }
}
console.log(shoeSize("Jason Terry"))

function teamColors(teamName){
    if (gameStats.away.teamName === teamName){
        return gameStats.away.colors
    }
    else if (gameStats.home.teamName === teamName){
        return gameStats.home.colors
    }
    else {
        return "team not found"
    }
}
console.log(teamColors("Brooklyn Nets"))
console.log(teamColors("Charlotte Hornets"))

function teamNames() {
    const teamNames = []
    teamNames.push(gameStats.away.teamName)
    teamNames.push(gameStats.home.teamName)
    return teamNames
}
// function teamNames(){
//     return [homeTeam.teamName, awayTeam.teamName]
// }
console.log(teamNames())

function playerNumbers(name){
    let teamPlayers = (home.teamName === name) ? home.players : away.players
    let playerNum = []
    for (let player in teamPlayers){
        playerNum.push(teamPlayers[player].number)
    }
    return playerNum
}
console.log(playerNumbers("Charlotte Hornets"))
console.log(playerNumbers("Brooklyn Nets"))

function playerStats(name){
    return allPlayers[name]
}
console.log(playerStats("Jason Terry"))

function bigShoe(){
    let bigPlayer = {shoe: 0, player: null}
    for (let x in allPlayers){
        if (allPlayers[x].shoe > bigPlayer.shoe){
            bigPlayer.shoe = allPlayers[x].shoe
            bigPlayer.player = x
        }
    }
    return bigPlayer
}
console.log(bigShoe())
// => { shoe: 19, player: 'Mason Plumlee' }