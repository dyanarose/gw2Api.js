describe('Config', function() {
  var parameters;
   beforeEach(function() {
    gw2Api.config.defaultLang = 'en';
  });
   afterEach(function() {
    gw2Api.config.defaultLang = null;
  });
it('should format the url correctly with default lang', function(){
    var ep = gw2Api.endpoints.floors.get,
        params = ep.getParameters();
    params.continent = 1;
    params.ids = [0,1];
    params.page = 1;
    expect(ep.url(params)).toBe('https://api.guildwars2.com/v2/continents/1/floors?lang=en&page=1&ids=0,1');
  });

});
