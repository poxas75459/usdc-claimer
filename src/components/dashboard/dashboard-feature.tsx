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
    "TqsATaVNC2VbpAZfBoaEfNuJqvQtkFN6AYaC7dwVXAmbzK3bQWrprvocoAJqJziQXwBw4wBhFDesdkjWVZTjvA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ep1G7kxWo3k7rN4dcj6kXrPiAMvDXDUX8hABsvG1TEgNh3ao7GBnuAMaH89AmRzrZbKzTduyVJFKcDvJ8BgvtBY",
  "key1": "42PauXdqVhsvr8pfKrtTx39vmDt5S84ENVUhkAzqKzNu5P5F5GrH1VZfWFaZRCQebNXwQMc4ERfxxZGamAWqovtP",
  "key2": "2kAHAcyWVAcWNUkqbyvRUNt4AXXtttw65M4LAShtUNDCmrkgxNRGgwaG8CyTrzzpx67wPxUxXMo7etHYiN2nAKre",
  "key3": "3VU3joJNjTczn1XYa2dwTH2TxtXEQWUiBgvtwDA41LXB8vCNFPGM2cgN6misUbeDQbUhf6WrUUYX8tNVTbJ14s56",
  "key4": "4HnLpUBXDJFvKjrWt9Qq36RJdxTU1vQAdfAWPZJsMvLh7Zwvbbt91bFunSWXpzfArtuYTZTcbjhsbqp8MT3mg4Zb",
  "key5": "4Az5WoMvkuqRt5pijmxSwDyXEUEphwXDzXQpdgDaJUHmwKZftAXNdQxJUdmZt9nSz5L3GczTpMAQ9uM7dQShWjUa",
  "key6": "5oG6D1BmwRScsmZ5m93VuE2avv3ioFzNyKG678fQQkyLmF4zgtoBUUJ5Pur6tTKp3qQv7sHkpo45M9szjoCsZoYw",
  "key7": "2SMXAyx1YEhm2aGBPmhAbwQEZYwvFzBRrDKcD3ssBXG6Rtc1EkrGJVM8VZNMgmEojgGTF4RNGQpUhKfASsGt9BTX",
  "key8": "2X1pYxUspv99c1D41WbAaDpPP6DrYoDzhxpAQtfBmJ4EyU9htzdiU8v7msHZ7g66WE1c4EXMMoGm1UtTPmMmqHP3",
  "key9": "4WGuCxRj1nQzZosQPA5fkzcRdhfTzsibYHJZ824pdX8QnvG15nbDbKS7nYrnv7niYHZGdrARiw5FAgQ4M76nrxYa",
  "key10": "4UEFBTqJAru66vTudQRp3MPCJixKfSTbvg5R6NtSDduhUETybxnvaZY9nYg49JtZh8Ha5V3Gr3aL6YdqArtogcgr",
  "key11": "29VFgmz7rPcXNsuEBv1cM6oyQ9gXMtPS1TEGx1VQ1m6SNcu6RbgbhvgaW4CGC9s9CXMXM3prRZSSF8Hcuqo8geTv",
  "key12": "wX9aNZ96HDrGJmZZwUgbPdmzeJWknxM9py6G9arH91W9MNKg1zNv7R4BmeBiKSLZXNUEuVi42VtvjkdXsSWZdMK",
  "key13": "4oiKeCgR2BkR85ZLyuVT9mWJUh5gc4q989YXR6XKQKu4JdHkZKAgD4PxPYBJ6eDP44kVQHZiMmQ4rNxhMPnprxKU",
  "key14": "4Fyug4NgVGrKrMExn6xDzfrATq7AiamRmnWENgrKTizye7e3cBvv1dhbVGxhw4kxW96JztL1UWtr5TpCYyKZMAa8",
  "key15": "53g8zLjphzGepFvCtmvNTY29DvXWQWfB7AF4vje5trLw4G2WHcNPJceyB298KeYSbv6cwL5Aakcad6Qgb1RpprCM",
  "key16": "5wVGMt4ypTHCnuX3476iKmRsgpDHfD2hNBdNwdfiPTMgSSCjgwajToahHR5pemy5m4BDsyqE8mkTaWZAma958QAH",
  "key17": "3341RKn83UCHGgxVyA6i1JrfKfsgESE7dmWHKnxyfgwkSGKS8CtC5Wx1sWYu49bJJsWseaoo6G8m9YEca3wbgFrA",
  "key18": "JBCo8SFecQ2EMdx41d9QBQpCRSVZ7LJGzxbWbxrEg7ZKbQDypxwbZ3RZpMzy17ksms1BY6vkPLpaeGPjyGBqtrE",
  "key19": "5nyYcxR9aG6Cci48hHZz25mo7dbfSDeANpn3h3YT1Zp2SLox61XoVpNwMheYmzgDcp8gEjn3uqHcG31AwjveyDML",
  "key20": "5g2HAMS6xxvpmESCaChm48E5pWDsDUfsHy1diWwEf3F3ANvLcjHMSbQVoEr4ZiJsxqTBAU2JBYT3BYXA3MvSqHC5",
  "key21": "3LYerJbAsAt3MCUAMR2B21RypT1PaJw9yvxzEAq8FPVpkChbuz2DL2NR3McmTqDpBdLjvTQviUQcyTrZzDU1oFnD",
  "key22": "42bxr7PDRJYXBgUxeKiHN5wmWbW3B9JDQBccrfchv9tfsE8cV4gswtBrTgaGTutVCAsT4LPDv3NDiWYKQGsU9CYD",
  "key23": "2hK7YJFpaoCFgqc7pcGEiorHBdJ53MmM46on3BiRY8Wf18ePFBKPAB4s49T7kwTTtnxg94cBvsNZu7TumTX2NjQn",
  "key24": "3XuHdEB9QHx3xsUvhxhm9KvfMJWRNQ6umSgNxkXq7arE2T8cGNTfQnwTCSTesV7kSMbV9ovG8bHTJjaMN4XHjZZ3",
  "key25": "vPQW7PoQ2RMkm78cPVdXfy5KhWzxNEpnm7TBJTS9rPLxsD2Jui9SDGwDgqwSxYmMBZ5v3SuhZBJZ458w9MzBHn7",
  "key26": "2w4SfzWc1jDiHS6hcokP1FpnmBthRVE4iTsnPKyZ6MgsynxuPw3FYBtgUAE1tDgNHdKwCxskJQ4sJoKtKzrbwiDV",
  "key27": "2T6dciUP4hPzxtSraDEWB5e5m4L2g9tWhtaqWygtuGin8C62wvuybLnxSusvs27LpKB5WtHVZ9715tDfskcMEyLj",
  "key28": "3JotRR61ngWCA8jXDBvuV24C2xnDuzsxiD1piP1RBuitVphxfXb2r8yMWcZo45Ad7tHW2mNrSYkEsFta4CnHs81J",
  "key29": "YEKFSp7QaY8KFcKWfgBEtEf3mEuXgDbox7TLZ84pyJGVMQjb1kuDTge2zHVAgKbq97Cmvswc5suq6LUAp2eS4wS",
  "key30": "2mDKihUwBdHJhU1FsCXRdNU8gD5vJ466TFLu5vyAVnZUKiFXmstLCDDabJUMpBk6UhXuWctDsUKfs3ESv1JneLse",
  "key31": "5DMQcFiyuCQMcTaGCU24nrzcb82g9xeBeKncq7cPfTTRsBnttNpfCUhbmdx2cPTYiZZueJQLr6cRHsEgBYBpRe3Q",
  "key32": "3PxpY5g5eHAkKefZeoxyMr1si6k9XHw5iB6Aiod8mXQa82JLmYvNiSpHkHXEbpYTLKK4tZr2KrRDndtinxESG74q",
  "key33": "25u3HxqutGAeEQEu8yBygytL1YejbX9nPcQwQQuVKoYmMy7ReT8KJFeCuJWyYjQMWsJyaN47MDpJvrdoj4ncy2EN",
  "key34": "5w7kRDNZKYhRhto7piRpgYSc9ytc1NWFy5B7TStSfA33TN9M5HgX6xeqbh3fK4wdtcsJZvnZ8kYYf5QjhnHNYWXJ"
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
