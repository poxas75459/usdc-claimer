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
    "5jG5pQN6a5FYhL2VGsWfEupCnhYXMNu7MGXFn1Z4LWqRC1c4ycUmavJSGmAFFnzYvM2eg42NtCYNL5KmGrgPnphE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WxQYQQqBpcecCTSdy9yXqwdgAhwHQJtTx7JDvkmWmxLRdCjxEmfz1AZv2GKgL8EZQWjGGjNzTv4i8TvTM13uKw7",
  "key1": "3AcUFzHSKTxnzWHJEGkCMUubYQSKHoRXu8ZSCgEYsTt7JQoaL5SJBx88MLoo2rpdgzbygXHyR9G4GaQ5XWcH4CL1",
  "key2": "3kMrHvtzjqJQ1iS4NcbQVgnboWmpAdfCh3VCn6fjLnCNH23wtAbz5yZ8SHSGavRfqfW2t2XBKjtZyqYgsU87gQVN",
  "key3": "5PfBJPtVjqzd58TPd6CrdCPA2wtUSzxQTH6DqkJt8ezD9o1GWvXRzktzTzC31NSaPqNgYYueLprGYAndZW9qdi4d",
  "key4": "5q1XPE9TGaKFcoGUCSbWWH5WVZamC8HWRm8nVM69oGZMvCdreuK1PQq2iS4qk87PqzUvGvzo7enJuWhUdbmQ78mi",
  "key5": "5n1qdkXMGsTqYnhZqzGt5i7xqq63ojdXyY9GXmF2ASyPRSU9iq5sQ1Fh5J3pYRQzBRPjFWq4vf8ZyBCWoEmaa539",
  "key6": "3A4TL5NKR7wadmKUbBYhoWyExHc8YVRc4zmM7oDmt1yYetsnVrq2BkzWm3ME3d4fj4YBRu45acMiEAyXcM9qzhLZ",
  "key7": "3gvDo9xZhjvK6r4YogAxBdeQdpNiKLVaCE5Bn3DeHXAKm5a23G9wNT1z8yWvdpYNiGbvJ1haQbwSaXbhbesQJ4h8",
  "key8": "3BXorb2aJxLLnDKfGoDv1rngGhUSbGy2ZfwWgzPYCEjTaEKTG6fa1DtHxxJ5ZwtTdn1FTEYvDMsCbEFityyeGRr2",
  "key9": "5xZoDb9n2xFnwFoEbfAHJzFgZa59g2A4LCcA2bDS6QB2ixQFUxN2PhMWKF75HGTLJSUeewSgZYMMhmBiUFw9Mdz7",
  "key10": "3PXqXJSMtzMfKU2zbopskpP9SAraM63YwjnPYLMHuM6PRL6rxfAay5W3GqdhizJSCLKAtTWEBgyG1GfBkNqNBPQC",
  "key11": "i8Z4fkyhHckoCS56HWUNC3Mk96XgktBYUxzC6uLSKyRhdorjtg18QJjoXaM1V1kNHhbAFJj1tU75eg7Epqq9f9M",
  "key12": "RAmhoLB3GUJ2zhZVFQmzvN2SURVt13tMuMS6iv4RmxUHPh7NDXUnwiGqLF8rYbY3awmSfoA2vhkQAVD9y9escTB",
  "key13": "5vNduon1W9fhBP2oFngezK2Bd1Eedsvt6bC74TKUNjSXv89iMUHoP1D76UFo7StuX8Ud2D8GNxyjBubEZb8hgHZ6",
  "key14": "PL2GoMS1vjKkw5KmDiTZEQiZpyvEYcD6qYH9qNTm37pEfMkHhyy3o19pK7JXdGLEYxbXL1um325r6kj525aeD13",
  "key15": "gMq6PXFF1yFj3KdqJ1QZStCfyeuzGdWQEmhJ7VC13XuMeHiAuBHFwuawRXSVMBzTukP7utVxrht8JVByhHHkHks",
  "key16": "NjL6o9bMLtKdcBPt8FZXne9iKkRj2NGom4J5gPGkxyMhMV9rjDTX9vEL3P7WZCreCdEiWJ61H8eM2my43ohdsLs",
  "key17": "bisYmeu5tq9F1vAbVYCKjr1o6i7uPut5HsKw8i1RWXRpnSKoFsFiWwC8j5hQRipmZFTW9PUf2WaewwZ88KAzh3k",
  "key18": "5Kf3Zdov2GYBTNxLVTJ51MitE9VYa6z7SF3fP77U1t5YRUfF7SkSBEAjUjpwCtZLyK3wGLPXnr5gzaBPqpcSvYXn",
  "key19": "3nE4hFwhsxzYDwQJ3mrMd3CBQepAtG42Ha6iVPZCzeoQNAEEY4emzNKS3h3D3Zh4zHFWz2CVDQPvMVeG2jatW63h",
  "key20": "2LAxpbL6Wc8VRYJWXB28NcYzqFJ6iRWpe5EpiuL1hZ9neuEExkyPEeKQt5pYmjvuFM2Fi17ZPEhqzueHKzXN5UfY",
  "key21": "54KNdLGkds2XJFbewgBQ1UnitnWkWMck1LWWFHfJttt5HocHFsZw1FPxxy4igjQYJhvYJwp9LzszTgLDtJoXxVMn",
  "key22": "cXp8oNJtKpfrYJ8DsYwPSqcfggfksZsuiFQqexpkkbaDabCh4bHS1RwiKtvVKWBVEQeFMgenPMtvqUqBrBhjQBD",
  "key23": "65vmUpFCQjxRmoBS2wUXjqQ6pRET1wxAt7AF8vzd5QkQetFDeLJqGfSN6oKho7fBLybedz6UHMfsDJZ5CftTm5mV",
  "key24": "2CKfrjpVX5usmneTvga1zgRW4F61oWXZy8AKouktJcAKN14LXcJPCa6sQWyziY9BrfgiTUo5KS5q6SNZW3eP59yP",
  "key25": "iWA8gJiUKodi629ByjzpyRuzpLw24rtGuEp6c7jFctieTFcs9mhNivD94DRYs3fHoeYtD4FGEF5DfRaPJunaoiV",
  "key26": "5N9wQJhhRABWoH16TPYDEZV8HqjdvntUsMjdKPNVZKqAV6NfZuzhretaheYo7cLoNZSdohCBRfNcWSWFdeD7kKfc",
  "key27": "5ruYYTepfiyrtouK2hDW6q5dT449Wfdfuoj84JaiFXErtvLx2DgiYCUumMq1YVaieocBEJXVw87mbj8gfYTgpGEw",
  "key28": "4oHZkCqYTbKYsPDQooNYjM89NWLqdMi8xGdYdre3p2NfhtqaR4gdezPnALwcCpwKumE7i4ZWYhAe7Fpb3x3QrUCP",
  "key29": "5Y2L4Ej8hWBrqojbKRZ9YiiCwhSntkjL3JHbW2zkZvD1gDLoZT1VKAiK1B4Mdy4AMnuchDNfZKMYefnz6GvDkPfX",
  "key30": "3c5LBJhHZqVhE9PKiD1mgUex6c4A2sXvumTgKpebs1JaUwQTUJX9kH9L1UVBLwGdd4U564gvGWhpLitoVuKqvjkK",
  "key31": "22mxpqRpkrkvkVpPr7g9wNuQqLBRn4QbqAHpW8rNTVGNMsbLSvfnoGrwdqo7a76iQyHXBq4XCU9CJxrxE2wYdSjg",
  "key32": "2GgUGCUAjKNz3crKg5VW5ipSTrSVufcuXd4BZ2hFeHTEpnZghcFAHELErtZfjsrsQjKMfs6zcvmkBT2g7PtcNYtt",
  "key33": "2M9BWQfYyS5Q6jbfdgHEBLdYLbQsPYkynwxyonRYEj3ty3RCEpW2gCMUP46JeQWbSqG3RR1A2F3R2UBeVx3GZZDF",
  "key34": "2u5UH2E5HMzj5MBz3DqeSGVxcjsy2gxGtXvEeQiWy4SKRykFXtagYMrxNy22MX8DhEe2gSTS5CFN6nBqWWsr9Vqn",
  "key35": "62SW1ZE1tgUHPQAc4yqQzqrYcigGXa3RMqtjrhd63ExQFPd6Vr2oWU127SV6RKphjbhL6s78YELthcUpSNBM5DQU",
  "key36": "4z4dkhGJwNvdafn1qzmuLmKto5EYs2NwWLULj6LB5WUQVAZHmtLhByYdQzcaAKXCCqchPkBYBmrYw3kyN25YDS53",
  "key37": "4jBz25uZsSCVt5ysRGcL82djj3SsxJYmjC2TR6tCAv3L6aWSUrEVDX3fB1FvhYHTxVojAvuAq5nEHrTzoehsLTce",
  "key38": "gb7K8euumEPwNQBun7oeZSirNiE4K95PgnARi3zbVtCEwzGS5TFnJAy6efgf8yX5qMKqrvajgZ1aJXc33NAAjg8"
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
