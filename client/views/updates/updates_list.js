Template.updatesList.helpers({
	// Group updates by day
	days: function() {
	  var _updates = Updates.find({},{sort: {time: -1}}).fetch();
	  var _datesStrings = _.uniq(Updates.find({}, {
	        sort: {time: -1}, fields: {time: true}
	    }).fetch().map(function(x) {
	        return moment(x.time).format('dddd, MMMM D, YYYY');
	    }), true);
	  
	  var _dates = [];
	  _.each(_datesStrings, function(date){
	    var _obj = {}
	    _obj.day = date
	    var _start = moment(date, 'dddd, MMMM D, YYYY').startOf('day').unix() * 1000;
	    var _end = moment(date, 'dddd, MMMM D, YYYY').endOf('day').unix() * 1000;
	    var _query = {
	      time:{
	        $gte: _start,
	        $lt: _end
	      }
	    }
	    var _updates = Updates.find(_query).fetch();
	    _obj.updates = _updates
	    _dates.push(_obj)
	  })
	  
	  return _dates
	}
});