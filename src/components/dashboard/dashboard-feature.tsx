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
    "HLLcgsxXDpQtsTDn34tYdZVyrYQDsm1PP9jmrygQTZquxqjXmr4di2tMb9iCWJyKpqtGCPeaJJ8yq7J6u4nzFLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2veCB3fX7URK23bWeiqQgWKGtsj81rTZhpyn7aMqrpoM8VGw8xVBXwBrM4GEUs8F3fjn78uzitgSNmX7djvtz5da",
  "key1": "5Y4TSNnjZmVqXqgiGr7YyCb5Y4oKM76dcTxAtXRiJSYrJ16rF8UpNpzTgAMRdx7i8WQaYzYCV6x9FLdZxvdYVivK",
  "key2": "5rp19bSn9XU9z4XAvLdknnBU3ptRXAYnaDqFLncyoaWnyLiP2UZAoC3MwUTXhuG9vAUZvUW5KEJuY2GWAmiVC3hw",
  "key3": "vRT5Yn4AXFAcNqNwHnn8EGXCzdjmhWjwiDRtrkqwZsSPwcMHD2tuQbjun2zSgPSt7JED1tRGoueDBGwTqi6ar8r",
  "key4": "fuVufGzMmv1nLPEGy7DH7nPpC4EEyR5bHAfqMiGiwsV9jf41nudZ7SQpNFKkvyNQA2Gy1HtvNXJzdjaQAKn7naZ",
  "key5": "29xkpswsXQxha8b4tT4g6KwLrbMxSHULsTW7t85z5QernkoHFFgruFSGj4R9H2jhHPseeV2vKBPQJDGCED7EJtmg",
  "key6": "5WYr7ET7uhHJ12BECEsqdmpforycg8QU8C2TxqeZ9cSudtBNscsedLpizNPWFmepnY2od2FKiisjmypyGPZzZgG8",
  "key7": "4kY5rD7emThjZZbt8Wow8xZMXmzcVdxTzNdcgBUATbGKKWzhdpqpFhETsP7AuWtzSw4qxZtqG7Q8Nwgp98PwmHtN",
  "key8": "4yWCUUEm1BttQEppNE7LWpjkQQLUeAa22jZvifQ6L9uHSNd6v6kW7Xto1TTBKDWnAf4QdEv9rLqejoZX4YsKM6vH",
  "key9": "4fr68hBJbXW7jy8jFwGak3JSd9LS6Pv9XYpeGmCLbKsnt4KMwLRDVeQMHMUJUB6JiXVEtXyaeJkJEwPSjG5Pkuas",
  "key10": "3PCbTt4rRmjoZqHrKC1dCMaqVeMtyTmPz2Ro8pqDezJLZ2ghwYABiFtxGujqHi1H7gz5xqkKXWQ1ezHJQ1zmkMvF",
  "key11": "5xQzg8MKQTumsnQxxDUzWyYumoXQ9DwAAxK6sYmdNMHoApRwhP8pQkCT4zxi7qnruFWsgEBFGxzAaSDJZRAUeAL7",
  "key12": "3kbZVY3G24dFWvkJmGAcEiaWWRtbfjvKshKQkqQaeCrRtF8pMgsz65KFhtRecCZeoRNvX5yeaj7D7W4vKjBJcED8",
  "key13": "4DKNgQksB9sBd2TUeyU9Ch6YV3ekz7657c6YGupgLr3SYsTJ7heC8ejyMWJZcMPWkYJRJVu32pZ81mdw8nWnQh4Y",
  "key14": "3FNVfcxZ2KxK5gqRDUwWcypRjXxS6V5T1yWmNtYwZ4qPcf38mBGsaAradcxBman7UwNfwqkZGFNEfyoqdoJWA25w",
  "key15": "5EeCot2hdGZrdEoyqGEJ5ETLsmZ9h2uXuGfcKpuYBUdyMZBJK6vYkQqRVAKM9noxftAXBsxMqD4BesWbdcTbQ8Ym",
  "key16": "29GcwGLoHgzZNhz9ZbZChqVb4LRma7KuuFkUaxrwSorqfwz8vEbbW876RQPSPWi86oypjYhp68ieB7RF8iAtB6wx",
  "key17": "2t5jPAqmKK6PDW539e1c7NxVPBWv5nKUwTUwVg6ZgFaUoSLTfWjQnFFtruAUsyMgN6sYJUyPsUp9M6BD1wCHjVQf",
  "key18": "5G98XUZo99zLBBbXn6TaLgcLN7TuKfE5GHQ5WSJT4dRtDUa62fsTUjoiPZijqp6BvRZ6cio58YEkhiYCV5inktK3",
  "key19": "57gs9BGY9JSb8V7pXi3kE4b7DiJTfpBwEycDKYpaZFLctA9V5WmreQxSqS1WSn1BvGUh1NcpvwHFbFQwpkrC7Lh1",
  "key20": "5p8aQePuSyUKhS6sE5SMgu464X3pgp8CSaUb7keH6nhUKfaNHhzKUPi52oceaVtTXkvEbXennsWqbGP2FtFiuEGj",
  "key21": "3F3xF1w8eZ7rFgzDz3fzo9XhcnGESnCENTPG8XPBM7WwChQzExrYinbvzJxbPLuC6o75xZxReJGy1jwthM6b83wC",
  "key22": "2Fp4eYEAn15RYQ47dbevJRc8nkNntvp4Gc76wNCjvAmSbfpnGT3i8uxtWar2ygMJLzuCsonAj5i3n54isaue1KNR",
  "key23": "JENsAhK5BkHnxujJUEw3nx4AKPqLvGqBwzpEns7MJhbGZEFtNuzQzPty7RfxncRkexYr7L1KtuGAAwJNoS2oNrP",
  "key24": "3cky6UVudq1WJrvc9SDxVC9WMEBc1AsTwsENxd67MTgxLV966niq9qnCFWC9S6nkEGpBNgzFPrA4QXdVabYLV1hQ",
  "key25": "3rQ1joia82PtPmbX7K87CSy6GZ4h1aKY8nk8deiGWDVFVGF4KfF2o5tCkjNqxNqrdijYqXbybbtkw3yoZVZFh77u",
  "key26": "2sU1P3U6yKUYn39bRTFDvwVpesMWZjGenzB7SpZqNgRkwXcepJk8EJJvGXNUm5ajbPPiRnd9oDEpadrumtqpiaS9"
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
