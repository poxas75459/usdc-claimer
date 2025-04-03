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
    "bWpCS65o1sJQAsAJmoC5s7eNtsLgbeHuCCkYUzWbDeQ9uzHb4wW6BLmYwnHWiWgqxcEVhwbZ3YbVvCShqGCVfTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rSrPCtu7KrKk8JWAAejtt5KwDAQEtdwArkEAH8UVzjN8B6VAqFneRyo6oGBws46d8Wu4JUhAXwS6f7TQKVxctNt",
  "key1": "3Ugffg5SB2JFT7QQbavsiY2VvPjs8XRqLvSis9TVw39S3sTMHiMRdYA5EapZg9fSh4QuWBc1P9brixqcoDnA9QoG",
  "key2": "3edZhgM6cWB7gBqc6sHoQh8hN7GW6WSxGtNR3nkosAABnY9T96gVJzBqtUKuUTRYGaKZFYscKXmhP3n3ekgqD1Hi",
  "key3": "uRG9sbx8cPzcmRvFQdeo58dEkmAU4A4xAS3V2xGA76f49DDs5Y7eTrLUUwcBBuo5Qn9Sehr73A4rZvH1npUMofq",
  "key4": "4gQ5DmjSS4UtrLTMW6vQe6yg9hVkptxaYMsR5jYUoQsaBZ9bkPg7zj4pfdfdBqWWsmcGPyjRzmJzQH1e1Y7u6y43",
  "key5": "xkX5mLzJGLJ7Y8hKYKShCxqQ8LWDoe38qD5Qxu4nX1tLLA6sab3VGvcWA6cLvrFxaYdVrYy2XPyDdYsNXJga7fi",
  "key6": "61D4z9gqB26UASj88QkEYmoxPLuUxTAPejxwc4gXb7CdH6Y9yFVZokue5rWcmSJ8iJ9ZQLgrh7cqJdbAkVNCfWN3",
  "key7": "485UtP9Ma7Dd9MUVw4HXQrpKE2P7gW6MWzm8Q94gRUDFSTeG1vkAmsMSLeapeVMB8NxcVptobruoq3voZNxTTAtz",
  "key8": "39EWABhPo5SBGgYDYiQCHdpW3ZK8zVprf4czCKhdwbXRwY7sjEs7yPTAhAu2NkRTnEmT6fRRmakPQ8FuEWKb1VvD",
  "key9": "5NVhfVWHL8uK34mLQHAU9cKTBiyjiHjCWMz1wE6bjnxs4FUcpye6hxGhUy3A2Qx6TTDA92raqd7rSkTov57eh7dd",
  "key10": "4w5exiqNBkFo57LnhmeW36v6yGJ1csbgTuEqGQPZWYJLMo5Fh17qENkkv22pYnkcsNRHFb3Ymebxrepgjdzgu2oR",
  "key11": "59zmZs5S8jvmPuiDafYH59YRS8EFAxxYP7P2g6Vzd5hSTk3iCKWGkUYaAdstYY8QzyjLu5X7LRQsBjB69QuEFET",
  "key12": "67dqzi4c7FS8oeFeHS8QbKFv85T2WT5xBmp5mCnj5abdirBLmtLYg593rXZh5fVdGu3iR7sZ25uJe3BNDUViY6ai",
  "key13": "2PT715QHK9wkiK6euv4dnN2RmT5Dun7iG74eab2YwD6Ayeu46U4w7CJmVcLL7WeMz2ZUPPdCpitLhnuWwEo1KH5H",
  "key14": "msxeLdBzqmAjQdAdXhbBWdy92PRzW2RL9xWaTPJC1paFnaLtQ7V1vmxBEggagaGc3nXRDenkHHc22k4xdH1g4ha",
  "key15": "5MvN87CZxRjcyyzHeCBHUQXYa6FzNxpu4Zqoz7Y3wozRHzbnb7Lt9SLjfLRPcqas4QmQaAYE79cLEer2UxTJzY4J",
  "key16": "2swiid9Bpk1qmo7Mwe9aQnjcBPyyaHbundwbS42vpVW7g1opiDtFvYS1ZxZuVzztpuVdaPKyCZFgbVx9Exb6uFhh",
  "key17": "3jT1R7eMr1AtE3ADkeXoV1Siq18N2Tkdzy9CXMLHrNoq17RJTMeGnfwGpSSTHCJGJuSN2AiaPKoK8xNwrraJUzto",
  "key18": "3bf1rFMSRUiK7xnUYVZXBh9Aa4DTKAWZ6nWGn1zNTXgnHBzrLXwwCqVqqijCbxAscuhoZUE8EYaMKKuLBW3oE4mJ",
  "key19": "4tbLbQitCpe5Gu15xeLSaZG5VxnbBxaHaiDhYwPuLzSE6rWsDF38ua5sxKFS61xHn4PvNAFgkLVMvHNkNukzLpvK",
  "key20": "6NgnmGVQjDfK6qjgEKKP2RXqehEdi9bQW3rbYhShYh5UhaqubSzvtNCMy7uRAcw7UJc6eWKjKDu59Mur6CzcwcY",
  "key21": "NMcngTbqXMVu3ezY3N3uZfmqSdQmoonMQqWAmm3ncE6r3urmbvXjGMFU8VkNTaGr9JqZkAH7Yntk6VZJdJ8qGLk",
  "key22": "21cKZ8Kz746VCo23KJstUs11ysHNVAFWoKToN77ohZ7cV1oUsucLQ9N1KQ2FQhTbYZSna5uqTtxzsQYX3LMorAAp",
  "key23": "5pGCgk33aMhpSHckwKb7xhnxYx8gvZSqCJ56cT5NXzcBZXJWvgQ5C1PkNo4aD2WmkfXAWGptnzaqePxfCvR6bqVf",
  "key24": "2H9FpPyEYNDKThVnsrtYSWQKUERRSM1BtA83EK55N4DL4eX24V1H66msrQvXVcQ42TjunTPP2zUsyTFiKqFmkAsM",
  "key25": "3Z3D1nzXB61dy6c9KRSRukJ9GhAU7YvExXcJf5ig9Q7SAPt6qzCRwgfkndn8bG8sa8pgy82jRp25CrneAnABV5ZU"
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
