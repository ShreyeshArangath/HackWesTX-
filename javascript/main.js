{
    const gridItems = document.querySelectorAll('.grid')
    const tabContent = document.querySelectorAll(".grid-info")

    //Select tab content item 
    function selectItem(e) {
        //Add border to current tab 
        removeBorder()
        this.classList.add("grid-underline");
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
}