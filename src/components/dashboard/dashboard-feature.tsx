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
    "2TJtuSXH78WKWKBkWBrqHcFnp27J8k3rapCVJZuMaU88pMG31681GhTej9QPYD6dEzyuJ2Q5FPjkmUexWmzBVNcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dWKoocQ8RL8fbw58yqQSft6or8GZokaj3Y7HfDgkjk4jeMaCRvyyYgPWbp6TjXZxih3aqurUQPtrcqqKGCCiX51",
  "key1": "4Xi5fqwESHzYGPm6FseHEH7sKwrMSPhtua8ZVMMj2dm9SDGgELgQoXPUA7Ge5n6oeir5Y8SGe9fRvsfeb9onfAPk",
  "key2": "2D4FscK6Tw7Xx9w7dQhZ36TLouZNCL8WVpPfcFTCnnuLaVMw2wwZ7A5yD6UuJAaoVw2LjjCJKVbSfjqZmU7ZAJ8S",
  "key3": "4PBHF5bfAvXBNkBhrp4TSA1PcvPLe5MwRYjiNfjAzoFYj8AvFMNsHSqEnrR9f5edm4QSCgSgKUBQhtAocVH7Kry4",
  "key4": "mE2RQWQoukDgyDM8XWRPiiHLf4oQQxBqG7x37vckF72Gf6B7iAJ1mz9qhexgUkKZrGLFx1ZLzU9Rdbvk5uB1Bs7",
  "key5": "G1pZthFkAmRHm9Ac5W2N229cbpXzky6Uv8xdVhdMrnVweBZrqcfqQymLWicSy1PcjFdsXYBxN2V8CMWZm3p6yir",
  "key6": "4mYgagoZEjDshaBN2K6uzMo8bG1csMUEESZeDZbCSBpvgs3QgHmZsgnhNaJt8whcm2CA4zPw3SPBKV7SNq3ZPpSs",
  "key7": "3AS7LqdzfRxrMbaE6wKBemRDSpbsBabyyeQMpYkBuVj4qhdGdyWenfZrGezkPwkp9hqXCqBTmHC92XV6JSniGX7a",
  "key8": "2bB6zChRb75o8dRuP9zK3u1Q8VZB7rjdX5ty5uqhh8MwzpexyDTq9jYeabw3okFDH7tuBWhdszmbMjYgPJKZDW1z",
  "key9": "5W7tQdyFQqMC71jG5X9K5dRtNgKXcXQzCZtw4aWr5qYQddV93bPv86TzQSPGuz8AR3SELXh3nGJHVZc9KQqLFBfM",
  "key10": "r2Tet2Koscv1JhSHy77duS9nvJuJ9uuPh1B9GNJS6w6D6atpwuppWDW4gy2fvowpWSTyuYhQvQjjWSaw29U3Ezj",
  "key11": "2JRhbzenzyihR7pj375nYUas8CXBzDU7nSYUgrbax6dkwAdQHJCvX8MeV2VBcjiY72dM1vjQo5jgy5ZejTKas4rR",
  "key12": "28q7FZBEECXhYE513fHueCsqH7ERbxmwaWTULeb7eSohU4gTibhXf69LkuSDa7RRNBR9BqSw6hoPAKp8ag8A6To8",
  "key13": "3t9vRsnjCs58rQjPXw9ZyJ7THF4ZeBnvcddsRGV46NuP9A9mHmjBSR5TQx4jrnuZnq3BtASSCne63VKwscSKe6N4",
  "key14": "bA99ahJ5aXRVBQed6B646a1rQ7ZpR3E7GYeAYNKmZVwb8oPo5DV1p3iScgCWsgeF5ete5z4ft6G9ZV43nr7JtdJ",
  "key15": "MYUzqLYQyxXrBhwrUxKgakjPonSbTc9yMyNbWnzAEwxPuanBQ9hL7p9MYLZFBH6nq4UjcB2No3jEsRSgWFCRp1N",
  "key16": "GUoLCDfo4FgBYui9pFH8quGeMUKiqocMPJhPsvrm865rCjx7Ra9kxN2LXr37PULu4zqULCetV5CbD9BVbyYXzXo",
  "key17": "HBJKF2P3V2EPYWDKCVUyUipydJwoBQZmBMk2HYPaPPXri3J3qDnzAf9UqFk82cxByvRtZ2wKEUPQCcM1pwNn11L",
  "key18": "66YD1di44zw6L3CXMfaf4kTSpdqifN1UfsLKnNyMds8JwS94Vv6XuYcnzz3Sb7bj2P4KGvg9Mmh3k6U1JgenKayH",
  "key19": "kdvzom2wAfbSf6R1CYyVfyXEVkWsH9JDveX97bYW8sDUXGJFyh73NTybnAvrhXnazP5WdgPZA41YSUJC5we1ERK",
  "key20": "AhHwuG4aEhTWhjwHwdcMZmBa7eLvczzJWvyyuxfbd3XufH4bbn2Rcx9T8wXMNwGtwNoHtx4ynK47MioEKtS7QmN",
  "key21": "5eooq2BsxHqRaVexDkh5ERnkBm4xfBHW3GJ4fnYZxEz3q5hvun4ApXbnoE9ptpANFQuPJiKsJNKg4mSFYJVPrQxi",
  "key22": "5PrKCmWYM8a9cWe6epxKujbgCaSd87zQSXicRV5vtbUBNkzwzJFDoMpSrgiRzXhBGkghBN1s292XD2sduKHS5SHx",
  "key23": "5c6x5CGhJ5Fwk66pgJhvs1ApavC8yEHicXpPAQLuANBgY7aSQPsksf1vTwjctZV2Rv6Fpzc9xgk6c5pUJnMZaWKN",
  "key24": "2rMuhqXd3Gj5d1ccKihiqyZHXKqCZAbbFFh78QSKQpn5ZLW6ErAWxby1KoJKUnSUnaqRbrqE4ZgHjuyWT3Jxpdgc",
  "key25": "uF46ggAr3VFfN6tXTupnp5uFSgMv5TwJtgLAtY1LULUj8JrSK1bHxuShVhHrEhS1yf2rfXysiuQT7rNnsyMrTVe",
  "key26": "3wiUzfAtZiKB5ZFu3v94Uh8hbQxA7dyibwXVXHWN1gEDz4ny7vb98WQJrK1CjVY8zXbof86o8mp54xwfLmjEUzXe",
  "key27": "3FfdH4K33pR3EqxMBfXAHmzLU3CStsuQhXP4f8y7Ds7jFdDPudaKmyoVfpqT6dhXYq6c753uy7TneFs9YdcyETyy",
  "key28": "5XvhGGx14jbDvH6ePb8bATdzS86d2MZCWU413nbp4xQ5G6jm4VdzE2KdtcTzXFUFxBLEACztziQJm8pYGsc2XHA1",
  "key29": "2T4P6rdkxiRRMYR6h8NEx1QittnFdr1eNp4uCJNLLcWLcBHjhxiNVzHxCoFCRxAMKya9xGTJui47b6kYa6N3apHw",
  "key30": "58SHXzf29V5oA3nPS4jwg4AHBJYsJad4g1xLY8drNZjMiwgXStHvBUxH1ysCMhSdsnzWmQFsAbYuieDo8DQFk7V1",
  "key31": "4meABdaTefUBrKGYhDrKPGZEPc75dZRuNMCcZTu5u1yVadAJ5E8qDBwJgRsu96F8WCfN9pygPaEAoHpxdWrfxqTY",
  "key32": "4K2VLcTwSjFvqpETU3SvkgBX7MZVBBRTitBYhyh2HL1NR1mShu7MVs8hQdujYhr3mTQiouVDcDHDsHazx3q3H5MK",
  "key33": "2Zc2Ptv27yhZbmAaD9Tiwdq3TsFsXVHAutFfHND6Z6j16Hu4tdMKUW1rBwvZaREFBXHnVhNXbDuy6YAvwXY3VQCa",
  "key34": "XsUKq7cqZvmjVoWEZf5gmBotRTnTYhRwbsvzmdfspoxkuanWmocy7siY42rNRvnMJn3avdCxWisBhXS5QnAuiUk",
  "key35": "rm4Uy7zPgJUUcnGffDMqrkcXzPsLnXSas3aQJh6Yg3cMbR4eH4f4Xx4Rgv3i8vTii6PNqJW2koo3avscHgegSAD",
  "key36": "2nYHRJBAvWTnUNZhvJ6oB6VabQ4xrSLyH91axFr8D3SPPg252ybMybdsWsAZz7MpvUDED1j7WAzC8aWbby4twi1w"
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
