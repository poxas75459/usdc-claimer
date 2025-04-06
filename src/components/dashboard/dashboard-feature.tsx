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
    "5vwQvoV1KqtahyDue72SyvAnHVckVcvsMgeKrJFuBDVM8Xy8bmQqvX2Qm37dceYpddqdJJmZQ4jMauT2KoXaPhku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KnKrxxfFmgF2C1aBMKbygRorKoQXB6dj5EsczzTGGLQqhjnorTaWBa1MNjf9GvJQs2uHADirBKnra4Cpt8AeDQW",
  "key1": "5w2xCz4RxBJjoCYybiQppwYnFQyPKLkCgP7BYQrtpfmWXpLbjAtZpZz9nvdwCiZgVAa1KM8HmLXv7HHqKd6HjCEA",
  "key2": "5tV7jdgGUDa3RhBuPSwE2pewtm5z6uRJDk9R2QRf6WuDiWFBrPnG5fLErutwgmLSWn5dSJPUDDhQe8phNr9UapQ3",
  "key3": "z7rmpp67b4wvs87VfvFuKuUL5AGPyusV3q3uJHaZXqBGC2thjxSGdKCHZ8WYPGb7JisUJisNeo4onbCxKVXCKy6",
  "key4": "35r6p71HeZo73PDVgSRHaxExovYpXYk3wGvj8P3x7m78NWTg5Kh3Au3V5BLNZJXBf33gcK4pkfJESXC5XPqwT3ky",
  "key5": "2rVfYmKYoFbvZssaHckXqqUwAVykZNP8qUTDuvYrnDpX9UEEtxPoVCzqYkb3NzTqhfuanjo6SFk7ix35RC4UEgVw",
  "key6": "5NtDJTcuPrcy4EUrcXAkth97gHTcYn9ecnNxaqFDz7NShqxaAju6kzmCZbW9BjwQVn3SG1mjhtdVxdNLyc72AEHx",
  "key7": "5U4c8QEd9So9FbTdBidirBVmgGJwYu66gbLxCzDoK6oexQ4ZpWW54Pmp6oSE8KTyv8MdX9kwU1krP3uu6RttN4nQ",
  "key8": "3nUm3kU6LMGzvBqfJY47F6CV1PQPQJmr7hVD9r66xgMKd8Yh7kSp76vEVidjRopAkD7aE8dLNvDP2Nk846y7m7PJ",
  "key9": "2M19uuG3PYRPMmbYCfCK2yEQJcirqNhwHGwGHnVEcsFioWPYVVimCpeNJn8jejG3AuYMjxjzpAiVqTMST7Ba5ijs",
  "key10": "2CtD46xA1pzd9kZsTWTxThVRTG28phhearEfxEy9oZcjmSumVXM6P9nqJpkK4i9Mo1cxjYYUaKFqxVdX4ym2dRBq",
  "key11": "4EFyPx8bD11tGKo5iZigXAsnaixxEywuPjhm4pBokke8cmzBgWHTYT52tUpTBhfm3NsuhTvrFgXiLH84mM5gPyuB",
  "key12": "2kdBmjPb6N1kauCa427hPh1fnfa34qo4yCKYTVYKbq3SS5sWM7KySzTWG1VzP1qNFmm5e4DnKgUmVxkzY6syYMLW",
  "key13": "3voPSRjFSFS87fxZxQLGkdc8Vm6oCeFGtT69uUqweEvEKs9r6WTmr1m5rmzKqZxhQhgK3FgUKRJScqYNMCPjhjZb",
  "key14": "4fuWz1kkQPk6nhu3pQYgRY6QVkd3runKegHbWHxNhxS2ZwrFZ6BaWx5aKw7qUyeD6wkDKhmQ7sudydhfwgtRZmJe",
  "key15": "62i4yVTQJJYerXDGQcPFfmzec3JzfYNcu4aFXz3Eh2dTKMp6mA3NXNZDEcioTu4Erv9rjup5yGiPsRiRdQ9gpr17",
  "key16": "56TpiZQsFjGhXoNAQ863vRNcWUFyJfkFvzMMRYCiSiMJtfqr8SfjTJMURvKkgjFAvrEw4X6UBLvMYxsRBPA82NTp",
  "key17": "3k95QZj8HSh25yLwooRYDSCpDgy1xoFpLssRzaHpUNyze3GhxNb14j2fsjkpd3Q6JL7n7wvSQdAivfAuXiKNr7At",
  "key18": "2PUYG3yyFXnVBn7st6ctvtTYpmnuomH1NisFu8VzWoqcY99uv6cM35bHANJKtQ3ibN5bQtuwQvyP3JMwPQWX5mdy",
  "key19": "kctVS1hvtiJRq352jXa6hyv86YrrsPtzZdY6PfB9VM33yUxU8KfzxLdTmvHeiUstRVKdX8d7wAKzjhRPbduTxK1",
  "key20": "5Kf5bjYbDYGZ172xFzXKPYj67Ue8JkWK5opyWxTBB1V7UvsrZdfdG8KJdyTuDjNdrdN8fyHTwqu5gmY4LWd5SuCx",
  "key21": "21nzBS9yCafkzbSdFvfUkiwiL7NiWFJbmaXGoJZcuU2aJzFUJ53tNFqJAVJQiQ17tjTgw4Rhw5veHWLWYdrNjmEa",
  "key22": "YFERuzQSVkmYQyfCB9KS3gq6DSX44pbqTnV6D8J6RRkCYEHJ3Cibr4pwt5E8aJ9oJGxD6xcZGKHogKhykcG53ja",
  "key23": "59dzBPDTt85WpNLfTwYLNmQg9EfcntYHNvUmJNqQVNRAbECjN61VkP7rubdAAxJZZ9tWBNS49um88NC3JmhCUuqs",
  "key24": "4TNJkhcXicW87fz3yVLuu7nUbkrEpUVjKe46PGThTWGsL4RFNRkJD1R2618DAxnV2RYLeByZV1iTeJufWXPCC7Ex",
  "key25": "4VurVitukKvJ3A9o8Dpbjv6CdAEWmB7w2Wh4czJe9U18Lhh1c4gU233ghLFt1CovKdqzRmyDFH56xkYvrbYr11A9",
  "key26": "3hKZB7fuu81FSvfj48iPUKxLgN8qydDKwUrjQNziAyUEH5GbbXwwVbmkauvXbZCJ9v5Y1tMnQ3Z1XTcP3TDTRE5T",
  "key27": "3aj5PzLSfdYGH3Q4MypAs7kcKkNNKp9zZxy2cLJYFWv5fn4AiEDs7bwdpvwrE1cCMre9zMya8kM4F339yWoQCUwP",
  "key28": "58rQdGc2jgHyCeBzj7aiMbG4bSYcPcMMTRzvcpd7z9phRefLS63k6qGwAxTdZuYBen8i8bt2sbqZDLZMUsBQhDsF",
  "key29": "2mFbWQ51APTJEi5Xqw95t3DQBm6LvERo87z1ae8tWWR3SXQnTTJFGJ6oDiMs1c5rf1MYi9o8jpioYw9esfk5gY6G",
  "key30": "4ZHZsfzqYk2orbGDYWj2qGnY4bAnfz5bi7sTQ4VD7XKVHqG2UuB7m3RSA8Fdc9mSsGnnfuyKdexVRSdDjk534jBv",
  "key31": "3skWrFKE6Y9nduhkTiDr2nrAVBvQQ3C9v2kHCfsNrzDc4UMZJBjAMUsRzQ4zvkkabJoQ3jLZSf13EBtrstQUB4cf",
  "key32": "3akdFaPNdyjH6WRwBf77oMym18ERUqCuXMenXBD4UrG83ttnjGMb6NjfGTWPB8sQGRgGUq4A1VFrE9WAK9LipVVZ",
  "key33": "awB6rGepwrkAXHMiXohKjtXuQXTHTymizwNM6bcq3o6KZunFFYDyBzM1xyGk9ui6hu8D9G8UaKNLosVf9TPBsko",
  "key34": "4TkobSjVvnFNRArQZ7gNNeYttTtYf17Ev1KWJ6R5mGzbCUkHZRsM7BXGEKgehfs21vedREpQQUF195hpC2cFNvmy",
  "key35": "32nWYaCLBDA1RQkna8RQgWACY1Gn2kb3VDQtgmt58T2nZGcheEWN1xAETPCVord1Ldx3mCFc1jC7t2g8PECSiwgX",
  "key36": "3oZJHVRVBUDg68v6qMJVDTb1EX8xEirksmHUgdhyJZuLcDRMRz58WcPDV4RqBnEoruu4gcy8CmZ6krbbApkFSN2e",
  "key37": "4awNTnFH2QS8sowFLXQmpoWX1maqFbcJfH27p41Ha9YrpSEHgk53DYfFn8xg72oByX1whytPyeUFGUmPfNXUME6U",
  "key38": "BJpB65BJeW8ctXpLzSqJMjZGpAfM2tRRnKiUVYPEdgkKPXz2PKxA8Woy3r52v3UPHLsexn9mx8v5EMfhDdj12kP"
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
