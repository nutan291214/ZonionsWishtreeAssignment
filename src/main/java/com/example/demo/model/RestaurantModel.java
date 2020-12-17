package com.example.demo.model;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name="restaurant")
public class RestaurantModel {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Column(name="restaurant_name")
	private String restaurantName;
	@Column(name="address")
	private String address;
	@Column(name="phone_no")
	private String phone_no;
	@Column(name="open_time")
	private String open_time;
	@Column(name="close_time")
	private String close_time;
//	@Column(name="img_path",columnDefinition = "LONGTEXT")
//	private String img_path;
    @Column(name="status")
	private String status;
	@Column(name="updated_date")
	private String updated_date;
	//for image upload
	@Column(name = "name")
    @JsonView(View.FileInfo.class)
  private String name;
    
    @Column(name = "mimetype")
  private String mimetype;
  
  @Lob
    @Column(name="pic")
    private byte[] pic;

	
	public RestaurantModel() {
		super();
	}

	public RestaurantModel(int id, String restaurantName, String address, String phone_no, String open_time,
			String close_time, String status, String updated_date, String name, String mimetype, byte[] pic) {
		super();
		this.id = id;
		this.restaurantName = restaurantName;
		this.address = address;
		this.phone_no = phone_no;
		this.open_time = open_time;
		this.close_time = close_time;
		this.status = status;
		this.updated_date = updated_date;
		this.name = name;
		this.mimetype = mimetype;
		this.pic = pic;
	}
	public RestaurantModel(String restaurantName2, String address2, String phone_no2, String open_time2,
			String close_time2, String status2, String updated_date2) {
		this.restaurantName=restaurantName2;
		this.address=address2;
		this.phone_no=phone_no2;
		this.open_time=open_time2;
		this.close_time=close_time2;
		this.status=status2;
		this.updated_date=updated_date2;		
		// TODO Auto-generated constructor stub
	}




	public RestaurantModel(String originalFilename, String contentType, byte[] bytes) {
		this.name=originalFilename;
		this.mimetype=contentType;
		this.pic=bytes;
	}




	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getRestaurantName() {
		return restaurantName;
	}


	public void setRestaurantName(String restaurantName) {
		this.restaurantName = restaurantName;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getPhone_no() {
		return phone_no;
	}


	public void setPhone_no(String phone_no) {
		this.phone_no = phone_no;
	}


	public String getOpen_time() {
		return open_time;
	}


	public void setOpen_time(String open_time) {
		this.open_time = open_time;
	}


	public String getClose_time() {
		return close_time;
	}


	public void setClose_time(String close_time) {
		this.close_time = close_time;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public String getUpdated_date() {
		return updated_date;
	}


	public void setUpdated_date(String updated_date) {
		this.updated_date = updated_date;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getMimetype() {
		return mimetype;
	}


	public void setMimetype(String mimetype) {
		this.mimetype = mimetype;
	}


	public byte[] getPic() {
		return pic;
	}


	public void setPic(byte[] pic) {
		this.pic = pic;
	}


	@Override
	public String toString() {
		return "RestaurantModel [id=" + id + ", restaurantName=" + restaurantName + ", address=" + address
				+ ", phone_no=" + phone_no + ", open_time=" + open_time + ", close_time=" + close_time + ", status="
				+ status + ", updated_date=" + updated_date + ", name=" + name + ", mimetype=" + mimetype + ", pic="
				+ Arrays.toString(pic) + "]";
	}

	

	
	
	
	
	
}
