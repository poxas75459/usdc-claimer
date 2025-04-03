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
    "2NH2AiZyLMr92Rosgg2PwEHB17u9bLQ3GaBayU9XBgdnrXQ2xbvY9tQJgHXEnrqXEYpZLjabc1fjHhZ1VrZ13Mtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29UcaUUdKisKi33uktUWeKKrw6QYDNcKsdkVHU7FtmJu7aEpFpbbKSJ8LuEuuVJGcVozv3UWAtSzcZwhkFbDWZaf",
  "key1": "2Wg1okQJ9o9hAqYWBMVMJVAa2sDpVFW3r6cXHXq6qyrJtByyhQBApSnD3hz779feQyd8TMeiWgbqyZ2jGcc9Dvwj",
  "key2": "64XhkXWBHBJKPqhLGvkxtkvdpdcv1Qb6m5WC6tNDKCcFEt3V8RLt4MLitga9LCBRqwfK9NQNCnW3nVa1Jskn4XSX",
  "key3": "2iA2NGs1SrbhC23CTGGHKApvtUuwumgAvNUy7gS6k3bkJ7S9rCWAF2dJ8fNZZD9KDkwuuTXb6eExGvkgLPD5xDXG",
  "key4": "4MLE9KuenCAitVAAw2SN5exNT7RzW7a3Esomu5YgxVFaLKDWbTh4pfgqNJpYY6ZNpqYDpxwoEqXzkBSrU4PW72tw",
  "key5": "aeALD9DnfgBL1Uu4Q2zLjpujpBruTqWyaDAc5A6DfoswT9pjncWbiuK69E66MrMHPWdfq67aKQDhfxFdsMTxfpN",
  "key6": "31uqauSdCEb4ASFFELntfLbqix8hQVBHq5h3JNtWtMm5P6hQG5HoTTLxkM62xuxzm9yxRA5hdpGqq9inKrRztWmi",
  "key7": "DkgCiCkkjZeijNd497frzGxBcVmWirahS7aKLZAgujdjvMjhhK4NP2QBApdhp6oWZmNXZB5sQGbUkR1PHQ5k9q8",
  "key8": "5SJbQK8uxzVrco3RTLDKQVqDshdBQFxE1e5M1bpQJngXz32jyaH4NorDWoBPnbshSGCXsjnSqNu2EYoTxcatwZVF",
  "key9": "oFFJo6NotuT3jDpfaCTQMEKvkoaHceXpbbGw5gz9DjmUFSRoKT5CPDSpqUoBa1dfAdazm9Mbv6nxu7EvzZq4FsN",
  "key10": "4ZdFtf3BvAZcf8C2rutN5x1mA1hXWg4Ak9mUH7HqqU1K9mNH9LMMdod3ACV6LtygoASxcHCpFpng7vWz3dFGjJYr",
  "key11": "ehAF5yr4jBuZeAyieGv2DiM1Hnuf6CqnVzF7dPFzRgSXmZGj1GStjZ3rACFboacqToWV7MyNX3MHjuYbzq1sQiU",
  "key12": "64r7WK1yHfprR2my6hneGzbmMbCHs1f48foGzJKEZQkftLi1qAu1yuK1xtfK3a8vtT5c8sJApuUfmRqVWrmWT4zV",
  "key13": "3tRm78aqgDUbFrxdhoiedHsoERFkvoDHn19ocFVnF5U7evuutjgdq2cWQBWKjPbHS5W4ByCXu4cfvgiN1u1Wojy4",
  "key14": "xFDrAf71Us7VyrCTXc12GxG6t2R8Q1qWVKsWD7SwWEP9ESwnNWq6wtFFWLGiohRMwn6RXS1nmyfuLoM7pj25SCh",
  "key15": "5LsGneA3xt4erBYiTzvrHrZWPp49NVakcBkmmwimNoXAc8u3ACJHWGiCTayRjSAUSppbUewodvwotpS7iBdtyUUV",
  "key16": "i4wUu4VvaWMS779mrNBxgdiAUPCMyc3vrCSEdeMLFQGBrogHyoAvKfdQ5giSCrzyy4sBcZKazv5FUfsrMqbCwwE",
  "key17": "2GZ8BocTTezvx4NAuZo9S7CdPdU361ikwibtjS487QD1aAQoyiUGnKuJPwGMiEREzx3VgVzfcMTNz5rda8U3j1km",
  "key18": "2bJs6CpERe7yRNBhjwEHMfwKLUZmTF6yfkQCY6WcsxxmqpGTgfoMenrC6m5yG7hcDXh4SuPcxfGeSDqkqrqL4DGL",
  "key19": "2vJU6Yw1zfpxhj1WUDaSs6X8mFmq5HxG1hVQ8KAe5bdrZHcnpQLuzVwtshME9pRSqJoZk55m6WBMHvoBFWg5Snaa",
  "key20": "2xZeUrm5GEtg3S2hytLPoJBFwoyG18qu5KM6ej1Awoi42VcjmKvyWsFniAyx9ZWHUrsVPk5YSZbrRnV3q2S3bYc9",
  "key21": "3p2Qu4m9c5LMNWu761vERQ2PKrNKbfHTMUTMqqZsgGAeA1cMRemUSSi5jZw2tNzh8KzF45uaRpTy5MAvzNA7AKDq",
  "key22": "4swaLBqf7Z9H5Vu1SFRAbQe9LVXWi2x3yp9pBZUmhFQGf21x3gwjg3xbDrfs4mcgDpM4UWoKJDtBATFHKdJYs8Mo",
  "key23": "4WapJhunuGMjSUG9ftcdyVn5LvgPsX8ADnJT13LuP7fo3xUKzeDvBKsgNvohJHtEv8iZCQg3wr8cbTbssFNxTDLV",
  "key24": "kQxYqTy1KWkXsV4oJmh5ZMUR4ud5Rsy1ZH56NbeRwhsmuKv1bAdrm1AZqDKjMGEoqLwVBatBQna4Bd4Q9MY1b9Z",
  "key25": "48b1Cka6bjyKc27FCvXqt1yF2FKmNwL51EASs7botfhRwFFB75mjRbbidDeUr3Q6J7vq9NaaFpt3UMkXU1CgdUMa",
  "key26": "59T9kTj3xGnpfqUGFHqefRf9USU9e3N5HqjuDuk8iugjBK9rEoDuQ2PXYpaySmaJRoPZY4nvTnHnk2ZGU62xi6Ga",
  "key27": "5Q1twegXem97tB3CLwfs1busW6FsCPo4MxXXa7hkTgcydFoyMpcJj541Vnf5MprKzsb7cu21nYSjsEbD5vQfZhNw",
  "key28": "48LtZn7vPKu6s4ir1aQvWVuL2Qpxt417gYyZu71pG9eMnvfr5Ykkd9sVxHHeGFxtRqHCsS4yzNUtKdNFgT4VoWSH"
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
