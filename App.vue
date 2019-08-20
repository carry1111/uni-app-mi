<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	uni-page-head{
        display: none;
    }
	*{
		margin: 0;
		padding: 0;
	}
	ul{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	.clearfix::after{
		content: "";
		display: block;
		clear: both;
		overflow: hidden;
		height: 0;
	}
</style>
