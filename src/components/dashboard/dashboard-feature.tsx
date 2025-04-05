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
    "rFvbfpyqqWKpRhvN9YfSfC4CGfQhukgpmnFc6aUKyFEcqJ5BCYB2zdKK5ZiP9hXvV2NeU1VnWx1wTuUWBbR1WQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wbc8pydv4Qwb3Upi3tPPiFrwbQPSMp6zWntmZbfEVAk34WahMFW2wAs4wX7HK6eN1iPEm8D2jrGCC7Ugnk5tvnE",
  "key1": "3xthPuGgN9WjSS75bUuz4t1BB9BfD14XkoV6ijwKCNozo5Tk58nsJnpmVNMsC78RTjasUTJtC6V8Km5HhjNburL2",
  "key2": "2ecgpxS9rM4CfJkSQybCNNaoiS9CEFk9kLGAmniccxiNANMA1FRYnnC6NgUHz1n9RMTd8mTE2zCRmmZe1TvyXBVW",
  "key3": "58cMWFKwhaAhBRWACsNTzBNeM4EN7uATzXjwUon3gcqJ4xAWEcMRF2bKiJ3Qjgi7uoRcqMsPrVHYPD4FgwC91Yy1",
  "key4": "36SncCBQCCwG4eMog3F3BVUer7947UHyvr4QuZXZJ9NjKJgKuuAoRLGhwmmXJHUZX5X4sWutPjNqyJds7YrTA75s",
  "key5": "3MX2BNYaCt1f15asJjQzH26h6wu6phrWFJVRPPh5W3VB9urcL7HaTShSfiV9NzvCZ92ScSBYZXKsbQQgC6doR9wY",
  "key6": "5Nv1XLSBzZQrLm9Umw9tdRAXWvr2zTkCzXmNXP1sAMHYFt8ExUTpgR5YzV7ppL6eG6txvcb85ge2fXLs2Evpb6uN",
  "key7": "3GxwuDpJEVdv89DuH48ncYcJDbN8LorTfpXE1K178xrVTDLRRbtw5VG3txtc97vNEpZtjamiyYQAztRpknRRQt1n",
  "key8": "4b8ZaENyuJfVvfkN1iUtDFX1XthoMqqsq8iTKAfMCMtWLQ3bDEzVBA2zat1pZ6F4UYoohdgrzZ2STjgNsCJ6bJS",
  "key9": "2zDbKj1poi9bJ8TU92NTCJhMFxSmREEHjfRxz8Uy1BKypJ8Vp4QCfg5sxDg4HPeN5mVVUQ4MWjhRvXzGZDWDseSN",
  "key10": "4qCkzBYP7gXSdLoYQ1NnhkDV9MeSvQf1bG7ddRXDV23ZFHc1VJi6LmfL4Aot5JhkPgKbzqsC9hx4KfNAYMsyKuU8",
  "key11": "4GCU5D9TYMtqJssJGGLh5R9NagFfRkefyNizPF5wxa6keUsS8a2jRXpvzhdXcsVWEgB26p1egFcb3NemPXwq2bRC",
  "key12": "3V291aFcGu3MHm6T75vTEoS4RZhuQWFBsZPuJqiGA8BJ5PdEi7xGmvjkzuy12xrwgJKA51SWNkDPDD9Z9fiWaSz",
  "key13": "4eUpxSbijxSdpqmzuS15DG2DyRU6Y33RJ151N45vVCR96qhMybidZtBqp6AfLNHRdiExFkypHiLEXR1QWH2FQsfu",
  "key14": "2atry4XWjn7q46DEaTPCNRQFuy3VpNQ2j4M8sMwHfvj3s9KzPpDoPd9U4z8MHtdWjc7LitCqYNqKBjYTtY87NbEE",
  "key15": "5Mqzt7BxSZvuiP3sLoNTgGQSdS7pStfHFCn226wg1ViV45oXETj8JZwuCrP4CP1sbrYYazJcmMRcuzYwY9bfPa5v",
  "key16": "49zdj9vWq8DuiEZBPZyFdgp846fBaVGX4vn2Z1x7kqNuG7mcHJB6qcca5KK9UNbZGUHxfWYHg5iLSfaj4QZyKxiv",
  "key17": "456zLxVxP88S8SXEmgYuWQDo2czLEenS93UuNPGCq1gJSUHDQDyYAPXy1swxZxN9u2LcmyKwKgi4wYKUJBzFx4rV",
  "key18": "62AeV8kmb9gDBZEsKT3ZUW9Q2BH32Swa8Agb9EgWUPeFhktsr3k6rnRhBGsDatJNLocFoL4a8fpywGjU5fUZahyU",
  "key19": "5CXt9SfvmpEXYXu7Nvrmctph581TmvobkkRoPj5oZSxr8GEwkp2psQSA7VH6u8Y8W3La36YfkqrqzCSthaQjMLD1",
  "key20": "3MYbE7eMaEudTaeRrEQL6SPfSZhArCzRiGu8hQW2oGEn9u2TWJThttCHHg6TAE1LyheTaGQQphFJM7cKPat93ndW",
  "key21": "5Voq46qk9bugJM8LoryYeN2Fs6ogovaUqpWa3gJgHsKYv6ddbTQy9CnP8bDXzfgfo5eH3PTnBDm2W7MqDmq1xZWo",
  "key22": "46kx61KUiWD2Djowa8Wx6ggc8Pc7jr9sDeK3UF6xpWhbYiZqFPrDg92N77MNz1Jfj3B6qgwb5t62L52F3DNdf6oh",
  "key23": "64CWbsGrEHuKJBafz2HHM5PziAeygoHQsu7JsDbmQUaYnreab8zJniLnhJgZ739SxUeTwts8xdSRnnvgBXP5jo6Z",
  "key24": "635ivfvEnaygX5XZG9Srk42hCd94UmRqHH2UkM3yaNQFdByzTTLYSaa5vt9gMoxQbGrtGpNeZxgy3Pw4zPWYF3wu",
  "key25": "sT3vuKX51V4u2S95Uwk59XPLqEMYVHBkbQ8FwEQSVYEkZr7nr8JV5hrdHsNFAeA54ALywJBwLebsgaoFcs1NppT",
  "key26": "brxuzCuUTkNY5Br8ph3hqrDy2uv4wHwosVxEgrgFEQPKgRJmRs9UaoZcvwgG6CNt2odM1oytWBdBCmqFYuVroae",
  "key27": "5KwscKmqfaTCKG8PqszJCrm955hp1GLvFDeKMr8U2GqifwZ5TQz7HRuz6TLdPHDkHM3mvzS8M5CqHjKnBaF6bvYm",
  "key28": "5TTcoHLCeHT3Z4pzNbB9qFdvsM5zsHpC7W3BG7JfXLyCVMQXpo3QayWgWAvJPwcYXZe7M2fUwAGEUoozavdZtz14",
  "key29": "3PyaSgqacedo5UYwAfUoXeVFzGarJChd8TrUaW543FUTcrGKJbvju8Sosrxg4Jzmeg41gd98m9gjxrtz7nLn1w7X",
  "key30": "26ARmFE4MgkxYucLhqVNE3ksAVz8oPpvMs7T7KL5iYpehqeDUBeFmsf5pCXBH5xbxKTz7mw8mVL8fS4ibU6USceZ",
  "key31": "3ZvWMAxmkzZWNEHbrKd5ycT6MgJ2zUwWKxhVoKtm7MaQzpzANjtC3MpqVUsyBjW53XhKdRvv8rhwQRfaGJEpyk1P",
  "key32": "4SeiGcdNtwGB6Pmpb9TKZZVUHeYpxuq1KYL2NGexd35aJz39HfhTHBg4fkvmq8Zfc9c79HZrnwag3VHminG5WQ3j",
  "key33": "524ditzF4GHtQjeqkJAEquGRhCXZoEbJqQUbnxkzibWmcDByqydEUX2eSFeeL6Ca1gAmoM9befmacH4oB27RSjXZ"
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
