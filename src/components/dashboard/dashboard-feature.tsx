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
    "4s5gUAFyZRGY94jwX5Vxh8RVL9LMdNDJcCoAEB5oDV2ZhgBtTaKqTkQMo5aedHcV37yoVSBoLmpp7JUakyG2yfxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qDh7gJCJEEmgi5yJjLAxMmCHxrUmFt2oPfgaBnNYFEV4cjttCzMY83EPFbqapwpWwhxdB5j5vtPqPRjdF2Tx25i",
  "key1": "6ERGjWa9PjD8QCEN3XsjaHo2epY5D6b3mxSRbTZ61XXenndzJ2cMPLygLAtFLtH62zVQe3WFA7LQTGZ3XYcZ6ea",
  "key2": "2EGWTgCw2Hw523WpL9wHXCgMqziB5az4DRtAk8XiJVaiwnBvYN65qhg5EVR5opz7QtBhjJNQhFWJgaVmn3Kd9KcF",
  "key3": "457E6SRqHaiCZQbRkH3B7FX5ACd8pumarpFJQcoosPYbdcDxPBsjPp2ETtXPhzYzGig8GSeX1EF2KJeDVEiy947U",
  "key4": "2qnbaVQZfz47hZuJZxyKQ4Qj4CNS85Y6YtZBJXxuTcK3U9ZeeTs4gFEFhBCcVnxoqpZ8GfJUu6ihxsnRKqbB5YLk",
  "key5": "K85Q5nWj6F6xUbBvAL7VWuwZ5W9oq2KTHCW1DvGwTtKPm1maCuh13CWBUgrz3WmdEAXPVZbJy9uUYuxDHwkeggH",
  "key6": "3iaaAJnqHbWEaSuv8zTvyKxPrepxgLJRyVHoYNbKd4HSh1T4WCcf6GeJCpU2VDdvDqMjYobvJXyxDtVzNdVcV8Gg",
  "key7": "5s3isGMoGCN8CRT7Q2fzYssLxC7YzzFY4eXJ1kFK7tFxAGZTdfsW26ZaScusESo18ynPSjM9DPBc3NB1fosuonXs",
  "key8": "4GsALFiWjk5t5jSQZRw6gp3JY7CrYhjFGG5y9S3n3H2W5vQ5Qj5WUb3tJU1EBBYbnpjcnKwQ5KHV53djS7SHSE82",
  "key9": "4cvaYRFUTMS2XW1Lpow7kLmA74WQXvJZBtkUBDQ8dP7xLsY9ydGZZEjNqrNfTRcjopQnRpWRQHfpHXFRHPfUDemR",
  "key10": "2nESgDpRGp9YefQYnr1T6eJ6V3MyufatjoXQJCkCVbruEn1rx1FrmaXHHs8bs85U3pT7Tj1xJPTrJd5AqQ6mLmAP",
  "key11": "34ZWr2Kff7kz9J3PmHzdtKFq2mHdwm5oBe2yViiJmJuNdU6Zw9hPBrPKrue21cYNHFeax2AkT7aAiGFoRmegwv4C",
  "key12": "4rHj6JhKvgGf98Ymdfi8V6ZPZBpLrJEpEqAYWRh4NgomucxnLRAMegv1jwcWAmAnCGTYMxwYzosH962sMNf7Knvm",
  "key13": "5vw3M6LvkhvQndf337jHVM5hRUT8ApHQhTNGssSv7a2nVHBi3hoM1ekBapFj86cyQ8fnVV6fTK64zxLFzN8oa7u1",
  "key14": "47fMeaLhjerkTR1fq4VXipXzQJMsuGcBkmF5U5PTBkX2UJNCnEDYMAidGGbSLHQQarB7CD79xA5YwouxWD1RAxto",
  "key15": "4frgbtcefn1NZL6WNRM1Fa32W3ZnucmBbAQC9P873mQfxH7Xx2fPBFF9AuGpebPHtm6pFX1LnpSz4YNmmoGVgbt8",
  "key16": "664sFZVmbEpWbYCqhA5ny9iLH7HNnndfMNLu6Wso3gvYsC71sB9QW3Yc82PzqehqFeTDt2rSS7P8B8f7oCEcJTr7",
  "key17": "2KbdXJR2xwRLML9qcvzosycXvvHinnd9RzNQJ3U1mzBkwdujg3KUHkU9d4moDmZvY5p9Zh9RrLarmms6gYxtd9wf",
  "key18": "3SRePXmNAykDX1WX6U2JdFGFfGBQsErccYv52Q98KHQZHk59U3vn8ZRU89ErEZf9sYxKztjrjH1mCBt9NsmWP9vC",
  "key19": "2xc9zvZH6djtMpV6iBsrHwAnNzmsisuqNCHtLtzMcXGKjnR6aVaYc6aX4q94bdsgMULdWEXfKGVKmn3SWcTh6WQL",
  "key20": "3LCJ8anGtPpPwmsyRsEY2tPbHQs6cvu3hMQst1UwKjschVSK3ahi1TzNv51vBgRrmk4DmqKKCXw3F7pTsVWnZZgW",
  "key21": "2BNtWBz2yyMFVbttNUCSkdrgzw4vaRAExRRqoNi7sPBzUBe5cNssJ6aiDkv5DTGMGEqBzGhTYpBuV7aECkS5YWk3",
  "key22": "2BvHscDkBj4xrQ8YC61Z1U4r3R4LdeW7AqBseFutJiPKob7uggWWo9A3MaAV9jZDHja4y545kkvTnqUDUyAiUVer",
  "key23": "3ngNcmSYRBmXUCWwXEbRqVqATY1shZ3KZJEgj8DrX47DSe33ooSBYPBFgBCm8vE5uvWTi8PbjAt8VSgj5Mk9TzZs",
  "key24": "2Bymcvgv5wrt8niRWuFRvPoaapQWmD4urD6YoNoPrYGHbQcUrLq3Q5gcrazxdLKHCnbfy6jZsQFeAEtERpUDs1VD",
  "key25": "4AGfhP14KJTMM4ke9mUqKUr2YHZNNwVKkaK5BEuSc1FsEm9LHkWbZZ1JfGoKWpvMBVguqanom6fLnGvdeT6et9wX",
  "key26": "4tLY5eoSVNVKUjxCuFXSvufYKjX3cgmNbdbXZAgxYbp21xJomL9Y3MFDh9AZmMg2Gy1Ujmd1ea5ztk5511UUBbN8",
  "key27": "sQspSK1JP8w9SptyPW9t29t9UoWqP2hteZnKg598VBM19buKu3ZuhSbTg9UwETjZ7gkPKqbsc2E6Ffzqc4ev6Pt",
  "key28": "fgXPAXQzMSNugRzzyZ6bHpLdHAVwQHVuqN8P4eoyFY2BxZNFRJxYfgkVDDa8H8GgJT5vWRg5kYfdxYt9dhxiepR",
  "key29": "2AseBAosKuREMEvCo6pG5dJSUJMaV5DbK3rpFa1Yh3S16ezLoUCLJb4pKRnDxgDvbTWa27emoaaut9UsmL6xHoLi",
  "key30": "RVACg1VG9J3E3fcF4FLC6BRz8fYwMKQDhMf5AHWk7bQpAxexYcuVAd843GhzVFPEJKxdZXrDtGNtRuA8DPaujep",
  "key31": "4mtdF8rJkP7cSTFzKL7fX5U6UN3zcMr6SejBLz84oN6B9USrqs6aYZYz7tpV9PPu3DN9WuFN5uL4TBPVKrsX9kGQ",
  "key32": "57Q28YYFiFQ7bo3W3hTWDWR2sNkx5ht5BMugVFURoh4yCFQvCST9poZdFB1oq1ShcC2xJjpJDakJHLX3wheqDPxr",
  "key33": "4zFSqjzBpiYvfLXuqDKeCxA3ML6nB4LiyPuKrXgJJh65KjaP68EHUADLSDcENfewyCc81iisuxFMBcQhDCD2V9wg",
  "key34": "3CucjNuEbij94JatYmoBdAF14mRcsf845W5DJhCQwgkV4QVE1Kbow1rWcEeo8Qyw83jtUQXtUxex1Xocgwkk92Pk",
  "key35": "381ba4keLHJoGwCKcargcLrLnWw3BUDdmyfZmuBs3AQ1BqXGbSnADuGG1YMJwTc13E4WLPaA3zkDfi5VaJtoR7TY",
  "key36": "mhHCbYwLSosphc93hoRAYM5pWtVmeUftT2jwMtd5hgono8JbWP1UCwtCLRxbK9CfqrNw1r5rPxcSntkxt85ooZk",
  "key37": "PHW6FW3ZYAkjwWBTDyiMcMgxHDLkkEpqQrQMWXZ3QJv7z3tWN7rZHUY1j4AbRWtSRmJfxexr7u5H526uUXuwKmp",
  "key38": "1aBeREApqghoUZXxdqqiWPSCDUpx3KqefU3itCjRgxRcjogSFEXuCk6vQSahSgrRvReXEoNQZU694yAMD9fHx3k",
  "key39": "eYRmhG3VBaVtqaBPsFLD32f1aCJdF4a4b2VCJWE9jedRvFzWYQb82kkfEyx9RfqRzQw56bTwbofYjJjwup6WyX1",
  "key40": "2PMUhNNJZdSSQbaQ1DRxHrR66sBJpb45eKrwWGhsyJuAtHNbhid5DwruyeXf5Li92CFEqMoAB6CtFFhaZgcNeyFf",
  "key41": "4GmaLtpvApq6Sb4WniuasdBhJg7o48WGfDwgcfEebyuAJvCsFPyTmSbZ174rdmMWqR9ssMJeBzwj2EBVwb86Ptq6",
  "key42": "Xin6zbRkAR64xuJn5MeWeeDNoQEpm7Q7nFeFbfkKSYFmLkojkgfZhiMF6rDAiGUWwVEjoLA7AZ9pX8btY1cQYzd",
  "key43": "4BfrNUhRJWMP18rojWqRKNnAJYS9orr6ME1EzRE9H8anX1ACZ3a3P1zkzJUTkBBrbnFKXvbaQLwCDUyWdMuKUZQY",
  "key44": "3KR8JQGV1gTLq28vJf4zesnoGpEUVCe13tA5D18GfjTRpWvPqLZ9kQr8AwbiAxgu6mzQfGGgyTgswncmew4SgBhQ",
  "key45": "5WopVZEdxLwkxh6Zvzxf1oZ9PzyMzcyCV2QXhCnayDHBLbMvEESMuAxnXxJs3U9VjFZAU9Y7jWn4qyi9EHraUJBV",
  "key46": "2VNomYrjyWLtkzjxLVt74sV8jMbQVueipuzg6uff14ApTVk22xGQEYzU6kzGcymGC4qN2dbrGfghR58qCmqUmSBM",
  "key47": "4YbvDS2LA5nuGEBd1UirechtbZBkZ3V7KXE6625rfN6WGioovsBJN5vAydtTFM9WaGySBosUonyMmD1dC4MLZg5b"
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
