describe('Auth Parameter', function() {
  var parameters;
  beforeEach(function() {
    parameters = new gw2Api.params.AuthParams();
  });
  it('should be able to enumerate its parameter properties', function(){
    var prop;
    expect(parameters.hasOwnProperty('lang')).toBe(true);
    expect(parameters.hasOwnProperty('token')).toBe(true);
    expect(parameters.hasOwnProperty('page')).toBe(true);
    expect(parameters.hasOwnProperty('pageSize')).toBe(true);
  });

  it('should be able to retrieve values', function() {
    var page = 1, page_size = 2, lang = 'en', token = 'imatoken';
    parameters.page = page;
    parameters.pageSize = page_size;
    parameters.lang = lang;
    parameters.token = token;

    expect(parameters.page).toBe(page);
    expect(parameters.pageSize).toBe(page_size);
    expect(parameters.lang).toBe(lang);
    expect(parameters.token).toBe(token);
  });
});
