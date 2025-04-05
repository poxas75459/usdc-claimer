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
    "4kt1EqeC15abG1yb1oJvJDNii2KvEgmEhnfUkNtpJjxJdfDub33PLZLaPcTydGtVaHTBhazxwTQX44CJVUstVa8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oygUKdRZSSbtD2yBBgop2S2XqVxrso9h4eYsQJ17WAxu8zEz24i964u9SN65qa9Dao7Uv2i3v6mL9GakC9Lgp13",
  "key1": "2qBWpqjueCgKLfoR5cexK9whkRBN4dPcGnuELzkCViWXxoyPhLo36wK7v1RdkFw31TdEQPQ2Nx5eLRcz81KrHuYu",
  "key2": "4LwQHK1tevumP4TruuLLYZgKqDExTTMZ4ffQABCRMGykSqLDvnjrvu9aGEWuoevnzSqMHcJGPypwtPAsExQejruK",
  "key3": "38BUY2xZNUjMRVSobf2rUadTmLnsUmoY12cmHv7j2RWej1tzLwhrQULE1jF99qav5iGn9YYj7xcvm1k4opHP6zpS",
  "key4": "4kkRuPBRYYKKL2NPNtiz4VaSumDHxMs7AYF5zEjnHFWacnuJFuYMuYJKqmAwCZ6rutM7hC7SHBCSYNKz4Y1Exda",
  "key5": "2Xq6s2qXzjtXRH45Kj3dH9CfMhEEC88R2tzo6VqkewiL4bDBLmYTjSPRheyf8uddjcTGNpbAq5wTXYxpFwx1MkbG",
  "key6": "n3CeGRmXuLocbV7Nde3vNBe23Ro6JF36AJtM5rnZnRXBjiRy7pjtq8U8mCHKjW28VLmjG2tC1phM8D5akPWYoTq",
  "key7": "3pa4aoiESCsXXoJcLeaq12P1oC6uHXgbKFLMyWxFYKyHyjbFoUNoHDyL4XWb6rRwdZEQnkfgGPeY8PTAggahLTxW",
  "key8": "34PnMLxvYdKFkoxMk3NfVVc4ggnsLTowdZsZW9nQURfQ4KhMsieqZr9bvxuNMdX9Gy2nDxvaYDTBsoFdQydZHW8R",
  "key9": "emmYwm821BPPiLkfLwJj4hT42efFAjhaWp4gqgaQn5BdDLkP8MbFSycXPi74yXJYaoVvDECC9Jzh8xEQoBTU9P1",
  "key10": "3tMrQE6LNuPA9V3DmhdsZKMrZMMAHayPHZp3TPq72HhABvqVFM2gNKVRg1P27QRyMMCzWprgk6mKzhUgtF2bNhWf",
  "key11": "4W1pnfpgKVMxpnkkvJwazWXmeEXxZ18q242Wua1LiAmwF5xj1FGeFgGLKPsZJFh3ULX6ez8vD5oV8ACLHkyviqAf",
  "key12": "3zgBQ5NEWdWK46KAPGJNBMSDiEvbeDgvAWTTqpsuWZeoo1frjvS1jnJqNCYUoeUPg5UYFGTQ1qvaTqydB4arJXtP",
  "key13": "4zy9Yo128jbU5jiLiM3uFaJJZZGftnHShCMHsvJrhuebyFh6qhXhSXoFAMvoX51mT5DYNr15VyJKiFjKbG5Yp1E3",
  "key14": "5Mi29pZxXyqALthv9nBPWZfDN4zo1jRu1tUHD1nPx5i4VHGtzVU4AeJiW3MGqsFMsCMhcBaMn7NdsDHLuKzbMJ1A",
  "key15": "3nKzL7RdzrtLM9xpoK5sZtLqhWQTMM7ftCRTnxxwfUj2fhHsbHM1Rz7phFA6Ea3bqi9ZVVG9WAavtSdU9c54zGcj",
  "key16": "5NhEqiZBycdXnNHgy4gRZs4opJoLiAebhcQMMztyYmnzXkref9tTdoo8tYTXVHpdcr6a8ZwhjSsCJ91TmvvDPw1j",
  "key17": "5hxgVkQhM6AqqVtcsZGwyKtThHrYaRDHiKFRqekfno78kg23ihWheGP86Ci1JoHUHhFVKr6khhGeQv5rwWi193Zv",
  "key18": "2zFufxrAGbZPnGrpNtttZe4Yau4u2ZNJCnDfLvEkEBdJhWbaDJXdpif2CnJGEheHh9e6UD7JQFysjZY1xftjANu",
  "key19": "26REnEFwhbLVdqeD9UYokZwMQ9D8UjDFsZmDn1terBdQ7ag11ixEMU6rXiJxsuWagayDDb5f6vrkS7scrs8byRPK",
  "key20": "5gTYBq5oSwYmsoccbc9MVvFd3HStRLH9wC3kTuZ32cuVjiQ9kUSe6uCqxmeGoRhjPvyLJfEHWEVKjVtf8N6ffpz9",
  "key21": "3QTJ7zwidB22h23NrkfZZSyimXBBUpX3H43QAxZi51PLTCZxf5GaS3bVt1uqMjxu9F7Xou7yCpa4ci3SYxMrr6gs",
  "key22": "xgdgzGSLgcyN48djeN7H3U1rxRtg9cxoV7PXMyeqiBt4U3iWSxw6VNNbJjRt8gZ6z4J3BKBwAVen7m3fhHsjvbL",
  "key23": "4hjLQmegavWhXjVBfLo7tHFj5wP6RmfkAw1PeMWnMmyX3FsUGvzZErxCp2AcMbtqHSeztU1wL9chpyP25h6a8pc6",
  "key24": "3xorXiQHQ3AKSgQGutVnSHHGUmbmN1twq8K8nfU9nDkgfgSa7umMtDUA6toyL6QZPqasVGg939Gcy7vuQRtVHREP",
  "key25": "KeZumrrNi9knobUMQ5t9nzgwVSY4TpDpMd51G5UwJ5cGeAUb44oBL3P4YwGivTvSau8FvGNreNK5Tn7oybu7SQn",
  "key26": "4KmeDU4ny8UuxJG2FeZvo9ZNyYzC3LREygjvwCS2SHNXZ1cmEr5P8PRJm42kgdTTjhho8UGYraNsjRzvsTJLTgTW",
  "key27": "5nMsnfJ9Ut82NshVjGtSNNtrrZ4ALwcWt9XnneDwzKNetprjPay9pDUsyHykgKmBmk4SZNc3DZFvn1ZonhoX3k7b",
  "key28": "2qVSZMJ45B3DHoZZSLtfMvhEzJWL3Ft5MepsfhGg1R9bKoSji8CFfBvgakUUHeyFSRW5E9yvQMHAHvJKcJsU9mpb",
  "key29": "RnQav75xMASveSMQH4HwS6akX1T7kXbafuEUX1hs42Kf4pFeh36mKVgRKvTasbP4phGtTk2ufABovwmrdXcrJFn",
  "key30": "2d3qHZ1rYmqRMbyLvv6JuoJDkdeSjidekR1WkA1VvEzDSXQrAt9GdgCB92FVbQTqA7YeCT91aetjciTY9t8SU5KR",
  "key31": "4cFN549n4BZ66ymSY1ZMKgjuTXm8Y3TcsvTon18U9XkFe8Mb18KY68qZqs1Kujj74Gn8o6GWpwJsgSkmbGoGk6Rq",
  "key32": "5FUCwWNci97GR572YToeF9ViAL3SmENq9Cz3yFgjtX6RmNB9gP2zLSiRyzaNDuMErWMJUcte1o2gfmjvn7Qh8DJo",
  "key33": "53kwiPAfKMUfrB45QeB4BKFpHVXjh3TvMpSLzrt2BYJAUrjdXkeyaf7yTqfoDYebNNSpbpPW4r6vBTFbwPq5sBWd",
  "key34": "KdGP11EE4XjxUJ5YugYnkrGx3xGzFkGuFiutS35c435p8RQxSqt3tNq74z3ceEr9RRE43P1Cp1PFv77v94vVGZ4",
  "key35": "5KA4A1k3Yzg8Lcb7P7zbX8jUwGdfejcYyTu1p9BDcMokAtmLxL5tftfHkL7T6xM2evZSYsWbrp7Vwd6gbHg4Xomf",
  "key36": "47K9xm3BAimD5wavjqzP2qcHXLhXh74kK2yNcb74wjEYS3SjFzPV6izFdCH7dt5aVc5UjxgiHJsLGhWJXHbufjmq",
  "key37": "2TNBcUBLskkYVgQm2Kj8jFF9uVzu2cBPFxP995hBsFDvAjo5Vy7u39SErrPErjT2mJrzn6kkLBcxfYWbh8JrdZg",
  "key38": "2y2c35GeVvS57fhHdmaquJRQ8VFCifw46xGGKvSVqeQvNUW8YStv5miNGGfPDunEmkmF4WeD2gMv3katFKxnX5dc",
  "key39": "WTassTdaLpm4PWDfRCVu476gdPjrpokoL7T7m7tWghGcL83tM6pyqowMTexMUErhrncXg9vrBL5HZLcJ4vrFtAa",
  "key40": "61q5ZHGpuMcXf1moZ5cUFGyXNGgUhBtDn7CxDK3N5j4dnTaSDe8fAmTdxy1QS1GTTCXghuiF78X1u97NfHfjUF3B",
  "key41": "4ERFsDnwZcLaNFBoNhfFEG2UiXD9xtJnC7L4CnAfZN9L5TmhzYbiFbtv2rcn5c84DScTjk2xvA99WZ9AJ4TteGHr",
  "key42": "3ZyoTR3TsJCm1XMrozNgygzuLFZdJ1yzmz7oLD7LdTFPMESqb3ZHEcTukJ9oGqgvAS7iaPcTqAFSFeDrHFWx5pao",
  "key43": "E3WQai31oGJsHKwBK6kkdtgNB4xZHRywLF5L44pPcWaipRanqj22dLmkRTCQ3vnLzVt1UjUhiUfqTsXKxgJSSP4",
  "key44": "5wooamjgetgCpZ4s62BBhBHWMq2ruRnZa9ZSzKsxAALiUi29KqWxgcC8jZZEKyP2dL4VHR4F9dbDk9ETk6rByHUN",
  "key45": "2E4Q8oXamWDJ71eroiZjYGRQ1jg5Maoq7717EgmzjGgFPGJMQ6HdcLcGfAK2HAT4sUWwzeoaieJz2fc27YFKCEM5",
  "key46": "aDDeVtFepSWM3VpNWMYRKdp4TWJqw9isHaNWx59LnPYxqMbu7pRaUVzRMWGQMx9WiZTAxXF5GSqYm9h8HqQQoXN",
  "key47": "21iLqJXsNjJovosvsNJSbCytvQbUJQyXzTAA4RE3Up9bG5LyTSVvVPvHkbMYXW1rR2kcgioBP8Gzb2Zth7tJKuq7"
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
