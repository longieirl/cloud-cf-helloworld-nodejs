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

Run deployment using ui5-deploy.yaml
```
npm run deploy
```


You can run these steps from any Fiori UI generated application.