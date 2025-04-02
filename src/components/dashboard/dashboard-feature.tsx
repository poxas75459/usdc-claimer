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
    "2yq3kgzNx3oyDGXgJdxZGs8xYUk3QufQVbjn6qtnCkkJ5Vu4wtX5aT2rLXA9PAS9Aj6RvDVKHkDHYM84dB9mj6AU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xabC89fPkVk8hDMyNo1r3yBoVyTZumYiANbauxwUoB1TsDLuo8KbLEkg3mqptPt8HgUKot534F1ehFHi1nGt9fv",
  "key1": "4TSGi44ARzcoDjq3UHtRiwDtQ3aF9EqMXg4dKkd7HSRLsKzspr1dCYV7PDBQAmmfyB8WJBbHdb1vymEAHiQGNuQx",
  "key2": "3riAS95gMKakXoYNH3yixquKAGyruqbZUth6mZ3PsJxGjUxs9NaFiSUKeZ7bjfGuBa2uE2rF7TEYZt4BfrpyVw6B",
  "key3": "3z15AhGWxXRzgeFcehKu8ZVyNSGzJ7CDyTqPGLgeqhZKhFt6pgXRSvxHBSEFokL4Xdke4DcJ1sJU2wnppA4MLWLJ",
  "key4": "BXDCYQb1ouPtDzy2uXEHmdbUUxbMHkbe75TCGpPwX3QoLXWgeL2qYc14PDjdvyuKeiURw27JkvqdSKQxpRJFnox",
  "key5": "zLVfh4HZf1pcpvAw1DkCMYm4h6TBwH65c9w9gpULSLDZW6STL7rkZSi8GzuiFDnCYQh7SGc6F9bprfdKXksj1sk",
  "key6": "tp5FrhTvV161zD255o5TV4wgTh74wEYLA1p1ttAcUCmw2KNwjWihawcnkHj5KARMmpnALvrffL5yPGskqxcrYGW",
  "key7": "3oqrMHmWqzCrJhufXBevYqmmEfvJGScg6g5FJDenaJtuj2q85BwBkRrFvbzASgLxwsVasaZtHpzPbe7AE1fJdFv9",
  "key8": "xjf8bfCGQLT4yKuWMUsTDygvRszZMmK7mxdY2xsP4tsBKF7nRPioeUd7MYSdhBdpBBiy1vK2Lw8SCN7HkMSqkZF",
  "key9": "2UfuNKRgD3f9N9oBZUv6VYmaLro6rATviSToGFY8CJ23f5XSUo2fUaRFwJB4Ak5G93156tgp8CK4eQdWnMzkxteT",
  "key10": "VQqBz6tTYDiNQYQ62vb44oYZSX9LWKv2GD22G5YqtwCryStHQr4VzAQ9KNSBENKkouaQsyTunZABT8GmeHrC1Fb",
  "key11": "GSkUxxuzUHNfRQJjNLYQajg8c6nNYYDSnB7gipqiimiXbHTkeGa5JE8enQKNi5mv4eR1NeFnnAwvERLQkoKMeSK",
  "key12": "5NrYF5uCni2MXo4CfAYewXte2gXPQ1LHdhozkACMjB1M5USr6qA9qeiLP5WwZ38B5YSxoxwbUhQ5zA4RZ7s7iaGQ",
  "key13": "RN7mKcTYGG4JwR6aFNMCtBD4KeS3o1SrS45sosoaYcYfSSsma7wAUMCPSZbTLHZhvXXXAN5K46sKzg8egHzjSov",
  "key14": "3c5UDV7YnNfiz6oP6ovZWdHAvuXPFt4JtPGTLqpMrxHrkjM1K7y8ZEMvzbdTkvG8cg2Spn4Ft3uzd2emp5WLTg4i",
  "key15": "3FoX9XUA7iTRV6D44611Yffk3zrYXWVSi7noT9qoTwfjNctJtTw8pYUG3QDPygyoEzsLVo8TZqSBakAQMRQfv4vp",
  "key16": "5sCgESCShYN8iiDtDwb1pa7WxVJMz6NqRw761NjDAZ8SgZ2CitKfLLkK46A11wTi8Hdu5bfbQQgau5kL7ushExk4",
  "key17": "477ENqahKwSi7C9xxreAzuBcpbqroHWinLqb589ysJ7UgNk5d9Y332zkUtuzRqBQiTUbWEasm1qFwqbh2AmvVUfK",
  "key18": "2QWtU4m536krtBxDWHDMfNVn4tsozPcD7t7kj67BvGGWCcUd2Mxit6yF1HVu9RJkXgDKevGqhtjvWrzPBPyYmje6",
  "key19": "mQzBDdJF11MoKcRWoCfyeujxt6cMsAdnbnc2HfFaV7mbuRwQRZFAbFiT5FbqzjKv1PH2tytpV6r9Bi3xs7LMoDB",
  "key20": "4v6iw2ePV61epg9HWGTJynAaV92LNyPBmw2sirtPQAD1YjUSAwcBN6pcepmSEdFMqKf715oduZQXdCNyReNDNCYa",
  "key21": "6eYKCg65P5qbchJD8oZ4BL17zKt4ppRGA9EgEVzijmR4g7iSY4Z3MA6g3L4GtGFt2T4ZG3sgFxQ7trtMY3K76ML",
  "key22": "4ZKGv1GsiMfp2AhHQpYmQ1sWC8BZH3YZbBGwfYa6dKi1Y8EGfiJHq3NAtY13TAA46tESj6CMHVfB2nmx2ZiX74gP",
  "key23": "2nyDKU5Vhrgphy7Scu3jqpiDR56tXn3iWN3m2AHNitaCDnTCNoKBM1WtCVM4MjVcq8LNhPZz5fUaMnvDKbCiKGoF",
  "key24": "4yhUDTEZrQLpyqd3fDUsSwLBzGgu5pk6Qeqdu237SSuBc7p4jYuPkD8fjP4HyNHAgwMu1T631L6yRkjvvnFiXAsA",
  "key25": "4WRgWgLwxLTic9nX9nKo6T7uAbSDGPQzJwwjByaBhj9yYk8eScv51tY3qb6JRuRpHPz9L5DsVRoMuu71cnkU5fsF",
  "key26": "3tfVbzQ6vPXJLu64roeyEHF9TjJNk9b72YcK98Lnq1Xbqec6mBTRqqFGWJgr942KsSLEntriSoULQ9Zh7eP3bVd3",
  "key27": "517Szvja9APgvjspky3zBcJ3WLVp9un4s7zpZvwbGDeG9uwmi4PT8KyPWpfquZWbZqDkqGDn8t6LH8RWQpuw2RtY",
  "key28": "2pTev6vvJNSFiyvz6cJY67p9tBVxg4j4sZBP3apzR9c3YkGukuNcteNewrNkYwF3PdPE39Shg3DzpFMgAjQe3Pwi",
  "key29": "5Mh9WvjsizcM3GnRSvac59EAqDao6eJeeWDr5qQ7JZ3GJrACtM467QaMTn41PDLyEfk1Z5usj1B3j7r78TaD6cot",
  "key30": "4csaw9FeXtNPv9S9CHadgkRGY8BTWZaLu9bRguNxwomhuUCCpDGUSKtqAfdApUUFLbocHDwuqedRkSzQp8GEunfN",
  "key31": "4aM2tMYQXW7cgVeBAT3JChMz2TN5Nzoe6ZLjWz8QcXEkfhBJKXWdUutt7ZDCJ9SMLaPCPHZEgPfmmrBXdzsPgCq3",
  "key32": "2d9P2d2JKaVv29i7D3qWs1Xig6knQFq3e4nBh8mkLgVZ1RSxmrebsxQSD61XSsNz6d1DF83VUD7dsp67V4ypApWE",
  "key33": "5L1FbZTi6gdb2DgiN1PJEXDvpQZfK4mh9qPFPmQQ8TvN87TH5qHJ9NG1pzJgyUkbwE6zz9VSVJzT4hXW8eDw7pDS",
  "key34": "21sEKBaqnqcpEjh6yBPhtXUckYTzbgcHatQbCv3W6NjD1CGFPYaZVtzCpnU1h64SMkHGVgPP9cZFSWhwVooZ2Scm",
  "key35": "5mHJRJmDJWu3g5X2jvgTuFkcZBF9zqaRDaAvVAoMrrDALDyQAnV6tf1mbphqitqP2AQmK4RjqzWYUgYgBZtXzwnH",
  "key36": "2KK1B9zNn12JMbKYLK6sEUCpm1gL9pgU3Gp2f41GrW6N9KDHPvFyEtauudKWrgn4qptv1QSMTBvn51iqdeo5SBoE",
  "key37": "4kWRBwbmviTNrMdY3Nvytb2repCkseSa9ghDARsRJyu3ekxPFyfJw5Ve1RejbBSHEDTbL1bthuk6Lt46r7fzvbqy",
  "key38": "2U4hcE5DH8Y7QF9TKe5i6Ls5cq1YVNcwY8BiS7V2hxmw2bbRMRsdErY4tgb87KhmRpkZv7LutQMJv2TrdGgrNcht",
  "key39": "64D86iTauL3Yap1J3ogX7TxKPVjeXzYA2fdHUq2pz7yx4WmjrXVSiDqDHVKAQe93QQdNJoMRDCcAke92RhneEBa4",
  "key40": "XrSp9iw7JAtUksGSpgrR655FsDSwB8Jmz6DKftxohAKK7oPeeYhaimyULk1UZhSwnFn7Bt77MzRcpFFoB9F3XJ3",
  "key41": "2CLaYbfkQWA4WBUFnxiGqWgHezcktigZUSDSjFJzUp251XWoKULBCSCV7qPsgiMcfNsxCyTENXUZNyfQFJMyqQPM",
  "key42": "4XUXACQDFvaM48Db4hmzDeF33wdGU2R8J7cisYx9mn8yksbew7EXTXyMVKvVAvfBrCxLkMwKJQ2YYWfT1sbjMy6m",
  "key43": "5z82oHhnnFxzEHrEtokpHYbk5d8V8kA9savKzBkDCdXUiGtcGbETb6xJLTGax2BzhjYmLNMj4BNhMiUocWMjRCvA",
  "key44": "3jiYWmm856sLXzqjatDEnRkYnfHgpXRmjesoz9wW1cWqY8iFga8Hw83RDKrKjVN9Tebo4cddcVFVY7kgAngFbUQn",
  "key45": "2qTaV3MrGR48HsB5ycYdXaY9mdmz21wrEcv1ginHKE34wecmkQtXHwLnaRokVqmc4Ctko1SCjNEMxm6Rh4dW6s9c",
  "key46": "4ULxkYxyjaihrrSHEgFq989ydqFcmWsEpaJVkWudgkU2gY2SPkYYVUtABMQEcXzX5wJvW41XYeVZ7g5EfrwtYCNe"
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
