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
    "LoPFHWadKG8XM4CihpuH4pdiNS5qWH1fnPQPQntRzL2NRk8dJdnQeDE4PYe8FjeX2rjVCmNmxHfhLpadWERWx5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ena1Ue773peDYw9R2aHjBEo61aSaScE3S17BQaTxhQwKh1dG5RDCTUcNRtxBxjtxcQXt7TWxX5q75U39FvWzwqN",
  "key1": "RXku9eFiqcw7GLZ4cRNK6PdehbQzhzDYvYJN2fAfET9D4LZuFXtxt9xEx29xPM7MyMof6LaTrxMiEQbc74zbF42",
  "key2": "3zPJ1DHTsMonWgQUTpp6vj4m81o22V4oudNamhYiJ3JtmNZPWAexXKDwyj2n3RYQVCneAgUii8DXfiWsKfLVKwXc",
  "key3": "4TehtrW5eERzVnRVJvJuhLor7HbsLaiDQq5BJPCrsjPMFrxhRBVwiTns1nEtyHPPA1vEyGjghocochjEdwXLNDP4",
  "key4": "viu2VqEn8C6CKLzebAKTSxFLFBPtaebaxpcCzm1Q4fZznNUZLasKhvj5aeXPQwUjZVmV1EGqJFLAo1GqzFsMRh5",
  "key5": "37q8buF6P9vQbnX5RAumaNc4VW7NtrSdPNL85ZPZM6w1Y3xQJqSopJbtxWaWNHfpoMgyzuQntrCYNMbfJhKtaJmC",
  "key6": "f8QpZ1dPvxeWM44mq7NE2Chgv3kkvV8RxQzoQvhQpwZLqs4Vq9Q9mzG1TVrgBXMQtq6kQHXdwdkaq152gC9SSrx",
  "key7": "2a69WqVgKSKk6mkJYeEEayiu1tuFEXbEa6Nc3oLxCtx2nC4Sd71DfqBfNyXwnNSr6kSM5QcRpp5K2FPK8jEKuFjn",
  "key8": "2korhSiGkQbAt43ZGANSMqHuMhURSQFCarS7mdC2MqqmzPem4w8AubaPvA93YUiGkvdDpqRtssZcE7WbokKJH4PK",
  "key9": "5CgcScXEA6rAe2F7JGDq9mY1e6TJiDX59Tapw4qKS99kHWYJU2KiofVJ5T6XiVreyZjsuFtBqxAA4NFRs27hVYGU",
  "key10": "5SD7tiFsnNeRQpZFNEqtKxB7bJE9CPiD6ftAxs5dg2y4k5FAPPo3E4NVkFhxN6hBh8RcWy5umSfj5nBA5jd6ZnrA",
  "key11": "3DyhgeUcSyVQzXCyk1gDD5NWV2eCwSz8y9V55hEZ1eAzLSxBqku4nztQjsfPUy9RXQsE1VifU6chmU9z2C4YUNNo",
  "key12": "2F4DiX2XBiZisHVDcwPgze2vyM3mDjM8JG2gWBZNvLPL5Eekyfd6Q1GWgeLnngL4CQXF9Sgaigu72rySqQ9yEcJQ",
  "key13": "5e7FU4D3QMr1N6kWkQF6CeMmKcnbJvUNQQMcrsFdjdNP8jhu3WXhvuiunHUe4bvWbx61bikZfVtoZeWj7aS3DhWn",
  "key14": "5jKbMRUG9KN7Q7FqfZYjnpsRVWbajhtZc1719Q3NT1Uve8Da7v26k3Dq3jkJkDhcEzfeXhXyxJHKaE3Fjrka1GsF",
  "key15": "5CJ9cL6ifXMTD4GDBhQhMsmGGfVUW7ZsbhxV4ehBLU8CnavjRKBs5tYZMv4U2DufSvXDp3p6hQvbrp66uk2udpA2",
  "key16": "4fgHdq2Rq7kBuCHGVjjEzjETUq6hDkYBuaZWN1YbcT5FXutVdrksdFqFgEaTavWT9xde63mAytGKXETDw8zaM5Gf",
  "key17": "2vSgs12GUq4ayyBscc8r9iRE6gCEpfyQMnJUkfQaacBCNZbT9HZAhjUf3Lxr1mdh4rKgTM2WUxepFt5xiqZbQoxj",
  "key18": "67Wi4Zf7aTc15RVngZhyXQLUyVymWWAnmc5xmeUp72hKYRjN5VTr8kURozDMr1Y7ibEu769ytkJMN3ct4vjh77MW",
  "key19": "ZtrkdcQjMjZ1UoRNGFS1zChwqcwFMvMgeiz1VcAED3uAWnN8cbgLyLWXSDQvGoDyUcUswn3iYYBJjqHGSHwo1NN",
  "key20": "2oWhRz3aPGh14dgJnQjJxTvW9Cfsi9EbwyTmtt1vWqDotniCM9aJfZch2hdF6NGXC96zVhdhFoAYf5v42FFj3gWt",
  "key21": "RdSb8eCATHfL7o3jexf7HSQNQnNqyqt7fCM7oGbn9VqhWAQ7sCxuWBXebCTNLDUcUWLAeBSqg7esfX9J3G6Kzn4",
  "key22": "1TUhCgRcZWbrwgLZSdeM66tTFJ3dsafsRLtZfQeY9fhVZ9d4A5Sw4v1PzmruiLLqkRcCxv1nMjQZSVqwyUykmcx",
  "key23": "675kPDQ8UMcVS4rBXG7QFL4G3AW2293bQjJug7jwJTHXSjkAftKb1Bqc9Ud1z5ib9RMfdwZPAdPyDweDdcFtGukP",
  "key24": "2Z21cMmpcXj6i9im8kyPTwU67uER29oqXDGQYArgucZPLEchBXF7H4HF9rUkC7JpkHDvL8JAe1P5vnf5ccst4eAD",
  "key25": "R9oCDaANpuGaAiLdKHNbviPCa4jgwgNzuYK5QDBXbrB6mUU2vsabUKAg5b5BWaho2mNhScasYxug4base3wtmXH",
  "key26": "67Fy9iAsKq3W65sR46jucVa9SxE53tfZVgTVR2FaS8o965PvPxMMKAyKgTPmji5tjdE59bSQpQeYjiVeBZhmmh5E",
  "key27": "5FqSpzJvWfKX5CYjqfMS3WduehGjRHk9z5drtHMRaR27F6iTtE74pLF4itZLEFAXP1nYVa2ysmXWNQbJYwsDj9J8",
  "key28": "5tc8mbBQsWVAoJ6mnvbZcDBLhPwP9v4B8ZG4596FtNVd3f4Qko72VG2kviTM2TYTCpgsv8Q5v9bGro6L672ftUEZ",
  "key29": "5oQbZVdvfDF3tDEgxNz3XP3q7cC9RS2drYsv8p2P4p3KA6kcqy7CYqHgLBvNS8cQxTqszcXy3U8SkGgnNxfSTyLq",
  "key30": "Ec45mPRmJvyhpXn8ic8vHpCf8EvBE431Rc64mdhyxrPXrVQVxtq7UWtSzrKu8mFwZpm8QVGbmgkpjmHEn74xAKx",
  "key31": "ojUEGkFJtk7sYH8LVTTo8qpUFQnZn9E6PNcmMgNDtUhvRqQZkyb87RScAj5wjPAr1TUK3QjDoff5VS4wGWpoeWW",
  "key32": "4Bdf8n5G8K1VDxyvJmQ4NJguXv6CRRjGhcu68Nti1kJKWKSd8Qv63YVG2Ke1V4cfo61EbWTEoxjRQ2E71PkKJXRS",
  "key33": "4pjNtceFxE6EtRo7aULffNqzH7yGQk9PMe5VWTK4Qm8mZditnHbXHpZrGfu8L1YqcBb7gTsmNRq9aGXCzoKDg4WR",
  "key34": "3AEM4YR4nbtE4SFinEy4v5PkCybUN3T1w3uz5DYHsKLCwk7MH1FXuXMrLqZwhzG9Acopuw42HqaECfCwFDyiyWyk",
  "key35": "3nx37RBMZqki9vdpmpo9S7PM2tVBDQZExRhuDRHZrvydcs1EQdj2RvGCqCHkGXYkNvkeSaRfhVkiLbNCDMENHbiU",
  "key36": "vkeD4Mz67SPu4bELHQdG51AYLoVSb1YaDZTjVJc2jxDMY5E2cahouEFUwagMqZ8ABqxczb4Bp7UE1FE1whPq93U",
  "key37": "5yfYnPDnGrUeu9urx32uke9zV3DMN2G36qJDXZnbcVn9KGQwAAm3HTxA5hkCBsF28QcskAWanueD6fJFGm8RVUtN",
  "key38": "3hXCGSr49a4SLHTRi1sTzp7xr431PDqM9mZRXoWhmSQkB5ZwXyAJD9WZFmNk2VBE7UaoiTLNHXfE4ac1s9pHrkd",
  "key39": "425PNQUCAHbCnvz2JrjAZtfGSYS2wrGw2cPBVGnD8EHjJPtEPBgSHcV4wfMkFRNwPBrwkRzbLgvMShFckP1JK4JW",
  "key40": "3qsJ6nTrngKWKqTHaYmptV1bMmyTfd1etkQsvPP9zA7D69C1nNCgG1yXpt6frcEmMKrm7n51LDAt9grQttAhDdda",
  "key41": "47ZCCDuhgWs3snLhQayWWyRp7U11LxNzX7J8MA2zBPeK46cDgPwi7GvKKyykAiLieELRQq6oyuRf5MNERo14XP5Y",
  "key42": "4sEGs58M5LmcYd3Ey2bWLTGmc3KeUtkKefuDTcGmwptYWLkXx1yghQHdMPwT397eFL6LCajJi85AgXHPGnQopARV"
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
