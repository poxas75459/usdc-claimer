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
    "4eJokTSYUNLN2gc9i14WzmyYgXb7tKkvVJrM5HpAp4TEdzVtv5UEtfRazJ4x4mjWgJa31eq2Sp1zLxhQxXEUX6JZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48hWHwC2TLPpSppbW2A3rJtfz7Y6PrShLJGkKX5hSZa7sKqhe4iuz6QcNddeZCyDwYhiVxadGKi9RrFZPrvrSudk",
  "key1": "5UBxdA78g2SsiuNRgmfQDiKbTc6YC8g61TRp4cXtvJhHQyCoDt1hxxDuoU4XGeSCzcGUayd2j5YVS6GCagMfD9kG",
  "key2": "338FbR3KUSGXj9xyzs6pAYvxB267kJAKCxz6DvVALqpvkWT3AbwdeMUi7A2Bhw6LUVNvABCiEZmtDpdNQfospb6Z",
  "key3": "5mQQhAMNGt2yWisze6Gwkb1sHEcYFUsKvzePxjVxjxxVxegPozLSfDfRGsKuHfXQTXorNwvP2ePgk1E6eCrcHzUs",
  "key4": "RjXi92qw6ez8mssxFvFJFXoDCc8XDUiEbM8yQ2Ewb2BRXYXQuyceqv7KwRqjbxuahkbipMJbk6byAcvQA1jgm3g",
  "key5": "fkcKnxck3HkicNzHkg61VjoWRVLpK5hvcd5ne4FJuT8hpuqSy2R1wNHrMQ76mXEmDoDxhQBhgqdT9LmVX15gNY5",
  "key6": "37ioFkd6WbYKukAzmwaJS9mcH6UjSjz6fiwjpxV855sGhtE5tRTJTbtxe4UpZtfWDkBgb2VBdx9U7yMuLQop9xc2",
  "key7": "2PEFuM3ArQFcZD5eTTLjQaw7d38XKFMr2Snvc8ZP7KJu2kGA8Q4HgdbNiTZuBCzzuVj54CeJj9PEixvjK4KfGnzK",
  "key8": "6sC37rbhzWQmMgwXvWXsyzZHjBeH1nRTsU7mAj8oBUWUtRdqGxSBfe69tpJLQpMSyGAVC7g2FqLJWQEgCRqWjqg",
  "key9": "Vt6LUmJGtv9Awb6aqyHtEke4gi9SXYQVPoQ3favCgYTZtP1M6gpTsyPDgMexPwm6hj35RMQH8EhmUJBce4yE3ZG",
  "key10": "2YGGb4saqodRWg3f8evs1FdvB4Wjjkeb1e25HVu1pURyxUQZDmzmEtP9i5RFAFMfwzjLNYbBJVwYLj6ddg43SVaS",
  "key11": "46kVWnnqZV5sbCBY3AD5FEEyQcVk6k5X9ZpzFinuJ4MjmPrrBAw4wPCDrKwLN1YqyiFZXteupooTzeMvH6eiWrf2",
  "key12": "4k7qGWGFmVM6ZCLJTvLJaoQKu1MyzhodyMaW7cRuYouc5Y1FMizJ36TEBLttmLVfLxnq1BKuArz3cV6U65vPe379",
  "key13": "5yawZiq9jAudXNabbaqmrVdyju19KgikFsvPq7iCQKAyFiMQbJyCdvkdd4qk15gocWyUWWKjk4aJMKuKndtXeoQu",
  "key14": "2ZxD4KdZ3Q5BtjSsk4BPCGDh7SVP9WjHgtfgsVKrft9QZJv6DvwK5sSebnXTHnPY9PfrUVzMrFJkZ7yqYp43NBte",
  "key15": "2VUmHNb7zQrAE9p2ssPpSJu4SNWmss2LBqUMbXYNEJTzn7Aco2swxRk8i4t3Lx9n5Z4dBzQyiYD7TugsxU6btv2p",
  "key16": "4Hb6QQQWS1WWcRHZ98NKukz1cjLJ65PJ9JvUhXwWsxV7U24cvKbAYs4UE8pUnX8NKFjHeK1z4siGCV7wdqjVNkJU",
  "key17": "35h7vKsa9yR8x8fsqPK3zMZKrbzuXwg11meBWnqPgYzHuNcea5PzidRGFehrHjj6Djhc1UbiwG2CCbcp43aKjFTS",
  "key18": "5Jsnwtf4fQfa1wnz9tBxuLNk9S3TwGAUX7VoZPDKqU8K2zCzcU1oLmAukpv4SwR7TxwpUfm2X2zZj5ds6rMBGcDN",
  "key19": "61Pb1td2f9PZk8HAXLoGmntGj3cSCRecagMK8VfeFrDZXjccMHPaXXjtCKbyVVfkT3LFazGSgBS7DEbBbcxY9s4w",
  "key20": "3UAdm36QuqJjkZAMTGgWmeE5xjEa6gQi3hLWq1uzqhJLhd1mnDHAYqXPZdZbuPCsF457FHGrYDsJjW1tdwT1KAqE",
  "key21": "2ov8yHYEAGRuyiWW64LPrpN6XnfKhvREqrnm3B2227fejgXrGB8QjfEXyeRxcd6jRXVcaUB6xEpCC7dNmLKRzH6p",
  "key22": "4A6GLyR8YdczACaDVYWj7rBSs3W2v9stmU9gD3L235gXfWxS5gRrkYdUP2gcghJaoicVCTnZggbAkRyyxFdQrWxh",
  "key23": "3mFMufbJkeQcRqgSK4hR6jfT8nucfLzKn2RGxCMoL97Sm2JxGYShtKJyutQpX6PqiUEZD4dEqV8N3frgKnSZS5T5",
  "key24": "m1hephukRjHPg5tFkUeJk6GmmAMZ9LDZkg4SEdKjsXVeUaaytTPreDKcRdDCc51JErshzkv2Qv3LRKVANRMdVad",
  "key25": "2NeeYPTiVGZTjyZhJABsqqB8hXd83vaG7rCHcEouLBk3uyXs8w146htHJk2KG2WAF59rFKmKkSKDmdPcBhMoEWKS",
  "key26": "5caoBr5NSFXtZ6hcdz7mfKcEJNbHiNTiEmBQmkNZg8QeYhvMwTseNMHeLVYsoFecxvzdm1HSWNNjScRJPPJceEtk",
  "key27": "5R7iWWp6U4RtwN2ZVo9FR6iEzGYDnatfP356fvtDQxhVSzk6YXpnxb1YWGw1hV6FQjPqVxp4NeuGospABipxsvyF",
  "key28": "5HYaCzca9cmf1guhNEkASYF88NAxkZ9tA9pW7wdnEh1udZLguH19EdBipAx3BLRjDsMPEoT2w6VfNw1nzw3NCdoz",
  "key29": "3j6JvCyLCGNjRMPReRMEcHeYzcAw8Zh5gCgEK6DL23UiZnr8z8NM9ghWqsMyRf474awckW3K7ooqR7ejyMXgyVKb",
  "key30": "5QR3sFgfWdFtpiNaJMW5dUEwTwDDn5kht6ntztTcfFLqBXgSUbygfX9DVaRtUohXbNQH7JRhpUFBnvMYCbQtFccp",
  "key31": "4gU5h9ht8PwFA1v1Rgkp3WSMGqEq9zhDMK666Jbox9DHbyMWiebLTqhS4VpxvgrR4FR1t7N2JbRgD527kCC2p58v",
  "key32": "4K2ikCxRfwQeo3YFbH68HrEXAsGxHm1m2eWV4R14QpFe1hQgrrmE4MoPKqA3YjAaC6voG9bSzkEesoMqt3vYnCFb",
  "key33": "3UkJyyFb9YcKkhchT81vcQRLFpS717ze6TyiCJnhtZjME7D1iM82QDoeooWE6k7mUrs4tdaed8EPc6Kn6BoHuDr1",
  "key34": "5MzHoxANK3n4svBfAL2qdtfiYqKoKYydkB9io3edE2EHyUJv5nZGSG461PKKoiuS8KfE4nNPqDMbAoPiptJpWQox",
  "key35": "5sgZe1D2srHTzgGDtagM48DetmXQgrjgQUxp2kEbVxMfBBYS8EVSkCsr1sSKQcanK4PKvE6FSjSuvnRnR48iZUpe",
  "key36": "4dbuXQNWuAAD7MvjLdiCbywouqmmepBx3TWtCJYkU2VsQCvGFnDZ2ZJ2BbRrZPujQUyhSFxaQLt4TgHFtWHmAvVy",
  "key37": "4SxtvzTmJZ2EsGr5SHe19awnFdSqbi7qDWs68X6tjqi8EHvfTfEeykfne37aAViLWNhHewx1ELxpTqPhVDPdWTcc",
  "key38": "4Fg9XUVpVfz2pQNGiu2gtvQbE1UNUDRMmViE2V1zGSiXJ8Jy13ChaA4zxiFqPpCpp9QDJHzP8pxsQtQuMJPVQn3H",
  "key39": "26pcTSrs8qERKUe9a5nGc1AVBvKuVtcWJ7NuJZ6rNYVwy5iToCYfiC69dqBYquFP2u1wyeVgkaQmmU6hfahXXAWp",
  "key40": "2cWK5pQWKC3UysjwDhiWVb7Q1PwYV4BuhFoygxwSveN6awhMUPtZTF2j7r5zQx3woxDVxXcqgyeWDTbJ9ATrAo92",
  "key41": "rT8HQSjSqANhHy6MmE461cZ3gqT7FGrDzZHxMUswwSoHGbJFopv4z26LyY6xDYMQPNBgFZRCK2ZD7Q2QRc74QfV",
  "key42": "5PQrK1D7LiUPrg5yEGEpGSDqHxbX7kDLCgeiJLahW8dri4EVWKShxiu7CYbyoUCyzr2WHasdELwy8dvLTufHHoa4",
  "key43": "4JwH3eUPx93sPYR1ZLwy3EtQA9y23JE78JSyJAVpK4W3dvAW7FfwRdCTst7B9szxJz3ec4mrqDhXwBXzDyxxV4SP",
  "key44": "3JC6UceoGpNJU1r2QSnci9YE9bGdnkcFfL14UNrZ4c6wiqkTaCxAgZBTawoDjbNVCZwcJHLywEU25AUAkMTMb5Y7",
  "key45": "4c6GUbw6UR5bHiarDTn6YdibmxE9iW2ZEVZnXZ7Qur9Nmfc6yg2ttMRLf2hgqizW5MN6AtyjZYJ2cK7NzmwYUzYW"
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
