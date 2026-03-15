export const CTA_URLS = {
  foundingTeamBooking:
    "https://outlook.office.com/book/FoundationTeam@superintelligent.se/?ismsaljsauthenabled",
  skoolCommunity:
    "https://www.skool.com/the-athlete-skills-institute-4906/",
};

export const CTA_TYPES = {
  BOOK_MEETING: "BOOK_MEETING",
  JOIN_COMMUNITY: "JOIN_COMMUNITY",
};

export function getCtaUrl(type) {
  switch (type) {
    case CTA_TYPES.BOOK_MEETING:
      return CTA_URLS.foundingTeamBooking;
    case CTA_TYPES.JOIN_COMMUNITY:
      return CTA_URLS.skoolCommunity;
    default:
      return CTA_URLS.skoolCommunity;
  }
}
