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
    "41tsay36YdkWpmdnto92i4xVtUS9bdra9r9hGUTiV9ff3MuNsykQYwbQJPt3o5QtFw5xEHyK4S22jn6U1jAxjux8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wmhbGB7rBd6u5K1zVwJKZCGKFxKG6q2mMjQQJYeVemKR1WgczjmYkHHDsRGyKtV8Rs1xon8wmkSiRxhqpdQMyXV",
  "key1": "32CQ6Y2v8YVtXfXBYYRxkvtRLmmtK6dsCg74E6GCjR3tAm9bZ8UkPfm1A3Eycseh9Uaryq4QTsHKYZk3DhnnUCEw",
  "key2": "ZdzjxvDixFJajDWGoZysfpdcWzai6i8spmN1DdMubYTRvHX6bfWcntfEsPDeZi2GfArobtPmGZ9DeZLmuD8Mzsv",
  "key3": "5C5EM39V7ngXhhLrXgLNpWKMoJhx1uZsvspKrpy1AiXBEaBYuFouWP63xdjbkWbMKF313AedwsQMQyiuRX22ZuVf",
  "key4": "2CZXTiWbx3QRheGYAKTqNqSNzaQYW3tWtULGYTkj2mRAk22Nuo5LJfJ1u7e5Qp64T6148K49QjuEtkTPNW6YsbnR",
  "key5": "g1rk9UpaMnQFJR3KKZ9w7qqJ4Z9aY18sK9T6Q6q9x1vLiRKZhrZEa6ZnHZMX81F7pUoVkpesAzxrcThGTNoQwD2",
  "key6": "3heiZExi6k5vG4hozYVhotRfBozmLW2EwYVwo48hHncQywQFFmW5Ug25wnx4TC2CBXgnvCrSCuLnzXCgikYPiZc4",
  "key7": "2XiMT78sRH1yzewzyUWQEX3CN1ALHagNbCHxWzx1WLnXKo4RTGg94w8Xx8yyh6bmnsHSDmm6Snj5F239G8fqgxhi",
  "key8": "5kQxdXTCaDxZrEbBzo591KdWTY5tetEBkXK8D39qW5H4L5ehVMdq9Fku4fvuFRrTRJuLxAqTGEisNrhWUmPsW5Bv",
  "key9": "4HnAKHPVdC5cMSbQYwYFZovqhJjFaRMRkk7EwGXPzzrWQJsiX16AtBFrnF5mjHwyxQQNHA3umNcfgaa6qmpRNUwm",
  "key10": "CXa8LyKWFuyKh3LrxRhVCL5KpJoUP72Seg6QGbGLdyJFZHZQW2vtWLGUsgVMjbYd3A9JxSoG8i9wtZz6cJcu59B",
  "key11": "2Aba46NmnsJ3nvGr7vvtTxZkFxteoxcgnSR91Jz74NF9E4qZ5vaHvsG95661jVt8aTu9DvywBunxStvDMqpFTmGh",
  "key12": "56CeHV3xoBaS1cSe1YZXTfGcD8aXid1G8YwVWQjgiZ42JPMmnaFrRnMaMF2XCaqxGiSQK2ZVrQSNLYMATJhE4yEx",
  "key13": "63Eef82xvXTvo5XEYUS6VMr5gV7vxGLNKWWYhYDyeiGiMkxun21CBA5FGv4wBrDGvLDeXjzbaEUwuSNVZFM1YAdg",
  "key14": "5kTvYeXX89zB7RhQnt9jyLo3Z9DYEHUZZyLBH5yZFW8s2oJ27XGv9mxUSYBh5XaPWj3sdqmbaGE8ioEfDtMnUiwc",
  "key15": "3YoRhzhi3uSLJfkNND9fvF2d6W4U4CYVgkr3U957ztHg7LPzPmyY58yJddBNPW82G18HYrJ1D1gURMpTVQeLtJvy",
  "key16": "4UeEi7Q7ZkzoU7pKnuD8DCWMWo3MWvEAruxp6UkUj4kCkg4SmuJS8oyhTfCS7AA2LEfWvmEeZEENmUnQsmzwJrbB",
  "key17": "5K8H4jsyZQ2t8MtUMsrd826JygHtTub7KukkNaMFktWKnUzM6PeSsMZD3qHEvtLLmLWQY3tzUFrgKSaLnQg7yN6U",
  "key18": "25rsQkEUxSgsbdBxXHdLL61cg7bPsoyz11Gmf62dccxrLthsQ2AXZNpypq2pqXBNLKuKPeky1dE9GPQzrgeVvG2s",
  "key19": "2BE2Tr2GgNpF7XrMtTV7rWymRm847ZJXn3HT1wqXLrSc7h8f28CeNmjxsB2ppWaidnfi4BK1oyaSYqCMc9tAcE2o",
  "key20": "3fQDZVU9Sqjb7qi3feUDiH92Su7Utrj4KMn3hUe6Tv23saFNiG85NRNmCcG3uZyEnHWnEFmN18X4yPGcETtzqNpM",
  "key21": "4D3s17WhZ6kpdAoxa9TJ6VUQXHVZ86RTX4LwVmFsKX7fpwqmfwWWh3h9FYPzKL9fQM5HT1Ee5KYGgWq57TyWYG6U",
  "key22": "3cKj22dQfqYMa8mUuHU476Q8eEumvGDwiZ2WG5sWh3o5uDyMR9rADL4GuNkBqtgY3ToNUHLTcXjVBtLahCn2zkyY",
  "key23": "g3zdyYiNc9oNdPs13o3kv4AhWkeFEukcE2jjcAcHNuvsHFSmi93GbHCHjSRTBedQV1aEqbeKPcyzeJedoucLbKU",
  "key24": "3gFSV4DrkDuJpzik6Ppz4pNTmHeY5hTQwVQwL5NXpcu4MRcEcuYoLhLfzSTX411maBuo6y8TqBmw14PSjc1FhYZf",
  "key25": "2Nqhp5TzpBYqqJdzNdBqUvjvycLjJ93Ruwcqh8Wjzs7spTcFeLnnAnRxiVPQrFM88zv7kYht3ypN5ektzmWpYyEK",
  "key26": "5hKJyikbkurNgYPD3rTcUJZrkFBob2ZHbzLHAk8XFz2n8hSikTFf53Qhci1m1PAZ6AXPRugA4xiCmowXR5fromFv",
  "key27": "4y2NVWXoJrPL2Jse1FJutpiTmt3EmD8X4oWMKi2pAzNjwnbZUWJbgJVWwU58LHspjrDvQZ7ZHCXYaVXSVcAKHw4g",
  "key28": "2zzHp1scskgmC4Z1is9nAAz2KMyXMh7fUkMuBDYsVxDi1p2F5HzsLUrvcD5Ay3qws5LibvoTMfvChMrsEcJz9Fsw",
  "key29": "5kQH3jJCBk8MP5N9rYSDK3Lzix6NrJL7C7fmsbR7LcCuR4Yrhj8zMAsZBsKUUJVxZrPB8M3NR7Miq1EXuK2JK5a2",
  "key30": "4GA38vffZc4dfgZdwyMndYzP4DiuGM1A6TpApwKu7S7Azn5eejfUEMEsJASGmhEk682mtC2NXnjups94qiRRrkrx",
  "key31": "3dyCEa9nPKvrjGF232B3tBF3NvDmMg3LQNLtHV8UFYZ1eZAsGG7T9EkKp7hZ9vPYzto4agQFNgQDoAEMgXxNsFck",
  "key32": "rTs9cA9KMYCfekxMmUSMf6Gk1b1m1knwW5Ekb9RgmDPCEnZh6y3MQMEAbdSAm4fzsCadbgFUXetjdCM99iLeU8Z",
  "key33": "4kGMHp4syyTK26M1hpYqvUHag6WJmdnbCPqCK7VeCC6U82nnreKEYbmNQLMc5jt5MzT6rkuyBAeDjPqLkmcSg2U9",
  "key34": "4yNuuoHK25CGHuwHnYqqQ1QHa68si75gEMvpMHMe3rAFqZ53Y8hxvFnzRGMCM5jn917Ytgxx54CWvTru5NuDUs8F",
  "key35": "5TfDYGSVeY8ZkWwxfEX4qgJJuRaVUSD9Dy63pMkG8cZS8voqmebQFwur55SXjYDUQWBheWRVUj7HXqjXPiH9Fwjc",
  "key36": "25crrL8KV7eRAqrXKjJfs1JpNcfHKAXyiWncrk6LM3h4Q9jphA41Z6q2iq2Fk3o4AZYF3XEJrad3qoJZ4ozdAv2z",
  "key37": "2uST77T8y8u8NBRG1P9WEvkjB57gtN2RcBiKnxRamnYgPQiJxAxLJcdjLoP2aa3JTTSPmQRUu5qckCrdBbHyyFss",
  "key38": "4JKb56nZpiVhobwtWEovUmt1ujEumwmTxqKrn6npShUXUst5dLAxUEe9v1yLpSRx6H9jMpvG1NPqCpGeeQd5Ttzp",
  "key39": "3MzSqab5KNRZVS85VA39WXqNEoeNdUWwnozdfrj2hKJ7h6Cu5r3k3sjVkcRfBtwz7jp7WYJsAmrfczFhEUGHJ83c",
  "key40": "5uTWLVfNaXahi9QgymzRbFoBbkNr5iFUnB5ruFXyvruTTsx644UUmtjbFf8dryzbzmoh4vV7yZXwPVyftAq4E3Q8",
  "key41": "4TH9cS5fbZMv7h23wfyXRJGRkaYFwDMfeTByG2qGoKryxP3hAu2KcFbmxqXXhmVsYQwq2psktpxVLVGRSL9NnVvS",
  "key42": "4ynB3tvBCjfEp3WbHZEXbsXPp3vELTqmHH6EdtcB6HFruLrFugi7W7ayPy3FP5xierrZHNteBBn7j1as8eLhV8ti",
  "key43": "4wfgsgEiWdESMynq1nD8JJw1fPYqFXmFKcJCQS6iyDxyZjEQNofPw9FeiWssVDZ46wxMpWfGY1NLcaKCrg2F6SCW",
  "key44": "BPkAG3NZ1xVdtJChdTMB4317w4WwT4tkFeye2mYKDPKsSWfVJeWm5Gm1Xp8YrpKRCVRYELm7mEbhQtdY7t6iDRZ",
  "key45": "3V3L7Fqkck2Ab11oFV9VVVrd3w48F6Mewn4S3tLL9zgXDP31K4MSZddoEdGf2aZqFbZubcybPRSEMdCyJWtqEAzP",
  "key46": "2SxpZeXQr5oxzhXowbAHg7wky8NMorUfueQvCinDUh6XQAozxFj8DTqSJEcUHvhs6Up9TGW4VwjySRyWuySZyfa3"
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
