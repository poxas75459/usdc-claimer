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
    "2SgstxwTTDvLCuAcj4XFkP7Matw7rmUDdj73U4BwTGHzVJrNpHDVKu52HZmbNB6Uv5YSHQ3KhGZdsnAWAM9iPfNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NBSw9vie6ojq1QjK5wUF4L6GPrY3XdWkyuvm3kwHKyPidupReMyv1NeEBv4eiuXqqHyJVCxjhHD11QpawG7CbQA",
  "key1": "62gmWxcqKDPYvYfU2GvMDTsy9oMGu28dPgUXdcfPCt4NidJQrQMZJUAoWPLxLmGtAJgi78js7YZfKgJxaX23EZm1",
  "key2": "5aenZ2FL9yaXmXdc1HpkxRWDpKKeQNiyiMhknAoyWyzrPaKvt2DZSW5GjWfnYjDHqArX8dX8s1U3h52ADBLDyJmw",
  "key3": "4v8AebDD4y3v8KYJF1QQw8yQv8HaXXgjEMyfmnZMDrUQut3YXxTR6x8vCTViAeRJgBrBvGyeA1d7kt8axqw8R2W3",
  "key4": "2oj9HtbQQrgnmBgvVvrLBZXkNYRmUw6bXDSdNF5XY7dyAxXLW7rw4ejiowSGDUu5t8Ud2C9kShMJ5gSAvZzVYdpY",
  "key5": "LsxmbWrjFqd19awktrbUopqrFCE36CFvyzTJn1W4dCjMTat4GLHM2VLvirjtpCr8Uk6ZUxw5sFTTPUDpueuHc4W",
  "key6": "2ashzFwqQaV8J4gHioaqjyMgKoiSaeEm4i2yCkbdwoqSfzPLMpqBuQPRbBVV4gACrwcdyEmxS5wuFzMaxJppzXiE",
  "key7": "QTbqCRvUbBnTyK2o7NCSL3BgRyEKXchrL4Bm4MxyaSD3KAVGGBo2XBM6MrS9ybwhuxxYwKFSFPuoXN6kWZNogR1",
  "key8": "nsNFWpqq8jfW3DF5tcs6XXL7P1kmDvN6WcVJ5Sc6ft4tpTvaj6ueHEpw6BjrhaNmBV9zr4tdNDrdCzs75u2E4cQ",
  "key9": "M5ztW5U2iZbbELkmNcmggjHFuVZjyj4qM3Hhgq89vTiHD6YFGVd15db1K1pm5V23qionZU58o9RAPvd1a6dXwVJ",
  "key10": "6NSAS96uWAMpZ65cvkorFLW8XdXbgrmCXFRXHMuYuA9gTcCUmr71v54Fr2kJNt8dSdgQtJHmAGPdRvY7eokYopQ",
  "key11": "3bgsU976oYgAvQk64BDSk2X8TwMZMKtQnCFAWXtA6KdfCa8E1B1VZZFcXsLY8U4KigPTfE8LjvoWwxbKuRaYi4az",
  "key12": "52GbdvR3wmFfhLpVZRJDuhM2hRRADK6Pg4WgthnGDVGwnShmTGk9iTfeSiuK8jRAkK54kGWDmRyHS4fczoCyno37",
  "key13": "7M2qVAmzTZX7xC55cnujZraQjt9ZYvg8rYFX3hgUKraJgh2kDkaGxQwcR4Nd9mtEC2hX22gUZJTAbQdMUbimRAa",
  "key14": "3yN4w2tzypudM21Uoqrpjgt1Z71zz1EogXdZAAHBiQu3QUvhBdtjFXzgrspGecLWidJHzmGPGgfDKNPqCoKSLkh",
  "key15": "3NV1J8nvpmpye5HoXYXQ2w9qt55ajioJAUx8HQ22E6AEF6ZsiESxBH5GUkGJTR6H2KaCVaK11safTuRPbdBLntSK",
  "key16": "3mzM4x9po4azDL1R9fYFqE2vhxHJGgZxukKJnMZWLAxjhCqfXCK9c9wihdg4R885iuEA5PVU9H5kKn9NscCUiMYY",
  "key17": "2ihcH6eQ9g9Xt2dzoJ7UGoc42ucEQHMF646gWFrjeZhPPBrEUe2GigEUNJdRHWY8a8nzx9VzTtXsozSyxbuwgvKP",
  "key18": "3q4Pu1JCaH4PptRRvbfssrsWZHKmVXePGWTk5cFgPz1L7ctgr872fhuCcXyPQVmhmnBzp8zPm15Qn8CnCmi1m3Eb",
  "key19": "5CiGG9Et3NRd9qnbxcMskfQ13EJeKLvdVD1rYyLk7CNdgEy975jvY52vwqNEKBEDKXGyKQkn3xZYRJKNpys2dVpu",
  "key20": "4dpF9vQ8kpka97YNjpBjUQhuRnEaS3gdXq8wb5dE35DNrJQZXbVC7bn46i6DZwKr2ZCBzngNNTdiAExadzeVzENr",
  "key21": "ewYSDVWdxr1GyqU5Ldv33eHnNwcEzvFj7EKp5wPni6RvYGZbHUxWw3ixTkMCifPMCHA6Ga4HCmHNvAk2Mi631No",
  "key22": "2BTi3LHW2ovwzmKKjYyXDEB7KXb3hbLz76c6A2hvEVHmR751m5QfWpJXwZD4Xcw9z62rEBkdCgiS7PoVkPQ5PPgj",
  "key23": "3EsdAVaAf9Hwqsrfdz9ZGXF5QuQ2xNmaPKqr6mFovAwKLVWN4CqHQyPxD1MFNFLuraKTsg8yKHvCdcnj7Uh48sHN",
  "key24": "5J3qbXVVzBBtAeYe8G5UYCzTeBczgpLEs2TXzfcyEhvJ7euEfD26GPbgP9k3LLAiBRRuUQyef5fKGA5z1EYGJkxw",
  "key25": "2eSfrZ6VhfK41WaUXKDTfVSUkskTXg6ubP6Hw4JhUsRe2YcyDnN6FsxCYu2frdquAqghABpqB57PGVmrEA6U7aoF",
  "key26": "2PZhtTZTfPuaHFZhxuUoqoRMbzW14Q5jPPHeQct8rp71wrchE1F2nZ4NUsUf48kZxvyrjmVDxA9e2jyqbyt1e7kv",
  "key27": "3n9YbHVycJtB7aN8caUnakq7unnawfNAgUR22zaHR5mEGRJL8Y8pP7b79JhvJBfd3YuCTjptfJFJN8zQru6VbEJ6",
  "key28": "3oStfEmo7JbLFpf583QvD73tSABuXG2TE9ouaX5R8WrswuxWwrYrctMvvLRrXLVk7ZyB4xuensQYoRS948Y6WtiG",
  "key29": "53pYqUb9eiHU5PjKxwM9eY6LMYS5Kjr5PBXc7emVAqy5VzWFFHxqYEma45MbFqnSFp2pEGKH5xxs8cqCpZLKJjRP",
  "key30": "32FcUso9feLRwZh6QLCYeoBRAfYNt9Edb7iXH6j3UVLZUi1JEWhBm51APVwV9sx3V2PVLF2R55hUmiDXXHYZyr68",
  "key31": "4FkSDFqpYjjY5pmeJY6pUb6h7BWWeyH8fHRZiEURf71q5mDSRk2J1AVLoA57e1h2o2NNn6S1kggCnmSekwnEuqPC",
  "key32": "3NJe68ghD7k4mffJTmaHwtsAtHm5XMqDyPMtbeYu5BctgzdDZHH78fc4c8a7EJSYJgJNza6Rhn6p57FCiSWiGYP6",
  "key33": "3ewgWuwGRRejr5WDZHjmusFLzbdrmVmyQrX18RiZwfBmnDGKQe88aZYYFzCAu3VUPQDVgGS52iomRQQrRauK87Sy",
  "key34": "4BPJexdgBo2i36ydmxJvBj7VTrsQZHhvmxLPkxS6fJvzeJMNS5HhaTMYNuwrRfYRCwDaP1Hd4JQ7bsyacUoNJ33X",
  "key35": "2BJ4HacT5xQagnM4M8bErq5A3rLiuhG5izeapoHxNJpe8o36NfLj3pNHhXVVJmgeqmdb3nqCwvYByQ5UKBL9AdQ8",
  "key36": "2n4UFL6sdubgtE9bXouotEfJMKfMfENEAVLAFYT13KoKvuKxTWrjzu3hi97sVRox1JsoY2Z88nCUv5X7MKjeBJNn",
  "key37": "5w8juCZPDx4qysQQkBe1jj61c1UJeQosUF1LcB9SvWYx3ez6ukcuxAJ2KNmByqqLHYZyt7TSJkupRckCgZwB5CDH",
  "key38": "5AUhNMVpghDNCb3tyfZs5L1Libt4UvFgjZoJGaKCTY6cSFdmRsDU8AMXNAXP1tocfT4wYZXJ8E7saTYwBE6yZyDj",
  "key39": "22BS8kosxLPEwxBkWp17nkdAsGKHy8JF2o6woVnDmCc6iqLbpNcgbZbkxpwoPtt2jn6GzpooGMsE2aHQu8QAViBy",
  "key40": "46QPxGu574FmLdKdCF4i9JSMrZefsoJfZ5Vazny9c9LfhwcHRsJZr1guwEhBXU9v6TBxa1pbwK5N5R4n3b15ND7d",
  "key41": "cmezT9RpNPHUZNYVsnVEgcvMY5oCP5bHhgZcAjSKptP3RgJbT4oyQpkkoYff9vYDYpq96Np4UgLieEor9GJiLB3"
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
