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
    "54Myd5h7wMQ5NgDgycHxW7WRo9NjXhjKahGo29Kn7PKt3SyVp7NUs29KGhzr2ykJbWcZeLh6YJYNCyBRJcEWqmpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zctTZXm4XRiJcDtX4Ap7TVi3ysWGj9Q3ftoATZf3AukY2UNAUg4pKEfCjvYeihWchEniLNjrHbCPAgrgggH3L5M",
  "key1": "3Q1gRdYJepgmnHwUF7cnBviVv5J7nQYCLQjuGYCT5zREddVU9GiQSrmBtB4VYy7U7hLHWZjGYetevu7mJAAaLfb2",
  "key2": "5EN4gaKN1HyQ2LgyEMJzfw9kH6oG4Zk9v6JWhNYRzn3aTzHxWgBoMRJZa2Jhv722BiVvhSAax8XEAsarB62wfAMX",
  "key3": "2rW3GDyVAmnE8FJpPc5cVa5RkAeBVxm2rkdPxJq4f4FGuvFvFBDnw2at3dHfeBr5YnDKsoGZDaTHYThnXBWJ3r2T",
  "key4": "2cNimM26ZPUB2A1xtorSiVFH1grZLveHaQrTPwMjCE8bPbpmniz2Ny73yXiGfadNnNdfH4hNxGFvDLV8BoS6szou",
  "key5": "5aNMpLPsRddME9Y9o3LzdmZtufuWZsunfqVF7pd9inmSfsPYfWr2K77MQmdRbboDMnih4Jxpp1mdWbSXLWqzDCY4",
  "key6": "44iLKPH5uMqNBRtWP5dVzhrenAQaJYc9Z7vjq2PjfZ7GfNwNybpuxRA7r7C7ShcqsWYYku2nF4Pv5CR7oSUg2fM3",
  "key7": "J5kyUp9BzU1NXmsQhn7RZiBRMpCpQU1tr8XabNZhe5XVtu6yhjmbVSjCWxmznaAusGCE1J9926AJmaGUQn2Mo6G",
  "key8": "2vm9muFkUXgnB9msRUqQCJ5FYma3E8TEZ55MAA1zdCzcJiKJLwRyRQBQNsSmHZnWYdjoGdyZVEKa6SdsHraEiPLx",
  "key9": "4CXrnt2hJ75pHMfwYMtbb2XZrDzyQfa46z1DDdj5trMmK5xpcUjsdpgCMHyRHG68L3Z8gKZ8cYzxrD9XwjbQwStr",
  "key10": "4GYqSZvjUWaQhFtkddB3Vch6Snz9TvakfGwkmkCMTvzYhVBFzMTKWHZKiMmJAdN4aQMkQQvA9V7ikC5byaY2etv1",
  "key11": "uYnGrwPQr9QFdXHLZZoq1EqrDBWnYDr4B9ubRHueuvCQaeDzWEzUgQWiG2APzhSqzHXoXuwLJkAhHPZqLhdzjPv",
  "key12": "hPyvcXX7w997gzgQnQXVmdhjFyUMt2zK7dmPnZyXiWZ8uTX7yUC1Hqz2Wwx1Sx7HdkJfaW2UK3yqPQEPxz7jSxm",
  "key13": "5YrRz3jo2ZmwQzynzLBufSErhXBtn75iXWrjHq3gj31Xp8HYdua9JiyixRr3Mz3XXSpumoD8T1rjeQD2Lo2w9Jig",
  "key14": "zRBw86dyFwAiFz9JZoXQPy8SBxumyGjD4SzZbRQHF9CyHVtjDNAT3Z13YFrpfSD6UKDEduDpCdviGRtPKJ25nhw",
  "key15": "4ugPCNfwWY5TjPVTAQM5BZMcR96SKbs2pteSwbJunDh65mGvcVNDXSCKnhF8eC9bwdbR5wFpu2GpvmKEDUp2PWky",
  "key16": "dEmyPAja3jnYhx4fw4YyZzmPinVzF2PinqPHT54cnvmBExYh1fg32LT3uwyJsNjoHAYWD7gaiuHRbMotVnaKn38",
  "key17": "37k5upUxQvEvHtBr349P7Agxi5gdcbrro5UrM3YbZNdKE1BWSPxu6tc6A5wapUPLTny7bXyQVfEsLws4VkQHZc6i",
  "key18": "4PZY7sjc5y5TCVZV7QuFtU2FGwLGXp4LYGkiUfb9SwcW9NQ8KfZQZ8YVE38QRTYBgnQjVxMhC8QDkhSxucexBpF1",
  "key19": "2bJU7nr5qXbwdAbWNMVdooczj8AT2NeKhjfetVbcS8ZwkvF1tFTcRrPXkFmnzWaJ1MYDn23TTvfGxfhm3HLrhHrQ",
  "key20": "5xsY8tjHQhyKyfqPYxgwxUPz2bup8qwdbujEQcK1jR9Ha25GDYyvmK3MVtWqZdSesF2Roh4hDvPzhVhqY7VzNzkm",
  "key21": "Xjq7ZeWEnzMJSagcwh12Wqd9rmRnq2w2YXGbixfmhSDp8NosgwqFk2sUMUAonMoGrtmMGZ2u1jtwjfsQSq67Dav",
  "key22": "3g9nEZj2KjGWB1ubFkLZkmdgb18nmQG8xxsdfDbh16RwjgL6JyAJPFnvok6StcvJduMrrywkdY59DQj548joURYN",
  "key23": "3fpzKzng7bcG3gjQDoy1X2Wfiw5kXVUA1WpJ949HcrXHreMkvji1mkWFYMhEFMviRkztFMmoSb3tYrkf55JMfgFA",
  "key24": "86EZn2miqyXzHbgRe6d8hKUemE1t9UYcfP3eJ96gFA12eT9vPXFcr2iVxXA81bwzzQ3rMoH3bgxRwdvQH6TVQEW"
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
