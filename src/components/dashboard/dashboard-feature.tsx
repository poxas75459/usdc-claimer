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
    "xLxScrkr8aDd5FJjhb2nLGPHV4mLgDNiUgCV8jDw1ikc8HoBUEMBgjB3WJhJT9jHh3od7FvrmDP6hz9oqpke8r2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28B4iYvp4UMbi57iBDfgxSg21Z2MhQ4vopBsRAQ2Ky4vW8GvkLW6xReQ8A4oeKgAnFaMFz7B96pCYr1GcyZxFsnD",
  "key1": "4AKdtwTYGJ17CJaHgNsWQYj2XA44P53TTj5bfPAyE9vfsd75jNbKmxuyrcSP6tCVYS5cjupAr8knQDBqANi54TZX",
  "key2": "4o765oFSXazqbKPj8EzDbEYrGbN5yhMQFknhH1zUitutwcqLAnjVfXxo53ZRf8gsyTJNoC5z7MzSgJptCGNxVC23",
  "key3": "2okFcChkMrsH95dVBrcu25kzyELZwFyZhCQ3Lp8hpsxg9W3giar7FwbwftdkRspwSKE4ZFiEtiUGorBzazQmiXJL",
  "key4": "yRf5wdh6G3kJjEpKbbpAWmDLEBHauv3M4g1v94JKMRJwzhpsTY5mLyVgrJ45S6EmMKsKV8Vg7NoGwryzu3rxxpD",
  "key5": "5HucT3Yvf51MHKAPgxG1cXdbEvx7JjyqyWs25jbbLhcSx4nPRQ6X3VkC9j4kDtZmXxUcA37A9xMVGBRLyhnZBqy6",
  "key6": "47tKhRySuGGUNVuzrMKpduUJTFFPm6k8XaSVH4Zf4eh6BwXs3oCgPqUc7bmqaNfUQjBhjcWVga37UzX2tWCBj6Gh",
  "key7": "9Qj6oYn8HJ1bGQ8XCSAJr7ybtP25epNp6Ldsj5BKeozHhNA1pGhirpBF2icjpeJt3B7f73RLvAJR7d7p3agR7gh",
  "key8": "2ySg617iXSMW87xQgYkjMGEPiA28y5hUqeydC7Z2XkonXrXHPrUxTqGUjsjSK15F7hz3W7s2CcX9jgDsq5m9dELU",
  "key9": "5XQYs85F4wyHTcrkhCYDvBz4eE3eRh9p78ZH3FSeHHd3voWypmm2gF1H19DvaHzGmCNuyuyxxcRbrV6M7GCjt7uR",
  "key10": "2N5QRxLvgdBLp8pBU77SVygnHgqywvpKLyGc2CrzqAmBSru3gs8y8KLdr4fR5a8YwbfJ7asyqVHRaASWHBhGSJWs",
  "key11": "5DSdZcdY55aP2Z4trz2L4S14ndRqmtTJTohge1YkAuYdsHYirhdidfYfFKu2gpUcfhXhCAg8KXDC7pKWYQ99yeSM",
  "key12": "4YuoXY7GcvEssFHjXiAPFL8EHokDDrDvGG63KBvV52HFGUVGtfAHHBw1gYPzDUnXhVKva4Fw56he5ZXaMcM7t8zH",
  "key13": "5o48txg2VTY2eCVLVNvBUuCa1LdVv9e4MguqCxNvap72KJAnnnvPweCSQiLc1Wnnyfv92qRusTtsJsspbSN97KUX",
  "key14": "2rEf7f3yFcKKEP6TLgtnEfoUzGmN9LDGPaq3bQeExRFQqUR3yNRGTrG9LrnPzyNkxeV7XntonaAMLXoZQ8aiQXSn",
  "key15": "4BxfAb89EfxgufkXnjQgwnbMV9VTveHszjw7Dzsu9jKnFsa8fEaSwEHV6eAFwTW2iRMXBwKPxFQkQCTHYys4aLFA",
  "key16": "qnqJeRMbuED5hSHVWBQtEWKMzJ88UwKyDCWU3mXcS7DKbVRQWtUxd9ayxGkuRnLVZZ3oFnVx5HdrWJTwRmwGTs2",
  "key17": "2dpe7C4GHkmQUHBU3e6iXaxQjQcpA6wJoQVGUj9siYSsAAUhnJnWcqQcAid6XTzSGzwa95M7eJ1kmTAwXi6P25Rh",
  "key18": "4MNSpotsHyxdb4oCHjrGTubJoFnh3CiTzckBHQbfNkSdBrksPqgTYw3PDFHW6AcmM8z3rjMVAkKL5dCG5KUESa34",
  "key19": "5Coq4EiTMVmt4DxfR5dfnDtDJhZCUbiWZYvCVdq6Nss6yWKodSDNtuJVfumMtronFWjiiwkHpyTZfoqGg1speiCu",
  "key20": "5ZpXCz8gccLazzeT7vyzLVhP7TPDAH7VH6pe2yk9oWa1MySfiV2eT1qWf1qGFScaxAHW7QivcnLspTVEHtRxWNBi",
  "key21": "2sJ6eLotUTbtmZvCBReNBZnGoeJcC9xmWuYLF8SsH9CK4WfrEYGaG4gSETvyJ8hV796fQ9vokDGprkWHoGtWAfrk",
  "key22": "c3wkiRAaizbhN7gj3b5GpF5MxHvYekUDsbU4DvcEA7EzV9bPWWWCU6R3H2CV2WuTP1b5M69BfqW8JsdbhVGpBJS",
  "key23": "4d36qC47dbMZMAgkJpLGF3DF1GnJbzFvRikhpbjiEJiVzpAdyViPMtw1W1aJyG3uez4jWKRgRFF1EyziXnmetGf2",
  "key24": "3XBKyKnsyqpVHFXwzRCpx8FgtB3Rwr3BErKif4FpULjYK8wF3Rex156jQ7S8qHXSrnDVGUUAk9ZGmXXH29mW3rc2",
  "key25": "3oi18rj6iWuRFfLNu1GeHHK7o9rqshsENPfkdtRfZANaQSDXwMzXYCiP1x45XBzCuy318WV3ckudaKgZryBDZrzc",
  "key26": "2JrAkdKESxCTfXgmVr6ZMiUyfDxCRRCmbCafDS7gbvoDoR5RLT6v4LEmPHfGDGA4juEWwvS9voimn494VtWmC2QH",
  "key27": "4FYMVk96N59NH7JvWohXU2UetJQzE9WyX7WJTxCkVksLyFwFztnAuqJCk3MMXyXpn1JsboiFm2mhn31CgXwurxZb",
  "key28": "3xvN8HvVWgQTNoT8ghMjJkQ18UHm71KSQUiesZctn4QBtVA5ekme8tKoJRR9ZDsusn7N817iNzqEayjUARq5ETUe",
  "key29": "4UxB6CU5H7MDLrhVzBXECuwdHfQ9VsJMcMFPsrGjsETh3mJQNvAVi7PHZv9nXeAQE5i9La1U3q7CinoN8BFVaxUK",
  "key30": "DezWAgqba8crZCqvPrSL74avpiHQvkJ7nqN341cZuoTpPPWYUtiJEZmhZACkz3TxKL1UcmvtGRuxKPXKtrJh2V4",
  "key31": "2hL6ikgqkobBxdFT8mrFSkof7e5hRQHEePnz5cecvpx2GzFArS9EPzND5Z7p612ciK8kyvHW6indsPCYnH6jyNgz",
  "key32": "UECr8qRtNABsakPY9iawr48TJky5uZ5iPQw67PXnc9fCovzf2keXBnpTVTDqaBNp6R134tDN5gGGHUwUSUBTosA",
  "key33": "43RgZmSHVAgcsgnCpH2Rwnvqx8rg8jQnzcPpmoj6nTbQiAyAKhFBVavwMN6VMYfMzX8FEsf3YVdwKLXkc6kBezUa",
  "key34": "wJoqwAc3e5MVbJVasNwnknw8W7wVW3smJHYtyyy8b9iEaxXqhXBVkPTYKuMhWpLhUti3EaeknVRXMQWRZTQ9TTc",
  "key35": "4qLAKuArXhUvh6TvarLqTiZs8WpMHVcrEDLQRK4MnA4WyNB3VCcromqeHDsdLBBiWsKbmMGR1QRE2TDjZ34PUVZX",
  "key36": "3iGm5ASvvCdkAcgEcQnNPbcTUeexBBs6mfd7J7Noopw4FXp32rCUqfMrqQXxc12NYo5Q1r6GN4ZwiNmCZ73V2RrH",
  "key37": "3PE8ajHUyeFvjJyDjfcJm9RVdA3cVwZXo7Fsn2AyPWeQe44kqEqhnuo61Wo8t7CndEFGdLhwveh1Hxn9E2tHgMYt",
  "key38": "4uZsssuwV11DPTVvSUBZNUxoSJEqVNYu6DQB51hFsc5f51wPy4XR3Q9piCR8tcACztJYBqEgdT8WifCtb71GyWS6",
  "key39": "3fgZpFjMGsYmPfVb7rJZ9wkG6wCwCW8rXSeHwEESzr5pZYF3q3Q88Y13unzro6AvNg6zmfZrEkjRRo5sH8TCHXHg",
  "key40": "3hA6xmfEyVB1AuRhWcAyH5dzkFmzUpK49pNCQoC35HvVqycKvNbAuNpRPZtWRzccSFnwTDejqgjsPudnr8nTei1L",
  "key41": "5h3JpRBZ4bB2znXWFMNV43dyvxC49nWQDaBbQvEfDCZZrdZtfgPayfT6HdEhSE8TkkZumn7F6Kt1M9AvhVBE3fph",
  "key42": "3k8VpunEzP9J94o1FTgWffFUeH36BMhLjkykpuztwsfvWhfcSMvvnSqnAqHZ8CuK6naVMySUbFCeVZXbM5HJkgd1",
  "key43": "5B2BKPGeEQUMTvNYENeJzbcuGC7WcqxMUgtwDnd2aPCfRG6C1yQNpnMgHTikdT8uPrCFMsGFC6WnWZscYkyn7QSu",
  "key44": "5u45n1deuBu2samsaNSSY71m7d5A9or8p1B9kqnFyNqMNW5eHx2EdbGvEXe9zbb2qiB1DUJhSRRXRUG1G1xd1cSK",
  "key45": "3FQDLuTb9vbSYdr5uBdkfJEKwMgZBY8LyKJ1VmuwXgccURbwbKjAikURKFvaMchxqeSUbxbTuNMTYs13dLxeZfgD"
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
