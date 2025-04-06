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
    "5ieosacfdN6LAtKL4ZtxmN41EsTRQu8MFGJUzDiq7JqMFbhokRuGR9msRamcumMxn9MR3XsAWpwcnRoCMKwQBJrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PPAR4pVLPzFKeMDdhrHdAuAZ51LgbKYY3FBmW7dLs73QJ3vvrF4xXfjCpwJRkuuDRmNeTJreaSMgKTVFPNsRMYu",
  "key1": "2kZNhVEBuyRpiHgnuuxuTccNcSnwiyzBGMygb4Ww4K5SyR6EJzb2LHnienZRn9mRqaS1GS8wqwJAAkEkMBXM3gkW",
  "key2": "PW8cYLpXACB5ZoGCLbuavGXtro2zckG66wHBEHPKVemADmrz47nXAz5KfK5rp2vpAW5TAJ4Wd8FWKCJLW6HcPXH",
  "key3": "5pYpE6EGtTgcGSbRfreMsQLRZ2sUD7oqVsU13GWd8xoAmBAFYMWy2vbfAX23wXA4N2c4kmpGNvgRLy6Pn4B9HZB8",
  "key4": "45Ee29oZbmXJEgx9nmEjVCZAZYqp4nt4v6fZqqpSoPNqyWMrSsa6B3NduqpsxBdqsWvQBCmiTnUjBqRtBzCTKHAM",
  "key5": "5LeBcKdmihWv2k8Ukjc8qQcNFhsCksvQrVM7j4PHkqhtFpmfRu4v2dNDVuUcvDixQiQZwtJUsiSPq8hvXsfxpNDa",
  "key6": "4GgXpJXZAQfCdPeLBzVDXCtSHzT86o1fR3Zzueea63iWf2N6fSWvR7p2YBB84evj7pnSK3y1sRMJyDTWkaeVYcg2",
  "key7": "3VNQSKyNTFm3YNMtEJdfjx1TpeEEPrtwmHx2hB7qMwX6bWKQ7tbVfueWiUWkvAAL1eSaeXvLQ8Fgto2HkFrVvF9m",
  "key8": "26tKX11oUmppSuK2LLURZokaF96ZhWBXqQLfmH7jTGHF3PUU7U2Sc21R1xqTrSosGxQm1WX3Qcf4WXfY8cF1icoc",
  "key9": "4nvJVrCfnyQsLcqGhJ4V2kcrmGD8goTB9M5pXo872L5w6Ef3wj7dSSfCoHXgVby4LRMnyst5GeJZPDJmkhCmMipD",
  "key10": "5QY3BintSFCi5FTKvxCaXcc38BFNajT2r5ZAbgACGYExYHXio3f7Zh8k6EszHy8xw6bFNAMAozQY6EWzircf4q24",
  "key11": "5baP9xJ5DFpczALJnnYUt5ZhRhjhmkXd8EDA4KKPtjVFioVo2b7Dk12zb73yY2C5RRpp4k5ZUubKh2FcwhJvRgvk",
  "key12": "2YUZq6KP5LKMywcMcpi6FksKy3PTxjdQWh3EaajH7ZCdMksPcJHzoSYMewSqm9iVQTH82EswRX3PjHcMsLsvBkxB",
  "key13": "31p6b5PWDnq4c9SqCnwg3mBHnDGuzrcmv6Qmopf4KW2E7uBCjqkVh4afaL6T2qjknqtcFLgJs7vLH7pji21xuGG9",
  "key14": "4RrmG8VGXeYMR4KnnaxfgKmwdLxdeCACaS1ayYKbwYFxM97Qbw9jU74Q1Ey61LrTiihJLhBH62uBWzXPe9sawkUu",
  "key15": "4QNRbtY3ZkLXtyneXH2vMp9W2B47noeoBxciFi2Vtr9mktdpaCvMAzjKa1kYrWHwyFPBL56JeKiJnwtC51Zgxxzs",
  "key16": "KvFHq7TS9862wKpSWj1YtEsfmgM7N9C7oBe9nBKRavu8UBTCSZrqUgGjwHkKNewGA3jCj9rK2Dxyr78BQMYeX2k",
  "key17": "3H9QQTUgPcu1Tw5sh4r91RcuSDNY1iRsKizibF9C5NBexpvZbvuHQJgdrMdeyezE8YUYuDYEGNjo6Z7jwSyZBQZf",
  "key18": "5dsX24DgowRYXMbaLnyxwGGGdaTK4CKGwB6jy85PYZ9rHViuJWcXgmwzhFCFETaACKAXF2Fj3Chjuv5CeVQCL1LQ",
  "key19": "D6KfHqD7v7oAFFpq5NsGFn1NTbS1bwnEqTh2sAnSTdqzEYgahxoHhfe5PtwAWiXYDYtB5Qb3WxzaWWehFgWTfm6",
  "key20": "y6z45S5RCzV7uYhMxUne83EShoEuh6mxB7etzUKRNukHi67wReBPNSFsNw7vby3bjsxVqqtwvXnKGtC2Xt7s4KY",
  "key21": "ot6E8ejUoki3eHqYjVJ8c8BQRX1d9zhKCMPeWLHieGmfGQdTyMWzsPKQUL2vJH1dow84ZprXZTHmcT7PdL6M9TK",
  "key22": "4XZ78B7RUaAZAM1kP5niY7xvXg8TTB8cpfU2iwdgeiVfpTKVipzy3xJmFTRgQyacuSVF3xeBF3m9qFYL6StX3aeE",
  "key23": "34VrRd7vwfiam9VZHPPqp2PqooVoC7JSeSbvtMBamgu6if1gtDYPuzyZE7q6VzqBYWPXqk4JuQqNiPrZKtzRUQ3E",
  "key24": "4B2XNvYm1tAvqPfDW35m4xd4Udoe5fNTcksYoizE7h7eqrrE7KhXB8vA3KtW8HMdYohgSJJ2QTwdgCzaTfUtSjWV",
  "key25": "587fhK99D1GdXMTNtwjeM3ya1MbKzsLj3JpnuLLNtwRmgY2a6WmN7MmJAeEJXsc6xZXfvjn91T5GnQuKiKdF2fQy",
  "key26": "4xt2tXmuR8GqLWCH8ZbjNuf22PtYGFKUFXFuXreVBjnq6GYSfAaprGzqjk3hMzKwzjG7tRqEVPVJhGir5PDZ8sMr",
  "key27": "3P4PSAsCdVwYkVVK7ymCtGzhi2GKovs8iMxjXhCzHdzveqTn4NsoDfgutUyY8wjqKrYBZ8SgWj2Ur2tcCjzi3N5B",
  "key28": "4HsjQxRdY2bNyAoSxAkBAPZ2BGvoYidGhPkqvMtQqpyEzGbehZ89Gft9gMUZKQHABiuUF1ARrQ51QXBueEqofyk",
  "key29": "26jELXddWVRoQmtb5d1VSbjYj2H8gLHoaBUU8612syiPjhwWYyYfQqZDEtf41ckVVbpj58RUHdV8o68b5GRNcTa6",
  "key30": "2pkaHFB8hwbS5v3ENNfo23eZ3SRQzAQpryshyAyzqwFxvQC7LBxrXzg5Cja21oNDqLuALTdDL4RKMWyBa94a14KK",
  "key31": "2sTYAZwTXujMqmsbhvokLLTtRcHs4h8sAEbrBCqRSn4fWjJcEKLS6sZEhMEGivQL2FaJQ92fQ3cSQCLstWb7XyQw",
  "key32": "5cTofsDnBeKUA1e9Br6vVxfHBVUj3n6tgK4WAxxPJmiaAspFnXtomgx2fvgXd821n49HgyAf7LtEuV98f7Uy8BWd"
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
