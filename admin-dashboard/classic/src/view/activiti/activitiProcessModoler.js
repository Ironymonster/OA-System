/* 
* @Author: xgd
* @Date:   2017-10-22 21:46:08
* @Last Modified by:   xgd
* @Last Modified time: 2017-10-22 22:30:38
*/

Ext.define('Admin.view.activiti.activitiProcessModoler', {        //1.�޸��ļ�·��
      extend: 'Ext.container.Container',    //2.�̳е��������
    //3.��д�̳���������ԣ�
    xtype: 'activitiProcessModoler',

	controller: 'activitiProcessModolerPanelViewController',
	
    viewModel : {
        type: 'activitiProcessModolerPanelViewModel'
    },

    layout:'fit',
    margin: '20 20 20 20',
    items: [{
        xtype: 'activitiProcessModolerPanel'
    }]
});
