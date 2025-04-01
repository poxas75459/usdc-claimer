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
    "AzRbvF8RopMP8KGL3TUnNpZNT5yGtHVWpsJgr6AU6ubTvMduHEScMM1RD5eWmnuS5VD9YQKmHm2VB3theZC8MaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U113w9iHnwSzmaGHtCwQxVrS1qBcN46smWbaWRu3pe8tWy3pUz4ZytU43AncKi6dWabj7du4rmrfwwCiJfXQqCk",
  "key1": "4huT8o3VycaheipXSMrDRpnL8v9Yufs79VWGnRadS2VhKdLHVqrgY1hKuro1pcyfK7YUVVfSJxbGVyF9tvLsKTRB",
  "key2": "3xmm6qMfDoxs9w8DhRXPjjrfrjPSZeGUhavSU1MUzao5qvij2cdRz99LQLkwMZDYYC1gw2VbsrdQkSX6gEYcWJDw",
  "key3": "bKNTV8N6p2gMnTvNxNqLF8LZM1Ay9bMyZtjmMLgfscAviY7Ucnf89DN6uzpK8GmNGPHrCy979u3ABQGeQZWbEbg",
  "key4": "33BZjRLNQk4G28tPLbEhHFC95mA4CXmP4sgREXcLVVqgvjHdjiTXRb6PcMcm313cMtapPLZYoAphXU5tq4QoBLKy",
  "key5": "5J2gAvqFfVYK2XgEe3CKJcv8XQAUf8E6wJE12P8sVEgwmLJwW6rrYy3hxT53kxzjCjzQxsdQNFd8hna1Kqgc1Jt9",
  "key6": "4shtiGALpMFwJrrZnMS21VyMDtSn6jH1j7k6pH1Q6ejtQmPUyjYVwWEzarwZpJkpkUdzkWghy4FcJDEVdLN3F3WS",
  "key7": "5Uwv3agx2nCrasTjtqvMAu8BHkRSjELwTAi7G2AGF4uUHVSRZuXsYckWF82zqbvhCjAAS9s7vCYZnSHGheyFS8tC",
  "key8": "5YB3CPwWYAojxTj3goxCzYvfntU7XEayCD5pdEaY9HKEYUfvK8UJsu6pmFPpwQuXic3uTDL67mvS49JDNBrhhxCU",
  "key9": "32h934nfzSK4artcrRHynmLJgCWaAapCufJjNMEdMqfyNnk8nEfP8VceTXD7Nxd7mEwiQPEd1Zs2nNCcnh7uAoCz",
  "key10": "4iyEtYEt5cvEBUDXnwKkTsE3pPoiamVJwHkxC3uUrc7sDyWXn6ynXqAXtAfQ5JtcMR4YtL2YcpnZyaSiWXjYWFac",
  "key11": "36QnVwZ31JvL1KjE3VES6cMVeRn8cYEkBHDSw4VrnfoaQoxGbeHoj2pzCVAjLdfACzQPtYv4wvsYiQ7VidZgvQ25",
  "key12": "633PNhwKBTnk51dXWMQi5PqB8NnvmvVuDhNrjRPoco5wAaRngKrkyqv61jggDr3kbNcGz83gWJ2m9QVzjHV1RQLE",
  "key13": "2vqLXeeVDBP4rpN58XzhQnSKWXgKRRnj9MrxbQ7DDtChU9xW64o9TEVWAy17vM8v3uEo2sqBFyRUtfpaKNi9nPym",
  "key14": "vuTY1pMoK2fy1ZXJA4ak7q3usmrmKsAq4sT6KkoYUaKy1pHqmgyY2PdA8JvPm4U3miieja5nD96hLgUzdoDBQJm",
  "key15": "585CcA8MAUd5yzLRGAgGBhuxUW3SBn9uoevDe4TUioUPMfYPDA7cu8RWt9HspkXjTXNNFRaW4cLuRFsomUeC5ptP",
  "key16": "4pXQ2BHQAQBfxU1RZCCQYL5F4TknG4Wf4U1PftvNXGMnuui8oekYXpcGJb3Y8TEPMjiPNGYh9FJdWHiKz7G69LHf",
  "key17": "5C3L1tiSJvG1TjjywpwA924Z7PYXhNcZ1hAXJRVoSdB7vsQdyW3ecus8W5JxTgdkaR4smnvScR1EqTnUn81uhhoe",
  "key18": "3ukUVhjbrLawvakRG198qNZuaDMFvq87PXydb2Y7zjGuA472dtkaqqmqexA6RJptRHeHRBNiiVvnGhdpNykssckD",
  "key19": "2d1CDtnBUkaNnezAeUiXCJkn3FXLrvJNbJ5CjQtXwjXVg6bMTskd9J9a4Mz6Z5dc5Sb8jDbaUbvw1XSHzRX5UTsq",
  "key20": "2gGZT3YYNqpAoYJ2tBkfvTiDBHSmAyn1G2LWCfrWRxz2iaoQfdQ8V82Mnq1JyZYVBw7PhgcimGiRme6MJVo4J8CU",
  "key21": "dw2uDDh63bFSqo3UKRgguNQjV16scWJhe2QNgXEeSdXYKeKDRR2rbEaq1hJUCUvtYjY2fcE2JsGsx8Lc3icYtYQ",
  "key22": "2Md6ZoY4KHwbRFjrZh8rA1CFDAf4Po1nXGrv8G1JiGSxW2yVcJ8WCvJvc84QRB83C7wZ7dErYL95gsHvkqG6k2ZG",
  "key23": "3NL97PWRzYbkssipVDF25DhYbZ7hvcsfvkZgzdcf5QrZ3KQ4bkMgkw93jmwpxRomHc5Btgv3cZh5M5nLwkDMML31",
  "key24": "3kxUuHPWrMaFEaowjZRC16ANkGCCyDx9xGEhyB8SUrAEuNP3FrYzJ5aTEg8bVfCvTuUDhMXV6XACGLEbKHabRfjU",
  "key25": "2FYy1w2x5mkNw5KzUJq36t7oCuhRtGnZ2KSzzSysQyyn6ES6MPdT7NhrmYtsz3bqRTSqDN6ijzQgrrJDhGBebaxh",
  "key26": "5KpdWUJtUF16dAAfynGGvgZp8Zw4aVA5LWGzLRzUpUrCzxSx3xyFTk5rLhCWRTinhrft9EKUxKABDnJKqLdvWeoW"
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
