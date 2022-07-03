var chan1Name = "Channel 1";
var chan2Name = "Channel 2";
var chan1Subscribers = 0;
var chan2Subscribers = 0;


$("#chan1Sub").click(function() {
    chan1Subscribers = parseInt($("#chan1CountEdit").val());
    $("#chan1Count").html(chan1Subscribers);
});

$("#chan1Name").click(function() {
    chan1Name = window.prompt("Enter channel name for channel 1" , chan1Name);
    $("#chan1Name").text(chan1Name);
});

$("#chan2Name").click(function() {
    chan2Name = window.prompt("Enter channel name for channel 2" , chan2Name);
    $("#chan2Name").text(chan2Name);
});

$("h1").click(function() {
    $("h1").text(window.prompt("Enter the text for the header"));
});

$("#thanks").css("cursor", "pointer");

$("#thanks").click(function() {
    window.location.href = "https://randomperson3465.github.io/";
});