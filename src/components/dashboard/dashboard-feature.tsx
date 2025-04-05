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
    "vmHRzGQEtTuTykDjbAK7eaYQX2RAmUNHTsqQvwesqBoQ5LQPBB32WZV2ipUYV3BYB44HyGUTRZjGqd5hUieEPcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36tVVgZ1ezDvSGasUYimx8GsVGFFQ9iyvEWBypRNDuXTvzMHyJmizon2KEAWerV4fcLpwcjDjgaguVoB9A94WdAV",
  "key1": "JHxJoQSrwyPxf2rkww521mKnyJKzFKuGtFGKh7HVKWMgRZ2bnmkSGVr3pk7AncgegwsjXvrNEaLWmTiEfE95Upg",
  "key2": "5q9KinKkya3kgbk1HK8rrpLK15nMJGoGYqKQCNGeW5hcbHScaWTQhMeu9CCh89ZgrACHSbHjWajANMZ31a376fPb",
  "key3": "3SWGqUjJiv1gaCtaJ2Kb8zppxAkoXkjLUEvvfFF68d9gcr6nW9fXpWHtM3dknLv5pKm9VzN8HrqqSdP1VdeAVCqw",
  "key4": "2iU67Zx9pq8ZpkbPC7BpNFJdiPtWPWjWrY42ECZxpAzUqgfoXh1dySaWq81DpeWRtDSk358eeBkfDRYibVynVbmD",
  "key5": "28WnuBSnDqQcPe8YtZv1VBhGKVT4vw8Ck6EMzjQxNfzXULDKgMKGig9WYe4UPnet2x7uzJuDzoKrJr4dqfKtiNSD",
  "key6": "615hFvYfR29Qf7Z1E644sLutmaw2Wxi9ryD4wdFSCNG2n49oY4uSABYTA8UQJytPDa3dv92YFvuKsKTYf1spPrjG",
  "key7": "AtwAH3pjkpQgzTbpKzwyes9xZZZYg3j1kZHUvY2qqd13m2EYBjQWLh2xZU9qSqyKBYqg6rfL7hZb6SuGfVAoJL6",
  "key8": "2KoYSf54XZok6Wh6GdReNB3j4TaMmXqrnuzs5JZxWr71oDd4Aei3JR333BCVfadQG1gBeJsyDgVXkVYs1wriJ4fX",
  "key9": "5Szsi3FEr4NVhg571m2H34QJvhGTtkLZCbHneF99pF8paqHyfnDLt592BS3rqSyfYMgy2BrJsn5GnrqqtBUYfxCV",
  "key10": "57ipRYU4Dt7benmHMked5hLKZNE4nosTtZgSWBNR8GDH8qLTxmggVyaL5qtJbCkiziFtWAaXLiUpGbzLCwCLBXQR",
  "key11": "57MLnHryjvV8ZGjVH6nzeih3q6D2PCuwb5Z7LkWetbms3sobfmUZQ38qCMsPZMaVxuiBvSTWyN1gvcY6mqEfSZp6",
  "key12": "5Hf6ebjGJVi9SnRkwCMKGEmSvRF5onup2fNR7sZqARzTSkfuVNBXjhSWJ8XYkadd6qLTd7qkkpvNuWehjCmSz5Tg",
  "key13": "5DDW7pFMprVAPLJNCo2yNdGoW7hz1YoieZTmxnE8WnvksH157TceV2QAsP3fV6ZCVLViqpm3naYyu7isrSLbo15y",
  "key14": "3di6cZKqT37S1a78aSFRzZaqDppnns89B8mjhdCTnxmDR4XWJp2xou8DJZhrZd3vp8UiiEkA1AQrRAq7fZfwXAXm",
  "key15": "5rbAgqEf4t57qKHZr3pocWa8iGbqYCGt6Ax2SzDxzGadwxFPGWycYZA5zKoTa1PRjVyLjS7F5WJWy8xueEc9mRYN",
  "key16": "27FA5c2Qba4LvymiogkbDy5PHfy8ziQx3si54Qu6HkppRoXmsoTpyHb5hnHamyHVLbvchjjMEZAHUw2t4vx7XKW7",
  "key17": "NuYJr9Pa8KqAF4f1vmojNyYYAJdVQ76Xz3FCiA7HAnxE8se27hq3ZDMqiJbfQSddZTjrrsLLeME1AY7EtQBKcry",
  "key18": "oZCc17VJJMi2o4EZC1jnGPUAbFqgucYpScjZjLaoe4F69qs4axkz4M8ntAD9E6j38oMDYeC3KuyGKmkrwvuVsHH",
  "key19": "2F46Lj1sQsGMUqkwdrGBJbA8gazdsQNRxkEc3iZRaCbTEXvUrKbqciQf3xYfrAYu5ptWdDwMCtgeSawMHQ5hrq6i",
  "key20": "32biW57gzaqhiLqnqYSt3M7XU8vifneikeayUN6M9Ssgsaz7ukY4GyGPoVD2NztVL3YkQHwWydkuzKU1Rqv3vNYJ",
  "key21": "4mmMaBpNUxFASWwbJ7k2W1ukrGqnR9SbTu8R2zUASq2tpfNimp7AXzmD3fGgpRFF3o8JVBhiVLD7TuSjytcZzpKm",
  "key22": "3FmDv9YYwEUQoXE9HRNihcr4arXLbtVkW9E26eiVmhWix9KE5futkVaM539NmJfhF3NUFqtcu1KshMreF6suJzFu",
  "key23": "657KgtG8EzHPJr3HJpVonCyWhnr7BogATGfPUMs7hvb1zp3pJqoM9EnDS2sNE7VWQeGEhyYhtta4XNp6c98XxAwR",
  "key24": "2cU57nrQs7z9oqtw6AKLFa8Fyv1R8SBtjwukwc5PERxCrGqJoiSkbSYueDGEzFWDuVzQsuCJSAsQPvRHxNSKMgrV",
  "key25": "61PRL7xBLzCF23wPoR5Hfvm7XiHMrNhpbkCRVqBGBwtdLKXSWuCBqSivksN7tQyhsNHr9RgxrsU5LwqBH9jY9D6w"
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
