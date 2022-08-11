import React from "react";

export default function Sidebar() {
    return (
        <aside className="py-6 px-10 w-48 border-r h-6 border-gray-200">
            <img src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-banner-pic/bfd8ca962d0924ca9109bce472a2633d.png" alt="landX-logo" className="w-32 pb-10" />
            <ul>
                <li>
                    <a>
                        <span>dashboard</span>
                    </a>
                </li>
                <li>
                    <a>
                        <span>dashboard</span>
                    </a>
                </li>
            </ul>
        </aside>
    );
}
