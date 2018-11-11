import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { vnosSidebar, vnosSidebarEnhanced, listRoles, jsonbydeepika } from '../mocks/vnos-model.mocks';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
  
  @Output() selectedItem = new EventEmitter<string>();
  addNestedObject = true;
  sidebar: any = jsonbydeepika.data;//vnosSidebarEnhanced.data;
  roleList = listRoles["interface-roles"];
  role = {
    "label": "Interface Role",
    "data": {
      "type": "string",
      "parent": "vnos/ucpe-settings/interfaces/interface-role",
      "parentType": "list",
      "key": "interface-role",
      "value": ""
    },
    "type": "role",
    children:[]
  }

  constructor() { }

  ngOnInit() {
    //this.modifyVnos();
  }

  nodeSelect(event:any){
    console.log('side: ', event.node.label);
    this.selectedItem.emit(event.node.label);
  }

  modifyVnos() {
    //this.sidebar = jsonbydeepika.slice();
    if(this.addNestedObject){
      this.sidebar[0].children[0].children[3].children[0].children.push({

        'label': 'Routing Instances',

        'data': {

            'type': 'list',

            'parent': 'vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/priority/routing-instances',

            'key': 'routing-instances',

            'mergeKey': ['routing-instance-name']

        },

        'children': [

            {

                'label': 'Routing Instance name',

                'data': {

                    'type': 'string',

                    'parent': 'vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/priority/routing-instances/routing-instance-name'

                }

            }, {

                'label': 'Routing Protocols',

                'data': {

                    'type': 'container',

                    'parent': 'vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/priority/routing-instances/routing-protocols'

                },

                'children': [

                    {

                        'label': 'BGP',

                        'data': {

                            'type': 'container',

                            'parent': 'vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/priority/routing-instances/routing-protocols/bgp'

                        },

                        'children': [{

                            'label': 'v4 Network Name',

                            'data': {

                                'type': 'container',

                                'parent': 'vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/priority/routing-instances/routing-protocols/bgp/v4-network-name'

                            }

                        }, {

                            'label': 'V4 Redistribute',

                            'data': {

                                'type': 'container',

                                'parent': 'vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/priority/routing-instances/routing-protocols/bgp/v4-redistribute'

                            },

                            'children': [

                                {

                                    'label': 'Redistribute Connected Policy Name',

                                    'data': {

                                        'type': 'string',

                                        'parent': 'vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/priority/routing-instances/routing-protocols/bgp/v4-redistribute/redistribute-connected-policy-name'



                                    }

                                }

                            ]

                        }]

                    }

                ]

            }

        ]

    })
    }
    this.roleList.forEach(item => {
      let obj = Object.assign({}, this.role);
      const value = item["interface-role"];
      obj.data = {
        "type": "string",
        "parent": "vnos/ucpe-settings/interfaces/interface-role",
        "parentType": "list",
        "key": "interface-role",
        "value": value
      };
      obj.children = [
        {
          "label": "Interface Name",
          "data": {
            "type": "string",
            "parent": "vnos/ucpe-settings/interfaces/interface-name",
            "parentType": "list",
            "key": "interface-name",
            "value":value
          }
        },
        {
          "label": "Interface Identifier",
          "data": {
            "type": "string",
            "parent": "vnos/ucpe-settings/interfaces/interface-identifier",
            "parentType": "list",
            "key": "interface-identifier"
          }
        },
        {
          "label": "Trunk Type",
          "data": {
            "type": "string",
            "parent": "vnos/ucpe-settings/interfaces/trunk-type",
            "parentType": "list",
            "key": "trunk-type"
          }
        },
        {
          "label": "Media Type",
          "data": {
            "type": "string",
            "parent": "vnos/ucpe-settings/interfaces/media-type",
            "parentType": "list",
            "key": "media-type"
          }
        },
        {
          "label": "Ethernet Settings",
          "data": {
            "parent": "vnos/ucpe-settings/interfaces/ethernet-settings",
            "parentType": "list",
            "type": "list",
            "mergeKey": [
              "media-speed"
            ]
          },
          "children": [
            {
              "label": "Media Speed",
              "data": {
                "parentType": "nestedList",
                "parent": "vnos/ucpe-settings/interfaces/ethernet-settings/media-speed",
                "type": "string",
                "key": "media-speed"
              }
            },
            {
              "label": "Duplex",
              "data": {
                "parentType": "nestedList",
                "parent": "vnos/ucpe-settings/interfaces/ethernet-settings/duplex",
                "type": "string",
                "key": "duplex"
              }
            }
          ]
        },
        {
          "label": "Description",
          "data": "vnos/ucpe-settings/interfaces/description"
        },
        {
          "label": "Primary Vlan Id",
          "data": "vnos/ucpe-settings/interfaces/primary-vlan-id"
        }
      ];
      (() => {
        this.sidebar[0].children[0].children[4].children.push(obj);
        obj = null;
      })();
    });
  }

}
