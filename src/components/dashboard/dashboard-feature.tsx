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
    "53RLsGDWxij6x81dNK1h1DwxUdHMxNkbA7zNGJY9vF5kjoqZdDeNBAEi73kMcDx9nqWr3hyKpGPtjbQPnBDD22LS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UsixU4xNx6o9dYpnpbVXGommf6Pu6sZQKF6ff1Rw1G26K2hWsepBs5zKkviTZf3LgjS1VJzZTXnJeorA6zNXvnQ",
  "key1": "azd1saUuqCJohv9TsqfAsupnjdMtDtJQKSBCE7YBEcQMp4WAQVNPihnUD4uWS2pDwpSpnWzKZnS6zz8kuj7prTV",
  "key2": "LTxpHSLAgqHKSdWrYJ37DYq7qUzTPRnLJchHrQ2WdF5fABtiK2vco8j7v46iYKBND5Rf2cFu463vw1kbtqHtqWh",
  "key3": "4msXWrDn4i1J6u6H1J8dVBBWRXnwm1r976VetbqnSXTGCu7TKhyVWpcba23hX9ipXFoAFi6bKdMNBxNTjCU2H5Tk",
  "key4": "4oibD5Q7hjwr2cXiByUjp8UZJSNCyvCwMWd2bP38G4khLQ61bwJQZzW9kSEiEgrw6Dk5TUfpAL5cRkGdeymqiExz",
  "key5": "2nxM8sA1xaYobiaP587EETnNPVYmYvTAR9VZPmRestUz17P2UMxzRA9enxDBxLbnUyy5585tMmNyxXZjmWea43LN",
  "key6": "3AP1AqqbQ6Wz9F6kC1MZQgf5FxJrZw2RcNfYSd6zfNEjqtAPNk9o3a2tqtxuZuosaotwrcfp1sbAKzb1sfTafGRS",
  "key7": "4JZh8rmQDpiNQMCMQjXNu9gedXfC3r2waQVNGtKK3CEPyHHYxdzXfCagGNDjrckuXN7PSVeSRf9X8Ad4ZKrLaQEG",
  "key8": "4VB9C3sDuFw2a6XfmaBGPbJH2mzHK2aPwtDvBfiDnJLyxAz7B4UDG9RWiK8xpSScmPvoGbKQB3xrKLibBKThMjoW",
  "key9": "2JXTrXKPEC6jz6XN7xgb9J7WLqsVCYnjV6pjPGVM6vwqtrTh8szBmhcD6n8s3fmuY1MkQWeCuMzetwRFYBMC79Ru",
  "key10": "3cunk3fmeKe75qjUsiEjaGN7pmchS7UdhKcQgTc9zX6kxXSgnjRMwMjpnDahM6TCMnB5rSQYWFaCRViCQ1PyC7sG",
  "key11": "3DJbVmF6Gtig5m6oGiWPYjE1Y2fWWi3aoUKf29BmksrQbkjZgR2r2JPXsb5CtLcis3KRA5E9csaGwq2wj4wLT1yV",
  "key12": "4Ak1opAjnGrktNkgMwNJunB1b6NLJjRT7XkwSm6eaXr8JLHJseykBFdc9fyHHyUi2Hx3JPhDZfToCM6Dm4wAfQaw",
  "key13": "453pbPYMbMKYhYLME3QzwVtbnveG3YfGRU8c1ARY7CTTt5T4SYfH4PSee7zfMgKacFp6vcPNMNbk6ofT8Nf2fSjv",
  "key14": "QuAXStZbeqmyViAkuQyx9rV8nbLgQsqEwcbLpEdCHG2Mi6qqN6bLVr72qbZGc8TEC2SFA6Kunz63jBsAWMprbMb",
  "key15": "5f4gsjBcyi9a6KyHFBuZotwwWKZNBdT5RAuTPUvCwf9jFq1w3ZAB1YxBC5nkqFQ5iAijvv9LpebAZ8nyiof52C1y",
  "key16": "4Cc8Jq7igMsL37APF3f2XhFZEx3AkkqDMY1eyUEz1qPeg1erw71k1Y3x533tfDKTvGGWqZ9w2zrKHvkrwmGuKRog",
  "key17": "4fawivmtJnPAQGnFHPeJoyByfJcPgetP8d8CHomZQpdBUqtCzvzmKN5Jn5CT4mNMVLEN3RvbYW6wepAbKXhQwakw",
  "key18": "2HmnmnavfmnaVFMEtphaK4B2CGqZYjJcvBtHg2rCC2HmH1iPvzuZhFjXzTHi7NL5iso45hG76BEP7JCAB3KXKtPM",
  "key19": "5F3zpT4CFgWJE77ptjWzRWYrD6ofschh9UXmppJLWwLy81cvS5aFRpM6ZNBkwYY2xbuuLvunDWDzE9C7T9bBKdyC",
  "key20": "4ygsLgDeExXRpHzZpoQGqEzyvRqqYNyWG4mL3DgjjABRcDGudKZHcVhiQbXQUiUksfhPDKEuVTBdhieXRvZjQgGD",
  "key21": "2cq1ZpPP34kZcZa4HMLxVGUxEQrGYufokLvS7RFfZhdRdPLgJ5JMpP6MakUBQAtyH2NsUvEJv4qrxPzqf63KEKRk",
  "key22": "4RvY7SejiR86EhQDA7BD76Lm1BgTJwrSPHnF7KjgwkgTAqoZcUpMr5n8GeEj6GpjNXABZyHzebAnqcCAcgvV8vVg",
  "key23": "49RsQ7Q1U1QMvUuDov9X1rQhFWxqheFxXAGhVh98CLa3UAvrgsp6F99R9jCcCHFtvtKmnF7gih1u2dae75ScJ3rn",
  "key24": "4LsbAgAvCiPYwJZd6Q3cmMZQdSUVkgkUXPSFcKkdPu8TJ3FUKA1dRkoT3M8ACjWsurPvPsna2TVrFa4RArFAVmBh",
  "key25": "5yTMc9Gh4wU4nti2PzZ8eC5MGYPNAG3YsZwptgXcTJnE3xBZbmm9dqQryhsQJ1hkJbEZVbe1qamiJNvkQ6Wk2wBP",
  "key26": "2PoqfF1sxg3MrqmotCxeE61vGYmvt5Ru1rynjjWvK6dcZENxT5bH5GAie3bffuK9v2SQx5H4AA6A4MoSKkKbNSXu",
  "key27": "4hNZHGKeZHikw4A3gAPWUuhquW6CACisr4EgCQE65phVr1vC33wvQMkaKLKMKEyiCoavtZmYTUuQyH2uQNNtzVb6",
  "key28": "2qDdSUVx7rBVhhPc2654YU9SVD2bCnZo3nFqj27akgYBxhSXSurAjJvisJNJBFBFy482GM4yzuhWUYdJwwiTtz2x",
  "key29": "5yNF4sBxSy1wSPzFy8HLhPdPmmAeaFjCpiLfy56hMRcJdNMBK9csrEzKZP8Yu22NhGGoASkPA2apryYVxapq3RYG"
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
