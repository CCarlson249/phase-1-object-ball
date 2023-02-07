const obj = {
    home: {
        teamName: "Brooklyn Nets",
        colors: ["black", "white"],
        players:{
            "Alan Anderson": {        //0 16 22 12 12 3 1 1
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1},

            "Reggie Evans": {        //30 14 12 12 12 12 12 7
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7},

            "Brook Lopez": {       // 11 17 17 19 10 3 1 15
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15},

            "Mason Plumlee": {        // 1 19 26 12 6 3 8 5
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5},       
            
            "Jason Terry": {        // 31 15 19 2 2 4 11 1
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1},     


    }},
    away: {
        teamName: "Charolotte Hornets",
        colors: ["Tuquoise", "Purple"],
        players:{
            "Jeff Adrien": {        //4 18 10 1 1 2 7 2
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2}, 
            
            "Bismak Biyombo": {        //0 16 12 4 7 7 15 10
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10}, 
            
            "DeSagna Diop": {        //2 14 24 12 12 4 5 5
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5}, 
            
            "Ben Gordon": {        //8 15 33 3 2 1 1 0
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0},
            
            "Brendan Haywood": {        //33 15 6 12 12 22 5 12
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12} }
        }}

        
function numPointsScored(name) {
    // const homePlayers = obj.home.players;
    // const playerObject = homeplayers[name];
    // return playerObject.points;

let playerStats
    if (obj.home.player[name] !==undefined) {
        playersStats = obj.home.players[name]
    }
    else {
        playersStats = obj.away.players[name]
    }
    return playerStats.points;
}

function shoeSize(name) {
    let playerFeet
    if (obj.home[name] !==undefined){
        playerFeet = obj.home.players[name]
    } else {
        playerFeet = obj.away.players[name]
    }
    return playerFeet.shoe;
}

function teamColors (teamName) {
    let colorFind
    if (obj.home[teamName] !==undefined) {
        colorFind = obj.home[teamName]
    } else {
        colorFind = obj.away.home[teamName]
    }
    return colorFind.colors;

}

function teamNames(obj) {
    let team = [];
    for (let number in obj) {
        teamNames.push(obj[number].teamName);
    }
    return team;
}

function playerNumbers(teamName, obj) {
    for (let key in obj) {
        if (obj[key].teamName === teamName) {
            let players = obj[key].players;
            let numbers = [];
            for (let player in players) {
                numbers.push(players[player].number);
            }
            return numbers;
        }
    }
}

function playerStats(playerName) {
    return players[playerName];
}

