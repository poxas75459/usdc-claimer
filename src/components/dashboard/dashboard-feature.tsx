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
    "KJEjUkjTKva39UaqS6oZRzmGvmpQMjFx2gcJTfCWThLpDHk21MLJ49dFFg3fsw4s98fkvkFfeMG4w7jUKT4W9SZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CkaeEAy8jv25FqSTwT3PqS3t4AJndqf1uwAcJA1e4gAE4a7tLfNxxTj7vW3iFX26C2i9wpoK4oms7wz3Mt13vng",
  "key1": "YxUMfDSN5Q3VHT7CN9bxEt3ER749xg6ZxnotEPTrTEi27c3e6cq4piURWPKLqbJuDY1VMbPxUixAexiip1Wrdx5",
  "key2": "3Q2j2gfJLCQ6YkNqhMeBphdhHamxTaMpn3z1kHnGaM8BVSB7CdUD3UAqHxgjXHQHQxBkZCHmz38VhZ9zxDSv5X9G",
  "key3": "2g1vWrQ9PXJ65zEcvWd2cBbXsVkonNDYdJLbCDnuLvBsQaxQG8SaGztorEzeip2gWRTAS3YPYTCZrfXLc2snMLBJ",
  "key4": "4uJZnkrCKxYY5tPfBtGLa22G915vwL9JpFHeR2MENvxyUk5WYaCWoNHZs9k9DR1Ct6JwhGurFP6yDjoMbxrRAvC6",
  "key5": "bjo6dsmkJhPBSHGUsRVfbMwP3xA42C57vyCDX1xm1j27vewmC8LeD757h4zLa9uzLykZsjfRs8rHmvBnu84FEFk",
  "key6": "2wrRc3PAn9H2eL2WDoy6sDq3AZ1LP5pJQ3VcN3B5DWoZuBq6FCfgFFbFpKvvm8TPatdHqs9ejaFHTY6QbhenfxcH",
  "key7": "2t926pT6tDLPLtRzqtroSdz2aYb8LjgsYF7AsXdMaddnLxwomSYtJuHA2Fp4xTqjLt68m9NygT5y8dw45HcAD4KP",
  "key8": "4GHodzUcDSMihum4Mz3CPS5S9NJDgR1N86xDkaakx2qpsexkbwLj1fV5cB7oB33njm2M4scvtFkJ2XWFuz3UMKaP",
  "key9": "2mpNvzPJMchBRsf2eQH7rgHcdPjMocTpsAU61tFVGypNHoH9yMomp6ZPVhQyBZshe89TcDUNysTQLXCYeoWQXQgM",
  "key10": "kbnAgArRvzh2oxuKcg7cPC36Z4XdWKUNmmUBaRqq39awKChjUwDbu2E7Ak7D6BCMRGvaQiawrxVSfERdzEJNVYY",
  "key11": "3E7oLLXCR5AUsPqQ255Uq12LxZVVFtiF7eeUJpQRv4pzXYrUxmeydyAH5B8DPFJBJeNNh1Smc4xdk1VNjkTPBhAx",
  "key12": "5P26HW9WmsUEohFfKV1vHg8q7U1foSCztUcQpwzuh2vWhTrXohL2q59aiAyGUioRC9QzLpj1uUVU9FqMFPgsKRHK",
  "key13": "2uP2EGGEFawaMdtMW2FpqhTcvkNHcPyoFMwjncK6GLcBjTyo1kbg8dVTZyJ4dFCGzUeLTV7MEBTgMsKRBNLyCB6L",
  "key14": "pNJTM8KnfARZdoFNwf8sHGgWmSsii9UPThJWjP5qpZ1JAhxtj1LuS1rcbZJ8gEy2H3g5CnVNws7UjFQP9XDAmog",
  "key15": "5RLkZCKWtJimSBzYg1iF4w97scvRKoPEz8AXqbQB567L58LLVcgagL2ene9Z7UJ23LcHP6q2tWQpJ9ibjMwS359e",
  "key16": "4rjUV3aYFeFMW2RfDFnoFCFSAjF6a11FeTsJ1hXmnBdNZUBh5sNF9k3i1ELnaiM3WYJZVZ4WyayjbfZVo6wKxhQn",
  "key17": "5LZX92z6F11H26XPEY71x6twFceJRQfYq21eAgATuwEhp6J7UqPLwgs8BrBmKHq1TuXLXsgFTaPp5LU7vYjQ448G",
  "key18": "3bzeE9jGe4QfUiQSRFf8QAqgEpiHE4L565K3HWs8tUsXiynfu5scDodxbLU94EJcs35iNg3n3P7atqDEuczWc7L6",
  "key19": "3oKbHPCzA4hgNDaSAiYArHsvjVyE5S3SkDJsmNwQmqudWyAg6paUGjg4u5UHY5LG3S8Hoi7qjT4eC2tqSqsMkjZS",
  "key20": "8gV1ndfoEVJD5hAet6QZ9YBYD9yvnajTUJMhkH3SQFmm4fFyYyhDs5adgm4A6biZ7gcJrTXXaEg5myb8bivJoHJ",
  "key21": "21Si88SvzksT4C9rtUcxzQhfV3fsaLM15gfeC26Ke3fqr4f84QAqJgbAzgXeQHzM8SbommUHC3cDBAh9ErjNiWxF",
  "key22": "4kpPZbjFznbH18YRufPbzpEdNdvaZFy1vkAXGamW7S96Pz169ip14etxsgAYqudqLmUyDPN5dUF7xx8pvJ2aAEJg",
  "key23": "bf31z4ATxqRyvxGf7DTQHHgqWMoxbySrChUnXHdrszs3499JbpoeUsqhVvjR277Pfh8t6yxvkr3NQWdanHi1yAP",
  "key24": "4w6u6v8Ah2JBKU9dZSdmqSPcZPJwqNeVHdGxbouzmYBiC193U462w4mkzKvXFeq7RdUUUyhxSBWiRYUf4SPuFGpD",
  "key25": "3rHedFk3PwUkFkVKv1ggXk1E1uiNNYmdLUTTSM53r7k4SWndSUZgJjMW8XpxndmsQ7sfDyaTmudhpA8SBpLPbtWR",
  "key26": "2wiDT16JfHVMx826Cem2ovJWYW2cHqfvH85fundnGRjuJtgfYCMhVYgFKEM4GyZGgiV3nEt8jFMRhjvxnkc5aSkV",
  "key27": "JtxjEhqmeQugE3H8nu7cXCcYCeuWFArrgziBtcDSdB3kxG498HMVZs4fSDBx3xk8UFuKbgcQmAE5wKsBzaH52ub",
  "key28": "218jwzaCF4WC97EFSp8WeuBKRMsm8Wyv3rZm7oCMUyF8CYoNrLTH62CcGGqws64qUY8ndpqd7EEfAVKmmJBqgpn4",
  "key29": "4vqxwDcdLhWhaTCCQnRh8LR4UKU1TTHvb5PvLrghzCNRk4TAc1bQvGiC1cUfqipDLmbmTuFAKZHVKHBgVNAuBLeu",
  "key30": "3ha9a4Sp1K7iJw7Gi9QZb5y9Yf3ArkuFMjrkduTkwHHnEh2E2GegT1MRX6tf9rHwa3fu6KN8rQFzojzCRBkp13vY",
  "key31": "6XSx3GN1zR7WNN35MdVVnZcohKTYQrEeBuPBEwGT6XSAPcmS8tjxNQQ5m7ESSuhoiQbAzGWd1LGLmmMkPWvKaJL",
  "key32": "4vtyVF694cDr9iRsPvqBcYqsNUMmGF3rHTJw4GucZpYQVpJ8L87j3euN7QK51mCvYQYbkrLYkGnKuPXqTZTQaM6Y",
  "key33": "4Y9PjwZB98CrKBSKsjBpxQfXbwHiDzJmvz3cUYkT6xVf45Dknt6ojGRxaxiehnf7hVd9Y3qGZfGEpn3q9vnxBAaB",
  "key34": "5tBdzUbC5Qo6MiuK5kCXETQPhLVZagFnK57XJgsmQe3dut78qwh619z9wgKkWrQYZU4pkfBwZzXyzP67WXSoNQHy",
  "key35": "4jwm2MhiMF55UyrEZbt9Ez5MxGGbePa9HQ7rjMtH2s7QvvJSFkNtmzkqSseffzsU92eC4cqPCYHc9XFCTF4TpCoM",
  "key36": "L6GzbP994i5Rcm4JbwXkjPyozwkn5AYvtZuMjYV7zjc3zz1uTVki1xavU545tNm7NsyqDVwLr4KoLWURK2gZkWG",
  "key37": "5RveAKnYvaz69eMK5khNtYiGHq3UJi4NuUx6ArkKvtjRtusM5qSAapvkoWohr8VUzfxxQeREjnGYrB7uxFiUtoLm",
  "key38": "PnW6sPD1VaLM9L7oNYh9a1spX3Yn1tW9JZrsaAJE5W3UR8kC4jht9RyjbdZr8nXNd5sf4BpWruu53QVuaZqPyvk",
  "key39": "etSsQDHbyb3uqu2hDuiJG5RLTH9kpD5niLsMntoDS854BzQ2woP19tshZvp43iECJxmoKhvp4qWYmeFyJSUBYJq",
  "key40": "3t9G2dssXgCEQ8yfqAtZH6ZezpoPW5L4G2P1fkcFJ3q7bxnGDg4RcBpngoFYgUHdh7cXgjxLRKnPajaFfKmUkgwp",
  "key41": "3bARaad8cM7o1Hwq8e9vJCWGtnmW5jziMSeQPCGmXWMqbazq8Ain9ynWNkDFmXssKWPKsbuGAFGKUfVv4P4UJv8W",
  "key42": "3TWRQFfB8wqPmTCZVxMEBiQ9QaSz1mEcn98x1ZCxg1EbL9FjHYy6DDGpv3VxcfYiWgBkdxZth2Gyxu3uwnj592mm"
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
