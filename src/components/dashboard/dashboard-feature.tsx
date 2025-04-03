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
    "5UfnVh8Q6q3PdxsWvYoCuzQtx93sR6jLYKXHT6NBefjtxZGyqMYWf9VeQ5aaEtBhLvNKbjdcbo3Tncoedxe9xgVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AjMagk5V5PgL7tLvbAFoKS7anG4EHfNb1b1ubyiNBmGoqXhxXx4LRFhkJs6F5MSCV7jSJsRdZrcHTPNwmq3gAoV",
  "key1": "4sXaHX1mvSH2haTykJX8Gh5MwyGqDqNMs5bwNUyWjxLdUALKMrawh5QftJWmpaGczQtAEStLCjesV1J9nXENrim3",
  "key2": "516BWkVXLPRRYHJPVnUJV27H4tFh7WdJpKoQuAVjuT5AswVY41FHbJhwqg9QsmxneU8xb6jA76WyHgEy1sqQX7aV",
  "key3": "3Qwr6MnThoP9rPxVRMiXrhxqGHhNQiQZR8JhoepRUP1eb6LKiHNdC3xmLiE4yEQNhP7RsBuWw2cpAQzyfLnXiHHd",
  "key4": "2aiQ3RD2rddJYToGHALMxRVdZaJfveqcjZRD5omgNyTDVn39E8dDLqPXZu4SqWt4db6fsD3toSxApW7tyKPry53f",
  "key5": "2ssGG4hRykEsj1Xg5qigEkmwWFZcR3CGZgmBw5GZTGnCgA8JnXNj6GG5sVFaTan7JyrCqhtMLhTXGZXjhATfkBXd",
  "key6": "WCr4a4yX6BYjHVrsed5SViPXAWoyZRbFD3BUoEZApbSNMXifDbHFYwXYTAEgDedrAPax3R1JveexfQz8y5YMx84",
  "key7": "4ZuBozg2SZNFBmPXfJ7LVgJiGhNJJaJ4jPcgfVzdMWQMv7BAwstesZbt3A3JnNyg8QPWJyipuF1qRhL1MH4i5C5u",
  "key8": "3TRsyrUHqN2GzYiYbJc4hpAPxrYB5ztXfVQNxcgQAyHgYdv7JU9T9GG1DKnnY5Di4THVL2fkMfN7FrH1yXgFfbUK",
  "key9": "2YhKJwvpu9Aebn3ZjHKZ4LGPmf3p8z7Sq2vkLV8G5T9Wq1NgCS6ypJx56weGqRrQj1msvbanggpawYW3adnttzRY",
  "key10": "2xSi9rVEEdxU9MZ3qUCpLXTeZn69njeM4ND2nQ82DX4BNEq6aibpfDL9ZdTG3a3JQb3ueuD4sYA1jwJXLFkYoMxE",
  "key11": "4Rt9UfuHd4Guno39rgMytX2UxkzH7bTjAJvUvWyQZ1zhgRg37jPZM69U4xQmDTkA5XpXAzGGpomPQ4aC4Qm8j6Tw",
  "key12": "UHPQGgBndU4J7W8L92G541BHA1PU48bfcUgfqEs1Q1uGkJ88iNzj2UjpmbLmcQtawxNL9NngLxkgPmoHMcQP1mm",
  "key13": "CZ3V4HpwWQfHR2CoyjPMTQTFp3sMWvn8F56zxAXGhvAp41v8F6FfQokiXmfAyRHSTun9WgdgH3Nxk9Kgx9kF22e",
  "key14": "43zzkT2NHApz9T11RY8nyfBkxB6bhac1S1HbTkY8ekNuTSGf72jBYAa8wYCznkjveKC9ERo5e1HCdEV41QBM8Hpy",
  "key15": "2x1tpsPri3HfJoyi2qVbvgGqSiFVC7kaPFhbgfrsS4erZzeJhoSb9inMFWjWjTsiwahJC163zXkFAgtKowEzjsbD",
  "key16": "3rAMxfpd1vMUFrnS45hibCJVauj1CwtsN4dv9hsAZtSjRB47YZofr6CRNCFDrf7nDkNkmkh3dXuKTvkDChKUjZ3M",
  "key17": "4mSz2ghS9ynuquJ9GR188pD4R2kMc3QEHLtt5B1Py8Pvnu7WSYMEWsXwzkUqp7u95m9oki29MdLA2AmeL2PRZcNA",
  "key18": "2GToV4zuLXfgmNWXdY9qVj6QGy1cfKKLkCotfXZrdmGUgGERgTBsBQBEcpdcdWqZrj5g2x6uNfo3jfBdk2hVQWHd",
  "key19": "2B56bT7Ze7QWbgFkDK3nsy6oDBUFy2gS41U6YmuhSXvXYhWTft8Yi1JLk48bUgn1tm2YnJRRqkGvF5B3bSkGvy9m",
  "key20": "4NhyMm5X8SSCkSvrSxK8iLSTqismwG7ndccGVwUdUhb4YMnu3BtVJpigNaV4WrPtheFv9mfVVSMndzZSKPDKD8gy",
  "key21": "4nXZTw1WUkLJBjJD5xv4ZTWr8mWdpBQfd7wiwox3pTPN663SL7K8x2tP7Pu2PXLwXCfJNsvwPwV9LKnfPurK8uMu",
  "key22": "4rDnAmHyMamvqsZDZy1Z4KyrrwbKRNaEbeEH8387B31ipyfVdvigpw1L3o6gHQkUMh2oPBRiKdH2xnSE1HH14cWY",
  "key23": "5qPWYDSgGUG9D5yCzRAC1cHF9kxgCbj6T5TJsfDVXovhwxSPh1HBy3oWhEJeiRhKQbYfDTR9MWEabNQyDYKeGpEr",
  "key24": "3iyEavDSpRLWs9SFBVFrqdxuuL7TSZuqvo5Fdwo43kNWbRYtyMth3aai8cEhdWPfBShvzLXY8uPXpzACrSHpZsRB",
  "key25": "4UgMdof1mS2ACtP4T8Hv2D4VDkxdrywt6Rb8vb7chjMWPZ6ckHyCG3kMJxD7W5gvQGtVnmg3ci6GHkCBWNZonduJ",
  "key26": "3Ty2ermSqK5pmNKMcGqkJ59HeJ8XYnjh5qPa3dTkq1EHuYW9G8bLUXDvgc4yBbDa9TSNvTmwSNWdYjamFpg7zzGg",
  "key27": "2XH2829zGbbLhgZt3gKGuzwvDL946nZ2DTZM19p6oFLmedutXAjNJfeVKvGAHffbr6YNhnZJKYcnQppetsRw4ZxW",
  "key28": "4ZjaSKWGxeaFT4aoFM7gM9ANDayybozNivm5rBbSm8ksWCqdoKTrr4TEdhqXD73QjSW7QHuSgw8S36joZPjy6FEi",
  "key29": "5TsZsyU3Zjky5EcKmGyngt6RffZqNTtZRP3Avi2rX9rMnLchXiST5ZwgtFFjGqCr8hGn5usC4CZrsDU7ktRoqVYe",
  "key30": "47ynyvxUb1RMHshjCF5ovzwVvekYTQbkK9GEoWXwav5nuneq3NLhS6D3Dh1BUQ5pYN58U4Q5cgVCN6sm2WrpwnFv",
  "key31": "f1xnNjEnqwCP4SCGc2Vw2yCXsE2WFAx1UmqTTCJwkkToqM1JoVear6SX2G1wtvqamZQNqzYkZHwNH2skHdfnLTK",
  "key32": "JP66o5387m8GHv5L8GETyaY1rrxLnThb5SuLrxmfDJSy9UpH4sY2Rg7bomK1p9NjcedMFp2jGAugm8rVTVibMLQ",
  "key33": "3hCQFzFVVXZhVQnxugtL1NxvEPe31CE6urc1MosEQvSjG2AnLabEXfhuLxWvXxXWCG464fWzpCEtvVZzMP2akteF",
  "key34": "5KjL7uhXyazPpsw2t1kTt8Bt5fZdRckvJaZcvG6Qw8De3NWJc4DH8eRK2RaMxKFLNbLSwuCnFuq3eWKiQ4wvRygy",
  "key35": "5Nm11WvwqA6JtZeCoZBpPaTUcrhw4ifEx8msgJYaCmHRRHNcxe6XbLVh8QL5KiUuoWHVDkE6JPoyCFjdtmhqREjs",
  "key36": "5AYfezGDuaJKfW3e83SXKnt4DqqqfNwdreFJhcBgR9bCoKtwWtVWTmWN2QeM3f2TmcurSRZmxrJ7s296KEKxbuT3",
  "key37": "5XXxFuMHgYhk8r9qrKV1HdYbJxV7WH5reWECoJzGZj69gJUjiWdcmfUPBg3mSnYRzKYK7bXMQDD5oYGaf2U1VpCz"
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
