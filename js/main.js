$(document).ready(function () {

  var date = moment("2018-01-01");
  renderCalendar(date);

//chiamata ajax per riprendere il calendario del 2018

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
    var data = {
      "day": i,
      "month": date.format("MMMM"),
      "dateComplete": date.format("YYYY-MM-DD")
    };

    //creazione codice html
    var html = template(data);
    //inserimento del codice nella pagina
    $(".list-days").append(html);

  }

}
