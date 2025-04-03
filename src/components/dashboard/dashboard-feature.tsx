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
    "2oRf1mC4DfJn9tD5mRD8bve4Hd5zo3wu5SsDCsnxKteuZ2uhMB8GwSrLcaidSvvdmj6mdFZMkGP2BEyfrmXCHfu4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AWpmAL5RGMRnBBy3QK4UZjbmoYjyBS9jNtvVHKZhP7VNA72WP1YfGb9GhW7PXNtduYs8pFMD9BeC6zTFeg3MBsS",
  "key1": "4PfCxZV6SveWXAfiyvQfe8SYQiBhHH9sA6L9jpF4DgVVMNxXMxsDbd3FSggXbQ6TWipAv9JzVHVy5gt4f5a4sfGX",
  "key2": "2MdgwA5G4pGsZL2fgmmbh6mGJdmLx73kX4KvXYpkN8Bb33Edaqs2ufYX7MLUv7Mkx4CuWvouEQSbmVgG8iKbMhw4",
  "key3": "5QP9cf3KxMS7vyxN5psZMXZMoXUWrM6ZobSVq2qKj3n8N78qRoBKZo4JYhcVrArydcczSkrDHUbp32pP36zQeSEK",
  "key4": "2o9cLGeZDvVF6jS1iedPdWzCDqd3PL5H39aCh1miMoYE8DwJcNaHawHQaS88eBZ3yMNw2ZToCeqUo34DLdkedSaK",
  "key5": "5ryddWmRxZHmyTFFd5prAAsdA6A5YUyWLyQYkZc2q59motSXyRZ5xyo2xjwtAfKLkAoFYyrHpwJK3q7n6AGMV34D",
  "key6": "3n188pLt1pgvxZagWy653fFSyPAGcGFZM8eq9Bo6gMbcYfEB1cLMDGcDC3rw1brPpGEjBhmeChvait6ZmMxzVBVu",
  "key7": "4hbNC1jv6gFYCY4wh7VH6ZAPetHBUAhr4pxamcRaP5g5zo1XwbZD5mZvaMFAiCk9C79xTk8AEUhXcFyU1jkTjCC5",
  "key8": "3Uh8DYoTyK3sjBaTGRjR71ZRMCruCeR6r4AhMitFeV2zzwip1Sqn44jYTYhZjiQo9aMXN8DTzCXGGZAhM9WR6peT",
  "key9": "37Zv49yYtT1STX8Pv78JCrp4nf6pvU7A6ccZzoxgFqn62FUMrLVxypYVKLasvF7XQ2oenY7d3QynewAi4j2oknpj",
  "key10": "3U3MmJeHc3kzLoQvSM1F6PauUk6AjzAgu9Er5iBD43fMjiW5uShZ38E6X9PNVvmjoLB8cE9jkocCj3U1FQG8yuAR",
  "key11": "5dv8dLzhptyMr7HimppLaqTNJyJRKKUV4Cvss3XRj55waFFQ8mCxDznG4EBXgGcQTvjHktTfVEoUToZ7rZjQYC7i",
  "key12": "2v8DQWCVjWgDA4MgZQ6H7pHrYwo1WDhPqrxYfLQkyASduGHa3XbFw3JAggx724UhiGoUACLeVn46gJtPXd1DCkdu",
  "key13": "3tvWJuu5SgFpTREPHhppbPCnFtq1DeYorLoUt1FpCfbtLmJkkXwqH1szCWoex37cFjhgKg17K6A3xbnapaAf5aCc",
  "key14": "3JzH9WTvthSSBbs7hRCV4w35SZ2wtgRU4JJxBjYZoBZbUT8Hd3qMp5w6sfvzofTTzZstvtUhvhR7HtWzt3goKotj",
  "key15": "4dh8YzveTD9kKdjUTP4pyMgzjJyqzdmxXdojB7CJWB2Cmoq2nUPCoVRne2agZ4m29mRf2sqafAhhGkhvtDvTF1op",
  "key16": "5AhmnmDnZsUhRv5jbiinMwdMNHWtjTSfbvHcqC3NqxUweWWhfsjTJZrLYsapXrBXuZNM1S7ogJb2owEvGrm26iom",
  "key17": "4t8P1ybbgs3AjC9MhCs4t3XpZdBPSRBkNLxQfdpSJ96Wbb8kU8Bf87VKJ3pXg31swjNXecKBwYVi3AgTrR1kzFNB",
  "key18": "2aUh5p96J3kt6JR3k7gmawTgWZKk12ujm21xCNWsW6fYD4fTZUtNS53otnxE8tTGKZLGMYbPRKf4eYU4Es431cxg",
  "key19": "27Dkw178jSvDyj3AJEFbhKNSWB4mComFmgGvt8LB7sdp486QG3uR3WoULW3uSP8s3GNWjrmkzs8vVrPEL58VJxsT",
  "key20": "2EgppXEcvhfMhhmXczPfXPX6QvdaFf5vUSHBZzYX13YBcTE9rVskCmWq6YE9zitF1QqJQMen1pwgGNPJSVvLSRJw",
  "key21": "4UDvx66zyJpbReBx9pjEnwbZTZomwCYqFiQDW5brqtYFgzLsJQsyHs9zHbq4GtQMD2qYDsgW9PHPtsgN2sLhkcaq",
  "key22": "cEK51chkdqFCco6XBLKzyDqk8hUmuesCSy4uiLv4ZoXyoWsgBNQu6RYFtCP1N6M15ASu3LYJSsZfnXqqnNEPtDy",
  "key23": "5UeBAXyM3rH39iQYdcq2GFRy3MhMzf1kHswPp4jo2shJLjaJ9pnw2jVqYu4mCZHyRdVrcsFWBnbjC8CZehMH94Rw",
  "key24": "i8L9ZwCEKdX6sYHiAjfPnvACJEVMNoVuj3SLKRnbUjQXEityCVWEpDurj14uXpUzfFkfQ9TNKCqckw1sqkFQBpg",
  "key25": "4hFPwGe9vLePGXJpQ3C8Udp5P6rgUpWMmrywQeN3m2iTpMd7H1BfSv19JndNf9BcH7ututtKKLa2jSAM5mMQ57hb",
  "key26": "4nR1sjxR5ExfVZt7TRHZ2GHGLiB7jJFfJV9CpRFn73ieNF9JiurJeEqsSTXScredrL7dRYE5dYsGM41Q44bjQnNx",
  "key27": "2fjH7YxD44C5SzSEZYKu81JDGNDd5M63pbZNjeeenFQMsfVD7eSz9dy26i3JYoLvNy6h6s9TKm12wStPFHh6AFer",
  "key28": "XLnaxPtLkZR7auvTTQ5SG8FRjTfGZhJJK51ecufRJG3Z3QsjWeBqeChnET6N4T4py69UNiEM7NDTxDt2ScmqQyf",
  "key29": "5Hx2TxDSjH4UsTiKXi8ipQT39jUSzSxxhR7YL66hmVeSXzvCqucQ8t6mokgh1zFsufSWXBDTbhqBedCNtojSSJZh",
  "key30": "7hMvdKH51D3xECNGnYgUD5vwG8wXyUdhuFCcEyN2scPtdDvzkS3hrgDJGbnaKLDTEd1tn5pJKa6uuDTvmBQMf6b",
  "key31": "4pN3WNNguuVdprhevXoqb9UUMtMdjWnEMofKFwoEMk9jDbWExpKH1eTWzrspSVKgwazobNmSSBMvGhxNXJqhc5ZX",
  "key32": "52TTtVbzP1J8pE8FU33dY1EQpGHc1D99gfXnDiwzkFfhtxDGWiUtGmSgP2hTse3E3eUhV7TBZeHgFAkoPXUQP4gT",
  "key33": "3i1abNkm4ChLEsWYmTFdm3NTMNWtbPymzZe1hoeqhS9iJqUkezT9nyDq3LHk9xYfPEbQySFfqwDLCkUByKuU1pcv",
  "key34": "5KWff288oTR6KVd86547CxGwD1Juc4ZtXDLAb4cAvGZJ2hyFh4RLh2SrRMsXVtro4wkm6CKMMw8X4YhzCeuvMvZy",
  "key35": "5tsigHuN985kmt7LegBxvDQNWcCcB11jHCxcjqhAmqR7MjJKnDyp2K47LPXyymaiSBNTQ1owT7epvQaXebxNkYrW",
  "key36": "2mXMYwg2mhRwJ13yjiZp54jr2ZYjd1LQuQyEigmRA5cTHMXTx8V7f3k1JCWYuCJrjJxgnC4y5whGN1eDYGZZLmAG"
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
