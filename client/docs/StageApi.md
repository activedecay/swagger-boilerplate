# Infogalactic.StageApi

All URIs are relative to *https://virtserver.swaggerhub.com/activedecay/infogalactic-news/0.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pushHistoryNode**](StageApi.md#pushHistoryNode) | **POST** /stage/save | Place a new node in the history with the contents of the current stage
[**readStage**](StageApi.md#readStage) | **GET** /stage | Returns news items in the stage


<a name="pushHistoryNode"></a>
# **pushHistoryNode**
> pushHistoryNode()

Place a new node in the history with the contents of the current stage

### Example
```javascript
var Infogalactic = require('infogalactic');
var defaultClient = Infogalactic.ApiClient.default;

// Configure OAuth2 access token for authorization: news_auth
var news_auth = defaultClient.authentications['news_auth'];
news_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Infogalactic.StageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pushHistoryNode(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[news_auth](../README.md#news_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="readStage"></a>
# **readStage**
> [News] readStage()

Returns news items in the stage

Production quality phase check before finalizing release; inspect staged changes before committing to history.

### Example
```javascript
var Infogalactic = require('infogalactic');
var defaultClient = Infogalactic.ApiClient.default;

// Configure OAuth2 access token for authorization: news_auth
var news_auth = defaultClient.authentications['news_auth'];
news_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Infogalactic.StageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readStage(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[News]**](News.md)

### Authorization

[news_auth](../README.md#news_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

