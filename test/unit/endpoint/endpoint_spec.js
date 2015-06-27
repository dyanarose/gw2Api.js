describe('Endpoint', function() {
  it('should set properties', function() {
    var ep = new Endpoint('account.get', 'account', true, 'CommonParams');

    expect(ep.key).toBe('account.get');
    expect(ep.isAuthenticated).toBe(true);
    expect(ep.urlFormat).toBe('https://api.guildwars2.com/v2/account');
    expect(ep.paramType).toBe('CommonParams');
  });

  it('should return the correct CommonParams object', function() {
    var ep = new Endpoint('account', 'account', true, 'CommonParams'),
      parameters = ep.getParameters();
    parameters.page = 1;

    expect(parameters.type).toBe('CommonParams');
  });

  it('should return the correct IdParams object', function() {
    var ep = new Endpoint('account', 'account', true, 'IdParams'),
      parameters = ep.getParameters();

    expect(parameters.type).toBe('IdParams');
  });

  it('should return the correct IdsParams object', function() {
    var ep = new Endpoint('account', 'account', true, 'IdsParams'),
      parameters = ep.getParameters();

    expect(parameters.type).toBe('IdsParams');
  });

  it('should return the correct QuantityParams object', function() {
    var ep = new Endpoint('account', 'account', true, 'QuantityParams'),
      parameters = ep.getParameters();

    expect(parameters.type).toBe('QuantityParams');
  });
  it('should return the correct CharacterParams object', function() {
    var ep = new Endpoint('account', 'account', true, 'CharacterParams'),
      parameters = ep.getParameters();

    expect(parameters.type).toBe('CharacterParams');
  });
});
