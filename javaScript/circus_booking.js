// const dataInput = document.querySelector('#datepicker');
$(document).ready(
    $(function () {
        $('#datepicker').datepicker();

        $("#button1").click(function (e) {

            var my_date = $("#datepicker").datepicker("getDate");
            var day = moment(my_date).format("ddd");
            var numDay = moment(my_date).format("DD");
            if (day == 'Sat' || day == 'Fri') {
                $("#dayYouChoose").text("");
                $("#dayYouChoose").append(day + '_' + numDay);
            } else {
                e.stopPropagation();
                e.preventDefault();
                alert("No Circus Show in this day");
                

            }
            console.log(day);
        });

        $("form").submit(function (e) {
            var em = $("#dayYouChoose").text();

            function isEmail(email) {
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return regex.test(email);
            }
            var email = $("#inputEmail3").val();
            var emailV = isEmail(email);

            function validatePhone(txtPhone) {
                var filter = /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/;
                return filter.test(txtPhone);
            }
            var phone = $("#inputPhone3").val();
            var phoneV = validatePhone(phone);
            var name = $("#nputName3").val();
            var person = $("#inputPerson3").val();

            if (!em && !email && !phone && !name && !person) {
                e.stopPropagation();
                e.preventDefault();
                alert("You Not write anything ");

            } else {
                if (!em) {
                    e.stopPropagation();
                    e.preventDefault();
                    alert("You Not choose any day ");
                    // window.location.replace("./circus_booking.html");
                } else {
                    if (!email) {
                        e.stopPropagation();
                        e.preventDefault();
                        alert("You Not write any email ");

                    } else {

                        if (!phone) {
                            e.stopPropagation();
                            e.preventDefault();
                            alert("You Not write any phone number ");

                        } else {

                            if (!name) {
                                e.stopPropagation();
                                e.preventDefault();
                                alert("You Not write any name ");

                            } else {

                                if (!person) {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    alert("You Not write number for person ");

                                } else {
                                    if (!emailV) {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        alert("You write error your email");
                                    }else{
                                        
                                        if(!phoneV){
                                            e.stopPropagation();
                                        e.preventDefault();
                                        alert("You write error your phone number");
                                            
                                        }

                                    }

                                }
                            }
                        }
                    }

                }


            }

        });


    })

)