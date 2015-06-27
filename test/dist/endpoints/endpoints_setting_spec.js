describe('Endpoints', function() {
  it('should set endpoint list', function() {
    expect(gw2Api.endpoints).not.toBe(undefined);
    expect(gw2Api.endpoints).not.toBe(null);
  });

  it('should be able to retrieve account endoint', function() {
    var ep = gw2Api.endpoints.account.url;

    expect(ep).not.toBe(undefined);
    expect(ep).not.toBe(null);
    expect(ep.key).toBe('account.url');
    expect(ep.isAuthenticated).toBe(true);
    expect(ep.urlFormat).toBe('https://api.guildwars2.com/v2/account');
    expect(ep.paramType).toBe('CommonParams');
  });
});
