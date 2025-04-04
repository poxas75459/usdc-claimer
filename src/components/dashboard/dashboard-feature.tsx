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
    "5yYGyL6gGwztkNZEYc3VuL9fBqaywoc7QGrMAa8PFdRPTvGgbimZQi1esaW3BxekUCUcETcNcFLAwm5BeLfqTXbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XTf3UqVkU33yyrzBdfhKy5NZj7c8UzuxK1gBESrsWrGZPkiU4ABac4kq1B22kNt9xmLXMcjiyopzaSgJ5AJKVMY",
  "key1": "ZM4GMvk3RvFPzhsdVLRsVKHqVYwwgfqL1xDFnLMYwxdScLXCpRD3upMXZKmdnLyAw4TvJupycuNsaLmjGJtqKYM",
  "key2": "4YaGxFYg9udPAdSYiXQfRPriMnYZsQspVvNqaZZRXULs7H5DKficS2QsT3deESmE3coMHurZYbjcuRpYLWzwCfhw",
  "key3": "YhJfh6NS8aLzerdw6aQiGV7QuY5vM62wE13Zw45XqAq1dSExQ8YDWC9wVTAKTSNFbw5ocf7QP9fr8NFHF7d6W8m",
  "key4": "4ZX5C4kbz6m5wxxUgkHh7LtHTFV8giGPUhqx2ecHz68fwJJxHgZjUDHrj53qqTaP2R6fsZwXWXnE7oEfoX4P7zAe",
  "key5": "oXfnawpK1EgvB1D9MveS7j9PWxXTxZvS7a4g5MZ7uot1izsYpM89ip9KBAcvKzta789gAxzE8LUvn9Wqzi4MQKG",
  "key6": "5tEb3CGRa8yLE2KgskweC4kGMxTXKRULAxmUcx3Z59qic2UyyjDQnGP7fSFSQvgYu4wxCfvHnQVPStqLm2BKDxj9",
  "key7": "Q83SYQYgnRysPA8cSeJhmXtFn4PcneG2qAR5EUnzRw3shjwidujdtpqjLJN5CzEJEsR6vXJ8xuEaNxJ9BFZdghA",
  "key8": "4ZpnyS56aMZRCbNMW5NgtNs9G4W1nJCeUDFqyky2PeqaEmaVjxpi7cvk6yMoqBkaA383sj1zcmp1PKSkLgdreEB5",
  "key9": "5FtunYJRorh11io6kHeC8KsBD5ehtTLFLB7CosARLxR3mGLX1SZuta3jpebFLHPJRQMfe3eGUmHaor5MgPyvHNcX",
  "key10": "4QyTUQJVhhceG3zvBsB49d6LhqZYzjxEugw7sxJZeAgH4b1WUkWAGiTCfpaqRgYnb48hrBWeTc2npyRKHZvfXseQ",
  "key11": "4yaYez8vVy4QYYfJeVgCWyD5ukt8CN1xcSYYfEbPpcbEM9ogZFwG5SM14gvPMcnkH1AZ2gr8vhj71qHjfu4HtDR",
  "key12": "28vjCxcYLuxaAu37iJfVDrSG6v7SqzDP1dd66GCYovL7F1StP24U1oDotgDNn2jCZno93DefdVU4tUAfUzaazWCu",
  "key13": "5ABKjuCteHUusxxKiKSV79uDahdMt4TePY8QdGJUvVQatt9zZHmUDebzNxAxPD1jhByVz6LLwwMd9oVCQ462nWnL",
  "key14": "38TgSit663HgXKY1UYX7g95UUQYCiEqaKZZtqZFH4abrQEX169kXFcFQHGCHWn3QaA9BjU6hyH3P8cnzJfYidjp",
  "key15": "4AdNu8qwDbq8P2nnjBRMgpJgDUquEDZzYDZM2mEiUzyhzxLv412AZxgY7EK9E6xWs4TFaXPtshjuZduPShGYudrv",
  "key16": "51cWfAP26Vp9k4tikiDFthXzYGxLJWe5hjNqCajGwQsqssER3BUpi6tuTPk81Q2TL6F3vz8VMLMzg9fMDpnpCnMe",
  "key17": "2q5cS5DvvXaRJMfuB8TaZ1HYtZkje29N2sA5pcNnuFSuhyiP1GHyso9WcwxGEAr4gP4FgoT4YNjiZda17Ye5totb",
  "key18": "ooksBW4ZRCsqX4PxR9DmpB37WHqAoE5Sg46WmjBYZurKBpcEppE7FVL3iENgMo7QrBXiRMwFebNVF2V2WzhmgyN",
  "key19": "2QgpZWczCQK59SjQbcHox81uVCRFCzBvkRhQCpUJqNcGGedd13TvaihNpUHuXrJp74nmhSEZrGBNzSr7bY9sUcfg",
  "key20": "3xJTgQ9hXHCqFHCJQbN27iHkWR6129PLQJoq4BazTvJFfi1ibyW5oo298rdHdtodgxhaAoBeCUh64zShVx2W44cX",
  "key21": "3Kj6ieiqv8ZjF3KhNqLDHqrUYjYxvae3t3vARJAURBCKt3r6gA4hqSacU4MfNyEr9BxqVgbZQk9yno5i8RGbyv8K",
  "key22": "44d438LhscRQA3cwgNxA95TFEyzmtyDRwppZSMhYHrQUdCws1nYBRtbtat7HNKcg6ZkqU5dyPuqG3aCwdenEPQbM",
  "key23": "5aAH6uHHYBdVrXMaznMNyhT3MsSUrssVLXqQS9BsaxrGZBSWvkS7H5rcf4RaFtwjuXsSZ6rH23efWZVfdUMHzh49",
  "key24": "5RiYaFza75EfxkZRrmKSpRsC2WfLXbUSewosZaBaX95j8N1eSWpvEPxWkfuTxxiTMe5Xxw89BcZfbSKnYEsrmxeB",
  "key25": "3rbzg4EtxT1i1ectdRim4nuF28Bsma4hFsSXVqiQp5SGdgr73ZEbwNyTDAwaa2AsuqR8Eu3QhfnbguGdb7mc8xj3",
  "key26": "W5PrtRPM2kE8rmfNk2J8eazZwF35s1ov2VjpBLcf94k9UxBeW9qGSPb7dXp23MTniJDFWttu5N7s6GCuqANHWsc",
  "key27": "2jXfCGdSDsxA5cT5pD9zjHqqWfrVHdSi56ambbxsq4PGQ5tkBWH3oyETgGYFBdhEZt4dwEhiE7zCP4acUWZ3UW6u",
  "key28": "5nP5ykUZbcmu1jimdd5Jyhusv8buC1UKscqgcFQ9LTdVuzK1rPo5if68S4wUihjFKjrMqh4Z9etwGoFzj1Ys3J32",
  "key29": "2gVUxS6DL9Kd9HdUHXGxf3Nn6Vyk84krZYayV3jFQQ98Dv3SCbtSuhNqLnq4zULr1cnZqxgHqcfXfdh6DiavBS7k",
  "key30": "TymMCjbtzr2ZT6idThuUh6WwsA6NxKuu8EUFATRdZjMFAun1v9m8VDiKGeMy9dJ6vTJc3kPe7Lqu4K58s1J7TzW",
  "key31": "MJX6GWpERurazaaX5C9VVke6mTSx5vy2PP87EM28DMK9GVyF12p6XRv7wikH6vie61ZzLhBSgrcMxsxipXRsgZ8",
  "key32": "5UJ5TJjmCEtpG68qwJmskpjJedAyZEwdxN63Fj58uMVbQ4psPNFEenp5kanWDS2Vs334uuUrCtvxbMz7PvDB1XH3",
  "key33": "3xkzV4RT61Gn94rRq2knGBZcCvW92GpPfAg1t1HWcSjBuDDC9ZJMbP9WjimJ3KW5CptHgjBEHcmEyiKCurxJVpp6",
  "key34": "4aAvkZsMPn4H4VheZ29qWsj9zyrrg5BEBmAnS8YXmy5g6EKS8vpYbrP23H2yJBzdHFjz4Tuex9n3pzphS477MxWi",
  "key35": "3ojJJ69afkDKrxtFAKFQ3TnbrBif74XpXDJWDL6uVS16hKk64jkiPFHnKxRBzLUm92Mbo8eKgSPKRbyyKMsnyk52",
  "key36": "2qi3heNMiUnXSFFp7Twsuorq9B6orridthNKWJ9D6MYbpwDEgjwCz8qHyja1duWNWcHUSdPHMruZrfNRzBnUKfK9",
  "key37": "4o27LN1ZYdVMusDzePpsu2CEJJBQYh4r3W7mKBnQta1NXSCWHqTBPYgq4qgJbF8os6BQyDz6RxY9codXKx5Hy3rC",
  "key38": "4C1cL1vQFTgZ4RDawFfzBVCRkpydKekvfvH4zVHKtwdZrANeUrPLJoeoBKD5W2PfMyq8sLiQwcvaeesVhr3jrHxG",
  "key39": "3cdfR4T1wnQ59r6NhpLSUftkfQeGVrby4c3KL93Tm41eEBg3cbXrVLeV9HA8my7xs2jaBrSAHe1k1WHhnxKbSv24",
  "key40": "3oXTo1Wo8N1SCAQPZdYCF7Pm9v8e3FmZJzbgUvGHfpZ6eF4EytnftnzERevHCPCTjHa2ve4nBwGHHCjbeEtbRoJZ",
  "key41": "5xwcP6UitSmx8eX9NPzragzQ4uTkLPKqxJnHxwwTDfEi5vdWMAV19MHhDhMgWuBvJxwKvAFZjZbohPj9vADrTcER"
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
