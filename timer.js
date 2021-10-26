class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.selector = selector;
    this.start();
  }
  start() {
    setInterval(() => {
      const diffTime = this.targetDate - new Date();
      const time = this.getTimeComponents(diffTime);
      this.updateClockface(time);
    }, 1000);
  }
  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
  updateClockface({ days, hours, mins, secs }) {
    const timer = document.querySelector(this.selector);
    const timersValue = timer.querySelectorAll('.value');
    timersValue[0].textContent = days;
    timersValue[1].textContent = hours;
    timersValue[2].textContent = mins;
    timersValue[3].textContent = secs;
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
});
