var state;
var timeStamp;
var reactionTimeout;

function loadState() {
    state = parseInt($("#reaction").attr("state"));
    return state;
}

let dataArray = [];
let dataArrays='';
function rndNum(from, to) {
    return (from + Math.random() * (to - from)).toFixed(2);
}

function reactionClick() {
    if (state === 0) {
        reactionStart();
    } else if (state === 1) {
        reactionFalse();
    } else if (state === 2) {
        reactionResult();
    } else if (state === 3) {
        return;
    }
}

function reactionStart() {
    $("#reaction").css('background-color', '#ce2636');
    state = 1;
    setMeasure();
    $("#reaction-text").html(textWait);
}

function setMeasure() {
    reactionTimeout = setTimeout(reactionMeasure, rndNum(1, 5) * 1000);
}

function stopMeasure() {
    clearTimeout(reactionTimeout);
}

function reactionMeasure() {
    timeStamp = Date.now();
    state = 2;
    $("#reaction").css('background-color', '#08c534');
    $("#reaction-text").html(textClick);
}

function reactionFalse() {
    $("#reaction").css('background-color', '#e6304a');
    $("#reaction-text").html(textFalse);
    stopMeasure();
    state = 3;
    setTimeout(function () {
        state = 0;
    }, 500);
}

let userOperationsCount = 0;
function reactionResult() {
    userOperationsCount++;
    var result = Date.now() - timeStamp;
    dataArray.push(result);
    if (userOperationsCount >= 5) {
        state = 5;
        $("#reaction-text").html(textSave);
        $("#reaction-time").html(result);
    } else {
        $("#reaction-text").html(textResult);
        $("#reaction-time").html(result);
        state = 3;
        setTimeout(function () {
            state = 0;
        }, 500);
    }
}

$(document).on('keydown', function (event) {
    console.log(state);
    if (state !== 0) {
        event.preventDefault();
        reactionClick();
    }
});

loadState();
$("#reaction").mousedown(reactionClick);
$("#reaction").on("touchstart", function (e) {
    e.preventDefault();
    reactionClick();
});

function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            total += arr[i];
        }
    }
    return total;
}

function hoseData(){
     $("#saveAndRedirect").click();
}
$("#saveAndRedirect").click(function(e){
    e.preventDefault(); // 阻止默认的链接行为
    var userCountNum=sumArray(dataArray);
    var userAverage=parseInt(userCountNum/5);
    var userResults=dataArray.toString();
    const data = { userCountNum: userCountNum, userAverage: userAverage,userResults:userResults};
    localStorage.setItem('userData', JSON.stringify(data));
    // 跳转到新页面
    window.location.href = 'dashboard.html';
})

