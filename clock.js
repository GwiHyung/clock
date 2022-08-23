const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); // padstart 는 string이 가져야 하는 길이 2로 설정하고
    const minutes = String(date.getMinutes()).padStart(2, "0"); // 그렇지 않을 경우 앞에 0을 추가한다는 뜻
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
