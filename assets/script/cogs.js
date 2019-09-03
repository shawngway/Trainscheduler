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
    var role = $("#destination-input").val().trim();
    var startDate = $("#FirstTrain-input").val().trim();
    var monthlyRate = $("#Frequency-input").val().trim();
    console.log(name);
    database.ref().push({
        name: name,
        Frequency: Frequency,
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