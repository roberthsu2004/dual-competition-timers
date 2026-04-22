<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Dual Competition Timers

這是一個使用 `Vite + React + TypeScript` 開發的雙計時器網站，適合班際競賽、分組活動與教學示範。

## 網站介紹

此網站提供兩組可獨立控制的計時器（甲班/乙班），每組都可以：

- 開始計時
- 暫停計時
- 重設時間
- 以清楚的大字體顯示分、秒與百分秒

介面設計重點是簡潔、易讀、可快速操作，方便在投影或活動現場使用。

## 專案主要目的

這個專案的核心學習目標是：**學會把前端網站自動部署到 Vercel**。

你可以透過這個專案實作完整流程：

1. 本機開發（`npm run dev`）
2. 推送程式到 GitHub
3. 由 Vercel 自動偵測並建置部署
4. 每次推送新 commit 自動更新網站
5. Pull Request 自動產生 Preview 網站供測試

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## 自動部署到 Vercel（建議流程）

1. 將此專案推到 GitHub 儲存庫
2. 登入 [Vercel](https://vercel.com/) 並選擇 **Add New Project**
3. 匯入你的 GitHub repository
4. Framework Preset 選擇 `Vite`（通常會自動偵測）
5. 點擊 **Deploy**

完成後你會得到：

- `main` 分支更新時自動部署 Production
- 其他分支或 PR 自動部署 Preview
- 每次 commit 都有可檢視的部署結果與網址

## 建議練習任務

- 修改標題文字並推送，觀察 Vercel 是否自動重新部署
- 建立一個測試分支，確認 Preview deployment 是否正常
- 發 PR 後檢查 Preview 網址是否可供他人驗收
