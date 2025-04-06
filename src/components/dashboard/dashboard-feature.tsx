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
    "4FguiWoHwnLTmtewbvW9yUoPrA35AZ9pLvSz11z3WH12zPg2tYRGhWYScisy4s92SQ3SqEtUqpUKNnpPchXjg8bf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n6mBp6je8pszmVXMqfSvjUnG3vuje34Mb6sEX67FyCauxL7dsVUpbUUfDHgQZxvagBTFN6Qb1wYxvYYCSotAMBr",
  "key1": "2Zo7KrQEiJANN8wR9Z6TPd9AcUAcvRxTegrQejNEP5rvZTXJeeYWZSZiYCMowW85eP73iaNdSMbJMs9zJMBWUiTF",
  "key2": "2uEJFpqLpecnktzfmd3xPpFF7YMNnaFUo6d5viS4K3Kk6h9EEGBKu29FTxhtiVZPq4gPGBJZY4gju6dVEhTJRXP1",
  "key3": "4TntkJK6V7Z2TEXM1ytQcnC6hXiH4SegPZQMMehPKUsJDXrfvDAEogwkWmabzfCs8ULxCVRHsfzSqjJh89L26ac5",
  "key4": "2pxGJhVwhDKcYWzBrRo6JaXSRxnJrKhnLmVwjfXcUj3w7MHbQ793Z7tEwMgCXmKQGMsT5pgPCPTQuRXW3A7Av9be",
  "key5": "2CMizv1bUVjymixjwR3p8AQ1jngWLyPBxwkw5oTyJ8puGGUEwvTHBPwVPaUVHWpwFNHLza353vftsmK42LMksjGW",
  "key6": "woVJhmjyhNNs4Czokj2WLy6QeYoVUyKA2Lf7S93GqaYsQ2LmdZXoEBToTwXTVAfzvanUupE4museoMLyyj7u1RY",
  "key7": "5z9y9NpAUvu47ZhCfGp87x7YZBpkwcjPpFShenrK5KFRri65TxaDgmihokMfJhthzuP7MUMnxV3psP5fNC8DVfsX",
  "key8": "31jcgFB9HFQNA7bSwPDPkZLY3bQfKN8S9AxnTkHfY87Vw5rTtBZWc396qroCXfTXcUHQcXyyfKEQ6CdmpA3fRfnP",
  "key9": "4GiMGysckKaj8BXKcGTP315v22trRpBY8mwjpXQqjFnxm8ojDGr126jU4n2S9kTzg2QLhSa75gc7wVtFaPZu8zYz",
  "key10": "5WdkDeZRzAjAEQubcQLLbhwcEXdEV6ztPwLSN4gJV6Gb9uYFmapxNT4JrwCU4AqPMX2xpEGopxTS2EmgNGmfGSLy",
  "key11": "4EJvu1J7DRqtcAAEj5hqfmeYaDTD6xAzt5ZX7AaQeQismEGXEW171Xk2Baot5kYjVfdtY3sizKLVj4R973wP38Mo",
  "key12": "4GxXKMviM8n7akKqidKGPWmu9HpLuq6EBBrDYazmf1rsd89d2P9NzTFK5VTN7JPc1iLvBJ8MEdvk5A6FuGVZTvdq",
  "key13": "2o1dCtuD7SJGyTWnYTE9StWf4GGkJRXCx5wu5D8jm1yYrDiLpDutQQmZh64akciCbuSngCgmvWYUU13NTYhrYQY1",
  "key14": "5G3skoY3Rf9SfZ3yDjeVKC3JZ486Kr6T9URxY9eCtzPfPxj3QfF3LKJUgqMQmWgoPJ7Pxed6EQyxYRGGHiptr9nG",
  "key15": "2PgEZAzN1vuud1XfPzpiqFk2M7siCcv2Jn8jEjnzCNu9EJ7picxHGrXRBnDwEMxPxHZnK3pQGcuzgWhmahQiQDk1",
  "key16": "5FRY81WpVE8mXKo79BWqhpYTjS75dhWEztopLa1A2yRZW6jujVGzJi8EFj2RUFxvdYS5nzTpSpjaRTZUEo2s82op",
  "key17": "2pjibnwGZzgM15otWicTFbhwu3iMqqnFRtcFSAtGxwMaNBTPtYYq7K82y465D4hjvJXmH11yNM7SRa3MoBouMHhD",
  "key18": "Kq4b5yyFMgkjR9pEfN9AX5RfGmFoJJqXUHuxMzTXEiesEZF4N7DFweKBuZLYwWNycE7RzzMFRYQ5aJxLYuGKhSH",
  "key19": "4TNE6NFerLZCYdQ9i7FCme1WF4vpXDayeDAhtauEXmHk3YG89fXHW84t26UbbA4Jr47DxNRYt26vB6JHC5QeHoNM",
  "key20": "3uASpgmwjVsPWJvSjPSuhFaBNExU5mmiZq4P1RrZaxS6i1fhfqzwMajSReHyViyMpSqXo3H5itwJKm5CVEQSZ82C",
  "key21": "T1xbDApjeVRLgmb4VdmBwmJ5wLs51fKVqz8xn5Z1KGYwkUCnLbTEEf3Hsgi8MiWaZKcndrbkxN4NxQNVdLb5fow",
  "key22": "3iHnLQMaj3TNb914SMvShyNusp6qdEw66n4x4GS9eFt6GjS2EVajj9nGUidk1iyi6LboUFW6EnLxSw1zMB5p66NF",
  "key23": "3e9DGBSHVuLtRGZ5XAvUnTPTgWAMSZgjB9tFXBfgR6D2SHP2kFq1ASQQqs5B8rYfhuw3a9CUifeXpQhyvXF77vAY",
  "key24": "2x67paF42ewm4LgpQycp3fP37kNz6tMmy5Qmu3SCFJ4YemxPvuGun6S4mCSRfmGdwkH1s1ikXBANPVLNxVEfxJQq",
  "key25": "5DYrRuGi5gT9YgjRhpZdj8qj7zHN5NLgQQ6m2pDHHBA7YianPofzSX3dnzjEXUtrDcDKxuNPcmZnnztVWetYGuMj",
  "key26": "5sp5H6aycnGS2EaqceruvQGqLGAdzDWL2Pdpia8gCeokRhe9FzNVfvwYJ7xTG4BmcdSBDF5BkvGtWZ2iyi6NJTqZ",
  "key27": "3jqX1TXvPXW2QNSCcSpucQQckrDUeJUZvpqwqKXPXBdmcLRZC86tKCKLQohXfoDRTa1msyEcK3GaENmz2osEpx6G",
  "key28": "3kB4Hi9uwVLvDdbNPYTUhnaasJQoeEWGu9a8mL6a2Yr4YyKBj5Y1WegkfdsQs91VjxyyRBy9jErtUiQJxJKsnd4J"
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
