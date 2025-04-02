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
    "2BE1fiRmW9K91RzPB8tKWKytHRYhDqvrQrUWi5DtXhd96NVt7RiUb99hUEFviQimxjfgbh5GzDAgWsbTssFdThLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o5g1TLDP5BVi8CjMcrUq1Xd2T2C9QvwnjuQbEW9TQ5GERKvSH8BXWjVYJmsFZwbzF4WDKxnsxeEomp8WB6PKTNP",
  "key1": "5L5MJWbsCChfRtpzPfX21w6QGX9Js8b5sQgyV1Gh93UEFwBAtC3MUUgmkXjXEbfRcGDhT4NCM7dnML2meEyoRnvk",
  "key2": "4PT9j8Ru8XqWDy1fSbmefxPRgDjkSAeZbUasjTXyX5AJ7uj63dpY2CbNX4aY5mUAg6umZqDy2s6ysReX5HFLZCeK",
  "key3": "4WAaQA9WFbz6GsnCjCsQuhsUCui3NgjUm1epdSXJHUNFAcqfAXBYpMfEXB71ukEpzuHeWHbLFBGrE3CWnnUre2Bw",
  "key4": "5MR97j2crYG3cySzUotfkUPzMTDRFkX84D5wnGJRknNjUsBJwyX5QWzKLUg2BRSFaa1WfTpngcQNwjyZxgo8dYQu",
  "key5": "3jkgWDmABFA98kC8g93HxxNRdxARsjqAHm8PMn3iqTCdraja5FG3KfiWacJfUVBAVzGBeyNVrN3TLY7qpaVou1bN",
  "key6": "46MsEDfmkbaBzzoDZCyV3ZdPPzTUQPCTnqABo9rwBJtRGL2sCeEVrBbjMkYazViafGnG1DFBUBZZfdPKgTsMRMsp",
  "key7": "4SGZRDzfemewpN2JfkW6bbaktx1JykxKZnoG58sqrM4XuvU4gu4LMiCNrFaBseLsFKsy9kaaLJsVLfnaP9548BLP",
  "key8": "3eRxCLDoq2NNNxSPDKhq9rTj8CJjbWC1osusUKozZouSLXUXBA1LUjMe7a9o6aRRrnG1AEJJjD3mt7GQa39K2XbA",
  "key9": "2tH7mwLYRnWowE6hCEh4wNCDGXXvNxnrquYP5sHMh7JqKK1YdMJN945PwyKMBm6CCyg5rbdsbguwV7wrn59RX3So",
  "key10": "B7UjFgP82brtU59zBzVWcmN3w99YHx1XimvFF8VNQzgYEG5Wp92uWoWZzs8B1MEiEDMaqJ3AqJPs84KZp8ojkkq",
  "key11": "52nd54GkJfnjdyrikfPmkMMnz2PnGzkNAHXYSiV2NZTNgDcQiB18uCk7zbygq6XurjEyUgrDFsjkCAaiEwaMuLJP",
  "key12": "2AREtWXmZYkKo2wZZug6PDWtmUtgJ1CQ9ES4knvT9yC8655DAPbYc4UFC51kiAjjRCNEcBHLa8fnSrSXttXXvuiz",
  "key13": "3WG4xJPZUMmTntKXdakUtWHKg8DJCX8Ywkbpe5cWooyVmqpBMa9jCHiMCj9i5ztt1anWBLhSWN1uGiFNbJz71cQp",
  "key14": "4LkC5npZ1xjKo3XoBvCJuBvidvMB7NME2FY9rV15fKReF4Am9cYvzXCwYpNJyubdoaQGXsnZtjNgcDjMCqS8Fykg",
  "key15": "39k5EtHjox93wRssFHzVmisiVuCGsYPZVjapk3bqL7CPNbS8Up7FbpyrJ8PSudUEVnm78K195gVeAx8ZEJGVrrSr",
  "key16": "3N2YGo77ri9JavnvdSVehAMbf8W6RmdR8DqA4XZNAnPhSCTWdNK6dTFY6Fw5giZcdaE9CszJVnr1NwepCi78B4jo",
  "key17": "57zLkVKy3y1k3B5WCwrZbs2L1uGkY6xY9WKLMKXLci6xUFq8imaJfN3HRtwANovmnTC8qnAQYCNR8K9Zh2WGkZBQ",
  "key18": "5hvkUNccqq4B4oGhb95a9XmxboXUzWNYif9Un77nSmmWzxuX4wj9eyuqAbeDXLSmiUQs6yVsZwhArvbDbN3NFT9N",
  "key19": "3Zk7Sy9tjXcZTasF982yxK1BseksVPCJf9KGynoaKDW5rKiv8Vu9UVyEvLJFvju4VQZwSHUJqPyyNQktdZjP3T7R",
  "key20": "2T9Jbq6RmYxiEyCqewsRSYmRZ4zoFNGAa5oEx9EeCo5xx1tFRD6nZ3STtazbJT9XrVe58XRaWDcHBy1ghx1uBMXf",
  "key21": "51iroQve5TwicEuRoDZzntaF1jN2KfSuqmQFh4txYh5iq9YsKFET8qksz6j32Hu4LiotJm8hWNp3GbNhc1iCDGuS",
  "key22": "2ErjK9kH6N1DdYbRsmTNYzX5xE5SJ5XyqJzssVMgUPsE8eBMmXazLV9dhSZ5WhR7QS27Apg3F64SJPfPB7j6WmMF",
  "key23": "KFn1bjvbNAbjw3HmbzC9zFss1G7SHi7PtKiFL4CYL19QijgWEpWYCrG2FqiMCXGfFL5B93WqL5iXdegcqLeRGxk",
  "key24": "5gjgw2uaY5bgy2su7RKnobPFxM2hqcqpGVPgMRtNEPEqRjau3PpRRHuVnxEgKEe6jQt7bBvSmUp6JZiTcabdZdef",
  "key25": "2R3YLtwZ9eBBLiTww6z6UumZGo58YWqcRDpgrvEHhwGg4mYJJp9GQpFXRhPiFwXi9wPxSCiYgTxVK2GdTCysFwJB",
  "key26": "4oJxr9NJkui1o7xKqzq4SkYWajmrdFnL7Sc1msJH4Veb8pkNpkoAUUhEGj2KpVreuPVpZpCtFzjJEjNZya26xnjb",
  "key27": "2qJW5rJPndxcMFYKubLftULNxTZtUmWqH9JjiDRvxs8Ro2PnRUzus9BVNXyStaiB6LeDNr9kDW6qTnfvEfqEe17k",
  "key28": "3LL4LAWeZsVKneiqWDwbkMVSv93DQRusTEmvTuD6VhctbmaxWnjqU3SrNoer8wF2wtdBWFsdPXhjcKjfNDL18Qoo",
  "key29": "2vXiFzGTotBYAz7uZpfpVeoZkKnnN4QHkcUGArhhfca2WQSbSkdeztRa67wULwGXKvtC6wmmhtovbmEGkaMzN8hp",
  "key30": "toss9xaDZb1UPV7f5hM8mji36y4J6urWBXsfF1Ft4n6hpHCxyEeBEmMcgQoDy97LrwZdxaQzzaifErktNQR7tqk",
  "key31": "5xRDEu7vJSBkcgiyCLi4dpMHqHLaMrrYhGPArNCJqMyvQ3FWpL1fNTN1znQhevubSbTEKb542Cm5Biqq6vr3RJCo",
  "key32": "26gHRZgd2eKy4tpB3VpWRY5UkQfLdTVqMKwiXn3LhFuLt1xD1dhExZRf5HySprY7RoweToCXek4tDre6eqYWVL3k",
  "key33": "4BuZX39xsRgBPWcJJBfMNrTfgaW4DMXQFgqXp4SJKiKZ42PvireR2KMjGZhNkQj1rC8935TFWAQw4ZV8hJe6aAR2",
  "key34": "4FcS7jQEezKvMRXBf6V7pXXAW3sQ1P5g7KTk2LvTGt9bBanCj1xRMcccyDRwswLCdUuNa2SZ1rWTWcmtt8J5xtzP",
  "key35": "4jwhWrzyBVkvuWW7J5TMuVPrXu21HT2NnLXA25R3EfGgEWTnuC5hTxXje6Dvqf4pnWR4xWbUqX2kA582YV1SJYKv",
  "key36": "5yoJarx3xnSA3qJLTZz8gnHZiZf9kQ8gEUDeEDtcP8yyh5YLEtu1yY2cSHrqXxaSkW67zBSN16deZnrC3FduAhtK",
  "key37": "2D3DA4fBXx9zwAMDwxSWdnMvNuDchPXZQKzdhCCCuAbzs7YgZwBceBMjdSU2HEo1qnNQEXDwT5E5Cd4mZ7LzrXEj",
  "key38": "3y3ajS54KjukeTac5GogihiGCv1inkD9uLJQCUFcr7iwEmnWa6ATWiJtK49Tz8XfB284H97EGTXLg5jCak7kG6en",
  "key39": "2uRKjKacWGiyeStAAkPuEKXcftsAJXiPRUafbAjAQUpzm4ERQy1iGYMwhNTfoK1zJqBVbyCGFeMWxrmPj9XYkzo4",
  "key40": "4sv4qMtXpc3asWRUSHtBe4Cr3MA2Y2mNCXcQjVvjBL2gusaEYazPuqY9LM4uHby7Juh5NTBtbSeAJfnbmafw1rrx",
  "key41": "5nADwpKS8s9HvsARKGA8WDMZmCRZrvsgwo7JqKF58e5fQzDiGfU6JSnHo3gP68xPcSYcaNjFotqisLvRbzNWV9xr",
  "key42": "2yt9yyYQv9QKzDTRcR7rKJRRb9WaqavhzbyPefPfC6bYkLbZV6eqpKBQ7pvVeQgaFm4wRMJLoBYYjxUSijJvxAf7",
  "key43": "Diik2uuPoxMntrx8x37aFuxQxGwuFo39Rb2xNiF2ATLMrhF7B1Tp7T9s6rQtRQt6bnvZZQgXRReBV1gJgwqhXBU",
  "key44": "2AwxUBPREKhwW862KRZ3fGPYU9S16geFMzW9KV3P8JjiZaGmRSu9yTWY3rQWd9GkWvA9X9UPEhVT674fNTXCPbB6",
  "key45": "2UF2XWsPw6ziykHmiwDBRdvTh3sEJEa4xYvm6MGekw8i3wXBzg895EbyrW4vthnEqtazDVvnPLUjgjiLwRtd843P",
  "key46": "65NRRxZes59wq8Pv5rJga4YwPGHS2Q9om9BdXBt7suSeA4B2Ufg7bJTPax11QxdHMEKFLGRntxzCsZcPQQUxzWUh",
  "key47": "2RdR4zdfVYhWTT6XTsQ16zu1jZZAYb9mHmD8JXz7mDdnvxzyihS5pKGdRZMVjuzVMUCbVkez328V4qunc5KwhwS",
  "key48": "4cpDDiKfHEtDFs9QYhMndZJnjh9ieG7pJuxnjw7gv9QGzJD1gPGoWAQFtm9HfhJcDrSNa6jU7CACsqcf5cZLbdsE"
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
