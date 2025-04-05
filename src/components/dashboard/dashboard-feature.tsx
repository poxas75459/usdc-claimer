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
    "4YULH1YNSSpqhz8hxfCusKKuSnF7VZorH5b5iagRNnKYtc1JCcri167JhAA84cRDBT7uNMwxFwWjy3DUdMArQh1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yHfNbwA6x9wntmyCW3TXfWbL9gtefwtmBzQo7zS5aF6MYziTPZ76u7pBzQ7utYASyDRW5pxPtqC7rtxQ81Ltdg",
  "key1": "3Vsymv3RJSCUTZipJCjyF6ft8sKEbmM89QK4uRRezsdS62xin3H8gCNgHqKxL1gSz38y7jBK3YrPSAdXdyXRpJhJ",
  "key2": "5m5CgtAWaXz2mmZ9229q6wikSrugUWjDDVa5YEnDoG89W7k3KByob9WAvuYj9AKKAb16AMh5XdcZnK1o3GUKPSjT",
  "key3": "4MLNXun5Pja1wjoPjzBCFzvw61oBjp7W6oqZi7V5bqqyMpjTeQRf5VabKcWbbmcrBraD87QKdh3zvugBqwxw6MbL",
  "key4": "2gFLoNBFi5tkSwiVUmCZv2ifNnC48kmJDVZAUHAa4TF9zzCiSAkF5D65N7BpBjxuDHB1Ka9tnpYbcE3MfJcmu3y5",
  "key5": "5jhf6WpzsiHbTRidD2twkktTG8jaFZNxSpYeNhyqeodcxP8GCCZAdpuCsM4hn2J9X6EW7Nq8MA5FAwSYNQq89J3c",
  "key6": "2v6ySKPgq7daqVpcfoCcMxK1jCdaz8HhvrHh1VjE2Yrxa1A7iBxn6WHv3Kx4YycaVP3iZjFYAQJdWg2VmZmFKWdh",
  "key7": "2uU1HfhArGY6uR3VpQnWEgAKuChQh7RGTHTdi2eCkJDuUdsUqwx9SkWcfPCuxTzAqG28SGPEfAv5qk3BZoMbGUho",
  "key8": "2jC4bhfuL6RSbZVEBCQgsVb3WstTSKKT2MKv3cKiQedVTYqpa58U1pQmZZrqTCEFzkeh5zLQHREkchK8ReNBUGfH",
  "key9": "5UiSDFTKUwmWDsGxPMCuVYTKdTeQPiZhoPNRJsHAQoCjxacYBk1cdqsUnTczCVVGVby7qtd8XHYLaNPhPWd8Xyag",
  "key10": "59bpqhtU7Jx4RvhoLUXUQL6ZiiC5wS4ncf1KgENbXsn4NCwBi57vyg5sPAiKjkW2wVD3k7rv8Lb1eUJdkymXA8iG",
  "key11": "3j5pzpcmmx1MwrsQTpzptp6LwhKuhdc47zL8u8at5CbkENoWRETWzjEFNbWQeGffPYQJCy7oW4DyRVSxR2tkxBLW",
  "key12": "4F1yBMqZi4oqLmwXr1RMjGEcEuuoDmZbZuZRTRMA324Ew4XZHEgMuvWQbiFsUW3yUq2s3mr8cC5uBnqHpa9rMyMX",
  "key13": "6187Wrrad1FidLSfoaWsQ2rviQqyku4oyt4AFYox45WMW8KKyg5yrs5db7jrqHiyYqS3g4jXbmG9fEjcG5xPtgRA",
  "key14": "63TP1PYKyxvWGuK2mfhF8R5ng639snSacT1QaM2M1yqHmrfR9ce6j5dvX3X4UoZArRHKfiswa1UUneKJ1kCfsH8c",
  "key15": "4CRAZkD196Ksrz4pNGqsoEnBSJxj8gcv4FMwjK2tqUjBgX39V637v41KfpQRigo1kKNfaTMAH5EAENkbuyMTPqWy",
  "key16": "3RMQ6JvouzikNxCMwwNbPfGBQF4E78kJMS74HTuPJpKMH7nckdf6Sj9VGbkpVE4miEu6nzxiHsgaFfQQYkEKLPcK",
  "key17": "5jgeQF6dgMDSGkkVdSy5rP3DVe6wDpTZtsZbojg3LLRNTbpsrVfPAR771SHjyWq82qRZz68s17CTcfPkxtkcnCYQ",
  "key18": "NY5dhC4fJvtg8r8nkZpSHHAJmEUJfVgqSaX4eGbeBjdaNXHu9ei1nbsdj8yj9snRfKfJmQAhDw8Mx2jQWtRBkNN",
  "key19": "67dDqJukPkB1phpnFeBmM36zev7aaWvzq9W85dUqsc3KLhnwqMa2J4kq22SawjY1BDTF8ieeDkRjhwW2VvjSyGP4",
  "key20": "ZkjGAd69L5LHsJfFA4oteja4K6cW9ducjoFqkQav9HfW2P1UEVRZgdULurL4AB1WowriF9hRDCPVBjoUyDjTgcp",
  "key21": "5KiAxYP9yG9MwnJ4NPk9SYss8p57kfaRR9vG4BWL1kK8LLJnhDdukzXfH3Vw3fJSY89b7E1E73HiFtwqUA81CvwZ",
  "key22": "2TGPQWAsFYVrzt9otYhJfiLyHxBqk7n5pR26FEGtuqyBMDzL4nYkTv2mPdyPkK9gEDJXACqGpRqB4P1b4EXUrUmQ",
  "key23": "3Wyoiu1oHiW4FLTyd7Nf6WdAGoqBxbGvECYha9EXsSMnhceamxydWYJ6uJUuoteVUvQGdwHa911dEzhGNRseybva",
  "key24": "4D2pmNY5vFFFBgZou1uHat1v6ocWVEmCro2eg2niWfwzJpxMxzqCBRevd2ejJkT9qnkm1GWnGNZgWidYWjCJ7qLb",
  "key25": "45bSstkrp3VFRByFScsdzYD1CDtdvBJsqVXPcwmYfXFrCfZua6n15XteQ9GhqTangfEdZw4znWtYJ135RQ8k8KTi",
  "key26": "23pA7BWAQzCrtYF9suQMdNQkLgL57rQjSGwxMHsJiJc2FZWDmfHr2L31hxSL2BJjzLkU8mQBiewyE6aGAuj2aETP",
  "key27": "2xAqKPq2Ey5XuR785tasyAerUdpM86VhEaxidC16Kd51HwN2ftmkCXiG9633AuLJHD1Ar1Bskkj938zQ7Ka343aC",
  "key28": "5nR7GwtyqERYy6FLDmPwC4guggnUgUpLpi6nBVFBNRyRTWYFy7WSjF5WeUnjHhurXxsstZTNfDQN6s3ktq515YxF",
  "key29": "A4j9D7bUERVDm8zQx3Mk2jQBaz1jxVe8bKHUfBEZNjMnaGFq9Zkb8kEE6sq7jt1cvQ3CEX5qoqx2X4bMXeQf4VJ",
  "key30": "36f13cMsDNWFkF6g7hVLRvaEd5EMQfxUAuCsEZckbTQbo4CJurcpr4EWJMntfteJFM9mD1Wvv2j6hwdFqQoTsqUK",
  "key31": "3qU53nA4gsYxH7gy9bqEP6YU7dBjoxgVmQQNznNroBGNqHiA2j4x3xU5LpkFV7ejsTSj2jxmicme3iBd8r9VPbHv",
  "key32": "5qnRFUHQBmSdv8vE6Tv8jWn7jbUwsezNQ6mkAe6Rh7TwhcGWL7S898XgKikpMSUrXwvhTuBh5zwVmSJ21mi4fPi2",
  "key33": "39n4JmazJEGoVTjkXACPSJbbBDd13qSCMoeqXpuXrkTdC6tuZdDwZ3EQsMCYR8b7LJhJCxXrNm4PraZxkQc3Aj8a",
  "key34": "35D1wt8eeB8QixmNVRAHgCn4tb5NdFfgSCT9UgSFgbRsgZbnKWDZLHm6gUaNfVbxYmn3M5VZHsHQRqWd4BePRark",
  "key35": "3iXDpSSiijgsuZi1jMVLypYSJHgEhw2oyTZ6C8ymRXLzfsLEdAd52DNFKVpZAebnRZibTUssVxuJLcQxdRWUXS74",
  "key36": "JMgmLHvwWsZi9Pdj9ZVYAD36Lfo9twiVxYBEgjtrc5bPHnj86pq2pkG9uDJbb7HLMMiQ6mK6ou2WnuyXaCHB47t",
  "key37": "YfE45C37EP8HPjocbsmioNJRWfVUZJJtmtiZWD22GD3B4PopcJpePeVs5suuwTc5BrYv74eEJ84we9NMAKzr5cb",
  "key38": "5qNpbK3KMqtWa5AZDafC23StjJu9H36TgTojakbYuT2heP2me9M85HFhL9P7J3PoD1AoNyjg5y8fhZDPRG3B7Eus",
  "key39": "VzvcjdbbnpGE9KDFjVcenr1hmU9E5xae79Z6FCr3rsr9XYqSdryTFnZnFdSviUjZig9kuiT99CDtdQ95U2Mvd7r",
  "key40": "4mLZfExA8rqhj3tvFtkSKRXpTUvYwBr9YnsbmN47jFkdHDrjwh9jYyiMJEmV5g9V184UrZeTYttZWedHkNPurqMR",
  "key41": "4yFG1SoPfiCzvASwaYASmBu9Jr4Ephe8AC9CzuiYb4ibFDfZuLjy35D2FReDf99GubbMZtSKrCoE5wuMw7PK342c",
  "key42": "44zpqKoptPqVHuqRbhDjd8e83kj2gN5XvyWC91xCqRaDsyxWsccYw79B2sJE5sZFhgSPNBLFVxNrpTTZccr7yjxY",
  "key43": "51zoDyEHVxRDT31ZKr8EcD6oMhkfmeUNQhMHzZPSniiq5r4TSQT7aLUE7zqp582ncc2LzxTXZ7cBQaWrzWQoKPuU",
  "key44": "kcaSR8TQ4pFnePMpiENnEHwjKqaAwkbJuqW16WkjQpDkhNun91rUZFZXDQcygvvvZ5LY3ww9ffR3BSXy2SkZEo9",
  "key45": "3APPMf7GBGtSkk5ui6gm78tFF9S7yJNVbfPg4SKvnF6j4eL6pvRZRAK9o4ZrMvsRZtcYDDLJgyjGPuVVgnN8RuMx"
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
