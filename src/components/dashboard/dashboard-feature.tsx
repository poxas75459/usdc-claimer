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
    "5vu2bTQK1kLTMgCXdSNjjXjE8rxDPdeBJLt9f268VCKXr1vVFTTjgfKvTL7UrSvmm9sF4jAAHQX8R2Qe4KdK3sSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Eyyfc6ot17LHuXkB3JFtVLZUCSSc8dee8D3ShUAM2S5MXPWijsn38KuCY3wVFHzqq79HYq5rZbBCJtY3LQ6Z964",
  "key1": "5vbX1DXpmxjXPvCeWHCVHvHZvGwp99BcDuN1mR2GFY2wRMiK75o15Cdfmst23XEjBrPZbuLe2dqa9M432zBbaUEA",
  "key2": "64dmbEv9UyJjP4EUSTxxyh1w5g4ichh5z5iQcxc5eoKV3nLxZtU5P5Un94dmSRy8pcrXm8R3esqXQ1NPoNdbjzMN",
  "key3": "5Ft7twPKBBavzZidRL7LcT5xYD8jGC8kgG5Wvion5eQ9g8w5r65dukKMU1S9Zv9FMEus43G8YfnjoKNhFjTy392r",
  "key4": "4E8KbQNgMPnmyoGtdCYJ9cuMkxbon5XTdovzJyNyNppQh1SNYE7Gjta8iDamPZWPYds7rTYRWHwz6iyg2YAFupSn",
  "key5": "5iCu6aEzix2Mexjydr6gXx7G8hsujRr21j5bqBBVefPHM1BQ7kuRMVX3hrxTDCmWewcPWNqrgHzaiLofcEZ4iQRr",
  "key6": "23ZDkjXZNiRRk8XTZjJqAnSzmAuMhkgAUZRDpTpxspMREsbQsFHodbCpFxQpmLQqMMfHRQnzZNfgTphBNax4w9Y2",
  "key7": "4UkgzPFkjusoSk3f4R9nnMT8Lwr345rR4iPzw5GMzvXf8YyMM52DVn7aYzgp4mxxWQCT4uDtt4M9MZr24w6dqMSC",
  "key8": "2zL6Wcx4vcuaVc8gwUFH3CaJ68AEXcR8eEA7YsHeKJd5ifkQuWpfyyJG35F9ex2RQdGXLYHEyu7tDsmPEhXR1gzW",
  "key9": "22kCTMScR7nA99N1v2RP2QNskkTMebHi45wB7ExXkh5JniahKMuy3vJTLpvg16ppXHir7HavJN8uGqiVwLwEqMwB",
  "key10": "5827DHVYc7ajRPAMByd7UfgHcaDGtnkSy6Yso4Bjuo6KJkMiGH53pSb7JSxs7mJKvum3TCHSKHDyFkXCrZYaUbev",
  "key11": "7rxpREPWDhy1kGXKTpXs3SVk5g3FWQtn586Lt5PpRUggM1iZeaLSBYdRvD4bwYEkDFcYA5LfWUEBh7FqUGBEnMo",
  "key12": "3xLwoymyAcfbU8uySffW362cVovFzVR3tvSjUiMFk2CL23Eg7jfE7KCvbCWYMGPb6iHudbq1cy2DCb8A7Kaqk2i3",
  "key13": "21sHYiUYvFEiSkgtZsKmPqycaFuMQRsVEqJavhKHYTMsUZncqJbDG7ePnQy1qPndme2ZM5ybRiPSL2E8cJf1cdVb",
  "key14": "2JY1uiFbJzABVqrxRqoHLrjt7AmLbyQ8Jdp2foeUmkoQRStyiEDUkwUAvhpKtZZ6AFxKVGNHMNAWPT8kzn8uHRGF",
  "key15": "bq2G5HFAHYvUy5wwQWgBaU5wV4baVWhUuBFFYnEKdN817L8fMVvjnwEzUxqT23Dby7HDbWJAVwEw3CKMgVPMjgB",
  "key16": "6ZfiNso5UpoZYa7FzVVpgGY3Key2nMa6URc5GJF4MaKMw4vELKRgwa2RyaZytyGZ1xefA377GARPpANGeTH4mBi",
  "key17": "5n3pHa1xQE9L1h5sQSAt3hdRqsGUd772ospcsZJVcbLPLc5cBQ2qiNH6szCCa1XQbKAt8jiDZtZX7ZaQpRsAuoEE",
  "key18": "L27QTtQ4hNVX7JtVi873yWeKf84Dgq9JY6E9EE8LQsbK5ovp7wQfoH5XShLJ4Qf42DSqMs25uacZfvYQzeKWhTy",
  "key19": "4JfBLr8MYfM7SEG5vmzA7nMF1t1haku4UeHackTMoWv3a9vJpe5CFD17RyCeC3z4fuaXNVVRS5mr82KJdiQgB3VP",
  "key20": "3RbP9fcephA87GYZ4gR6TUj9fT7E9oJkYp9pkucfGBKD3eh1ZeQ344ff5t8aNswHeuZWoWSsmBteWHa2nYT6UfNx",
  "key21": "mEuSUS86UbgrpSjCdBWfpmD2WcSoGrkwNJbSfWBtMh7RpBd9oPUdbPTbV5z9xNxVRXaN2Ng5yHMPwgRw1Uvx48n",
  "key22": "oDvwEsZuBeP1CTr8pQfNrxEa8y8y1YC3ggP1nF7FSe3NLSShfd3wCJQhfymjx1WM6NbusbeAAfJoexFdunPSA2d",
  "key23": "5nuFtEQucoyFohcFQm9LzPiZKrozLq7Lqj97CvBKY7zBgjT3aFmkYVddiTwLBPqPGJmUzKBeJ6DzvwNNLWPmMwRE",
  "key24": "2BmYRmVYL2iv9KF4KghhiDYHja99xKw8am6PX29k5sqwgquuR7frtztw78kmhQXbJ2Sk11cYwYygVJbGwfJowE8v",
  "key25": "3QCkfRbkJzpZDfiygkpfNW48KfpYCPhBe7WduW2uQBpjcFJbDni1Pq78Kjgfq7pLEUzzBea6GKsE2jgBJySZM9uB",
  "key26": "f7aB4w74XL9MAnCymfgMSseLSra2CxWKhxAtZWiCDy4VswvUYKTSpxne1tmFrSEUeqEXHM4jL5FWJ8kZ5dvw9Zc",
  "key27": "2Ny9VC1YGg66KDNbS44YBYfLUkG5ccvWspXvMbBBEYpkQkPPJnHfXyyzvKP4g1SQaFrXTMckahNEMU9hAcTooocF",
  "key28": "5xEBEFt8tcEBNsSu1NFGy6nUobcS1dRaoG2KchJ7wi8J6uTSaNjVCvZsFiMTjfRYAKhk3E6qgmkwf7hSdskhwgbe",
  "key29": "4aazKoQ3uQFtwEDoj8KwbENYWzJtkkDzW8ZBe1d15G8CJyaXDqzGBLo78W2rn7CJB7xo7gyyhq8yXuyYDwQr6qbw",
  "key30": "B9mvcWfDNpq7iHUCKs5AszbnqWjB8M2FEcuSKJiQiupckb8obWgAPfZZetcfe3vXeEUJWvHCTDzVUWAeJRyY1sF",
  "key31": "49oPnhXtCD4Z9V61J5QdTWEVzGZx59bwYWb49rPS4mib96sKCm6iZ2oLcZhX4GKervVW48ci1oBuTB1YQcNoxX2j",
  "key32": "4Ad6W6HV5GMMRLzfbXd3WzbuMVvbksnje37ff73H35paBWBX7yNGpABwY8QAFCdktZUMZ6aNFpP73TgqvGXamCmN",
  "key33": "3jNAydaA4ZWRZBLcwro1R2EeNz3soziVB8ATcank61fVye1Dnf7mvdPtRYXPbvyAtcB4VA1E6ry2pxTGghQbAwWs",
  "key34": "3Q7VBcvkyjCxFUibfcTJvfJpw8JATxtd9UX6onzTU5LG1nho7ioGXj85SQfiSyVLtxBcxvi9oSjaBg7EFJcaKmjm",
  "key35": "4bg7uiEf3EDiS68w6zBuq3tx2EvVTbUXFCXZpqX8mnsRvNbzSok36eoxaRKijSHcyWcW8A1AZUVv381ELgZE25h7",
  "key36": "5yvk1tGoxuUL8ZkZgoH5S9LqepkmPfaC1r9zVgYH6FcGJXi2bet2R8JjWScxMqGHVfwbeAovKLrWcaGwVXG6mzBn",
  "key37": "GxYcFPiutZsvt3zPh86zJGbbQfG6MbDAguRkNefNjXU1HWjrCYuqQM8gwQMgmSikV84DRfDsBTUfcYdkoNsnbqC",
  "key38": "2Y8ob49LnyebXxYitDPkPYbYQKJb6orHuk1unJES5ora2knpZqL74X18VT18rKJKjToMd43H1FGTeaVsPBurzrW6",
  "key39": "n7gFajdf4uNfcTssbJc9M3DkKB98UjZQ61M1C3Lh7z6BVknopYXtQNM2dDzgNZ7AvQ5gF8bnMC3tY6pcAC2m5nE",
  "key40": "F12ZbCwFLxdmT261pRDR5wi4h255BzuN2ARPWvq4PyzWRiKxFHj3KC73b35BcyPHfTnLLpPrEQ7D3nq1EyK4QCo",
  "key41": "4FY45oagactqaYdXgs2eG9TGzzHpNyv6a1qMc8g86YYMAS2DyNtaFhZAjz7NDTJ9FwDSqUV2NPA9BjHXF5hvTZ6a",
  "key42": "5FFnsAZrNMXSwGdhdxdipL6Mn3ekmXmSwMCRLJxTX61XiV6nGncxnENNcHLNGyBBWeZ8HckvHBkGxcUxVGR9hQvx",
  "key43": "2nVo4XcdTywpnndw8Gt2VonfzCnc7dumgzqpy92xmg22M4BmRyuTidVDtVnHTBBGvkSfbcJihyogCzoM1eGau984",
  "key44": "4C6JyPPWvSrqwgRJJDohj1EifW14Bz1xdCTohbj85of4PJF5Rr7z67vyTebQ9PqjarvfgyMwWbeuU2DYrQVCrCpB",
  "key45": "4Rv13o1816XSPfkVJVP1DFeZAdF2ABrjrVR2WM9HYiBmFFJVDNFwbsGPNFTHaCeEJA1YAvnRmZdwGHPdsieamuUL",
  "key46": "2erSwTknqRGx6h2tyvxf1nhDSUPkwGiVn9TvR9vqGwPenK748LewqV7xYngopwXqJPxtnTKQwi1dvPvYk53WLpm6",
  "key47": "47Unn4BAxMU7XeUimeZcESmijVYzi9P1c7wQeMCYfj2APZttYqcU6LxgJyfKBEvUUzDM2c18WYsUWSkxbmRypR1v"
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
