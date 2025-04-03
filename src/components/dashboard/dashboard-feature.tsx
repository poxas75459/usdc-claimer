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
    "3JR8mk58VXFPSzE41CJdQgMUHYDFmPzuPDoKUzTE2Vd1kWeu7sygxYi2kXb4hNp8EJjt3eD46r7C59AS4TyeE9UT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59FJoHr6h3qjNCqZ6wBSE1drgDgNMnEkUEFKVK7yjVfkky7zPnWnGcJXpWjAAAQwqHFH9JZtR9GypfMLma65Rp2W",
  "key1": "2mZEfxFP9RDkdAs5EeNRSkERbPNUia3ebzWJqRUtBTgmaEBqBLrX7ABzA7mqg1WKagK6bTFzUn1DqMLGjUKYwdSf",
  "key2": "4RuKHBfzU4M4jhgZmP3dYkCm9mzWiSCQiJsiRbuFMwqk7pdTAMFrvSn35te7GWttsudTE1QpYc8rdDUnf7qadK8",
  "key3": "3vbZHTFnZi2eGCFdEipSY73jNBBQQxc3ikwVmqknSDL4mvNYBJqdBtiKUgoUSq3Dv7C3RScZrZd73Z7ojD4mAfhE",
  "key4": "DN38gG3jEuE2pQr3EjQyfAuv1QgTQbNLBpH1DFDTf2naV3MZZwHKWgYXKMx2zNMSrkueLHxgyGF4gDPJKyhQyLM",
  "key5": "2Crp59uVUmk2VuzZ83iVmeRodTAFMcjaTyprjethyd837ncuVq9k8JoCKhfopUW1pNvSvVK5FmChAuf5UUN4tctg",
  "key6": "53MkSdXsSkK7wZpBKbtQV566bEXa98R3NxhWidBioe3eifiWG7ewuQ3e5ih4JqCUNvZHE94ArTSdAePWhBqFgkBi",
  "key7": "25TrnH6DoZNFaLgm7kyBmAzokifniegRyACqh9oSxhDh75xviMGKXEVP7VmuFu6JkhVfbAmSZsHYhK32kBERG2m2",
  "key8": "4LM3bPuXnHsDRvgRSgbaGfZ4A8r8KnXY2ayF5RAUvGNeuk88Uu461hHHZ4U23HTyrVYCSYdAhxRunkt6ysZWT1HK",
  "key9": "5a8PUeCHK8xfy5U8zJ6qiDU4qxEyBQF4xaGMhPbwU6bYmQdUU1yw1gPqcq6Kb6QrrDWrtv4SUiF2x3fpGvdJw85S",
  "key10": "4wZ3smS521Jh2tARio7EMYdnzxHGhd5iQZxe2DnrBjYa2dNpGmjsQHkWQWxk95k7MkQiQHa2UjpunXvCw22EuRXp",
  "key11": "3xaybTAMuSJ5mrQHoPxsu96oFhY6SAgwx5BSLdJPsfM528yu2qHtUbMqWpZ8AyA4BgGjS2baKyjLB1njkLT2iWGD",
  "key12": "4LH7iZFh8Zt6HVpyEifFzUjYVzKDvTq8UK923ZiDPpAzEtbfwuiXXxg9zcFQBMy67WzwhjLUtwxfnZu3MryxsZTX",
  "key13": "4FCCU5uYYgd1YZi31FjMuEE4rjwMegRxwtTYhjrVmwdo4xfs4Qom8quw8JmAjvXYhpceiSasTJd4LXYZHPd7GDPM",
  "key14": "2sCQU8iDcmyPezAD9Q8oZ65E1MZzJXFWkPj16yhSyeYGFH5F2CDzGs4aqgGjM51i4GC9kbThDB9f5CkmTS4RBcDs",
  "key15": "29HWpaqu4zWYHrJ6ouiGLpbHkgvQW6piQJFqb13AtjKQcfK83W159jUWUShHx86hXxYg9ZawRkbodqVDd4pARhXG",
  "key16": "2uMRBAL3HCri9QZowUjcF3inJdEosb7GHdXBj4NRx1ENrMUa9QCL1X1u6Ub3LYhdunjjqSHQcGDGrPxsyuWxS6e7",
  "key17": "XwMvCAFZ3hpDbGy63RLmwLS44zWcWsFz72ucMFNfCB9EhpEWTAuo3VvLSEzVMAH94Wc9NUJbAJPnUXVhJchoC92",
  "key18": "3TNFNjqMzzs838D5khHQJbm88MLWxeubs11cC7QEZjmVmSuWsTFpUYKrkxoJzqyuFuA9KSfPh49eAFYfNuwiZJkX",
  "key19": "4qG7fHJ1LMbWftXVAMXJQV5VNYNEvt3Umywywo3daDge7BoAYE5sFgrBGXdDcbjiyPvasu1ED6yz23Y22sycDCEp",
  "key20": "2mAx3ALXbmdQjY2oDhGpNQMkzV7X9sUR8FhHy2U7Ey5AZcEN3GCbAYJmDKKprjRwqUk6wbZ1KobZfQ3LXVGjow1h",
  "key21": "7M2aRxTWmGDyA9nawmL6rrYPjHJKFvza5juxhM2P96DJhwUPPWJ8uqoHHQmk2CP42WrxAFfTkgWWKK6kjEyAtS3",
  "key22": "2XiL3abk6FutkxHbbDQ7iSJZcwactqGYVQVHGtU7H2c8xRLa782AnAkuCHqnYNFmUuH2ToApmrfWCEXdM834QCZs",
  "key23": "42HD5yAB3pqPwTDadsWKADePRneGG2BsKXznc7ky5sj2LXwXbV7bKyJ1rfYtrsVdT3iLiBgdKLSzxySL26quCHhm",
  "key24": "4b3zF6WN6uTmzSvMQfjhHW1gXhDto1pQkSTQJjygZmHYjx5DPBbYCJ1CpGY1k7eJ6j62FsURYRpEWcHJVNQtWctf",
  "key25": "2aeUkE4PCSnn5RfuyF18i3LfFV4HHkPA7ZxKtfPS34buBaKammnBVSJwRQfc5jbeXtgmbW5Q6e3EdXRyLryziQJe",
  "key26": "2nbnJBGiMWTng6AkfBLuheW57RW8LUu4qt5ydd89AFfLqHw6WG5ehtJEDwSZPLybusANR5qEdxADfNgrUqRS8Muw",
  "key27": "5t9L9thckR2e1EH3s2AVotkZnXJ24xgvnMRzWhuKeHLpfTkYedTZ8k6862cqJHftJnRDdTJrnL42vjBe4ug3amnW",
  "key28": "uxo2ikYTrkTK9eKNvGgs7CHga3KMFbYFpKjp4FY9yTuQ3JYxyABEhjfbBqDRvEDetXpv7SvqYJYXvpE3vWurTgN",
  "key29": "4mrcB84ent1CyqggaFykb3bW46zTLCfD5vJBCBk29UBW7zD1FMUDrAZbNFdoxH5t4T9bebehzs1tRWGhKJUm8EhF",
  "key30": "5bUEQRRV2XMXghWReXerJX71Mj6kP7GBCJGrjn3TYkwNucAjdqdrMs8ewYgjx4rLeHzGL1qusrKSjN73RdrEtAbf",
  "key31": "5G9jUDCBQUTrbMtbuQgWWuUzAos3vJa9HqP3ZX8PP2C6nSFEEowbmDnqxe2w7xPWYC9HrZ3JFcGZSTqxNgdFzbs7",
  "key32": "5cNgT6HkKUvnErY3F7NfM25TBBYDLcUQXfbGxL4nGVfPYicGpzeqauoqwgpjzs6Lg2g7s9izHbAEaCUhwjDPQSMH",
  "key33": "3mS44BEFKsZArQ6d9NVQ3nVqvnzWAW9r57w8naKh9wWgSWfufBNwqNQzLfu1bC9oqgBwDai5rpZzsY7FhCa8dZuk",
  "key34": "2FVts3oSwZtoV6ctNq3RzN5U55pDZcyJGnYb6TaYzFLMCPTj33Nq7b4FPEBA6EgDdoQxCFL4F1P66DeVb98rxFui",
  "key35": "3e3r5fZ2353ZH2qwWxwpQLrBjxxyyAr6QBnFJ55kx1qrcmjsHFUA7tXVr9o61G71Qj8pkvhZyZAWTUNWvtgft99n",
  "key36": "4G4seRaSbDvYcAZ29Hfr4rfBHpE462x4G7V3wZ8cgLGE3WTx83pJqg8yHDMYUQkpCQnAAjGdUgv4qrZd4tcoPaS9",
  "key37": "2H8sFymq6TVvnyxpRnUkfRD8o9mFv9A2VaxywoFucU5udZxiRUUaHtY4gd13S4uzauyoza7qQiyKbSa4mduYA5tC",
  "key38": "3Mwy4QhqfThNEjWWwoyL6pqnQYfwVYWPkZrVCt4evqTapGKE5R3ST4G2MtJXcP4JQTA5bFsca9DQhqEJprTabb7n",
  "key39": "5XPnSNTB1xvggv5MDty1tKPSTDTgEf8sujWu23JukrseZjBMeXfp8hoHpBUaeDCmWgrPRnQLR5DJFUvjFNa8NP3j",
  "key40": "FJPrNq9iYP1ykMNoL7HbmbkyAi1QFSqmnHctSfPwQ81dHCcd8M8kSptwabAXrHpHnjSyf68q7pCLpe3JXkBNPpq"
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
