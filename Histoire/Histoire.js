function PageSuivante(nb) {
    document.getElementById("page1").innerHTML = content_page1[nb - 1];
    document.getElementById("page2").innerHTML = content_page2[nb - 1];
};
function Pageprecedente(nb) {
    document.getElementById("page1").innerHTML = content_page1[(nb - 1)];
    document.getElementById("page2").innerHTML = content_page2[(nb - 1)];
};

setTimeout(function() {
    PageSuivante(1);
}, 10);
content_page1 =  [`<p>test1</p>`,
                    `<p>test2</p>
                    <div class="flex-box">
                        <button onclick="Pageprecedente(1)">Page précédente</button>
                    </div>`,
                    `<p>test3</p>
                    <div class="flex-box">
                        <button onclick="Pageprecedente(2)">Page précédente</button>
                    </div>`]
content_page2 = [`<p>test1</p> 
                    <div class="flex-box">
                        <button onclick="PageSuivante(2)">Page Suivante</button>
                    </div>`,
                `<p>test2</p>
                <div class="flex-box">
                    <button onclick="PageSuivante(3)">Page Suivante</button>
                </div>`,
                `<p>test3</p>`]