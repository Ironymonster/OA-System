Ext.define('Admin.store.task.AllTaskStore', {
    extend: 'Ext.data.Store',
    alias: 'store.allTaskStore',       //1.Store取别名（reference）
    model: 'Admin.model.task.TaskModel',//2.设置model的全路径
  	proxy: {
		type: 'ajax',
		url: 'task/findByCondition.json',
		reader: {
			type:'json', 
			rootProperty: 'content',		//结果集名字的属性
			totalProperty: 'totalElements'	//一共多少条记录的属性
		},
		simpleSortMode: true
	},

	pageSize: 15,
	autoLoad: true,
	remoteSort: true,//全局排序
    sorters: {
        direction: 'DESC',
        property: 'createDate'
    }
});