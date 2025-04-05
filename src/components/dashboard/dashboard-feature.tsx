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
    "B4kj7ZFKMxAULfBLxPMHkdcarjQLH3E2D6ykwDeNV72qmNYQyVSUBRJLQG7B8TBq6QogzZh9Hzo2MZ6gBmWbthP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UEU5yGPBmQAmFuZpFUShF74ELPHkhr2HU66Qo3Mqa6PNDD6FxugUrgfxNLAPiZh5WWgNfWj8v6KzHDW23BzPhn7",
  "key1": "3M5kKXg8LBJoAi3oGdkudXwnQtRtPNpe8zRsc7d1Hg4tbSQvAjKjvCHMXMyCmVc6uUkttiFB9GM1Ys2pe4pDqfh6",
  "key2": "Sv1is5fMHxwsWH3tGHT777kAwnC2SVw7AtASRe46cxCJU2fVLvMkJDPpJt3TNHZpAeptujteE64kvCeotySW9xa",
  "key3": "3fFNNPGpSNhbANGPSr2k3DxrkWxU8TyAQkvvjm1k4WnoM3sA1mzCQgvKPDz5nYW4toQNLGjrr17saL6MujxJTCwS",
  "key4": "BfszYQZGVjEkqZo6FcBZk59iEreF5EtKLw2xDz6U3mgS6pT1WDGDyXiyVCjXQBauYnGp5EJ7JiJHBTYEcT1SEJZ",
  "key5": "4M9SZQkTyu2uGSHyyDXUAUEQkkB4ZE3H92rKEVDdHvGNsFaJYR2tR5Qg9geZY36MtDWVchaSRoSLZjyJyYV2MFh7",
  "key6": "4TG2DnTudqZoeXkfSHKF87X5aARxLnSuhYnhvwZ3WDpbvhqs2wmwhUbwSUUjwcaDjYDrLTZVp83hPEnJC1AKML2p",
  "key7": "3aypGFvFBJFUo7QxuPJ9TJ1ivBWqZbnaDL62iBniaFADaQB7DY27pNJMoLmAAYRz3gXk2LRnNWXioBKj2g2aK3Fq",
  "key8": "XtfGRofDN48MGEktQ7z3erefBYiUaqqdf2Sx3YHnr5T3gQvtvS3jBCPVDf3Yoj1X1qC92rP35xxYSUZCKgtiJPC",
  "key9": "3J8DaTfygFsj2jxUWiUzpAE57eYYSrfTPT155YF77KnGXGypzqQnAzLWP6f16dK6pfUCVSeQMPHSaiiYpbpJzQKg",
  "key10": "p7yfAD31N9DRQnAWCfUP1JNHHdHJYTLixZw6b5wXjEAdEMRSkCWyn6tFBNPRFmTfeMr7YuKCeWu4de7nQVT1u5v",
  "key11": "2bpxnoPv9y5fw8BRjuhJurjxEQQqBGoHp8fsH653BVJqoUogAFuTjdRw5NCf8o9v6iwEng2zXWhzJfNMmtvCytoE",
  "key12": "2yeCpMiFxFswhNaJ4y6VuHcKMxcKfNs91mg5RUgmxVR6YpGrGytP5upJqYBPiTfYCfo9aoT46qHPKz33dVpLHq2B",
  "key13": "rJ2p5r7AMo323ZCf9oYfHPeSkffhZPfmcHS3g77cjurAKQQxBCG4EtBnr4161UgXEswvFyw9aXTJDNMRgFmb39q",
  "key14": "4ZKHaR1Eap7Tk1qWjgyJ33XdMZ3zpf5Z2nzzmEAbaQhGZEZyimkdrEFEBKvw2E2W1Q18K8UdkN6KvQgKyzPNGPx9",
  "key15": "3NJSJcDjR6PtQfRYbmcewQLPPqcd13Ez1Yss4TCfgevKioJRqQ5gvpmdiB2xAskqtGLXt4KwvxW5uSsgAwp8QZCW",
  "key16": "kzkWShHyDA5GJSunvQ1FnR2hazTn1NZEEZwmUURoN7b2YkxgwQUFW5B2EctwyiY3bpKnSwcKueyQP4RCjUSVvLn",
  "key17": "3pV13RD6f2jQa96T8ZYzT9LYQB4mSSq469o2neJAbskhK3XJoMHooSeFCgQdNK9rGNKV9UDjYf3zmQ8rx7ykEHra",
  "key18": "5T1V2EfnvCRbuabFscTKqX5R4SCBYrsgF4RHpWKNRHJRf6jbNpkEqyqSKfdBK8eq9E3wMCiZv9HHiuzWK5LqnVnx",
  "key19": "5SQpa1vhpxZfufdKvDfTxGstchU78sHF2xS7R9veZZi5YNP2FWw51ShYjtpyxP1pqgeWntVYRaR7Fv7DtvnSWBHA",
  "key20": "45zfVTjZ267YFfBV8BNff4QNq4QxzfNzLfR42qkdpJnLzQGLNm3QWoPz8C9jdKsJSqT4uNRihwuShxVLSSLgZxPY",
  "key21": "522dBXrxwTE5PHpJQH9C8LkKPnfzFYMjaLP5A4aYhPmCbNeE4bHDq8EzwQj4mg3rf8DE9EYuJWVUsHSy9sQmcVVh",
  "key22": "4xvkKydYYUFzJUFN9ADuXxBanHH8VpHxMSqTyBm7dF9HuS3oDuGnYjHCCJcyYikb6oFgfZTgxcAPxj4jbFLb41Ai",
  "key23": "5qHhMtCZqiro6ficKiz2rk2rKccT1toYGu4U6GaqJEP9MTVPW14Y3tY9YELxmV8MqJBg23zCVfcUZhyFMgK399JC",
  "key24": "4FUiRZQz1tNK8SHFwZEVvwLD5a2sw5qUAHP7p4EAhnvcW1MHddMHyiC5xVsrUQ6snydQtk8oJYtsn2JGqhfsLTW3",
  "key25": "639ZyM3HPV4jtYGWz9Wg3e7xqMC1Vc1K7X2ZpdTjj7hrgkUn5er7hxQtLaV7Mb88yh3nrwT2LgyuC98FtWJL9nL5",
  "key26": "3jq52gU78zuQftgpVmEFdQPzS5V9PX5NVmR5wm91Jy3EnZCWNPmfSMDg2mSPTiGWPzdDwCZCKaAesQDFXBYyvxoj",
  "key27": "2DmzLuWNi3Cach7a9gXzsZW1tdFJKcm6hZk7KX9uTuF3Qnc36hG9bxsZWJdL13tERKe7Js4NQwFqZJiTUYRUFo3E",
  "key28": "G8iHeHoGoVE1PtMDLCe3Wy7N16H55HU8sJMedknawSgFjkvAAsg2KPEBawvvJHo4zidMPop7DGPQLYPGJ28PLGA",
  "key29": "3KZdsxhSznU27k9nibxumde7B1UBZiTskzhskMhVWmH9BrkTmAJyec6K383dnAcdRyFQSKykYGXxaLu9gv1vVNjL",
  "key30": "56HNX2CPimK2LUk22QHtm83JumYEjP2JfTc7v5SrVkPoxCiysxMi8MJcjZSHRvHA34o5e8G5DTxwjhZj1LRnxLKr",
  "key31": "63aWHDofG3BdyHuMSuYStVUaV5chAv3vQPcugh3d3hnFXvZiG8AgmnykTxJrK5WJEJ3RFFUEHbQsB3UuK7eE3up6",
  "key32": "2qXQvznbcg9LZbZVGcGbSebqkc61MvRQzRPcvVUM8TjBZm6PyWFxGaRdJGVLSBxNcWKcoouiyHscYqJzTPF4qg3w",
  "key33": "2i85qFkgDnMXqj1DzHTCcBobP94VNvjM7d9JtfKV6CAKaVSyabm4HQK6cGq24ptuf3zDJsrJUxYfYSe63ZLchcSy",
  "key34": "2sjHP3ZZsFuz9Bh3murF9fZdt8d1WEbXwMfkFLuRCqgb3SoMGh3ZzVuax5UxNhMDavmspNZi9p68n1UPPQMXKjGg",
  "key35": "3GZDW6ScTarBwsLMNr3Lauk7q7GL2JmviDGsbCRLSyAVaXnRavWvAZGJyywbzyEnjPPvi8ZUMTAUjzfn8uqraHLp",
  "key36": "62RE4UeXHvqG2iVSGRwSpxKz7DKM3ebmWMVCkqZSA9p1BbvoJAdL2orgNzuq5qKLuvWwGzvPLbW3MCNmprHyr3oA",
  "key37": "2CEG11NVQUpm3xfyFQ2qWDwmGfuqnrLTyNRNeCTaVTK4yTXJjEyaNX1L5yokFBZgGKDp8TCX6MmW92gdu4ogJyun",
  "key38": "639ZUsSEV2W9aCnS5FhMb5mMikdVwZbdCbzDcb6jGdHKvaUCjv41shh9jsxvUSTYuHrovwDJpMjhSe6iHNNsRyE3",
  "key39": "5mTr1XF3ddSrSBBPkw9kyVXxVQRdT8kZ9ytmcygQz3K2RNRfNC6qUf7ZrhJrpDPxPX98pHDKeC94X484SU498REE",
  "key40": "35EMQt7XFMnF2g62STd9bYS5nAZQosc8KngGMfiPhtixmugEDgfDUPLCjKcEWS5K6PGktwVhXxVMFj1n723yBHja",
  "key41": "4Kq8w44Pdmp9KwrvQTtBQnkdqoYMbnsieHHhSzqKVc5taEZcysXQM6cxjton4kVN5Axc29VQXz67E6wxS1jCKVtA",
  "key42": "5Xwh2FW6FkjJxYeVi6nFDE1iYmKRNBsv7Jiuyq9nxGBUYTVjNxajP2AfdEcfQYPqoiZdm21tyjgqaohPQDryDP9Z",
  "key43": "39NUZz4kXSPPpebjkzYyy2jGYEE8Q8HgUJk84rRtzW23LXQdHBj6avuKbfiMf3ToQLiiHKjf54xeshEzTb65GRhY",
  "key44": "3fLYdCtzDiz9k6UNFHr4NmoPPLXidrjCiXhNbNfrqjGRkxcrv1DSbY4XDJYGN9tJ4KhhY1CEk5KmgBWU9ErSUgQS",
  "key45": "WS5rD7eGPToX9Vg9b5fDA4vqk8rifPkpCGgaj3o8vimHFvGHv5LGpHSjreNSmFqfWyzAorpSMz96rSjARoufKRs",
  "key46": "atFzQFyeGmFQ322xQVdhbQhxgES4wLFYpdMiTMjgZvYkAdURwWxFijrMjjLcv8864BafaqFzEj3mWQyZDjmAqiC",
  "key47": "EXbHG24ejJ5x8cHT9xgqySENuq7dR8uXcbUQGLFPK13Ya2aKZa6srekSvpTBsvdAdXcv5xFZrz23rcKEbrfMddv",
  "key48": "64zdmqJG5Hh2oE1Vc1eyVosqNjnE6o77VW9MVX9cK2bYBoLi1g6HrTWmDeqMZFpPeLXNd4TaXmbJRLGcsdGjE9VN"
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
