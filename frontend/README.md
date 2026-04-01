# Projeto Angular + C#

## Requisitos
- .NET SDK 8
- Node.js 22.12.0 (via nvm)

## Rodar o backend
```bash
dotnet run --project backend/Backend.csproj
```

## Rodar o frontend
```bash
cd frontend
export NVM_DIR="$HOME/.nvm"; [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use 22.12.0
npm start
```

## Rodar ambos com um comando
```bash
./scripts/dev.sh
```
# todo_list_angular
