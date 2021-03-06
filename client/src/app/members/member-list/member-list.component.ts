import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  constructor(private member: MembersService) { }
  members: Member[] = [];
  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    this.member.getMembers().subscribe(member => {
      this.members = member;
    })
  }



}
