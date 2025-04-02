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
    "5sVYYjnUsk5v6HUvWnjTeJYMX8h651GqJAQDh5dm9LLeeskRvqyLTWxCWuVgXRaYcVXAKd8KFwwu6CXeMWne5LuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44xghcg2YKddfXopp1CWv65cKo3AnLVK6HMAAWk7Zr4KsSfGRssvBofoip5Fw2gtenDiQthRxbzcWzFv2BkJBH7b",
  "key1": "3ARDTgnJEyjTgxGSdpdGqGPZPo2pGo4o3fNoPriXkEfsu3xUgjdZSuBfE9EVVzvrndrwMWxbuVBYSe2fP7RdQ683",
  "key2": "3i2ubkiVUMe9k2hS4gY1YKQg4dGnYkZFNrfQJdsf5VF8X3Lp7nkSCPvX6bzhk7fb6o71iqTxvvkABkrGLqbP82vV",
  "key3": "2kYvuAcxfRHk5NgurJafGhQ5PZaJsxNkCbLh9FgmMnNhG51GkqaLKZajwCnWsQ7FLUL8tkwsBEV9dKc3aSbfzYVv",
  "key4": "3BEZUDQ9xRPtqrTrjZnUa5VMrLoYizyi9jGRyejpqM3WwxBekaZyZPd3mkbG2S6dzwgWGA7cBAowf1iZWe573A9S",
  "key5": "2kiNY2Q8xhFus9HRwViMWf8fessxE7yRQ4meHixFL7PcScMDa4vQaQP5NRhAJmBa7cgC9DSgVeJpUbvpZN39sZoJ",
  "key6": "5wzbuNGHzxhZZyQyLP85SP6ckehRfSDum71935krQ8prQCpeKE4fZ5WTg2VnxypFoHHcRy6BCcFsXdwTt8brv9Wz",
  "key7": "2fJ1nfdoinA83UR3kPKcM7jAJP4MmYq7Nw7wMraGMJBJLd4Et7eCUGTXrZ9EdhrYSpYtHA8HjBHsgGCM7Qy1XZH9",
  "key8": "3V98VjBNWXNcNZsaqRuM9NSJaWrz2s5XzMhy4RcXjvoCPDm1mzeQg2xDtzRjfBiUjdJRt4pnSyYedfGAgaDADwgR",
  "key9": "2Lzsp56bBzBxxVXwKHe4X7L7r6AgDkckkxFD3d8dPj44naU8nusywLoQdUitAWFpqRyff31dbZJjPECh5952Bpy9",
  "key10": "31BjocxtUDn8NiDHkp514z2hNF5XxSNB99kYTVJhjRMXMiTZRZdY5ALtEabV3qvmV78y2EbZURrFdNQUm6TmCuzk",
  "key11": "4d5AqsQF5xRVNXUNNkjgyZbXDrV7QryXu9zb7kjCkcXvPmX8z1rU1ad4MP5A6qZYZAGQYVXCMqZokfoPgF6FVcnP",
  "key12": "4KJVFosQt3pE2LDo96ZBbaCtKkWgJZgaZJ11UV6Z4C1WQo6wiHgm2MS3kmJ8FjaWjZaUv3gdufAs3xmwz9R3szCX",
  "key13": "5PMhsyJNt7KD1Atm44Jm1UM5tS5iSksDR3agPG96jM4r2NmGiCasJkHwNPr1iBDehPZ4joaor1KPtrrTAaVRypC6",
  "key14": "5kxXpHx9GYdQLhM1aSeApJrdFLnkBYy5eRFUprZ3dA5S3ocugTVc2QG6NsHEigBzq3FUWWWkstr8QVtWAtn1hJT",
  "key15": "BsjzTfSSij8PQofNgefDEaidAsURbnmNDUuYV1YYDuhuj9UMvy7PeJJShwvNBMHpcY6PwTNC1P3GUax1FKFG3xz",
  "key16": "RyecoueporMfzvvAM23WXU1RuahaT6zZEnGdWSqh2fMXf3Uo4Mw5EbWkBrvhtjCEPFZmsxh4Eyqo4Y5DovbDAM7",
  "key17": "5jd5rRF1QqYjnyp1sBVodS3DGhJbSQVzPKeqxo1G7U66JKSNzBXg6edFa49H3m5tg5JPcUj8j45aHqkiV2HWsZMr",
  "key18": "3nMUrvpFQADyFWMFmsHXm3ayqUCdyRVebvKFYYLqA2E35q8ttcQPhzgawZNAS5jgLX8MohMTeHvEbfEhJgkhsX1T",
  "key19": "44ZWcdtZZXM7aYViiSZTGayeWKtDQNqGNDCbjBeDJtfpMoTSyjqi7796dNk2QJvtb2ZoebBSJuo891beYaDmCN59",
  "key20": "59m1VeSwHGmtLfra9WoJnkfq44hbSkCN58VwqVimiHkPKspQW7wvfMqvS8rQMyrTNPovavKZf2Hct7oPkpb3kh6E",
  "key21": "4CeAmTUx9ZPm6qktnQx6gX7VHSNqgNxoCCan2E6QhKBjuuYWn2rM4bCepYmrikwJp7M5GsWn8nXChGU8Wh9WW9UB",
  "key22": "4ik4TJ1btq5JUSpFqN79z8pi6KZvYM3B67CaAWJBR3jaVWoYbUFZuvVBnhYQCibvx6damS4cxFAq9WVFe9DADDHv",
  "key23": "2wag37k7ufJqFYeR9jTkrhyQpo4RXpA3ZLkJr3p1icYfuJKYTQXVJrcsN6Xcuv4m7jUSiSjsuLCbPJDxsN31yX97",
  "key24": "X2g4h9CSthfLHPXvGLwxZDG5HENbC25cpuz1c9DmdvuR3AaRKWuzK2uhZZJkxNTjqutXZNumiNE1e6VrcNTG73V",
  "key25": "4d3DMUvwjzjRD2vzMNdzPRtNdaFvaKY5CBf4NEnUDrcskgUmt5mVRbsrBFkGYvTJfDsf6XZTb2vq2iJH2pSRrjYM",
  "key26": "2jUXm1hM86jXrN4jVRSeZZEJp8NniVWC6yEskVdSbwWLtSvPdNi4RxT6QvVSpSpUM2qF2VBTnQNNprVoc5SwMfWT",
  "key27": "4eBnQtfmRPxVN5enmnwLcNY5Ci1mCNvhjx635XjBE772yfLbmzRUuYbScuZt5KHhM15ZYW91BjKUp38ndjGYXdej",
  "key28": "4iURjZ5ueEdxEdnGjTx6V7ieAqaYDicJJAkvegRMYeQK46RejgPBx1AmgYnJpNvRyDW2a8LAnzvdPLcyVbzKzKks",
  "key29": "2x9PcW6Kd81xWZMsAWsAAGYoh96KZDvUsoZ87zSYXmjmjdqKvEjPHzQbzsGsJeKh9TgLXWWhQC1CBRL7LFWXL5rh",
  "key30": "5CUvKaCT1eh7r9AeuP4Cuqb17kUFFujhdZoxQ2xyuw2zwdC1SUejgj1R7K3vosYuaMBjWkxsxDZtEuyZ5BJbD4ei",
  "key31": "3Em6tVXoUeebddzREEHpf3MDcwiPUp8pTi5ZG1MdSVbouqJ4MahrMRJRUnChMB2iG1wyiDf7156A2D8Yap7vkYKo",
  "key32": "4N9igjYd4HBSsSZAXae63MeKR4H4SA7A5hhSiyWjXzen7M5AHPePu5WZBEwHktTEnMZzTBUyXpYsqePGk5idDfD6",
  "key33": "3XenqPN6HwxjLsSggTGDXqgMu1BbByyV46K3qGWVh9C8K6G9hazu72YWrSw4j6VxnAwxGoitjsFShJiZwx3CJyMx",
  "key34": "2tJXNBfNXaNto3cUKQ31xoFvy45Sd9mQnyUyZ7BsJWvtpU7yYVmqHQVCdVc4QQnXDSN78LPTPDtZV7pzctooSLfV",
  "key35": "kkKz1U24eJGstxMBLjr9MPXCSyQwqkJtDf1e4of6C41XNEtbmTpVNb8XXyyoqwkkWH92gpFTV6ktpxecAkhoJdV",
  "key36": "2TStJ7RHwDMVVg4CYwkWDD2yNDjxa6UJYDzGQsCdMTT2sgmAFte8CzS46jQX7gMrpC7FRLQBLMHrd2vzciDz78c7",
  "key37": "34Ge7iHzNXfsqfDe7XPwnVU2xjX3tYTKxCfFLUxZCWcqKoj1nVfjzPXWU3cdykB4SgvWEHiE7G7Sgjxwf7uGsLL5",
  "key38": "5mpyrFzp3sLJmUorVQvz5LMUKw7nem6FwWMD2ZEz6Lk72vP7LYt6mH48y4W73H4oF6hJq1JZLDzHyHRTm8H6Aqkj",
  "key39": "3VB3wyBqgH4FjhMWJbh2BThZ5FeZ5v9a9eStUa9zZHvFqQpbmghMeMSRxb75CG6ZZBEyTgynUYJhn4sw3UnPDQQJ",
  "key40": "zKJK5PvBk77cbagScWP9R4Rd9XiweMiTbXqWUdcai3VzHR3fCd1UCHZKAr3AnyixLNNyPCgVw6FHhudaKMCmuwV",
  "key41": "3NRRHPrAGDs1HeNqp5N1BEou6dF6Czrhrb1tr4gwCE4tP7FsV1pMJAeoHJWPyrRorrSXC2nN3QkWVsfJronirK3B",
  "key42": "4ukyNWEBfwhBXEGWdRgDPVrjYGa5Vdm25SY6NyaydQKNTV7KaR93GeoHCJ6i548cN9GFbaMf7WVFpm2WSSeFq4Ng",
  "key43": "5pPhkYkNPsmAaUSGJRNoGFtThDVQrp4HGQQPYxTzu5dbHdVF41aJeT1tTWyYFEM9zVaLsLFkG3aaKH3s8GncjEuH",
  "key44": "4BZ8pVTAHcEmkBfbt2nDHS49Bj1tjx1U5QZUpzcHsN4ud3q4EpxYzd7Vk5kqPrH6xSnPeBhJVLQG7ZQqVK1Pb5xw",
  "key45": "a7EX314kmFARSuqHdfDs5rfM8qVk2RSj71c9k4rNMxMo7E1bsBRvWZD9QpxbrE1E5T5UxJNwdAucdFyCLmSYsqF"
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
