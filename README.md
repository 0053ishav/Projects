# 🧠 Projects Showcase – Developer Portfolio API

Welcome to the **Projects Showcase** repository! This project contains a public API to demonstrate how you can structure and expose your portfolio data. It's designed for **learning purposes**, enabling other developers to create their own project showcases by using this as inspiration.

> ⚠️ **Note**: The API is **publicly accessible** only for demo and educational purposes. You can study the code and see how the API works, but only I (the author) will use the API across my subdomains in production.



## 🚀 API Documentation

Full documentation: [projects.ishav.space](https://projects.ishav.space/)

Explore how a project showcase API is built, organized, and consumed in real-world applications.



## 🌐 Public API

### 📍 Available Endpoint

- `GET https://projects.ishav.space/api/projects` – Fetches a list of all portfolio projects.

**Example response:**

```json
{
  "success": true,
  "projects": [
    {
      "id": "project-id",
      "title": "Project Title",
      "description": "Project description",
      "image": "/path/to/image.png",
      "tags": ["Tag1", "Tag2"],
      "demoLink": "https://demo.example.com",
      "codeLink": "https://github.com/username/repo",
      "featured": true
    }
  ]
}
```

### 📦 Response Structure

Each project contains:

- `id`: Unique project ID
- `title`: Project name
- `description`: Short project overview
- `image`: Thumbnail or screenshot
- `tags`: Technologies or keywords
- `demoLink`: Live demo URL
- `codeLink`: GitHub or source repo
- `featured`: Boolean for homepage highlighting


## 🧪 Usage Example

### Fetch API (Vanilla JS / TypeScript)

```ts
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  featured?: boolean;
}

fetch('https://projects.ishav.space/api/projects')
  .then(res => res.json())
  .then((data: { success: boolean; projects: Project[] }) => {
    console.log(data.projects);
  });
```

### React + SWR (Efficient Client-Side Fetching)

```tsx
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

function ProjectList() {
  const { data, error } = useSWR('https://projects.ishav.space/api/projects', fetcher);

  if (error) return <p>Failed to load</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <ul>
      {data.projects.map(project => (
        <li key={project.id}>{project.title}</li>
      ))}
    </ul>
  );
}
```

## 🔐 CORS & Ownership Clarification

While this API supports **CORS for all origins** for demonstration and testing purposes, the **project data is strictly mine**.

> ❗️The API is *not meant* to be integrated into third-party portfolios or apps.  
> It’s open only so others can see how a real-world portfolio API works.

### 📦 Data Ownership

- All project entries served through this API are **owned by me** (`ishav`).
- This API is used **only across my own subdomains** and personal projects.
- You’re welcome to study the API structure, logic, and code to build your own version.

### 🧰 Why CORS Is Enabled

CORS is enabled to:
- Allow frontend testing and demos
- Let developers experiment with sample calls
- Help others understand how portfolio data APIs function


## 👨‍💻 Featured Projects (Add Yours)

Below is a template to add your own projects:

### 📌 Project 1 – [Your Project Title](#)

- **Description**: One-liner about what the project does.
- **Tech Stack**: React, Express, PostgreSQL
- **Highlights**: Key features or innovations
- **Code**: [GitHub Repo](#)


## 🛠️ Technical Overview

- **Framework**: Next.js (API Routes + SSR)
- **Language**: TypeScript
- **Frontend Compatibility**: Works with any frontend (React, Vue, HTML)
- **Dev Tools**: SWR, Fetch, REST APIs
- **Hosting**: Vercel (or any Node-compatible host)

---

### 🧑‍🎓 Build Your Own


You're free to:
- **Fork the repo**
- **Study the API route logic** (`/api/projects`)
- **Customize `project-data.ts`** with your own data
- **Deploy your version independently**

Please **do not** use my actual API or project data in your applications.



## 📞 Contact

Have questions or need help?

- GitHub: [@0053ishav](https://github.com/0053ishav)
- Email: [My Mail 📧](https://mail.ishav.space)

---

                 Made with ❤️ by Ishav-  Bring creative ideas to life
