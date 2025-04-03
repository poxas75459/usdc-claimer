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
    "pHceovJgLeTASasH8rCC88Ke1bbtnCRgfiukXjLgkPpVMMc6rB3mC7mdtw1N1JxLujaw85Rx5BHvKBiZMGghtjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MuCbGYCbFvrRFNCgE56peLmsas1iMLfSNZACfoDf4GEZBnKs9R5fM6rcThouqJqHCsMorin5KnVg6wmQVv821JD",
  "key1": "4EdcG98xGZ8q2ibUDJz6Y2Qm3kfuiq2ciR1oMFtBaJ9EoXsz3BbyZnUp2ZTbyWHaENqndtJn3yDdqsML4MFgCJSh",
  "key2": "2Yxkmohfuc3ZxeuRp18dkwFSQT8Ak6AyAqRCweSZ8VGGiiMgyuC8mWbPvKjP4GkfsmRfiLsRcwLJnTqCX839gRaB",
  "key3": "4Pfk5TAk5iqYTEgK9iwqtLEjqDUY5HbVGdFcwZkgQHEyycPG1b5jcZ3LSn4o94JdAE7RbqJNzPDLT5gEfTkdoWQT",
  "key4": "32Gwc4AgtJrp67yhbC1BbBa7bo3KqGvYbpsxasELufTfRng19uf1oVQes4RmWThrrb8EeEkXTGRDLkPoFsBT5X5a",
  "key5": "E51MMaYtgBQQBkNmgHCUBNFFrPEMxw9QUX6hS4WXaa8Dm2xi7DDwz5e2JRizNDQUgtpEL6BtyyKj5bVJBHhqPav",
  "key6": "5bcMyonq9Rh4aTchUiBJqAAzYf7PzAfYW9Gk4MTYPhUJrvxratAmkNApZhqNzboYk6ztiakCm6DnioZcMN7QJjoa",
  "key7": "qLvmhkwDcyCKyVxPjJ9hFe5aR2aKubPg3TQw4qNJFuJzTYUr5ZnmsBda1shKdN8nWA9A4GFFaKkUeVpvZwAH4BE",
  "key8": "2wfdxJD5qDmHK4y2GiFynhkci1HRpZhBtophe5ZYSPagfa8bsWds6w5Yuc3jZnWQjzkk7Dy42CB5XQGhhfQfoEXQ",
  "key9": "5XR817kYe7nDqF2EZ85EZLXB3nqGtkjRMJdyDTdJ1H4fYYrW78wyfDMFXFTJbivvSgYLkzz8h89pr5iJMuiTVXCy",
  "key10": "4eorNDFMq7SvAUoerpnCSXh94isBP47kJNfZqyHe92YL9ZYmXCvz6H9mqiVta3pnwKcGtbtYu2X57FqM3Rastqy9",
  "key11": "4z2mp8mZPeHpVBHHxCKqiivC7zAHktqxdzmqurmYcmJkmARrqNAMJq4QYSDGmsxHJso6HedtDpKgwPDLyHooqeog",
  "key12": "45gGGJ7bNErK52EqKi83ADJaQqm8dfLtEWg8cvzRApVN5aTJW96AvTa6Q9U1bj4HL6WkF72KHA7XL4qNpzNPijG6",
  "key13": "4U2avUeXjH644AfmGdjV771PpWAm2hoHcjHoMpjZ8i9e2JqjBaLFVuegu6a1Utm3niERCfTe8eZ6wcq1ocqsqL48",
  "key14": "4CG49TSQLwYZXyePwjoeBf7J8MymfEEEvYJBkASnS3Hhg3fGPV5AyPTVZMRXdnzmTXvGzVGQrwQQbpwrjzPsuUVX",
  "key15": "4CY6vjqvfBeF5Ko9jPKeBSBFD7V33ywf7XhZUX6pJddRUAa8oEgEGWceF6QsXcFRny81cB6qjqaBYA4CBiwQMJcd",
  "key16": "3wbHYSnV38Ftmok3i1SwKnkmjuQQ3dGp7bYryKtix2vzPj9oAfUm4ZeS2JW3mc9U7SYLunuMWH3Lwkr9iotUvehM",
  "key17": "QFrHoMPnZRjbcyqT1zQu2kwBRsKcgUdcdMXF72e56yYv7ghZ9AT9HJwiYDN4JZte2dZ92NgKiUiCbxXWq96xAMc",
  "key18": "4Rq71cBUmYHeaNubSENTNbhjA3xQygbt65L1spotnkHCX4QBuu8RjhTRz4FivAy14qffeqqGVgFPK8CGizQ8G3dE",
  "key19": "3UAoXx8XWazWoF7uAF5aGqKTSsckzeCNjhf5FRYL6GdAXdr96nnLcWd9eitdkdMtKuqDFMTVwwjDLD6TPtvJtX1s",
  "key20": "5XsALidLYyS6fMSJap9WMo1Qs2phJN3r2h6rrdTbmCovCQJH2pjPcoQNToZyuhjtob1Ghu8vmkX2EK5SMV3HrExr",
  "key21": "5sHjtzCHtiRwzids4LPX2isEszUiRUmgSoLLnsPbee6bizNi7nZqvLChqsRh1LBTaFsxEQm1nWDDfn5ywLXCVRcB",
  "key22": "5fz8GCVK3qpUhTzrd2yPzY6Kwrza8GAyjo5eEQdJYTJwHvxgzg4BZpPzuj5DBzBfVXRuLfX1V4CA2gW5hiiM9oBo",
  "key23": "22aYx84DQVqbLbhxk7cq7drGyxNNpXczotQco3jwbZdRozWjqRSbkKDzXu7i1qSyfKuE5M3f37373MvPdaZcXsXR",
  "key24": "4e3GtxUok9DLK99rtdGfVH3KZAXqAnEFpa6nQDXFJjieUg6rPCZoSSHuLEXyDnkKzq7Nd75uBNCMPjDm5SwD6FV3",
  "key25": "WszRD13so8CuUowuxyWa9JoSQPfhQtK2Nx7etj8SajGZQsAsjf3Ah8RZdCUBQedvdm7Lh3XUwELRmjE6XE6bRR4",
  "key26": "3unN76xPNFBWyXtFaakZmWvMMQm9Phpyi3fHoVJShW6etr2mgRBz53BN4QkvntkjDKAEjbA3ARLkApky2Ep6yxoW",
  "key27": "2oz1aaSLQmgpbThTVgu6SUsFxrFBth9xbaZdLG8GGMB15YrPSe4yLZjeksuBXzQdEeGBWivmdYDS1tZNwA5L7qvG",
  "key28": "2rLbi1t64LN4eRRdbsemcfebKWQbXpXHd2QVSnY4TqdioFfBxPDzRdnFmXKeFV5CfW35UJxjXwZWdNcb3bHQKxDW",
  "key29": "47gHQ7bPhqpw1mnqBf67GAU4sMnUScUFLicnJpVVpNj3jRr72GnEUR1eiqL6qbRiVLwbhhuwGUsA5AURugHKdBkD",
  "key30": "5iAZDKsi2wXa77Ek9edoyGPs21W1hkFQY2XUNmRUoxELJHh3vRQGmhZCXbms1JenswMeCkQcqpso9zVc8AhGG3rv",
  "key31": "25wMvke4C9rqLzZrYTUxCVbF1fXyazjgjtGwPXBs2grAjRXViUXuJeqeSvVhyW2oHZP2Tj3PTPjJmfdrajF4pHkm",
  "key32": "3jHE69JTZ9bxd35NSoRoZX6ZxpTNVgv4AmhoYZDr4hjr4LCw2mGaFhRqYpuKZHKAoZDvgAc2zmNLXC1QDKLKhNh7"
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
