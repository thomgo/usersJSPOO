// Standard User object
var user = {
  // properties
  firstName : "John",
  lastName : "Doe",
  location : "France",
  age : 43,
  paiement: ["visa", "mastercard", "american express", "maestro"],

  // Methodes
  getFirstName : function() {
    alert(this.firstName);
  },
  getLastName : function() {
    alert(this.lastName);
  },
  getBirthYear : function() {
    var birthYear = (new Date().getFullYear()) - this.age;
    alert(birthYear);
  }
};
user.getFirstName();
user.getLastName();
user.getBirthYear();

var userChecker = {
  // Properties
  allowedLocations : ["FRANCE", "GERMANY", "SWEDEN", "SPAIN"],
  allowedPaiement : ["VISA", "MAESTRO"],
  minimumAge: 16,

  // Methodes
  checkLocation : function(user) {
    var location = user.location.toUpperCase();
    if (this.allowedLocations.includes(location)) {
      alert("Location OK");
    }
    else {
      alert("Location not OK");
    }
  },

  checkAge : function(user) {
    if (user.age >= this.minimumAge) {
      alert("You are old enough");
    }
    else {
      alert("You are too young");
    }
  },

  checkPaiment : function(user) {
    var message = "The user can pay with ";
    var detection = false;
    for(var i = 0; i< user.paiement.length; i++) {
      if(this.allowedPaiement.includes(user.paiement[i].toUpperCase())) {
        detection = true;
        message += user.paiement[i] + " ";
      }
    }
    if(detection) {
      alert(message);
    }
    else {
      alert("The user can not pay on the site");
    }
  },

  checkUser : function(user) {
    this.checkLocation(user);
    this.checkAge(user);
    this.checkPaiment(user);
  }
};

userChecker.checkUser(user);
