import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Netflix_Project';
  constructor(private headerTitle: Title, private meta: Meta) {}
  ngOnInit(): void {
    this.headerTitle.setTitle('Product Page - This is the product page');
    this.meta.updateTag({
      name: 'description',
      content: 'Hello World',
    });
  }
}
