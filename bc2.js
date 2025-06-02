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
  var state = document.getElementById('state').value.toLowerCase();
  var district = document.getElementById('district').value.toLowerCase();
  var city = document.getElementById('city').value.replace("_", " ").toLowerCase();
  var disease = window.selectedDisease?.toLowerCase();

  if (state === "" || district === "" || city === "") {
    alert("YOU MUST HAVE TO SELECT LOCATION");
    return;
  }

  let url = "";

  if (disease === "heart" && state === "andhra" && district === "prakasam") {
    if (city === "ongole") {
      url = "ong.html";
    } else if (city === "podili") {
      url = "pod.html";
    } else if (city === "kanigiri") {
      url = "kan.html";
    }
  } else if (disease === "heart" && state === "andhra" && district === "vijayawada") {
    if (city === "mangalagiri") {
      url = "man.html";
    } else if (city === "gollapudi") {
      url = "gol.html";
    } else if (city === "rajiv nagar") {
      url = "raj.html";
    }
  } else {
    url = "ong.html";
  }

  console.log("Redirecting to:", url);
  window.location.href = url;
}
function book8(){
  
  location.reload();
}