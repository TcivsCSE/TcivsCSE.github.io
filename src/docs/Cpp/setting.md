---
title: Cpp 教學 Chapter - 0 環境建置
date: 2021-10-02
categories:
- Cpp 教學
tags:
- Cpp
author: Docat0209
---
## 下載安裝檔

[vscode](https://code.visualstudio.com/Download)

[minGW](https://sourceforge.net/projects/mingw/)

點開連結後 點擊`Download(下載)`按鈕

## 安裝 vscode

打開`vscode 安裝檔`點選`Install`

一直點選`Next(下一步)`直到出現`Finish(結束)`

按下`Finish`結束安裝

## 安裝 minGW

安裝 `vscode-安裝檔`

透過 `windows search(windows 搜索功能)`尋找`MinGW Installation Manager`並開啟

勾選 `mingw32-base`與`mingw32-gcc-g++`

點開上方選單中的`Installation`並按下`Update Catalogue`

並等待安裝完畢

![](https://i.imgur.com/t1p41qm.png)

1. 在檔案總管(Windows Explorer)上，以滑鼠右鍵按一下「電腦」(This PC) 並選取「內容」(Properties)。
2. 按一下「進階系統設定」(Advanced system settings)。
3. 在「系統內容」(System Properties) 對話方塊的「進階」(Advanced) 標籤中，按一下「環境變數」(Environment Variables)。
4. 對「系統變數」(System variables) 下的「Path」連點兩次，按一下「新建」(New)。
5. 在方塊中鍵入`C:\MinGW\bin`並按下Enter鍵。
7. 按三次「確定」(OK) 以退出「系統內容」(System Properties) 對話方塊。

## vscode環境設定

請於自己喜歡的地方新增一個叫做`Cpp`的資料夾

打開 vscode

於左側的工具欄 點選`Extensions`

![](https://i.imgur.com/3VSBHuO.png)

於上方搜尋 C++

![](https://i.imgur.com/BnMaotg.png)

找到此項目並按下 Install

於上方搜尋 Code Runner

![](https://i.imgur.com/EgHhrqG.png)

找到此項目並按下 Install

等待安裝完成 並重開vscode

## c++程式執行

點擊左上角的`File`選單 並按下`Open Folder`按鈕

尋找剛剛的`Cpp`資料夾路徑

![](https://i.imgur.com/GxxbP8s.png)

按下![](https://i.imgur.com/Q5FuW9j.png)按鈕新增一個叫做`Test.cpp`的檔案

點擊`Test.cpp` 來檢視

在裡面輸入以下程式碼

```cpp
#include <iostream>
using namespace std;
int main()
{
    cout<<"Hello World!!";
}
```

於左側的工具欄 點選`Run and Debug`

![](https://i.imgur.com/VZYtYU2.png)

然後點選藍字的`create a launch.json file`

並選擇 `C++ (GDB/LLDB)` 然後選擇 `G++.exe`

切換到`Test.cpp`

之後只需按下右上角的![](https://i.imgur.com/OacWXTM.png)按鈕

即可成功執行 C++ 程式

