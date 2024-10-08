// @ts-ignore
import NavMenu from 'app/NavMenu';

// FamilyApps Navbar Schema
export const aichatNavbarSchema = ({ navigate }: { navigate: any }) => ({
    left: {
        items: [
            {
                key: "home",
                onClick: () => navigate('/')
            },
        ]
    },
    middle: {
        items: [
            {
                key: "title",
                content: "Aichat Micro-Frontend version 2.0.1",
            },
        ]
    },
    right: {
        items: [
            {
                key: "menu",
                anchor: "right",
                content: (<NavMenu />)
            },
        ]
    },
})