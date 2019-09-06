var config = {
    apiKey: "AIzaSyAKuPvf2aVJTKIgfUx24J8ZYNYU5cAPXuE",
    authDomain: "watercap-654bc.firebaseapp.com",
    databaseURL: "https://watercap-654bc.firebaseio.com",
    projectId: "watercap-654bc",
    storageBucket: "",
    messagingSenderId: "462797256810",
    appId: "1:462797256810:web:cb043d72400f5713"
};
firebase.initializeApp(config);
var database = firebase.database();

$("#add-train").on("click", function (event) {

    event.preventDefault();

    console.log("working");
    var name = $("#name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firstTrain = $("#firstTrain-input").val().trim();
    var frequency = $("#frequency-input").val().trim();
    var firstTrainConverted = moment(firstTrain, "HH:mm").subtract(1, "year");
    console.log(firstTrainConverted);
    var currentTime = moment();
    console.log(currentTime);
    var theCurrentTime = moment(currentTime).format("hh:mm");
    console.log(theCurrentTime);
    var diffTime = moment().diff(moment(firstTrainConverted), "minutes");
    console.log(diffTime);
    var theRemainder = diffTime % frequency;
    console.log(theRemainder);
    var theMinutesTillTrain = frequency - theRemainder;
    console.log(theMinutesTillTrain);
    var nextTrain = moment().add(theMinutesTillTrain, "minutes");
    console.log(nextTrain);
    var arrivalTime = moment(nextTrain).format("hh:mm");
    console.log(arrivalTime);
    var next = arrivalTime - theCurrentTime;
    console.log(next);
    database.ref().push({
        name: name,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
        arrivalTime: arrivalTime,
        // firstTrainConverted: firstTrainConverted,
        // currentTime: currentTime,
        // theCurrentTime: theCurrentTime,
        // diffTime: diffTime,
        // theRemainder: theRemainder,
        theMinutesTillTrain: theMinutesTillTrain,
        // nextTrain: nextTrain,
        // arrivalTime: arrivalTime,
        dateAdded: firebase.database.ServerValue.TIMESTAMP


    })
    
    $("#name-input").val("");
    $("#destination-input").val("");
    $("#firstTrain-input").val("");
    $("#frequency-input").val("");

});
database.ref().on("child_added", function (snapshot) {
    var sv = snapshot.val();
    var tname = $("<td>").text(sv.name);
    var tdestination = $("<td>").text(sv.destination);
    var tfrequency = $("<td>").text(sv.frequency);
    var tarrivalTime = $("<td>").text(sv.arrivalTime);
    var otheMinutesTillTrain = $("<td>").text(sv.theMinutesTillTrain);
    // var tnextTrain = $("<td>").text(sv.nextTrain);
    // var tnextArrival = $("<td>").text(sv.arrivalTime);
    // var tminsAway = $("<td>").text(theMinutesTillTrain);
     //var tfrequency = $("<td>").text(sv.frequency);
    var trow = $("<tr>");
    trow.append(tname, tdestination, tfrequency, tarrivalTime, otheMinutesTillTrain);
    $("tbody").append(trow);

})
