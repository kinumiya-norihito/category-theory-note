const
    recursive_make = (parent, elems, ini_index, h_level, app_num) => {
        if (!elems.length) return;
        const ul_elem = document.createElement("ul");
        parent.append(ul_elem);
        let index = ini_index;
        for (const elem of elems) {
            const
                li_elem = document.createElement("li"),
                a_elem = document.createElement("a");
            app_num[h_level] = index;
            //数字付け
            elem.innerHTML = app_num.join(".") + " " + elem.innerHTML;
            //リンク付
            elem.id = elem.innerHTML;
            a_elem.href = `#${elem.innerHTML}`;
            ul_elem.append(li_elem);
            li_elem.append(a_elem);
            a_elem.append(elem.innerHTML);
            recursive_make(li_elem, elem.parentElement.getElementsByTagName(`h${+elem.tagName.match(/\d/)[0] + 1}`), ini_index, h_level + 1, app_num);
            index++;
        }
        app_num.pop();
    };

window.onload = () => {
    recursive_make(document.getElementById("outline"), document.getElementsByTagName("h2"), 1, 0, []);
};