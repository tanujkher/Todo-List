$(() => {
    let btnAdd = $('#btnAdd')
    let btnClear = $('#btnClear')
    let ulTasks = $('#ulTasks')
    let inpNewTask = $('#inpNewTask')

    btnAdd.click(() => {
        ulTasks.append($('<li>').text(inpNewTask.val()).attr('class', 'list-group-item'))
        inpNewTask.val('')
    })
})