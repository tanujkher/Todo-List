$(() => {
    let btnAdd = $('#btnAdd')
    let btnClear = $('#btnClear')
    let ulTasks = $('#ulTasks')
    let inpNewTask = $('#inpNewTask')

    // Add functionality

    btnAdd.click(() => {
        // ulTasks.append($('<li>').text(inpNewTask.val()).attr('class', 'list-group-item'))
        let listItem = $('<li>', {
            'class' : 'list-group-item',
            text : inpNewTask.val()
        })
        listItem.click(() => {
            listItem.toggleClass('done')
        })
        ulTasks.append(listItem)
        inpNewTask.val('')
    })

    // Clear functionality

    btnClear.click(() => {
        inpNewTask.val('')
    })
})