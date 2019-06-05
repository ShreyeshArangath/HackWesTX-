{
    $(document).ready(function() {
        $(".submit").click(function(event) {
            console.log("clicked")

            var email = $(".email").val();
            var message = $(".message").val();
            var errorMessage = $(".error");
            errorMessage.empty();

            if (email.length > 5 && email.includes("@") && email.includes(".") && message.length >= 10) {
                console.log("Email is valid");
            } else {
                errorMessage.append("<h7> Not a valid email address </h7>");
                event.preventDefault();
            }

        });
    })

    const gridItems = document.querySelectorAll('.grid');
    const gridContent = document.querySelectorAll(".grid-info");
    const landingPageButton = document.querySelector('.btn-more');

    //Select tab content item 
    function selectItem(e) {
        //Add border to current tab 
        removeBorder();
        removeContent();
        this.classList.add("grid-underline");
        const gridContentItem = document.getElementById(`${this.id}-info`);
        gridContentItem.classList.add('show');
        window.scrollBy({
            top: 500,
            left: 100,
            behavior: 'smooth'
        });
    }

    function removeBorder() {
        gridItems.forEach(item => {
            item.classList.remove('grid-underline')
            window.scrollBy({
                bottom: 500,
                left: 100,
                behavior: 'smooth'
            });
        })
    };
    //Listen for tab click 
    gridItems.forEach(item => {
        item.addEventListener("click", selectItem)
    });

    function removeContent() {
        gridContent.forEach(item => {
            item.classList.remove('show')
        });
    }

    function showMore(e) {
        window.scrollBy({
            top: 100,
            left: 100,
            behavior: 'smooth'
        });
    }
    landingPageButton.addEventListener('click', showMore);




}