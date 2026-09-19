# Paper project page starter

这是一个不依赖 npm 的科研论文项目主页初版，视觉上参考 DexWild / Nerfies 类学术项目页面，但没有复制它们的论文内容和媒体素材。

## 本地预览

在此目录打开终端：

```powershell
python -m http.server 8000
```

然后访问 <http://localhost:8000>。

## 需要替换的内容

- `index.html`：项目标题、作者、机构、论文链接、摘要、指标、BibTeX。
- `assets/`：加入自己的 `teaser.mp4`、`method.webp`、结果 poster 和 favicon。
- `static/css/styles.css`：调整颜色、字体和布局。
- 结果卡片中的占位视觉：替换为 `<video controls preload="metadata" poster="...">` 或 `<img>`。

所有资源路径使用 `./`，因此可以直接部署到 GitHub Pages 的项目路径，例如 `https://USERNAME.github.io/paper-project-page/`。

## GitHub Pages

```powershell
git init
git add .
git commit -m "Create paper project page"
git branch -M main
git remote add origin https://github.com/USERNAME/paper-project-page.git
git push -u origin main
```

项目已经包含 `.github/workflows/pages.yml`。推送到 `main` 后，GitHub Actions 会自动发布到 GitHub Pages。

第一次部署时，在 GitHub 仓库中打开 **Settings → Pages**，将 Source 设为 **GitHub Actions**。

如果使用第三方模板，请保留该模板要求的许可证和致谢信息；本初版只包含自己的占位内容。
