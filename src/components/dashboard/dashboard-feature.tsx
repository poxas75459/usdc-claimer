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
    "5Ewo4zn8DWFXYrcQuPm7GSSGeawk4GAgMkAYa5YwwLgqydPfNJznaKxRq5oirFU1Lu5Zwme7riXfydQrsVNtkr5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rLKhnd3M8BzPBV5aSwvTa8YyhdueN69f4xHEjGxMd6wsBtjYTPydpTmhg42KttMAdSTjTJ3BBTKRo5J2Ni4gGv2",
  "key1": "4vHR3aTh74mxJCSWgHei6BvCaAdWV6j5pT5BWYx5g5UrM3yW8ccsmaJJdcQiYbD7XybKRfHfDRgs8cdmvAR8M76W",
  "key2": "rhg6prob9DstUnFWrTATPqxFegbY1pfVaJPxRDTxCTCYs6eMUgJpqJY14bQg8Wadmgxejd8DzMwjp2yPyD6zTJ1",
  "key3": "4oVQNmVqgjGqLDsyEoxGpsDutNAVkoSDvzsL2Wwxkppi6Fn199LgdANYd9JTzA9AH4DDNewCYKXBV5iZWnwEuJEZ",
  "key4": "36NSouGB27WJzmBMyPVY5oZ4J8y1ERSuGDpHmDwz9pKpbreWuN1ypG6YVyC4QG7k1WrkRAdVnjzQFDqiNkZidHAE",
  "key5": "2AjAGS4HLf8TYfcujtF6imoEsaN7qC31DziHKX2atSZEbf7GjzwZppMULdnSFDxjeEWRWuBP4WaWjQ58KUxQeFYy",
  "key6": "4huqwovSm97vTy37qL2z57f9H3Y2J1a1BPinVAceVXeE2Hf6eU5buaezaLMadPrn2Eo81imacY3DyDdc1CLGHQU5",
  "key7": "56ZbE9SXDV6oyJTE1PQjqmQmkzK25qNHMLjWcc46Wco2BZbmxQMJC4cZJ6oTBiB6fKHAE3KsvvJmrGL9CQZPTZ4S",
  "key8": "3RRMzcA5c7wxffVCECfRyV8WE2rx6YaCg36jo3fcpTQvVPrufyoAowrb8fdN27RswRJcKwukiBuPASJ64B8Zx7XU",
  "key9": "dZDJuc5AUYy81Qj2mZb6zriZw36y7mziexACkdSNpeuuJJNLzhfA1HvPxHd3JVtMnzvnKCdRCMNeEW3R1W16fi9",
  "key10": "4b8DCv5inEkxmnZsCMXKRtmvZBqEXirTZJH19uuPNXVfmkwaGbByX7kJ2ZMxeSmbRGFLBAoPSUiJuJZ3693jN9th",
  "key11": "51pGx48rTZNiuPub5smGTt5SDvRuVe4jG28fouimznpjb56jQtbgZc87LK6MrLE3EfPeqGFRjZZmYBoPYxmaKmT6",
  "key12": "2Rbk4k7H4Edy59YgT782xsrNUZ5XxQAjTBi2Z7b9EeiayEWGUeMhXYp2UBjh3JpjatC1JWpacBpdEtg17XtHwPGi",
  "key13": "4qipQ8M5TtsqfBTM44ydVVW9ZWsymEnvZtxc7V4NeVvmhTxq1LP61SqiR1D8dabiQ3pRQmKnjK9n8pcHuHRqDDrk",
  "key14": "3UB1Powp99EDJ2rSVJQ8uAdJbCfeYHhRperyqoGciiXuTFEao8Gccdyi6Hx5nx6jEApjwMvYQJ6ptd27PqLrJ9xp",
  "key15": "2ryops27ojLnqQij9Qc7pR88fm9LgeFvoifnX2BoLLTMRY5mTieUEVpmX7LaeFUd3NPv97ExZHQXWg9oCmAisfHM",
  "key16": "4Qa17i9ACeh78Ujo7EzEb36VgtUiHKMjhKdy9uXa55NEqKATMFVrNpxXt4ofTv4FZnNqcPF7ZkH1notQVstw3suQ",
  "key17": "5qxUxTD3J4TQxyGYY6NoqzJD2WWnAk8CzEQpTeenAJaDeKov7BHjAS8qDoZPCtYjgYAWQ1g7jZsDPpGQT2FNGupJ",
  "key18": "4Mad5BwiKeYfDmBjfcJaaL5VgA4v1XEnZTfhgNw3Ej8nMz3qmfuzzVrw4nnJqCGVL3mf5FxTif2btqU4YbBUsJzw",
  "key19": "2ebAZsCDBapp4Uj7gjNC4nkvzwJaihMr13hhVaKcmX9G4eDAAUfYQ3pc9oasZft5vaTgfRkJYufq1n7kWRQgPxky",
  "key20": "2QRsTkiqLQV3JS9uw8Xs4yCX5zu2yRMeQYWP5azoEMuUqPWSq4siRbLvVK2i2P6TqztRzPQA7uBH93CVtM5xm9Er",
  "key21": "56B79Koe4jMx7kna5e98aiHCZPHEHP6PuJBVaEFhM2SfM1fd1ybvcZ6VY3XMxg9461R3sxY4F8cMx9J56dNiFwJm",
  "key22": "2F3QAW9QmEcVZvTGzcmWkJ5jNkjwJp5P7Awh7cFQBCV2bvoSYi9pAvfeWLrsyx7j5eDCRAyXC8LNMAwfMLuNrscM",
  "key23": "wGLCtgKmqU3QCACF2Z23nDWrFLdSCnvdXEndaQ94XxVeWMMyG3gPvcazSKWbTFNtGvav1jc3QGnKCgwRh5RacBt",
  "key24": "52FJAmmyZdNdaePCs8o4GJQPaBacqJeS9MNo3VCgC47XigypmRxShjL1CC7V5WLGTACbZCe1WwSMedGFVYudxZQ2",
  "key25": "MuyBBLqoXkHoDB3287FSEurYvqHzwNHyHQE5x756Fsf1gxe62Sek4fg8jnJh8QZFy44DWKRh5fViL4FeywSew4q",
  "key26": "2A941VHzbDpRXr9jvetFxywAhViJ2hnxmbjj5uD1s9CvCqeNzgDLmyiXSeDtQYBZ7uehP6yRPYgoWeQg2zo4FF8C",
  "key27": "5fLvgEkoiBb2pUqz4FZ9X3FbfzRQgHZQX54xNDEDEbhVwhrszDeb2DGxzxoia7Pp7wGMstWnX7imwxijUKuqCmza",
  "key28": "38CrJwDmiQ8wqCjUpH1KdwEayZJNWqao3wK14oK3CZkhG6nJegN9x9GWWeS3PzFZcE2hZohrq8RkT6BA82NMbR4F",
  "key29": "27G2s4k8bMqQKzQFowQG6LR1dBBmdFvBoA1qhWdxxJoQasTYEBNgZRcqWCL6GrZfibmvRfU3KfAnYY1t99S7cn3y",
  "key30": "hEeFexajejK6bLAYJLLo14HJwuTg68yHmZTFnHaYGgUgXYnGTip8ZGcfVixhRWqxYDWykkC1cve3TBGzp1vDXNX",
  "key31": "5tUxLycGrnxYQudxExzwkRioZB9w2zb8xF56bci8Utcq3tKSoLsMkBxwanoC5x1sz4XpZxFE6pWhLeoXJMsLgxvz",
  "key32": "yJMWCu8AfKzQKP7JGXVtfpU1owm7kUcjwJd3DNsY8ArE2yTNjPHhXFKjcv3BBnQN4QtKVodMjEXy1TzzGp7gsCm",
  "key33": "5cT9gSa8iTKR9udGfqJJ9JC8AvnKV8DirVcSCWypZUytwcqL8rwkkJnbgqjFx8TrWDtdk58ELF9Kt7om1nb8AziE",
  "key34": "4E9rFqaLbREWucoc287432smSLFFks6EVszwixGsg584m75y8AiHyZZHom7wSm4eSTAP9PyELWQFY4HQUqtKExDD",
  "key35": "53nhfWzKNzFxPc2w1udpsEFCnQXAb7RiSknsx5V2XQwEUjdU5FjQUA7XnS8oZ9A27AXCsVzB8qALjwdUA7RFLcZ7",
  "key36": "5LYQFzhefY33iEschDjfWUmaw9xXNMJvWF59QHAEiSaabsiDSC3rp2kUHUbX2wMQuZFdzLUkRezwHuGtFsteRGK2",
  "key37": "5QZ6TaNo4LNWdwSyu16v36HABmHjhSKsv8kG5t3Kyg6SibhGEFCZS2iBw4AbgfPJ1AVXyKnvz1m9CyWkvyRHnRNm"
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
