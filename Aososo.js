// Firebaseの設定
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Firebaseを初期化
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// ゲームの状態管理
let score = 0;

// ゲーム開始ボタンのクリックイベント
document.getElementById('start-btn').addEventListener('click', () => {
    score = 0;
    updateScore();
    startGame();
});

// スコアの更新
function updateScore() {
    document.getElementById('score').textContent = score;
    // Firebaseのデータベースにスコアを保存
    const scoreRef = database.ref('scores/1');  // 'scores/1'は一つのユーザーのスコア
    scoreRef.set(score);
}

// ゲームのロジック（簡単なカウンターチャレンジ）
function startGame() {
    const gameInterval = setInterval(() => {
        score++;
        updateScore();

        if (score >= 10) {  // スコアが10に達したらゲーム終了
            clearInterval(gameInterval);
            alert("ゲーム終了！ スコア: " + score);
        }
    }, 1000);
}
