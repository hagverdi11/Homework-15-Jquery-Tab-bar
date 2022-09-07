
//contents-i jquery üsulu ilə çağıranda alınmadı, attributuna görə çağırmaqdan əlavə də 
//href və classına görə yoxlamaq istədim, uyğun olmadı.

$(function () {

    let headers = $(".tab-menu .tab-header div")
    let contents = document.querySelectorAll(".tab-menu .tab-body div");

    $(headers).click(function () {
        let activeElem = $(".active");
        $(activeElem).removeClass("active")
        $(this).addClass("active")

        contents.forEach(content => {
            if ($(this).attr("data-id") == $(content).attr("data-id")) {
                $(content).removeClass("d-none")
            } else {
                $(content).addClass("d-none")
            }
        });

        //    if ($(this).attr("href") == $(content).attr("href"))
        //       $(content).removeClass("d-none")

    })




})


// let headers = document.querySelectorAll(".tab-menu .tab-header div");
// let contents = document.querySelectorAll(".tab-menu .tab-body div");


// headers.forEach(header => {
//     header.addEventListener("click", function () {
//         let activeElem = document.querySelector(".active");
//         activeElem.classList.remove("active");
//         this.classList.add("active");
//         contents.forEach(content => {
//             if (this.getAttribute("data-id") == content.getAttribute("data-id")) {
//                 content.classList.remove("d-none")
//             } else {
//                 content.classList.add("d-none")
//             }
//         });
//     })
// });