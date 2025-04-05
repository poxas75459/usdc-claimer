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
    "wtgSYV3n6ta5apgx7S9RPj6HnkHvCf6XfC2UNnD5phWbnoFMfXQeRUWSB9iGwVPar4HtgVaMmof1S6eRB6e8HyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MmKje3xDLS3wQr7BSPJTUb2vKT9ewMSRDz5EHvhJyMhwr1bUuAQbWP42A4yex8Dg8ExrcLPpDi1ifxAPqiyiEjb",
  "key1": "2oP6DSVYgvhSy3RDbEhg1djMYeaZGkdQhcz1riFQqjtLuGkD6ErouFwZcP1szFQ8pdshVajiHVwEJyZkC9KTMquC",
  "key2": "2CNcY7uyRN9JYBqrKWxhFazL67eUGCxdzZfao5WSxgQSac8wPS34WFSPxLk8Z1JW8hAicjqocdKjnn8oig4X36tG",
  "key3": "4J6vyaQ71Y9YHrAR5XwaJcVkRdKXxNhTboknv1jdjpaDDFHhdZebQmnjSy8PAJcjZNX8EZ9dS2maEtpyicA49U9f",
  "key4": "5S2NFovcJggpkxfRZdeYcdJaDcpBkJUyB1c4CfsJgyXi5zGK8nyf1Lz5KrQNaxbqcpCKKwDrCnuv977TwoFqdwLe",
  "key5": "63Ar2pBfY3vbRhyB23wBNDqWtcgYXBrTAyoB1w1ubPQdDUyWrzBidkUaqK4vsC6FuAUoenNH7b4mPFSf6Qd5RVTi",
  "key6": "5GoVT335WCEj3nR4sQDWHJbiZqoGpZ4YSbi23mHnwZFt3eNnSAHr26VJa4iwHyBnkDmXCNNrKGR2YJSuNoyLwcvR",
  "key7": "5ar8LKTkrMBUpbdiQ9oCD61AnFHKGjJKG6esp3gJ9h22AFwcbpZ74SGvLTEUxvdCF5UvLcC7GBcXrpX1z1KWdt4Q",
  "key8": "5eNwRwnquNcuWpvk1X7h1E3ENgfnijkXKhjC9YcNWPC4r9zo9Hgbto14uLTCDtyxiqoZyYsapQUJVXpoED51VjWs",
  "key9": "2Kg5u9BvpZxnajSADjYAkTYyymLb779ezu9RU3QfPW7HboWweqNfEKQHbzGwbpQNyfo481tqvdj8wfXXjQHA6urf",
  "key10": "5pdZv1oqUBUr8PfEL4EbsU9qBRuCcgBkwnqVi6KkXqeJdAcRAHXuLLaANkSfVNUnFHBwuBDmKcDKhU8wTNycCT5R",
  "key11": "s5WqDr3at4M3yTKEtsjub4ZfLpWDqC8jA2XpdGeWUHsLaaX9452DBcFZeb3VbhgcoRY8Mf7pVGLAhPucryxHHdY",
  "key12": "PwUxb2d9xShpTrK2VuNwNJ8CXSb4u2PvPeuZTPn733y5CQs3PvykhUmdqf37MKrwBpWJC5TmfpLR7oQz9emQj9L",
  "key13": "3LvKyWqu3YgXvwwaMZqfMpBvg5QknJsPTWuXSGPr3goULREnLmCPRn928avrh15B5bCzVYfrsHQNaJRHmmJyeUYB",
  "key14": "gF7eWcUPDUn1Seg5NudASgz1znGL8iYiwhzEhzMfowjTdht7wjuTAN7mqioUgTkQnp82E5TVLDNkgLzP4nGFNDf",
  "key15": "54KPKLwTUW3ZgyQRZjJQtppa9rmEXqSKJTQ22EC4AdwiX6NZjZtPm9D9WakRpYwJ1qJZ9FtRFrs8Y8CZPBVrMPxm",
  "key16": "3DGnSvtNoa4xwNTKnxPrYcMdMup6pgwvdrF8A6hhgehQDeCGMKJtW1YwQSVX7dG4BEL9SPMG1o54Sr312wXosuLz",
  "key17": "5LkPM3QQtHxQwx76BqCAgoo4rk1xYhR87VzFXisXVK1HnQiDeZHd3b3vERwmZnrQf5JVfXXCMfBomMZcdxJRAFLz",
  "key18": "4wEWHWYe6BTp8zjWkoKvPFiDfH6eBvTQXF5XsuNJYUTdRmkJFFvgXDWTvn2Bx5KKcqRqLbp1jpNvQc4u71vWZcJH",
  "key19": "SSZMoWBbmdUwv3DbyP35rgFgkq3gnH5D5AitVC562zyB7FBUEMxhxvAAWNSvueEiDLSZePp2upMVbp81aYhQxbE",
  "key20": "4yKj7GsbWtSkgwCXqrz8XPLCP9nuWYn76y89pv8NzqFVsSD2Zzb6NPcWAMPvDhunAxpPAJ4pJLZ34ZyqVHVBP96L",
  "key21": "4TDjDVjRoCaKd8mWBmQHoBzRSTK9qWntG44GcGCPUqJh2LyZ9xbpGHEU7iXVsMZsj21X34eQyGjY4kNBy4Hvfrjw",
  "key22": "5RhxwjrhfnwhxyZN7yvtubX3gpY5DW9hJjxpH1xVwxEkAxVu9TpoUwdJtX4ce3ViuUsKDubJnkKgKnRwCXzyeLK3",
  "key23": "59g1nNtoUoqpLeuuT6J9FkjS3VKAedGRcLvgXUhov9kzyzJBVoTxkHrKXSacHbLGttCpCmrxb2D5gZxQrVdUe764",
  "key24": "w2VDXaAjrYuBPrdNYa2YjMtwjczx5AF6Fz8NJVmzgYWixDyXoshHzz1q1q38NtF5CnYxNL6JYweGwtyhJ7Zkaay",
  "key25": "4BXT3drAxvxSpw91RrqVmjKV4uZQuRC7m4duwrUpuZWSLvx9Uj1HLeeF5PKcGEqD9xQLsvg2dUg5QJbR8F2tZFou",
  "key26": "3Dx4rcvqgVR2fYB1cHUCp4wmnZ7bbUJt7xrGhYR52KGSpKBdgTvJNA2DvpifSaDmETgNLWfz821QEM5CtB1tbJAx",
  "key27": "5RoTGQByuyjPFg3ibkoAxoDf3KYoQvR1RMRK2YB9awdQThSKCWosdb7DoQ7n4JscA1T9GzCwYCwRCfTKS9YzYKhR",
  "key28": "63knBmvJhYdC4usbRnzTHrQHejMmacp6P9eifoUkKnwkB4GV94Qu2Mc3HRMbdUeyvB5g3ZxDaKEvsDivgigxhkwg",
  "key29": "SuTcaJkxKPsubVuK11c2TiPzQCuYa3Fb6SckUJfAQ1CNEJsc1RPGZH7GJaFth5M53uTTgu5xZwqqD7Bxdxc3bAm",
  "key30": "2FoVMN9woU1oPXYAdvAjbdYNDKc4ugCiSnoDf7JPokRBrJYfJtxmmen37xMyWhPCzdZVBfutzJR9LY2Hm8ngXX8f",
  "key31": "59HoHoHZEFZCCaG5aKgUbJXzi9xNwKNtdfvVN1q4G64ZqmTx2QxfEW5qfevzjjAp1R8eTMb3F97JKLzCMP4Cwoy",
  "key32": "44syxFak7bPWMx9xpAmeWJ84b6C93BN4ExTyai7nmFyZJ2NqFCn8MYnXoC25TF37JAxC9zSnXRgEXCyWjLKYuRY4",
  "key33": "3TkiVRwM97nEQ8iTtTeYrkHMZbe9mHoAYVa66uyjqfPdWnvHsL4tt9oQVN8TrrkchxqRJKuRH8yWDB9TxGBExew5"
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
