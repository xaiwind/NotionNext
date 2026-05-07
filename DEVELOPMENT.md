# 开发者指南

## 快速开始

### 环境要求

- Node.js = 20.20.0（使用 `.nvmrc` 保持一致）
- pnpm = 10.33.2（使用 `package.json#packageManager` 保持一致）
- Git

### 初始化开发环境

```bash
# 克隆项目
git clone <repository-url>
cd NotionNext

# 切到统一 Node 版本
nvm use

# 安装依赖（你的日常习惯）
pnpm install

# 启动开发环境
pnpm dev
```

### 多人协作依赖管理规则（必读）

```bash
# 进入项目后先切换到统一 Node 版本
nvm use

# 日常开发直接使用 pnpm install 即可
pnpm install
```

约束说明：

- 不要混用 `npm install` / `pnpm install`
- 仓库只保留 `pnpm-lock.yaml`，不允许提交 `package-lock.json`
- 提交依赖变更时必须同时提交 `package.json` 和 `pnpm-lock.yaml`
- 如果 PR 修改了 `pnpm-lock.yaml` 但未修改 `package.json`，需要在 PR 描述里说明原因
- CI 会自动用 `pnpm install --frozen-lockfile` 校验锁文件一致性（严格性放在 CI，不增加本地负担）

## 开发工具

### package.json 脚本总览（完整）

以下为仓库 `package.json` 中全部可运行脚本及用途说明：

- `pnpm dev`：启动本地开发服务（Next.js dev）。
- `pnpm build`：生产构建（含 `BUILD_MODE=true`）。
- `pnpm start`：启动生产服务（需先 `pnpm build`）。
- `pnpm post-build`：构建后生成 sitemap。
- `pnpm export`：静态导出构建并生成 sitemap。
- `pnpm bundle-report`：构建并输出包体分析报告（`ANALYZE=true`）。
- `pnpm build-all-in-dev`：在开发环境模拟生产构建（`VERCEL_ENV=production`）。
- `pnpm version`：输出当前项目版本号。

- `pnpm lint`：执行 Next.js ESLint 检查。
- `pnpm lint:fix`：自动修复可修复的 ESLint 问题。
- `pnpm type-check`：TypeScript 类型检查（不输出产物）。
- `pnpm format`：使用 Prettier 格式化全仓库。
- `pnpm format:check`：检查格式是否符合 Prettier 规则。
- `pnpm quality`：执行项目质量检查脚本（聚合检查）。
- `pnpm pre-commit`：提交前检查（lint fix + format + type-check）。

- `pnpm dev-tools`：执行开发工具入口脚本。
- `pnpm init-dev`：初始化开发环境（dev-tools init）。
- `pnpm clean`：清理缓存与构建产物（dev-tools clean）。
- `pnpm docs`：生成或刷新文档（dev-tools docs）。
- `pnpm check-updates`：检查依赖可更新情况（dev-tools check-updates）。

- `pnpm deps:install`：按锁文件安装依赖（frozen-lockfile）。
- `pnpm deps:check-lockfile`：验证安装后 `pnpm-lock.yaml` 无漂移。

- `pnpm setup-hooks`：安装 Git hooks。
- `pnpm remove-hooks`：移除 Git hooks。
- `pnpm check-hooks`：检查 hooks 安装状态。

- `pnpm test`：运行 Jest 单元测试。
- `pnpm test:watch`：监听模式运行 Jest。
- `pnpm test:coverage`：运行测试并生成覆盖率。
- `pnpm test:ci`：CI 模式运行测试（覆盖率+无 watch）。

- `pnpm health-check`：执行项目健康检查脚本。
- `pnpm validate`：执行验证入口（当前映射到 health-check）。
- `pnpm final-validation`：执行最终验证脚本。

- `pnpm perf:baseline`：记录基线性能数据（build/runtime）。
- `pnpm perf:compare`：与上次基线比较性能变化。
- `pnpm perf:lighthouse`：运行 Lighthouse CI 审计。
- `pnpm perf:audit:themes`：全主题性能审计（输出到 `docs/performance`）。
- `pnpm perf:compress-theme-previews`：批量生成主题预览 WebP 资源。

- `pnpm postinstall`：依赖安装后自动执行 `patch-package`。

### 代码质量工具

```bash
# 代码格式化
pnpm format

# 代码检查
pnpm lint

# 类型检查
pnpm type-check

# 完整质量检查
pnpm quality

# 预提交检查
pnpm pre-commit
```

### 开发辅助工具

```bash
# 查看所有开发工具命令
pnpm dev-tools

# 清理项目文件
pnpm clean

# 生成组件模板
pnpm dev-tools generate:component MyComponent

# 分析包大小
pnpm dev-tools analyze

# 检查依赖更新
pnpm check-updates

# 生成项目文档
pnpm docs
```

### Git Hooks

```bash
# 安装Git钩子
pnpm setup-hooks

# 检查钩子状态
pnpm check-hooks

# 移除Git钩子
pnpm remove-hooks
```

## 项目结构

```
NotionNext/
├── components/          # React组件
├── pages/              # Next.js页面
├── lib/                # 工具库和配置
│   ├── config/         # 配置文件
│   ├── utils/          # 工具函数
│   ├── middleware/     # 中间件
│   └── cache/          # 缓存相关
├── themes/             # 主题文件
├── conf/               # 配置文件
├── scripts/            # 构建和开发脚本
├── types/              # TypeScript类型定义
├── .vscode/            # VSCode配置
└── docs/               # 项目文档
```

## 编码规范

### 代码风格

- 使用 Prettier 进行代码格式化
- 使用 ESLint 进行代码检查
- 使用 TypeScript 进行类型检查
- 遵循 React Hooks 最佳实践

### 命名规范

- **组件**: PascalCase (例: `LazyImage`)
- **文件**: kebab-case (例: `lazy-image.js`)
- **变量/函数**: camelCase (例: `getUserData`)
- **常量**: UPPER_SNAKE_CASE (例: `API_BASE_URL`)

### 提交规范

使用 Conventional Commits 规范:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**类型 (type):**
- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档更新
- `style`: 代码格式化
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建工具或辅助工具的变动
- `perf`: 性能优化
- `ci`: CI配置文件和脚本的变动
- `build`: 影响构建系统或外部依赖的更改
- `revert`: 回滚之前的提交

**示例:**
```
feat(auth): add user authentication
fix(ui): resolve button alignment issue
docs: update installation guide
```

## 开发流程

### 1. 创建功能分支

```bash
git checkout -b feature/your-feature-name
```

### 2. 开发和测试

```bash
# 启动开发服务器
pnpm dev

# 运行代码质量检查
pnpm quality

# 运行测试
pnpm test
```

### 3. 提交代码

```bash
# 添加文件
git add .

# 提交（会自动运行pre-commit钩子）
git commit -m "feat: add new feature"
```

### 4. 推送代码

```bash
# 推送（会自动运行pre-push钩子）
git push origin feature/your-feature-name
```

## 调试指南

### VSCode调试

项目已配置VSCode调试环境，支持以下调试模式:

- **Next.js: debug server-side** - 调试服务端代码
- **Next.js: debug client-side** - 调试客户端代码
- **Next.js: debug full stack** - 全栈调试
- **Jest: debug tests** - 调试测试

### 浏览器调试

```bash
# 启动调试模式
pnpm dev

# 在浏览器中打开开发者工具
# 访问 http://localhost:3000
```

### 性能分析

```bash
# 分析包大小
pnpm bundle-report

# 生成性能报告
pnpm analyze
```

### 新主题性能准入（必做）

新增或大改主题时，必须在生产模式下执行一次全主题审计，并把结果文件一并提交：

```bash
# 1) 生产构建与启动
pnpm build
pnpm start

# 2) 另开一个终端执行主题性能审计
pnpm perf:audit:themes
```

提交前请确认以下文件已更新并纳入 commit：

- `docs/performance/theme-audit-latest.md`
- `docs/performance/theme-audit-latest.json`

准入门槛（建议值，可逐步收紧）：

- Performance >= 60（新主题目标）
- SEO >= 90
- LCP <= 4000ms
- CLS <= 0.1

## 环境变量

### 必需的环境变量

- `NOTION_PAGE_ID`: Notion页面ID

### 可选的环境变量

- `NEXT_PUBLIC_TITLE`: 网站标题
- `NEXT_PUBLIC_DESCRIPTION`: 网站描述
- `NEXT_PUBLIC_AUTHOR`: 作者名称
- `NEXT_PUBLIC_LINK`: 网站链接

### 环境变量验证

```bash
# 验证环境变量配置
pnpm quality
```

## 常见问题

### 1. 依赖安装失败

```bash
# 清理缓存
pnpm clean
rm -rf node_modules

# 重新安装
pnpm deps:install
```

### 2. 构建失败

```bash
# 检查代码质量
pnpm quality

# 清理并重新构建
pnpm clean
pnpm build
```

### 3. 类型错误

```bash
# 运行类型检查
pnpm type-check

# 查看详细错误信息
npx tsc --noEmit --pretty
```

### 4. ESLint错误

```bash
# 自动修复ESLint错误
pnpm lint:fix

# 查看所有ESLint规则
npx eslint --print-config .
```

## 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

### Pull Request 要求

- 代码通过所有质量检查
- 包含适当的测试
- 更新相关文档
- 遵循提交规范

## 资源链接

- [Next.js 文档](https://nextjs.org/docs)
- [React 文档](https://reactjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Notion API 文档](https://developers.notion.com/)

## 获取帮助

- 查看项目文档: `pnpm docs`
- 检查开发工具: `pnpm dev-tools`
- 提交 Issue 或 Pull Request
