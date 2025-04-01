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
    "45M1go2rNLTCNofSnaLPWE5jPcXTvYgXxivhH4TanZL31pKrz2E7sjRu5bPcmuJHvNnMtBg4gRGENbs1n8eDJ13i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "267zmwJtct1yBLm6kz8eooRRnUX7WfgvheBvKtVf5hBM4Y29tgo3v5vaE9cVN7U9fPFUjPDJWMkvzWXpWnuYD5tM",
  "key1": "37zSzbho8ZqwQdCuUTkBTsNZbCtNaz7pZP832tQkZh79kMCPWcbaNpazGbxNALK6Ta7vN7UpeCmBcrDi5yn8QxGf",
  "key2": "4YBskhT7uJxf8VgVcY8nCmqxGFHaRdinywT8CACuKUy5VkhR9juA1RXFqJPf2a6fXvhb48RPhuFEZ3ejKTfH1dWn",
  "key3": "5a3ZCCV5G8KSyNpe5S3b4BPBKh3YvmwrQRFVVGL3eXYVyrCFZ8C4DLbQENafGdX3gKwKJPUQntzjX6jatdRcmW5p",
  "key4": "myDEcLModac9yYZRMwjA78jkpGLekEHmbsSWTZkVKBkrftuwpryMJRXAgkyUsKxKmHVe8UTj1da8dZReykyZ3jm",
  "key5": "3KzYpUjygUBfxJdNuiaoWjGRdvz1Ed1nZnBDXddNad3R98D3iivY9egq862vQZpQqRQGz2Ke8YFgnaxi8pCVo2xS",
  "key6": "3DGoyFFXg21ZEGDJyKXJcU7FcMwGCvN63S2dAUL4yLp9fcWwyk6dAaJsgnKsY17QzdNnBWv4DEiSbMKBMMa5JL3i",
  "key7": "cxGZfnuUhErafJ7ETXVmWFuPg7tGfhvfYzrNg7eSzVQTh6fVSxWqiYcxYDU7htsPdRmptMsWsEezY6A5JGPdiUH",
  "key8": "2jyMQeD9EUoeBUWdAYAnAMiaLjYRnqmCRFkw8k6NnDrC5AXXJN91k8xGYuEQcYJAnzb8Uti7vVoSAkJKxXRrvVJt",
  "key9": "xjVoHsPp2PExSBKzQHWJ84RqxTaRSjmwi2krLotmgxBxQWooM9rmCvR91rMeLwaqg8iy4DzoK1GwgY2Fxbh2aQR",
  "key10": "4YPKPk6rVCfGcYRL9H8EynWe3Kzh8cvwqDujT4JCFfD7KxH1LAbNTU6ceSX1abgzYSoWKdPH9yKQaYYJ6tRo8uYP",
  "key11": "GaPcE7zRUhynmRJ6aGqrYsUFBk6tzNZztqUgUNcJuCDPPVR6tT7zoEfYTSieNqRPnPrAe7xXNhLBY7e4S7uDQJA",
  "key12": "RtTv7xgT6byaPzYvCFuAapUNskskz2ekNN42iwYxhibaPKUmeCCFJxfFa5xr2NAi6amxjvdtJWB2dgfxjbAsvqP",
  "key13": "r9AXVX25AG2nmAxjQpzhLkZy3T5ZkJ5yhCsz5jBsGZcd5b9WkCME2tsccHnzaBmDaAmLroVmwMtxgGbP5AbcBT7",
  "key14": "2JCy2cWTgGwDEqQdd6oYNCfAYoaRuJFsWbNKkkiHPLK4c2bY5CKnBK5FiSaijfYpY8EE8RkH3YmX63VNsqB1563m",
  "key15": "2Fq5DPWUigbkt4AzR3zF4wLR7pCmZtWekwxTC4bHFoVwyyn3ubbkHxxWBBbwpPoNG1js2UAmh1n2MZvTSQ6b7cEf",
  "key16": "58GwFDMkDFJKkZz3KDkbMJUPPLdNvGVCN1NhnMvoTBagddNpUu5jdt2dLS5RKkUrNXhhz7gR42CaBFegaGf9Q7iQ",
  "key17": "4oSw9PUpZePy1obQXF6bcaZXpZQHAnJXmTMwn4xCGvdteNh3LMk9CgV3Qt4Gmfrui35QoRr2VA8B8BQjmsMmWg3v",
  "key18": "4J5UrkiURRHe3gzqktZohRYpUB9p3yrWsMjQu4EQbitAMrzro11PdmoWiRwC1oCvDK7WCkbiHPbbsQZGehtUKzcR",
  "key19": "2PMKXa1aKN33NV4pCex6sXnTr3bfcakT24FTWvzoH3ZkmWcLZHmaHcic9CnRCkQevjFZcYpdkYS93qKcHSnZAsiv",
  "key20": "2i9MuuTkeeqqvSWjxPmQYiFF386yxdeMohvimgb2Rspid88kbscmbuYLTWsgchTFjBVZ81vzeqpzs89PzUdNUtov",
  "key21": "2JnaFH3wTVYDns8j3Jhapj8GKqExYEDg1o1ykA6CjfbgZiWVhoxunkufddApqytTtaVzgRTuSv2gLKcejxJz33f6",
  "key22": "4kkmKAsaAUWhyuH5AcpC7SMqCjRXWGCx4e4y58aGALy1JVgBF44evtfFo4mMPyUroVuGgFCHqjLRnYVhhDM7Ey1N",
  "key23": "67phmCGgZt5mEuJcv91EATrwYSTtjpecyWDQT8FpoatRi2fMq9VgfahZyfmvrgfaQGizTBqDogQSwyhtKScru9zR",
  "key24": "zxeR2MY3GaHyXPwzm1keZjyvtgsbgAdzj5f5wdSZUeZvXf6pKbqFtGLDeUjgBKZUjmRWpQSFgAU4iDD3nfYct6x",
  "key25": "52MAcm1CURdeP1cwELeeSGys7hr6MrKjfjBVejxNPjStUprV2pWQukJh7MPvuDyJ1CtX82hNBFDdYfNdHZopwvmv",
  "key26": "3PyHk4jSfNxAzL7QSF9KFMsUUc8XG5WHQGFtEyXrBmxe2Dk5NNcobgdmKWrqz4gCMJg4Ya9qLqGRpwTad53gEGdm",
  "key27": "yvw3RjNK1CMJjRwjudv7BCoqCD9V9erH5cpJXUpZsG3tPt1ezQmzVAiThQFCW4eCeHjWCk1z8ZdtgALQWm62S3o",
  "key28": "jNmR7zRpoDh5qW7YUsrjMSievnk51P9NJby3iW5nPEEkemBZ5QUhURiq1ciLpSRN5NpSppij4dQJhs5HX1DAnh1",
  "key29": "4YU4ydVEJwFQdE9fdkgQawwJa7n59ZmndL6DnsbbfD1v3qJpf8hNTBnjonNbEvpuxqKLmAr411xrbXJPbUC2DFLc",
  "key30": "35fet9oi1GJkVNRdtd9F97omW31jT8iGRKqLkwqJKbkRGXCyDPGXHQZioEjSQL9Jr13TN5bZeyaSdBQBYGkcekLm",
  "key31": "Ug1xUWjwnkwvPEA4Nb499suZmizsRwk4ixC9bndaBZJD1RiQtiNfCrLkjToTXZxBz3Ggv7kDa7XbDaQAwpnHX9U",
  "key32": "3VFDFj9XdjCQoe18ZKeir8CzNRUCY1ymbFqUeUKftztu4XG8NrHxwNRgZtY7tUR5nMUyXSC2WT7Cm9RUMMYPioWh",
  "key33": "2KRrfaTpQ9qEmdLgqLHaPz78HAy7BaQtXNmTQtWRx5n5LotCLBmLJzYWTLJfBsWKbmWvFvXGLGwAEf1zZotZqMPD",
  "key34": "2KJQ7cq6yUqzRx2x6z5JJjDcGKENhTQQFJNAH5UiG97CRxgPLPPQnHafEYYEtAv4UfgAJmwMpoRdiCn8erJdHDhK",
  "key35": "3JKuFGphAPNo8BQMn8Z2WVTAoTEtizJyGn8cbhRgRwNh2kKXBDp4r6Xhhk8xumLEqj4d4v3GAgeZtHQ4ChwCXXTB",
  "key36": "668HyLhYoMR5fUYFe4fv132Jsd6CYfe9XfvaeFTDVCs8d7aUJqUxvwDQHjtQsN9zLQ6oJkgxsNfww8QuVFzR6k8W",
  "key37": "2YwwyKwPejTmg7MuUA2utEjh4dKi5LSf3ttdPFsNsMfYjScKsAKwPovofgKa5hkxFR4pPE5JtwMVHvjkPPoUCPUR",
  "key38": "3McreakispFTmLZk8yS6ViESW2B6RB84LUbvTRd8CkmNHUYHTjcDC4tMKURB5wkmpmbstz85t7ERQhXtfFSazSNi",
  "key39": "5kJ9oyURoWGx3TCXWCSobXcvBu5jGQQdBsgbkq6CnGQiTSZ31fsYPPamrfTwgsbKf6v8WBP5CRGePf8j3MXnWtAk",
  "key40": "5WW8oRFtkdqEtidkEuyp8XQtAHh94iZrdxZ29LDHui2PhRSmnKDo6cDE5GqPAQP1J78R6URa2nvJFE9aJwzsU8vB",
  "key41": "r9euej4KWeW9DqFNHdHVt6xQgdeynLaek3DdtZ26Faq8WeJpRRWJiTRuehaNWbHv6scxEHd6sfcatuRK9jokHLL",
  "key42": "g4xVQzTryBkGnNZcKD2gPx3njGEnw59NVG5MYpCrS6e8tSsAceVGtu5XTqcq5KC7qbZFQZZPLFeovi881D1gu8M",
  "key43": "3m7CWmAg9uTwHvxrEJ2kuusomsihNsBy2jeASw2ZewgX5qMo7zr1ghXQfhPAYvo67sDoM9NgBSrmDdi1Td2HeMTA",
  "key44": "4LxGahC56SPFFeFBB1VbTc8KVxfHvcdBYTe27pPCjN2r7zwAy1dJDViYxNqpBR3LJkkKsaS7KfKAQLcndGXZRYrs",
  "key45": "5WbTEWwYhQ3XrspUAuMdeiBKrQeMbPiJdVLAMEQVU1vXHmngXengqYDCQyeWEaVRREUzNjVR7y9oswnjhsomkeh8",
  "key46": "24yWookXWpac6SdD6evcPB5Z4UvZsGFSAeuPJVZbzagJBuu6tUKLHphNANu5j2GXt1k4Bh416Q2ZtqRLY4Kz876D",
  "key47": "4iHPTDm8ZVM8cbFzj3iFsch6k5GVur6uggqeqQTLJXovoK6tu1VMZBAC5j8CXvNjPxKpxkrB3FSA5g6M2VBodxH8",
  "key48": "48L2prvccBMSHJitXxs45emuEwJvvuBytHgP7QiNLCq8eg1RdzRFQB9ZbAYmHT279VTn4MsvopYNcipeumxBmVEz"
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
