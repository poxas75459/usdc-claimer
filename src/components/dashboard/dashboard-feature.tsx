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
    "4zk2438JxEijqCnn1oKkhwdLbL5KHPUjm5Rmd1MUnfwMqpwvkMqJzU937SgHk4SVvZGE7guWj4nB3V5JMCKMrhNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62AqGn7hMmNusmfEdbFk34ELeFMRLHu7QjxwWgJCCC5V99iD6YDio9ny2afFydyADm6u6Gzf6nHAiUpHoqyWgtt9",
  "key1": "3MpNdZ7hNSXUyFZ1UkFSWuw7MvdGZMxFVuiJ1nrfZmnKaCJKd9Qdv1k7cD4kXMVSPGy4zwYVGu4ANZSWA14GUy5X",
  "key2": "VPBcHJxXMBF1XJNuC3B5TdB3FMXkKhqexyvLMa2ULYnvPysKwNb8AFJSqN9qqmaCFfjoacs6uYqDFxCRDNNhgq3",
  "key3": "3uX5PkALmvjoigPjtYFUPQWnvjaTLFGC6AcTo7ZSwon4YytYsgh5zcMmnjhEJJBbg932TeVqtwp1Zx8eht28WmPa",
  "key4": "VCFL2NjUPM1EXp3UymSb6URLVaaxg5aT9Vpd4Ak3aZ91BCBa2RbbnYiTwRgNqJ8uMzEfYFHKjpec2NpJaQsHrBe",
  "key5": "3MgdHkenSaLEcy8fv2PjV52k61g1BtRqkgWoyEfzG2ZzCP2YN8raTxqh1tPGCvfKppq5YXaDFurFRWdrECWcW3d1",
  "key6": "2MvPsxoJDBjiR1n9fgnHsLXgnmciF2Fj2qM4wci7wvcccTJi8c5VeGRhoScxR4bRvkDgLLVYz96HdJuoqL13NyzG",
  "key7": "5NN99wRxzPhbbi5udsApu9v9SvJHB1zLBcR2uB8h8pCQ9PM36Ndh7LmmNagiqxD6UGSfUCYEeBepP42haX6tH2JJ",
  "key8": "5KgoowNgYjEtajkertuteS6PYBmBd1uJ99yzgavremBsbhE34GNmNdNcYcSzTSe4TjTj17X66bjF2ba7KGYqtezh",
  "key9": "4JiP4N7VN4Eda1P2eTjT8EYwFt9EcFv9zYz8PwxW9HmxBVZTM1R6goiofWPvBYpbvvH1PxkBefKFUPYWqpDR4buV",
  "key10": "4F26cbeTMTh2MXS4jQYdMj97XWB1b5794hAqfxYUgfiUck9EnFYv8Vr5qbpP2n3ick2XvokxDirVWLwLwJAjJTQE",
  "key11": "4fLz7ar39xk6FcA5zSLQjYVGk6nyCAxuFgUTuyQpV1gAFmYasnpondHMWzr9C2fEsHMMHRaJVVRdyYNZX8MX2cBe",
  "key12": "3ycrqxChwQQwfDXNTu39Y9sKj8r6Zu8P5RmEDaqivHJZGcTg5A6DkqitRq9aEeAiJUwWiCng8x3kfV9MpFuzkbeN",
  "key13": "4yv2KyjDitqdGHb6tvaaYSn1H48Z9gnwCg4eGxJuTv8teFAPe2wPq7kiNzC2Q18oULdJyUG1AH41EZFYPuysAPhV",
  "key14": "5XGS7kbYrWhCGL8CSyvcJM6h7wkYmvoQDgri9sWEZueAEUMyqMy5UCUr5utNawdgbUq7Mhf28hkDxwpksuQSZ6Xw",
  "key15": "23JvdZcFcYmJZLq4oHqffixg8fYiypLwY9G6BmQhP1kXocXKPwx5TdGZE5YHXdvx6ub1y5wnY7RTAB8QnhD9gZnw",
  "key16": "XJJjqBFLUBbWkah1HUoq43EH6V9MrbuUjvFR1hpLZ5mcmRhtQjqNoCWkx7S98Q47YYdJgkKdBNRGCYuV3oSwPCq",
  "key17": "4BgqGNXdUxFm7TtECeSuxFU9ZBNiWmKTnsqNreakbp9rbCTs1K5noxjCpe7i4NW8GNFpzVuCB1zHeSZFSc2B1Egz",
  "key18": "5ppsJThrKK38iViTTjiAYyvRNX4v7qH2pZF4Udr9EYAG4k59YjQQdH45BYVRUHq8B1BAecsbWchmp3YdRC3Wgguf",
  "key19": "4v4p4zMfwifsy71g3ZxzQHqatdETyzTuDBZHX9jVV2Se2mpgchp5Y2fvrk75HETweH9n5KP8EM7anXcoTezHB1jG",
  "key20": "5bmZdMoty7GF2WCDDdRhBBJG6Do7HpzwgND4fLLnV112Lk8TKmADVTzGx81EvzAmHUWcESAMETEVn6kpbLhcGq18",
  "key21": "5N7Y3yvJYof4RmaZmo9ipNY5v6G3kCiuZNhMexjtvg6zkC7HnwzTQqxaPYCVantzoUjAbxDyXCqW9tLZQxh832vu",
  "key22": "2QyQ1EsBnn8cqpJxFC3aQySnFEVQja7tx5489d9yYxjWxCz4Ho2yVgpB1Dx5SVawvchzr1qTv7htbmThd3RvpVHj",
  "key23": "5y6FyfGDvKxdJ8vCiBSTHSJRYWpM7aryVGP7Rx5eyJtqugvX7uRuYJqMF51z3o7TShp2DHTUJkKfM7ncAQ9FJGPH",
  "key24": "9NpccJu9s1rc89U1Zt5q6xhS7rkNjTfZ3vErgdRG9AeXzPUoMCJGWWsUCZ8wGF2f4EiP818iadpBTjraxEiQrfX",
  "key25": "NQwLFZpuNiVocmf61oPRJsvXcqMyGUV9Q9oXsrx4SshJ4Nv4JwACx6FEov5qRcQX9KR4oLevFq814Su55Mksrds",
  "key26": "5enNxgRxt1AgcGj2iVe5ExTX36Gn65WSXmT2QZ9ks6Tvwhpq5GsxjZZ2cr1cWbwbcZeMRQuBXsY6i9SeCe6nWFuH",
  "key27": "4VHAAK2H41kmUksU1a31dfeRKukHpdK86AKuPt5oDYpKCNXnACndLmcpvXjutnRgVWj59hsyxSN14minTNpyoXaN",
  "key28": "4GAA8KXLwtuxrfJzkvofjmfYPjpJRF6DFEvuNpedE7An6TFS9ugTPhJbD3gwhYDoz7SgbpuhTuV7J5VeKtp9XA9c",
  "key29": "4u8eCfj4xsnojiwNububCM88e14JcnurJuk7ueUNahncLGJXuQVv5ZZCvEfhVjxRWSuurn8jmfheXZn1XifMWxLi",
  "key30": "4EoPxh4kTyT8u4EFpHJCoWnkmadNDqor3PH8yjy7JQDFM4S9g6J9SjqhTVeVcvDKt6vdx5iviW3aTLGreUAu3uQJ"
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
