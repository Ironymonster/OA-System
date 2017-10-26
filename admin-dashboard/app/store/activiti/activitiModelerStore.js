/* 
* @Author: xgd
* @Date:   2017-10-22 23:05:14
* @Last Modified by:   xgd
* @Last Modified time: 2017-10-22 23:15:55
*/

Ext.define('Admin.store.activiti.activitiModelerStore', {
    extend: 'Ext.data.Store',
    alias: 'store.activitiModelerStore',       //1.Storeȡ������reference��
    model: 'Admin.model.activiti.activitiModelerModel',//2.����model��ȫ·��
    proxy: {
        type: 'ajax',
        url: 'repository/models',
        reader: {
            type:'json', 
            rootProperty: 'data',        //��������ֵ�����
            totalProperty: 'total'  //һ����������¼������
        },
		extraParams:{
			size : 15
		},
        simpleSortMode: true
    },

    pageSize: 15,
    autoLoad: true,
    remoteSort: true,//ȫ������
    sorters: {
        direction: 'DESC',
        property: 'createTime'
    }
});
