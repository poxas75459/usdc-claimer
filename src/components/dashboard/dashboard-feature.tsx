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
    "9Qkbsy85ebdv4pjazGC6Fh7Ti2Masc87NDhs5f34FUcW8jtvuZLZxwcST3Ts4bmyE5f2PYNLUvNTUMGs9euPnCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v9Jg94NKr6PtLXzJPHyFGyp5GotDU3eKQwPrnAmYd3pcdaXHhagAvoGjezPYaYTp8ZcVUt4sNw2Mr9WPwumf1uk",
  "key1": "2xEUFRz2kGdgvRBBDBLSdbbgmvR5XPkQs5qtFS5coMEcmz1U2G94DMLBWtbjKaGmu9Z6ovhvxGNcG6Ti1d9AZPjz",
  "key2": "2yWSTrZydMsjZdi3a84GrpgJkK63FjbWMJmWXhTfshcPxm1aAqJS1q4iuAjw12RxdMqB14jwziTb4aGfN3qbWTWa",
  "key3": "3KjzvYsp66sh86Z8akS812qNsoWKjDAoSNMAt4LpdfaHVMmoKqFAdquUF3t4mRZ6g2y2NL5bBFCaFfDnFts1jYrA",
  "key4": "5oXYCUd8kyreXTgC7aBZXYiBv2tgiSrPT4qWrD5EjCKBhYtHQAQThtZT3wt5VEjJDfiZV74pQZh1MWPfckcntQ57",
  "key5": "2Viepn7k7tHTK7GSgwGnvndttpn3q8iKMSC2t4XDNBWySFpuqi8KstdAmsFioAWVZfBCW5kpp8jRsPiYJaewDmer",
  "key6": "nANAgReqiZuF6wDGUMq4CakeFAQ3P7psq9pS3AoT47abTmei4iBvaZ8uttQ3Y4LQwnQkSJRWnVt9FJ6wB35SEif",
  "key7": "4QVCURjUPLwmW26wzPwNfjYrdfJEoe1ykGKJ3shCaF5ULjuYYBrMdu7AasrTLtsjZZKAc9qKJ7xUV4jAW3Fkjruq",
  "key8": "2Y84EvnYXmBcPfHzRobk3xYXTgSAAU9oTcpezATXgUMDBwqk5iHyn1WgC9TeN8AJ7Di6Ad1QbPTF679m4XDa1ApY",
  "key9": "2bDy92zdnyzamQvFf6Pd2wHTqTf63Uf21pbqMVhCTBRCJ6FHuroPTgPti8m7DgXwBTXrY28kcB2fjDf1i3HFT65z",
  "key10": "4KuVG1DMXJ4uQ99ARajyxhSos21nTvBLqpqLzuNPfpxi2qTUDXoJ4GHFajDGMFR2Su4sbKh3th51c7rk8R6FnYQg",
  "key11": "3bkfHmDB9naAbrn662DHZ9qfsZJCJFhwkzUUReW9pZxBxx2t6jjn2LmYuEKMAuqLKkpfP2M6g56XCrNJr7gchVLp",
  "key12": "5aLBjGLybX2F6HZaM3uwpFVbUZmoj9Es2fWWAaCEwEcRvjdnAVu5E9ywnJfFzRx4f6uFgxbq1VE5iuFsQTApFFFT",
  "key13": "5Y5FQtLgt2hFuWPfqAkR4iDvivnkBDAnBwLtv9EjE7NjdDxbvxQeM5L7DKcpEQab2ahyQcaPuyBVvnZeU5TJQbEb",
  "key14": "sT5XUmfDw3Bm84LVrknrqYkth3WE7mHgeGHyfpK4o6sB9xrmuNx7fucfjeFWWtEYZP9V6UMfczTRDdGKt6ZSDH2",
  "key15": "4dwikGeEcDM7DUcB3KztV36rXKTcAdmEYMR4JAgLn7MEopLFSRhrxJAEQAi8TZFJsiYsUE3WtuDhcsufQoqHeR7s",
  "key16": "5EBB7EbAQdG2Y2wB3Aekbd4db2pabzaQNZ7Yyr6iYudNCbUbSJsifT5bYopboaYpivcqURjZS8aMbd8X4XeKmn7R",
  "key17": "6mZiSjFeTUcdaUDsKCCfenoCz1AdUEhyr62gecSnH2adtXV9YHtRRSiR19KCCjMJnXSP2XgEx4FeJtPnG5DtY1V",
  "key18": "JaLqjRQX9uWC5qZsLUiQqp1jjZYeybU2Fn5VzWNe15YTFt3Rd6bTGE4xUdModgDRbb4knj8yhdjxSsLCFg8UNhY",
  "key19": "5qZy4dUmLiTrftsRhAu5fd3jpjevk3PzGX1tGCgowZWCW7CU8w2iN6oehH4DvCFJCs4h7abNtZmxLQ76Th3ConEE",
  "key20": "2wbuU1sHC1pV9NmCBzu6LcGkAYYkyRkrKmdbtuccSrcS21B3HpTybN9Grj3gmmjdG8xEWSGVUgvHMLVufan4KzQ2",
  "key21": "2NKXMCQ2DZpeNKLhpTWPAbPC9GoemXNYzUrSXc151sp65zNvwb93Pf5YgPoG6LuovNp2cuBmfBuQoNqXxW3UpNKk",
  "key22": "5oEHfZNnPD3DGm9Gn5PJW7cQgJQxwpLohJBkatjnTr7U2UHvZV6utyFEf2jXewUKhQa9pztUZGpkN2ueDWTf2WPb",
  "key23": "2d5wz6ND6mocdL1a39aJ5woWwLB9Cix9eFCFcedejVhKQsqQRJG9xS5o8sSA4i2Kd6bQuKoakgbbcupUJbig18iM",
  "key24": "4HbznTXyUjtK5R2U4vJoYwhXd1aSmsmXvvn4Sz8erBmRMCyk53DD13QsVxFXC38JZuTVqqWbZSv8oBd4mJPfqK3c",
  "key25": "aPnPETMmZP5eoJm7x2GsFm1zjUxNFzzifjgt3PrjQ87waPHex5MabzSu44gyZ64MLGiRPZo9kSGWzHRx2DfdJN3",
  "key26": "4WpGVNtBJ7EnNrAcn8sPJp4U7jGorU9djGoa9J312MGA8XmXNSiDELBerK6J1fTz4UwKCrS6A9zdSDNbCK5hUWyT",
  "key27": "573H5NYaVyX2emSw8JL5avmiPH9Y8RWYUVa7WuWAov1zkKLsdAdfVmDYCGSr9KsrPML5yaAcDhfbboPquFwdYJoN",
  "key28": "2XcXqcGUn8rsV4vP7tfc42NfyubRm7Nj8DZu7XLjfoRrgUto9m4aMs1FnagYmpAwA3PsehXowuVDA5ZLqk6Uf9gn",
  "key29": "2ac7Sxb2bjdh5XrqLjwioynHcKd4hYd6LAaeQEanReMtJoPSSULTbTHrEvxTD1F48WhwbhBhvoyvWQVFAbu6kNp5",
  "key30": "5bykiGvfhsdmy7wbzxwPVh446h49EqDjbwEYZqhDr2yGgGmZXKsQm2dtwNxLqCB1ga8RLB98hp8svJNM6ggQpJcw"
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
