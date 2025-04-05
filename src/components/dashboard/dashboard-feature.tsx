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
    "DvHprUd4im2T58ZsCicG9vXVHASdwmAKiTcUueYcAR3qK1eFKki8e7FSNcxjAzHjoMxdZv4Rghj7cYZunAdvXBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SaQegM5SEko9qQEKameNgMWg6kB8K8zAyZeUG2nFxxoD75u995tA7bMP95CUb5rJAF6SQfWNkS937NZJC76tC6o",
  "key1": "54oVWEJt7hPQjrbPUJj5vefboRQNtNgdPpfdd7f6ozphxGcQ3yKtRXweuBs7sxNg8wXDtQgS685vJH7xRtwE3X3r",
  "key2": "2TZKWFaevXFv4ZzN3BDm6S7do2JUnspATWkPfrRzWAzjzDVAU4Z8twkLyVWxd7fp2o5gCER4WhTeuX5dWqZkjrV5",
  "key3": "4ycxqXhrA9iS8hQXK6oQvhHnBYqMNCTRBJLvJ1nGV72T3DSFjsPLtC3gHkKZHqj8JVNL8uSvtJM7BVh5sRKedHJg",
  "key4": "55bNouke7Qg85bWVmK5tGpJPFmfPbLKFayFJVTSsBuFXM6gMP3ZxoradQn2B88GKebnbiw8S2aMjQeDknR4cnaEw",
  "key5": "5ZpbHd2u8NjYc971yPPCgKeME5pwPyWKWnbFej8MnoUbCwXqxuNz3T1zXAh69TcP162BrbydNbgFfR56UJ56Hn86",
  "key6": "d6kNGo36PjpTBX5rZQYV2WmdaVfUginxYbpjgandTK6CpR9HCG3pRFP3RjTpapmhWV5oAC8oXHsutNZVXaf9UUe",
  "key7": "2cjBqxzmrtJBcMiDdCTHYr2NYhSfmadZAVF8Xc59TLmWev7prCtcLUZUeDsjPwnoGHM61fEaLJv2aYQ5zJnShoNQ",
  "key8": "63JUa5D4Pt3JGc7UdSBZ6UUq6dAUJSQ6qN3Pua2Eb6R94CpvMP7wvkYDatdtEzDSiSiZYqijWsWxfLM4pZAdXsYb",
  "key9": "249VrecmqWCLjftmwUXcm62LmBjk52DLV5ocTP4dbYuJ1HJJ8zohRXDZ5iMyzD9kviWmrirKp53sdp7LoeyMrumt",
  "key10": "34FPhJnMuwLN2gJ8kmxcX4rX2h6GLg2hHjgwrBFqz6TLmBEJsVWeBKZRQUtTeQRhRRzf2kEqEhW7W4jYv23VfFSN",
  "key11": "4Hx2E4WQar8hEv9tGSLD6HSCr1UFmQC4hcY9VmtRc8CEYU28gNmMWCuacCv9RyH27YBxFQenJVZCe7yJabZscTbu",
  "key12": "Nat7oiuYEwzmY5sPtpS1yRbZ8zoeqFHZTCHon14Qu1PXivkx5p69y6oX2cRYqxkpePbW12TgxRMGAsH7qNta7Qu",
  "key13": "5zv1SMPuSafr2T8VEe3aPagw6gK4hPtT3RaZ4WhevA4vvQrKngtyrtbzYdSDziiGPir8HP1aNJWehbXQUDnKZGqU",
  "key14": "jaJ3P3ydRuCxf4ytBUyvEkCEHkw1vedWVHDreRu2esQNzRWV7hECRPmWHd7xKPj9mZ1UT6WLi6BbZ2c3mXwnV2g",
  "key15": "3HDynJhBXxe6XNeuMVLDnxeWdfaHrfrc8cRC9CJSy216DTgPt54vu1WDFT3GSURgaxfiRsDnseo3Ks6dQdW5ustP",
  "key16": "4a1jExwkH92zMC4aB2QMe4FRadeE9FoyCbHSP4E4XAqUkjUdCpHXNWZjHgt1Uuqg8H9eJwZeaBJaWgXvtNpRPtrP",
  "key17": "3SEbHZBVhewTtoq7YFt2vbqB9Lvp92HN1RrgRAUAUUU7FcTc9MKS3GmjW6JNP7msVn2PXhApjNXTaD4vHUr1ZpFf",
  "key18": "2ejqTnpik5hi8VrhZa6CS7TmRpfTG1QQYuwP1girrDpkwf2xY16RGunYarGetMtzqKSDbegYUXWdnqrhzcCJk525",
  "key19": "24Eg76BVC28WdBvhXX18vhktns8iHr5MvyW1jpVvyctn1PMtwZymFkwwdnS8vBYAr9HYkCHP7EHQr6eqYGWPcCyq",
  "key20": "52QPgGgrTNQVzcFiy1SeyYfHvnqSuFSfHAbW6Fzvnn1PV4qboFkWomNcwcddSeNtvFp1y1caMyrHpLWDj2NBcHBv",
  "key21": "6wjz4YBsAy9Sn8wrUGyw88xq4Qf1qSv5EBcAptTnaBKN9QNNUpGmqmHKSvngX7eqDM2Xobymmc5fvoy2M4L7whz",
  "key22": "4JWy3aonL12DP8XiBoW6ZGvUmwzdGw1Bbu4L9nCM79mDtNmd2mGkRykLZj5aTebibM6XYh8s6xhanwFGVdH6XTDG",
  "key23": "CdY2ThW9qFBnamuggFUPZEVpqr8RQBvxjKx6ELMVj1cVoqvUvd2qH56TQe6HeQMu3cjE7fPofRcx5DTStg36vEs",
  "key24": "2r3NHKy581FZ8kspWuvdE3PxZeFXeVyPiqEp76uYHKzthAUC2dwgrFEwkoxCyDYN6bnySBYZzU3R5KuoXrDwgo1L",
  "key25": "2YQMzYvFLbpwYdCRW15JPC5bG6mcXVj5eadMSqXF9EmNFUPojLyeS1pagLNpXnhP9SPRSVLy61FXXPRp3TFXRoME",
  "key26": "5qz9KUJXeZEge1NGw3kA9nE3cTC4Yqyjwh4kXHzVX2A3RubrZNdwBo5y2MJWrAy42jeV3N8gxaEmNGCY9GYPA2EQ",
  "key27": "4Wk9VbtfkhJVwcwGSCubd9SteDVRNJYCmCVGLDRu9hjuBiJnzm6qgxR5kyAVuCUYwivF78hMDUqn3jjYn2makTve",
  "key28": "3rDhMmvpA9TgC8eKjVPSRHBWaJLzgUgkmqN3VQBQigEoeb46hdvSvqqzKksuT81AuCr52RZ5MktxchDsRp5vgfZ5",
  "key29": "3az49NWnDP7dT7PQo9iQetxQSzXkZfrkVBKKKXpGjjedGQdnSVtZvA4b1SbUXxZJajLYrJNJ1V4v6MNuFe7KYcgk",
  "key30": "4ee5N9ZEUXNiDBNp4BrYoZ7nSpJ3FU8G5MUHXT9ZJtdsP8HEMHBwrP9QzR6DAFR2Zm7mwKxNbgSkoZrt3vn2T5tW",
  "key31": "7PCeH67RoHRy2Cnumr3fwdFbi1RdiWmmCzNcGL4YQG55p8Z1151aWJR3snCRxcmvrkeGAwrsQ354Xszdxj2NJvr",
  "key32": "4fKuvsBwhfnsGJAkbMcYGstTNzk6XcutRPCsz1qKdNak7JRNZMXaGFauCqf4NcV5VFTdzLeYFvuEoupLvzZsKKgo",
  "key33": "2uzuitja7Wbps8XgNnRkXhyaiJRyJEXQ7LBzKxoaeFcEdKhdTLaEF42tjJKa3ogiBB1Ug2u2upw6QZ78iYPfLsqJ",
  "key34": "4GdEnJNFQ6cX7qsqqWwv2q1vYf5mPgDPMGMK7K6mQn7DULDg9hhN3rQiVaU196nakeQNody9FXSDeUJ6UTAepcha",
  "key35": "jjHdYZzXJNxpwTxqEFbPfML1miuStNQjdxbK9AU9wamxjx1GXkQCSYAjgL995qLYsbpoLqdBAuAZS3584bHrwMX",
  "key36": "61UcoPnFivcHSYhnBNvxvprYMb68aFLEz1T9yxYTmMULmyJAdExMm86Z9hCtcGThzxshDuxyCLNnW1XhWJv9ycgd",
  "key37": "2UG4KdkWPAyUx3rFLbnSvtBjCKHShz2LJ4jRmvpr6Em4tuJwbhCKHqCCTwHhkvURZFsi1ETtL7mXMaxkMiJb7WxJ"
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
