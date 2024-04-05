// code your solution here
function saturdayFun(activity = "roller-skate", day = "Saturday"){
    return (`This ${day}, I want to ${activity}!`);}

function mondayWork(work = 'go to the office'){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(adj="*"){
    return function innerFunc(def="special"){
        return `You are ${adj}${def}${adj}!`
    }
}
