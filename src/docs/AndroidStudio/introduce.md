---
title: Android Studio 教學 基本介紹與介面操作
date: 2022-01-29
categories:
- Android Studio 教學
tags:
- Android Studio
author: Docat0209
---
## 基本介紹

Android Studio 的功用便是拿來撰寫手機應用程式

前端主要是由XML所構成

Android Studio 主要使用的語言有兩種

Java 和 Kotlin 其兩者的最大差別便是在開發時的速度

由於Java是一個比較通用，用途比較廣泛的語言程式

相較於Kotlin則只針對JavaScript，JVM，Native和Android

Kotlin寫起來的感覺比較像是Java+Python的感覺

Kotlin的好處是在Android Studio內建有將Java程式碼自動轉換成Kotlin程式碼的功能

即使網路上大部分文章都是用Java撰寫的

也不會遇到語言不同無法兼容的問題

至於要選用哪種則看自己個人的喜好

## 介面介紹

### 專有名詞快速介紹

Activity : 提供畫面的一個元件

Fragment : 基於Activity上提供畫面的一個元件 可以在一個Activity中切換多種不同的Fragment

Navigation : Fragment的轉跳管理器

ViewModel : 可以先理解為占存Fragment資料用的東西

以上內容可參考其他文章來獲取更詳細的知識

### 專案介紹

透過左上角的新增專案

我們可以去建立一個新的Android Studio專案

![](https://i.imgur.com/XpZEl4i.png)

然後便會看到琳瑯滿目的專案樣式

![](https://i.imgur.com/SNV303L.png)

介紹其中最常用的三個

#### 1.Empty Activity

![](https://i.imgur.com/JE5pksv.png)

該專案顧名思義，便是生成一個可以運行的空白Activity範本

#### 2.Bottom Navigation Activity

![](https://i.imgur.com/bLEJaAQ.png)

這個專案就比較特別了

主要會生成以下幾種內容

* 一個空白的Activity

* 一個位於下方的導航列

* 三個帶有ViewModel的Fragment

* 一個用於控制這三個Fragment的Navigation

#### 3.Navigation Drawer Activity

![](https://i.imgur.com/nFyJNXd.png)

與第二點的專案差不多 差別在這個的導覽列是在側邊的

會使用這幾種專案的最大原因便是在節省時間

透過預先生成好的程式碼

只要稍微更改便可以快速使用

例如Bottom Navigation Activity可以用在2種地方

第一是所要製作的APP本身就需要導覽列

第二是不需要導覽列但需要使用Navigation來作為頁面轉跳

遇到第二種情況 把導覽列刪掉比起自己寫一個Navigation還來的節省時間

![](https://i.imgur.com/2JLFKPp.png)

選好自己想要使用的專案之後便要注意

Language 請選擇正確

Minimum SDK 請選擇對應的Android Studio版本

### 專案架構

![](https://i.imgur.com/Z5kWBeC.png)

Android Studio專案中有幾個比較需要知道且注意的資料夾與檔案

在Android Studio中有幾個比較嚴格的限制

那便是檔案位置與檔案名稱

尤其是在RES裡面的靜態資料

請務必遵守規則 否則會報錯

![](https://i.imgur.com/xfEOoSB.png)

首先依序從上介紹到下

#### 1.manifests

在manifests資料夾中的XML是用來管理該專案的設定檔

其主要職責如下 :

* APP權限

* 宣告Activity 

* 設定首頁

* 設定APP Icon和名稱

這些是比較常見的

#### 2.java

java資料夾便是主要的程式撰寫區拉

![](https://i.imgur.com/zgQfkyU.png)

#### 3.res

res 的作用有很多

不同類型的資料會被Android Studio強制歸類在特定資料夾

並且有嚴格的命名限制

檔案名稱只能由 **小寫英文字母** 和 **底線** 組成

一律不接受 **大寫 空白** 和 **其他特殊符號**

以下舉幾個比較常用到的資料夾

* drawable

圖片資料夾 

支援常見點陣圖片格式和xml向量圖片

* layout

頁面資料夾

用來撰寫手機APP會用到的各式各樣頁面

只支援xml格式

* values

參數資料夾

在這個資料夾中的xml檔寫入的內容

會變成一個參數

可以在上面所介紹到的xml檔內引入

* colors.xml

參數資料夾裡的顏色總管

可在裡面寫入顏色代碼

並給予名稱

可在其他檔案中用該名稱來引入該顏色

* strings.xml

參數資料夾裡的字串總管

與 colors.xml 功能差不多

不過管理的是字串

其主要效果便是可以做到切換語言的功能

* themes.xml

參數資料夾裡的主題總管

可以透過修改裡面的內容來更改整體APP的主題

#### 4.Gradle Scripts

管理編譯時的詳細內容

可以在裡面更改編譯時所支援的Android版本

還有所引用的套件版本

若要使用外來套件也是在這裡添加



