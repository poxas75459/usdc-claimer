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
    "1GbruEKngru6uC9ruPo1xEDDJ8CbEEd9eNLLo4khU7ZmtTsfV48Eicw9DJQy64bNK6ZgDzvo9Av8Q1SLgzeJJ8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PPpdc3skxN8XvQicxDpiNXegiR96B8BNv6Jj3eN8Tn13rDmFYMtrjgsJB6Lj6jXUYR9YpzMyJBGvuC3mQWbgC2W",
  "key1": "24DSuTLK6CRMSTwiiPQQhdV5ttwv3yfvXgtHwQgCbA7JW1BNNo6NTzoe6z6QRpMkNhmGzaENfQF1XtfmVBnnPMXh",
  "key2": "KNX2XtHTTVrLZiz8o1Sn7gRZ6qFGJYg6zLnp8p9HvP3fKKbVuKfydFYBpMbg5hngmCEuV283vBPNHzjaE1to6jB",
  "key3": "2oxNbRo24fudijPMh4gggZdEYh5o5xfacuizz99nn1YLQhQFwr5N8WWQgUDrTQVKR1444VX655vvcFJQZQaRrKfc",
  "key4": "DGsbo27EkDmT9NccQ3QTZ5UQ2UBpTjKNBdNHjenGtcHKLKTANz4ST1U7mxYGZPggjdKRHNRMBv91ncjVPsMMGgn",
  "key5": "4zyJCzND2qYDfPFA9ptkT1u4F7ubkobb7SzCCMespe9Kt9gSmh2CpjNA6mGzxtN8MC3Y2eTp7KcAGjAUN1FBatjm",
  "key6": "4pnwRGLoBzqyZThVpSHhEWNHvfbBgMYMZkhdXc3qa6haB4JLRg7GK8xRv5WwusSXgD56kxvD4ZLRRj7Tv7xvLguZ",
  "key7": "4XmP7GQYmYiDns6itAJwC7vxkLSEKSBNrZjcCbpxbec7tHL18XYstHtHVjnGsHXVK3w8CJ3WFoGJrQQmV3jCUkVh",
  "key8": "jetL8VSmuaWgHYJFqPpwu9HXVmqgv55V3xrB6PF8hVW7n42nPSsEwwyR1q7RSA4baDeQpHWbunxbkUUDegCfw7e",
  "key9": "8yR8KHUYA9AqhhHdZTwix86KKwYxbKAJ4x1w5p6icUJ8t9G7MCPC2vcXBfnkEdK3RPrcquPHBjPsqRoXcaromJX",
  "key10": "3i63ALpaDoWNpRtPQqRELnCchRU4bfk6HkgyJCm6dVGRnBFFfoMXEqwBbfwMx8dX94VxgXNFatWDKcSTtg5vS8RC",
  "key11": "48rLzdtYMRMHuiCcBz1szpSTzdfUxYUPp4HrM3sgSBwX3CsU6F8Z1GDBAXAA85TKDn1QzSm2qQZRoQRfrJssfHwn",
  "key12": "2BYij7uccc3MrV3YHabkGhqwhwP74sz3oT5NSzHiqZXZ5B2RZDfNAaMbANacFrx2p58mMZaufTPeTmmhAiScZc37",
  "key13": "5U2uE1bf7oXWKSnyk1fdPAUXKHVLS4JBLzw1poCtj3EeLFMPoqruR6oXyvuEm3dzWqcBc2g7zEUwS6YSPk6rWXKV",
  "key14": "AMKfnV7NRVo1sUuqJivSkw8GboJMUxCnG1rP9ZZbvcpbci2DB3KVsNDC1mGi35tzGj6aFQopkJxYTbc6Actxz9g",
  "key15": "2Y5gBXBf98hm5Nc9FAzsAmGjPB2Kv4uGX6gpt6BaHtJudcgcUVadrVtwZSWV2CAf8tHwFVw6TVyyFWiWdqCXcYJQ",
  "key16": "4X1dWLgaJvbkYPWXBcVB3C3xajGMWFBSyvN5tWqYgFBcm9atNkaFLiKkELdGviVnSnh6QMyeWCZ8EJzFFLx7JUun",
  "key17": "2JydWaUcBVcn2D5HZxN9jxwfEAajsS7SoBFkA5PcpWhBchZDCtqN6Ga38CE4hj4EQxBc9DZ5zHLzX1C4MU3X8WoY",
  "key18": "DD1Ju8h1PMbf4zofPGx2KRHWYH5qwzbFWKi8oeVaDu7t6PsSFQEptU3PMk8U7JaZe2DufSh8BcWpL7mQRgfpbee",
  "key19": "3RyqJb5ZW8gRERqPgEvR829VfqQv19kQuthQ6Zst5mBCPSeqozHWRLkt1cmxSHr6TwrNofxASkrge7uHyqhHDXxe",
  "key20": "5FccAFVkNNxSKbzY1Mf5Rp46yNEQF2kEJBSfXngwELg35KG7xuEQ5WiZ3Ztm9Z4BMb9WBmY1prvcWYMVKJVtiao",
  "key21": "4oUH659XPusBTEGspnBX3o3NFoctDmd9ehgVnKrXGtLsdBUmxxH2HeLvvKStUoyYtd5krDYXojSsj4MhMzx9VUUW",
  "key22": "4NzdoRhteMR1Qjb4q1xTpFXJqzJJDYYcp19Yn33snoS8Rtc4gtvyu3T8fXF866SK3i49D1AvJnpg86TAwma6yyqm",
  "key23": "5eJUi6VmfKY1Cetc5VZycs99ZXanYZ93WCJHgQYCtsD9US6GZ37Whw5Z2JKn9SBG19cMdCchquD4jNRLcrT9BSYS",
  "key24": "xkY79v9acR3A3PvAmtStWo54aeKuQgBEiQHfBALKVW5enAvZvRxMApkmhqnoEmw5uLEWXhw4kR8PP22s2SCGiyi",
  "key25": "4SeMRzT7MkhLAD8RGDuNSqtT9TC2fSwVrwqLWP8GFcRJFx6XwvagANjf1S1xUo2GmwJAj3y4hmRBHVR9mgWM93Z",
  "key26": "LH5FQgQHMxmtAAv6B8RJfvzSn4K4xxtwqLG1fAyPFKzwauF5JHHQdWWU9Lf5oTtkyMLZDKMm55yvbtUut9SVREr",
  "key27": "4ehEhi1HKRqpErvgNx6y3ZieAcLrNo3vZFU8MnSzjbYVd2oEYrqDDs2AmEdqjvsRHgew9haimHz3tBeuFhAzi9To",
  "key28": "5jMy4d15oJ3cxPPyLQCiCgzd3ezV6BunLbH1Fyxiq9ixPy7NAmAi7yNMCqRoHQK7ZLjDvZ8HXnjt89oxJQUQTi5U",
  "key29": "5BHJfMJKUVPafjCgPbF9wDETBikRtcibgEC3CCPHEoTSCjhCfn7ZQbajADJcvMjngjGNYGtYn2KVrTjHa3u36DjT"
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
