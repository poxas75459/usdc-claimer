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
    "2Ca5tobkAqU5ERNaa1YTJKQew3gZjZvJYerR4pHNrc7CFH1vWpeyxPjcNLy5L9R8qoZiFQgKXsaQ2br3hKPxSqSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rCR9b879yJGVb7CfUY743bt5RFcXWV81HdiLFo2k9fskLeJ9vonVtr7RNqrVq7B8La4pCi9vwSLdNd4vPm7HhxP",
  "key1": "62jzwuBoxksmBE9hXkJaw2YpwqtT7UPcroz7YTypXxiHZYJTPto4dnwZwEv5UeEFVjiSY39w25A3bAP2fgKxpKvh",
  "key2": "yb51A9XmwkznsWU3ai4EijMAQu7yo8QZCXBU17Y7SQoHoEXndtPdkHYDzzC4v2mEUe4ut6QmRrmCBVuXqJP5jyJ",
  "key3": "2uP6joRpEKJNHkB1KTu8FyHNU8Z4Cz8TqmPTTkBNYNw5hNeAHtxXjBvHCtbSv3JEXLpTUBEms572unqPhCUHRAdW",
  "key4": "48JAffjQs6mLCApRy6vgcP1WPfHdY5PvqvBAQ46kxUzon5rGTsgmL1ivRZQgcPVovaPiDCssLJ3Xi7BubeUqah7Z",
  "key5": "2b9Q1UJuiPsee7KLkW1JGiJqR9zHLjjQywg73qu7ewivvc21etzFhsrGgrtLUQ3Wkn4YR6c59gBgU4A5w9bEqaPm",
  "key6": "4NJu974YMiqPZYjhgQVcKMYo3FUBAko7BQ1AoDx7X4depaPGGbySJWNj3VSp5ghERsJ1HZF75tXLeaxWfyqEbLng",
  "key7": "359GvdcvNSoixy9XoSUiWcqQiU8QeHKuYjsxLAxdoMZeEMUByoAgiNCo2wSyBmLbhLhMgTxWkpaedtmeXaiGZyVj",
  "key8": "2AqkS4QnQ6vq4rZKGj1RLiuQAwfSp2mCz6nGhP1BUi1C9RhPCGbgRBfXSDB8QdyLeUNdUPw5riYVZjmC29LrrKf6",
  "key9": "5tXMRjR6dGnuGgsZShEf171rL56WRLuZ2oo8J1qsQNpGW8GAvM2ykgvtkxP86ypxKxeCSvwtmVb8hnXVY2HMCqaf",
  "key10": "5TVNBC2W31Fb68N8Tm3a13QrJLkByu45wBZ3nc3UtoXksnb181zNiKpMbD43ijcRR7XhPZiTcgMjtqS61Jef7cXp",
  "key11": "4c16ZbTumUexMyU4t9p5pm1hSFtN4w5a9KDSvguBnmDnTAAsPgeS8D8vVqARsTXMY26E9yACZ7YLCS96aMQagvrZ",
  "key12": "rQtTAsernbGTkRoq8w3YTqUo88kJFsS6NAh7VxjhrmCNeWCPLgk4yXPZyS64DrN6868cjfnRcpSq8tLL3QUAQeM",
  "key13": "56rcUH1uyqxw8bnMAGFw2tTMqwU1wjoG4BtQVJaY7sYhUbE9tBvzp8nE448dRwdykznkyNAL748KrtbBhLZtRhXN",
  "key14": "AwQY5P2hKv1ygGKHuuUQ13sWEHWDTZ3rAnxtMADiV6pCSLkRCGWipYMUtboWuXWuX4i1BrcsaJqfyQ618SLJcdX",
  "key15": "vkpiiKyX9GF12Wb5qZgoHm9WMcSVzqyx4n33aZwVTESLkzsK6vSwHxL72wSDQ89xJRQJuU9bHYnBLHGBg77g7Gk",
  "key16": "5VNJwaYPTBNb96LU4CtBxnmhpY64ZswuMfRXvQE6Y81rww7831mscUZX66LAN4oYEUt947JsFAgT6a8HiW72zmmg",
  "key17": "3WbsACAJpoB5jYBGoT6fgBNtE67sssrDz4fskP8mqZrTPnRi4ijWLRqGDa11LRsyUXvixkUnhy59dPwpsdRRQPjF",
  "key18": "gJ21zjD6Q3iB9eAGSjbqzAkxr4QCBvCn7RhpV7FLXG8ETFbFUwUzWnCwozNdQPTkgGUVovSXDMDKA21cxQJYje6",
  "key19": "3T1qvnv8Eqy4cMFHorJQCLPQdLTqKLkywhbG2Y519FrUpzpWhtumKLYr88PDj4ePidqhZdof7FyTr9LA6ZqvsrzN",
  "key20": "3U7j5MYcA5vewCy5Tmf7TH7nzV3EqF7g5ybdoft2pXwv8mDoiLJ4wTjDksvruzNSe7QTjMuLMRAhHDqCa7oDyPTc",
  "key21": "21qyd1653rEMFerGK8czhfyQQqG4pyqTezWEsEPYHo2DrKkA3tAKq5yWQs4Hei6iB7yrk3r7XxeTFiJCcM5WUbGz",
  "key22": "2MwQSj2RKQrDq7U3f7qRzyFFVrERx85UB84kZeoN3MB9dyx74xzU8RRwhoh7pS47x5ghnxSgwasDZZZXJ9DnztTm",
  "key23": "2JvSfiq1YNDYdw4xHVyPFadRdcPcwSWae4ekQWs9uRoMnftdwuPGo8ELJqmTX7zBLE2qdWa3yQXaWkX6UcmbUcqB",
  "key24": "3AyypuXxVnXNd9Sw95uUNcmiq8U3nvWHe6XRzg48KkpHfMW3iCb6jFiaGZCcrpobQeMobUGvPvnLhucwxvkFr34X"
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
