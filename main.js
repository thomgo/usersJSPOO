// Standard User object
var user = {
  // properties
  firstName : "John",
  lastName : "Doe",
  location : "France",
  age : 43,
  paiement: ["visa", "mastercard", "american express", "maestro"],

  // Methodes to display a specific property in the corresponding list item in HTML
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
    // Loop through the paiements array to add each type of card
    for (var i = 0; i < this.paiement.length; i++) {
      card = this.paiement[i];
      container.innerHTML += card.charAt(0).toUpperCase() + card.slice(1);
      // Check if it is the last iteration to add a comma or not
      if(i < this.paiement.length -1 ) {
        container.innerHTML += ", ";
      }
    }
  },
  // Final method to show all the properties at once
  showInfo : function() {
    this.getFirstName();
    this.getLastName();
    this.getLocation(),
    this.getBirthYear();
    this.getPaiement();
  }
};

// Object to deal with the validation of a user
var userChecker = {
  // Properties with the reference values
  allowedLocations : ["FRANCE", "GERMANY", "SWEDEN", "SPAIN"],
  allowedPaiement : ["VISA", "MAESTRO"],
  minimumAge: 16,
  // Standard alerts from Bootstrap 4
  error: "<div class='alert alert-danger' role='alert'></div>",
  success: "<div class='alert alert-success' role='alert'></div>",
  // Retrieve the message container to add the alerts
  messageContainer: document.getElementById('message'),

  // Methodes to check the properties fo a user
  //Check if the user location is one of the allowed locations
  checkLocation : function(user) {
    var location = user.location.toUpperCase();
    if (this.allowedLocations.includes(location)) {
      this.messageContainer.innerHTML += this.success;
      this.messageContainer.lastChild.innerHTML = "Pays d'origine autorisé";
    }
    else {
      this.messageContainer.innerHTML += this.error;
      this.messageContainer.lastChild.innerHTML = "Pays d'origine non autorisé";
    }
  },
  // Check if the user is older than the minimum age
  checkAge : function(user) {
    if (user.age >= this.minimumAge) {
      this.messageContainer.innerHTML += this.success;
      this.messageContainer.lastChild.innerHTML = "Vous l'âge requis";
    }
    else {
      this.messageContainer.innerHTML += this.error;
      this.messageContainer.lastChild.innerHTML = "Vous n'avez pas l'âge requis";
    }
  },

  checkPaiment : function(user) {
    var message = "Vous pouvez payer avec : ";
    // reference variable to check if at least one user card is allowed
    var detection = false;
    // Check if each user card is allowed
    for(var i = 0; i< user.paiement.length; i++) {
      if(this.allowedPaiement.includes(user.paiement[i].toUpperCase())) {
        detection = true;
        message += user.paiement[i] + " ";
      }
    }
    // If at least one card is allowed
    if(detection) {
      this.messageContainer.innerHTML += this.success;
      this.messageContainer.lastChild.innerHTML = message;
    }
    else {
      this.messageContainer.innerHTML += this.error;
      this.messageContainer.lastChild.innerHTML = "Aucun de vos moyens de paiment ne peut être utilisé";
    }
  },
  // final function to check all the user properties at once
  checkUser : function(user) {
    this.checkLocation(user);
    this.checkAge(user);
    this.checkPaiment(user);
  }
};

// By default the user information are displayed on the page
user.showInfo();
