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
    "3Upbt2maSKPQSgd4o2i8GKPCxh3u3gZbnK79ZXHZYsaorcZxFWA8iMYtoGH7MAhX4eN5R4342Ukz3hTnNnaUJ2Aw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sXnAxF6Q7wLCnCtgoZb2Mv6NwYv3s7qg5KGYBB3kZmgyGihpZbKEkdv8GvJviSzSV59VrcQ9gG9dywFrjxsFhNz",
  "key1": "2jRu95fX2vafGg28jqYdpMTF5wvbkMXoh2FPfDcK9YEwrz37RWHtdnmYsGTDvQcf7rdGiCWHKVjvPGmSCgQSgXbr",
  "key2": "6K7jMkmeJrkDmyKBM15KKXgXR5MELcdGnPYfBMm5R7LegsNLo3TaN3cXKVX9mQh52cU9auN8io67egMyEfNC7B3",
  "key3": "Y6CqPZp92jNHtLGCUxBWMGrFDsEQcuHSDzsd4NGk4RCdsWSHVBoLmXg5bVQ3t22eFgMCThgjfrGBUjJa2TJMeyZ",
  "key4": "bmXvCDxVBmCbWBxeiEGdGM25vjvKvtAp2hPKphh24EMZ6EELHn21St1sheKcPciV8eECT6aLQdJANtYUEmU9JiQ",
  "key5": "59ajw6NhBpRuKJkJQqa4tD1M4E5DbRKy3Vgpvad2qnKp4skFrAh4XLf4vWCTrMgCUvqkDwi3JcXoL9wcjCZiTEVE",
  "key6": "5kjDgkDNbN4fe2VWL2DtHetkpCJ834Zgv2FEnSWWkvqNnC9cSqfEkZxxZ7pYbNPRqqFTMLWFJEpcwUJWDHCGG2on",
  "key7": "3cxJGYy6q8QZRZpy2cG7ccWeiU3zVrQdodtezeASMurw8LY6gKEws8u5wUb72FR35ZzZWmeveMBRsH8WymXNXGxS",
  "key8": "2xMMciTeGZvCyXyizV5as8cWf91rjNKkSpbnS1ctgyvmATQa7dZaGyEBJbKjhVX8XZkyzNrV9KBAiR2EYVz6rDku",
  "key9": "4KKMYqg7ukd471BqPDhVppWPn6B5Gr3TY7TznJ5nvvw5iMMmNt7EZogEX176mNg7w3c2YvTKHPkHk4LQ7PboQ6kB",
  "key10": "5zme6QnjLkct6CMaLKUfLQQ6EfcTXec2xR5WShLTLFthS2UN5jQ1AL9mFhx71NePS4zGCA2jx25bE3QPVehu6Hrz",
  "key11": "4mwWkyUsD4P52nXKtngXSgWgV5SZUZdK3VLwdhXoTrJipsntS9WyGuWQHHFWyGkDHQfJZhno56Z8W1kdRbeBJgpy",
  "key12": "CPdtn1DtbP3eFBKe1rGdF9ZnZigBQDSppEfZWj7g72Vq97vFLR5doP6XoCy7A6WbHgqDR3cQT7XLSeHUHpQCD3d",
  "key13": "4JRGUXjZZQHQHcrxh75P7CqnB29WYUgY9XAd3Jpu7W2JUx6Ygn6H2Uos6WbbiHW5jr2ebYTsZQ6GkKVsqpT1X6YC",
  "key14": "2Lzx9FtQLkpjbvK2HyvrXnDL8JsSVTEFeQTEDHo4Y3SFDFcSSbBGCxHKnZfTbQ9KPz7Xfb9nkw6LqjETctj5KjP7",
  "key15": "dScVYtjcmxT4B2sVwku2xMTP7fbMxwsnmh94pdrijh4xnym7LJTd5eaHiDATFPPTKB5nBYivQGJFwvgn7yMstmS",
  "key16": "3y6ZjM5RRQxALYuZrFAjdWcXgA71MZAoLhHa2hp1CsfG3C44FhHiVUQnKZoFNVRqu4xdcjN4zSk7uE28HSuh8ucW",
  "key17": "5hnVTFfAd2WWbp3qyRLXSoYwBqsnaaY61isH1xUNrobHxveZSTLsozekoWtaNGKnd5xgLEuQSbtHbu5JJbz5PZ2T",
  "key18": "2dnRNcdwiR5kA25UiPZm2GawJZafeNFKuYkSuF6S66seFx9eXNadQUnmZray786WYWEyNxAwrf5GGRNosmfK8nGB",
  "key19": "2jQFAVWY1u2PzRDt8R6wpz2dfeuf514UDYokCZukNciZuwX8ak2EzrtfTY7J1MVQzGqF3CsxnAptwg63aToj1ykk",
  "key20": "4hpc6ktio5KMypphoWB5N87ij616vPffzx5za6Fk4oSb2HHhYdGzd56mWJpwYoeYMNuXTdDnxrSZdV1sJNBt5q5J",
  "key21": "N9LejMCeT8Nuw3bDBnBXLtaiW73pD3h7KRWGac7Dfk5qMEV6cCHY7cARUxmw6fE3c7qheoXxeUrYtEzAdhLDpaB",
  "key22": "35DZ3AXB6MYvH6nZrGYeYWLZ897CtBxg6n7DhbXHxNNng14FdZMH8reAoTBiKQwDKmbouN826PxiyHojtFDFnwio",
  "key23": "31F9RCJmjcT3AeAMxz157hV8xyNsKyuhmV9XmLx1KGXnSBqdQRGkE9yas4wSqEXkNnLiNi22RuvKrt8utjv3ApNm",
  "key24": "63v6TjMPwfy4oq5aMj8rHNcxWdJ1Foc61Qc6gGB6W1VtSDHVwycBWqVQ6Vbz1YvWoGFFozUTC5X5k5SJCFz4E7ty",
  "key25": "5ZgAk3T5LiNU1nhsc4NB6bRFpkeRTcz7rtHVCAnPL9QCpfDPdqb4JqQ1cwLD9ZwMgxcBPjLD6JvwbdBV3v4pUuXh",
  "key26": "5Uzmu5Dk2VwjSyYBHwcj68FohxBJoDB1Jd9ZFoKNKFEtQHokFLXWV93RdB5JGyWGGQvzCRJiKM9ZgfdZHPaUJkzp",
  "key27": "5FaD1hZHvgZGuobQzjRtDjLZTso94WC9P1t3tJyCfLw7GHs9RXbz3kFwNxCnwSyCSr5iXkgb67pr9asc5tXXModm",
  "key28": "5uXDpio5xiP5WBjLW6kFYu4iriEbMwAYcrh8t8goBJ3PDHtxN5HTw3eHFXiMWH6ai95mdzha1Lj95xHpAKMFCupa",
  "key29": "4XbhkYiWRNERoSS7BszE5WGBwpXAru9mayKN3Yjy8MnxxiBXfYdGuXXTpPrmM5Rb3nz7sjhRxxK7iV1gPEn26ucs",
  "key30": "4QJDMVSnJnkdFEgDKftXfLKS7TQGQmh4meDo21pA9FPotPf4ZuHxG4rJpn2qHuDtD691PPbBs97XAhwNdBdQjp56",
  "key31": "2B2QjDNyXb4nTTe2vwy23DuJDNhtHUpJWtjCxjGJawdG1SywtBdArhQTbFxUX6Lgkcu9V6Vt185UWXv4vKAncbph",
  "key32": "2EBUh18KBMGtBFbZ5LYcdmwqHDuPGnGgvHMYGkgbZc89LTDHRVow7rE6WonFqpb7GtQ2vJk1saSLcx1gupQSMaAc",
  "key33": "4Y8qh44LQ8VdQ6cRRfrJnEzHDMYEZtKtGpkESv8kraD3Nk2VsZZc1U5nCoBWNGaqJDp3grWJLnJMid871EJXkTxN",
  "key34": "2V9w24hgihN11P7YtLLv6NEfhqbfDbfG9K1sKpkUZLWhirSBeHRSXViqFBhm5rXdCpELQkVLgvszFfsxqCogSvMc",
  "key35": "2EJ9vrraaupM14h3S4z8SyFNiq8vBub2kkXwHnYVFxXYTFPABZ7BbRp56XW63kveE8KABAF7iPHnobj1MYjc7wwk",
  "key36": "3xLgeHxd9KG8NcoNW121HRhj53K3J5mSWC4v4UeP9Rqyyk7xFZTe5nsrMbQWuym67nnzbBnBxRLy16wVrw4RLyoU",
  "key37": "33AJk2SKmciqeLmkuvMagThfaXfBYcNxg5bVij4NmVdefUjfCyeHUuLJpnALrZ66Tzk981AsNiiJWFPECwwZhFqQ"
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
