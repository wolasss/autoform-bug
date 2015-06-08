if(Meteor.isClient) {


AutoForm.addInputType("test", {
  template: "test",
  valueOut: function () {
    return {one: 1, two: "2", three: "test"};
  }
});

Schema = new SimpleSchema({
    testField: {
        type: Object,
        autoform: {
            type: "test"
        }
    },
    name:{
        type:String,
        label:'Name'
    }
});

AutoForm.hooks({
  'testId': {
    onSubmit: function (operation, result, template) {
      console.log("submit", operation, result, template);
      this.done();

      return false;
    },

    onError: function(operation, error, template) {
      console.log(operation, error, template);

      return false;

    }
  }
});

}