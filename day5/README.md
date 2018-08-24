# serverless framework integration with alexa and IOT

### Alexa

This will enable your Lambda function to be called by an Alexa Skill kit. amzn1.ask.skill.xx-xx-xx-xx-xx is a skill ID for Alexa Skills kit. You receive a skill ID once you register and create a skill in Amazon Developer Console. After deploying, add your deployed Lambda function ARN to which this event is attached to the Service Endpoint under Configuration on Amazon Developer Console.
```
functions:
  mySkill:
    handler: mySkill.handler
    events:
      - alexaSkill: amzn1.ask.skill.xx-xx-xx-xx-xx
```
### Enabling / Disabling

This will create and attach a alexaSkill event for the mySkill function which is disabled. If enabled it will call the mySkill function by an Alexa Skill.
```
functions:
  mySkill:
    handler: mySkill.handler
    events:
      - alexaSkill:
          appId: amzn1.ask.skill.xx-xx-xx-xx
          enabled: false
```

# IOT

This will enable your Lambda function to be called by an AWS IoT rule.

```
functions:
  myIoT:
    handler: myIoT.handler
    events:
      - iot:
          sql: "SELECT * FROM 'some_topic'"
```

### enabling and disabling

This will create and attach a disabled iot event for the myIoT function.
```
functions:
  myIoT:
    handler: myIoT.handler
    events:
      - iot:
          sql: "SELECT * FROM 'some_topic'"
          enabled: false
```
