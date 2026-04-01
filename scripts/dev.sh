#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  # shellcheck disable=SC1090
  . "$NVM_DIR/nvm.sh"
  nvm use 22.12.0 >/dev/null
else
  echo "nvm nao encontrado em $NVM_DIR" >&2
  exit 1
fi

cleanup() {
  if [ -n "${BACK_PID:-}" ] && kill -0 "$BACK_PID" 2>/dev/null; then
    kill "$BACK_PID" 2>/dev/null || true
  fi
}
trap cleanup EXIT

echo "Iniciando backend..."
DOTNET_ENVIRONMENT=Development dotnet run --project "$ROOT_DIR/backend/Backend.csproj" &
BACK_PID=$!

sleep 1

echo "Iniciando frontend..."
cd "$ROOT_DIR/frontend"
npm start
