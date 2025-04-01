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
    "3wvCe4WX3RgGLqKtZ611Ehn879BjjrsFhvnR9JmPesH4PaRUXE8Diyo9edodMwHKuCRD6CHEB32NrQNp5R6bK2jP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RXuFaJWMjJd2RPWR9w58Hcr6zBZZwQJXZva3HCJHWoDrRgXZqyi9Kn1XFZ3uMtAXRVZcEWLdwDfSvHhXrsLMc5g",
  "key1": "46LypYv5g9vAwWX2ckktxzaaA7ASXjJHcTC464fMnCUWK6D3wB8LDevtkyHeXjpNCirzcDS5ofLtzrgXLKz6u6US",
  "key2": "4Cz1esNup1KYAEftn1WB6yLDozgNN56hXGqc184roApusv6ETdfZVHqPYj3CMQBRkicbPSc3wLpia2RvvH1aREuF",
  "key3": "5XtU1ThqWauGVeptwwXphqux5sANyrm7WPKNH2FzYFfXscP1jTXsdi8DfVQrpSDd7Ly7S5XWNzh5JPKuUpdDJp6i",
  "key4": "55fncnMPfhQqq9HpLv4QEmdxsMRJjhdaEYeDbtVTeWHrqJPecMmtj9Xr8W1nbgRDccdPqvzLvedZGSGBgRC1ugKb",
  "key5": "62t6FsEtNpWqWFzCRgQtzuQkAA6DYC5rDs2cAB2RahkFNeurCRWfwEs8zHjgWtqDPYq9w4c3XeXX8UBz1LYCFGyY",
  "key6": "4vbs8U5mFk9ayPhmcDDFPoqdG1JEHGo4xn47jAEECj6eKTPdAFgG3Wk14xeXaQMnRQa8DQtQeDWX3zL5u6BfuKKg",
  "key7": "6MHSRFtC5JhdaHuBh5XuoYSJC6ujUQHtrFYUXzrQmG1eJvngJKCayEAzU5o5VHXajb2EJKyUbNPnUQD3TZjnRYK",
  "key8": "64evec5atb2uGfKrMNtK8CB1HTX1qqqAfMJ4doDGiYPyAb6zbk5e1oT8Pq5qGp3bETpjtaUNyd4E3kRaCo93v4ZW",
  "key9": "bDcFRGNHzWonDD8CnQ6jqEvYrTENkqUQm5qfNXWZs93wTbr9sPP4WAotB4ciozRBZFDRzoqzkFEn9itTdyyzyLM",
  "key10": "2BFMFGLhYFdcgTpmmNMWJKcw2vzRzgT2B1oXAvNmzNMPjM4WLt3X69erZ5mMWDke6MrkAtVZiy7tMV65g2gMyH7x",
  "key11": "3tfmSkLTGMrtvEWcTw9fkCxDYvn6vRQqauepYUFDv36LExYV1HBYBjJpcjUDnPY8SMdnpggdVzXyi3sgNGfWVf8F",
  "key12": "5k13AWSnky8PsmQ63Uzr7cz1ZJcmvqYtxmbPDWhpH6bRxY9tSkPCdjTsYzi7E9KQnKKUv3hzRSJFKcC8rBJ5Huru",
  "key13": "4KNvRLb9SZyDr5dAPc2HTRRxtvEgvArsvetSjmj34WnP5Uy7dG8G6AjF6JxtrBmaEhWFASzL9hd6vrM1sbM9wnk3",
  "key14": "2TVVczXotsA2pGkNBJNdU5GpmaJRcrFBCk2n3gc1et7qip7xVhGKt1m11LCwEDSn2Geg8wcz1cgc4W65KuwcQfAp",
  "key15": "4pGXHiyjGHE8E1B5PDjAHcu2VeQkEhRpQoYHvZRTJBDw3gF4afraF2nfc1bKyNgGkBw6T8pfeZCgmoosir7NE7a4",
  "key16": "AyWpkPxEXLTFhG5sSdmkbxGeU343DSaDgpkJi272bttvpuQY9vf8e7qhzBBBiFMn9DZ5ir1ZtU25o19pLBr7tC1",
  "key17": "3BLNqL67DTfUMdmRmws41sdu6YBSWkb4BarP2JdLwvU5QWuJTjrVcGSUB1Nn8PKaJ4DEg9TCRjecfNp2uHZi8zTC",
  "key18": "2PAXwAmsjnim6RqbW3ECNNHWqmv9C32HWGf8X4osKQTjnBG573E6agnVXKB4JZXiwkenqjZJcZ38gAr57c7KLNGX",
  "key19": "XgrPHLxXo33k9UveCU829JciAQQEfHNzwrXqVjyq3ViwE3vA2EhaVDT4ULHTuPSt4T9EWRygrr4kzdwR8PRpVXz",
  "key20": "3TX3tyCxaiR36zHBeJZBSVng6wKfe1tsoXcivScAERX6JEVQZ9tBy9Ebcmrc9t8p38oE87kZ17UDfdecLg37XTwP",
  "key21": "3ENCLdfzzkcrBgH5jU7ybWvQprkRAaFYs2xJLAM11iVrJy3v8UUUW2SbvVWvqy78rNXqDS3WuHFCcA4KgrUNERD7",
  "key22": "XhF47q7k2EPmip64bPHNq2funYTd4rEpbNfmxHCUJiuq1wCK3pP72oGzuspWPBmSESgrC1rAPHCB2wGXpgGouLz",
  "key23": "65EhzFGBprbFuSacjC51HFtB2uMAuRbFY2kjzjwTHdZAH4L3nA6TBPxdcWz2zfy9FpU5ZibicVg3MttYfyCbZ1PB",
  "key24": "3HdKDNKZR5DPDADd7NtNLSbaJLe2pjk43Ewub4cMF45tDgcpZ9WTFnumXVP5xUTeAcUTGvWvQr1X5eSb7d5kLYr",
  "key25": "4YP8MzeCSajWPLTNWRFN9iD2RUPM4K7zsYPGTyjpVxJ1BM1yZ8cNA4Uc1TqK82pHHmvAwiYC1AGEhiMemJFw6mBw",
  "key26": "4o9hgosVhkVpCsQZkMuyM4bRGRrcSYuaviL1feHCaZPiAd2mePap5HiMVa57YRxVKHkm6tPoPnCh7zryVmpuQ1ur",
  "key27": "5ncYBVq5nLa7kcL9ySGsqf2NUJ1r1MUC4eUQ82WQTvnecHtzPXozmdJfDuHWSi9sog1xTaivzLBGiQs2zf5AW88D",
  "key28": "ULLJqCfmqnH8KGga9PSCiMHyd1DoXkj75RmpBC8a3a7iCkw1jeveWA19JJ3hAScvAU9jSjma8UAetatckU5i51r",
  "key29": "4TtLpf3fyLMYKqNcmGLcqGtx9MNytdNdD8CcEBcAQ3TExq1ScuvM9YSQzmqYwaWLyVXjSnSzpJk1nBzGT1Er1YBP",
  "key30": "5YsVLFUYwXaYCMbPgFRxHTEm2rhMF1xyYe8RaS5DbzLMGPwLHovmbyjrWRVJr2B7U8CamoqHLxJx5snTpqNUmGyu",
  "key31": "3chQHcZtH9ZxH7t2NehWubw3Cw6KQ6EsBD7rmiwjMko7FrjaxP8FKLZp3QrwRDskHVdc993MpUybpTrGpB6qLVyr",
  "key32": "5gynvWpET4gid3kUnCcstpoiwvmVXrcmFGSSaw1AfgyL2n5NyVmrAmTf7EiqVZxo2BMGp8czntSLewmMdJCsYnJr",
  "key33": "5XU1csx3o7Bgk7fQpocxaS2maNPmpx9bCCPtZqYsVrKdKH7N4J6jXCpbT6Q7grQwVEZYk2DZ1detAZxyyLstDmR1",
  "key34": "5ZP4yzrBShK8k6JzXZnTrR7LHuBkLwzU98qYmY3FcVQhrxbq3rpeJjqhLb8UV5F9C892ZRLu9StL9dYdjM1jrb9S",
  "key35": "zTeTzpLromduUWUycyihxkhaiFpwoznP8uthg4WbSuWwwQ73TzGR2sqYkF4LzC8p6RcrZHEMVa9Es4vPfk481Fj"
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
