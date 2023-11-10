const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export default async (req,res)=>{
    const {items,email}= req.body

    const modifiedItems=items.map((item)=>({
        description: item.description,
        quantity: item.quantity,
        price_data: {
            currency:"ja-JP-u-ca-japanese",
            unit_amount: item.price * 100,
            product_data:{
                name : item.title,
                images: [item.image],
            }
        }
    }))

    const session = await stripe.checkout.session.create({
        payment_method_types:["card"],
        shipping_rates:["shr_1O7CFPKFyOGfGfPBogC5eLUX"],
        shipping_address_collection:{
            allowed_countries:["ja-JP-u-ca-japanese","US", "BD","GB","CA"],
        },
        line_items:modifiedItems,
        mode:'payment',
        succes_url:`${process.env.HOST}/succes`,
        cancel_url:`${process.env.HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map((item)=>item.image)),
        }
    })

    res.status(200).json({
        id: session.id,
    })
}