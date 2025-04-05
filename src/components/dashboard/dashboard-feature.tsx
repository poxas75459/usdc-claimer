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
    "2jV7A4WrfGUyhzbKicy8vGkLQPGcM1X12z2iqc7jTQnyeTxxqFkeaCXEuBauVjmF6PqwGtxj1stswT5qSCBXB1wL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y4uefyKXRb583Vw1UYuDqUPC3dmv4F5kScvXsWX9oD8h2rrv1TQ6Yqu3U767Vrn4D3UHuKRAT6MnUxoJueXGpMQ",
  "key1": "52ypeTcLogT6bQGZmnpn3SMX8vu789gTY8BQmgQK8SbXc4MMjBJZVsXDnKaTyEugDB17gGMeKCkxQ43VGMA36bhn",
  "key2": "obqTwKiYSMCPbKVgsJWf1j6xjhUXq1uKhqcAAXoZCFpNh4Tpri56VrPmjAitBDheRp2Ec5zno7pFp1XBqt61hcB",
  "key3": "3JhKNMG3zioggFYnB7GRs8kcNrmzN2WhCd63x4LAWoySfuJ8HwZUY24nvojHj5NiYBvP1x8mMNN8xDXVHQ5xJenY",
  "key4": "3D93S8VPJB3Z2L48wJKt1JrwSpFaAUK9JMUa6YqiBN1NP2Eb6SPpH4UN7M26bVEM9CCf5p4Pci6tB7uJAxx7gvJi",
  "key5": "5qcXT8eqSxB4SADXwRGJ7jZrLi3shMY9WqaUtG1KD8Lw3ELJFke9kUaVHqMd3AZVeyaWDWrXevbPTTaBKQVPbZza",
  "key6": "4McKMEH3Qu2Pq4PbfFSFMBv6xGFbRSGzP95QDn95X748kLa5Wm6ykNERzPimz5ytAXjd6DAkeNbQJa9XrCBeQLxw",
  "key7": "43W8ZKN7r6BVJeLg1g7V647GF4N6AiMGjnfNvJxXVPSZxvK6npuvByNsBdRGzsCptXfDEBHqmZeZ39Woz3GyLii5",
  "key8": "AizvNMxW6FW5ams42P1hGSdYSV9YS2D6Cb4SuK4o6uLXCLwqKmpVu8Ur2Ydgr7dxiKoxFVp2gh5aD7wuCd8LfBn",
  "key9": "2aL1w1hVYdaDbmrUgf9ZoZNE5qR5MV9W9wVxWmEDEwEAfUnSbJMUbGJtgnBWoRDjttYRn7ocPctn2b5ujS3t9Ue5",
  "key10": "2MQMQZMGZgTpiZdL4RoKZerhevY1YJgUaRB2ctXWcbpnjhasqREccFGbEyRCQwKJBP6BJdFMyfZAqBWxaotKWM7F",
  "key11": "2xcaUyBruTeXv4qARxrUswWzZ4hxLL1riYW6YpJndixzBXCEf8vWAY9U2EdBYFkf2obwLi7vt7ngFnKf7Ye3iyNH",
  "key12": "4osAmFcGssVVVwZYYWP2LmsEMwf61Ntq2PgDr4iLsQdQ7XKRzmp61kC2kvvjkqFD8QUSAHNQAMa1csisLktVpzn3",
  "key13": "4wdurG8pBjw4XEaKSP6rGH1JBDPvLoS3Mh9zARYvrrRKTtv7tqqxrrKMkrnd4jXERSiotpJnrGSLgckq1q45AoQz",
  "key14": "5Frw2JGsR7d1jZTGopwcokmkPhAS2DATZxMeWUdVh5GNS9gmiwdssJGyvUiSHhuw2cxPhvmZ4HFVyjoaEcMVpYuV",
  "key15": "2hqMsPbfQynFmXLaxdzCvwT3Sg1H61drXaKf48igZweu2Y8PxzV7DidY8YMbW7stDrkLfmoiE2zw3seSQd9sDqf8",
  "key16": "3XDpeQMAL5pqkeqe4WeVE36zGxHXpPop6XqLGB6STa6izYPSp2Yt9G9BtJdcNzMQMG8tQ5NjSN5XfmxsyzCU8cJm",
  "key17": "2UYKqnu6ZNDLgLUH96fo9KqC5ZtFeV5yPzSGyc1bEYhoAEaeVk4oYhPmGZKdn4PGFJ3ZjPA8sYnn5r6wjh4DTfju",
  "key18": "5J22N5GhTXiDwrjENJg4EuW1tNpWyvwYJ8yFKMKSVcZdh6hoZThX6KrwpAYceVkoERLPGprauBhubxZ86fUgsdFb",
  "key19": "2jYdBz2drzcjHkqcz5XGjNMqixXMc9PCw7RHTPxehdsnSzbepqEJPPUrjWq6VUjLH4bwHVW9NNuGaDbhsnu3kd9J",
  "key20": "ZxvSwhpbKDSwpNLFuRFdgxoQD7Y5HRtn5nnWZPaaYTqUT1eWwcMR9zYn9Yoq4YQmzV9Rw7PCwKExcrtBMHbyGwQ",
  "key21": "3hEKq15sncgjnAL3rgHRQFG3UyWPkUPjmx6xvdJH2rBer95kg3QtjPnQwLrWTBRywxCmwp2UdGWWQ19pPWXYP81L",
  "key22": "4WHbq7ywGEKkmHT1mqqMcJkFBv2ax37L8GuDo4FXLapkJCyXeQobXVb2b6g2mnNRk5x3ZdGnkGNtDYnEfqNXTfrB",
  "key23": "5fNCZhjCwhzwQtJRZJyhJTuDSMqT2vJLzUTNcAqKuhcZR3NYSSWhhfvKZEMGRknwatJx2zE2MY59943aBSaSVcZB",
  "key24": "4EhwBDNMr4PsYXNj34uNBpJDpgnAvLrUGfJWZ6XrqVYnrizQsphXkMcPpfUqgo39YjoHjyyxnfywveo4taZnux2B",
  "key25": "4huPD4sragsW5LTkc7EmLsZ5KuZ6gEsZgYaXrXvDYwkHGGr1Xy67LZPyq85omqWMmk7g2c48F8PTiPSjWbSPV1oT",
  "key26": "2krmJWocuVWDGAgfBUjCJVSCSaL7uta8VLADtBUST1GKFBVi1RxZVkjUcERuCmk6h2keiM6FAWwM1ReXTATRBtdt",
  "key27": "n9NGAmhYEnrKCUUKKEHmjBWcnmwKsufkkQ3Fff6ApeCF6rrXymtpfSJR9ELervKvs28akovgiSHC6ogfLTcUtXJ",
  "key28": "HQoLkx5mrrTR4QhkiLPh3sshiDMSXE7G3HcjghThnuUskdYZYWENdsf6WFLPMa8ukRoTGtGXoPtmBaQ1GoTVDXF",
  "key29": "2U8AqyuKxSo41cuemuVuEjrfgXFr4xEXHoxncfiadbh6U1xM1UygcTCbgbG2kjFKnbt75o3AMXdVuSBUiEPkR2sw",
  "key30": "24CNXMztWhi7yG6FUs4SXQEGSnyEe1UsMSVddZuirdGQAHfm1ZdqVFnddMbPSaw7AaDpeRLWUvfs8oCY3ySigzNQ",
  "key31": "4oqDgA1T2TQqHLJ6xFT4dgYp1fQrXH7moqBpbxNDYeeKqassoiakRTXeDrvUywnUemaerzqaZzLPSvenjUjsaobG",
  "key32": "3q4trWwNKVMfYJb7ZiBr4PEkihegE82B98xydJFWFBSY6ggdgnrznn5Ri1XXaj8A119CUpo1ypasvAMEy5v7TCVW",
  "key33": "3zM1jpBkBVjqokswcmmuL6QkUZQin4Q2zGnxyo9JbNDCHbnGoB3jXMfaZYVNyEmLF6CcucGhFk4yCEC955uAV287",
  "key34": "3CEiFDQ34mppX2jQvgL3BasJvFQScQqRyKho9SRCAaiMjJRA2M79B3oznUfVDbgc9zzdcXs872g9hV53wm6uLvaJ",
  "key35": "5wayW4Wz1vprpBowGNCDWGFqcGZV97ekLZjp9uqJdhLbXy9jVWFbfMEDcdcvU3ba8kFogyLcTDqmU5eLWFhPmrA3",
  "key36": "1ooxR8KX392HBnVEobsZKu3pyNHA8t9h9r2RjV8bMaA3xE4hvd7JSpoxvcBTNay2MQ9RGxH6SDTEExktoCfxG3K",
  "key37": "2shYR4rNGKddUAgajeZZCS44haY4S1XyGSQffLreiryw9WuqGzCMrJvatQvToKg8H4qN5NeifBcFMXZZMCyiERRf",
  "key38": "4o2JfXSUwFRw7eczB39iVXfURgoAJ4j1ciCYuyNLtMEjNYYL15nkkFH6u4p2sbsMNTVd91dyW923QvbiFTBnxQsz",
  "key39": "mK312a2E3DZtXZi9yTWrnPqVYDYZL55GupUGyzDkjddLGo83ZSCdmeMYS5Hxm1Skm2Nydy9uF42odXgSrLpDSis"
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
