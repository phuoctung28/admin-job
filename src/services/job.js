import axiosInstance from "./axiosInstance";

const JobAPI = {
  loadJob:  () => axiosInstance.get("/job/"),
  addJob: (formData) => axiosInstance.post("/job/add", formData),
  loadCompany: () => axiosInstance.get("/company/"),
  deleteCompany: (id) => axiosInstance.delete(`company/delete/${id}`),
  fetchCompanyInfo: (id) => axiosInstance.get(`/company/${id}`),
  fetchCompanyJob: (id) => axiosInstance.get(`/job/company/${id}`),
  loadCategory: () => axiosInstance.get("/jobCategory/"), 
  addCompany: (formData) => axiosInstance.post("/company/add", formData),
  loadIndustry: () => axiosInstance.get("/industry/"),
  loadSemester: () => axiosInstance.get("/semester/"),
  loadMajor: () => axiosInstance.get("/major/"),
  fetchSemester: (id) => axiosInstance.get(`semester/${id}`),
  fetchStudentInSemester: (id) => axiosInstance.get(`/applicant/semester/${id}`),
  // addJob: (formData) => axiosInstance.post("/job/add", formData),
  loadUser: () => axiosInstance.get("/applicant/"),
  searchJobByCompany: (id) => axiosInstance.get(`/job/company/${id}`)
}

export default JobAPI;