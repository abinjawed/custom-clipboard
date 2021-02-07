//timestamp of copy events

console.logCopy = console.log.bind(console);

console.log = function(data)
{
    var currentDate = '[' + new Date().toUTCString() + '] ';
    this.logCopy(currentDate, data);
};


//copy text in each field
document.getElementById("copytext1").onclick = function() {
    this.select();
    document.execCommand('copy');
    console.log("It was a pleasure speaking with you today about [topic of discussion].");
}

document.getElementById("copytext2").onclick = function() {
    this.select();
    document.execCommand('copy');
    console.log("I apologize for the bad experience you’ve had with [topic of discussion].");
}

document.getElementById("copytext3").onclick = function() {
    this.select();
    document.execCommand('copy');
    console.log("I tried reaching you, but it appears you were unavailable. I left you a voicemail regarding [topic of discussion].");
}

document.getElementById("copytext4").onclick = function() {
    this.select();
    document.execCommand('copy');
    console.log("This is to inform you of an unpaid balance in your account in the amount of [$__.__]");
}

document.getElementById("copytext5").onclick = function() {
    this.select();
    document.execCommand('copy');
    console.log("This is to provide you a record of your payment and purchase history");
}

document.getElementById("copytext6").onclick = function() {
    this.select();
    document.execCommand('copy');
    console.log("This is to inform you of an upcoming due date in the amount of [$__.__]");
}

document.getElementById("copytext7").onclick = function() {
    this.select();
    document.execCommand('copy');
    console.log("A ticket has been created regarding [topic of discussion]. The Technical Support team is aware and will notify you of further updates.");
}

document.getElementById("copytext8").onclick = function() {
    this.select();
    document.execCommand('copy');
    console.log("We are currently experiencing a system outage. We apologize for the inconvenience. A technician is resolving the matter. Thank you for your patience.");
}

document.getElementById("copytext9").onclick = function() {
    this.select();
    document.execCommand('copy');
    console.log("Your ticket has been escalated to the Product Development team. We will notify you once we have further updates. Thank you for your patience.");
}
