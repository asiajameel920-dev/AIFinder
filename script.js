const tools = [
  { name: "ChatGPT", category: "writing", link: "https://chat.openai.com/" },
  { name: "Canva AI", category: "images", link: "https://www.canva.com/ai/" },
  { name: "Pictory", category: "video", link: "https://pictory.ai/" },
  { name: "Replit", category: "code", link: "https://replit.com/" },
  { name: "Notion AI", category: "productivity", link: "https://www.notion.so/" },
];

const toolsContainer = document.getElementById("tools");
const searchInput = document.getElementById("search");
const categoryButtons = document.querySelectorAll(".cat");

function displayTools(filtered) {
  toolsContainer.innerHTML = "";
  filtered.forEach(tool => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<a href="${tool.link}" target="_blank">${tool.name}</a>`;
    toolsContainer.appendChild(card);
  });
}

function filterTools() {
  const searchText = searchInput.value.toLowerCase();
  const activeCat = document.querySelector(".cat.active").dataset.cat;
  const filtered = tools.filter(tool => {
    const matchText = tool.name.toLowerCase().includes(searchText);
    const matchCat = activeCat === "all" || tool.category === activeCat;
    return matchText && matchCat;
  });
  displayTools(filtered);
}

searchInput.addEventListener("input", filterTools);

categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".cat.active").classList.remove("active");
    btn.classList.add("active");
    filterTools();
  });
});

displayTools(tools);
