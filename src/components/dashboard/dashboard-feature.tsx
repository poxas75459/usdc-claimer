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
    "SUCLWEEz25tihp7eUDZZkGMgD3SM4cgCi6Vdf1HY2NqFHudCjh2G3iGuJW8mGiRSuNgq2JVppAMAiEGHPw7JpWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QxEc8MZNF6oMmarp7FbsUTiPrnFdvfuVFaXdba14erX4fgbP6WGzCb6exz3NXgmwXZ13m5XDJkNwb8chUDRcBYq",
  "key1": "4FZvo5xt4szoyf1fVoTBko5Fjz7KvE8RqLtdn7wZy24AE5pK3qKxDSoE71UuD2yhYvvZKCvuZbCByAaCMFEGC5cV",
  "key2": "48FCCs2NugyCMhBs3bUoQSX5W71vopyu9mbcNvT9Sgf4UFQNwvJk8NFkB8EbGiySHHhBMSxCQVZqWG1nJAFGzdKP",
  "key3": "3f2gqdg4FudGKQf1qJrS3AzFnq1QB967WBPDsh61FDKrVLUQknyEPM9Tjs4dLxJdiMZTUANY2R5YU9mkepNHhtgm",
  "key4": "4jf1cK5yDxhKskQLCVZ3RUB83m5X5KVQztoQvUhC4Z4JyqCaLLjQNSXmPoBXddQ89vJL9yw9X8JPedpjv5gYFH1C",
  "key5": "4Fv1xoNgaEYmQkkGxYBTJ1w5fedKkPavVLREReuzYWAYtRKvBF6WLoyGnxiKQzuCnM8MobKJNa5K6sRebLTBFKzf",
  "key6": "32aMrSMYEwMu1NF62kRGje52k3gt2znNJ9yi8JtkCKEJnZQBVbwuGpCSTXZHF4m9JRbqDjxVEKsESGagsPkdaSya",
  "key7": "3hX51z33gXZmwAkRyVxmYgpHMrCj8iB4sv4yELtwiWVJEtWCUSENYDr3M2uBqKwNFnzXio2n864kWzKS7sFYi69E",
  "key8": "4jBjkJgWxSLXo33fpb48uSpkbPZYvtcoATDVnZSv4oS4ELqYq95yUHydeFoZfWFRs9ZhTYLqAG5Wmjv5xn8WPSJR",
  "key9": "5sgvtjWgzhyXeNcmTRpZ3PHc4b6SQHTWBQu2997aiZTD17fQq9eJCd78NQBPLH8KQhbykLRQJmjF4xDBjjjK83Ab",
  "key10": "3HHah9Kz9Y6FGWNNkAk2r4quLNUJUbDYJ3p7MM9pVSUSsvNoEvdUx47bLi6aEu3wBrbGeHEexT6YbR5UjDq5Swjq",
  "key11": "Z2Q9yhtnbJU4chnpd1oaPCdxKReiD7YMNUaXxRhdeBjvp5UkzX98pg5Ltb35Bq8FaKJhPJuBK2ngBHAVe8BF4za",
  "key12": "4A7uJ2ZKyfzAGqN7FAYEhhNLaueZC3JKerbFG5NXRRscnq96RZhD9oYFqzTqHyxKkKnEF5fV7rEcrW6QiiHVFRZB",
  "key13": "4JzRrjy7NKHVKswkt96i5gkJ9WSejpBQwnTZ19ujGhhsYTP7gPEC7Uxf8ssPeSakh3EmvUT2oGHfFrqe96hq3wC8",
  "key14": "2hdRKvWf3gkpR9gJy4LCzY4AGmGSaFVrwiW1c3Cq7UqcyVPkGM1VtbFi3oF3uUJUVBFqrT3Tn79adZYgHzo3XKVB",
  "key15": "2LpWKHuVsKMCfykZ8ELyuwv8HnGZxxN3cjGnjLXYQPPsg7U64A64LRWaJNHNy4NfkBRGwZRsgSDwYZa7GadNsitD",
  "key16": "3yfUvXmnE2Z2H7tJXPdASSZocNBMGVfgb2DH3vv3Qh1kTwwfHzp9ymsU4LBUYXaVixB8jqvvrf8VSMQgKjeJv6Ry",
  "key17": "27JWT9EJrULnMZiQn6fnAXFP4FNpMg8xcByAazhY8QTS8jgqumBVnkYjn8SANvpcC2BPm2CTXdqo96EDfTPYuH4L",
  "key18": "4FAzGiSAmWhn3hW1ZVTGbNxj3wzAruK1f957ZKUomjz95rsx538HrSPjvJBEUYBGsWCcwXGiKpmchSAjuAWkWuv5",
  "key19": "37ojiZP8zRBcLc4i4hp2PgC8qtQ9nrfWdfjFmDVincj65FFtBaEHB5LFGtMX34SovdEJFb5qpwdEbr6dxFjXs4YQ",
  "key20": "4X93TCxC1tbWB8ftFCh9uEBAdx5BTnk5h8NxzJLku2ZsjbVfZnzTQKdZvyg3S9NM6w82HQRUtNYLBY3DKHLqUv2m",
  "key21": "3jBgZK6RGTzF9Wi6h9fjD4uCdfyMvYijhbPAgUQWYuHu9d3kgFXUdZa6zegtRBD7zWaMrbXNx94Fm4LohhY5x78V",
  "key22": "muskozVGeUXktTwjsdtDiRVswUhUfB4gXys4ak3J6m2NoRbVDWR5U7JKzpWw1GH3XcECLVGhQGoL8YP47Jd7N6M",
  "key23": "4AVsmUV4YXHhjBXyfVwHY9s4Gwff4Bv1pojktsz2wwcqAZ4SGcB2KS1kVjGUJ27ezkN2oxdodFbw3ygWy6xmjPvZ",
  "key24": "5SrzrTWyKYktpff5Kb7asg1Fs5HTZVCtwFhQFW3oVCXw5CPqDAR6BBkjPZT1PmY1Jw6Xp8HtnhXWLq8CziEXmwRY",
  "key25": "5SRW3xJj3HPhVuQCaohGCKoz5eXZ6k3WizGoQhZRA96TJCMtKm9ckEb99bMjVaNtExASDFbSSZ8wE256WKgu2Kf7",
  "key26": "38Z1FA6B7jBfsXLErnYq9ED1EdoAWwsufUdEm8hVXMThpruibCqdFuBNwwwNBG4ar5Bzz4YW7joBn5vnyhvRkUv3",
  "key27": "4KELJo5pNQpqDvth1aeRf2hpymDF7WV2XCf5mfwFQqhcQFPqp4cfisMcSKFHUmW5vdV4cz2mzfgweQRDdDoW8qkd",
  "key28": "61BbwXXKTG7Ccf2JNBGJgx6QNNPiT7q3bSDXC2tAm8rYDmbQsgAi3Q1XwXiXtFP4FkSpfNsbakKQsrL9PZ67ExPa",
  "key29": "4gAW6WTpyKw72rwAzduJKUXxycd5JcnZVUck7e1AR397dsohPPbsBUrVynbHm9PfJtp754WdBdt4YyMqYQXeGRHN",
  "key30": "3avc6CDG1YEoNTJAK9pbRNwgUvit3tMfkP8GWuC9mGq4378L3bF5tiwC2yZXo4GXvhcFPCZznXBjAPThpSoP6pLZ",
  "key31": "2F4T7JBAkrzbrXjd5JhDLtQGZXbYb895MFJdYkBegdkJESQtgYyALVstme1Hvdf9NYeFF8z2EBuKmsqSwRyAEbjR",
  "key32": "3biRXMqipkPL7EwuXQAUU3Cvipfic6AP7uknSrrk7BXW4QqoWv4B6KGXP9hzWAyaDuqJ3KZ4b3TvsF2Mg1VgskQF",
  "key33": "3TfSz5qfBc1A8XPHcFRrzj4ARiYfo3E2mRVStJFy4diYs5q9ZvNkrpdt5925YjSXLuBZyduzDAG3uAjnH3vD3Pzo",
  "key34": "3R3cHxWA2xuB2AnMUfqjvitYwAvPqje5fJ9F3URbanQsmQHKstSguN3uNppGBCg9nKmVDXJ9yZ8n5qbxJUFVXW8w",
  "key35": "4fPAW5zsYqMVfqRD1VFkEeQXxUJ9WcC3JiX74djTtvYN3VNRs2BkYD6BbHwcFx7hcZf67YgmA2bN454ibd3M6JK3",
  "key36": "3oRAXMeW8upiuaZaRkQoM4JnsEicwEeqm8TCsPf3TZzhnj5o7wKZFexrJ1coKAp5DxGEMpRXpnbacneWk3vgEcKz",
  "key37": "38TM7WfMZRVtScKgoeqKHMkYJkWz2ixf9d35oEXpeY4ZZXJ2mL74Lr1ME5XGkN5Frid3EPbHBBvJfJTPLTxPUSZk",
  "key38": "2z3uysrYhAwvubDbNGUxrzRiut1zoV2pFha2G3jwrH9VfQyxKwguRFz8LK3HEvaLkyF15prPUAgY1r6roewd25K9",
  "key39": "3FEw7cD3B6iaeGcFvMivQm2yy7r9zowgonomHmR3fHwQdGQbKVXjQrqNBuYikR7EKHw9JQotNonSqzuV5dF4S5K9",
  "key40": "545L3HFULDxui2KRKRFKFgGSGX93jk63CAE41DFfVuPKrn1kt3Qzs8AcQSANUkV9rKbjJWmNJ5Q3fj7UaRxe93tF",
  "key41": "4HPCJwpczzCgJwgog9FJo3gcGhVfU9HWcYhdz3U6im25H9H5kTRxzvJXzykJ4hoiU7jKPbxfZeN7nKPQkAqxZfBL",
  "key42": "2cYFbr9kkCB6EPxYHFkXRLqsYv3KmZnacVBAJgpqkkzLnTtqda2zsoY3hsGfB5hoQpNk5QPtZX3RMefjmqqszXxq",
  "key43": "3X1LJimVpRKt9t8vpUiHHRaEbZYneKGGhHNwKMn1fNWbLqqxocMjgGTa3pb6q9doLH3E7BJSMeTPych4mzthiG3v"
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
