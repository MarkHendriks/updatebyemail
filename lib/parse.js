// Email from name parser
parse = function(s) {
  var fullName = [];
  var regex = /(?:"([^"]+)")? ?<?(.*?@[^>,]+)>?,? ?/g;
  while(m=regex.exec(s)){
      fullName.push({name:m[1]});
  }
  return fullName;
}
