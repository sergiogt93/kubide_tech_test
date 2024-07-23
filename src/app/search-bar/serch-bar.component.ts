import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Input() placeholder: string = '';
  @Output() search = new EventEmitter<string>();

  onSearch(name: string): void {
    this.search.emit(name);
  }
}
