import { BsFillCalendarDayFill, BsFillPhoneVibrateFill, BsPinMapFill } from "react-icons/bs";

const ContactInfo = () => {
    return (
        <div>
            <div className=" py-16 flex justify-center items-center gap-10 bg-black text-slate-300 text-xl">

                <BsFillCalendarDayFill className="text-4xl"></BsFillCalendarDayFill>
                <span>
                    <p className="font-semibold">We are open monday-friday</p>
                    <p className="font-semibold">7:00 am - 9:00 pm</p>
                </span>
                <BsFillPhoneVibrateFill className="text-4xl" ></BsFillPhoneVibrateFill>
                <span>
                    <p className="font-semibold">Have a question?</p>
                    <p className="font-semibold">+2546 251 2658</p>
                </span>
                <BsPinMapFill className="text-4xl" ></BsPinMapFill>
                <span>
                    <p className="font-semibold">Need a repair? our address</p>
                    <p className="font-semibold">Liza Street, New York</p>
                </span>
            </div>
        </div>
    );
};

export default ContactInfo;