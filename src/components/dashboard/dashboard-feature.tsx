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
    "3YokdD9o6ruFNbXLJHkJYuKoZ68LRXJuyRV7suR2xpkSbmpuFGkaCcYJwEmJFfGrRq6qGj6FuwCSNLn9r3jLz3pN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TJbCtJth7Vwt7XHTqE2bF9HDXBRHgMxEVLHr97ZS1YB4ryWK644bnAGcufNK9gMNjxpYeWui1DM3HvLYqc8eXPG",
  "key1": "5YmMcT7Hx2B3t3p5Aq3KGoz6H6FAQjb59iSUT9VdEK7ywG3WV8aJiP47NN48it1vNq7bwHMbGGGQS13zo5fPz3Gj",
  "key2": "VZFqURX1mE9Shz99KnsX6c1YEZyLqGDSw9cXi5xqUzWAm6ULa7DQr9dMkaTdjDqxDW9DoA2s1qLYGR79GmYQNBe",
  "key3": "45oa4bL91pJ1xFNV95rTPcfniPbXtNVBNXqXXUEbXty7Wmg7ajHTFrnb6XLjixFsq3tbsXERBugAjEDZ6rBnZjJx",
  "key4": "2FxMfWbouziSMc14QmKqAa69KCH4rZTnuwec3wUNUjS2KdmCBs5sv4UoiCwkUgTjbGyNx97b8C8vfbhJQKJy5MqT",
  "key5": "3B6Z6knJtoJ5SJz3cj3vm2XqLd2KKcL4HYFgi39keAqXUJzAG17cgUgqRA5fjjSnP15PMUUiVSc5W8SGSw8cMQJc",
  "key6": "2w1U3ip5VuHyRqjjdpksacHfKefhyNK687qCSkTFTBDpqUBGw4UUJxSev4W7bGKUSgXJYYU6YtHCFeBn4qTgbK44",
  "key7": "4BfYKzGMWivQdoN6QfTU5G7zZFZ9SLVfXiRXt8c5vfq8sP8sVGybKEHHfKsqjTNNWwcqLwJKgZswATnUmeMhgn5h",
  "key8": "4KYVbxE5P1TL14k2hNHsnZqxfGCPZnVN1FqU7wWJurk3xtdwAuzsG2fjeDmz9FmXXY2hguNJh6LCTmngYrw4Ht6J",
  "key9": "37VAYYk5gtE8hQrdBKNjTcq5QZam8Y7UKtgeBEqcUwvBtM49M2265Z67bSA5wdNyWRd86RvLyRTyGSGdVC41q2C9",
  "key10": "4YeXD1W7YwuUWLNZ2i65GpLLnNJjAj3Cr5WS746AKsZYMtK4bkVjh8gvk5hh6xv5gfDyVP2DCzQM8N7ZgNCJ6gae",
  "key11": "645pMeMt5Et16PrNTZg2UJ1TrNShyT1G5E4p1nsrjjx7C6qWNCYE6pgciyhJM1CPk4B8cv7pZrHo6f2vgmWcSoN1",
  "key12": "RoJqpyTU2TBtBub7Th9xtDS43pGPWHN5eMXiE2nKj5LxNhM3p9qT6tS8d4sSVe48khpQVQjWZFCybSLzHvMVaUh",
  "key13": "1jKjU2Mh24Kxw6L2StijJ6B4Gq5EgKX1oz3JtR2Sh5tLCFQHo8ph25k2pUhymckdxSvp7Qqa69sacc3upvgeHy1",
  "key14": "fgmVQG6Eedj8oXUUWkUL176KBSwCwCBcywY6odQTaaXBqu5TvbogiaK6XiGLm5J1j77KJ3UKtMRTGWvEc9tuo3Y",
  "key15": "4TiNgqWDMRPBha59xNWP55S4vFjavRHMANUzU4tp4j2cAQcbB2CPCAgkmoV2tB5fiWTp7KbxTAkgR5H3WXZwhbiu",
  "key16": "2wy5h83vQbe3bJ5WmWtVrxTGvQibpfRwew6fASXZBhW9AMdJ618KxM6a9BZ6wnwTc22j3FzCGwDZ5SDr1mztBGyX",
  "key17": "53dVHTAoVDudEhtDeg92d7rQnPvtiqVoBoh6se78ZJu68jSfMQGA8da7BiJFWQHLtTmicKTS353VVV3KCNw7jMZL",
  "key18": "it19j4hAybRRWjpdia3aQzrTGAPSKCiv4Ct24ssLvSzurAf2qCRjR5bost1hiZvXkKhW7WfvNRXTPbAon9x1Cyt",
  "key19": "65MjT3mncjEfGHGcJ6LB4nKPWZqvsnejJBeJBPu1qrvvjZYFwnLEh18YpCLu2zjWXnop8qnyYCbxCbiW25AYkRmr",
  "key20": "2SToT5X8PqvCuvAXy5Q55Y37idHuMbwkEu66swgBxX2oDQCaxEyVQJM4BhPhtKbFQni83DLWRgC6bBEA3PX5uBxu",
  "key21": "3vXNDE1wphLmBm3G67cV2EWA2thNC2XUMCJ2ZW328hzWKZgi9xVCykKHqeRmiekX7jtuu8dvP6nfJLJ7v3kWWBTY",
  "key22": "2Y4ndx264reo4hphbxqoQBKjhWkuAPMPKmqDk1qU1VfjdW8tFmYQ2G6RJV3Dw5yJCBoQ8tqsyPjKqCJsWCCPd785",
  "key23": "2QM9z99zQuo4M8RpuAEu2e9NVY8mWXHU4y82usFiAqjcT4PurSmohahYoNFBLR2ozF9ZnSRdL6jsuxsDcb7vF7YR",
  "key24": "3g2CZdxFgZ5eBk4krm9JmwaQL3Mg7ZPHuA6mPcKDcmPoBGBy22KgFkdd7LVBe2o616nwSftJ9UMySTnD65eNzgn3",
  "key25": "3QnfY74W99QWXEkWSoBCeL2NEzHbtFwP7kycoeFmMhiEMVLjqD8PU86BB9xLgj2qYdsUqeUAw9CRkG7KewN4XR1N",
  "key26": "3Ud66TRi7YDaugzgYrAcGQzHankRd7bpNMWCC1dtPZqvsofpS8oVfRrK9yNfGkGVdDxYFvWv5seGVRmuM62SXN5h",
  "key27": "5pi16xn4LwVVGijsWPDfvHfkQJPQt3tVDKo3SFWSg47eMEYukuwvxZb9mnkCFC6VCHHzZYDdo8cSmdgyb4tuEP4v",
  "key28": "2UBtVG79SD6bVU5UpiBBRc5DzF4kAh9ipmsaN3utfpQy4T1fgG93CxUBZnYiLxME6nj26MSchB4joTgWPAgs39a1",
  "key29": "5exHCBY18RP3ZdiGULacmSutxEKrKYdnwgNE7mYUtnBKJ3DScgY4k64C2F6ZowimRuVkatLbgRqfYYJi6wU8rosh",
  "key30": "2jNa5kueG4qi4aWrjbbo7BSApwG8KgGgeQKZtVFzd7ho4fhyXd6Q97VvfSVmiyLHK2QFfU8QdkyCrhtSNgAS8m5n",
  "key31": "4KnvfX3bs4TSvQspGUX2k1oYxRVHJR16rkdPp9G5iBatkh65DnXxXmWua8vZdZ1GUFGuFSSWQDX1tABWhKEMRKHj",
  "key32": "XbdELXAQhUUseohGNAzcWPodCYRZg66Laj5NNV6f5Mf8seV8NXCNgTY1yxDQpw3zUKqVow7n6LCRDZ5jUCWtB1V",
  "key33": "3Xk6AwGFdCwoq7jwy9DMX8VWX6zyLzjt28wBTxmDQMZvT7LVq5LfTorLFqoL3wE5Ejyo4D7gkeT5z1S9ZV3QBtNZ",
  "key34": "2kjFidgZrvsNS1vF8LEbyvcYNsYee7w4otiPABQi5AWJGXV3SyQUPYUrvjHfek6TTB9f8F1zuWqPNkmyJwud3YUs",
  "key35": "4rKdPSBWdxpwAWmexABo4pLTVQLEWcDuVb5ign8x1vnDTbZxVwMw227dBfaCPkcc5DTNJiAt8RxR1gcRaHWCqGeH",
  "key36": "HvNPSopkfRTbYrzkiPoddcKNe3gXrvTnNuywCuramsHoh8Uayq53NHGWtFfk6xkL1r7F8SV1KtYdHMcFHUzJo63",
  "key37": "RKm3tspvZukLV42wH6NPMMRCLwFHqodfdjBy1oRj8fdaQEYfxcVMS6uo2rt9jHFUsgmhv6mZ1znFJ6ecM1Z7Crg",
  "key38": "4iPxfFcprQQwT9UUZnZtXWNdj5sEa6R7KTn3FVRkwRzGfWyesmB33Y3AmUuVfRxpp9nX4qi8NQbk3QGZt487BCpf",
  "key39": "5cNqAeCo6iudmfXeuaxgwsoNQWjxtHbgEHVYbjaLWEsbFk2aoRpRLowGwsVQWHxBL4tTR7JkarqQu2GhoVWTCqp2",
  "key40": "5Z7djuMoEGe4rfanP6iNoB6LoVSKQc7NzhuRMojMnXHp2XpsyrCwzcApVWHJCNdBcQvsE9uUfECXPCAY3t5eHEZG",
  "key41": "2fnoZGx6RdUQq12X9qyoZHbMWCA8riKZigMDQN3JEfEqELyE4kXzHawAYi9RaX4ggy7xiLSTAHGvBuwjwpxjEE4w",
  "key42": "5bAibwxUkVnHquQKQtmCF5gBFy75byyzmFU3q9RhAa8A1dYkdcvEgYfSqS1b7MURLvBD7SB58L49hk4qKDkSv5JR",
  "key43": "36QG2JtbHiNSQvt5ycnQo99G4EqV7WurV5rYFXtXh6Vo5z5oxbzLadq86gWDczXm8ZKeQjdhWPjz9KBbVjdojKMc",
  "key44": "4cExKqoHkfLCoJWh3J9WDeY52aXqcDW5LoaqQ4HJ64KK2TpdmHqyXQ4dz7NqQqf1uHDntYnhp6t1M5L9ApMmhcQW"
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
