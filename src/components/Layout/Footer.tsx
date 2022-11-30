import React from "react";

export const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="max-w-5xl mx-auto">
                <div className="py-16">
                    <img src="/logo-dark.png" className="h-10" />
                    <div className="flex gap-3 mt-4">
                        <img
                            src="/app-store.png"
                            className="h-9 px-1 pb-[2px] border border-stone-500 rounded"
                        />
                        <img
                            src="/play-store.png"
                            className="h-9 px-1 py-[2px] border border-stone-500 rounded"
                        />
                    </div>
                </div>
                <div className="border-t border-stone-600 text-white w-full h-16 flex items-center gap-4 text-xs">
                    <div className="text-stone-400">© 2022 Gypssy</div>
                    <div className="h-1 w-1 bg-stone-400 rounded-full"></div>
                    <div className="text-stone-400">Privacy Policy</div>
                    <div className="h-1 w-1 bg-stone-400 rounded-full"></div>
                    <div className="text-stone-400">Terms & conditions</div>
                    <div className="flex-1" />
                    <a href="#" className="underline underline-offset-2">
                        Instagram
                    </a>
                    <a href="#" className="underline underline-offset-2">
                        Twitter
                    </a>
                    <a href="#" className="underline underline-offset-2">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};
