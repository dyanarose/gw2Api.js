describe('Ids Auth Parameter', function() {
  var parameters;
  beforeEach(function() {
    parameters = new gw2Api.params.IdsAuthParams();
  });

  function act(thisArg, func, args){
    try{
      func.apply(thisArg, args);
    } catch(e)
    {
      throw e.message;
    }
  }
  it('should be able to enumerate its parameter properties', function(){
    var prop;
    expect(parameters.hasOwnProperty('lang')).toBe(true);
    expect(parameters.hasOwnProperty('page')).toBe(true);
    expect(parameters.hasOwnProperty('pageSize')).toBe(true);
    expect(parameters.hasOwnProperty('id')).toBe(true);
    expect(parameters.hasOwnProperty('ids')).toBe(true);
    expect(parameters.hasOwnProperty('token')).toBe(true);
  });
  it('should throw when page and page size set to non numbers', function() {
    expect(function(){act(this, set, ['a']);}).toThrow('value must be a number');
    expect(function(){act(this, setSize, ['a']);}).toThrow('value must be a number');
    function set(value){
      parameters.page = value;
    }
    function setSize(value){
      parameters.pageSize = value;
    }
  });

  it('should be able to set ids to an array', function() {
    var ids = [1];
    parameters.ids = ids;
    expect(parameters.ids).toBe(ids);
  });
  it('should be able to set ids to null', function() {
      parameters.ids = null;
      expect(parameters.ids).toBe(null);

      parameters.ids = undefined;
      expect(parameters.ids).toBe(null);
  });

  it('should throw ids set to non string or number', function() {
    expect(function(){act(this, set, [function(){}]);}).toThrow('value must be an array, number, string or "all"');

    function set(value){
      parameters.ids = value;
    }
  });
  it('should return a formatted query string', function() {
    parameters.page = 1;
    parameters.ids = [2, 3];
    expect(parameters.getQueryString()).toBe('page=1&ids=2,3');
  });
});
