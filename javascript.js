function dotacje() {
  document.getElementById("collapseMain").innerHTML =
    "<br> <p> Skorzystaj na naszym doświadczeniu!Pomagamy uzyskać dotacje na otwarcie działalności, a także na rozwój i inwestycje Twojej firmy. </p>" +
    "<p>Oferujemy przygotowanie wniosków o dotacje z Urzędu Pracy (dofinansowanie dla rozpoczynających działalność gospodarczą oraz dofinansowanie do nowo tworzonego miejsca pracy). Pomożemy przygotować wniosek, zrobić Bilans oraz Rachunek zysków i strat. </p>";

  document.getElementById("collapseCard").innerHTML = document.getElementById(
    "dotacje"
  ).innerHTML;
  location.href = "#oferta";

  $("#collapseBlock").collapse("show");
}

function kadryIPlace() {
  document.getElementById("collapseMain").innerHTML =
    "<div class='row'><div class='col-md-6'>" +
    "<strong>Obsługa płacowa:</strong>" +
    "<li>rejestracja pracownika w ZUS,</li><li>sporządzanie list płac,</li>" +
    "<li>naliczanie wynagrodzeń chorobowych i zasiłków,</li>" +
    "<li>naliczanie premii, nagród,</li><li>naliczanie ekwiwalentów urlopowych,</li><li>sporządzanie pasków pracowniczych, wyrejestrowujących pracownika z ZUS,</li><li>sporządzanie deklaracji rozliczeniowych do Urzędu Skarbowego – PIT-4R,</li>" +
    "<li>sporządzanie deklaracji rocznych PIT-11,</li><li>sporządzanie deklaracji rozliczeniowych PFRON,</li>" +
    "<li>reprezentacja przed ZUS i PIP.</li>" +
    "</div><div class = 'col-md-6'> " +
    "<div class='pt-2'>" +
    "<strong>Obsługa kadrowa:</strong></div>" +
    "<li>prowadzenie teczek osobowych pracowników,</li> <li>prowadzenie kartotek wynagrodzeń,</li>" +
    "<li>prowadzenie kartotek urlopowych,</li> <li>sporządzenie świadectw pracy,</li> <li>sporządzanie umów o pracę,</li> " +
    "<li>sporządzanie umów cywilnoprawnych,</li> <li>ewidencja zaświadczeń lekarskich,</li>" +
    "<li>prowadzenie kartotek ewidencji czasu pracy.</li>" +
    "</div></div>";
  document.getElementById("collapseCard").innerHTML = document.getElementById(
    "kadryIPlace"
  ).innerHTML;
  location.href = "#oferta";

  $("#collapseBlock").collapse("show");
}

function rozliczeniePIT() {
  document.getElementById("collapseMain").innerHTML =
    "<br><p>Rozliczenie odbywa się za pośrednictwem: drogi elektronicznej tj.poprzez wysyłkę elektroniczną bezpośrednią do Urzędu Skarbowego(wówczas niezbędne jest podanie kwota przychodu z rozliczenia PIT za rok ubiegły)</p>";
  document.getElementById("collapseCard").innerHTML = document.getElementById(
    "rozliczeniePIT"
  ).innerHTML;
  location.href = "#oferta";

  $("#collapseBlock").collapse("show");
}

function ksiegiHandlowe() {
  document.getElementById("collapseMain").innerHTML =
    "<li>prowadzenie Ksiąg rachunkowych i wyliczenie na tej podstawie miesięcznej / kwartalnej zaliczki na podatek dochodowy CIT lub PIT,</li>" +
    "<li>prowadzenie Ksiąg w systemie finansowo księgowym REWIZOR,</li>" +
    "<li>rozliczanie podatku VAT obejmujące prowadzenie właściwych rejestrów VAT, sporządzanie miesięcznych lub kwartalnych deklaracji VAT,</li>" +
    "<li>rozliczanie transakcji wewnątrzwspólnotowych oraz exportu / importu towarów i usług obejmujące wystawianie FV wewnętrznych, prowadzenie właściwych rejestrów VAT, sporządzanie miesięcznych lub kwartalnych informacji podsumowujących VAT-UE,</li>" +
    "<li>porządzenie ewidencji wyposażenia oraz ewidencji środków trwałych i wartości niematerialnych i prawnych, ustalenie planu rocznej amortyzacji oraz rozliczanie miesięcznych odpisów amortyzacyjnych,</li>" +
    "<li>sporządzanie okresowych sprawozdań finansowych obejmujących bilans, rachunek zysków i strat oraz informację dodatkową,</li><li>przygotowywanie innych zestawień według wcześniej zdefiniowanych kryteriów,</li>" +
    "<li>sporządzanie rocznego sprawozdania finansowego,</li>" +
    "<li>opracowywanie pozostałych raportów (raport kasowy, raport finansowy),</li>" +
    "<li>sporządzanie okresowych sprawozdań do GUS,</li>" +
    "<li>sporządzenie planu kont dostosowanego do indywidualnych potrzeb jednostki,</li>" +
    "<li>opracowanie polityki rachunkowości.</li>";
  document.getElementById("collapseCard").innerHTML = document.getElementById(
    "ksiegiHandlowe"
  ).innerHTML;
  location.href = "#oferta";

  $("#collapseBlock").collapse("show");
}

function ryczalt() {
  document.getElementById("collapseMain").innerHTML =
    "<li>prowadzenie ewidencji przychodów i wyliczenie na tej podstawie zaliczki na podatek dochodowy miesięcznie lub kwartalnie,</li>" +
    "<li>rozliczanie podatku VAT obejmujące prowadzenie właściwych rejestrów VAT, sporządzanie miesięcznych lub kwartalnych deklaracji VAT,</li>" +
    "<li>sporządzenie ewidencji wyposażenia oraz ewidencji środków trwałych i wartości niematerialnych i prawnych, ustalenie planu rocznej amortyzacji oraz rozliczanie miesięcznych odpisów amortyzacyjnych,</li>" +
    "<li>rozliczanie transakcji wewnątrzwspólnotowych oraz exportu / importu towarów i usług obejmujące  wystawianie FV wewnętrznych, prowadzenie właściwych rejestrów VAT, sporządzanie miesięcznych lub kwartalnych informacji podsumowujących VAT-UE, rozliczanie podatkowe dokumentów celnych,</li>" +
    "<li>roczne rozliczenie podatku, sporządzenie rocznych deklaracji podatkowych.</li>";
  document.getElementById("collapseCard").innerHTML = document.getElementById(
    "ryczalt"
  ).innerHTML;
  location.href = "#oferta";

  $("#collapseBlock").collapse("show");
}

function podatkowaKsiega() {
  document.getElementById("collapseMain").innerHTML =
    "<li>prowadzenie Księgi Przychodów i Rozchodów i wyliczenie na jej podstawie miesięcznej / kwartalnej zaliczki na podatek dochodowy PIT,</li>" +
    "<li>rozliczanie podatku VAT obejmujące prowadzenie właściwych rejestrów VAT, sporządzanie miesięcznych lub kwartalnych deklaracji VAT</li>" +
    "<li>rozliczanie transakcji wewnątrzwspólnotowych oraz exportu / importu towarów i usług obejmujące wystawianie FV wewnętrznych, prowadzenie właściwych rejestrów VAT, sporządzanie miesięcznych lub kwartalnych informacji podsumowujących VAT-UE,</li>" +
    "<li>sporządzenie ewidencji wyposażenia oraz ewidencji środków trwałych i wartości niematerialnych i prawnych, ustalenie planu rocznej amortyzacji oraz rozliczanie miesięcznych odpisów amortyzacyjnych,</li>" +
    "<li>roczne rozliczenie podatku, sporządzenie rocznych deklaracji podatkowych.</li>";
  document.getElementById("collapseCard").innerHTML = document.getElementById(
    "podatkowaKsiega"
  ).innerHTML;
  location.href = "#oferta";

  $("#collapseBlock").collapse("show");
}

function rejestracjaDzialalnosci() {
  document.getElementById("collapseMain").innerHTML =
    "<p>Oferujemy pełne wsparcie przy zakładaniu własnej działalności gospodarczej. Jeśli masz pomysł na biznes – pomożemy Ci zaoszczędzić czas i nerwy. Przeprowadzimy Cię przez proces wszystkich formalności związanych z założeniem firmy.</p>" +
    "<p>Usługi pomocy przy zakładaniu działalności gospodarczej to przede wszystkim:</p>" +
    "<li>Pomoc w wyborze formy opodatkowania,</li>" +
    "<li>Sporządzenie dokumentów zgłoszeniowych dla nowych podmiotów,</li>" +
    "<li>Pomoc w rejestracji działalności,</li>" +
    "<li>Organizacja księgowości.</li>";
  document.getElementById("collapseCard").innerHTML = document.getElementById(
    "rejestracjaDzialalnosci"
  ).innerHTML;
  location.href = "#oferta";

  $("#collapseBlock").collapse("show");
}

function uslugiDodatkowe() {
  document.getElementById("collapseMain").innerHTML =
    "<li>organizacji systemu rachunkowości, w tym Polityki Rachunkowości,</li>" +
    "<li>zamknięcia okresów sprawozdawczych,</li>" +
    "<li>inwentaryzacja – instrukcje i dokumentacja,</li>" +
    "<li>reprezentowanie przed US i ZUS,</li>" +
    "<li>pełnienie roli Głównego Księgowego i/lub Dyrektora Finansowego,</li>" +
    "<li>Rozliczanie podatku od czynności cywilno-prawnych (PCC)</li>";
  document.getElementById("collapseCard").innerHTML = document.getElementById(
    "uslugiDodatkowe"
  ).innerHTML;
  location.href = "#oferta";

  $("#collapseBlock").collapse("show");
}

function hide() {
  $("#collapseBlock").collapse("hide");
}

$(document).ready(function() {
  $(".toggle").click(function() {
    $(".sidebar-contact").toggleClass("active");
    $(".toggle").toggleClass("active");
  });
});
