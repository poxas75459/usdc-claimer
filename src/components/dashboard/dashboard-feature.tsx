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
    "4m5vGw94Y3VCUJ4oSmv8UAfLeFaZQB1KiNHKP3xtRpuPre14GDMca9BtqbRkyEmYzWWrZCiZMVFsWFEVheSFDGVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3knE6TPzdEZR6nUURLcoYB7eHWkpVE8KFzYzuAYU3Fqh6gANUU9MRYuizrQL5faBuU3W3H2cRxgedL3nkvGsfW9G",
  "key1": "23n1B3cRuLQoB1YXksjSsiBi4mX2AWMCzPs97EppJUMnsr8TnSWKuSZSvtuULnEAGoHG9wHHvJKyeajiAav9EVn5",
  "key2": "3Bs4xWTbSPVrektNpvnHPybVVKE5BsE9KjvzZW6mD93pPY1iMebTzX5MDUFy6jH1HFLycygK1TjadZUAh8RH68Co",
  "key3": "5Pw7NU9Y3oZDo9uGHtB6HyUmCvYC8YpeHDDxZ7ZtVt6SUsdKEn3Up2NNqaoVNoHSRyjzTsxRS5eZ8JfHHYaoPCak",
  "key4": "3sEYofkRQsFdx8Jzu1vqaxTb4KG8RcXEhVGL7Zpy1HrHWVawwZ9egRHtEYjVUR6nsJtBGgWvVvnEUZMLZdJyabzw",
  "key5": "4fcxEsHNA4XTVpmQACTkS55meBU4HVghhQRNcSdvDdysNoW14bfn6ap84kUuCkyd9TWmJxTpD92qLe3zNpTZZD16",
  "key6": "59ZHK5hY9aMumHA4V6nZaJn6Wxc4RjiZmnRRpPDDKw9t3w2bGbjQAerK4UuxozpnvVMN2DJ1Be45zcE2rBtA2U3u",
  "key7": "qvyN66sgQUBdpzc2xCJPd1R2jfGZfQx5apLvEzqyKLuutwSdWMUdrbhiy1SrnjudxSVXeXU7DfP33f3NxiS2gAN",
  "key8": "2LKiRdi9qigoTPdDvJKvvYvdc81FPQ9aqRYSWWG4p2sAxRPrVrUEJYHsE2DFXK65dTr7AqMyNtsEhX3mEVFH3YgS",
  "key9": "2EYGNhroLJfSiwF8c4YR6ZaoVfy8tc5RAMoZixS36jvDFJcZXRySeoYZnvocstLMAYtHqUunvc5MerEwKQq8J4mZ",
  "key10": "2DhDqHPHEBYXE5TSFRaWcdNPztrog6UAnvxzsYbSo5tvKz5j3cbJ5r7m6kcy6JwpRLV9oTWmptQfgUpNETxNUbyY",
  "key11": "46xBigcP4EzPPjodXtNaFCb8AoHYwV6sb7rxQAP2b2rb73QEPcqFkXfFFS5bv7DTjZ6EeiL6KRzP8RRP5uvc8mZo",
  "key12": "51Hhg6wZDi2X4kwudVqktzN9tEs1RjBuixCx4Uq358EvYXXYyz8sj7YM1QgHE1V9aJgMQGJCnrFiHsSPkJtbRkds",
  "key13": "4mRaqMxFhXr5RT1bXWNi5reyqXqTm7zNURK4CrXBT9eVecogfMWYa776eVzG3b4cr2o6t7hZYAaBiFNXx5VCqQCE",
  "key14": "64qabw6eBZKowVmmCFivGLEPqceCzxVkVrfBMk6pqGRHSgN2WY4iwy3Qb3b13agpDvUSdXEj95g1uRn3WoRbZk8m",
  "key15": "3gfPSnF3k9uBnLzWBYj6nmvzRBPGazJ1B4NEFw2WD96hNkDsN6AzoAnervpC72wFHqDKBbY5V9xMJhL9LRq8JoeQ",
  "key16": "5NSXq6MQopgEVjZ69GYqsFr56A3YPF544rpGVuiMypiRPzWj7xgSxxgJaCxddPzRRiGf7o3d9nebKoDWVPpuCLwh",
  "key17": "5MbYHVRxf5RL2mhGyZhT21vj3axbhH84DfPYipTvEetv7gLWsvQqban5p1i9pWyq6LjrnkZMaxHydu1syu9DVCgV",
  "key18": "D1ebfrjzF2aMhdHtRNcs1sAttquDx9D1jYA2DE3qsYaY4ZtZ8pLsDcYSFqzdB5GqHRVWvKT4G8pUY691fSQnyEp",
  "key19": "5ba6w94aAMgB2qwSefnzSfePfoUV3MP15mShX6Td9PjAiWPtZbeuhLaDxFZvzt8NLYbYKKNUDQBgUFVitXqmUoz1",
  "key20": "acpquGZBKGbzyN2f891fXUoMJCUibJdo9QVUK4ZcuntHeYSWkzXGX85MtWAvgRMMFF4H6N33RKFbqLKXFXfJABt",
  "key21": "X1qomvM8p9FhqFZ2w5evzMcyAVEz45AC3yTFmBBoidSpw1EGsybiYLrbUeqjR7AX5PXuUoSdvcA7rm95RrDSi9B",
  "key22": "5myZopJfUUFqnvTgTgihkoztCQsk4KSuRZKe1kPi4HC3UvoziFg43fGzqKwwqFjBkpFpCe1qVekhCi3QZuFTLSVL",
  "key23": "S9h6Y7GqJ2Rffdiet1vgauGpPcBHqve5JKPECWwhXmCWvTAEMmYWn1xRu1xx7wVpB1eGvbgyh7cQCdF4BacVecG",
  "key24": "5MyLg3piWPK1TFuC3A5jToRSUcqjCEc3JCR7vTtCA8oKhLj3ZR4yoY6T67zp9z3UziKnpTaV58uYRzTsBRg2DwsP",
  "key25": "5tKjHBo6w3hDYXNuUvcbS3aUbSC4wmi6PCTKK4tgDJqHaXnBUm6vR2DzEem8nkCPFa9ZUaAicJmX9s1uXCBKFtdZ",
  "key26": "3t7ptYTX2ejFt5P6FPSUTvUYB9zmCfYvVchGRLNPs7eh6wGyJsbp4BRsdkaz3gyZuo3ag5jnNA3JL9zpNU8w4oaP",
  "key27": "41s835qddYnnGAZEfKNeKEUe3FqqPLCdQJnCwR8sHCniw54nFRguMhrxKNvuoDXZnkiRGNNjtXg3BVHDzbCWMC2K",
  "key28": "2EpdfvkgkQYwu79F5sHSsA9UndQF1bjvC1nz8j9TRjCRiZa3F23wLdEuM5VUudWAwxxdnUtKsDcRFtckEgusj3DL",
  "key29": "2zp6JQi37KEbJzyegNwJnUMskMvrWzQnEewTt164dPZDcaYFRMxCUnmxnMopiWQiRUAQqBER4EUj9TCeaMpmKXQN",
  "key30": "ZoXLeEjHERgrTeNpJimXZ4W68Ujq4zYR3tb94c95rMniiC7fUU9PiAGUduV637VYsp4z48KFUJcd5YCwZMKS1ax",
  "key31": "S62TS1iF9AKQWavQJQ36m4vA7gf3nvvg5aYdRg1qjUV8BwDBUjon1RNiT2mLh7hGxwefYKAthig7jsNLM4YzsWs",
  "key32": "qQrBVDjQnMsUWujtGP4JRidPPavXJGetBcwFYdb2VB1RtHCJByyBcXJKAPhZEqyfyRzrbs3W9dpcJd29GVJkiUd",
  "key33": "3hmTNwhxJG4BRs8HdD1u3TZma8dTFfrcQHVBSCFGU9zHQKH3h6KHJRgj6Jgaa2yPyLrqhqoZrEG3BQsioE3siJre",
  "key34": "2HvcK8ArsrXB1qzYnMCP997vQyAEqBQLAC6si2vBqmg58AFYd4aCziMottmrREhHoczoooEiLiuGggfabj6xUv71",
  "key35": "4vLFzLzqAzrFB9G1juV2fvRRv4w8xjtdtqWynPFj2Kx6QSauv6DR72E7NpRHb3mQ6njpBjEQuztyvUPECHLp3UPK",
  "key36": "35mSvkDVQobCFz5tbYqM31C2WC5Ly8H1cs96frriueZ1ACdDboctujLj7g3SAchVJPErNKCVk7aboJdBcGMTxLg9",
  "key37": "5495cFMczpCytqHKZh2d9hwLMW2jR147eHd1BNWv2shoadNLWS8VRhdfuMXReCdyqcftUt9SMUSkpoLiKP1dEKGB"
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
