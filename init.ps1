$ErrorActionPreference = 'Stop'

Write-Host "Downloading Spring Boot Backend..."
curl.exe -s "https://start.spring.io/starter.zip" -d "dependencies=web,data-jpa,sqlserver,validation,lombok&name=weboracle&groupId=com.weboracle&artifactId=backend&packageName=com.weboracle.backend&javaVersion=17&type=maven-project" -o backend.zip

Write-Host "Extracting Backend..."
Expand-Archive -Path "backend.zip" -DestinationPath "backend" -Force
Remove-Item "backend.zip"

Write-Host "Starting Database..."
docker compose up -d

Write-Host "Generating Angular Frontend..."
npx.cmd -y "@angular/cli@18" new frontend --style=scss --routing=true --ssr=false --skip-git=true

Write-Host "Done!"
