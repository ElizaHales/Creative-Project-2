// JavaScript for the collapsibles
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// endpoint #1
const url = "https://www.dnd5eapi.co/api/monsters/giant-frog";
fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    let results = "";
    results += "He would be a " + json.name + ", which are of type \"" + json.type;
    results += ".\" What makes the " + json.name + " a " + json.type + "?";
    results += " On a scale of 0 to 15, they have ";
    results += "<ul><li>strength: " + json.strength + ",</li>";
    results += "<li>dexterity: " + json.dexterity + ",</li>";
    results += "<li>constitution: " + json.constitution + ",</li>";
    results += "<li>and wisdom: " + json.wisdom + ".</li></ul>";
    document.getElementById("monsters_giant-frog").innerHTML = results;
  });

// endpoint #2
const url2 = "https://www.dnd5eapi.co/api/skills/athletics";
fetch(url2)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    let results = "";
    results += "What would be his greatest skill? " + json.name + ".";
    results += " Here is the description: \"" + json.desc + "\"";
    document.getElementById("skills_athletics").innerHTML = results;
  });

// endpoint #3
const url3 = "https://www.dnd5eapi.co/api/spells/heroism";
fetch(url3)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    let results = "";
    results += "What would be his favorite spell? " + json.name + ".";
    results += " Here is the description: \"" + json.desc + "\"";
    document.getElementById("spells_heroism").innerHTML = results;
  });

// endpoint #4
const url4 = "https://www.dnd5eapi.co/api/traits/relentless-endurance";
fetch(url4)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    let results = "";
    results += "What would be one of his dominant traits? " + json.name + ".";
    results += " Here is the description: \"" + json.desc + "\"";
    document.getElementById("traits_relentless-endurance").innerHTML = results;
  });

// endpoint #5
const url5 = "https://www.dnd5eapi.co/api/magic-items/carpet-of-flying";
fetch(url5)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    let results = "";
    results += "What would be his magic item of choice? " + json.name + ".";
    results += " Here is the description:<ul>";
    for (let i = 0; i < json.desc.length; i++) {
      results += "<li>" + json.desc[i] + "</li>";
    }
    results += "</ul>"
    document.getElementById("magic-items_carpet-of-flying").innerHTML = results;
  });
