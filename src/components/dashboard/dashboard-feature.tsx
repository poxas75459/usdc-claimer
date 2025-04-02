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
    "98atdgrssJ1cXGjgcqKV18SKAmQRveAfvjJ89mYwfiuf2BZopuXJTCWjSSoL7r5ejftwfvYqYUU2y4d9wrZFjUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DMJSwbCtUEb8HKx9RTxtKQB3pBnMqf69MVANjjMEdbuou5gfWrsa4BTVBqbpey87dMYxULZkRnAeEpoUP4xuFn8",
  "key1": "2gdrnvSZE322iUDWyquUnaQf3yZdTFRDSgwMz2376gTewd6iaQXUgoSkm6kJ3FX2QumKZu9LTifY3NzK6qrRoeb3",
  "key2": "2C8sK1wYfCULjFq7MDbNiKXuPhco3TpV1okNvzAbixjFhetfXuT6fymHHVwsisAHL6pzo23jXeD4BDQ739bQq2Vz",
  "key3": "vaNcCWbevmHf5PwaaqueceADf1Ar8AGYWfVCQgYLMaLrF13ZwcSp8h7tAscGksm167AutUZnFyXfUpwLPMXrqJ3",
  "key4": "4BLqYQ3WU7ah5drnbamHvGdw3RkiDGP5LRFMVSXgoqe7eVyV56EhH9xBV4B5Tj6GZPxCDUbFHVUrhhoyRpYVf3tr",
  "key5": "t11dg7f6LMGj5ty3NAdhYdse9gPzDiR4Dr39TAtFkaUUeiuYsYEyAReGEEw2CdcGcTDjFHbUeWtWSAwCVSzy25m",
  "key6": "4dmkcpMiqJd4mMrHzmazxqbix2YU2Qn8AMWB3MK2yXJ9ycjVET3Mt3L2BTwGiFDYFs2BF5AfrfCPf2hQA9nNbktD",
  "key7": "3MQc5fPPeG398QhgYG6x9wvMkX5tNTgmXSG6B2T72uHQ1gK8dhd3bNqqrpJhWwY5m39Z6uAg9FyhjWvG4WUeWcep",
  "key8": "dd19vN9LZXcpmsKpe3GrVfg1ZJbHtZuSTc9mc2QBHPR8smoduBG1eRCJ9GQLhksPMgwVfoUBdDNQdxvoo1FjMFt",
  "key9": "46UjzRqoJ6g67a5d8WNofYznGqt5B6oLmvKVhqx1ur1ZWNw1cU3gpRmW7o5Bgn6W7ZLgXP9zBekeA8JpsxFGTgq6",
  "key10": "54VL6iBLwAeUJvUXAZusXvJtw5mT9PaRjsSKB1A8saX5BQS1fjFQL5qRM1gL4uRtG6D4wGikLhbowXVyhqgBoCbk",
  "key11": "2BySjrNGcYFQnM3tHo2qP9wEnZLyPGpJautRQD3ZfcqnbwNxWXnFJeXGpEEhqMKs3xmJweBA3rARRT6hXGGNiHQT",
  "key12": "2DB8eDSs8Nt2vEaUxjsFikJ4y1Dss27kmdXw5DZPi1Vyy9qDKvXXW7LeQ71o2mnAUUSkE5cU31ePLwRZdbm8FVHK",
  "key13": "wcZGrCHrRE5WRkwymjiB7b3wbLLcaSo21whZm1B8533NTfgFTGoZtiasb1i1vu3hNmkmuSaZJmL2gF8FR27H5ZZ",
  "key14": "5Jo8ZX3DarJXW3M69ySz8t3w4q7RjuBRW75AjF4mZyhbWYVdnqfUB5mThGvZ7hGrkxxC8SSYgUXRJTsubzGuyvRv",
  "key15": "5BQq32LK7e1AQiVFy89M4FLGoQxaZ87zyeNuW6wEeezJfATBFn1TnSF35TnP4eE4d1aBZMyqTwUVBu63M3Q4itGY",
  "key16": "2oahoDwksNoNA2KcX2zN1tr8eyhTz4PcHd4HYnKGRWSDRdZ3vdQ948Pzdy28rR2Kscbexg32Aj5HvPogoFDS2Gn7",
  "key17": "3QqjpEiFsUBZy3J9KQRWyKb9Jyd5vBHmcoTLDWrJjGeyZX8UEtS3gExKPcPznLoTY26hb3MEKW6vQqy4WkQhXmGV",
  "key18": "3VjA4i3e1PArigE5HTTb2Ma2QufMKzm4uZdc9SNwB9JiY7qMXZWCEkf3VsBeWPmydbXTcoyfrPtDFqTbD8Q7H4Dc",
  "key19": "4Hj8Ex819WcYKAKDSqFYe3q2PDjZchiXu89LeQqdRB9c1w62Ga4pabL7ef5TTxSXnWtpp931peEryVqbMqQg6nEv",
  "key20": "4BkoabP8BCtjyWDkh7pmBj3FKJiBQGPHRBpZbgNZE4D4E6RWXbwtqbnY1WJMkmE5HKKj6tVW8osaCoH9K9t3Pgfp",
  "key21": "5mYrakrX5xYYKeXYhLDpqjbGZDSXAayr1uD448D3ti2FyjWyuDZcZy54yB6gdsJfj7nqE26xN9UXpCCEsCaMf3GG",
  "key22": "4hDRh2eHRWe9EBkKNotRTGw45gDyErEr3u1pnsm2ToBwPm75B8n5xoaQxvkvFeme8iX2xZFBJq9J5MPx3639rFv3",
  "key23": "5QLet4fV5MCG8RRhaLikQ9p7WjUy1bsGpZn1i6Tc6xFaQdn7CzMNMN4EUQAj3pWqHvUmQMNrTuJZgptU536ZLBLZ",
  "key24": "2QbHHH1fbm2b1Y7cWKHkWe5D4oqdSp3A6EBicYQuTj3GUHXxcDodaeNwq5UiWCeuGJEPQ3fmns23WRgLzZxbD2JP",
  "key25": "4EMUbAnHrkuTdebJ3KjZjm6zmX6AycPSLvhcpjov9o4oDM7LfxzhiypkuyPT9jiY7LDxua5i1kWNHbDoMAA9YK9Y",
  "key26": "29s7HaxBmqkmimUTmD8e7PdqesQGq8RWBPrJaJmvcQiCwjNTNR7BbZgpWmDK3UB5kVrD6ADzRZos3m9AygZfXQDS",
  "key27": "4mnWKtmXUgBiddwmbyUB6jfM8vpkDcaPKByLFCVxa1W7MzX751F13bwPm73RMACMMumnshRs4oN5UViuS7gLv5zu",
  "key28": "fvKrWiiAbDgfEFFUo68pZkdTRym2CmrUbvrVDJohLkXsUtisVYs4jmpjnuVpVW35n3LKVhoxqAL2d8J43aAGTid",
  "key29": "3rYPDH7YzfXycTExF1iJ9GJCSyMgFxpL3cxoJB3Ln6pWcwaLudkFXQumagFvDig7pmQSUCW8a9agTzu1pH2VSAag",
  "key30": "4ELgeYiSuXd3mpz4zKrA5EDu2Ne1R8Yjk1ahLwEzUgLdjaCp8GRaRxwRU2CNw2kfTi16DT4WK6qNc6ZimHrUvUfq",
  "key31": "61zSqhMXBDHHeG4zCTEz7v8N8hahSvDoizfp9AV97RkEgcb9udjn4n7d2o5HcXVhZr3FhMRidXpVZu4vLYtmCm2c",
  "key32": "kUNugHmg7XZBWA5yuwpD94xxjK9Cf2UArHLS9s71ikqK7d4D2cM9h7ex8f7U7vQuBjNFMNmtAQU12iLVZXcaSEV",
  "key33": "26CGutUJ1XngfstMwZA8NQimf4bPXz3F8QnuAf1Yag1yydygud51Lq3CP5eGAqfEBdhNSCfzYBnksxF38Bwp2dqT",
  "key34": "AEydp61bNfvUgEbP1Z5Lf2PAMhmiusTp7je6M3Ba6FbZJops4vp3TKzKqej4pYXwgn86b9vSdsFcKMDuZx2vfqv",
  "key35": "jGkA28omuZmUHZ6Z3Zt8tgHcb122u9v1xdAqYoAodzSyDHRQNBvAPEM6mHZbDgtnCqb6f6CvutsGKspgQ8wDcSr",
  "key36": "4ecL57navrVHQ1BK6mv4QsNgTmw7GPFpKmUFFh32ijGLkyEzbPTUpwsMR54PCXV3qEbt8XdcXd1oGLhvSNNhvNrR",
  "key37": "GYzE1XEV39fsnCcV8c7jhwteKcxv3mjW4sjLbEXFEymxwiZWjzAni3oLj6tP4iBGrKmam2b8RtDcmPEEDQjronU",
  "key38": "3Cy6mQJsLoj8hyLCpVqLyn6frZi9mtBZjTjTcoJyxs99GpLuvkU891T1RpVFLdkM3oCtkweh1tPWDw1yots9XniL",
  "key39": "3zdnST9nSk83ozPVzM7rrKw3epsEGh4hCTKT7YVkLdAtpogoSvcZWWLc4oZtNiQ4vAarXK5sw99nuRaDjcp79L3X",
  "key40": "5sim4LABMqJQ9WwCa9d7xgChnGEjhJ7Dbpje3oeqfSWMjHDq6SDTaKqiP94wBCZ4voRAGcLctQYALC5TEgSSYZgp",
  "key41": "4mhmmMDdGDmWGPxuYjajhvBnaoYvJA8NQQzVMJBDqGrNLcnhEaWJeboRkYrja3JgPhqUo8hVSLEaTmKWTigBog9p",
  "key42": "4ntgDFJdaPuNDpPpXWkqGMnuBzDzjReHhApecsKaCgv4Q6duwaiaeirpfMRM9k8WnFXRbGVJJ6Qccbf1WpjchUgv",
  "key43": "4fEjHZRJXZJCiPjzZi7nbcfwzjtaYzPNZEJqWKxi4iZ4BQh5xJsguzEa8oXCcj1xuV6uz81qj2KP5rrXS6XDssjb",
  "key44": "xVHRNRqqMCJr9437aMF3EdHpuiuSXCE3LxcwUzkCs5PMvbiDJaeLBxMgbbaJrswtE4VToQYesaLvAD3EiQXFU7Z",
  "key45": "5bsjyhGPas7WeyySTNXSpgo5odaGwCirHVmxmK15HSKRGeRjX9YB2SfYzf1GAfLSnzd8tEmf3M4iPFenvbh5z8CP"
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
