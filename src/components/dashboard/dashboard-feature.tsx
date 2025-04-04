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
    "5ZAUzRL5dcLtzTs7VNy7uEwJGcvCBaWPqUmMvAzRPyNqHzSeEffHEp2S3AdHAS7ddTuhjfnnb7sEZmLerhruxLSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MwaHt3cMTFrAMhUJ3T6WM9G7anzSX7bDtZKx3u1F4mqxfL1yZQ3ajSFS1G3mCLRUwPzrKXF3xzLh5mKgGSwuvGc",
  "key1": "3Ekw4Q7iXJVwgqSmFcY7ZuiKbzHQtanyqWFeqnGYA4e4KCF6ko8ruozptNjLi6tt2Ep41dDW5XHP2J5cSW9Uy3AZ",
  "key2": "5LmXvvj313TJmMQwjPvWFs2C5k4WZCTtsB6xqJQxwfjWpCQqPzAhos1AaZJeKa9f1VoF7axQFvnXKujbvjdEGDCV",
  "key3": "5BXHKcHHXNzuV82VtK9N86ktUx6v3UZ6kbpg7x1iDgQDdFS8bxnWeVdM4WLE4UVepzrN5HVWCU1bcKAWPDNhBvrD",
  "key4": "5G6bAw1K8rjmWuPkYjbPdD2TBB3TmH5FhDBL9KpoJuzMeYjBxCEscVuY5d9bzvB5vw97B9PE7mASVPiPDiUSgXBd",
  "key5": "37swtE7iw1zhXJTJGqhWVbfNRiyqq492EfuQtAAQEGWNWUjicKEcCdLbp6MPaCUdg6D4cBPdY4f6wSJcfjBYPi8M",
  "key6": "4kKXU9FtAPCBpwMfMXEA4Pk1T6ktEkqrqvH3rUE1JTJD8TPSTMLLvKaCctP3PJ7SLxvacUFSRTmMA2zqAqjRYgfs",
  "key7": "35sXDDrgdM79hVhnNFFgq9neAwvCiCJQYrsCgj8wGCv8xAJBgJ8ngxk2vZFsUQZyGnETV6Qz1J77XhCuvAAVq6RG",
  "key8": "611QrT4cd9zTG7ykkm7cZwQuxVfEehM3tBj3ApBTFzU3RVWNJqo1Ho3HfGPGcpgJMsg1sCTvVkCmouJqf7SJBdqd",
  "key9": "5TRvGKTYHLoUqgvsMyRva3kfHnjhkEK7h8KviudQrLMC6qwEg8ruaRxRRriYRuGAe3GrqYp9DdsUSdEcnCSKnGWY",
  "key10": "4qevX3ZPevdEXKVmAibjFMnpNteHEr9cGHRjBmZ7pFgGAvTotUdJG4CWUqg9hLhmkr2tiJiWNgJoFsUVRomZaucv",
  "key11": "267jc7CEJAT54JfMyUZVNHUrsmgchtQwodueLdoenGvf6mG1yj7fzfHicWQxTL4792TnALi9ykgtr1QeNdVK4WPV",
  "key12": "3pbZz5MYeUqSsFDiwkUjCBCgwFH2tAKPpNermEYMd8WsoyY9CMG9W1FjvEz9GcJANavKCby37F26P6bN97y2tr4g",
  "key13": "3gFi6RyQwE83p6tDUYPXR3QsMFkS7hkNW6Dp7R2NGCEurxnPEAnBY8DGMm7JVC7EvteHHKvsMM6RUMRmMerA7C9T",
  "key14": "y2guua5q9kGeHrYGQdUhb9zcP4rdVDL9iogK8h658myqjyhhRHQfJbzk2m5jatEvCQo3GDQAiVYwLSkwPKYTQnv",
  "key15": "64TwYCbPL4H4SVLzT4PZWAs8tQmd6gycuEGTcwMMVHFMtVHAiHUvd9vWqqB64i8jHHrt8odDR7DwGG9WNtFE314b",
  "key16": "vuf6FStZmUrhjb8XSLo4yyYsZhMGSn43KZd7xhEwb8RzPu87wzjeeeGkepnZAiVkEgmRWJxpVoDvxHamWmyW55T",
  "key17": "XVQEqeY6UVLtMPUihW1Ciyo4pr6cgEzK84RFzrGs6gM3mfjiXWj4jUQgtqNwUZx9rf6zZfsmNMUMbbjd8fro4Ky",
  "key18": "4WkvxCUQvkVGX3aUdkU712q9sfsN8a2L8kQMFUWQTUw9UnQ1FFtmoNmMcf3h63VJKu2XbaVoiZ2gAvXFSs1se3jN",
  "key19": "3BZxn9raxkDzikge1X7MxdR5EM6Cbz9cHE6r9r68SZg5aqKjLS7CMkYvWz2TuAYczDeWvMSr7kzqhzuiqSxtjXhg",
  "key20": "5qULQiDZZCJMKiXwR8szxXLWQsit53CGkz3H1SYYR4JTiPdRphZS33X359eaBKWwdGbNpEgpSYpQr2MLAwQTNJAs",
  "key21": "5vf5W92YBBZLxBdudc8NvAnw7b1wTkYGMMw19ceWR5vRbaciV2wPUcvZwM3AUu7KqSdKJFpReNd1kmQX2UXPENkP",
  "key22": "5vKvhQPDLBwVgTuyFCb6cLAUvsatBgcTW9Ezo42YQAuKe4Y9YyttkXhcw7hPup2qandRNNLuUgj8aHN9oe8zLvWe",
  "key23": "2Z2PnFfFT2zvCm4k443L6T9JBfkPJakCjh3BVqEK9Jc6RveuL8xt1xxYxGvcGCMKi9PC7gZKw6XHuWGqaapMVkQ",
  "key24": "5GjHa9eMVH2C6nXWEvy2Ye8ePSjHWFytEXgdVgA7ff9s1hkJXZWDTXKk5oXms5CZpArs3eTtNfranaAQCDNhW4xd",
  "key25": "2397hr12XtrEjM6ydw9WTPpQc4URZi9ss3u9dsMLLhrPQP2qHmo4Q7JwBEiuumCK7xJaXHhzmno2R17zJFqM8zMp",
  "key26": "2bfVKuWoLwspDf2s6GfqjNw8ZCNYaP3aqUG2K6d556BGMvMcRz7U9u7DzHEPkGxwa9fntehe4E3twC8GidnT1Ey6",
  "key27": "5hE5ogNYjPRQqBJPhQQRTs5CqH1j5bV7YnHhRLEMLZjzddYCPTUQMry8fSBdL4Zz3cLLzU2bF5azdJx7yAiaYwJW",
  "key28": "2LycxtNrWNSQPeL1nMMJSm63KKJfbPGzN2QVHx6H3V34Mfbrjajdba38URuQJtS3hGRt1qvYQodewahApoXSqTr3",
  "key29": "4S2fPyJe1awmFR3vbMfC652vWZDDVRQ9iVc1DQr6yt1WudYswkhyBPrTbQLdhL53gab19KpNj8hKwE8uUhK4fAQT",
  "key30": "3DV7nPrXdMvW4fVNF9ideJEZb5NMcnNpgtfjavXFTgsd1U5fQxzuTnHjj7JDCgJHxz1rNk5bxh4m9t8jX5a2angy",
  "key31": "5qrGo6k4GLPs7zBs3jvW3Pz9npw8CBhX53skV993fQogobmgAAR2QBUDM36nXpCZKbYXKWZFJfmEaRS9zc9iMbrx",
  "key32": "4WsaYTgw125KDzxKQGnYpNGZwNGwhApJqXfE5TSs91iZurY52FY57qksuwXdBAHX2zWfpqRtqmhgCXH2wZhvuf16",
  "key33": "4Wuqe4Gh2jB63eNVtRHefKbswhmckSQpn5iYm1r114vVHKC4weC9gQjcKf6CqiD4NLt1GsH58RoKo4UeydM9V3eq"
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
