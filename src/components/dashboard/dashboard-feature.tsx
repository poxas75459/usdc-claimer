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
    "Ya4TB1JAwDfg5zso1xnDWuVmkdt2jZD53VWZQ1uvFHW6ucujTQteDNaF8iQ6JPBTQyZF6EVRH9Dyf79sDuB4b4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42CtYrWA59KzRByzxnNXtJH4743M1phQYV5ssURPDfiWSVpqQezEqzLPvqg6kwh4aGAJUwNpGicMDkjDveCR3S55",
  "key1": "4Lj4AU7XFXbxNgeDA36ej7t4aWQwFxao4CkFKFkWnwaJmLYR3yssNLK82ozZH8Hs6AaaX4WaFpS7k2FUsW4bFWZf",
  "key2": "2D9dBZFwdHRidAD3ujtRPhca37u4zoFrphYRctL3aniBaJmsAsSkWi2ZgT7YMrh3fUrkh4eqz3BHnH2fXd9566Ck",
  "key3": "5M3kocwhVznAeH6nHmBGci2CUCqFmEAraGEFhwqndtrqegwUQnCHz2BTgzn9WGpr3Hm3Vd4Ho1NeJAvgbDzWtrUh",
  "key4": "pMNnp6E4bPfJyrNHEP57RRoEVFayJT78ELS7owh7RgPwAfGqWrU1cg3CFxSbY9yUe5ViF3v4Zur42yqf93c1HBU",
  "key5": "263gis8eYNncAmXZEUQ1TYZmwwxR5c8PWF96XRz3vbRgRNqVfuSjcYFkjnb7JNbDw5C9cnghw55SSgTpDhBcXAkF",
  "key6": "Lpk9P5uyy7kwqXZML9ZXSR4ezpcd4EZNj4SeHhfucBDcKADv6HxCVzNRoNKzagitxgsmGct6qY5B2vCbv7cGbAw",
  "key7": "3mZy9S7SoK5Q8Ygt3FJDaPfomwPxTWppe8TECa8UKqLwr3xRUkehCKkfa9ph1NoqPcA5gK8Tvqa7KZkeJhKErNh8",
  "key8": "3QSDASgBgGy3P2mqEK5KMhUTUNdpaxcyCP9Kt2cCB2W2XtEp6f6FMrjsZDJJpG5Nqax1zUDTeHcvhhctXkFCRKjG",
  "key9": "2pf2xxpFcafjhVymnfzoDNFGarQfc7TmawRAWPEdGo4eH4XhDJq7VNsAKb4qkZuBA62pxJbiAPtrjuMp2PLJMmJB",
  "key10": "66WY3na8nNq7jzRgBMxEfBLW4qtgrghNZjs8xv7AiETwaCGjjnZLjk6kyeobXMuRjgiZM1YdqZjwYD5syU8BA5SN",
  "key11": "4BN84gF41QY7JfzmqstuxGnCQ32LvKouHwRRycNgfjiSsn2niKSkQQ6iEkNCHsPVMKJLPgerh37ZkjDRmkkZt22A",
  "key12": "2zUh3kEuZ7FYqGfix5oRjGvVbCDLsv5gXeJQWgbaoufpLy9wVNzFeweJ8XJBqA5jnC3fG29P89FZeQRvFhgF34hK",
  "key13": "2NtUasStrX9vj24wCjoJyf2zE2wR8arPY1sSXTTgFrjxqGDgBEjwdW7fXys4ASAXQgdwRQmR68bgpqwUVEcPT8PG",
  "key14": "4XwKMhLezgDfLWJgFoe71UrGn4fX1Uo46YakJyK98eU2kdNsrhvT8xtsgyMUJLka9YPM9gDWMdKTmcwZ6XFhon3G",
  "key15": "6X6McJqh9XSDUo2B2DLn7H2vAhxVdjeTjV1uNjvzsjZn9WxcpZkSPRTQeAfaPnieo5bXJw2kXEcJ9184YhjNneD",
  "key16": "5dW8d1WK43V4PF61uxj7M8GBH6k58Vk1et6SL6vBER6o1iLBD7H5uJKkuKoKm736wEHiJjKGXbm6jBYw5KBL1ZWM",
  "key17": "3MKPueXBJ7fs9cAYyaRauvGbBJP1Uy4rLckrAsBv8ZnEFZqZYaviLEcTcNrMWCV5JGgwiaN9cewpatyME4M21MFE",
  "key18": "4GBkuSmicBXhEuX6rRmReF948fZXDyZTZoBv37vVVKRcjPC7dHkTvGvYqvRhEbcL2eRENtuVwFh7F6ecz8gZ8PdQ",
  "key19": "3pXcGhRnFb7TnKtSYmk9TB4GWxsBuPmSAUs1Kcq2uxK9A6FibGAU9vNKwAVi4rY4ve1V7WHWKv2S5zy1Z4xhGzxV",
  "key20": "5KarXy3nfoZ8AN8RVsJkx8Kp8e5wjy8Awzm7s2cHjYJ69EXeBCC3VUZyaFeJxHWXwZcrH1w3Q297yCyHnt4opstE",
  "key21": "3WzMzMnZFsyJvGeHSaWDFUxNqDLJ3k2TWEPziQhwoxx2AFw49pNmuitB7EMV4pv86qjYebtJWLTwimBcDEw8kSwJ",
  "key22": "2R4vwKTFfU2PGifUd73s2ru4FBpmLNCr6Znj1T9FbMcqKotpeLJ1uBJR6QEAwwuaHLcUg6w2fb8rpZrkNRN6US2z",
  "key23": "AZB4tBPAr8cvW7WHefJEJx823m8EWrzTd2fPxjF8cukQCDgaChVcca5BhHXBFScQ6CJpxEgMg85Qyd9x1KbzsfQ",
  "key24": "5UbPwEbRoz7JhRtapM57whX5qKucghU9Jt8BvBqEh7AQEBhgtWJ9Z3MniGn6bkkUH1fb91cLmwsxWLbiBWHvgair",
  "key25": "24JftaVfoMFtC2sHbgzqqyRUNpScQb9X4C6fm3us9wroXFJDQiMiVMwDjkZW6pVWWqCUsdts5YM7G88LjNdoP7Y2",
  "key26": "33CAXxYDEji6y8GrtkfJUGwASnThtCnibgAZdGGEVnjMnNYiUk4q6jkVrEHtd8m8HBpecsVBeTpLLPxKVt7o8Nme",
  "key27": "2sN7JmVfzqzUZzvZ4Y7NY2MqTc6eeSXVjYvrMF9caiE8sxFTJwunz45UNjH9z1X6LJHyW2CKDQEzwAQhCQNiTZFR",
  "key28": "4Rw9D62ppDb8vYYX6oDy6xwoLUVv8wYNP31JQq3Rt5wQ7Sis9DRzWpEj8VU9rg6KAGrKJ3dSqo6rjwdDAsKR8Xag",
  "key29": "3brdxUfMhisPCQeKQy5nyWx9RqVM9V8nU85CCt1AjQahVXcnjvQCuhVZ1YjhcApiqbeXhCyqVP2L53HgdgqWhqZD",
  "key30": "5AaQz4cbR9cMHbKj3kwyUDH5SnsvqndVDX4GaEzEf4dT7k4Yq1HqHwvTnbRXTj32x2YfaTnuzNcoy9s4yGsgfs8E",
  "key31": "5da8GuGuhGLFD411ny4aFq7uSM1Ka3srvaCfr5cRzEQo1arjSWAuJJJ4YWGsyPFtALNnpa91RjRqGmo4z3rUFdtw",
  "key32": "123gegLjcoyJy7N8ttXwvXEjFzZtDp5s412pH5J8acaMfkNi6WCxuvr8iAGZqd1i2FdQxsxnpZBUtt3DsnWMsihp",
  "key33": "4v6oWF3pw6Xzptnv1AY9T2tQztrDjh4gWTGhAMagefMJRZnqP4ytwuHPW8D6kWZ5SHUzKmUHNuikARbnSiQKnT3U",
  "key34": "4cnDNcUFzDvpQP8AUXHVWaXtfJGoDgMtcZnRCKd5xBjtoTgyWiY5wdbucnz7wLDPE4WXStMqmk7yE68wmPtVsgya",
  "key35": "29V1dCBRqjTGYSt1Zbzg4s4K9k67YZ19KaTh7A6r1sc24NLZJcqamj4H8xD3MiJKrU3c7YChG5oQKWdMVknUxH7o",
  "key36": "5ANkWmWai96EVW4K2TGHtduVYKncGzH5A7XmumRd1JoYLn4k1ktkTVdjmNaAoRXZwczH3ymJoMuZeFW1m6mFBS1i",
  "key37": "59p3h61G7XxUwZMih4buWMNZpKyNyjBNUiVMxLrX3sVScT3X5XUm6bz5PxmCwVrG5QnjnxxaQbroSVyERKKJwZdU",
  "key38": "GAxxsLJowD2PthTMpfMjn51LqZfpETMJpXnQUYHAmQ5R2gqq3LPCNoxxDsX4vw6TRuwHgBEY1tJmeMexnESmfvX",
  "key39": "46mEfrDobgU1HV5yAuAJwHcvXzKe5BLxzUu6i69yuvAPqtKK9w9WjXiJKBgNApiFHosZ2vdqycuWzzeqk2sEgHuw",
  "key40": "3kp3WKPpycdDG6jnsgZzXrTbF6PoUM4JGVvueZZx9RTN9EVVKD9yrbhRBgN1KpwX2aTjvCdbkyvUwRrj5KkuKnGb",
  "key41": "3XCFiEzd9Tb9TJmTSoCMFYrJyPuwefWhPaireUwqaeqg373e6EbMN9hYgndvKeX7rxav4aAvuTTvg8YMvKdJdZrS",
  "key42": "2AZC7c5ztXFUGLfsE2SSDLpAwTHwtXym5BLMbEb3rAobKF3JCbDdLw4aa2JypG1ENqZoa3VwmsKDw7cr6HiiTjdx",
  "key43": "YnquB6kmWomTnFpKbvSK2gZy2D3aJR4jpLbwXpMR1Wsn8bYKnWz6pHweAXQNBrMbBbzUvnR65837yvuZgMyx9Fp",
  "key44": "2GeKkkwS4gWrwMUmKBPWFTUouxyKdNouozm77bp6eodxhVEeyGK3Ga28tqjAWFErV9Q9sRXCFwkGybqwaoEU4QGb",
  "key45": "5LrtdxwMDu7CTzJqv87aHqJSwfAESiUAa21xH1THVhtaS56TFMjMF8mnovUeqj43wPPMTqAsWC9ACPL4zZeFytsq",
  "key46": "5b7M3UDxFuSc8MHGN3hk8BhVWGzzvE9wPDuRRbXFJNxp4G8kAQK9zHcALQaz2X44AtFdF5Yvyms7S3kRUVnwysLS"
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
