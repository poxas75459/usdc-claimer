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
    "64sQiTWn8rh9jBx6PWFAbT87N4yNmPKzvFJKSrgP43FCtgTQvHucTmNGagq8RvYu3Kd35N7jG7v92BgxhU5Waja5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rGNtfJG9Uz2BpjEb1YsPDvNXF7omEnZL4MiM8X88v2hxXQmVQm4FFwAD1yqD5KkGtHDJSPpvf3ySW5BhCzxvagm",
  "key1": "cJtq4tVNbaej65dPcFLyBm3tUXwpwzY6f5VxGJGdx6vg3yDgJP9ZmJGgknFZ3bpui9kvFPASDT9GFoPcSjNjH2C",
  "key2": "2NkiE6i1GRfS7tKQr8cfcKHiKKMAdDCi9tCyTymBTDvh9oxcwdS1kUmzb5zSa4x18K4yGhVLAj5SZ9YJK5GRZhnh",
  "key3": "5cGn9VjnyyzqzfSAW6QRTLoWY4dLxH5QmpHKyPGyxHMgUn3TjU41xiou5DZ3Zcg7kBU1Mjr5EPn4rg9cAdikCZZE",
  "key4": "2dZeMTEDX75JmexfP34hwQALGje9jp2eSwFivmRqfBy2rLEZgWbLwWP82FoZXnQEUK7CTkUg56Fb1PNoYfUeggjQ",
  "key5": "2HWiw7uPK8xLqq8UrJuS8KW1JsaWSpySxDdVQkGCoLY2mYEm7re17DQVTf8qfuXx5NYgV1Cw3UVxSwosew1cBfGP",
  "key6": "4zUuoj4aDqmxBwnpfHeppHKVeXtiAWWz6jhtKUB9UNKWUAA8LsGdA8JLrzSE4JxaQxkYwRTQUiC4HTCSB9JGZv5u",
  "key7": "3EmpR53KvMbpazVRyegzE3L87o5yamWpYXDfNB7C7FACXpw4WaZqNW1duiU1bC8F7G3igrRuj2pR1zJZJqWmtHJy",
  "key8": "2WLPVkzc3TwV2F511V9QkiVu7mug81XESzzyeFvUGEpsNdBfnvA5gbBF8XJG3ktDrGXN8AtUgkqD3LeFpPFzyyM7",
  "key9": "2fDgo1H1bKt1osXVPC916aZDGXXjAzfunAzCSMzmMenK7b8seRdjPqUfRgN34PhToqeo3qB1gpdS948ZzK3fawtQ",
  "key10": "CTRrYURq8ebQcpREFBjrFhbxDWLxnawDkjEjZpVWf29YqVoKdEEvKtGYvskcCUZJRhbaYQeixrFCPvPGLq9Jzir",
  "key11": "4MnmmFqgSoA6oeKGtVw5g52eLgHUE2AdhY4RvKD332TPHbYKBGKtAzjGr6ezVeNT5SfYC5noKqeUYpuxhjis1gk4",
  "key12": "5W5ruQE56kXxgW1sWzYBhQFMqCkLaeJQESXcgjtRU2JQm8fDA4baTu3ZR7xAgc6GJjtHL6KAFU1bhuUYKzRdCbR6",
  "key13": "5nZQYoTTtff4SbrLe7VM63vw7E2nxoyNEUowtcyxRB2vpuqyZbU6m68dhfXh2UxCxM5PjYDSyuXRgxzk4r3Df7JG",
  "key14": "Cz5bsShLgoDb8pQmDLcWCgTmy7XZVwrYnnrfQiJntPvVXokRWtvAcBa4MrMdGRNtae8MKgFTmdatKpjT7rPknzY",
  "key15": "4dQCSxPg1UxyAomx6tyGZfThVBdrgnE1an7REMzX3gzAT1hTPGxLExkxrb6SkuRYU7K9YBDU4GJvopZMmEvRZZdX",
  "key16": "2xE6o5fFL4H7tYQqirvZCqZw8GMhNnpFfD18NRTE4i712MzUxbYUZZN3zmTCLanvzAZhhruEP8DAaTZs6h5pk37V",
  "key17": "5Co8sESR993TQUPorKmBoWsnmLv2ruNzJv724dAjMjna5co5j8rdwiz1WkMXirzUF5zrs4VPvKEKytFiHiSyLD4r",
  "key18": "4hC8CitSpQSPibQotvCMKmHgMHjTbxhitCs8cfvVRsin2JnvM2tYDcjYJ9Pobf8PkQwh2zAx8kA3WvzfHYG9xxAy",
  "key19": "M76DgjHfmbT8CJas4465udHwnWdh7AwPAMjPMiJoSbhUAtQsgeqhoTippVjeiZFMu8py9c9fKfo6tVgTWk4K3LJ",
  "key20": "2DWYFEiES5XJzq9jPfxEPwwT7i3V5K9HxYvQzxzioQ1u6AzRUSEdSv2fgod5j8T71hHLq2qbHRMKVpWcusvsY7uE",
  "key21": "4BZGyCZhWMgRG3ASVAuqxVd92De4ZPShSCVTWYkdzSPYZa7eMoxeWGMaDzkgsVXZNWeWA8knr7EiSJu5ovU3ocJe",
  "key22": "2jNSvn2WjHheWEcc6vvSFgqts26sSxUybrLNcJoavjQ18YCN6V6xq54VNd6LwGfXfwDD8VAFKcpd2Rif8CqWvHmj",
  "key23": "2NXchbmyjr972mYqbkcegMvsJ7LPsWETmY5WDvBnibnBK3bpzXmnv6qmSXKVb1Mkx1uP5k6PpUQ3JJ2WiP24nZd5",
  "key24": "38qiizt4TjRTAHdaMQWMVXRXKVknbf191bxw7gY9qTEt2y3cZfVu5Vz9M9VM84oEE1xVz2rXAHHLeQdZZHJHcRP5",
  "key25": "N2w9xdnPJ1XBHFJqNifSsjYuJsgd1ZWDzDddyfKScXs3XiLT4X5B9WyNdnnRkBhp4XM98D5xhT6QYkHJYCiwiuc",
  "key26": "5fCXxwPSvWJKYdL1FffuJM9BuysN9hnMNYa3aZHvqHdPi8zxs4kwda44PEsB8LJMKnrwYEsUHEqEU9x7NweyFwPw",
  "key27": "SxhDnm9erFVyuqorAvoPg34pPG9iWMidBfp18o7igFB2K2zCDcsGUeAknoo26AR2tL7dDXKLpnDQ5ML6c9Q46ce",
  "key28": "4ytNcwVYYPXz6SPo6RT9E7pCLHgKPcAwGPXMst9E5UWry5huWcQywa9c7cPY1uco3LkZddwyAdH3bSFtQaucadEP",
  "key29": "3e5BvvqnTotJC5htZA4GJo9U9gCz6ZE18DPCk6xsjj1tF5Fc99pFqAtYDwErgCbEUwihogvgKRHyNFtpWJrSniPg",
  "key30": "2GRnE5vkKkEwQJZ2q3KnVpL6oTdZxZsfdTbRTudNtJgcqBwedpd4Gdy9AYjWnDBUCstcGcdU4U5aWV9vwFWRijCt",
  "key31": "3gyDgh7mPVjmzw57hAkxSJwc9uEiGgWCEd4ZGMeVFgjRDcz3JBrNSpjXuWmfQKRfPyeg4TLTZdVGpQXiGWeZhW2V",
  "key32": "2PEjxSEU79tHJZFPXjZfLywzHu5HVUUaCscAhw6vLrV2s5GZCsddtd6mWpCFRP97Ssxgd8inyaCkmmMB4gBnDJd1",
  "key33": "42u2aUAmF978M5NdXJZiHmv414nJvuvVEvubPiZLTe6h1njq9WFRR4rsSMQtT6faZKDRUgCsLG4XpcDrn77M2dEP",
  "key34": "yMZWW2DncqP2fA38NwR7WpqfpJDge8JTWbMkDkj3K4aSu3Yb5uw5qbBuEV3GyXmV8dXg5W2rvL8nEfRGHYBX5fm",
  "key35": "3MBDsVJXuYqCKT9cVAE5722SYHs1tTLwWkJv54d69f2koUqhXTPVkBj4RJgq5tqQfbCtMn3uxM6ZaRWfmTeQk9Ra",
  "key36": "DEK9s4CcPJmkrueNtmyLHmekte6eakqaVjMQXAL9HTFHFuSSUPqp1kpTutXRdG2JhtR7p5rboYJr94ZEot6stkh",
  "key37": "2i4bewrtMYbqSJYCWfw89FQhrGXffwmc4Le2XykFf48MdxUPostu1QgSheQwX7Y244C932qtnH9ySsyXRf7iF5hj",
  "key38": "5NAFFJSRPJJrUah5zZDLy4y2ETZEmcz4FnZMEu9jC4LNtwrADmq8BLtmxW2h6eZFV2URzN9HgtV6De7sLd7BYrLD",
  "key39": "4JdkhevnC28smhqzN62mjHNkuC4mZBh6pLz9gm2YeYjQtXhY3ryhSi11D1FfraX8q1kpa3mxYUFVCrSEFKqNKUWe",
  "key40": "4VVntx6Ef4v3k1z3PFjiirqqUDovf5mQCssEFkDi3KBtVYNkKA2H7nfDLAb1SKpBfmyp5mMj3odhJQwkwUdy3qQH",
  "key41": "2FzeZDvSoNaMtvjdyLrbYs8anB3dVFLZvrzoRreSPdzXHurDafi4zr2wjeXdUX4GTATxdqsidgUxKtFHVcqRv5eV",
  "key42": "2KvBkQ3mucKf29V7RSUpq6wnYJ6Rojyfhfk18HwaF2KfE51A1s5P2WtTzqURN4kQRPgADd8LB9HBfCBqqKRJJYw4",
  "key43": "5MANV222PTroyY8qeetCVWvBYxwLuorWgjc3dcaExiMoHPq8VveGKp9xvKv1Qjta6Ja4PXL354AMScRkLQv3WWLM",
  "key44": "Uax6QxFvEwecAHKMR5z78fZ5JWipd6SoCVjUPuBHSZRXkYtPo9LFjgscD23VQ3AwTktJekp4dW6VW42vbEpToN7",
  "key45": "5CSUbwJcJWRMq9g19PS4YE2m1FrAq7H2HSSPGr2xLhc8wSrNT2Uz6KLi9ecKpNLWm9vDcMykeV3nrzdvkMcLT1BT"
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
