# Random Password Generator
運用 Node.js 及 Express 建立可產生隨機密碼的簡易網頁。

## 功能
* 隨機產生 4-16 位亂數密碼。
* 可自行輸入密碼長度。
* 密碼字元包含英文字母大小寫、數字及符號。
* 可勾選密碼字元所包含的類別。
* 可自行輸入欲排除的密碼字元。
* 重新整理頁面會保留上一次的勾選條件。

## 環境建置
* Visual Studio Code - 開發工具
* Cmder - 指令終端
* Noje.js (v20.12.2) - 執行環境
* Express (v4.19.2) - 後端框架
* Express handlebars (v7.1.2) - 樣板引擎

## 安裝及執行步驟
1. Clone 專案至本機
```
git clone https://github.com/9essicahsu/passwordgenerator.git
```
2. 初始化環境
```
cd shortURL //切換至檔案資料夾
npm install //安裝npm套件
```
3. 啟動程式
```
npm run dev
```
4. 當終端機出現下列字樣，表示伺服器已開始執行
```
express server is running on http://localhost:3000
```