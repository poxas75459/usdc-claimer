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
    "5rDEVQ3mdvGqN93Zxc4qUdbWb4mt6NWvkeSXSxAvwvQFnfBVW37R4UQtYyqCgyzdB8Kg32bs31J2cMYN5y9DJsZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bUYwm59yukGHnLgzRepd1kos7rivj7JCcXRDPTKiLdRzNxAMpi833gDQZbVk6XnvVbUbKyP8NiGZRcv17bj4Jfv",
  "key1": "3t3bsmXjomX8BFCAuiUADm3SVQ2dk9xvdVDso1ZkzrrZqVk65wAPcv6hL3v9qp2UfQpmiJDP3dpeUyuCE13yicDU",
  "key2": "63e5eUqWaCpBj8z3dpLCoATGKWsYYkw532mCgFoAu6KYiKZtYKvZzNDqv9Z4b7gvCHCUqKzjBqNEw5vXaR3FMGZT",
  "key3": "Xrg1N4KyQotkpobE3a82iqCQzWzFiGhtqBnZY5HtsCYk49KGRXUaBngqNpSCtdj7g8EMFr9gpG7mDn2vjntmmJc",
  "key4": "5qE5LHXWp3EdE6vqoDUuHbNNWkyTL9gfiHB8feE6jiB68GZKDfYCT6cSw1VCCkuYBiFar3MPbhYijDGzWVxFfE4d",
  "key5": "3oVrwQDXKCc9hsAkmgQCNFi3QXGbap6jgefScNXhj4X4cXZJmrVu4SPsZMhbnsNdkLjahE6stdYengsbDPwDL5Ms",
  "key6": "3xQKAdhDRN23WnXXebeYoNWsB4uXCVi2Gf7Medf3BFWe4TJur32XXUGPVVmy4RL64iTe1Ao2VrveSvMkaBQyy1tf",
  "key7": "5YFLS56MEYwbrzbXiippwgepqUq5MUy9hBe4jRp5iQhvbzCQov7rqzRAe3k9CM9EGtDz48QxchoXuZEihzWm9bAC",
  "key8": "3KM9n6p5sz6wNKRB4x67Ct1gYfTa6Q1ePwp9RtbE9PoumQYw8heFto1fUKnHuWFLyBPb2UQkJ48w3zzh547kvMNg",
  "key9": "3gWsZwB24G1TMvJDuSx6TKxguXNgNbBwEDXHSwrKVrnR4B5T2ED2tmiq3PEmU2MM5MbSa63QHXAXv15MrCXhxkPp",
  "key10": "3ghNw3cPGdYjq9ySBpGjCEBrFV2EvsVrAi4ZoHzwLMnXiEt2zvoZg3CZfyVfHNLSM1cWwDpAB2awkGe15t3913WJ",
  "key11": "3K5Ji99b8YTNVqJBSRsiFi5oJSfSFuENCBwEvVr3hDYrawfxWhQHM6GzCoP3XSnB1PrWTiYoZE4MFzNvQu6XnPHM",
  "key12": "2RYcejCPaPf8ythC8AZ1cFAi9HD31om99DUychMUJgurUfXg1PzF6HCoEoau5vkhmcRH26ccd59SLvXVV8PbZog4",
  "key13": "5kFM7RXVrFc4EJvegd6SqHLisxmT42VYJcY8Q3LnwKxyWKtF4enGfQZYXdFidtpgSTkjfAVcubDLxMs5Jet36Lqy",
  "key14": "Ft68S2kTneGxHjcM6woALdLBK6MC9dirXtB3gaNewQqS1GyawDDqgposcwvsit4nrZDELRXemHxMVD2D3m9qWo8",
  "key15": "33RxV9D7Jwx3urZFZ6eoSjPznYErzhwuzDs49wN4Qkpx5uKQWnUALJ6uC9cfm4G3s17WVEW75D1btRwDi3Q3BVQS",
  "key16": "5WPHEDt3qBsYmkmm91t87Ldz9cFytbuAatB1raFn7AsAQy3mwyysNv3utCLmcigGwyzUzDbB4dZaMSXJfA4bYGZG",
  "key17": "3cAaJ3K2YBGkvY4n7KaQSwtybWTq7wTCcwcMGYwVqDYwH1VjJP95aNFbxWmHoV4c2MzogYqf9ZJSJbUcfAQhsKPD",
  "key18": "aaXt2Aye7jZ1ykE6bFXExuaPvMxsNnMeBRLkV9UNR5U5chPx9vagAysPevAPPbC2YHYytsSbvuYt5VS1FNLE4HE",
  "key19": "4n7D9VtLUazj8TVgrWMoiUtPXDaQAynyYSKfPpMa57JmY8PagNzS4w1wpYWmuABwh4B8mrELNx33XN5XRR6hSxcP",
  "key20": "t6JasJN9baNvFkvKT6yo4VNwkEADVbKMd3hVDqapo6fY473j3GZwJFJzudfstAFTRtNSX2UiBYkUwvZBsPEstj9",
  "key21": "fgJefEnFzeRG3TiqyQzjZYC5Np6BEnNRQkD95XNTmdvz864VhysCm3qvEGbPev1rKWeuMJJvC8GGtHPH61pXEG7",
  "key22": "5j4bcSYCG7GeMy3FaPB3UixBq6g85ZRCZKjR7x6VencJR37oeGyanMnqY6Ykj7gfAyL2giC4dkA432VG4YE1piEL",
  "key23": "zwk1hf77sARjoJJdL6W8tgNZYavaKup1cPW5FcARaWEWeCf2QCB8aZczL6mAUadupTXVXNF6MdFofzZbWjNa2jL",
  "key24": "4rabku19VD9N2WjXsyMogVAB4CeQVJJ21hKpCM7QUkLPNydK9mKRHcCtty6WaVmAWQ1XJyaugtdU8NBXoyNLMb4e",
  "key25": "5tb6MwvETTDxwxarHJFoFVZBUib1LB6X7FgA6iuXdDPuDDmg4QRZwJAL5cWDyQfBXDWRbPcNgmBv4qEPM5s7x8vQ",
  "key26": "2pQgiGcWNccAMebe5dh1JBAa1jUH47pyci1tvdGAT9hiygepSw229oa3B5tu1tvSNxHPMh1zsFCJk2LsNNVewCS4",
  "key27": "2ykGyhrGBDZTdnnJk3AoZ82JSGT4CBJA9j2t3uX47tQZSByozBy8foRRuCoVBgcoMnqcJpmjHR3vTwhH1d6RHatk",
  "key28": "4eg2uDriBh9xLEDBTzBH4y1R9LGtiYxvTKJYf8YTMhWNwHZFnq4DYPJGY8Vq4w5JBhb2DQDY3mto6YsFgjDae8Na",
  "key29": "2WgBkYg1VWUff7xczq3HsqbBW6m8WCXzXSAsPmXFSWPt6VM7sueyeNwVaACwkkdEeSsGsctN6yGg9ScqkSyrikBR",
  "key30": "mhMNXvYsHKBH1XwWCbVfhQEqBL7j5hndms1kFNNqDPbmyCx55bqFA9gngYhEJukaXMadgG2uzuE37TrbPBgWk4Y",
  "key31": "4CdehpGqFrirDPJFuCgK88y339RTwxL6gXvKLgkRq6gr3Vu3XQSxSq7UfUXtcjAu7gQVKorjQBroL7YLRS6WgAUv",
  "key32": "4xeuEWZx8hUWRBtaMpF5nwJMSsWrWfr3ssrAaJ5PxEbnpqRmzWFPGgh1h5nT4tsQpPc6XKRB3A9HG4jDWuT4AnqZ",
  "key33": "48TCwVKNSkuvK4d3hpYbwKoC7c1yw7K51QtR47Kyo6PcutGt5qsEF9ZpoyuM3z3kThPQ5nd3B2hQGxovK1YM8iZB",
  "key34": "55sTDXQDVgfHpYFebw5dhTom1kC5PsHZ1wT3tXu5o8wvPzL9wfjFQy6aamSEviDDv4hMxTAye3dMvfQTvNakgwL3",
  "key35": "44hjRaWc75GCXmBhqMp9D1mYzcf3TVxB1RP3K2cXneVTBUEi2R9xygHaGCsHBXAXGQeiw7DNzrUtK2iR8k715V12",
  "key36": "5PMGoxhP4CQ5jsoS5VJFRwm7Z85zDHcD8ToMMVKeSPBkmyvjfoAFFD6JzG8mbfd9tZfmp6kFKd922hn2Z2ZgSCk3",
  "key37": "5VM7s8BoXUxvYB2c475y1vKFBLYnLEKX5q5VMLD6DM3nCcpc6Rh4rw3jYV6GoKnn38G5BkQRHQ5Ls3szbWAsnAiP",
  "key38": "5xVUhw7gatqrdk6EehHzPvqaADNbztUN2roRBgySHfuNcrvSr3GWGKuYD4xSvtDfmf5nr4Trc61YRWHAvXVZZKBz",
  "key39": "msCVBTeb9r9PSfbD4QVmBYCAgt6akzye3Za4LziQZecWG8Hei5p79RadDYkvyiKmfcQ96yg5jiyHZ8tbdquHGnG",
  "key40": "4LF4r2UbXEhmZjq5wrALDS1uS4APNhe8sA5B6V8ZX6WN9T6b9gVw2trapCNrnCTsQfbuoUfmMZRwNbKCMCwyhdfu",
  "key41": "4VHZ8hdpcpnPyVjYMC1HP2UGLGvA6W242U3GXGPgwme6eEZbRMW86i6VXjWnZfFKWxGmxhh7GVx1KthaCM4QqxuZ",
  "key42": "4rU5FSvW2sivFyjkXGfzTBihfXZaPxuNtyQjczhXMHPdzN89hJTHsoMBzdiQsjLY7gWW2umV4FUUeA74uYXbkuqL",
  "key43": "28a1H7WHV7WQ4eKYwY6f5QYEAv1jjJq5hcRQ48CBMEpnShW9aWKLeTPEX2V6W7wPahHPKAN1hEb2DrvpUizdg1E9",
  "key44": "5dgGsUNVv3co1TNkmtRHc8vAjX3HQAasv2TzV7ncpr42878FgGzNcuFv8TaMRgPHaKWaE6womcq3USHQe5koLA5D",
  "key45": "484xfQC7XPinTQDRPTjRkz1aNU9WZH7HDh97cYtKS3F5pfPdSAMopvbkj6szVGtaKVm49f2UZJaSyjDTFVVS2kWH",
  "key46": "2HPhDRE2adzwVPwJ9W7WVxUdTBEBveTwBTCXzWf2HBp2x8yBjSXwZCe1XcSGLfr1j2Y1azmunMaZcHDmAiJfp7r3",
  "key47": "5NSKa7eAgbjFAqNaTmfTw17bAeXArWtTaEpoDZQiSDHNACdQ3y9VGYSpz9Zvnub58q9Egw3t1JSmEop3pckRdWdL"
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
