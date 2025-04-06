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
    "J2AVoaEGdLE7XyZe9v7BfioJL1Sku1Ex1DBJcSNTHfh8KBm6uQJWARSmJrexREr8MFLo3dLonizHsQQmvgkuC4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26yZj2AnNhcH82NNvhPo1R3tu2P3cmfELrxLnpabMoX3BbVrvs3BFriXgfzfXUDmSNS53MTyfrDhVkJr3tiGLtrQ",
  "key1": "51y3dHjs2obyXAkqDNLQvDs2DkfnJjPEngdX12m4hYVPRWtpR7kVud6wV7XfKALXAvdqGFBqkrZaSRhN4AfujP3p",
  "key2": "2fmiS91rYA8PY7cCaavX8LJDqNTc2bpAtr94JMe5mFoWT6QnpqnHmfMx5G6Ha6zPxpWQmd4RLp9XKuk34yTF6A4N",
  "key3": "2cFqiafRfYvYA3HFf73H2B3HU71H1w3T2m24puwL21UCn1mwwxCPromwawDjCAvMf3CqS2HMHxYyy2Qqm6k7NGKD",
  "key4": "3iEWqFyUiQi9ywKCUtwxZ5fNeKesSWRoUW8YKLoZ8m27SfZz5gcaEqb7UpgejYkZ6GzjMysiZsfDpFvFyi1uVTTS",
  "key5": "3UpD88zNdAYACE1hZ6vqz9nfFsV8Xe9CV9XFSncDFYC1BLsnq4GyXFtgv7e8SKUaURz5bqMrBjP718vKCUXus4Jc",
  "key6": "pkYqdhP6YnFQfsNMBxfay5wr3ZCfSnWPJM7UtLwghrKiiEgVj62Ft6UrZ4TimTjWqPnSmYsnwCDpMsEqSnAkRbA",
  "key7": "4HSHxhsUvDEB4JBMkdAoTUDKrHRTBgL16gCGFJkowUiquNvNwbaTxvvSTyKyUwV1Na7qg4QdNnwf3xpK35owQAFN",
  "key8": "24h73G7DoSp1D1Y52e38vMWyXLGCo2cfQzXPfktFBtbjYoJ5MSFghdhjh7NQ2yDWTQByg2X7gdCT6YyKhusoUmd8",
  "key9": "5eecHCVzhzU6wD6yNBdQficto52nQyF3QDZUynkU8VxtJCktQpNsPVh1vdfx1vnbtynNTJffxtXmf6uXP4eb4d89",
  "key10": "5DGBQyBY5rvzrQYsXRbcPU8JZuX5pSrJ2Ud4jvYzJm9bchrNK59NViueduCNwWxnaRMxE3xHGxUj7e1boLeV6JFW",
  "key11": "5VQ58XHqZ8zj2nSttmTCob6sTrNqPLFgnNFnxZeGPPYED4zSXsbuUqCqgGQ4EyFrfbXfgahR5qsTLQjFaBjj736R",
  "key12": "2urcbHaFRuB1Td7XJeLjw4v3qWSkaALvhGwyAvAWoytP4KMMyX8As8QdesmojJnB2VtEJnGXEbmJd6RBZEkLLmh5",
  "key13": "2zLmiZk9KcYrVadknyuQ4zok1ajaEmYc9ST1dX9pGAjsBGmRFwr4Lh1Y7z6dHQ4BDSmbC45iCDCEaQsT5Fs27q7Z",
  "key14": "44qZMoM67Bnfd2yJxCmYqV7AuwppsjMjNkr5zUdFiz8ntNSLbqnRmmEyEWHxrUfuQ6dKAiZ2wh7UZWf3qnSZg69B",
  "key15": "SMYeVPk9qzckqMNSRftJzftvbYxT7yCWjCyG3YHDpup9xJ5qAtdqrQiViDUhpNc6Q7BfXv8GrzFozbEQKJeHHGC",
  "key16": "59XMqkJnFixBwHURUyVxZPArDKNRs2wBphU7ZCD7gpsCuFFNGugtwccYQHKhrxT2ianzXh1bCURjMUUpEpU9UwQf",
  "key17": "3vkgW4bAcUWRb3HzAamXChRfZrLG5eYRXtotVHG3qA6QDXJQrRiq4NXQU1ojdSb4tdGR5DZZ3t22oGkUxRrTVNek",
  "key18": "3VVKujkjKwfS2ibQ9FUZd4kKXZdkNN1AKMUH6FrGaWDey5hY1KqPehTA46WuKCpM68oeTuZZ9uhvk1bLCiYDhFG8",
  "key19": "2wS3Sj4vkYRjJKnQBWdXZcH6EY5gqWxzJpZ9HF5Ek4aYfXEZkAwjgrE918BYcw9tRViNxWkLgeNshsu8sWeEHPxN",
  "key20": "54ikzRXS9ghxRDDjBAYUUW8BSYzTqZwexPECTxibRHWh6GAims5Mvcuwbnb4PHii2mBXieUoAduAb1sAs2wZppLw",
  "key21": "4dtyQd3rVmmcu7RdyKTtUnucqEuozA2TiE8Wac3yMzdk8w4pXGrQxE7XKpW6t2Pvxm8tpvhp6TccUzuX7MhuXUkT",
  "key22": "5geA9dTwCjRwT4xrXeYvX5mcVDqg3tVAKEXbDtoc7vTViZFLqxAWNrYEYAtd9eFwEisvyewFdtvCGUGJQY5A1vN4",
  "key23": "5Y2DM7TAAUTVfoZikJRtmJAPk1ybdwwwTqaSv2d2WQHQb9YYWLAFm213csDre7qZ1RFxjyyrLGNfQHFBuV1VKfmh",
  "key24": "2sQ6mZY4RNvu8E2RLTtQeZM1aj5VhtTVYuYrfMMaUnD39BVVHq64F4SQVqFgNPJncbQEEizt3np8o5ZMj9T5RKA8",
  "key25": "TTHe58D8cUTG3vsy8m5LLbXrRkR38HB45jLEZiLbj8VjQeM7JhNp1RSNnn1mfAFyPqK1tjjvosC5xoUZqUZyA2Q",
  "key26": "ySBamJhPXd5njM9XTxz5Rs9VnLM6nERjGwQDAntpJ7hCXkZbCoTZs4Nos79Yand2bLdA9CsP4WPon1m8sgH3S4B",
  "key27": "CcNcMkCpTsf65J7KLVRrBjjzJ8jmuk4wjGBN134BcDedQwAeXa4yDLoKnTfBC1Z9xUvfrDjKrJ6tZuEqUpYSckf",
  "key28": "3Rwvz3Cf97AqSnEwRRZCx4Y8ojudHjpSruKEgfUUUrqZru2cHruWP5FZ6R7SJWq6iUYoZriSq67EKTcKLLWysYxT",
  "key29": "2TXoPJTMbMnSnvaZt9HSaJ64LM8v4X148smQYXZQNci5FzHCwcG9MWzzRxTPmz4WhAwQATNYjiGJFVbBio1npQWa",
  "key30": "3648MjmpRx7byGFRAYktNAMTLFE7pcnum3VtspgnqbCSbDaEyZVENR2G8aF2QqEbsrpvm93jecWYpHXzMVurChD5",
  "key31": "SeycQkVXQqRKwwVycmWHY8XxQVcceBVyHfqoCF4RgXrTpXff5um2HMaAXuNEPmE6GeYrkd6oNcpgRZJxi33ahww",
  "key32": "7TA4E4AEo43pPEygMJiAvWRdBNvrV7jcdPcLJFDMrUkRrvVbdSTYMckCy5b1SJ2asUeo6n7oCorckKMbFeQuQAi",
  "key33": "4H285aQzJ1tJZZNVtgBCxXzc6MmgW4v1a7uZ3AnuozvE2HtfvPggSxxdgPzSgpXh8T3P5xqnJa5HGTPfb8aup6QJ"
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
