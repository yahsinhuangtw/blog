---
title: "Zkmopro: Experimentation and Testing with Zero-Knowledge Proofs in Android Development"
date: 2024-08-27:18:48
tags:
---
Zkmopro's GitHub repo: https://github.com/zkmopro

### Understanding zkmopro
Today I followed the zkmopro Android setup tutorial and ran the command ``cargo run --bin android``. This creates a new folder called MoproAndroidBindings. The purpose of the zkmopro package is to handle the zk generate proof part during mobile app development.

### Integrating zk Proofs into Android Apps
If you want to develop an Android app and include zk proof generation functionality in your design, I recommend trying out the newly released zkmopro software toolkit. In the past, running zk applications on mobile required the painstaking process of porting prover code to Android. Today, with zkmopro, you can save a lot of time and effort on binding and conversion code.

### The impact of zkmopro
What makes zkmopro so powerful is its ability to enable efficient zero-knowledge proof generation on mobile devices. To test it, you first need to have Android Studio installed on your computer. Installing Android Studio used to be a major headache for many; fortunately, it is now much simpler, especially since you no longer need to install Java, making the process much easier.

Following the zkmopro tutorial is relatively straightforward. However, if you are not familiar with the Android Studio interface, you might need to search a bit, such as locating where to add dependencies. After you've added them, you need to find the sync project button. When you reach the step of creating an assets folder, go to the File menu, select the New option, then choose Folder, and finally create the Assets folder.

### Handling Files in Android Studio
Copy and paste the zkey file into the newly created assets folder. Then, copy and paste the code. To check if proof generation was successful, click on the Logcat icon (the cat with three lines) in the lower-left corner of Android Studio to view the GenerateProofResult. Otherwise, you might end up staring at a blank screen even after following all the instructions.

### Comparing Android Studio and VS Code
Compared to VS Code, the Android Studio interface is more complex and cluttered, with all operations requiring a graphical interface. For example, to open a folder, you must navigate through three layers of menus. In contrast, VS Code allows you to create a new folder directly using a command or by right-clicking. Is all this UI complexity in Android Studio truly necessary, or is it simply the result of years of design issues accumulating over time?

Overall, the testing experience with the zkmopro tutorial involves a lot of file movement and code snippet copy-pasting. Among the various steps, the most crucial line of code is import uniffi.mopro.generateCircomProof, which enables the function to generate zk circom proofs on mobile. What are the actual functions of the jniLibs and uniffi folders in the MoproAndroidBindings directory? And what exciting apps could be developed with zkmopro in the future? Someone needs to figure that out, but clearly, it won't be me.

If you have any good suggestions, please share them with Vivian at https://github.com/vivianjeng


到底 zkmopro 的意義是什麼？我想了解一下，所以今天跟著 zkmopro android setup 的操作教學，玩了一個指令 ``cargo run --bin android`` 。它會建立新資料夾叫 MoproAndroidBindings。這個 zkmopro 套件最主要的目的是，在手機 app 開發過程中，可以幫你處理好 zk generate proof 的部分。

例如，想開發 Android 的 app，又想在 app 設計裡加入 zk 產生 proof 的功能，推薦玩 zkmopro 最近這幾個月才新端出來的軟體套件。如果 ZK 應用想在手機上跑的話，需要把 prover 的程式碼辛苦地搬到 Android 上執行。今天有 zkmopro 套件，就可以省掉很多 binding 和轉換程式碼的麻煩。

結論，zkmopro 的意義是，可以在手機上有效率地做零知識證明。首先，電腦要先安裝好 Android Studio。安裝 Android Studio 這件事情以前是大工程，不過現在安裝無尾熊已經沒有過去那麼複雜了，至少不用裝 Java，是不是突然覺得簡單很多。

跟著 zkmopro 教學做還算可以理解。只是無尾熊介面不熟悉的話可能要稍微找一下，例如 dependencies 要加在哪裡。好不容易加好了後，要找一下 sync project 這隻大象在哪裡。一路到後面需要建立 assets folder 這個步驟，要先找到無尾熊的 File 裡面找到 New 再找到 Folder 再找 Assets folder。

複製貼上 zkey 檔案到剛才千辛萬苦建好的 assets folder。接著複製貼上程式碼。最後想看是否有真的 generate proof 成功，要按無尾熊左下角有三條線的logログ阿貓，要點阿貓Logcat才看得到 GenerateProofResult。不然就會像我一樣，全部都跟著指示操作了，接著直接面對一整個螢幕的沈默。

Android Studio 和 VS Code 比較，無尾熊的介面比較複雜，整個畫面很滿，所有操作都要圖形化介面操作。例如光是要開一個資料夾，要拉三層的選單，反觀 VS Code 可以直接打指令建立新資料夾，或按右鍵選建立新資料夾。Android Studio 是否真的需要這麼多 UI 介面，還是是多年累積下來的設計問題？

另外想到 zkmopro 的教學文件步驟大部分的步驟都是在搬動檔案，需要很多複製貼上的動作。眾多繁雜中，其中最關鍵的一行程式就是 import uniffi.mopro.generateCircomProof，這個 generateCircomProof 主要是讓你可以手機產生 zk 零知識證明 circom proof 的 function。

MoproAndroidBindings 新資料夾裡面的兩個資料夾 jniLibs 資料夾和 uniffi 資料夾，實際上的功能是什麼？以及未來可以用 zkmopro 開發出什麼好玩的 app？需要有人用大腦想，但這個人顯然不是我，畢竟我的大腦沒有這麼強壯，成長型思維在哪裡我不知道。

zkmopro repo 在這邊 https://github.com/zkmopro/mopro

有好的建議可以分享給 Vivian 老師 https://github.com/vivianjeng