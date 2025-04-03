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
    "4MyajMroDkosevx7AQoAuLWF2St81f3ADswcnmsGaFFdwygvvC1acZRFM1caeucWVi1Fajz4YWbjrhSGKqa6KDkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j6Yp9xYx1wVrghSXJ9N3t8EhkXf9vf5h9NbVRmn3QsZWsmDR27mzRJjuJhqop8KNJJuZwcGkzL96QnRXDfkoJ8C",
  "key1": "EUa3Zc5DKkiCdtsErFX3yhmanCYS16DohoUz4TEymEspBZEZva4WVY7rn8g9sJHYaEDR7hycd5pzYxCijVn3Sac",
  "key2": "3METsbWyyU9qthN11mjfCWUhp6ASyaXREE85Yep2tkLoeuLHMUjUACrumycS8ZDixSP9BQDdapUa8cV5o3k8p8rk",
  "key3": "r5XmF1KrQA4eurfxr9eqYRgXvzZmCjAVppkgLV1Fu14CEycTvdT7UiBKtJnaFpshWCoqiL8v6gDFXj8eobRPoHh",
  "key4": "59Gt3PGKYZtDqENkzQQibgP5JrHxw1jFwLx8oU2EoQq22fA6qWrN9os2QGDbf9dP8gPMaf2MhJ4SxQtpQ8ce8fwz",
  "key5": "2Tp1kvUvxGk4SVSr4Rq4p3gjuNRjPangp4NmiyDVXY5ArG65WwvqaHUUceSiNi1g99JQeakLhVMSEaYyfFzSth5i",
  "key6": "3P5b4Pzwyb6W5JDopDTWLxrtsMcNmYBeYsXAoyGrTUDPJVgAHtUmWLCHX8VFtyJTWmRQEtK7cXQFNXDQVKrHjtfG",
  "key7": "iVqkTFxKM7YY5sTfRw4eTNFFmMAmYi9VRBu5jUQfwZ8goKhtqBNMCJCyQ4XwZjbxG3VR74wKDuZ48k7ZjhZq4ue",
  "key8": "3J4gTm9FGa7QUDTrus3HWkPTNkK9RPnhziNhQg2naLiWJMrYdzWMVp2uHsfBE8SMpCFaZq1mgh4eUBvgHm4Hvs2v",
  "key9": "3jw1fRiMWSixzLG4zUPJNVVbKBi6jsxCgwSMZ1kxqe5DYA6WXCF5dYcvGh13W6Lw1rLqax6c524i1RLrdfEEAGVy",
  "key10": "5EepzErrwYmFWxDfNeKER6tDNboX7agxZSNck3nPvTv4cFXSWgdgWbV6o8iDKBt3AqvHKz1zNbvogZaviWWxeZq8",
  "key11": "3abck1JJuzBeuHk3RUdsqY4MmfDUTUQNpB9ufd2jGizc68rHfhefUmfipAXjBjFDJC8WB6cMkarsKiTFPSMDac9L",
  "key12": "S5DuzsNYD8bHM9gYGrNsZNJA5MGo1HY6qztuf98JhMhSmwrtQtD6KJqyxuwBGkKoYRhAbY86P7uxSAZVTVLTH7n",
  "key13": "4cHKTzBaEqmKgpnsq3hXhhpqewNvsRxzmw2izdQyQC812pYWkp4KwwqZPzpHzgypgAwoKtfrnyU4zwWLUyKgsH1n",
  "key14": "Q7Qo7vc8gNGdEqckRkM619AzXghDPY9djVxciiNeE89aQbGoj7KopecL7GJq7DChYSW8gSv9fLxDeKSqevGkEfG",
  "key15": "41pJnA5H5GcyFT9gWomsKgEPmWLNrrHYu67n97ygd8gvBybzp8SQeLsHee6AKVyuSSNchyjcHvHyriHke2TDD1cT",
  "key16": "2ZRcRTjvgt1adoxCuJ9UhCjCTxK8rgmtAaMQmfYUb68baqNBfmKhvSWQRDyrGjhLBV7W2KF3GD5ZXE2KLjiqFJgo",
  "key17": "5yZgRTNZQozmD5J7rBScnkLbEFuPcYpShS8xWaD9FuVs6CFtCaRrxgamCGSDdajmxExfnUN9sHwEobusGCRqHEsw",
  "key18": "3E1qimaxbZh9F2iQPwLfHrhAj7tX9TVwc1HeVcBPk5uZ9BAjehfhfx6AUmoEX9eSxiG6EWjCzdS56hy7nkv41sMB",
  "key19": "2QC5JsxmrEBgFz4VE2C6nq5gK89pxPUZ8dnRmSz5qep3QdNNDRqNynQd444kbLKw2VUNh8fCcKZAEiCYRU4zPea1",
  "key20": "dEjSN9YwZvaFpFCjfLyfrFCsibupDk3gBdrNL4S4ZYR6ZsuteCi1TMdMirAtvj5PUKVWPY23S98F13gLXACSZsf",
  "key21": "26dYed1Yt9duqPWFAWjCGvyHqbGanGQEmNKN7zZnCPja5w5kQYDe16ZiUqLdajF936hxq1Lw375WmzjVgCHyz7tb",
  "key22": "5A288eMq263vpefoXauwCbfVa1LPxcZfYD8TX7tzUiaFW4Yj8znqmZY6qANcbkbDrQx6Qxivgvw27XcLtssyvspA",
  "key23": "2NnsJWPCHkXjgANG9VYrgQo38YVwuE77vunizyVKyKJS7JmiY7t9hVbPmTa4nbjUNaa5ZWtASGadTZmQhx65256B",
  "key24": "3TPDqM7vTK2THHUrokyJmfqPqgsX8dzuuYQ9Q7NRFSLUJgLBEQjadLU9eEe4EGbrqP1PoaHcMdgK2HBoUX2LjqeW",
  "key25": "32yjAkbS6nzZFfvcfEBegCfXSvM6pcd4bLtbpBNwcorH54fac1MZmdeuRagS3QBKJdW8YseehZohux6u9mZaEU2p",
  "key26": "3tQt2mdodH8Qh8pbAgbjisqucWepkjZT2aTtERh7CzZqQTHwRSb8PEWprJFwKTFsovhM3mQdPHeajsAqfAYaY9ru",
  "key27": "mqGPJb9GaiT2ez5z1pjjDcPdQnpxhognRKqSNMUtpTg7UALY2XGfDP15Swv2E2AEsRWg7iMAGDSzsKdZM7KDaMZ",
  "key28": "5f68sSYjnuHzYViJ97dQWeuoXMT41CWoVVw3p1J7JncyNrSF7PxZUoxLdgmiEezZ7tiSYBLBXu5woGHcST772xAc",
  "key29": "4BU9ir7RQyDFcSAsQWTEvAhA9y2s6ebs3cC5Pd9BVpWYkLsQPevoohaYFcwnMjWDDaUz3yweNj4Gekmjfyjpwm5Z",
  "key30": "4JAAqtudvvQJYW76khFfDLX59yYwoytbJF9R9VAHGKg3yWvTMS1mbc9jF7dVEpBQp5xoEhHAY61TdkvEA5dUT8rA",
  "key31": "5U1zxNQafUGuABeRbbQCJ1QaniQ8xJW52D7jCEgzNVb7Ma1DGyH2EEuZWS4XuGmRtKg1bSwc2JQaK8rZGb7YB5tE",
  "key32": "x8gJTsAQSycvbNQaKYn86XPDVjS1ZEYuL3Hpfj7EA613Rbu97sxVQicQBEzwGrifWT3k4PfFknF3vsKte8UNF3n",
  "key33": "2AcbuEiZmFLAWmpPCdzePRmwspa7VYMipoAiJAhfds2JL8cNXZBLs5mGCdXFa57qzBudBUzQSMKxFUBZqCM9dVVc",
  "key34": "5NikQNPAeaQuw8Yuevch9aXBVaXkv5fCmW1duXQVNx3BvVoTxgUaVeGjNi2qU6pajrbiw8176vxiZ2MKktVzMfeW",
  "key35": "3qaZuvGbDE6pjzFnNbR2xHkr7EFvg1s8E89AMwsHPDEswrMDkhQRH1LjainQ56hDXNw7Pq8oHqRKDxf2wcyv4f1L",
  "key36": "2Nn1roqdnHDojDDfyty2nCuM9wVZfDmDG41vqKQev4HNs8grzc695NbFq7GX886uaJhJKn88tk1if1S6GKq83DhH",
  "key37": "Z9WxtmcVUMEv6L53i8EgGtK1xzBCXNiYjRjq24aNoURG7oTzUHXuM7JsUeXMK3cqgeoFGzUUFwHhs1GuHPhC9x1",
  "key38": "2YNTyQJufVk7Hs8qGq94cfV51kUqfVpXnLCxz6Qsgdrmj3uJasJPPQPJoDcUituMCjL5Wj62ybg821z2LzaHopAr",
  "key39": "a2fYW82wT5wJc3uZPMz8VnPjWH2f1xLNx5yHgzjvxA16zxHb7ykPCFG5yF7tRoJiizEuqX4HEn4LE8uUy6fveGV",
  "key40": "2TgswPx85dr9EdcNJe3JQ7n6dPqAyWT64QHAvjhxjTUhMo44Avkxj7yLWVEsZuixqfkbVfHrCaWBqHnnXKHmVMJo",
  "key41": "565ZYK9UpB9MfvZfhTrjft39hrJKijWE92kA3AUTrnjo8epPyUzqGPpdxPmjFfQYdn9ZRpxzP4xepT2B3HhA8Et4",
  "key42": "3gdGAiFBqNzYejNnkxqUqimVbE3vhtzayx4tY5E83GwzccohHZHGDcfK7rjznMLUjnvJqQ5UHtkv6bpShfbMSJcu",
  "key43": "5uDNWaVMMGfQ32QQfWzWH5roYHVT6MwV4mD7r2NNgeL3eyvCySroxA6eVNA9W3XaSSrc5mrh12SJV4Z4z7saVrJr",
  "key44": "5MC5otsCUJQFgkecXMgNUn5Zhw8Q697bf7azSLW3iSaDBVFKH8Fvbrm8fgDkBAMoydcyzTZ3PbZ9enzGvvtxzpbo",
  "key45": "2TT6yFzKvvn74h3QkA6BTg6hURBTv5ug6U8mhxvVjQPFHPuroesU2yMrQ9HzLpf9cECyrM1YsnqR139CrYGwLPZE",
  "key46": "4rNTWwwwYTZJFcQN27Zx5xqHYSEWSkwVaLxyWxQKrLxME2Xp8JHn8u7xfojGBq8okQfKBWtSo4JFgnbJ7bvCmiFM"
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
