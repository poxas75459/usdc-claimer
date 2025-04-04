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
    "2JXGnCLDjMNzHbLqLc5MHZTTHxJ48wxV7r3AojYH2WD5PRTKnA8bDAietUBsDB4QmuVdDqChiJhFG4LyAbLLaUUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24HmrQG8kaEoqFRrBYSYkdNsDwRGCFf7xrWPjhc8ESax8H8q8cwDpcWTzgCxjomcgLcu7mvc226PexSqwsHF7Rm4",
  "key1": "24yPYEMswfFgHPJqEjuzNjP6itV5PNXysJD2toDFiC2KotSfSiBBo5jfBKG9znZjeqQSJjgGH83BUuZq3UgtneUW",
  "key2": "5G6EGBVrcXgxo53ozbbdFGqXdSqmm2H2VSgkXvAEgEoZd3rFpcs8L5zcGHjMKaBXr2PxNT558vSXg2XV4mtk4T5D",
  "key3": "4wYSGkbBwftsJovxvZpxLi7SSxdLnMMzCfrNBfiVTaZUBEQvLjYbnWbPNHoVjHbp1Ztu5ZHg3kDtAWmtgMUox7pV",
  "key4": "8qDChwMSehsJqu5c76pzKgquVw67NXBooSELbNn7kDJTCs9byM69K3N7pbuPYv2N7jUAG7GG4KqYjr9qUq69ADQ",
  "key5": "5EFxzBXZjfGNCQD9gd94PxVTNRvMPXC8eogpzWH6ceK3hYdo4RbiPdBxRTq56xdWARUnotcp3jn3EBTdhzP53xqW",
  "key6": "5e3cUhFYVVXBhjQAnzxVQCG5UCn9bM79Jh8sWriVeWG2M23mugybhNBQPaAzxGgZBZJgkq99VgwECYUMUcUC7A9q",
  "key7": "5PaFqVfKCs93DxNit48A2goZKu4ASStw3sLrcgKxzTMwaNqUp7rdF34xxFSkpjgkJFAfiE9zm1RqD37MdZpdE7iF",
  "key8": "5w8FXfEmtNCfND4d1Pc9o7vEyJf44kK3kwJyQwqqn8YNqZAvooF6hdiVY8yJp8CYer6dEsFPikmrFArQmaeEMK4U",
  "key9": "eMJFp9SFQJMc8veA1J7qXxRF9PdnA8s5ZjMnmPH4uJig4D8MKJwxVvh5qrNQp5gUxtHzHsUPAtwCVC12jQHyj4t",
  "key10": "2dRvhBSeoiwXi9U3SmnR3neC9E2aHBajUXQ1wFiUCfNsvwAH5fcraHtbgGb4PdCm7h19VYiGT6f6mw7tXFLMEvNu",
  "key11": "3xJsT2mw1RQ3nfqtY5NnXeYLSszaZSGHES5Agfa4dKJWWW2DXNKPXvuWsRrSkngHhDwvX1eS5hVShiqrYxGBdfiN",
  "key12": "4NAJ1wG8x1ARuVMvL7xV95TR3McFrp47D4hH7oBZbMxfri89xkhtWGZH4C9nssWvyoGS46ar1SK8YgWtMZfiUCy6",
  "key13": "44PRuJ6daq1PPzPei1Cr1KFKZu213YrSX9poFzSpTPCNCm1cxkf3QUZWVay9yQWZoZNzPGM1PXu7ZfXjJJoB13Px",
  "key14": "5zWzSrNTJgW1KNxwPZ3VVycnpBtGZzmz1a5iXUJFj7nVG2dN29aeGMoi7uG8b126sWZb4otvx75DPz78UvB9tecw",
  "key15": "9pE8LCHgWe93vHdrUMXUnp6gXZDnbrPTQGSt3XneCjNTC3ZHRGxDbhxMgz3kCsKBf3hwzssyLXykhVQzA5TRnXj",
  "key16": "288P9ynzRjCAceVcZtSibD9YdddPZqtp5u5RBc8eigi7c8pajgATSU9bu5Q4EKK5Hub6QhTjbfgXJ31hEA9L9vsU",
  "key17": "jWJXkVks6nyJzvEqGhFEbMAiEV2kG5yD7FjTf8E8TiuHeKTATSNJdpnhTQZzCgW5Y5c7Gy2hibpbNbbF4cNKQ9q",
  "key18": "2LjA1U5UTuhAgWsaeMTk4KdwbKnUcMeYAJiRMxvezSpg18Nx6mcaFfZXfi1YJdW2j3bZrkqv9xkrBHKqfy65pJSY",
  "key19": "QFE2Q94FWdx5pB7JQPe16bPEQ1BCY8UHc775U2x5vgBotUMoJ8kVP9MDLjQY65T6uERTp7XwHNuAY9imQZ45QZk",
  "key20": "62qQwimh6LJguNbWDniAbWs28MyADC43b6utBjJatnD22dXWhKifsyh3UhvaUFXrTVE7qMKRjHbi92sqSiTP9EuX",
  "key21": "4NAGLH6YyoJJAWVqYyXn5rNzeVkikqZ793fnD3ppF9z4g6grJo8cL9JNUQMMokNnRZ7XdjbZRXSc6jSmmcth3BkQ",
  "key22": "TEtMgGp1YwYJBA4XNrhVbYmCko8pDuQzNQ7NwshdTPG2BdqdtYtDyiU9fsNaaw76NuRKGb6w5FTyqcUPRoSzJGA",
  "key23": "3kSUjd1fC2eUEfYFoAH78YFRB5Zu347DrkuYp2oan8ZwLeZzj28zQS26hfpvr2TGWjuN7FsuoLaKkXxhJiDhzRNV",
  "key24": "2CnNiVQzSWMAzfCUE9X9T4iGSNrQG8AMrS6XSJqhHQudqxnvqnaDXpHhuCzeJe8UtrXdtrcdS3XXLv771N9AFmXB",
  "key25": "2C2S72CiAwuBSXywJXcSVQf5wJiymGgAyAmMSERweDsrJF1CfrUXKt2fcXYK6VvrNDofXLyD7ZQ296RweLbHHSKa",
  "key26": "3WZhywRobnsBETWKKiUdMbW3r6u6KMY26k4o9gBAxMwnzz5PzErpTSCmbddqnwMKn3XWnR9yRyhUYxmZHHjWSsGH",
  "key27": "35CRD3KNaWnpXws8edPaL7Nta4fej7JFvFVEixDzhdjBewAHPos483vLdVy4gBskPKyx14KNwQg7uhaZv8ph8y8L",
  "key28": "2kYx5sktEKMaRWeNbmH17K6yfy2YFEBVNavWsEJXSyoBTzGeNygXsLiVXULi7bfQNDkLG2fnxqknBi3yPAVhYJQ4",
  "key29": "5qxtTYXyhMeYcsjd2Lty4kAXK25X6kTe4NCaZQhqJ6NHAZwSFHTsWNaS263v6Q5BoMajMxW9T1x67c5Mg79AVD8s",
  "key30": "4UJEqCgbvargTgNbuXerD8Z7KGy4MeNQoUmkTDq1EYqmhZcTYvn89xzHh3Wn3ZWpmmMJz1EWdPi5zuuTWLR2cmUi",
  "key31": "4JDSsUyCKAkESBoGgFnW1M83ieskEbS2YSCzioCeMBgqbZZirH8WnmCF2zE7dfhquw3ce1WDXLkBd25Sn7zHs8j1",
  "key32": "By8fWPvCeER4oK3KzjEtagoSaBcS7csD9w8LvxvvQuUbg3zVzBSRNsjEK5atFkimwee8NoFth2yTYL88osmbtXr",
  "key33": "63po4U3HSRUSyjRL7jEfcQXnMPD3SHJEhCQPbpp1U3mwkCruaQ8eJ7Jbtfa13xc8bndKirJCbtBEXM8Etzo5JJnk"
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
