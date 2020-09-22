$(document).ready(function () {

  var dateCalendar = moment("2018-01-01");
  renderCalendar(date);


})



//FUNZIONI

//*funzione per rendere il mese
function renderCalendar(date) {
  //manipolo oggetto dateCalendar
  var dateCalendar = moment(date);
  //modifica intestazione me
  $("h1").text(dateCalendar.format("MMMM YYYY"));
  //pulisco html della lista giorni del mese ogni volta
  $("#list-days").html("");

  //*giorni del mese dalla data passata come argomento
  var dayInMonth = dateCalendar.daysInMonth();

  //*template per la stampa dell'elenco dei giorni
  var source = $("#day-template").html();
  var template = Handlebars.compile(source);

  //*stampa dei giorni del mese
  for ( var i = 1; i <= dayInMonth; i++) {

    //creazione context
    var data = {
      "day": i,
      "month": dateCalendar.format("MMMM"),
      "dateComplete": dateCalendar.format("YYYY-MM-DD")
    };

    //creazione codice html
    var html = template(data);
    //inserimento del codice nella pagina
    $(".list-days").append(html);
    //aggiungo un giorno
    dateCalendar.add(1, "days");
};


//chiamata ajax per riprendere il calendario del 2018
function renderHolidays(date) {

  $.ajax(
    {
      "url":"https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
      "data": {
        "year": 2018,
        "month": 0
      },
      "method": "GET",
      "success": function(data) {
        var response = data.response;
        for ( var i = 0; i < response.length; i++) {

          var dateHoliday = response[i].data;
          var nameHoliday = response[i].name;
          $(".day[data-date-complete='" + dateHoliday +"']").add("holiday");
          $(".day[data-date-complete='" + dateHoliday +"'] span").text(nameHoliday);
        }
      },
      "error": function() {
        alert("errore");
      }
    }
  )
}
