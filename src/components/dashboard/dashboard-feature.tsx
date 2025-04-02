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
    "3f6LXbK5Wm9Hj7Cah5Ha5aGng5Svr7S6RQVC1GdaNSBKErxqgg1Fk4ACG7aMTxK5z86V7eCWcKo1SRwBcALwsGSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xw21eXX6tvp6XtmpjtBMUkrFdSspHsE3FFFD9v8NxzQ66CnWkotLQQH3xagahDvkCymLiic87mu5yZWorYfgKEg",
  "key1": "3k3AEBuGqnbcbzx1Wcj5hunR4zMDKjiYQQR6hBSfSLcgDpGV6cEsqhnXuqXC95ooTX78nqi8iBjroB8DGEUKs39e",
  "key2": "3hUhiVPq6tL2LwQKAgSTfqygbna3avvvSmrbwrGBcduCxNAqhXav7fbBFgnitnhWCcDA4SXMU9ZuTcM2odaWFNrw",
  "key3": "4JZ5UxvZCJY3AkGvj1hPfsEXyUBtzBa3xA9Pv2ZptRfCaVTnib6AZh6XFdGv7ypz56qAimKhwbiBaE58C1Fvbyi8",
  "key4": "5qUvCREdPwFAQoHNopAnZCe6d65XmJ3NzH7K4tx3FofaLGcGJXqYY4BUb9akebe6KN28mHAWJtu8zRxnmGvkFiSS",
  "key5": "36LT2sproiTioocBQePkn27G3KpSrQ5hRY9sb27Hz4AafKoY9WmmyqTWP1U4evwxEk68r71zgmK7RquApAdWKnt6",
  "key6": "5RgtNLubFU2uc4LTZLGFFL5i88bdBNQdqrt2MvSKNuPAGa2eB753cHKNrp2frfo1dWYjCyX3SVUYQXzC2SXNnsHs",
  "key7": "3TPbPpfnxPa6quVoFTE7yfFaWcYvNsaBcb4mXsJf6fBM7u24AtiosHa9JMnSCnQDEXqdVahzhSzQbSfrBcriYq72",
  "key8": "4bemrMHYwfT7yichdr4t4XhVKamqPdP9XCdUWAfvwgnXaSqWxx8owCTwxtGzvWufYS4nFczPmZKLguw7L8gZcmKA",
  "key9": "5F3KHdWw7j5AiJ9dfRLt8MNmjnmX1KoJfC334EkXe8U6Yun5XA4EtnwmoRHRtgpA8JWuwkPW8kuojed2pgUHhAoK",
  "key10": "349gNKC83wEkGp9AEGpiu7wRXtXbrxezR5Zk2P5nJJNwdDuw7qxNfZPaPnoU7hQZ5uEkRBZ5SPNtcDoqPcxfza7L",
  "key11": "3bF5bhc869MvpHCmppC5UjuSM5xFSr2V4djcMKbbUc8t7LBgkkig2LeVYm7X2tNSFZVHmMwuRY5vLWhCGVb8GXUK",
  "key12": "5UjW6yhRg7maJPmiZxgbejDJvFgxjt2draEzUTSJLoeXavoWjHrmzEtBxfqWabKhi6LZ9pzdN6Q1D8W3fKQqiKt",
  "key13": "3ohkYQJEjUx7XjKgR7GJn9DPZfiEnV87KKNNegrvSiX8qRcFbpmEB5e5ttzrYdNavSuvLFDXbS3icQHJ1jKmnaXy",
  "key14": "4gVGPGha1wbAkGwceMxYVeR7MwU86hGTSCZDi5eLkwuNJu1ymiw8hFdzWC2Rgb4q9UMXhmWVGBQM1D251uCwKW2Q",
  "key15": "2bXMGR7jspgpd3vq7Qz4GatfAhAHZEjhEWL2yfbgGYXiHSqnQKgSNpspWcmKTTbe5E2kAZASzWhRWN7wPWrs4tuq",
  "key16": "33As36BdEwaMKb9i7YXcZCmbvPSE6f6wr9evvL6qYyg129UwCThYXtKFMaiK3XkKZ9J7bJuPtCBwMDqt9UVpGiZu",
  "key17": "58ULi1922fXC2cyW96VpgZcvGQwo1gLC9Ppfj6bwKQjJCzdNrSK2vdEdbjzqn1MoJ9NLw5oz4Hgtu5ptHWNFTjva",
  "key18": "5LNec5HmFf51F9KptBAqUVJSXosMB8p6gLtRqKT8k727QJDpmfUKPv1eJvVuc5C8tnSTXpZQW5zkRQnnkHybPQmy",
  "key19": "dzDMKbnKrmVdgG7s44QMDhwRz2NmQ5R5hjiVVsBT6P9LTSu1tGP7FuAPoetPt92ZXF5p5oahKYcTbJNd2n6Q4JZ",
  "key20": "3xEQu2CZ3WwckJvRCmMCXyqzWTpN4zC1pv1Doo4LKVbGnr8UogwhWKpfZUmDgs4ZdFHzTNya2nvf7yycBug7qtUa",
  "key21": "5ssN8MGUR7T1mXpad7R8NrrJN5NH8d4AeAbqC5CcfihEU4DPSHmhdW6ooDj4r1hMGtNsxHApP5fuwfnyGX2PzBCm",
  "key22": "2YChEmj9s57bRTCgR1H4hNyc4RzzprY22NbwU6heyNiDw9XmueSem73j5HZKPrdmSgkqsDsi2fgNnqWZhexCbNgj",
  "key23": "5Jo4FxbV8PWuzDeCkkRH2qQTfe2foVnKP4SrZYH6oyoRe8zhitdkRuP72NBf7swP3a16riGYhYYT8yaB6t1T6cFf",
  "key24": "3AffESw1u8TMqX5Qr2S7KE9CnSCQZxJck4P4r18HRTQex1oyG1WCjAwWJtnLUNBearG9ccCoabkoB6RGapnr7qpi"
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
