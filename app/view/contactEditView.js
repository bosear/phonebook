Ext.define('phonebook.view.contactEditView', {
    extend: 'Ext.window.Window',
    alias: 'widget.contactEditView',

    title: 'Change Contact',
    layout: 'fit',
    autoShow: true,

    initComponent: function () {
        this.items = [
            {
                xtype: 'form',
                padding: '10',
                border: false,
                items: [
                    {
                        xtype: 'textfield',
                        name: 'firstName',
                        fieldLabel: 'First Name',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        xtype: 'textfield',
                        name: 'lastName',
                        fieldLabel: 'Last Name',
                        allowBlank: false,
                        msgTarget: 'side'
                    },
                    {
                        xtype: 'textfield',
                        name: 'phoneNumber',
                        fieldLabel: 'Phone Number',
                        allowBlank: false,
                        validator: function (v) {
                            return /^[0-9]{7,15}$/.test(v) ? true : 'Example: 89270000000';
                        }
                    },
                    {
                        xtype: 'textfield',
                        name: 'job',
                        fieldLabel: 'Job',
                        allowBlank: false
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});