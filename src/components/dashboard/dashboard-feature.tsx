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
    "4sxU4vvfEvCif7Lhg992pG6GzQ1JP34ZmSEGq4GgNYNxpowi7D94Uhj6jXjStYEP8Xpp1y3wZuh2fxhSTMVe218R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63FR2c5v6W3awCDo6roiFmyEKjMj1Xv57gbZFiuN4MQnGLdUJW9vsWKP4Ne4nBQusfg6BqpUMo3636N5vkzkTyzH",
  "key1": "7vo9xDNjGyfZegfCgaAMNdHcfA25DtvSWAeHXrpZGuQ7vF5jEn6h2AanE446mJdYgZoRjrVwTgBwp48iHPHwixQ",
  "key2": "AbphUwJDiKaP23P9nLG8fw2JxPMDcgvTGCKdkh6RrPHdze7cxazsvFx1kcYPrVbuXUAFhJY9qfcJWwvdjaAp4mE",
  "key3": "2wwmAo9LcmEKZFCU9kMGkD6oeVFT6S96fk27i65Hm489JwA87xLu7tnS9Y36puDXAkg54gw82LRRRzqLHRfHV9vo",
  "key4": "5pVe2udqujmF8wb3YPyuqMsneqQXnGBtstYdCghkGjugHRWKtWzAx1FpYz32xjGtmxGBSDyf6zFaGedTVf8wwZ8o",
  "key5": "RLwvmcdg322aN21yfWw4k1FM7ZoqFCpssDWE4ZXo7MvMcVzz85MUUwDvMzYrKRk3KHM8CntTYAF7PdEhUhCFZXW",
  "key6": "2ns8z93vHWDhuCjYS1BnvMkXavW5YPBAm5615tkMAdV6bezBnHcBhuJPqL6pUo3ZYbstby5fk9qygqGRNjbtQ1v5",
  "key7": "3CibWmdzTUMp4GtWa2eA87qn1WLRp6fvPKEXDeREe7K9mYPAMpgf5CUmRCU98soFEFNJcP64h8AiLiZHCk7ViUVA",
  "key8": "53w5DrEFb6Lfwp9PB9eKKB1dcXz4rxQLddZCM2ScTYDZokCXuPMTx4VzKqzpNcaew8cn2kq77WBVjTUhRaiATPhh",
  "key9": "2WY7GZGhJ5TdZXkLXhF1qezu5yGXFtJqcwZB86Y12ijMSfED1eJLJEKy7u2YgVRSpAJgoNd7VY9CudnyPqEhEUmy",
  "key10": "2bGsFTMXCR9SH6Rojn1Qk4Nq3zNJ5f7XpWuLvqMCK4QroWK2xFrzf9NjhQHWr7gonQnm8bYbA6AfF8d8dKvGWzNp",
  "key11": "58jrAzEUmujYEuVTyiCa7oX8wMTSyGQSxgFUnF5RgeeKyNXiXmAYnHcUTwsa33xmgNwcwJhaa2456RmcN2Ne5uSc",
  "key12": "3DnVPmLQsnqgdNB8zS4f6eGxrVLR9gC2Ycy5T3cXxeSiNgnzt4JT7cWSFvwmCmsTStdMTPUWcCJzwSdwn4oAyaiH",
  "key13": "2SShGVPn5DLLctZQYZjHxUe1h55ASdLBnbayWdBmZw7upee2eBFSWysehXXvMd2hY35r87NnyDZbzzKM3J1M61x2",
  "key14": "4makCiLE3HnAgzNG6ofinPNg7q5riF5kMD4KgJ9yCNYfR4Ln2S8rxDBLE6Lmokn7Z1gYWQGwbnrbMY32DFsR2hnG",
  "key15": "3VmGTnUwZTjKQbpMhThz2JrZJPtD9zSTWjr1maqyuM8BiE5Vr1aqSgZARrh9iVWexLgCy6vmd1baPF6dddgMFyyu",
  "key16": "2Rrtxshix7xDEqU8ZswipdeXLQudKnsW2cs2pdYqsecPViZSdaG3sPmX3fMFvQsGGU5uxbnKzUU5dLAi3bSfBTks",
  "key17": "5wzWHgDeYW7oPiV4imSNqMYtxvajW1wh7qz9sZnjTCb42f6sBCDzX5at19h1ttUHaVhTCgPP435ZrQgiXo5iEbpZ",
  "key18": "65sMCR1ZUjxq75kRwvuL7rpjBFq82Xr7UFpSLjpLVxkvfkWAksk9b5SSfgVi8uCfNmPmfE8Scmokw4BmR2yXGR56",
  "key19": "2LvvrUcfZQqo3XrU4uhrrhbvQZSyDce3YZY9xpt8z46aYWAuXa73eNtfwYiJGyJDQPNzbB84T7JVLvNd4NCT1xVC",
  "key20": "vY3maYB14aNHAfama4FuVVLHumzpY1SRrRRCTD5JS7Z1d7C9CNJCp8xptTRQ5ND88iD96eeoWhUhMdt4WrWuHMf",
  "key21": "2Wz8wD5g9V2V18thTtMz59KszxcJkuPUoUYzNmFfxhTvFrhYV5pnDHpFARvbLD7UrCN3zeycNmWndoEbdNquvMo3",
  "key22": "43bzrKvqM8L8f8P7A1cWtAjrushE8CXrYrHf2VZwh5mAYh2fY1oFNDemr5Bfk1t4XMh94LwNEQtbyvEsEjaTuB1X",
  "key23": "5KxfthnLNUpn4WigXZDd2b5yVrX7q7rP6b7ieRUMEMTqxGK8bfvibiFw2vCKRsNo1efWK42yj4Nm6M6ehyroEB9S",
  "key24": "J2jmQgQhsFwsBhrBFALSyymT3fWyHKQuSkCsep2WGyXUBwPGFghCFXifT8ka79Cqh75JTFagQFwNuYii5ZFmggT",
  "key25": "6GtGLW1BpQUNViKGo4dXpCT84n3H31d5BdKBwFCP2UV7rqbtxFeX1P3gfzuPRoixy9in6wxJnuZkcXZ2MXk4tSH",
  "key26": "4xm6DhJKaQqkPoPcpBBFKXEraNjHPxatfqSQKPEUWzirTDj2TSWTpdekTiMuVfkSbc7XJAdetdRMv4AHS3FUmUP1",
  "key27": "2mHJZMM86jEn9LY5fxGwhzwpVpRzQMmwXnEfVhRazHRKqWF5iyobF1RBVEkd1Kby9amSXdmqRewzXakns8VfpiMr",
  "key28": "35nCYGs3evtpx7ha8dLrvkC6WiFqQbDCTZVMhrjwKspJDJr8SqMKqwpNvkL7GfsZFL7E7s8iNC6jqNrEkTCEoYHG",
  "key29": "49WQjd6tACVXVg3Cjjrs63nRcLS1Fzs4ZcugN1fiaEfiiHFfvQku8x1PJHPdJ3arwoyELpCMqwtPTRAfjKgBL8Y7",
  "key30": "2mprT45mZbHPNjFA2NdxwKzyvgYhrSxxPmGJWFRwvzgnce2rKXHExjwMR7MHn6PnNamZsUXtD7ajrr7kMgrpRapr",
  "key31": "4pm6TNFa769TvkXcdci5FDTJJ67pTNDA3E3QMiGNXEWqJNGSLBURWorwMYKGkBu1uUoDn7vvhbVgEE64JDeMNkho"
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
