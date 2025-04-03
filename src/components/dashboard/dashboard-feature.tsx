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
    "5uXeVSKTdRT33YwPBRBXx9tMt6YPQq7msVcbHufS6UV6yTtT3NMLeAXmLPYMD5eESDYCHzeCyFhqh9FebSvHGs5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FTMbJh3gmCtg3g7EWgpdVHuKAywwwBFwxkt5XvXuZGQW5gY9biMjYaUKPpc5p3eEXu4nrUpdyiNZoKZvZEvEttK",
  "key1": "XQc6thv2YNHoRKY4rGbEoV2KcUZC3A22ZGwmG6sxepNLP17jixpJFAzeQqkCGDhLHMmKdy4hWx6WV1SGm9FX2dD",
  "key2": "5VUG1vn4j2RGWtLZ7VxvoCvcJdqu8gLtQo9YCN6mF2UutyJMoaUtX4vqpvkTSfXnfvGYkWeXvKUcrnGgtF4NHehP",
  "key3": "4J3rKhLaV7NwqGbmmtW8KeAJJFS92E7AQyiXtpn8oSpAHARPxPRBxwjJtFBxsVzsMvi2EXU5oLz6h1T7kiJjPWZf",
  "key4": "3Bby6BqFc8CegsMECQEBFRPGE7uXr5BQdhMAZP3XGziMymn4icUd7HHxJhx2XmHfXr8neYkeyD4xwAQsLy4TMnX9",
  "key5": "58vUysCE6SddamZJYpFaVNFwY2s77SUDTNw2e3yAWsM7RdZPVJzzWDXPpmTbYoCGFBPdKCUnueWKqCKrfwX8Rj3Z",
  "key6": "2uDcxHwP15X26RSe4jGgCA9v9rjWAeFpgyqNdtSkPorpj9UjSera1SEL9kBbFcuXNDspSxRtKUP2YrPAN1PvEH7A",
  "key7": "2bsso2FW4zSuREWxb5S9F5QDf1GFcXGNgTbpuj8SyRcdS7SWEu7WWqdhpUHGucStbovnvjHgErdZm11jCi9VBzkL",
  "key8": "4KS6koA8xDYg94h8eyK3cVFRYUqnuLq6fqszg48VTt8Z4m81bF8Gmm3rzgNHes5Ph1hbjYKEhjS7s1phUpsyNsYL",
  "key9": "3iJwU9DZkcwVxuRwjS42FdJU7nXRxvfyB242oi1Pq83jt5pTjZDGgTytAw1D5JUBUwiMqr4gXqwdkkrpiDLU4vHm",
  "key10": "2E7vqkxCNathgvo8dSP7S2cpXYuWWBWtPFsAQrcDJh9DVazd8f8Cu468WhqWVReprswEkZgvuBRC6U3eSfdR9k8P",
  "key11": "rmNSQEj6AKAEVynVBe8vz5QRWJCNTUJeVCCchyfDLKN3DHLwW1BRiojuK779V2i3UnGidtcyPfqmLPPAtEWSKwu",
  "key12": "KYhnyJG8mMe6zpC5rnhTh4goidfyLtKxD7RX5so1ntbkBdqDnMGBrZWuWdtrPtwfoencQySffob9AwwmqrsU3w2",
  "key13": "2sRytMqNRsKhTcAQ2APd7G9FnhipeqGiNWkNZ4TQpm7U98sqrxvLEtcptM9KbTBypVB4VsqvoBbJNXSS5UJtWU2R",
  "key14": "2xdrHws3nRtJRP3FMMRsRrZvRZs8Y48iKSRqEU9W5v8EUFsNDAUo47xm8QvfTpW6GU9BbL2EmK1jHUXB6PyQMouA",
  "key15": "287S3dwgKdXPzijfZqTP1uNMXyHvUgvYkeZEtChanCZDnmRkuYAvmwYCsPV9o4Qrw9XGmZHK4x6x9Vsef8uxZbhW",
  "key16": "6PtkZMFfF7dxcbgnZakkdvmEQuCALP84tgcTzv8BhNyWuspex6DEL4sit2v76fVJkZNREQb4CEEqRHkdsjywCrH",
  "key17": "2yZwmdVAFgdVDFZWu4ELeLP8GoUEFTjx9jR8M3XB9wmnTjfEFtgUtnChoG9PUmt8y4p833hnnht46WBqYbSZurcz",
  "key18": "3JmedKvtm2pRhBBPVDkxYdemwraozUKkyFukKYVdFgGDRTC123E6DLpFS6QpbUoXWUaCjNk5KPUueEaUh21WyhRE",
  "key19": "Hq67TbtLJUz5dmdpB49yszqzungA55dpe82GNBm3Yybj2A8WmegoqnVGvyXA6cnhwL19JPYGjx9bS8Rd2WcBywW",
  "key20": "4mg5ueQira9J9nvAxtr1BGSPkqNS14g4BpRBmBuebznFZQaRqvwZuqKKKpRjbr49cF3ys1D5f4ReDy2Y1jcQbDgx",
  "key21": "2KPXUoQF7utFS7h7XefSrWNvtUXZgeNXuSc2EQyFKYVPnECJp9vRqgtcekZ471iqcafytNFZJKpwE5YG4SD1Ekm3",
  "key22": "5y32H8zFYWbLE7jvyXXrcPYbvcM1z2UFqLzMgKBMKWZGZcs1NKsnb479i8dAwxdWEbLURSwG9ccyGtsUpvrEEZBF",
  "key23": "3Ew7wff7aHDminoEQ4V8ftdtqRm7xPtrPMSCpbquZk75cfSSvSEwHR5cfyC5CtWzEfiMyg9kjQhSXuvzh4qdGwAG",
  "key24": "3of8PfQNvoW8rfpSCB3hHpDLGgBsXJoU6wpMZgAx36iT1jq69HfFBdN7UPPyryCRuL6AA81keUgMFEkkgSiraUrv",
  "key25": "WBJ3AEVYavt5niZYG92VfUh2V6RpN9iYQd8zVNZvbrqhqBqk4gffcRyH8Lo5zVDEgtLu34oCdtzBeYYYvPuUQob",
  "key26": "4zcfTvnG15J48yQpYbrhRAP3RxxxV735kn1PYfiSTYjM6C5BAV88FAoMx9sfNCAszQGQX6dJoSoUFjUzKiE7x9A7",
  "key27": "2RBhGEBt96ohjc9Ht49jo2nY1eATqjz1VDo5kFxDGFwx4pM67NxYUXZ7QjuKr41g8iDJoXWQgbHevRuRBTQucoxQ",
  "key28": "4fJ5u24izty7d5LRJUC5QGMezy9FsnuoUk1fYVsvXU1MqVFdfwHoBKahGNJkPWa2fJHpmnLHw33SAwwZr1Wz98Fh",
  "key29": "5iNRGt9xGPRd4ZaP5KBZdLFqGTGcYVsBP25YQkjggDCrYJzpYCy8CPWT5wtJ3aocjDsXMJfc9fp3N6ZVDCQPxNhE",
  "key30": "4p3hG45zqiJgA4Ao3k7VEVfgrYDDxHpVBqtYkYCJmySZUHgoUKHzdBRxQE7ruwdHVcvRLC32sc1YAN7FCkbHmGqo",
  "key31": "4ZHmAxnCN8jzcPMkGnhFvve1mKCcokTaibu1F7nKdRpVd7NuTUNi3VQN6sUouo3msREufeNRYHVyWQrT4jstHnuc",
  "key32": "2xnTpfGzvLT2QAsxQv2kC8ds2VkRAh5Rki4oCa32vP3o3skYZYcUZU7Xs4KLX8AL8TqLcpsoGv4Y9ZtpaoxtV6vy",
  "key33": "2s3Fokc17UAAb824dDzeisCv2i45bf8R4HA2pqeyBYN4YHceoQ9ES4ytBPoNpJbDdYuJ7SR1MAD6yfBD5oDMi8Nb",
  "key34": "5pyqnWRWJALoPs8PgSRFi4yPasB8CoQ8Cgp3JNaDbzMy2rLC6Vctnv7WLDBQxroEW2VrNqBeZFgDYcciuj4Ytd1c",
  "key35": "5GRd3nsnRq2ejbaJ1ytvrDsJoevrx9W1j4URAYowCwRpuyv3w8Qnjpo9V28QkGRb3hjJYT8UdnSPAaFuz89nqatQ",
  "key36": "46VohehyQLv1ZKbvW7NYTbBUEmxDxM1z3N2X1eiU3QmCnZC6PpBKmcsZ9GKgbYTMVctQy19EbHc4tMLWBrgsnjQr",
  "key37": "4NcMH29cLbKqQ66Zfw1BTT4Kxg3GdjJ1wambp8PTsDDXPwdCBWHB1zo3S8v8cUv4uKuXEgHJeUfmgX55iE2MW9pJ",
  "key38": "53pCELE3m637vXHNcyWRSxsABQ64dKgqgHgnai1h6pKDt6Y5Dd6pzYQzNW9asP2JmNRNVffy3T5GuXjvhjDC3dbw",
  "key39": "336pzaCKyUgZJFJwZr2f4vEaikULqFrtRyg1CTFTZ2Sg3N7gmfXGLcRVAw8VsTHu6tStEj86gA8kYtLWJGgW6aRs",
  "key40": "2EyXSDBkQfwvhA9bnFk4rnwtZaCahHsWppwNGrZ1K4yT8KFBPwZEu3QPEhe6PFKmSEKn664qWeY7zsUxzxPJuZpZ",
  "key41": "4CBfokWkETUntBVAHYM9sbAm3bzD5bFtpLC1TBKoxgWnRK7RzhrEpA6vLNTzwhE7YALCD1gJwHvBoDwXmpHzqxgy",
  "key42": "RJUEXZD9hVvui4HxUm6BVgUcwzv6aCua17cPXPGBznT4XnUb9wWJe68B4daQJQLqtFNZAjooRwr4uJqZun3WdRA",
  "key43": "iDMh6twavRcTydn2zJZQFXK8gna4AfJVm9npDnHzQp3v567c9m9L4tqYAyKmX3rm9DCDxzypFcf58DA73JKVCE2",
  "key44": "2JreKmY6ZfvSG17U7nFXbxRxyBLjcvrteFzXGMTQNpW4rgCULHYzQNaTCu2B2DBaY6dzHk6bjX5rHPfkphs8PXNe"
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
