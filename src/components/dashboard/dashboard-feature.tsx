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
    "5EVccVMnr6JXK1iJzbxtGuZEKag8uWz1pZB1KG6eKJWHxDPXQZg8hxRfZjCaD2XjfHtBDaYmKqrCk2GHXtvP7Y3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C5V7SYyjYtKoft2imfG7tsFsZnZi6vB6gCncH8vx9sxXW6ErxZXqMgbptkSuf8RUoo3j3pBaF58XLoWZr7RH8tw",
  "key1": "VzUD643Mf7nH4kFWdxwVcEMRe8XjGc5PNY5CpwkHw1WQ5krAWJ4cYhKEJM5usYKjtmpphXHYZEvxeyk4ezEmoU2",
  "key2": "3ZbeFEZRtZMJmtcqEs82nTaPPKjtkNbkBajbnyjmQGGAi2hXbsJ8ehEFq8vdZfGTHmSsGRPBydhEMdjqYhLfbFfi",
  "key3": "42SFKc2uYSoxfGrV89MuA4P7ipe6sVgMTURVwpnF5h6Bvq7SXqwow1yDZcqnZcLcjpBiE98fDU4mT18THbnGTD7C",
  "key4": "3QXxVeytQ1M4pQPfAx6XpSWTvKTCf556gvCRkN39jcA9GvFuQg5nB175FnMu6meBJKVK7ZAzt67S7gXosqad4Doc",
  "key5": "3WRDmyBm7DXifRMmCKJ3A8mxD84DCVgCb5RRU4K1YfoDUbs5gke6wBnu44Y6UxJQWayiuraxoRguBYDSZBKe8rU2",
  "key6": "5zpyZTLNEckX5FTqQK4Dz1iS8GPsqxgEkLH8hWwavYXkJa3d1MP8Rm9KYDqSQetWn8kV2ZLJFWyZYn63ga3hSiLh",
  "key7": "3BNAyuhp1Rdifie7GFc33moNVqdipYRba3dhXaRbJ2cU8sQRvDwdntAcRUvmQ4zpLyL9byA7JmwMQZJUznKr7Nwg",
  "key8": "32gFYtTm41LWuEdWusGKAdR9RbhYbdZKZgsUQS9UpYK2rcEwDCvr6B9hiX8BWZiTbJxCEWPGRHrxABzi6SfaBQs8",
  "key9": "5KLnGcCJHiPX6Ef7q6vwTFgHytWXpWMXSNPJztaNneC8CbwDdbkLgoN3wQhN53mwGVBmMho71xiiPQoTLkNnv4v9",
  "key10": "2u3Bj9RH2fbBCa1j3r7mTFiLKr51gKKaiGbTmytqkWsBvLKf6uJ3iLbpoLUWohqYkJyUG3vL8cA1KFNSZVxg3fL",
  "key11": "37DodBBXLwGbKFSi18zYxfr9FKAaWJ4xV6qcSESagNaKYpc1saByzDhM3cYeJCSN1dDqRbwMhLnuMrRvyTgyWkwJ",
  "key12": "37JfzieyXShe6iA9R8dz5vXTQ99CCyPQKtAbnppYms38DM9AZoH2kFD6Ww7sehG3ZG2YTujh5d5BK5kMHgnAgGwo",
  "key13": "53YHzucLkcYfgP1zHqnVdZcMfExKMXYeEb92tubVZ1kHnym3op5YkTbk8FWk3JeJ7jsLp2c252wtqqDqULCDKt3A",
  "key14": "Sny6yJTAeLAHoVhzK44mHMfDgbCoB9fJ2ckSQsnjquvJsqVQtzdHRx4sREzhJifySUpkGw5Tt3s3VAn6GLnCkP8",
  "key15": "vp92Hh3eA75pELHD1xzNnLuEdyo3qsp1Ye5TG2JK2f1J85zPioK2S15Diz8yo3kFdhwHWosgPaTTctjfoh21KSx",
  "key16": "5FnaBc8vhxmJdSwGHS6NhzC73SKmKYDWbygfqBLu4hBRiEv9EK68BzMXtu7v9oTAZhCSmwDPmYQfCuT8CBsT9dZD",
  "key17": "5AMQ7FAdjL1K6kuaAER163XPpeFk87r1sN5H55Rk8uXaassfsKUwwbSvPpRTi49p8NGvNb2HpZMxG8zv1GvdAfNr",
  "key18": "odCyHRZ7jUHRqj7174qTJJP1WSQLGGeThRKYyaaivRcxMVpDUmncwz2b9AHc9atpy7RT7bMJxYRRRHx2RtREsRn",
  "key19": "5CD8ZLgXKFWTisdjqBtVLGWA1qa2vWeJpKWdbXCeSZHEfrghzLPVq7vHGe8cRfiv9MPSrNE5ecdjXc7WZ9TqYbUc",
  "key20": "2Zju6Vy5cb8fkYHfwzf6mzuhWSx9tv1fL3KoTSesDaxGkim5m7BtV1AkYBaaqNUwMhcwuA6s1UWvwLH6EpqXsPsB",
  "key21": "5xWS4nXjvCmMpY9dEwroBz1eNU1C7LFaor8hkggXPLodAmT1o3YZUHE9kFMEeBjXb4K9xLhqGZdpDGGgZwvhrxPR",
  "key22": "4YRoJkWi52wCGo6nRSJDnv3ZW8xhPAnMSDLZ7Jax7aiNDiEGSzWdLuHifWM75JeQYvUETBqSbp9seKRuWb7ZU8XX",
  "key23": "4TmYerXay9uDZ1b6Kw22AoXxMh6jMpdJyPmJPEmgc4mhE8Bn5j5yxuKdRYpx4zDdngYf4jTX7wFq4F6eaazYyta",
  "key24": "5UZDMUq2c7RRDiSydSibWEoy5dgU8Quenh5eaGo8rttj2FLVtJU5FUdUJpzR1WRDMeJios7SfM8i1R5moHUXJ6fD",
  "key25": "43PKYdFCqLJ52fHR6eqtjfcxhhMtNphPiPiuGQhKwG8v58uEFnMUZPMXfTFUoRwo1cHCSe4T5Qv7wxuTYkzgQyUC",
  "key26": "37MUkcKEkdVnsdAuAM9xmyVMvUQVx2y1iVBvNT8ZsnC7FBzrN7PJ41obbtTtj94z4k2Y8rvZhx19MvNLQLmRTnaS",
  "key27": "vPtQqJYSDKUo4xdnAeBAjrSjQUidYVVB61FTHV7HhS5YiTUYH8SGivCU6YkWAmayhm5MWSQaWjtrpd1557ioWQN",
  "key28": "2PPMswtqs1BZgWKab3qCorNApSpxWBYR92HzWq9YVDBWWAR2ahpBmotBwxJLezKCmiZXKXkkoqpwkGwciSApx4q1",
  "key29": "55fDdqgb8UToBhNAVi8axXjp5BGhKAodLFXNdDKdyAHXW5tw9nggXgQwSAUcSTcVX1ctJyuZjzcBPaggs9CJhJsP",
  "key30": "5AzWesoFGUiTndxUT6G9QkCeBkXgY3BTDtYKyshH6qG6THaJG5CRMNEZhrqTdSMRWCp2BsUJ8N3pXwPVtj9dcTPE",
  "key31": "27f8HoLdNs7xePofJvi7XhTCJXkCjPUJEM3LDsUjUUfmh6ciEXw6wzZadHgfrQVxdGEHfSMWmKXTjjG2x6xXnxoL",
  "key32": "iDKHBinHDShBhg3pmAC5U8rVDvQkvLfRD5V2WDFtk4dDcSsamAuzXJgc2Jd6oZUdNYHu1VHVqiApzrDU5c2AKRo",
  "key33": "58ME8rwDRQHSKqjBSobWWy3zTeBQEiRcR8MBkbLLxVs7GtWXFuMYZ8cdNdj48QLZU1H1fZB3VFzfc6cbcwHpPCc6"
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
