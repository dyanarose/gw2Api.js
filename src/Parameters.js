(function(){
  'use strict';
  //todo: set lang value check
  gw2Api.params = {
    CommonParams: CommonParams,
    IdParams: IdParams,
    CharacterParams: CharacterParams,
    IdsParams: IdsParams,
    QuantityParams: QuantityParams,
    FloorParams: FloorParams,
    RegionParams: RegionParams,
    MapParams: MapParams,
    SectorParams: SectorParams,
    PoiParams: PoiParams,
    TaskParams: TaskParams,
    RecipeSearchParams: RecipeSearchParams
  };
  function CommonParams(){
     var lang, pge, pgeSize, token;
     lang = gw2Api.config.defaultLang;
     this.type = 'CommonParams';
     Object.defineProperty(this, 'lang', {
       get: function (){return lang;},
       set: function (value){lang = value;}
     });

     Object.defineProperty(this, 'token', {
       get: function (){return token;},
       set: function (value){token = value;}
     });
     Object.defineProperty(this, 'page', {
       get: function () { return pge;},
       set: function (value) {pge = checkAndConvert(value);}
     });

     Object.defineProperty(this, 'pageSize', {
       get: function () { return pgeSize;},
       set: function (value) {pgeSize = checkAndConvert(value);}
     });
    function checkAndConvert(value){
      if(!utils.checks.notEmpty(value)){
        return null;
      }
      return utils.converters.toInt(value);
    }
  }
  CommonParams.prototype.url = function url(urlFormat, paramType){
    var qs;
    if(this.type === paramType){
      qs = this.getQueryString();
    }
    if(qs){
      return urlFormat + '?' + qs;
    }
    return urlFormat;
  };
  CommonParams.prototype.getQueryString = function getQueryString(){
    var params = [];
    if(this.lang){
      params.push('lang=' + this.lang);
    }
    if(this.page || this.page === 0){
      params.push('page=' + this.page);
    }
    if(this.pageSize){
      params.push('page_size=' + this.pageSize);
    }
    return params.join('&');
  };
  function IdParams(){
    var id;
    CommonParams.apply(this, arguments);
    this.type = 'IdParams';
    Object.defineProperty(this, 'id', {
      get: function () { return id;},
      set: function (value) {id = checkAndConvert(value);}
    });

    function checkAndConvert(value){
      if(!utils.checks.notEmpty(value)){
        return null;
      }
      if(utils.checks.isString(value) || utils.checks.isNumber(value)){
        return value;
      }
      throw new Error('value must be a number or string');
    }
  }
  IdParams.prototype.url = CommonParams.prototype.url;
  IdParams.prototype.getQueryString = function getQueryStringId(){
    var params = [];
    var pQueryString = CommonParams.prototype.getQueryString.call(this);
    if(pQueryString){
      params.push(pQueryString);
    }
    if(this.id || this.id === 0){
      params.push('id=' + this.id);
    }
    return params.join('&');
  };
  function CharacterParams(){
    var idset;
    IdParams.apply(this, arguments);
    this.type = 'CharacterParams';
  }
  CharacterParams.prototype.url = function characterParamsUrl(urlFormat, paramType){
    var url = CommonParams.prototype.url.call(this, urlFormat, paramType);
    url = utils.format(url, this.id);
    return url;
  };
  CharacterParams.prototype.getQueryString = function getQueryStringIds(){
    var params = [];
    var pQueryString = CommonParams.prototype.getQueryString.call(this);
    if(pQueryString){
      params.push(pQueryString);
    }
    return params.join('&');
  };
  //if both id and ids are set, the API only respects id
  function IdsParams(){
    var idset;
    IdParams.apply(this, arguments);
    this.type = 'IdsParams';
    this.add = add;
    Object.defineProperty(this, 'ids', {
      get: function () { return idset;},
      set: function (value) {idset = getValueAsArray(value);}
    });

    //if array, set, if string split on comma to form array
    //else store value as array;
    function getValueAsArray(value){
      if(!value && value !== 0){
        return null;
      }
      if(utils.checks.isArray(value)){
        return value;
      } else if(utils.checks.isString(value)){
        return value.split(',');
      } else if(utils.checks.isNumber(value)){
        return [value];
      }
      throw new Error('value must be an array, number, string or "all"');
    }
    function add(value){
      var valSet = getValueAsArray(value);
      if(!valSet)
      {
        return;
      }
      if(idset){
        idset.concat(valSet);
      } else {
        idset = valSet;
      }
    }
  }
  IdsParams.prototype.url = IdParams.prototype.url;
  IdsParams.prototype.getQueryString = function getQueryStringIds(){
    var params = [];
    var pQueryString = IdParams.prototype.getQueryString.call(this);
    if(pQueryString){
      params.push(pQueryString);
    }
    if(!this.ids || !this.ids.length){
      return params.join('&');
    }
    params.push('ids=' + this.ids.join(','));
    return params.join('&');
  };
  function QuantityParams(){
    var iden;
    CommonParams.apply(this, arguments);
    this.type = 'QuantityParams';
    Object.defineProperty(this, 'quantity', {
      get: function () { return iden;},
      set: function (value) {iden = checkAndConvert(value);}
    });
    //todo what's going on here?
    //if it's not a string it's converting to int? like it's an array or function
    //or number?
    function checkAndConvert(value){
      if(!utils.checks.notEmpty(value)){
        return null;
      }
      if(utils.checks.isString(value)){
        return value;
      }
      return utils.converters.toInt(value);
    }
  }
  QuantityParams.prototype.url = IdsParams.prototype.url;
  QuantityParams.prototype.getQueryString = function getQueryStringQuantity(){
    var params = [],
      pQueryString = CommonParams.prototype.getQueryString.call(this);
    if(pQueryString){
      params.push(pQueryString);
    }
    if(this.quantity){
      params.push('quantity=' + this.quantity);
    }
    return params.join('&');
  };
  function FloorParams(){
    var continent;
    IdsParams.apply(this, arguments);

    this.type = 'FloorParams';
    Object.defineProperty(this, 'continent', {
      get: function () { return continent;},
      set: function (value) {continent = checkAndConvert(value);}
    });

    function checkAndConvert(value){
      if(!utils.checks.notEmpty(value)){
        return null;
      }
      if(utils.checks.isString(value)){
        return value;
      }
      return utils.converters.toInt(value);
    }
  }
  FloorParams.prototype.url = function floorParamsUrl(urlFormat, paramType){
    var url = IdsParams.prototype.url.call(this, urlFormat, paramType);
    url = utils.format(url, this.continent);
    return url;
  };
  FloorParams.prototype.getQueryString = function getQueryStringIds(){
    var params = [];
    var pQueryString = IdsParams.prototype.getQueryString.call(this);
    if(pQueryString){
      params.push(pQueryString);
    }
    return params.join('&');
  };
  function RegionParams(){
    var floor;
    FloorParams.apply(this, arguments);

    this.type = 'RegionParams';
    Object.defineProperty(this, 'floor', {
      get: function () { return floor;},
      set: function (value) {floor = checkAndConvert(value);}
    });

    function checkAndConvert(value){
      if(!utils.checks.notEmpty(value)){
        return null;
      }
      if(utils.checks.isString(value)){
        return value;
      }
      return utils.converters.toInt(value);
    }
  }
  RegionParams.prototype.url = function regionParamsUrl(urlFormat, paramType){
    var url = IdsParams.prototype.url.call(this, urlFormat, paramType);
    url = utils.format(url, this.continent, this.floor);
    return url;
  };
  RegionParams.prototype.getQueryString = FloorParams.prototype.getQueryString;
  function MapParams(){
    var region;
    RegionParams.apply(this, arguments);

    this.type = 'MapParams';
    Object.defineProperty(this, 'region', {
      get: function () { return region;},
      set: function (value) {region = checkAndConvert(value);}
    });

    function checkAndConvert(value){
      if(!utils.checks.notEmpty(value)){
        return null;
      }
      if(utils.checks.isString(value)){
        return value;
      }
      return utils.converters.toInt(value);
    }
  }
  MapParams.prototype.url = function mapParamsUrl(urlFormat, paramType){
    var url = IdsParams.prototype.url.call(this, urlFormat, paramType);
    url = utils.format(url, this.continent, this.floor, this.region);
    return url;
  };
  MapParams.prototype.getQueryString = RegionParams.prototype.getQueryString;
  function SectorParams(){
    var map;
    MapParams.apply(this, arguments);

    this.type = 'SectorParams';
    Object.defineProperty(this, 'map', {
      get: function () { return map;},
      set: function (value) {map = checkAndConvert(value);}
    });

    function checkAndConvert(value){
      if(!utils.checks.notEmpty(value)){
        return null;
      }
      if(utils.checks.isString(value)){
        return value;
      }
      return utils.converters.toInt(value);
    }
  }
  SectorParams.prototype.url = function sectorParamsUrl(urlFormat, paramType){
    var url = IdsParams.prototype.url.call(this, urlFormat, paramType);
    url = utils.format(url, this.continent, this.floor, this.region, this.map);
    return url;
  };
  SectorParams.prototype.getQueryString = MapParams.prototype.getQueryString;
  function PoiParams(){
    SectorParams.apply(this, arguments);

    this.type = 'PoiParams';
  }
  PoiParams.prototype.url = SectorParams.prototype.url;
  PoiParams.prototype.getQueryString = SectorParams.prototype.getQueryString;
  function TaskParams(){
    SectorParams.apply(this, arguments);

    this.type = 'TaskParams';
  }
  TaskParams.prototype.url = SectorParams.prototype.url;
  TaskParams.prototype.getQueryString = SectorParams.prototype.getQueryString;
  function RecipeSearchParams(){
    var output, input;
    CommonParams.apply(this, arguments);
    this.type = 'RecipeSearchParams';
    //input and output are mutually exclusive
    Object.defineProperty(this, 'output', {
      get: function () { return output;},
      set: function (value) {output = setOutput(value);}
    });
    Object.defineProperty(this, 'input', {
      get: function () { return input;},
      set: function (value) {input = setInput(value);}
    });
    function setOutput(value){
      if(value && value !== 0){
        input = null;
      }
      return checkAndConvert(value);
    }
    function setInput(value){
      if(value && value !== 0){
        output = null;
      }
      return checkAndConvert(value);
    }
    //todo what's going on here?
    //if it's not a string it's converting to int? like it's an array or function
    //or number?
    function checkAndConvert(value){
      if(!utils.checks.notEmpty(value)){
        return null;
      }
      if(utils.checks.isString(value)){
        return value;
      }
      return utils.converters.toInt(value);
    }
  }
  RecipeSearchParams.prototype.url = CommonParams.prototype.url;
  RecipeSearchParams.prototype.getQueryString = function getQueryStringRecipeSearch(){
    var params = [],
      pQueryString = CommonParams.prototype.getQueryString.call(this);
    if(pQueryString){
      params.push(pQueryString);
    }
    if(this.input){
      params.push('input=' + this.input);
    } else if(this.output){
      params.push('output=' + this.output);
    }
    return params.join('&');
  };
}());
