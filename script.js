// zad 11.6 wyszukiwarka krajów

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');


$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';    
$.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function showCountriesList(resp) {
    countriesList.empty();
resp.forEach(function(item) {
    $('<ul>').text(item.name).appendTo(countriesList);
    $('<li>').text('Capital: ' + item.capital).appendTo(countriesList);
    $('<li>').text('Country Area: ' + item.area +'km^2').appendTo(countriesList);
});
}



