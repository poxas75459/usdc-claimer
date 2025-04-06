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
    "4VADtRy8vbcxf5Q6JPaQXrf29b5Kh1wVdDr4xYowPiPvpcbQ3hGdnxjcmi9arxRUqULSDzwa9rDyrJPqmwfUUjgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3syYEfJFfXEnE8gkM1omAndRQgdSLvggQGeygQxD5h8y48cnZgDJDU4PTQmiqoNx7NXgxdB36EiqCpbLhcMvg9Yi",
  "key1": "3mKbZXH5s6x7i3hm9adNFhQxgkiHPdGPDnAaWFwTH7hphqwP74QBrXnatAbwcsJRqS77rTw9eHXS74qa1DL7FKHm",
  "key2": "31UYgKCiv68fYNyFuTTTdLiMoVBNmzCvWx3CaK8BtABUd1Fqvck5iEaXVHvoVDRaM4z5KqPoogw4oEFjKDxd4nVX",
  "key3": "441MsRvyrTMG4eM2kaJZjdMW7TTiZ9X2rNKpHsj4Q5ikWfRuCkcDWaDvsmkUpZcJz4qZLdpKbVK99fhv3gVcgTZ7",
  "key4": "2XsouHx87vNaxHoRxu7a9J2xBCNk3JdGqXwZzRyHewTdEoqXkWUkDDaP4uK2Y7zBJHzHwMPANVvNJCfYKBbroS39",
  "key5": "6Ap4YfiNhqCEFcHRLGDLDUG9c712rP6S4VCNmE1eJWi6veHnzmNaETkiUd3BwC7K164LhuUUhQ5iKRjwgWh5vmc",
  "key6": "5rGBFZzYVSafv5wJ35JFdRgLC6AkXRXGvrc1KyAzRdutmkjf44ZNpFRLQJSUTk3m7d86kdvqEmQBfH88TQnn8yh8",
  "key7": "3ch1YMgRR11FthDcSwnw3W2U5k1y7dn3B2vXERyEaQjdTSYvugrj1sV8ccjsuFejrMebNrs5A4k4a82525qKXRWn",
  "key8": "23DRsgTovN8jSXw5y7kfrph5yaff4TkumUu74hv9j369HWRFEbAnVMkr5WWuaMQWteV8EeWZxuHGLaZrHkhsXjAc",
  "key9": "cBNrTsG7aB2UacVWHSCMHRMnCfeiZgiDGJcCE3PEV5Ac8HM1u9hf3NNProYdR5PfBcw6ZpCMWtBFHW77fuJesyM",
  "key10": "2SUUv2m1iRJ82BDzihxQtdncpJUxRcsJzFLGbYyGSBjr93ZnyaFpWpr5MK3eJz8TsiAWX46wmgRgKD61uoUck5Uo",
  "key11": "3GXL6ryLMmsjN4DmMRsUXZa6Gg8YNBXbedMwonLpQMNp9YQdJdQ9zNRHDFB9bBEa2fFQ5iJqrYafCShDXgZJEfn1",
  "key12": "bqCqQ7SSgy77nLABebYsGMqWixodPzLE3qTRmeECFwSz4NuyePp378i8GhwR1fqLtpaVoHJeD9oBRepWknS8nXB",
  "key13": "5g42qHT4eiFvcbU4j6pT2MhEUBwSkcoiXN4LrekJqqKEYm1yvuKtEwTyDPc6XeVBwNHh3Drg5x47Cyd18eE8Dvdk",
  "key14": "5CgseeUZvH9sR58799AG6WJPfESKkJZcs416tpvY7T4F6NiJDVbDGr64rTJgV91cbKACSowM14MxAVNk2NAG1LZ6",
  "key15": "3apNuVeoqNCmpyMiG7po2J42G3NThEWbkTqxwaPTXaSn3ZngZxJur554oGcJp7eikAL6GyJ6zkbEXQ52XtC9US7G",
  "key16": "4gLiWHvg3PHiKvPNmNQ5ccuDvX7xUQrXhux4yPSRnhT3vne3drCicspTKuZNu5wWZ9v7RPtC3kioGGAA7FzJYABY",
  "key17": "5Zmz5BhaX66bQeMGTYQM42jABuvoNtAMraafMmoeQhNapYyPbP7j2TJPFqzowv9ssp3rQc9G2x8M9psj5U3AFRJd",
  "key18": "3jPnjrGDuHeNqqpkzr6nKRduuH5cZF9h299Le6nvjarde6qHcJJgRzrgMRJi4wBLJPJkMpvZsKKsrJzi7hSD3Yjb",
  "key19": "35hvi8yNjhWjEyVtmeJoAHh7JfT9cvQ63jAZVqrcGmqRT8hXT45jafaXCpbK7bNUBwDgwh5aZv434o9zDnzKo75D",
  "key20": "5sz2jGB4zBLjqMUvyYnc2Tqo1gHJX2JcSNkbNqKfyN6NJhCYzxPua1cjqggph6hxRzxTg8qgRbWhvRfWL6fo52jT",
  "key21": "3ZQbPqP7N5br4dtYM5chQ8TJMw6h6mA5DKFfLT5pwbthimb2yEW3NzYohcdHjAoYqtMXkBn7ro8xGwxyGyXuWz5L",
  "key22": "256fSuWQdw26X3p95CK4vQKgWvcK3UEn2WxT8LVbSuyFLRd4v6gsUGd8DonLgmo1WUQ4gQuU5akhr59hqZuKjaMc",
  "key23": "3HSdEu7F9QMTzWTiZNPnjfbih8B6R7cgDatPfRV7Y3saWLPijM5gfZK2WnUxh2UVbfRGNVPDeucVVwADKui9KYbW",
  "key24": "3EyZLDc3N2qUFq4sWbadtEQ86tzXeF8pTy8k2BzUhP3sXEUK7RBu1ecEXM7mNmoqS8f9ikDsq8QPLX7srLUJAV7B",
  "key25": "3hUgyMk5XeZNettrDiou9kk5SZeheyqE3dhTF82cgr4MFFcVJKJ7iH1grKTz5W86CkHSGtEJzc5hGPfUfuEd78U1",
  "key26": "56Brx9dvie7ZemPXGn9rfTqzfbhXWp8cCN4j3wkNjtw4Efq1XdDknYynwW1oNWyZf3quPCegg2D8mTxer21FJZFp"
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
