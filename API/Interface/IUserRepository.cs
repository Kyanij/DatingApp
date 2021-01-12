using System.Collections.Generic;
using System.Threading.Tasks;
using API.Dtos;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Interface
{
    public interface IUserRepository
    {
        void Update(AppUser user);
        Task<bool> SaveAllAsync();
        Task<IEnumerable<AppUser>> GetUsersAsync();
        Task<AppUser> GetUserByIdAsync(int id);
        Task<AppUser> GetUserByUsername(string username);

        Task<IEnumerable<MemberDtos>> GetMembersAsync();

        Task<MemberDtos> GetMemberAsync(string username);


    }
}