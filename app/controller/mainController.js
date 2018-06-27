Ext.define('phonebook.controller.mainController', {
    extend: 'Ext.app.Controller',

    stores: ['contacts'],
    models: ['contact'],
    views: ['contactListView', 'contactEditView'],

    refs: [
        {
            ref: 'contactListView',
            selector: 'contactListView'
        }
    ],

    init: function () {
        this.control({
            'contactListView': {
                itemdblclick: this.editItem
            },
            'contactListView button[action=add]': {
                click: this.addItem
            },
            'contactListView button[action=remove]': {
                click: this.removeItem
            },
            'contactEditView button[action=save]': {
                click: this.updateItem
            }
        });
    },

    editItem: function (grid, record) {
        var view = Ext.widget('contactEditView');
        view.down('form').loadRecord(record);
    },

    updateItem: function (button) {
        var win = button.up('window');
        var form = win.down('form').getForm();

        if (form.isValid()) {
            var record = form.getRecord();
            var values = form.getValues();

            if (!record) {
                var newRecord = new phonebook.model.contact(values);
                this.getContactsStore().add(newRecord);
            } else {
                record.set(values);
            }

            win.close();
            this.getContactsStore().sync();
        }
    },

    addItem: function (button) {
        var view = Ext.widget('contactEditView');
    },

    removeItem: function () {
        var self = this;
        var grid = self.getContactListView();
        var store = grid.getStore();
        var selectedRows = grid.getSelectionModel().getSelection();

        if (selectedRows.length) {
            Ext.Msg.confirm('Remove Record', 'Are you sure?', function (answer) {
                if (answer == 'yes') {
                    store.remove(selectedRows);
                    store.sync();
                }
            });
        } else {
            Ext.Msg.alert('Status', 'Please select one record to delete!');
        }
    }
});