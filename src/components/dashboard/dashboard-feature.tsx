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
    "4Pnoxdgq98BtN9VaahY1nHPgkRhEWopyVB8wocqmCHtTbc8DGPX6VDagtFA3SDhHKviFKgSDRgdKVxk5CWs1Vfcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31gkgsKZYEa8UQCKh5bMm7KwXrTUwAqWxVzAUdV2VkTq7fiLYT5GzBFcp1A88kydGXDy1nDQazpaAn2hFq8q3DrL",
  "key1": "2au7ozC4qD1pJz9m3CMnDqR9LVRoZeL8oxCkjtbXBRaL2vzZKtTyBxqcoaVAQGWZoM2xxs8CbhJUPM3FQEP42cjz",
  "key2": "2Ujt4Ysh2X3uMJJMLExW8YDgqU9SaxmUhBnENFwRgH71kJSQkCHLDMKAkBJ3tokaxTTsLLc5gtimhDe2YRxNJbXA",
  "key3": "4S3VRs9Tgg8xUrqbzEpdvwszpKMf4xc2Bhk1wf9wRccz3NsUVusuXErAkXRqU6aVhHSQZSHPJwDR5MuvZcyMNv7x",
  "key4": "3KbdYvCwqQ4FFhNb8JMhnTfYRVxK4dXEqJC9Nm1fmNA1nvGPVP4XGbg1PZdggUh1qyMVsbjgyWPTRhDcWnwQhJVf",
  "key5": "4syTVtijZvFVRw4pF5g7xNP7fsN3knbWyKqAjhCox65bHzYR7cDVjKekDvrFFiDcCZc9d8UEuQe9bspXTS7x9HP6",
  "key6": "4UJfqsaKLMME9t4Fj84f2fKgwrUZ4GTrbYkQTMFpuQyLyiAQzCnvdsnTbiRhDtAatEzdmx2eFu1cLKT6g2xs5U1V",
  "key7": "5xso3V8GbXwV5qsEsFrtwSzVirVtBk95PovfowimxUksx8h1kr7Vw5k86u8uMNL22DAgmsE3sKyKnkyty93yv9WQ",
  "key8": "3bazWAVMUVqwzhd6WjhrK6acgGy8Fr4KT1zmzWRWMeGS2SqsnT4d7ECcdugb7pcZPiZ91e3ytvFDQruWLNgL1VzF",
  "key9": "4hcwq5dZ13GAJNpXqJJv5jjsNk1c1K6Ji6hhU1aZ955EeeBeahKJhVTzYDD5MrgqJQYJUS5Xt73c5qi8PdxDvmSk",
  "key10": "xPfoiF43vye3KRiVMnC8dXVV4ctq6dSvBGPUyYXbysNDT52MvTJqSrYxH1B7YjEx32Q3CayqmGS9pq56KduJxrb",
  "key11": "yXzBcuYMbSQXcUz2TNEubj8z6cjP9JmDFftSdSPJskgeeAgWrxeu7qzUEMSjqi6wU2qTafxzeLpTQW4LJam1Sjx",
  "key12": "5x4xMoPg9Tr2gH3qpbMJZS9WHXLSdQfipTSLnT9Lxu25aMWCZNZi7i19tqkS3KGe3SfJ5cY1rrZioTCj5986828T",
  "key13": "3ZYvBTznmiVWxFwYjjmyWuP6AQUAgKBMGJTyeVY3HvVZTbneDEJ7Dgf4qq9G8sByvRAuJxhfj6noCLUdbcSSG8Cs",
  "key14": "3EbdaaiYrq7A2RxLd8YjrtPVSwo61X61rX7pfJp5SqRbw83N3vSDBavFjSd9qUSnRRYBeinirXFFMQAhEAt8mvb3",
  "key15": "65koUDVsF9GvxvrbCXZwRENZ2VZDUthVmcxj7zd9JLQvNe8oKWpZoC7pAiF4AqrgmNa8j9eYTJMWw2nUGuorxpgU",
  "key16": "4oLXG6TE1TSV8engjWHcof5cNqzvHx8KVHjyGJYE3W9gZQqKSredUkXGvhBHotr7c3idQwzP3ieVwyM9qZp2woFh",
  "key17": "47XpRLrR3h72Gd8zsc4YrX3FaaGFj9PmWqnVms8tYgCa6bzNoo3YYw4bPY9SuqujdwbHQf9KVHcAsDWCdo3Qr2dY",
  "key18": "5UJFM9xGSSfedmgwTcVLV66c7VXLZbRKWG4L2pBQGFTpjFeFQpsVPzbysTgzoHPNfmm16Gdath1eNrWox4jcW9x6",
  "key19": "2Li4T9ksKvmEorWFnxTbyXPaad8SS2R3rUcsq66AcJ73NAsK6395QYWPMsz4MXNt1BZ7qKumCQgxB9itNESLqR2k",
  "key20": "2qPfHQ87P4zS51yPJWmKm9EUUNxmThgFLekf4MpcTsmEGEAn5cHoqy7yx9toAU2ymP4Q5beQhckWXXwGCuzMJ1pY",
  "key21": "5Gk39Lk5JjdmqG6XX978tKg5eTDkfNb8UdXvNKBb5AtdJ7goDWdoWce6Mh8bX1QyhcDKsEwRyCWLyvkewMvoJhjM",
  "key22": "3gSfJn55teFZYjz99driigKLaLcPKFuBMnRRVFtSmsbcYPhh3BoKboqYr8TKkQFkrRYDXaFWMrvCZNyxUUy2SVPS",
  "key23": "3zadAuJ7WaZfjsf286jC3kBp4BsvcXRU58HkybsAB6Lq6nTb7hnhecmstUApq33ndLTySmQaSjwccd6KM83Qi2Py",
  "key24": "fd8dqnAZnUJotb1QT5NZiRQCfz8KCfKpJwRSrexfr29wVRYSVJ5nGPnYU9LkLyQrHNmiVFBmDM6QF6NysTAf9Qm",
  "key25": "36rPmmR6u3jcqrY1VxANyg7erpzw22BHmDjL5AcicrWGtYSzdF3AH3cVnGnoWsSir87h9FtBTgBbFLbr5ebkhVrC",
  "key26": "4hbvBNix1DBnNLmGcrmXMiRjjwpyHC8eF8iaTFGEC6o5mhD9eiLmX4rT95ksmiLNmbwHaEUZyH3CvuzmgLbz1hsR",
  "key27": "5eg4GBoC7dJXGrwyUtqaT7MUsCdUhoEcGYF45cSpHPb2Ro4xgEAd4T63MBvpGnHw8W7KAuBKBMnZ7hQKkKq4w7X3",
  "key28": "3xHyHCXBGeSTgfHnEsXAe36u7g26X2WLJ775rc1xRDPmUxmQ8vDz5j2FKriM3RwbqqdchDDchRu1DFXShEGeb8TU",
  "key29": "62YBR3Sjae5N6wpvXV1zbZEwpLiQbudUDLtMyn9w7Qn19DVhf6xkccaJ5GMo6zFMTpKonDBC9XBM3HZBQTfK24BD",
  "key30": "DPMGo5YcPuajqqCQ91YG4WKhmxJUCkK6pAYeFxxHj5y1eZT5Bq52Geqxqpj7penckTEuZdecJJu1qXZX7y4RZgs",
  "key31": "5ZSr1iAnfFEbxwVfrPMLAeg2WyJreXVuA7stkiZ79cVTYFdkHb413wfR3quazgWaASNfa9LAimNArEkzaw6mDRdm",
  "key32": "3Y2yucL1qVdozKXzzJQArzsrEfaWjJaDJxAoyEomV8ips39KnNXqS8iMUYpSn5g7asfzgiAa5tkNURfwWGHauWhE",
  "key33": "37GFkUhBEhSkRrBhp4q6sNLHeWY4ztEFEbBEVqPt6u1oRTTA3xpYhAbsKHdAQ5rrn3VxirbBi6zHjs6s3Foeuevx"
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
