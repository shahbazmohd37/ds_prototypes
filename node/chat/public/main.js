const socket = io('http://localhost:3001');

socket.on('clients-total', (data) => {
  console.log('total cllient ', data);
})

const messageForm = document.getElementById('form');
const messageInput = document.querySelector('input');
const nameInput = document.querySelector('#user');
const messageCon = document.querySelector('.messageCon');

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  sendMessage()
})

function sendMessage() {
  if (!messageInput.value) return
console.log(messageInput.value);
const data = {
  name: nameInput.textContent,
  message: messageInput.value,
  dateTime: new Date()
};
socket.emit('message', data);
addMessage(true, data);
messageInput.value = ''
}

socket.on('chat-message', (data) => {
  console.log('message receive in client', data);
  addMessage(false, data);
})

function addMessage(isOwnMessage, data){
  const el = `<li class=${isOwnMessage ? "right" : 'left'}>
  <p>
   ${data.message}
    <span>${data.name} . ${data.dateTime}</span>
  </p>
</li>`
messageCon.innerHTML += el;
scrollToBottom();
}

function scrollToBottom() {
  messageCon.scrollTo(0, messageCon.scrollHeight);
}

messageInput.addEventListener('focus', (e) => {
  socket.emit('feedback', {feedback: 'name is typing'});
})
messageInput.addEventListener('keypress', (e) => {
  socket.emit('feedback', {feedback: 'name is typing'});
})
messageInput.addEventListener('blur', (e) => {
  socket.emit('feedback', {feedback: ''});
})

socket.on('feedback', (data) => {
  const feedbackElem = document.querySelector('.feedback');
  feedbackElem.innerHTML = `<p>${data.feedback}</p>`
})