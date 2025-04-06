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
    "58ZdpheNk8Z6mDSCu21UnzZf754EeHJCyuvMyMwKzgwSFqfCRTTqbNG6RUM3zxgrQF2SV4hq3GRRpd1qYV9JMwS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G6Xxkx7Z9YgB6RzQB2MoBkgcij3xmsYK3X9LhCR1fzP4nrBdJUwhBZnUAN6TrMBMo8yurETrsmBVTL5sbKdUo8C",
  "key1": "5fNiEJBiTRrK3FQjRXYiWpu2KQtb4j1dho7N6W7w4RU8HeJdJaM6JPLt42c8KFVAiN2BkVrWWVXu3rnaGC9BUkbf",
  "key2": "YE2un4ErzBnQN2fdBvkydPQSGbhYqNJYPgzkxfCgaVk1fSJDQ1AMoPq9R3L1ZPKtM25H1j7RkEFb9NaErriBoky",
  "key3": "5rZvFbbghLBx3fWpPSZcyRreyranbkzmAX3mrgFr741bxEcbgKL14Dsips9tYWPXGv8eXjYCfgwjxxgZuu4dM59F",
  "key4": "2f2mGY4JbC4MvPWGiarpi1R8wz4QABGA2qZEbasACdn7ZKLgHoPovJbMkhMs7efaqp4pUnfvN7qA3JxQH5eqYLxC",
  "key5": "5dURgUSyuCUYrj97SYNxEZoZhK9VBMAa2USWqYDMpb99xETg88mMjDxe8HHbkLHTFB2AMwUDKBqGrQzLKxhyYzTX",
  "key6": "3NxvM4GmbB6o46XnwxDYXEmDCv6QCdzQUmnPPowNLp1FXSXkG4E4sMwhme2DDYWoQssZzpm8iYoN7TEswP5f5Vyj",
  "key7": "4yH27ppH3WoN9p9XBPD92kiGCwKRWURij3k5LtHKcTMwygXnvK7yZLhAyDJ84zzfr6V4ufyxPLjqGCfLto7ZXKnV",
  "key8": "wHP8gpPtf9VesobzEavSF4BpoyJMX1G4jzo3rbUsnm9jQckt5UfXdZmYRz6Hp9CrQBRUX3DTdojEkmuoBHcSLSL",
  "key9": "22K6AjvGKHxmrUXcV6trDhZQnPTLco6msXRHZ7MRZVUxmW3Peepr8eLtBigt9HdEkEJEsqJBHsrXu1j3k7nsjsyh",
  "key10": "3QwuuM3j6aT2CeB2mEvGrp7KA1pPuZJBZ48D4rN6pYXvF4fDodzxVMD9apVJkBmDqPrSpwAfNtdn9wyKEnFdWe2a",
  "key11": "65P2pj7DAwt75J5Qap5omGsBTQd2oZii6xJ8SZUzsDSjJAJHWCBMSuKkMtDCV7UCdF67px3nenVX8BwKLUk8Uok",
  "key12": "5meFrKPP1ZnVWmSc3Gz7SxjHzaxrV7eFzdTSVwe9q2shwQ4XFKfWvetKFHCd8ZSEsNra6VCGwNH5vhwyee2fTtYJ",
  "key13": "3vkXvAsDh8jHPykdY4KVDvB6sVjYe4SBkMjYx999RjGEFVSpextNWs9CWU6YSAmtyU6E92aq6y1KgHPva9o7Jbo4",
  "key14": "kGncg7rt9eTgA9s6fPkmcAYk4ZKDhkxMGRWKpDeo7Tbq72bMhgET7GBABpX16QWdj7zk712ZpzVM3Tnx9ecoHQC",
  "key15": "2yJQjvAErhr7SXv9wx39yLbJXkexYDdTUvwjgESe8naHAHtSjrKiiCn8s2uokMenXfksEhRvDdVFDp5WYbjd7owk",
  "key16": "4JqABrApibmAjfmv5bHpQ8BcLcubkjqbQXsxKAL5xG4Qtumihhw1zbdBsFdu6SCLmzYj2MvRmmQs6J7E6C2Q86rX",
  "key17": "5SkggvvjywBtkaB33kTyxbwd8pv32XiYmhhQXjN8cArSwuR4ecfvpWm5HXNn49p9DVKLNfRwogt4ftwYpEu9XJR7",
  "key18": "3QKWZC3StfUMLsDbypx35g6nV9pC9nTZoPaLLknxpiRh3XAhM5C9sAuMRAA9xwmW3SZ7umghxz56guqsqumFCw8w",
  "key19": "F5YKXsUwnR7YPjUVBf9i9BVdn2rBBGQkRbmXGMUpkiAE9EYotqw1oYCaShEUKvQivX3zYPfk72YakSZXiJtHvSS",
  "key20": "5Bns3nPDPzfv1a5T5geDam5b9sGBdzsDLpqtdaoJsHi9AM2zLdHp173UJRXLeBXrGhNXmY9qyKcKY5FGJo6bzPS2",
  "key21": "2hzHqZbWPqYJjBKbkeyc8SrYTkSP3x4kFzkwpipNHCvxG5EEbJK2Cuk3LvZGLY73qZhDMD6KYZTMD1W9i72znUtC",
  "key22": "6fYJFfNSGnJfYDqFQywVz2fqvy5y97Tz68Zz3Wg6pZsLpZW892WBjKK1F6CKKFSMHBUZspejPKHTBmg5jpyEj7e",
  "key23": "j13fKKXyRGUSYiyudF3tuB5bzL39tNnPU59zifmGr53ff6RvRmiVGmaVaHM1DediYQUBujcxM8SeGC1iahMJ3ju",
  "key24": "4WqGrTSEnFWvPPfWipzapPvdThZP4HKi1kzHgE2M8j7eTsfw5jCZPLDUQqE1cw1ZPRpeShTRdp7bJyGMnLnQWgs6",
  "key25": "4abyC7UDgRroXukjFM3LL4nhy2AhWaEyiKWZHE8yrWf7DfDSA1eKcUtxTZJWaAnW49ijUsNfHBoPQYJGWwCwziRx",
  "key26": "5KtXDVyrXALvhY6gH8T3UdFDDuHga45MmSYoF5f5oSwXiSCQf1LC7GN3ZdobkANvqFuD3EhTee9R76TCQeUZWpwo",
  "key27": "2QhoytHij9SZ3vXVCjv3izH5tvdH75s5ZcTCVCnAcx8cimEawn1iLYuYCPnUpnxDPQ8skWwo6vGrisQeigTbf2r5",
  "key28": "2Qyova6KcJHFbkgHxhDZbXtpig1235w1Z9Gx6hobw2wZApBAXEcSWHAizBZ1xEvhuZxKxhZ4CZFTnv3pJm9QFaCZ",
  "key29": "23DKqR7Lt1G1MPTYW5DUd9MpxzKZR1rtTiZmVqcscGiWH9gpGeoXbEKMNoT68SfNqikzVfxWUjfvSMJMe94ozNFZ",
  "key30": "4q9UmRtKPZzMQgyd6u8YApTgZUD4BEbwkZvtghbEtY6tif4USva3JVQvYSdYeXiJLiB73jAwgX17Z6FnkUcSyh9M",
  "key31": "4j2ba95Q2MHqyoGfK65CmDaLd46hb2u7tREBR5tXcPWaQ7NHQKqg8wrwZhYmoRxE7W8RWETaUiURcsuMpYNsNzyA",
  "key32": "3KwHxihAtaJsMs3rfUWxEK36CMjvZCpfKBWUNtesJGxgqDanc9tz8Pt7H4e6iyaFk591hmQ1KqaN15PRcYB9Eo3o",
  "key33": "3ZUcQR4ovCWKZyHMd9RSit7avgjHp9Fmk2ievY3kyouo46ZY13TRMqC3NhTE7v5oiJHaY1bq2pKStVD15h9i3kg2",
  "key34": "He2Bqrxw5o7HHY1cEcNmE1FuW5RbX4CVfXMKdML7kmkQfLwUNfKp8WYpt68hQQ3f3pjxHTUQaJRHu3pAoi3BoDk",
  "key35": "57KuJeveR8vaKoMdSdHGK8GvYtAZeXWbZ5ejAGSv1vb24TxVJ3g4utMaFEebTkcQhriKW7GWkbDjqFBbEoFpZVY9",
  "key36": "3zi59tGYHUBr1GYFpzwos3GpgA8Mnd2WxQ9zqL2yi5EJUwufVEd2r8hV2VHo7x5gDhHaXtxoeyMddVjFUy3PAoGg",
  "key37": "3kqijmG98exMXmJm7eL5WCgNM7gxZKwdSKxW7ustWzAX7tb4qdMbDynNNQxE3yE7frjQsGkPv3rCAjnvHmiJPamP"
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
