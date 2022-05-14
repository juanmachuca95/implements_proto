/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./webuno_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.GrpcWebServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.GrpcWebServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.Something>}
 */
const methodDescriptor_GrpcWebService_GetSomething = new grpc.web.MethodDescriptor(
  '/GrpcWebService/GetSomething',
  grpc.web.MethodType.UNARY,
  proto.Empty,
  proto.Something,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Something.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Something)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Something>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GrpcWebServiceClient.prototype.getSomething =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/GrpcWebService/GetSomething',
      request,
      metadata || {},
      methodDescriptor_GrpcWebService_GetSomething,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Something>}
 *     Promise that resolves to the response
 */
proto.GrpcWebServicePromiseClient.prototype.getSomething =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/GrpcWebService/GetSomething',
      request,
      metadata || {},
      methodDescriptor_GrpcWebService_GetSomething);
};


module.exports = proto;

