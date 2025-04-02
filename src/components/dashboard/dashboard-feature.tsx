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
    "8oSabPMnFQvZViqjxSriX6ZuivK1jsYgit43vuvRnAYq2oSFajKZtgn2LCV5WHgsh1CZYpeRYm2cmpjTZw5RPVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dHAvvhTt1p1j6EWhcaURmANNUGeXmRmrhqmeDViv534hdhXjpM4GmLyq9AAkHkQo79kV5T8cn7C3fuc1jtrsXFX",
  "key1": "1WaFCu5ZvhrknfTNwevzsFbcgHH5Hk8zFMFtoMSeVkoqbrJ8j72Rv2th9cNwqsosPUsCjfcNUge9X2ybv7TdSDD",
  "key2": "4nwP3ABofK2QTyaor8nneB9R5ZhFJRU5LhUf5d2zuDyzeBqppNyNGjDkCbmBU7JnZhf98EtXRt2MijzDwNYj7V2k",
  "key3": "3kqaRUaCtduCiDcoCGfuuMuYQN88AVJqfAc8X2qpDtNG1VZ9W4RRytXYKHN35JoiAr7rjgkupcwHsCWeQN9c5Hiq",
  "key4": "4aMFSz9FFsGHLFvHnhjTJpQvcxSTk7BfPKG2ThkMQGZmxpac9kD2qcv5xt1QiJvfW774UdSqC8bw9LqVNYLMCG8r",
  "key5": "5Z6RGmdtHfEgwP9WqQwnwBpekJFoLuNdsBXoSjF5uFDRENG6SCysZB6hL2KMcPPCLxcgJKN6y7vCGZoKktUrDU29",
  "key6": "5LeJjozd7GY5MRCVNPYaZc43rQWRS9C8J5KSjyaqBu3Z51ys9NQVzzkTgjc9PWUFxRHd9dAJzJNCZhGqL5FDW6F7",
  "key7": "5kQ4CvPZ2ZFBxAvMWdvi9iigWaB3wJwXfXTWWRCnmcp4xQxPXNXQhGfmX7tDcoEUCarmNGRX8hxFpmNxejApY2Sq",
  "key8": "3vSoqPHSgeCGc9LWFfbpPdmFTekFXyVQPzo7ee2wT3ia1iiUA9M9pUjCHDhC1QyVZ5zGJdAyDj2iCqnmNzoz11x6",
  "key9": "32PaCm6okWNfGSwmCdQbUj9yi5acw9LtyYXYF4YaNEzNgcSG5BVzTAmZwhP3e281VRGk8gVxo6EtizcQ4c7TkRZC",
  "key10": "5fhVUqRqFqBdG9Sbq2mQea9f4o2GTYirEMgqoLExc15AYqZdAAgmmLD22G3NAtv5s4ryDuFyFn219MDVZhavKnS5",
  "key11": "5MxpNBdgH2jFwhgNHTXEtTeecL2uRfwEYDN2ta2d5jUUjtbAxRUtWSuoFBYBScsQc7cNXgdAQVdHzYaSaRZWxJ9V",
  "key12": "2zDzpCi3r656sT9hSFmdQsif3nCffgpVRHajinbbAfGGNhXBxJ8ngX1Rvk2Cak3UkNWQjiTvDsZhoQSkLGp6m9J9",
  "key13": "3mY564A5dFUEU3W4pj7xWR5XadFv9c5GBt74vKNVBqBGutM41hnU5EtTczFYqRwxSLMmUF2sS3RuqEApNYXo2ybm",
  "key14": "3rke6ZActy35MT3xWMRXThVaRun2e5phKoKSzUxZ4ypvWsfWAHK1N1dQMhAffkxEdb4CxwfE5uJoDLMjwUWUiFam",
  "key15": "45Z9hBnDVSeKmVcwuuqtMfs51ByZpmBRvfikMnk2MjzLQQs876cRMWgpciwxzEJo4VAiQmBAsteaRQ3gQgRFJ6dy",
  "key16": "4WvCREST8rKujVKJz6FaXNAp4GYBgQbgVhfyPYyLR3sdpjqFeaZCZsthqMusWLLBum2ihQvvNx5eYkyBEc2ArHjH",
  "key17": "5wSc8E5wAs9cH1HYcGXKxQbDoMNeVgwmjcwtr5yavjKHGz23ovc8uyrtXvUPT6LTxfLN6wWvWV23hCEc4YgJm3jo",
  "key18": "2X55wYxadCHs8NeVTprvHdiGjFaeD6iXC8LD7qLnZZRpazDxoa9DYt3q2BhjEau3sbq59mTVSZqwv2UuL5XqRzbo",
  "key19": "2qWzMMSi9k5Cu8eRKTMr3RUPjjqxceBvqMdNnuzVj7xA9cqB1NehSsB3NsQBfWAY2JogA4ePt1WLySyKgzkoFh3g",
  "key20": "267fYkGWuejj1XQAKE3k98txFTa5sMroGZZ37vxkGoF3tbJ64YKrWvnY26VR2ECunagFPj7FtskmmEu1WdzqTWnW",
  "key21": "i878Z6kQuy1aUjVwVfRHocEc9GbaztYcopSjBQTGj9VvuxWeUnhBnBQDm35H865a68witKdP3FofTipSEaEEqHK",
  "key22": "2x7Awd6GRcjNvEjuNqZ6EaAdbxcvJJhHi7ddYMS2NPaaag2AGBUdVrfwrNUuPe6JgHCV9avsbRp5vdpe9QWT5PSB",
  "key23": "2KZ3j9c8ikCpjjYoCnMnHGhsZ6UoLgpSjEWSCbVtbsGCLWfKkGHgLsdgER943nGSgJnQqWtHVUoHyrusdEempjbx",
  "key24": "5bR8aGixoWPJE7W3mS25cMn7jMSBS2WfEBtrFoiL5ZLStqqzvUQDvGggvpbggiR9w7Kgr4vKpD3huj5UaqK1YmjA",
  "key25": "3ffn6h8xJhgPEr5NGUa8pvoxKKy3PyFZzi9QJB2eyBxtHoLuDXudFTeAs6tRxet4ggudNEWU64kvzzk8ozEmNaoo",
  "key26": "2QfZhTPif2UYZoj5NPYYpk5CwhScqZzN8QQxpJjKJFYcrNKbpr58fFjKjWE44Cv75dy3iMh7vEXNAyXsS3YTGQuV",
  "key27": "bXj6yztuo6MJ4kmXJmVc6GrQGysJYhLRFS89JAq7azhUMt1nuCfEffpMqREcYUisHgqsZCWxdESZkKx49Z8tzAy",
  "key28": "6vUWKNEXQJpCM8Kx1LhbKB2dthy4HUEQvcqpsUedPtEThgwcCXLe9nEMzXmV3bG7L6DYQAeDL3xHWhUmuzEAbeV",
  "key29": "5wA3zhPgP4qhN8oQsoYHBbxPfSiu1tT2RyADEHnb2Kj55rb98CC1XXG7aAc9SuDpVFW9iFzFNnVVanr7JaYTJVFB",
  "key30": "ge1zKCA8cYf7FR17Es2j8XWBbFNEHdhhFtdcnNHF4JaeEyPrRwN5Eax3HEUpRK73wiGzqo65ir6UMPfYBWxQhmw",
  "key31": "4Ji4RMdJQ6FZdQrtAnr26dYDqeKTaqacqS5NzczE1HJ8GUdD3tjhtjWjCFapBUmBzFCLv9W4kRpqzdNLZtb738x7",
  "key32": "4CJi5f5FUoxEriBbcYk4iUWSWQxHJ6PFziGoqmgEVZVvqNcTdLoT6aKEmqd6RtobzyW9UdM1Y4ixKpqEQeMbqQ7z",
  "key33": "2vaLYsPGedSQSU6mgWdtpedAxN3KLajyEVa5rvyeXx4qK7ra5iQU3ReK57fAQvZm7TB95nPCxbCXD6rxAYsa3qpp",
  "key34": "2cEBQtMmNfaN2U9CryvzCYBNae7B2TF7Yj3vWyBHabaJfCgSQEbPQ53cBPcK4ZMSyg57iZNFAPF81fwL2N7goFF3",
  "key35": "3EzD4MGJEFtQGHUSBGZodoE7sUCRtp4LjrhRiz9QuioR4QTNMCACQRWrXzb4xhaskecUXr7wyPqfpfG6JTeSReuB"
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
