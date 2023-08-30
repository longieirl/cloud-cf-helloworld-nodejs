# Build and Deploy a Fiori UI 

Update `.env` file with credentials

Create image
```
docker build -t my/fiori-node .
```

Access new container
```
docker run -it my/fiori-node bash
```

Run globally installed version of UI5-tooling
```
fiori deploy --failfast --yes --username ABAP_USER --password ABAP_PASSWORD --description "Desc" --noConfig --url https://system.corp.net/ --client 100 --transport ZZZK9B806P --package /CORP/CORP_NAME --name /CORP/CORP_NAME
```
 
Run local installed version of UI5-tooling
```
npx fiori deploy --failfast --yes --username ABAP_USER --password ABAP_PASSWORD --description "Desc" --noConfig --url https://system.corp.net/ --client 100 --transport ZZZK9B806P --package /CORP/CORP_NAME --name /CORP/CORP_NAME
```

To increase logging, append `--verbose` to the command, for example;
```
npx fiori deploy --failfast --yes --username ABAP_USER --password ABAP_PASSWORD --description "Desc" --noConfig --url https://system.corp.net/ --client 100 --transport ZZZK9B806P --package /CORP/CORP_NAME --name /CORP/CORP_NAME --verbose
```

Run deployment using the `ui5-deploy.yaml` configuration
```
npm run deploy
```
If you want to apply verbose loggging, then update update `ui5-deploy.yaml` as follows;

```YAML
  customTasks:
    - name: deploy-to-abap
      afterTask: generateCachebusterInfo
      configuration:
      	verbose: true
        target:
          url: http://my-host:50000
          client: "100"
        app:
          name: ZE2EFFLDEC1
          description: Deployment Catalog
          package: $TMP
          transport: ""
        exclude:
          - /test/
```          

or by change package.json;

```JSON
"deploy": "npm run build && fiori deploy --config ui5-deploy.yaml --verbose && rimraf archive.zip",

```

You can run these steps from any Fiori UI generated application.