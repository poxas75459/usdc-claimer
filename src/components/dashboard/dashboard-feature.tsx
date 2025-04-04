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
    "2V8y8oPuods3vMBZPykUQ1aJy4TyHySWEHtGi8hVtGeemqd5cjNdMoHC2GtPbrKBX4cXTkFHsmTYjDFZEk1zMKDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XNRqHX8UJxonkw2MKs7ykodPN53KywyZGSoRrfLMtQcXmVjXxuPuxRpUmZhi6gVbeMCPCc5NDBp1HGx16n7MPRc",
  "key1": "5omyJkWGh8RNoaQyWiGHquQPciR2M5Dd9MPY7EeN6RqHxUn4TS1ATzWYWRyG6riKqWTqpwvMnLd5WC7DfpSfSvYE",
  "key2": "4LzLU3jxYfPA3CLCfhBL4tfGkxVEfs3BqxcvKMizZmbfKzJsYZrJFbH9LR7ErHYU9L3DezTVWXXehZiGBLjjK8J3",
  "key3": "3FQQncpWEoVo5KRmhesj1qz4NgBKJ4v6Ad657m2JHGfXw3UANwtQAMXcfknDwC6tm8Yh4bxqVBMrUXWdaTRa8Tdx",
  "key4": "WTwYNkANC2iWSJP8UDFYNMMQpjrEeB2nwGAkgo2RKHk8XbhWH2QjK7mGAuHtuiQHCq2utzQW44NaykoTTZj1Bw7",
  "key5": "jJcABCWAPRs4uR2ZHyJxXKQKsRiYVEgHSEfGRxG6pvLSjfiaZgXuCGqpWeVaezdNEJ3j2Hwiq3AwmxXSUfCaJuJ",
  "key6": "5aRXwtt8snZcQH6VjAbfFxe5uGXqw5SpAzLkCPAnkGvWHcyLXT1ptdrfM2WAQFtrKq9qCPTJ8bEcwvo9PjAVTU2T",
  "key7": "uVWzF9eJuhZbqdfz7SiDcPpkxkRgr7KJ6hLNwes84q5adMrNCwyVJPDWPxMxcv1is11qK7oMbx2YodShBqBag4e",
  "key8": "MK5mYz1PnMrdcW7VuMAFn7MRg9t7ZLfVmkPuGBiv5m4d4kjAuBrnd5wjWTs6NnmWFcvBMSsAHkQcPb2UZPAV9ue",
  "key9": "2WqosaeWPhZyEiWjT8dM8GxT2K9bRpTbTmCnRXD5osjL8LMJgMUhjNharQfFKWWQ4RL2oL9cARGgvaLhJpRsEW5z",
  "key10": "3bkUNpckpiFZ6Tfru5Rt2bAscNebGayAMGiZ5Qt22sCEoLcXfQG8FiMquYjp6ZaychHK3pv3TiHbSJuTMe1dBwVP",
  "key11": "UaseyiyTkEDyixVzui9VoQBhqXas7F8YqWzZHA7Mex83mtn8yMZeyxp8mX9LRCYAsgqrN1qd9R3mb4QuRMY9mp2",
  "key12": "BgkHyP5dTPxvt2ct8hHuzULmsj8q651Lgx4Vu5iiuB1scuSU3bxoWm3FScc4d5uq4JtotWJ1TF8tCexBXzT9cNL",
  "key13": "2MDFnEaovLkjrKb5KF6GNqqKaAT37ju1nRQbrbqVhoS7B1oSH2VfBVrJEN2A2NpgUbjWQLbyWgVSe5jwwSNvYuT7",
  "key14": "8s5HNZ1FR55H4G5KhbDtYiiQPN391LCwyCCavCdx3o5TzPtkLoQUPCf3v2n2ucG8hz2Fsa4gVH3oGHkAHy5XJnn",
  "key15": "4W4LxLwMpWKWhgGZadLcJ3u2fAeGWARdCJWKjEeswcea1GQSMTB6zRitHYJ2uSGDexhUCBJ5VDqC3C71RFWBN5Xx",
  "key16": "2BLWAL4X8jN1BMWqsApCYdYuhqxWZXDgDEt1TNWqT18tFfAPrkRQEVMwxQqyVSJ9o2YsUVmrvyKfnj1XHKLYEAym",
  "key17": "C1Lg7acbAEaHBDfKosAVXAE5oLCFxTcnReE7utuBEFn1JfuvxCrHp9mQB5VKiX3W1zFqsHNAbQpVWJ3tUMUD3pq",
  "key18": "b3iRuKpNvqPy6XvqpZw3MSD26iVspKjoCnYfwoAHukNEHSSkvsRBVzkFDr66yejwfXcyytdMoTKcnvSGsLD3KUJ",
  "key19": "2wnQSpb6eXKWNLzkXHAo1bJ4X7rYrn7RpfLoL4jhR3eMEorYKemq5qUFrPQ8VtjVXBebCMmjuhasfw1EhvF6FTqX",
  "key20": "5aviibvyF5YdhWFhynwiqocJzyrHvtwtkHnKh2cHVuP5QTmKBqbB5XeCd24fHNfz7RtZEUr1RkZz2NKhVUVkSur9",
  "key21": "3o4ryrnZSTsgUinmzKdSoMUE1hU48yuCruS5wmgcBtXToHo7YeRxmuGxtgErT3CKWJ2iVhWNEEWW1tdbkHN4zxtw",
  "key22": "WFc3GzJvvQnjrn6c5qpJPJVtVRDzayW3rfnSiL1U5ssihT6QfFUPpKx78ckhf1au5D4b9Uk3oeVJ5fPrrrHS7ZG",
  "key23": "3JmhYCXFSSSqPsQbHUD8Pn9cBrqZvcPHZV1xx5ZhvWBvrmbajwYVjF9p2qGhavttorCztCYz6cfjmLaW1sgjkFKf",
  "key24": "5GK5teRj2rccGeRRrJMJzvYWU8djv6fnSLcPpChayPJKNv75xhH8vvR6aBLEDUVRTJ294JxxZBpQWCpB7iogczif",
  "key25": "5aVLndTEHqmXBWHzWyA1Xv9kjmeJrciMjDnHbRrpWmFKAZUTiWXM6kMszffarbRJdL9TbkuDGcs9cL3ZeSjVkKoQ",
  "key26": "5xphmoXVWchLRxGP1eXeFyAk52GLA8wpBgjJWgCVf22oRMfpAa92VFAaDTmcfRhZ2yA7dWQSp23C6ActqtmpoeJr",
  "key27": "4NTA3vhDTBZUQUcjbp9cPys33MjcZQfyx2s1KjAjriKQfgvBSabDZFcDAtdeUMRuub6CL1NfVTihSjYA6cK3Ld2k",
  "key28": "4DUHWJxDW7QMLCnTcqbmpLbU9xqK8ZwVU9d2LCvSL112rAYHzmuV4zpNoRA4F5YhrcZPDjiEG22QAjAcoWkw5Zrn",
  "key29": "62BzrsWjEXqLksrALDYseUWN9zDpXRxsBQxXDjiouqZ2KFFz6qJYwKYmmWLFGj8igk3W2NTXdDdbTCRrG7WRSF2M",
  "key30": "2uijWt5msng7cBm4LdNbLZECYoth2xa4c6gkbMDToz1LRm8qHxi1dqPqgq8JMYpDpdU3uKqQL7t9nLgNpjdMqUN5",
  "key31": "wAGVEnpExeeABaQAUEWna3ydG4ZnSPBf5gUXVGtE4kS3RhKVD7mghk1AL3HZw7umxZf7Cre7cxTxaVKSJDWoCdU",
  "key32": "MNQcevg8onKcHiZV2Dh3VJNAo6rj4sLopezWP2SSqb4GfM1b2by6zEc6PEFY2eH3ong2wfa6TH14ShzWj5hyARC",
  "key33": "5ccAsoVifGuCW3HJAwkLDvQuzR5MKRtUqByqDqEJoh6jeWd3t9TmSJakvNpusgNyEeCzQohTNSD7gk9xndj7JVwh",
  "key34": "PAmFLZVGGaxqmbvvVL1MU28ypWqXuFW9FQ4m9HQUdsCn5SrScDj3YsnVaCwfSfZ84mTzPKWiUZue3u645ySzkhs",
  "key35": "YQ5zxPwh4m7tLm6M5wYFUFLhYo35JCKrohmf6zGCCAE1skW8bDuC6hXjkymgeGC1VJhgcHsmeHjNYPFwPFngJCY",
  "key36": "4cPTSEGUEccxRScD4DRCYuH6TofP7AE678Pszjj9RJuHxTCEpX8DdLyWVU7rf5o9FsGGwHyDQvBvhewvfw7v3AYR",
  "key37": "fEVjYxd4QmzzVjk1dpGJpZxCP47cQZQkdKfPhgQ9iQffmb5pwus8S41N8TURrgxBfVFdtDkNyq5xcnsJWQZFfNu",
  "key38": "4LbHtWvUPZCf49FJyArmLiSWH3B2vVA54zzqoXBFMbd4qVhkCQdB8TN62dSZ5bG7FFCswxtoDRNQGhQYaiW9MS3Q",
  "key39": "4tEgXmhvGVYUKpWCUwdDpJjwf1GSvWGZjsB75XVr2Yxh9gWCvooV5g2EGJcLcLDQxWDNWAXZGnzNqWSAXCERoRcu",
  "key40": "2YChfnmbpiMwSiU9LcrsdjnHB9mvJ9XH2KRJXQ7PYyWaWDh18Zsk6jMuUWeSNxBbfFGw3SVeYhHPiJaWwBHbmwc4",
  "key41": "86ZQTZ6ADs39LjZk4XKca1JDJahbhuHh5t9Cn51oXegC7Wiurn8DSURpCy4U3hEpGiJBe82Mb3n7iLs2C3g3Qje",
  "key42": "3AN7zykmfLuDX4Xw51HmsXEkLsmX2xLwwsWh2PW8vvf6KJGPkFa83vmuMUvHduZLx1qk4masfBHzAPSmdiYT7RLA",
  "key43": "5XcrzgpgSsSfnXxn2McbFf3SmXLw4NvJgqmuZC3AWDm3iHRsMGeZoZL7PsqfarjMPHFcWuGdM8PVGctroF8BmbPn",
  "key44": "67V4BRTGJvm9vErdEKfQcEGWCV2B9pyNhBrFjoW6h4JgvMj847fQdR66rnjWe1nwgXRDK4Za59PMuZczYcxgxGjt",
  "key45": "2ELUKKDPkgvHFBHC1PV5oxugLKX6Fsbdjmmrx2x5R79HrdpNpQ9Lxk77kipSRt6gX29t2AhiNyFS9yTs2UjaV3U4",
  "key46": "4ir5rY3UKNJ7HLeEqaUSCWX5hXNDdD5cDyN7zTphq6yTigdxHXHWvzWUyt4fwNJF4DU5zR3SNzMzNiyrHakK6u3p"
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
