describe('Common Parameter', function() {
  var parameters;
  beforeEach(function() {
    parameters = new gw2Api.params.CommonParams();
  });

  function act(thisArg, func, args){
    try{
      func.apply(thisArg, args);
    } catch(e)
    {
      throw e.message;
    }
  }
  it('should be able to retrieve common values', function() {
    var page = 1, page_size = 2, lang = 'en'
    parameters.page = page;
    parameters.pageSize = page_size;
    parameters.lang = lang;

    expect(parameters.page).toBe(page);
    expect(parameters.pageSize).toBe(page_size);
    expect(parameters.lang).toBe(lang);
  });

  it('should be able to set page to a string', function() {
    var page = '1';
    parameters.page = page;
    expect(parameters.page).toBe(1);
  });
  it('should be able to set page size to a string', function() {
    var page_size = '1';
    parameters.pageSize = page_size;
    expect(parameters.pageSize).toBe(1);
  });
  it('should allow an empty value for page to be set', function(){
    parameters.page = '';
    expect(parameters.page).toBe(null);
    parameters.page = null;
    expect(parameters.page).toBe(null);
    parameters.page = undefined;
    expect(parameters.page).toBe(null);
  });
  it('should allow an empty value for page size to be set', function(){
    parameters.pageSize = '';
    expect(parameters.pageSize).toBe(null);
    parameters.pageSize = null;
    expect(parameters.pageSize).toBe(null);
    parameters.pageSize = undefined;
    expect(parameters.pageSize).toBe(null);
  });
  it('should throw an error if trying to set page size to a non number', function() {
    expect(function(){act(this, set, ['a']);}).toThrow('value must be a number');

    function set(value){
      parameters.pageSize = value;
    }
  });
  it('should throw an error if trying to set page to a non number', function() {
    expect(function(){act(this, set, ['a']);}).toThrow('value must be a number');

    function set(value){
      parameters.page = value;
    }
  });
  it('should return a formatted query string', function() {
    parameters.page = 1;
    expect(parameters.getQueryString()).toBe('page=1');
  });
});
