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
    "66drSc9y9rwUkF3DJ9ZVdtBjFangBDXwrGPgbz4oiutR3jmtwDNk471iK6trTLRmMqA5pSRbR8oZrkr8DcCmxtHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AcjjR4tsvpESRbZDieM8vCNHbciReN1hreLiMHRySnXjLLzt2nvUS53BYsFb55G33U4G2dGe1tkHjHA7tz21p3X",
  "key1": "2Y5Wk592dkhthhxtD2nEUDywtchMypR6qPcvDNnaNgL22T56bT7dSKY9pj3tyfNPD3EDQYq5Trs4NVzX1C6EAxZr",
  "key2": "2ye5UFrzg5XLB71AXNjMbtQUvijrzR2s3hPW5gUAyrseEQj4Nd6Hg7MvvkLyWSwj4i9PtdfeBkHsn6uSQCU1V98R",
  "key3": "5PoHdbY61x75GEYNMPLGRdz34nNCqqJ62M1kHY6gAH1BBfVN3nmm15NqvFAXBRCEgBcwmmpomxgguujH7YDHKS9x",
  "key4": "2ZHq6sPxHPSGinabQ5HSNq95dGHCuepCZMFGJZZQEVDAiBmbGEemksfzXbY8fQrQXDQpkqTjYtWkCs8o5kjS6tWB",
  "key5": "311dfc79rtZ5u7AtVuzBtyRAjeHLDM9woSUThEV7mvnsWZRFYDMQJfdo7vAn6ELVfoNP7hPNFzjQ8TefWPw8KQN",
  "key6": "2aHrq8gAXkG7msAoDdjbSagVYrEMtSmmGvmikYPEWSgJLbJBpFpkJMNxzcRvmLUMzYdj8RPuBfVLb8yVi7DABovQ",
  "key7": "4iNAoqkp6VAg5QcaKiyxsPTZeFMCMAT3CgUaajhVRErGbkaBCs3ZmhSoDMnHneJGkkHQeMxrLifvk475kjv9rmod",
  "key8": "4Q958f2mh3AU5m5ZB8RZdREvusjtd3RyXePGxZDLs2wwUGtT9gQdxcTwUatquhRDwmYj9bAghNVRjir3yv4tuFr6",
  "key9": "2vSbswcEeTsjUabh7u7vJXw4c86N2J737ZuNMnVroNhKpDYoqn9fQiudSBueigLXGDcfVXf69NVMNVPtF9yJcXyr",
  "key10": "5nVfaNxgHePPYU4UfxjqkpbkRLrbTkq7s9sab1GC64eU1ZGtNQUrCZZAd1sfqhUUatbWHzZgiiC1zSLjNYP78CTc",
  "key11": "4nKTXUJmZdwAAYi1iUfZQazHNK8gcWZCV5C61kdQpDh3NcMPaM2oYHHtf5vdaNJNJ2uD9mxczvo6D7grwskZsHJx",
  "key12": "2SW1T1UWGqQQfiBg7N4CkgXGFDFuJ1C6cU8DUF5RPqxUXmaCoSPttpHHK3dqYB2ZfgtA64grY5WrUG1TW8HBMzwV",
  "key13": "5pcrr5kDF1W8D7FMjZMNbcy75GZW1CBtHESU8FFL2hDYMe1j6SLouD4KwqA31sA75BY7jQqUYz7iEyUtR9T3baYC",
  "key14": "4Y7ZKMGfTskzHXNnKTYaSqs2xe5hom465xSmSuqhUoosiP97QDm4K6nsGrkzhHSxCXyt3A26fQevzdtFEDe8r4k4",
  "key15": "4FXPeDt3BPv46NhYzkMkbCzhhN3jPimPFEjpwF92zBSZnH9MfoopJMHJnUDMis8kyiMx1puRh949z5wCRdZw2P4e",
  "key16": "MJi7YGMQXD4PKms3CeHC7W9dMzoZxWLydsrckRvsjbHLGW4uGCDBo85b845BsgNnvqp3BwK3QEqq6b6kgg1qZ9u",
  "key17": "5V6eNzvrh2mE6hXCbh2RVV6qKXsvWqpmKCQXPXiojJFtw2wQawZWer2cKoeeEy7F5WJ5UnvEu4Q3hQK8uTrRwBb1",
  "key18": "4WJ1kQsLbkA6GRHTgKkxzZsJC1P9EAa2NADHDJh1A31qcw8wZazCA1s2QePNhCrnge19f8E8zCHWWDRzYfQjsJh1",
  "key19": "3jgATY9xbWkxqpT4vsdYHJF1PYLn1rWkxVVZcja6nzwA9pzHwGr7XuzhzZmx9PB8mj7dSqrC3ERTdQciCPpLh7hd",
  "key20": "5M8oUEMBPs8nx9vytVznmH167pwRdyFcu5MoNvfdzdJ6SQQn4XobWXeFUw97uTfxkLnH5GivXXdbQ613USRZcBFY",
  "key21": "3etUxF28XJW5JPNj3BNkUNvBN8wjs66UCPGjuPBk8rQ6UJrwbmWm3488FaseLUm76KYWXLobwWjEwsCyWzZdqA7r",
  "key22": "893K5FC3PfZEokLTHerCmCNUz2ePsSrwVtAJr681MLveVLFG9w2RqmrHR8VFSC28dNSqpEKCMvb5nNELzhFgjKQ",
  "key23": "kpEMaRTEetaa45oCFfp5ETSqGd3bTJJwVg2TGiPmsWysTHUqRFWUWjNTcFS8Js2UbRzwHQH94bja8pDGTKq7g15",
  "key24": "5CJFft6Rrqd3iS3846jYAMwT19qaeiU2HhLpuPrN2XFjmXQjUnDrvMNKNtU3cxKqovby7TEx7dqgsT9tStS7YEYt",
  "key25": "41Lk7uPa4eFCxCpWh7ofVxcLfSTTGP86aikj4LiB7JRAckFsJoEpTzTDrDkEWtWgdKXLrm6Z97yBc3zWWfCEbUXZ",
  "key26": "22AtjL35Nzqq2jfGi4shaWZcF6TwKQ8abAWWGgajQmuaU6xPRSirRpq3NUnphbFVFqYk7tbs6FbqKtpBXargy11G",
  "key27": "VydFUwKAcN3zYKPYTFeQakdD7RLGf9jBmpbEigtCpSFu81caSGys8xmbDAmhydLwxriXd2AUwqnX6vo38prT35Z",
  "key28": "4UKvJJWssoeTof9Cy3kM2bimCuMru93WskGwmsCodpJJRvfEFD5S5CHiq3WNeXCtgDGPKWvxiDMXAdkh5sPNGCDW",
  "key29": "5W2mytFskshyiLZmUnZNeK72ry5HncAuDX8ERu7Jz8Tz2G6ZQzoZYYiYVyhUg7cfG7EC6HZpAPFxgdrBsk29W7SE",
  "key30": "4xn2bRF5XM2LttP8Z8UW8pMtJZeW7Q8HvskpVF9JXEGFk5FmE6kjWtYjPyD4SmznaXbhkYAAjDJSc7os86fWsN49",
  "key31": "39TEvBdDxf74gkqqK14GoUiZBWJULBsmnRmL7mBNEUNV9CvTuzWCsViGXxr91ayt7Gzw52K1BEjVMvR79bzmdwwN",
  "key32": "2nxqbf4qEo7yPr6ChqjS23DagCspjnbvZBgfFvwK5KNJmzhwCL2SoBKA2XwSaU2g4Y2wW3vB8kK8ryk3PHcazGpz"
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
