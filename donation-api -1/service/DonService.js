'use strict';


/**
 * Récupérer tous les dons
 * Retourne la liste complète de tous les dons
 *
 * returns List
 **/
exports.donsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "dateCreation" : "2024-01-15T00:00:00.000+00:00",
  "categorie" : "nourriture",
  "valeur" : 25.5,
  "donateur" : "jean.dupont@email.com",
  "description" : "Boîtes de conserve variées",
  "id" : "123456"
}, {
  "dateCreation" : "2024-01-15T00:00:00.000+00:00",
  "categorie" : "nourriture",
  "valeur" : 25.5,
  "donateur" : "jean.dupont@email.com",
  "description" : "Boîtes de conserve variées",
  "id" : "123456"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Supprimer un don
 * Supprime définitivement un don du système
 *
 * id String Identifiant unique du don
 * no response value expected for this operation
 **/
exports.donsIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Récupérer un don par ID
 * Retourne les détails d'un don spécifique
 *
 * id String Identifiant unique du don
 * returns Don
 **/
exports.donsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "dateCreation" : "2024-01-15T00:00:00.000+00:00",
  "categorie" : "nourriture",
  "valeur" : 25.5,
  "donateur" : "jean.dupont@email.com",
  "description" : "Boîtes de conserve variées",
  "id" : "123456"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modifier un don existant
 * Met à jour les informations d'un don
 *
 * body DonCreate 
 * id String Identifiant unique du don
 * returns Don
 **/
exports.donsIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "dateCreation" : "2024-01-15T00:00:00.000+00:00",
  "categorie" : "nourriture",
  "valeur" : 25.5,
  "donateur" : "jean.dupont@email.com",
  "description" : "Boîtes de conserve variées",
  "id" : "123456"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Créer un nouveau don
 * Enregistre un nouveau don dans le système
 *
 * body DonCreate 
 * returns Don
 **/
exports.donsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "dateCreation" : "2024-01-15T00:00:00.000+00:00",
  "categorie" : "nourriture",
  "valeur" : 25.5,
  "donateur" : "jean.dupont@email.com",
  "description" : "Boîtes de conserve variées",
  "id" : "123456"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

