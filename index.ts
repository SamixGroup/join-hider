import { config } from "dotenv";
config()

import { Telegraf } from "telegraf";
import Context from "telegraf/typings/context";

const bot = new Telegraf(process.env.TOKEN as string)

bot.on(['left_chat_member', 'new_chat_members'], async (ctx: Context) => {    
    ctx.deleteMessage().catch(err => console.log(err)
    )
})

bot.launch()