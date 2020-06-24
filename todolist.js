let ulTasks=$('#ulTasks');
let btnAdd=$('#btnAdd');
let btnReset=$('#btnReset');
let btnCleanup=$('#btnCleanup');
let btnSort=$('#btnSort');
let inpNewTask=$('#inpNewTask');

/* $('li') will create an lite element .
In javascript keys are strings.*/

function addItem()
{
    let listItem=$('<li>',{
        'class':'list-group-item',
        text:inpNewTask.val()
    })
    listItem.click(()=>{
        /* for using this in commented box pass event argumet inside the function
        console.log("clicked",$(event.target));
        $(event.target).toggleClass('disabled');*/
        listItem.toggleClass('done');
    })
    ulTasks.append(listItem);
    inpNewTask.val(" ");
    toggleInputButtons();

}

function cleanDone()
{
    $('#ulTasks .done').remove();
    toggleInputButtons();
}
function sortTasks()
{
    $('#ulTasks .done').appendTo(ulTasks)
}
function toggleInputButtons()
{
    btnReset.prop('disabled',inpNewTask.val()==' ');
    btnAdd.prop('disabled',inpNewTask.val()==' ');
    btnSort.prop('disabled',ulTasks.children().length<1);
    btnCleanup.prop('disabled',ulTasks.children().length<1);

}
/* To get the code of the eleent we typed on the keyboard.after pressing enter button 
we will get 13 in the console.After pressing enter the values are automatically added to the list*/
/* Keypress function taking event as an input */
inpNewTask.keypress((e)=>{
    if(e.which==13)
    {
        addItem();
    }
})


btnAdd.click(addItem);

inpNewTask.on('input',toggleInputButtons)

btnReset.click(()=>{
    inpNewTask.val(' ');
    toggleInputButtons();
})
btnCleanup.click(cleanDone);
btnSort.click(sortTasks);