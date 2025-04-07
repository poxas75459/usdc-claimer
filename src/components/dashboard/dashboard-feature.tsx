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
    "BQVb14QvssktkFsa4rHBVrQGZrre7HUXd2fEsmyBrWpnNEQdwnygV4oayM3bVTr4zQDCjSE78WtaJfXyWYqgfFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j5yXRUkEigjoS8eCVjdDJg5iR1UGAQnPuXkvn2hg8a1GJHWjGRJBbCxiWTBvRyZCyiWUCPCU3MACAbXTq2Kbvd4",
  "key1": "3cuuFo8XZQYYpZTqNSF7Qd1W7Q2rBhPRNnaFRHg11EJmcquJ8RNMU7217zTtzqrBrEHVxGJFfiRLQsPiztnC5XJW",
  "key2": "2kJDwWuupyKwDzvrBJWS51JBXv19UYZf74hULzQnQHtiZ4GMAzk9tZi3GmFKV8ryzd8inoaS2cCuuAgQvvrnj8Qi",
  "key3": "SHFbRpPysyxmhtaN7iz5CKq7fexZuYg1MJyD5xWSC7ygNbpxtnH1ssAYb4EvGvEdvSjxgqApo2qTmWBNYtd9pnx",
  "key4": "2c8v6REjVsRvySn2kZaJY2vH2uTba12h2HnK3PETToreaAnkceTaAHt3T1Y9DKLpt3gxHc6qDBLpa4ytkPfDrRjv",
  "key5": "3sFwLgZuKUgxnktnyxAht3uFRsN1AgqP6RnZ8YsdHsgoFLjKPD1F8H56c2joXKXoCqbnhUG6mD4xcniukmnKRcTY",
  "key6": "4CkKZFDH6RSmU6YKgZUDkyQQJtyjbQpznJtBBpbgS8ADUpZfhniRVZCZjZK5MDhxxHeW6qNycoN1iPvKvLL76G5a",
  "key7": "4K8aiSUJbuoVwwMutP37i5ZkpPj4Q9WQg3u8FfLgj314aFdcEhTrESY9R5SAoNbqbyqPE4KGMgChsPyYbXLsv2Nz",
  "key8": "3fFSpBaZJ9c3bhbRxtwWrwGMQUbgrtnBM3HzHSZE76eWcgdq4oUcznT1p1qfLX1YJzpmRSRAL2mzpQRwKzSiD3LQ",
  "key9": "2fiNkzJd7eJYnK9z996nxa5vfB6ydrgqfBVDmMJTguGP1WmT6o4AvrLPVuZqS4QdPx3oKYhHwjNF7nadDbWX7emf",
  "key10": "33DMCnVnG5RmJk9wCx5Q5mknGB8tKLQX5rhyxbmBjmdpEFBa7aQ4wpHtKR95FAeiTFDkaswfyzRQvbUUKETPxwz",
  "key11": "22YoyFhAMwExVjwSPCBhhLLfMDW8vix8Vn6yKruALSBqqMLFug4vzT4K3283RUS1c4JpusmLHupYRxoeNvmnd8ni",
  "key12": "38vaVjiGen7jTSiGyhbDzA93RAjqG8QanJWwh4xsXxMeP2NoW6H6TovFEqttnSt5wWEQN4z1tCu5dXrBHLHLBeUQ",
  "key13": "36HTH6MV1kjh8GU8vUTMdEnmy6D7EfKCPwHKBBkYfdYrqiP43AMWJ3sxV7nxyfZk6xJHZdxnRhBAygJVmDdSR8xy",
  "key14": "6NgkrRpTF4wCnUM4atTgnFs3fQ83b43yxf5pxaEWX3aFHy1gyRtP1UzJuMWC6ohp7dc943zvvtuGseb4ycsmy7F",
  "key15": "5kvtRWvBodVxpWPKdCvrBHhxSArvGfTKpK72zEfW2NfsYgZ96RnBRTY4LzvPjMw7dxudazgekdwLv6dT44LH5LbJ",
  "key16": "3tYAz96GocFZSPufpFepnzwdekkSFMkxkiHJBn7xdWhtBPCwysqVDqooWKvRN4uvtevarf1drwch1GNv7EztWdk5",
  "key17": "5JQn5qaCm1b72UscoRg4jp6X52zfQZdqs8DPPMT6NgNXW6MfJcFC5nH9CefpcRmDtnvfzJK5G969ERoGpfbWh3UH",
  "key18": "3cyaWAHZkqJcgXa8FPVKz1jhq6D4WyfQR8s3jjmwRXRkZ41mdosiAbHJc6t1ASTwr1bnLm9QzKkmion14ueDcL4z",
  "key19": "4q9Qc41FQzhafBbZsbD4DLfXVtFmMgfJQfMa9rCnKdG6LTNAPfQbTaxacB68ha9b7nhxsyKzSH3hmhUctU4aYDxZ",
  "key20": "3sEB4sK7cSUhkoMSZoHSwQyYtJhXVBx3B65wv41CraHttXiP1NGRRQ9jYB6VSELiZ5vMTy5CXwHbPPdud6gwz7R8",
  "key21": "2T1tL6vRoTfGfNyeg3ogtJyHMcUgrPABGmty8vViC1prkTeUErbDKCyvWH9xu98irB4VjK1Ez6qhUmwisQYTwgAo",
  "key22": "4yY3y9882fHWqhztkvuoeCnQ9CERDHniVUeUbDUFAfiRKnX1fURA4XkZjCYMLhu7A5APAFF6NE1JMqRZsmq8WAep",
  "key23": "6y6c7So5BCF5BXqE7qPgxTqPe7jZzqga5wvHDrVXkixLxMtiTb4ftQyKPuoqC3HudEzgiHCGUDucCurEwSY6yfz",
  "key24": "bD2LkpYXtdY1nZc73AbZWEgDxpRE79KLMFnqKZKiguxy2gvv7NDMdggUG2hDVYjkgwJaBR7yzu3jFq7MxMLruGh",
  "key25": "2Zr64JQWVLNeKWqF2C5n9sSeCer3EQz9ppAwh8UuGEXQ161Q5xPw4RaDAjTPnCHf2HJUFYsh6irjpZXoN63TVmc9",
  "key26": "39fHTXf1itdRaRe21MnmQBiLsK77Vk4Geob7KZ73ZRt3W3WWQQ1ePTe21Ce3zUpnocPNFMDHSi5ZBUJuLZGCgNE9",
  "key27": "4tGGVjvcCY92UqvGBYQf32NefHGRvZ7bb51DqRUwpy1qrAbfTpGhKjdTjPSrfQwKNAffyJrLvtmq2R2ymE6zK5Ss",
  "key28": "9ko6m8aS7ZT1jYATSfmAaF4Ba9dK58ETzVcYrdjAWw5zuEEUengSPQa9Zetj2d74vRtEpmMZMfMeVDdCK24Gtdr",
  "key29": "2b91fGmUDFVky7yeP8a8WgCUMqhR1ETumHrbnooj5RggxsW4idZ7C79KDoaZou9JPVFYeibRFSb46H2cUYyA1g2F",
  "key30": "252kW6LGqMCR3qboQGRQAF4FSETRAg6cp5NrFBkbPRkmEYu2SoEe9Yqyr4srnQEgUiChQdNpWaFdEugpTD8q1pey",
  "key31": "iFDegsgd23un7JKHicRtTKmff41HfFjDMg2W2najqRAZ75gdnx52rjgyz9cLEuHRHZUYpXArvDbg3w32gznNwiq",
  "key32": "3nPeVQVsS2fPtenvXQ7BF9vXXVdTAFCgH7SBgcz7P48YyHJsvZo3LsGPG4fQCqhJo7oAqQrk8c354Jt4FyZ5u4a6",
  "key33": "2W1tQan7QXrrtGwUcx6qWChpyH7dKFscwhoLCUTSbnpA2uLnn8isFTD3Js2EaWjHVDnFPX4sbymEjTG9TfnyCU8X",
  "key34": "i4orEyQDmPPPaqoUd4CbHGt2gLxBLPh8HTdTJSjVtkdBG39jMJGtsSg2mfUvUxCiZZExb12avnwWGRhzn3cTgid",
  "key35": "4vRbW6bxKHLBCpt62sYUDqJYxDhVNr1ybQctW3JVV9XkyCutnrE44e261UeWiWK7uBWKpirWHpLufrT5stoeGZGZ",
  "key36": "HwVwUhHHQXQoFM9Mf5aZTFpsqWViPCqMjcRCqmYxgfsF6o1JogA6MYks7VXN8xmVWRDNj1QAM4EYtSzcu1f9gvb",
  "key37": "dnuYAtxNEZubqRAgHjw5ip9bMTt69qBebzX5T1NikiYXVZSRYRL89hcmPjyypjV1uzd7kHfY98kzfoDHNCvAG12"
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
