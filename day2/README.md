# serverless framework CLI options

### config credentials

**serverless config credentials --provider provider --key key --secret secret --profile custom-profile --overwrite**

--provider or -p represents provider like AWS,gcp,azure 
--key or -k represents aws_access_key_id 
--secret or -s represents aws_secret_access_key 
--profile or -n represents AWS profile to consider to that session
--overwrite will help in updating access and secret key  

### create 

**serverless create --template aws-nodejs --name name**

For creating services which include functions,events,resources and plugins in the current directory
shorthand: -n

**serverless create --template aws-nodejs --path myService**

For creating service in new path
shorthand: -t

**serverless create --template-url https://github.com/serverless/serverless/tree/master/lib/plugins/create/templates/aws-nodejs --path myService**

creating service in new path using template
shorthand: -u

** serverless create --template-path path/to/my/template/folder --path new --name newservice**

For creating a template in new location with new name by taking another template in local system

** serverless create plugin**

For creating scaffolding for hello world plugin

### install

** serverless install --url https://github.com/some/service --name somename**

Installs a service from a GitHub URL in the named direcotry
--url or -u for locating service in github
--name or -n for service name to create

### package

** serverless package **

To package and store the infra in local directory without deploying.

- --stage or -s The stage in your service that you want to deploy to.
- --region or -r The region in that stage that you want to deploy to.
- --package or -p path to the custom packaging directory you want.
