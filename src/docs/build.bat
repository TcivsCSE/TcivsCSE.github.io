@echo off
set /p var=PleaseEnterCommitMessage:
call cmd /c " cd/d .. &&yarn docs:build && cd/d .. && rmdir -f /s/q/ .\docs || echo can't found docs&&mkdir .\docs&&XCOPY .\src\docs\.vuepress\dist  .\docs  /e /d /y  && git add -A && git commit -m"%var%"&& git push -u origin main"
