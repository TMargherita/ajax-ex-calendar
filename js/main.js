$(document).ready(function () {

  var date = moment("2018-01-01");
  renderCalendar(date);


  $.ajax(
    {
      "url":"https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
      "data": {
        "year": 2018,
        "month": 0
      }
    }
  );
})



//FUNZIONI

//*funzione per rendere il mese

function renderCalendar(date) {
  //modifica intestazione me
  $("h1").text(date.format("MMMM YYYY"));
  //pulisco html della lista giorni del mese ogni volta
  $("#list-days").html("");

  //*giorni del mese dalla data passata come argomento
  var dayInMonth = date.daysInMonth();

  //*template per la stampa dell'elenco dei giorni
  var source = $("#days-template").html();
  var template = Handlebars.compile(source);

  //*stampa dei giorni del mese
  for ( var i = 1; i <= dayInMonth; i++) {

    //creazione context
    var week = {
      day: i,
      month: date.format("MMMM")
    };

    //creazione codice html
    var html = template(week);
    //inserimento del codice nella pagina
    $(".list-days").append(html);

  }

}
