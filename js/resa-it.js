

function setNumOfCalendar(month, year, which, today) {

    var calendar = (document.getElementsByClassName("num-jour"))[which];
    var dayOfWeek = new Date(year + "/" + month + "/01").getDay();
    var lastDayOfMonth = new Date(year, month, 0);
    
    var dayValue = 1;

    var firstWeek = calendar.children.item(0);

    for (i = 0; i < dayOfWeek; i++) {
        child = firstWeek.children.item(i);
        child.classList.add('empty');
    }

    while (dayOfWeek < firstWeek.children.length) {
        child = firstWeek.children.item(dayOfWeek);
        var currentDate = getSelectDate(year, month, dayValue);
        
        if (currentDate.getDate() == today.getDate() && currentDate.getMonth() == today.getMonth() && currentDate.getFullYear() == today.getFullYear()) {
            child.classList.add('today');
            child.classList.add('day');
        }
        if (currentDate <= lastDayOfMonth && currentDate >= today) {
            child.classList.add('day');
        }

        if(currentDate < today){
            child.classList.add('anterieur');
        }

        child.classList.add('smallP');
        child.textContent = dayValue;
        dayOfWeek++;
        dayValue++;
    }

    for (i = 1; i < calendar.children.length; i++) {
        var week = calendar.children.item(i);
        for (j = 0; j < week.children.length; j++) {
            day = week.children.item(j);
            var currentDate = getSelectDate(year, month, dayValue);
            if (currentDate.getDate() == today.getDate() && currentDate.getMonth() == today.getMonth() && currentDate.getFullYear() == today.getFullYear()) {
                day.classList.add('today');
                day.classList.add('day');
            }
            if (currentDate <= lastDayOfMonth && currentDate >= today) {
                day.classList.add('day');
            }

            if(currentDate < today){
                day.classList.add('anterieur');
            }

            if (dayValue >= 10) {
                day.classList.add('bigP');
            }
            else {
                day.classList.add('smallP');
            }

            if (dayValue < lastDayOfMonth.getDate() + 1) {
                day.textContent = dayValue;
            }
            else {
                day.classList.add('empty');
            }

            

            dayValue++;
        }
    }

    if (week.children.item(0).firstChild) {
        for (i = 0; i < week.children.length; i++) {
            week.children.item(i).style.display = "flex";
            week.children.item(i).style.marginBottom = "24px";
            week.children.item(i).style.marginTop = "12px";
        }

        var line5 = week.parentElement.children.item(4)
        for (i = 0; i < line5.children.length; i++){
            line5.children.item(i).style.marginBottom = "0px";
        }
        
    }
    else {
        for (i = 0; i < week.children.length; i++) {
            week.children.item(i).style.display = "none";
        }

        var line5 = week.parentElement.children.item(4)
        for (i = 0; i < line5.children.length; i++){
            line5.children.item(i).style.marginBottom = "24px";
        }
    }

}

function getMonthNumber(month) {
    for (i = 0; i < monthNames.length; i++) {
        if (monthNames[i] === month)
            return i + 1;
    }
}

function getSelectDate(year, month, day) {

    if (typeof month === 'number')
        return new Date(year + "/" + month + "/" + day);
    else {
        var monthNumber = getMonthNumber(month);
        return new Date(year + "/" + monthNumber + "/" + day);
    }
}

const monthNames = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
];

/*OUVERTURE/FERMETURE*/
document.getElementsByClassName("arrive")[0].onclick = function () {
    document.getElementsByClassName("big-container")[0].style.display = "flex"
    if (typeof window.orientation !== 'undefined') {
        $(".houdini").each(function () {
            $(this).hide()
        })
    }
}

document.getElementsByClassName("logo-resa-1")[0].onclick = function () {
    document.getElementsByClassName("big-container")[0].style.display = "flex"
    if (typeof window.orientation !== 'undefined') {
        $(".houdini").each(function () {
            $(this).hide()
        })
    }
}

document.getElementById("booking-desktop").onclick = function () {
    document.getElementsByClassName("resa")[0].style.display = "initial";
    if (typeof window.orientation !== 'undefined') {
        $(".houdini").each(function () {
            $(this).hide()
        })
    }
}

document.getElementById("booking-btn").onclick = function () {
    document.getElementsByClassName("resa")[0].style.display = "initial";
    if (typeof window.orientation !== 'undefined') {
        $(".houdini").each(function () {
            $(this).hide()
        })
    }
}

$(document).on('click','.redirection', function() {
    document.getElementsByClassName("resa")[0].style.display = "initial";
    if (typeof window.orientation !== 'undefined') {
        $(".houdini").each(function () {
            $(this).hide()
        })
    }
});

document.getElementsByClassName("cross")[0].onclick = function () {
    document.getElementsByClassName("resa")[0].style.display = "none";
}


/*OUVERTURE/FERMETURE*/
var arrive = null;
var depart = null;

var today = new Date();
today.setHours(0, 0, 0, 0);
var month = today.getMonth();
var nextMonth = (today.getMonth() + 1) % 11;
var year1 = today.getFullYear();

if (nextMonth == 0)
    var year2 = today.getFullYear() + 1;
else
    var year2 = today.getFullYear();

var months = document.getElementsByClassName("month");
months.item(0).textContent = monthNames[month];
months.item(1).textContent = monthNames[nextMonth];

var years = document.getElementsByClassName("year");
years.item(0).textContent = year1;
years.item(1).textContent = year2;

setNumOfCalendar(month + 1, year1, 0, today);
setNumOfCalendar(nextMonth + 1, year2, 1, today);

$(document).on('click','.day', function() {
    if ($(".day").is(".second")) {
        $(".day").removeClass("first");
        $(".day").removeClass("second");
        $(".arrive").val("");
        $(".depart").val("");
        arrive = null;
        depart = null;
    }

    if ($(".day").is(".first")) {
        var container = $(this).parent().parent().parent().children(".yearContainer").children(".mois-annee");
        depart = getSelectDate(container.children(".year").text(), container.children(".month").text(), $(this).text());

        if (depart.getDate() < 10)
            var daystr = "0" + depart.getDate();
        else
            var daystr = depart.getDate();

        if ((depart.getMonth() + 1 < 10))
            var monthstr = "/0" + (depart.getMonth() + 1)
        else
            var monthstr = "/" + (depart.getMonth() + 1)

        if(depart < arrive){
            arrive = depart;
            $(".arrive").val(daystr + monthstr + '/' + depart.getFullYear());
            depart = null;
            $(".day").removeClass("first");
            $(this).addClass("first");
            
            return;
        }

        $(this).addClass("second");
        $(this).removeClass("inRange");

        $(".depart").val(daystr + monthstr + '/' + depart.getFullYear());
        $(".big-container").css("display", "none");
        if (typeof window.orientation !== 'undefined') {
            $(".houdini").each(function () {
                $(this).show()
            })
        }
        $(".adultes").focus()
        if (arrive > depart) {
            $(".day").removeClass("first");
            $(".day").removeClass("second");
            arrive = null;
            depart = null;
        }
    }
    else {
        console.log("first");
        $(this).addClass("first");
        $(".day").removeClass("inRange");
        var container = $(this).parent().parent().parent().children(".yearContainer").children(".mois-annee");
        arrive = getSelectDate(container.children(".year").text(), container.children(".month").text(), $(this).text());

        if (arrive.getDate() < 10)
            var daystr = "0" + arrive.getDate();
        else
            var daystr = arrive.getDate();

        if ((arrive.getMonth() + 1 < 10))
            var monthstr = "/0" + (arrive.getMonth() + 1)
        else
            var monthstr = "/" + (arrive.getMonth() + 1)

        $(".arrive").val(daystr + monthstr + '/' + arrive.getFullYear());
    }

});

$(".day").mouseenter(function () {
    if ($(".day").is(".first") && !$(".day").is(".second")) {
        var currentContainer = $(this).parent().parent().parent().children(".yearContainer").children(".mois-annee");

        var current = getSelectDate(currentContainer.children(".year").text(), currentContainer.children(".month").text(), $(this).text());
        $(".day").each(function () {
            var container = $(this).parent().parent().parent().children(".yearContainer").children(".mois-annee");
            var date = getSelectDate(container.children(".year").text(), container.children(".month").text(), $(this).text());
            if (date > arrive && date <= current) {
                $(this).addClass("inRange");
            }
            else {
                $(this).removeClass("inRange");
            }
        });
    }
}).mouseleave(function () {
});

$('.droit').on('click', function () {
    month = month - 1
    nextMonth = nextMonth - 1


    if (month === -1) {
        year1 = year1 - 1;
        month = 11
    }

    if (nextMonth === -1) {
        year2 = year2 - 1;
        nextMonth = 11
    }

    $(".case").empty();
    $(".case").removeClass("anterieur");
    $(".case").removeClass("day");
    $(".case").removeClass("empty");
    $(".case").removeClass("bigP");
    $(".case").removeClass("smallP");
    $(".case").removeClass("inRange");
    $(".case").removeClass("first");
    $(".case").removeClass("second");


    var months = document.getElementsByClassName("month");
    months.item(0).textContent = monthNames[month];
    months.item(1).textContent = monthNames[nextMonth];

    var years = document.getElementsByClassName("year");
    years.item(0).textContent = year1;
    years.item(1).textContent = year2;

    setNumOfCalendar(month + 1, year1, 0, today);
    setNumOfCalendar(nextMonth + 1, year2, 1, today);

    $(".case").each(function () {
        var container = $(this).parent().parent().parent().children(".yearContainer").children(".mois-annee");
        var date = getSelectDate(container.children(".year").text(), container.children(".month").text(), $(this).text());

        if(arrive == null ||depart == null)
            return;

        if (date.getDate() === arrive.getDate() && date.getMonth() === arrive.getMonth() && date.getFullYear() === arrive.getFullYear()) {
            $(this).addClass("first");
        }
        if (date.getDate() === depart.getDate() && date.getMonth() === depart.getMonth() && date.getFullYear() === depart.getFullYear()) {
            $(this).addClass("second");
        }
        if (date >= arrive && date <= depart) {
            $(this).addClass("inRange");
        }
    });

});

$('.gauche').on('click', function () {
    month = month + 1
    nextMonth = nextMonth + 1
    year = document.getElementsByClassName("year")[0];
    year1 = parseInt(year.innerHTML)

    if (month === 12) {
        year1 = year1 + 1;
        month = 0;
    }

    if (nextMonth === 12) {
        year2 = year2 + 1;
        nextMonth = 0;
    }



    $(".case").removeClass("day");
    $(".case").removeClass("anterieur");
    $(".case").removeClass("empty");
    $(".case").removeClass("bigP");
    $(".case").removeClass("smallP");
    $(".case").removeClass("inRange");
    $(".case").removeClass("first");
    $(".case").removeClass("second");
    $(".case").empty();

    var months = document.getElementsByClassName("month");
    months.item(0).textContent = monthNames[month];
    months.item(1).textContent = monthNames[nextMonth];

    var years = document.getElementsByClassName("year");
    years.item(0).textContent = year1;
    years.item(1).textContent = year2;

    setNumOfCalendar(month + 1, year1, 0, today);
    setNumOfCalendar(nextMonth + 1, year2, 1, today);

    $(".case").each(function () {
        var container = $(this).parent().parent().parent().children(".yearContainer").children(".mois-annee");
        var date = getSelectDate(container.children(".year").text(), container.children(".month").text(), $(this).text());

        if(arrive == null ||depart == null)
            return;

        if (date.getDate() === arrive.getDate() && date.getMonth() === arrive.getMonth() && date.getFullYear() === arrive.getFullYear()) {
            $(this).addClass("first");
        }
        if (date.getDate() === depart.getDate() && date.getMonth() === depart.getMonth() && date.getFullYear() === depart.getFullYear()) {
            $(this).addClass("second");
        }
        if (date >= arrive && date <= depart) {
            $(this).addClass("inRange");
        }
    });
});

document.getElementById("redirect").onclick = function () {
    let adultCount = document.getElementById("adultCount").value;
    let childCount = document.getElementById("childCount").value;
    let promo = document.getElementById("promo").value;

    let arrivalDate = arrive.getDate() + "/" + (arrive.getMonth() + 1) + '/' + arrive.getFullYear();
    let departureDate = depart.getDate() + "/" + (depart.getMonth() + 1) + '/' + depart.getFullYear();
    window.open("https://www.secure-hotel-booking.com/Hotel-La-Ponche/JRU8/it?hotelId=25266&selectedAdultCount=" + adultCount + "&selectedChildCount=" + childCount + "&arrivalDate=" + arrivalDate + "&departureDate=" + departureDate + "&promocode=" + promo,
    '_blank')
}


