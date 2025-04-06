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
    "2AXsmX6bC6QsSa3J1gbpY9MUBuDTbyTCm9N6tL82ixY2veJFzMXLhSsY2GWEcVW1mP9sTT7T9MFhpDtFgKJcnZYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BZzjsRXgspvt2etk4p1dkDt45Ub9vVL4XpDfUDVxhAUuGnDjrgHJmW66ng1uRY7dDsJeQco2jHtUtNiQsm5NDY3",
  "key1": "2pJJXqg5yNrWf351e1vZQRv3XjzU1TKj2FTt79iEcvCwQ7gK9Ux64ovFVNspjGzUtq1syYgZTHUFpTm517wgKJks",
  "key2": "DETPS7FCjYpnMZBQtfvRpmLexfdbff8TR94LkPZJaKfFrrMLZUcH8YTX8pLC8WM6y3s9P9j1ftzpVr2JU38dDGo",
  "key3": "5pVUaoBSM2Ttiu7rcdLQ2JVUTEHaizfBxKHVTqHCm3uNvq1oywLpqZn3BYWpGJHekLuNz7LEyVf5QZAyJfbKJnfQ",
  "key4": "2sLinHRbxdHxp1VnwKgr3bfGfGu45XeEt5VryMiNPZcTVedyZXpbgvWSDAE9SzbZUvbWDiJB8qiusqe5YjY7cY4m",
  "key5": "4Vq6D8GRDQqWihUnJBs3b5JUmeSCZ96mJD1KxkNqJN7Qm6bu36B6D6oquVTHU2dvLMacqid3Uncrz1D4GvQszn6L",
  "key6": "2Qr9qtqTRuYRiDp74ZrgakfWsb8iMzDLL3L5rVwvdMzLuw7K6NPoL9YS8LtGDQYYNohEnQ1V1fpgxcV7gTKA59SE",
  "key7": "3hm3ycAZVrkoX2bVsoxBJKW7S2uF5zDLietC9E1TU3hYvsEPMeij74Src5e5L1mLUTW4dwn9qRP7oRojBbAy94F4",
  "key8": "3wWDFcngYfkBzZ2zkciUtMMiJjc39S4Xu88aPaeFBihpwndkELz3bnLNvM2zQLBEX7UQvWgWKhSP9K6xsQMXed3o",
  "key9": "4YEPfedY9w81y9DLuTcAwVRAmsF3Dj5LaQuAmB8YEfkshRzo3iABPANJZCtQiitUd8BpzxGtQNUJntdtQJJShcJ2",
  "key10": "4PdUrQMgbAKjwBbqMbbaiuCyHwccqs1zRLVgrVQtqnNgfg3Z5qMbgzstNo1UpxgQDdETMzczioo1tKoEkzX4Y4uT",
  "key11": "2akK5JfTr54dpQgg6sYMBznNsfH9bo2efFimYasNmju4BVzko2b8fU3gHsV1niJgXvGQncBZsToZmbx3fxKRVPCw",
  "key12": "2VQ1Lw25urWxvZWqBxb8up53GiM6kU9jcsWvwfitp2rwXBNR9ioWuwMkj3LxaqhFRHKmaiYG2s1cRmGTcuNA1VAT",
  "key13": "3JzjkL2bwoUGo7YEwRkxXQdiREM4mZ1sCfhxJwYghbKWT2gx9Jg72CkY2aT94kwCxk5rbjqPxtrsSnmFktd2d7DV",
  "key14": "EU1U8UNxBWL9Bw2Gxvd3RWg8YueuTdkdFRM7x5XCSek29zW21i63r29UQD4j7iDxNtg3gox1Vn25CkJXFsLPq8t",
  "key15": "5LDqzrNyDoCFvUSmULHtLqRuVB8rFMYtbnTDK5uoHu44HgVtd4gn1Ukd6JUMg16KGq6F87EieN13uXfXp2ok9UiC",
  "key16": "37nuuSynBxHcd1bRoujTvXajvjDoQ4JzTxnMoMFCMnUCw7xMZVckgfZK5r32ptsprxfu6ZARy6FtEg4RCVSxQmgq",
  "key17": "3TfxCBCXdKLKWLUpXr14US6Mzzy3sDMqhBSpUNKsu7KXXa2snju7ZfXxcyFREwd642RAUicYpMrVXGEzZ9j5Bagh",
  "key18": "3ZWYp1pVFNGTAGSo4Y4XKxhNBve2Z6ps3VRxXn6euhYPLufrY3Kqze6F31wENW1C3k6whhkvtTB7m3oAYRLkCN2t",
  "key19": "3G4Y433W5wpEBZLkvjfK87d4ruD6GEvZQcRqApALeaufv3p1qoswC41ANmqFpHrZCNrNqMKqhMChQ42VgG7jE6Ht",
  "key20": "SsLB2G1K9kUyeu996vPJmTjkx93jGuiszHvQLHwCr86JhoQcT2uj8kdM7HbMLZBwivKQHB639SiQxhgMyLC8nx7",
  "key21": "QDXftgEQGDnt2Sr4CqN4gCm6GQPAWaWVZxR7wrDnsn6UJXzdBpFj9wn9p8NMLLRFGTRiHLDHhiFggocuwhbZYe7",
  "key22": "5yvco3uJdazAHpKsqmNR5e9toxhZytouCtpvgDuUXR2vykYPQSj15DPhzSrymqruXgiyEhF4BwcTHzKhTJ5YWBBv",
  "key23": "42dmsQGKfRtRBvAGtYREznJhBKLpSDWQGgy6q43fBTTsSreqhUQffr7rbQPdJug4GfXsw7qaNjaau8Yy6irkPWAL",
  "key24": "2RkBPUnYdyjhUVGBpuRW9cFeM5FEHyoZYdwFjwQgdYAs1snjzVWSJpcxznNv2gQGdqNnZVektQZrc4mmzNM8pC1r",
  "key25": "vLD4iz1kGPSLpQKttQrpaxSqAMYkqX4WnfcWXu5hotsJ64aGFD7gpjwifcyL7Q36EfjXVAgvverp8qJaSUBTQyn",
  "key26": "3uCPinRtJ8TzR9ccrvcaUPVdAwstbhRbYutxgTkDs7tgiCv3McfoAaLGdE3jYngbhyKVfLoKDbhMnmt8ALTafnz7",
  "key27": "2AKs3EyzpXwgYAjFkN9FAALD77smfrKm2WAwFcKToiLgYDvhiHAXSCYhKgwiSs1pC2cjkRQmiSteq5DnzBwY7Qjx",
  "key28": "5DbnpsnqcRUzgHpGcyCG39oZ48Pxpyzr8WGTssc99xSpg6Q7qBt4hwXS1gT64NT8NxqM41iBpiTY9uiVDUztkSxZ",
  "key29": "3XNQDqgRfJ5Q2mWoi41MKyLGtrR5mwsWj4LkTCHiri5Ypcottk7GMNfQvrdXtByesTyF3x8wFhArwVoUu3mECGXA",
  "key30": "2SAQiYFB5fRppnnzWejecfMsiiJFaPYhEAgnbQtNpP6rvFQbyfyRRRtsCxSydGsM4g9LQ1fx5f7Sh12KKrDbfAoN",
  "key31": "5fkr8uJkeTJ7pZMb9T6iYhRNQh5fBifPbmG116CGBuYDhRn3iDMm2RHuMMfsmrbPQ9tth8c12DaCP2rnaRoRL9oh",
  "key32": "5fxjD57Bd38DCF4djC868iSSdwdtChNQPNV3uP7drv9frrAUQMStWeZW8ytkESBhiSyzggr7HTBpBRF8z5R1G86W",
  "key33": "57Tcua9UKu2fDwFMirVNNMbVuSAn5KSC1jyDgKDZRLWxiZaEh6S1uJbTDzLuF3cGofyCAviu3YzFxfryDdUqzQaX",
  "key34": "3yT1mLqTLgGcyPwuFrzLeDKuFF9wWbcGvY8rTgUYiirifGQtoA6gx3VH8PXbaFvCxvjZNEan3jnZE96PwHcHURx2",
  "key35": "5qCNLd5Xt7XSuvmx5zA7wPRhpvGuBc3u45ghWSUkaE4AyoeKtyXs4ghj6twg8vk74YFK96zhK4CF6WYdCxWyHwPW",
  "key36": "66TL1EdpWe7nyKjn49nzL2EnRgPXxq2vyTxdS5GCsp7Lbo1Rb9G4zcsprWCCv2i9cd8H9ZEXfmwRXKKKddba4Sbv",
  "key37": "6g8y5HxuHpFzGircX2jnKHCFrNzP561GYtDCfAVmLUvszavYnqDJB2DtbpJyfKqUWjh6LAtXGVQSM6dJnT1yofS",
  "key38": "4RH3GwXPLSJaXjA5SoZhEAk6uHLTvjuBYnRcvxX3S1t53RBDsFEFRFw35PWEeH8XGEkssy5c6yo4sRey7ADoixq5",
  "key39": "4LpHDQgrjUVuqGQVgdS5D8Gq9Rtb8G8PPAmqAKtGsBLfzRGAaRHeALQgM6LQ5RsgSzAgM51Kf5G8p4MYKVbCNwBz"
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
