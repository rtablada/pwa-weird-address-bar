(() => {
  const insertTextButton = document.querySelector('#insert-text');
  const addTextButton = document.querySelector('#add-text');
  const openAlertButton = document.querySelector('#open-alert');
  const openConfirmButton = document.querySelector('#open-confirm');

  addTextButton.addEventListener('click', () => {
    insertTextButton.innerText = 'Hey you added some text without the weird popup'
  })

  openAlertButton.addEventListener('click', () => {
    alert('This will cause some issues');
    insertTextButton.innerText = 'Hey you added some text after the native alert, is the title bar there now?';
  })

  openConfirmButton.addEventListener('click', () => {
    if (confirm('Should I change the text now?')) {

      insertTextButton.innerText = 'Hey you confirmed that you wanted to change the text, is the title bar there now?';
    }
  })
})()