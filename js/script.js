// javascript

$(document).ready(function() {

    $("li").click(function() {
        //remove the class "current" from selected
        $("li").removeClass("current");
        $("div").removeClass("current");
       
        //add class "current" to whatever is selected
        $(this).addClass("current");        
        var tabId = $(this).attr("data-tab");
        $("#" + tabId).addClass("current");
    });


    //tab 1 sign up form newsletter:
    var signupButton = $("#signupButton"); 
    //check if signupButton is on the current display
    if (signupButton.length) { 
        // Attach form submit handler
        $("#form1").on("submit", function(e) {
            e.preventDefault();
            var fn = $('#firstName').val();
            var ln = $('#lastName').val();
            var email = $('#userEmail').val(); 
            
            // if name empty, alert user to enter their name
            if (fn === "") {
                alert("Please enter your first name");
            } 
            // check last name
            else if (ln === "") {
                alert("Please enter your last name");
            } 
            // check email
            else if (email === "") {
                alert("Please enter your email");
            } 
            // check email format
            else if (!email.includes('@')) {
                alert("Enter proper email format");
            } else {
                $("#output").text("Thank you for signing up!");
            }
        });

        signupButton.click(function() {
            $("#form1").submit();
        });
    }

    //tab 3 code:
    //function to change images viewed when user clicks on radio buttons (using checked)
    function updateImages() {
        var selectedLid = $('input[name="lidButtons"]:checked').val();
        var selectedCrease = $('input[name="creaseButtons"]:checked').val();

        // hide all images except the permanent one
        $('#eyeshadowContainer img').not('#eye-image').removeClass('show');

        // add Show to lid and crease selected images
        if (selectedLid) {
            $('#' + selectedLid).addClass('show');
        }
        if (selectedCrease) {
            $('#' + selectedCrease).addClass('show');
        }
    }

    // event listeners for lid & crease buttons on change 
    $('input[name="lidButtons"]').change(updateImages);
    $('input[name="creaseButtons"]').change(updateImages);

    // add sparkles button!
    $('#sparklesButton').on('click', function() {
        $('#sparkles-image').toggleClass('show'); // Toggle visibility of sparkles image
    });
    

    //changes lid image shown based on radio button
    // $('input[name="lidButtons"]').change(function(){
    //     var selectedLid =$(this).val();
    //     //hide images except eye-image: grab id eyeshadowContainer and remove class "show", 
    //     $('#eyeshadowContainer img').not('#eye-image').removeClass('show');        
    //     // var selectedLidElement = $('#' + selectedLid);
    //     // selectedLidElement.addClass('show');
    //     if (selectedLid) {
    //         $('#' + selectedLid).addClass('show');
    //     }
    // });UISDGHJSLDGHJSLIDGJSLDKGLHSKDGJH

    // //change crease images by radio buttons
    // $('input[name="creaseButtons"]').change(function(){
    //     var selectedCrease =$(this).val();
    //     //hide images except eye-image
    //     $('#eyeshadowContainer img').not('#eye-image').removeClass('show');        
    //     // var selectedCreaseElement = $('#' + selectedCrease);
    //     // selectedCreaseElement.addClass('show');
    //     if (selectedCrease) {
    //         $('#' + selectedCrease).addClass('show');
    //     }
    // });
});
