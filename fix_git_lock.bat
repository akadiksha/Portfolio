@echo off
echo Checking for Git lock files...

REM Navigate to the repository (Update the path if needed)
cd /d "C:\Users\dikshap\OneDrive - Hind Terminals Private Limited\Desktop\Portfolio"

REM Check if index.lock exists and remove it
if exist .git\index.lock (
    echo Removing index.lock...
    del /f .git\index.lock
) else (
    echo No index.lock found.
)

REM Check if HEAD.lock exists and remove it
if exist .git\HEAD.lock (
    echo Removing HEAD.lock...
    del /f .git\HEAD.lock
) else (
    echo No HEAD.lock found.
)

REM Check if config.lock exists and remove it
if exist .git\config.lock (
    echo Removing config.lock...
    del /f .git\config.lock
) else (
    echo No config.lock found.
)

REM Check for running Git processes and terminate them
echo Checking for running Git processes...
for /f "tokens=2" %%a in ('tasklist ^| findstr /i git') do (
    echo Terminating Git process ID: %%a
    taskkill /PID %%a /F
)

echo Done! You can now run Git commands safely.
pause