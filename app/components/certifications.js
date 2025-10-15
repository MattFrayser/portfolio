'use client';
import { useEffect } from 'react';

export default function Certifications() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
        script.async = true;
        script.type = 'text/javascript';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section id="certifications" className="certifications container">
            <h2 style={{ fontWeight: '700' }}>Certifications</h2>
            <div className="certifications-grid">
                <div data-iframe-width="350" data-iframe-height="270" data-share-badge-id="3129f25b-8245-4298-9cb8-80decb301293" data-share-badge-host="https://www.credly.com"></div>
                <div data-iframe-width="350" data-iframe-height="270" data-share-badge-id="c06842cb-ee01-41c4-821e-e487b6f288f2" data-share-badge-host="https://www.credly.com"></div>
                <div data-iframe-width="350" data-iframe-height="270" data-share-badge-id="ccdab4e9-790c-48ba-b60a-285207e332f7" data-share-badge-host="https://www.credly.com"></div>
            </div>
        </section>
    );
}       


