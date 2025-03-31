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
    "3Ypao1SAr9HMmwr2gqDtytcjZLWnMMEG6D4UnXJLCyjF5KeMSKFwjzh4cN4ym2QWAKDe6xSkFGLD5DEhYpbtKocM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NqmAdritZk55zRXnqzRDyAKwke7njUvDVnAJsmhVAgnJZ2Qpr2BPo9dka16Lg5qAhFz8aLcfKhETZ7xF3fLCxWy",
  "key1": "5c2jvEkbVMtdnB1oSJm4NgG2dB8VtKt6SZDjjjnwKSKcF6cg4pWKxEbTf4dDCqgUUpfh2a19gRSkzMXKmFSKnohZ",
  "key2": "5HTRYpRLy8cGxkqFyXPB2XrjB2RGrqpxR7Mp2fEg9Wcc2Wb9j19kYDjF1529wTnrkY9fAK45coNy8CpZUNoDrMhZ",
  "key3": "46kTwXvgQExVgBvczSZtjCxu2sxyq4H5c7RqxSVxUB1b85kyZyY48EfSQeQJZeJn13wgv8tG9Qp7wGVCW1hHnZpt",
  "key4": "3GnwXGb75uz2rkh7q5fdftUW8uhbFvXQKgAFnaf7z1xc5eADk9M3RSn2ZacGRXhoFA3EJLdux9MrPTaH8vrwFHi9",
  "key5": "3MDTScDha3acyFqRGBPhm53JsfazRPp6HhwKvfh7o2i1Y84gCTmwomZfGNz68nqMgGdKCzDYft3EW8GamGwSsndS",
  "key6": "4rcLiE99y3hN8WkgxP1KHLx5EnrGWVrvPsUz27D63LbW8MWBqE2n4BhiuPLxo2DVnjNfMUS6PuJz9YSx2dX4LazN",
  "key7": "5iRwknz7RkAkqqTpYgCkPgviWfquzURkCgAgQfgMPxPTFQsfFMHxqx5f7kZVUuHrTexfTQsjvaQQFwCnJdjjgBBY",
  "key8": "4CKjiFTnXxwSFQJhSjryEaSnE9FkdzHCVyZLnmKitimEPAi7LaW9BNY9tpe92Z5ja5Uagnb1Feko1PrDabqvNYt3",
  "key9": "5H5p31yXXsxgNvBkTPRrJftoVL2yM7beCqZXzN7C17YcjzKTLpD37LqhRKfDWZpfTXHq4Gmyfhh6cP7jCKVfLSAe",
  "key10": "2RHW4UgzY8fgr13R7DNpwvppyiV2z6WABPbqQxSeduGfWGmRFtrvTF77QvycYyZBeudt8Wa8h4A9XRbAzau7xo7E",
  "key11": "4VBuEM6zoF6teSGVf541aVxxoL91J2b6Hy3RQACdqu3V3mqyThockYvYenzRoSGssADU4in1BYHA3mPBMcjAfKQB",
  "key12": "u8tXKSHnrdZPZjPb35Gfyb13GoAhzqTGgiKu7Pg5hybTfNQLrXAM7WkjVV7zK6LdMXp2FMNXSJvg2ik8RneJosr",
  "key13": "tcRScCS28XGofFhDvDfR8VP29LrKhvuuEfXtxXC6vcsBoNDsNVDrL1EtKzLCVc7ceWzL6zkYot6TuMqM11iygRh",
  "key14": "3etGj572E4UFrzwU2LF4D4zPryLQapSkQ9RLYFGuR4kPgbG7iiQ57V1QFE5G2RYihuaz5AD3FQZm6zwyc1TdryaU",
  "key15": "7pYepyLJ6fMf8Ty3j3uWVSrLrSPuYebrdfKSjxp7MVWWWN1nsLCc5XZiYnfVZ1U6L71opyqNyJXsqCKaAshhRAt",
  "key16": "4D4pwXMPJJdAyQ8SGyNMWF3GGVdAUB92gybcAtmx3bhSWMiyuXjAfRXpzWoYUg7tMEA8WrrtbjDdAzsip5i3hw3D",
  "key17": "2UnXyWByMbkSvpZHv4TGZHUhJysoxjobcW9wmwoFVR5MTy6Qxw541fk8LEmHeSvJc3cqRJFHGz4reRABcutfzSVR",
  "key18": "9uwP5RRWVgGSNP6k89ioAT1QdvtdiCH326ojRFLMqa7S9rJK2LevCrkJNZvouuq11KiFijwjuZgUcFRtchegbvp",
  "key19": "46N8PQUwdALGNSJ6E437wg6jjpF2YJhaBKq9xe54G6E58marTmVj4pqyFR1ewKNWsdspRYRMQPfLWqyT1BQ5rBUX",
  "key20": "4cbfmC2ERLYuk21ALRptqBd7fCvpHLDnm1o1uVHfbkd2xiE53w8y17Q7UmdJgEL6Zrat1MvwN7WCGa6JB8SZzLCT",
  "key21": "5P8kCFkMLVsg5ApeuNjEcCzUtxeTqVJY9i6nCG9LoTFV3NCqSnsFLUs1Ka3UVpCNLyUWgKXnyFYvao1aV2cgj6w1",
  "key22": "3jyuF6UWTW4qU36csreagwLQct5Phi8Hs35AHcZCVSc25vs9DpKfqF4WdYJLsoi5AnudNn67MBKzAuK1p5y5n1Gt",
  "key23": "iS5VUVbEuxZjUHvwwy3etNdP1tijRVJzGYuWcwB3kUJy3WJWnWaFB2ZjCzWcHeeRJ6YJn7XMNbHyNzyvZdvmH9S",
  "key24": "3qrPUVJzFZLefYE1knzhPZ7KPR4P5SfyHjKfQHm4da33nmSFRJTYe71LvcrjcBr6qHr9ZRdJdpgQ6AaKBdudfVbh",
  "key25": "2Wig4bfRdYbQ3xvXo9JEUD3S5u6BNK3P8HWAPniJU7FLNnkUpEpkz3N7sg1GmzfU7apJPfXDaZCaa7GHViDJ3VyJ",
  "key26": "4wqctmrCg7edpn186cRNX8r3mvfWos7DazYV7uss5RPCM3PTtDFmLYyMrHpogjnfeL6j2jWR9pcEdD94b8CDawqv",
  "key27": "2jQftxi863uMdzSBmm4CTCGAmYAymaXyM3eZeuszzVf6HLfZ7uX6mj9Q8xCjyCgtAHi2mRrLveTS7PcLWV8dDU3w",
  "key28": "4NcrU5TTGbmavPzMaH2YprCW3LbHqsmCEwzWqjr8XTT3gsV35jK7w79Xu7MNf7YZRzjQPaznabCdesk7rNM7e4U5",
  "key29": "NwxAYzvGr2rDUKRJYMshkwzPqYhxFxojgGJmh2jsnuePvFMzWRuM6D3Ndk8eFaYTKMpD8feNdEg6i4qUdG4HTPS"
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
