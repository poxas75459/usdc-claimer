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
    "2YDTRXPLUJ11BPQ5uKm8xzECzgfQ8U5X3fNMppUaGmNHsmmJ4QREnqkPrCMbbATLSzYNhgmGfLa6ysDJsFv6rzjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BrV88sus72hMMn7MFW5GFghJUFGkdofiMcgZPBHvoDBgh5KSpNDnfSj4pS7SAgbbd1bJvo244uuCKmDzjfxESEM",
  "key1": "36ycRaNxgCjVeYDnpgg8rWi5xpyt44jnLtGvLPNVQ66bSjN6AFzQKdnNsYRcjYFcFEKCKaEAwEkAxhDdbDfmUtJC",
  "key2": "4FRZjph8PiNcuCsGRSzATcVXdfgcsAsUsw2zeLHqzHSMigwUTwqabhkMUkxDkzpJmssETyCRPbwtvTtsWq6c4Mqn",
  "key3": "LEZf3hsfgqGhA888wqpCRrZn1im3M4Q6ZKY4kNjYrqSfapZcLtgBtDc4qiY516muurBWcjuEdRzD62s8R1U5BUf",
  "key4": "2QsLShVGu4NQbFXKTzC6MVhtyB5EbAfcp4SCm4QBCoy4gETfEKB5CYMtDAxCYKWZH9Ku7WGjhEP1zpw49G5A5vyp",
  "key5": "4f8iC9dbyczQoGdU64XwVr1kBuippECTYnLUnfe11fDcBVCDasbHVSWnwPnnQKbatozmpX2vZ23e6ymuErj8bGVy",
  "key6": "2txRDFZkVNzH9daYXEud4E31QBSU9oXs5MMTeGNrQW3JCntin59bsz6v88wBSDaLJvCD9VHghYLKYsAZw9AGDZDR",
  "key7": "2UgazkaYtRwQuJkLFiBh5ozRDxpqv1XJiH9AvBhiZf8xVxioNWkHp5EaePkmCHQuzrw1WwtLGmxm2PXdkciKyj9d",
  "key8": "4dXk8onpkm7tCpNHsj83gZQ7hF7sHEBfrTPxCAX6tVAw3sq92w62UXnhLgFXCuKRpPQQEhzGNYQBWJucV1SgHm6b",
  "key9": "mV54ztbf78MeEA9WK83bPKHejRvUehTJhiLpUER3rgxmhYGqwhTPhcRaEim7j5M8xSveYMBcXztVzrhjYB1ZAbN",
  "key10": "2FNsYBeFoG9z2GfyVra6exLmaZ6zLh4gSpsmgzNBtafVs3SVjiEMW6iGHEs9vRhjdLqhFDZ9DGopbT3hLn8Ps6pD",
  "key11": "RfK61FSaaWX5SAo399qsJiZAhyim3QQXFSY7iaESJmYJ3zqJwjwPS7FybYHUAS1uiRAUGmsHKdn4sq5ceNWA7HF",
  "key12": "4ioAY2uhuqFh9c5EPuaBPGxzayLgpFT6STgvz7QEEpVMHBp6gEJe18yLF6ty7Uk1CBHMxLroytGW1dZrXoGVrG42",
  "key13": "5XtQys6zkYHbx7jUuEKfuuzDE6e2v8LT82mvifGxVUoBJDKKWkVdu64VzH9snk1K8LW7DHcFEKx6LwCBoJgX775u",
  "key14": "5LamHEhXd2LHwVG2bXueDfhA9s77Y4n5ECzMe8kkFU5dCF3edLYYyZDtuuH6Mp3fWFgb4YFLXtpxseGAFx8ukMwD",
  "key15": "3AjRV5bE8A7fmSjmdkC4MDRKsn6ZPSjvqCCKdg2TrZPzsUhdkTpBZQXro5oaREnW3VWxHJZzRGLeswa6P4ak6qdC",
  "key16": "4ZNnXv1JngnRT8uCPJMK6ome2YAbjp477Woq3938VTuhQCWkMUncMAse3899nusgG75e5M2feiCojHtiXCessUij",
  "key17": "sU8hQezNTDzc8gtNmGSr226NNutxuCk7Dd4UpKgwDG4smNusciac19aUkg3thC9wjwGK9ejsDXVv598fFDQRrDh",
  "key18": "xA1WLLmzpjqzzEGUQhqS34ofvPmQnkoTprTa8c5dEzTvsLndqo1yveSf2BfpB6JPu2twGqUbAMrtJuhqnJKXPgE",
  "key19": "Cx1dr84V6uKzzPtoBmKDSGagmoTLsKnb7JYjubqiczpMt7BeWVWf34tAYC2ZkzzxQhgY4svXepeq5L7X8YLhQhg",
  "key20": "4hb5AY81twospcE9ru57xJQCDm5wMkTUATLyJYZ6SjbMAr56JHpkiXTPi1Fozne5hRRusTGcmV7PfQmtUxGFKjJ8",
  "key21": "32WHGa2NjzG52Zq9MqU79LS6zyzTaHwjvWTXTZ2KSKrtAMiPWv67vXjZ5KwBNVBkLYtK4Ms9Dvw2pUSs1zWzkfMz",
  "key22": "64hL248TZy6SAigoFEpWTP95fwBB7K8aiWRS3ntR5XxZ7ZGsiKYeWFHXiTBUKDc8u7zcBnBtSV4WdhHdvKioqShQ",
  "key23": "63MFrLFYiKXNFUZ56ATA35ZrCTn7CuvKiQ3ZxC9AdYmex6XRBX7vaiEFCyTD7LVXkkJd8W2UsUjHee7PKzujA2oe",
  "key24": "5r5xjMhD3CzGmg9YvEg4FDS9mbtCBoBbaChRwGThUqjPLMn2A92yCv8PoFH6D4yNBd4XZcfSQHJkCDRhCdiYvhMY",
  "key25": "xxvZF6J8uUhM7xdFHmMceCDSseqMymuKzZPsoaxPMbYq7pQ52ZkFYVh3rYa3qifGN791LeaCUnAyQt16r1H4Phg",
  "key26": "5iJEuH2Wtmub7DWgRpxSPadfq9ANMD9EXhE5f3rXAHcXbzuuW7o1HCP5tj7VvmFtnM9hQvoBJ4x6PYj8J9buuWU5",
  "key27": "2QrsP39qEwewGv38d57f3KVSf9vfwtyuHX9aGXNQw1ThzN5neUzgtu1HdMwNFzHqWP5rq6fx2rqHLxnM4AxPNVAf",
  "key28": "2DHFwayt6o4TvKWYaNDmArgn3jgKPRyyXEdUK6xZaMLLahitDWGfbZb6NE7qYkCCvwoKkzukGzUXuVZjGpKChTKL",
  "key29": "UxvGbW8tvRxVkzRgSvJN74Er5gt2HgJT7fuQGqo4LHDgE2jdbfyW8qQBLiHr6Jo3b6X7jqd4AUwzzFsAWTJEVFE",
  "key30": "K42LMSPPpr7Zrk9mHTk7x2jLSsH6haSHB8jGo4qxhAYFL25qY8CBwVQFW7RfMt4nqerYPTQGgiuJL3hxLKiNK7z",
  "key31": "fx7FjftLp7ym9gHn4u5cRJGNyUpXXnQ1dJKZP2E7q2EotFNXxXPaAeUxcnpiHH2FAeS1bAzDSYLTqFEUcxyuQxs",
  "key32": "2FQ8TDstZSvGCsNZyopSNB9Qyk6PEVEjW8ZVuXvZu6y6YGSnLu5PDQoCvbeeg6KMktPXdy1GuZVcxQB67EGx8Ufp",
  "key33": "2BmDs3jwskVcTxzdaNihKkJdtFPNNAZF7R6iPwzngjt4EK8LUaZkdhjitgWZGSNUr2zfaqczKp5kk4c9Jt3LHP4z",
  "key34": "23BFFCw6zttNTDnY4KkgaAzRbZpsbif4TawnkZPrQib6ACHRFUyxt5NSfzt19SF2qoCU38AyoqXeDWRojRHRjSPe",
  "key35": "21ZCz8hKEddsEPkKWhU7HZ63fD2dojkJWtTYoSW74zzn62FQYKQzhDMXfkAAsUtk37C2CEUUt2E4PXzeMZNyBq7Z",
  "key36": "57kJEojUNEvwEN2cWmeB57if96Sr99SBt6kr4s2qNWqKk31ZnViBGe8pGic4hQuEqRgYMeUfPYyAPD8fTekiAQSP"
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
