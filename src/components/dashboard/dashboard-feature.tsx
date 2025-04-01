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
    "2Z15efjas66KnENc7aSTDXqAtJg5Ke6Wf4WYM1aHxVW2WqQK5D4ZubXtL2WPSXE6yGZkToijtb4JrJpbsfABnNmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zB4fFL8vmWpvtrr3sUktiD4dh1mEFp48N4zmhqiLB4wwwzhYkwDkSN9WDHumUsLsqAf8WB4uUw1Hf88Rhvcjij1",
  "key1": "44mQbYU9uSbAmV8qw9iCWr22P5KTZfwcWRpmzpr8uN6y3LrHNWWfX5qBnxpr647w8k66nBFQxMpzH3UtyJQww1VY",
  "key2": "2uALXyqnALSWm4bidH2ugJzmfJRmYjvNMXb8NBvMLvKPiERZa7A3jUH7Gw8Gf6GGKTYJ87wRqzYnaNhe5aU6czH4",
  "key3": "2stn7ukmezqn5tDpKDs6qpEc6A9u7Jjis9BDznpA4cPCKZBRk6DRiMHN2AKKrmKGVHaMpfAPk4d3SyA6s8eR9JJu",
  "key4": "5N2MejzXy7zaW95VuxAyeU2iPZSRHMU2UMrcK83iPVsxrWjkPBAoiA7Qcyeq3K8yHtvn1omHL7EPMqKTjQSjyZB3",
  "key5": "5SUjSdJGtf2gD3wY3N8jzMsQQ1J8XnWSaj6m9E4RCSH7mrEPBu7VA74gjdtdSmy8PgQYXcjX5evBAJ6hQtHjiePE",
  "key6": "9CtDgpkizZvf7VgFagCwyYFx9y4BjL9Ejdci5jkqaRssG7YSbwvwWjTv66Ff3aEaQzvQZw6ydRmAwybWXymtBub",
  "key7": "3bz4z8jkmLxkJabzPupqnn11vYjP8y7Xu4UhWEM7g77iLeqNEzA3ACL5urFrCbKE11MW8zChi12Z27rUgFiibVh7",
  "key8": "5AuVGM59EZBhvV7Kax4QSvNkP59n5mbvHWp9xc2REuBBEfbDMd29R2ny2Z3s35xSqbvJ3dR8e3wJLjGmcmf37suR",
  "key9": "47txvERXcdwa1Zq6VKTEzFBW6ZDbwEekpimef4XKEjgPwToP7U5yLvhFcEGELEf5yyApiW5rfc8S4ozSS2x7rvxw",
  "key10": "265gJ768wHsu2CLw1oZrKUoqGPT6ouUzNE78V5p8e4uSqps7Fa2RTQYRKt8nQS4VXXQSiwrWdiz3TL6ZgRfaVaQY",
  "key11": "44p7csWV8s1qbzqJFS6r5h5JYyjUXjjucR249TKTVe8TyDyZGpRtwnnfPyW6Wh2S23zyMNYxP9JX5iHZQLydzNPe",
  "key12": "4wh58zj7VbqrSzd5zQr2xLwE3AqgcfSX9Npu3Xo6JDoUqEDrvvN3ohVT51RQ5FKPqEN7D5MgnHkyQE8gJW8MrjqB",
  "key13": "2kPRZFNMt1bWpWhnSG6FKEn1Pa46saDpbhcCVqQz6df7fAsHeihqd6S17yK7gvFRi695C91mUFCVBQszEmc6w7os",
  "key14": "4ki4eMiqFAPvsNKbCpBCBGoVQJx5Lurtav1C7nKcY27VxEUWKaAzkjXh3GAZYsSzcD3gTaFrhdKhfJZcrz6c2xvn",
  "key15": "4wcUiNBs3PRtJCSERnHhPX4tYRNsTX3igVqydD5a6taVhrLPDGj7M9D4fDt1Sfqss8TuJKrgTS14znWpT6VzzC5h",
  "key16": "3JwsKT9Sak372MbPFwBryNDjU5z1XwSy9kpP5bzvUVer2HD7MddJ8DtpkDAtnWgHL6zrihxG9VdyYVJ43UCsPPCy",
  "key17": "5aNr3ZRWVm3j1VkMoaKb5xB5Pd69m8gM2gQELAQpUgARHUikAoikneUKxUiTDtGb61GHUgHmB3wGNMEWZn4DgiEo",
  "key18": "5aVH9qZo8hEgZ9yk1sQezZRK1JvL9HfMSUkvjPts3FFx95n2x54SVkaBt2fHTmLvkRwCHsgZYqppLmtMmNpsQodg",
  "key19": "5aZNwqa6dHzWWSqvRDfvvXgFm79dp7h7GdFVVESVrf9S7aPfk6ABEGFWVXSHpfZxo1tcBrKxJVi9VvcnZsZgDN7d",
  "key20": "SH5b5LuFbRZHJiJbtZXeHxMc7rvMe5Qet5tLJq1SkPiMa3WKiD9VoMAWqLfC2hwnDnJtWcskgSSv4Qhr4CUkJE7",
  "key21": "3P1H4VzyijJ1Vja6VGvruwuMD44Ec3Q9Qd2rXNuZd5QFAQNChgrGzmGBmJFru9KRJrEGdtrrR2LMtX4JP3ZnFzUE",
  "key22": "em6YWkQ4Co9tXBWJhMU2MwWmvhMJm57Ce8BPrDzi3wwctB2wJtbmvFQEyjjxBTNtBTtRg28MyLBULaCyLt47VUF",
  "key23": "2VsvXQFigmzr7Rhsq8WJtRxVhAvhhKG8ChpPmmLXcNjeaZSnZh1umE8UQbxp5YD92AUCxpjGFzUoHJhmH2N849aV",
  "key24": "3JmCsAxaqXWztVzXmvupBuiFcF9Vg8gjv3EBvRAv25vDgMt5PmvGMUS96LUwgbhW3hpwEb2a9bkCfCdAUnUBoLcn",
  "key25": "5Ny4uLGpj221C7MBExRXDcjBg1aoeJev5xAVPwPV2zZyiJGqLVES9w9JSvjQYNx4VuypneZ7THJQ3k4puWfoUaei",
  "key26": "3VN598CnpivnbkkgDpwrW5hUb2yAZzRoQ4RaWp4GfXyrbV3ioK6DiXQ75B9xyaD7Rjd3SmPKSxxg1nod7nP522Ck",
  "key27": "EafsGioGBaZLUzrVVK5d9jzWCSYP2yAiwyFyzfWx4J8Z4NQrWz9VFa5AX68oytwYCqYcsp9BU32MSU5FeVCzuLK",
  "key28": "2xeBE1LwWhSzuFPGHeT9D6T8WeBcnyH4rGnBWUsCzKBdQCWS8f5Lyj95nypM869uJdB2yLDevu7wmFhb4gAfWLTq",
  "key29": "v41iqDRE62jbRXpxtVFPZdj8VRiU5ikRNKog5yfG4uHTdgNYWsN4MtpCEhZM5PB7gwWDfyP5nHmmnYvL729SkJZ",
  "key30": "4c3Nxmkh9B3rricoxpVGt9HXtg18JDAhvZbFStFtW3NtCMwJUUmwMkethtb752FG6GgqtCdsK6PVG9kxN2LKMwok",
  "key31": "5QTPRCfFSYQ2jDyMgEASHgc4FhXF1gDDxmq8mHnHmLwCz1o5RUPU4jqtP1uFZpYX96ZR7Z2W7dkxnKXDF7vS9ZTf",
  "key32": "5f1MJsLAiKzBzaAZUPJbeDUkA3uMUU468o9jPfenPAwyAjMZ5tTn45xttNPrm7GTzpA4JgBASygdfJWDo6WMoZBb",
  "key33": "4XzXarKrEF6Sx5hBAh438kDdKp4eu9p97zYHaGWnJ2tWSiyYkYfAWVfBQZwxEopbY8myVfkfkj8YQmDufKgqidqP"
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
