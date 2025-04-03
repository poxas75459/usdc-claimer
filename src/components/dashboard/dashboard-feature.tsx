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
    "2yhZ5kkkejqQuXUjLBUuswrg5ZbrXpQ6AHQuf4UmhyWBW7d4XQQfc6r9bYcDCfh9rsLUf3hH3xqeo7zWKo3w5VDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yt8LSNr5JX5TDk9tTWwzVd2RsfbQxJZVA3oGRYF4GpA3FbPbzseU8HncTVx18w4KsEKAMJdMhjyst8hcxBkzSUG",
  "key1": "27qJqNFYmnGhVEAXTR4N4wXdT364eaUPi51LxX8fvxQx21VAkDELDe9S8PzfgadeB2bVnEoPoY5vry7C4QMz3wjj",
  "key2": "3ZV6rqC8nMJg1F7eF7nfrNspaCbVxYwjZsgcKqSXjjPitnBQEis8UoNPWZ9uuTekyfsqergwtpCUbuqMfc6gG987",
  "key3": "2bBsvoKHt3fYgnRNu4V9ohJCxAuqaMtLz5ez4BwSZ2uYecKhWseduZnnkk3APLnPnLVrUCzSPoQ6H58PnNpAeXf6",
  "key4": "3Q2hCNwFni9HQVc85QfpRY1FXxpLcmBBx1aZwgATe8xzxt3UrYeNQCa5xzCsQMMgiA3bKyyFfv9cgRaNh8PZwVPE",
  "key5": "2Gx8DLPtV464oDN7y5TLMzhg3wNTbAUZezmjVgzrb97mkx3CRoMgoi8z7qnZz2QQs8ze2sF8uCeJchTTSJgjKaft",
  "key6": "5gxywWafs1bwiVBsE5FXnvybMBbWXTt4RiXxZiF8mKBNPBkVbhMLQRv4pTzq5oLFM8X8mLcfycmTKapfLiX2eosk",
  "key7": "3ECuG3rT4eXn73f3pGJjSrmfiFJh6eBUHafgETbHSY1n9WuoGoumAnfsTBNzSc6JtLrTXN8UriK1nKNywQMf3r5t",
  "key8": "4J3HRKWNErZ98kgHoZrCDJpebJxcWkhuKp3gAYqj6XuiuJdA92zX9iwzQEDRDCpCdLvxbGk73dTJhS8viLDdBCTQ",
  "key9": "31KCDz7gJ1JH3zPutaDSBtj5WM8d14xomJjvo3vfEB5pTLaWA5sMRWcTMMeVoT1QpdN5KETRmQ3RXT7BjNUUKXEX",
  "key10": "49FwCY7VqVtDafuBp3qUZF86EcxNGJ2A8yzsPYmmreKdfLt4MehiZrFjBdFyavnwhfEcS5jhVHPD8Tf9DX9LQCG5",
  "key11": "2tLEofZJr3VNe3Q6mpY3ejb3mcb7ePyahfnWAXBsVYALtN9QXnB1RHCkkhxTcr4AaivsMt2bkTHaDaXLciyy72kC",
  "key12": "4Yu6dE4HTXHtf7nSpCyZ2RJ8EtxzaDu6WrvHbEAGxJbsQPMZSSNP189HdjSNjXYFk8dZi3pZm7SWEqvcWqxQX3wL",
  "key13": "3vXQ5kUnqPoTAByz6JGpsrWZMjGqCC5TLqNpGC4WN5uzS4UqLgEDWg9WJZKoHR69Q4JZcCj98JPudS16LKfzLCfy",
  "key14": "2Hrwm1ZZKvZCjr5wBEMbSDhXPfJuPmSy7jGGNxx1aGCsQwi1qE4ZxXWUcC7Gu3PnUYWx8LXY4HwHLbsmYXWYZPvJ",
  "key15": "qRqJBUnAdWCCeteL53wc6qXr8vEZksc8LyjymFEXWARNxH7T17keNooR4hhnxjg822Bo64B2XMPVL3CBJmkbFCU",
  "key16": "o7CwwyNxUDHZ7ugVb5Ne72JeJLY6yuWacdTB8HSv7ZHMV5gJh9XWHEmPTqhVgbCyAWk1oEG5jP8KbAN56ZhBfG2",
  "key17": "4e4GAYQQbZhSGPyKF4JtRtChqqio69EBLfQ9gW42Swm42QEdPdubzwumdhVbBAqecewtHXZBBsXLQGykjMGKKqPc",
  "key18": "3zi6HM9as4y8bQFEDfD1f9xUrUGGgijAc1xjXzs5xXngbAmLcVHJez6xzxEXbopprmptWoejj77hv4nA5jfKsSGJ",
  "key19": "HqXueujkQkUw7xDzy1VgNNXv56RAjGPRC4bX95G7XzxBG9kL9v3Mmv3iBmMsehyg9r8zu2G6puiVFyy82EsMgye",
  "key20": "gCzTeMQB3nqeqCD4pLtt2Sr9AGR3XKL1rTZXVaBnYRFGCA7x5CamT4gtYbTRTv6u3Xcmjo8TFfarWjwy9UukAty",
  "key21": "W9PxXhmW2JFenNXan9E5GLCFDcwQwUc8ZkHzULC8eQC3jWu3KEmCSmHwgE9mcT1wdB6vk9m1t8kJ1UPU9VF8HwS",
  "key22": "5ueG2EBNVcjE71wdftYKWvd8M9SJKp33Udir5B4DkJxAYBxXP4JfFkPMunwVXbRmdyTXmVCddoLcrwUeLxugaHUx",
  "key23": "2EbKeARotvzJupXcBywmtAutaToZQfC4TC2jhuH3qXWjhHuXe2v7KFUhQGTYvtu1PRkUgUqPNJsdrBByLuKLi714",
  "key24": "2mr6Mcd9jH2uJjsYs2sJaB45b95wCbH6SoJ8SKP4s2VDEoHx6wmeyDKAVaMWFqVN8En5zyHRsCMzaEgUj8RRxWEA",
  "key25": "22g8h4dLGfxEEYnRPDQv28bSUjVPvJSeUjExTFjDknS8dxF8CCJKSN8xygAa1c61HNWYPC2HnoG9RCbDQV5tjiqN",
  "key26": "3K2YL6nFZFobUR3vFTyB7yqboQHUUHmY3ro1VqnRpTW8wxA7vi22Lp4XQxWVruaJVNNqzKnu9xiDqvZivHSWoPQh",
  "key27": "VfXgQzqJfq8ArK5q4NSuqMWVMF7fSDgXFA1kuCNbvGMB1hR9hNzP8AquGXBS5uKZgDosmFnHvEnd1QznSn9VJFf",
  "key28": "5dL3ZKgq16mfdZnBQo6RyLj19y9nXLd6x5QYcxzmyrzHjqRYgtecA7PKxre5ibQ3aEJaYGBJgucRgaZzcSRxfAoe",
  "key29": "3uLnTjF4Rk2vpbxiD4XQuzFPj3WUgG6dyzWpAkLeqsq1zuVTk6aHvLYGwfR4JLBaBfmqsiwNaCjPoDK3HBTjqYFT",
  "key30": "53ricNb11wb2nGMb4h3uUzmJ9vKUNe9VKjxvMCj8oeTnVcdR3kpYbGmyaqDUZ8D5BZDeowvnDpgoZBqJ4bKbeBbU"
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
