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
    "3a4rwdUN8TKnQNbckDvCxGdSTrKGH8j5doM4Xb25DvX4SppuGG4AYQwgbeLpspGjkWMxQj4cpvnZhUXVueZrJdCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QuUv34W4kJeivNf4oVwhaKPDWtQX7FnwvZAR9C3VQ436skY9f36NQux4iEQBYsETLcvTcRQYuqKxftKoZ53VDKe",
  "key1": "31UxUDa7jjNDuQsv23x2iLEhe8qh8DvM1zkbbsnXJ1eimyTqDA2EujLbmaru28ZZNEDzwu5KDsisT8fMjWS5v3X9",
  "key2": "5AwthrMuivtMMBkwqMWY5TrinoTVVw9uDdh6W9bA3QUStBLtjX6sEyRaagMdK3oMejuAkVXf6NTum5ujFZbndZam",
  "key3": "5eVSJKPGdu3rZeQD3fQboMhodAFy1382CkCaLkHkXkfgSwtuJKYYQhtQkrJKr52N9Pwr8YZTCpUezVeZutfpedjw",
  "key4": "5PsR8ZEMoSPNkUKRzvqyALUg1fUXeV7kbemymEqArSDPSVRa7SVggGXc6cXD9EEA3QEA5pWqEoCKK23iNs7yDXY4",
  "key5": "5ZBCYmDj4kkqK53tUFwRieC9PJUL6iBFn23zpdwtoFqvN3a2ipwtm4oidCw5VwnNTqau99UrhuKPpjW6dTqLvmp9",
  "key6": "R2WqRXZ9YUm6BbFB6Wm6EuGvnhx5UqPhKzYeCeA8mYj1zWUwoGuKbmdViBrBspa87dhqNq7ybNyK5ACtTqzvwhF",
  "key7": "3t7oB1xyx8wq4z1BZEiuigy1yt2XwPyqhBDu5TKtjhJ9ZutrX8hgEDCQFTBjSzhMsz3o1Y4EKUDt8PccPb99Ss8E",
  "key8": "47xuxvW8ydddPoVWaMPsnTFHGpgzBZTV3Pcw2toQTXm6oQt9BuF53jvdPe7ZEh7zCJpXBgfYpwqW63zazJKqXT8F",
  "key9": "2FREAzdFRSAuJHJzbjT7UVKJREduck3W1tfq5BqPgw2bbcFfmLDRVaRJPxdW52kgnGMw498xbFGXPvmN8jxL1chB",
  "key10": "q6avACHyU9CD6kHGk1ti5wh51CeXBmDjsSqd85D4PC423Hus8G6pc3LViDxuFwLQSSkLZHAFLUuxYKZ8tzF4no5",
  "key11": "3rKaYpGJTeNo5NctEB5i8PGx8KnoXmVBgSauVPLWdqfXEHNz7XWfKkSrfqPdNU2zw5uYLM7PYZE5kA8r6gCya9Wo",
  "key12": "4Y5nSQ4q546LR7yJLByJht5Z6rVWLnQRdX7PbFNRCmpQMQj36vMYRVYvUcPJ2vLaFTN7dNfuQn4Xf7zNZgByyfoL",
  "key13": "3Rz4S6hu7HpMwnRH2c2HkNy2A92hCeZoskr2GbXQxy1t7TRRcaDxv9pzPSXYjbsdnh8dvUbJyGWDp41oxuNkc8Tb",
  "key14": "XZ7h18o12BrBaUharbAJE4j8yBMiB6XadcHSdNt2x5fmFmpfuJXH3SCu8MQtBGwutbjNENMdu27XpmkLBa1QjFi",
  "key15": "3KZ3CcVivVRW8hM3t8egRwRbD8DCHFSJjk6PB3D8PN32zEg8pzeFknApZLkVuQ1kmMEzXAEQJrPfkdtqzhMcMxaA",
  "key16": "5ioCYqQMY43ptxsv8ED8sQ2MVfbf4BnaC8VHGitqbByjXCYnircdwg6wF1b4q2gzvuoXs2iUUx2Yz58Frg3q1BBJ",
  "key17": "M6ZDqiZowHvPX3XtVK7yZBVsYpCWaWgiWy7tPp3ZnEXu9Wh4NWVuoSpyKMGKcqq8pjR5grZngaBZXm68aNEHFv1",
  "key18": "wGFtABfjFhTjQMGvUekwEE6ER5iKfBCn6o7b6RUXqYziF5knhesBy27zzEY611TQjooDaSXrY2f29T6w3QzC6Ly",
  "key19": "ERdxZTCAawHAWvbhzwxTHwNKzZEZsPqwpdvSGE1Wa8sWbeQNSZUgYT85DtkKBdrZrzK9cFby9aZjNBDeVYR8JGi",
  "key20": "5Khr2Gbhaqs9UMMnHvHrZvPHru2Na3VcGxeXFKgpEgRpaeuY3EGbSywwwDRsVCWaqBmhRVabS5Yn5iENWBSyzQob",
  "key21": "59hTPjyuqCyM7bqgvQKQed6DkHnZcwWSGQB1bhXzx8H1sLTeQEm3RGYzfvLVEx2GP48KLwnkJjGbpXnEpkETr479",
  "key22": "22T8aGfMtAESVfLjip7wZVnTFoHUWko1Xh3AXR6AExALnTKYTkYKvqn3SPmuscJ8eWoDLMeeFVysoFhZifghquW5",
  "key23": "3EG7v3DA34H6c8KG9qF22cTSUyVLKj8xGiZiGrCYVQJqwV1XnNBjJ2UgyHmcGJ743zZ8Psu1YVgSM3w9DctnfN8R",
  "key24": "29N46TgarvAKXttVk17Sbk4bp4MzCGjwDVPTnYYENf8eQTK8ttbPtxY6pfVrmtxe8dKJvbP93Gjy3SmYZQ3ieo31",
  "key25": "LgyVinsSNjiEbZ1yDG3QT9n2ib7opB8Xq9HTtcPqetHyAWjKLfMzuyVMSwfNYGuxPGtBmyMvimZ3xfoxAVnXcnR",
  "key26": "2DRcXQjW2s14D9d4UwXHvkn2DeT7cmn55qz77uPHpHNQe1HiW6MytGK5ReNKuXKJfcoZTXjq67MJW5D7bY9tiwtU",
  "key27": "KMdGp5FyUxMqMvc5R7W3kL82GcNB1yMRVQv8aBuH1G3Fg48ygGp8NsnutpYTMHRPZ6B3JEj5d6n6YNK6Q4Rvm1K",
  "key28": "5sWQnyjLNogQDbEkjfdaoXie3gTxE6bgmxxdULjJSgCkNA7JUbRH5b3akUcMKrkfjbzgQ2tZ8ow1KnvyeW2qyDrx",
  "key29": "3ULs9NTmjmML6GbwWnM5mgX7dRGG2Rtu678SvwoommPi1bQnJoqdQ3wozGtsuZ41euiHavsFjr4HksAhnreKCjSw",
  "key30": "2AR2XxEoD2jcKBNfexja8GThVXCoSJygBMJ1na3RuFm2SK36gUiAWpDeJpC7BZ3eAvVjxYHRioxZNwJvAgjzH1XF",
  "key31": "2NrL2Ecjov59CGnC97tsqCNqftTww81obfwesNhx5ZZx1BDhRG6daHxWVCFfoSapCYznRv3WKnSeN1JsaAfdDG7g",
  "key32": "4m6txRPXGR2uCvTTSvbs1tspcwArfPj8DnkNNhmrJb7q3bWcbQ9MvcJTD3rXPJgBcxvYdewiYFeaqJkaDoVMQZfe",
  "key33": "6C213ppurz9ewwhSA1RkYJPpa4A5PwwvowjaEoEf8d92GfuCfiKbMzVLbk7LiZ3ibhAE3wZPxCNRzfbPrBPVGqK",
  "key34": "38tgWJKGh8t9vgEsn1aL7gnpVTKbCpEpzgueeFh6CajLxzM8Q84bR6wqRQmbBcZUJH2Ri9epJSnL1jYwLNcJh8mx",
  "key35": "53jXKRa1NwcyGo7Yib6kigyzt7v5mUubGb2ySj56rHD8WjcrL4n1urLFhwMnw9QhF113NdJoPJxtSmB6GjfGfTfj",
  "key36": "2NQkZYy2K5cTGS126arh1qxGdufAQrsLcrJQFYwtS647yrSsMn7k8SCXryyAMd8VUASkpxWBLfzTW6KFebQGG6re",
  "key37": "3bUotSBXMbvryaTXiMYW75oywxcXVDU3gHqgxpwyYCmPhvRvNiGThj2RZkbgmnQ2d8yemAsVhW8Y7FDfYCyKfdh",
  "key38": "5tTCvLSY9rBgM39sFiEqY5mpCngT3CFzhHawuSmU4cXdGFf7nx138JytEWBPFvz6AfSKVeHdaaCBgiLfkMuuzdXo",
  "key39": "59mizMATcjnX4NAk6NexwbwG2EttcqNYwqco8fuGst5vAm2uADSTVcXppu9RfZq7jzhBuiojk69QGmqS5MWUQg5e",
  "key40": "3qS2k83jhLZhaEcypTwGcJ8KYKrsFBRtLvGDQRvyHY3kwF2LCjYTc4Q7qumnQnvzfXgmMt6w9wR7tHgeFrcKBKzd"
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
