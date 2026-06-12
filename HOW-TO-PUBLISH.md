# How to publish Windy Desert for free

## First-time setup (GitHub Pages)

1. **Create a GitHub account** at github.com if you don't have one.

2. **Create a new repository** named exactly:
   ```
   YOUR-USERNAME.github.io
   ```
   (Replace `YOUR-USERNAME` with your GitHub username. Keep it public.)

3. **Install Git** from git-scm.com if you haven't already.

4. **Upload the files** — open Terminal in the `windy-desert` folder and run:
   ```bash
   git init
   git add .
   git commit -m "first post"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
   git push -u origin main
   ```

5. **Done.** Your blog will be live at `https://YOUR-USERNAME.github.io` within a minute or two.

---

## Writing a new essay

1. Duplicate `posts/hello-world.html` and rename it (e.g. `posts/my-new-essay.html`).
2. Edit the title, date, and body text inside the file.
3. Open `index.html` and copy one of the `<li class="post-item">` blocks.
   Update the link, title, date, and excerpt to match your new post.
4. Save both files.

## Publishing updates

Each time you write something new, run in the `windy-desert` folder:
```bash
git add .
git commit -m "add: essay title here"
git push
```

GitHub Pages will update automatically within ~30 seconds.

---

## Optional: use your own domain

If you ever buy a domain (e.g. windydesert.com):
1. Add a file named `CNAME` containing just your domain name.
2. In your domain registrar's DNS settings, add a CNAME record pointing to `YOUR-USERNAME.github.io`.
3. In your GitHub repo → Settings → Pages → set the custom domain.
