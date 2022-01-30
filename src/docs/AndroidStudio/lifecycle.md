---
title: Android Studio 教學 Activity lifecycle 生命週期
date: 2022-01-29
categories:
- Android Studio 教學
tags:
- Android Studio
author: Docat0209
---
## 基本介紹

### 什麼是生命週期

生命週期簡單來講就是元件的運行時間與運行階段

可以注意到標題上的英文有 Activity 字樣

Activity 在之前介紹過

他是一個用來顯示畫面的物件

所以這裡我們把Activity當作一個具有生命週期的物件

值得一提的是具有生命週期的物件不只有Activity一個

但基本上都大同小異

![](https://developer.android.com/images/activity_lifecycle.png)

### 生命週期的意義

如果你有注意到

剛開始撰寫Android Studio的程式時

其程式碼都是寫在onCreate函式裡面的

所謂的onCreate也是Activity生命週期的其中一部份

所以Android Studio的程式的運作邏輯便是複寫生命週期的一個區塊

等到APP經過了該生命週期

便會將你寫入的程式碼去做執行的動作

## 生命週期觸發條件

### 啟動時

onCreate -> onStart -> onResume

### 結束時

onPause -> onStop -> onDestroy

其實其觸發條件十分的容易去判別

只要透過名字基本上都不太會有混淆的現象發生

透過了解Activity的生命週期後

就可以在適當的時機點來做想做的事

來提升用戶的使用體驗

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    //初使化
}
@Override
protected void onStart() {
    super.onStart();
    //Activity可見時
}
@Override
protected void onResume() {
    super.onResume();
    //切回換面
}
@Override
protected void onPause() {
    super.onPause();
    //切離畫面
}
@Override
protected void onStop() {
    super.onStop();
    //Activity不可見時
}
@Override
protected void onDestroy() {
    super.onDestroy();
    //被摧毀時
}
@Override
protected void onRestart() {
    super.onRestart();
    //再次啟動之前
}
```
