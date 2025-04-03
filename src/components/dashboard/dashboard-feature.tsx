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
    "2Sbqh9WrqEzpuYw2F6s5qidW629kxXcn3j3JS6FraC7Jpg9KpkzU2BBesoQTQfsmAbWXDCXVsJZ8UUfD1XhL5Zvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p96gAwfBtXr3E6gzRshEcD2Fo8HaUVbpaznhPnjSEJpaabgYr1f6NwnStHnJMJvLtvCsrcoQcGGNja8ShLWBqz7",
  "key1": "3aXZRcpo75Gknve4rpufiPgWpZJyj58XuceiniTQLayxkhTqAPRkgwKEs8mdgJ7H3QMJCNACSSwLJymYQ6t4pxBm",
  "key2": "zRSWG4ZEdtMkLB8g8ghRZh6TG77JKbY37Z63ZQmhJVtXqCtBrndAcdwkVoYJF9ZzqEdJSxZM2mqZCWxapTwdUto",
  "key3": "2TusWJRseWUjnVRgzhSfYpnpAg7ndrGJ7n9p9BQmm3iPb1QSzybiuE46njohfuw5tkPT2iSZ7eXUSAkUTbahcDNZ",
  "key4": "29KWg4f9eAtjSCJohKYzCRND8uPCD6ckXCiaMggk2pmjNnuUzg3j4FtJPaLTkyUbrz4nrpBNWXYYrmuo2kg9WW53",
  "key5": "ZQMj1CGqYLtTPqL6qGW8ZxQrjgAj8JYaw83AemFhHn42t45jthyLCqE9RJfRGCvjK3f9RSn4gjwEJa6y7sKPPoW",
  "key6": "3CKSY1cUJo5U46gjNrtXos2JtNFwVteKR2r24JaP2MdzCVv9EiucWproeqDQXFU5YwyThfjuZbavqRnwyn5AXCwX",
  "key7": "4NhufNWQThB7twhSZrqb4AVLnNHGYoSNXwFECvoKY5dXrzxhxjY7DLEPVqqH66E9s3CdndFypX8NFCAhkkzQfo2h",
  "key8": "3e1PfmjPe6B3fSeJq7fpoHdU1RMzYEM8s22H4RvsJibVFamWiGoTV2xivVEobeYACX77sSGdL9e1eT4QEm8fTKCk",
  "key9": "4xKzXyd52QXbXhWcKgNa6sST65hknyibx193NNUL7twFT44YMnuK1zVVzzecboUXh1pmAbQCnKxU3iNBQpzPzPBo",
  "key10": "4B4554J8E2JGRhpPiFgGeU4hroTEC3DAeYGQsSEX5ZdcqN2dwXzhovcMfmHqtEJatehfDzwKmJAdvvrNYrWZHUZB",
  "key11": "3DjcdnRfnW95VRVsk2cRwDXDaJ5KnmeuF7uwD7KWabjLeCFnvEUVfvjpUXsTZRkiXheiiaejaxPhjbjwqE1TPn67",
  "key12": "5GDqYtwAWah6schKu6LFX1QaQnfaR3NvMxP3gEMaSVYh5kVL82aa415mCrynQwLtkHPt2wvbDwaGiKpZ58nGctRW",
  "key13": "5VB9sgLTDZf9JoHJgn9PKgUR4YfSAiKbMwkrQb4TD6SzAGy4JhY83hdfuqi8UBRPnMJD8e5JpyQv1Fazs9R9q8HQ",
  "key14": "45wsDN57SupN6H4e1N34Sq8V8cHGbd4aYeZ8GdCqLCRSjuq8Drm74ZAZR8NiEfrx7w8VfZ8J1FVDh8NUUrAE9Upp",
  "key15": "iNrGtj5ypf9ZQMZ2rGHGctyfwRyhHtVwMAwcfgvdRWHwjXfcWtGzGwY4C9xsFyTFbYJE1JxtFtFrbnvjEucaKcR",
  "key16": "3RNWj6qzWaaQMXnPzpfr3E1nL1DrUQ8cF92rtVkFp4wNwY5NTwPTT9e64A6QvZ8E9xHJ1jvqB3Qx8inLaNMxobSh",
  "key17": "24NgNy9AGsCubrjjR2gN5Zc6kF8TdV61KPpEwWoW7KnMiVmR3Di6BJc9FdmmReNuGiPRgWBGu39zwDx1rTSdAAmd",
  "key18": "3afRS5vUNjJw6xKN2uvmRjHSCa2nfTNQPWhwcHn8Y5V2TFe8CkCWBcExEKvqLSFRvHUt8XNA2KDs4LBfkiXike9q",
  "key19": "52YHJ26MTiiTqCosc8SFbDCbKdHoBBjrhiSMctpSB5fstvn8uJwEZz6hZ74YhX8aNZZsi5XKsqoxEMdhXbghbLwJ",
  "key20": "2YZgG9Ej6i45GkT5JmMiM8xNyAJ2T1wKFsyKHjw8y8oqF99Q3QHznrn6m6hzWt4ZWV2R3drngK6Q8neQUfCk3Xz",
  "key21": "MoPwz1RBWabXSzDkjjULGTPKdy2yBwGKs86oGeHsHwJ9E3gtGfs8xm8rp3ohgtmMB5Rcuho6V2mftJiDYxDiXmv",
  "key22": "4kbWB8rpcxKJ3jCcVfXLJsVkDf9NkCsBqG2kG2xNBfZEEPeeSgLBKHn79bFyHAu5BffRdFLHjy6whCRs1KRkzxo9",
  "key23": "5J4rHRXNkRFA5472VyueNi6ysjLw5x1pmJRc2SwxoANTygNzpuEURwZQE8Uo2znGWAsqp6w8BHLQgZmgsexjgPTm",
  "key24": "4yud4sEbwZpPPKPtLR4yt6xUj3c4EqD9kV5RaWz91tepx4u7kDWTnNT5kiaoxwH8j3BquZNKsBD4FAbrQr2XKEKH",
  "key25": "59K2wiCJGbSyEbux7vi3H8P5FaNsmdhpMH4BwnASCNJNFTaHqyMepZAn1C2DAVNb4vEiwmC9d9MoGY1HUSmkwsya"
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
