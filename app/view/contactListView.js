Ext.define('phonebook.view.contactListView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.contactListView',
    title: 'Phone Book',
    store: 'contacts',

    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'contacts',
        dock: 'bottom',
        displayInfo: true,
        items: [
            {
                xtype: 'tbseparator'
            },
            {
                xtype: 'button',
                text: 'Add contact',
                action: 'add'
            },
            {
                xtype: 'tbseparator'
            },
            {
                xtype: 'button',
                text: 'Remove selected contact',
                action: 'remove'
            }
        ]
    }],

    initComponent: function () {

        this.columns = [
            {
                header: 'First Name',
                dataIndex: 'firstName',
                flex: 1
            },
            {
                header: 'Last Name',
                dataIndex: 'lastName',
                flex: 2
            },
            {
                header: 'Phone Number',
                dataIndex: 'phoneNumber',
                flex: 1
            },
            {
                header: 'Job',
                dataIndex: 'job',
                flex: 1
            }
        ];

        this.callParent(arguments);
    }
});