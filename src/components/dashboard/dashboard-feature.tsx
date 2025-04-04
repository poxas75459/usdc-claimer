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
    "5xRV7VYHMof1tqxFu6oStgweHvkpLiuZrMQ3mqjidap55ZCAqGGe24AQZG5UWU3c2QRU2qz4fCQda821s5YPvq82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XAyzsEbQkTNgQC2Jw65xhSfQ3m2SbYshQxQdTuETUCUD17fPdSVmpaXxnQzUQej9BVX2bHmm2vwBkwkPaLH9kRA",
  "key1": "TJt6C4WKp6cB3tJyd5Rh88Z4ibiBG73Lb2wRohCshowwEvv1nEwM3Z4jUh7Aw2QhsrGb17ATWcMc1pLehQ1zfKc",
  "key2": "51qrii73Q8NREiSGHdyVJive9kuJ6sEHfLPfP99r6bjkzmWam39mw7qvrmJBLCp8d4WiALRk4nkuHFNADuf86eea",
  "key3": "CXR1q8dEUqU4xKJxvdPods9QtDSXfrXmm8Y9jYVJCUDg91Ra8LuwDFX7wjJsbyNygpyPQKqL3MJWKJaShrEwGNc",
  "key4": "5rYTAviq1Q6phPS64uZDfiB9JwEpFTSWq3e6YdkccWvzVX18a1M8pLXGWmAbJ4FaRVARMrF53xL5gbsctUqCupsd",
  "key5": "2PypbXvc3FH5BNzpG6G9vt1rbpYiCYoVKhCgj2ZG7BQwWhe2AQGs8imuShRGdaRwn1AAodg4Rwc5nr4Y7eNtYKcA",
  "key6": "3Afv9jbYpHZ52QZrWpcHCzYr8zVbXa77n59rh7cMkHAnLrYepPYzArK8BFqRvkCnAUdMe8FuR5UWhocb7ZVHHY7d",
  "key7": "5rQ5dj5SL3wicwiJgHk2xYHP3smt8uUrdr73uiYbvi5hPYoKSUtGAzBaFhyLnzA9DUE63FkXNdgt69VptVaEgWHM",
  "key8": "5dXoPeGrjCx2JaSCHYzbNE91KxzrL8F83dkJj3nNFc19D8FmuAVssPZWFE4cfgCrAXVoPj4zneVMKqRTXuvZVyTF",
  "key9": "efX7ne2aFenJ7hgFXUX8nVtb6mkNLPXsNJLxuqJNGm1KE3NtoJPMy9JC2JcPZjxWFUBvJb94CUrikS8ynLF5fMx",
  "key10": "4YJrSyH2FXHL1K5g9LVq1wDXbjTssKCJ8KHbHeJhPiJtLAXNeoUX7ZHe2euTuFD9HTraH5Vkov7MwfUBYvXuuc1U",
  "key11": "5yveNvMwL9sSGFdTua6wrkAG6udoSCXSVxrdjJigUXuFQLX3JgSNWEH6ZuMHAby6DoTrekJC2AkDSaroZCBUMHbc",
  "key12": "2M9TejhrhzYv1ZM7fBMSh37HSe6yTnuWLZWbgLoGtfdvcBNJ1gKPTXTxBZzuDan2PxYYWE9T88L8jzSv5857HoYg",
  "key13": "5YVzsgdGvU9wHMRNHA9sBZdbBGXXWWwUHVy5uYqGSivftHFY2jTns9nNEzmcebJu7FUjPvyVbmCnjPJn1nFT8Bev",
  "key14": "2Dj7n3y6cXHyoZkyPt9sgwnuPgLepMmMTzQzyHfd7NmVYHcRDjUbaqxTRyanndbNdvoE8R5hFDvuTBjfK19hogUg",
  "key15": "2xLE3Z6asziL1WyuFDorksPdFuXxpR4Cw6BBLvh5Azqyve5hhZiNEjd2ZKuxvrojqaDT2u7RqKuTi36JPVXroNoN",
  "key16": "5zvpfFKpvkomA4fZ7cGUXcu6ty4FEzLUXoujSUbqKCqgbT4Yq9FqARcP3WvSG8PRkuUnSxMt8EJ98uYLpxHAymA1",
  "key17": "3XrrQFxFsN2upjAtX2mwnaTdocTt6mtPmV8JV8nWf5n3yM3BraPoPsSUPt2MUtCeaw5Q13LbsFbfgeR4dyh9gLzG",
  "key18": "129SppeuPMzPaqQCX59egUj2gUFGY246GCrA5d7rzZgvF37Pei6kh5BrS42sshdWxTGSN8kZ77FVK5kTdowUU26V",
  "key19": "52khWuNdxGfUBR5N8ShcEbgJGZo4VWsaAC7rm2Qq1kQruhci9pWjghravvVoZ5D4tdsS2vWoNsoZ3FgWLo3NY4Xw",
  "key20": "27Lrt2k8eZ1VtHa46V9gNVp1TYYCZp6vqiNLs2VKDpJrC2YoxfxZd9Mpy25DsuKU5U7UBKm8Sto2xoSW2Y1MRR11",
  "key21": "5bJzVuovj4pAgFyU6XRky5sPPupa4TxnGj4u5JC8VpXdQFYauaPJPZvHVBwpQPmB2bJ7mbcheJjop5WBsfJf3Us7",
  "key22": "4GpKJoHKT75MrRX6zhEnyMoMnrN9CuJhh84DXDvkHaKLQjkuLSyB6pxjykHb36otNQwUS9Pezu37WMDuPMQnpmXf",
  "key23": "oAqSXZDjhEExH4fxhCHt418wZnHsdqNJJJSSCqdVXnFA1HJB1mFyvxL6GyuorpPxnTtS7UhJyru91YQLx3Ssbya",
  "key24": "5kf7cEhUZFxMKr8gcVLbHLkXqvTSf7XgkUCFy6kcfoj85FHyr2GqBUZjT2fLNgfbNgkwotfo3cME2k6rA7kLrqju",
  "key25": "3JTET8qgFAX5AAjnwhu1q3JvgVYyKxtkrAQBYZ9h6KWWyJ1KJctszLLvAnUzpnMP5qJe7dCEtbtiETzLieNwtffu",
  "key26": "3WqZxcC5P6XKwK5bkU6k1RunYRtHSQJGvMKYhR8mGZbBv6e3HyzXe44mPW8igtk5bF8FYi3Q453vADVFicLZ9NoE",
  "key27": "3SWaRhueLYAPPNDGu1ushzv5Qr27Yj2RZs6iPMcGSGoqLuMMV1KPuAwgYKBWGuprm4ee4XpcH6Rpen6gThbPsAXG",
  "key28": "4kF3Q312vbBcAKW2isRip4mf8ygYpgYW1NCKdGpa9whM7pJ9kNyrf9JgSHbRPRrrhYmbiHjYdXbJakNMzzVWZrq5",
  "key29": "39AAxP2GpFup713yiQYyxYy7ou9P1NKj2duszPKeUu3Tbpwsvwjr62xnPq4HvxGUe6HkCRVNF53ahnznyKJEY7LN",
  "key30": "3KEhiAUn6KS734TTXR9DGCmyo3uftQCz7dtga4Hoy2WiDtbdq5rR2s8xbY5v4TusqNM3JpwPsY4nufVYQnjw9em5"
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
