import {fetchTeamMembers} from "@/pages/api/team";
import {HeroChiSiamo} from "@/app/(pages)/chisiamo/components/HeroChiSiamo";
import {TeamCards} from "@/app/(pages)/chisiamo/components/TeamCards";

export async function getTeamMembers() {

    let team = await fetchTeamMembers()

    return {
        props: {
            team,
        },
        revalidate: 10, // In seconds
    }
}

export default async function  Page() {
    const team = await getTeamMembers()
    return(
        <>
            <HeroChiSiamo/>
            <TeamCards team={team.props.team}/>
        </>
    )
}
