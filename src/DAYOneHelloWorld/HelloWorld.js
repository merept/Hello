let i = 0;
function displayDate() {
    if (i === 0) {
        document.getElementById("demo").innerHTML = "Hello,World!!!";
        i++;
    } else {
        document.getElementById("demo").innerHTML = "Do you know what's behind this?";
        i--;
    }
}
function easterEgg() {
    window.alert("SURPRISE!!!\n" +
        "I'm MerePT\n" +
        "This is my funny journey about front-end study\n" +
        "Welcome to my world!");
}
function goToMyBilibili() {
    window.open("https://space.bilibili.com/32204891")
}