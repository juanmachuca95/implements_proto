gen-web: 
	protoc -I=protos webuno.proto \
  --js_out=import_style=commonjs:generated \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:generated

clean-gen-web:
	rm -rf generated/*

# gRPC Golang
gen-grpc-go:
	protoc -I=protos --go_out=. --go-grpc_out=. protos/protogo.proto

