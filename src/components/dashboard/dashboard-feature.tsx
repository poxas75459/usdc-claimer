/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2UnGYD9Mh7SkFHaxpCaNSeMTGFZsbdz8sMauTZyveHc1H9dEpaxcf1hjdfVFAMdhJiHsALRzLKkm6vphVA4Q4BLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yB4TA9ifZ87WxLzdsHL66FMh9zmtRsD46Sq5tDDzFRdKZ9tbCbZWh2SDv9KDUpYAkPMfYgos3wQPsUBzmLdXtVP",
  "key1": "4dguvbmNLvyjs3SPKLjhEBp91DAkm5aN1gYmwAT1sczcSskTz4LeJQPbmcEDKs2QQ84vaEDvJo2cXa5zeroP68Sw",
  "key2": "3ruZaXoFDstvpVGDrZqDjRXRAUdBQATxqEoiCU1ftjbt4wkci2pJ7VSWdi24KZCNajGHzAYWyAww89reu3zYeu9J",
  "key3": "4g3kJencpgjYriZ5vfmAP3Jqz3gtfjztnoSA25uZkJQMngFZ3yVd5SC8Barf8L6t5peiy8s3f4hZKVqq4hc6WjYM",
  "key4": "4ZCWduY7oEGofEQm2hMS8x6dvuoHrUzkdxA2DroGZnp4cSyWmizSBFi3Em6fmQQM3EH1nzwuj8ZPoXdAkUGeGp7a",
  "key5": "uGjLfJ8Bq2MDSv2GXRFG46bg5u2h46JywGbcBwWtVz2fSMJtnjy5cqDnSDnRAQhzqSE8uBpUj3n2JK3pzHC4ruW",
  "key6": "3QmMnRFutg1vkxgDrJWEbb4PjT8XBLR4o9DW4ASWBJCt7YQpDT3wRChaG8aGZw8Te98iE2Kaw7dNqNPH2h6BfHau",
  "key7": "4JbPtArLisa4Vo7zVeXNKqoCXKViHqvCoY8afvtLqLoFxRHVVwKhNnFD6dfmpiFP4SxoqMw2SqhL38DyhcKzjNYE",
  "key8": "3PxvKdKtZ8CW5yL7KXotPsyksQSKayZ8SaqED5cg1c2RMcioGUECgf2rTkdHLW2mG49U74rLVNkBDdyCzdJa6Cfi",
  "key9": "NkLGQmK27j5Y58NhZVBn6j4UJRKAhdtL92YMg5sgZ3wrVPQN3oNtbPQw2wNgW6MKS3n5ypQgYizXz5pMySjXhgJ",
  "key10": "2Fh9uMHfGWVGfgqKWsQ2HN8BAChxv4Qw56ttu3jqJEPYKVYeYybJyTgwi5nFfZ4PjuHoHxg4S8gTo2E4ytvKriuK",
  "key11": "4gWsx9XzHr2UzV3AX6pTxHrXrk28QD4Zptu2UqugDgEzWt5PwFswR42Uggc3r1RZuubZQ6kfYQQyUAR77g2Q6Avc",
  "key12": "28HSbmE9axVECr7LmGXgdToYADK3mGjKn8A3yPGmw77v1uHTfmt8cgs8tRp1aemP5rGEzR9LgjDkU1oFbrgohvYz",
  "key13": "4HTCsaJKocz8UJM64SYg1icboM2KCBn4bzQTCXWdb6ij5F6x5BTJchYQgTVhzUfYbzDxJCDovWKHDnyKc1a2hDUD",
  "key14": "5zGjY6j6JQAFFJjhtpG2Tx7qmubJs3KDN8xjbsPPg6AWRH5vDvRnCyVh83vV7rEufa5mbTbYNRSBBFwCoNDrqX5B",
  "key15": "qQEezzokuDJXJszQAwUK4WcrCGxGkLBXkhd3Xce4hjT5apaK5DYUyjQvZujXdYhifBn6xf6vx5ynevi8Lz5D9Kg",
  "key16": "54nqf5qdAsa4EVdDRjri7s5pfjZA6NYDgDrHV9ozV85GuVa2nFcgoueNMCx9ANF83fwsebGHTX5BLfAWc7YSCbm2",
  "key17": "3Jy2EW36HDPxXSMPkjpwtP4nmJ7uis7ShHZ68YhAH8D5GDLShU11WQPiJQEjp4WgmdDEadoZMXJws7RDLWXhPRq3",
  "key18": "4MypxQVrbkhrZXS6hCK9Uo9WbNgsW3ykAZuQXbjv2gFLGRqjzvLT9yTb7ASQdWb6btcvefPSFehkyu7KBaafzg8L",
  "key19": "2LLUMmLndbeKGwtTX8rrqoiguveGwi7bJiZt4Uc3U8YygVyptKZyr6MP5xCSAUiw7a1HPKkfHbDD51tQuAxbCeCi",
  "key20": "4TaDbV2uuk7hfqatEz6GYFEuAy7cnyCzEQy1mbGWYCuQF8MmVx6wSWwetvXMGMib4SxN4NAwuAwF9PSjpQWKnUEa",
  "key21": "3jBJLT7vN13Wd5i8fDUFD7A22tarVcaVVVsakw9DtMR4TYhAgCjuY8noAVYHYBmcuLEckkiCsstnHei9huNFWQLt",
  "key22": "4BqPcoDXEL5owqas1wXRV2buSjFxa7QxfsvNpdek6Jk1DfQChhayVFiLfFadZV1Zr3cBLStjrmTgGULD3FH2b79i",
  "key23": "5qfJUTUZL1cjMcwzhRkCxYeVGVeTutuEKqwxGQAjCJk39kbwGfPVjxr8rmF5BeEk6MoThb12Cp6U1PP8sgYrAD9",
  "key24": "5LT46sdCXUtZR6C4sNDNGZB9LPRj8NuZB1KdwdgpGbdrAECgxjoJW7M6x4Cxx3xEJoUiXYVmb7qZYy1JQu5x3wEg",
  "key25": "fCVdNywoCFoTedz2eCdhcZNMVjptn6wzX4cDejR4o6ibxgAdjryKef5WfEMMBh6qtyjShHdK41jCSu2VaqXn3Da",
  "key26": "2d8uZksWzNJLptdBetEPJ8R61fKtxaLuGHQYeb9NGrbiNcFvaoWwFgMYsD8r3AYpyuybhCaULeTm5uDK5GgvRfeT",
  "key27": "47U6aHhNjqHi1vvTy8ntN6MT2rgdeTHuSXxMHVFAALXT5GGD4veR1PKEg8MQM4HPgVSXo5JhnW4n3uF7MDUBBzus",
  "key28": "QgZGQ2qQHnEBaAgghUDa67iFRJ7EBy9ghsWDZGjybvyRjhNJkMB9Y5L65fkfiAkoahmPeHaVuiNcE4GnuMjoSzw",
  "key29": "3fcA5skMti9ziV7DpBPKsVegFiHdrKA8hgx9G52f89XJ7mhyp1RjFRN1hxaT3kbY4XN95tmKuFXVfn4Ey2f9pdVo",
  "key30": "5AU9hzJBE2CH7medbVf4Y4veWfo88m7tofHCpYtHCLwnfVK7geYbx65mR9xr7DvZG4ZsabcC28CMKtkzps4RE4hB",
  "key31": "2hGte9PHta9yz98AubMwC3RLuWWmKjHn71826iwVtCXbruSfwM9cqtqYVogrYHjuZYTej99wJXKcDdb1ytSJ741K",
  "key32": "5vCyWY3JkSTJg3SLqQ3rbHe9jo4gsUQapvmSyKmeLu29L8Wy4165665htGWCy2ZNsBpNbX9RrKfgc9YRKwge57yA",
  "key33": "WCFcvK4YmEEUhV2Nh85rtV2bkwjsTNwfAjh4MRTgqRYAfsAqmjU4gatnh45M5DYG9B7Q1tTqiwwTzn5Jg4hExwU",
  "key34": "4qSq37sxjpLxBRCdJXpsna1L4waFTGLzbDcubJShd7RA2472NuBsjrUG9W5k5wB2LKfZD66PTkb9PYxQZccxf9Ax"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
