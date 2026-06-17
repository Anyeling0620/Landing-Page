# 1.创建新项目

```bash
npx create-vite
```

# 2.安装依赖

```
npm install
```

# 3.启动服务

```
npm run dev
```

# 4.安装常用库

```
npm install tailwindcss @tailwindcss/vite zustand
```

# 5.初始化

删除App.css

删除App.tsx 的UI代码

删除index.css全部内容

# 6.修改vite.config.ts配置

### 顶部引入

```js
import tailwindcss from '@tailwindcss/vite'
```

### plugins数组加入tailwindcss()

# 7.index.css(存放主题变量)

```js
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-bg: 255 255 255;
  --color-box: 255 255 255;
  --color-border: 229 231 235;
  --box-sd: 226 232 240;
  --heading-1: 23 37 78;
  --heading-2: 31 41 51;
  --heading-3: 55 65 81;
}

html.dark {
  --color-bg: 3 7 8;
  --color-box: 17 24 39;
  --color-border: 243 244 246 / 0.1; 
  --box-sd: transparent;
  --heading-1: 255 255 255;
  --heading-2: 243 244 246;
  --heading-3: 209 213 219;
}

@layer utilities {
  .bg-body {
    background-color: rgb(var(--color-bg));
  }
  .bg-box {
    background-color: rgb(var(--color-box));
  }
  .text-heading-1 {
    color: rgb(var(--heading-1));
  }
  .text-heading-2 {
    color: rgb(var(--heading-2));
  }
  .text-heading-3 {
    color: rgb(var(--heading-3));
  }
}

html {
  scroll-behavior: smooth;   
}

body {
  font-family: 'Raleway', sans-serif;
}
```

# 8.确定项目结构

### src下创建components store utils

### components下创建sections (因为是单页，分成了不同部分)

### components下创建shared (多次重复使用的组件，比如按钮 容器)

### components下创建elements (网站中不同元素)

### components下创建cards (显示数字的卡片 显示服务的卡片等)



# 9.自动部署到服务器

### github仓库设置仓库变量SITE_ROOT，内容如/www/wwwroot/baidu.com/

### 安装pm2

### 完成.github/workflows/deploy.yml，注意

```yaml
  runs-on: self-hosted
```

### 创建runner用户来安装github runner，位置位于/home/runner-{`${SITE}`}

### 使用pm2管理runner进程

```bash
sudo -u runner pm2 start/stop/restart/delete/logs
```

