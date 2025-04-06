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
    "E7wZHyBSdWPTERjSZF89kVMcfb8ddsERSCDR4CamfYV8dTpMNDQ5KdtzF1FeZXZBkLPKAWmo4ugQGcY3i225Bnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uFxHZYjWSYBvArogygSRzcFxLA5FQHviNJS8L6HUP5rExjEUB2CbeKd8M8CZmZbjkb2dAhKW5pEcwceveNGyw6S",
  "key1": "3us6yqvpXcuL35DLnErA5RswuPMmTq4Nbs6EjqVAtd9geVNquDfHdweQHPcaUgBQkzK4hSr6ZA18Yhua9sykoE5w",
  "key2": "7ZDy6mevWJoQPERJ838RaLbXdGxas9bVcm1fE7GEDUe7rmeNA58XJrgSCpr2VFQPEWhLDGPk2f9W1FPvC9DWud9",
  "key3": "5J2eoRxmozuYEiJ1e5MhssQifER2JmPMSrL1vuRRnuiUo6uGm39ndQ2qcVjV6Yt3A3j2Ffvp7U1b76JKrta662P4",
  "key4": "2yWR4UeJz2rJeuYUHsrnbkkULEQigb2jpoS533wiSCjXHpPWE69PWhkQyTT1eHpJFvHMWL9yvFxqMp5q4V3B5VUF",
  "key5": "4sFrpchqXHQXJkwoXkAFLZczm6ucMXbn6yX18bJvsKqzHctn5dvk7fmKJRuKoQ9aLjZrqVgT2TXUKZLvZGyMjymm",
  "key6": "5zhfGhAbBcqfBTbKfAD6P6pHtYu3AcV4oErPHHT6ucfzGDxdsbHMYa7zqhTFzKQfdC6fr9YWSJX1V3KsZj9pBJCR",
  "key7": "5gVkPjGWNKaHt2RerkUYpNUujsCDxiwKLDV8cyL2sDKNvwDqFvtCwR2bmweepb7DUNfxBRy2ScpzkiEjoJrKMvbo",
  "key8": "4rQ3ndKZqkq9kvii4AM2QSvpBite5zib5vko7DhE6dvEpQvbVxtRWcgYMUtpyqqd5P4XZxmd31EdHbzbay3hUuSn",
  "key9": "2DTNQofpCTs3HwkvdNJt2nam9pofJT663rDdAJTa96YXiXwanWWia8j1sZFTnoLFRrje9tmSLxRDGH96j7qk8gZv",
  "key10": "5TP4BpR5x1JktzHbyCQD9YEyp58hdHW3PP5148Nnri4owgi8gsMYd8G6ff4dRMAhPQDUSyQfPyhknqQ6eKRBxsWp",
  "key11": "5mHnpRtjS2fNGmCaEKNfXGwRfwN1MgKQAd58BpsdpedFHd6HtQVfJnqcXbkDXnrFTCQzPhHc2ozfte43PD5ToAWR",
  "key12": "4d5KWCcrUwvGx9ZdwxcJC8fev9acckncpkRPpDRhqDzcjuoe93ZzkctNY74zH5w9UJpizZTKB6b79QxsEom9Db46",
  "key13": "53W726HWWqu8eQyHNBBkc2fb34rHei4iXopNte92KtwALcMrPXrca1DSAxyW8QgUDfkSFwP9k7g4quHXyfqEMSe",
  "key14": "5NShZ36eZiZziNxnCByZ3ktti6b6kv2H7nyEkoJi4GrX7skTcwr3H2Ss8fSWHiCWZf1bs5X93aZoVSHvLxkkh6dk",
  "key15": "51JmA7EWxMMEdJbnE1AwpMSTyTErPK2YXuz8FNGdxkkeXju5zfkixQyD9bBCLABJ11hwsiy4W4ozFmEbVyVoGqb5",
  "key16": "2od6NEmqgRBborQuKVQbEj4EvYh4EhrvBnn4GRQioV4sBXp5BqRLCdoc2ijvDgGDXP78PxJ6sSaTAPNQ9xbY6Esf",
  "key17": "5PRsps594GFFEs3xppdKXD6Kydfeodwiez8LbjgCbVYwxMJf6Hd2bqzUxVi3XHeCK5zeWRr9r2pcBLZwKczcNd3c",
  "key18": "5k81RVzRn6PaU4uQab4KuHACyKMkQp66uS6amDqVERCLSteueQpTag2cPpeNS6Qv9tRNiLruD2JXoUYGHqtVKJBb",
  "key19": "5VAbxee9hDMyuobWCqnwWkg8TBqPT4vakFvw6YsDaKpx2HugGPjykD4XbjYkPcqgaqedFhFpp7EDYpkSxteYNA8x",
  "key20": "329pbrSQFLb77bSBMfFerB5cHNVPbbUmJJcaFXD4PzGFTFP8XqhFeJ2UL7NABXPtV9AsF3JhB5hfqNkYrihxxZDw",
  "key21": "34YraQJUG6ovDeevKyU9XyFW7FnAywEgBPhNbwZ2FwQC13YuXQHPvokeHsxzU1wtGEM5K8sDjmRhEpQYWm7FMzPQ",
  "key22": "46RMbeFV9vdbrjrnhhJKctfkDtuTJQNwrmnTVWZZR2v5UPr9t2yPL9Z3fjqQdibGQaiYKbbe6ZyTPjHzampDp9Jr",
  "key23": "4TNKTdoi6q2WwbHZDQM9U5f8x7jnWGbxyrxTVBacbTAfheCK8B3jZKeKTdJNgaEtkV75tw3WZBZRaQkvTfUyNVKp",
  "key24": "5FtZpVVsDgoWbjw3FchNhDuQP8YBBzHfHcDeU8ZFJZVXb3MLuhE61nEU13RUuw2UqnqJhgK2Q1PBxz4Gj8y2yUNh",
  "key25": "4m9n2qnF6rii1c2A2coVZVbvHmPNpakxSNudMzB4x6sYSjGCXpaqtGYLmURug1jhznWnkBkoCRjxrkgyYtkgzcr3",
  "key26": "4PhixpH9zyPFFCQyExMyC8EGJ3BwGJiBa8Y8XG19ir3uT6wvMkGmQkNhk978Ct3DdfUoi8nAEcrcBeyPWGGvb9pr",
  "key27": "5pEap1h3KEMBTRCFe1xJ2p3PXsEviWVwG3GZUigp4N1ErUtB1FoMtpUoeL1J7G8DjZHwwTRkS43CMcFKjKmDkDXW",
  "key28": "3rrTaBvyDajmEsjS7XxonC6K7T6iezqBKDARFyhj2dS4hufPVdXYNGGcRTJa8b3MHpLtPHzjr3j5Snw1XRsTFiXv",
  "key29": "2LQrHJkaHs6Atw6YpaBNP7yxfRbH2txAHAqRtYNW2TcDDqXTsFFCUKkmCzDY14y2EzP3mWJgRiW3VN1dSc8Hd5wC",
  "key30": "4EcDyCYqN5QnhCQPbeCzPF49Pnq4hc6SPTnt3DmdNLDb9Qx1qZnS1czCBuBqbuVoMLd73mhrZaf7Y7zFEiu8GYsi",
  "key31": "4gfnNMHPyrLqgYBXHRGBGKZrMsYCF7R8cY3edCjz43BpVb2ebajn8d1WfFTimEQN9TRS3bzq53FG8vwMyoVnUxZh",
  "key32": "RvsB46cBiYUQgUkHLTbSDU6AwTx5jWVQz4t6t5xFMCcrHNhAH7EZ1VURe8zoo22CaDgH4j4ZFohtgeK8zWLbVgs",
  "key33": "3pYbKfago5iPfxzFFQB6ZRspUmsMHJgD9zfQBbBMUhfRgmG8DhR7pCXBEUeaXRTNSHQWMtEtUASEJBrB1VPLxBQQ",
  "key34": "4rztJHvCh6351YRDzvcSxJnCPbstmej5sxmd4JVPziUP3qRLcm35FXQwuBppaxbkDiKCLDDxK2ozB7oVqvMinQ2z",
  "key35": "2b4bjaPFazh9fmUEHbR4awvRP7F36QCAYHiRe59n8pcikCg8dkL6AQhvijQ9aKr3sybjiqBrcV4XLo5NSZJSkWiq",
  "key36": "4q394m8N89nkHTesxh1hikUjkXVTiji924Vxoncg7QWfhPoApw5yDVegCAuRRuJSSnEnFegSjwp6Nt3pJ8oqwofZ",
  "key37": "4s5hApgd8pSBjJAUhtUKmg6mUDpxa9B63BCpYKobvZMHtpFtaXKECQRjT3YHCq3QA7QhHXUwHi4LGubQm47WxCqa",
  "key38": "53m9mfUvVGJYQkRjFahG9jMQhXkxxhLigjrNrxbQ5ZP79GHRydgfd6ZZ2cSmgziVwmbFyPXLWtwoeWhfsprh4s11",
  "key39": "3wF6oSFZujcN5Cj8ZkhjUL56g7jtfiSFDNvNYRVwU9732m4dus87b58nkTykCBuVSXNiWWNkHuyXUrj9xtypYAvp",
  "key40": "4aKtVydmgPvHxLuV252z8WsbRSMfRW57AQgQVMsgwL4h2kX6zN4AJHuVxgT6Wqzqvwr1BaUVix695D8SGUQAiTh5",
  "key41": "VL8qsAtyiT3mQ9hgms8aeZc8yLp15juM8hdsTkF3DVvDtbdegBVnBFsUGcJV1ZH8UrA6a8VZMUyL62xyCTzGkpG",
  "key42": "4vUmT1KwJSxT31tbHUDEi6TN6SQuPiDN7pdDu2J9rzRnxAkbDQbidi5Hnv2LFcPFXyrSKF8t1xz5Mo8Ri2xqF8RY"
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
