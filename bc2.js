document.addEventListener("DOMContentLoaded", function () {

  var locations = {
      telangana: {
          districts: {
              hyderabad: ["Ameerpet", "Banjara Hills", "Kukatpally"],
              secundrabad: ["Mangalagiri", "Gollapudi", "Rajiv Nagar"],
              gacchiboli: ["Dwaraka Nagar", "Gajuwaka", "Tirupati"]
          }
      },
      andhra: {
          districts: {
              prakasm: ["ongole", "podili", "kanigiri"],
              vijayawada: ["Mangalagiri", "Gollapudi", "Rajiv Nagar"],
              visakhapatnam: ["Dwaraka Nagar", "Gajuwaka", "Tirupati"]
          }
      },
      goa: {
        districts: {
          north_goa: ["Mapusa", "Panaji", "Vasco da Gama"],
          south_goa: ["Margao", "Madgaon", "Ponda"]
        }
      },
      karnataka: {
        districts: {
          bangalore: ["Koramangala", "Indiranagar", "Whitefield"],
          mysore: ["Nanjangud", "Hunsur", "T Narasipur"],
          hubli: ["Gokul Road", "Koppal", "Navanagar"]
        }
      },
      tamilnadu: {
        districts: {
          chennai: ["Adyar", "Tambaram", "Anna Nagar"],
          coimbatore: ["Peelamedu", "Sulur", "RS", "Pudur"],
          madurai: ["Thirumangalam", "Melur", "Madurai East"]
        }
      },
      kerala: {
        districts: {
          thiruvananthapuram: ["Kowdiar", "Pattom", "Poojappura"],
          kochi: ["Ernakulam", "Fort Kochi", "Vypin"],
          kozhikode: ["Kozhikode Beach", "Kuttiyadi", "Kunnamangalam"]
        }
      }
  };

  function updateDistricts() {
      var state = document.getElementById("state").value;
      var districtDropdown = document.getElementById("district");
      var cityDropdown = document.getElementById("city");
      districtDropdown.innerHTML = '<option value="">Select District</option>';
      cityDropdown.innerHTML = '<option value="">Select City</option>';

      if (state && locations[state]) {
          var districts = locations[state].districts;
          for (var district in districts) {
              var option = document.createElement("option");
              option.value = district;
              option.text = district.replace("_", " ");
              districtDropdown.appendChild(option);
          }
      }
  }

  function updateCities() {
      var state = document.getElementById("state").value;
      var district = document.getElementById("district").value;
      var cityDropdown = document.getElementById("city");
      cityDropdown.innerHTML = '<option value="">Select City</option>';

      if (state && district && locations[state].districts[district]) {
          var cities = locations[state].districts[district];
          cities.forEach(function (city) {
              var option = document.createElement("option");
              option.value = city.toLowerCase().replace(" ", "_");
              option.text = city;
              cityDropdown.appendChild(option);
          });
      }
  }

  function book1() {
      var targetElement = document.querySelector(".dd");
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  }

  window.book1 = book1;
  window.updateDistricts = updateDistricts;
  window.updateCities = updateCities;

});
function book() {
  var state = document.getElementById('state').value;
  var district = document.getElementById('district').value;
  var city = document.getElementById('city').value;
  var disease = window.selectedDisease;
  console.log("State:", state, "District:", district, "City:", city); // Debugging line

  if (state === "" || district === "" || city === "") {
  alert("YOU MUST HAVE TO SELECT LOCATION");
} else {
  let url = "";

  const s = state.toLowerCase();
  const d = district.toLowerCase();
  const c = city.toLowerCase();
  const dis = disease.toLowerCase();

  if (dis === "heart" && s === "andhra" && d === "prakasam") {
    if (c === "ongole") {
      url = "ong.html";
    } else if (c === "podili") {
      url = "pod.html";
    } else if (c === "kanigiri") {
      url = "kan.html";
    }
  } else if (dis === "heart" && s === "andhra" && d === "vijayawada") {
    if (c === "mangalagiri") {
      url = "man.html";
    } else if (c === "gollapudi") {
      url = "gol.html";
    } else if (c === "rajiv nagar") {
      url = "raj.html";
    }
  } else {
    url = "ong.html";
  }

  window.location.href = ong.html;  
}
    

    if (url !== "") {
      console.log("Redirecting to:", url);  // Debugging line
      window.location.href = url;  // Redirect to the corresponding page
    }
    else {
      alert("hi");
    }
  }
}
function book8(){
  
  location.reload();
}