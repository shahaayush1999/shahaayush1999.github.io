import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskbar-clock',
  templateUrl: './taskbar-clock.component.html',
  styleUrls: ['./taskbar-clock.component.css']
})
export class TaskbarClockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const span = document.getElementById('clock');
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];

    function time(): void {
      const d = new Date();
      const mt = d.getMonth();
      const dt = d.getDate();
      const s = d.getSeconds();
      const m = d.getMinutes();
      const h = d.getHours();
      span.textContent = `${months[mt].slice(0, 3)} ${dt} ${h}:${m}:${s}`;
    }

    time();
    setInterval(time, 1000);
  }

}
