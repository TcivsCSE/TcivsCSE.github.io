---
title: Android Studio 教學 layout屬性與種類
date: 2022-01-29
categories:
- Android Studio 教學
tags:
- Android Studio
- Xml
author: Docat0209
---
## 基本介紹

### 專有名詞快速介紹

dialog : 彈出視窗

listView items : ListView , RecycleView 等其中的可視清單項目 

### Layout 用途

所謂的layout也就是布局

對Android Studio來講就是所謂的視圖

也可以認為是製作這個APP的藍圖

在Android Studio中

layout被放置在src底下的layout資料夾

layout通常會被作為以下幾種內容的視圖

* activity

* fragment

* dialog

* listView items

### Layout 結構

![](https://i.imgur.com/XuUj21V.png)

上方圖片為Android Studio的layout編輯器

![](https://i.imgur.com/JHfMKvK.png)

該編輯器可以透過右上角的按鈕來切換顯示模式

其中最常使用的便是中間的Split模式

此模式的特點是旁邊可以及時預覽寫出來的頁面的長相

可以透過左邊的標籤語言撰寫內容與調整屬性

也可以透過右邊的圖像介面來做到快速的介面編排

### XML 語法

xml語法與html非常相似

一個<標籤>會對應一個</標籤>

而這裡面所形成的空白區域

則可以再包入其他標籤

若標籤裡面不須要包入東西

則可以以<標籤/>這種形式來表示

而標籤中也可以塞入屬性

<標籤 屬性 = "數值"></標籤>

以下為簡單的範例


```xml
<a
    color = "blue">
    <b
        color = "red"/>
    <c
        color = "yellow"/>
</a>
```

透過此範例

可以得知有一個標籤叫做**a**

**a**的顏色是藍色

**b**的顏色是紅色

**c**的顏色是黃色

**c**和**b**位於**a**裡面

### Layout 種類介紹

Layout元件主要有分五種

Linear Layout(線性佈局)

Relative Layout(相對佈局)

TableLayout(表格佈局)

AbsoluteLayout(絕對佈局)

FrameLayout(框架佈局)

其中最常用的是

Linear Layout 跟 Relative Layout

#### Linear Layout

水平或垂直的排版

優點是排版迅速且美觀

適合用在規整向下排列的地方

```xml
<LinearLayout
    android:orientation="垂直：vertical／水平：horizontal">
```

#### Relative Layout

透過各個物件的ID來進行相對位置的版面配置

優缺點都很明顯

優點是可以排出各式各樣的版面

缺點則是程式碼過與攏長

且不太適合使用打程式碼的方式來操作

通常會先給元件ID

再用Android Studio的介面操作來完成排列

但是由於可以排出各式各樣的版面

所以依然成為最常使用的Layout

#### Table Layout

讓物件可以透過表格的方式去排列

用於表格類型的版面

或是需要自適應長寬的版面

有不錯的效果

#### AbsoluteLayout

直接指定物件的 X Y 軸

因為每隻手機的長寬比不同

所以不推薦使用無法自適應的layout類型

#### FrameLayout

重疊顯示

語法越後面的物件圖層會在越前面

適合由多層疊起來的圖片

例如可以藉由此特性來製作多圖層動畫

### 元件屬性

前面只有介紹layout元件

而其他物件便是以layout為基底

去進行顯示的

例如Button

Button就是一個區塊

然後這個區塊有點擊的功能

然後上面可以顯示文字

所以該Button會有

layout的屬性

TextBox的屬性

和Button獨有的屬性

可以把layout元件想像成一個容器

而在這個容器的元件

便會去照著layout元件的規則去顯示與生成

layout元件裡面也是可以包layout元件的

元件的layout屬性會因為不同的layout元件規則而產生各種需要的屬性

說白了就是透過各種不同的區塊去分割畫面

然後再從已經分割過的東西裡面再分割出更小的區塊

並賦予這些區塊各自的功能與長相

每個元件所具備的屬性常用的有以下幾個

```xml
<layout
    android:id="@+id/layout"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@drawable/"
    android:padding="20dp"
    android:layout_margin="20dp"
/>
```

id : 辨識元件用

layout_width : 元件區塊寬度

layout_height : 元件區塊高度

background : 元件區塊背景

padding : 內部元件區塊向內縮排

layout_margin : 外部元件區塊向外推擠


### 常用基本元件

#### TextView

用於顯示文字

常用屬性有

```xml
<TextView
    android:text="text"
    android:textColor="@color/black"
    android:textSize="20sp" 
    android:textAlignment="center"
    android:fontFamily="serif"
    android:maxLines="1"
    android:ellipsize="end"
    android:textAllCaps="true"/>
```

text : 顯示的文字

textColor : 文字顏色

textSize : 文字大小

textAlignment : 文字位置

fontFamily : 字形

maxLines : 最大顯示行數

ellipsize : 超過顯示範圍後的顯示方式

textAllCaps : 全部顯示大寫

#### Button

按鈕

常用屬性跟TextView一樣(因為Button中間有個TextView)

但此元件會有預設的background

在後面章節會介紹Button的事件用法

#### ScrollView

被包起來的內容會具有滾動的效果

ScrollView裡面只能包入一項標籤

所以通常會包layout外層

雖然ScrollView也有margin跟pading屬性

但請勿在其滾動方向去使用margin跟pading

會造成ScrollView位移

ScrollView裡面的內容會被吃到

```xml 
<ScrollView
    android:layout_width="match_parent"
    android:layout_height="match_parent">
    <LinearLayout
        android:orientation="vertical"
        android:layout_width="match_parent"
        android:layout_height="wrap_content">
    </LinearLayout>
</ScrollView>
```

#### EditText

文字輸入框

常用屬性跟TextView一樣

#### CheckBox

勾選框

常用屬性跟TextView一樣

#### RadioButton

多選一按鈕

常用屬性跟TextView一樣

#### RadioGroup

多選一按鈕群組

將多個RadioButton包在RadioGroup中

便能將這些RadioButton弄成一個群組

這幾個按鈕才會變成多選一
