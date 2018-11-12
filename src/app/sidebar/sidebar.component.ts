import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { vnosSidebar, vnosSidebarEnhanced, listRoles, jsonbydeepika } from '../mocks/vnos-model.mocks';
import { VnosService } from '../vnos.service';


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
    "children": []
  }

  constructor(private vnosService: VnosService) { }

  ngOnInit() {
    //this.modifyVnos();
    //this.getvnosData();
    if (this.sidebar) {
      this.changeVnosData(this.sidebar);
    }
  }

  getvnosData(): void {
    this.vnosService.getVnosData()
      .subscribe(vnos => this.sidebar = vnos);
  }

  nodeSelect(event: any) {
    console.log('side: ', event.node.label);
    this.selectedItem.emit(event.node.label);
  }

  modifyVnos() {
    //this.sidebar = jsonbydeepika.slice();
    if (this.addNestedObject) {
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
            "value": value
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

  changeVnosData(data, type) {
    for (var i = 0; i < data.length; i++) {

      if (data[i].data.key === 'interface-roles') {
        //data[0].type = 'role';
        //data[0].data.value = 'Role A';
        let interfaceRole = data.splice(i, 1);
        listRoles["interface-roles"].forEach((item, index) => {
          data.splice(i + index, 0, {
            "label": "interface roles",
            "data": {
              "mergekey": "interface-role",
              "parent": "/vnos/ucpe-settings/",
              "key": "interface-roles",
              "type": "list",
              "value": item["interface-role"]
            },
            "interface-roles": {},
            "type": "role",
            "children": [
              {
                "data": {
                  "pattern": {
                    "pattern": "LAN[0-9]+"
                  },
                  "parent": "/vnos/ucpe-settings/interface-roles/",
                  "key": "interface-role",
                  "data-source": "/reference-data/physical-device-interface-roles[device-vendor-name=../../external-device-vendor and device-model=../../external-device-model]/wan-interface-roles/interface-roles/interface-role |\n/reference-data/physical-device-interface-roles[device-vendor-name=../../external-device-vendor and device-model=../../external-device-model]/lan-interface-roles/interface-role",
                  "validate-info": "current() = /reference-data/interface-roles[device-vendor-name=../../external-device-vendor and device-model=../../external-device-model]/wan-interface-roles/interface-role |\n/reference-data/physical-device-interface-roles[device-vendor-name=../../external-device-vendor and device-model=../../external-device-model]/lan-interface-roles/interface-role",
                  "validate-type": "xpath",
                  "is-visible": "true",
                  "edit-by": "LE+CUSTOMER",
                  "type": "str",
                  "value": item["interface-role"]
                },
                "label": "interface role"
              },
              {
                "data": {
                  "pattern": {
                    "pattern": "Port[0-9]+"
                  },
                  "parent": "/vnos/ucpe-settings/interface-roles/",
                  "key": "interface-name",
                  "data-source": "/reference-data/physical-device-interface-identifiers[device-vendor-name=../../external-device-vendor and device-model=../../external-device-model]/interface-identifier/interface-identifier",
                  "validate-info": "current() = /reference-data/physical-device-interface-identifiers[\ndevice-vendor-name=../../external-device-vendor and device-model=../../external-device-model]/interface-identifier/interface-identifier and\nnot ../../interfaces[interface-role!=../interface-role]/interface-name = current()",
                  "validate-type": "xpath",
                  "is-visible": "true",
                  "edit-by": "LE+CUSTOMER",
                  "type": "str"
                },
                "label": "interface name"
              },
              {
                "data": {
                  "pattern": {
                    "dict_key": {
                      "ACCESS": {},
                      "TRUNK": {}
                    }
                  },
                  "parent": "/vnos/ucpe-settings/interface-roles/",
                  "key": "trunk-type",
                  "is-visible": "true",
                  "edit-by": "LE+CUSTOMER",
                  "type": "str"
                },
                "label": "trunk type"
              },
              {
                "data": {
                  "pattern": {
                    "dict_key": {
                      "SFP": {},
                      "RJ45": {}
                    }
                  },
                  "parent": "/vnos/ucpe-settings/interface-roles/",
                  "key": "media-type",
                  "is-visible": "true",
                  "edit-by": "NONE",
                  "type": "str",
                  "autopopulate": "/reference-data/physical-device-interface-identifiers[device-vendor-name=../../external-device-vendor and device-model=../../external-device-model]\n/interface-identifiers[interface-identifier='../interface-identifier']/media-type"
                },
                "label": "media type"
              },
              {
                "data": {
                  "parent": "/vnos/ucpe-settings/interface-roles/",
                  "key": "ethernet-settings",
                  "type": "container"
                },
                "label": "ethernet settings",
                "children": [
                  {
                    "data": {
                      "pattern": {
                        "dict_key": {
                          "10": {},
                          "100": {},
                          "1000": {}
                        }
                      },
                      "parent": "/vnos/ucpe-settings/interface-roles/ethernet-settings/",
                      "key": "media-speed",
                      "is-visible": "true",
                      "choice": [
                        "rj45-sfp",
                        "rj45"
                      ],
                      "edit-by": "LE+CUSTOMER",
                      "type": "str"
                    },
                    "label": "media speed"
                  },
                  {
                    "data": {
                      "pattern": {
                        "dict_key": {
                          "HALF": {},
                          "FULL": {},
                          "AUTO": {}
                        }
                      },
                      "parent": "/vnos/ucpe-settings/interface-roles/ethernet-settings/",
                      "key": "duplex",
                      "is-visible": "true",
                      "validate-info": "FULL|AUTO",
                      "validate-type": "enum",
                      "choice": [
                        "rj45-sfp",
                        "rj45"
                      ],
                      "edit-by": "LE+CUSTOMER",
                      "type": "str"
                    },
                    "label": "duplex"
                  }
                ]
              },
              {
                "data": {
                  "parent": "/vnos/ucpe-settings/interface-roles/",
                  "key": "sfp-settings",
                  "type": "container"
                },
                "label": "sfp settings",
                "children": [
                  {
                    "data": {
                      "pattern": {
                        "dict_key": {
                          "10": {},
                          "100": {},
                          "1000": {}
                        }
                      },
                      "parent": "/vnos/ucpe-settings/interface-roles/sfp-settings/",
                      "key": "media-speed",
                      "is-visible": "true",
                      "choice": [
                        "rj45-sfp",
                        "sfp"
                      ],
                      "edit-by": "LE+CUSTOMER",
                      "type": "str"
                    },
                    "label": "media speed"
                  },
                  {
                    "data": {
                      "pattern": {
                        "dict_key": {
                          "HALF": {},
                          "FULL": {},
                          "AUTO": {}
                        }
                      },
                      "parent": "/vnos/ucpe-settings/interface-roles/sfp-settings/",
                      "key": "duplex",
                      "is-visible": "true",
                      "validate-info": "FULL|AUTO",
                      "validate-type": "enum",
                      "choice": [
                        "rj45-sfp",
                        "sfp"
                      ],
                      "edit-by": "LE+CUSTOMER",
                      "type": "str"
                    },
                    "label": "duplex"
                  }
                ]
              }
            ]
          })
        });
        console.log(data);
        return;
      }


      if (data[i].children) {
        this.changeVnosData(data[i].children, data[i].data.type);
      }
    }
  }

}
