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
    "33fJaFvGhrLRwEswjvN7Cz9rspk7ZpT6ny4ZM6xKM7TtB8kz6G2KeJs4dtAojwGZxkAFoC8xais6Q7FMUidscVWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fqjpHL5xW3p9aDyJmK8sYQ4WqBjgs4Jagi2R5H9fmopqyk9hJo7JQkEJ1mWqaScx1JpjuNVYcxXufxcDrR741UT",
  "key1": "3nE29D93bASestcXoHySpy7RTfGw7pnzbG2P4TYzu5TprZtkeL1tUrRmdiSgwfkSUbYexMNkkiVfmT2zXBm9ts5Q",
  "key2": "jmhmHkZ5pZFXUMwzNDMUSBspeHaENYXm2SZoL9eHWaVMsrgfvgWBwxtbDVxfCAWHuvFTpGuDNqMy3pAoyCXgH2V",
  "key3": "65voQeLBQ9Y8GJETb2jF2kxLDWtcJptjQ5GD5SqSkJbZuvUwK29utxabDsgsD7cjoxkFhQHsaBaLRdKvvTCAqEmL",
  "key4": "4vmFctquiR2xg2hMXpWqF5iWnfvyEBaMkSEBJSPBWroyVWHRDTq9i2dgfaRKtzGRKmbcYrScjp5uECxyK6EjyF6E",
  "key5": "4Yv5s6ypbBo2tVzqwzsi4QsQQHonPvVNYFvgQGiMXbv7oRJS2nTt3LB2b8mVecDHCmry2pSR6QYRFQLAwVt9hHS6",
  "key6": "4aMSfbaNWjP9eB1tTDNPqPWmUq5KA1Uku2J2Gk2i5eGRdjKxV1iv7oqfimABE447YbqWmqgZFb75X8TvtcHuGfmw",
  "key7": "gKVnhCtNa9h3A6VuoTdWP3Jz6pwh1BE5GMgFFT9J24Tt5bZB1WVZ8CrhfFNxJqiAjKvCyfyuNpap4jjEH5N8vSv",
  "key8": "58CzVeLAgnLT8aKD1eQqXi1VVnB5cWZFjEHovNDe7YgJpUCUasqNyGsM1XnSH7RUjmKXPq7dfDv2bVdgHL3h4BAn",
  "key9": "5TqwDoBET6FJm1k8deWXxuxyjTMa6u6rUxvZg6V7bapH1iCoWahGiM47ft7pMQ9ur3CFYyGjqttb8min1YB6oBMF",
  "key10": "4dSnVyrLuw222LgEmJBqov38DwXEkTYbFJR4H9qesVNzis9LpJwU9TWoBnx6pZ3FckStXUBgdoGpaK5YVpfNyhoV",
  "key11": "88BHRG4zYMQ2G2dUfqcJxKxLTjXzq3NPnWLXgYvbkhumUaedZ1aoN8RMKDAUDqiv16gWNeyih5ATwZ1rcMFdv9x",
  "key12": "45QEUxAGBqmUWwhtktbG9Ykvu33Q6K9RXtVUd4qodJFSUPfcvXw2pkKkXmp8vBctUpCXeNJx4CU8R3iSFqX72wYT",
  "key13": "2w9hkowFjEBdDddt2MjEcR6znHCiK1Rt2NKBnYmFmias4EV5mq7hFpssFemLa5eTKa22ptj4uxrUD7KjcfkHn2W8",
  "key14": "5eZeBecPKuTU6mW9p4wWBguXMGsuCnU4nbNWJHe9NwjYzqu4uGm2mTBdXYARMLSvEWLpqNaARsVuNxTEyCxdH5Ua",
  "key15": "4BF5ZgSe7GbsFkm5UC4ZYRuLDVMYQB6yV7uDfk18jtsGocbxyoZDe1vww32TzrgFEtWcA9ebPaBGyE3FVSgy7AK6",
  "key16": "2JyZtM59hmwkGvTbGuLJVWYFPz29GbwPUrfZefZ4Grtm3YBhnSjqHC99m5amYyEmPGwqCqimdTQGYyt2JgQPxaEN",
  "key17": "4F1J5wzrP8Z9aMY46KidXHmJEQtPzf678pG9DD7PNeFk54gDaY7SQvC9XdBpKDbzdTcgbg8EL42a8e6KMosyegTD",
  "key18": "cFT5BvJvjmD98R8eupZXsuJH5cu7f4j1W2vZd1XBPdAs8FknHE8nHB5vziLiBbthSfiEcBZRNSm7F3NZLzJ1Pf9",
  "key19": "2mCY8fXBfzP8t2F64BuP7cX6jdqGRh51ibzYpBKqGrT2jUL3DG1qCq4fjqQ79pTDiPZ2jYGNaWhsN2syzP5BF9tM",
  "key20": "59jaeFJNpd27nD36i1LXVr6oxtetBBJEAqu74tYhXLLyEQiNpFMXUXxTzGpt91PXRar2kVKQ5akPnfDEUTFGQaVt",
  "key21": "5uFD3t9sF5Chgpuy4hW3Fg2oQJNkpGBeWqb3nfVeE1aiUqWUUabyu9W2eTgnHnAkTzzsJMZDCumBkoAnkWprauNs",
  "key22": "3ASES5dkm1EUUmFZErcx14Zf7Kg2VBg1QSxNd1YPsoZtdb2j8UQ2ToDDeo3YbXNWYXJYCYWu31Jmq5FRQtxgPmX1",
  "key23": "4PYfV8mmxQwpEtS7RRdFnB672Z14QJShJFGWjumWF7Zg8R1Epnxtwq6CFUgKkkXxLuT6Le9YUfpfTiaVYScdj9nC",
  "key24": "2LYiBkomeRvmKKgRCKhMha6Ud6EHwFmaVCe1saCxV2HKPm8RzhvSzkAcGDc5M3jSiEvRqzPJy61LQX5FVsJVR24B",
  "key25": "24QEe7numxM3WdqekzpGzNDw4ty1wD2sUnCqg9SPyuiP7acxMbXgxHW3k89LDtgFMkvN8r1nwGTWHyfLEz42RP8f",
  "key26": "2iD8of7GiRYjSGCp6qKp6RofD5zHR2mauDmYe8rBcUoCBZGHzyRouetCBxkpPyxrARXzWJGUFWg6XyDACfCLZhac",
  "key27": "5mKdczPqGaQPDHto2zMtJCmVrqTnB5CvzGxf9JVcn75hTv9jyv7WBK51Ad6AVMhh824BejMYUtXBMeYC2LbgB9DF",
  "key28": "wADJDdKLZmyt9HSM5Xbe7CNf8DQgvVnCToSfE7JZEZTp7cpjArBsJGX5t1omRRcLF6dMMVGcD4fg16FoyJjwKBu"
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
