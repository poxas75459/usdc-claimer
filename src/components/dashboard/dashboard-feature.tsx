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
    "23NTBzLnYim11JkL5BGnNRLYt37NvoePiMmZYS6ZGiizsZC1D21YDJrjKiheTx8omKBj7MeUaR5yUe655tQJJMJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Xq7YZwyrN8PQtKBg9SuEeW1rwBo62QNZKBobZLEutpFdVCsmQgKReChHAk6xmRrn5qepaTab4H6Woa7JJtwTFW",
  "key1": "2LbZuXBto56y1EKN9PLHuy3Uo4e5RuztjUJWyPnXciUADtYySovYQcP5CDFSkPzVYo2JXsCc1vKyYUxmnVxrojja",
  "key2": "3LzYxf6PnF2Rn8iupM69Gh9XWDnJ2mK4NtsvUrHdHQNNKRdgJXxhuNLCG354UaLmBQoLsja8DPVXz4ypv7sx4YDX",
  "key3": "6451gbv7jZFe1Apq27VF4j5DFxGxJphW5pjbA6jm4pRSQwuB2gVVTr2EM5dN5kgBHtiRKyyKyVzx8n172tmeQ7Jh",
  "key4": "2e6G1uJSq4Ljgfum3uPDwecqukLxYfyPMZm5hsSENN7Fw8pUBEaAzvkuCT3wqCMPyHr478bAS9BmsfQFruSKRUV9",
  "key5": "2kJJoktDnxxMSnNyR8vRmda5Rw9pURA4aC3fEjjQjSmBQirGEhme5HtHJXD8mbuZFLMTHe6npqsJjXG9dJjPe3fh",
  "key6": "2HKBGJ5vA5fprNxUtjaUpH4bHSSafjTivjR7HYASEnd3sjct2iyXxViPEdScM2HcDAEAmtnummwtaSCJbTjThfgh",
  "key7": "3j5F7agwtc49MbT2BjcC77fSZ91KCXkrfXRw5W58WBCsqXDS7JWbLKskowA5wbDa55sApqeXJDFQH1EfxbTsQBLj",
  "key8": "2ccDdXTFySehPhx3tEcddSWT7A7ctQbLPJrbLBhMFZDG2P1w2DrJHo5m6EhjPi58yRfxD15nx7UwATXR8i2C9YFQ",
  "key9": "aXgJbkKzKjXixd5a3RumDuDrinHnWohTWbQn3SU67RRU33KdSP87PqEMRf8yjb3E3ynQwbuz2oRWPG6J6xPcVex",
  "key10": "4FkkKob5vKbpG8qJ4uHp3wPymo97Pat9jn7QsCtAa1o5nEAPfJGmy9zczBehMnbjZDJLL432kXg191b7tCxuazTF",
  "key11": "jEDsx2rQmCspjcuuPtJhQx97H3r5rs6Bmq1TRcAYhMVLKjmJd2drSzYVfuf2s2bAgTUqshDB3n5cxvpnagswzrY",
  "key12": "4xS9XZNWgDCXxzpA1M9FinLKdTyP5ZVHC6cqBtpRjEYdWamAmQfKCYpoZa1wSFRaJ4A3vKaG4Bk3oncpgD7GtcpD",
  "key13": "2SmAJEV2xoZwxkB6uSVgGvu8BpghG6ihVEyiSidUPGVMZcNAREPNsHrtpBZfBn8scqSJDY5wnjL14Nk158TN3vJ7",
  "key14": "3k44Gy7e76Lm43rpPW1eXntApWvh1vLugLjtMg9Qe6vRDhgKi69pxJk8GX1YFueYa4VD7rqSFxYpH1o8r8GP7qZo",
  "key15": "5Vbrb9zHHjvQ2U5CQPTwQDb5JrPmasW2JqPW8azca6f9EbT187hUEKt11hZ4zwv7u64Ts34xYt3Yb6f62CFo41bL",
  "key16": "3jSX6KkrHFWZxnBmZEkgdceRDaEwvyzkjcB5UPiHi27wWGvMGGFUJ4HxJUfcP1QKJAM8neSPgTCAoaDekDfDb7YC",
  "key17": "3Lfjj1yec41gjTnhsRz8NrGXZJjVKjfFywpsDM5HuDgcQZQBi2VXr8j6LtyWRxt4L8PWd1PeHaKrbf4sZxMdnD51",
  "key18": "2vjp6tdkoVAghWk6hxNWHKH2SEnXaUqLyQ7ejW98sCEdn6vdEVLYrYA43TrSKRBvdGyXDgWezoZnrUZLpu1vdMzv",
  "key19": "3v6bu7SjzXqn9B4i3HUoffVjtaQz9ondT3RG8KNVgWi4yKMYr1PWGcic4dWneNUmAkrhJm3CLFUx7y5Eo8tL7DiB",
  "key20": "5MbqDzbjYXqxpfMqZGMBagmRJkf6umVt8wSPLubpgb4Pi9yb2imCwexHKuyCNgBRys9fUUySciAYqBg1VoyXWV8e",
  "key21": "57HUDS7CJWKzNkjYoZ6kQzdSFwKHjh3CGrtruQq6YCJVpNzKeZJn7wDn1ExXLFLSmhMnMT3ddPyu8a8PUsRwsaC",
  "key22": "59KNwjKLaULc9Pzfopq3coEmKoMCCbkKhcJ7WjSCJtGzdHJwQFcEPyzV1TWpTq4BvWtbx9xJiVRARE5zByXg5eaG",
  "key23": "DCKHYv3H1sdQ585ieHaXb61CdNvc7uHSmCMt7ax57JQXWxtQAMVz2ojZFLN96sCucM4ncrU9Cm4ATmpw6JXbdZk",
  "key24": "3qtZqeeD2xf7vXiSbyo3bLnbvwoxqAJK5tvkMEweM3onhoYWsH6maknX2QVvGf2mshk7hDZJjNCGRpihWx1wntzG",
  "key25": "5Yb2YJdD41HP6fQgVJ2f37CA2WiZadpLD1hZ4gfmWYueprzv24TSmug2pNumF2vJkd24jrJUy8QVCs76XjFu13Xy",
  "key26": "dGSfvTorEUsrBe7yq6Uiq5rDyNgXruufPznJfwRQjr99jpssH78boEbgPibqH47apYmRSHLZRjgUxJftT3kSVay",
  "key27": "FTYBF7RoYp6tbCKFB63L31vU9ZmhJtCxEPuY4Rbj5oCPkw4rTbCvHTy42MDy2ZXh6q4rFmRkX4ssMushKZBpxs1",
  "key28": "3147BZv8pbMXibrm7vEvSUE1DFys21B84a2s1TsBiiCDMYQWA62jwJTTWjYVJgPtjJtULQpt1VvRK1ou6PxnBnE7",
  "key29": "3XWzUtnihkjU9qd9L8N2coLeuvnA7QSccdttNAHyFmLKhyP8cqRZwS56hMv29bopii7uAUZJe2AXQD2QzUrDKSGw",
  "key30": "4qxu2LoZ2E6dMgteUkrXgpX3iJdZo7v8bjSUpyv2666ZpG5EMHSDnei3U6yqV3YCjutjenUL6vfaHiYQ7gJM5FNA",
  "key31": "2NUH81VpUpbeNg5dsytCbjaqcWKvvbQsKyFwg6wZraeDjY3jNXmkjD8Zkdas7e7pXe6kK2REtqVQCmU1PgfWNu46",
  "key32": "5gcmFSY4yWwAq5wNvB9Uck72BuvdCEHt7gEXKDdpCbySBi7ZGhPKqkVa63eKA5GooB8uPsg5JWg8rbPYbL5Jqi74",
  "key33": "3PHD3kVM5AADUEJFvHDnbRRb6zJr6JbyXohmhcyzmtBCPCSFALocMWsD2a6g5J9rcQhwwt8NSFkvBkj69sFsuDM",
  "key34": "4xq29XczsoaThZzWGS7bt3N9w1Z2C4p5sxse7pco8RxBQSii9uPdyXWP8zk2MdJyGcQW35L1mQrCsXG5q2RLHcV6",
  "key35": "2Tj99rg8z5ppbvSCqpjCVTZX75TzBthXaKoLTaVN8VkA9Kdjkszc6XX42FPT2NKHc8pDSZugC4MJfoEaHfcTjMvD",
  "key36": "27RYZ77bwoZntYXtiscpsgShfqwvZqMWUxYN4yCFLtCjp1bVcp8e3KsiFh4ssHq26bHgih6aHkriX872zQRqUCRJ",
  "key37": "4EZnRMLSdRqdWzd9eJJxaxQeL6P23xhUSgxp5sFTp8pXzvKFp2f427eeDUHjr4HC7AFbpuTFuqyZnmcdHzeeLTvA",
  "key38": "455BebGDtz6WHjtpxDzcS9UXZDjkdEie7hYB8Pegs8wdC81vwWU9YRyyau6pjZTf9TVQJZEUACnELAbhMuQTeBDw",
  "key39": "67eiT25xD63QcUvicmURzhn5mVos7D4iw14ne3p7DwMjM8myH7NFLth53jzSsuYEsTMVi6PDXwMVGYMTndaqFMZT",
  "key40": "TysTJ549Tp9L21QbwCSZuRzCMob182oMkUnsyyaERVnxQQu6vJ91EjNaj9rZNTk6HCfD5VrzedJrqwNMJJmcepg",
  "key41": "2TMLtzJj7iE73yCJzSAow7Hn5coHuVZWWM5FTrAdFDf9h6A5kzqJBueRDSs35kkt5uT14LFiFznAEDHf5wV8pLS7",
  "key42": "V9LJ3zitsXZ5c1iGicuN5qrqbNbSqFNm2WHZJvWDXBzEd9SpbHnGCnbvzr1UnRdZP28ouMiDaHTZcgc9gMY6y2A",
  "key43": "26aKTXyoEtauwVL5XDR5QgpSxpNkbCbTbFeE8nWoSfDwmqKqKdW3LKNw3KZXxhiEQUc9AGMHfeSXigJoqLtAMdhf",
  "key44": "4eu4qhQjmXKkickxWngyDYawBEnWwkpd4zjWA2NUPQufChHYPG9aaqo6Yj7YE88CubSvFTipBEZZAzWCdZbQu23n",
  "key45": "Fm3bYTS1TvWyswGs66kpwfpaCmKXRTRfY3EQ1GwrNSJnBqbT8PkbwxZLUfGjZjf8w5grpyMMLXoaZvbpvr4ZsM5",
  "key46": "rDi2Nd4gGyPdbUtoMe3ABTnQJ27dKLwtiFjUZkMMJ9TmDFDGZzGdY4rg7gLKpzwcTXdhjpCvHN5urgpTJVZm2kM",
  "key47": "28jc9viqkV4cnoaEpJopf21tdft6w2RXmiJ7kixLZ7ybmvicGELatqrpPCNZtNtp4xx7aGpYxXoYJajgFWr3aTjD",
  "key48": "3UB8bMx8Y6HDEYoPuaVkBAPmPYqCPcHgU6hUaVRS5tmHrjw8zsnn5mNGCSRgGNf1YY48Wx5qMRmB8q7fgYUN41of"
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
