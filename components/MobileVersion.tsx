import Image from "next/image";

export default function MobileVersion() {
    return (
        <div
            className="block md:hidden min-h-screen w-full relative"
            style={{
                backgroundImage: "url('/assets/Landing_PalmsBet_Kumbata_Background.png')",
                backgroundSize: "cover",
                backgroundRepeat: "repeat"
            }}
        >
            <div className="w-full max-w-sm mx-auto relative">

                <div className="w-full">
                    <Image
                        src="/assets/Landing_PalmsBet_Kumbata_Title.png"
                        alt="На чакалък за"
                        width={400}
                        height={120}
                        className="w-full h-auto"
                        priority
                    />
                </div>

                <div className="w-full">
                    <Image
                        src="/assets/Landing_PalmsBet_Kumbata_Baner1_v1.png"
                        alt="Спечели PlayStation 5"
                        width={400}
                        height={300}
                        className="w-full h-auto"
                    />
                </div>

                <div className="text-center text-white px-4 py-6">
                    <h1 className="text-xl font-bold">
                        СПЕЧЕЛИ PLAYSTATION 5!
                    </h1>
                    <p className="text-sm">
                        Участвай В тегленето с три супер лесни стъпки!
                    </p>
                </div>

                <div className="relative w-full -mt-2">
                    <Image
                        src="/assets/Landing_PalmsBet_Kumbata_Frame.png"
                        alt="Steps Frame"
                        width={400}
                        height={220}
                        className="w-full h-auto"
                    />

                    <div className="absolute inset-0 flex flex-col justify-center px-6 py-4">

                        <div className="flex items-start mb-3">
                            <Image
                                src="/assets/Landing_PalmsBet_Kumbata_Number1.png"
                                alt="1"
                                width={24}
                                height={24}
                                className="mr-3 mt-0.5 flex-shrink-0"
                            />
                            <p className="text-white text-xs leading-tight">
                                Регистрация в Palms Bet с <span className="underline font-bold cursor-pointer">линка ми</span> (само регистрации направени през този линк участват в играта)
                            </p>
                        </div>

                        <div className="flex items-start mb-3">
                            <Image
                                src="/assets/Landing_PalmsBet_Kumbata_Number2.png"
                                alt="2"
                                width={24}
                                height={24}
                                className="mr-3 mt-0.5 flex-shrink-0"
                            />
                            <p className="text-white text-xs leading-tight">
                                Активация на <strong>стартовия пакет</strong>
                            </p>
                        </div>

                        <div className="flex items-start mb-4">
                            <Image
                                src="/assets/Landing_PalmsBet_Kumbata_Number3.png"
                                alt="3"
                                width={24}
                                height={24}
                                className="mr-3 mt-0.5 flex-shrink-0"
                            />
                            <p className="text-white text-xs leading-tight">
                                Готов си! Тегля победителя на лайв в Kick на 25.10.2025г.
                            </p>
                        </div>

                        <div className="flex justify-center mt-2">
                            <a
                                href="https://www.palmsbet.com/affiliate/?marketingCode=PB-0087&banID=&brand=ecasino&ns=PS5&clickid=&pages=register"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/assets/Landing_PalmsBet_Kumbata_Button.png"
                                    alt="За участие"
                                    width={100}
                                    height={28}
                                    className="cursor-pointer hover:scale-105 transition-transform"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-white text-3xl font-bold text-center">
                        АКО НЕ СИ РАЗБРАЛ
                    </h2>

                    <div className="relative">
                        <Image
                            src="/assets/Landing_PalmsBet_Kumbata_Path.png"
                            alt="Path"
                            width={600}
                            height={600}
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <a
                        href="https://www.palmsbet.com/affiliate/?marketingCode=PB-0087&banID=&brand=ecasino&ns=PS5&clickid=&pages=register"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/assets/Landing_PalmsBet_Kumbata_Button.png"
                            alt="За участие"
                            width={180}
                            height={48}
                            className="cursor-pointer hover:scale-105 transition-transform"
                        />
                    </a>
                </div>

                <div className="px-4 py-6 text-center text-white text-xs leading-relaxed">
                    <p className="mb-3">
                        В сила са общи условия. Натисни тук за повече информация. 18 + ХАЗАРТЬТ НОСИ РИСК ОТ РАЗВИВАНЕ НА ЗАВИСИМОСТ ОТГОВОРНА ИГРА
                    </p>
                </div>
            </div>
        </div>
    );
}
