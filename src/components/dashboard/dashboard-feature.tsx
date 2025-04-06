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
    "58DnxKQ4njzo2nGzhdXpmYzHBrvRWMdrEbxyVzihavFh8xeBgi4TpR4JRd9mHhN83rn79nuKKS4TLsMaoqPj5JRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MyyipCAbbTKyExvY3zn45qtXGNAbQLiT26kPArUbpZvnhizT9TjSPuTVQXBJLvV2XegUeHccw35PMniLH7i5fyq",
  "key1": "5xWYprvrBfy4qLkr4YbkqX4b4PcKZ1SXR4u8z2qAT1DnVYphj2o9DZzSFeG4qwKegc13a29NmNwXg1yrHi7KUWDB",
  "key2": "3Zf2NQamm3wzimyyrtSCA8Mf3HRrnMQq9LZ1qdYv5vJVfNJ7tpfzZLm8x6FG1awxct4Ku4E6tW6ozmwmeNwQdRfs",
  "key3": "2s98so3KivUM95JtQNaE6KZPauv1EMhnQHTKyvXQyrPqnMGG8RRiwK1PVRim2UULRH8kUfHF9GrJETe4Apura2F9",
  "key4": "4j2XEpkoQ9sb1eU89s2PpBZYYoBVE9Li9iqZuZuWjCnHKv8Rg8E1Tcg7kWKLi93WA16WMc2ainSkCd1Tc8kfiq1a",
  "key5": "21fvnvLfnM88EQQMnchY2eTmnL2jrbPVjxTeWm1xsb5pGMeeYMXRjb4xwn4LrLw4dPTsfr3KmHozx5mFf1affDXa",
  "key6": "5cevv6bydeskQdv24pV9aBBAu9kJXqYxkfanFirJuCBAxYpAadgcFc6Cd1iyhxvim7Js2xix9uss1dGGVXsZVdsx",
  "key7": "HBgHKmoJfeMx83GgCerq3fCmw5x1XnUSUqszvAQ2UGxNcjZMcuKV4KSJc9gPkMgqJZJiZ95MmhVttCC7zbDJ81y",
  "key8": "3U53Y5XVoY2B8fqvNaSoN7kX8TKJnwTgJQPxnb7T9bXPmhkPaxbYYFww5rUoGTbB2a7fF9cxtvmkHtDDQjKrxFCp",
  "key9": "664Sn3SGytdKUGBx7WHhenYh18wsd3i111BN1RUWWjphbLMpxEzpA2WYisBtXyzqEQ7xbs19o24TWG1h5bnGkFdF",
  "key10": "45CcA6TPd1ENC2Fzef1RcQW6DYXMLAnDnr6yJwf4vBEJJTqS8fnBVxY7gJ5L4eXMJZ11ArVKatJJAmLxAYFYfLUv",
  "key11": "5jqx2xJFwdLeYzWZBo1y9vSWjC7SWZR5y45uXhYXn2yB3YTd29YEjdrfSFNDKx3yLLNfTNYHLTrxYD7dYmvCVy3i",
  "key12": "3AcyF7c9n5NxgVNka1QqMxo26YLrthunCSwmkMuC2b2vKLB1j9gBmJEcrpHmeXVbn5Hzsvg5UKmMsYiYTYt7ZtPT",
  "key13": "52PsMmkUTT2f71kMAUPPdcXGjr44sp7L6xs6Yc8f95uYyqRFD9vfG22zSMHDVhG5j6od2M9iJbDDhm7Nk3rjc6zu",
  "key14": "5U9XJEru9tXa7EWSJKbXm9zNS7THZgauafUNL7zm4rxxtBKKpg8EsFz4UnFBUSagNnZn3Xqv2FNGqog16dfJEyk7",
  "key15": "4EZJzcafMFWXBqch6hzN2x3FkdDg87YMkNsNwNdcbfBsRtZegaevJqfXFenMxAJTQVAPuZ6GekMZW9gNNKYRWqcx",
  "key16": "4TDBNAqXHnaT48HB5Yxs3nUVkcnTEDy3fwanVYPPEGd8BfajRQ12ryD9np9Ree2tCfEbS35aYYVkbF4VmApHiqFa",
  "key17": "1d4vTMc9UKv5njYqVYqQhS6hiAax6RSM5SXSDAfTYWArHdkeGaQtENrVbQsizfjrdQa8cbb6WiTyu7agN5MMivC",
  "key18": "bud4Pbq91P5UmrxuoDXEsL46wojuiMqnPyXeRjFbXDE7UkVsBT6ncmQZxtj3wYUbsQrJ1tTzr82C2NqKHtVNuor",
  "key19": "4BEAuVMEXfEv2SB58qrqc1ag5Asnx62PUHfRPKQqbZuc2qo2vWGn3UdkuTRwAYKD3FAzKbj9upRf79Vky64j3b7b",
  "key20": "8XueAPoD6gL9kiW9JADRBTvtgcCLGcxCDv7SBc9Kyx5G4JAdyQc3YaCdkCGJ74H4wHBZf69gEYCAQL9p4EBdCd7",
  "key21": "5v3rrKSVsSq9PpmqAVKC4nMZXPeX7sex2V2eBq34u8qSZsQzizz4yvPweWDuWNshnUSydWZ6AXDYcPZb7RyK1adh",
  "key22": "Bi1i4PJUQGqrL3wzTsfCRhjqL8Tb3TaY2aNzEWxPjRnrRitrFsXWKXwgCRJcKr2TMsW328vqLfG3mRfKC4JnrsR",
  "key23": "474ukonWQGJVCnfsdzkfip4525B2eps2mK7Ht2T5JeFMDQL1Jj8G83SUTUgeGYZAMsb6Ltbswh5jWVr7gLDbATCD",
  "key24": "5ErTA2b8A39KXury1GB9uGKNFbsHmSvEsnqmGgbqFKGAA185Dp7MDWsxZD6PbDXpiWrqGu3hV3p3XffTj4wi26yD",
  "key25": "3FFN6G8fPxBg6Bc2nuHBZFmNZpZWxAyqTpvW1Kes4NMFmkb7GFVf7sB6KoDH96BMAF6S9UUnfDCUJ4yKcNxYbveY",
  "key26": "BdFZR5SB6hGq2Lzr5aFWDD9Q76CiK3HVxAijP9iKbjTghuXfMn6c8w3gx1YQ6RjGZzVq56giiFTjpUYYUqQXNbG",
  "key27": "FioPjcxbp9BHmS2HtsqaGr7noLXwURq3NpFiR53EYVeHjiBY6QDZkCmsgKS2yo5j5HZdAwyZBQSKWRMXeYxuFH9",
  "key28": "61NpPKg6Rnyty1A5AXxHgWAR8uNmxnqbFsBHBkdKGmgMrG7kTFbFdSrBZBXn8pb2va49vLMVZBxufBAhNFuvcCkE",
  "key29": "4U17pFEHSvw6WZJyPzjn9iJheKNqAM6ttetckKLqXAdYhLSfnsqRPfeFmjDpPaBdkfB6wY6w8WfX7Q5kCvKQoJGL",
  "key30": "2KVtHb7JHKVeKMKckiNALEndi2oyszkWkFqzrXWQDX2rZ4Hq4HjGDdwoEPyLYYeCWFFVcMW7qa5b9c536PYh6Z4f",
  "key31": "kQ16S3s2NDLASYnbAjguwhK8hQjzTTjbaPYaxATvLavHVXmcocn5WAhUNdwrbi3qBwZnVDEmdDQA6q8mCMnMEzg",
  "key32": "YZfwMzRywmFWgdz8cFGvyx537YWimSswAHgSuVp9d1ej4MvwPXuj3s3ymgDTVf3ibpb5Fmnp7APL9Q8NTrZfe1H",
  "key33": "yxa4Eh841x42PFhQZpt2rcPiMjH9FXPNZb6JndqGpU8xaerqqzDUuRW6HZeawpJSA7TA7GzurVBEUawBwGL7NJQ",
  "key34": "4dE3efVu3bq44MrpJ7vo6bigmjGH3heoVsWrPAbndx373R4aDZUwjg6DtyBwBnNdZdBzFshao4qCvZhT8L8yvkMr",
  "key35": "65Rsbs7EN2dK9jYCiWNLw7NhQ1JstzQqpaPpXzSVH3c2JnZHLRozvoUHg1nbEtuZRo1tTRzxQQjc7dq7LF6vqh2x"
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
