using System.Linq;
using API.Dtos;
using API.Entities;
using API.Extensions;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser, MemberDtos>()
            .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(src =>
             src.Photos.FirstOrDefault(x => x.IsMain).Url))
            .ForMember(dest => dest.Age, opt => opt.MapFrom(src =>
            src.DateOfBirth.CalculateAge()));
            CreateMap<Photo, PhotoDtos>();
        }

    }
}