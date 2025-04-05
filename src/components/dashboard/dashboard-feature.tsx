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
    "4FEAi3xkmmu18jERSERHiA6FWbkwkmbe3WUdbAnB1K92oA3ELGUyxYQR21suojSTmbMb8LE4YZ1GytKtUxrgoppf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HBDwGEijn1KpTN26e7535SZbci57iY72ygLEMLeeBD5ruGPxqFTj43W8DSYUW4kpeZdNV43sYH7T63iVWEDy8xT",
  "key1": "5bpQUk5cRmXPbk62kXqGxPkAWBZWVpanMwk7UvqxxWJJ9SdQhWrXhGBWPw3U6gZBqYR6VfdkipmiNoiS1ajhDt31",
  "key2": "4uKAhwCAAmvfwSJ1YccpQyu74egZ4YQqSDs6LWQw1uUCpDdaHCyfeXV6W4EHgWui9fpi4i94rhnGfLSqFqoG9MRw",
  "key3": "8KRi6fvdrGqRJKnGa19NEYUjU1cdbX1MmqHZEt3USL74i9CbGhVNq7ByKfXxqG9gLsjss6qPMQ3iQ7AUxCXJ35w",
  "key4": "rRjvmPAX9CDQpf5x7nq6GHNfwSCDQZJjy85qjC58PjiBwtGyGfDiuz2uhTR8vAvsrdhFn7JwNQiT3csT5jvWCfe",
  "key5": "2QfspuPxBBdZgmHZvEkzR2dR2o3nYyLf7k4ZcZQnGCbcRSNL8TqcPPYxupUWuX8j6tv7rohPtXYfiLCvtC3NjcDh",
  "key6": "2ee5HQEJXj1hN22KBzpYYWENMe2F6syLcjgpbibrWsMeS1WcR29JSDMqfQodRfr1js1d83RVYTWCih5uXPbFY4vd",
  "key7": "2XNuJHsc5SF2WMyhdHiu4PG49NeMBTB39tjGtHaW92ZrJnAA7vM5V4Qp9HUV11hPhEuGsxJR76oVa1HS4B7MCfjL",
  "key8": "4pnmgDH9uxThYUaC5441PEAvJKx5WQHUhVzviwXPspviq8C67TrMW7hiMUGRrLPezesRxDfpFLNUCsMaq8zhpAGJ",
  "key9": "3XVF14Xr77K4mYvrC3mHMQXYfYABz8k3MzcKZFaDx1Za8LskThNhxr6gQX9uorCs8tGd5WG6ZqwBcSRaWg4oub2J",
  "key10": "3XZ7NhmXTpvwWiwetibw29oMws1WQULwZ52yXHpmQVr2P9bizVDarohQHP5SibMFv7uy2SWCgTsccug2twH3WrCp",
  "key11": "iLCLRVwVurer3t6fc2pVMJGUM6xGZTNwJ1uf8eeSpwVSRmYSM1FtRvspMJDWKqgbmAw39EQnaZh7MFFk7WnGeU5",
  "key12": "2vhXdsKoSBg7Anj2xBwGWDJrS2SjMbRZJJm3Msba1pk6xxCczQXBQRUnpoUvioUcrCXHVsrLorgkUGjZwqTV1Fmy",
  "key13": "5qdYdypZqGgKDSeAi2rT7kvKMG5kmN6KzobgvvqP5fEGHn5WDj5uBGYJjqSt7hmPwXE6CdpfJwJ6MJfvbYuZhrdA",
  "key14": "2yL9SbpuE3V38fAp7chG1H8CqZddUs6BmopmNQ84srdZA4neCgZhLPHoGTBzvrX2hWbyqec1bScx4eqeo5ZdAMMq",
  "key15": "3RsTzyt6FUWTcTpQNyqnqDGMRpbcBDHqcgXXzBsMHDKwZRU4C3qbdG7AhwE52UyGg416NavyvZHoNDT6MvDYDqVP",
  "key16": "594RoEwcG1fG6xcTZz9MkdjuujLMxsaXh1NRFTD89k6EXnFqh4DfQT76Pv9dyBy6kVg7BLLoD1XNpjzM8qwtMR4x",
  "key17": "5kwmM6dp4XFhsSbkpKLwNcyi6VUDcjUxBqkrtrXNFcsYB5NKFkgzWNwXkW49WhTxmQGTSJdt4XDWu8nUV1xRkUjm",
  "key18": "4E7v74oLMkwwTXF6gUqNuAKCLRDdCYtwsCR8Rx4sCY9Hxbom5VDtjNGLifmojgL6W7qWQcMAdtD2VPGuVvXf8Wsk",
  "key19": "5pf1eaHLiu1zKGZqdtcvuJSTfu2ScAaBNX6m6Fw82QQ7utMZt63YQbyCTGaNQkmE85vHWuawLEuVTx2HcPW2yT3n",
  "key20": "tx6x7xo7aWFxaTGoHEJ3msuokhXDwxRi1QbskSG7gzcbPyScjoaSfAMA4o5qeSHLzE9P3gD5cMVBjaDEzqxrTXW",
  "key21": "itg5W8CrWcyBhqf5ijyS1nzRiUFK5k7F7LfmN4iZnojL9qvtQWfn9K8Q8i67Mz54QD8yCzB5HEnuZ74tr7G68RZ",
  "key22": "5K2cQgD2C2pQfxApJDtoioZDpLQ8zVAVBag59w89txaqSdCkHDc2WgX8Tja6d3RUmxpthjMnQ5PajCkDLEWLRutd",
  "key23": "2fKMfA4WdXggPXFxvAo28AuihG3Lujp66TQPS1vk2Avcb6uLeHn3UcAKtqdEzsMrxQ54z7ETZSn18cDpfuLHWYkp",
  "key24": "grBHAqXenv6BvCLRgJJMeRFFdHWvUvqvyuaYdtuNmVDNvqpxPqiBec8wsYfw38agosjapMRCfgCNsMKCPKGyY4V",
  "key25": "MHpbqY3unSR8SBZKJCT6VnqzLsZwTsuAVesz2AZYCJvrEaobgEjjFcd6CXukVuWr1ykHLTFbZ9Mv3C3aaAFPJ9R",
  "key26": "5b4SMNhNVb5Gu3P5wgJLYS2p8x49rywRWDZCkFgTKJFkcktKjyG7hakPgDN7oAznWt192sWLCezYXwN95imfXWph"
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
