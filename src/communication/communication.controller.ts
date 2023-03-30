import { Controller, Post } from "@nestjs/common";
import { CommunicationService } from "./communication.service";
@Controller("communication")
export class CommunicationController {
  constructor(private communicationService: CommunicationService) {}
  @Post("")
  async email() {
    return await this.communicationService.sendMailNotification();
  }
}
