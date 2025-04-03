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
    "P6kAn1ad459pxvFFdFgjB7PJagbFjK24F346Zudze4aVnuZ6CTm8Ew8Kk4QCEgWs8ZaVLQpzwG5VxYjjmeRCV7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c2bV56UFxBuYfZbyqAehzxLGRm1BBbFtYYj5VTpVuYa1oyWjhabYaDdBPyfoFrnCbccB4YCXL8zGBqDAz1hrhbZ",
  "key1": "513FKUBq87taHX3gFzccqenPyR5QeRSuUTq1CADo3dTXDti7qaD25Nr9SENApeFyymj5JeVVUnaUAX8gwvkxMyMr",
  "key2": "BPx8Tc7UcgvCPGNcL7W1M4kaBjC2Wy3YTL1G9M1Dq2DojyqiAho6TqAEP2jji4Vpc6RDtGzALKfrPM2gxbbncMH",
  "key3": "5WxoekdNo2gK8DytctrB3znFCGwEWZwH9ueiqeRTj4RQbm4gfSqPnEXgTqwfVGjFZxBFQRWPWPu8SZho7r789CEA",
  "key4": "4SjJqyriBNtsm1tWYnHCJCgc7LRgKEYVHPdF8NwUQUYLvoo8Mb3kxgYUqhfAVMYHeyDuEobiZWpyKLA14KUFHnsw",
  "key5": "3hfVPNLvhoUXCbSxk6zGbqcpvRKgm9ZYz3oMhnJxDW6ZScNwVpjrikn73Y74m8bGZqAPshAvKy7uWVPvBQrpikyS",
  "key6": "4x8M18hRWC1c4tWztFvk4xRqgAw4EfbZcRvNXEGU8UujT9DE6VQkKEhiE22sv7uRCBWJ7rkYpCKBEviXk7GtVdZC",
  "key7": "3zzxvvxkTKEN5oSoRqdFoAruAjVXC4gq2FhDHmEq2GWNTUh65vMrhLWHVjWt3WVw9U4Ec1kR4aYuQJMzw9bz9Ueq",
  "key8": "Mh2hoXv57AghqAQGZEuwUuEEjMwFecY787hGaeVwSHcPQK8p2qSzURdkUEbvzNjzHsfe4HJXZa3pMvCEf4UY499",
  "key9": "4kHeBMRzmnbs1rxQ6XAwj5qQGG5YvR5YXZuvT4V7rsm3nsZBacW9GwjLBJMQpkQ8bBMexKbo1xujEi9PUPMMgtPs",
  "key10": "3WT47pbUwZqKURGziihntPYxK5VX4KtNucXneuLY5SS11Pd1vG1nWT3APrea7cgCjEd8m97hH8UBh8phmHXBVymT",
  "key11": "3w84xCq9eZyvRTKY7oSo79vUTGjha1CVG5PtBERaPJUgMt6UcknfSJYAr8HvgNSBHAttz4mWSd8o1LtorWo54P92",
  "key12": "4TxcGifgfFPLz6Jfq1UtNtcitim1tBpVyFq26wUMWV8szaRtSsLqTNh1D39GbQamAT1yqSktb7Qnx1Su5rVYdnGu",
  "key13": "4L9A1h1wvQDivr9cHXf84dawoxz8sxAeQaKfNEe3tBLbrxh3ZVUEor7fLtLD5BgWo7McmrW9JYpiVXAsxoYgSyCD",
  "key14": "23Mu9FZC2PNCk9HkVMS59v9tVkpX24w3NJYkuXHB4xSUMovdeqBMfJEisYXcsUdSZJzhSkZoZgf2UHB37Tkij4fT",
  "key15": "ufmRvsAw123EqaMg244xApLbCwVz5hQYbBKEQxP2UejYq6BykJfBvtJkTN1yqNBCcRPGqL2CBdpQZwaRnVf9DN7",
  "key16": "1Jf2zs91XrR6AtMpUunfEwyt8XYD1kxMCS4P4sdEHBmNznXTSxR9ntQNCCWAARLaNMgdZkgVMTQA5khuAKmfafF",
  "key17": "3mLSMzU9PyW62gZaJCcWegqaXZyPrEb6NgakLk88ZUT2ABujr5cSjRAvVPjgLwmsiC7isK9ojcUgvfrFiQiTNAE4",
  "key18": "4jY8XFeapLkN8UY9bSh1SzukB1DtG7GUC2GoEJHscwgV43qDyMs3UX14tHF5uJYRmxVdpxHLEA6hCMQLLUHXdnfr",
  "key19": "3zA3pkK6RJbkgYWuqcfiAdixbf2MuXeGN2aNVxhh4YJncYQmnFREjsQNK4AukCMNW2YWLfkGWD9RdbfYd4sWVWYu",
  "key20": "5UnPNC6Yq6CdQ2PHsf4mDo2PLptHNNBNhTWq1rT5c41UTDyxKfNnsSUgLFwWdmhCKuTEEGAyxtpTWw5GJ5F61kRF",
  "key21": "2Nafa1WSbQpmMg3P5wQEhWeBZQMqm8JSUkrWY4wuUWB5e8C3mEcjE9MuT1jQ8GJtnZPbNhjGXQmjEP8KFEK3xyAG",
  "key22": "48uzgXmgnCHdL3Q5WBj37UAu5fibqAnHWapGaP95GKFymE6hAY6BvoWmsnrMSJWJwf54TgAtCHfdicv3VBniXEMc",
  "key23": "XwEE31xFcwAXnonvfdWgZEcXn5y3gPTs3sBPo8ZkRA4GKCkDfYGCtt8haRRCB8MTbGanNjJCFEDMGUHC6HMwQ4t",
  "key24": "61kSr1qipAz7vyYkyAQLcQ1bgU83N6XvFqwK3LSN2C2gykSzcicQkQp5m72YKnGyMKde5KHUGSZzNW4DCT4WdAtk",
  "key25": "4FYDi8oBLej7zXpBdaNsW4RgsVnatZ7zkSrYYiNpdGJWs6ZDRvJ7KUtqRjc3HcjbFVFF6RHUSMJu1PUkKSWuu9KE",
  "key26": "2WpdfP819CaxjepotnsBHc758C1U4kgZnvGwEXQvMr2Khd86AiZ7AYcG62T1dVsvruqQoW2k18CeVT552zQpFDL",
  "key27": "3egXJF2Tnpo3VL5JsCRqdxVA8EhozQEGNe2hyENDBuKhf2p6zRkLAVYSvBWc74uTrQasqMYJWz1t2dPWvbyxyM8Y",
  "key28": "5C4FgyjNQuJ6QzekAjg3CvY1ox8EJXnoCgRU5dC49jPigpBiYj9F9eA9CmWgoyHbgiHbUVPEdFX4rhvduSUsnGHq",
  "key29": "4nito6mjVg76vjtZtKNJF9zsyVQYdP4NXkFeVnYpToUMeJAo3CLhPJidoPFFJ6TWWKsFmEg3XBB9zk5wDehNon3E",
  "key30": "mNJgPn4nLz2kL4JwfAafDe233tismmDBGv5Y191V1g23WYUQ2c6pJUxypJWM3bqD1U7GfDn7Vt1Mz7SUcxLiDwm",
  "key31": "a286X8KfH8RECebCQSawbbMzbt4hD3GeQtxmi7tAgDgpm3L4LN5x95sksKUD1sfooDT17JdSwB2mD3FYoQcH5JF",
  "key32": "4nQRFkNoTST4kZm9pRGekMVwtuZbigx4VPaQDG3BbyDYYL1JfWpvj1JC2zBf5PHc6PUcM366foDDJfE4WgNX8ssj",
  "key33": "5hKaiMDb7x1jC8Xjgpxk3jKMt3M6qoPnHM6eMHf1euM351jdMrSG7z39C9f7CALxdktBQMDZUnYNXMGijRAoEUt6"
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
