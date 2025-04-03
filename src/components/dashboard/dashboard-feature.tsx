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
    "59qfjvk2dzgBTGZv4giX3TRhyYU39n2fYyFoLwV1yzjgs57f6PzXYiALVu8KVQEFjfGiagHmKJQq5eZ2pzWkaugT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yzkYUiV1MMAAvaCs2tZuwrnMpuX7WvaWQ59hpVUA6FV7q4G4KSAA8T16AcTXQHu5nm9JNysCW164gEyWevG4ETx",
  "key1": "4gW9hrKmFE1JbETaeRvNCYjGF8ucL5gQ19BqWTn5w7KUTgdb89VtTLsXXJxyrLWyrdZ4ACvAiq7SyuvqNK7rFub2",
  "key2": "4YtHBSgJrDhe9Dv7hRCUfKEQrzYegXZ66dcWCVgrCpMFbkxF6YrnYKcn98JhuzA29HciGSVr67x4HBk99GQZbJmf",
  "key3": "4QeN2HpxxyiWH17pCL5wwZ1MGn5FCd93AAiCZDXvKKChj5zSv8QaJxUyABhxPDvd3QUC4jXWdwTNFCYT6QKTUa8E",
  "key4": "283vjmWaxaDs3GGY4taBG2StgF6RZ3a2f5RT7BYxM9ySynPx218xaRyeARDHXyPzPQPxXKbgzWmHU8hwPZXY2L2N",
  "key5": "2G97yaZzYNVPLHWEsuTsVkUHXgvHn8hmUsuLzXFrx1dGtyzsw1H6tEUSGoq9qLcfKgBk71eJEL2QS6JqJnjwReY5",
  "key6": "UDxEAiFxEKdVRVdM8rTfoVdkPvgKjQydNyuUbJws8LRLLfvsLUswABiG24cimvMPzKuZqZ9a9hMe8Wvf85i1w5k",
  "key7": "5qZKubK7AzKWWpfmoPWzqdPy9z1dYqpqtc49YPxTFoUbEERcm8fKitQXmjSoF1UpaPeAECjbp4WcWpSy2EqgTM4g",
  "key8": "5xVgGZ63TMVVxqKowcVgdU59rerVEivRHscv42pR9TobKGFFxfEyj65LCFHNKpjhwjDLLAL1LtB2iMoZumisKRhj",
  "key9": "4KBNQrSrM1TnC5aFRdHctAPxgHPPSAKBc4A19pYakb7TwHdpr64iv5JhV7QPeQHeAxPXfywaytCpeuhz76vKLKS5",
  "key10": "5wZg4LeZKUN9g9R6iwEmDxefGPbU6hKHiyMdfWuFyrpPsJguyjfgomhTpYQTN8ZMVvzCF8F4A7R7rERWhoap14BU",
  "key11": "3Wnzmcd7ZDoUZB1A1jgNivJFqwpyuqcUUjhvYqTKKBN3uZh1uzmsqzoYeXKnzDC9kNgMhQRVbe5FMrWnX4HD7x57",
  "key12": "UNfpFLBgAdq34sQakJaAQt2PVVMDqjgLPoLjqxLznxHxavxR55TCXNhrMHG1KR8K4rLj59hwf3sgSPEf8RbPNub",
  "key13": "3XGz7oY4UBnYkQ3wbxnmryXtVhQKVVx9vnrKYnCsdVBPUQ2fYB26w5bGKXYgk1V5YDFF4U4kSVM5YbszwhDTSckS",
  "key14": "49jKSrZf3tHdhyV5SDEFxKijJwetmXdbeywUC8TrjubnJBvB2A4bVCe7LgAof2SwXA5PoN3nSED7ZsjUp6HutZYt",
  "key15": "5XqaJbCKxSp8ZXMMAZkfj8HJdKD8WKt1KUSwzk88tEk7XPN5JzAc18yp3oqo1Nx8BzGhPLJzWf16XxvE52esKEnM",
  "key16": "3SfhpGsid43gGnyK2Hm6Yi5w2wJHEMmGQ5if8kWxNKpjKsm2QhtzeSKGA7bve5XxeSzRu48Sqgj78GbTBiYBCUxS",
  "key17": "3Uq2ehiF6QKrqzbT1TppDspNVDoL5LwwSwuE6qPBcMjC4nXXEp4xkXUH2GQnM6PjGES6bkWVrp6f8TZwAAQ1DaFU",
  "key18": "3bzb4T3qeReDkgmBMSMkkRpSjD2CEwBaUnAf22gkiGtQ6WTSoAgZvqCruc8uhBzsdoVq3T3gnvjwLEyPRc3VeZie",
  "key19": "4sRHm1AFsqLZSGw8cJRDEGimSdhYz1gicyNTTrwq2V7MVMRz23Tww1pkPLhrBHZ65T1Ks6ikXSygqn8mB5wPJvjH",
  "key20": "46wKZvrCmtQw243dhwSPzFjjY8w5sojDRoSiLzqmLFezEf6KoCZAPzXzKSKXG93cPKRBDkQJtvdw9xv37kWjQ4ab",
  "key21": "34QtknfFDzF369x1KxZWo7i6cq9APRkfvShMVpbw5j2UyrACHsqTQ6ruGxcxbskAGNyaSWihNqg92dheeDAmJfq6",
  "key22": "31omWTQtYakjMwpJYTVkZswAnt14c3k6o4a9LQjpUTCpbsoxi9FEM7h7KZA8WZ7AdcqNJVMtJohvzDaFWp4as37n",
  "key23": "2DMwkZmsEqmbAEbBFhCkZiFrR7EVhLNySkQnburnXop4MyJKQzUj3TdJfxkvmhJs167xPMXrnHayWLzV6gAWWP5W",
  "key24": "4eHCN8ZJSunsqb5NtTfp7RWWbeZGLMY1KaWP5RYPmWKF3FWksx8JKJD3PiiW7txnv6zy9ssxMhxU65R3MJpZUTCe",
  "key25": "5eejJQzAz9d1PwaGi9ecGKDumdCWKEM7YQyobPC7RTrGLEHxeaV4tqtL1cqT5Qr6v7HY6pptmfhCkfj8e34YYN8L",
  "key26": "KqyGzuxz8YfBCL69NwJT5y8HMLF84Db7YXHvPgap3szXkVwN3JWfqUvKYPk2uvkrd5upAnLmMo7UWR9fhRkerSa",
  "key27": "Wmr9yp7PRf93DRhdPiN6UpVyX2JDH17Tf8FzK376SSSbAcov7gGVuAPAWKD4aTns6Aq3iSYXRnmdQTirrWLz6HL",
  "key28": "65bz9sRujSUuoj83de8SuUznpqFbaGrEYVdvTnwSEK8ZCrnWAKZyaSAyjCyHb9BPmEYiKnKRmAqtQaoaNLPM3AVw",
  "key29": "3upWj5wnSpMCW15u5Rfzkem2MqAkvGkJfYpiYKj1BcsamgLdqPKttrfd1M9gZL1xwBVm65ofUYo9FhVZev18p4kw",
  "key30": "62DVr9KBTTUoC2aA1j9ZpvbmH79SEvFp42R8BfbxWc7xJDrVjvvvgiRdcPCNbxLQXYJjeuGy1MTHBGmvXKRD5gy7",
  "key31": "xkaesg79jnittS6cgrEiXrS68L562HwoDHT2zXcZPN49a9fYY4Z4oM2aFVW1STokBnJ7zsG5PxjgxwgGay6hfyc"
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
