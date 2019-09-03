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
  $("#add-train").on("click", function(event) {

    event.preventDefault();


    var name = $("#name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var FirstTrain = $("#FirstTrain-input").val().trim();
    var Frequency = $("#Frequency-input").val().trim();
    console.log(name);
    database.ref().push({
        name: name,
        destination: destination,
        FirstTrain: FirstTrain,
        Frequency: Frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP


    })
    console.log(name);
    $("#name-input").val("");
    $("#Frequency-input").val("");
    $("#FirstTrain-input").val("");
    $("#Frequency-input").val("");
    
  });
  database.ref().on("child_added", function(snapshot){
    var sv = snapshot.val();
    var tname = $("<td>").text(sv.name);
    var tdestination = $("<td>").text(sv.destination);
    var tFirstTrain = $("<td>").text(sv.FirstTrain);
    var tFrequency = $("<td>").text(sv.Frequency);
    var trow = $("<tr>");
    trow.append(tname, tdestination, tFirstTrain, tFrequency);
    $("tbody").append(trow);

})