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
    "4WgHmLNtx9GjcQ5CENkARZPQK5wY2i4a7hza7GsjNtpMtJQYVrhpXK8PNBCKeKKKemxYBo2CFW82TmxoPLuJ55Fw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pSbSb4jKw5g1scdEe8LCXuT1vGfYDhWGHRRhdAEMXV6sY6AH46AL7B6y5WxwKvbXCisCtbspAecQEvURqAFfXZ5",
  "key1": "66F9665JQ3KPudHwMRDnz5ayAtmnQfL7MnD8NV7FQX6X4UwtRxbizDwJV5qZid8bNuumYKPYCxcbmoxWHHJK5owC",
  "key2": "3Zi3BhDfwiMi29bouK9KDq4SH1QHT7BYrFGsX9onNABWq2nEATLR5749pjkprZTyUoaVHKPZrmHoWfmQfFJX2kq2",
  "key3": "4DdmoiCCWYoXdXi359275setsbQrRBqVL2cbbb7kxzgbakGioWcuWq6dpLWLq9tC8TdGxNzb3w6tQ1k9ML8a6J9a",
  "key4": "5gPRMNaiyxXAm2mS4fxCsYyysUmmtnRAXJ7ibW5uGst4vtuqELnHEnW65uXFC1cxH2wFGWyyaDoToupFLvqvRvfW",
  "key5": "5UB4ERtUPnnqczovRctK7uHW3YtXHR1YYu8ZwFt3AaeeftN5LRzGN6WawEyPWq4CQ11gdiNTw8ZU5ioh76CuCv1a",
  "key6": "2FZjXAdwJpPZHCamajKuqWJ3h5UQJwRDSxYv9YQgGoQE8nn9eJzEjjcb48aZrohFSqRgERNuP5FCiG6F72pM37u9",
  "key7": "5v1biAZ5D6hrMfyKu5BGqDHf9QUwjWvR6qG6yoQu68UV94gkC19AdxhfGnHDyZSoakyMcxSkxjTXuC57MnxkNuYP",
  "key8": "4uHmmKhx8gX5gqeKznJnKFufXnJmyTWXbB6Fnz9DyCMG7jbFtygDxn7p1k4o6WvtduQamD9QjFv1s1iDPMaAXEzW",
  "key9": "mnYU59oZiBCfMb32iohG6PNuCUM1pWgRUo3BRehYEKptvu5P6f2CorJqtLSYGaAokcjP1WpSs8aebxMv9xFKYth",
  "key10": "CvTydCMJLWUjepjFoQ1UmbohE7weMMY3XKhpsgTLnBvvCrHdEmx93ijC6DrQJ7BRz3Wsod89TK9SU2Vb9Kwq3YK",
  "key11": "4HCXWimSf4TZfU9k81mzbd7hPx8MQQKD3xs3okTkN2a3ue3j5zXNEKmdxXVRkqrSwZy5Yi337eqTStKsZmdCMaBp",
  "key12": "3ucfkwufUtmNSWqXEzfXQtdKCtFFWzus3oKX1QMt1iHvciS1kuff6Uwyx1UZrW67BJnnHYyCaHCh6LKNH8oFjquD",
  "key13": "3v1b1v9iTsaLvzTR2RyiG6hx33iT7wbvL6Qdx62idRKu3skRdo6Dc3xFcDJf96yhRdR4Fy3isW6yqFsmHhCSTZRe",
  "key14": "6ZjD46veazntjxUnLu4m6LgzLUSJhrNH2kwaZ9nLjgVFEiRwSM9AZsE6vQEA1omZfBQDGRvN1XozPTx671vXMLP",
  "key15": "4rjbZUEQg4UPwYtkVyhTCYn61p5YJ5zRgVUqyVtnbYqDNyobrDTnmJ1kDMk7Qn4yFDuKvfVi1oiZAeiAoxSFaRYP",
  "key16": "oh5692YB8Lfj2MFYJ9fcmLUStjTGjUnTBpezg5RAiEJ2Rz8Xeu2UXygtvtLnXSdzDqWXzKkECHQYoKmNhbDExZB",
  "key17": "3bUhJWwoypouSKv8nmvxw3ua8wT9AQYNzhUjChnDWie2HuBwGX4im5oYXvpvHK8zLzTDSiakvtgDoandUfZLTmrK",
  "key18": "4hEjc7LLmSjxvMM4k7Bo66N2iYwPg14bXgyAp9iZuwZ4DbNQ2t26DNoxSZk5xTXjSUohLFQb779LRWKhaW8Q3YU2",
  "key19": "48Ja3T9S9hJni3ECwYTbWiEbvgqUdCTSr6gkim8Ec8CkUXqjSvUzoBxHkXhs6ZCHp78d1U1y1XKxGDyXZEKn18Bf",
  "key20": "5g6cQtqu7R8BBKLeUbYN9SCk9zndxUh8YXnGt2kCm7MpC84GrXjeYfkZdkBSquvG4aHffc689pKsgQNMAahnxaHA",
  "key21": "5kA74h37UFE8oKNp3mjYyGTjM5dMZZr3PSuN1RAitbEoPpr2E6RVyzjkQW663rUMeMyWwoaE1YdJwoHNrJ8HR3iN",
  "key22": "2NLcUq6e8UW2NFP5m5VZMj7Bavv3Jor61PVcGWba9PNxUomcm1BsgjttvvV9Wrdi3uK8Gd5xzZsKSc2XyhdLzYx1",
  "key23": "5ySY8qib1nKgsNbUoyeegnsmHDFgWnobBGC1h3zGYS7RyaKxhzbCe4pRwV3VFAyUYDMzpkgJkGU7pQL71VXyYkgR",
  "key24": "5G6CkAEFT5H7sUxrnvQEenx1BZTKJV8sJXGK84SXhZDVxRQbYSh1mBWv93j2tSYFg3qx1viQTJvbpZA6z1eyL5xm",
  "key25": "4HEyTTJUCP6xPiZZdQAF7Je3Q9kKQ4P18tW1uhZEVCzEAAd6Z4x7J3CNSGbkduNdWEquqpCb1gzz6giVbFmWZtVg",
  "key26": "kaEqmtv5pQ1uTryFsU9MTMqRofWXnhQuD1eVss4aAAHcMW43uMCZPnHgvaqnjz6t92CdFwDWBYFa8c3yXq7LGPu",
  "key27": "65GjpG4dWjNHZsJy96xCpuHih8qwrqL8YJnst4HGzQUK3Uk1BYmdNYtRbKLMpKMvKQc442jPmzWxWUC6XNnP5kVK",
  "key28": "jhVG7aEtrCDGDtJw36jRsMLwtJERSs3UoQrXJ1iXcVwpdsmq8q4f82b1fpG8qRDNgpDhpXe3U7Fq5NR4J39Ppvy",
  "key29": "2KUyKthyd9UFaU6HYDUkVDdhXTNBqQbgd8mfaEEyuFr6cpjZh6sK59yX1mAeEjpp4e72nGNu1DvBwWaNGcnjGZcd",
  "key30": "rehdPeQ2UrFuQSaNGrbswytpHqy3MMzavXpYzLpEcARjqBY2tmJQCW7i5xuWUmNKZR62EikmLDm8dvtRLsVRdLs"
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
