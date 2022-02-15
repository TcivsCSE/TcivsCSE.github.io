---
title: Android Studio 教學 基礎按鈕元件
date: 2022-01-29
categories:
- Android Studio 教學
tags:
- Android Studio
author: Docat0209
---
## 基本介紹

按鈕元件可以說是剛接觸到Android Studio 第一個會接觸到的東西

要呼叫一個按鈕十分簡單

只需要在UI設計頁面上拉出一個按鈕即可

並且賦予這個按鈕一個ID(後面會用到)

![](https://ithelp.ithome.com.tw/upload/images/20190921/201211491olzoajoyE.png)

## 按鈕點擊事件

按鈕最大的作用就是讓別人去點擊

而點擊之後所發生的事情便是我們寫程式的地方

首先我們要先了解一個叫做監聽器的概念

所謂的監聽器就是當使用者做出了什麼動作

什麼樣的監聽器就會被啟動

而按鈕的點擊事件的基本寫法如下(使用Kotlin Java寫法會不一樣)

```kt

val btn = findViewById<Button>(R.id.btn)

btn.setOnClickListener{
    Toast.makeText(this, "使用者按下了按鈕", Toast.LENGTH_LONG).show()
}

```

在這段程式碼當中你可能看到了一些你沒看過的內容

像是 findViewById

你可以理解為

透過前面在XML對元件所設置的ID

透過這個方法來拿到這個元件

並且給他設置監聽器之後

便能讓按鈕按下去時

有功能產生了

至於Toast

Toast是一個會在手機最底下跑出來文字的快顯元件

用途多半是拿來DEBUG

複製貼上執行就可以看到其效果了


