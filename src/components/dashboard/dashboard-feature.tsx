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
    "4sHpA4cn5Yy939RzxcHMugwodwSpmiK5HYrMB3HMwdJXP2WBpHw58Zem8SzB9TCRGGfVTpFGVV149pZue5Rvkz1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LSxDbiE56mPFAx2CdduqkQSpP9zRghXRyTTQnzXRvL5yvcb1EDVNwURqUXZU4GV4kaHMGEgDqwtyZjCCTaoKpH3",
  "key1": "5nnAPVwShTuHpeTBHJsv8qGrmTJBof8gAfUmYT8QjkYmcwd8LyKoB1Rq1Mayy3hhsi2txRKpS8RDSh29GmeMUo5X",
  "key2": "2bDJFeaBgMEnkdoA6R2cYNnG8RKPT4QzhnkWKLc6iY7GZ47MD93peA63v1NSaegFtsk91yPEi6C4sgrvNThG6fmE",
  "key3": "2yW3vfnTvYVRGWVY5C55GkXhDorJ6FjtX4zqRWomoA19QtdvC91BsiUATuv5Kwz6Lb1EsoPTdPEeDTUuBz6oAFRp",
  "key4": "WpesjtHs1dsFAQzeZwN9XdcYbdzAxYoSRXTEwMhnkJX7WUaxq44Pow59SYJQ24SDg1wWbuGZrjZSMZyQpQ6tqs4",
  "key5": "4cHxvADzJeAnW3wBLcsB3igZzeG6S5Xm3PkGjRVX7thKwP9xdY4tAFefzcNqi3vG4Gdhs434rzc84kAxKuMpy6AA",
  "key6": "5qRSvXBTk3n9ovarxh8Bswq4LYqBUUtLWuphyZ1u8k7QrwzUGLd4Xnc6x9mb2oYDsTAxctpJ5qM1Hi58bmEK3SXn",
  "key7": "4QtBKWP6UFsJDd6EwuauStLdn4Ly8t2qbSmifM9uA37BQ6bVCunPXRKTkxNF4m1N5XVP1dAB7nGexd2oRQKBvM8B",
  "key8": "2ShVFZcmfB4dQNShN3Q3mXZxCgWwQEqJgJmurkai6ffBpf7JAjFB1FKNwe5ucWcEGeTyxo7hrFjjumjHKhMNNFZx",
  "key9": "U3XJyALoywjcrXdVwrTDXAVJUHNZRBbbZf1FeEovmWpMPCP586vELWR3VrZ9owsvyjYzkSNDHQTNW7DBwmD34QB",
  "key10": "556P5JR7NLuEs76L3GUSWk9fuj5a68uXzgCDW4XSerdfM3QvLkkX4d8ZShxBeyA3iJ1Y8BG6suj3YWarJcAWdFwT",
  "key11": "2G2TrshdiHPJAmGqZeqxtVXcx3BH8on548VofXW1mykgrCxwV5wt2MQ1HYckdTCNNSrgDhfhYtnKhtFxx2M2HAQA",
  "key12": "36qNkwpBCi7VzTfhYZcVCYfYBcvGgQq7mf7iNjUeYDKj5qpcQNFAho6wAmUMEVF4Dx4d49JojrQ83z4ZfECzo32y",
  "key13": "2kR1q2J2m8uq3Jdbns4Z2Uyd7ptVv9cejkbwmqMZdk2e5eXGHABDFW7sQDo5bVCkMwPdWwFF1xPWgZYpHw75mYRM",
  "key14": "2PaV9x8YARMnjxpYHcXBFBjb78RRw9JTAysXfAdNzQs83qoTrGzpEGFhmyPRgEKRNkcrduYGCiD8DUyPEUgmLt7e",
  "key15": "3SJMgvrHndfUEVDaZGw2AexZpQfj9u8x9VpAT38uEh2xKriogNk62J19ee9iEizbCMvUtskk3pJoek3qPzYnGiST",
  "key16": "2NT5CiQyjRwdNLW33EuqQcRXo444afXfweWD1ManUH9XsN8JM5TcTdDpodrnct4sHZGqiNPYSr12S7Z88RWt52se",
  "key17": "2pqAkP1asWbY57nMZxibebDVqaYXvJosJvaMiMstn9BZWtL4gnc8uTdpiw59xBk76xFb1HKr5ZoVpcjZrPrBxEJ5",
  "key18": "4rSXn5wTL35fRhRzDwXo6MxDuV8uD2ELjxH7wzhUd2zZz8wbUfkwYJxta2Ejngj1VAE7CC7TxNC1WZUub5SvVtEJ",
  "key19": "2RHgbHDPbqLq1fqyFkvGKRNiXuU786KdG4iUY97EaFnhZa3vdETkJEBB3eLuARmcsDyGQxqGbxD4Z3e7fsc6avWa",
  "key20": "3TrtFfNqFYX4R1fBTA9sZwjDFwsgimPRhEPCPwAEXgK39xNRXUT1F7QjSF9Wpc4FoV3hB3TTM6hAnMaJPoTcmpDB",
  "key21": "5D3MS6PauTadycNFvLQFAFvCpjgsc7e4KCW6SRemoYfc7jDYvk9BxPUcfDSjAGwB9X5FWhVh7gAwYJrdUo7LHEr2",
  "key22": "5bvCV3sdUCypgT1c5Ccvgtt8nBFZgCnUKKPxvxtbSvnw4tehNqDozuhUwvfjy4ehnnxdvCGWnPoiMLDkG37CDLpz",
  "key23": "6KKeRcJPFDCa1Z6HSHhmsiFUv4YVLr7RmLLKs4N6SCyajoVmreXuVdj8fg7eDUeXcpMiw8LKmjUwnHZNzvMDwaw",
  "key24": "5eqgyH2YiR2KBw5eMZahro2VzzVvg5Gve9vAynP3QPMKjpPeNC8cqrrG9Fd47MMeX8v3EVBABa51GnAXPEvusvGc",
  "key25": "4CnVmH3xy19sgZuLbVB4ktJiVuwhwnS8xT8uPm1rj5wP9PMpekwHfTggo8BvK5NmSZH9ZAsJaM2g4tXh7GtL9pQL",
  "key26": "J2qTPvvKehBAwo5EYwrkg2WRcvAyHN3uZBQDfYgVs7iB4SNYv6R5WhAbAH9piUN4zs3ysJ2FXZRNm7DqCjwM3sp",
  "key27": "4adteYYGsojUW6PJ1sfR5DqFtmHZooV6kny52nvM3ahdba1pByQgitnZiLZCb2vZGhdrc2jP3x6XG9D1YTjbNZ9B",
  "key28": "sLJd3HfAj9CHNkAyTwSJvc1jAQ5pu2dWfsFQtrr1BMb5TWPgA9djaQ1dM2y76fJk1uDVcyU4fxDJxMGw1ktdxtd"
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
