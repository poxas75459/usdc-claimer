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
    "R31qAuvpPLFScA1sE47Zd4vwrVWS71qmto34ygSFPdNpHoR4u89iE7hUq3thDfmr31A1cg9mFKHh8uc8dEm9L4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uZtf2xoQfaJZqsSJhwjcos6snpH6ikZi4Dtd6i3SB1dSFjCF9cD7457Vw9rAp1XCpUqvPmGsV1SVJbRwf4rKrF9",
  "key1": "3jjsz1NUvo5VAWHNt6BBjT7z3kiGPHxzMUDUc9bhMYTFmpi5C4JwrAWrkLLcaDoLijx1iq6oa11PN2mmhtBmkHnT",
  "key2": "32zHV8RtMDtQxXcdy7jBH5RDXasJhy4sSaXBfhj1UrXy3vvBawo7muE8EPsPRAFyuM7SfvKgztx1tithoKiLnYQm",
  "key3": "5ehBWXzd5jdnmk84gzK8HwfoP3bKUBchW2zScsTpmMWxYZj7HmExzX4ErhHi7dcLx8saw8PUK4r92yT9MKTE8A81",
  "key4": "QqmLB7WJcrLfbGqN8u21M1ubaSKDEQ8W6uTDYbCYefMuy85L8wuwbk9W6MQx6rN6PAx1bUt6mw8g87tvA4TwbPh",
  "key5": "3XxDwArsv7LckNAGjttPzsaKZrmniY6cu9xtavaWVPLJzryEwSQZSVEsZbZAnc49tMscs2xUJDCbJL9E5z4RrApY",
  "key6": "4ZTvvGknikT4taK3Qf5BoxZPArXSfqmnCWjeDE79ZoKJAMb2Qv7JT8LY8Mj4Xxh3btctPrScuKwLPKNkHtdbzCUo",
  "key7": "5FPxY4hkfoGA9HyPLG86C4QLfHHMgAXFyM3HN4wRNykt7ZCTTCnsB5Audz2tPPR4o7CUV6mJ8ZBF7W1uEQdxfNLk",
  "key8": "5HzXUx2QzBm8mDQfz927PUkzdUzSPURfL4wTwco6gEbWDqgyjVq614bJBRt4k6AQ9z8h98WwjKawVb2WpE9TV6bF",
  "key9": "3383GLf1Hf4g7ddG9eUwoY8M3JpGkLijGEsYA1mqBbtHgnpkZEcFJ4TkqZUzFkwqDFHzk5VezStcqLczbTw3HV4Q",
  "key10": "3W5ptfUbVz27iGqXyxr4xg2gmX9JXqpnEAduZ9WBakcjintysz7RteTWvvVU23wBU9N9TWSevqNkgZSAnKDtZRy1",
  "key11": "DeXktbWE5XWau1xJpYXdYbiTCW2VF7vwo1xNUPJ5WhKTTTvT9YfrPU1vk1CBLhfso5A4ZPnjo5jzf3S61NDUu9N",
  "key12": "3kB3XYxQ1XD56wFh3b5TL8PmF6DhoPRqdjiMGjkFAoaAe2gQh5Be45yHM2RQyFnPfuqQDbZgb1xJkhATUFbVJ3fK",
  "key13": "4f6yjD4EDmDhy6cByhDUcMRUazi2qFwPocZHBNf4J3gKtVy43TqiU818ebqRnSh8J8HYT9FWGvFjK7Wg1Mf9umEw",
  "key14": "3jVv5wxz8RbLtVzTxjAktmkw9TB1LyNhPcxWMWbtAbq5Ttq4peSutHUnQBeE8bf8x7ksoSq7Vtdf5HBnebwbo8cw",
  "key15": "29Tk7hJzyhk5LyEbAVjS8AYhGsgpHfGs7HzEQqm6MzdN8q1iVd898qsND9NSFRwYmEPKGBMRy5d24GfvhcatTd49",
  "key16": "5m6DnnUjQYkJYha1k6Fe8tLjEh4SPEKgdsu4mLVmyjCbZY77uP4wVbVXc5mf1AJn6TFFmDVhKy8ZD9odHMz1p9ur",
  "key17": "4GACn1aDTQ3xHrssLLfVsubhSY5b6uxoqdoSnp56w2rM8VKQtGQW7PSmLWHVQQPMYxBUALxTaeKi9czFRSRiYGko",
  "key18": "5BDXPKGwmF2EFcxACvibNnTHsN2SMavGY4ZjgyUn9x2Rhq9VM4pYouqUkkGvZQby41gXbqCL31bcaL3TSs46oZEr",
  "key19": "44uVFBtPXFrx5DWmu5aqF4yX8V9Za4HaiQVaY9YVrFCD8rWaUTTom8SeJ7eCT3NqUf2BJr3Sh9fcDbnNBz4xxQ8F",
  "key20": "5STJjn71ve9zxcEA9xxoZgbhusRZhWU7qAEHje2z8K268bqwPNcyBGxi5PSCjgHxKKBC3TGDAQFrTDfUWdUWAzCg",
  "key21": "5925j6PiMMaVDNgzpB9myUBqTK7sakZRgitRYUarPj3N4JnpqG3ub6U35i4QhBJLcSRtLTP4jAuz3Kv7qrJwKp4t",
  "key22": "46hP7hNevzguLHfA4iS4kMz9wNzRrr5NEazXJjgDYjt7AbNwYywvvMvk5TJsVgemkFgJqy9MN5J4VMFrA7jr6r9Y",
  "key23": "47CimcjK7yMYqeoAW7CgFbUkzrcNnFE4WD3mWNvQtBpEry3Q1djSrFTjCixAcfDkCdLPccKoBKdRQXEaKWiKAr4a",
  "key24": "25d6uVDKE1z3VtPfjeG64tYPg6uqTUW4rjSJhwuT4NWiomSixgtmqcNiMpWVbMYi4br2HP7z86xTCs1Kbvpi2Gx6",
  "key25": "X3rLqwvzZi4LNDKDTZzRX65vwWwg29ds8K9BdxUi2hvCydpwWV53FeJZyuTZ2Go2E5CWnSVSoiZ43CZtE3u5AWX",
  "key26": "5XvEfbSVKZdkDGMtRDKV6seizpQYqgf399zQr5PQaPrnJRSZNhq5t9A12xdd4SziAT5g3VYsczFDfBmH7deF2k6M",
  "key27": "4TnWnR4hy5xH5XnoWtEPdzpYSGGm6Qdj3sRDUTxcvtmvo9TxFUUd7K91Tw7TH6BaXtCTwWa8oygCM1yT4xNgqFW5",
  "key28": "4xSAfZFxeCdT19Jj4jczBNE7CMhjDaLETFbXebVbnKHqHiuT9RbSTbkUEkPj2gTNe3QCPdZ8DxRSnW8iGYVezE5j",
  "key29": "3ywFAEvQaXmvZqd8RxWPg1baPUHLvGdGQbK7haZCsAKY1N4Zzduvd6VSZVnojsaztFGHQ8fgh3zvF7ou9ooVbKTK",
  "key30": "2s7xx5ipitVem2Ks9sstL3gtVz2GMNXXhURygC26E4jAPKCujzdShgfh3j3znfQEQCgR5q3HV5rfFjDUj8cLv1h6",
  "key31": "G4FdPcfz5VX3tZem9P4MJP1BnSsNjSBPsH4se8XXjdM8RZ6uc6XhtvPaVbhpahJQJw9bAgu8uNcGDs3vNN1YSzQ",
  "key32": "7YASGQdqHZgVH7EPiWccfkwi9YnmwMNVq16jbH1UjqSrZ4G1WrC1Tw3GqwaSBMnzr7qHehXGzmKYNDHdYfsFNLV",
  "key33": "2R39Jte6EZ75jwWtG7RuL2Knn71Lo4xSLr8t56JepvoMrwwvfFDRcGj6GVRPxGH41Vbrn7hFdvtgWqs9NxrNUxpJ",
  "key34": "2sxjCRUF8ysp1RqHkDGMSgp3veRrLHc4UFSrzRsJSptiazXNcTZLo5L9QVgqbskcqCTL9iKs3Pg2Yy95bxyDigWS",
  "key35": "2R8x6LnqGnDM84eSJBrPgpgSw2J63wnmbbzgSzebWhdrSBCizsWTKbR12ZW8ZzfULk9E4eGtxBnH6q3uA26VhF4g",
  "key36": "3kXxfdyCgSSXGbAZAamGJ5UKfiQuxJnSPw6niB1wHJDqNawLAs6CDgDaGEJG66Z6UorkyokGZZeCWVKKYoBS8R3h",
  "key37": "4CaKLuqjt3zRBMpwak2BYvzpEb9sHWwnjexpveRFoo3kvRDXU1m3zFjWXnWPDBwHjUT3Zrc73bvWeM3rkPG2tPk4",
  "key38": "2KGAeRLDJj9k8HY5uUvyLYXE8YmCeoq22VFRjn8yMnjEmwXnwoc7tPzU3W1Bh4ULR282ZqjkPZ89S4QbghnuF7KT"
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
