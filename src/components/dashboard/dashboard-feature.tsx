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
    "5FjcsEphoit7j9BAH1GHaMPLUzCRjrwo8xmksouyi3P7eUP6VKjRVxJyNw2YKxP1UhHr432uoB5kr8D6nEFMM1Ro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nWMmwCQ3R4XjLjpxWqDBP2uQJNW9yMwYpc7gGsCGPeVFgLDHLNENrFPcWd976Mr9Fb893jx5SJUZD7SdfNb7SHv",
  "key1": "2N9ax8Cju2cyDYZZJKMvtD6E3Fu3FkmBMty1v9k8W1PUPt7N79YjbFy6onRbUCZndRvZBjkYSFmJiHmT5Gr35K3b",
  "key2": "5VjsPa2QGe37ptp1cENgRsqxH5T6hu5ZSiicjSTV2cDkkfE3RyNAo7WG5qUhRjQpGkemakwbvuGNwVzJirqwSiWr",
  "key3": "2oKLEBF8XKTdwVPtGtPG8z28xmbrFi9LNc9NEc4EfUrCXc1EJCtV3snCShNMGDVGKkLk1DaH8eN3xXQYEGrB1CVC",
  "key4": "5m1fSnfND2wpdAL1Pd4UaUUZNSMnuFFh2zppUE39VS3vrCnynTEwGky3gg7W9cSvPEzyEjj4wyfjDKYvwSNm8ror",
  "key5": "5RkPpYrpqDJi42XDs7Cgqv5RiwUZQG1jgWtH3HtVTjRNMUuAb93KFFqpAbTw8HwS6SPz8dRBMJWohx6RiopZQAE5",
  "key6": "5JxSR7JCLDc3MbKkQVdjJJvp1eBKPRVnhQN4cTD35Rmk82Ns77w8egh7yVQchnDiWxfsD4yLkUDveZTKvHwmowsE",
  "key7": "3ZtqcvJNfYAjttYKiFRGgyXw4GZ5ZiHXpWxDDpeWYuRmaHxAGhpUbSXjkVDRY7FPv7uu3DuCRfAd7AHSpfrh5NBp",
  "key8": "54itv2Vcqp4zenwhkyDwPNK6bGK2RGpHb1SLdCVTyHBY8JntvcnUk6nR45ByyisHeRv4VGdynPFUYtd7a52cWbrv",
  "key9": "xn2AedXisVUqo751yDaQbysXQZhEuxCDSXXXjcw7mSa9nH73WqtPchd76SPTa8Ta6Mn31mtGw6CrMnt5K6JGG9M",
  "key10": "5GtLA3aij9vZxQrTfeG8rdx8CEpL6UYoPSoJRUjmcBLG6MNrKc34PEZTMxqzKMEzNEaw9RtkcDvAQ3zjEkNgaFUS",
  "key11": "46ooraJXwXHHYyWZXjQ9GJPHwAYhxfTKMmB2vDGaNHi1DwBoZ7DXmUtgqLycxWKVts5ZKf6gK7TtEaTWQJCXqcZ5",
  "key12": "3x8DudJoPYh1U1YG23kL9uxpBBrshJp13HsyWNXQVHRSgfb64U7PYhJhzqdCRNTpErL6DYG1n4WTiXhy1pJXGc8U",
  "key13": "5r8vwLzrYF5fhZszvwJ4h2CAVg8BCHn4dnVXaL6v5M3wGkETKFWGeDf7BvX3BWtQf1TdaxbnFpZbet9BdLG2xaY4",
  "key14": "3jUbCjL4w76cf9iBcyDv322MdjMVfWnHmezrZdLLU17p3ncB12SepKum9RcSHkBQLbtXKyYnhzgfm88eYr17qxr2",
  "key15": "4fCiibfRDNVAhXmG4EjWy38df6Z1nsUhnu9m4ErdoDg27Ch1ttJDhGfzYk96aeAogKdp8DuGp8s2kPbdxQfoSCpb",
  "key16": "525JFAxnQZCEfb76PaNLXpVYJsF77UFfZfBgSX177DHDwPG6vHCXr9XtXTyZgokwH7dp49vdEM2XvY1UcEkzFHYM",
  "key17": "5sxpYvuBoVNzJv8We57Bmfb37GDe1D8KbsxLX1XaEQGG3467k2xwMkJBxnBcH5foXyUPwSrzbemwqUbpTG2owtuN",
  "key18": "58F8mzubCvDrVJGdY6ARFmJyPiLP2eAy1F2N63EYLsT8pUNPaCFM3jj5CZbZxuGXPgzTYkNhyYokxMoNnezr1ocP",
  "key19": "3Z2K9Yx59EjvyuNV33RabEJjHSYgj38RW8Y3CRezWwY38aMEV7EAfJE1vxt1k5D7SrPFNP6rLmKeSKrkCumy7WaH",
  "key20": "3gLn5cdWwrnDWCkMfZptFSPdmXKu2G8GH8Huwq4kXyaiWVM7gRvXTt3Jh9Zz3yfDZzoAyeJCEvGmJark1i9KANaY",
  "key21": "2HScaHnWraEoqK26DJWs2iqpCJxM5Tbzk99MdxUxDeZCsBmirm1aL3SSQBqcdopA4wf7pj87d8LmVVecH1vofUYN",
  "key22": "5rBpqwe2V3YKahWi4f6u1wdYaqiyrerLuvkvPB8t7NqcRN8AHiKJW5jcufKLr5KhqcUvGbTXLc1yyWJKJU6htttT",
  "key23": "3FoVkFcvbyErfgiTuQe5ehHCxT6GCYmXDJJr77ZiNokDpVX3gue2YCiz3RaBVMqMvign9oLPxQ9iAZRSEFwoAjJ6",
  "key24": "hUbwaCUWEqXSGtB2g3Bi1L8NZsffoRb2t8kttASR6m5HcPDUPorJsbFBnWrHpJK4ihtXvKs3VHBsmqoYGd7Ptph",
  "key25": "53CAroJjLWctrSLvHXDnQnJ2iDXPKugbKDniFFKRgQYv8iHRDLknxmwsVi5epBY7surh9BuNeBdN3G77bVeWr6U1",
  "key26": "4ideRYhgUxR4fuyvHKF8LGEYdJy9nhKsC21EHKVz7ZowMbpseg1GZ3Yuvq2rkJpucUMgBcfsfxqumkmUCQNddvvm",
  "key27": "64tevayxYvWSN9wUbHiUSEXAtFyjxSW4hrx2DGJMsBBSWgnRfqx5x1XuxeyqHwqB58sAdnA9dxsANnzFW3PpSKbj",
  "key28": "2EBFfLm29cr14G2RQ9rySbkmnQh55VVt2f4eKmia66DECvZZAyuyWkPKWTZqr2DY3vWdf8ayzqsL3q8DVWYY2GPu",
  "key29": "5KJ5FKtuY4jAVoSquCc1Zb53hj9RBiTv5SmWdnpMdTL9rskNCqg8XhdVyAkj5EH7JNxYmYmrYK6xcoqcLWXkaNhc",
  "key30": "2H1LA8pXDwAVE6ARrmaHudNteDoprP5ioUSs9yMkQSh5Me2B1oyGUoQFF873bDqjX1qs34bP44H6ywxxkUsevbnc",
  "key31": "31YMuzfa765capzaEmVKvatW1dShh9Ymywm5aFZDQC934MDyHen2tNEmGqe5ikfvfCxaDqUHSd6kgLyPwykr22vA",
  "key32": "ncw8n4N2SJvE4D2gLXihcrek2nZuSgBKpHuAPKdsRNkqQA4SZx5poMNooHZxCEVDejWMbQE1ksP5uyHRCphHkJL",
  "key33": "59HB5cTAZfE3uVjm5n1niRSjaVJRUbrMFXHkRqywvgtgeNq9Ahr9pa8kYTrBStuvn2GAZeHQwrbnyhx5vBBDJVdn",
  "key34": "33ZMewvokuynwTnJRZS7fatymnZWnacym4qxo3RJf3mwYeZXuN6dpn3cKE6vZqg2myHgd8d6kFcEMdnAbRCYdLCz",
  "key35": "3tXAGwfuRntbJvEwHBXNoCkdUmiWwHah5R3yPZskzajF92dn4DzV294bKtbfhJjnuyWNGC5zxzZLkbow9V5hY6tK",
  "key36": "VucWyqb7Dtn61SSVU3a9Z558QJMEBsVYHhes8ZuwZqEcJNx6pU6LiiYdiYuU986GmRWUxvEtA4519NHjLddAU8x",
  "key37": "vZJsSvmBuYEEy9ouKgoaB6azpwG645fU7oxqLaaAM9q7Y79spH8k3XJWA4UNb68TFsSqzSLrWhy1yfPZsMbFMZJ",
  "key38": "TZnb6AixR9ns9A49VVkzSEdkz2D46uchGrdZfzGH1wQ9LzQFS6UmSQBoer2gGyse9ZxpYuYGyTFHjTpMNp1U3ca",
  "key39": "3p7hnh15Z2d59pJjuLU4DUpg1aUDJnBGbTSMtroxiuPutDe4kh34giSJLGn2j6QGA4pNsDNTs5ZxjRjtHY7vgtAr",
  "key40": "41EctXqLQQ8XMYnKFyzZTr27VcaRSKfELqqLYw926SFWZzAsUETqgfQS1Adi38ixbPt2AmnF4WGaV2c26fnszcxj",
  "key41": "48k81FDngFZAq9Erqjg5eP13n8gvaVQAbMJ4oBshtGi2ViTjVjZaykvCGnQ2WCvUB61rmMDPc7vb5txKEtCZgunL",
  "key42": "NYixNf7WigrdaVMphczE8A7w9Xmh4qgR8BS955aryYiE3y2UTC7vJpxX5SJJVVDY1VijtFE6UzwCffcSxa7eu7Q",
  "key43": "LKwHLwMvv1AsxXjk8KFQ2LA4tZp75uPo16Dpw1Gehar1MNBn7B46NEtDbyWgn6akLA1BYD9srNuwEiFYdvrvUwr",
  "key44": "2mtX8paHHTzWCWq25TtCnFgrU5qkC7KyGhztG7uoftHD2p3ABnpj1heAUoA9zSJyFhhuoK7BrhMUeUyXPQv7FN6x",
  "key45": "63mF1B2qQ2VJPACMVdUCgYbShumEn9rAzhdRbLhnVBvNHYAX4LzL828gQgtLbCLHsz3WJ4h7GxEccwym8cU81RG4",
  "key46": "37ibRR8xtCcvLhgT7RrJgmPyvpdsivF5TgdTq9aqX35faUfw69W88eeQ9wpnxPoFdwpfjLKzEp9Fm6uGiB91C1K3"
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
