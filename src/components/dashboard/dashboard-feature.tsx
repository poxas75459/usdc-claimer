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
    "4ojaJea12YhepHZQryG1N6j4M24jeH3QKPLNT9kxo8SE6qCTGZhW9cmpWmt3RLWJQMz6qPSurnAZthVfT5889boB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38GoJK2YhUAA9cvWBYMo5QixE6ZyuPao6pyJCvxyAeGVhWo9yKUe8bWEWEaE33t1aihvSiSQEJvt1kpKvbq8CiSX",
  "key1": "3W67KbJnHuPqT8jaBiyJm7aBmMGa9pCPxaycvcKpdbYAihVJDC3cQdo6ycRAbDrSzvNXaCGn8HiZCtLAL4pwL9L1",
  "key2": "2PnoWS99i1EprrdnBCVX8GRQfzXoZPfUr542KRtRAxzFJaPTcFYK1pn3LfHReyJyf2FKXNHN6YiHz9uYxGJS8qfe",
  "key3": "ZzFhi2aPjbP2yJzd8BNv2SrnUL8kHvzvzu7XVQimBNyVmswKw8GvuYGxyRsiLYj44zKVtns5RihsrvFaPXEhSyv",
  "key4": "3PstUgENsAbtxQNJGK79vebyaCasqz4FMRL8mCtdrbnLcsKAqGMmqNixUAQ9ZKiT6gFivQqWJMLGjgu1pEAZNxps",
  "key5": "4qV2ZcWxQ5K4rZqBvV1xGvhcdKCvdCkquMR5Sm4Huyz3B6tQW56AhoDELYHnGnbSwg3SiwPwZNrFbaa9eJCr66bw",
  "key6": "4SVD7JSmRmRZo3JjzAWsQjYz7SvudmEaaqVGRFJxFUxZVT2PmaDjS2cCGbWub9S23hxp4MM8ZhCN7zhM2JmEBLWH",
  "key7": "yCKM43wsR2LD8tyvMJjBpGhNvRkRQzJNwry2FrWHLdu6qtfFD823VyVfVqA9UxWr4HpbAfqrTwjJjCSkZG9zM6Q",
  "key8": "3iAg6ara8SPLPSJxei35uviY1mqQXqKnXLXuTcze67if5T5MLGhuj1aCnXRTYu1cKGHHoqDkfMhcNeVbNJkYCLj8",
  "key9": "4f5KbULsNQQ8J6Ti6Ee2mo6oLK3dp5TrcJU4shwTPDonzDz6xje1E6kiZsevwQcHm8hR93YGdZYbsY4fEpKQo7FB",
  "key10": "3Bak3Ve5boQRHSaPHAddwqEbKBuWtc37MExAWCT8oG5qP4Ut3wtBmgu6auNqGTYStRoD8PFs6Z5ydocBdifyB5Rb",
  "key11": "2iyWyxrDgs15j5D2uPcb3BdTGkAcAfixisZ9MqfNRbVEPTK7erzuQCszcK8f7SSMtHkL8Ca6dXBRnbioeaZJ7mrZ",
  "key12": "3776ZvmWkzmmWZW6Y8QXDFcZc94zt8eA7HYYV5QF4cBK4appE6BwRuE4PhjQkMgNC3v8PXMSDpZ6mg3NMXXR9rjR",
  "key13": "5EExHYnYmBzr4aJMP1ExUepN3pjPSV4aTvxxz7L32xXFmFE5RThWbfcaaDeiRPGFZacu42fzy9tzFmnjUcut6JWL",
  "key14": "2Zj1CnacicD8aoBTaxLMDK7ABkbzYKmDRFWEfunv7cWHjT3Y46ndUUeLPjzCpxpoekfbNEPwwdNgu817NDdb6LUm",
  "key15": "PRASu7MLzrHCWANL6Wyu8xfnQ1GDXo8Vug5wJfiai61deVd2aXDZGJY3xfsN971TMQ9L1RQCnbKr1uD3phf5fww",
  "key16": "4neC27M7zpHNXGDFj1ytJYjeRmMZMLX2DWVxNnsAFA5u32C4PrAuQE4gYk9wmiCatJGE8ibr564qXkZafGXrbUyj",
  "key17": "5SW6rMJgQEitCVCGu7kJBP6waf2G7DKZY2CuVxN271NRyBfCCatQhYT624BoMjx98GGJocH3BkJhAsPug57RfeA8",
  "key18": "3fTfoDJhJdoKfTB67Tfs5Cjrn4VENiji57ChsWNFEowmck1umpma7zyzqGLmqKfepuynZ9xDvob7SzCeE5oXuzDr",
  "key19": "2yTxu3UVJdvx8ndH8cyYkcDReAXEyMnLPpR1LVpjUZ3Wajf4RJDb2G7cdCVXgScrS7Vtv3PotWXhuzrusggUktL2",
  "key20": "36G2eehsNde3hz4zMEAZduc4EnK37uCxfMT2XmcA4iW6VL19Sm1YFvL117oRaEUBQZGD6AKiWu3qSamEaJxWn1kQ",
  "key21": "3FEB2NGRkiSwfkrmPbJzXwqMzbSpBgJ1kB6FRc2VMM1pY9jVDdsJ74tkoWMgLA7KqKFuR7s6j15t6n42SRYe2e2w",
  "key22": "4U6nC4PUdgdcQTe568bjHJhS9RmgexSGXDb12mvSR9mcHG9B2GDz3wDNowdvwDvss5NE1HtRKA7yjEfFj91Z34MA",
  "key23": "2u4W2kpM5y3tsYobzpzArDgDfxf8cJwewcddwTcauKZScqUTMC4gecx5aLrAkMDFvBxb73KvjhfdSafnpS2DDs9c",
  "key24": "41D7Lh8YNSaUoFdzW6feJgmjyoj716jcp2Fof4PNFNCKaHsgA92LffmVJHyyZJdo7tucsL3JB8njygXFqH8yiEE7",
  "key25": "5rMzmJS3edqEVU5BdHkQhHs65phKoJcrUGC5yA1E7z4dazq6QYzd84bUmtNimJbm73A1YaEFKqn2EBMTCa9Wcatg",
  "key26": "2kzQ1xuLv8A94GCaMJp3GGnSTi4UttZMPwDrUhaLwg4qhoue9DJhTRMnXpVtsczo86nPCHF9Jv7kKMNCustHqaxJ",
  "key27": "2rVT25yphb7mZEaHsa8LgNh9ig3QGnQocz2RZewem7b56GD1svkx1B3mnJJVSsyX74esjUN93quuxQeCVb7gpBCH",
  "key28": "3VZNkgZNN94yjvrcYFz8xhnBExbKf7fJ3XRp6feZQ1JKFEPvhAifFzFKhKKm9sHYX2z9DuhSQDFiBYZhuLWjYc3U",
  "key29": "4svzFrc5Zvtn4iXP6weWXb6NffGTHsUbsKQZdr1GMoV53Zz4wGNDTbLzjdJaE5MxahEuXEDH3FbUjLMZMMtTZBtF",
  "key30": "56fJAiDzSikErzaErprU8DaPyqnqdg3e3uBgKr7d8p1KmiSZAAArkpERHbt7jiDgV5nRPxoUdgcovkxjWfrDLXG6",
  "key31": "4xgRQSPZnDpjyN4j431fM7wJ9JYwHCf9FyEDtFvQyUGa7MLxJ38wSxvwykk5LR859YNFAMm3zoF9jiREiC4BKmgZ",
  "key32": "ru27rBDybnRv4eVb62Zqgf8Kw22GyJGgXy8A86PF3ovqbHx4ytqow77qsU6Skgx4LecpHUou2Yc6QCqRiREYiXy",
  "key33": "4RzZA1ZCBEWCj8kEcFmGS3xKWyDHN94XRE52c5zjLtkWr5F9vd8Hg5ZyZ3Xd1JVNuWpi7EwDJLYXs4EYM5oApZMu"
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
