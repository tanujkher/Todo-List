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
        toggleInputBtn()
    }

    // Add functionality

    btnAdd.click(addItem)

    // Reset functionality

    btnReset.click(() => {
        inpNewTask.val('')
        toggleInputBtn()
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
        toggleInputBtn()
    }

    btnCleanup.click(clearDone)

    // Sort functionality

    btnSort.click(() => {
        $('#ulTasks .done').appendTo(ulTasks)
        toggleInputBtn()
    })

    // Disable buttons

    function toggleInputBtn(){
        btnReset.prop('disabled', inpNewTask.val() == '')
        btnAdd.prop('disabled', inpNewTask.val() == '')
        btnSort.prop('disabled', ulTasks.children().length < 1)
        btnCleanup.prop('disabled', ulTasks.children().length < 1) 
    }

    inpNewTask.on('input', toggleInputBtn)
})