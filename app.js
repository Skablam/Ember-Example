var App = Ember.Application.create({ LOG_TRANSITIONS: true });

App.Router.map(function() {
  this.route("about", { path: "/aboutus" });
  this.resource("vehicles");
  this.resource("vehicle", {path:'/vehicle/:title'});
  this.resource("contacts", function() {
  this.resource("contact", {path:'/:name'}); });
});

App.IndexController = Ember.Controller.extend({
  productCount: 6,
  time: function() { return (new Date()).toDateString() }.property()
});

App.VehiclesRoute = Ember.Route.extend({
  model: function(params) {
    return App.VEHICLES;
  }
});

App.VehicleRoute = Ember.Route.extend({
  model: function(params) {
    return App.VEHICLES.findBy('title', params.title);
  }
});

App.ContactsRoute = Ember.Route.extend({
  model: function() {
    return App.CONTACTS;
  }
});

App.ContactRoute = Ember.Route.extend({
  model: function(params) {
    return App.CONTACTS.findBy('name', params.name);
  }
});

App.VEHICLES = [
  {title:'Porsche',
   description:'A black car'},
  {title:'Ferrari',
   description:'A red car'},
  {title:'Mini',
   description:'A small car'},
  {title:'Ford Van',
   description:'A white van'}
];

App.CONTACTS = [
  {name:'Jim',
   job:'Janitor'},
  {name:'Bob',
   job:'CEO'}
];
