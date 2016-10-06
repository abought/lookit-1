import Ember from 'ember';

export default Ember.Component.extend({
    session: Ember.inject.service('session'),
    sessionAccount: Ember.inject.service('session-account'),
    // TODO: Check the meaning of the name field. Is it still being used at all?
    accountName: Ember.computed.or('sessionAccount.account.name', 'sessionAccount.account.username'),
    actions: {
        logout() {
            Ember.getOwner(this).lookup('controller:application').send('logout');
        }
    }
});
