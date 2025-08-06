/// btm.js -- script WWW //www.sitesworld.com/common/x/a/s/btm.js
// 
// === /DELAYED JQUERY LOAD (PUT IN BTM.JS)
// 
//  vars 
//
thsBlg_amz = {
	// no empties!
	'com': 'stswrld-20',
	'ca': 'sitesworld-20',
	'co.uk': 'sitesworld-21',
	'de': 'sitesworldde-21',
	'fr': 'sitesworldfr-21',
	'it': 'sitesworldit-21',
	'es': 'sitesworldes-21'
};
thsBlg_amz_defKW = "the world";
thsBlg_epn = "5337983353";
thsBlg_dyn_catcher = "www.sitesworld.com/common/x/a/c/";
thsBlg_img_cdn = "www.sitesworld.com/common/x/i/img/";
ThsBlg_aT_cd = 'ra-4f5609966688479d';
// === TOPMOST
// 
sw_as_cd = '\x63' + 'a' + '-\x70\x75\x62-' + (
	(891588728015551) + (1378689803089018) + (3419924582255152)
);
// 
// 
var path = document.location.pathname;
curr_filename = path.substr(path.lastIndexOf('/'));
// 
if (typeof swpg != 'undefined') {} else {
	swpg = "normal";
}
// 
if (typeof thsSiteTyp === 'undefined') {
	thsSiteTyp = "main_sitesworld";
}
// 

// 2025-06-05 this is also in GTM!
if (typeof as_on_this === 'undefined') {
	as_on_this = "yes";
}
// 
sw_countries = [{
	u: "Afghanistan",
	ay: "rixb8WTggb8",
	af: "",
	h: "yes"
}, {
	u: "Albania",
	ay: "XZKy5DcGcjg",
	af: "",
	h: "yes"
}, {
	u: "Algeria",
	ay: "",
	af: "48ce78229b|9469039443",
	h: "yes"
}, {
	u: "American_Samoa",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Andorra",
	ay: "V3U_XLpNf1o",
	af: "",
	h: "yes"
}, {
	u: "Angola",
	ay: "ghz5LqrCd4U",
	af: "",
	h: "yes"
}, {
	u: "Anguilla",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Antigua_and_Barbuda",
	ay: "0KAsNr-GBUQ",
	af: "",
	h: "yes"
}, {
	u: "Argentina",
	ay: "dvaq1PMC9K8",
	af: "",
	h: "yes"
}, {
	u: "Armenia",
	ay: "ON-tdJoCmAo",
	af: "",
	h: "yes"
}, {
	u: "Aruba",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Australia",
	ay: "mbPG7Qe_dk0",
	af: "",
	h: "yes"
}, {
	u: "Austria",
	ay: "swDlsFQvSmM",
	af: "",
	h: ""
}, {
	u: "Azerbaijan",
	ay: "dt26Utln9PY",
	af: "",
	h: "yes"
}, {
	u: "Bahamas",
	ay: "JQGunPNMZZg",
	af: "",
	h: ""
}, {
	u: "Bahrain",
	ay: "wVv5w9THcr0",
	af: "",
	h: "yes"
}, {
	u: "Bangladesh",
	ay: "eF_hvi19nlI",
	af: "",
	h: "yes"
}, {
	u: "Barbados",
	ay: "Tr_sOKoNSIw",
	af: "",
	h: "yes"
}, {
	u: "Belarus",
	ay: "HLaU8Pq7m60",
	af: "",
	h: "yes"
}, {
	u: "Belgium",
	ay: "J9a9RO6ikIM",
	af: "",
	h: "yes"
}, {
	u: "Belize",
	ay: "D7z492cIq1w",
	af: "",
	h: "yes"
}, {
	u: "Benin",
	ay: "qubWHgki_vM",
	af: "",
	h: "yes"
}, {
	u: "Bermuda",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Bhutan",
	ay: "",
	af: "c3acd0a900|9411944266",
	h: "yes"
}, {
	u: "Bolivia",
	ay: "fGuVj5xfcLU",
	af: "",
	h: "yes"
}, {
	u: "Bosnia_and_Herzegovina",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Botswana",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Bouvet_Island",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Brazil",
	ay: "QItyplCeMu0",
	af: "",
	h: "yes"
}, {
	u: "British_Indian_Ocean_Territory",
	ay: "",
	af: "",
	h: ""
}, {
	u: "British_Virgin_Islands",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Brunei",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Bulgaria",
	ay: "emKQuA5MUI8",
	af: "",
	h: "yes"
}, {
	u: "Burkina_Faso",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Burundi",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Cambodia",
	ay: "1lWhBpNa8Lw",
	af: "",
	h: "yes"
}, {
	u: "Cameroon",
	ay: "Vb9OC0zGpew",
	af: "",
	h: "yes"
}, {
	u: "Canada",
	ay: "ZQ2y-qWJj-s",
	af: "",
	h: "yes"
}, {
	u: "Cape_Verde",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Cayman_Islands",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Central_African_Republic",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Chad",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Chile",
	ay: "9dTvtPUa204",
	af: "",
	h: "yes"
}, {
	u: "China",
	ay: "q4IxW8xHcsU",
	af: "",
	h: "yes"
}, {
	u: "Christmas_Island",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Cocos_Islands",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Colombia",
	ay: "RF5bXP_22IQ",
	af: "",
	h: "yes"
}, {
	u: "Comoros",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Cook_Islands",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Costa_Rica",
	ay: "O8f0ZisReqI",
	af: "",
	h: ""
}, {
	u: "Cote_dIvoire",
	ay: "Y-DkvZS7Lp4",
	af: "",
	h: "yes"
}, {
	u: "Croatia",
	ay: "ApDwslSyPhg",
	af: "",
	h: "yes"
}, {
	u: "Cuba",
	ay: "K-OYSv_Q_jE",
	af: "",
	h: "yes"
}, {
	u: "Cyprus",
	ay: "K0k0MOLXeOo",
	af: "",
	h: "yes"
}, {
	u: "Czech_Republic",
	ay: "BWpd5priUG0",
	af: "",
	h: ""
}, {
	u: "Democratic_Republic_of_the_Congo",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Denmark",
	ay: "GblG7yOCrP0",
	af: "",
	h: "yes"
}, {
	u: "Djibouti",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Dominica",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Dominican_Republic",
	ay: "30eBIHtD7pU",
	af: "",
	h: ""
}, {
	u: "East_Timor",
	ay: "v8VZcMWXdYA",
	af: "",
	h: "yes"
}, {
	u: "Ecuador",
	ay: "Hq0l5EPmxHs",
	af: "",
	h: "yes"
}, {
	u: "Egypt",
	ay: "W8KL9_e-7xo",
	af: "",
	h: "yes"
}, {
	u: "El_Salvador",
	ay: "CK0ZLVcuWJk",
	af: "",
	h: "yes"
}, {
	u: "Equatorial_Guinea",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Eritrea",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Estonia",
	ay: "SFJK-5_LRYo",
	af: "",
	h: "yes"
}, {
	u: "Ethiopia",
	ay: "lKJo59yGaWo",
	af: "",
	h: "yes"
}, {
	u: "Falkland_Islands",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Faroe_Islands",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Fiji",
	ay: "pdw1W8dbAE0",
	af: "",
	h: "yes"
}, {
	u: "Finland",
	ay: "sXOv_JLrvZQ",
	af: "",
	h: "yes"
}, {
	u: "France",
	ay: "cWSawdJvtwA",
	af: "",
	h: "yes"
}, {
	u: "French_Guiana",
	ay: "",
	af: "",
	h: ""
}, {
	u: "French_Polynesia",
	ay: "",
	af: "",
	h: ""
}, {
	u: "French_Southern_Territories",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Gabon",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Gambia",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Georgia",
	ay: "4-_HggUd2K0",
	af: "",
	h: "yes"
}, {
	u: "Germany",
	ay: "nb1S3RF64Jg",
	af: "",
	h: "yes"
}, {
	u: "Ghana",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Gibraltar",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Greece",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Greenland",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Grenada",
	ay: "pjU2kUk06vc",
	af: "",
	h: ""
}, {
	u: "Guadeloupe",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Guam",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Guatemala",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Guernsey",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Guinea",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Guinea_Bissau",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Guyana",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Haiti",
	ay: "z9gB7-G6_WI",
	af: "",
	h: "yes"
}, {
	u: "Heard_Island_and_McDonald_Islands",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Honduras",
	ay: "xCum4BiEdFg",
	af: "",
	h: ""
}, {
	u: "Hong_Kong",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Hungary",
	ay: "N6JquJsDF7A",
	af: "",
	h: "yes"
}, {
	u: "Iceland",
	ay: "mZ_f9ilJBjA",
	af: "",
	h: "yes"
}, {
	u: "India",
	ay: "6ycLf6ueV-o",
	af: "",
	h: "yes"
}, {
	u: "Indonesia",
	ay: "RzdcfGmsV7Q",
	af: "",
	h: "yes"
}, {
	u: "Iran",
	ay: "5do-SstpxEk",
	af: "",
	h: "yes"
}, {
	u: "Iraq",
	ay: "7lhrU-Wn16E",
	af: "",
	h: "yes"
}, {
	u: "Ireland",
	ay: "KuKsHjjjZdM",
	af: "",
	h: "yes"
}, {
	u: "Isle_of_Man",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Israel",
	ay: "YdtK4kHjhEc",
	af: "",
	h: "yes"
}, {
	u: "Italy",
	ay: "TnxZxuagp-E",
	af: "",
	h: "yes"
}, {
	u: "Jamaica",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Japan",
	ay: "168aN0pVH84",
	af: "",
	h: "yes"
}, {
	u: "Jordan",
	ay: "v7GmD51wvQI",
	af: "",
	h: "yes"
}, {
	u: "Kazakhstan",
	ay: "BrV7ujCfTKA",
	af: "",
	h: "yes"
}, {
	u: "Kenya",
	ay: "S8fWX592KWY",
	af: "",
	h: "yes"
}, {
	u: "Kiribati",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Kuwait",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Kyrgyzstan",
	ay: "Bmn87yk-AqU",
	af: "",
	h: "yes"
}, {
	u: "Laos",
	ay: "kW-Vh4oNcWo",
	af: "",
	h: "yes"
}, {
	u: "Latvia",
	ay: "epQKvU321sQ",
	af: "",
	h: "yes"
}, {
	u: "Lebanon",
	ay: "GEDlRSjPHEE",
	af: "",
	h: "yes"
}, {
	u: "Lesotho",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Liberia",
	ay: "UB2AHBpljzo",
	af: "",
	h: "yes"
}, {
	u: "Libya",
	ay: "B-GcFgAeoW8",
	af: "",
	h: "yes"
}, {
	u: "Liechtenstein",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Lithuania",
	ay: "5QmyZ25YPs4",
	af: "",
	h: "yes"
}, {
	u: "Luxembourg",
	ay: "7AhiCI2bd2Y",
	af: "",
	h: ""
}, {
	u: "Macau",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Macedonia",
	ay: "oIzc5y3Nmhw",
	af: "",
	h: "yes"
}, {
	u: "Madagascar",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Malawi",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Malaysia",
	ay: "SZYPU_E6KQo",
	af: "",
	h: "yes"
}, {
	u: "Maldives",
	ay: "jsjN8iq4NEY",
	af: "",
	h: ""
}, {
	u: "Mali",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Malta",
	ay: "-yGGPLgyFMA",
	af: "",
	h: "yes"
}, {
	u: "Marshall_Islands",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Martinique",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Mauritania",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Mauritius",
	ay: "MQQLAZHbXFs",
	af: "",
	h: "yes"
}, {
	u: "Mayotte",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Mexico",
	ay: "DScEVcCFJLY",
	af: "",
	h: "yes"
}, {
	u: "Micronesia",
	ay: "J1U7-zM38Lg",
	af: "",
	h: "yes"
}, {
	u: "Moldova",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Monaco",
	ay: "12GvMD6pOOs",
	af: "",
	h: ""
}, {
	u: "Mongolia",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Montserrat",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Morocco",
	ay: "xXVioYyHNds",
	af: "",
	h: "yes"
}, {
	u: "Mozambique",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Myanmar",
	ay: "k83C4lsuNvM",
	af: "",
	h: "yes"
}, {
	u: "Namibia",
	ay: "Cb1v_75XLTQ",
	af: "",
	h: "yes"
}, {
	u: "Nauru",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Nepal",
	ay: "5-dtaiFE4SI",
	af: "",
	h: ""
}, {
	u: "Netherlands",
	ay: "XJnVpYDEEd4",
	af: "",
	h: "yes"
}, {
	u: "Netherlands_Antilles",
	ay: "",
	af: "",
	h: ""
}, {
	u: "New_Caledonia",
	ay: "",
	af: "",
	h: ""
}, {
	u: "New_Zealand",
	ay: "zqFAOCXOV3U",
	af: "",
	h: "yes"
}, {
	u: "Nicaragua",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Niger",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Nigeria",
	ay: "DTpX693aeuo",
	af: "",
	h: "yes"
}, {
	u: "Niue",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Norfolk_Island",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "North_Korea",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Northern_Mariana_Islands",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Norway",
	ay: "psGyoi0qhSg",
	af: "",
	h: "yes"
}, {
	u: "Oman",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Pakistan",
	ay: "K86V2wI_jok",
	af: "",
	h: "yes"
}, {
	u: "Palau",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Palestine",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Panama",
	ay: "0pQdmcuwOoc",
	af: "",
	h: "yes"
}, {
	u: "Papua_New_Guinea",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Paraguay",
	ay: "8LvsSIHFZD8",
	af: "",
	h: "yes"
}, {
	u: "Peru",
	ay: "hWDLHQLwJ6A",
	af: "",
	h: "yes"
}, {
	u: "Philippines",
	ay: "qH4LhDjPIjU",
	af: "",
	h: ""
}, {
	u: "Pitcairn_Islands",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Poland",
	ay: "xHMF0Du2LAI",
	af: "",
	h: "yes"
}, {
	u: "Polynesia",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Portugal",
	ay: "4lmv2ow6guU",
	af: "",
	h: "yes"
}, {
	u: "Puerto_Rico",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Qatar",
	ay: "orBWFXY6Qt4",
	af: "",
	h: "yes"
}, {
	u: "Republic_of_the_Congo",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Reunion",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Romania",
	ay: "Ym1IAWccjtA",
	af: "",
	h: "yes"
}, {
	u: "Russia",
	ay: "glnSBfuuTfQ",
	af: "",
	h: "yes"
}, {
	u: "Rwanda",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Saint_Helena",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Saint_Kitts_and_Nevis",
	ay: "FKF-32ShRFU",
	af: "",
	h: ""
}, {
	u: "Saint_Lucia",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Saint_Pierre_and_Miquelon",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Saint_Vincent_and_the_Grenadines",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Samoa",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "San_Marino",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Sao_Tome_and_Principe",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Saudi_Arabia",
	ay: "1FMzUeIhQrc",
	af: "",
	h: "yes"
}, {
	u: "Senegal",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Serbia_and_Montenegro",
	ay: "hvODLw5tjuw",
	af: "",
	h: "yes"
}, {
	u: "Seychelles",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Sierra_Leone",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Singapore",
	ay: "QINWJF1u7pQ",
	af: "",
	h: "yes"
}, {
	u: "Slovakia",
	ay: "_N1ccX8ilBo",
	af: "",
	h: "yes"
}, {
	u: "Slovenia",
	ay: "xxpEzK12z-Q",
	af: "",
	h: "yes"
}, {
	u: "Solomon_Islands",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Somalia",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "South_Africa",
	ay: "1Qc3dtXaNjo",
	af: "",
	h: "yes"
}, {
	u: "South_Georgia_and_the_South_Sandwich_Islands",
	ay: "",
	af: "",
	h: ""
}, {
	u: "South_Korea",
	ay: "d8xjXuhMw84",
	af: "",
	h: "yes"
}, {
	u: "Spain",
	ay: "zMwS4Qn7z1E",
	af: "",
	h: "yes"
}, {
	u: "Sri_Lanka",
	ay: "plf9JN17AYA",
	af: "",
	h: ""
}, {
	u: "Sudan",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Suriname",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Svalbard_and_Jan_Mayen",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Swaziland",
	ay: "NkZYT3yDmWc",
	af: "",
	h: ""
}, {
	u: "Sweden",
	ay: "U2DQqbaw0HI",
	af: "",
	h: "yes"
}, {
	u: "Switzerland",
	ay: "qT5goEvWn9c",
	af: "",
	h: "yes"
}, {
	u: "Syria",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Taiwan",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Tajikistan",
	ay: "6SPGnn4pRlY",
	af: "",
	h: "yes"
}, {
	u: "Tanzania",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Thailand",
	ay: "3Gj1GZOI5ak",
	af: "",
	h: "yes"
}, {
	u: "Togo",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Tokelau",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Tonga",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Trinidad_and_Tobago",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Tunisia",
	ay: "_WoZLSYb8WY",
	af: "",
	h: ""
}, {
	u: "Turkey",
	ay: "aWkmXuKfpqQ",
	af: "",
	h: "yes"
}, {
	u: "Turkmenistan",
	ay: "WNmqcuD5x_E",
	af: "",
	h: "yes"
}, {
	u: "Turks_and_Caicos_Islands",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Tuvalu",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Uganda",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Ukraine",
	ay: "Qi0UopKQuv8",
	af: "",
	h: "yes"
}, {
	u: "United_Arab_Emirates",
	ay: "EmerB8PjbTo",
	af: "",
	h: "yes"
}, {
	u: "UK",
	ay: "FRDi-JL8kwQ",
	af: "",
	h: "yes"
}, {
	u: "USA",
	ay: "gA6RrWT4aAM",
	af: "",
	h: "yes"
}, {
	u: "Uruguay",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "US_Virgin_Islands",
	ay: "46Dr9GZCS_8",
	af: "",
	h: "yes"
}, {
	u: "Uzbekistan",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Vanuatu",
	ay: "iGAmsX5ajUc",
	af: "",
	h: ""
}, {
	u: "Vatican_City",
	ay: "fLJFfPbCtf4",
	af: "",
	h: "yes"
}, {
	u: "Venezuela",
	ay: "nAENJgNLZdI",
	af: "",
	h: "yes"
}, {
	u: "Vietnam",
	ay: "AUFkJjOt_J0",
	af: "",
	h: "yes"
}, {
	u: "Wallis_and_Futuna",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Western_Sahara",
	ay: "",
	af: "",
	h: ""
}, {
	u: "Yemen",
	ay: "3ybfocwY8wg",
	af: "",
	h: "yes"
}, {
	u: "Zambia",
	ay: "",
	af: "",
	h: "yes"
}, {
	u: "Zimbabwe",
	ay: "",
	af: "",
	h: "yes"
}];

if (swpg == "sw_country") {
	var cou_ur = "//www.sitesworld.com/" + sw_c_ur + "/";
	var cou_ti = "Explore " + sw_c_na + " on Sites World!";
}

/* /vars */
// 

if (thsSiteTyp == "main_sitesworld") {

	// 
	// 
}

// 
// 
// todo UPDATE FROM XML, NO ay IF af IS POPULATED!		
// 
// 
// 
/* functions */
//////////////// ALL ASADS
function asadRespId(prefix, postfix, divId, idTxt, slot, channel, orient, divWidth, divHeight) {
	// v12 
	// orient: "a" etc or ["inarticle","layout key"] etc
	// orient: ["matched","text","4","1"]
	if (as_on_this == "no") {
		return
	};
	if ((!document.getElementById(divId))
		//
		// || divId != "as_mppg_mtched" /////// TESTING ONLY!!! disable!
		//
	) {
		// 
	} else {
		var a = "";
		var b = "";
		if (orient.constructor === Array) {
			if (orient[0] == "inarticle" || orient[0] == "infeed") {
				a = "fluid";
				b = ' data-ad-layout-key="' + orient[1] + '" ';
			};
			if (orient[0] == "matched") {
				a = "autorelaxed";
				b = ' data-matched-content-ui-type="' + orient[1] + '" data-matched-content-rows-num="' + orient[2] + '" data-matched-content-columns-num="' + orient[3] + '" ';
			};
		};
		if (orient == "link") {
			a = "link"
		};
		if (orient == "matched") {
			a = "autorelaxed"
		};
		if (orient == "a") {
			a = "auto"
		};
		if (orient == "h") {
			a = "horizontal"
		};
		if (orient == "v") {
			a = "vertical"
		};
		if (orient == "r") {
			a = "rectangle"
		};
		if (orient == "rh") {
			a = "rectangle, horizontal"
		};
		if (orient == "rv") {
			a = "rectangle, vertical"
		};
		// 
		var divWidth = typeof divWidth !== 'undefined' ? divWidth : '100%';
		var divHeight = typeof divHeight !== 'undefined' ? divHeight : '100%';
		// 
		try {
			document.getElementById(divId).innerHTML = '' +
				'<style type="text/css">' +
				'.adslot_' + idTxt + ' { width: ' + divWidth + '; height:' + divHeight + '; }' +
				'</style>' +
				prefix +
				'<span style="display:block;max-width:' + divWidth + ';max-height:' + divHeight + '">' +
				' <ins class="adsbygoogle adslot_' + idTxt + '" ' +
				' style="display:block" ' +
				' data-ad-client="' + sw_as_cd + '" ' +
				' data-ad-slot="' + slot + '" ' +
				b +
				' data-ad-format="' + a + '"></ins> ' +
				'</span>' +
				postfix +
				'';
			(adsbygoogle = window.adsbygoogle || []).push({
					params: {
						google_ad_channel: channel
					}
				});
		} catch (e) {
			return true;
		}
	}
}

function asadFixId(prefix, postfix, divId, width, height, slot, channel) {
	//v3 (span not div)
	if (as_on_this == "no") {
		return
	};
	if ((!document.getElementById(divId))
		//
		// || divId != "asdf" /////// TESTING ONLY!!! disable!
		//
	) {
		// 
	} else {
		document.getElementById(divId).innerHTML = '' +
			prefix +
			' <ins class="adsbygoogle" ' +
			' style="display:inline-block;' +
			' width:' + width + 'px;' +
			' height:' + height + 'px" ' +
			' data-ad-client="' + sw_as_cd + '" ' +
			' data-ad-slot="' + slot + '"></ins>' +
			postfix;
		(adsbygoogle = window.adsbygoogle || []).push({
				params: {
					google_ad_channel: channel
				}
			});
	}
}
////////// /ALL ASADS  
function loadjs(filename) {
	var fileref = document.createElement('script');
	fileref.setAttribute("type", "text/javascript");
	fileref.setAttribute("src", filename);
	if (typeof fileref != "undefined") {
		document.getElementsByTagName("head")[0].appendChild(fileref);
	}
}

function getScript(source, callback) {
	// no-jquery getscript  
	var script = document.createElement('script');
	var prior = document.getElementsByTagName('script')[0];
	script.async = 1;
	script.onload = script.onreadystatechange = function(_, isAbort) {
		if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
			script.onload = script.onreadystatechange = null;
			script = undefined;
			if (!isAbort) {
				if (callback) callback();
			}
		}
	};
	script.src = source;
	prior.parentNode.insertBefore(script, prior);
}

function getWindowHeight() {
	if (window.innerHeight) {
		return window.innerHeight;
	}
	if (document.body.clientHeight) {
		return document.body.clientHeight;
	}
	if (document.documentElement && document.documentElement.clientHeight) {
		return document.documentElement.clientHeight;
	}
	return 700;
}

function getWindowWidth() {
	if (window.innerWidth) {
		return window.innerWidth;
	}
	if (document.body.clientWidth) {
		return document.body.clientWidth;
	}
	if (document.documentElement && document.documentElement.clientWidth) {
		return document.documentElement.clientWidth;
	}
	return 1000;
}

function noBS_ldngPrgssBar() {
	///// v1 
	//// req .gif 
	return '<div id="ldngPrgssBar"> <div style="margin:10px auto; width:250px;"><img style=";height:16px;width:99%" src="//www.sitesworld.com/common/x/i/img/prgrss.gif"/></div> </div>';
}

function getScript(source, callback) {
	// no-jquery getscript  
	var script = document.createElement('script');
	var prior = document.getElementsByTagName('script')[0];
	script.async = 1;
	script.onload = script.onreadystatechange = function(_, isAbort) {
		if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
			script.onload = script.onreadystatechange = null;
			script = undefined;
			if (!isAbort) {
				if (callback) callback();
			}
		}
	};
	script.src = source;
	prior.parentNode.insertBefore(script, prior);
}

function detectmob() {
	if (window.innerWidth <= 768) {
		return true;
	} else {
		return false;
	}
}

function ga_evCatVal(evCat, evVal) {
	return true;
	// // v2
	// // console.log(evCat + ' ' + evVal);  // KEEP!
	// try {
	// 	ga('send', 'event', evCat, evVal, {
	// 		'nonInteraction': 1
	// 	});
	// } catch (a) {
	// 	//
	// }
}

function viewport(percentage, property) {
	// v2 (vmax) - returns viewport % in pixels
	// property='vw','vh','vmax', usage: viewport(40, "vh")+'px';
	var w = Math.round((Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) * percentage / 100);
	var h = Math.round((Math.max(document.documentElement.clientHeight, window.innerHeight || 0)) * percentage / 100);
	if (property == "vw") {
		return w;
	}
	if (property == "vh") {
		return h;
	}
	if (property == "vmax") {
		if (w > h) {
			return w;
		}
		if (h > w) {
			return h;
		}
		if (w == h) {
			return w;
		}
	}
}

function isInViewport(el) {
	// el = DOM element 
	var elemTop = el.getBoundingClientRect().top;
	var elemBottom = el.getBoundingClientRect().bottom;
	var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
	return isVisible;
}

function amzNtv_sync(ad_mode, design, search_phrase, tracking_id, linkid, title, default_category) {
	// v2
	// ad_mode: "search"||"";
	// design: "text_links"||"grid";
	// 
	var adMode = (ad_mode === '') ? 'search' : ad_mode;
	var adDesign = (design == 'text_links') ? 'amzn_assoc_rows = "4"; amzn_assoc_design = "text_links";' : 'amzn_assoc_enable_interest_ads = "true";';
	var adCategory = (default_category === '') ? 'All' : default_category;
	// 
	document.write(
		'<script>' +
		'amzn_assoc_ad_type = "smart";' + // *
		'amzn_assoc_marketplace = "amazon";' + // *
		'amzn_assoc_region = "US";' + // *
		'amzn_assoc_placement = "adunit0";' + // *
		'amzn_assoc_search_bar = "false";' + // *
		'amzn_assoc_tracking_id = "' + tracking_id + '";' + // *
		'amzn_assoc_linkid = "' + linkid + '";' + // *
		'amzn_assoc_title = "' + title + '";' + // *
		'amzn_assoc_ad_mode = "' + adMode + '";' +
		'amzn_assoc_default_category = "' + adCategory + '";' + // *
		'amzn_assoc_default_search_phrase = "' + search_phrase + '";' +
		// for text_links only
		adDesign +
		// for text_links only
		'</script>' +
		'<script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>' +
		'');
}

function epnSmPl(divId, adID, kw = "", categ = "", divWidth = 300, divHeight = divWidth * 1.3) {
	// v1
	// categ : "1234 | 4567" or "" for default set at epn pg
	// kw or "" - do -
	//
	// prevent too tall
	divHeight = ($(window).width() >= $(window).height()) ? 300 : divHeight;
	if (document.getElementById(divId)) {
		try {
			$.getScript("https://epnt.ebay.com/static/epn-smart-tools.js").done(function() {
				// make width always container's or ATLEAST 300!
				var desiredWidth = $('#' + divId).width() - 12;
				var usableWidth = (desiredWidth < 300 || divWidth < 300) ? 300 : desiredWidth;
				// console.log ( usableWidth + ' ' + divHeight)
				$('#' + divId).html(
					'<div style="outline:solid 1px #aaa;max-width:99%;overflow:hidden;">' + // epn won't show if less than 300px! only way to crop for smaller widths
					'<div id="epncont_' + divId + '" style="width:' + usableWidth + 'px;height:' + divHeight + 'px;">' +
					'<ins data-keyword="' + kw + '" data-category-id="' + categ + '" class="epn-placement" data-config-id="' + adID + '"></ins>' +
					'</div> </div>' +
					'');
			});
		} catch (e) {
			console.log('no epnSmPl');
		}
	}
}

function tablify(html_array, rows, cols, bord) {
	// v2 -
	// html_array e.g. ['<a><h3></h3><img/></a>', ''<a><h3></h3><img/></a>'']
	// rows,cols,bord='yes'
	var d = (bord == "yes") ? 'border:solid 1px #ccc!important;padding:0.5%!important;' : '';
	var a = '',
		b = '',
		c = '',
		counter = 0;
	a = '' +
		'<style type="text/css">' +
		'.axaffdtbl,.axaffdtbl a,.axaffdtbl img' +
		'{margin:0!important;background:#fff!important;box-shadow:none!important;border:none!important;}' +
		'.axaffdtbl {display:table;width:99.5%!important;border-collapse:collapse!important;}' +
		'.axaffdtbl_tr {display:table-row} ' +
		'.axaffdtbl_td {display:table-cell;vertical-align:top!important;' + d + '} ' +
		'.axaffdtbl a {text-decoration:none;display:block!important;width:100%!important;height:auto!important;}' +
		'.axaffdtbl img {width:100%!important;}' +
		'</style>' +
		'<span class="axaffdtbl">';
	for (i = 0; i < rows; i++) {
		b += '<span class="axaffdtbl_tr">';
		for (j = 0; j < cols; j++) {
			var item = html_array[counter] || ''; //TODO placeholder for empties
			b += '<span class="axaffdtbl_td">' + item + '</span>';
			counter++;
		}
		b += '</span>';
	}
	c = '</span>';
	return a + b + c;
}

function affLocalize() {
	// v2
	// req: jq
	// --- VARS TO CHANGE
	/// AMAZON ///
	// EBAY
	var ebAffId = thsBlg_epn; // campId
	// /--- VARS TO CHANGE
	function ebLocalize(strTLD, url) {
		if (strTLD) {
			switch (strTLD) {
				case 'AT':
					cntry = "5221-53469-19255-0";
					icep = "229473";
					break;
				case 'AU':
					cntry = "705-53470-19255-0";
					icep = "229515";
					break;
				case 'BE':
					cntry = "1553-53471-19255-0";
					icep = "229522";
					break;
				case 'CA':
					cntry = "706-53473-19255-0";
					icep = "229529";
					break;
				case 'CH':
					cntry = "5222-53480-19255-0";
					icep = "229536";
					break;
				case 'DE':
					cntry = "707-53477-19255-0";
					icep = "229487";
					break;
				case 'ES':
					cntry = "1185-53479-19255-0";
					icep = "229501";
					break;
				case 'FR':
					cntry = "709-53476-19255-0";
					icep = "229480";
					break;
				case 'IE':
					cntry = "5282-53468-19255-0";
					icep = "229543";
					break;
				case 'IN':
					cntry = "4686-53472-19255-0";
					icep = "229550";
					break;
				case 'IT':
					cntry = "724-53478-19255-0";
					icep = "229494";
					break;
				case 'NL':
					cntry = "1346-53482-19255-0";
					icep = "229557";
					break;
				case 'UK':
					cntry = "710-53481-19255-0";
					icep = "229508";
					break;
				default:
					cntry = "711-53200-19255-0";
					icep = "229466";
			}
		}
		var affUrl = url;
		affUrl = affUrl.replace(/\/[0-9]+\-[0-9]+\-19255\-0\//, '/' + cntry + '/');
		affUrl = affUrl.replace(/vectorid\=[0-9]+/, 'icep_vectorid=' + icep);
		return affUrl;
	}
	// 
	function amLocalize(itmId, strTLD) {
		if (strTLD) {
			switch (strTLD) {
				case 'JP':
					strTLD = 'co.jp';
					break;
				case 'GB':
				case 'JE':
				case 'GG':
				case 'IM':
				case 'IE':
				case 'UK':
					strTLD = 'co.uk';
					break;
				case 'CH':
				case 'AT':
					strTLD = 'de';
					break;
				case 'PT':
					strTLD = 'es';
					break;
				default:
					strTLD = (thsBlg_amz[strTLD.toLowerCase()] != null ? strTLD.toLowerCase() : 'com');
					break;
			}
			affId = thsBlg_amz[strTLD.toLowerCase()];
		}
		return "https://www.amazon." + strTLD + "/exec/obidos/ASIN/" + itmId + "/" + affId;
	}
	// 
	$.ajax({
		method: "GET",
		dataType: "json",
		url: "https://freegeoip.app/json/" // new 11/18
	}).done(function(json) {
		try {
			var strTLD = json.country_code;
			console.log('geo ' + strTLD);
			var epnUrlReg = /vectorid/;
			var amzUrlReg = RegExp("/([a-zA-Z0-9]{10})(?:[/?]|$)");
			// var amzUrlReg = RegExp("/(?!/e|st)../([A-Z0-9]{10})");
			// "/(?!/e|st)../([A-Z0-9]{10})"
			$('a').each(function(index) {
				var url = unescape($(this).attr('href'));
				if (url.match(amzUrlReg)) {
					var itmId = url.match(amzUrlReg)[1];
					// console.log(itmId)
					$(this).attr('href', amLocalize(itmId, strTLD));
				}
				// EPN
				if (url.match(epnUrlReg)) {
					$(this).attr('href', ebLocalize(strTLD, url));
				}
			});
		} catch (e) {}
	}).fail(function(error) {
		// console.log(error);
	});
}
// 
function mnad_async(divId, size, crid, versionId, cid) {
	// v1 - official mn async
	if (!document.getElementById(divId)) {
		// 
	} else {
		window._mNHandle = window._mNHandle || {};
		window._mNHandle.queue = window._mNHandle.queue || [];
		medianet_versionId = versionId;
		(function() {
			var sct = document.createElement("script"),
				sctHl = document.getElementsByTagName("script")[0],
				isSSL = 'https:' == document.location.protocol;
			sct.type = "text/javascript";
			sct.src = (isSSL ? 'https:' : 'http:') + '//contextual.media.net/dmedianet.js?cid=' + cid + (isSSL ? '&https=1' : '') + '';
			sct.async = "async";
			sctHl.parentNode.insertBefore(sct, sctHl);
		})();
		document.getElementById(divId).innerHTML =
			' <div id="' + crid + '"></div>' +
			'';
		try {
			window._mNHandle.queue.push(function() {
				window._mNDetails.loadTag(crid, size, crid);
			});
		} catch (error) {}
	}
}

function addthis_SW(divId, url, title, template) {
	/**
	- V3 - 
	all vars optional BUT divId 
	template is string to determine order and choice of buttons (see below)
	for vertical send multiple in succession: ie addthis_RRSSB('a', null, null, "~<email>~");addthis_RRSSB('a', null, null, "~<facebook>~");
	*/
	/// vars to set ///
	var emailPostfix = ""; // eg " - via mysite"
	var pageImgUrl = "";
	try {
		pageImgUrl = document.querySelector('link[rel*="image_src"]').getAttribute('href'); // eg. for pinterest etc http://a.com/a.jpg
	} catch (e) {}
	/// current page's url and title if not passed
	var url = (typeof url !== 'undefined') ? url : window.location.href;
	var title = (typeof title !== 'undefined') ? title : document.title;
	var template = (typeof template !== 'undefined') ? template : "~<email>~~<facebook>~~<twitter>~~<pinterest>~~<whatsapp>~";
	url = encodeURIComponent(url);
	title = encodeURIComponent(title);
	//// add css and js if not there
	if (document.querySelector('link[href*="rrssb.css"]') === null) {
		var all_css = document.createElement('link');
		all_css.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/rrssb/1.14.0/css/rrssb.css");
		all_css.setAttribute("rel", "stylesheet");
		all_css.setAttribute("type", "text/css");
		document.getElementsByTagName("head")[0].appendChild(all_css);
		if (document.getElementById('addthis_RRSSBScript')) {
			/////////////////////
		} else {
			var addthisScript = document.createElement('script');
			addthisScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/rrssb/1.14.0/js/rrssb.min.js');
			addthisScript.setAttribute('id', 'addthis_RRSSBScript');
			document.body.appendChild(addthisScript);
		}
	}
	///// more buttons at bit.ly/2XbypkQ
	///// MODIFY VARIOUS VARS & CODE ABOVE AND BELOW IF ADDING!
	var R_email_R = '  <li class="rrssb-email">' +
		'    <a href="mailto:?Subject=' + title + ' ' + emailPostfix + '&body=' + url + '">' +
		'      <span class="rrssb-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.386 2.614H2.614A2.345 2.345 0 0 0 .28 4.96L.27 19.04a2.353 2.353 0 0 0 2.345 2.346h18.77a2.354 2.354 0 0 0 2.348-2.347V4.96a2.356 2.356 0 0 0-2.347-2.346zm0 4.694L12 13.174 2.614 7.308V4.96L12 10.828l9.386-5.866V7.31z"/></svg></span>' +
		// '      <span class="rrssb-text"></span>' +
		'    </a>' +
		'  </li>';
	var R_facebook_R = '  <li class="rrssb-facebook">' +
		'    <a href="https://www.facebook.com/sharer/sharer.php?u=' + url + '" class="popup">' +
		'      <span class="rrssb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M26.4 0H2.6C1.714 0 0 1.715 0 2.6v23.8c0 .884 1.715 2.6 2.6 2.6h12.393V17.988h-3.996v-3.98h3.997v-3.062c0-3.746 2.835-5.97 6.177-5.97 1.6 0 2.444.173 2.845.226v3.792H21.18c-1.817 0-2.156.9-2.156 2.168v2.847h5.045l-.66 3.978h-4.386V29H26.4c.884 0 2.6-1.716 2.6-2.6V2.6c0-.885-1.716-2.6-2.6-2.6z"/></svg></span>' +
		// '      <span class="rrssb-text"></span>' +
		'    </a>' +
		'  </li>';
	var R_twitter_R = '  <li class="rrssb-twitter">' +
		'    <a href="https://twitter.com/intent/tweet?text=' + title + ' ' + url + '"' +
		'    class="popup">' +
		'      <span class="rrssb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M24.253 8.756C24.69 17.08 18.297 24.182 9.97 24.62a15.093 15.093 0 0 1-8.86-2.32c2.702.18 5.375-.648 7.507-2.32a5.417 5.417 0 0 1-4.49-3.64c.802.13 1.62.077 2.4-.154a5.416 5.416 0 0 1-4.412-5.11 5.43 5.43 0 0 0 2.168.387A5.416 5.416 0 0 1 2.89 4.498a15.09 15.09 0 0 0 10.913 5.573 5.185 5.185 0 0 1 3.434-6.48 5.18 5.18 0 0 1 5.546 1.682 9.076 9.076 0 0 0 3.33-1.317 5.038 5.038 0 0 1-2.4 2.942 9.068 9.068 0 0 0 3.02-.85 5.05 5.05 0 0 1-2.48 2.71z"/></svg></span>' +
		// '      <span class="rrssb-text"></span>' +
		'    </a>' +
		'  </li>';
	var R_pinterest_R = '  <li class="rrssb-pinterest">' +
		'    <a href="https://pinterest.com/pin/create/button/?url=' + url + '&media=' + pageImgUrl + '&description=' + title + '"' +
		'    class="popup">' +
		'      <span class="rrssb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M14.021 1.57C6.96 1.57 1.236 7.293 1.236 14.355S6.96 27.14 14.021 27.14s12.785-5.725 12.785-12.785C26.807 7.294 21.082 1.57 14.021 1.57zm1.24 17.085c-1.161-.09-1.649-.666-2.559-1.219-.501 2.626-1.113 5.145-2.925 6.458-.559-3.971.822-6.951 1.462-10.116-1.093-1.84.132-5.545 2.438-4.632 2.837 1.123-2.458 6.842 1.099 7.557 3.711.744 5.227-6.439 2.925-8.775-3.325-3.374-9.678-.077-8.897 4.754.19 1.178 1.408 1.538.489 3.168-2.128-.472-2.763-2.15-2.682-4.388.131-3.662 3.291-6.227 6.46-6.582 4.007-.448 7.771 1.474 8.29 5.239.579 4.255-1.816 8.865-6.102 8.533l.002.003z"/></svg></span>' +
		// '      <span class="rrssb-text"></span>' +
		'    </a>' +
		'  </li>';
	var R_whatsapp_R = '  <li class="rrssb-whatsapp">' +
		'    <a href="whatsapp://send?text=' + title + ' ' + url + '"' +
		'    class="popup">' +
		'      <span class="rrssb-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90"><path d="M90 43.841c0 24.213-19.779 43.841-44.182 43.841a44.256 44.256 0 0 1-21.357-5.455L0 90l7.975-23.522a43.38 43.38 0 0 1-6.34-22.637C1.635 19.628 21.416 0 45.818 0 70.223 0 90 19.628 90 43.841zM45.818 6.982c-20.484 0-37.146 16.535-37.146 36.859 0 8.065 2.629 15.534 7.076 21.61L11.107 79.14l14.275-4.537A37.122 37.122 0 0 0 45.819 80.7c20.481 0 37.146-16.533 37.146-36.857S66.301 6.982 45.818 6.982zm22.311 46.956c-.273-.447-.994-.717-2.076-1.254-1.084-.537-6.41-3.138-7.4-3.495-.993-.358-1.717-.538-2.438.537-.721 1.076-2.797 3.495-3.43 4.212-.632.719-1.263.809-2.347.271-1.082-.537-4.571-1.673-8.708-5.333-3.219-2.848-5.393-6.364-6.025-7.441-.631-1.075-.066-1.656.475-2.191.488-.482 1.084-1.255 1.625-1.882.543-.628.723-1.075 1.082-1.793.363-.717.182-1.344-.09-1.883-.27-.537-2.438-5.825-3.34-7.977-.902-2.15-1.803-1.792-2.436-1.792-.631 0-1.354-.09-2.076-.09s-1.896.269-2.889 1.344c-.992 1.076-3.789 3.676-3.789 8.963 0 5.288 3.879 10.397 4.422 11.113.541.716 7.49 11.92 18.5 16.223C58.2 65.771 58.2 64.336 60.186 64.156c1.984-.179 6.406-2.599 7.312-5.107.9-2.512.9-4.663.631-5.111z"/></svg></span>' +
		// '      <span class="rrssb-text"></span>' +
		'    </a>' +
		'  </li>';
	//// 1ST REPLACE **THEN** REMOVE ALSO!
	var final_buttons = template.replace("~<email>~", R_email_R).replace("~<facebook>~", R_facebook_R).replace("~<twitter>~", R_twitter_R).replace("~<pinterest>~", R_pinterest_R).replace("~<whatsapp>~", R_whatsapp_R);
	//// 2ND NOW REMOVE UNNEEDED ONES!
	final_buttons = final_buttons.replace("~<email>~", "").replace("~<facebook>~", "").replace("~<twitter>~", "").replace("~<pinterest>~", "").replace("~<whatsapp>~", "");
	var rrssbHTML = '<ul class="rrssb-buttons clearfix">' + final_buttons + '</ul>';
	try {
		document.getElementById(divId).insertAdjacentHTML("beforeend", rrssbHTML);
	} catch (e) {}
}

function addthis_a(aTid, divId, customUrlTitle, url, title, contId, inStyle, addServHtml) {
	return;
}

function amzFromLbls(keywords, div) {
	// v2
	// req iframeResizer.min.js
	$('#' + div).html(
		'<iframe onload="iFrameResize()" class="iframeresize_class" style="display:block;width:99%" src="https://' + thsBlg_dyn_catcher + '?s=amz&a=' + keywords + '" scrolling="no" frameborder="0" border="0" ></iframe>' +
		// '<iframe style="height:450px;width:' + (!detectmob() ? '400' : '200') + 'px;overflow:hidden;display:block" src="https://'+thsBlg_dyn_catcher+'?s=amz&a=' + keywords + '" scrolling="no" frameborder="0" border="0" ></iframe>' +
		''
	);
	// 
}

function sw_disqus() {
	var a = '<div id="comments" style=""><div id="disqus_thread"></div>' +
		'<a href="https://disqus.com" rel="nofollow" class="dsq-brlink">Powered by <span class="logo-disqus">Disqus</span></a></div> ';
	return a;
}

function prependHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("afterbegin", html);
	}
}

function appendHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("beforeend", html);
	}
}

function appendHTMLByTag(firstTag, html) {
	if (!document.getElementsByTagName(firstTag)[0]) {
		// 
	} else {
		document.getElementsByTagName(firstTag)[0].insertAdjacentHTML("beforeend", html);
	}
}

function appendHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("beforeend", html);
	}
}

function insertAfterHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("afterend", html);
	}
}

function insertBeforeHTMLByTag(firstTag, html) {
	if (!document.getElementsByTagName(firstTag)[0]) {
		// 
	} else {
		document.getElementsByTagName(firstTag)[0].insertAdjacentHTML("beforebegin", html);
	}
}

function insertBeforeHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("beforebegin", html);
	}
}

function writeInnerHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).innerHTML = html;
	}
}

function writeInnerHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].innerHTML = html;
	}
}

function goSWA(aMenu) {
	if (aMenu.options.value != "none") {
		location = aMenu.options[aMenu.selectedIndex].value
	}
}

function nw_MenuOpts(caturl) {
	var htm = "";
	for (i = 0; i < sw_countries.length; i++) {
		var u = sw_countries[i]["u"];
		var n = u.replace(/_/g, " ");
		if (caturl == "anthem.html") {
			if (sw_countries[i]["ay"].match(/.+/)) {
				htm += '<option value="//www.sitesworld.com/' + u + '/' + caturl + '"> ' + ' ' + n + '&nbsp;&nbsp;</option>';
			} else {
				continue;
			}
		} else if (caturl == "holidays.html") {
			if (sw_countries[i]["h"] == "yes") {
				htm += '<option value="//www.sitesworld.com/' + u + '/' + caturl + '"> ' + ' ' + n + '&nbsp;&nbsp;</option>';
			} else {
				continue;
			}
		} else {
			htm += '<option value="//www.sitesworld.com/' + u + '/' + caturl + '"> ' + ' ' + n + '&nbsp;&nbsp;</option>';
		}
	}
	return htm;
}

function nw_MenuForm(catcss, caturl) {
	var a =
		'<h3>Get more ' + catcss + '</h3>' +
		'<form name="menubox_form_' + catcss + '">' +
		'<div clas	s="menuboxwrap">' +
		'<select onchange="goSWA(this)" name="menubox_select_' + catcss + '" class="menubox_select_' + catcss + '">' +
		'<option value=""> Select Country&nbsp;&nbsp;</option>' +
		nw_MenuOpts(caturl) +
		'</select>' +
		'<div class="clearer"></div>' +
		'</div>' +
		'</form>' +
		'<div class="clearer"></div>';
	return a;
}

function nw_SmallFloatMenu(catcss, caturl) {
	var a = '<div style="margin:0 50px;position:relative;"><div style="position:absolute;right:0;top:0">' +
		'<div id="swcntrypg"><div id="menubox" class="menubox_world" style="height:auto;width:auto">' +
		nw_MenuForm(catcss, caturl) +
		'</div></div>' +
		'</div></div>';
	return a;
}

function itemFlag(url, txt) {
	var a = '<img src="//www.sitesworld.com/common/x/i/img/big_flags/' + url + '_Flag.jpg" alt="Flag of ' + txt + '" />';
	return a;
}

function itemAnthem() {
	var a = "";
	var ytcd = "";
	var src = "";
	var txt = sw_c_na;
	var url = sw_c_ur;
	for (i = 0; i < sw_countries.length; i++) {
		var u = sw_countries[i]["u"];
		if (u == url) {
			if (sw_countries[i]["ay"].match(/.+/)) {
				ytcd = sw_countries[i]["ay"];
				src = "you";
			} else if (sw_countries[i]["af"].match(/.+/)) {
				ytcd = sw_countries[i]["af"];
				src = "fli";
			} else {
				continue;
			}
		}
	}
	a +=
		'<table class="anthConTbl">' +
		'<tr>' +
		'<td class="aCTtd1">' +
		'<div class="aCTdiv1">' +
		'<div class="aCTdiv3">';
	// 444 x 250 - 560 x 315
	if (src == "fli") {
		var n = ytcd.split("|");
		a +=
			'<object type="application/x-shockwave-flash" class="aCTObj1"  ' +
			' data="https://www.flickr.com/apps/video/stewart.swf?v=109786" ' +
			' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"> ' +
			'<param name="flashvars" value="intl_lang=en-us&photo_secret=' +
			n[0] +
			'&photo_id=' +
			n[1] +
			'"></param> ' +
			'<param name="movie" value="https://www.flickr.com/apps/video/stewart.swf?v=109786"></param> ' +
			'<param name="bgcolor" value="#000000"></param> ' +
			'<param name="allowFullScreen" value="true"></param>' +
			'<embed class="aCTEmb1" type="application/x-shockwave-flash" ' +
			'src="https://www.flickr.com/apps/video/stewart.swf?v=109786" ' +
			'allowfullscreen="true" flashvars="intl_lang=en-us&photo_secret=' +
			n[0] +
			'&photo_id=' +
			n[1] +
			'"> ' +
			'</embed></object>';
	} else {
		a +=
			'<iframe class="aCTdivifrYT" src="//www.youtube.com/embed/' +
			ytcd +
			'?rel=0&autoplay=0" frameborder="0" allowfullscreen></iframe>';
	}
	a +=
		'</div>' +
	// '<div class="aCTdiv4">' +
	// '<iframe class="aCTdivifr2" id="ifr_gims"  ' +
	// 'src="//'+thsBlg_dyn_catcher+'?s=gims_anth&n=' +
	// txt +
	// ' cityscape&u=' +
	// url +
	// '" frameBorder="0" scrolling="no">' +
	// '</iframe>' +
	// '</div>' +
	'</div>' +
		'</td>' +
		'<td class="aCTtd2">' +
	//asad('160','600','9126557442','1710393046');				 
	'</td>' +
		'</tr>' +
		'</table>';
	a += '' +
	// '<h3 style="text-align:center;font:bold 17px Arial">Share something interesting about anthem of ' + txt + '!</h3>'+
	'';
	return a;
}

function gCSE(cseId, divId, phText, target) {
	// v4 - all inclusive new API cse 
	// more... see tab cse
	var target = (typeof target === 'undefined') ? "one" : target;
	var placeholder = (typeof phText === 'undefined') ? "" : phText;
	// appnd BooStr-negating styles...
	$('head').append('<style> input.gsc-input, .gsc-input-box, .gsc-input-box-hover, .gsc-input-box-focus, .gsc-search-button { box-sizing: content-box; line-height: normal; } .gsc-control-cse { margin: 0!important; padding: 0!important; } </style>');
	if (target == "one") {
		$('#' + divId).html('<div class="gcse-search"></div>');
	} else if (target.match(/\/\//)) {
		$('#' + divId).html('<div class="gcse-searchbox" data-resultsUrl="' + target + '" data-newWindow="true" data-queryParameterName="q" ></div>');
	} else {
		$('#' + divId).html('<div class="gcse-searchbox"></div>');
		$('#' + target).html('<div class="gcse-searchresults"></div>');
	}
	// v1  
	// 
	(function() {
		// cse call back
		window.__gcse = {
			callback: myCSECallback
		};

		function myCSECallback() {
			// console.log('EXECUTED');
			// rmve "Cstm srch" txt frm gcse input
			$('input.gsc-input').attr('placeholder', ' ' + placeholder);
		}
		var gcse = document.createElement('script');
		gcse.type = 'text/javascript';
		gcse.async = true;
		gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
			'//www.google.com/cse/cse.js?cx=' + cseId;
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(gcse, s);
	})();
}
//////////////// refugee funcs (keep or del from html src!) ////////
function addths_item() {}
// 
// 
// 
// 
// 
/* /functions */
/* ================ EXEC ====================== */
// 
///////////////////////   MAIN SW //////////////////////////////
// 
if (thsSiteTyp == "main_sitesworld") {
	// 
	// 
	// ldng_16_3x for asad style

	document.getElementsByTagName('head')[0].insertAdjacentHTML("beforeend", '<style> .ldng_16_3x {display:block;background-image:url(//www.sitesworld.com/common/x/i/img/ldng_16_3x.gif);background-repeat:no-repeat;background-position:center center;vertical-align: middle;} </style>');
	// 

	//////////// === DELAYED JQUERY LOAD   //////////

	if (typeof window.jQuery == "undefined") {
		var jQl = {
			q: [],
			dq: [],
			ready: function(a) {
				typeof a == "function" && jQl.q.push(a);
				return jQl;
			},
			unq: function() {
				for (var a = 0; a < jQl.q.length; a++) jQl.q[a]();
				jQl.q = [];
			},
			bId: null,
			boot: function(a) {
				if (typeof window.jQuery.fn == "undefined") {
					if (!jQl.bId) jQl.bId = setInterval(function() {
						jQl.boot(a)
					}, 25)
				} else {
					jQl.bId && clearInterval(jQl.bId);
					jQl.bId = 0;
					jQl.unqjQdep();
					$(jQl.unq());
					typeof a == "function" && a()
				}
			},
			booted: function() {
				return jQl.bId === 0
			},
			loadjQ: function(a, c) {
				setTimeout(function() {
					var b = document.createElement("script");
					b.src = a;
					document.getElementsByTagName("head")[0].appendChild(b)
				}, 1);
				jQl.boot(c)
			},
			loadjQdep: function(a) {
				jQl.loadxhr(a, jQl.qdep)
			},
			qdep: function(a) {
				if (a) typeof window.jQuery.fn !== "undefined" && !jQl.dq.length ? jQl.rs(a) : jQl.dq.push(a)
			},
			unqjQdep: function() {
				if (typeof window.jQuery.fn == "undefined") setTimeout(jQl.unqjQdep, 50);
				else {
					for (var a = 0; a < jQl.dq.length; a++) jQl.rs(jQl.dq[a]);
					jQl.dq = []
				}
			},
			rs: function(a) {
				var c = document.createElement("script");
				document.getElementsByTagName("head")[0].appendChild(c);
				c.text = a
			},
			loadxhr: function(a, c) {
				var b;
				b = jQl.getxo();
				b.onreadystatechange = function() {
					b.readyState != 4 || 200 != b.status || c(b.responseText, a)
				};
				try {
					b.open("GET", a, true);
					b.send("")
				} catch (d) {}
			},
			getxo: function() {
				var a = false;
				try {
					a = new XMLHttpRequest
				} catch (c) {
					for (var b = ["MSXML2.XMLHTTP.5.0", "MSXML2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], d = 0; d < b.length; ++d) {
						try {
							a = new ActiveXObject(b[d])
						} catch (e) {
							continue
						}
						break
					}
				} finally {
					return a
				}
			}
		};
		var $ = jQl.ready,
			jQuery = $;
		// End of jQl code
		jQl.loadjQ('https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js');
	}

	//////////// === DELAYED JQUERY LOAD   //////////

	// 
	if (detectmob()) {
		//
		// menubar toggler
		function togglrs() {
			// *** ENABLE togglrs CSS CHUNK in style.css IF this is in use!!!
			var tgglr = document.getElementById("top_nav");
			tgglr.style.display = tgglr.style.display.match(/(block|table)/) ? 'none' : 'table';
			var tgglr_2 = document.getElementById("togglrOnOff");
			tgglr_2.style.display = tgglr_2.style.display.match(/(block|table)/) ? 'none' : 'block';
			return false;
		}

		prependHTML('top_header', '<div id="header-toggle">' +
			'<style scoped>' +
			'#nav-toggle-wrap{position: absolute; right: 60px; top: 10px;}' +
			'#nav-toggle { background:white;outline:solid white 5px;position: absolute; left: 50%; top: 50%; } #nav-toggle { cursor: pointer; padding: 10px 35px 16px 0px; } #nav-toggle span, #nav-toggle span:before, #nav-toggle span:after { cursor: pointer; border-radius: 1px; height: 5px; width: 35px; background: #1f1f82; position: absolute; display: block; content: ""; } #nav-toggle span:before { top: -10px; } #nav-toggle span:after { bottom: -10px; }  ' +
			'</style>' +
			'<div id="nav-toggle-wrap"><a onclick="togglrs();" id="nav-toggle"><span></span></a></div>' +
			'</div>'
		);
		// menubar toggler
		// 
	}
	// 
	// 
	// ============= BEGIN AS/AFF ==================
	// 
	// 
	// resp ad 6312455445, resp linku 4928296247
	// 
	// 
	//////////// ALL MOB LU IN HEADER (IF togglrs() IN USE ) //////////////
	if (detectmob()) {

	}
	// 
	// =========== TOP HOME PGS ===============
	// 
	if (swpg == "sw_top_pgs_index" || swpg == "sw_top_pgs_maps") {
		if (!detectmob()) {}
	}
	// 
	// ========= TIME INDEXES ==============
	// 
	if (swpg == "sw_top_pgs_time" || swpg == "sw_time_indexes") {
		// === DTP ===
		if (!detectmob()) {}
		// === MOB ===
		if (detectmob()) {}
		// === DTP+MOB ===
	}
	// 
	// ============ TIME PAGES ===================
	// 
	if (swpg == "sw_time_pages") {
		// === DTP ===
		if (!detectmob()) {
			////// DTP AD 1/1
			asadFixId(
				' ',
				' ',
				"as_tm_pg_R",
				"160",
				"600",
				"9126557442",
				"3831638056" // sw_tm_pgs_B
			);

			////////// DTP AFF 1/1
			// aff is now jq (see cdStyle )
			///////// DTP LU 2/2
			appendHTMLByClass('tmtd1', '<div id="tim_lu_1"></div>');
			
			// 
		}
		// === MOB ===
		if (detectmob()) {
			if (swpg == "sw_time_pages") {}
		} // detectmob()
	}
	//
	//  ============= COUNTRY  ================
	// 
	if (swpg == "sw_country") {
		if (!detectmob()) {}
		if (detectmob()) {}

		///////////////////// country AMZ AFF VIA /c/ /////////
		// $('#amcont').prepend(' <div id="ebRSBtm_2"></div>');
		// var bb = 'books about ' + sw_c_na;
		// amzFromLbls(bb.replace(/\s+/igm, "%20"), "ebRSBtm_2");
		// $.getScript("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js").done(function() {
		// 	$('.iframeresize_class').iFrameResize();
		// });
		///////////////////// country AMZ AFF VIA /c/ /////////

	}
	// 
	// HOLIDAYS
	// 
	if (swpg == "sw_holidays") {
		// // OFF: NO PERF
	}
	// 
	// ANTHEMS
	// 
	if (swpg == "sw_anthems") {}
	// 
	// FLAGS
	// 
	if (swpg == "sw_flags") {
		// OFF: NO PERF
	}
	// 
	// SEARCH
	// 
	if (swpg == "sw_top_pgs_search") {
		if (!detectmob()) {
			// OFF: NO PERF
		}
	}
	// 
	// MAPS
	// 
	if (swpg == "sw_mappage") {
		if (!detectmob()) {

		}
		if (detectmob()) {}
	}
	//
	// 
	// 
	// // --- LAST AS header all ---
	// disbled... now on all after head (see below)
	//////////// ALL DTP LU IN HEADER //////////////
	if (!detectmob()) { // mob has togglr linku
		// 
	}
	if (!detectmob()) {}
	// 
	// 
	// =============== /END AS/AFF ==================
	// 
	// ========== BEGIN OTHER ELEMS ==================
	if (swpg == "sw_country") {}
	// 
	// 
	// 
	if (
		swpg.match(/sw_top_pgs/) ||
		swpg == "normal" ||
		swpg == "sw_time_indexes" ||
		swpg == "sw_time_pages" ||
		swpg == "sw_flags" ||
		swpg == "sw_anthems" ||
		swpg == "sw_holidays"
	) {
		// search + addthis
		// var abcd = '//' + thsBlg_dyn_catcher + '?s=gse&n=' + swpg + '';
		if (detectmob()) {
			writeInnerHTMLByClass(
				'addths_all',
				'<div id="togglrOnOff" style="display:none">' + // for togglrs()
				'<div style="height: 36px; overflow: hidden; width: 300px;margin:3px auto">' +
				'<div id="searchbox_mob"></div>' +
				// '<iframe class="" src="' + abcd + '" scrolling="no" frameborder="0" border="0" class="cseifr"></iframe>' +
				'</div>' +
				'<table style="margin:0 auto"><tr><td>' +
				'<div id="addthis_async_receiver"></div>' +
				'</td></tr></table>' +
				'</div>'
			);
			insertBeforeHTML('top_mother', '<div style="width:90%;margin:10px auto;"><div id="cse_results"></div></div>');
		}
		if (!detectmob()) {
			writeInnerHTMLByClass(
				'addths_all',
				'<div id="searchbox">' +
				// '<iframe class="" src="' + abcd + '" scrolling="no" frameborder="0" border="0" class="cseifr"></iframe>' +
				'</div>' +
				'<div id="addthis_async_receiver"></div>'
			);
			insertBeforeHTML('top_mother', '<div style="width:90%;margin:10px auto;"><div id="cse_results"></div></div>');
		}
	}
	// sw_holidays
	if (swpg == "sw_holidays") {
		writeInnerHTML('as_holidays_T', nw_SmallFloatMenu("holidays", "holidays.html"));
		// writeInnerHTML('as_holidays_B', sw_disqus());
		// loadjs('https://disqus.com/forums/sitesworld/embed.js');
	}
	// sw_flags
	if (swpg == "sw_flags") {
		writeInnerHTML('as_flag_T', nw_SmallFloatMenu("flags", "flag.html"));
		writeInnerHTML('as_flag_incont', itemFlag(sw_c_ur, sw_c_na));
		// writeInnerHTML('as_flag_B', sw_disqus());
		// loadjs('https://disqus.com/forums/sitesworld/embed.js');
	}
	// sw_anthems
	if (swpg == "sw_anthems") {
		writeInnerHTML('as_anthem_T', nw_SmallFloatMenu("anthems", "anthem.html"));
		writeInnerHTML('as_anthem_incont', itemAnthem());
		// writeInnerHTML('as_anthem_B', sw_disqus());
		// loadjs('https://disqus.com/forums/sitesworld/embed.js');
	}
	// 
	// 
	//KEEP-LAST-IN-ORDER
	if (swpg == "sw_top_pgs_index" || swpg == "sw_country") {
		writeInnerHTML('menubox', nw_MenuForm("countries", ""));
	}
	if (swpg == "sw_top_pgs_maps" || swpg == "sw_mappage") {
		writeInnerHTML('menubox', nw_MenuForm("maps", "map.html"));
	}
	if (swpg == "sw_top_pgs_flags") {
		writeInnerHTML('menubox', nw_MenuForm("flags", "flag.html"));
	}
	if (swpg == "sw_top_pgs_anthems") {
		writeInnerHTML('menubox', nw_MenuForm("anthems", "anthem.html"));
	}
	if (swpg == "sw_top_pgs_holidays") {
		writeInnerHTML('menubox', nw_MenuForm("holidays", "holidays.html"));
	}
	if (swpg == "sw_top_pgs_heritage") {
		writeInnerHTML('menubox', nw_MenuForm("countries", ""));
		writeInnerHTML('menubox_2', nw_MenuForm("maps", "map.html"));
	}
	// END OTHER ELEMS
	/* /exec */
	/* jquery */
	// 
	// 
	// ================== MAPS ==============================
	// 
	//
	if (swpg == "sw_mappage") {
		function load() {
			resize();
		}

		function resize() {
			var h = getWindowHeight();
			var w = getWindowWidth();
			var e = document.getElementById("topper");
			if (e) {
				e.style.height = h + "px";
				e.style.width = w + "px";
			}
			var e = document.getElementById("map");
			if (e) {
				e.style.height = (h - 0 - 3) + "px";
				e.style.width = (w - 0 - 2) + "px";
			}
			var e = document.getElementById("header");
			if (e) {
				e.style.width = (w - 0 - 2) + "px";
			}
			//
			//REDUC MP SIZE BY 50PX FOR AD
			// if (detectmob()) {
			// 	var aa = document.getElementById('map').offsetHeight;
			// 	document.getElementById("map").style.height = aa - 50 + 'px';
			// }
		}
		//
		// load();
		resize();
		//////////// WIP LFLT MPS ////////////////
		var mapOn = "yes";
		if (mapOn == "yes") {
			function fltrThsOnly(code, data) {
				//// v1 match properties.A3 and only make it available (filter)
				return data.filter(
					function(data) {
						return data.properties.A3 == code
					}
				);
			}
			// 
			function drawMap(json, type) {
				// var tiles = 'https://maps.wikimedia.org/osm-intl/${z}/${x}/${y}.png';
				var tiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
				var attrib = '&copy; <a target="_blank" rel="nofollow" href="https://www.openstreetmap.org/fixthemap">OpenStreetMap</a> contributors';
				// 
				if (document.querySelector('link[href*="leaflet.css"]') === null) {
					appendHTMLByTag("head", '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/leaflet.css"/>');
				}
				$.getScript("https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/leaflet.js").done(function() {
					// 
					if (type == "world") {
						////////// ENTIRE WORLD
						var map = L.map('map'),
							osmUrl = tiles,
							osmAttribution = attrib;
						L.tileLayer(osmUrl, {
							attribution: osmAttribution,
							noWrap: true //// no repitition
						}).addTo(map);
						map.fitBounds([
							[-90, -180],
							[90, 180]
						]);
						map.attributionControl.setPrefix('');
						map.setZoom(2); /// this to zoom in to prevent empty canvas
						////////////
					} else {
						/////////// INDIV COUNTRIES
						var map = L.map('map'),
							osmUrl = tiles,
							osmAttribution = attrib;
						L.tileLayer(osmUrl, {
							attribution: osmAttribution
						}).addTo(map);
						var polygon = L.geoJson(json).addTo(map);
						polygon.setStyle({
							/// fill ///
							fillColor: '#ffffff',
							fillOpacity: 0,
							/// stroke ///
							stroke: true,
							color: '#cc0000',
							weight: 2,
							opacity: 0, // 0.0-1.0
							dummy: 0
						}); // https://leafletjs.com/reference-1.6.0.html#path-option
						map.attributionControl.setPrefix('');
						map.fitBounds(polygon.getBounds());
					}
					// 
				});
			}
			// 
			// IF USING SMALL INDIVIDUAL JSON FOR EACH COUNTRY
			/// testing
			// a3_code = "MDG";
			$.getJSON("/common/x/a/s/mpjson/" + a3_code + ".json", function(json) {
				drawMap(json, "individual");
			}).fail(function(a, b, c) {
				drawMap("", "world");
				// $( "div.log" ).text( "Triggered ajaxError handler." );
			});
			// IF USING ONE BIG JSON WITH ALL
			/*
			$.ajax({
				method: "GET",
				dataType: "json",
				cache: true,
				ifModified: true, // only fetch if modified else use cache ver, 'guarantees' caching
				url: "/common/x/a/s/countries-land-10km.geo.json",
				headers: {
					"Content-Encoding": "gzip"
				}
			})
				.done(function(json) {
					//// gt-all-cntry-dta-frm-jsn-and-fltr-only-prt-rqd-for-ths-cntry-usng-func
					//// A3 code containing node is `properties.A3` in `features` node within json, rest is handled by leaflet's L.geoJson
					var found = fltrThsOnly('MDG', json.features);
					// console.log(found);
					// drawMap(found);
				});
				*/
			// 
			// 
		}
	}
	// 
	// 
	// 
	// 
	// ///// jq document ready
}
// 
///////////////////////   /MAIN SW //////////////////////////////
// 
// 
/////////////////// JQ READY EXEC //////////////////////
if (typeof jQuery == 'undefined') {} else {

	$(document).ready(function() {
		// 
		// 
		//////////   MAIN SW ///////////////
		if (thsSiteTyp == "main_sitesworld") {
			// 
			// 
			///////// country ////////////
			////// epn aff 1/1
			if (swpg == "sw_country") {
				// epnSmPl(
				// 	"js_bw_div_3", // divId
				// 	"5eac29295da2926691a52a2b", // SmPl adId
				// 	sw_c_ur
				// );
			}

			/////////////// time all ///////////

			// disclo
			if (swpg.match(/time_/)) {
				insertBeforeHTML('top_footer', ' <div style="margin:5px;padding:5px;"> <hr/> <p> <i><b>Disclosure:</b> </i> <i>As Amazon Associate, we earn from qualifying purchases.</i> <i>As an Ebay associate, we earn from qualifying purchases.</i> </p> </div> ');
			}

			///////////// time pages ////////
			if (swpg.match(/sw_time_pages/)) {

			}

			// 
			// create fdbk link for GDBSFRM
			$('body').append('<div id="fdbk" style="box-shadow: 0 0 5px #555555;opacity:0.75;background-color: #008000; bottom: 20px; font: 12px/1em sans-serif; padding: 5px 10px; position: fixed; right: 20px;z-index:999;"><a id="fdbk_btn" style="color:#fff;display:block;height:100%;width:100%;cursor:pointer">Feedback</a></div>');
			// 

			////////////// <GDBSFRM 1/2 :: LINK> //////////////////////// 
			// v1 
			// req detectmob(), viewport(), ga_evCatVal(), JQ 
			// -------------- VARS TO CHANGE -------------
			var gdbsfrm_url = 'https://' + thsBlg_dyn_catcher + '?s=fdbk';
			var clc_elem = '#fdbk'; // string of onclick elem for jq obj e.g. '#abc' or '.abc'
			var scrolling = "yes"; // 'yes'|'no'
			var gaCat = 'fdbk'; // ga categ for ga_evCatVal
			var gaVal = 'inf_fdbkBtn: ' + (swpg || ''); // ga val for ga_evCatVal
			// / -------------- VARS TO CHANGE -------------
			// create fdbk link for GDBSFRM

			// 
			function fdbk_openClose() {
				if (document.getElementById('fdbk_window')) {
					$('.fdbk_window').remove();
				} else {
					var dimn = (detectmob()) ? 80 : 70;
					$('body').append(
						'<div id="fdbk_window" class="fdbk_window" style="width:' + viewport(dimn, 'vw') + 'px;height:' + viewport(dimn, 'vh') + 'px;background-color:#aaa;position:fixed;left:50%;top:50%;margin-top:-' + (viewport(dimn, 'vh') / 2) + 'px;margin-left:-' + (viewport(dimn, 'vw') / 2) + 'px;outline:solid 3px #aaa;box-shadow:0 0 10px #000;z-index:2147483647" >' +
						'<div style="width:20px;height:20px;position:absolute;right:0;color:white;cursor:pointer;" id="fdbk_close"><img style="width:100%;height:100%" src="data:image/png;base64,R0lGODlhDgANAIAAAP///6CgpCH5BAAAAAAALAAAAAAOAA0AAAIfjI8Jy73mIoAzNErrs/se72Qdg4BjhnGnKo3tlsRGAQA7"/></div>' +
						'<iframe style="height:100%;width:100%;display:block;background:white;" src="' + gdbsfrm_url + '" scrolling="' + scrolling + '" frameborder="0" border="0" ></iframe>' +
						'<div>'
					);
					$("#fdbk_close").on('click', function() {
						$('.fdbk_window').remove();
						$('.fdbk_window').hide();
					});
				}
			}

			$(clc_elem).on('click', function() {
				// ga_evCatVal(gaCat, gaVal);
				fdbk_openClose();
			});

			////////////// </GDBSFRM 1/2 :: LINK> //////////////////////// 
			// 
			// 

			try {
				// cse
				// 
				switch (swpg) {
					case "sw_time_pages":
						cx = '002411849614480247741:3nljp9ojimq';
						tx = "times";
						break;
					case "sw_time_indexes":
						cx = '002411849614480247741:3nljp9ojimq';
						tx = "times";
						break;
					default:
						cx = '002411849614480247741:3nljp9ojimq';
						tx = "sitesworld";
				}

				var sbcont = (detectmob()) ? 'searchbox_mob' : 'searchbox';

				gCSE(cx, sbcont, tx, 'cse_results');

			} catch (e) {}

			// 
			//// ///   MAIN SW ///// //////
			// 

		} // thsSiteTyp == "main_sitesworld"

		// 
		// 
		// 
	});
}
// 
/////////////////// /JQ READY //////////////////////
// 
// // 
/////////////////    DYN_CATCHER   ///////////////////
// 
// 
// 
if (thsSiteTyp == "dyn_catcher") {
	// 
	// ///////////////
	/*
	if (qs.get("s") == "amz") {
		var keywords = (qs.contains("a")) ? qs.get("a") : thsBlg_amz_defKW;
		keywords = decodeURIComponent(keywords);
		
		amzNtv_sync(
			'search', // ad_mode, 
			'grid', // design,  "text_links"||"grid"
			keywords, // search_phrase, 
			thsBlg_amz.com, // tracking_id, 
			'06483062a172ded549d69e1886790a34', // linkid, 
			'', // title, 
			'' // default_category
		);

		$.getScript("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.contentWindow.min.js")
			.done(function() {});

	}
	*/
	//////////////////////  FDBK ////////////////////////

	if (qs.get("s") == "fdbk") {
		$('body').prepend('<div id="crecdiv"></div>');
		// 
		// 
		////////////// <GDBSFRM 2/2 :: FORM> //////////////////////// 
		// v1
		// req: ga_evCatVal(), JQ
		// 
		// / -------------- VARS TO CHANGE -------------
		var gd_id = '1FAIpQLScFkVM0l1mFEeyLe6BeFFbCVbLEERu-tCeWwg_7GKZfJ5ofmw';
		var div_id = 'crecdiv'; // receiving div, eg 'crecdiv' for /c/
		var require_bootstrap = "yes"; // "yes"|"no"; if bootstrap not already available.
		var form_headline = '<div style="font-size:20px;line-height:2.5em;"> <!-- <img style="height:1em;display:inline-block;vertical-align:middle;" src="" /> --> Send us a message! </div> ';
		var thankyou_headline = '<h2>Thank You!</h2> <h3>Your submission has been sent.</h3>';
		var form_elements = '' + // bs form markup
			// 
			'<div class="form-group">' +
			'	<label>Your Message</label> <textarea required pattern=".{10,}" title="Message" class="form-control" autocomplete="off" name="entry.1793579720"  id="entry_1793579720"></textarea>' +
			'</div>' +
			//
			' <div class="form-group">' +
			'	<label>Your Name</label> <input required pattern=".{3,}" title="Name" class="form-control" type="text" name="entry.978606872" value="" id="entry_978606872"/>' +
			'</div>' +
			// 
			'<div class="form-group">' +
			'	<label>Your Email</label> <input pattern=".{3,}" title="Email" class="form-control" type="text" name="entry.1397165723" value="" id="entry_1397165723"/>' +
			'</div>' +
			// 
			'';
		// 
		function valdfdbk() { // use this genric valdfdbk(), or cstmize it accrdngly
			$("#fdbk").css({
				'display': 'none'
			});
			setTimeout(
				function() {
					$("#" + div_id).append('<div class="container">' + thankyou_headline + '</div>');
				}, 1000);
			return true;
		}
		// / -------------- VARS TO CHANGE -------------
		// 
		//  
		var a = require_bootstrap == "yes" ? '<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet"/>' : '';
		document.getElementsByTagName('head')[0].insertAdjacentHTML("beforeend", a);
		// 
		function GDBSForm() {
			// 
			$("#" + div_id).html(
				'<iframe name="fdbk_hidden_iframe" id="fdbk_hidden_iframe" style="display:none;" onload=""></iframe>' +
				'<div class="container" id="fdbk" style="margin-bottom:10px">' +
				form_headline +
				// 
				// 
				'\x3C\x66\x6F\x72\x6D\x20\x61\x63\x74\x69\x6F\x6E\x3D\x22\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x6F\x63\x73\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x66\x6F\x72\x6D\x73\x2F\x64\x2F\x65\x2F' +
				gd_id +
				'/formResponse" method="post" ' +
				' onSubmit="return valdfdbk()" ' +
				' role="form" name="fdbk_frm_name" id="fdbk_frm_id" target="fdbk_hidden_iframe" >' +
				form_elements +
				'	<input class="btn btn-default" type="submit" name="submit" value="Submit"/>' +
				'</form>' +
				'</div>' +
				''
			);
		}
		if (require_bootstrap == "yes") {
			$.getScript("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js")
				.done(function(script, textStatus) {
					GDBSForm();
				})
				.fail(function(jqxhr, settings, exception) {
					// $("div.log").text("Triggered ajaxError handler.");
				});
		} else {
			GDBSForm();
		}
		////////////// </GDBSFRM 2/2 :: FORM> //////////////////////// 
		//
		//
		//
	}
}
//
// 
/////////////////    /DYN_CATCHER   ///////////////////
// 
//