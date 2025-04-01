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
    "34LXwZEYotSh4XcKqwidyweLTPzzivBvjb6PRULBijnZcNaLm11kPmYhYQ5NpCZWKN32Zmv4iCtLn8GYtTrmkyCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bFz6CDTo1cAitMbWL9pQ1y3tWudv9SwQ5CSKP9H8hZeVFr9uKL8WABvqpDBQKqwhdQSebHQNpDrJjzTBDhWgLZx",
  "key1": "288h9L2rpP3992HCZ1PykavYMjpK1umwdiJpdxLywT5KZLpURZkpEP1GykJYyMPZrjZhyihTVmTibAFB6DfDGQQZ",
  "key2": "4b7yYvuVvZS7w2AzCkfbXHuYizHmRPB9k8R4GpuBY6k6yrUSZZ2yA9JZiLoH4hEE34ENWn6Jprkniz8emjeHVjN",
  "key3": "4Y7wi5Yfp3LQqHDHJ17VGg1zY8NefNHsRZfpmHsg2TUCd643nxf7K8DukzAbd4Bd1YsoJtpt3inV3okBJr3Jr9wS",
  "key4": "dUUoRYeN61KFhSsL8w4jXyth8WVWmABfhsen8UBgH3SwTU4ouYQamGv5fj7VBqrCPmSe43TpvGhDy5SrP2uHJYg",
  "key5": "3Lic3hLCY7a6wu3qgoSLqVLMM68MnSRCWEKJUpJ2rXBWyH7YNEqqDLeHmbrFdeiSa9b4MZSKPBnwXab2PkyxviAs",
  "key6": "2faQs5HXvUSXddtR2y2hd7FgkYze5Tzj14CBh8Ti4idaaeE7Krpj73moesFhC1AvGK5euToZG84EcqQL3v98amDN",
  "key7": "Q8gW6NDHwz9q4B9oZz1GFTfyEzwVx8qBdsq84ujXCy6NP4xH22V7kXBJ8u9g5ne1YmSqBBjFeHsbQMy8YuANN81",
  "key8": "TFzvwEFoiwCjknuEaLY49gebXXRiNPNM9w6SmDM3wAmqCLusmhVpqkBdM4wcmdktkBnnTszSF9QAaQDAVYb9k1m",
  "key9": "2teByyBQtSczN25KZgUc5AQPiReXRNcULMeHWYSCeKsfzUMQXHHS4YcPXsW3QoaKuLYPrUYsuZx3SpwQjr6ELKNE",
  "key10": "5pSumdRTTPMsqihyCTBYQKj8sPwCyxGc8Pmm5eJ5zrbErCwcLdeNM8GcjNFrDf8nWjkZY5LWSBvBN6hdv4kVPfkj",
  "key11": "51hyopnEYndurWLX1pwe45FnbyqL5ijr2rF1dJv2T9VUQcmSwq3z1hhqmsDmiWWxvhUriCk2eWsVQkq62xRExQJY",
  "key12": "27xSdEYWEKDPKHBEk3ZVtKP62zQi99evJYYdNf5PtXd5KtkDwX6zGPm8QTvU4nV8XbRJBJLge7XEUu1FiVSorppo",
  "key13": "5TxbC5LSk9bSfsdXj3ea5FSKxZWConkzrdk8sm6XjZTVkPDJf2Z5obT21qZQ1TxmCXWc9zWPBXrRZMCenobrmTqw",
  "key14": "4LwM7wrStYzcLQhmawXX1FoMUCmyavSyctsKwYbZxRfd9GucQQWqkvj7jf8kbBHLfcw5AcjW72idfhZ6kWHggV4Y",
  "key15": "5eoj5SEJuekKtppX6DijNQ8ygRWkfBTwKKgXwWrcLDXxh8FjY29XYdeNJhQtS1ghxYa5KBW3VQTfrDs3b34X5BPW",
  "key16": "WSsC8DKpQ6dLRVze7pXedTBKvjjmwZhkaWChq2Eo4stfapiouFwhjKFYQK8qAgvzjrnm5M2Jps1bm3ozvhTke1Q",
  "key17": "FgBC54gh7vZzGBRAHxg31YsELGbZNKXue8BTRQmdWhu9FaJw7JmXFF94mQxaSGWjCKnkSgcPzxXNZ9q8WdhZJ4J",
  "key18": "WUrkdowiiKN4zmcbyjczRTDvd4PQrkvG7tFKauYJyYLoUNyA8JC2K6znjEmn38fU6YE5Dwzy9A8bfVQ3BcpHbGk",
  "key19": "BPYGgDb9tjCkMeFXYNKQHYCwx8WyfaAKhY3ffpdZbjyvzHKuNyNcDnBZiMwoJC9WQyCBP61Y1CSn2yG5RE9bNJd",
  "key20": "5zbo4gWuABCYCWD6VWTsZFzA44JGWyyiMDxcFd9x8GBXntU8qMoPNtv8xfTrVWQnPkdorrAh2YWjyFBrQWFodmM6",
  "key21": "2U1dvaXqscwKxj1e3VGifCarhwCw5rTFToDs3rtyk7HXWhEme7hYp6GvQFHZkpMpb8PQvpf2834155zE258emFig",
  "key22": "4WHdd2uGhyxQiEEbgRsB6QszH4JzicRuM62cY79xDmWmWP2Hwb9HzUPWHA5Lxwhyw7GgytWwiTABw3aHaK7xJcWL",
  "key23": "46coKKRAt3PL3o8H8DvWAAuRbH5fWqCfmgqCiuKeEaLCeXTZuT6M1FL41eGLGP111FQoPnys7VgMNiGTaGuYtFDs",
  "key24": "45aeCdiwc1TiWpyCm6K62c6rQDGjtUERr2WGSsfXknCiVw6WCg3cuWm4b4wAAipL7DecykRmjm9cQvEHLPW1vMhj",
  "key25": "5zcqdjEKXPciQeRbJyfhwMHukXmLoSGTcQVSaEg9zCNFJqJUXsLGKLGCVPoQXVWMAvBR96QGr7bpUCuZPbQkhe4S",
  "key26": "5CCpAJYHY1qcnsvF8RBj72qxYtKinVdyhsDwbfYhB6uXAS63rBLa6zsTPytm8xFLcw5N3upYqyRo9owZNoJ5oKhd",
  "key27": "2hTX9ytPyquRLWXaA4Ce3rBcbArHoziXdb7zghcm9fWM3bXCTYFKChkHZA9fLckCCs5UrG2o7ChHHpU3PGnrDC6K",
  "key28": "WY6voysNZuLiA72k4yPXqCSuHLD7QL3m9dM2vyT5hF5MmuCDADjkrKg2sW1AiVpH1JXDg5y2NABpSTJd68Rd2rJ",
  "key29": "wK2MUJExLEZnmxCij6r24qUhcH7WfphS27NY6BMsdZoBL1NWUS2QFiPZNRabcFtfTftNrFPAQjQEJYvUx9GSVhn",
  "key30": "3RpLfJsRjVkkYkUF7MApioroxCmv2t6JLK5UUs1CwnRiKZbsDGqGLT2jqbFewv5H3DQ4GqmjB62quBsPkoAxLdqR"
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
