"use client";

// import { useEffect, useRef } from "react";
import { LuLogOut, LuPlus, LuUser } from "react-icons/lu";

import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";


import usePlans from "@/hooks/usePlans";
import Link from "next/link";
import AddPlanButton from "./AddPlanButton";
import PlanItem from "./PlanItem";

export default function PlansBar() {
  const { plans, addPlan } = usePlans();
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const searchParams = useSearchParams();
  // const search = searchParams.get("search");
  const router = useRouter();

  // let partialChatrooms = useRef([]);

  // useEffect(() => {
  //   if (search !== null) {
  //     partialChatrooms = chatrooms.filter((chatroom) => {
  //       if (userId === chatroom.user_id1) {
  //         return chatroom.username2.includes(search);
  //       } else {
  //         return chatroom.username1.includes(search);
  //       }
  //     });
  //   }
  // }, [search, chatrooms, userId]);

  // const handleAddChatroom = async () => {
  //   try {
  //     if (!search) {
  //       return;
  //     }
  //     const ret = await addChatroom(search);

  //     if (!ret.chatroom && !ret.ok) {
  //       const body = await ret.json();
  //       alert(body.error);
  //       return false;
  //     }

  //     const newChatroom = ret.chatroom;

  //     const chatId = newChatroom.displayId;

  //     // clearn seach param
  //     const tmp = new URLSearchParams(searchParams);
  //     tmp.delete("search");

  //     router.push(`/chat/${chatId}`);
  //   } catch (e) {
  //     console.error(e);
  //     alert(e);
  //   }
  // };

  return (
    <>
      <div className="flex flex-col">
        <div className="m-1 flex flex-row items-center">
          <span className="w-full p-3 px-4 text-2xl font-bold">Traveler</span>
          <div className="">
            <AddPlanButton />
          </div>
        </div>
        {plans.map((p: any) => (
          <PlanItem
            key={p.plan.displayId}
            planId={p.plan.displayId}
            name={p.plan.name}
            description={p.plan.description}
          />
        ))}
        {/* {plans.map((plan: any) => (
          console.log(plan)
        ))} */}
      </div>
      <div className="fixed left-0 bottom-0 p-4">
        <div className="flex flex-row">
          <LuUser size={20} strokeWidth={3} className="m-1" />
          <span className="m-1 text-medium font-semibold">{session?.user?.username}</span>
        </div>

        <div className="gap-4 rounded-full transition-colors duration-300 group-hover:bg-gray-200">
          <Link href={`/auth/signout`}>
            <div className="flex flex-row">
              <LuLogOut size={20} strokeWidth={3} className="m-1" />
              <span className="m-1 text-medium font-semibold">Log Out</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
