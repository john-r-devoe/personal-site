import Image from "next/image";
import ProfileImage from "@/public/profilepic.jpg";

export default function AboutMe() {
    return (
        <div className="px-page-margin py-section-y-padding w-full" id="home">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-24 items-center justify-items-center md:justify-items-start">
                <Image
                    src={ProfileImage}
                    alt="A profile picture of John DeVoe"
                    className="rounded-full border-3 border-solid border-gray-200 w-48 h-48 md:w-auto md:h-auto object-cover"
                />
                <div className="flex flex-col justify-center items-center md:items-baseline gap-3.5 text-center md:text-left">
                    <h2 className="text-3xl font-black">Hey, I'm John DeVoe</h2>
                    <p className="text-2xl">
                        I'm a current computer science student with experience in Web Development and Database Management. Recently, I've been looking to get more involved in Machine Learning and High Performance Computing. I am a reliable and dedicated team player with a hard-working attitude and exceptional observational, organizational, and communication skills. I look forward to hearing from you!
                    </p>
                </div>
            </div>
        </div>
    );
}