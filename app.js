Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'phonebook',
    appFolder: 'app',

    controllers: [
        'mainController'
    ],

    launch: function() {
        Ext.create('Ext.container.Container', {
            renderTo: Ext.getBody(),
            margin: '10',
            flex: 1,
            layout: 'fit',
            items: [
                {
                    xtype: 'contactListView'
                }
            ]
        });
    }
});