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
    "UuxsFTjj3S6czDhjHbdxhQ5p1MrwEdaRPtc3PKjJDjpRaxiKHKShhrnKYfKdm6JR4RViR7LEDhqv4f7KbEJwgwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fLXLfjuv3R3u5u5B7KVZWAqEGqubBUKrYbvr9fXuqf8V6v7Jw7aCcmW3ykAJ9qhw3mVLrcHJdcRuBRronFwYZRh",
  "key1": "4QThr8Rg5DHDA3UGmzWQDQwUQtN4TTUH2qHUqgCciNJfLCz7K8UbXZKZPeF9dDUztzxxxviXvJPQYPckJxBDaTdF",
  "key2": "2q57kTgVGznPNYQFcmvQySFs3n6nuqHu6eomWrkDMPnno1Ki5MUwZXnKoNwZN6yKgysrgVKNeSbPzdSaqmMRp4Lh",
  "key3": "z6SEEMPPr31euBVFaDiiuxJRGBp8wS4974LRCjzzHMezg29PBgn17V7wanX7Mm3xcdyVJGSy5phpLzDBNBjAeip",
  "key4": "5v7rpGrqjTxkABCSrEwy2gQY4WTczLjFDn6gAAHp9T4f9KTZtQC3WMhsEFhmx8oWgD7BdKdmpNDUsX3eMC6FUnt",
  "key5": "5wHfPeQS4gCtbzQt7J3zW59S8wnHPTVU8JAaMso1tvp4RRwdwBALZqL1UG32tyNZSMrtXgDDtZvE6fw5bY78TEd1",
  "key6": "9wrPE4tMoGWeRpChBqCm8MunzwNedZs1i3Vv4wpL5sexNNHoKhTzwhcNk7Agn15rMaryWdP84t7BBgFpmwWquVh",
  "key7": "5iSQz6un1u42zpjJg2WHy1Zw5wV1GtJLBTHbbpryWmB5QJRQuoWx33fnd1kKqQFAACPgbTwr8QVmSMBR3ADZXrQa",
  "key8": "3J31KSWUbUwpEF2i1qZMx5eBJdy29pmEBY4aVHBY834HepghhrdxdQiNBiGSGojdTCw9Ax9K4gUQ8nTNkLkBmd9u",
  "key9": "3nmPotLV9N1yifmHjcpfiDT7BR9MXYUpS2U8kS7aEArEfJd2F5UY1MNZEdYCcDogrjoh7rEwKuBqXb2V1jvRvTC3",
  "key10": "4KS83J4KfomopnFcLBNGhkJCMy2Mk7AMQzt8zpf3SVL5vuYbEFo82JtjJgR3qFoxHdQic5W7R6vVJJUaTXy53nFF",
  "key11": "4aybNAKjpUBUZjbnJSW4pN6rkKCCEUdAzZ6WEYjEhiwBCuFBmoVvn6KvSXWneTnFmfXC4RnVMKyHmhnkrpZHnqjp",
  "key12": "2nsygft7mMc7qHsXNVrQEWFjSU7pHzBNtUUwLbBUGYmeboq51wsVxF5wqkLD2JATLrzXcL2d5f7RhqSYqyQhGfyU",
  "key13": "4jCN5U9YzvX5WoDv9AKnCPHMLcytNofkL5rE7c6boyDHKc7JaL7E5cfccFbaiQprdsayusUfLNz4tDKYEvqGhXKt",
  "key14": "2FRYgki9fVxLT3ojMHqJ5PPx6CTJpCMVRE9Zab1rqXAAUWxEwykhK5B9ikRqFyLxige6GuBjrU5cB2XAe9jip3Jy",
  "key15": "CKUhKiJ3mcGrCpNVctawGdn1RWj5TCJmmJoT24cNZmxRx2EjctXU4FrzWzQQaZbAo9ArnZEeU5JY6DD2Ai1J2mt",
  "key16": "4PWtGT4QZGWmsNskM8vFnjLrzu7E5NiBB4fDvHfJMkB6xL9rwR6HGeDwpj3J5Redi2yqLZZhN3xLZbxMbP4FepXS",
  "key17": "61n8i46tkkcnXo2rLiFGYBAXKmpEUVBoELx4kMSLAt5kZe7qTjGnX8VtwxhW8pLdnsVi94vsGT57cjoD9iGnHZ4w",
  "key18": "5dUMocRwv6Ekq8rA1thnb6otHvsomPPkCPLFBz6LBssADf8wUAMgbiE4hnPD11S8MvcAdfuvi8vf1E7gXnhHP4gB",
  "key19": "5bistatzZhNnbrFNNKKWaWPgXF6NL5obNKzQKsZCSGXSJv3akii8C5wFrNrHh6uGbMZWKKaY2oFLNRxTCkbs522p",
  "key20": "2Yg9zNXkMaCaqvLDMJ38Ze5KFLetsNGpwoCAzFjErVhyHSzWqyVfPgfGJtoCo1EpNcA3D6Yrf717RG1WS6RjP5p2",
  "key21": "4Czuhkvh6xq4MyMm67dMyigDth6ukhxHMkSRgKppBD8oKPh1tbhLhj6Ek8JFE7tGd3PDU2VLktdArxVzW1y7eZBx",
  "key22": "64F1uw9jbRj7DtFaioy1Zm6JjcctEABsnWZcr1tpi7DybfJigJnNr3nqziR8oCr9BHTZDQEvNqw4b6oa9YzbQWZi",
  "key23": "UYgYmAQD9XG3vsXTs2otKpN4RuX9R6jjXUXuwhExFWbBjKw1NW4XeLRBqoZAM6PPgg8KiieZQfcrHw2K4d9xfzF",
  "key24": "26sWyWr4PqhVMFp5VMKxiVzjTLkyWSwXce3ictb8KBWmb9dx8aAsU2mUp2dfxNinEwoc4sAPEXawx1WP2MagYd5B",
  "key25": "5HqLeKsGUY6SLZBj3vnJ8HzSXVsN23QxsqHMUwBQYGr5WpUe1weNwtyHfUpjaFY4xLaT5y1z83YNGu2TPB76HYVp",
  "key26": "N2xeeE6WY4XTNr8SY3gMmd3r6thHBSwFcESKSV81bzn4G72YYXL8Ue1qMtZ2qTp27SdV94Fg6DBojSW2sgZjYnG",
  "key27": "2NRVBJ2ZPivk3DhrsjtSbeXkVeyQdBwcwQzMDNRnRDpnZGryF4cuQtuLRkNEtMNtVhPP62kw1vhcxVbxoKgiAvCy",
  "key28": "2oXmdNSn8fUvoXT4P2nadLB3gMRoLmdFaQYgQ4d9PijDjZTE2Bx1YJmg43wySGF1yJXhQRVSaDch23YUdANrXvFz",
  "key29": "LsBNDbsMAMPpwjMX6EZRezjm81fLTAp2XEpHfrSrqouDxL4HQAc811Ln9orzzbyMc4LuR27sHL4i8RjiyDXdQdP",
  "key30": "Nq56MHrWhQa9x5fEbhxzJVqGyjmZFy3reyn9WaLFw6VzFsatJa9u7fHaaxshYcKVVjw8qx5VoYtTsFiPLof9mvv",
  "key31": "4A7BrUhqqMCC21cJuvrK6G5f1uhoTCCkdYVdRKwshXYmjqehDV3G99NaE53tAXtFd5CDzvwKBnT4Hg5q82atKyG4",
  "key32": "2T7XFvHn9o9VPcBmNWy1reSv8PmLyiWofUQfLvf1kqzTLjYDbcztyQf8367pDgVYntBzphLBBbuE5sq8AUPwh9PK",
  "key33": "4YSzkjr2NYhPU5dBe8qFeYMqLfGvd2Q4mpty1WVU9XEawH82mHPZxaxS5dDbq55WSZWPUMKEEVzMgsv8gF4mJBWB",
  "key34": "2Zezan46KXQSf1RSbGXw6tvktoBfM7Pt7jVxusbZMfuE7K8idWf3R7VuwNqxUVq7wkm3iTmTh5xYGykS6kLkmip3",
  "key35": "Pdk4k1VVy7i8XV57eMA4H8LwXc8oZs1NJ3vMNLMPcXST68bvPTreaejFyAhBAiwH9KcbiDyz8oKkJSpc5N8JbJk",
  "key36": "3Rja41tdR1Ws3YZ1fRNCxEoG8ehe7bqVTbtqDziCbc2RED5fNojEpLBGPUF9vaR5upvg155hgDwUhWySdwTFM94h",
  "key37": "cNbNh17zibu1fR8dgNVTAAgRxXxdXAjxVjriaSwmoFdyMonFZv3aUzokF6PE9YGx2wyMag7RRirSBT6p4hC62QN",
  "key38": "CYKqWrgnCBn66oDExEGLUpLucW23H3rfAh2jCsFQgmcjhVa3wBPiFjMQgkRvy3PGj7rC8xgoK4zLL8S2S8gYNBi",
  "key39": "3FFHqGGP1Nd78DJgYVuy16MNebwtWiW1AA9dsRQCdVzxMtbMjMXWA2HPRuTLA4u2zLicggzrczRUuWV4xaPGCv9R",
  "key40": "3mhML2WAtHJ5mfZYeGPh2uFCyJ46qqDzodkasK7EC8oNHnoYJpLVVsuZaQRVZtgt3yfBN2mV7JgwrukvSsx7BVsN",
  "key41": "2AuQKF9rQr4QLm2ihwz4qtnDtbJ1Qemx2h4otazLxrvMKvvoW5sdMSNEpK8oc2zUowjECCiZVKJZZdwFpkHVppFZ",
  "key42": "3J5cnMnuYU8hsc5QL2Ky2QYesvCJq5sDR3MSHg4PT6z2XHaP4pCfr7LmGbaebS8BL944y8FLp6P4tAcGnHE1RDf3"
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
