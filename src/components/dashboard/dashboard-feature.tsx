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
    "2CqS7L888ZhuRnHv4tgp4L1t14hJfvYqZpBvRSP7DGQXntcQwoeKSg3YMHup8abh9hKYSgZSTSRKPdFf5YqZjc31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WC88Sj1oohjcyvJS7eFLxdvuHB4SEDS965uSbmUUHf3cdCgcoasJhGaGHeTGQb9qDEK82G9q9SVLzWWncz6rtjq",
  "key1": "2a28wXcvp848datZBCMHgeyVP6fhcwsZmGXtv9vhVLeG5JB9Sna4oK2PyXopUYv2BNM8sGDzYAYs34qHzMzeQ3Ye",
  "key2": "3juFBcNHdpC7W71Hu8uadLNKUmTo9t4wozut5wcRgivJNM9ipPMv18wXyP8rY5q14k4n6L8BKNCsj4s8b7tdhDzH",
  "key3": "2rcHG4PDjFs97FEA7G3msNb2Dv8CKF5kzUevyeMoMEy3nenwMNdgwWEG2qCbv6A8Hxx4dc8S5YZREAauoDr4tYVT",
  "key4": "2bkqdae1yfaPAqSWfF6SW7T7AWvKz1FfHnGb62aCtVxe42c7HuMLXH36ibiG7XrqSWrFPHfh2DNh34KFeqjje6Dv",
  "key5": "sddNj78Ksh8k4pmjAjnV1xEuuxPq1ZUSNSAowk4Wiu6PrPvgfrtNpwtPDvSdh7oEgPjRAZmc7jLRqAaxAdHBkk1",
  "key6": "2G3yfUTzYi5vWmCBNtNPRT6WcUEos3zjd5TYvr45GUuZC74FpNRra7tg7NSHxkwMkn3fnDxuYyCfjz9qPTeyoEu2",
  "key7": "5nGbtrD6KZ3L94hb8oKgZnWEbF9wEVkeh9aV8JVLfXMCJaTY4wVVipeciXHL3DzdUadBZtQSVMGpk9rnct6GoXCJ",
  "key8": "4Mn7FGrbMMs8uSwgxT2v943noXYDYXRaUJc2m4Vn6URs9eU3MqTc6fBXoKUh1uw7NK5KQHwAs9UrVogk3snQoQjb",
  "key9": "5JrWEN95B1v25odWxHYVp4ThkS1nUxjnwjhB6aFo5WwpyTkix196RRjyK8uDvakyQpewXNbpM46rBXEexNaqCKDS",
  "key10": "rV5mrBj2dwoPxDE1ucJBMaWcj69rhFRymjwCJXzoQPrsXnYf37PDVF7WsiEo67JquVACwEuoH1nPRiyZFfy85nh",
  "key11": "3khiLVxjbLFmMmu4V17p3vaRgBpzQxpucgorw7JzpHq2ptmSWP3XVnwkpyKv2Y8AzjeSpvEvfJVfgh8xmK7SRp6A",
  "key12": "2LQbFP9fWT2LNq6YBMZh5raYcQDzoNBgb7ihj9dBkWpTmWw9uXm7EjnZRGdbm8hsAByh2DjxNmLnwiHG9xzJjpPn",
  "key13": "2sSY8V9m9JrDWSDnTd9GCdJASqtwebp8oLdso86NALqxc7926qZ9WpoRUDBSEpeuogc1zr5hU66sSJJ7xaDi657A",
  "key14": "2cKcBbvTDb9LhZSgdWS7fjV5g9CpoVZiq4yLfHxTYvnVdheHcADvcnshfyzpxK8WPVwHuJKUBEmhJPAzERB8Dtz",
  "key15": "3ZiRYV3mTbuQmnQtyuNDqS51uC79rSebVmEL5dj3reUJWovuXpeY1maCLSJwBsWDR3bmPEYwP4dsbhqUARFxAhZE",
  "key16": "64BregjvKVjYEgXVZDD6k3DYMFyKx5K2KXcikqoaXcEhRHGy3iAEfEmJBfkd5gp3gALk2zRgAV5CgEoU5LjJNCMD",
  "key17": "PdYyFZFaKpGewumwiczXh83QAzjy916F3RMSP8PNH5MQSXCiWxFyNzSZVJEgzDy4gDHurhgRyYgyeryLgJ4nbMh",
  "key18": "5u2sN9or5Aqp59xCWpEqdW4NQ4kym9UvKtBH9qxzm4yqbZFqtBHpdwB9zMuKwQu4PSB83MTqw1BQ8YrCNybm9AHs",
  "key19": "5werodAA2uPhypDHARptxZwDLAcJgbVD14R5BNZobpS7wD3gjdhkjQeuZ4BQaMCqcQFkDKg3d8wnRPWDV12czJVM",
  "key20": "2EQfvbapbBpv821G71F1VK3jJFq744NFrSgyqWePxbeX6PtNTh61jbK3dQeuVLUkq5VvbGnhcfYH9UaEjhWALEfu",
  "key21": "5LpZga9StdGaTVEGA2A3zZkkw5tTsKtomtzYqvNDcd41GMZopiX1KV7gLoHa9yatcxEPUe5JoYNrKzM2gEj4KuMK",
  "key22": "2iq86nRFtLBHwT3x3yLkdkQz15CapviAVWRRzngWJqmY5eUG2nA8b6m1tH6JbsvJ9xS3rV5UN1Bxahd47EAKtWYo",
  "key23": "2TZDYsHAvBKtcijen314zrjgGLjzMjWW4pwANFJJSHiBU8oJ672DU84uWyrZpeLiuepJJGYZYtEDJp6b4dZm4ud8",
  "key24": "2pcwfnRJRcRMZxSKdo4gadV9Gr93bwiDcX5mCgkDNXrVvcRvW7UBSjZ5b1iocQAcpr2pW4fdQ5YnHwL6YH2mGWLM",
  "key25": "mzQqird8LnZzhvgaD8tMWUFmRsjF676t2gGkhTGWhusdG8vQMD164FJexHF9kZhomrhQ3MdTzCg5YkJARjRZtWS",
  "key26": "25F8686VMi9Q8buc7dYJXC1woVp3BGGrrdFDZAwut72ChNJF7uxtEEp37kXQ2ztvgkToubKMYkuy6jJtWkpgvJ22",
  "key27": "2HEuCGjwBiLC9kVUSArJz5zonhz5ghX7MqDCM9LxACK1sEqTfW2uLb7GXRr3dXGxzQy6Yu9EExWTdVwjEQd5CFj9",
  "key28": "86aTsbXEKvQVHcFWAH1bx4eBKo77AFCm1TDTUq6GfTiqLu8Cy59hV9p8BC1C6buT4BPMEFeHacGJWuY2baaQAWr",
  "key29": "4SaVm3Q9E2k6D48opVNBkATEcHmfBwaPbA5WF1XhYiTMJG6iYoGwSvugHfpzgJyD6BVXke1U4Jqks8xk2h4D1sVs",
  "key30": "3tq73Cg99ZgqyqRfEqVbAjnbgVeTgqFT6tziYQaVi5xBjdoEcYwUDkiXYbdLBRCfL23TgtfxEzn9CF8WH7P3ZHCk",
  "key31": "pWZ3bZDuwVhBZ9QeqUHLUDTGWWzdFfvLLpxK3Mn2MTioo51oX7xLmCaDdburT43fYwaR32GLfLR95msopxKGTBU",
  "key32": "RDNzeXThFq3JgZyBBHh6jxgrze74wURV33wcWiMm8gAHSNeGRLmLp3YexsWTEF6xpJcKkxEUmhe3ZmCHyqUcLTQ",
  "key33": "4LViYtPQvoDFX1oWhL9ByJm4Vwq1rbRta6uDFPXB3Xqooo8xjXkss5BuFL4Eh7epydP4N7obJdcChEYdsSN9kYU1",
  "key34": "2yQW4vRPg4aDjH8KCAEUBMsJQG62pT6pYJnMyV4494na4KAVQQaFdq5xKEYBXuv77S65d3meXbUXkNCKdTxhqSNV",
  "key35": "pHEgvmqqJqugQpvJE6XLBmTQtM4KYHvW3kvfXHsw1AEpZXwm8NtBgFL7YybnhvDcHVa5RiB4C5XkFVdUNREGRbE",
  "key36": "rmmb1PuE4CvtaFeqmMvoSUcdJHwGvjjLiro7fQwe1Dyi6L72vAvPYCUu2Vgbyci9Gy2JANN9Cq7BXKyapZm2dEu",
  "key37": "67NRWjDvZ5XSrbWXiUwWA4apS3RpQhAgE3RMELZPe1XZrJ3z5e8sGYaZrMg4SxKJcZEQggzr7TNGDTPddyYfqqqa",
  "key38": "3LRj1TLhMxqh2t1XouFqA7DMbDGCG2hVWNYrAqGohUBUFGBgpPM6HE4R3FS1t3yDRchAeujrjtapDz2ormApLbFS",
  "key39": "aSWtjhUC7hrSNh5x3SSRvyvWCaS36DbYrzC8ig2vooBJof56PEoFBdpfqBMkRiU6gLcsCKQLUeXtvQKpjFjX6zo",
  "key40": "5ruKuG2saNK6PD7abLEZT6isCHiGt1TqAYzNB1NZUXJgkUUYL8gzckNtPVpJckwFcKFWHvWZZLrwAXcYx3qQhuoA",
  "key41": "3c4HYX6ZTMs91PjnMjaKb3D6j3LiLiyxrbL77ZRz6GpirczW35GmYeXAz3R5dkrqdaHXrZ7ktETKQMMP1R36RNtm",
  "key42": "3GKJkr8peF2yXGjD1YWmmrUWWQtHADsbpPmZMTWsib5kAKy4TMEfsbgvciCzNsDoWjdQsR1ULGM6vL58ATym1DQw",
  "key43": "5z6u74vohMvJ8GpKuJVE4iG8GV27NeydeYdcyCa83fqMhHNbWndkzyMT7jBQEdJPBrVetfU4RJG26opsjqUz9xxb"
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
