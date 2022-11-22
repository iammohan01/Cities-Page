// import { data } from "./data";

const searchResultTemplate = `<div class="resultBoxSqure" style="#style#" onclick="getCityName(this.innerText)"><p>#cityDetails#</p></div>`;
const resultBox = document.querySelector(".searchResults");
const cityBox  = document.querySelector(".resultBoxSqure");
var f ;
var inp ;
function searchByName(){
  getCityName(_("#search").value);
}


function search(input){
    f= [];
    inp = input.value || "a" ;
    f = data.filter(getCity);
    resultBox.innerHTML = "";
    f.map(createElementInSearchResults)
}
function getCity(ele){
    ele = ele.city ;
    ele = ele.toUpperCase();
    return ele.includes(inp.toUpperCase());
}
function createElementInSearchResults(cityObject){
    resultBox.innerHTML += searchResultTemplate.replace("#cityDetails#",cityObject.city) ;
}
function resultBoxImage(){
  return `background-image = url('src/CityImages/${getRandomNum(1,23)}.svg')`; 
}
function getRandomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

let data = [
  {
    "city": "Abohar"
  },
  {
    "city": "Addanki"
  },
  {
    "city": "Adilabad"
  },
  {
    "city": "adoni"
  },
  {
    "city": "Agartala"
  },
  {
    "city": "agra"
  },
  {
    "city": "Ahmadnagar"
  },
  {
    "city": "Ahmedabad"
  },
  {
    "city": "Aizawl"
  },
  {
    "city": "Ajmer"
  },
  {
    "city": "Akola"
  },
  {
    "city": "Alaigarh"
  },
  {
    "city": "Alaipur Duar"
  },
  {
    "city": "Allahabad"
  },
  {
    "city": "Alleppey"
  },
  {
    "city": "Alwar"
  },
  {
    "city": "Amalapuram"
  },
  {
    "city": "Amaravati"
  },
  {
    "city": "Ambala"
  },
  {
    "city": "Amritsar"
  },
  {
    "city": "Amudalavalasa"
  },
  {
    "city": "Anakapalle"
  },
  {
    "city": "Anantapur"
  },
  {
    "city": "Angamali"
  },
  {
    "city": "Armair"
  },
  {
    "city": "asansol"
  },
  {
    "city": "Aurangabad"
  },
  {
    "city": "Aurangabad"
  },
  {
    "city": "Bali"
  },
  {
    "city": "Balurghat"
  },
  {
    "city": "Bankura"
  },
  {
    "city": "Bansbaria"
  },
  {
    "city": "Bapatla"
  },
  {
    "city": "Barasat"
  },
  {
    "city": "Baramaila"
  },
  {
    "city": "Badvel"
  },
  {
    "city": "Baharampur"
  },
  {
    "city": "Bahraigh"
  },
  {
    "city": "Baidar"
  },
  {
    "city": "Baidyabati"
  },
  {
    "city": "Baikaner"
  },
  {
    "city": "Bandipura"
  },
  {
    "city": "Bangaon"
  },
  {
    "city": "Barddhaman"
  },
  {
    "city": "Bareilly"
  },
  {
    "city": "Basairhat"
  },
  {
    "city": "Begusarai"
  },
  {
    "city": "Belampalli"
  },
  {
    "city": "Belgaum"
  },
  {
    "city": "Bellary"
  },
  {
    "city": "Bengaluru"
  },
  {
    "city": "Bezwada"
  },
  {
    "city": "Bhagalpur"
  },
  {
    "city": "Bhatpara"
  },
  {
    "city": "Bhavnagar"
  },
  {
    "city": "Bhadreswar"
  },
  {
    "city": "Bhailwara"
  },
  {
    "city": "Bhaimavaram"
  },
  {
    "city": "Bhaimunipatnam"
  },
  {
    "city": "Bhainsa"
  },
  {
    "city": "Bharatpur"
  },
  {
    "city": "Bhayandar"
  },
  {
    "city": "Bhilai"
  },
  {
    "city": "Bhiwani"
  },
  {
    "city": "Bhiwandi"
  },
  {
    "city": "bho"
  },
  {
    "city": "Bhopal"
  },
  {
    "city": "Bhubaneshwar"
  },
  {
    "city": "Bhuj"
  },
  {
    "city": "Bhusaval"
  },
  {
    "city": "Bijapur"
  },
  {
    "city": "Bilaspur"
  },
  {
    "city": "Bobbili"
  },
  {
    "city": "Bodhan"
  },
  {
    "city": "Bodupal"
  },
  {
    "city": "Brahmapur"
  },
  {
    "city": "Budaun"
  },
  {
    "city": "Bulandshahr"
  },
  {
    "city": "Burhanpur"
  },
  {
    "city": "Calicut"
  },
  {
    "city": "Cawnpore"
  },
  {
    "city": "Chanda"
  },
  {
    "city": "Chairala"
  },
  {
    "city": "Chakradharpur"
  },
  {
    "city": "Champdani"
  },
  {
    "city": "Chandigarh"
  },
  {
    "city": "Chandannagar"
  },
  {
    "city": "Channarayapatna"
  },
  {
    "city": "Chennai"
  },
  {
    "city": "Chicacole"
  },
  {
    "city": "Chilakalairupet"
  },
  {
    "city": "Chimakurti"
  },
  {
    "city": "Chinchvad"
  },
  {
    "city": "Chittaurgarh"
  },
  {
    "city": "Chittoor"
  },
  {
    "city": "Coimbatore"
  },
  {
    "city": "Conjeeveram"
  },
  {
    "city": "Cuddalore"
  },
  {
    "city": "Cuddapah"
  },
  {
    "city": "Curchorem"
  },
  {
    "city": "Cuttack"
  },
  {
    "city": "Dam Dam"
  },
  {
    "city": "Daman"
  },
  {
    "city": "Darjeeling"
  },
  {
    "city": "Davangere"
  },
  {
    "city": "Dehra Dain"
  },
  {
    "city": "Delhi"
  },
  {
    "city": "Deo"
  },
  {
    "city": "Devarkonda"
  },
  {
    "city": "Dhailia"
  },
  {
    "city": "Dhanbad"
  },
  {
    "city": "Dharmavaram"
  },
  {
    "city": "Dholka"
  },
  {
    "city": "Dibrugarh"
  },
  {
    "city": "Dindigul"
  },
  {
    "city": "Dispur"
  },
  {
    "city": "Diu"
  },
  {
    "city": "Drug"
  },
  {
    "city": "Durgapur"
  },
  {
    "city": "Dwarka"
  },
  {
    "city": "Ellore"
  },
  {
    "city": "Emmiganair"
  },
  {
    "city": "Erode"
  },
  {
    "city": "Etawah"
  },
  {
    "city": "Fairozabad"
  },
  {
    "city": "Faraidabad"
  },
  {
    "city": "Fatehpur"
  },
  {
    "city": "Fatehpur Saikri"
  },
  {
    "city": "Fyzabad"
  },
  {
    "city": "Gadwal"
  },
  {
    "city": "Gandhinagar"
  },
  {
    "city": "Gangtok"
  },
  {
    "city": "Gauripur"
  },
  {
    "city": "Gaya"
  },
  {
    "city": "Ghaziabad"
  },
  {
    "city": "Giddalair"
  },
  {
    "city": "Godhra"
  },
  {
    "city": "Gorakhpur"
  },
  {
    "city": "Gudivada"
  },
  {
    "city": "Gulbarga"
  },
  {
    "city": "Guntair"
  },
  {
    "city": "Guntakal"
  },
  {
    "city": "Gurgaon"
  },
  {
    "city": "Guwahati"
  },
  {
    "city": "Gwalior"
  },
  {
    "city": "Habra"
  },
  {
    "city": "Halaisahar"
  },
  {
    "city": "Haora"
  },
  {
    "city": "Hapur"
  },
  {
    "city": "Hathras"
  },
  {
    "city": "Haldia"
  },
  {
    "city": "Handwara"
  },
  {
    "city": "Haraipur"
  },
  {
    "city": "Hassan"
  },
  {
    "city": "Hindupur"
  },
  {
    "city": "Hisar"
  },
  {
    "city": "Hospet"
  },
  {
    "city": "Hubli"
  },
  {
    "city": "Hugli"
  },
  {
    "city": "Hyderabad"
  },
  {
    "city": "Ichalkaranji"
  },
  {
    "city": "Imphal"
  },
  {
    "city": "Indore"
  },
  {
    "city": "Ingraj Bazar"
  },
  {
    "city": "Itanagar"
  },
  {
    "city": "Jamnagar"
  },
  {
    "city": "Jamuria"
  },
  {
    "city": "Jabalpur"
  },
  {
    "city": "Jaggayyapeta"
  },
  {
    "city": "Jagtial"
  },
  {
    "city": "Jaipur"
  },
  {
    "city": "Jaisalmer"
  },
  {
    "city": "Jalandhar"
  },
  {
    "city": "Jalgaon"
  },
  {
    "city": "Jalor"
  },
  {
    "city": "Jalpaiguri"
  },
  {
    "city": "Jammalamadugu"
  },
  {
    "city": "Jammu"
  },
  {
    "city": "Jamshedpur"
  },
  {
    "city": "Jangaon"
  },
  {
    "city": "Jasdan"
  },
  {
    "city": "Jatani"
  },
  {
    "city": "Jaunpur"
  },
  {
    "city": "Jaynagar-Majilpur"
  },
  {
    "city": "Jhansi"
  },
  {
    "city": "Jodhpur"
  },
  {
    "city": "Jorhat"
  },
  {
    "city": "Junnar"
  },
  {
    "city": "Kakinada"
  },
  {
    "city": "Kamareddipet"
  },
  {
    "city": "Kamarhati"
  },
  {
    "city": "Kanchrapara"
  },
  {
    "city": "Kavali"
  },
  {
    "city": "Kadiri"
  },
  {
    "city": "Kagaznagar"
  },
  {
    "city": "Kairana"
  },
  {
    "city": "Kalyan"
  },
  {
    "city": "Kalyani"
  },
  {
    "city": "Kandukair"
  },
  {
    "city": "Karaimnagar"
  },
  {
    "city": "Karair"
  },
  {
    "city": "Karnal"
  },
  {
    "city": "Kavaratti"
  },
  {
    "city": "Khajuraho"
  },
  {
    "city": "Khambhat"
  },
  {
    "city": "Khammam"
  },
  {
    "city": "Kharagpur"
  },
  {
    "city": "Khardah"
  },
  {
    "city": "Kochi"
  },
  {
    "city": "Kodaikanal"
  },
  {
    "city": "Kohaima"
  },
  {
    "city": "Koilkuntla"
  },
  {
    "city": "Kolar"
  },
  {
    "city": "Kolhapur"
  },
  {
    "city": "Kolkata"
  },
  {
    "city": "Koratla"
  },
  {
    "city": "Kota"
  },
  {
    "city": "Kothapet"
  },
  {
    "city": "Kottagaidem"
  },
  {
    "city": "Kovvair"
  },
  {
    "city": "Krishnanagar"
  },
  {
    "city": "Kulgam"
  },
  {
    "city": "Kulti"
  },
  {
    "city": "Kumbakonam"
  },
  {
    "city": "Kurnool"
  },
  {
    "city": "Latair"
  },
  {
    "city": "Lucknow"
  },
  {
    "city": "Ludhiana"
  },
  {
    "city": "Malegaon"
  },
  {
    "city": "Markapur"
  },
  {
    "city": "Macherla"
  },
  {
    "city": "Machilaipatnam"
  },
  {
    "city": "Madanapalle"
  },
  {
    "city": "Madhyamgram"
  },
  {
    "city": "Madurai"
  },
  {
    "city": "Mahbaibnagar"
  },
  {
    "city": "Mahesana"
  },
  {
    "city": "Maihar"
  },
  {
    "city": "Malaut"
  },
  {
    "city": "Mancheral"
  },
  {
    "city": "Mandamari"
  },
  {
    "city": "Mandapeta"
  },
  {
    "city": "Mandsaur"
  },
  {
    "city": "Mandya"
  },
  {
    "city": "Mangair"
  },
  {
    "city": "Mangalagiri"
  },
  {
    "city": "Mangalore"
  },
  {
    "city": "Mathura"
  },
  {
    "city": "Mauli"
  },
  {
    "city": "Medinaipur"
  },
  {
    "city": "Meerut"
  },
  {
    "city": "Metpalli"
  },
  {
    "city": "Mirzapur"
  },
  {
    "city": "Moradabad"
  },
  {
    "city": "Mumbai"
  },
  {
    "city": "Muzaffarnagar"
  },
  {
    "city": "Muzaffarpur"
  },
  {
    "city": "Mysore"
  },
  {
    "city": "Nagercoil"
  },
  {
    "city": "Nanded"
  },
  {
    "city": "Nandod"
  },
  {
    "city": "Nasik"
  },
  {
    "city": "Nagari"
  },
  {
    "city": "Nagpur"
  },
  {
    "city": "Naihati"
  },
  {
    "city": "Naini Tal"
  },
  {
    "city": "Nalgonda"
  },
  {
    "city": "Nandyal"
  },
  {
    "city": "Narasannapeta"
  },
  {
    "city": "Narasapur"
  },
  {
    "city": "Narasaraopet"
  },
  {
    "city": "Navadwaip"
  },
  {
    "city": "Navsari"
  },
  {
    "city": "Negapatam"
  },
  {
    "city": "Nellore"
  },
  {
    "city": "New Delhi"
  },
  {
    "city": "Nidadavole"
  },
  {
    "city": "Nizamabad"
  },
  {
    "city": "Ongole"
  },
  {
    "city": "Ootacamund"
  },
  {
    "city": "Osmanabad"
  },
  {
    "city": "Palakollu"
  },
  {
    "city": "Palghat"
  },
  {
    "city": "Pali"
  },
  {
    "city": "Paloncha"
  },
  {
    "city": "Panaipat"
  },
  {
    "city": "Panihati"
  },
  {
    "city": "Pailibhait"
  },
  {
    "city": "Palmaner"
  },
  {
    "city": "Pamidi"
  },
  {
    "city": "Panaji"
  },
  {
    "city": "Panchkula"
  },
  {
    "city": "Parbhani"
  },
  {
    "city": "Pathankot"
  },
  {
    "city": "Pathanamthitta"
  },
  {
    "city": "Patiala"
  },
  {
    "city": "Patna"
  },
  {
    "city": "Pedana"
  },
  {
    "city": "Pithapuram"
  },
  {
    "city": "Ponnairu"
  },
  {
    "city": "Porbandar"
  },
  {
    "city": "Port Blair"
  },
  {
    "city": "Proddatair"
  },
  {
    "city": "Puducherry"
  },
  {
    "city": "Pulivendla"
  },
  {
    "city": "Pune"
  },
  {
    "city": "Punganairu"
  },
  {
    "city": "Puri"
  },
  {
    "city": "Purnea"
  },
  {
    "city": "Puttair"
  },
  {
    "city": "Quilon"
  },
  {
    "city": "Raichair"
  },
  {
    "city": "Raiganj"
  },
  {
    "city": "Rajahmundry"
  },
  {
    "city": "Rajapalaiyam"
  },
  {
    "city": "Rajkot"
  },
  {
    "city": "Rameswaram"
  },
  {
    "city": "Ramgundam"
  },
  {
    "city": "Rampur"
  },
  {
    "city": "Ranchi"
  },
  {
    "city": "Rayachoti"
  },
  {
    "city": "Raipur"
  },
  {
    "city": "Rajaori"
  },
  {
    "city": "Rajgair"
  },
  {
    "city": "Ratlam"
  },
  {
    "city": "Raurkela"
  },
  {
    "city": "Repalle"
  },
  {
    "city": "Rishra"
  },
  {
    "city": "Rohtak"
  },
  {
    "city": "Samalkot"
  },
  {
    "city": "Sangli"
  },
  {
    "city": "Saharanpur"
  },
  {
    "city": "Saharsa"
  },
  {
    "city": "Saikar"
  },
  {
    "city": "Salem"
  },
  {
    "city": "Sambalpur"
  },
  {
    "city": "Sambhal"
  },
  {
    "city": "Sannai"
  },
  {
    "city": "Sattenapalle"
  },
  {
    "city": "Saugor"
  },
  {
    "city": "Secunderabad"
  },
  {
    "city": "Shahjanpur"
  },
  {
    "city": "Shantipur"
  },
  {
    "city": "Shiliguri"
  },
  {
    "city": "Shillong"
  },
  {
    "city": "Shimla"
  },
  {
    "city": "Shimoga"
  },
  {
    "city": "Shrairampur"
  },
  {
    "city": "Shrairangapattana"
  },
  {
    "city": "Sihor"
  },
  {
    "city": "Silchar"
  },
  {
    "city": "Silvassa"
  },
  {
    "city": "Sirsa"
  },
  {
    "city": "Sirsilla"
  },
  {
    "city": "Sitalpur"
  },
  {
    "city": "Solapur"
  },
  {
    "city": "Solan"
  },
  {
    "city": "Sonaipat"
  },
  {
    "city": "Sopur"
  },
  {
    "city": "Srainagar"
  },
  {
    "city": "srinagar"
  },
  {
    "city": "Surat"
  },
  {
    "city": "Suriapet"
  },
  {
    "city": "Tadepalle"
  },
  {
    "city": "Tadepallegaidem"
  },
  {
    "city": "Tadpatri"
  },
  {
    "city": "Tanjore"
  },
  {
    "city": "Tanuku"
  },
  {
    "city": "Tenali"
  },
  {
    "city": "Tezpur"
  },
  {
    "city": "Thane"
  },
  {
    "city": "Thiruvananthapuram"
  },
  {
    "city": "Tinnevelly"
  },
  {
    "city": "Tirupati"
  },
  {
    "city": "Tiruppair"
  },
  {
    "city": "Tiruvannamalai"
  },
  {
    "city": "Titagarh"
  },
  {
    "city": "Tonk"
  },
  {
    "city": "Trichair"
  },
  {
    "city": "Trichinopoly"
  },
  {
    "city": "Tumkair"
  },
  {
    "city": "Tuni"
  },
  {
    "city": "Tuticorin"
  },
  {
    "city": "Udaipur"
  },
  {
    "city": "Udhampur"
  },
  {
    "city": "Udipi"
  },
  {
    "city": "Ujjain"
  },
  {
    "city": "Ulhasnagar"
  },
  {
    "city": "Uluberiya"
  },
  {
    "city": "Umaria"
  },
  {
    "city": "Uran"
  },
  {
    "city": "Valparai"
  },
  {
    "city": "Varanasi"
  },
  {
    "city": "Vadodara"
  },
  {
    "city": "Vellore"
  },
  {
    "city": "Venkatagiri"
  },
  {
    "city": "Vidisha"
  },
  {
    "city": "Vikarabad"
  },
  {
    "city": "Vinukonda"
  },
  {
    "city": "Visakhapatnam"
  },
  {
    "city": "Vizianagaram"
  },
  {
    "city": "Vrindavan"
  },
  {
    "city": "Wanparti"
  },
  {
    "city": "Warangal"
  },
  {
    "city": "Yavatmal"
  },
  {
    "city": "Yellandu"
  },
  {
    "city": "Brajrajnagar"
  },
  {
    "city": "Ernakulam"
  },
  {
    "city": "Gurugram"
  },
  {
    "city": "Guwahati"
  },
  {
    "city": "Jorapokhar"
  },
  {
    "city": "Talcher"
  }
]
  search("");

function getCityName(c){
  getweather(c);
}