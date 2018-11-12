import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { vnosTree, vnosSidebar, vnosSidebarEnhanced, listRoles, jsonbydeepika } from './mocks/vnos-model.mocks';
import { MenuItem } from 'primeng/api';
import { VnosService } from './vnos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  visibleSidebar1 = true;
  showCloseIcon = false;
  dismissableSidebar = false;
  title = 'ui-prototype';
  tree = vnosTree.data;
  roleList = listRoles["interface-roles"];
  sidebar: any = jsonbydeepika.data;
  cols: any[];
  cars: any[];
  columns: any[] = [];
  tableData: any[] = [];
  result: any;
  items: MenuItem[];
  checked: Boolean = false;
  private breadCrumbList: MenuItem[] = [];
  selectedItem: string;


  constructor(private vnosService: VnosService) { }


  ngOnInit() {
    //this.getvnosData();
  }

  getvnosData(): void {
    this.vnosService.getVnosData()
      .subscribe(vnos => this.sidebar = vnos);
  }


  log(message) {
    console.log(' '.repeat(new Error().stack.match(/\n/g).length - 2) + message);
  }

  track(tree, node): any {

    for (var i = 0; i < tree.length; i++) {
      if (!tree[i].children && (tree[i].label).toLowerCase() === (node).toLowerCase()) {
        tree[i].data.parent.split('/').forEach(element => {
          if (element.length > 0) {
            this.breadCrumbList.push({ label: element });
          }
        });
        return;
      }
      if (tree[i].children && (tree[i].label).toLowerCase() === node) {
        tree[i].data.parent.split('/').forEach(element => {
          if (element.length > 0) {
            this.breadCrumbList.push({ label: element });
          }
        });
        if (tree[i].data.type === 'container' || tree[i].data.type === 'list') {
          this.breadCrumbList.push({ label: tree[i].label });
        }
        return;
      }
      if (tree[i].children) {
        this.track(tree[i].children, node);
      }
    }
  }

  pushItem(input: string) {
    this.selectedItem = input;
    this.track(jsonbydeepika.data, input);
    this.items = this.breadCrumbList.slice(0, 3);
    this.breadCrumbList.splice(0);
  }
}
