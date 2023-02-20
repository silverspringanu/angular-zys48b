import { Component, ViewEncapsulation, Inject } from '@angular/core';

/**
 * TreeView Component with Icons
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
  public hierarchicalData: Object[] = [
    {
        nodeId: '01',
        nodeText: 'Group_Inc_JNL',
        icon: 'folder',
        nodeChild: [{ nodeId: '01-01', nodeText: 'JNL_BHLLC', icon: 'folder' },
                    { nodeId: '01-02', nodeText: 'GHO_Cent_Comp', icon: 'folder',
                
                                nodeChild: [
                                    {
                                        nodeId: '01-02-01',
                                        nodeText: 'GHO_Cent_ELM_LM',
                                        icon: 'folder',
                                        // expanded: true,
                                        nodeChild: [
                                            {
                                            nodeId: '01-02-02',
                                            nodeText: 'GHO_Furnival_LM',
                                            icon: 'folder'
                                            
                                            },
                                            {
                                            nodeId: '01-02-03',
                                            nodeText: 'GHO_PCHL_LM',
                                            icon: 'folder'
                                            },
                                            {
                                            nodeId: '01-02-04',
                                            nodeText: 'GHO_PGDS_One_LM',
                                            icon: 'folder'
                                            
                                            },
                                            {
                                            nodeId: '01-02-05',
                                            nodeText: 'GHO_PGHL_LM',
                                            icon: 'folder'
                                            },
                                            {
                                            nodeId: '01-02-06',
                                            nodeText: 'GHO_PHL_LM',
                                            icon: 'folder'
                                            
                                            },
                                        ]
                                    },   
                                      
                                    
                                
                                    {
                                    nodeId: '01-03',
                                    nodeText: 'GHO_PLC_LM',
                                    icon: 'folder',
                                    nodeChild: [
                                    { 
                                    nodeId: '01-03-01',
                                    nodeText: 'GHO_PLC_Debt_LM',
                                    icon: 'folder' 
                                    },
                                    { 
                                        nodeId: '01-03-02',
                                        nodeText: 'GHO_PLC_Inf_LM',
                                        icon: 'folder' 
                                        },

                                    {
                                        nodeId: '01-03-03',
                                        nodeText: 'GHO_PLC_Oth_LM',
                                        icon: 'folder'
                                
                                    },
                                    ]

                                },
                                {
                                    nodeId: '01-04',
                                    nodeText: 'GHO_PSL_LM',
                                    icon: 'folder'

                                },
                            ]
                        },
                    ]
                 },
                          
    
                {
                    nodeId: '02',
                    nodeText: 'Group_ELM_LM',
                    icon: 'folder',
                    nodeChild: [
                            {   nodeId: '02-01', 
                                nodeText: 'GHO_PUSL_LM',
                                icon: 'folder'
                            },
                
                        ]
                },
                {
                nodeId: '03',
                nodeText: 'PCA',
                icon: 'folder',
                
                },
                {
                    nodeId: '04',
                    nodeText: 'test',
                    icon: 'folder',
                    
                }  
    ]


  public field: Object = {
    dataSource: this.hierarchicalData,
    id: 'nodeId',
    text: 'nodeText',
    child: 'nodeChild',
    iconCss: 'icon',
    imageUrl: 'image'
  }
  // Load icons for TreeView
  constructor() {}
}
