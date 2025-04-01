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
    "32kdoV9sJvH5By4oFjffZUkkH1Wy7J3hPfZ89VQNrnrgXxcydRbcWASznPLmXCnS2mip5sjiLZ9ZtdT9gz1e26Hq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pPuvzK1ULokmd8uZDDfiFg3kwYf86JuYyh73KPJDWME8kBqH4s2cPm91PXRN5fPxAizk65FkfVGLHLfgvRHwgXr",
  "key1": "5H9C6zJtAist3xMHSCdsd9juRZxxr7cvMc6R4c4a6Do5Bses4zaLaaUTKyQJoUQiKsxi4SG6qpADTfDXVjoCvpUV",
  "key2": "5abD1zWe9kVdDEYc9Jq1aZzDmzSLdbotRM56xgpBhMteKsvMAPCZ6Jd6eP3LV1BZBjHFhuMenywkJDMLDQmdEudK",
  "key3": "JX6NnBq2q1gYjcgCJyPx54MY3JdYDaAsuSKjv44uNbE2JxT3DHwsmo2tRcyxoFKLTsRZqTUryMnraU3nwWnhuMG",
  "key4": "4dNwY5PDPDyhjdKLGV8BidnfYA1ud7yBa3ukbGS1LRvVwmCmRBud6GRUNCedmGFQDhG4D62BpQgbZRjQu8Lg2LVR",
  "key5": "dziYxsAQY2vnDdqoxgAmmLTUbAKnMYCGoLHE6mXqKosnYScMYVizcRcV7XvVRUKRgu3tvbM1SdBjCcgKc8N97kS",
  "key6": "3yY76qUb2UQEMiYzYxgnn3pQ88VqzKuG5918Jp3VjW4DDHzunSrgPU6gEsDNFyfKMMJ7pTBzRGunakECfiKDPF5w",
  "key7": "nKtcHGdEL3qmthNSYJWSa5QH5fLBg9GjWV2KP4NXgKMG41YNFecLMnZdrx92j68oEC48DwTWE8iWKZ7kDX1njBm",
  "key8": "5foCeKFXbhtCum6KC1tVbsUyd2kULGzpw2uBdEYPp68pPkvCrmgqLnX2BMZipytoR85CfQRyEUF2h9aztbvCrjeF",
  "key9": "4uKCFvqvg5BU4Ep2kf8gV6dnWRxQkV12BCLofeZSiLTuo4uqMTgUKnLEHsXPVM5ady16F7Lcmj35mwUG8fgvpd38",
  "key10": "27TWF9cMJ1EC33UW64cYPpP6u7vpGvVVYYgcg46DcrEvCb67UXzU5zwBZJ3eGRmpiT2mxBC6DpnBmEXS3r9aBSJr",
  "key11": "3gcppiSCw69qNky7oT8EiP2kKNKUDCcmucrEzkY5L29i35FZ3rBEKAxmC6xqrgLmvDHrS937Fg9c8BP2bXoaQdW6",
  "key12": "skLLZQSzHhTZfTNj19TafnLawkCe5cWQUgRgcEFJvch8GpKu3gnzGAKsWebU4axfea26N7BrntXNQo3AyjmWx1t",
  "key13": "5yEVroV97Ne6vzn5836TPgEj6y7YsYNk6w75VsuEUYWLAhJJrSgt9yySEcsK2kFHnH3jJyeSxVwVSrq52qYLTsvQ",
  "key14": "26MXHmydSCCBSxh6a2waPY98XYodwvowYoiyPB7oRTW3LkE3oNsmUQq4XqACUxGj9qp1KWMVZfvXZgzKKHstCyA2",
  "key15": "2tbEeL96G8PdEJmaQzBTkkRG5UsnZ7TBfQEqRYhYm7Xs3Rit8213GZt7aWipTNDfCrLjZjxtVMYzwFiPDJSYZHRV",
  "key16": "3pywjZHWBfumqvwmVMnEUx5ZCTyzpuJdLhXjGWF1fY2JQF8angraRXr8EsDrARqnAy8Uio3qs7JENajVbaKJ2rL5",
  "key17": "5XUkQGJAXNCU1umsaj8DSKCoQy1vYmWtVdv9HRhKXiH81Dvj1GqqGhQZPeC953WcowNgK2J7U57d4CaZBgqKzxcn",
  "key18": "4wrWhzCeEiATEFkADqwggrTshVXSFRytYRrMbgitXwwY5qjeFaJ6fg4Ysjp8TE8Doxj33Pi7NadbWdmmNoEU732d",
  "key19": "3ssDzQeorfNBwkXrzvn5xDZmd9kCzYsq87YiQ9fDUh3gKLqSWc8zdGuECttknGeupTc6KLrKbHNjpWLDf1nT2aqJ",
  "key20": "4ANsqnmSHTxqXMT8Kqj3FZsjkWqPmznH1xRSsQU1T8bPvXXnr4gCiU2fWUZSyiVj6FbdF4SqDv7pXxU6MaVXzYwv",
  "key21": "5HvF6ZwAXbhYKxugZzM8HSQdT8SFDwLPc7Rrx7qGiyZvD4E3i2stAsm3H3YpjhVUTkURwvFc43TWXqfwXP41owmv",
  "key22": "4Bcgwf8TJA7BKUGGNt5caH25XXytd1tGBgcduA1cAAKT6NXG2UqiAeQVEAfBJorDZbC7joMEfMS8HfHrR7ZKLFLV",
  "key23": "2jScQ66btGNPS3aDHGAYWBcJ1dmMr9C1rrErJpw4RWmXoGmXuHmQjyhk31RMSgdveV6DdRMLi8CHNfxZVY4xywEy",
  "key24": "2fm1Bqye4LMrkYF3sErJq42enWqtTjF8WaJeS6RHtoo1V4os2a7hDuXCv7HiZWktgRatY3honB6s7wJwqGkavMWF",
  "key25": "2uWVFR8B3EEAARFZQ9DgL8qDGzzJ3eYcYC4WPiB1EhZ3kaePMc19tmmjVZ3usDRrTzK2SjKKPispwCjiCWSfhioN",
  "key26": "bzvapRMTymWbx9GNJmiVHYhi7z7GS9bVRpeEcakKdQCsWD6yjWhDL7JfNNy9mBtqgd2D9Foh1iFJQZJRXHri1zd",
  "key27": "3JvwmHzv8XiP4JbRmpmpnENGyvmrJqWmPyBWqp7WvnAd6mzX1DfDpsGWDKW2ykotN4Mt19Z4Pueu2JftvbS7fHTR",
  "key28": "5UL2iiXNZ4tsx9weDqGzEzgx5mJfE2TMhWvHnd8kd6RMQXMTQbyrC1UoivJDqUv9vFmbmUfVtJxUkxYSKvUQB3wW",
  "key29": "5mqjfavpQDgNoaWqG6sbvPLgKZJzH4NrKM3JETbNaTfcHEemPwE5m4JpTTx3tDojWLceHuySwZ7P4Rs2y9A6MPoW",
  "key30": "4DCNcyogYeFqwN8nU1DPffk5SpKyaNXofbwg9WKkAddP7bDZVaceKUmUJs1jCDMqZrN6kDK8a8ws7As3guut7cTX",
  "key31": "27fSwKNx3dkwnbTMJYyK3ySgo2bzoiZpEsetHxUqdUZbx4HSS6xvHAiE5GuDEQZhx5X5Bqv6LPfxUe5h6qee6sWR",
  "key32": "sGgki9hFDcssccK38b6nRig8TLzaviG1KAeQWuSYtzZk39gWg55GjsQSab6RbeYLB1YR562K4smYYw7S8NPbDJh",
  "key33": "4xL27QRYU7hpq5c76eBmqmZe2vQgNuSFN9WP6eTWSxC6sSCDj8cjh2qWLnkDiYoCtGNeKWm36xZEUJwx5xFm1vmR",
  "key34": "51r1DNQm4Qq5fgf8tq1BQMkoJ9PamjBSH6WVF5jJMTdAYjiRN9XsZFha6XniwwD8eHj4j45ySgv8MEHVvzN8NVW1",
  "key35": "49F9rPQEPoDzkC5GBw97ztu6TUqo41Wn9dwuWuucCUUoCq8EeQGYbTiCNczpiXtTT6iidsdvVmTK4egb8R3VtSjx",
  "key36": "5UzcGf7sZBcHt7rQH76ABV4SUt8Fh6XjgiQB8uys74pquZoJ64zSck7M9utiQP4F7QuwsXphB6B9pYMAKJmcJgjM",
  "key37": "2n1XYxPhi1HRbSyGbabntdEpVK8PEL6j7VRpVBSM6gf6HVL8vrMrN9CTmhvkLLSKDP3QY2mHDd7CkPKbRoHmPtPd",
  "key38": "21eYjRWk6HNK683XX3KjxP9CjBMYGB2YSvZSPVuepkFb6rRt6ZadgczxedHhEJpEgeod36obSEyeuHDWL4aUXwg6",
  "key39": "3gEzTJVayixY5bKwJczZQBtpLcYXC5rtGbNJgkvHkqACc8bYhwNuoUty9zAhtXrUYYbtrdJ5QemhHHa1oGZ4hvit",
  "key40": "5DmqJ1U3yQeumX44M7zLz8NdbpVdXDMd2dLBMDLxNcfs6mNrveDW5PxQ8RRwjkPBvM5fAvXS5RXUFqiRQL9nr4V",
  "key41": "5ACqEgpYavTeAw5jqfZAyqCvpYiKhR1Jq5S478SnUmGDXHTVYwv72NAgn4wkaEmaUFDA8kzYq7XjcBr3YuGXaW2W",
  "key42": "5KknERc1UWcc9dEMrSLohGQGzUbhYdoPdFqeueN4nTe29kYQv3tC7v7svAzBqiDC1nqqCxaj3n7czJxSzCXmrxPJ",
  "key43": "4VBDWLr4QozQaoRTivqk8Nw5FovWWzVXBWe765HJ8fru6HzwZVkHoeZD4e9MR1t2vo8GmvZmBC9BXhWgLeSCB5YG"
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
