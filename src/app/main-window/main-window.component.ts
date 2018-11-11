import { Component, OnInit, Input, DoCheck, ViewChild, ElementRef, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { listRoles, complexJson } from '../mocks/vnos-model.mocks';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit, DoCheck, AfterViewChecked {

  @Input() data: any;
  @Input() selectedItem: string;
  @Input() type:string;
  @Input() parentType: string;
  cols: any[];
  table: any[];
  trackList: number = 0;

  constructor(private cdRef : ChangeDetectorRef) { }

  ngOnInit() {
    /*if(this.data[0].data.parentType === 'nestedList'){
      this.cols = [];
      this.table = [];
      for(let value in listRoles["interface-roles"][0]["ethernet-settings"][0]){
        this.cols.push({field: value, header: value});
      }
      this.table= listRoles["interface-roles"][0]["ethernet-settings"]; 
    }*/
    this.cols = [];
    this.table = [];
    for(let value in complexJson["ipsec-nm-tunnel"][0]){
      this.cols.push({field: value, header: value});
    }

    this.table = complexJson["ipsec-nm-tunnel"];
    
  }

  ngAfterViewChecked(){
    this.cdRef.detectChanges();
  }



  getMargin(item) {
    let key;
    if(this.trackList >= 0 && this.trackList < 2 && item.type === 'list'){
      ++this.trackList;
    }
    if(item.parent){
      key = item.parent;
    }else{
      key = item;
    }
    const multiplier = key.split('/');
    return (multiplier.length*20) + 'px';
  }

  ngDoCheck() {
    if (this.selectedItem) {
      console.log(this.selectedItem);
      let heading = this.contains('h3',this.selectedItem);
      if(heading.length === 1){
         heading[0].scrollIntoView({behavior: "smooth", block: "start", inline: "end"});
        return;
      }else if(heading.length === 2){
        heading[1].scrollIntoView({behavior: "smooth", block: "start", inline: "end"});
        return;
      }
      let container = this.contains('p', this.selectedItem);
      if (container.length > 1) {
        container[1].scrollIntoView({behavior: "smooth", block: "start", inline: "end"});
      } else {
        container[0].scrollIntoView({behavior: "smooth", block: "start", inline: "end"});
      }

    }
  }

  contains(selector, text) {
    var elements = document.querySelectorAll(selector);
    return Array.prototype.filter.call(elements, function (element) {
      return text === element.innerText.trim();
    });
  }

}
