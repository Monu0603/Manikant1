package com.base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

public class Base {
	public static WebDriver driver;
	public static void Launchbrowser() {
		
		System.setProperty("webdriver.gecko.driver", "C:\\Users\\prabhakar\\eclipse-workspace\\AdactinPOM\\Driver\\geckodriver.exe");
		driver =new FirefoxDriver();
		
	}
	public static void Loadurl(String url) {
		
		driver.get(url);
	}
	public static void Fill(WebElement e, String  s1 ) {
		e.sendKeys(s1);

	}
	public static void btnclick(WebElement e) {
		
		e.click();
	}
	public static void SBVT(WebElement e,String test) {
		Select s= new Select(e);
		s.deselectByVisibleText(test);

	}
	public static void SBI(WebElement e,int index) {
		Select s1 =new Select(e);
		s1.selectByIndex(index);
	}

}
