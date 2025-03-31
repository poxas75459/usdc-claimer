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
    "KD9nvFh4XmQVDMQSgsUQitrL6NAxQV92UTX2ZyS6thuDyZ22Lb2vC5QMvz3MbFM9tCVFyMeX8uxMCnftYXGiqYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25ak1C3eT9QaW1rZ4DZZuPNFMtP7VEpYS8XHjwybahNcdNBGK9ARSztNHKuuzPY3uqpQRBNBzMdadPn7Heq6NUUm",
  "key1": "4PB9BSvBND3ASWZTtL7b4QFo2SDDmpSkKm9Haq1Htnx3yhMgiP9mMCfAMJFdxbV3GXhEidmT4nHwuw345us35fYs",
  "key2": "577hShMx2GyWiGcDC2BkJ4eGytHgxbzrpQ4k3PtbpC4kt9NLHiCN8sE9drDQsvWmKmmB9XE8J2pVLfzJQtmhSb9G",
  "key3": "3APr9rfbCM7hK1GzGwacTXxDXJhgjBPFMjvuFznMZ41sqJGxLigHnVXKzeJUgkNMKaBjQkRhpHfDH3tyHM69gLXX",
  "key4": "4tvgcCguUsFRDhGa9sGXW1UisBWs7GedAMMgaj3sZfvrWHQZiVhP9511hnjKgBQ3zCZyAFjLDmwcoK7a7J4Ga4sn",
  "key5": "4iAvgrbGyRqMBknhQAEsz5KbVjWCiPSSHPuiLqW6BjuaGiQzzX4xnKrhtbKWoKQbB6Xutz6ivk912oe1iDErfAHg",
  "key6": "4w3XMRyRDnG1cJnXZbSfczHrcAbbG54EYHhwqvebCUhkkQPF1vh5UXYHAC1KcgJWL5wDNev4yAy1w4u4A6DnrHC5",
  "key7": "q3L3YZnM9Zc5K9t9dAfAKs3RXh8vA1jChjgE3cuxXxyJ5TKbev377NVTjX18BcF9CjCPuT3SwQKy8rAUTGBH2bi",
  "key8": "3b8wWtjVVY9BLsoCmxbKBkzfcmHDwBHF6mujXW8MKBNK1HfjRGGoqhR456m4VSBLQPZf1jYoZTBjqBDeipccFuV7",
  "key9": "Lk2KUASeq632qBUSN88LHLx59catzzwwnm3go7Bj6xktuRG1EpJB5vsMpihMgSRNyqCoLzux9ZxYgUoCi4WfWMv",
  "key10": "36wdcnudyUj7gLNDcjyc37ARPnLyRYGqzwtXRxHRKjLNa943P9pGQxbioQAJYAPsg6XzaGrE7nXJWMRiD7U4yaTg",
  "key11": "5cBgSEdvKt7AtJvqoP3S9dxn1m9v4zfC7dcBHiarubcsHffuWUBHVu4nvnh4zbHjiQVs4kc63mxEqwJPwuQxkorU",
  "key12": "s8e877fVvjmfFmnZrd8DDNxe3XS9Am9aEs4QUnzvVM4ash5ZDLoMeFDndcLq3JFjxTuRnnTurCReWgog5CAX1Jy",
  "key13": "hKfxwHihV2XbbyMz2NF4hDhSyn92JYtEB9DWEXi1GfMK5awJJdfxg34aDKST4EfxtRDb8qXmQJk2CQvghSaYqTx",
  "key14": "Tm3KchW1whP9yFZ4ZHcG1P5YmL1tFaBz2Ahk4a4jtCPhxv1qD7Vfi37zSWz6Yd5PNqkm2ZSmbWyqiTkCyE2pusp",
  "key15": "2tu6VNX7njeqXY2jQa1gdmapSVMMhrfK4XFdYqEiuJ1LdcUqe3uypx84MoxK8ZabCKpmaT7uLqLXbPbghznFwARe",
  "key16": "4vcychRqu5vcqWYcR78kRctPXoaLuVFR8bjNA8Va2q97txCLsJTXfficRp6Rz2uuktrYpHaGeaVHhpEKbKGN3NvJ",
  "key17": "39dKrdCbpwwhcjm6MG5i6oEVByPjJXxyg3xv1dxSEp97TrFkTvtuCRWLZHFzuzdEn56LXJLK563SHkMSgarJr3s9",
  "key18": "2rdEo2hMURHvcXfjzTvk2a3TXLTCigWn7EjY9NFF21wnDTmND9HCMAivcCbJrop2BgBLa8YZEbGtoftoF8oac6zs",
  "key19": "x5Xud8m7MkaBTPxBwvoGL7JYL5hkMhgAaPpTGWfqSLwwBcWRFV4pMczFLxvKrrfw58jj1JC1BAkFR8TdacQkZoy",
  "key20": "55CuPBKFKw4YY9CwLfCtV8TCQiwLMjWdntcQ2sDPf97L3LhKBUnD5rte6cBSUbcxbpxjgzJcLb5TCbWcaay3NaNM",
  "key21": "65TgBLgfkCbnCPrrWxddDxnAomHWL4KWYaRpFvxYidK6pqW5ybCrdcwrbgfkUtzJRixiMdgCBEqqKe36X5tCecWH",
  "key22": "3rxLV4EHxrMJYE93tBxohRDfECmRufEoTe4mAYruXcgcrBguMkbCtaqbqntXmEnj7yWYHCAywBmwP9BTzemV1oiD",
  "key23": "3tEGjv1cDEy4C4bXrBiUHJJ29RGZAgaCUWoPWJBdvzkt6in1CBvkXQ2FhbnVLBBEYtA8zimrFxU87sy4eq7smnqK",
  "key24": "4QYAsC7LzRJWwGB1AGVhLFDUgYnU8UxqDKAj4U7QRGqkcX2mRG9JQvKdcVXZSw9Bd4UJGZjnVghtTRJvwbxt3gdq",
  "key25": "5RvfJHNRX82SzmaScq9s8Fspmyjb1SwrzEYaTvV4dy3jN9bFecwFzZWc6rPUPeSy5KcPNTpNmLbr4jK9Pnjhv9QM",
  "key26": "4wW7nuNxzNmCx8nD4FbjgKT6G6X7RTdAtEWAoG2NHN4t84o8ES69N9xZ9s2vQCjjQ81kCCrRsiek451ta8Lu34zQ",
  "key27": "3eYLR6H5qguKSwCgCkcMKQSAyK6SuhKYXpUk2YzF2PE2draAgGv6uKtsw3mGYFAAh6yHeUns9crsigS4Tot3wWHU",
  "key28": "5kjJY28KVTKAxCFCerMS4rTdBCz41T9idcrwTDfN3cqd4eA8iLwVUvE5RNiWWAztb1fVUtFFvvtUVoqBC7m4zXeG",
  "key29": "5QNt3sCeXa1kgyeHEBxwyGPHsQKeMZcAjNWrVzutf7f8vzCDgKM12abMgs5796cDchPNqeJKAKe3XZGghGdrvpL8",
  "key30": "25aspVd4Ea9d1MMahvuZfeLCmqhH8za1eEnXuGRqKUtc2kPE4jcNcuZsoKyhpTMVDFzNcXTTSr2y8RHb7ifCjZoY",
  "key31": "5fzj4gL9JK3kGyBrVD4jjA8Bx78sRVD9ucpdMRpm5GVi4yLgUQgAHyNzP8fYzqsMtqshS4TkqScK72Pkxf2f5fqc",
  "key32": "4HswEFg484CiHBfxCby2jLfGUXN5CZrk1Kiw48bYdvQ9DQpfyhjKUHM3J2Ybz1rhnjA6cPydwTzm115RggQFBJU",
  "key33": "5qwj4EvnJaZqoM3rNGb9mAVswdoFZPVehs9PhT19ESuGUsg6fUQpCZyFK1Ui7EanG8YwGecXet194cJMEkksnsSP",
  "key34": "4AGRAi3mWDJnBak1nLkGfqgSL9RrHRwYK8UuKQeMotYimmRwWYPB7Bh3Gx6NtCNd19NGHX4zV6diDQjiZqKm8TNZ",
  "key35": "63iXheoRNyS4sc6bZThCrca6ESoz4gpdZVGqoaPrfLettDj2PBwWuswns6cqF5bRerviAVM7GoyVPz1hFbzZkGXx",
  "key36": "km6HoVKFAnAkwUV1Qry3XDbMYDgDTt1vis7BQd6Sfn69DZhLnsrUuwaKjUmpNzKVc33CnGAeTb8kMQR7nkMQqQy",
  "key37": "mYpsaDyMXiJnb89ZxgywzQwG3o5stVaydDFGzcPqw7knk832x24ZvzHk6vSqZpEUppWEa7s13vssNnV4VjQS6x3",
  "key38": "536613BLhHET9foQ8nsk22njbc6c3DTum3iCpPDFUyKsdVpXLRCE9eiBSoNXmqPgfguSPXdjsCVFGyY2sMDGvDNG",
  "key39": "q8ync64mYaSubirxaSAHpUKQiPhGLiXimLp1RPWM1HtwSzChSEAKTVkDeoeunV569Zf6VDM3nXv5mMwXr3LZU26",
  "key40": "3AVbfrV2v6PWweuMDtqNQAwJTsaePzqy4furHfAXkVRRGMTf6FgQU76nYjp5pfNV6LweUzUx5Y8XHScBsFnrUZMq",
  "key41": "5F7rRpThzfEbyueeE1Y6zp1MbMppYDH57jhtgj45ikFo96LShvPC5HWSNXMqGPWnJNVrf1Hkjct5jTELp5WvxBcU",
  "key42": "4wdY894K1odthcK2Js7XQNpdNvtCPXmrSyxAjSjDBux64Up1zbib4WGJ72qwiXJ7gBGAhRsAfAGaFtxWgMjyyge7",
  "key43": "43ZLZb6KZz7C3znW2woTT8ySkkv22wW2ueBDYCwabiqFfB3Quzou1zq35bqMVG8A6KoKyWzPefsTNS3tBcxXtQx7",
  "key44": "2PUkk8kTFpJ1BbhDHggbDYjXh6Mv4Mws2nehQR22LEcSS5WQ2GHp2BjvJXbXMhwXqcPZi2v13QLqieLv15SiB4yc",
  "key45": "5548FwamC16dWm4Hyk62kAs84hwH39qQN3sCfLMf4ot16KikivDsqbjFyYbUviAEQHuY7r6YGMsyjQEcJq7LXiaz",
  "key46": "55HRW9SdAAnUM3PoJYRbKq5h9v7i6Bnbh5RN96d1WknD3jdvtutY88ZxF5JTJ7bWWsQY9vS1wfw8v937PLgPh446",
  "key47": "5oFGwbAk7kSVJ5rBX9prWhRWRGoyRTD6UJ5GRDkcwmnuSEXVugu3FcS6g8XJ2MKVK9Z9sNS7tHSqDpWKoRNyCfZD"
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
