import { Component, OnInit, Input, DoCheck, ViewEncapsulation } from '@angular/core';
import { listRoles, complexJson } from '../mocks/vnos-model.mocks';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainWindowComponent implements OnInit, DoCheck {

  @Input() data: any;
  @Input() selectedItem: string;
  @Input() type: string;
  @Input() parentType: string;
  cols: any[];
  table: any[];
  trackList = 0;

  constructor() { }

  ngOnInit() {
    this.cols = [];
    this.table = [];
    if (this.type === 'list' && this.parentType === 'list') {
      for (const value of this.data) {
        this.cols.push({ field: value['label'], header: value['label'] });
      }
      this.table = complexJson[this.data[0].data.key];
    }
  }

  getMargin(item) {
    let key;
    if (this.trackList >= 0 && this.trackList < 2 && item.type === 'list') {
      ++this.trackList;
    }
    if (item.parent) {
      key = item.parent;
    } else {
      key = item;
    }
    const multiplier = key.split('/');
    return (multiplier.length * 20) + 'px';
  }

  ngDoCheck() {
    if (this.selectedItem) {
      const heading = this.contains('h3', this.selectedItem);
      if (heading.length === 1) {
        heading[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
        return;
      } else if (heading.length === 2) {
        heading[1].scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
        return;
      }
      const container = this.contains('p', this.selectedItem);
      if (container.length > 1) {
        container[1].scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
      } else {
        container[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "end" });
      }
    }
    this.selectedItem = null;
  }

  contains(selector, text) {
    const elements = document.querySelectorAll(selector);
    return Array.prototype.filter.call(elements, function (element) {
      return text === element.innerText.trim();
    });
  }

}
