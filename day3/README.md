# Using Iopipe and Serverless platform's dashboard

From today will include the IOpipe and serverless framework dashboard.

### IOpipe

Iopipe is used for 
- Realtime monitoring of functions
- To generate alerts
- To get metrics
- Error aggregation
- profiling
- Tracing
- searching the errors and cold starts

### serverless framework dashboard

It helps in

- Architecture Visualization
- Easy Logs
- User Access Control
- Application Metrics
- Streaming Events
- Audit logs


## IOpipe integration into lambda functions

IOpipe will send data to their serverless in near real time as they won't be depending on 
cloudwatch logs.

visit Iopipe.com and register for startup plan

#### It will ask for Team and project name.

Here Team name represents different teams operating the bussiness like
( orders,checkout,profile teams in ecommerce)
Then Project represents the logical group of functions

Once Done U can generate the TOKEN for specific project.

We can integrate iopipe two ways.
For both methods we need to install iopipe module

`npm install @iopipe/iopipe`

1. use the library in every lambda function with TOKEN
    ```
    // instantiate the iopipe library
var iopipe = require('@iopipe/iopipe')({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMzE5Y2VhMy1lMjg0LTRkN2EtYTNkNi0zMDZkZDhhMGZjZWIiLCJqdGkiOiI0NWM4OWZmYS04Y2YyLTQ1NGUtOWI4OS0zNzY3YTM4NTI1NDgiLCJpYXQiOjE1MzQ5MTcxMTQsImlzcyI6Imh0dHBzOi8vaW9waXBlLmNvbSIsImF1ZCI6Imh0dHBzOi8vaW9waXBlLmNvbSxodHRwczovL21ldHJpY3MtYXBpLmlvcGlwZS5jb20vZXZlbnQvLGh0dHBzOi8vZ3JhcGhxbC5pb3BpcGUuY29tIn0.1GgVmZ5ffsD_VL9tp5K5uuWCBwH8hJmsSColqvdpqak" });

// wrap your handler with iopipe
exports.handler = iopipe(
  function (event, context) {
    // run your code here normally
    context.succeed('This is my serverless function!');
  }
);
```
    
2. download serverless framework IOpipe plugin and use that plugin serverless.yml

  `npm install serverless-plugin-iopipe --save-dev`
    - Adding plugin 
    ```
    plugins:
  - serverless-plugin-iopipe
  ```
    - Exporting token
    ```
    environment:
  IOPIPE_TOKEN: ${env:IOPIPE_TOKEN}
  ```
  
Once done we can see the function invocation in Iopipe dashboard.


## serverless framework dashboard integration

register with dashboard.serverless.com and select username and tenent.

create application [application is collection of services]

U can see detailed architecture and deployed functions,resources using dashboard.

So before deploying using serverless framework,

login to serverless dashboard using

`serverless login`

then include the following in the serverless.yml file

```
app: your-app-name
tenant: your-tenant-name
```
Then deploy the application, so that we can visualize architecture.

