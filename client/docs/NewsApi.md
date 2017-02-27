# Infogalactic.NewsApi

All URIs are relative to *https://virtserver.swaggerhub.com/activedecay/infogalactic-news/0.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNews**](NewsApi.md#createNews) | **POST** /news/{newsId} | Create a news item and add it to the stage
[**createWithArray**](NewsApi.md#createWithArray) | **POST** /news/createWithArray | Creates list of news items with given input array
[**deleteNews**](NewsApi.md#deleteNews) | **DELETE** /news/{newsId} | Deletes a news item
[**readNews**](NewsApi.md#readNews) | **GET** /news | Read all the news items from the current history node
[**readNewsById**](NewsApi.md#readNewsById) | **GET** /news/{newsId} | Find news item by ID
[**updateNews**](NewsApi.md#updateNews) | **PUT** /news/{newsId} | Update an existing news item
[**uploadNewsImage**](NewsApi.md#uploadNewsImage) | **POST** /news/{newsId}/uploadImage | Uploads an image for a news item


<a name="createNews"></a>
# **createNews**
> News createNews(newsId, body)

Create a news item and add it to the stage

### Example
```javascript
var Infogalactic = require('infogalactic');
var defaultClient = Infogalactic.ApiClient.default;

// Configure OAuth2 access token for authorization: news_auth
var news_auth = defaultClient.authentications['news_auth'];
news_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Infogalactic.NewsApi();

var newsId = "newsId_example"; // String | News item ID to be updated

var body = new Infogalactic.News(); // News | News item to add to the stage


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNews(newsId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newsId** | **String**| News item ID to be updated | 
 **body** | [**News**](News.md)| News item to add to the stage | 

### Return type

[**News**](News.md)

### Authorization

[news_auth](../README.md#news_auth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="createWithArray"></a>
# **createWithArray**
> News createWithArray(body)

Creates list of news items with given input array

### Example
```javascript
var Infogalactic = require('infogalactic');
var defaultClient = Infogalactic.ApiClient.default;

// Configure OAuth2 access token for authorization: news_auth
var news_auth = defaultClient.authentications['news_auth'];
news_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Infogalactic.NewsApi();

var body = [new Infogalactic.News()]; // [News] | List of news item to create


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createWithArray(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[News]**](News.md)| List of news item to create | 

### Return type

[**News**](News.md)

### Authorization

[news_auth](../README.md#news_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="deleteNews"></a>
# **deleteNews**
> deleteNews(newsId)

Deletes a news item

### Example
```javascript
var Infogalactic = require('infogalactic');
var defaultClient = Infogalactic.ApiClient.default;

// Configure OAuth2 access token for authorization: news_auth
var news_auth = defaultClient.authentications['news_auth'];
news_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Infogalactic.NewsApi();

var newsId = "newsId_example"; // String | News item id to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNews(newsId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newsId** | **String**| News item id to delete | 

### Return type

null (empty response body)

### Authorization

[news_auth](../README.md#news_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="readNews"></a>
# **readNews**
> [News] readNews()

Read all the news items from the current history node

### Example
```javascript
var Infogalactic = require('infogalactic');
var defaultClient = Infogalactic.ApiClient.default;

// Configure OAuth2 access token for authorization: news_auth
var news_auth = defaultClient.authentications['news_auth'];
news_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Infogalactic.NewsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readNews(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[News]**](News.md)

### Authorization

[news_auth](../README.md#news_auth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="readNewsById"></a>
# **readNewsById**
> News readNewsById(newsId)

Find news item by ID

Returns a single news item

### Example
```javascript
var Infogalactic = require('infogalactic');
var defaultClient = Infogalactic.ApiClient.default;

// Configure OAuth2 access token for authorization: news_auth
var news_auth = defaultClient.authentications['news_auth'];
news_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Infogalactic.NewsApi();

var newsId = "newsId_example"; // String | ID of news item to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readNewsById(newsId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newsId** | **String**| ID of news item to return | 

### Return type

[**News**](News.md)

### Authorization

[news_auth](../README.md#news_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="updateNews"></a>
# **updateNews**
> News updateNews(newsId, body)

Update an existing news item

### Example
```javascript
var Infogalactic = require('infogalactic');
var defaultClient = Infogalactic.ApiClient.default;

// Configure OAuth2 access token for authorization: news_auth
var news_auth = defaultClient.authentications['news_auth'];
news_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Infogalactic.NewsApi();

var newsId = "newsId_example"; // String | News item ID to be updated

var body = new Infogalactic.News(); // News | News item to be updated in the stage


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNews(newsId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newsId** | **String**| News item ID to be updated | 
 **body** | [**News**](News.md)| News item to be updated in the stage | 

### Return type

[**News**](News.md)

### Authorization

[news_auth](../README.md#news_auth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="uploadNewsImage"></a>
# **uploadNewsImage**
> uploadNewsImage(newsId, opts)

Uploads an image for a news item

### Example
```javascript
var Infogalactic = require('infogalactic');
var defaultClient = Infogalactic.ApiClient.default;

// Configure OAuth2 access token for authorization: news_auth
var news_auth = defaultClient.authentications['news_auth'];
news_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Infogalactic.NewsApi();

var newsId = "newsId_example"; // String | ID of pet to update

var opts = { 
  'additionalMetadata': "additionalMetadata_example", // String | Additional data (dead code)
  'file': "/path/to/file.txt" // File | file to upload
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.uploadNewsImage(newsId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newsId** | **String**| ID of pet to update | 
 **additionalMetadata** | **String**| Additional data (dead code) | [optional] 
 **file** | **File**| file to upload | [optional] 

### Return type

null (empty response body)

### Authorization

[news_auth](../README.md#news_auth)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/x-www-form-urlencoded
 - **Accept**: application/json

