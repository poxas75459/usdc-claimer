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
    "4iNPxG64NVa4M29exKsxFt9RefSMUDMgfTXw6UuVngLUrhpALx6gzSnpTDEaAm5xkFyiqubXkgPxjWmG2Ai5T2yE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j6VdyTRe9YJL5JwkRyxC26i7AW2aemtvGtA1JHR9o1Gj5qjBaCcXioU35hwtFvDnWL7Jp6Rr2uQXm6cVUdWm5sR",
  "key1": "55DR5GHzcXfAJdXBsgrUj2Q852md2ftZpnZjA3LwuiWLNWh6FFtRjYx39bYD6W813qZttYmXP4AWLpwcr9xx4GeX",
  "key2": "3os1YXxEXVwdGXMvtpgkvJSHi7kgTxKLyyAvZySQPmuToysDskRrSjPj96mUPCYjuFDmcLUoprwL2QtmBgjqZFtz",
  "key3": "P85iRhrYPMVAUUJkJJqijKJHSdpcSGFEr6nmUVGpcRtxG7PPNFPaDc28jhcJG8DTAuSznDoWKC5GLxfK3rdxD78",
  "key4": "3vaETd2YRdi7ypMSn5RwrUsS654wtpZ9bQ2mkLHLi41MkaYB34uvnP237rLu79QuE2K7JJfGmdwrpcrVyeR6UPQV",
  "key5": "39DT5WWQVnpZX3pJMnVH9WGVby16eEQqVX72kvBZ9kfQnog5UyresQq2TDr8bjwCd5heP8M4PzD3x2WmwkMmKTZh",
  "key6": "4Cv9rLmMk65UCwqYaBV2J3pvpfLrWnRPKkwbLtYMSsMWWx1sRk2FNGUXWfSkpWuK42z4RC3bWAYBjBUti9tqEejb",
  "key7": "2a4nbSrkMyr2cMyjUXmHsfW4gRcrbzo4gvTRyq5RntEUCWjPJmay6h1fQ4aaGocQa4n3pDiKi4cgEi612pZy21Cx",
  "key8": "2iuk5GT7xQzJteiRjexXGEcza28Sn227yzVWLgzBwEsik4yi93SyyJjq5qMHQDUP3JEhcvMvQcycjWae7b178k2c",
  "key9": "3WFhuCe1ZaM8K7NmSWZ7rEv6guGDjEZLMEWx8o74xxh8K9QtE3sRiniCavtQeC9ikc7T9XKNCursQsXYEDsC8HfZ",
  "key10": "22ctAuNTfMbeEdQXqTPd7ALi7ZERjcShbRPbd34rD1SqWiXGgMeCTfYsH5eKuWAZc9t8Pa8mayAZYMUdT2y2Kpi2",
  "key11": "5uNS5h8md7TTpdNvEquZxnUzr6nA4g6dZtTj3rvjvPDGEgL9zJjjxTRtpDVyD3gm5WcJerakTaHWFqNFX5JQ3RM9",
  "key12": "5nTqdmdR6LV6wuS9XRz1c1FkhqF2iChJQR8YZEdWRbqKVzrdHsa3yLQsNiyErxybrYqs4RE3u8skYEK1QqEmS4dU",
  "key13": "2vWgvxEWshv5Fbw1ezaB3Z8g9d3156G1jk6g5G8X97hTkWg9bcaxG1DYy1zsNXcsF5oPznMMxjNZ9pGZP5RoD6wq",
  "key14": "4ZuzDjdtZG6rAXggp7ma1Dw3K8QUHby5jLHVdBxTqB4zw8gPwBMmFrdEmmBNFJKzsZoT987ABdaWHKzupnAqrmVq",
  "key15": "4fmbHLkkNAyUMYLsra3VScRyupeeizhcvYufHaAoLRXW4yGnsvK9iz2gKeNUqMEZqYGhhZRtV62S1BBVQQGfWK9Y",
  "key16": "2eJ2mnfZJqhQEVKFp2VWWDPU1b9E2U4HZMCzERyeAUvtagY5ugJTr32eaC9RphNZ54YcHp5kmMSXysXTSHJCXnp2",
  "key17": "2CoGbo7Cm2KrX1rU6gWbR2RQ4XfxEx5UZdomQFLb7KS5d2LPUPtZoumJjb3iPdkc5dXdbsYhMWGAeqBK2UimuRBD",
  "key18": "3RqHp4U6sWF5JXuLR11tKFNtjJjiFfuRAXqz41RkakRgXgZbPPVWpYrvAQBHu56JsSYrmSkqqg4DMPT8f1995vgM",
  "key19": "3aH19BVyf2EBb22Y1Vknf3v5otFgL7JYXNJa4xrbdqpcAYKLCQMj9W6cDBXxRorJgey9nSVSBpWG9aBYwDd4nYA3",
  "key20": "9nGQnBevdw85q2esKzHMyBNiq3dTaukZCRg5cxcBtN5GWiwU76omgS5z1VNcSPyHEN5UixF79AgeiKkFN9C7DP2",
  "key21": "2Dh3cqL434fSKGzirWSfeefLbo6SUi3ny8q3z6AHT6hGMZ1vwzGc7MhU44dJPrTBE2TrMtiSQP8J3HzX4VSu3t7M",
  "key22": "3C6Vh6gX8cyhGyVj5iQm4GJUyhJZwQvdrBYXMJANyNb4tVg4sFbuVT4UhKb9tVvgTwh34LTvUJo3uXz5tNp8G9Ad",
  "key23": "5JSggPq52RttrFzVkc6BikLAKmnneBEb771Ja2NvvnMvamWDeVsFj7KMmrDF7mo2yuHijAxpiXR1TrtGXGy7pkNX",
  "key24": "3h47mQ3mfi8iaPsj7w6w8vZbX5mqJAcZSnSaz9XfrGUvehaSQHiBT16yXk7iNvgkfVmZdUBrKkq4uVkpWR55uzk8",
  "key25": "29fDevyEGairWSFFVUwfA2BaY8VKc3joQiVBJ4YtyC5yooGtjU6C3iSaF7aBf9Dny2QPq8tdTURx1CmrLf9HvJpU",
  "key26": "3hx1jtxhb4EKHV52MSwc1mSuSZU2Q2WzrDBWEmNYuGU9d6b3cHrg5QKS7XCWr4PKnkxgd5ryPEWYYYTduTtQhwv",
  "key27": "2xpRP6i1y1k69v4JRjzppyGFgY9s1agrdhXzgTJ3hvYPj6JMEmifMBMijZ2AfYi5bm7GWjGDPP1jgue2NXvf8Ax8",
  "key28": "4iNFeH18VPA3uU2YwY8TEqPcqWoWY36HWAAi2cK8CrmUNQ6PqZb7mBUwLWkzx1kZTK2YQyn9D2BCSu7nz3P3RtJN",
  "key29": "3Hki8DhanDdctc5xdvcrpmWwGdE28FYc9ANZVrZT3P1dEk9z7Wm7kEp6yyLewepUEyMMNfTYXGaaJmwVF7kcZegU",
  "key30": "mHS371pszPJtkyg4bTF3cB7uDct9GWoGxoXHbouesp2Jp9aw5MJPAWuddcKQ4T1ATffQSFugBFjT62hBLmYGcfb",
  "key31": "EZysSu4sZo5a6jJ3wjt5z941voqA9o7eevy2mCuVbNtJpVv5gSQr4knsYagWRdDUgn5XHmqSTtm4W93pxq3XP7s",
  "key32": "ip7cpEhHATNz4pBTxcDW3ovMAxRojb4fMXhXuNjNPGsYprBgXN388jfXbBQgVd2CQTRNJ2Kvsg3vxbC3pymArsk",
  "key33": "4fLm4E7o8pmbvKZmhrKNVsXvyyydSrgviq4pVvrijCBiZ57u9oP5bJiutWAA99rmXuGKgp9ufvZWuhLDhwxmPiSW",
  "key34": "5i5jpoCSzuRwuGYkkDCQCuv5X1yM4CxKswyqvguj1q9twD9Tmdfn6SmVrsHu9m76g5a9VyHe5VGHM1ryx4zDf5qU",
  "key35": "5Q98csLPe5jXFkwQ1uEjKcuGMVFQUeof7ScERuaRCqfJJdmep63QxwRiwxjicC8XabdzU88VwAP5k7Esabsq5Pcv",
  "key36": "67Fcmu97zv9bxaGHu8nuoNzDhLbMMoG7Amq5UMPd8YoMmdpbgfZvmygiYBP31W937icEsrwUTb5XjyLAa8keqc9t",
  "key37": "2azk6n3jYYhT2Qk34QoyDb5xTUv858EVZgSxiD4fGspwBXhiRN3ky4okGYLiUsmhcWhrBfB5QLT2Z8QsT47jqv9j",
  "key38": "qZuEhtTZ23Fi41U8Sqnpm7ArnBAQn5f47THE44mGWoHhk88JjE2kShpXfaEHmpn6Fun6XJpTSaGWTzrWr3gvjCY",
  "key39": "3z3cLQAc2Nhw2UXsYZL3cAeweK3DVFua62swZ6y2ukXcCFitAw3cp4s2WFvRwCxAwFFsxynC3A2g7NxJk33mq6jW",
  "key40": "58Z7x6V6TxpHv6FbcGVUYahiWj6FeCN9sRDLeYpy65CtVy2V8JZANmhNrkoDU89YxysthHAxiSH2iHufLWfTMLGJ",
  "key41": "qF4XbaBNV42iDdCu95BSKozEJXrYDGynrbNZJB8YGBkZViNVFW5xmcCy9phKH8repRfHRTeiwJqNqqGYoaabkSe",
  "key42": "4QfLSvaDApp3rZLYaAe8xs5Fud9oaWaoECaTYqCXC1vBiaSNAvMqHuXsUa4DH7LF2ACUhxBWj9cZtNaF7zPe515V",
  "key43": "33Pg464syWjuhdVL7kgE9m9SPoXSdPxjZ4T3yoyWrJ3r4RRQtFT9mWdmNfkbZYbfHSfrihToXFohwvYat28HpKZK"
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
