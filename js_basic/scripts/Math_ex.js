const birthday = new Date(2003, 8, 2);
const today = new Date(2020, 9, 3);
const birthToday = today.getTime(2020, 9, 3) - birthday.getTime(2011, 4, 15);
const dateFlow = Math.floor(birthToday / (1000*60*60*24));
console.log(birthday);
const birthDate = document.querySelector('em');
birthDate.textContent = dateFlow.toLocaleString('ko-kr');
document.querySelector('.age').textContent = today.getFullYear() - birthday.getFullYear();