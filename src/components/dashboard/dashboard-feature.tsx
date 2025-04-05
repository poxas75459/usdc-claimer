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
    "4itqzaDo9d5afK9hUBCGjD8gwwgVD1cuFLGKTvGbUzK6Mv9UeoCjRfNw2zS8WcPLDq5FDc9yhV31Ft74XAvC4gRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rpCea8Y2pN8jRqQ8Z9vTVEUw3zpBX2JVcPyuifoNEDfMnhgng9nZN4uwhbdC9sdqiqgZ5sxdwAE6mm86WaTnrhB",
  "key1": "3E23JMPWGTz1XAqwedKmhyEpByR1QNwAQTu8NoHmmSNeqgFfpfdEo5PMTJ5c8D2aA8iY5Uev1wQarVpSnK8QuSGx",
  "key2": "aqaPAFT273ppYmNYwE8EtNPQn2BzPgKNWG6aA3dQmRCJTtxF1L7zYU3EA2vrmt4E7Pv1aPNJiWTgXJfj9h1VLeK",
  "key3": "3tebQ7R2cKprMx8pzbo3deQWXT1yAfGbpM6tMDmfP5vRDK1Q4DQRdaxdzXWEKxvcu3BCy3xjd2NEPEX35yVC1S3V",
  "key4": "4gF91CW4JE6fd7oQBTcZfGsTfVV7Hzr77cKhrLyaNBQ74BYdpKezpFH2eLVCqpMbFW47SPYerJ3D7UzoPD7oYQNv",
  "key5": "ruZKikYLdUSby9dUXZ1Tkg6eYbcTSxgjdxFeJtpU4kWhSwE11GpEtePk2VurFtbLjHMGWK5n16ZqwqFXt4eafsC",
  "key6": "4aRRexzRw6HS2zN9249vmNkr2xrZ2YpeGCheGTNosfgkqHYGsib3Tz37ySYz41JtNpXxHRaAzQyaQzRZoV6CJx1G",
  "key7": "3swQTdAiuPyUF5aqnWbSF4fLQuLvQiuyd5C6QKdKbjztigt1fhprtA42ciedxHFx8XqdtEHnBcQPrThqdQkKecpv",
  "key8": "4EnG1t1ZGpHFp8U5midQ3zcsBjAA3WQCNMfQyQU6DVKsA2KdrXeMnyCSD4FZFtvYMJ7aA64sjxX7yEUKdbdpFcfr",
  "key9": "2ceaAqBQdEiRj9gmLYiAai43wS8J2f6fmGkv1iHoTHWEg4w5teceiJDFdSrFNpt2UmD9kngevVHqEY4AxmTZB7A1",
  "key10": "3Qy6Vy3HUmRzyfHYDYH1x9SLpndekDg1rkfrryF11ft2LaBVMQANLzLWLbnm2zi4PMLJrQasc1Tq6v7KXGWcXvJg",
  "key11": "4HYfKnqWw6QXLq5y87UtCCLJR33dTmL2sTYnSUKJpeVqVC3di1m9gdQiyg6mVuoXsoGjajVgjWaHRoFFFDx4kEj8",
  "key12": "4SSbL7ggAuCFwP8ePQv8a4EaaogsGfJ5s9k6D4MgVjnKqkqDfbKDbPFPzJJWemmNa5G1hYzsAWWPjdPHFGUmdoBN",
  "key13": "5EdfJZDKBKUQb4cYVCJSGD98CmBpDsWBuT9MMbLCNUzXk4f42FgzHkqvLi9LBHkwrJ6FLzqkB23e1DJALqiBsVcZ",
  "key14": "2Vej4LUoaass6EYSpbmSfXM82p9LZFJAN9QPW2MwDkmvJqfmysr9CdYgPUPNHQL2hAHXPfrHzgm1vu6PBvRNAxE",
  "key15": "42NZ7B2FDB3voiLmx99M4aWp2PPF26zrF118gLf9BgEJWHh1LVihwsUWBS9CrUdzxUnEraNTBZEAGFLeP7perfQ6",
  "key16": "4UsxQgVZV2SxavXMNMwi8kFUmnsJQ5oz5n7JKZQiYZ1HEqYFjw65wvRXwP2q6AW2NL39AMYAn5RsVBwt9TKNVAbw",
  "key17": "4zcxRbXqxm1wusW88jaSY9hkT4sqgLG5jbs71PKadhibH1eSZ5BksT2XhuV4b73ucmPxFS2njaGuCQ3QP1TqSnyZ",
  "key18": "4ybkN3bsZTVtDd7hoHH3RvbnPaqytTiMwAQhSsAfZ38ccBr9N4Xx9GTcPav7WiQZYeSc1bkxgUYn8Xgxo15Wexpx",
  "key19": "4MtSa7LVp6befdpWAQLr34yryKjCzP6SSAhKdT7JAcazdHuBna6SyzFkUMuuD2wwTUEEUcg5fs3fmAMxx4MKc9Tu",
  "key20": "4UGQc1eqxefDewwkHi3mGuZuAHzT2FtdUdKg8EZXTobbBo8efsw1Y3WS8q5kjZ8uNoLp2gTVDUg58hg8tLXmwxhy",
  "key21": "3u3bU4rF7ZP2od2BvvDBpYCR9a79N7bidfXW4HBRRfh1cwcjQYcqNFrmYnGHbdvcq9VbHZ6UyyX1tG5Gjkt2WB7w",
  "key22": "4NKDs7ffbV6ZVr8V3toRbdrFoEhWYL4DsGUNMbnL35htA5tTPGC3EZGkXALp2qrVcT1ya4g6DryTUGjFP4agthFG",
  "key23": "5UUru3R7JvGt78rW4R9AHWLdc9RDWbZ3QZAmAuTzGo5miHkYyV8YqovAeNGv3MivuwRKHY528RJCrTDFvVur6Ejf",
  "key24": "2M6ujnAjg279BcMc359WmKGUxe9x1qF8EPdHxM8G2RinVqtbv3HJtfmURdUpYqeqxANJ7opvDQiTKqaH4etpF5HB",
  "key25": "3yNjZv8qpkJre3xwuvtC3cFnBaL5Za3b9baX82GFF5QCCzuDgZiiXqKt79VciEXyLfCc6e3fRX9HwctcEZtHApUS",
  "key26": "3sLnJ2uUPYvpLSiJGf5SuYtwh33KFVce3VNuQ43k3mv3eCtUu8iNFCn3kMtNtS3jdf5VPLTvM1FofsGK2YyY22hm",
  "key27": "3VPQtU6qG6wwHXvJfRXeXq5zopxjqL4Y5SZYEUUndGwUWoxhYUybpJYdkGwWKKUCMCkfWdSXTQn6d1aWfhNjxnw7",
  "key28": "3N6UgaV94HPcjQ6N8UvEGTQQEDpuWpP8H9qQpLFpo6MCzrN9y2aaSs6qngq7zVZjDEV876qMhVQXcvsba2Nn3QoY",
  "key29": "3ar7C8Ck4TPufZR8BujLbyib9M3VHy9FbZaDgYtgGua7WBegozMFuFqCxAi3CHuz9K5KPHxDtHA8FdTBaX8x3LW6",
  "key30": "34nbSJNr3A23JxA8NvUcarMkDEwVNAaE7k59c6SrpvrhHegkvXFK1h2ouEXkoGecp5LPSVPNYbHwf894V4762uz1",
  "key31": "i6wqcToTXNpQZpS96GaTSWfqNLUwoC855FpMo71MSUtywo73tEHX3xwGWjn8smnQkaNw3u2BtfottZQ2tyK8VVo",
  "key32": "2kjotEFGPdwLo8Dh76xQXdpCctzAkkaNZrYAHxJtSHbjVxWFh48vLfS9hDPcAWvqbBYMCDiCBD3F8APyu2A6iFKg",
  "key33": "FZGmCFf5d2CE4A6WVxCmccWTi68UX6J5agKe25q7BZUx9xHKQQtg2QABvXiXUWbTr9VzfsLPYKx9cT372Mz1yJe",
  "key34": "47zJVdcxrF6FaddRotxR5UptmL4FK1bxkzr62srLGsf31xySpPh1qahLhcciQwuiG8Lws634LtqNgsSRqNFmgWPc",
  "key35": "5eYNmMCrwjhJw1kTDwdohQr27pdqqRp7bTTG5t6msdrocwvmnSrX24cJYQc7Chz3Di65QRAokqR8fBTGpyHno3CJ",
  "key36": "2DgeLgCeXGFQC5twGuTsVuYMtgUpzsB22AHmiB9QQsV8LuLLAek7b2skWA3Y4fh2zEa5MqFE1MUxByiH6YUib7nM",
  "key37": "2P9wGA8BbZQWQEXr6HcH3qAHMcdgjTwrxv5wk2Fapnp7syP3AELvk6ZhKJSj3spT52vvinbrCcSUswwECM83a8uf",
  "key38": "67PVbNQjT8iTpoBibtR6TXDiNtgjyL3yrBZHZPewPNuUdzAZqNWBhjTL1vnGLTjkMi17tzqGsRXKb5EHWeUCwvmt",
  "key39": "ehKNBBSBhaL7y1jGqTpVz15DDe36o2xLZbZPaG3fMXwXPitXkQbeRVQSXiAAtiWn7NYw7Md4xa7M1Gt9ifesiGH",
  "key40": "5KVjSRFUTk6wu7CJTWjhPkNCE79gZNF8WBZ5hskCPEcgFWGCgGvvFK3fpyYHq2VXHKCjGutkxvrmvP5M2kAE5vA2",
  "key41": "eFJNZ584nRN8rXpgn62todQ57NQXg7QgxiWWK52dFoXcUHLt3onJr9njxdut7wKxVpTdPAgDzrSytTRvuxEcrxe",
  "key42": "3PY6EEZzZnRp8FPPgKsjEZuNN6zUFpgsuLy7xo6rnUWbt5PXzFTf2TQVAuieoTvJA6CkypEKHnp9w5sd6jLmGtsK",
  "key43": "3eiAK4NF8N8zThZnTXMZC4wvywDQJh57qrwZRaKGo58i63EjViw427DCYAnu8X3R4mo7qpJkfpaA3tnhnjeHx6KM",
  "key44": "38r5NyUgstXAjWoY8jRxGMbysu6DEwruq4XW69NmYJCANBoTdwwreafNjTGuY7d37yy2XAqDDsvmjdT2PMYzoBP1"
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
