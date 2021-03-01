<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'adastra' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'cSh6vuWA& mFfb~3?( )Sd^;!Z&n[FgDM- j850Y9sXMb[bBlUF,I4aQU~_wOZU&' );
define( 'SECURE_AUTH_KEY',  '/ g[#<^u)J+sx=|(lBxR2CZ(UT}GiD}i4z*s6Ts[gs._U$LNbqT5S]v%%-,FyZ;`' );
define( 'LOGGED_IN_KEY',    'B[kdLfz9R!#st_b:%vw=u0K18aAvpb-R^Ux<9s+qc8Jo3EUfRy]q64[@l){MkHO-' );
define( 'NONCE_KEY',        'w62RxHm}_`,)YC*)f?7DI(pUr:|ogVzK?d-W{X1 %9@</uSQ,^0]N6<r;BTT-_Q$' );
define( 'AUTH_SALT',        'Ku&[MuDu+LgK_A)V5#1Nzbh2=x^!IG-J.9z1S&3J%|JoZt0F1d$oK:Mi>u=>jBcy' );
define( 'SECURE_AUTH_SALT', '6[8*i.P&`k_fa7[&9:-4KreMPBTw*y-VlD$6`@8M1+;fWE,kI-v3z6D55dVP^-hw' );
define( 'LOGGED_IN_SALT',   '_bKyB`Ve}dL>JKE$=CTXlCTM&KuDx$_xj&|t`f1T=%i|4.1e+b2diKfI,N=nDqse' );
define( 'NONCE_SALT',       ')i4Sg`|o3I6U1ad4]e/U086-e8`B;aZ@bGsSrr/[NkZa+:ek[)GGg?b#%39bKz7[' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
