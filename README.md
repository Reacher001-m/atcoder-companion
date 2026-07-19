# AtCoder Companion

AtCoderコンテスト参加を支援するChrome/Brave拡張機能です。

## 主な機能

- コンテスト情報の自動取得
- Google Calendarへ自動追加
- Discord通知
- コンテスト開始1時間前通知
- コンテスト終了後に順位表・レートページを自動で開く

---

## 対応ブラウザ

- Brave（開発環境）
- Google Chrome

---

## 開発環境

- WXT
- TypeScript
- VSCode
- GitHub Flow

---

## 開発ロードマップ

### Phase 1 基盤

- [x] WXT環境構築
- [x] Content Script
- [x] Background
- [x] メッセージ通信

### Phase 2 AtCoder

- [x] コンテスト情報取得
- [ ] 参加状態判定
- [ ] コンテストID取得

### Phase 3 Google Calendar

- [ ] OAuth認証
- [ ] イベント作成
- [ ] 重複登録防止

### Phase 4 Discord

- [ ] Webhook通知
- [ ] 開始1時間前通知
- [ ] 開始5分前通知（設定可能）

### Phase 5 Contest Helper

- [ ] コンテスト終了通知
- [ ] 順位表を開く
- [ ] レートページを開く

### Phase 6 Settings

- [ ] 通知ON/OFF
- [ ] Google連携解除
- [ ] Discord Webhook設定

---

## Git Flow

main

↓

feature/issue番号-機能名

例

feature/2-registration-detection

feature/3-google-calendar

feature/4-discord

---

## Commit Message

```
feat:
fix:
refactor:
docs:
style:
test:
```

例

```
feat(parser): parse contest information
```

---

## ライセンス

MIT
