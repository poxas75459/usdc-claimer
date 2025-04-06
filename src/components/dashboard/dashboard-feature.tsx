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
    "3nv8nANhHiYfX1nBPD1DfDhX8S3YUsGKxL4ZggHJbvTzbQbToKQB72wXerk8CXRY9JAnASbJrdeLHqVVUqpv95De"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hh15TNeJsjvtjZmNJvsZJ9xPoEDQhELzV9hp68QsUbFdJdAWqYFfkjtnyUPdqZS87C6N3Tv4KJhWWrPssJyCe3M",
  "key1": "USqR6S9TEegNFHA7Q4Wfk5snJBZgFF5ogaAoqnpphX8EDEyo2KeeUov3Kup2zkxvLrh473S1Fu18phNpMwHXWL2",
  "key2": "52t8zH9AWhN7NZPn8ucPx4dkkBSxRhbjHgVbtXK3hcrjmZgxSZM8FogsePuY2naCTJ8uw5d3Hs8npTT8EGJHNoEn",
  "key3": "2HtwtPExK1GxNStkmCXvheDCXTGjR7kDD2pvgspGytmwe9RapAAPvCy1tKUCDELQYqGZaUiQoQvPbnXpuzX6yk4x",
  "key4": "3aU37vnDM2dFLxK1JrYvAW9ZxwGfNG4iRnKiHUTf7NcfDkZCpjKjS1MCsMLaXS7a57jFpYtqHGkAPVEFqaZnicZo",
  "key5": "2F5XpabPhQ3bG7JQbedQdvN7YPDT94LK2e4WwJnAtNLJW3QMKBaMgUfJFaeyvNNMNcUxLFv4dSKo9H3Xx95cgo2a",
  "key6": "2Euj2tajyGccENXaxkrSMG4fBd2X2iR23jDQQGqSwNkoWfNVpkAraL6TqxDXr3rwYzMGM7kvo7a5C5prQL9wPb7t",
  "key7": "3TPEQV6GWCiiKV5xtgafMueRe5E4X1EYHVUnnuf3YtMF92wwfhb7TEu49TADSAPawTEmMQwhHihtyBUAgSkLRXwK",
  "key8": "3zQFHiNZzKvc6TG8T1skkxeR9qdYijCRW1txMQuK3fJhEGZcSrH3ikSDvJQua47NEEoyq7tG4HcmcpPsd9X2UdHD",
  "key9": "5obis3z6mmWQaMWbG4Fd8d6BmxqeYngQo1BeocyD1wA8dBEASmGAX5NzxDntpmML71anqWjxRenBnSuLmZQ4yeH1",
  "key10": "34U5Ltj8qUFFXMvBHYFGXRzqAL8VyE7Gup2jXrZvYNyHgRNNK6FiD1LyiKdZavkmxivwAKtBRTANcZDuZ3kS7x6D",
  "key11": "53moyMRCQ54G4d7ayRkdzFphejZtoL4YygRBarQnUV9awpfkQto42q3dfkaokHgAUSYBZEa3V3EVq5bDBHvRhwYW",
  "key12": "5ayJ5ERmfzgyokvcr9WcHFmJdamRT5JhMHB9Lb7FfUK719QTuiWKcDrfswQJK5Qi7sB3U9DEtsvAWsAx1jYsLKf7",
  "key13": "44V3u7irwVRmSsRQioj1oEC3t3XYcRBEHspWfTqwJJf9NqbtErANA6q2xXmxNyKsEC6a2o3Y3rYyMtK2EqdXTdPh",
  "key14": "3Ukzv6vF5KXEpcqD8L8y7rvYPPoFFAdnQFmHLCP2e5d5qJu4LPJzQQe874ARu3HF63ZtDMG2hVbMm6QcCdPeEcaK",
  "key15": "ou53BK4sqiMtiHLDsSjFYzZr5HdrtDqWeT14qtewWdGGm3VJTD4f9g54gTS7Vv5yNcFZsHU4UnshjvnFaXiTGvA",
  "key16": "3pxnL2dG44JeFuEf6hYAXxMRQrt1qBHxpxWX7YgFVRwkYBTTCNKdB1iLRReMNPnoTtMrMyKmVqCDwU4h4KQjdN6z",
  "key17": "XhtV6KzAkk8fa2XbJHc5hLEdooZrUM91G2QK2eedV4L5TYaweDU9a1dJkb2gy7niCETh97cDDfKrgTiD4av5MLV",
  "key18": "p1HcpPZkJTs7qSL5UqFTn3KLKbFcKfzNmuRjXi5t821ai8XW1jSfYWe31z16j4Z5fTWok86EoMeLcSLmYcBd9uV",
  "key19": "WLJyigD2Eyae2BRN4PqFbeJtBv89WghK9yg3sD6xtw2aZRUBh5ngJbZ8qLUhWLS88L6eBq5rAig98iVKdJ3LeBq",
  "key20": "4kaEJYVjBRhRMPns6rr8HGtGgUFkLfxPAUGDpcwxrb3Zd2ywmHJmzT1XRBWxMhUcTBBSb1uk7Sr2MZaMf5B7ta4r",
  "key21": "4gjYEe8Wh3UUWUv9BfkZqatRvUU8Ka1Nk99EWNTa1Ln2tLPTor4N4iw7KRxL3HqEqERvaCw4ubsm1F7hXSMxJ5a1",
  "key22": "t5bBmABbHtjDvteZjKc2KKK2bwtGLoCFt1niKLdevuzjRdrGjHYjP4uEYKBpHoARQWpiKkiRyVvfxXV23gtPS3q",
  "key23": "4GXNKaHdPdF4ESixXzNK5TQdEhwSGXc787ak7XNC44XvBCNhTSDw79LhNgM1rnhNiH7EGzi6Zjmz6mumC7ok3XZL",
  "key24": "2maAUcZQymBbb3rXJdqTz6xG8F9sUvA8eUxQ3poq4erKJi5Tr1WzzEJbySsNxmHbmsauQVyGvC6ruR12mfZhK81t",
  "key25": "4MUVg7DpxpXsWumWacro2nksUkbnDsnzqCaCAX87t9LM6cy4YZL6uZkz2VS3vWBBcFwuzcNJYcCGNyUMZKwspe16",
  "key26": "4dKwy89JUjsnfNLkXdME5oWMzjnASaMJA6Dp3PS3LyenhtqeV5DkVH1hT1QGFf6FVgYvuXHXDnTuNMf3yqcN9nte",
  "key27": "5TqVXXXcQ2cWEGHJerQZsMxWNAqPC3Y4gnr3WGdwSnJJCWsjFBnga6wznoyH9gThcX5Ym8UDtqgBcJnGF8Wy7hmS",
  "key28": "5J5ppaNn9E2C3XmUAtymuyGmbxxxgqiQZ8LnhShT5KDhyvc3bwu18z3oiRRoREEgMkbFf5KWWZ8XXTupiMyeGP9Q",
  "key29": "44YXRcqcAaM5YhsybrQAcoWfsCGMwoofeVrkzW79VASe8NCuHp2rCCaQ82Q8iKxDXRqcXhCar9aCRRsUCumkwqH3",
  "key30": "4gddkWHTAwyBtSK6xCVV59Pptd33ZqmPHjrqzjqYc5YaT9cyguQCQ7mjcJ2VxEpvingYJjyDPVd6qRnFx2zDTV4Z",
  "key31": "5RL4TFcgKRn8Tm3YK62VhFh1HmgKAppnYuS5qsFD5FyK3vkDLmuBTFNoBYSBA3VcgnV4w3bhUD5g3H33EUNVvQTN",
  "key32": "n3nHQ8SaiXeyGLerYuMMzhbDbrnEYmgDrDeM8A3uBYScyxS24bnbdBPZR1scsA8J4ndYT91jnjkUNGGrCowDYEG",
  "key33": "5Zd9UW6oseUqsMPddPGuXvsJwjqPjGZhWYnT75RkhwmR24iKYuW51MKensNfjEb3PP6rsqdrC8qzzncSDygsg2Qu",
  "key34": "5SKCqwx8VDwrqvXkqNfsha1AisxQsSSGAhkWVnuT26stDgHKvh5aTxxLp9E3LDo4GRzdJgtCT3xgadrfc8fuGZ6k",
  "key35": "yMhfLsTLbugHxHdyxjqafzEpmsE36AG2tFTqcCcy41gu3EBn4sNdy6acsmk4tq5zZrPZMu3f9oMjBwgvsBFMoQk",
  "key36": "4hWZVf1dppLZLpNznG8Kp7St6KEBJJaAMYqpsKQ6Vfh7s3Ns758NyCqYpdKL1f8zViT3fL873FQwqgY6bqwo7KCN",
  "key37": "279KCjQGyP74ADYK2nYx3KfWFhad5oa3SGfzSqd4AreAShmA2qRhz269wKZBgotAkSsM1zAPX6vF6xhzdJTSpMer",
  "key38": "2BDdWKnXzp1VPXg1WEFwMmUskrcYs8nn6j5So3TXUivdx2tWpu8spFB6gSSLGxccr7HgCvdAmywGcUwRgcsmTh9o",
  "key39": "3oS5Xz2sV1P8T64Fj9jc1E1cAnpdiN8wCQ4WAy9Cyq7iUFGTDcNGd8tTDYLwCqHct3UAhDgpEncpc6y6De5GNggo",
  "key40": "38CCBy5ad3R3q4iGt1d811p3jB5HMukhWkV8qYh3naprGbQbvgWezzBs3RckZXpajanxRYFBptdRpL5dBSgmfzwQ",
  "key41": "3Cn79psVkevpW65jb9jhmWvxiTHvtjU1RfqozJKqq8qfcFxJqsaGuwMyeRRStBKcmNQYN8J8gBWbiFiEscngRkZo",
  "key42": "5XqUiFTfjGAFgthRK4Abk2rb2MwTmgMsm83MVtniRLrLU2xbcUkS4u1NNmTDbWYZZPTz81caz1NY4ypwDyYnBKbR",
  "key43": "4JYhBKYXhjpBMu4AEAAQhBtKkGhvqxV6zY2S4fF7GFGcXgw6goWi6p2kPNmAkHJQYptfTgDvrjknGuEc8owUjy5w",
  "key44": "4GeCBQUc3334LM47xxgX72YseKXyHS77qCN52ncLMZVsE4PgY73FV876esK8XkTTqd4oysfE2YcLXYtTXr5DrdRG"
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
