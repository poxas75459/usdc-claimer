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
    "xwzjYdaScYEWF8GE32BzMW3Gb3LjHS9qHSVayhWPiFmgDKcL2ed4cNAd4qBBLpMQvTKQQFPWakb71TfmKTWyDZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "614kNB51CvEbq8iNAuaiTKJrLkwoaxjNiSbZ1jnpuLKtnwGUQHFxy7tk57VRTiAodm3mEkNzQYviBTJ8R5QxvEQE",
  "key1": "mErxYUcoCjA2fQFSuxFXQReqUAFYfWKqXD9s9MoQa58Tt9RggkYHkG6W5cHfDJVgG6L9jUdgAyCeN3NcBxry4qi",
  "key2": "2apr9vz9Leq9Nj9GVirRehLbrmfXATQwP54y1HeHzfmUsVdzybMYxsiBGAgkyBnn7A4jBxsYHaArLeHo3MFwhnW9",
  "key3": "66RRcLi8GKwKUexEzZApZSQebYbEWV8VHDhpYi5BDyPoMs4xPExeYhoNDpNiTXJDD6n6EoA4uidRq9LVpriHmjVV",
  "key4": "5L3t78FsMCnUeH8iYzmrTUEQDXnHf3SHfM6LEeqcHoiywaPBGL8UTJYvMjVw2wb7Jcm8MzSw33VKHKTV3PgmNm4U",
  "key5": "31ti1Nset2jws6Z1R8Mhk6YfnrBUzx7CnXPRBx8GyqyETziPySrU1xZE1pYNUXkbzGvPsny3oXm8AUSShY3nZmcV",
  "key6": "3AaE8tLN7jAYjcfYr8ZDtsSK2kjQQgdYeUpcMWSAr9VkRodtjNdy2YsjrWwfiwkuuvGpzs5XyDrJcPDyR2oAx8iY",
  "key7": "qWaXJmjkJqktFYkDemgSNx63kXtbVwePqLKaSmDhJWVg8kmjYLfbRHYwMFiQqWCfydntaUf8wy193CMPF3fr3sy",
  "key8": "tzLDKFWHXrRJ4RgRRCajnukR6m42XhNcUfb6wEhPFtgEHTt88cLSMRwTfGFURMFqanK6NFNpfHkY7NHUasZQAxX",
  "key9": "5WB9uLpj6Md8bBhRa228keARRcBZhYfSQ7TXQNwpXyRhhgfxvZ2R5FGUDUSfXiekViMhmw1ELWKcTPt29Nn3KXoZ",
  "key10": "5bRFP3RnBwUXmZCxnDHKDCrZUYhdkWYZQHgmqHD9uPtbmQazGeLwxh8Yy69hJoa1UEM7BwaEGwAcjXybM3r5imVb",
  "key11": "29e19Fj6VkK632CbeXDKhSf3vF9myLc47PjkYb1BHcYDTbcboBZrJT1HWtjryJrwNjfhYJBTwAGqjx6oJJNsHzrq",
  "key12": "5d7aFykTtQ5CVYanvo1kSRNZm1QXk1XFkE7Tti77XGZfiwZVCGLN6eqinSJXBdLibykj59vvascdUKx6N9QVHJoR",
  "key13": "2125HfeqcYAismMVUHjGoByGSjYX6BqMv6TnsZphEm55JPQ8q8iKZM1XHUc86Cv8ZLxxXmBC4C5ELb9MCsdX8aBV",
  "key14": "65CWnQ1cgCvdouEaaHfytXGJTnHdBsU34TbrLxYyGeFPG7E6YChKnS2gb37FU4D2DGu9xkCEMxFJSopvZze5n6c8",
  "key15": "46HNv38NSp94w5eAJWCHALrzDqa6VNfi85WMWQhPuHGaYzhFoqE5guxAyZtdHbNsfQ1RYo6whanuYEhTEHs8ChNV",
  "key16": "tSSBmGPDXjC5Tw3ACP1EAspoBdnbcH6Pfr4sdEdkmorZb76fKBi4aUtigoBgUaozVPeP6nQJ53vE7MppQNwC2AE",
  "key17": "4xSP5EwpXdcnJGfyUktKx1RtUVZcLCWfAuaidNaufJbM7zSEH7PkpSR6JJF6j5ZnFmvzxtWTPVCXrC99vPtSZsm6",
  "key18": "3Fsh6BrFjNav6VYjaxxrRXud8AiD4fqLxfbU6jARnoBmdwaC9eEVYEQRsHW1as2GCQJjTHP3qqehXyzcfEWjmpRY",
  "key19": "3Dukxf4oEDWwpkHLRNJhtL5ZZwGqudsqKkd8sZM7v9BYCXgjWCziLN5tk8S2Ur22LKE7jAaNu8RobXtLPGmhj9Hx",
  "key20": "51sjr4Pg8Yn1qRBHKuhAvAXZUGs6MS9x134EYjcDb22eD7eCwtqU1X73vtSsa4tDyNYbzZdSFu3CvQxr7vw1teiY",
  "key21": "5S5iYLhQec9cRxrCcS3qPgs3BpcYwFESfLX1Np9vNXyPNU4cwbYeYCWEfUMoKZBKm7XXGD9WV5LybfQLoRu774QN",
  "key22": "5ErTT3K56sPLtBAphJkn2PnaAx8jvB5deYhBQELMct7RwdgiasZY6RTYYRCL6G2YofNDq2AfzbaPqMqtbpP5CFEZ",
  "key23": "26BYnN3x8fVr6RtyFAZof4qc1BhCqv4iX98opvhFKF4dxVWPKLgxNTfy7AUsgofupWC1LyF6wkUyXfhYSkehMNkc",
  "key24": "kp8BhhrcnojDuZpHG1ptNGrgB8Lpsg3X7UJgWm6WRfFMoYEwDb6m7HVZhRTRu819ATN1gdXA9e5t7UuCFC3YEGr",
  "key25": "2MowEEBEDjhUkW6PspuieMWgrC99FQ83bfY2NLVu6GrhKXW5igN9D8d9B1fnXVKKKWojh7AppW7TZLgSgiPpEkcB",
  "key26": "4DxQAgSinjpgDazGLJQJpeBRwViaxkN2w952QtUxRCtLn2wwmtVB4zU2tnaAxgb2NGQdbyrpZbSggYvGvre291xT",
  "key27": "2Nn4JbqhnWuhUp3EWNTG54UpJq6fRFrWWHg3yUQT2qg7jGUxrCfcgkiFfZv9cDhXSPtF9AZHbbKmkVZApVWNsfT1",
  "key28": "5B4sNqAEymgdESSif2LQXVe7q8rhXgnS14C8FEWkN3ksGWBpi5HQyEVaLzSwSzyPgmp535ngbe4kJxraFutc2eQx",
  "key29": "28oj3JRX5b1k1fUnyzu4u37NDD7CEYJAtAdRd3iBPnjbmE2qLN5hD4M5YSFpgToF4vh4jz6uUt6CwRMBGCTvhDNc",
  "key30": "5q8tcQMwLCx9QBy6AwjN2Q8kqotf7r9pizF3kjAUqTLckCSa3WS2S9GNnwqwqDpTyxf8TrBpNYRxd18yoG43MP7A",
  "key31": "7xSZ16sJAtRg3sYCgsUkK6ku82nQtrALS9x4cNKevwTUvtv3vKEn5L6tpgfTuD26dshvKuJBgcwCLM5PaYv2VTj",
  "key32": "2zAH1aPBdPgkhbEKFjEJzJf4PvEqArqyeUxG8NFVEuiNndTmTzp7njtEHAWNRL9ZtpwXDKRKtiACMEnZmQv729Yo",
  "key33": "3qwQQ3wLvJgKiFxk2Su5ncYP11rnVZZpNFfyyiDywjRBSBbFr1Nkyj5AEMFFrfctYDnxds7TvW6BYnmLXcihkXsz",
  "key34": "2FEzeegZuZyWj4RNmVsXKpTC4uWQHtGNQDgPWyDZ4twUwqGnrgYCsCAB9vb8dz1qDwrnuMzBtz3Q2oRSpAuJ5YUC",
  "key35": "pjWvBdqJtj1YdTFH5WpxmpkfeY6VWT6tC5Lys6XJkPqAPHikdttBNSPKDzUcdPVgXuCPkiqgRSaCpdsWFkFuM9N"
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
