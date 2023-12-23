import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-daisyui';

  changeTheme() {
    let theme = localStorage.getItem("chakra-ui-color-mode");
    console.log("Theme", theme);
    if (theme === 'light') {
      theme = 'dark';
    } else {
      theme = 'light';
    }
    localStorage.setItem('chakra-ui-color-mode', theme);
  }

  getTheme() {
    return localStorage.getItem('chakra-ui-color-mode') || "light";
  }
}
