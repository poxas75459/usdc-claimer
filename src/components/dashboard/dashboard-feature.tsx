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
    "UbLiRunSYztSsSXhsJaZYyZL4qkwgtxV3eLQaxk5CwXpRS8DY2TULqJ7nvEKugxNNPdA7XHQRCmhErEbMTjbiCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MkTwmwqThnxzeoLcyJfVCc2kH21gDqk918Cz8syivCrQQdMYy3GcL6FzbKuQRL7uVPa7MzLFd6CGA6Vu7UXshbz",
  "key1": "2z31HwqeZXRHnNEJFMjtiig5BAeStzGthq7CMkTKfQpuhKQkF8k8Ze7nEFYrhk99sdiS9NW659LgM6p9WM7gwKRx",
  "key2": "5BCnAzj5N8WPhcWGeegpaSqKPKRPfHh29H3ZEaw3xBYZCewR5sFgxUv9iRMKLvw7xfr1MrBNZzs4FcqxHxSycGbj",
  "key3": "4eFFPujsf7gaCL52Mpu2bH742SqTTR4GnSRM9EXh4KFS4mQ8d8LeS5tkPjnmECfDbbGYh7LUpR1zUV2QqmEBquq3",
  "key4": "4CQMiE2GzhUWq2Y8PrFssD6pHLb9PuxHTHrnfUddLM38kJgCQvRsiLxviZUDph4UWcG6yCFqrytfQgRb63QqyZzN",
  "key5": "zAUkpx5WNhrqgyRRwa157kaMQwnSX7fmZi1uzzgKds4TS7GqBpnyYDdSyifW6vnDbTBpAwCEDrZShCqnmSKYAbd",
  "key6": "3XJ4KtN7xPdy8KPcUHPxnYPYzYXbNwhMwc9xr5wh5zPoEkMtfzwc24W2DK4yASCe9mHe4yu4zSGvHV8xG9fTR32a",
  "key7": "37q8YJ3typFCcFM6BUsodzHHS4tTgQea9zQLuNpBihYAMuiuE7jHwjUnHJ3vMKmzJ8LZrYtF8yaKcEYe4Dq57bMt",
  "key8": "3AhbybX62iPFjfDo7dXhc2xuqsvzFLSUfBhxCJGm9Gxv5ZcAzRer2jKpqjmdv18VULg2is3BZPHp79GfqtPecc7E",
  "key9": "5rSSCHyfhfZyF5wq7a2Uu9JT5dncZmQYSHEJPiFDgWQKUYPRozQw1NAeavgQuG1Az1NHTK5coeWestFVhaG2UATi",
  "key10": "4smyKqKUXNuAP7YWkdj4NThK4RFPZRnz5GrSGZ1q5K31XapFZuYw1HqB9eJwYT3e4WEr8wg9oipop5YrZYijtctb",
  "key11": "5Q7kcdqk6sVvk532sVz8P2MKRh5sxgkGd8haKNBqyFXNv2hzZgZbT1bTXcCpDn4KMqpvCuc8nUDF5j5eL2P6wYeR",
  "key12": "4dBvQJKgLYLyJd1cikLNcVHHNs5r5Qyfi93KT2bGMMcAzztUT2649WDa6sg8L9d6e34eYYWAE7gjCswmoGHWWcjf",
  "key13": "5aiKV7YrkKjcBWwCgXEBH1xJ8FyjKnZfrGNuAFJ7PXEuyMYNcGC214tvosxMExquEpdfBgJsa1fJRHf6ZbAfMyzp",
  "key14": "3mhHZds3JqZahqPX3A3moMZKfErqQggpHQgC1YNvoiaR7t1YuSnoce6fwUL4GFvQyrSgFi5WgCwSzBQGrkeEejg3",
  "key15": "7D1fu691WexXEzHNAmxAXuFtAByJMVi58mfq97SUo6AMNw9tfoA3QM8NVPMoq7CxJAKeirDiHFuUDdvX3pNH8cH",
  "key16": "3m81jY42nDL4neN2aByWavBxEgxaPNe6jMefSaT9H7Kctp8LDTcJdw4khnpJSAqgmpo2e16iw87hfNm3i8fF4RTn",
  "key17": "2Gu9FY9A2TZ7k7Exjh62eSqvtEQn6urAXU79brW3rpJxdpxwom4LLVCmBDoscVFn6QZUWVyLU63m6e7tUxQJuG7L",
  "key18": "2zrTHE7N5UtWVwbwyKSN35P5oM8N9BK6rDYpXKDWfbXCMaZgbCyioSMGtDyKTdjTEk46ibdUYTQrocShC1BstGjW",
  "key19": "3KfxzhGA6tKgfJ2cNkszpHrbPh5xEow2eQdCLqP6F8wcN1bXV3v769DGLRDMrWwkEwui91CVvJqC6ScDwMd1trgp",
  "key20": "62nkL1tPR6bYbhPkcNqXwqtNkd1fSLPebsY5y3VBvhUDeru5YQK4NZkjmMExmSQ3v48f5Ynd9Z1jgVJ7d9Hidmcc",
  "key21": "4tQcvuxVQoHTtAXFtok2tfGjn1dwWJQwvoHi4WcJa5eEHbTfAUx4Gi2YznYjouYY2ztyQtdR3kAw8GnxFHxTeQdi",
  "key22": "3oV2BqvQsCScuNVG7juXeNq8rrykUP6faUqqsTo6yLYrxoW3iycxtjazLWXovJXCVSvVqhqUAVhmCKbR34bH35YU",
  "key23": "5gdiT2e57gepz7a6sMay1rP69A6Uf3Z4RkTrHSuc9vj5tMAjqN41CvEeqLU4zHKumz7fmHAiwNpVqhHoidwBbviU",
  "key24": "3JYPvd5MMrbESxuGngnsGKS3MsUP2v637DWE4DNWGWdH2aqsDEtmaF2GhBxpVKTMNhiZVPE6NwuF9apBrsoEGDTP",
  "key25": "4VSkmyxWELYujzcmno36XJ8a29fuve9PQWWfmRVyCuMZcpPQpUTedrrarWJZcPvATHE2t49rcfR7LKFAzNUU3uE8",
  "key26": "5vjydqbpXQxqwABC9r5nfceQop7iJYdG1fSNuBj7kd7RkJGVxv3pYGH7vmS25xV5WjTDpMtzURijrpws9NS5J4q6",
  "key27": "PHLsSuvDCiPQKFmbhucdZ1pLPu7YVvX1yve68ccaPnhSBCGyn6i85Mx1P8XwpVPMD6ShwCYc2Bnz8rhnLenmckF",
  "key28": "3UfnjaZVWPK1UsQjWEyhVot4MEryLR4qoiM3eSH7TQ1AxYvGn5sXgYfeWmbpvyRHQyfVtKHV4setSeYhHZdvPnqc",
  "key29": "5GXBV5pfjimSChoVj7ZC6CxCmVN7Q7tJXSHgKfjvDNzUEg5zyFZAoHQaBH1jLk7ZcPyZQfPpqxTSaPJEsNPM5CTk",
  "key30": "4EXmdKMeEpbKfZkGkWw6obLLDLU3Dio5cEJdPiyLh4yKQrCQEu1euNd5roEpbSusyzAf3aDt25DL79Lu5BdRkqwe",
  "key31": "tX52qEE1xZ96NG8xjwUFJkjd7uXJBgjhE6xakkZsWfsk8Q6KsDMaSpWSfKRtSpxiXrMZYZaMZHMsrRKGiC8eX4y",
  "key32": "67DyZdCGfjfZ4s4ox3HrHPDmiVVdBXdMHcBtRDQwEkBsqvGwExCtvRu96kuTwa4YhbeFBG2QinQxWW3HZWSPMbCp",
  "key33": "5BB9B89jxNHb7FvykUuCz1TzrnSwcvA7HNiRh24ux6g2TCGogQP65VbXZadhT5Nt9JB6Zpus8oCSNeix9zNyJPNg",
  "key34": "rZZQokoLh4oCqjoy5WZCNuaM32MYhKZt1NMTjKf7LbY23nPDMWPu37o6wTLpCoaABZKfBZACXq5JXP6YzaWJPau",
  "key35": "oFsQK6eXEfHoM8joLeYzv32UXtqmbwFZZG6ZYMhGf5cWxizKF18yzwDVQ98Mhs9VkeYGRJS7CR6VpE9T2NVdXHm"
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
