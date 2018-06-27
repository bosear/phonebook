Ext.define('phonebook.store.contacts', {
    extend: 'Ext.data.Store',
    model: 'phonebook.model.contact',
    autoLoad: true,
    proxy: {
        type: 'localstorage',
        id: 'phoneNumberApp'
    }

});