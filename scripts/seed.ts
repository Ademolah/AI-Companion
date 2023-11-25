const {PrismaClient} = require('@prisma/client')

const db = new PrismaClient()

async function main() {
    try {
        await db.category.createMany({
            data: [
                {name: "famous people"},
                {name: "Movies & TV"},
                {name: "Musicians"},
                {name: "Scientists"},
                {name: "Animals"},
                {name: "Games"},
                {name: "Philosophy"},
                {name: "Tech Entrepreneurs"}
            ]
        })
        
    } catch (error) {
        console.error("Error seeding default categories", error)
    } finally {
        await db.$disconnect()
    }
}

main()