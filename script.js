const currentDate = new Date();
console.log(currentDate);// создание текущей даты

const targetDate = new Date('2030-12-31T23:59:59');
console.log(targetDate);// создание даты до которой будет вестись отсчёт

const difference = targetDate - currentDate;
console.log(difference);// вычисление разницы между датами

function updateCountdown() {
  const currentTime = new Date();
  const difference = targetDate - currentTime;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}
// Вот что происходит в этой функции:

// Вычисляем разницу между targetDate и currentTime.
// Затем мы разбиваем эту разницу на дни, часы, минуты и секунды.
// Каждая единица измерения времени рассчитывается путем деления разницы на количество миллисекунд в этой единице.
// Math.floor() используется для округления в меньшую сторону до ближайшего целого числа.
// Наконец, мы обновляем HTML-элементы этими вычисленными значениями.

const interval = setInterval(updateCountdown, 1000);
//setInterval() - это функция JavaScript, которая вызывает функцию или выполняет фрагмент кода повторно с фиксированной временной задержкой между каждым вызовом. Здесь он настроен на вызов updateCountdown каждые 1000 миллисекунд (что равно 1 секунде).
//interval - это переменная, которая хранит идентификатор интервала, который мы можем использовать для остановки интервала позже, если это необходимо.

if (difference < 0) {
  clearInterval(interval);
  document.getElementById("timer").innerText = "The event has started!";
}
//clearInterval(интервал); останавливает обратный отсчет при достижении или прохождении целевой даты.
//Затем мы обновляем текст элемента timer, чтобы указать, что событие началось.