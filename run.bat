@echo off
echo Running init script...
mkdir backend
curl -s "https://start.spring.io/starter.zip" -d "dependencies=web,data-jpa,sqlserver,validation,lombok&name=weboracle&groupId=com.weboracle&artifactId=backend&packageName=com.weboracle.backend&javaVersion=17&type=maven-project" -o backend.zip
tar -xf backend.zip -C backend
del backend.zip
docker compose up -d
call npx -y "@angular/cli@18" new frontend --style=scss --routing=true --ssr=false --skip-git=true --interactive=false --defaults=true
echo Initialized successfully!
