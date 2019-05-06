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
    var container = document.getElementById('firstName');
    container.innerHTML += this.firstName;
  },
  getLastName : function() {
    var container = document.getElementById('lastName');
    container.innerHTML += this.lastName;
  },
  getLocation : function() {
    var container = document.getElementById('location');
    container.innerHTML += this.location;
  },
  getBirthYear : function() {
    var birthYear = (new Date().getFullYear()) - this.age;
    var container = document.getElementById('birthYear');
    container.innerHTML += birthYear;
  },
  getPaiement : function() {
    var container = document.getElementById('paiement')
    for (var i = 0; i < this.paiement.length; i++) {
      card = this.paiement[i];
      container.innerHTML += card.charAt(0).toUpperCase() + card.slice(1);
      if(i < this.paiement.length -1 ) {
        container.innerHTML += ", ";
      }
    }
  },
  showInfo : function() {
    this.getFirstName();
    this.getLastName();
    this.getLocation(),
    this.getBirthYear();
    this.getPaiement();
  }
};


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

user.showInfo();

//userChecker.checkUser(user);
