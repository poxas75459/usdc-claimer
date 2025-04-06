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
    "2P8vBarSJ5ZKScdcgAu8R8MXLXqegP9esgcBfrswTAvcQv9ZBiRZMM4DMcRHr5GGsJhwyb2YrnrCpspFD3A6LPbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49UxqEyS9UWd43rV4whY1wr1BM9ukTGoeNqSbx2KVkguaykeqSRDe7FmsJWoFPWvK8Rh217jderswMKVjksHY3sE",
  "key1": "4TLHXG3JFcsiz1WkyC6uDd9ManUeVV2BbpmgfAddufsuUUETmdDvpy3fsZrayFd83XF49MgjgixEeqjR3Q5CzpVC",
  "key2": "43J5T5uXwL1RNsLrGtRMXWU4H4WwSeen7EFfGraWJ1Qad5Nd47fEzVvmT9xEKYarHeGJpkJM8AZcU9pSXSVpoXH8",
  "key3": "4X9Nwn5xtUC5tczrQUZM1QCK34pAgHRzYvnhWKaBnF2NAjgE3m6tVvAhVZUfypsVbpkKTP1pj29HxqoF67j6VUah",
  "key4": "5MVHB9iGMZhLs18hb9a4sje9GJacoJgreCe7HH5EA3tvKKWnvNMXoNHnaatZXp6iURhdhqdrUhxTRxJZuoxogm99",
  "key5": "2ymJyrgk6rzQi9Wcw3mY6w32LHVG6atLiZ6UaUdrt4FDn4WrNz4oE85e9wf8JbpifhGaRFT9oGaYaQKzbdXG3LEb",
  "key6": "2i3Rimx6n1rvLJBjhErAwjWF1HxPXCW7Nj4xpzxumyF3yjpZAeV57j8tvriRzf5cUdo1stbG1jmJkr9amXDWJ9dy",
  "key7": "TTbJs5rhTDVG7ur7hszDBYqnF9mhx5PHVAatzK3FhXWCj12KUVPPGNrFvP65Qra5gJxRmfXEMFAJuSoFY8xB4bE",
  "key8": "3R6C1f7TLA8DdouF3spNYZuXrqo6ozFPvRE4bk2KfRWHjUJfMN8Br4psfhi4xFuRHptLCzYiCANb7jbuRxEt1wcT",
  "key9": "2epaS6xxnbmeoYZvw3vrw7UbKipHotHG6ZQSisSnmvfDvwYw3yvBt8C3gUYNxDJFmiDk1AUREBCGvG2SVhP2Kv64",
  "key10": "2ufxhjudGiGeWz4C6Uz3oVbV5mj92CSxkigyJKjmmGeSLfCP8KySV1gVcXcqN6RRgBLBn8ZhFHSiWn6hmXq89YDR",
  "key11": "5vkXaPfqRZC6MqGwbwBeb13ZE9G3iqrxNGQ2fXN2wZmNRtt6LCoaabDnpNuSysED7fTdzqqKtwxuDktsKVVqv5Wy",
  "key12": "ry8LoQSahTwG9UqHZbtXpWxrvkeTThrgG9B3FswftvS1NM1gK8CNkuYdLw5W6GqELKWLAt9V1Ln4ZVCVR9rZYcs",
  "key13": "3qdL8SKfawZkabmU7S5Ps7NDzoVS3L2drBoZZKvJ8kisNS2uPfSwh97ZBLdGrUhimEKEFKXFU5CbyapJeEMY76zJ",
  "key14": "3xrdyZKiQ9GRXs5jqw1E5m8Eg1cVA5Z6TAZeWLgmRZw26fBV1MBmKvJi26w6rRjAnAsdf4XAhi1rXBPPZCmfiyYH",
  "key15": "2pRoBx3GJiJAizK6CywBrWAFGydWSycyjFbzpX1DnMUu1RpMvB3hnCXYMi79JVRvXoRvUkiPGgZYi6Uwvfe22Vzn",
  "key16": "28e1tXkyS6ak8H396izaNJSrf562GRsFhaqo8N9C6HyCspa3uyvqNvgCVydS1SRLgzxbQpEo56FSFXR5Lu3xMRC9",
  "key17": "3fhu32yZ4Lwbm15nXBR7tnYsb5hhWLHxGNuBu5UjeZfZCb9yt9eZ5zSE4VDWJYSGGtmsFVYJYyqgWazLynMtGqwE",
  "key18": "3UeqcnSrM6xTgENRwr3nSXGbsLwhRMESHfQQXfGEnf3HipnwdcvADtrLSa1Z228V2TeVykN62GJmvZmaYtUznEva",
  "key19": "3S3vw4pz87bXr9RExxnwWvtp3VHxMZ34iYPzwSXk15ZCtrvVqA7qnn6xCxc8RLfTE51arViX8zpsaMHA6Pd5vLc7",
  "key20": "2S5WA8brWZ6R6LUoFTBXc9p46xMnHCKPgVcV5TsqJZffktLbKaX2VZyh6NgZmvcmZmwVBSXxSnjftQJi9KuKyFP9",
  "key21": "4qNNLELnNer4Z6rREmwF97YTDtT2LPyee7kPqgT3e83jHoT9ZgAmngQPckx7fvWHSorL3V1m15kWjazXoBietW1Q",
  "key22": "3F5gaZ6fU3uzyrBENF3HKMJasKqsmDW9Aykjvf8jQWuWNgRf4VVo1HNzxsT15J37Dcm4LztLRism1x9YyH1fR7DJ",
  "key23": "2q4XASSme6gjgnvvurwcfYLXnsuX7ZGdmjpw3kcPUHU6zdzfHunGvFsi38A2q2BLhoZSwnAXHQPfE7MRAcqxiyd6",
  "key24": "4pJT5trbnMVPTxSZiX4tz6NaZPeUKYneSiyYx5K9GgEX1Vwso5MSikAc2rGQugQoW7Yrff31yiwZK41ZmEjwSqQ5",
  "key25": "2iDrSCEUt1wkyAqcchoijYdgzGiDBWppy883Fak3pbWcgiVxwLfcwAATBUWuUAvxscBqgxRG2g6CQrGUcCrP3fsM",
  "key26": "43bTPQHSZDjQbhAX1qnPtabJbiQFt5AxHZQyaFbpRAq7jpv66HZHjnyg8uRmVQHTk5D9nH6zM6fBCGBLdm6JCYps",
  "key27": "59MwRJFEvgTx3uGZEgVUS2QXkM4r7sv83QjATtgU2sXpmWJNN5mzqW5ZXR3biLUit7sxYA3u2taswWKq8Rf1vmaW",
  "key28": "eFuBz1FbvmWFfsUVxL3igEKkquhU3a8jBFVWkzcY8bYZ7g1u8YX2EotACycGVkk2ZEzV2eyxGpqq5zYtghCj6j1",
  "key29": "5SRdEpAyyjtn3FYWYCLJqEme5pVfWsi6P27kWPgJbVvT8MPtfuCVoroCEZ8Cyd1qPquNCNXkcSmJz8SFpGkomxG3",
  "key30": "4akRcogcuKZCipQMoSXjEcQ7UZSAA8DWupZj9CY9yKhkPi8MjJdxTANYh7JNYiJEmHdv3hpX814nXS7Fdw2xkHWR",
  "key31": "3yXdHk2aLSg9mvCfkpu2JNZhFH7KpHUadV7z1ZiGPkEEsnjxVSQJ4mMk4B794DcKLigA9UW7RS7VDWG6t2EnLuRc",
  "key32": "TPpG4PUDz11jqtTa14AtsH4zu9HkbYwNeyoGkL67zNu4Piw8PRGXReX4TwWuiJXbkrhcMNWhd73PK4mwyepHwp9",
  "key33": "cXEZzLFt7Pg8LYHZeJMgaF5hhqKPa389Rx2PdAd99HuodGyxfgZm7hT1Stwg5j6x7aFZQZshtg95DEKCgmRiYgZ",
  "key34": "H9fQxEmkn1PpGTeWrcWKrG9ZLbNJNsn2Nri6FPUoBMRTmkncJkHFcWQ6QfB3Ky8aAAHAzYpbk8udzGoec7WFKXc",
  "key35": "3P2iJotKQrBiZey2MKer29o9SYK7J1FDfSWmBoi1Ejo91ngHp6EQDZK1zdbHpeAhbsu6YH4NMyNb2aMLL45whXmx",
  "key36": "pzy6TcfpzeqjafaGngt4btUV9PSC4uhot9W3ek19QRsGKtVNbA9C2S2ponCyCX1BdD5JSnh24Bpa5iHLicu6YwX",
  "key37": "2jzbD7yNyU4My6D5UjHN229Jue4sqA1u4ufJc19kWQJgx12U6vNyeK7KSob8y7vy2JdPskaYLMPzJAQVDeYD8dfs",
  "key38": "tin5mRZ5gNGBzPsMr5BsppiJidkqxrT2cpakmBx58smmZhmB3KLrAuDCRmwvCtAnDY6eimzJoFQ5nfkJkBPKUW7",
  "key39": "57gqY8cnPeYbAesGJtHnNoTXthbbCK8kVLTN6JUQdcX97HMt73HLfHXRpaVxXvG7fQxGaJPHeKxwxQSoy6FLq1WP",
  "key40": "4Vx5yo4ThGrTgoTctMzc4oBzpoJxsK2QMHqPhvKhyKFS5hPocAKJKEBXiBJ2aRdAzThqNishzuALqDqVRKxPBJ6t",
  "key41": "2wQSqJMA7ifHQcPN8gT8JHnVKKJY5K5T65yFnRcrcE2Ya6Bt5r7ovAMKk2r3um5GhvjnsQP6fcPgoFZk9buwGiFu",
  "key42": "42i9YN7bXzWGrQzJjxtna3FrCehKPBUVZJXoa5Krdc1yASkuAfycNLyP1XfcHLFgeKLNjoQb8AYx1k2VJhxNgQDC",
  "key43": "cBpct5y22dvSe6woumvD62ov5o7mWJtmxxTxvxstUUy5JSywLNT4wg3N7uCmbqGqW7RxVYnS7xqT7zLr9PDp6Y6",
  "key44": "2eZAJVWk3niFBkyxZFnHY3UJmhsdBwCsBkTMdHmtRY6CbWUCeKeQnAyEncq3NVEEkSC3dfVMfQCvqYVNwBt3zz8R"
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
