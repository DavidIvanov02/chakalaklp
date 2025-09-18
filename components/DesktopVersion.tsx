import Image from "next/image";
import { TimeLeft } from "@/utils/useCountdown";

interface DesktopVersionProps {
    timeLeft: TimeLeft;
}

export default function DesktopVersion({ timeLeft }: DesktopVersionProps) {
    return (
        <div
            className="hidden md:block min-h-screen w-full relative"
            style={{
                backgroundImage: "url('/assets-desktop/Landing_PalmsBet_Kumbata_Background.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="max-w-7xl mx-auto px-8 py-6">
                <div className="grid grid-cols-12 gap-8 items-center mb-8">
                    <div className="col-span-6">
                        <div className="text-left">
                            <div className="-mb-26 -ml-36">
                                <Image
                                    src="/assets/Landing_PalmsBet_Kumbata_Title.png"
                                    alt="На чакалък за"
                                    width={600}
                                    height={100}
                                    className="h-auto"
                                    priority
                                />
                            </div>
                            <div>
                                <h2 className="text-4xl font-bold mb-1">СПЕЧЕЛИ PLAYSTATION 5!</h2>
                                <p className="text-xl mb-4">Участвай в теглението с три супер лесни стъпки!</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-4 text-white">
                                <Image
                                    src="/assets/Landing_PalmsBet_Kumbata_Number1.png"
                                    alt="1"
                                    width={32}
                                    height={32}
                                    className="flex-shrink-0 mt-1"
                                />
                                <div className="pt-1">
                                    <p className="text-xl leading-relaxed">Регистрация в PalmsBet с <span className="font-bold cursor-pointer">линка ми</span></p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 text-white">
                                <Image
                                    src="/assets/Landing_PalmsBet_Kumbata_Number2.png"
                                    alt="2"
                                    width={32}
                                    height={32}
                                    className="flex-shrink-0 mt-1"
                                />
                                <div className="pt-1">
                                    <p className="text-xl leading-relaxed">Активация на <span className="font-bold">стартовия пакет</span></p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 text-white">
                                <Image
                                    src="/assets/Landing_PalmsBet_Kumbata_Number3.png"
                                    alt="3"
                                    width={32}
                                    height={32}
                                    className="flex-shrink-0 mt-1"
                                />
                                <div className="pt-1">
                                    <p className="text-xl leading-relaxed"><span className="font-bold">Готов си!</span> Тегля победителя</p>
                                    <p className="text-xl leading-relaxed">на лайв в Kick на 25.10.2025г.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <a
                                href="https://www.palmsbet.com/affiliate/?marketingCode=PB-0087&banID=&brand=ecasino&ns=PS5&clickid=&pages=register"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/assets/Landing_PalmsBet_Kumbata_Button.png"
                                    alt="За участие"
                                    width={280}
                                    height={70}
                                    className="cursor-pointer hover:scale-105 transition-transform"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="col-span-6 flex justify-center">
                        <div className="relative">
                            <Image
                                src="/assets/Landing_PalmsBet_Kumbata_Baner1_v1.png"
                                alt="PlayStation 5 с Кумбата"
                                width={900}
                                height={700}
                                className="h-auto max-w-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-white text-6xl font-bold -mb-6">АКО НЕ СИ РАЗБРАЛ</h2>

                    <div className="flex justify-center">
                        <Image
                            src="/assets-desktop/Landing_PalmsBet_Kumbata_Steps.png"
                            alt="Steps"
                            width={1200}
                            height={300}
                            className="h-auto max-w-full"
                        />
                    </div>
                </div>

                <div className="text-center mb-8 mt-8">
                    <h3 className="text-white text-4xl font-bold mb-6">ДО ТЕГЛЕНИЕТО ОСТАВАТ:</h3>
                    <div className="flex justify-center space-x-4">
                        <div className="flex flex-col items-center">
                            <div className="bg-black text-white px-6 py-4 rounded-lg text-4xl font-mono min-w-[80px] text-center">
                                {timeLeft.days.toString().padStart(2, '0')}
                            </div>
                            <span className="text-white text-sm mt-1 font-medium">ДНИ</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-black text-white px-6 py-4 rounded-lg text-4xl font-mono min-w-[80px] text-center">
                                {timeLeft.hours.toString().padStart(2, '0')}
                            </div>
                            <span className="text-white text-sm mt-1 font-medium">ЧАСА</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-black text-white px-6 py-4 rounded-lg text-4xl font-mono min-w-[80px] text-center">
                                {timeLeft.minutes.toString().padStart(2, '0')}
                            </div>
                            <span className="text-white text-sm mt-1 font-medium">МИНУТИ</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-black text-white px-6 py-4 rounded-lg text-4xl font-mono min-w-[80px] text-center">
                                {timeLeft.seconds.toString().padStart(2, '0')}
                            </div>
                            <span className="text-white text-sm mt-1 font-medium">СЕКУНДИ</span>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-3">
                    <a
                        href="https://www.palmsbet.com/affiliate/?marketingCode=PB-0087&banID=&brand=ecasino&ns=PS5&clickid=&pages=register"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <Image
                            src="/assets/Landing_PalmsBet_Kumbata_Button.png"
                            alt="За участие"
                            width={300}
                            height={70}
                            className="mx-auto cursor-pointer hover:scale-105 transition-transform"
                        />
                    </a>
                </div>

                <div className="text-center text-white text-sm">
                    <p>В сила са общи условия. Натисни <a className="font-bold cursor-pointer" href="/documents/Palmsbet_Т&С PS5_Final.pdf">тук</a> за повече информация. 18+ Хазартът носи риск от развиване на зависимост</p>
                    <p className="font-normal">Отговорна игра</p>
                </div>
            </div>
        </div>
    );
}
