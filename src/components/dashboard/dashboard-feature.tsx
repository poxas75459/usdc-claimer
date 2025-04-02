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
    "RAKTowt16DmMkS8Rmye7mCZGn6ki1pTAMTiwj3PeAXrFahkVy5Q2i3nX68q5C9XhUHnxgnBjCuGFqoyMxRGGsSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38ZyaL7WsN91rq8FU5KowHRuwjyy8RwDuh5jBgbNfV7Tm31EpVHPKgM6q7XRSAVLkBh2DKFAH1WKzNLhAh5MVE9P",
  "key1": "5n4ymsMS63LYwZ4drngVdAsSAiCCX7n2FHRHdx3ZLGUMQPTVyHQ2kYVJHn8hQHJ8NNMjCAhcjvFAj3jrxK3DtAm7",
  "key2": "4MvuXvD8kZkrWpSKW3acLZVpbVVoxyyB3CCS5xJFzf2sFcfK2RvGAUQbmVZV5M8v4Lmpn3qu8D4XsH3Ljm7D62fN",
  "key3": "nThTJZpiCCum85JWWA8hmH2QSzdK7veAuQVS1ZvN8RLxYZmedL5BRxfDY5x5GcQa5Hz2RpM41FWZ4KLQEu4fpfd",
  "key4": "5BNCfKKhyAupneL6n4NUVzKS6YPMQYDpL61sUkLDi2ErEnnkAd8eZ1XCUhNdxCKNavN5XzgniyJUy9rhV3X7uXTU",
  "key5": "FZxNtY5dr4QQXagxukib5Ut9LnHKSNKTrdk5mem2RtQWNt7sBWUPb7QqVgjqBYrtVbdLbjErkNGFiVxJ3kH9TZA",
  "key6": "5xUKQfUTcvbYk1pE8GtkRkCrrSXhzjYU3C7ftxZfkmPUqWPXcGFGJme5PeHq3ETpKFa2fiXamzztWktfqaGAs8jD",
  "key7": "4XnkLrDNnRYbxPavEvzhNFMz5euwy1vAQZBTXpTPhHYfnMMz6VYyvM1dqk51XoMQjBzxNSxttry75dX8Ura6zK8e",
  "key8": "3rvEbM74mn93CyKtyWziLYakHtJ4Q6BVgVJiiWLTV45QScf51m7CAdonwSE3rreLUZnUvdDySyFCTScwDjpT1sER",
  "key9": "4dSP4TuCZFwZU6bGif3kTbKUsBdQLwqAYS2im8rnAMDeR3hT15FVysEKcb89g4Dc9a1jhuKovUEv6TEH9YnkqqD2",
  "key10": "64k4mNYfC7Pe5eRbF8ZEvRSqNYw6vQVNjxGsJMBRYo1N5fCaR9mUxFYyjaKphH1HTTtRwXL1EUQuPBrYxJGZYeM",
  "key11": "4B2N2aaAfPMMEgvqpYRDsQijCzdmHf8CXfmjCyiAfWXCGcU7NYYkjWx3oKeK25Nzs3LshfSm4d5sWTd27JPpvc4E",
  "key12": "2fH7PAW3SFuhZghUjFXY3H3wfPXyiCBS1PyigXPH87adn5Nu4HN7HgMaCbN1wZyACa5QdTGsNfEqXb5bTamHF8ah",
  "key13": "5MTKySN7wqfMvfyVYuVeThdwYfiYssxnkZ9f3h1ihgYedWJqWxRMSBDRvvUQuxa4Me3XkRU1z7Shd2krnVGVxpmg",
  "key14": "2rjVepdiaqhfxtXiC7BjmPH9rTa2JfhpDkvZQJz2geQxsvT1VhZUyvFcFQwe16FefmuiatTJJYBtE1eMQJDaYQfS",
  "key15": "5TPcR6tmDwQDbDa2CxXW15mPnb6efqdchnMvWLgCtdtBB2X1Q7dHopDP7hcQSpF6LGQNigDZTGuABtUJf7jqWPSf",
  "key16": "3NCGjgoWXbWS1HEHxSJjGVqgML9No98QoDKpbkDEAVRgs2VkzZQ3XPNyyLtPt8rY98iWeqx9PzURsihmcn6hLM7Y",
  "key17": "3YpheJ2AyC9uMtEaPjwn75Tn2T6uHn2zYQgB4ES7Vxet84fZh18NM439P1Hm6XZxBkaofZ1nmxY5xUeZuXhhu7V4",
  "key18": "4k8gw8gJL74uxruzfrtp4qLyiZz81gTarN3stSqDuLz9RPLm8CLSfwGaeZ6b7HUDwjX5Zapacod7SkHH6Zxqzths",
  "key19": "5dryErTNg5U7T2JYijLXznzgxZTkVF3ACBgXcQmdADJnmKAAyAk7RS2ZRyVA8vuRz3k8aJTCRzZfkrGdvUuvErEu",
  "key20": "44VsKxqoCWSoPqBMPTor5rsuz5D7jHJyLbxW5co4v6MF3FGhvuq6p4teeYtRq89dehK3janJGYAzswtYoyskcJMU",
  "key21": "5AR6ZMFNw9ZBRnTfkKSypPssAjLKUQHuBPvdobVwE7D1Wvk9dBsJ8749pq5jBdjiz2zqTk9BP2MHpPAtQ6dP2EkX",
  "key22": "25LiC4wZpDNVid59fDvf4F2msyHCZvTJ4imBiGAnrzhJqj1V9U3BnZfCf7aSQETi59saa4kBHPCXMvJKXm5PauB8",
  "key23": "4ZZGD3TP51bGt5KcfXxWayL2SW97tG7JDpu1n7WHYdvbgoovBNxdAyJ4ZH7sVA4KBEaKuy4TzUYy5B5XPRq5CWcE",
  "key24": "3iBtLmoz71JHrnrV7Sw96kafw9YaQsAg1AWt41k83eeYAnTzGqgWLzr6EbKYczMtyXQoL3RBPVJdUhE7zTQt3Eyf",
  "key25": "3cJBRPHqNPYvBWe58zeXH7sWtDwTndwpfZgk2zVxn9jeqkqdGEBPC7cYzGMSuJjAUkcnQZWL7CrErnTjbakAnxGm",
  "key26": "5xDdFiyUFQwdJ9QwNvemVAnioGGSKEEhN7B9okr1d8XVF6f6ycKUAhdrf7X2zqSnMTdisB2JJ2rZQt12weGknk1D",
  "key27": "2UNi5QyZtGxADbb9XjJMHvcbmei1YkXq9RXM77wmit1XJMsiLNzNRXd99iR93oHJGBudnDpk6E9DzjYEwVTnWZt8"
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
