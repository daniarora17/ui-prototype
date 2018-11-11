export const vnosTree = {
    "data": [{
        "label": "VNOS",
        "data": "vnos",
        "children": [{
            "label": "uCPE Settings",
            "data": "ucpe-settings",
            "children": [{
                "label": "Customer NM LAN",
                "data": "customer-network-management-lan"
            }, {
                "label": "IPSec NM Tunnel",
                "data": "ipsec-nm-tunnel",
                "children": [{
                    "label": "IPSec NM Tunnel Interfaces",
                    "data": "ipsec-nm-tunnel-interfacess"
                }]
            }, {
                "label": "Interface Roles",
                "data": "Interface Roles"
            }]
        }]
    }]
}

export const vnosSidebar = {
    "data": [{
        "label": "VNOS",
        "data": "vnos",
        "children": [{
            "label": "uCPE Settings",
            "data": "vnos/ucpe-settings",
            "children": [{
                "label": "uCPE Host Name",
                "data": "vnos/ucpe-settings/ucpe-host-name"
            }, {
                "label": "uCPE Host Name Alias",
                "data": "vnos/ucpe-settings/ucpe-host-name-alias"
            }, {
                "label": "Customer Network Management Lan",
                "data": "vnos/ucpe-settings/customer-network-management-lan",
                "children": [{
                    "label": "Ipv4 Address Prefix",
                    "data": "vnos/ucpe-settings/customer-network-management-lan/ipv4-address-prefix"
                }, {
                    "label": "Ipv6 Address Prefix",
                    "data": "vnos/ucpe-settings/customer-network-management-lan/ipv6-address-prefix"
                }, {
                    "label": "Interface",
                    "data": "vnos/ucpe-settings/customer-network-management-lan/interface"
                }, {
                    "label": "Customer Network Management Vlan Id",
                    "data": "vnos/ucpe-settings/customer-network-management-lan/customer-network-management-vlan-id"
                }]
            }, {
                "label": "Ipsec Nm Tunnel",
                "data": "vnos/ucpe-settings/ipsec-nm-tunnel",
                "children": [{
                    "label": "Ipsec Nm Tunnel Interfaces",
                    "data": "vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces",
                    "children": [{
                        "label": "Subinterface Name",
                        "data": "vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/subinterface-name"
                    }, {
                        "label": "Interface",
                        "data": "vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/Interface"
                    }, {
                        "label": "Vlan Id Inner",
                        "data": "vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/vlan-id-inner"
                    }, {
                        "label": "Vlan Id Outer",
                        "data": "vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/vlan-id-outer"
                    }, {
                        "label": "Ipsec Tunnel Server Network Type",
                        "data": "vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/ipsec-yunnel-server-network-type"
                    }, {
                        "label": "Next Hop Ipv4 Address",
                        "data": "vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/next-hop-ipv4-address",
                    }, {
                        "label": "Next Hop Ipv6 Address",
                        "data": "vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/next-hop-ipv6-Address"
                    }, {
                        "label": "Qualified Next Hop Ipv4 Address",
                        "data": "vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/qualified-next-hop-ipv4-address"
                    }, {
                        "label": "Qualified Next Hop Ipv6 Address",
                        "data": "vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/qualified-next-hop-ipv6-address"
                    }, {
                        "label": "Priority",
                        "data": "vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/priority"
                    }]
                }]
            }, {
                "label": "Interfaces",
                "data": "vnos/ucpe-settings/interfaces",
                "children": [{
                    "label": "Interface",
                    "data": "vnos/ucpe-settings/interfaces/interface"
                }, {
                    "label": "Interface Identifier",
                    "data": "vnos/ucpe-settings/interfaces/interface-identifier"
                }, {
                    "label": "Trunk Type",
                    "data": "vnos/ucpe-settings/interfaces/trunk-type"
                }, {
                    "label": "Media Type",
                    "data": "vnos/ucpe-settings/interfaces/media-type"
                }, {
                    "label": "Ethernet Settings",
                    "data": "vnos/ucpe-settings/interfaces/ethernet-settings",
                    "children": [{
                        "label": "Media Speed",
                        "data": "vnos/ucpe-settings/interfaces/ethernet-settings/media-speed"
                    }, {
                        "label": "Duplex",
                        "data": "vnos/ucpe-settings/interfaces/ethernet-settings/duplex"
                    }]
                }, {
                    "label": "Description",
                    "data": "vnos/ucpe-settings/interfaces/description"
                }, {
                    "label": "Primary Vlan Id",
                    "data": "vnos/ucpe-settings/interfaces/primary-vlan-id"
                }]
            }]
        }]
    }]
}

export const complexJson = {
    'ipsec-nm-tunnel': [{
        'ipv4-addresses': '1.2.3.4',
        'ipv6-addresses': '3.4.45.8'
    }]
};

export const listRoles = {
    'interface-roles': [{
        'interface-role': 'Role A',
        'interface-identifier': '',
        'trunk-type': '',
        'media-type': '',
        'ethernet-settings': [{
            'media-speed': '1000',
            'duplex': 'AUTO'
        }, {
            'media-speed': '1500',
            'duplex': 'MANUAL'
        }, {
            'media-speed': '1000',
            'duplex': 'AUTO'
        }, {
            'media-speed': '1000',
            'duplex': 'AUTO'
        }, {
            'media-speed': '1000',
            'duplex': 'AUTO'
        }, {
            'media-speed': '1500',
            'duplex': 'MANUAL'
        }, {
            'media-speed': '1000',
            'duplex': 'AUTO'
        }, {
            'media-speed': '1000',
            'duplex': 'AUTO'
        }],
        'description': '',
        'primary-vlan-id': ''
    }, {
        'interface-role': 'Role B',
        'interface-identifier': '',
        'trunk-type': '',
        'media-type': '',
        'ethernet-settings': [{
            'media-speed': '3456',
            'duplex': 'AUTO'
        }, {
            'media-speed': '1500',
            'duplex': 'MANUAL'
        }, {
            'media-speed': '1000',
            'duplex': 'AUTO'
        }, {
            'media-speed': '1000',
            'duplex': 'AUTO'
        }, {
            'media-speed': '1000',
            'duplex': 'AUTO'
        }, {
            'media-speed': '1500',
            'duplex': 'MANUAL'
        }, {
            'media-speed': '1000',
            'duplex': 'AUTO'
        }, {
            'media-speed': '1000',
            'duplex': 'AUTO'
        }],
        'description': '',
        'primary-vlan-id': ''
    }]
}

export const vnosSidebarEnhanced = {



    'data': [{



        'label': 'VNOS',



        'data': {



            'parent': 'vnos',



            'type': 'container'



        },



        'children': [{



            'label': 'uCPE Settings',



            'data': {



                'parent': 'vnos/ucpe-settings',



                'type': 'container'



            },



            'children': [{



                'label': 'uCPE Host Name',



                'data': {



                    'parent': 'vnos/ucpe-settings/ucpe-host-name',



                    'type': 'string'



                }



            }, {



                'label': 'uCPE Host Name Alias',



                'data': 'vnos/ucpe-settings/ucpe-host-name-alias'



            }, {



                'label': 'Customer Network Management Lan',



                'data': {



                    'parent': 'vnos/ucpe-settings/customer-network-management-lan',



                    'type': 'container'



                },



                'children': [{



                    'label': 'Ipv4 Address Prefix',



                    'data': 'vnos/ucpe-settings/customer-network-management-lan/ipv4-address-prefix'



                }, {



                    'label': 'Ipv6 Address Prefix',



                    'data': 'vnos/ucpe-settings/customer-network-management-lan/ipv6-address-prefix'



                }, {



                    'label': 'Interface',



                    'data': {



                        'type': 'array',



                        'parent': 'vnos/ucpe-settings/customer-network-management-lan/interface'



                    },



                }, {



                    'label': 'Customer Network Management Vlan Id',



                    'data': 'vnos/ucpe-settings/customer-network-management-lan/customer-network-management-vlan-id'



                }]



            }, {



                'label': 'Ipsec Nm Tunnel',



                'data': 'vnos/ucpe-settings/ipsec-nm-tunnel',



                'children': [{



                    'label': 'Ipsec Nm Tunnel Interfaces',



                    'data': 'vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces',



                    'children': [{



                        'label': 'Subinterface Name',



                        'data': 'vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/subinterface-name'



                    }, {



                        'label': 'Interface',



                        'data': 'vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/Interface'



                    }, {



                        'label': 'Vlan Id Inner',



                        'data': 'vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/vlan-id-inner'



                    }, {



                        'label': 'Vlan Id Outer',



                        'data': 'vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/vlan-id-outer'



                    }, {



                        'label': 'Ipsec Tunnel Server Network Type',



                        'data': 'vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/ipsec-yunnel-server-network-type'



                    }, {



                        'label': 'Next Hop Ipv4 Address',



                        'data': 'vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/next-hop-ipv4-address',



                    }, {



                        'label': 'Next Hop Ipv6 Address',



                        'data': 'vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/next-hop-ipv6-Address'



                    }, {



                        'label': 'Qualified Next Hop Ipv4 Address',



                        'data': 'vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/qualified-next-hop-ipv4-address'



                    }, {



                        'label': 'Qualified Next Hop Ipv6 Address',



                        'data': 'vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/qualified-next-hop-ipv6-address'



                    }, {



                        'label': 'Priority',



                        'data': 'vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/priority'

                    }]



                }]



            }, {



                'label': 'Interface Roles',



                'data': {



                    'type': 'list',



                    'key': 'interface-roles',



                    'parent': 'vnos/ucpe-settings/interface-roles',



                    'mergeKey': ['interface-role']



                },



                'children': []



            }]



        }]



    }]



};

export const jsonbydeepika = {
    'data': [
        {
            "data": {
                "parent": "/vnos/",
                "key": "ucpe-settings",
                "type": "container"
            },
            "label": "UCPE settings",
            "children": [
                {
                    "data": {
                        "pattern": {
                            "pattern": "(\\S.*(.*[\\r\\n]*.*)*.*\\S|\\S)"
                        },
                        "parent": "/vnos/ucpe-settings/",
                        "key": "ucpe-host-name",
                        "is-visible": "true",
                        "edit-by": "NONE",
                        "type": "str",
                        "autopopulate": "../external-host-name"
                    },
                    "label": "ATT Host Name"
                },
                {
                    "data": {
                        "pattern": {
                            "pattern": "(\\S.*(.*[\\r\\n]*.*)*.*\\S|\\S)"
                        },
                        "parent": "/vnos/ucpe-settings/",
                        "key": "ucpe-host-name-alias",
                        "is-visible": "true",
                        "edit-by": "LE+CUSTOMER",
                        "type": "str",
                        "autopopulate": "../external-alias-host-name"
                    },
                    "label": "Customer-defined Host Name"
                },
                {
                    "data": {
                        "cond-mandatory": "../vnfs/external-managment-option = 'CUSTOMER'",
                        "parent": "/vnos/ucpe-settings/",
                        "key": "customer-network-management-lan",
                        "type": "container"
                    },
                    "label": "customer network management lan",
                    "children": [
                        {
                            "data": {
                                "pattern": {
                                    "pattern": "(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])/(([0-9])|([1-2][0-9])|(3[0-2]))"
                                },
                                "parent": "/vnos/ucpe-settings/customer-network-management-lan/",
                                "key": "ipv4-address-prefix",
                                "is-visible": "true",
                                "edit-by": "LE+CUSTOMER",
                                "type": "str"
                            },
                            "label": "ipv4 address prefix"
                        },
                        {
                            "data": {
                                "pattern": {
                                    "pattern": "((:|[0-9a-fA-F]{0,4}):)([0-9a-fA-F]{0,4}:){0,5}((([0-9a-fA-F]{0,4}:)?(:|[0-9a-fA-F]{0,4}))|(((25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])))(/(([0-9])|([0-9]{2})|(1[0-1][0-9])|(12[0-8])))"
                                },
                                "parent": "/vnos/ucpe-settings/customer-network-management-lan/",
                                "key": "ipv6-address-prefix",
                                "is-visible": "true",
                                "edit-by": "LE+CUSTOMER",
                                "type": "str"
                            },
                            "label": "ipv6 address prefix"
                        },
                        {
                            "data": {
                                "parent": "/vnos/ucpe-settings/customer-network-management-lan/",
                                "key": "interface-role",
                                "data-source": "../../interface-roles/interface-role",
                                "validate-info": "../../interfaces/interface-role = current()",
                                "validate-type": "xpath",
                                "is-visible": "true",
                                "edit-by": "LE+CUSTOMER",
                                "leafref": "interface-role"
                            },
                            "label": "interface role"
                        },
                        {
                            "data": {
                                "pattern": {
                                    "range": [
                                        "0..65535"
                                    ]
                                },
                                "parent": "/vnos/ucpe-settings/customer-network-management-lan/",
                                "key": "customer-network-management-vlan-id",
                                "is-visible": "true",
                                "edit-by": "LE+CUSTOMER",
                                "type": "int"
                            },
                            "label": "customer network management vlan id"
                        }
                    ]
                },
                {
                    "data": {
                        "parent": "/vnos/ucpe-settings/",
                        "key": "ipsec-nm-tunnel",
                        "type": "container"
                    },
                    "label": "ipsec nm tunnel",
                    "children": [
                        {
                            "data": {
                                "validate-info": "not ../ipsec-nm-tunnel-interfaces[subinterface-name!=../subinterface-name and interface-role=current()/interface-role and vlan-id-inner=current()/vlan-id-inner ]/",
                                "key": "ipsec-nm-tunnel-interfaces",
                                "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/",
                                "mergekey": "subinterface-name",
                                "validate-type": "xpath",
                                "type": "list"
                            },
                            "label": "ipsec nm tunnel interfaces",
                            "ipsec-nm-tunnel-interfaces": {},
                            "children": [
                                {
                                    "data": {
                                        "pattern": {
                                            "pattern": "(\\S.*(.*[\\r\\n]*.*)*.*\\S|\\S)"
                                        },
                                        "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/",
                                        "key": "subinterface-name",
                                        "is-visible": "true",
                                        "edit-by": "LE",
                                        "type": "str"
                                    },
                                    "label": "subinterface name"
                                },
                                {
                                    "data": {
                                        "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/",
                                        "key": "interface-role",
                                        "is-visible": "true",
                                        "edit-by": "LE",
                                        "leafref": "interface-role"
                                    },
                                    "label": "Interface Role"
                                },
                                {
                                    "data": {
                                        "pattern": {
                                            "range": [
                                                "0..65535"
                                            ]
                                        },
                                        "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/",
                                        "key": "vlan-id-inner",
                                        "is-visible": "true",
                                        "edit-by": "LE",
                                        "type": "int",
                                        "autopopulate": "...pointer to service chaining context / port / and VLAN name "
                                    },
                                    "label": "vlan id inner"
                                },
                                {
                                    "data": {
                                        "pattern": {
                                            "range": [
                                                "0..65535"
                                            ]
                                        },
                                        "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/",
                                        "key": "vlan-id-outer",
                                        "is-visible": "true",
                                        "edit-by": "LE",
                                        "type": "int",
                                        "autopopulate": "...pointer to service chaining context / port / and VLAN name "
                                    },
                                    "label": "vlan id outer"
                                },
                                {
                                    "data": {
                                        "pattern": {
                                            "dict_key": {
                                                "BOTH": {},
                                                "PRIVATE": {},
                                                "PUBLIC": {}
                                            }
                                        },
                                        "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/",
                                        "key": "ipsec-tunnel-server-network-type",
                                        "is-visible": "true",
                                        "edit-by": "LE",
                                        "type": "str"
                                    },
                                    "label": "ipsec tunnel server network type"
                                },
                                {
                                    "data": {
                                        "mergekey": "ipv4-address",
                                        "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/",
                                        "key": "ipv4-addresses",
                                        "type": "list",
                                        "cond-display": "../is-dynamic-assigned-ipv4-address = false"
                                    },
                                    "label": "ipv4 addresses",
                                    "ipv4-addresses": {},
                                    "children": [
                                        {
                                            "data": {
                                                "pattern": {
                                                    "pattern": "(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])/(([0-9])|([1-2][0-9])|(3[0-2]))"
                                                },
                                                "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/ipv4-addresses/",
                                                "key": "ipv4-address",
                                                "is-visible": "true",
                                                "choice": [
                                                    "dynamic-or-static-ipv4",
                                                    "static"
                                                ],
                                                "edit-by": "LE",
                                                "type": "str"
                                            },
                                            "label": "ipv4 address"
                                        }
                                    ]
                                },
                                {
                                    "data": {
                                        "mergekey": "ipv6-address",
                                        "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/",
                                        "key": "ipv6-addresses",
                                        "type": "list"
                                    },
                                    "label": "ipv6 addresses",
                                    "ipv6-addresses": {},
                                    "children": [
                                        {
                                            "data": {
                                                "pattern": {
                                                    "pattern": "((:|[0-9a-fA-F]{0,4}):)([0-9a-fA-F]{0,4}:){0,5}((([0-9a-fA-F]{0,4}:)?(:|[0-9a-fA-F]{0,4}))|(((25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])))(/(([0-9])|([0-9]{2})|(1[0-1][0-9])|(12[0-8])))"
                                                },
                                                "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/ipv6-addresses/",
                                                "key": "ipv6-address",
                                                "is-visible": "true",
                                                "choice": [
                                                    "dynamic-or-static-ipv6",
                                                    "static"
                                                ],
                                                "edit-by": "LE",
                                                "type": "str"
                                            },
                                            "label": "ipv6 address"
                                        }
                                    ]
                                },
                                {
                                    "data": {
                                        "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/",
                                        "key": "dynamic-assigned-ipv6-address",
                                        "type": "container"
                                    },
                                    "label": "dynamic assigned ipv6 address",
                                    "children": [
                                        {
                                            "data": {
                                                "pattern": {
                                                    "dict_key": {
                                                        "SLAAC": {},
                                                        "DHCPV6": {}
                                                    }
                                                },
                                                "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/dynamic-assigned-ipv6-address/",
                                                "choice": [
                                                    "dynamic-or-static-ipv6",
                                                    "dynamic"
                                                ],
                                                "key": "dynamic-assigned-ipv6-address-type",
                                                "type": "str"
                                            },
                                            "label": "dynamic assigned ipv6 address type"
                                        }
                                    ]
                                },
                                {
                                    "data": {
                                        "pattern": {
                                            "pattern": "(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])/(([0-9])|([1-2][0-9])|(3[0-2]))"
                                        },
                                        "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/",
                                        "key": "next-hop-ipv4-address",
                                        "cond-display": "../ipv4-addresses or ../dynamic-assigned-ipv4-address",
                                        "is-visible": "true",
                                        "edit-by": "LE",
                                        "type": "str"
                                    },
                                    "label": "next hop ipv4 address"
                                },
                                {
                                    "data": {
                                        "pattern": {
                                            "pattern": "((:|[0-9a-fA-F]{0,4}):)([0-9a-fA-F]{0,4}:){0,5}((([0-9a-fA-F]{0,4}:)?(:|[0-9a-fA-F]{0,4}))|(((25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])))(%[\\p{N}\\p{L}]+)?"
                                        },
                                        "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/",
                                        "key": "next-hop-ipv6-address",
                                        "cond-display": "../ipv6-addresses or ../dynamic-assigned-ipv6-address",
                                        "is-visible": "true",
                                        "edit-by": "LE",
                                        "type": "str"
                                    },
                                    "label": "next hop ipv6 address"
                                },
                                {
                                    "data": {
                                        "pattern": {
                                            "pattern": "(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])/(([0-9])|([1-2][0-9])|(3[0-2]))"
                                        },
                                        "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/",
                                        "key": "qualified-next-hop-ipv4-address",
                                        "cond-display": "../next-hop-ipv4-address",
                                        "is-visible": "true",
                                        "edit-by": "LE",
                                        "type": "str"
                                    },
                                    "label": "qualified next hop ipv4 address"
                                },
                                {
                                    "data": {
                                        "pattern": {
                                            "pattern": "((:|[0-9a-fA-F]{0,4}):)([0-9a-fA-F]{0,4}:){0,5}((([0-9a-fA-F]{0,4}:)?(:|[0-9a-fA-F]{0,4}))|(((25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])))(/(([0-9])|([0-9]{2})|(1[0-1][0-9])|(12[0-8])))"
                                        },
                                        "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/",
                                        "key": "qualified-next-hop-ipv6-address",
                                        "cond-display": "../next-hop-ipv6-address",
                                        "is-visible": "true",
                                        "edit-by": "LE",
                                        "type": "str"
                                    },
                                    "label": "qualified next hop ipv6 address"
                                },
                                {
                                    "data": {
                                        "pattern": {
                                            "range": [
                                                "0..65535"
                                            ]
                                        },
                                        "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/",
                                        "key": "priority",
                                        "is-visible": "true",
                                        "edit-by": "LE",
                                        "type": "int"
                                    },
                                    "label": "priority"
                                }
                            ]
                        }
                    ]
                },
                {
                    "label": "interface roles",
                    "data": {
                        "mergekey": "interface-role",
                        "parent": "/vnos/ucpe-settings/",
                        "key": "interface-roles",
                        "type": "list"
                    },
                    "interface-roles": {},
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
                                "type": "str"
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
                },
                {
                    "data": {
                        "parent": "/vnos/ucpe-settings/",
                        "edit-by": "LE",
                        "key": "description",
                        "is-visible": "true"
                    },
                    "label": "description"
                },
                {
                    "data": {
                        "pattern": {
                            "range": [
                                "0..65535"
                            ]
                        },
                        "parent": "/vnos/ucpe-settings/",
                        "key": "primary-vlan-id",
                        "is-visible": "true",
                        "edit-by": "LE+CUSTOMER",
                        "type": "int"
                    },
                    "label": "primary vlan id"
                }
             ]
        }
    ]
};

export const vnos = {
    'ucpe-settings': {
        'ucpe-host-name': '',
        'ucpe-host-name-alias': '',
        'customer-network-management-lan': {
            'ipv4-address-prefix': '',
            'ipv6-address-prefix': '',
            'interface': [],
            'customer-network-management-vlan-id': ''
        },
        'ipsec-nm-tunnel': {
            'ipsec-nm-tunnel-interfaces': [{
                'subinterface-name': '',
                'interface': '',
                'vlan-id-inner': '',
                'vlan-id-outer': '',
                'ipsec-tunnel-server-network-type': '',
                'next-hop-ipv4-address': '',
                'next-hop-ipv6-address': '',
                'qualified-next-hop-ipv4-address': '',
                'qualified-next-hop-ipv6-address': '',
                'priority': '100'
            }]
        },
        'interfaces': [{
            'interface': '',
            'interface-identifier': '',
            'trunk-type': '',
            'media-type': '',
            'ethernet-settings': {
                'media-speed': '1000',
                'duplex': 'AUTO'
            },
            'description': '',
            'primary-vlan-id': ''
        }]
    }
};

export const vnosAPIJSON = {

    "label": "UCPE settings",

    "children": [

        {

            "label": "ATT Host Name",

            "data": {

                "type": "str",

                "autopopulate": "../external-host-name",

                "pattern": {

                    "pattern": "(\\S.*(.*[\\r\\n]*.*)*.*\\S|\\S)"

                },

                "edit-by": "NONE",

                "key": "ucpe-host-name",

                "is-visible": "true",

                "parent": "/vnos/ucpe-settings/"

            }

        },

        {

            "label": "Customer-defined Host Name",

            "data": {

                "type": "str",

                "autopopulate": "../external-alias-host-name",

                "pattern": {

                    "pattern": "(\\S.*(.*[\\r\\n]*.*)*.*\\S|\\S)"

                },

                "edit-by": "LE+CUSTOMER",

                "key": "ucpe-host-name-alias",

                "is-visible": "true",

                "parent": "/vnos/ucpe-settings/"

            }

        },

        {

            "label": "customer-network-management-lan",

            "children": [

                {

                    "label": "ipv4-address-prefix",

                    "data": {

                        "type": "str",

                        "pattern": {

                            "pattern": "(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])/(([0-9])|([1-2][0-9])|(3[0-2]))"

                        },

                        "edit-by": "LE+CUSTOMER",

                        "key": "ipv4-address-prefix",

                        "is-visible": "true",

                        "parent": "/vnos/ucpe-settings/customer-network-management-lan/"

                    }

                },

                {

                    "label": "ipv6-address-prefix",

                    "data": {

                        "type": "str",

                        "pattern": {

                            "pattern": "((:|[0-9a-fA-F]{0,4}):)([0-9a-fA-F]{0,4}:){0,5}((([0-9a-fA-F]{0,4}:)?(:|[0-9a-fA-F]{0,4}))|(((25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])))(/(([0-9])|([0-9]{2})|(1[0-1][0-9])|(12[0-8])))"

                        },

                        "edit-by": "LE+CUSTOMER",

                        "key": "ipv6-address-prefix",

                        "is-visible": "true",

                        "parent": "/vnos/ucpe-settings/customer-network-management-lan/"

                    }

                },

                {

                    "label": "interface-role",

                    "data": {

                        "validate-type": "xpath",

                        "data-source": "../../interface-roles/interface-role",

                        "validate-info": "../../interfaces/interface-role = current()",

                        "is-visible": "true",

                        "edit-by": "LE+CUSTOMER",

                        "key": "interface-role",

                        "leafref": "interface-role"

                    }

                },

                {

                    "label": "customer-network-management-vlan-id",

                    "data": {

                        "type": "int",

                        "pattern": {

                            "range": [

                                "0..65535"

                            ]

                        },

                        "edit-by": "LE+CUSTOMER",

                        "key": "customer-network-management-vlan-id",

                        "is-visible": "true",

                        "parent": "/vnos/ucpe-settings/customer-network-management-lan/"

                    }

                }

            ],

            "data": {

                "type": "container",

                "parent": "/vnos/ucpe-settings/",

                "key": "customer-network-management-lan",

                "cond-mandatory": "../vnfs/external-managment-option = 'CUSTOMER'"

            }

        },

        {

            "label": "ipsec-nm-tunnel",

            "children": [

                {

                    "ipsec-nm-tunnel-interfaces": {},

                    "label": "ipsec-nm-tunnel-interfaces",

                    "children": [

                        {

                            "label": "subinterface-name",

                            "data": {

                                "type": "str",

                                "pattern": {

                                    "pattern": "(\\S.*(.*[\\r\\n]*.*)*.*\\S|\\S)"

                                },

                                "edit-by": "LE",

                                "key": "subinterface-name",

                                "is-visible": "true",

                                "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/"

                            }

                        },

                        {

                            "label": "Interface Role",

                            "data": {

                                "edit-by": "LE",

                                "key": "interface-role",

                                "is-visible": "true",

                                "leafref": "interface-role"

                            }

                        },

                        {

                            "label": "vlan-id-inner",

                            "data": {

                                "type": "int",

                                "autopopulate": "...pointer to service chaining context / port / and VLAN name ",

                                "pattern": {

                                    "range": [

                                        "0..65535"

                                    ]

                                },

                                "edit-by": "LE",

                                "key": "vlan-id-inner",

                                "is-visible": "true",

                                "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/"

                            }

                        },

                        {

                            "label": "vlan-id-outer",

                            "data": {

                                "type": "int",

                                "autopopulate": "...pointer to service chaining context / port / and VLAN name ",

                                "pattern": {

                                    "range": [

                                        "0..65535"

                                    ]

                                },

                                "edit-by": "LE",

                                "key": "vlan-id-outer",

                                "is-visible": "true",

                                "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/"

                            }

                        },

                        {

                            "label": "ipsec-tunnel-server-network-type",

                            "data": {

                                "type": "str",

                                "pattern": {

                                    "dict_key": {

                                        "PRIVATE": {},

                                        "BOTH": {},

                                        "PUBLIC": {}

                                    }

                                },

                                "edit-by": "LE",

                                "key": "ipsec-tunnel-server-network-type",

                                "is-visible": "true",

                                "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/"

                            }

                        },

                        {

                            "label": "ipv4-addresses",

                            "data": {

                                "cond-display": "../is-dynamic-assigned-ipv4-address = false"

                            }

                        },

                        {

                            "label": "ipv6-addresses",

                            "data": {}

                        },

                        {

                            "label": "dynamic-assigned-ipv6-address",

                            "children": [

                                {

                                    "label": "dynamic-assigned-ipv6-address-type",

                                    "data": {

                                        "type": "str",

                                        "choice": [

                                            "dynamic-or-static-ipv6",

                                            "dynamic"

                                        ],

                                        "key": "dynamic-assigned-ipv6-address-type",

                                        "pattern": {

                                            "dict_key": {

                                                "DHCPV6": {},

                                                "SLAAC": {}

                                            }

                                        },

                                        "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/dynamic-assigned-ipv6-address/"

                                    }

                                }

                            ],

                            "data": {

                                "type": "container",

                                "key": "dynamic-assigned-ipv6-address",

                                "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/"

                            }

                        },

                        {

                            "label": "next-hop-ipv4-address",

                            "data": {

                                "type": "str",

                                "pattern": {

                                    "pattern": "(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])/(([0-9])|([1-2][0-9])|(3[0-2]))"

                                },

                                "edit-by": "LE",

                                "cond-display": "../ipv4-addresses or ../dynamic-assigned-ipv4-address",

                                "key": "next-hop-ipv4-address",

                                "is-visible": "true",

                                "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/"

                            }

                        },

                        {

                            "label": "next-hop-ipv6-address",

                            "data": {

                                "type": "str",

                                "pattern": {

                                    "pattern": "((:|[0-9a-fA-F]{0,4}):)([0-9a-fA-F]{0,4}:){0,5}((([0-9a-fA-F]{0,4}:)?(:|[0-9a-fA-F]{0,4}))|(((25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])))(%[\\p{N}\\p{L}]+)?"

                                },

                                "edit-by": "LE",

                                "cond-display": "../ipv6-addresses or ../dynamic-assigned-ipv6-address",

                                "key": "next-hop-ipv6-address",

                                "is-visible": "true",

                                "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/"

                            }

                        },

                        {

                            "label": "qualified-next-hop-ipv4-address",

                            "data": {

                                "type": "str",

                                "pattern": {

                                    "pattern": "(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])/(([0-9])|([1-2][0-9])|(3[0-2]))"

                                },

                                "edit-by": "LE",

                                "cond-display": "../next-hop-ipv4-address",

                                "key": "qualified-next-hop-ipv4-address",

                                "is-visible": "true",

                                "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/"

                            }

                        },

                        {

                            "label": "qualified-next-hop-ipv6-address",

                            "data": {

                                "type": "str",

                                "pattern": {

                                    "pattern": "((:|[0-9a-fA-F]{0,4}):)([0-9a-fA-F]{0,4}:){0,5}((([0-9a-fA-F]{0,4}:)?(:|[0-9a-fA-F]{0,4}))|(((25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])))(/(([0-9])|([0-9]{2})|(1[0-1][0-9])|(12[0-8])))"

                                },

                                "edit-by": "LE",

                                "cond-display": "../next-hop-ipv6-address",

                                "key": "qualified-next-hop-ipv6-address",

                                "is-visible": "true",

                                "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/"

                            }

                        },

                        {

                            "label": "priority",

                            "data": {

                                "type": "int",

                                "pattern": {

                                    "range": [

                                        "0..65535"

                                    ]

                                },

                                "edit-by": "LE",

                                "key": "priority",

                                "is-visible": "true",

                                "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/ipsec-nm-tunnel-interfaces/"

                            }

                        }

                    ],

                    "data": {

                        "type": "list",

                        "validate-type": "xpath",

                        "validate-info": "not ../ipsec-nm-tunnel-interfaces[subinterface-name!=../subinterface-name and interface-role=current()/interface-role and vlan-id-inner=current()/vlan-id-inner ]/",

                        "mergekey": "subinterface-name",

                        "key": "ipsec-nm-tunnel-interfaces",

                        "parent": "/vnos/ucpe-settings/ipsec-nm-tunnel/"

                    }

                }

            ],

            "data": {

                "type": "container",

                "key": "ipsec-nm-tunnel",

                "parent": "/vnos/ucpe-settings/"

            }

        },

        {

            "interface-roles": {},

            "label": "interface-roles",

            "children": [

                {

                    "label": "interface-role",

                    "data": {

                        "type": "str",

                        "data-source": "/reference-data/physical-device-interface-roles[device-vendor-name=../../external-device-vendor and device-model=../../external-device-model]/wan-interface-roles/interface-roles/interface-role |\n/reference-data/physical-device-interface-roles[device-vendor-name=../../external-device-vendor and device-model=../../external-device-model]/lan-interface-roles/interface-role",

                        "validate-info": "current() = /reference-data/interface-roles[device-vendor-name=../../external-device-vendor and device-model=../../external-device-model]/wan-interface-roles/interface-role |\n/reference-data/physical-device-interface-roles[device-vendor-name=../../external-device-vendor and device-model=../../external-device-model]/lan-interface-roles/interface-role",

                        "pattern": {

                            "pattern": "WAN[0-9]+"

                        },

                        "edit-by": "LE+CUSTOMER",

                        "validate-type": "xpath",

                        "key": "interface-role",

                        "is-visible": "true",

                        "parent": "/vnos/ucpe-settings/interface-roles/"

                    }

                },

                {

                    "label": "interface-name",

                    "data": {

                        "type": "str",

                        "data-source": "/reference-data/physical-device-interface-identifiers[device-vendor-name=../../external-device-vendor and device-model=../../external-device-model]/interface-identifier/interface-identifier",

                        "validate-info": "current() = /reference-data/physical-device-interface-identifiers[\ndevice-vendor-name=../../external-device-vendor and device-model=../../external-device-model]/interface-identifier/interface-identifier and\nnot ../../interfaces[interface-role!=../interface-role]/interface-name = current()",

                        "pattern": {

                            "pattern": "Port[0-9]+"

                        },

                        "edit-by": "LE+CUSTOMER",

                        "validate-type": "xpath",

                        "key": "interface-name",

                        "is-visible": "true",

                        "parent": "/vnos/ucpe-settings/interface-roles/"

                    }

                },

                {

                    "label": "trunk-type",

                    "data": {

                        "type": "str",

                        "pattern": {

                            "dict_key": {

                                "ACCESS": {},

                                "TRUNK": {}

                            }

                        },

                        "edit-by": "LE+CUSTOMER",

                        "key": "trunk-type",

                        "is-visible": "true",

                        "parent": "/vnos/ucpe-settings/interface-roles/"

                    }

                },

                {

                    "label": "media-type",

                    "data": {

                        "type": "str",

                        "autopopulate": "/reference-data/physical-device-interface-identifiers[device-vendor-name=../../external-device-vendor and device-model=../../external-device-model]\n/interface-identifiers[interface-identifier='../interface-identifier']/media-type",

                        "pattern": {

                            "dict_key": {

                                "RJ45": {},

                                "SFP": {}

                            }

                        },

                        "edit-by": "NONE",

                        "key": "media-type",

                        "is-visible": "true",

                        "parent": "/vnos/ucpe-settings/interface-roles/"

                    }

                },

                {

                    "label": "ethernet-settings",

                    "children": [

                        {

                            "label": "media-speed",

                            "data": {

                                "type": "str",

                                "pattern": {

                                    "dict_key": {

                                        "10": {},

                                        "100": {},

                                        "1000": {}

                                    }

                                },

                                "edit-by": "LE+CUSTOMER",

                                "choice": [

                                    "rj45-sfp",

                                    "rj45"

                                ],

                                "key": "media-speed",

                                "is-visible": "true",

                                "parent": "/vnos/ucpe-settings/interface-roles/ethernet-settings/"

                            }

                        },

                        {

                            "label": "duplex",

                            "data": {

                                "type": "str",

                                "validate-type": "enum",

                                "validate-info": "FULL|AUTO",

                                "pattern": {

                                    "dict_key": {

                                        "HALF": {},

                                        "FULL": {},

                                        "AUTO": {}

                                    }

                                },

                                "edit-by": "LE+CUSTOMER",

                                "choice": [

                                    "rj45-sfp",

                                    "rj45"

                                ],

                                "key": "duplex",

                                "is-visible": "true",

                                "parent": "/vnos/ucpe-settings/interface-roles/ethernet-settings/"

                            }

                        }

                    ],

                    "data": {

                        "type": "container",

                        "key": "ethernet-settings",

                        "parent": "/vnos/ucpe-settings/interface-roles/"

                    }

                },

                {

                    "label": "sfp-settings",

                    "children": [

                        {

                            "label": "media-speed",

                            "data": {

                                "type": "str",

                                "pattern": {

                                    "dict_key": {

                                        "10": {},

                                        "100": {},

                                        "1000": {}

                                    }

                                },

                                "edit-by": "LE+CUSTOMER",

                                "choice": [

                                    "rj45-sfp",

                                    "sfp"

                                ],

                                "key": "media-speed",

                                "is-visible": "true",

                                "parent": "/vnos/ucpe-settings/interface-roles/sfp-settings/"

                            }

                        },

                        {

                            "label": "duplex",

                            "data": {

                                "type": "str",

                                "validate-type": "enum",

                                "validate-info": "FULL|AUTO",

                                "pattern": {

                                    "dict_key": {

                                        "HALF": {},

                                        "FULL": {},

                                        "AUTO": {}

                                    }

                                },

                                "edit-by": "LE+CUSTOMER",

                                "choice": [

                                    "rj45-sfp",

                                    "sfp"

                                ],

                                "key": "duplex",

                                "is-visible": "true",

                                "parent": "/vnos/ucpe-settings/interface-roles/sfp-settings/"

                            }

                        }

                    ],

                    "data": {

                        "type": "container",

                        "key": "sfp-settings",

                        "parent": "/vnos/ucpe-settings/interface-roles/"

                    }

                }

            ],

            "data": {

                "type": "list",

                "key": "interface-roles",

                "mergekey": "interface-role",

                "parent": "/vnos/ucpe-settings/"

            }

        },

        {

            "label": "description",

            "data": {

                "edit-by": "LE",

                "key": "description",

                "is-visible": "true"

            }

        },

        {

            "label": "primary-vlan-id",

            "data": {

                "type": "int",

                "pattern": {

                    "range": [

                        "0..65535"

                    ]

                },

                "edit-by": "LE+CUSTOMER",

                "key": "primary-vlan-id",

                "is-visible": "true",

                "parent": "/vnos/ucpe-settings/"

            }

        }

    ],

    "data": {

        "type": "container",

        "key": "ucpe-settings",

        "parent": "/vnos/"

    }

};







