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
    "2BWDK6BZSGWSWYbN6AcXBodEWwUSTGxD7giCrZTS1xveerSNeEMYVwGzpqfJ9ycR3MSteK4Ud4Yv2tP2DpVNzvxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ura1UY5FKwp5r5d8PYGzqmsfKxy5bGvMXJY4jtYLMaNZJ28ByXF5hk9tTnbG2K9AYVd2WaU6cLQtatRMFdzsSuS",
  "key1": "3ATe5R8neyquNyF8H2miA583bSCynKU4Ew1ncY9A1LXZpaexFxA6EMLeaWvkU6uqf278K9N6FhTx6tZC6zitexWq",
  "key2": "5xneJ9hoqzqwEJV4DHdUEbv2hBHJYCqjd7b4Qayqab2w763Tu2TMfoRqhJCiDjqJ7FNHBzYJEpP4pKd3GCejZVsz",
  "key3": "5tWiYvEB5oskz8Lr2qLQ4fKruUXdfE36TWjZqP2gMaLitYPcxWPh6EurvXAwkoyoWS4HfypdT8GYwHZsn79UxXjk",
  "key4": "twXbUV71C1PbfvEz3LRouzWdkrJKniZ24496h2WYpeWY3cqk6MkvQLEdyoPwnm4JQek6FNvWjKMNEB41UhvTJrK",
  "key5": "rvMycpJoesMoqkhBw2LXtgjXAzyqS6VymGKU6wdobFZTHc33gEqfjtzsmGvHM8fudoramvMPEfMS3z36xtSuASQ",
  "key6": "339BDh6cDMnBs2hCkBdbhg393Mvq5oLXLxAkgNcShXVLoJ1eFT56PJNF46BC1ignUNedR2kavBXh5sn8tPTTT5CQ",
  "key7": "2Yp2i8Rp2qVbaTiRfsHQVt1N7vdhhW1JznaBC2pnpJn1EX8zt4vh1SbG2cggzC96iTYeTjsVZVNNcgjVMP5WXkxg",
  "key8": "2hZhBm4Zt8sY4rfSMVDvvhXdCt5Z7NsiFcGMDYPGCdppP7BQEk5spxsvbzemNhu23iqiPhG2Ne5nRdrxzfpRQddF",
  "key9": "4hpAr5gStstkh928LLthJy6USPVPM11msErhzVKKzNM8dJFhQ9CQEiKt5HvgfNVRtgHQGjPcsrELXU1bCZGmPXjA",
  "key10": "4SMM8UG8B9srdNBkjz3kghLGoPwrV85uPj7LqTgKrNwDHMFqUykF6FUXKD4NqmkLmkasCrdmMAK5yHzvwxwZ4tR6",
  "key11": "4KKF5mgTZdB2v5b21A7GwBDC8AQx1bpSTGuHZAaUERfwf1rtPPixpKbukDRX9QgaSeWyB4jMjzVRC2osQ8Pae8Ni",
  "key12": "63Cv1Qbs25Lfxxft8VsmiodzAATjoz1TDYNHeDwdPU3ghJ26S7HNMHt8E7WrqfZFcVQxJ5nsJat7SG9uGV1QKwM2",
  "key13": "4pFTB5qbmHR22mxCGiReDH3HbtFoN5eEwjU1L2ciWhmkodjn8Y5AMBXkAgzEZAQ84F7i3nSpykx1ZjmbWnkzYcTs",
  "key14": "G6ShiP6nBddQY5ogrG9YjZWk1MfkBoD6PXpbxdAtvuTH8YZcDckpgXUudDqSXv18RWaFZcdmeMKSW3BbUHbYDwv",
  "key15": "5Ge65ot8xWjuDfkGsPkBrnhrvepeRWTNVZ1PLDo9ZY8QF1RNBwFAMipbXNZvyn3VvVkxdqyNWf8koQ3bz6Y5Q9VF",
  "key16": "5VLddaoVwjtpXQ8dehkzKHdDL9BB9h3FD29dobGsbXXkT36AaYkqxfZTKX6mLqhLzE2QTy3JcL6mhfnkk6GkXdRF",
  "key17": "263nHodUHemg9LRqqNisR74E6ZpWeNQeD7fBt5G7aL3Mmy4CYqRwJF74xKTgEKwrTqJz6wai8cbEDtyNnrzAVpMa",
  "key18": "4YJGtpSjTmL234b9c9tBdUSgV7HYM3i2TTVVxTzU7b2PAY5UyggTumG3iL1ST1AGLBqLEApm952VP34twJRiCmtv",
  "key19": "3mQVY6ZyHwNSvfdK3ftuQ6ArEK1Tkr6JWaj8hPYGXASm1kYS2jWWszqczuLeBvwBKeXbkfCXQ9jvf7dWk4P2rqPc",
  "key20": "xFqDMSgxs6u6onmFmrY9UZsPY65nwfiMDgnTHndyaCh1cBKkyKypBCPjoZnkajPCeJW4uyfxAviXPadE5hyXuxU",
  "key21": "Sz51J68DVsDzuiPfthgZU6Mxpf7FhdS5jAcP8Y3oJ7qgKvpuPFahRwYPsgRcyqy3Tjs88cC6Xb5PDLHde26Wbrx",
  "key22": "3v6M7pM3228z3fiFCL9Vkv4BjS5V2oehS5DTpVA5ASDGzsx7pgs7esXja53FTuG6upQ4xgZM2zJ8cRGGW5TWWmVu",
  "key23": "3FeNtwGM2yKMCf3YzR1TqZ9HRbUZukBZxsCX54qS86hsHHaSVt8dChESLZFa5NiaLNSr2fDX86e8HWfVfwzhZdT3",
  "key24": "vrW9AiDfEwqT9p61L1sbRyUqzvG9BtHWJDm1BzA7phkELNvgQuWDPFyD7rmmLVRL413T634efM5SUaaPohVDLQB",
  "key25": "gAEg58U2Ga3JGmpaBkxRbKzhNscTQiGbCo6BvvYsAf3BUhoHSvxC5qkJahnWyHNGb5kZgq24JAMFW78cZmuHtbt",
  "key26": "4UNSwcuF4Yd73U6Tv5sD6pwiLhD1s3VoQTXCCtQfuv8eChB8aYR5AeN5uci3FhYdLkok32CL7y1DabFs68M5HezQ",
  "key27": "4xY8RMip5ZWThxnaX9vznsfwVhdveY4pKcgUymgcw4gqhkx4hx75Kg5AsfGXgBAh2sUCeKKUZvMGRwhFouQHcKQa",
  "key28": "3Ko2aRNGJZqpf8sNYmevpaAaV73qEJ1bq5VeMDG1XcCto6sjgpZNMWXk5nqpZ1nZTfGVWWgyWoaWTdaCVCkUhrBB",
  "key29": "3rEmHuFfXJ1ydYncMvNLMgbKFweFzSWxbeokiPJNBVuv4RoaB5igEwZhEHo9JgEGF39MyMktDqqPVZ42wgtxnmZv",
  "key30": "ciNaVCki6y2CmzuKQxsGgp5BkECNcw2f3KCgyQnEfJHSY5seC2ucjZAkmcUim5ki6tFcnf3mQKQguqd19o6Ajon",
  "key31": "3AyJASdZtSeZkoppuH4b5HrmG4vBrPeDvUvQTkACz2NDHiQ6JtzGYzQ3NvxAMfRJrefr57ukNX4qEDht5is7WdVL",
  "key32": "2Y1aN3tjGY3UQ6jawRyhPmoS4iFxvt4sVLfxdYPDsQub6Sw5bG4QvEo23zbo4esvNaJyWaxbhD8QhyG4BA2yg155",
  "key33": "4iqAYErQmL6Va1VrvFsPaXyF1SuKRrKpWGAfnzKzPJSdEsLrAbbd1dKwGPc5fQ2CPVYbVLLFRZ68hqqHqeV1N5bn",
  "key34": "4EcCE23gAFHCGF4i2bZGM2uu7DUK3FXTeLqjz1mmBAmZL5XAsGZw1MG23rPG3zfzT63eowSjdbwRCWEJDu5SFDj3",
  "key35": "kaZJPH5CLmiUw1j9BH9rVeeRSEMVQNXpbyqUWdhWQaicdBxXjj26Zn4fGqpaEVBv8CrhiC1RR9WGrS8V8s4Ku2C",
  "key36": "3tcjv1N6vKppyVjmCrgQUi9RiSBn6g7PsHteEESwPdznr4D7FfwPRXUiyPNfwsFGa9JLK8uzdzqYMGJUekMiY8mZ",
  "key37": "3fnnZxLviBE7Xp3WZ33vm8vDhmq7hXsFn2VA8CX3wKHnSmzMB2fXbpipAC39ZG88uzsbw7TeWeGSiCR1SR4K7Fx2",
  "key38": "3CbyAxoJwGnqQ1TKaJi4476dGTUw5J5geVuWhv7E19LNeUngJyUaPbujZfyGJHunw1jeAXu9bM369o4u4etQL3hT",
  "key39": "gR7CFxprngSzHRqiz6ouVACh9dsmLJWwtVPNVoqE2XmsfoqUeRHVAfK3Tj4r42yShPaXnasFpLhvTEAWUe2sXyr",
  "key40": "9ikBrZJaiTZck498tvVeSU26ekmGVH6eVcFLvZnygX1YHLeEaZpWcrooswY1jyNnLW1p71BbGzqdB1RZ3KHuN6S",
  "key41": "4R4RHHwyAKb8tMSJ2iwxG2MJsv32mD9iL9qGYcvJocY5Lq4ALXxofZnjg9vbXYvhjPnvF11kkFkuWozhfn5dKQ3P",
  "key42": "2chxQEW8VXHdfMUPoMmYohMEkPwxWxGPGqukPf9a1842CZL8mkoiL5athrevrXfQGmnB6ttY7Q3Dj1hrGb1LcDUZ",
  "key43": "2eQvqA1koYiS96iQaLFFZ3rPnVAcP6ZVKthdxvssyY1BV3mgnMiDHjgEqgRbpQxhTJFdNg8ibYN82n4mYN2LUxFi",
  "key44": "3yXK68mYDxiqXpLp5LkMYxvAss56uqpk7tZXm3qLHZd3pAtdeFuHoMkJRBjGB73BMgsFVGeQe7M1jU32B3Mcuk4o",
  "key45": "5aUr6cM9CkAso9tZoH1LuakfJmbq7UkqqyrZVvaMYuxwYH3Zj8grq1Z61f7QKpLq1oFQ7kyGNHgUCcb33zPFUeQY",
  "key46": "5wx1qTGKT1hHh2o2rk6RS2UYHLgo4rJTUtWbnSPBha59mq4MdoGx5NdVV4P4ze1twJuZ2YT7EtkrqwYucub7mUTD",
  "key47": "443p8YhsyDWvTfFXmgTeAB6dYi5US2omkwk9UaXUDfxgykj1BxZ7KwLB8pLpmGt2XxmD75KfPy7fHviXEUgposrx"
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
