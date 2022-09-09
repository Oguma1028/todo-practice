const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.innerText = inputText;

  const backButton = document.createElement("button");
  backButton.innerText = "戻す";

  // 未完了のリストから削除するやつ
  const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const divOfParent = completeButton.parentNode;
    deleteFromIncompleteList(divOfParent);
    const liOfParent = divOfParent.parentNode;
    liOfParent.textContent = null;
    const text = divOfParent.firstElementChild.innerText;

    // Li配下のタブを生成
    const div = document.createElement("div");
    div.className = "list-row";

    const p = document.createElement("p");
    p.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // liと上の３つを合体
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(backButton);

    // 完了ゾーンに追加
    document.getElementById("complete-list").appendChild(li);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(div.parentNode);
  });

  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
