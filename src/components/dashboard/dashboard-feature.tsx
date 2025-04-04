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
    "Xv76aEULTeMbooGFmkEpBFRGpigURbe1Ray2AS1FUtpSKVniwVYLX9aHm2RCLmmAXK77go78MAULB7cFLGkFHQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VactnQoXWsKstYjyyf1hXerpmMTBGrycxHpKFTx5vgAek778YwFTHT3P8MK5iSpeV3zfYLkw4hUsvE4oWt2o6it",
  "key1": "3THpc6MAaWe8GrN9K7rkHQ5tohEzEPEMB84LtdigvHRGEYVHhrQpFdvJ9jenC6tCLoH7GtdZ3gJYsLAiQKAaPqcS",
  "key2": "4VVeG5sX6eaLvcX6mQXfQusYq22FP8ENQ8gsdDYsi93SwsXPzvBjY4PtBbCxdyvQvd8Y6krqpVz7dNvYmBW7t3xH",
  "key3": "1BV4aX1zKUw29fhMnD2v5L6g6TyH4atikBg8mcxZu71vcj7oAxZXQbsVSZhkS6NnUumKM7UZDitKNEFDLj2mRmA",
  "key4": "5CmwcGUgcqb4XamgoRRTJqyKDnM4Lq4drSe5zQCbWp8XsWAqSf6f6jMmC76HNHRCEDHDvceNYe8ZRCjA3j5nY78c",
  "key5": "23G9YW7cLwVkKY91P4zr2HuZNTULXxipDNFNxmfNnKU8khCrd44EmWF8zPdqehohMHjG3a7eyYt2PLtsZCVcVYnu",
  "key6": "5ssPh4vtqrGE9B5JiHBrxLxnESZmDH6eAhDWkZhSLpHPkPt3Ppckk99Xw3rpAdxJEBLCPwCFtRzkc4scH6FgPUMG",
  "key7": "5TbQ87cfwVNyQ7RhBpGoxPqHamwZon4dUN1UtS2r85Ae4yLNqPAdEooeSgNXLDAVgWFpq85ZcCifhuD48uJzMtEu",
  "key8": "3am6nNYmTcfwPNG1Ne56ZRpt4gyp25p7Tq7hTAXVWn8B3AR3hi5jQqD1GmTHr9fa7LkQrMj37skbCzurGzV8uG7D",
  "key9": "3HL5fLxthUhYDPnSpwRw7Kvns1i3wvaToA72HyZNVzLdgF9oBxuT56bHZMces9Y6Hqf9VBGJkZ3YnzTfbJ8zTD3w",
  "key10": "4mWXQbBG3GoGfKRzhvmG2qWTDvpAa5nvTvkhWHeBHNHthS7cnUHMW83acRb4cGnqHzPXmQB1oH8oFRLZ9TxHyppT",
  "key11": "5ceQHCcbpKzT7JBWmBKrwGa2xivC1nJSiV9bajnR9SgyB4ghf275B5vwP774oK3jNnXhBs3M8ZLZ4gyWoW9QUUXg",
  "key12": "3DdwMeiJ9TpgADTm5LTGikV2bJf6JKND2dQ5R6mHRGxGjMDp6A99HYFhUNTPYwjJWbwj6SYo47c7tSQ9ZW1MS85Q",
  "key13": "xqNduvpLu6bKwNSfjdDNp9nqbh5FKrZj5W6GrYYtbm3NsGjV48YbZda4KPHpc3b75dkQa6YRYEd2sRYZsg2kzcJ",
  "key14": "2kvzVJrntwYiUdCgmDR39J5qzaLvY51qvBy5QvrsERv5ubdM5JJBDQkdzSN8sbys4yJzUCsNC392Lr6EFpwc93B3",
  "key15": "4Rr7Ezt2bz4W2ovU25rYCVSmGZjjVR3CPXEQYLq4jXuh64CgqCpm7ALBfnLNLuT6P7mmPdVJdtuUp6mczzms2Vv5",
  "key16": "4QwkFzP7X8BaAbkps7DrLTeDRznVxtMjEnCm7jpQex76DH3nwuEBmQSN6eiUWMTYs1Nu4RvCZCZ3wM3tXCBNiACH",
  "key17": "5xPy6TEKFRKQJtCcotg2dEG8FmQVw1rn5DCcRZyaR7sCPKvfPm2QxAtobWuuqfdMdkaBfPxx8XdcdbTGv1UjxAoh",
  "key18": "65UfikQQGtWXNW1WwquqZeN2q1cm7tBN1oq5MLC8YyAKyMDXLbjSYNNbNXMJu8PWtJdT6eydgvghRTLK8AKjri26",
  "key19": "1s8FB3zPyoXrhX1rNZyWJpAyxm1DVQ54ctddPp9nUfobTPEdMMhib6Qj8h8SAAPvew3zJW5PUZEczY6NdeHJLyo",
  "key20": "UokVvVYzB8abyi7ZcJH1C189rVvyScVvfLLc5iV6wx2rH4PZSArimQfmxsY5tqLTKqJuYLCNoxbKi4b7TTBTj6f",
  "key21": "44X6ssMU8ucACByfMtdHLKRRmWFipHURtJ77ZuQCS8p7pSmH3NJYWs6XxdwfpsouiLrnoacSpKNVkjgh7bbV9SdW",
  "key22": "pZhUgTgwjHt8JiAQu4juhEaWX1VdXWWYY95DK2vkRBEAa1r6txy6cw1cv3oyA5ioRUos3ZQNWynu44qggYsoUzk",
  "key23": "2pJk3VWfdsF28Yzcz8P1YJ1uDS2hbFPyQcKJ8oZUQBsD2f9f39h14xEPe7ZT7uvnmTxjSVNUdqxp4kNa3X8aFJnA",
  "key24": "5oKkCCMuN5NhAx6uJJuQ1GtnSSDSRJDPSt1ycM1yLxKuSJVehP75ryt5tgJRTx2F2ziq9qeQ2ZGko3gYs1Cnt4nC",
  "key25": "48hFJAVvbyiMo1TAcwT6YyaJEjB766igsb4HnGRonmBmXCRroadctcu1k94Lp9M896H5mvjKfv9tSeY33Bk4sd6H",
  "key26": "2LmFQY343a63YpagtMkLfXbGRJn2esnFDbcuSPhH7ECZq2kkLhAGaTNRd5CrYqBjyRq4J5eqbRjRk4kUt74Ckeuf"
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
