(function () {
    // Scroll to top button
    const btn = document.getElementById("myBtn");

    window.addEventListener("scroll", function () {
        btn.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
    });

    btn.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    // Offcanvas sidebar toggle (below lg)
    const sidebar = document.getElementById("splitSidebar");
    const sidebarToggle = document.querySelector(".sidebar-toggle");
    const sidebarClose = document.querySelector(".sidebar-close");
    const backdrop = document.getElementById("sidebarBackdrop");

    if (sidebar && sidebarToggle && backdrop) {
        const setOpen = function (open) {
            sidebar.classList.toggle("is-open", open);
            backdrop.classList.toggle("is-open", open);
            backdrop.hidden = !open;
            document.body.classList.toggle("sidebar-open", open);
            sidebarToggle.setAttribute("aria-expanded", open ? "true" : "false");
            if (open) {
                sidebar.focus();
            }
        };

        sidebarToggle.addEventListener("click", function () {
            setOpen(!sidebar.classList.contains("is-open"));
        });

        backdrop.addEventListener("click", function () { setOpen(false); });

        if (sidebarClose) {
            sidebarClose.addEventListener("click", function () { setOpen(false); });
        }

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && sidebar.classList.contains("is-open")) {
                setOpen(false);
            }
        });

        // Reset state when crossing the lg breakpoint so the sidebar isn't stuck
        const lgQuery = window.matchMedia("(min-width: 992px)");
        lgQuery.addEventListener("change", function () { setOpen(false); });
    }

}());
