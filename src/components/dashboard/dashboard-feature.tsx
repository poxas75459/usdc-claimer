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
    "5GwQLGASSqw7mhc32okAN7Y9JGfaRgm3r9fnxq3pdzDz4rsYdafdPnTnQfggqcXupH6Afrr2XLTQ3qDTnb6cxw7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LxQh6okncQTaEqBSUNQUn4NmEwEAZSjAUP45bCYvxaGwdTejGY46Uce9V4aWycuRiEDxr8WwYxdTKHURFQpGiUp",
  "key1": "xNwWAAV2EHrtX2TQuzaXeZBGxccWSukmpbwbWEfyex8q1SWyH9eSAHUUaH6vvn389zjYGf2V4Mhsvu6FEXkzxji",
  "key2": "5KtvdLKp2Ekmu4LyvLGX2uoiWF79NrnAC4WbtwaoVxZHihNchUNuWdzv4fMQzj5x35M5UMTiTQnfKK4vbaWtu7oV",
  "key3": "29GAgSnaekqQYq9HxQJpALUWGcMSi2v9M3HuVp3fz6DZKDrx2Z7TcLUJSuxsRTQwWHZdgNpoRX65GpFQYTp7wMF1",
  "key4": "BmfoygiAkHSVP6oRZStnM1v4q4tar2fiJAGfrQHVsSswBiGgubhou4mJtZVmTXgq5LvPY7EXyeR7iJM5KtTbiZs",
  "key5": "A1YMbqyN1p3qPYdgPfNnabgeyZwJ1h9iTAkz9gnTBmuZCZxfURwsxrUwhmfqL4V7kCoXpvarqgYMo9zLuRwQbhn",
  "key6": "2frLLT524TUa9ueWvHcVtSDJRSizyLRjowYFjfUpSRs5rXBXJudMV1jMRq6d1qMpv8QfrRa29N11UoeSjAVQr5H4",
  "key7": "4xAdgtewL8o1fmjv1zaM5hZKArmdRqEbirAnybdXLRtsr3bhookvDdMvunpgJEaAbZ3AVSQp9siPUiCXM2kYV9TY",
  "key8": "5UiYB9gkDNWKNGSQfwUQFw9JrBFVkKdymSH1YQGBvtXVXc5YcXdRUgn6VYXkcgCYwKfF4XnspwZZJxvWE7SosgD1",
  "key9": "3pLU3pURqpBhU95ik12JKJEQpqqbdRhngLFDgGCvnLaFb4M4cc24bDcTENfNDadV83e1iR2maQTtTfXWxDfsbgQS",
  "key10": "5t9XRU8Wquxg3iBKxJxyYFxs2uD9weoB8BTRvJuLeqdXHKLdLjFrAHDcDnWiiJQsdw1UsKfhMiRuHiPABCUgjz2a",
  "key11": "2Fuuxm5LbGNuJbKPGMw8JbUUtPWjZzKx2X8AAfymUWkNWZquyzVLbMi2Q57bsW7jvJ54jDzvS9VSUiPpQ8YPfgpC",
  "key12": "3UuWxMr2w7pA3ZpeuJF9HrCYQe9XA6ZHLCPrhsknRpC46qtT3SJBdWggVhTMQ6TF8wHRzcQCk4F61gcd2Z4Wk17E",
  "key13": "5VnoHFjSLjMUTz4Vvqo8RR2bdDcWfoo5yPxmwQoJyoiw5Ccb1nhbaXvXXd9rvaNKXLnu5jZr5vsHWkCRu4ATXBeQ",
  "key14": "1Ld4ZWkEjvQrSCseeupJRWr6dPjDTNhTkoKRrXzNXo2nTBNeK5U9ukwS47rzse5zKXiLc6ekJE3zgQGNi7ax8fe",
  "key15": "5s6n9W5vBjKgjbD7vjwpCXwyVEazCxgBo8ci1MDw8JUM1nDLSLdCtjeAko1Pjzx5QbtysZHwUCfYRZpy86VyHHPF",
  "key16": "bd3zcV3JjiwC3nEPKy4ckCrm6nuK3uomvWSGkg3x5vRuyieSZ3GkeMrs3ttCSWC64Lfn5S2guyuhixx6W31CeSn",
  "key17": "35drPTbWc9PWwSpA4mFoFyK3wxhWgLupndhvJwRX3APRah1F8sn4jF8ZNx5umbBkRSZHkz9UBdbJy6GrwNDno5P6",
  "key18": "sBPeShg7CFLbo76n2PjUFGLY9du3SqC2DtgW3eRuMmFF7HeVAh7dFbYNtU2ZpvsdCQU1icSfDRUdvApRrZ5nMgn",
  "key19": "2Xa4fev19oHspCUAs2Avm69B4E7XuJ3HWLF8YUkKctVbjsH7RjbZgxaJzuwu5uGggVWytTVFF6kDqJHe6f4bdGB9",
  "key20": "2VXhZ6fRGQcSePRvXP1VrptJPChBj3mNU5swUXkEdNpr6vMocAjrFgSgBsNjQRKv5oAQv4SaGvXCdztS9jtRgK6Q",
  "key21": "21R8WdNdQ5UuG3kUxFynSTxefwL9p57MserC646svA1niFf6EBRxmvzEUPMBvtXocUF3HnY4DmMtDnHPqQxemd8G",
  "key22": "rA6jEBS4K2cbuARP6mqem799tmpS3hKL4MSGiMTmL4eDeAQJZh2TpEdBihkTaQPgPAHYi5LvTXzhRtGvDtf7ZT2",
  "key23": "5D7S4SW2uSCLsqF99Fm4SY8x3hLAtXpeP2eLozPJDzEbWfRj6nvASF96VtqqrTCxbsEWibVnuYduD5DKVbXGoUfP",
  "key24": "3MQHoSw11roY2KS2ovhZzyXaCGJcPNCSNXoy9PQtsmb9g5hj32ApfiMQGbJdWmtjdfGkzN6XmNemTnG29uWeXR74",
  "key25": "64nhJD7fGDsS4bt2zH3js1vaZY6PggAuiYSPE6xmLCm57rTcWKxtpjW4gc5VCauiFs62RJFC8mg32G9HgZ5pSv2f",
  "key26": "iYA8mcALdA7iQcsPDYi9SwCoeTM4Uw9BQYEKd4rEeKbxFYFvWntsgqKCcYeKS5onoA9mkx8qfov2DMLs1xx6X2n",
  "key27": "3SRFv8Tmz4busuAjwWvSQUEzkQoXPSc218dKM56UsgWqDUmktxuXEYpuHs78LZpsFnQfbsRgTy97YmNWrWGagM5V",
  "key28": "5vvAwEmZDR2aK7CejCSdc2UAdgenTBo8yzDjqPzbzhc19aAFcHdidCqQm2ZZoeaqvMfSkQSfHbDZMSVYk77UHyKA"
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
