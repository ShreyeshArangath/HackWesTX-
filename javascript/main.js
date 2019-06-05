{
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
    }

    function removeBorder() {
        gridItems.forEach(item => {
            item.classList.remove('grid-underline')
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