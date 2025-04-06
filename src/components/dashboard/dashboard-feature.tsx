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
    "4rQYENXkaD7g3CJ9HZ42G9LY4MTJoPR4GBNFGEF539DF2QtBcR8qWPteDoLXuRA6Tyaj7t24QSQGVkNwRdVbZzWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qtgAvqW74uyj8wV7ScW9D4m3h5Sfn9zxbzYNMfSJoSoLq5G6SeVqjekLoaCr7R3Tc6bzSL8jvfd1zEEuWx5XEK",
  "key1": "27yv1kT6inBLRCXnnCKVhLbBDJA8d6YAdLwbqjtNBQR7pMxf2Tb9S25wEWQBc4nbabki8iUu8nqYEeBBRjBN4LCv",
  "key2": "AEqqLgQVLGA5aBhRytTv6HGcVo41nAEaZpJP3aygpKg6jtALHFbWcrQXBtfq3f1g4LPFYcE6AcFbJLNj1K5mLNh",
  "key3": "5fVKHTfbmEj3G3sMJpRMtS2L7eYR3ZNzPbuJYHMLh5NQSYmE1kjVDS2zcLc33zx1eQFFsQjEza7TbJSVGhUAgz2w",
  "key4": "2YGhJE1MhnysVCRidiptRMeatWZj3eS5aFfy6RtdL1PogU52NivB4o1Xg3QgfGUFEPvqSUVvRgNJgvo9T5Soewox",
  "key5": "3VpwEFeMwUvATK54XVNVS43U7viP4YFTnJVNdCVXSegJTDHJQFba224EXoBuzozWgonoNMyQdyLKVx7448BtBEE3",
  "key6": "Re7o2Nq476mfiqaZHTzC8Vtjv1YUbxJDPN4cBveCyLS4LkpXnXfAYZrmnxuEpGYo5iTw5PqczeKh1QvpYFDMzs3",
  "key7": "43VXC2NbreroW5LzDBtK1Ewm5JtdmJHCvh5CtwBT6Vk6J57zBPmV5Ecaqf1hLhd87Fj1TWzLB8ETfMzFUS3tNSHv",
  "key8": "4m1QxPJz2hjhNcK9p4aYzizH2XrCZFSiY1HbMoyfv6wgRa1ddJHYR3Rm2ydzuxrorAYyZ3L1WvNQXKditWvyieQA",
  "key9": "3vPcp8AwULCbCerw8jvoyUSt42J6oATS6unsGGu1E4V7jkKuq5eavVFc6tptxWmZ8j2dSMWuiKq6nx6AQftxu2JT",
  "key10": "57pa86Duj5C3z3fbGGeEL7hDpU3QBa2pUE4hv4RbgJGd7tfyEU8wdN2GJfhqvzh535frDz6YEpPBmgwL1WAE91Lo",
  "key11": "3cyaQadtwzhsr7h5mo4FjSqBUo5dBGEjmefYpQtXn6hfqxF3h5HqMBZ1gzDzmwMLuXAYu46onXdC7FGQ3T7PhRBG",
  "key12": "5qfAFNYyVcQxr4fML6adEmF5cXeCJv1kRwMNr8hjj24SfXmgp7ryPsErXJLrQmYrm7Wx9k7SBDnHZXtVBh3kTgcg",
  "key13": "oKXx21RPv181ENfxXmj6tapJZ5mr1C5SxSgT93t3MgfZqbJLoShjTfYbyoydbaHpJ3iKiefVbR8bZoptC5ZuGDb",
  "key14": "4xHM8TcxgRyYiRmiGQA6pByhgBJwsAJXkFXRRxg6Z2NnwHEdEgWUqg4o7KbFn9xr5vwVsE2N7b1XEPCHaVUE8TXh",
  "key15": "3CkBBunSgWMPGah3kQCEJ7dxbQqtfBhUkr3TAiNEBCoCJXjfroeLwgP1TzyMvifjRUUxC3XkAUfMubxm1DnuqVze",
  "key16": "5VCAfBM8NpjKdFaBaQFFco6WQrq6mxhA6fNVJ2ZsYJoTXy8GBHFXsWYWGQDzq8PHvHdaXKvnpVRbB8YvY4pRBC9i",
  "key17": "27hgnWqDG9UTsQaBta4RAFjMbBeW9cFdQABeZExv17K6v13gF6XHonz34NpAvvPQNXExz7qVxt9KHrRx4e5KEVp4",
  "key18": "31yuC1qzL4i4PHynrb58ugyYwhEfvBA7f3CwLqgDYNVq6NGBjUcHLvue3wQQhXbUcQdSFfcYHzJrBrqw1PPnZWgH",
  "key19": "518BpdyFK4ogwHqofzGtcQvTrD1Knqw4uNqF4jHPquz4qeE7y8qPTsBgG83nR7dmHwtHLSDJWvigEwm49DEuyT8J",
  "key20": "7q9qSpWgzsXrtqJaKHqGGSn32EyWyrLDYCS9uebuDVnWRiU5JFwD6g98Mvcs9UREY5sJ6VzEKBRuTwQ4mTd9LqW",
  "key21": "31qzTGwXJ2T1Ye5QgiSZpSx5EhhCb6vti6KwoC1rxqHFAoDe6nUAqUdUcviBwTs6t3EpnQikBGukBRso6BgtDsKV",
  "key22": "3ZTmYNkkfAynFaa1V8uD2sQjoUG6SGd5YAguam4cKA419rBTsdVn5Kg1kLEGHQNHFg3jZtKkr2eiUm8zprcyNXYB",
  "key23": "5vChJmWHT8YApn235PAAxQfVJhJRZWzNY24o1ssKmxVS5shJ4wxG1GcdChbtQ8cwZ2DSxSRFSmWSGeX6YyRqsN1J",
  "key24": "rRLCtXe4XQK8MWtKWXVtZ6dwytGpZBLEdX35yNHPf4EMAFieLKhFnuk85o34613njpQGM6WRTymcu7J4vxJQGFn",
  "key25": "77s8vxMny6JM5719Cj6nZE2hpsvbaZzjuviRDia42jiP5Po5GGPjn1mxhjkzBVYRcD2cy9VHKhPaQMe9J7D8uER",
  "key26": "53qsyKExjGPFfTeMS1MuheTSXe5Vg6kzxh5X8CchrKUH4btTB4Pxht7NAMqvqNEeN8BY2vjycXHKaDAuvkgnJ7SP",
  "key27": "2ktUBHksn5vpoHBMsgyCBv6dYsQbRXBoE8koxged8yehVDTPK3yhy64QCe7AEoN9tjCdTwPbhjMiiBCexZZgnGTa",
  "key28": "3fn61VfYJBjHe9yRbbEmMPxJt3R8WT8hYEsR9Czz2jhdbZixfzdVmtncuogiLQK1q4x6gCSoLxzkbsQiEahmZU27",
  "key29": "3rMasdZuEF93VwjAFmmgXM8ioiaZVUedvUsmF4g7XSJzt5nJwey8YPUBF4HV7HCujo2LBSyGyN2Yw4TndfCNEcPR",
  "key30": "4wLHzXUXGMSdoYinNr7DkhCCveLP6McDL6aUrgt5hC89PC4eUJhKTcyEAtfnV5y3JABHf2g85wCiNYsAg1i6AECW",
  "key31": "29iJ5jgKi7Zz2ewW1mugkfXntHE5x6zGaAP1rsd8uCfe6jjuNfwGx3MaEY38uJ6PydjMgjQ1iG8U6X2yQdraKfSD",
  "key32": "2piCwZc3HVFBWMEN5X9ez2PmS9yv7LwvoeAh82NSFEf2sZis9gCTTrzLf4mnTV1hww315ohyCQYKWRt9RzzuZouK",
  "key33": "3onysqJcT3U7ANn7mkGwvcjnMgR8TSkpqtCEA8zqahoW8TiTfzL3e5AfRKsvNsPiGAqMjXpNp8H3TaKVHEroNsKJ",
  "key34": "5JeNbgjCRouTY5hkdUwS6ktDSG5RHYW52kNVA8Lc7K9ofGmTb1hn6GxukmsUuoX9cXvtxmZvxUydwJ1b1ejSWL8Z",
  "key35": "3tbZeFPeXaXcsjkJWLDG5tnHyoJ5Yk1tUj1PQftiJgXT56mngxqmW5XSCviW4XtrmnFWFFQ9UB5xwhXsk6Py61xM",
  "key36": "3U3PVtWos17a8t9dr9pNueyKzFaQXcmd9V5uc3tvJk77yTbqCBDwsCKNqmff9EHw8zewSXm8DmLj72kioDjcpSj3",
  "key37": "3Zd2mn4Z2LKHUfX443BJRxgTctVBzivBHJ38PB4u1XjPgszPqwbJ9jXpMtxLJiT2K7NAQG7rCqjUpjqR2EjE5bm8",
  "key38": "akiFkoHkihLYBSyJ7hM5N1hHVRfob7Qtzo5LXNyGvexauhEoXsBwFP8wv8Cw2E9Qu4m6gRALLQvedXejeAtrJGh",
  "key39": "3TXussu5DmyYqocecBTPrrSSjNjuJY624qkGWP69eei3xkAHb12ucGe7tBq14mD6QAa3oEsTHgPVTQ3qfZXR7CE",
  "key40": "3yE3C4UCSZPe7q8cWa3HDGAPdPyYz9kvPzAMUiqXzwA7mWo6WXmnrz6tHYuDMWn7pe4i7wbEptSFKenUvSXJg1L2",
  "key41": "3jAK87wBxoMZiVbmupkqVmmpw5SfGCrnnRTTKzUiifwYmrfABE3NDP96Q23kotLM9avderPM7rfTJ269L2JQL2V4",
  "key42": "4VeFwtas577pYeiSVSyVARP12e8Q9BvAgntzqboDZjvFR6ov6DnpUFrKYq9H6ASqvpAWaSjJXLN7Cf2hxRqtPkMi",
  "key43": "4sXnhym2BR4n4pSyK3jZdH2xB5Fde5YiDkJvv7wXNTQSMb3XB2XmBH3p766w7M3k8EbZRNp5EG8AX7UTw8dKhdES",
  "key44": "3We6ixCqcxNYw8JH94ipa8QkVREzQraSWJdkgvDNTpLv75n2F6hqp2iwjAu5zfKaj7nKxDBoTR1yrgN9FsyAKgAM",
  "key45": "2Hwkpy3J3dsNjeni3mR4qEQuyovv4U9qangcdyup84PAmh1ynxSQtdjfwEHbtEZPN2nDAYQaBedFGchuPJDtdDah",
  "key46": "5mZNA8x1vGVJJf8symCHHjywsw8GP6f6DexsX41eK6foZwy5YHUxdcZ7AJ84bMmCnUe5W9nBJCUdnyNJnXZGVKXH",
  "key47": "5vcA3JWDbPMTXeiyvwNdSe7SaqDanJVjKRvgXBPVZ8KC7GkoeDEABVskd72doWjrQcdzxwipBnrfAmEgNvoNmCwT",
  "key48": "qmEppfcsnPu4ywZ9ybLz35zmrWAvRc3Jdb8SmUvCr8ziPfdy3EX8BxH9zTzeu5kKmsDouMCAKsja2Yt2PcXp5WX",
  "key49": "2CwnGxjPu9EjeuSiVWkSYuo4mpu7cHAoi843Cs8v5pDNfdmEZRufQXs8VVHeB9TcUfWHobfRajtkt8DyHrJJ1X6K"
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
