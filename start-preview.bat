@echo off
cd /d "%~dp0"

if not exist node_modules (
    echo NPM hasn't been set up yet. Installing dependencies.
    echo This will take a moment...
    echo.
    call npm install
    if errorlevel 1 (
        echo.
        echo npm install failed. Screenshot this window with any errors.
        pause
        exit /b 1
    )
)

call npm run start
pause