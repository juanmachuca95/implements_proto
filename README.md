### Implementación de protos

### gRPC Web - Makefile to Javascript

```makefile
gen-grpc-web: 
	protoc -I=protos webuno.proto \
	--js_out=import_style=commonjs:generated \
	--grpc-web_out=import_style=commonjs,mode=grpcwebtext:generated

clean-grpc-web:
	rm -rf generated/*.js
```

### gRPC - Makefile to Golang
Para golang implement - es necesario la sentencia option ```go_package = "./generated";```

```makefile
gen-grpc-go:
	protoc -I=protos --go_out=. --go-grpc_out=. protos/proto.proto

clean-grpc-go:
	rm -rf generated/*.pb.go
```

### gRPC Gateway
Para implementar reverse proxy. HTTP+JSON interface para gRPC services. 

```makefile
gen-grpc-gateway:
	protoc -I . --grpc-gateway_out . \
    --grpc-gateway_opt logtostderr=true \
    --grpc-gateway_opt generate_unbound_methods=true \
    protos/protogo.proto

clean-grpc-gateway:
	rm -rf generated/*.gw.go
```
