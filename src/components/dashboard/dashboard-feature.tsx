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
    "3gEXNgE8JzZC4LP2o6uVq9PpFvSa81nMkYBKJ93o63LF28VLULWM2k9r4NhkwWwKkNSqPvb7hAxSizmG3DXunzJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BC8DaoXQqmwnmAcwdNd5ztz3GZpVj8TC2Y5ZUHR51SDtpJM4fhEggAryrpUfBR8dGtctPkzE8s1DtgZAqQVsYeS",
  "key1": "2MfGsFjjVWLxCkcoWm4jVrqsZJBuhyarjwSgD8K7sG83XrKeN2HCttsw8GJpzn54mXhFqn6AdwGZWdP3CfyU5m9o",
  "key2": "3dzAXskJf6HLdvayqosjXYAfPeVPbnG22F2Rb8Tq5euiDbfhLnN3uzwCG3FxDPveymHFQHpptUKAkXjmWcUtevaM",
  "key3": "5TeJMXhYnXv9j9E2a7FwyhXaswvA13GxoWgEGnss24xL3JZ3tXTzjduz4veEHysnmjmuyFqDpNeJmb9ZcCkhYq5h",
  "key4": "5JyvJhh2KF29aYVwXwaamtpgc87y3xhaC3NtmNZ2BQXV44w5yStJg6s1P4oQFv6P69HXsRP9SEzoMz9UzGZozJRY",
  "key5": "3Xs48VVYuFbEUbnc1vjkBvrDUzxiXEo89yiwVig6kcZEMpnAtwnNQ8wMU38KvEb752AK4QvA4JhgMSP8cp7TA5f7",
  "key6": "GBMVrNCGBrJjk6xAVQdDrhxXMxG1DxXfGVf6wZYV1VAisteGDiaNV1ti5QMEVZrNaBnCP2kbAE5D6w9J5qKtPR9",
  "key7": "2nfsNtttG1A3f9GCMfXZy1DSTqVkGLgn7rKHaxjDFjeCFGu66wmi9tt7avmFHdsMsPapocGuTKcGJnZoRuYgW5nD",
  "key8": "2CekCjWepKisB6B8aMYsW11iyyc1wMu4AHs3S17d2b9UbtcBrVnyfLRLHxQ4PQBXtcr4FdHjeUVT96XVH5sZ9grx",
  "key9": "3FnB49bKusTsWMkjRGeRHFmL7Zhe7Z4En1Z76Cytekra9bty44tN52kLBkc44QqKMe39f6KxE1PJErytNqdBMBmz",
  "key10": "SrK4n54aFGtULJixZjBxAH3LfDHdyz4EVeDMrFvPYagUev282DeJhMZAvxTgkxJPMWNJNkFB1YBokFXHM1FsVrv",
  "key11": "5oawNpsztmq8oSVpqcbcHq3cjXJnu9cwxBmU1EsGj8RVAn2igENCTzDx1n7jisDoj2MYMw9PASeV7uwXKV1uTCxh",
  "key12": "5iqRqDma9Kj2LfDwRngsgBerdq7WriStqnLv9EnCbr9jiFRe6AoZHnz9L7aRU1trvyJzygftcu1fdn4d14wReB1A",
  "key13": "5Mh6DNqgB9R4CGa7WjPk3B5hzcz7BfmEG1WBCrPagyQN5A3RCeobWvk5c866RSGrsEQWBihpL3YUgaujYFHsfdBd",
  "key14": "2rDZzGFDWsaiW7sQLYXV1xRWrfBFCGX2Bkp6BknFgVV4SqFHWvwarvs4bByuZaU2KRHAUYnawm8qc4xu4wG7VrDS",
  "key15": "42YSuVMju27JerawJgDhCbUh3CcrMq6fFWC96b5WBCkCAK3ZdpxYgHfHNyQmcw8uNYxPeQwWTAPyziBsRoKXJGK8",
  "key16": "3q4m1R7jKuouEQpZVAFvvsLYm9T3R9c1t4ctcBxQbzJvtoYJhFZQv1cxohxuqWRZyfEDnsQdC4R9PKau5D7wR53r",
  "key17": "cvkm9ZLnH1LgFngGLwFU2TGW4DKSEbPMkTagMJEtK9Cm38FDPdRVX7Bw6dyGpbHVGuprbdgVmaP2a9u5QdhTk94",
  "key18": "4pesEX9dQfzX9sHauzNCP9Mgf6SrG5eV2jkS9Jy9nEazUBxZu8rH6SSKf47wvCmGTL3CXWUMGujkARTa8LcyrKUm",
  "key19": "62CV44gjvwKnUFBcey2DaxAuzYk2K3G99xHWndT8bc9DPdQFt1nN5wFRosxR7Zcn3G3awXP73TMBu4oZ6bne5DYo",
  "key20": "5ovL7qnxf9v4qLyYppy9L3yNEoxd4kixBoCU7RbRWSjYmJwVXm7ah3Jba9V4YDL2WMueaHevSZZnxhkdZfm5aEwG",
  "key21": "5K5nEVhM8aCTToQuqaGTGQ7E57ZLDeQcbB3ZeaK9VC7mBeY3FWNi2PRgFWbG9eZKuU8zvikZQWSZTtsZBKjWWhR4",
  "key22": "5smEX6MNLFdWscrZe5HsD9gd1boPNnDd7zSDyLdQ1Z5Km2KwMinBWk1SrUS8U3bRvGZEaWu6V1fvuXCJ8h3BkMBM",
  "key23": "4SCUXF2KGrURDk936PJTf5eJk5qYz62i4S2KEJhwipv1GwvErftgnDKHX2m1BihLpgCiowhze15cNsfsS8kwMBHj",
  "key24": "5NcXjnmbPtH9TF5LhVqdgeetsPtqjzRz77LBpDrS2AtSFWMVJr3hc4cfBd66NUQcwk3S9v53AV2gFq46BQRVJWq",
  "key25": "41ULUxBYrF2f6XT9UhS8msCZjkAe7EYvtai3HdkYNyKCgi4kyQnmgbaT7GAhCx5tdRc3A6vs6oP2x8DrPaFutreX"
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
