const API_URL = process.env.GITLAB_API_URL || "";
const PROJECT_PATH = process.env.GITLAB_PROJECT_PATH || "";
const ACCESS_TOKEN = process.env.GITLAB_ACCESS_TOKEN || "";

interface GitLabCommit {
  id: string;
  title: string;
  author_name: string;
  committed_date: string;
  message: string;
}

interface GitLabRef {
  type: string;
  name: string;
}

function formatDateDMYHM(iso: string) {
  const date = new Date(iso);

  const parts = new Intl.DateTimeFormat("de-CH", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value || "";

  return `${get("day")}.${get("month")}.${get("year")} ${get("hour")}:${get("minute")}`;
}

async function fetchRefs(sha: string): Promise<GitLabRef[]> {
  const url = `${API_URL}/projects/${encodeURIComponent(
    PROJECT_PATH
  )}/repository/commits/${sha}/refs`;
  const res = await fetch(url, {
    headers: {
      "Private-Token": ACCESS_TOKEN,
    },
  });

  return res.json();
}

export async function GitlabCommits() {
  const url = `${API_URL}/projects/${encodeURIComponent(
    PROJECT_PATH
  )}/repository/commits?all=true&per_page=30`;
  const commitsRes = await fetch(url, {
    headers: {
      "Private-Token": ACCESS_TOKEN,
    },
  });
  const commits = await commitsRes.json();

  const enriched = await Promise.all(
    commits.map(async (commit: GitLabCommit) => {
      const refs = await fetchRefs(commit.id);

      return {
        id: commit.id,
        title: commit.title,
        author_name: commit.author_name,
        date: formatDateDMYHM(commit.committed_date) || "",
        message: commit.message,
        branches: refs.filter((r: GitLabRef) => r.type === "branch").map((r: GitLabRef) => r.name),
      };
    })
  );

  return (
    <div>
      <h1 className="text-lg font-semibold p-2">GitLab Commits</h1>
      <ul className="flex flex-col gap-2 ">
        {enriched.map((commit) => (
          <li key={commit.id} className="border-2 p-2 mb-2">
            {commit.title} by {commit.author_name} on {commit.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
