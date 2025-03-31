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
    "63Df365kfSL3ivWY1vXgsHCYVK5nBhgRR1Ubjg9LcRWaDcYVGVdaazSd5pcJZVuq92kz3yxFQYHccZ9Ym2JaZPJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q25jtoKLNsdhoTxoUgBne5AZDcbxgh2pZL29aS8dLmJAFnfZKQy7dptmSCKLcAh4ujnZ6XwrRUvjL6pYW1ZnvVG",
  "key1": "5PVRkR8VigZHzrBvmBPjW7CWg2zdF3eP73p1AyNHXmVgMEmsDErfjrcHK5kaPKX37BtokHaYTFepso6ffd9vzZ68",
  "key2": "4zwpsLbz3KTuyfGW7tneYX49YDtKgKWqLt29NAV4ietwajrLMtr7Yu1fQXZnM8npob2XiTSJfQENKyEpawLZeECD",
  "key3": "3HNpA8gQXZxcnHZBxVYvPGgVR4jecqmmHiXB9nuNhz4NHMYSKRRaG27YazbBGoFt7vnLWwcfgTeEbsnyVLZTaicv",
  "key4": "zZZXkgK8YD9UpRRwyS2kXJxw7omCoqJCGJPw633NLTkzRhAdmWNY8GPWAVng4bh2mXXtgnzqHqjtcZykM8fnVcM",
  "key5": "5VvMyBJj27CmXxWGXmd65A8NyY5rVpJRiWao4PwwHk6K8n5hyZPMeDKHETYk5JzD9LcCEn6bxbXCmXnR33BvNVry",
  "key6": "5V58krBTbFFgS9RkPt3aRk8nRcNWPyWrgML3zpXi5Azkm6pFSqJJfWHQaAvtxFdits52nzf9YNkdqDcgFrPkXELL",
  "key7": "4k8EVf9duocRsn4U6tEUNBo12ZCcq6tLK5aCm27ui4gHPoKRxUZhQSPKVXJJaDkdBx4Qag1ydCEQkyrGpthRKtzJ",
  "key8": "5st7HLikLUAUCMLuvph1AYtRAhhJnPnGcbqcWhBGVvNE9dn31fu5CtsnRk2yiSydDjKmrRmSkC9PE4MtJPGK6X5H",
  "key9": "4ikxsLkKG28b4rYN7ki4vwPXKNFQ7hWA29HW9NBkJQXNB429mrRwEW4h9URZi58AxE3ebTYhZPqsro6FgjCDMNFB",
  "key10": "2JZ4Ln1yheLdZKeqowk1BXj6KTg1juubwvEpY9gYdroJnWNU6m4ZdDCo1n76qNUVXdaqh1UzmgfFKR4x9tRiH5MM",
  "key11": "5kkTRFjzGpcjmMHGXag4siFyqW8ZELBz6tjM4WaJxroDjzzsGGUDpVa32FL8sonrWXdowdbLqRrmRDtzjzkarYAA",
  "key12": "5u3WBSawfFmMV1ymBELH82sj2PDKF6Uo3J5pHPBwfNiatjDThkvVbXn7C55ZDvWTaUzi19aCfPtMDYCuj4xXea3g",
  "key13": "5EzwgpfKh95dAHJRa7N7GnNzN3d1CBba2TYF2r358FCYZG59jqs2Cyd6ufyXgxJDfQsDeFvL5agK48Wv2ZQPLKaf",
  "key14": "2x9ZcYS6ZxAxs3yb1TUyaNxa8dSQvYKnJ6qf3cqgUpoEA3Jyg8Yn3XERLDKhLrxgwSH6nsUJ9FCraCfCJWAa4y6F",
  "key15": "59dQKao35Mhh98c3dp7rLL9aRZoezkpnVSmuXcQU8BqTtCqnoQaSCosuttiW5kjZ7Ti4qXeEEdMTbWtxWZiiJTev",
  "key16": "2azNWBXTYERDXQFyfNvGnDHG17ffpJojZpaGnt6rQgk8WxMyfJv8ZTF4nhekEcEh4QJFVy8NprRdDkP4wWJyChp",
  "key17": "3iDgWY3gxdZCzsM8mDJBsYWzvwg2JCXPDjdeRMLjMrTDN6To1aV2Xj8yQrLEMMbxQvr4BxwC8HjyndKJXE9qJJLe",
  "key18": "4EaCNRhsyC9Jw9BwYMxg7xCTuFQBWfsiiZFxaffVH3TXE3TEZu53DRuLczrpU1dw8NigUhZGn1VpQFu8aRWby1v6",
  "key19": "62mDhbF7X8fPvfzFWCBKcbu7qf8ozoDBkKHvcjhKQEYqHMGf9Zvg4dZBoQE2g48GwggWC8rqHLPoNeKgMiRd7t3W",
  "key20": "4uYKHXwQ7BNvacZaCNCzyK5fYJxhrbRxXBnsDK8M7Y5f6N997qNdPWfJKvgMEpvakYPgsxD13vY4Emr5XuG7qrtg",
  "key21": "5tX3NVYtyJeZkU4x9WWCYRRncYCYnrCCknKAjJafd9QfUGExxNo5GkFgB8fVngRdA9AqweqPQ1aXfLTH26e291HJ",
  "key22": "nKJ6mg4dgefZKpritAkYMZp19kijXdLwYiXEzNN85mrEBVQJKMMhMYv5ut2Rhk2T79YTCx8FT1WMgBSsMGcNKFt",
  "key23": "3Y1Xs8PwHAJEKbs5LR8wgsjnaamoysuSZzy8LCaB6Hmt5Nkmp7FBWS2ARtZX5bDARxwZwFSfR6gK5xXLwZjvC3Sd",
  "key24": "2B4pvcpfAjNS48nUeES77MVYKBLweVPZHi9pzaW9MufLSdFS4NV3XnPvhAL66qFzjzvtfop4JwD1bfNRv9L6oHap",
  "key25": "5o5Verkq9TfHNjLaztyDx8oMuyeHyzrkUH5Zf5VcS7RuxWAiaZMqGHAbLucu3KKgRpYDaVFQND25W25PY7Lqntzz",
  "key26": "4iNpiGkMvMAEVGTYPnqu6nWgQvEzqeoSMSd1eCUw6MxLKKRBN9x6EzqG9MMhE3oKPqk6huLGe5eFFACEbVXsLMyn",
  "key27": "4YQS5wKCRdqEmyBfMaP4dxtbXYAuTfBinDUL7viDCy4y2SJW3VUmwUkh6rp6BYQvEKVkUzSRAFSWfRv8N3Dk5Sc2",
  "key28": "3py1NFLu6QQzEz9D3JVV8s3HziX1nBHq2f2HtP9rqHc2sQrUneh3rhrWUwozZJKFYiA8xf8rHQd5t7V3UGADFhfo",
  "key29": "5A4cm1MDfgD1XL69h3dpvTRi4a6p6Y4QpqtDRwWqk4q5Go8N1sEY85atpz7GEit2vP4YZBJWQt6H145DAz237eTv",
  "key30": "FKAo89txAFo4M6gqGuFRhPSJNn5to3f6ULTAhbwxNcPn4sdgpp6Qd5yz1iF3Z56EburDhNRdtcsipfqwfbsLyGf",
  "key31": "8sqwFwbGgt7GFAxD9pwoawMgwyjnWLUAQqWW75WN8j1YmGruE3E6hXRicbkW8GfxtwKFZRivok53VKFtQKDmMdB",
  "key32": "4DYVWWrjnCnkNaVw3CYRSWfouTGxqadx2JpZqq9HyWEw88wDu3qrP3q43cC96p2PAdGM9rkpgQ4kHJGAiHRoxsW5",
  "key33": "5k1cVE1RLfr9zb6wwQJd5NiXdhcs7sZVkmGU4CtDv8a2exkmyK9h9XTd8iJd49Z48pT7FA5gjyKMochp5u2oEWd1",
  "key34": "3dk5eAcdKifUtVf5HYb7JMLLSsnSXJin6MawdHzC52P7q7yrQwEWiQ2mogNLMPGMV2YSXdyuYRqq7ATdoSRNxnnp",
  "key35": "3qrWuEPAimKyM6yV1jhfURrtr3hRYQPma6P9v1q9uJs7CprqGUiYggVDcMmpYFr59PQUJ2YbpmZS8koie9C119ju",
  "key36": "ErFobrRN6TWeizj1TreCbnfERTo2SVG2MdpPmZy9LVNJxHmkA44yhUL5gLVUh3ehmofSbCvJ9mWyqvfMhqipWWe",
  "key37": "5UevxK4E39QPENRDH765Vgr3QkmbzJTJkwA6JfPJ4wtWTK4wbmq26SZqajLxWwVsFcnZFbREWDTxGyxhkicagTdc",
  "key38": "62jTcThYG2vCeWfEccNcabHvZsfHYTavDdCfczVPESYqviZnMfTQYxh98TKCJ1SK69Fay2EEaprFNZRh68rkJc4q",
  "key39": "2mYzrqJqy8mDFJem8sGW9MPf4fExGzccZxCtUL24TDxR4tCG8ppkSG6NXmEbwDHeKJmZLEPaUoYEKQrmSbG4JVZy",
  "key40": "3nCxMAPjdUVSbdmrhWg1RAm8TgfAxWwjiBr64BJHiErr97z79Rnvp2JkqxDADGwy2J1jGvMafkANudMBMMRD7xtH",
  "key41": "4Nj6SX9TqrpKHpes7YaeCmeUkQV75DT8Y4LqE6somF9D98oWiMzzV339jBs8NSM4wykxC1h4J73QFEvyDyd6fg5T"
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
