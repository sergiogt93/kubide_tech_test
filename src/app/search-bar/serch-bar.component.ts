import { CommonModule } from '@angular/common';
import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  imports: [CommonModule]
})
export class SearchBarComponent {
  @Input() placeholder: string = '';
  @Output() search = new EventEmitter<string>();

  @ContentChild('customSearch', { read: TemplateRef }) customSearchTemplate: TemplateRef<any> | undefined;


  onSearch(name: string): void {
    this.search.emit(name);
  }
}
