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
    "3zcnvgv9L8KE4j5H4Gq4zAEXrSpMmDm2xgADpFRhdwVysgariLK3tBsuBsrKSnb1M3ZdYsqcc3UP51EQK22f1XfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rVM7j1La9gCDhKieBo5t6sAxvh6YxyA8Q3n5ynAcdfCLAcSpct9xLViTk1SjneWVATP7ZZJdiEjpizUzcmVGufP",
  "key1": "5PjLP5kW4YDSpPu1KzUpGZPY3u3PWozTXjsoaruuzDJkrJnNdJmtJMfqY2z6xaGCHKCEqXcsfdhRbJYQZcM4NmCC",
  "key2": "Ays7h5vHL3epVWLmwPUuDoT9SjDN5kQHsExnP67RALvuswuJ6Wrir5BFhbhjew44KRmDDz2hzfUmKw4GGwG6uUi",
  "key3": "f4xSXgr7St6dzKGSJbMF6zUUbnypQbVB9NzCjZxypDEeQm8WGn1aFHkwGS3Z9TNkUXJ3Yka1HYeCpwkbMh22Ypo",
  "key4": "224HScwbi6ui9ZdBV6ZVekEhsmu6uZQzCL87rBV2nAcYzKwcujtZUjjAPq94mqtgMsXGzmcXLyP4EeiSoSiA2dEP",
  "key5": "4YymXFFR81hY8QoA7tT8oXFkvFQoKayA3gdgfV5nkiMgnwgv2GWaTmJaMhnuY6Fm4JMY9JDcME6x6zwtzrwqZvNL",
  "key6": "66SPuWtRtJxMDqQsum3eobKsPHobqN89ojrWAu9LJzFr8sGjcH9Yd3F7SCStBhuZNkkV1aMaf75ztR98YBXKwm8q",
  "key7": "3qzMdLQNQtTQzgW4M6c6vBZcgFahE61giRc4S4qBiZ3aeKuN6K97FaAdAzz9suTF7akTbGPWSdkACN8Litx2QeKH",
  "key8": "5nFDjXBsYqFL2YfUijKFNvSHtPgVCCjJS7Ysa8d9kk35f9PZDRkGfNHRTjCLmyxvstiGVpW96uxULQnAXT8yqLJ9",
  "key9": "2UjjyEqH5LE1r7vyghVdBuqw1EZ6QmZGeZhLSAhFEG43eMtNuAgjiStjUHmRdw9NRAcSa36Wy4WukozHTJaowuTQ",
  "key10": "2sqPXg2WydaNQYjidkfo6DJzoX5stDopHRik7cE5seoiRihKFD59jzd6y8mU5ikjYGw7c5uSE4aXL1RV7E5Gs7gE",
  "key11": "3Gr4JUuziP9CXpZBuZerBe7MfTQnDJuoZoeZPttPL1shLA3DNbnUMhSQeeKQQuQhfyZ1eGU2PzSeGmqapdhbK7Vb",
  "key12": "bZezc1tHrEtgB22jGTWxVCrB8YvRukgbMedSHF26ETAZoCbyDJzoLEVcmy6BnVnwUpw815hr7kFEZfQ6CBM7UNw",
  "key13": "2y7XCDgfXidArnvz4vZemr2WU5oAbZxzYH7n9As5euhe6RiGhzA6diVQfckESfPd72Ai9NUAtUdpTYBh7SyFrGGF",
  "key14": "4N9Vk8RxELES3st8wmjE5WwL68FVQD5Agxtfmvayzz6yfKbzg6gr4VirnBqqCtLH3f1AuMK4Y4smVsJXzirYu8i1",
  "key15": "4iMBerUF3AgkjmTyNnFevYemmrECWufaRDuVU3Q9cSqcDscrrDzTyCdFQDphwyA8xKXTiaFn7QJpRqwdJzngmFjp",
  "key16": "2vKWUb6724dANGKTDTk4MiwagprQc9nwfS5WLfXTgEM3FPHha4BDFF5p4gbxjnMndJDP3ureRJs5DvKGQY6a7PzS",
  "key17": "1vb1KLT77JAZxoMG4DT2M6CwL1odJhfFBXXv8t8Xyvm5iJx5SQtywaomFGWoSSfdMxvYZajVhrMEtARr5U6asYA",
  "key18": "214yAF1zafvy6JCi3raNzv2WEMX7CZ2mJcEKi5Gqj3ogjKvgPXG9gDTTFShYTarm9ePFJPzsrmg6iAmRn5peq2Du",
  "key19": "5zRFSynbfvNsar5vG8hhRehTgXzkzEsdTTUEcycyp8SYhTx1YCU1U2gt2yknqZeEaGAjeKPz53jeTVdZstQN5Q6i",
  "key20": "3NqSjUaoqyDGCmZwXpn6pQN5CY4kWgEVZEiQGksrjhC1qgPfsLRxF8YXstrxB2QYVy4CM6SRkNQ6KmcgezaLA2HM",
  "key21": "2hD5rqiHYaugZnWxVcR7GK19HDrmtqbRH8BMjJwDWM3rStnoks4CYeQiB1ZeuZREnwrG6RGQQwqn4gBb4iez3L1N",
  "key22": "DXomu3g87UcQY5t5ptjBocNY44e9qwoq5uWoTrbAphj8v9nQDNF9CceqtcJykuovCNy8UouCRtYcEZpze93k2kQ",
  "key23": "4bFAXo8dEVodrRPCr2yQEasRSnjHMUpW14osgNHTfgNVxtr5ZzRSsa2p5uzDQSKyj38Cdi2qKRhD5B92FHD6KNd7",
  "key24": "296GPp7AYWiQGqzNcfaTN3cYy5TtMegq4bcQWdZPDpk4QaCM9tcwvgmyKWuuLUNkh2Hy3jSdWkzqR1CkCqKPGuYV",
  "key25": "2SnnbZ24fnt9axSzS4GitMb5bSNdc5VuDNQSMxdKin8V9dFvUBe2LujcbmPThQvWnSE1ems4d1R4GWHGvFqXDefP",
  "key26": "ryZAXKone3h3rAmLxCCi3v3gGgT34NXeeb7zmu9tyoMFh5bnmYgnzsFFXvHyno5XiBYdegBnthS44w8p1AGzT8R"
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
