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
    "2q6jnqyUnfKmKJngLotv5hupi2QVSWq73buCxyTMR4AXkCa1XjbFg23Qvw4tStxK3HrPbBTzFhP5f1uk1bWwtCyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48xARz79cHnzTL7HwEyvT2JrG45y49w5X2vZaqaeQhuaoc3wFzG9vkfvFzdDZdUc3si87rRs6W1mYVo88jN9Ydh7",
  "key1": "2mSxvt2B7ET9hAuNHpdwLXNj9qBKkCUafGfFfpRXocWjtMKoA8rJhhf3uJreK7yv2EqrAz176CNQ7mwMKvqjrTN",
  "key2": "Hnff4SP8Rq8kRDGtkTAcN74TBkJBV6NrqZrzjp6NpGJg8e5WS9uoi2jsPqmn2FtFeHtmBaFdHgBYkyemXkeHt8J",
  "key3": "28P3sDCfdGNEYnW9Le649a8bh79rCaVwAjqSJQNjeKSqGxbZk1JkEuZKDgKJMJjQN2fMcg3kBKozFtQTPy3riWD5",
  "key4": "47qDRQbVx3n5KSbinKY6RX1ZeJHVgy3n536tSy199BRJh17Ssq3ZeJXqeW7KnGZmmwG8v16RzRT1iYPQkQDJLSTb",
  "key5": "2cuTRjuPyEv3wUxwYRMRpYs4yXXmtxX4nVdRTLvfkr5RvdP53XpFLjwVVMGWEv2771GGxXPwaTcWkAH982XwxXL5",
  "key6": "67V7vf45bxEsxHq4StFJRGq4cD2gm2AZMqoQrB27u5DLzoVb1MecLJhRQQh7nW5UAPk9dcEDSjH8Q1hkMHeht7Ay",
  "key7": "5uVHWiWxzvJpRPsbg9obRcmmfk4ngJH6HbREkmkvhj85ksb3AGBpnmfMHEMw6QHvxnTWBLzV5c5RvuiBpcpKW1q7",
  "key8": "2odtitstfxuChEm7f7gVvY4DSX5Cg6YAi82kUrphf72A4NwNfHDa84cBf9zL2MJF6fopfrKhXNnAzv9EVsY8Zj4K",
  "key9": "4oWViAmdTD3rnWnfgiTayPyRXNdZKcKYQHg5xPFrDdSXEsXtp6DmK8CAWWwY6mm6z2uN94mFSSCUdU2k4jTe9S9E",
  "key10": "32frXgLBn5Wxkqeoqr8xXg5txhTM7LMDNAkZBH4LzGJmdmc578jjpRLh5ep3bZqrkLbgaqhpo8yPghuhJoofEMZc",
  "key11": "WzoicPc5haq42MtCw56UqMi5WTQcSeM1PniyeyoQaeykHop4sMYM3Hh4kj9go6cp4Psh1Ku3keKZcWkUoYw9kXw",
  "key12": "Bchde1KNxJGLyo7GAMqHUF9FsRudTH9XzL61FZ9CDjJXB1Td7MW2pt5ZnjLUxggh9SDNPKY1Qs62LRfqqSahsTG",
  "key13": "3fbUFhg2JMqbiqiqXewudxHq6Ekqzqyp7kSsAGd1CRkKaJZG6erxrPwyRvBo4v42D33sGaBLs3UvhAvHPKfyWFi5",
  "key14": "4FV8czsCXrfwJpTXFX8yBBEvWabiKo2MZ5UsYSAq1rHy22SX9VpgE8cEtJnBrF6Sfx6WKurYkm1qWh6opM26coZK",
  "key15": "4VMiUEDmdhxPRyHsSsPiJ97UdBbgu8t2EWzbnqTAPJFGQcrVSWcGqnJKEXfD2gxxYzPeVmq6KBMqAFKzYEjfx4Kv",
  "key16": "5CkLx4rA69iDYzy34FbS2p92PHb22tYA6xnkM7545UvtB779NRbcC8xPwN7DdCxjr2w9MKhn4716Aw8wKgm3rmHN",
  "key17": "3YaDKFJry8AMnRVnxpYVNpisj6FuroikeV2sBahydGqVAjKMvoS6GAQePAjv1hA9jyc8eGajGZHxHk5gfQVFZSnx",
  "key18": "4TA2TcBjY4XwPfvCHpXM6GC8RrV5Vv77KPtrfLZq8t4NPvJi7w8HmgqYKRZZkHKwEf4y7kQ2zoifoAXrKr3YzRtZ",
  "key19": "3yrYzgtfjqNi6tTeJF7WZ4VxEubg6phsFApEPUGJxHbQb5wCVnuzWYWUNL2aqABoepxZ12R6dbLNLB1bztRkswDg",
  "key20": "3fZCtYYPLD1vFgVSbtwoHYgMW9wTXDBvzQPj2YAkZ4TTPwgswm6HEunFaPxfdaHsmyjAw2dAQG7PmfqeYssfZaQk",
  "key21": "2XhKC7E9pHcjJFVZBgJayFvDHwqs51AzC9j5XbmSEHmCmiqXRyYrMkVBt6dT7NNgJh95jbaxeuCUV4oC7J7pUNrn",
  "key22": "DwmkAPbNyUETqj7jWhcmV2PksE5AQ5vjU4tncPj5U6rYyZzeu7yEWXRfGNvYhka83NVw2tfw6b2B8HFGgmuvcPo",
  "key23": "2jNtQCp6oc12cG52ZH2ySWm2J68Xyp7WkUmGMCGAKco3wsGx7haa5Wn2jE6utmP5eyVvUNYAi9tuq69fPq1X1XVw",
  "key24": "ejvkaie9Nm8GYJkcYzjRoJPmTb9LC9QFxJZAqVuThSafQEM3PpGaenhrUydtmXkGU8ZCYCPC3rtEeb7kg3jWyVi",
  "key25": "4C5kWTH8r66YW9jsBtHjM6bv8QPDNRt8J7gSr99VNDmAFqvMXZ7kZM46KUYEBTkQCVRSo3dRgQmesM6gXoinSE84",
  "key26": "39xCanHehV1sJe3cjJGGrhouu2xPEMnFMzCPcVwDWHscEJPzSeGWb4BL2TQvGP3TNTWByMpsR6CU8QswME4z2eyi",
  "key27": "2BZVtczYTmfHtTvxRzVz8VguM8dA1CL9yiwFSjtVfH7oSmUjxfyvg8ynn6AWtGnYHtK1tf6u9cNMvynpyBoKfGd1",
  "key28": "3eqJGJzfNeodJchDMRB1QqXRaqquceDsYBVgLfWZ8CNnWZG4ctyfaE1Yad2MXvXrn2XeW7FhMTVktBQ7hfEc7rz9",
  "key29": "26wwgy1dduuSsABfLVGNS7nhL4Z5YzbG5eZzVEyqu45FSKafQnxKK7oxaE188zx2TUQGcXrEsb6v7xkTZR63aFtr",
  "key30": "3p2Q9j9oNqUBg69MYraeFjPfMtahzBZwk1bDojs4TFKk6NPFZUogdWGJVUCGY9MDiS6HRH1PaM3cQVPsKh2bFYET",
  "key31": "395ZsFSqP5XdJTxiHgfHtu3ZLdnTFrLDarWwoRNfiM1u5kNmqX9aSYuYQFmjqMX1gXois7VF9YRpiGzC89ZvkD9H",
  "key32": "49feKurKSTK5hYZF7u9S2d7KJVw76ZhUcysDDnwtNv1SbxaSmx86yTob66X6CXGRFQenrC4fxW16nkb7u6aRvJ6T",
  "key33": "2msgNxZL1MrV767gur72F3VfQpgRaXFNyf32EjYpxXpHEHf5gT6aZ6yMeVtqnSw8ioqDdwNuFtQazcFE5K5rH5qE",
  "key34": "r4J957v2PSwSEusokgyTQdaKvSLcGnD1oCqNtWYBAnt7eKHjHGZ5cZCMd5JuKBeJZecdp2FYNaQ7dwLn2YEGFEv",
  "key35": "5VzzjPSvWJhZrQaPWgRfyRfqfm5x3JRM3gvXKPS2DWTt9i3VRnVkhEK1fXYF9CjBuShu3SJoZuNr7PyLWkat8Dtr",
  "key36": "4YKYGwXvL4Phnc3Rumm77Ru3ywwbsMAZWJDV6kGB3G5wvcZVBtoYi4AoN2qWLii3i3fAysySL7X1akMVcHwYQRDA",
  "key37": "4KCYM7dM5j9T7F4W5aXz4Y3VxKixCJbMyyfnF8Pgxcgs8iKua4GpFmdgeiaNAaQRKVWHdCFLu6TGmNZdAyZLxg3u",
  "key38": "3fkdgePoVfCmcbM5AxJ3aSDUNDyesrECHM3ZUpKAzF7fN68qWvfykiGszX9KfP6QvVeCgSjLmK3dqjYYHXBt6xae",
  "key39": "4AUiXu7hQcQ5CmfsLzNN2zfX2WJfu9vVGwi9DEB4Y94PprUsQi7XnPHXZbwh1DqNgJhZjp3hYX7gf3DkEd4GcbLn",
  "key40": "49ywAPvGDyB3UJ4kBzDPigjU257M6TPJ8yPSW4yArgEqcCWN2DqqVdZzind7Jes6zur4PT1xuv4MeW55eDwBZcLv",
  "key41": "22TSuF5WE2af8LRsQSZDs3evq2QqUYkY69qW5N2k6VJn3mVkdrnN7Vt7tTUW1giejJbJzwHbgM8v6hYsUWHFNNJf",
  "key42": "cGP8CkMkkyb4ucRG2W3wsURnMN3cmdaSHLsX8JH5dVdpvpKcHRNUgEPpxwjHAewzKvuqPnSswNrRES4h8ocur3j",
  "key43": "24776EYb4UKu9uyimeoD6d1aRwo9ZKTFTg9B2gkB92XtepTpMPoggddm5ZKNwuKuzXx7BaoYzbyazQvD8WjWgnno",
  "key44": "4tFRUyzMMpxmLKcps16yKRUwugygVbgehpDanP3TApvKWvu8ABvRvMA3EUzRP2go2aaxhMv3tV7h3bc4ut8Srzvw",
  "key45": "4UWAGQLe3bgb6vpVWAV5bdTUDUtutgeanrkTmteo5Z1xn8pkgX9yYcELGRDjSRKJ5hqw4QYvY1UzNXhZZbn6Kc9a",
  "key46": "5LQSUL5D11C7p7jNm5mJrpGgjBtfSpmPyLRR7e2dKtQ9fKHiX5fwVvV8c3LF6yeRPv3Xx7MLFC5QDdqbseFpKRAN",
  "key47": "5yoxdEBBaNJMojpDedzCx8bjv69ahuEEJgSCi2Yj5TCS3u8EpgNkfNQefS4h4vCZa44dxgxAqMBPKe765nkZauvJ"
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
