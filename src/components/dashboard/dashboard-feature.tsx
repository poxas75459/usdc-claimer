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
    "4XWCeMJMufei2NBhuE1dqBCs21ZeqgGc4xr46M7UJbUZUizzRurC6FzFgG6yLWXwr6mki9S3m1BTFrtJ7xvaxedC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S5oxrtSn6SKuFQ2S6qFAuxL2Ne9KLzaEMLw8UGKiQD1L65izy5F1iu8mg7qHXyAeuy9Q3ekHZKR4hf79vwi3D2i",
  "key1": "5nQFgvcspcTqaLw1xE246WJQZ5RUuG5kcYgwkeMNxRK9dmKz3r5oWidE5cZARsBtFrL3bYjRwJJtXbtd3YbyWbwB",
  "key2": "2vHyugMdM6rFwHrgPbwe6qw5GtwhcfSP8A87dLwXNud1biCcoraKWGnbmQqdC2aMRhiLHExLKXg6eZqym2qzd7P2",
  "key3": "5zeTW5xFk8Hh4BuYDPKsXa2CmT4cPhtE2An4tGwd9YyrkouCz6Bu8fJu4YJU8Frv7RiwsySvd4phdaDdTMrvfk56",
  "key4": "4GBxLeNDKacuVx5NqSr3Pc9tPLmBErGgbYavaZ74pq4JdRAHAiLWuujH5CUtCTrSDGMqR8DhddmDCPnQLuZuQWzB",
  "key5": "2kmysRE8PqTSXJkzwdxNzQPZqFdiFoahr5q6TPoUzwo3tLrJedmae7GHpyPE7CUxwz2TG6icipe79CBbyJQXStFw",
  "key6": "5WSUmsvWiCLf4mRM9UsauBrFExP9kj8ZJ1Y785E9YnXZ9ucpiioKat4CAZUMwCfNGRQEN9eNcpoZEMmHkEVfvu9s",
  "key7": "57FXyoQtCA5qujwkXq8Uqw5KmngGzmXbxN1dmz5xKPe9QA7cqZYieDpAhnLv3nePSgpz54KR7qANpmuDoA39eQ63",
  "key8": "3BrNd1Tv9hVXkatjPhe3f7VSVHZ7KHKjce3yJNBEeS3SkpsoRHF491yemR6XZLcXjs89oFmHNAynpHonTYRWyTem",
  "key9": "2ZKnkqj6AtahUNtc9qhwmK4R7qScF3zB1rBH1wE5mqMZhWpJv6zAXutTqdwuSG9sNWzkLUya5fRL73hkvbxgtrsc",
  "key10": "3WGpZ4fYyG5ppPcLBFzR1fMP8ZpyjshgcMmwEnQX3NRQFVAWobVYUJZJwMBx1RiwquuNoFoDuXAf29rHEyLuAYYP",
  "key11": "4NTfG6aq1BmWF4p4NupyJQrHGRidqb7iBzzhNiDN3DuUGriU9m8o42z7QRJdLwRhvVhRirdqTFP2e7ibwnujmv56",
  "key12": "3gWw9CWQdc6Kdya5YJ9NLj9EEkoQaNjyAKBjWkreSNAweeJ8TZG9bJLT3odLjxp6EXWefKw7PXsSBhSnpPy5rWjV",
  "key13": "2P73xeiTUJMzgrrupx35B2R11k85nTwti8wR5Ew6XtoJk7yxMAHmYAQNCX56aBr4RHBYmjpkCdrnLCwxgNxmC2ZJ",
  "key14": "281UN5JFsy5utx3nUUsL28y3YfUpsTXxyekYXcovjsYwGgtSgWiYTxDEgFgF7rPfmQ4BzSxtStF7pLLnCMXVBoff",
  "key15": "3BUdHp8ffjrhV8gU8EnnpnsBH3K1NHkqpSu8er4GnXkwsmiePKdR2uS87qN3Jo1YUCjEjjpox3xYNcUFVcMrm5p3",
  "key16": "SZH7XWw7gMRY95AUDJrNoZDHLkvd9wrBxZbe8ij2afzhzQCUAy65VU1JSxenyv2RBj5xMMSamedv3GL81XNWiMq",
  "key17": "u8swMvkpUzbL51vhqzs2J3pByQEUS8fsAdvAiGnvjzCKaoh8M3ws8LiG7d8xYthvJpk8ndDW3tkSAyxyyEaY9wa",
  "key18": "32cpSmTbPS3WSyaV8N9vPaeAUemvAj3PqDw3S8YRs57hqr6YhGomycdnzVsUFEf7GrgWkDiWMeWr16EkTAXgVaJs",
  "key19": "tcQjA3JRSQSyVEWmsqn2swGFoAfNunHEeuvLkPHvq1J8k5ZNnX2trkHUTiTTKF9xKbNVG6c4Q8BNUd2wc9PARY2",
  "key20": "5JPDbGjawQUmfMR1QBbyEdGjCnm7yaAG3pDcobrSk3mwyDMfY5dS2F57B7yoSJRKZ8tFsVEn8TMDjTnfC9sfUAYa",
  "key21": "4T4C1QcKahxJeHQk7CnXERBYvYhi32EAvYiQW6KoYgWG2x6FkQ2jcWXvV9Azsv4axrfEzHfNxQcr3kXggJWxBHgx",
  "key22": "2UWU4kdEUdTc7LsgiyN8c2iwX57ytgDE4a7sjRb3vDNo5BatnGavyNfytQRi43ofjju9zixAt2Behim5yS3U5f6o",
  "key23": "7yKFvagBjBQgEeoh2L5AdTjLavEa4QhZMxvpwrrnBfkVfhFZmDPEwNjXHVoxWKcuHfhkMGBAY9ntuSWSwFYAD37",
  "key24": "zGZzoGDpT7WuDaXwyogEjNaWgzay8j9FDLKJRV5rWmjuLgunJ7cSFaVPM1WufETji2ArQ5n21b71weuwmxMgYsh",
  "key25": "5FhxnYyRjkHbXtH8Bqvc2Jhw1qvJsXRMnKiocMjCfP5nNLAnfC5RN9r26sxqos2tRPbadVsxRuruY7V43HzCCNvP",
  "key26": "3sUdEyw7btvwTzRPcJjy2nJZj8x2iyqhGaFpopEMRJhE63Xtuy34WLxuKwzVniaTTZz3RQLeJhCVrSLTNEk73sEd",
  "key27": "4v7jy9YCDyUGRpdyton9gb9AJBdBZ5bbz2eyuDbt7rmXyutLeaaDtRfXdwerECoRxEbzT4PMdyRUqEHTgDCs3kW9",
  "key28": "BrZjwUbL77KcWBqy2aR6SiZ4Gx6S9LQY2zdfJvgqcN6cGH3E2AveR3KavKLuMy4d96rPZnE9DEYmShMCNQy1Ny8",
  "key29": "2cDCUKcLkTC6JaC1nhbXwioppSMCdN3cZmicahJNGobo494hBnTfBbqcnrUxDDn74SfbWm8Ai5UzdtXqmn2dPPDk",
  "key30": "4VaaEFES1V6RJZujFWYAHX91K6SsV9RDZCWAa5TGUsE7aLHwiaqrcFiNtpSfh3soi4Bmgqamiq8LPQdQZYjjoL1F",
  "key31": "hLmTyMAMiM2kMaf2by4F1BFBes4KfCjRH1enFRFrrNseFR2DVP3EdmTHo7VDHnXX9WvRXtzVeQVkjUdUhdEXwqm",
  "key32": "5bqpHRpHojYQVLzpCsXvhTWT5U3x5avYhaFstEUzHu8moRLcr4FKUABm8tMzM2YZpz1Z6RP3Vmjv5VPtbQiYPvJV",
  "key33": "23yTtEGKsqySV99KmfmocHidcD6VHn1TRyFPLp9eqpUWw3GhxnYLDiCmenjR7x74QqrQcYEY7dNx8W1KobQCi2cL",
  "key34": "51cXxNFjCefBJhbpD68HqbfGm52FVX7s1w6914yBmDrJZNv29aVxLnrkkkovZn3XtScFEzGL5eCtxA8QkNWyYEwc",
  "key35": "5SwsHzBXZa2LosVjHJHU3MJsrLWz7nQtKncBndnzkeBMycMRSbbMJvaobxSSWkat9xiBaqv1bGKv9zxGUWnW4KzQ",
  "key36": "4QkkRbNCfxCsDh4EeisKRnXskiP4FtG3pHafExkxT58Sb3uBxY8peb7DFpAoRBYbf4QQuXAn9AAcaJxhojdKoddY",
  "key37": "2JRgNRCkFbkwkdUHy1bvou8Q3YHzRhX8Fq6MYkD1Jx5yMrZ1Hv8cjqJ4AtTZp2KdoSSzusyUBRjjsZhQbdxnc3Jb",
  "key38": "2opeLq4XAJdhshcJVhS3hpvvc2b24FufhiyxTEjFXMiiw7yWkZd6efyfgVuCZBfSAVfenUyTN6vQaPbza5WGnFSC",
  "key39": "2FE1KPE3bdMoocFaYqx8wTvU3ZCz5YN9rksBzHXcGgztuLg14GtSAPkgnVr43KeQEaaGLeVE1kVrwC8ViCS4KegC",
  "key40": "4f9UjBETd9nftp2MzqJco3UJ4tbK6JSTeBLAjprNkgV5oLaZCKf8ef9sQosedegEPDfU2gKmy87pqhiskhh3HrmK",
  "key41": "5HPJ74MjJSMhi54NPuvcMTpe1oahPAo9KP8ZVMEwBXMZp5SWZ5eLxRDU4PXErukrraJWWqdEDdi7NgmN2VtT83hv",
  "key42": "4F5uJkCubKw5o3PYQFg4NwrfzKFoWoLRwNX6ND4zRsDTAkHkxS86nC5xWfDeU1LuxKaKbT2Cn7wj4YiFyroTHcBz",
  "key43": "gMxdcqVLh6h1yUAPZFpQah1bQ5Eh4M129nfih1f9xAVjwS5mxbHRtcouAwRCskWBHEnaqCTAjuqqwK9ub5ueqiU",
  "key44": "2MPP5WSmKLbRhC4AymqexkSZxC6ez6bjua1ZwRjp9MQoLKaF7BBQDRzxmpScDtyzvwTV84cFgtWauK4THaCV3r83",
  "key45": "5F4aKmUxFs7MFMQicQAKNdfY6WjuvLRfihgThW3ZuEVmT5aXSSU8sTTbuKjWHi4qnYEJno4gEEbrTvSHpmfYcKRD",
  "key46": "42cxt4MsE5CDnwwVtCKCCYq9M3wmk9vGYh6d244odBacwRe5M6ctA7gxS9SeuvjsrS5Apm17xps3tEAt4guX6wRD"
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
