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
    "4mt8m5k4d8xT7b9m1ptChZv4qvAQpNMcbo4qrNGVPZNuJvGfHGYgQtjVf6qYLS1ShY8Ejd5cDgSX8QgaT1UDHtkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bkerVhf78MwKEaxR7sEMckLWBd8ajpsKBkjfBhyH7SbSQqG2qPZLycMhqDg35YRLC2Wx1mZRaY1UUWXm4k25E7j",
  "key1": "2vL9Udb4mq7EM4hr6PssxU2YTRv4Tsq6884nmAdYxZdKUjDkSfvB6XYb7LwcgJW4m3fcedJqwXLQvN3rmi5MoCmp",
  "key2": "hvwsEGQQ6jEKHNMujG1FdX7uxzEw6HALZhG9CXiF1NJXjJmKRAknQvkA1xKVewxQFTafpAAHgZ3aMWcfHFqXTZv",
  "key3": "4o4Y8xZX8szcuy8AALDbrmU6kYfMQn7RgeoEBU954mYCd143GMy42bZiKnkH8uZ6hvUwRbcnNWmSZT5sTABMT34k",
  "key4": "X52W5z4F9q8zJttYfiWja3pRu6DbTqaTB5WpdggXHZQNbfJf3t1tf71AjntreCQMmwAnyAjtJBzQZdrE39bWwVy",
  "key5": "54Tt4QB1sevJB7YrV1FKaCNXyj51rJmyF7rb37oTDkS1xcnuE8E6wQuiE3o27tAaxUTP9HvQfQJEHw6Xa1M9WgKE",
  "key6": "4LnsCxgcxtHJFQSRkkrDdJ37HBAN2FcrV4AmwnQhA91ckMwdcEM99a3Xn1zb2HsW6w4dc2YQQMmmyqq9EfenATRq",
  "key7": "3emroK8K1M4C8iA3knsVKNFnTY9tTXrgfsUW6BdaaDuuHmC1pehyQU3qAbhS2yM12mhE5UUzh3K6bQeAqeZp3gRE",
  "key8": "5pQ4TGrdA9H7dNsLFr5FvfSPZKskPDaUEqCkPuquaSbV1pkx1QUUyNfnXJnRgwpYu1XQLxdY77RhXRgkRDpXyG7u",
  "key9": "37zACvAUxNPNWTwVAQ6C8V7XPEnPWe4EyUayhe6bzcWLLwiWK61M3gMmj9AcTgEwrvocd6LNC2TUkeahxwPM4Q1R",
  "key10": "7nLGTCZhHGnLiyXGfSBvbyPHPqxR1YyqLEaNWnF9Fvs2qLCsyN1hYM4tWFCmEfNVh7HJMnKq3fgkHpiPZjYACZU",
  "key11": "21i5JU9ptU7Hkvq8GbCA1Sx7setHyqwGvFXNF8STNFFrrpe5x7NFmAVwKqN6K2ge8B3r8oKj26A1kzsmQbU1vMSD",
  "key12": "4VgYjftvGswgjEF2gFHaj7LXWhXsCxXqCzsjHThxCe1BP6Yvodc5iBhyKkz4aU1edNu21dwt1Tp2YcT3Kzobj4Nh",
  "key13": "5JUtd1T44CQForAmTCCJUur3hESJWkGPbWZLfSJox59dgL9NbK7HH2zSKXAeuMAUL5KhFfm15HF1fEF66sL7neao",
  "key14": "3YLntT3A7Pzi3eHs1MstW56P7Uf5QkPLhHWnRULrfiCBf7KnZknTPyr29PGSLuA3BuzyifAdRYr7ZWQdRJFRdso2",
  "key15": "5zQHgg6qYzPTyhHj2r3AU99vxZdW2z6ma6tWWQxa5SdCG7m6BYtyHCqBBtpBXRqMYhfbxDMMM8EwCJ6s3LEXdaQq",
  "key16": "iGfU2fAjKWbh5JnWU3238pugG1E5eBfZXMEetc5CACNqaMzxJB7etH5vbbAgS8qfVmqCAFtyEV3KcRatxTTVWxj",
  "key17": "5t4AtnyPREf5V4p5miX7jRMFAv4dL6av1FFuhKDXANPvSjpRdcpbsgZF8dadYbszvuTwhmay7aF4k29RQHsY8eLY",
  "key18": "3oT1phLfiTBL9PkzSkkAZcqXnwFXq99KHArUY6LL64Mo8NTsdzUmkhLUxqDeWDzNGRwxrkZGph4kjaJrQiP6yWDY",
  "key19": "4XLBp93V5LoDy3bQzg37jFA2acEo8MDuqPQsK8ghEGn5trg4TfwAeb6W1HnkqWg53MK7juRT7N15psxcHFZmi7ew",
  "key20": "a6iDRRu17gVd9EamRL9cyirGuXUoYwK6rBqPUaKf2NX8kZcBh7bxB2DfuT63Q5fkQTkRk3jGDb4cmFgfRcbRLZv",
  "key21": "2wQM3oSGhd4egpGzWQLnS4KFWsApoE3ZfHbm1LZnP3haigMXGUhgR6qBzThT5XALuUQV2r8ycqZUtVULf4RDwUFd",
  "key22": "2KawK5wzJkENAYMZXQ1B9Tt7PQ7GN3SeNhMPdHjjDueBhRQ5vPSG8bFY1ACts5yDDDRwqxhDgNRvDz2TWPccYYTk",
  "key23": "5CpybbBd1WhGj63MXx9fha9CAFi5JtVNG42A6m4HcCuMXf52Ft6YYRnk7yNFUi3CdJjHdvrr9pKpTigyTAqRszep",
  "key24": "612S5v9cvSW8g76NwVBt5Qg7a6XiG33pMzLgrkkogimaA4bFkEtM9XsST84CfR5rHfMreBtDxRz9Az5PPb6jnTbj",
  "key25": "5eWnyr7c57aSmc4dShNuxzAT3mwVvxmF7tqgsm8dw3kyMk76yB2EzBrA3KiragsunYfc2bYuxajoz2nic7wURpV9",
  "key26": "5d42Gz5QoozYmAALteCqgeGdTL6RCgUPSVb8CQbLos8SYnH1GZW4Z3VqxsW6D5h6mQChwJEbsip9BHLNsv5FRXMi",
  "key27": "vuVVF3ttnHP1etjYAXpGbuouMyn4RJRCSejQCCqfakgRLZfNDu9DETghz4fSs4SRmAubL4qkhGTE2mBEbWYU2ii",
  "key28": "4g4PSgbKvXZYFnykri8NpAotGaEsYToZCL7CjnhSNCqQo52q4uVXbTGWHK4VGMA537Ph2SoYwEizDFspBckjRF85",
  "key29": "4xSijvcmRVQdTAzotBBV16RDbHNqTLzQurzjom9Ypys6CSQhnNRzFtkJFeE3xKQn9qBfnYTPuBZkMEgyQWCjrXU4"
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
