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
    "n4YnWq51RQdFwMZkVwAGdf3MzFKk4nT18UNUkGEy8iefiw4Uo3SrW7TfcMHg2zRcRSzhczjhTymXHz3WXRQnzRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DRwKkvmckaN7VB2RuQgkNNFPGif4qrzmSBFEPtJsAqy5aQVDngRBGJZkQBp5qtULT9Vbsdo9AHKeP5VfL6tZv1q",
  "key1": "4uZwtfcwBQMgrNqJr25n66LjYpaV8f21hp2urbLkgkaFGkVMuEyck4kRJYuPJe3CD6pXBDzgXFJHJdXQwK7w2LWa",
  "key2": "3C2zZJxKEzasrR2Rs8NhFEkkXpnqehikcJhrSgjRHvAjoBvEUHJvgfZEhRAEqMUzrdbGnH6uEfRN4fHyryRi1mBd",
  "key3": "57H2KRjJHRx8jnF8XrLra9fsQ1txYvS49ByiytgbLMrNFETd2nuteRnwrBi2dZscYQHoAkTgHxdjiJZ1RW4NrTKi",
  "key4": "3ku9xdqeQYz4tmcVzWbyASFaHkpr2QivBm5pxUaAkFBWvLNkBdutm2ogX4WEAPgJS7gAvNbkd5Wrv4VPLVEy8YUf",
  "key5": "5qyN158FLZbXCuj1RpKxqPLyECTx6SL37kfqpMho3vRSLMtepQbgMdwf7iTQK2uoEZGUhZ6sHeKFNQzz3WZPAgMe",
  "key6": "4ufZKaSoBkKeVo5rrD8mLRsg6K6YVwnTgUS2vfQaZDXnDcxA3NafkHjEXsYxEDzuuCpQVg1u5rDR9kx2jZ4JnvYJ",
  "key7": "3bobjRKZrU3K2auQLBAYWgRc4HG2BxxxANoqfHBc3nKoh4R2x6KvCpWKfkZjy2rULBYDd8r9X2ed5oS5hSa8Dqq5",
  "key8": "3MG3xVMihJ64yCkLBrbCk9xgSR2hgfvsBXSPxTZmEJEhW7yhrC7T2EYPQfg5YnJ7wqXqxUys9EVpPDKU2zndZ2J1",
  "key9": "3xGgpB5quUwWrKjYc8kUY8jhrVfivap8CBWsxFNmCX6x3SCncTMBQ8yE6KePUQN661c5tyvkSf98pSwN7u6UkHTn",
  "key10": "5Z84ZoszSSiXF9ZiWEFfSZJvPcfztbsjbhsQepvckPqAvJxdzFiNykNxSQmvFHL5jxVKE4AKftvZrQ3ML3YkWeHQ",
  "key11": "3yLmMuz5MST3BNcxEoaGmog3oTKTEKPJFJd2CqKggXfz2XcUxAHDzPoswwhinxgfKjumt4wtAEquCsYgqcbMCiDV",
  "key12": "32iNTAqpS327U9cBBfuvgvtpKbkNDhQH1DbEyiQskaDfTpSZDXT1QLj7XnjJfbYBQ4KGsaJiP31JKczvWFFhodec",
  "key13": "4KvfYVyq5C3vu6X4gzjV1NPGeu1r1mJWRb9aRrU4ZgkuoZBtwGGfbgM2NVwfsWtK1uyaX7vPtancWYwGqfRH9YGD",
  "key14": "5tTHt4fupUNj9ASGkVc2qAwoTZhjrsJMAwKM3LJJkL6jRoek6Qpan9pByfN52VZzx1GVsyWo6kJzct5TCmszGy6k",
  "key15": "3Dkxkh8oStQeZDFW28aE1ehSkRYyLi6Mvu1yVUc4zNDuvdv56sKot8ewgXpNC2pLxLTRXaTg5yHgVd2rYoBy4rxy",
  "key16": "3XGKT8q5KFqkgTDJoX2DbFEmoT6MEe9AeHE1BBrLoUpvQuxHtRFN7V8TVCsYRGcxf6WKMt1g762GS6vsvq4ipy4d",
  "key17": "2y7HTAMopNr3ne3JqnzwvSkmwqhiZAqusH8DXGScBGbJvUYTxECmsbScjZTA4pUWJke5t71pKfRMx3wvp5Lz78F5",
  "key18": "3VQy77u3u5V1MpF8ZAKawJgSgs86rtjG5J88ZoSxYd1GJA7KmwZs5zwQ73tCdvF2KLz6iSapqtZfay41mf49Agcq",
  "key19": "2NcQ825U9Eh7117irCSEzCcujSW8Zqu1V5QEjdcvySytpywkLtZ2sH9NL57npwjwYFcgAQaoTrKAkcuuTPsWNofV",
  "key20": "3bJKUuVasio3cdC42utZ9i2LXJDUyaU1VasuXeHYMzmjN4PViQcbatUmYoxZZ1QZqprdUq8NQup4d2K3dLkg3f5G",
  "key21": "3vH1s1AwFQqtXAYBrMfEu4jcPvHp6qVjHfDhZbCtf26vw8vJKtAPFxcDz9BS3FCwuTkWDkp35ZhzjdpEjW1o3Juh",
  "key22": "5mbQzqyU4TXjhHh2MmjAo9bpaiPcJMWs4AyZRRMbBYH8wD5f4hyuKTxU4NkXCmMcXWKstJ8i5kg5xynY6LrA2XGU",
  "key23": "2mz1745GFpfnkEXfL5CetXEw66oou7RpPEC2WvgPGBLKKd961v5UUrLLxXu9z2vDAaH76UstNGTvDpFoarPN6kYh",
  "key24": "4H9vzvwiceX6VJNtWGbapFx1FmpXzDiE5B7pUu8Vne6F6S8XKPsTJGB4pzFf2us2Wh3iCbjrMa1rLqgps2xFS6LP",
  "key25": "57LLcDWx47N7bLTt2x5PneLzpyMZAFKatdsRVdhmi9fw9PEA6rvqMpEEYKmUiQDSnrioxQVDvtjXP7AYyUtwCMe1",
  "key26": "3RzbAM3646a5JJUKW454aZ3Ttybv7rymTgc22id4DG4fifYPXBw61c9U7rMUeRoSFk7jrEoGK2SfJCr82P6jpqeV",
  "key27": "4K3W9m8qq27uXN9dorZLC8PNMyCJz4DyYrnbtxydKHXs4s74gnRkxm6Pzr1z9ie46ivEEi83i8Nu4Ua3aQkC342s",
  "key28": "5oVgEZygr6putmSyHFnSsphVrLQz1SzazB2Bog8Tsd4dAdVjqAwBWP1heHMZzixNdefvYKz6RYpQaSaKFMhqqpSG",
  "key29": "4QNZVq9syRqZ2jckYtvfpqv2t2Cy7HrXT5x8VskSNq9LMZS9q6xdvRfYcNwUJ7KkHmX4CBCdasizkFwf7KvRzmum",
  "key30": "3Rem9f2vgYEF7otugxSrR4smtw6nqAXyyfoYBsECKXdcqutohuJGCjuDQgj912pSmwbSCYrsKPuYj3uZAFRAjwZ4",
  "key31": "4Jo5q2NnCvakUvwzfBnofbeAXmuTEe7ge4b5WznDf8fdDmTDyzrFzMH5qE5H5sUhrrnbjjT952eg29VrjDommbzx",
  "key32": "ZEPNU6ngi5bJKF35peBpKeYVVFvSZe7ycmGeiA9n83rXMkqDCYMyCtJyU5eYAFXy5bsjKYWQm4qYLgxp9RyAhJ1",
  "key33": "5jfcYsV5XReSf7iaJwmtgB6teL6Lq8SDsvpEWk8qchU2oY8QC4713N83tYEh8yfxyzzdhQrSwq6Ky5QeNBRMukwY",
  "key34": "2kwDDRQR1GVhnfAZXcZ7cGByKEt87oM592Gg1g9VYK767rsB4f48M42raKLJoCSABMa2dTN4bpjanAFpWsfMemHq",
  "key35": "nfFwHmKJ7bjGy9aXheanx7Cpswf8MpdHUX3JtqC6hSkpALMxzhNGp7MazdPcXU7vvxJ7fodqp68yTdXRUwFzjPH",
  "key36": "3dD6wr9Fnx7jeHfPuxjYaqpp57gMxpChCrY7jv4QF6xxz6Z54iqANWW7w7gCBqaeWnSiSnncDpzEjY5N8PCthxnt",
  "key37": "3UL5WT65fEnZPU3fzd6Xh4ipBCRoGEBjWHzndAp669G3qer6kM1AmdkVdR5vZdLfJ3R7W196fbi5G3fDQkYef455",
  "key38": "3G9sboNV2D7qWRm6tWqu5TpYGWajGLFdqE22yR9NFYRCkJHjHnMiLcbbatX3Ly42DnBiap9wZehc7QQPRjtusH4r"
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
