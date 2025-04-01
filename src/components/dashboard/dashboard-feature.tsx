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
    "33dvzzdJAu5daS4jMnLBF1ZZLJdBJWPsjaFUuTPkj2suioywW1jzAUYqXFGtcSTCNWSDo1gq8gVMV5BAKp3vNBz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bimXemriqq9e6xep7BsYNFCen49T6KjuF2vu6GGsWs4P8FqiJsWjD4REQKdpD5WfiNWTG6hUq9HvX3kQR9942kd",
  "key1": "Ra3MQvfxzHevj29RiMup2gXLkySL4yuyua9tjunxnMXx2patEBdkyxnH5je7Wyske7upmTHhRHCY9A3sDSP9Zp9",
  "key2": "7V58BL3fdJqdkNFXEQj5amYXW3s61Nx9hNoa6H7GCY9hfw22GDxrNmqVwtp7sBAGhxUtM4cSCXXo4w1cXDqWvZJ",
  "key3": "2AAha7oFnRL3XLSLtKa4KaubwSv5xB718rZ8tRXps3vqrrSYQSbZbb95yG6kSYHgkEfkLyb2WDBKV1S2jPu6c9Mw",
  "key4": "2AHP8bYt5rhmgmpRpJrwQ3Ss2g3MbNaMGm8gf5qhsGXS92niGePXmccUJ8qxzo4n8cH7rCz9vSizcERNbVL3qbf3",
  "key5": "62cxmnf77rsJWbaV4kpyVDpKD3fumMKj8JgK8XdZxMJqgvgos4jUsSn2Z488BQtrcQHeov69crfHUUUaRgeenLp",
  "key6": "2z4E7YAuwcz2nEqwFQFExYuvhFLpykWCzwqHvjCASCjJGvp7k4QAaP5iHA7T6MRhQh4sjJ5yyv5gXcjSzcZc9c4A",
  "key7": "45ectWZkbERbFFCaYinAjzBLeRZf5Mn68xVVzwPVWPu8RL5aGyiYKPXdJEoYXj9q274yRZ7zZr3FPBSuNtkNMPYL",
  "key8": "eVdXRgjesckjDLuoaooSqgdHpKY1tfn4YDM5gXFG6rSgSFJBq7ZFrx2uhHTv6HvfQyytGa3NCyYLfnJafdCGiyi",
  "key9": "4m38ubfabHWft1E9hBK2TrYZSZeVofYjvzQ8mRjHvCo6mbGRb7hL2yVukSGoDv43oKSTRDxUPpVwZNfKHToEpaNC",
  "key10": "4xQ4nkskq7JK68onkUjAijvu5cacK1YSNjjAd2WVqpttVXs6p3zGTEBKFRh2ThMjZ3wsuARdYgRhYPGtqGBArK9S",
  "key11": "4oeQdLk6fuJ7nZLf5spfQ9UTBM3jr3kXbb2S2i8UAwR1H2pDKm4mMzi9fJw7d488U1RzgTrseFKUj1S4i8QYBbi9",
  "key12": "5po8FYkM5cbVe5CxXidEij2fx2t2yjd61eE16pq6W7MeQWTEgwH3QnZBpKBxX1b2BVvLA1GARnhqt1hYafo9b2Vr",
  "key13": "2TxAmZbdFWp6ENRNbDFPpxjLmGfnk4D9vva4Geb9jXFbkaBihdzL5vzhK4UqNZaG44ksPCd3EKb1pKAu4fCHkSY2",
  "key14": "4AmtzjYqUZw71qv9NrCTg4CkbUbEusSBNME7mVcVbp8eadaT1DucLi6J442ZGmxzWix1caJqLCgnfzU39XWN8pnZ",
  "key15": "3bkqMX2F1hXNomyBbcp2yoUVmBMbgTcroSLGNrTf4V2UL5F6DPpKndpdhNWx5VMcHiPRbYG5X6sbvGdaVgqfK3Hd",
  "key16": "2NxbNfjr9XicNQrDjz4a3f5QyCuCgqaXhnKTVongdue4e6mifVUNmBT5nFcGnSTmBwBEuFqRSBRuFBEjDy2gfJUB",
  "key17": "WCKNZ3xFYijN9ta6CsvMKkWCeMdFSH8fqpvEjXvLaPJvTxxqCVqeotf4Tqvu82T1sJmaZV9G8us5b6pkA88WYtw",
  "key18": "3op4F9r1857qH6puCqNLW8zDbqKGpPFZ2rHueBqN7Qsh7crR53mkTpKg2w1w2Dvf1vHW1fP5jgeJqHF3rvoCDBdy",
  "key19": "3bE4WGHLKnw9fDZ8xs4CV8WzsGXjx53JUPYNsawG234xjwBznmKDphGdjQc5MXFmrHcczXrq8AaUxKsSJ4c2dy2X",
  "key20": "59fMXPi5t4MQkmVCNNLxmaBszWnXdwKq15uwf5ydMSG8d2uKt548JBeD9wfHjaDCMVd2BCX2TGwFDvKQQYCP6tZT",
  "key21": "3HVUiH6qviZbheD1DtqnQFTC2p8bE7qrCVzbzYD7XCJam7gCbinksCTaBbivYxC78fJq4moHo19ndZupTDNot57K",
  "key22": "51i2s5E5B5r6zidYTUeCwhUCqE2UtPndv1U7RrTWQfgpMTPGetVC6iokNip9uMMvt6PEMcDPfMXesLSPpqWSD2X3",
  "key23": "2gbrwH3qq3QniS76RHgfNyx8gtGTKfbCoEkWqXFRZZ38grayxF9qBfSUsyXdyoPzUrHiNSv7pdQVEyDbcX4Cexyu",
  "key24": "4fsm2wBLBxedEpWkGsiJH9sko5c4R54ysbpFSwJ4QmoiG4KAxuS8qBGgmwh78utMt4AHkj53m6sEHxXHDCPp3MjG",
  "key25": "rE324QNEmmvHS3P77WkWhFLf78vEyo3nXSNCeSqp1PP4Bxd8g4iwih89aEUcyfDLotwDUbuNJE6H6qazuf4WJfZ",
  "key26": "4Bz1bvt5p6tuSbZmvZBRHycGbCpdvzCxMLdF3nLAfxcQPjF4UVCQSF4D9ejrQHJ6DQsiagKPJsk1pG8zkJhdkzjP",
  "key27": "3mNgDjWta6AsWcQDiCW1i7KiKzqCmF4msKccwQNhc6e66cGtKMaDTP2ekLUAVZmpSk7DeJ28FC3ox5RVSwJCWY38",
  "key28": "2V9QBW6EUgnCXBpQrnCiLk7L85Y2uu3TerBiH52xMeTyYNWLccCuT55BLNdtzW9axotTruCdysGYuk4JhDwaBHK9",
  "key29": "2zWN9JeFf2MTuhJEyQTWEvH53AF1ZgVmKZKaiyRU2e3bW2H3uPe6bnDdUFvb7A4rTmP7cWvFwJ7WspyKpT9SDK8z",
  "key30": "np8TV9zo6fPEeyoxgevWfxqkb4qXyHqChMNsCxL5wJJCeWQ7RdhtvDUGBmRDDxtgDiv2w5GL5rsbk22FL9DPvDD",
  "key31": "5upTQWcPrF4nuRsccvSJ1r9QT7jfU1QvNi1DiqMccbENDbJk1tFDRYgXXmfPaT8ndTx47Dg4oNF6PnprGc2QZMAM",
  "key32": "3FEUCwG8ggYhHEbZ1ArB6FYNBehHakTsv4QPVg7VZLefPYr9RRLEWJzg2gdN6cY4j2ovpnZXpD1TzzAwx7FK3vPx",
  "key33": "RwvHRZoqYbqbDkMokdb65khBn2ajmuK2X5B8gyjZVgqwj2juvVsQtZzhdaVPxeitNX9gUB8fqidNYasHuM8qBWh",
  "key34": "3Hg5ZQcc5hKAkTCUTeUqxrNwbRDQng4VALfqwARuGmwj45q5pmKAHbsvP7cNPRxcuQgNLLq3QNDSk6H2VRu7SYoF",
  "key35": "62sdxVv4kCwbWfoKwrqRV2w2q7A1vQ4WcWGrk3FKdeBd9eyUBws8ugPpzsLHzdXTg33kTCH2sb8oD5yzSdmwZzyH",
  "key36": "4YMtyfUNCCxW3d7cgV2n4b6GPkuegDGPoMSqVHdL8e7hdoSUZdfFhAthk6eE6myXjqGsQg33dxwz89ZYGYZUpsX1",
  "key37": "48iZ2Zcf3eEV5BhT1bY1UbHNavmKZUZqjDpqZUiPsWxsC5ERJJiLCV4GxKxNC4vrqcLjfKstLpfLxkL7TpX1esmc"
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
