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
    "BaoewH86vGLhM7GzcACWnKovEFRTq2wPEtzpEado2YMxqHttqWGtQ9SXfaB8TmmphUPz14eChReB9UCxkCRtdhP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZzYRkJjBuL2CgfY9CXxwzxGA1ujfrjw1LnX4gHwF88HbsHJ4tLBD8CSpgT6Z4uChQTUgPT6vynW77Chd6PLohtj",
  "key1": "M6E6eExnjNgumPQRGZdg1xGtNiq48ZPr61CL4UFxFhwndsALXb4SywFHShQAHL9T78jNXoMa6y9L2EvGj8d1FMW",
  "key2": "5UP3ug7CvLTo6WK3xMK4r6EysKajiV9R7ch2cgH2PSgiu6ANu2cxbRCB2n8kFV62zahkUHMdeqkfk7T8fcNB7mXm",
  "key3": "cQnS1DW41raNet9JJmHyR7K1o6V6BcmP9CaT5qjBj3om8ZTsmDTTejwftwsLh6WKe32gNrAt6QxnxJR8uyYFZxQ",
  "key4": "5agQfGBs1BkmGFNAREvU7vwkNNCGXBkgHWLnGkaSn5eh3oja1ES3Hf1U6wPi5sZrzFBa8je8vVS7wjERveJjiqnc",
  "key5": "3T1oumGa68tVDWW79eiXLJ8NMfxFrcaxQQt5HD88zC4McByJRgA79prJ571mnjBSyoz5wr3Qp2cnHSjvc1LS3LDC",
  "key6": "4a87DEUZSkmkqyVjdSsUVAR4Sm1CqAnZDhoZpYG7jSYnp6W5mHRWwTQNyxtChgYQHqMTp9oGgBuSuL4dxuwdykG1",
  "key7": "2o8yyYkJGRSaT32eJca6LaqMj55je1NQRmFsZho3rhGiWqRZTrDzuEmpTB3bRT4zr89tLnydE81FSup3inxH6rAF",
  "key8": "4GNwb4NCLH9os14xt9F9CeSdtMxouB2LqLrcZ1YXpAAq7GuKfbBxmJjWaBh3RUUx1XvC2a1FTUH5VAPc8KzQbujQ",
  "key9": "4djsAGwd2HycZBssXKmyhoeMA6AZjNmKAksd72G1aFinsaVcRgq3MSCeXFcJiaABD85kjWQj8kuEModWT2sVBnRD",
  "key10": "3PJQnn1qmSRaWPztPo3Bvjx82xtDmGspJDVdmCkwmJYkacMzpJtpppFPmQ9CaqRfobNYYW6mBVqwgu7p6U8AcWwb",
  "key11": "52CoQsNbssy5mYsZx6o1tBX28dtr6bWmv9wc13FRSLzHDfb6n7Ca3snz8Zfv47LvhwAWsgHKvDwCxKYE74noE3yb",
  "key12": "496GoRjhFSYEirYCdFqgvYY3wCXHfmvYRdQSKvQSa7cdJvyFuCr1GwW7zmckKH4s3vQwdRU4YEdE6cEGD8nh8qE5",
  "key13": "3V9N47MHPRH8zbgpsmxhga4Rxi1oYREvma8Cq3uioN1q1HHMLmn3isxHaPbmHzrt8dk5KG1Dvhost7tfeefdcdzt",
  "key14": "5KjubnYPh9jtWXhgcPW8vzRKZoK27AYGiswudtYfNLQTfFePcaLctPXQBF6hxWxQJDLDyYHbfSJaoZSEuy3RQ8wd",
  "key15": "3UL5hoJ9V2yhCeHYNbjnnjJw5kZgfWx9YhK3MW4MgruFyMPdp5gUtmxy52qLzCcoyrs4VM6ZSwwpNRGp9xwjuxAC",
  "key16": "5yepN8MpxokUjypYBHfjQHjHgWoVi2S2MZnmopyG6mZ5X87eLMmkaQfg1K3JYAs8ezT2smx6a8gP92Cu1N2reaUX",
  "key17": "5VFGAVwb2Hsx82XZweWFGu1xbkRVWfhPSRqUb8MFx8fZdpFFUc7rYB16p9H3NaQ7oaYXDcCyXBv6BXUpGgSJiVBu",
  "key18": "goVTuaJJVJcLQE4297Da6DCvVf9Y5skqtYdqgo8LCqUQTv6efGm3pPBKYYg5cAntwMMGt1qK3HtAh33GviJbEYj",
  "key19": "2L57v5vrS9CbgnbKd5Mx3z22kQXc24n67pPLifUYJj2GCEHqzvd49ntLd9em8PysZvdx6MXUqMTKTtaurxniMXBs",
  "key20": "2pMvBShuxogLmXhZXEbA7FghjbQtJCtwA43bxRvqy6XVzbwZcfSFfKrpsR6edQBwHVZQVc8Mfm2Aa5iK4Jvkxq7q",
  "key21": "4F5KM5K9HEc3dJhiKLQEg6E8uz5iFUD3EoSbSzZMbYNic6Kv5VALMBPJo7qihe375MhDNvZPCV9MWUqkJBEonch3",
  "key22": "41LXUaNh9Waip9feEXE6sjHYFyhmR4WhFiw8svpyta9Ka93ZbxwNoZmxHppDMRVQynQCu4kD6y2PwJXcvwR9w7Ab",
  "key23": "2nELP5HvnwhDaxQ9uHajtbAFyZFaVMkiXf3w6yYy7WL2hnh26Yj5Sbo1yenoYsS6sGSm8Zvx6hoUu5kXfpBeZE1i",
  "key24": "3kPXmr8tPknYSL5YJ9B2khxoprbKagYphp4anUbqqeRNNuXbv3PA2NzdtaTXHsaZstT66x11A9TTfBWwGQ4nZhJG",
  "key25": "4362BidZZJffLNiiFh97yZHespUSdE6ecZVLYzHtRUj6PMe11audd7ZJaWMnp66FZCRd8WykMF6JtY6TMHCj2GQm",
  "key26": "2UkfowoEdaDn9zSGfNisgVTEKJHfbcRaKwFSQLY3vPcpQFr75iR1ZGuJjsSqa95n4pNL6etmZe24BJGdo2SUjv8u",
  "key27": "2ru9Mxdr8xfwekJHvH5fC8fCRSzvx3WVChP2dAXT5Ucz2jx8RYeKck2s8CokmNqyFmHTF2iE1T1E2zpkvw4ACB96",
  "key28": "2jTFhtaaDtJUkmo6mqSFEpVw6ict7ohwTTvdkyFTFbiSxEZpoAWsyi76rJ2TqZ9jTQj9vXgrkzrhEnaJAD7rosp7",
  "key29": "2SbKu4JVMFHf8yb51BQ85bxWKXizhCjSaYe9Ne82q8dMeGbjysjADvQQkG1cpSa6oNDV65qV2U5aejsemCzQzZfg",
  "key30": "27eDete6dsSyYTTQ1AzKGGJDZ64Fcpdkg97BvQtWGcTEuUKZt5Xe9kHEy4ktaTy6ndEmyEvmBLsVBqiQRQA4AJza",
  "key31": "4bpBLEiy5PoUAUrtLy3SKdTtELX8nv17CN7ZXkjmKmPYSizhcYBw1TxwRqZt6UDVmprAWeZZ1JrFedGv6Ftawn7p",
  "key32": "Viqx7jViNJag3FF2sayeWX4Tg9eWfzFQ4WWusiFU6YN1YPE4CZ7VUApX95vMRwtQaHugufc3ANqL1jAHTvbPeoo",
  "key33": "HEyzEJTfhw6KocsX1MDeKp6Eyb5GQy28s7xMpF3yd8Bwnq9LJWukZMjxF5DGdXuYw2Lv7TLBF4d6GYByPxSxqRe",
  "key34": "4jTqLEa8fvFoMsUBmH5p2h8Gk69xu91qrok7PLhmdg6H2iiPuKWjVAmm16d68or9XXodhkc7LRtcfwDm1FwRoraf",
  "key35": "2oG5uR8SGFut6qE3xqmwdF9beLJJ7RDnDtYGEMMpm8dgMQUu7kDourFJGMhakixq4oLz8HCKBzNEnJKAaWFhQzWG",
  "key36": "5GiL7dM5e9gGc1wpFf8baKzSuA56oXoZuyEizmgUse9U84hFR4XTATqeno1H9x4m9B2uuLfCm4LqTu6SQmKZyq28"
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
