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
    "29pfqtCzJeEaFX4ZQfxMkLRMCr4yfm3c3nbtPAhStM3m7i7MzY3DepqtAL9JiEXc2biCrpyGnY9YYRYJFARMcGaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fjCJ4pp1XipUkiRBRd9VVzvCX2dQM4nfWMmVw2VRDc3NJtcGUz9wKGL4HHumRh67Z4d7kN7JsmCtCdu9Yguzjrz",
  "key1": "5wDED63KZPEK86pxTb8j3vqjXCsqTBe7LBJh94tFUYw6KNBWY3FQ4t4viTsctdaSBUFWj2b19ZEEmPGqSCKUNKTo",
  "key2": "4LC2fLzPLg83znU68bMALNrMkhAEVBGXHrfaSXJVszUJ6UaiFxonNC1k3fe1fMRqnDreDCsa4NYqRmRHsT1Gj2LK",
  "key3": "4knd7ebZyMzZW1MSmkzX4RBWkDWxjt2wp4qyQhFvsokZwcb75BSateGKzYYBkH3EWzrFGPUYkXGaucY7iDWQc1wJ",
  "key4": "3RxHySnjnQEQGsdYwubXeyK9bZneozWWAPrgb2ffU12avvE214h7p3Hbr1kCgaPwfuBfonDTgZhq8twewkGkPrvP",
  "key5": "5GHCWfvJqabYa35XNdf9BaCXuABwtiHy3JGxCq1vqSk5sMMfKgnsL6uGyq3LtNpv2sdUosigBSdbRQTzjMKanocA",
  "key6": "3LYrDGpq1oZMBfVSFfNr48smExxfWWiBkaHHYHocAtRsctfvbrMUWi9y9bGDFriretGYZf45vgyR7qc7UEKC1Y6q",
  "key7": "2CBbsDmpjqxRavoTSCRQrcan5xCWwPivP2245RX4rSMaM6o69dktBWQRVmZn2LVptovWBqYXPPXGAU72zPah8JjH",
  "key8": "4Yr1x1Tn3cUnDwcQ1J8Z7e6Qcocn5Are31zmjcyvyr6uPSTVoVCwdzdQsFmcyVVLFL2qspn3AdPrMLQXFdjUe5G5",
  "key9": "e3zND9hNcCHZL6CAKNBjdmAnSKcudzfZTa4yTvmzyE1ycSxB4JUdJw2E2ah3gjFSif4wnQDL8L1F4dfeCFwvWFz",
  "key10": "5Chr6sEHB3dd6GW7pvaQEYTYMLvrEpVfp4jAbh2YCmbTH3Bb59wtqwojHn21GhewEShnz3c8fEzNqALbiKwnnxgt",
  "key11": "386aoFSdQaUbE8qT5fHqKwH79FbBwc5ic14P1PDAzpQo8gFAAq47JR5p68XjJMYK7oTY1XXzYdoGwNrWPhqZdwr3",
  "key12": "2N58qhswJbVsuGHvpzjDyVmg8kKb7vMgBdA1Usf6TL8bmtwDj1wCb7ggmvtWktKW3gknt184YeAprvpJdrNYA3pS",
  "key13": "5snXi8ZNJh1LRtozWwfYxTYV1UaMegG9a93o3dF2pjFJXJbfE74xKUFZLAcFQgce6TZrFdc4MHsToMAAstXjyy5B",
  "key14": "3uRMwPUqyeYgbW3zmLmRTE2KmywXSmFz6xfQNR2fgyy7N2sYr33aQg7soewbEYiG7PwtSn1ANsjizukCVtTXrFmq",
  "key15": "4JUwv31ZNCCEHYaFBNrTwZouPKDtUKyTMxNiRXQgsumxvuZVa4ynwppBWgdVSBGsfVHo39EfmhRF2jEvnptRSjnj",
  "key16": "52YDtKh4mJyVmXYJ2fHNRPxMiYvFwtMgRySFCEjr1RA1Wam9uLHxqhexXcvM9VvHDAkyEustSQ2NPfbp91z5Yajd",
  "key17": "2R8FKafaegnEwDBFBzSjrLztmhnZChE9NEHtXLWbZdwGhss65V1nBN2Ffd1fZWVFgsqM2gxq57JYzLmAPQxC7w6R",
  "key18": "3y2ifNZzeDhrRTK5919gK2zNm64drARL6M2iBNfLVfRZpK8yA6NYCtraFnjzXN57vTNhEJuqNx9YXJm9B3fPwVVE",
  "key19": "2LZV4nhu5uGypaRLuq2QhJavR4ArGC35nyNGw77M5SLapNVTJXZy8F3xhfcfaSxchPQstU9hTJLvjHppuGSFwtED",
  "key20": "5bUrM4QuxG6ehZZwkEbaWp1krGrPeNEDvHcZqZT7t9EsSMrBuxn4jDXQGjKQMqZ9FefJueqp8TxtNVnpYiAxrWgT",
  "key21": "2cT6BN39EgsGP1h53JzhhBk4J8D1wiP7apSvSkDZMztS1Xg9DxiV554XNaEkwXUhAxRAFFcAPMPGTxHUN2mq1hwt",
  "key22": "2A81LKAqUY9GVFmbfZi1FVhZvU9kJuNi4sT68yGLNWnoc8oGDuiiCikbBZ5oE5tSs9FcJja3mi7nvq8mtCFLs47m",
  "key23": "23gHNXrMkSDrdSd8s1VTc8YrYeyRTtsm54Rs6q3pmo6wdjMXm8GRUcHREyXB1DgJonQjecthhLZBSWE1sZjMXWG8",
  "key24": "3AjCByTVXjSrZdFcP2uLwjDyJ4x1Hh46sg4eDBmsP4djkyXcixHhrUq8RMqVmDMLTRpxq6sXyyvMwcFqmqmcKZ4H",
  "key25": "3sAfQDkrs2fKcqLZc8GRBEosuDJ7cEz6zmeQnmSacravAQMgaxfKzu1Y8cHv1CDzEAxjhkjDVq4AAZJfveSmTcSz",
  "key26": "i1NxrLJGiS87Vr8NDyB4Hv2G7s5zwfpnjAFjcSnzykvwM2VtWe4BKivHikKWipbqQdmjmHH8kB1w5yyVWXCZBQZ",
  "key27": "4tevmUq8CijVeRjPLf9z5Gxv6hqBFR8vXPQVRRGaYy8fkvD9pFuGYDAa7PUjZ1PrRE2MTLP8u4MKZJDeuzrCt5wW",
  "key28": "2JfFkErcUgq5L834Q7aQVwwA1m8YRiRScRNUVaq369sE1N3MSDoZiXSsvxNbRKXwqWM1McJSGV1zPmC9BaYK8L1c",
  "key29": "5dXGfAHHvpR51VZBjc4aq8G2biyPk8iZmJupsYKoHoqj3PcMMDJMQKs6xkogyY3LMHSThZprndqF8H7qHdZkfCck",
  "key30": "35HNEbppJ7W2R7vrbihQmQunvzVfhCdGqLoyHhsbDzrmkWrUyikG3iEHzhnsuffNEuoeqTwLniJU6Km2USrTd3kH",
  "key31": "5s6K8YbfUuUBuEPF4v4idqn5yMud28VkfvL7EpBPBrxvhNhGDvRt1U2PziedJqZCySjdRSfwofuwpTCv3XNa9y61",
  "key32": "2yQugp4yepfdzYMf9DkVk4YFeQmQio1pi4MwXMEDapfsQTkp5TGJiHS3vGL7sSkC8mCGwH9pY7RS9qfd3oZ9zYcE",
  "key33": "27BGSaBS5LQEWwKnyAsHn4n7F4b3QS1dQs7h1kyn2SDSE5PEW1bRiR4VdAtj2pyecbKA41xQbQiWyPBkZZf2KRXo",
  "key34": "5yp5pYfjdRTMQdwwPH88iapbhogVLYWtAifj1H2XXo2PTLBgZnYYeTCYG1qwL9PpjgeeEcZBgY5EiDVkVHt2SSjx",
  "key35": "2zh3B7roPQZrwLENvaipCtJqiUo62GCsT6hxPjGr4rJcpW7XFFxBaTaYj5V9WVFcfCmvRo8LGKL2RrjZieuBHkjx",
  "key36": "qCzRe5nPtodS4dN5bu54Er8kFW8S9XArnjLhdVzzAUpqzHqdaxGixQREE6miK2qDxtMq3ZkD1A1JpMfDsRBQoQK",
  "key37": "32q5Gv8hkYm9De43CtSM9f4CswCiDgwCwKdFCFpC77Lm8LFDZusNC6zXYMPhjeqi37NMHQn9bfMdWWzzyJPadn9N",
  "key38": "2BzpaoFT6Jzgr6T89ZwwjNWxjcoZbuhMtz7dQGzLdFAtV23U8x6cTLAomjSdynTpkCKAhEkswVJjpGjwzW3n4iAk",
  "key39": "5Q2vqQ1nigThcrYrwvAh6e67j6PoGtZ19n71k2eWgh9hjYUoZ3dU8eSwe57Bs9pcv668ai3kf4VDgcvS3guge64X",
  "key40": "4NejYjxu2F4uR68aGkVaDCBS85vto9rQBg1TdtN27eqFimAZU6P3nwMA4HuyLQktVYYJCWHDkBDFWe5u6SRh2V9w",
  "key41": "5RREnBctqVzP48p56GiaNBnUiGSD13WFvNoc4a23jc8VuKTudfYuAoCqaq3AwirWv5bc9v8x6TgAspbRDaNKf1xA",
  "key42": "3UhFfZPn1cBBWoqv6CMRXuirYfFrMjThTrBNds5dawS6ar1C35qhF713mM4swL9cgiRPzvWA5PJtS83En9qformB",
  "key43": "4XxbUJPJPLRdiSjERgPSXc32nD4MKear2cNUH3NfcNEWXD8zt9EMy7M7DK2XfZgDHprtd9dCreQqiCMXGxsASiW9",
  "key44": "c77Vg2y8C6ZVRkxLvr163umf2855ZeGscTsyAcMLAqHMVvNfZbz8PJ2RevQBuS7XqN8W3zJz3ornE8wGGvZfTS9",
  "key45": "8paUJRERrJrSssqtwdToyyy7P22V1acHEMi3F9tga9Bf2ErAmVgt63b2au9GGF5qGCSECZFbzJK8qx4jjwGgPNH",
  "key46": "5WmwkMBjyMqQceaVRjqBkiR9MQZ53ZAEjSLu9cvd1pWbiA9Mrh8nqstnTzViKs1a6cEdLBfZnQyYhxzmNJ47quv6",
  "key47": "3SqefcYNXPC33PYtsJKXRfHgTWzwgNWFw9GLUrkQkzZeGJb1JWw9QMQV72ZKtQEhBB242qJYfVKUkfG8RBpBu86B"
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
