### Implementación de protos

#### gRPC Web - Makefile to Javascript

```makefile
gen-web: 
    protoc -I=protos webuno.proto \
    --js_out=import_style=commonjs:generated \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:generated

clean-gen-web:
    rm -rf generated/*
```

#### gRPC - Makefile to Golang
Para golang implement - es necesario la sentencia option ```go_package = "./generated";```

```makefile
gen-grpc-go:
	protoc -I=protos --go_out=. --go-grpc_out=. protos/proto.proto
clean-grpc-go:
	rm -rf generatedgo/*
```


