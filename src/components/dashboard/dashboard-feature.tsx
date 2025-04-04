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
    "36CyETAAA2sip7DuizHbhXkMTeaigkx83DH8Lm4k4hqNHA8XLeQn3HqBUXbENvj2Qdnwiw5h8BZDNQ3z22Ao2GKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XWtWCLQMmr2jqQ9XjTzvu8BjA35ZbMFJF5MZu2GjT7zKf6CcuTViDnD21WC7dPEsSC5z2XuNibz7QotBhyPqjwy",
  "key1": "5zceq3QiEpSL7bwWLVkBL6ZyitzaJfmHkAkHm4FKhLXWrtisDpxQ7bCFk2vzy3yADYSBGwbKZSxfQGcKznhxTFvZ",
  "key2": "4nHKjd4B9CYKQXYBb8ciGFUTvSvYcEBLnzLhLArtoHXVSEfmZzgnSe2JvHaaet7NY9QjURQTR1k4pZmvoeZ8tYTy",
  "key3": "2bTTScJ5NNYnoeR4EWLYF3jxUCK2buBA6ioUpQeikNXMtTcQS7o3CNexuP38Kd9PHhvWtDrs5aR5usmqMCK99Hh9",
  "key4": "4oKSJTiaSSvF4Mt6k8vDVuTJkNYeADZvkusVfmyuVX8AYbsbieKr5PAgeKu8ja8DmnixPpRLDgXUiY3JkZy5scVp",
  "key5": "3ViaSw15QgsCyPaoyE6DxnQHHJF9FhU2KVB5Uq7hDdoMyY44gb4huhLsHCTbCFKQZwT3wVbkUccecD9GrbJpXT5j",
  "key6": "46eQVqYhLmjxwqhREXUKbxVpwV6f2Q2PGYFUj4sKCbFr1BgHXJgXT23QtLG5KaDrcmybYaWK6ciFhLPQArcoQGNr",
  "key7": "fFke9TnHURHLtkHDYPZmHBq9err9wXu7zfzLpWH6Z5BLyRGGJiU1FYthsZJfXTmxH6t4STT5QvmYxAQAHFj8wQb",
  "key8": "3WWJKa87ZjAF5ENu8Y4xZRz7wRJdGSXtGY33X2PD43EPz6vLojC6hTSrUyacPqH9JzhFHqVehb1kSmi8W6CdUrRg",
  "key9": "4DsEkJMZ7r4eH7Rhqnq5SSAbpq1JATLMomdjnwPeKHQRHHFAVvuhmh7Rz3b5f55GgmbCzt2KQ4fuadRtNoGvPbr9",
  "key10": "65LRykcCTfD3jAShtsh55TRFFvicCQJjWuRUs4NoGYVkQWfE3RcQZgofe5AYXxkKBnc4b3eZrqm5XeKXjd8JVxzK",
  "key11": "LrQVcCLHqMQgPK8aQWz6hqcDEUdfRLz2TYXMmrdFVr9qw5xiwXQnmzxaoi9fM2iCyFUNa7VkJMLg1dD3FJxhX3B",
  "key12": "MeMLvrcM2XXR253kiSwdw3dLjijboTQ7V2hQedGqDLmxqxQEo5f4SQsbriivS4kjaLDwq4bFxpFknfc8N1WQgFo",
  "key13": "3as14DuzkdeZpdcHDTEmLT1rptTvFfx44zNahcv3Vfn3QQp1toQ3ZmdRSbiE8d85eaw8xhQjsPEPDHpyN6EaNsBv",
  "key14": "2cEn7bNMxTF56iHcsfsL6FKNt87vMurj5JiyWiZ12Px6BjhAWB1EA3ZgLGGjpfnMFM2rhpDrHATb6RrLLzE6qYqo",
  "key15": "3fNNn7rADo5C1pr4adKNsZKRcxZmVFUHm8P1sCWpeZXEx89ohDRa9RgRSitCZHBWcC9RohgobrGK3wxQ9hfwKKKn",
  "key16": "3328vqtndW45KRZvYLgqS2ihPHaVcmZGBgGQeYSq2Cps3twjn7ahDwSnGGzSdHPk5HhCJd6ZFHoaEuFuZsASNEEQ",
  "key17": "4bL5irQMvKAvVbkv8HYmnFT8mK5ibmqP64sdorGRgKSophR2eqx2fmNsEsBcVviJ87eEGSXfkMhV4qfg9t2pQTbR",
  "key18": "5BRSaGzc2z9MD7p2RLq77g4CnXD6LNaxbq8ECReWLqazHobg3PwS4jhWtN2ZZG1yzqyRRKMeUdEy6qahLpyJy74e",
  "key19": "4VTNdwnipRkwgK5qJixGhNHjt43xniSGfnjSrXyvpJWwoAZL8TnqTVvYnQaV7N5HC8LZiNLj2b5vT7u8DuTugoSU",
  "key20": "2z2cN3gY8YhdfaJHLhv1KFzTXRhKzurrYvsbYcfBohzmmd3UkdKTHWABaktwkbSRxrzYnCeX8NmoMyKf949cy1sE",
  "key21": "4Q7tPASo3hjkwNJYCsHPT2Mf6vT6hpqd3N27BV2zHGvbn9joEVTEEVcQ9eUPLZQGENQSLhUt8agQ8tehqXyu3qFA",
  "key22": "5iga4GZ8ddZmrTrs93fJYyQxWYophEMK4ZKZZdnqMVMc6LGmPjpTuET3CJGxJ4AN1o5HMpPitWK3h7D5NsXN8iFi",
  "key23": "GhdDUemY5eEjQNmWF7mMMHZPz8SyAJnb5QtUvU1Bonm4YEuQtUR1JVrKYZ6C1WqDxHSF2BbxJPeMyT9GuaW8YLE",
  "key24": "3Zx73mNaZ2TNKAFeS9Q4rPTaGEp6fHrwoKwAr6xc9AATPNDuZEQ5EtSe2xiGxEEUuFFCqZDUfJH2HXW8TQg5Tusa",
  "key25": "pHvYGCTNR7V75QwBjE3LktcoF9HDkhhpCHRTAU33ypqYVgWdW5z1Ly6ivE2xfUmmvaQW5tG6f3rQD7xdeXrT8xj",
  "key26": "3VhDbT75Bmu6irDnV8jq9jGJsXHUsL6KUX2Wqe5jHfHcbxuJx64ivVt8UKug31g7zNKWUoQrBLD8emWBjpSqqrAh",
  "key27": "JqyohCGbW8ozHsckBSZ73QBkzCzd2JGgJP77P9DDpG6hPbSHeFq9nLPWRXrYr6XL5mLeybZyUToggc4TnFRDUuu",
  "key28": "3VhVCRoMhGJsiPRBXDoWQVkcfocXCLJhXMwoShobpKQcwq4YpdNQqtPMGaWgUVZd6GezzNgMsZZTWKTXXiLGthEj",
  "key29": "5zraEWN75e7XzucLJvfsVUEhtMjDk6b6V5HdQdVw7SoRDXoVA3z3RX1Qd5s5Jo3PsSiVyAqCYQdWDSAa28CFMwah",
  "key30": "x3fKQ2z4svpVoUvGkGUvZXK1ovURXQ6boKWCbmAJc3gXPGhfhE7RMd9bmY9t3fzHLAEhEBUGJKVYsMsBbjyhrX9",
  "key31": "BHaTQds4k4Xg55apDWgCBahN5AYuEcemZcx6RfSrqzs8SMe5s9vFeDTnn2Y4virSKpzAHs5xwU8gTM6tLrutnYt",
  "key32": "4tUSHUnB483JDKuE4EaUu3Ziua6FJwxSTPHvKEdfp4V4LmWJcFhKCVsHUriL5dFyurmUHSNPugEzzaokDjAgxwFc",
  "key33": "5XhhEnoHJUS4u113UfPGzuomiiB5pfnCBS4Snphm4sNmSoKFn1pBD8YcoT7kdWohxB7HHSNkhaiX67uWgF55Y8q9",
  "key34": "4LxGMXMHk7K9S3cBR6FRSKhmscYVA3oM9uQQpn4LQgSguwzQtgTwoVGbikcHNfjbxsTMaqrFnZAUjGP6moTgZcTD",
  "key35": "25rzw8j9u94gworahyy8djGm1xr2N3fDKmJgpYAX9He73ag3Dj8zcoq7rqgSSH8S6pCyv97tAU1EiLq7gTyeUw6A",
  "key36": "4HarPrafh4KSTqohYmoKeWp62bzgGgZh7aDkW2iqgxjpmnvtmtSnjian4eswYoDJbagZkBFEvdm8ctU5XsXd7tFR",
  "key37": "4AeFVuLob2hg2YwFGzpUqJ6arfKJ4eZuQ6PxU3s3sYguuHQ4WK26cNMw2pRQ3oQuxs7drABkH8h1bwdRna1roAiz",
  "key38": "4wjChv9kJ3Qep4PPTUPw9i8qntM9edoD3pyfbRKNACE2exqt9469oEwv5T53mJV1SDYPudNWccwY5cT97ttgoEoH",
  "key39": "3HQg28XGJcxupeCbByVcyEqvzkQrziwG8cNjdHAGPr19sY97oaACnYaGbPXZE1G4EDPChDu3WqXd538UqP4nVaaM",
  "key40": "3b4PZa5TBrpmMhx9MqScmV1qF1Mtkg43DvAfMvMrXqus5Z2HrtdbXwzcfjdyaw3EUrQ9KFoJL9c51ENwrbXfNdoS",
  "key41": "535zrwUKUMjbnpx98WpAD36uHaDu6HGnyHrY43H2uAo6GkiARRVnhEWJGdKQ1LiPeBt9bE74Xn1LYmbG8TBuDjCy",
  "key42": "2mqUU5H7s4iJW55YFp3FwSEHZbnPicXGwQC6weigrbd3pzVKi2uXYcuTww3HaARNwb6hUScwGLkkccRiTAW19Bbh",
  "key43": "5BVj2FrcMTL5JnpfqLx2UsQpnKNMMB3BrThduCC1CdjhPcj7HcrDRJZuwGwKjcUePmmxjBve83wFwuswTimDwJ33",
  "key44": "2moBTxTbgmEvzQ6ongAqtf77KuD9AEFEnLxG151HdLmPWaGfmN58J1HP6Fmi96sVkgmNvwr69VVkmzeeY2oLVVfr",
  "key45": "5oYQFEDemGfEs1VZ7s9eNs1tTAjqTLiesNr7asyjCTfdfSs7oo2WbPkWWFbXNbUV36vuAxBrLbQFFRGHi2WFjQpq",
  "key46": "FwaE56ZrXx4hhVkcT99e83BP95FZiRmZUoM8t2KjLrma1YvC2gqaTd6wAhHmwFkj17UdPnmTKbmFkUEYq3nAWB8",
  "key47": "3mV5PJ7h5evPM2s4HWSc8KXxpCU36YxdTmqbe8sgo6gWMKm8MwnBs7VjMfz79PZ3t6Zpa91nEthpbGz2Ehx8SAZn",
  "key48": "4mWq4qqHcSgvPgpLJTR8BbSXJDMNtgyouRrXdrRrN9bKfL1ZPtcuFQhF9qSv2cukP1K3wzYmQFr7MFoQuHBhTCsq"
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
