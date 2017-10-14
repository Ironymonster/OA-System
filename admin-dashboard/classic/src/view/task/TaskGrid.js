﻿/**
*订单模块子视图
*/
Ext.define('Admin.view.task.TaskGrid', {		//1.修改文件路径
      extend: 'Ext.grid.Panel',					//2.继承的组件类型
	//3.重写继承组件的属性：
    xtype: 'taskGrid',
	title:'<b>日志记录</b>',
	//bind:'{taskLists}',
	id:'taskGrid',
	selModel: Ext.create('Ext.selection.CheckboxModel'),
	columns: [
		{text: '操作时间' ,sortable:true ,dataIndex:'createDate' ,width:150,
		 renderer: Ext.util.Format.dateRenderer('Y/m/d H:i:s')},
		{text: '操作类型'  ,sortable:true ,dataIndex:'operation'  ,width:80},
		{text: '操作人', sortable:true ,dataIndex:'userName' ,width:80},
		{text: '具体操作', sortable:true ,dataIndex:'content' ,flex:1}
	],	


	tbar: Ext.create('Ext.Toolbar', {
			id: 'taskCondition',
			items:[ {xtype:'tbtext',
				text:'操作人：'
			},{
				xtype:'textfield',
				width:100,
				itemsId:'userName'
				
			},{xtype:'tbtext',
				text:'操作类型：'
			},{
				xtype:'textfield',
				width:100,
				itemsId:'operation'
				
			},{xtype:'tbtext',
				text:'时间：'
			},{
				 xtype:'datefield',  
                    itemId:'beginDate',  
                    format:'Y-m-d',  
					value:'1972-01-01'
					
			
			},{xtype:'tbtext',
				text:'至：'
			},{
				xtype:'datefield',  
                    itemId:'endDate',  
                    format:'Y-m-d',  
					value:new Date(),
					listeners: {  
					focus: function(){
						var cc = Ext.getCmp('taskCondition').items.getAt(7).getValue();
						this.setMinValue(cc);
						}  	
					}
			},{
				text: '查找',
				handler:'taskGridFind'
			}]
	}),
	
	
	
	bbar: Ext.create('Ext.PagingToolbar', {
		bind:'{roleLists}',
		displayInfo: true,
		displayMsg: '第 {0} - {1}条， 共 {2}条',
		emptyMsg: "暂无数据",
	})
	
});