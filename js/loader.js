// フェードアウト処理
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a[href]");

    links.forEach(link => {
        const href = link.getAttribute("href");
        if (!href || href.startsWith("#") || href.startsWith("http")) return;

        link.addEventListener("click", function (e) {
            e.preventDefault();
        
            // アニメーションを1フレーム目に確実に適用
            requestAnimationFrame(() => {
                document.body.classList.add("fade-out");
        
                setTimeout(() => {
                window.location.href = href;
                }, 500);
            });
        });
    });
});

  // フェードイン処理
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});