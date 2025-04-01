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
    "p2os1FAxDXU66z3WPcX2FWMp79Ty6DvzB76Q4uJ3zBMVGRyX9csVGs1vVtbdLmEm1c6fUx1ve8efShpbmRhwPQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gi4672THHrzyGzpxTnSV3njCiygSMnrgaCmeXTcZqNFMG67j4YELDSL9nF4gsR6XfgdCvNbcEnm56cHe7S614HU",
  "key1": "3XDPBww3ayiiDmr7gqroCMqiGKEbEwqtQwiRwgdL8YUKy4izqKU9KcpEkGCqL3g7ZaQdLVtyoa9cZv41qRHoKixi",
  "key2": "SBnjx6xcMS16NiUyRkEZEfM7kSPwTkA377giW8aR1cAJz2x84YkMAKaz6rEBwHF44sfoArC7HtiUgWkGtBaLTxv",
  "key3": "2hxpoT51Z2fdVi1VCF9F8hWwYn9CNkBDFmGbeTv44mKfMJrRg3Vie8pUMVL4uo7hWSGLi8FGw7Ysb9aZsB8xezXy",
  "key4": "4YPYDcjZycoG4AE1j6bCjipsTAZBJmFNKQtDGfxVVjNEQeBAh7mSLibK3zeVDtp6aKPtHUHgvQSnzJDiL39te3MK",
  "key5": "rgUB4UN3hhuQv1VKL7TVi844z5Nnvyom5wHaUgsFzd6iWj5284dUkwMRkiA9YCJiLbVuPC5y8WQKZRjQGrZqdew",
  "key6": "3isSqsoXhgsqu9Ux5f1vAZSZScyYRHiYJupP1zv45vMwBx1CvRXSpNiGi9qhWKvR7zZsp34UZ3ieY4KZKx96Zj7p",
  "key7": "36Qi2cVjJh1VzsMDmRAZa1CPXHFKcXvz3vLpTfJd55qZ2LC7G6XweLfqLC99hFjojacQJcEp7zc45erG8BN9qL45",
  "key8": "5GAfHyuVzyCHprrmfyncn1yy3b2SrupANmeSP7G2S22hNPwCQ7Ffd3co1Ptr4cTmmo1y1AzSdkHqcidK8GXg8Ymp",
  "key9": "3DMdDV6Y5aSUbnZjQP2w5oHygEs9cCWummDvmba1ECj2DWcUpt9yFncHHyPXoeWbetUqpQ6AANXJrWdHdVEy24tX",
  "key10": "4xYvzbfHsrydCqoihJGE1XoGRpdc35RZzGBXMKq4WKWNhTyfY3uvGUJf8nt7qSk3ZLk3N3qJyq7QxFLPKTBB7iSo",
  "key11": "3L1XfSEipdmAovqmBkgXAh72g8GRikVWfGByTdTeqWsNkQ8cbLAWu8WCiTdEBh9vjqKSEAojGwdS8n8ydfirFKqU",
  "key12": "5NTy8ggToKRBYbW52Ago9Ra3huyzSCJmZkiGHE63zEmQUDhAs7S3W98BHUwG1KQK5tQY99UJ4cYKT3GeKxp2fdQA",
  "key13": "5w7Dx8uaRXYQQucNi9LwjaJErjSh75W1XYSVuA1fJEHPwcuNEJv9aHWzizwwVK4rYCgVRCMcqSR1MT4JkvwGVBhM",
  "key14": "8dbAoDBx1tZf8VWjsR3iS2xuJ317XbYqvDvNq42wS5uq1AdN7HfcV8GW1wefsPWJ35r5e9K5CJeRr9T7ipGKrko",
  "key15": "62njDSbMbcbGPoDzPxT4RdgnyLcsgXvxC3tVEiq7Quk2w1p651o8W8M3V9hp35toGaXxGhqEwMoFH2RPdDkoVf4K",
  "key16": "5bnJdw462SWVcqmFJpxxXfwsDCMLKw4sSgSzqyebYqGvUQEuNdCSyPNRPtDfum2oqadhjtkWXuZdaAyH5LzmSxeT",
  "key17": "3vsWAWE2o1jrWSNenmvGXJszNGDJKCWBepZyzkG5gBQoZzEQNUj7mWwAaZmLyS4jT1GUaHPY3MxtoJVP36hx3GSU",
  "key18": "bKY4RcxtUmA2MHC9fiKCgDAmCh5bp3d5bbYc3tNDW6C4q18A5guotqkTGbQwb3wGsqwAQd9txdus6iMCQ4dnMW5",
  "key19": "2cNrEeFLXRaKymj1qJzTm8AyNT12eDbuNT5rEXjgnqogKfRZU4ozDHzg5E5gNiMbVXb9bN28r55oCA7jCHK5egqW",
  "key20": "rvkNbCcxKRWeitxtECcNBTSJQMB61ySMs76GwUGFqyDkYPHK9SJi8E9SJAvj317Du4ZKtQ8LYMY8etkRKy3hVBS",
  "key21": "3QkdFoHJueiEmKFx1NsCnHNV3jYsF1D1NJF5xzhH1vzZmktBacPqP1jDs3dATZ7nCDhvMYqG6gk3SaVQn1C6k5QY",
  "key22": "4z1tDu8vMt6WVSn86Ai7akfdBJtj9Qrg7i1oGwQUnEK98TXD1uA3TXtrPUSRPZqXwLBtKVixpHVvZiSZiSiNcqr3",
  "key23": "B62MS17g9noquFJJjRr78dFugwEfdmWoFUXq1FYMBP1uDzcxepgFXqpETnTTBfhjfWruNkswY83bPV1KWbxNqGD",
  "key24": "3WCzL4MUqzotSU7zkExMKeUSJKxtLPwNe3e4dptqrcCEicBJ3XVg1q4rQxgvN5sqvCzvHx6EbWe4uW8Kq3PcQs7N",
  "key25": "5cY9X4qoH9RkHuiVgMfkPMfJCgT3nMwqkPgGnVhFVHMQ3etvYocKEWTeepq8cnWAFR5BnCgES2Tnbpp6r5XMKpZJ",
  "key26": "DkHigB2iiGivbZVgXVKr1qjQuYG3jgwFdDDv6sErW5T4hb6NYybKcAM8Jh7VgNTik3R28KBAPBc76LdH8wkma9V",
  "key27": "222xbHFW9k12qy5yJsogUJJ4yt6Nyimg1WuVWRVx8psbtvTumBurNXb99XtYWKsPThBaadLNNssmhGfE3gyt53zV",
  "key28": "J3By98kdPjMkXb5mDtttsXGGBHor9s6RpVhH9eUK39NvJhmt4mrxwRFkxbJRYYupTSjdKKyD2uRuL6nc91rYaXG",
  "key29": "26eMUWgwLBQFFdpCMSsd71KxU4wX5cFGBHuqwX5pyj8goZNmf6Mu4MWJeHzDp3xuz6jThbwQ7dMB8mKBPzPtUZRo"
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
