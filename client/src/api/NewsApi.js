/**
 * Infogalactic
 * Infogalactic news API
 *
 * OpenAPI spec version: 0.0.0
 * Contact: activedecay@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/News'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/News'));
  } else {
    // Browser globals (root is window)
    if (!root.Infogalactic) {
      root.Infogalactic = {};
    }
    root.Infogalactic.NewsApi = factory(root.Infogalactic.ApiClient, root.Infogalactic.News);
  }
}(this, function(ApiClient, News) {
  'use strict';

  /**
   * News service.
   * @module api/NewsApi
   * @version 0.0.0
   */

  /**
   * Constructs a new NewsApi. 
   * @alias module:api/NewsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createNews operation.
     * @callback module:api/NewsApi~createNewsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/News} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a news item and add it to the stage
     * @param {String} newsId News item ID to be updated
     * @param {module:model/News} body News item to add to the stage
     * @param {module:api/NewsApi~createNewsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/News}
     */
    this.createNews = function(newsId, body, callback) {
      var postBody = body;

      // verify the required parameter 'newsId' is set
      if (newsId == undefined || newsId == null) {
        throw new Error("Missing the required parameter 'newsId' when calling createNews");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling createNews");
      }


      var pathParams = {
        'newsId': newsId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['news_auth'];
      var contentTypes = ['application/json', 'application/xml'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = News;

      return this.apiClient.callApi(
        '/news/{newsId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createWithArray operation.
     * @callback module:api/NewsApi~createWithArrayCallback
     * @param {String} error Error message, if any.
     * @param {module:model/News} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates list of news items with given input array
     * @param {Array.<module:model/News>} body List of news item to create
     * @param {module:api/NewsApi~createWithArrayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/News}
     */
    this.createWithArray = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling createWithArray");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['news_auth'];
      var contentTypes = [];
      var accepts = ['application/json', 'application/xml'];
      var returnType = News;

      return this.apiClient.callApi(
        '/news/createWithArray', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteNews operation.
     * @callback module:api/NewsApi~deleteNewsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a news item
     * @param {String} newsId News item id to delete
     * @param {module:api/NewsApi~deleteNewsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteNews = function(newsId, callback) {
      var postBody = null;

      // verify the required parameter 'newsId' is set
      if (newsId == undefined || newsId == null) {
        throw new Error("Missing the required parameter 'newsId' when calling deleteNews");
      }


      var pathParams = {
        'newsId': newsId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['news_auth'];
      var contentTypes = [];
      var accepts = ['application/json', 'application/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/news/{newsId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the readNews operation.
     * @callback module:api/NewsApi~readNewsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/News>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read all the news items from the current history node
     * @param {module:api/NewsApi~readNewsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/News>}
     */
    this.readNews = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['news_auth'];
      var contentTypes = ['application/json', 'application/xml'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = [News];

      return this.apiClient.callApi(
        '/news', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the readNewsById operation.
     * @callback module:api/NewsApi~readNewsByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/News} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find news item by ID
     * Returns a single news item
     * @param {String} newsId ID of news item to return
     * @param {module:api/NewsApi~readNewsByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/News}
     */
    this.readNewsById = function(newsId, callback) {
      var postBody = null;

      // verify the required parameter 'newsId' is set
      if (newsId == undefined || newsId == null) {
        throw new Error("Missing the required parameter 'newsId' when calling readNewsById");
      }


      var pathParams = {
        'newsId': newsId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['news_auth'];
      var contentTypes = [];
      var accepts = ['application/json', 'application/xml'];
      var returnType = News;

      return this.apiClient.callApi(
        '/news/{newsId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateNews operation.
     * @callback module:api/NewsApi~updateNewsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/News} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing news item
     * @param {String} newsId News item ID to be updated
     * @param {module:model/News} body News item to be updated in the stage
     * @param {module:api/NewsApi~updateNewsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/News}
     */
    this.updateNews = function(newsId, body, callback) {
      var postBody = body;

      // verify the required parameter 'newsId' is set
      if (newsId == undefined || newsId == null) {
        throw new Error("Missing the required parameter 'newsId' when calling updateNews");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling updateNews");
      }


      var pathParams = {
        'newsId': newsId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['news_auth'];
      var contentTypes = ['application/json', 'application/xml'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = News;

      return this.apiClient.callApi(
        '/news/{newsId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadNewsImage operation.
     * @callback module:api/NewsApi~uploadNewsImageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Uploads an image for a news item
     * @param {String} newsId ID of pet to update
     * @param {Object} opts Optional parameters
     * @param {String} opts.additionalMetadata Additional data (dead code)
     * @param {File} opts.file file to upload
     * @param {module:api/NewsApi~uploadNewsImageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.uploadNewsImage = function(newsId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'newsId' is set
      if (newsId == undefined || newsId == null) {
        throw new Error("Missing the required parameter 'newsId' when calling uploadNewsImage");
      }


      var pathParams = {
        'newsId': newsId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'additionalMetadata': opts['additionalMetadata'],
        'file': opts['file']
      };

      var authNames = ['news_auth'];
      var contentTypes = ['multipart/form-data', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/news/{newsId}/uploadImage', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));