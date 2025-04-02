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
    "3g3uFujQhidEd4sjgDCNr68FwDsyooZ79srKB11nNCoVhHZGZdcPcbyfkvayX3nm6meqEmdwe5p9cbL6E8uK7zLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52sNuiabSZ7Qqbi1bfuQtiTvKxfuJC634rGBU2RKpfinTc7Mj23ynRuDJU79iBtAw68wRaQeA1QKV9gkaM8vtdYC",
  "key1": "2eratKXjGu8GqDgQtwLSKGQroWmzaZFZVtuWAqfcVFXi1LtXVevZBKTnbZNrJL65727huKEfSDBLxq8xa4ABzrx3",
  "key2": "3ZfT2KDB9UeA75Mp14KWW6EJTpyM2eKpap15uCEX3dbZDXLiShagnYVxYZCVcSbxE7kUuxrhwJDPLf2paTsJ67YU",
  "key3": "4Dhr8bE3S3PMM8P9DRT5ycLKa2ZETETzrZYo5xLxVX1bcroxbjCQS2hd8TNqTKv6xDKLhFk8UP5ikBMigMTXmXk4",
  "key4": "2iJ4bzgoZMm7K6cNWcEqvTr7pAvTBEiu5rYzjRd9FQXVEvfhLVjmGJHNJceAoQ7QDwnPRsxYj72QiT5LPnrhC8Ua",
  "key5": "ckerGxY1CKqJcnUXQ1FudEQTmm6dQKnpu4ZVzVdzACrsTDAnZAHTrzzeGDHrcHfay8j8GPBQjuEMSu2wggtnJfi",
  "key6": "5CYKY3a5pdeDVkUtRNMyGZanYJrQ4LJv31yKZytWjtU1ynk6FstXdas1LqoU9W4mCUpmQbEqCxuQnv3W6FK6UQeq",
  "key7": "4RmSAimT4rL1PYL7oZrLDRC1XFYhBQXYisqPxRSuSo8RjhiYcYvzGXs6YLLVeCiGv8Q41rwm27XURf8ifRfpMEu1",
  "key8": "41V8dyanL1Qf6NPidncgmW6nU42N1qySSeQ3UZw74qDK6uDAmN4Zd2KKh68gcCw5j26ry6eysfxSTWnXoxcSmjkc",
  "key9": "5cq5xXFZKgXE3rZYSEpw6mCgYvgtvac4Uwq3ZUxE7q5UTG6vu6gyzDLdxjd1m8N3HxbAmFdkrv4YKeHJAb45319g",
  "key10": "5Qop4EXup2jTqDL7okU5ayxCqwG7hjkCEFbAV6Hfauo8JjzbfcjK3YpcpPVR2JUZjGS2KMoypTa6e9HLBi1VNnud",
  "key11": "4JQd28Q9U3wyxoY1DsiS5Dzi1jcFisX4kB4k7UqqCZjDkhZKT1vJ2nrWGioSPWa6QB5bYnAp868gN2MDQN7qNCgM",
  "key12": "3wf6AL8FkV9sgegtLWStokaosaL3zFRBoTrT9EXnwNHCiSnKvwQuTm1sEKpwLYbEWL9w3x6JGkvUr3to8uXuz7X3",
  "key13": "3tcz4GNsFKXvkUVoEi6E9ujsVDuMqtuKMcAhVuumqfLDXtHFA7YYgrgFDwsxvGkJpXQR2e8dyTdCYzXdquTvxVu3",
  "key14": "4Vk1iGrFq78gPSefDuGNQzPxPuDoziEhQFDqsAMrDkNyVtftzWqt1hbNP3jaJUiy9YqS5dMvSKqRM524Qy3RM1sg",
  "key15": "5YhDbVJs4eayQYNNoa5DSE8teDZ1wd5aT5iHMEmJ9s8LG1QvAEsZR1z1MW4uoBjQjLCPkuNXdPvEqFUhXhF9xoFv",
  "key16": "HteXApwm6Cese12dTV9WUqqeKsLe6on7tfb1kDRuTzJuzQAyBzPtaybmZt3SbDYE42wvRDXgDiA1QPB3urSjxd8",
  "key17": "f5TRKRCp7v1ghx6FCZuF95uPApwnUwkRfGp2QRtqx15UdXDHeFXoXuXfJunDxq2JVCLu2TciaAWGM5iVWfsuK4t",
  "key18": "5YJeQEcTyAkWR7Fyoet7fUdYuBCauVe8aZJRNVTTN168aj7QbdftV4RLxbLgWvxEvZp1rrEx4fMAfQquwP8Hn58W",
  "key19": "4ue2Fp1B6i1mECKR4Y479mRc7DcJcQKjbnBbhKRApQfoA93rtkMELTVXYDQN9ksxLccLHr1GpWHw9wnrs7318a5c",
  "key20": "3xivkUBp4Bf56SvQ3HcFqMuKMWNYpN3WkvZfr6jJYsinYG8tLk2CQx96g5peVoHspiVJ84qJNZTK6Dj6Af1okVWp",
  "key21": "HcPpizSnHj9G94qq58zAuqDzuwAmAFXua6zrr7Yh212BfYot865udAAMJwXeNEJu9W6Ycz6vKMKsHFFnnrH3i7E",
  "key22": "5RtN9KLaDAuMuB35L9hBi6hUP73dfG63EYQjKKCfpMeQjfqwNZ5NKXaVoEMqbWr2bMcCimXGYihq5oskdMkb5GdK",
  "key23": "5h4KEgafYxbeAw2tQZk5rfxz54k7SGT4L1GFG3s7V3UkaPt5ScZ49bUsaSGvoD9LVuRDbRwS9jJT9kr4YNSpjgbD",
  "key24": "wa93GRVtmF7eh7B7WsEej6ULeyxgfW84fJE2XaTj9RQyP2FMA7DTqZM174zfUgY5D7ew6nQgpS1Qak9K9vjxGUb",
  "key25": "x2VtFPZAa7n3NGi6fnP6hmTVRueTVcwZQ2fHUVamJje9jEw5USuM8EtNk9R3HqV4gMivu2LCuPTtY4K6TrWzrdB",
  "key26": "3Mzv7cCdFPNMLAejt65XzrGhgBtqM5nZ7ZmGX9qWBKhhjAEyr2imqVX4URcXZuuFTig6ZpRQ8YnMcMMokATu5Grz",
  "key27": "k6Dmv3LinH2jec2SbzDpNXBibyV4amQrLof4LTr7CiE4WES5SQKNGDL3NinCE4RRLZdg3E9pkAXEVJb7Yyu4jcX",
  "key28": "3ab73c7EtTkRbvErnxBQcC4t8jSKXemj8jpAC4ajGtDiXGzH8i2ZQM5gPH1vKn3M6NxRbkKvmoT5dxh1TAejtS9W",
  "key29": "3phCyVYENZ2Mm9YhgwSZoSS1ZxQS6ocAEmb5eCL8nSLocVMA6SLjVEKn6zj3TcBwnFm9sCetTYBBkhxUCgBER2wg",
  "key30": "4zMr6ipLqevHjQQZiXTgVCq4QaZ8HGQu73bq7Jqk4osGpeWzvTVXJUauoQd3jDLKFryxpMVbsKuZ4eAidcYHduzf",
  "key31": "28VGakYRh6pxJfPy2sRSLuW9jT9ByQ1NZQvZJntGLTqPMDrY22gumzd9kDxRZmUAMneknpSEmnjtye8ycdXyJHFt",
  "key32": "3NbHh4kRoBmndnYKSJkYjCafGAkWW56zav1LSVtj5AChNyvHHh8rD68SEmuLJevTjNj99eboCADmgiwbFWgzbxS1",
  "key33": "3rJp3n5vsSZ9CDkYqL8NZ2okfkWPJ3R82UffEYMEC5E7Ppsoh3anmww7WVaJ6EabfMNZ5pnx4xdMZg8YferiQdQp",
  "key34": "2mNvwoUHpU2R6bYRjYV4fgEKe5uS45kw1uZL7nsp3W5kXQmS2bbbFGpc9Z2YcRPHGrDq9jyewymCKtpbn8DYVuum",
  "key35": "5hMrf2NUCqCsUyzCP8oUuxLYZkAe8rbCQyHTiPq3Rmm3ztkUsBQy51tHeLv6SAeTSBaCZwzKAgwV5PoMsGu2SEZp",
  "key36": "3hzFmUGvZ95haMuJhbrFkxnHF21Y8Lb1bH5zHJZEZ9XmwTmHd8LZCYeWJBKiuLGwCG5QQRaRQXdZTRTTSYmGDWUV",
  "key37": "2SPAV5sM2EyW3ZDJvqv7PeJ89A1hbuf8ynrz3iA4jEnRRZh6uXRJEUUiZKqhH8NugSbNinp7EAN4mzAYc8EfjKiX",
  "key38": "3bS4uGBh6rsiaiwwvkdxWLKFzbZtSmNXfgFcoQPWeBt8ySdawU1cfUP3QAmmRvv8CNLoSazzEREW3Ji1bkeGAfuU",
  "key39": "2yxRRPuMVm8TLsJzg2A4JxSc3tcaTsKnwDZ6Vy5qXLu4VQb8QRE8ErfHffTpuY1xXTNGkVfWW97DPgiVuJpJFE4E",
  "key40": "31udpkT64QMx35wgq5kRrsg4KoQoDDmRNTpDmAKUra3i5s1EcHTuFfigsVWsW6DypMJcMprPTc2txBwe7pChr7vh",
  "key41": "3NxEkyqDmS2gi7yb1gBLscMoedVogBLgh4SxSLE7V4cpPGbknvJN7EHRXzH2FRBdnzY2V9AR8msArvUFA5AbGt6N",
  "key42": "2scdVQZ5YsrYLexWyeButoioNdL8qwE9JWb8uc5kWKFsTFtAXRobaHQa4s2PHq38uQ1KhMQnbZys6HzBQ4xrNQtc",
  "key43": "4ZSXomx8vgu7Xv5TB51R2S7SGB9BGrkZbn4EtZtmPcEiGVwxFput9ddriheXzuu9MrfsuVbcQaop1gkc9WtEpzow",
  "key44": "GhZYPgmQdYTutikRKZxZyeq7LbsB2YQC6eShxiiBoz7joZzEJUoSYGVD4m3rYacKLaayseGX8raWU2QpwLfKQFq",
  "key45": "3pDECrbo8tWg1B7DmJ4ALWDjESDAqrPeC4kpSzwksRycsdsFvAhewGjqwsHmm5RkUeS5Mx3XvhUQUZ5mHznizt7"
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
