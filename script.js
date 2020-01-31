$(() => {
    let btnAdd = $('#btnAdd')
    let btnReset = $('#btnReset')
    let btnCleanup = $('#btnCleanup')
    let btnSort = $('#btnSort')
    let ulTasks = $('#ulTasks')
    let inpNewTask = $('#inpNewTask')

    //Add Item

    function addItem(){
        // ulTasks.append($('<li>').text(inpNewTask.val()).attr('class', 'list-group-item'))
        let listItem = $('<li>', {
            'class' : 'list-group-item',
            text : inpNewTask.val()
        })

        // Strike through

        listItem.click(() => {
            listItem.toggleClass('done')
        })

        ulTasks.append(listItem)
        inpNewTask.val('')
    }

    // Add functionality

    btnAdd.click(addItem)

    // Reset functionality

    btnReset.click(() => {
        inpNewTask.val('')
    })

    // Enter Key

    inpNewTask.keyup((event) => {
        if(event.keyCode == '13'){
            addItem()
        }
    })

    // inpNewTask.keypress((event) => {
    //     if(event.which == 13){
    //         addItem()
    //     }
    // })

    // Cleanup functionality

    function clearDone(){
        $('#ulTasks .done').remove()
    }

    btnCleanup.click(clearDone)

    // Sort functionality

    btnSort.click(() => {
        $('#ulTasks .done').appendTo(ulTasks)
    })
})