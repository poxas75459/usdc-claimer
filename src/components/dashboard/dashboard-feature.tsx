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
    "5rMYCMHZdQzSgtC32o1fsCguj2UGzzvE6RJnHkWRGhV75zEb6FSLBfArS9m7jTcERebaiyS59UqU7vDHnZVqFisZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dCBnzxGAJaCJ4tUWmQ6MvubpnmQ5jNJFhNuGyhykHEEP1XWo5WTyKPR8KfrhPVqL9rjp9FmCihRwfPUbyAyzxWg",
  "key1": "2HtHe6986xHRUcUrZsFHsxJtPyB8CkP1DgG9ZdEaxK9P1D2EvhHyoBtH52MA8o5ZrJDMrrHFgQF1F8CaK9kFvppB",
  "key2": "4KhFhfw66ZsrwcGHzGvMGRumeGg5DKvviksK9YeD5oLK5jtkxPwLbaPDgKNmodcp4wSEdYF1k91qz7x6ZYst9hHg",
  "key3": "JdRiV3wB2fgAihgY7HLJuH25F7WUFpZcwwrWQHUAASjLuokZ5E6jhMDmLeB4Vjy9nVke29JB3cuKqMCTfLZZQcN",
  "key4": "3JPTQvdCtRucimA6HgZiJeTrYU1sYDaH8fZTBCx3FXPxWCzm1TUAMtWnuGKYed6ebtVUnmmzVnhrn51AP4nUvYv2",
  "key5": "KWPmxKc8GE2WQgjo7rY42zJJfP51pfr5yUAzzrshmZAeLspQhSuiDzRW9DkfLGrR4DWspgFbWJLs8A5wrrWh8zb",
  "key6": "2cNtqwcDjVFCmc9zZ9pQAysPkbCc65k8Ek9fZdk2SPZfbfpVFZhJ52iSv63zCnx8GQLRA4qiALH7RrF9h82nyujn",
  "key7": "2Gzd34yRdXfB5Kc7QPsA87UmpD6nTVaUxNEzejoqYese3FDtRntDpWXpCoKkTymbHSnjyTPxuJayMhMdSvi1XzM4",
  "key8": "4zAngHzY9R7n7n58Ukf6jtZj1KMnhSW7TBsFLAXHP8GJA77p7vGMuNdwAU9zayhw8wHRj2aXWcx5iPVJ3EQxbZWq",
  "key9": "4qsQTWPYjCZRsY4q17ZvDW6TXYVrbqY5j4EYvRajcAxz4YbuyQiPsXu2jdzQ7EdrMb5CH8aUjxoimbNUkkrx5zVX",
  "key10": "5R3oeRFXxjdJPohJtWoA5igkrbanKphqfGjmC4Tj7G9VuAxuMmLVh6voupy3bbioAnBh39eBmFV3NJHXcWbzRGi3",
  "key11": "5GHoZoQ1aW5pzdi4hxwW58yYYeB96gXmMYnqvLQUHZPJM1koZL6fvcakWtzCZkFvMJZWfTzy3YJ4Ajzdh3fhQytr",
  "key12": "wA1gMVJZizwgvWjPFPeusNnYco25Dksa92S6ei2NKj1aR1toXmgGWUGV8G1JyAP8ZU6qgdjW7NwockcyDn37jLq",
  "key13": "5wmLN41e4tVfWJfqaxnRd3sDgUSY7G1Tx5CPWpJnGsZzB1s3GRDDLSBNVwzMcah3m4jh7vb2cNvUuVcYgdEXBT2f",
  "key14": "3ViekbW34nUFWUVbgUHFft8NX9ZDaL7XW7j6eh8mUKxHLWUzYaR65uxyQBuvtKn9N2Zp92jwtG189xSJPfF8dkri",
  "key15": "21qEvNbWA8fmvPz7DpGzYnDDr5MYdmXJF7JJcGBUtcyeh1NHFzwRrcNmVQEhR2amurG8HRP5yNhaDHAq1vMoFo23",
  "key16": "3iMqhUbXy4GtA3WKH9F4ApYYR4QBrGCaPYJ13Q6J9oKV5hMGCpqrCGsARPu2dH3wCniUcDqQpLkgNKQELqrCwBto",
  "key17": "48jNsV9sgLSTpHh5zbqfcHGdCn6sVGB1xCAbJgnqPf1ERBwTdyA8HCP1QRvk6YYu6AWV8wu4rJXHEjyUHrDERc54",
  "key18": "4mrsfLiWchvLvfwfYoN1sP45x3F8DLHyhgMDJ3vyyxviHQiqvXYLnZW7Q8w5UGML7j7FfTAM5ich9D3F6hZBuGxF",
  "key19": "2zd3eAaB1EhF8GBCbSi9Qx54SKRVoaze7FPkdB5GSjxh38ikYvwYQRBhiet8FCZXaJ7bdWB3MvEVpxhLVBUPtcpA",
  "key20": "2E1ZnQSnGF5NT6LiBZ6hhMvPrmPBD5Qu3iLKDF536xmSW4mnYd1X9SZNL8dYB8RVfNM48KqBDiAhM85MXVQLUREb",
  "key21": "2p4CKDQfFeqP5whV6mhESoJsLJTUk1n3qvqBGdSWXRMN4TnDBXN68oTYjyAosxd1a7ywH5X5FUSKZeb5sGjDn4bm",
  "key22": "5nTHddBKYKUVMQPhHtaq6RQo1DKJBQ7Y55agypYVcjDSyraTNGkQYjpVGAiNkcVVdrkryMxyDDt47A7Gg1xC36Ar",
  "key23": "4A4iZvtzTV1js32j7A5WvXjXwwBc8pQ9dSQvB1taJqnkVqxx5jtPLd8Sb1oVQvZLNe3Rm2LTZnp71yuCLCdNPhPk",
  "key24": "3cTLMWpAJWasCSnRiETmvbN1QxkZE1aCMi1hoVgx1DiwPQjLYtQC8Evyfsgb4RLEPXDjHAYMkKwqMLk9o4hERWUm",
  "key25": "4zs6cD3zsyPfGR9xpTFYdVv5QExDN8a8maEYwcdrD7dQdopf31FUccYCEGPwVcHtPSNhdysaBojPpnHTQqBacU4G",
  "key26": "2d7L3yAMVXgg8SnkKpQe87SU11oKJLoXCqyzqRDkqoUsNPGUznaeawCkJWThmdYtYdKUV4hdMwW9rnf3oUK5jDA8",
  "key27": "2WZaE2txRpn19M2nmm5ZqjrEqCaurvwBQFuV1DkFSqLr7YCuNyih3LHRehhp6TKYxqJ6rjaBV1mf3nYXj8woHZwx",
  "key28": "4qCMx8GWp694eDSbqZEs94KhnKZEPbSigTdzoAaj4UD2PUZteBXQJKFWNrDJARuALvjeJi1DjPrbLZnmir6tETjf",
  "key29": "4FqU7vp9jBhEVdNyaXpGJfZTChUBnW6X2mXMiAG1f4GVPPdg9SfocUUNtFLVgzKxXNBh1HwCNvbBFQXJEdjZUzy3",
  "key30": "41FoMe8h1XQTnh1nY2B2j4K66fwoUH5EWnoXRoGJRizGdk5cZxKWpw2y3aszv6TeSMoDdwFLquRMHdZzEpck83F5",
  "key31": "4woUt7KUc2rQZ5vEpbaDqqpXkNdSd77TCVv67Z1yZo7YtiN9WQbHQCpN4kbSPmrskqo6cauhqVTH3xZXDYxAr5rJ",
  "key32": "2JQWRNDVZZH8D6QBL27L4J7ynXdW8rvQDPHga2d4eF8tzd4YW5dFYrLUrMoxkXTa6eupnKpJV29eBTJ2sfavoSnX",
  "key33": "3Tg8VGQoyJa9w4qA1cBmiuWvidrfdZaTjLxwoQ1A7e4kQS1KSdEhC4A4LieJWnhG4kVqb76sS7SR2JKo3eftKxZU",
  "key34": "5ugVHUAco2q5XcZJnFshoteCtKwV4V6YW4ADXcLwvdsq6kE9BgHNsXucXevfUWPCZ4F9eaYqBF1wLcXFmT4vW15Q",
  "key35": "3GTxi34Tma2WNJnq82SCALS1oFHWPio1Sx8icBtAune9crBU5p9o1wzAyM9h1Dp8muEyTB8rQQiJuq1odVyHNgQC",
  "key36": "4ydB9msqJzARkcJHfgR7zRArwS5YF2TV45xbST9mLPEQfQrATSsc3udhsomegjFgjXQbkzC7KFSeu44pBph2xJBx",
  "key37": "3yixDvio2apv3A7L4fvAqXgqxqo2FhBPBGiyp1iXz6ky5T9v5egjqJDpLkmse5xfb2jtu8gpkEaAXfECwfFRcg6H",
  "key38": "5XCLPpsA2C5NM1aEr5qczXgkzy6dZdKiQVNemRRoDyVycWLR16zsHgU3QNm9KBhWBXJ8QLXRfhfWaSJ3XrCVo3AU"
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
