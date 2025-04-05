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
    "3XQvwamzPqhvSNdPo9iP2EXFs4c9w9ygw4fwNcxjsW5nVqjrpiMc8yCUD2Nxj46JVCT7uGaea2pUAD8nUt77SVHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S3SMGH1CUL9tuag1y6PphPEnFqLBxcqAgMCVtqUJFSw2qre5wLQh1WhMCo3WBSLJAyVzn2k95cLii7azXtUXTcC",
  "key1": "M3KeuCXyMQ7N4qh9GZcC65mSrQ7VaosRyhBfRefYKT6oqWf3kW3dvXGNDvRZHvEgRa4HasnwJMnxFXsTVv46MZD",
  "key2": "MQ2N9WfVZFBUVvRrN88iFrGHfgCSoi7qWwJ29dycJVRrn7XjRzAQDWkLQN1mbEV9B5jRFRtJqe6rDb1mn61g3FM",
  "key3": "3fv2wKgqvzkTcJPaXqm6tbPuJGu3x5nbZDfYKTMU1T6LzQeRqvjbzXQTzFaDJQAgHkbq4YNFtLsf4jqszwPGTNkY",
  "key4": "2BH2FQihG4oWBDmuaa8eD9uxE5opYizCzA53iJcNJxNHKAQkYRp3yafQAQ989HZ8tWa8RvKWwh7g197NmqUqLhsp",
  "key5": "su8yTg8ug2e159JiTmTZQMAqkKFiWcg9sULMm1QivpKVqgdgGSThwzGiDqHzMcVUy1YpPJv7tZ1wFLKkNaML6ob",
  "key6": "2GBL5re361bgUSgvZ4Lh67DV77cfqutPqvkBeYY5XEZkNjhhqe9266ohQvoEG3t6JfuJMZE48dMKUQhaxUmr943r",
  "key7": "2SJkf3iSpYgRzXEtoJt2a2VFp4MMoenE6fLSzXqFnekECkHZYViMTMWKeHUmDE7mnEWx2N97224hWbSNCqzRjQR9",
  "key8": "5jjC9E4Nz2HMbCqmE66MZd5sjVFfaCUTRKMQErn16wgEYyaLQax7B6Fabef2rXfXxRXc1EHyDriA6o5wifFTreTa",
  "key9": "5UqeDVDKHk8q1QYPRBkSLxphTPAMRC61RSwEGCM5HyRJkZJ1PxKteyer6LQEACSgyFzLC43Lmyx9sxDsKRTEvWR",
  "key10": "2jwP4a65iBrU2YePJ1fB7xguGgofFb8PABJbs4VzXzX1QjJkyED3SDvv1PrLwLDB3ot6h6AQGPfufebus4wmrFib",
  "key11": "JXpJZzrMBrWhsNsqbzujxKpFfMaGy7ecgDAs2e1kkwkEPCgzQPkuA99FUYr8sZ5GGCdQAkFwEfbqGUJTXYCgr5f",
  "key12": "28CDge4BDsJLsdphcgSCSzWB6b7ii8Emarq8nDeSx34jbaz9QgSr2cN8hDDJr659FU3ui11RcEHqDR6wged6xCiW",
  "key13": "3FJvgaLVUPxmQXgMDtVUdoMZEyxN3hMT5KVSteqzoEz112d1nzmQeivkgbVt1jkUHBrVKFVToUsnjB1WJBRKzANq",
  "key14": "22BiZMxamsv4MxQM66zMiidcZe13PzWocpNWfnVCCgbYA1Npe5do8gQ7naJqy9VvU6i34oobRJ2yJKyN3AcQ4cy8",
  "key15": "2seW5c19jtVAkyvWg7mjbT1BV1RtUeZuCAbCQ8Ukgqa3kxFgXBorB47Sm7mjskx7HG3gTZ2rUZkqzUKdB7GP4C1d",
  "key16": "2A8ftoePLas8a7VdmH6vqisgQ4dPyKf51ntXWvNA9gV7DhD4CgmsoAirwFfWzJbQa6NmmhNFfogwg5K57JcBxyCd",
  "key17": "RbVPQ9pwQd4zfD8h8ShuZSBJSKhvpf6acsqR5E7A8TQJ2i3iw45CQoaCuZDYvG3P6erQL4Ttqm5kM1gUbDEuMx4",
  "key18": "3iLX1gUsC7jrWhzKy1LgmNc6mA5KttwUijSePan2RRNA6MjKSwkTmDZkVMHY51PJqARSk1SPqqUzkoq4qGrC5YSq",
  "key19": "5dhrEYdPNg5NmP6SB9kBZdZ3xmp5KPa1uSY7pnb4zURLcLnmdLTYn8ZNQmt5qytMAGwaf42a7so35c83SxGsFEJP",
  "key20": "CJ44Z3bUuQ9zHsT7cdn5QeAYPkNGpTtr12bsFAD6XGa3z7fiPwGrkDmZP1D8sFnHssVWCMejnWyWiYPZotV2TT2",
  "key21": "BLZ7GAKGajsvMJQdmRLoPVbRcYbqnJh1Cxs3joVqsLi5ZCtXsdgg43CSHrqmCzydCBNXLxUQmoSngvhH2bwvBmY",
  "key22": "4ef8TywwMFjy2KaLu2fVCGtLzXCWXUwFPEiQ1gJ3RHkr4u6eS1G1PrKuDbSsj97oB56KqwhrzeB6jmarzd7B5C9A",
  "key23": "rqGYKP737sxwxXjHydyaeE7dmmAEkZwawJ24kwQM74MeXXheja4RUXVeXwMwBcXKdGWiR1VfPNPUu7GR3uDpAmb",
  "key24": "Km3hre8QH3sHxFN7kVuxSYWxap82Peu1WBnszksTqYMtyJTVVWKUtyQ4THGmZ41pxpEmYTfUxVDeUvjgw4eUXJi",
  "key25": "3kjUQArVScj3Nrnu8QH6v3DbnJP2Rnem5QuNjKy6bQXm4evxrwqU45uuxjSg58gFuMERLjSAsmU9x6T7CrAxzynx",
  "key26": "5NfDrV1nMr8wPaFg5xthizGLyehMYEqJgSM8ygAaE6Vvr1bSSNyzZDCnVAvz3NUr35fp7ABwRFEvfHxX8RxTwHHe",
  "key27": "NmBztRzLFkgnuG7XakQ1iwdrrFrRJKnfGYpHTzNVoMrmWTyYJrm4a7HXLL9vmein7jnRhcCQE7mf8qV5WBxAVfp",
  "key28": "M8dqbaBTnuY1pirpL8X5iEjkLymtWbJYgsQkfKT32pcSMz5gWt1tH6rXL4er4o4sbh5jxUs7vcf9BNWAbNaWu7T",
  "key29": "578p8CamEiNLP9Ec374eg1sRFRZt2HrjmkB9KrcxNcsB27NZk2ckrjVK6UpMdWYcUYRHD4UmKhMpFFrJ5eNsPv82",
  "key30": "hM24sKUh9D43e57sCFdmuDxxvRZqSg94HZvT2SDf5GRgcwXU3LxvXkqqqno1GcJ9hZnBRSKTzbM9dtBG8RpDEFS",
  "key31": "4pRffKm8DbwDsa6q4qsQArKuGfVbsNAwPq9eo6NDgABR5tP5C2gVT1HWiaVFbXAR7dB5mBmWr6hH55VP4smrRZas",
  "key32": "4TZoacMg74WRRnuoWH5cD22cD2KiTEzCqcWmJRX1LPeGjRThLobfTRAkgGkwttozn5uYRD8183xWfjoPTcYctT4e",
  "key33": "5A7zHbyJ3RUpKFcZ7Ue5pmToD5i1SCU5aVo5S8LEmu4ZspKkjEozUnBUrEjaeNxPiUCFje5ZtZdqvxBTkubZZSC1",
  "key34": "3b9YFR9G3MixEniVQ6G4ts6VYUL27My5M2yodrBekfv4g8MaruC7uv5X2DxrvtNeopFQHxCC5LPawqwrEdZqi8up",
  "key35": "553bP4cmVrbWCv8h2tAawwCttw3DPHQU2asH4HgSB7E7EyqQKcBUEPwZNLPYUmAEfPhEC9aYUeoGYeppRkkZ1Pmv",
  "key36": "5cH4rbb3D2qiwp9V4FFGkXTfPwJXsXH44LihdAwLg5LWjzZppDraG4bvDotvJdZiUmRQevsPreGgQ73sT7QcFP8c",
  "key37": "54R8C7cTnrC5Vy5HkTcBKz2fEkcbedoWwDzPixFfbgy2tzHCh6HBV48QzxYqwH4rojneQ4TsxHtBhEmTWz7d3oWW",
  "key38": "4QkkXr8DT78kYcZLmDBFm1pDhsayJnaj1jtXGwUHqoQqZwBYk7DuxGTEgtyDWLiioaqDGyByKGy1FR2Bv4ncpEiy",
  "key39": "21zivDnVmvqTgbxdcuFhM25hy759g43P2YZZmFrCtc8XXsxDg2cmNY3AvvymBQnaDvMdCWPeTXz7BUrUsN7NN91i",
  "key40": "5fZtgjDKajezwF9fWgUAAPc9nnY2x6DPrAVV7XLfBfv1aYyesmNhHiSKqCjyxYaAozQi2vD1x7jAcK8EhpkPZj5S"
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
