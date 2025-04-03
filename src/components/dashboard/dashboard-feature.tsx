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
    "4QXThUkPKc8UzTScrZagYfpjykhxvahtHEn9SSg7DPZxcJJLAHwBmFpEUPnqLyfo7L8sGJ19c9VQZnaX7gKWYDrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oVDgKMtSMwrcpXnzudTjSCAD4gchLiXPZnhmr6cBTPY1UHhrpShdA7ZtTowK5RnS4a76ghcTaaaRSGq9xDUohGc",
  "key1": "2TevFNKGF3FoSHMyDaC9rqJTbEUoDBSbfWV9oGsGimEtADRzcSNaZkzBAaQuCGELpVoKjNs51bZ5cPZSrsZHAiCf",
  "key2": "241qUzn2MRo9cGKQr1tAWDrCCGhmCCfdUA2UwcTB93LYVdKyUQjoC2NUtcGqxTLErGDWjE6uLLmVgB3RVcs3hWHc",
  "key3": "2NQrKHAYiYiSjKS7y9Tr6pwE8UqSNSi7w8ayYmaSEqTMBNSzBgLum73EkEjyTYEshFA2y1VPg6mkFLkFPjRvAGfc",
  "key4": "4fMg19kTYcrB8b1jRQCmGvZY9UALRUEJKDVr5S9e4gBikNUqcfpnLWakaF3LMaN8WwaSXSjA3YaCFbukQUbqqX4w",
  "key5": "5JRAGzaoSxWPUC41dvuuDJkf5HzTrCgo6U91uLMGw8asFFtxT3hw5EFvjYZewQyPd7GAbB27bTUMvzcoar3SqaAr",
  "key6": "MdssSsEFHuBfBsenNNtSApFgdGP1Egv7m85onErJVjqzuo8UjbdsK6Hy8h8HiXwPpQTxRDbcBC89vJx469rjoxM",
  "key7": "2MAmiJ3J59DR3vSCqt7bghhg6ap32ovdnpcNTyETn2zsHpdjJrUnejWv5NHoCHev3zYmvqVPQE9YRs2K5psVD7Q",
  "key8": "4e6u7CKKJQw2ASu6wh57uDmU7mcVM8rRTWjy3Lyzoq4VWS4eaYeqeHSmcQRtXhbChgEUsVCp7huUEaAGTKhS2334",
  "key9": "5mybRnuLJKvaB2jrWzFTMfmCF5ptrTRJkTSJ9C2RGuhj6DE34ASWTHNVzFVSyTrQxuAwSns4k5vgtmq6h2Br34tc",
  "key10": "4XrR22gQsMLZEascGHy1ahPr4L8q11Hfdhtzsv7M5j2yZVGGdgC8iXXEJesuSr4u4jNFJZGCnKE3z8yXxteQXKao",
  "key11": "3ukmXrTfdSBFAqXQT7qEhVHLSFMhH2VmG3zHLiC3eJfvSuhQVEgLav8M8eNswSq71ddZincQnvnbZtgo1RYGwA5m",
  "key12": "4kFBbNzNcQZXWw7UXiyUchKrCcQK3t4FwupNpJocpsTW4J6b75rcHCsR6mBpB6LRvs2D3XxqoD4tybou4nKdPtwG",
  "key13": "zgoucyW9WT1wvE4egor2WU5D4m4sRnkQB3CYz9eH58P5KTKnH4K9zaEUwpVUPw5oNRJR1uPP4BjL5aua6ePHLpD",
  "key14": "5Ju4dt8iXHYFz8C92BfvNeQxihSKp6MsFzHxAzgc99hE9UkgXEyqLzfH6wntahaVxkgE2xLTji5SPKsrKQYLjVda",
  "key15": "5WCYJZMjBXNefN2ztXd61LzrMmWDBTvpnzMBUPREHwys4knaUmtrPwxdA3anh7aP817XzQGaujmoWrLWUwZqTrHM",
  "key16": "5ubK1ZTBW1kLNrpyL7otCEQuuJ6oAQwXSv3YhXuhFdQPsuactFCbx54Nd1x7SP4CbCcj8n9GJdduXXuw4ng2YRmx",
  "key17": "ufmpBb45gornQZCMmN9aP13pmdZFDb6Gf1dVCWSFMCXJzSXVyR7KUQuKPRVvgxcvxEqQoChTh63SadkUX6TcTyQ",
  "key18": "LYLB1ShsmxE8tBQsefeHBBUR96DCH1k8kj5KQvFBN3T8T73XgSvzLnxFWuACJNBautMSDsW55nVe8gzA9ZVt9sQ",
  "key19": "4SQf7ZnxDMrvrdHLSzpXfuyay3azePMgSiuZcvK5Ba62osrHyUrs15wGa8mT8Xe2BFVicqLvELoGyqrdTNWfAuAJ",
  "key20": "3Gv3Lg5VyuxRVpjCRUcRsUwQZvedFUHznkWc9R3A2neW56RQVTM2GGcpEa1wivZ5AJjtUCqdyGwBq5kuN5GR1NQj",
  "key21": "3mE1G1LERFvPg4cMwDa1xDD5LQ7eFXnEEgXh5CazxVXnNQYqhpVpuZRYUn2CuTx97kGhQYFxvq5B6p2oQ3hAFgx",
  "key22": "57KZH6gvJS1CiznE13NWVSemq3GA6UUr3HHviTLcaYBhxqeK4LAJ3G2wLfraTEHcxdfpyF5T9STqpguqPHPwaPTW",
  "key23": "4PGNNw3JCxnH2ZwmCpmH282r5AUcAdQTWQ3ko9esewcJULYtxhy5aGbK5ASeUHwa88hzSnTnKdBvn5pTbumuf9r5",
  "key24": "29iYT4biMQnNhDXmMaYk73uMBdfztARMW1qkHtSQGdC8sLkvV2ptp7AwNqA8pPsE1E4rCoWYFroHxT5dcDEJpp9D",
  "key25": "345camWhX5zbjtopsSN9fM3q2WFSxZtZPAhDFDSqXtcVWXdFqNrdZX2d6zcHFZbtWS7q4pqywP89Jk27PhxWMYaY",
  "key26": "2Z82MtzC4D82MCcKnzRCQyhSPbGhBrLakNabn5wv3usX9QkJNQMzzbR8KKcDL3HTWLW8vEaRMAn27csZFqhXufQv",
  "key27": "3fL4jLmi2HaEA23LHacwwKv7JLkwv7UT2CCzyin8s9Z93GrzikJjj5JtrEES8qctpxBYi6PCja79q7mvWsmxCL1r",
  "key28": "3UrGPuXFrKXcCovPCTDQxpaLfFd84hG2D4WvJim1G7gmBTKH3JxPoq6r5kkoFK398zPxdgNfGsCckRTrcwAW7thw",
  "key29": "3G5BmZ6gkALFhXtHnYiutvQCqvCFAFyK7wc1nVKCdLrPyHHtvXgsfjKM4wXwFo3xa7csH2okYc27CJCNpRScsn8J",
  "key30": "3wJN5d3pUFXGQB5LTmxvt6Szn9iyhsKiTvRwvpSDWGpCjjBKxDb74gnuxBFEEMNNGhqkgjGNpYZHLpCt2T9iSsS",
  "key31": "5GMCnATuywsA4QnakfQrbrKcWnasMmQC6KMavSwCF4f9DjvauM4ezXqCL4GoEdS3yaq1x95LEH8pg1WiHjaQ1mPL",
  "key32": "YqhyKL2aUMm3w8BrqhmFugeAWknQo35xtHAXx2YKQbFjiprp8HBcrv8bknzHLuPL6j6h73UL6LZqxeChzCD2QUH",
  "key33": "3kjEf4eoTmsZUY4DYwZpu6LTw4gg4QAcwoCUZCHM5Ue3644b9sytoJENFffLP9m43jYwk33HYExmh4GiQ41c59k1",
  "key34": "2c79HTxNWtWReDAjmzgD4BZ61wTaATjUqz9UvKzcT4gH6jXuxUs9B7tWmuVRAgjM7ZgfrTW2WuVT12UiMEonBT3z",
  "key35": "3bE12xM7kuEaxte1SvcWsU85yKskdoAgFgwkWmo5ZrXEdt3bzrdBYrszBXEJWWd9broRXiZvRyQSypfoH1cyYEvb",
  "key36": "vhqhfWKUeHHW6CJwshTmZivxjqhsFwo4pNrQcCjv74BzP54Gb1thMsMRuZuniFDzsfCwxQHRQdU5TQKKd8GRbFU",
  "key37": "5GX9ZgSPfKCmREzQTCGQfMqVsqaY8CKYqmvDMhwCaS4UiFVgZJhzy1QMyBSxE1ndMWpTyBzG7yYmvjtcY4xbUFdS",
  "key38": "2WJkbDzt9D49aZHwnLh2kbu1cFyyfwUDyLf7NtvVfaPBkqrBiw3yzSG4zYQu4vuyaYXu8uk48PE8bgEXcmWTqVhh",
  "key39": "4uoubrfoyeeK2oLJrch5yZ4sM5t97yKpWzf37U8f5jHvtwW7UYxn9kkZVriG4geS3Ax8nS7L8qmyGJztNB1TZwtk",
  "key40": "53NDJKEMApbRddmdhT1xTvRMmbYVu3PY4aB8h2nKyVC996NpK3vkVF9pQS7HN2XS3gzkZt8aD3cZGcDAJkJLm4nj",
  "key41": "3NBzNUWtpF7usw6vcuiP5BEw9KAHkyk4heCPEjQcLbQnhmJqoua8DBVN5xU7DwxUhtzR57BFjvFUzvdhzTR3g5jj",
  "key42": "5s94nNSEAQ2iKm9e9MuCTp6JDwNSqRqQkGcLezZQPJjymdSBt5MtA6r58B7WT3J3GXhkmkCyD2bS2cKjUCqxjyHo",
  "key43": "4xt8M5xBaP1AHn8R4yycpEVBDx9dsBCuQbi616GPvwnZEhesgEhtwoNtFhcXazHPqHDnHx8dUZ9MGydkAW3Y9HQ2",
  "key44": "35dT5m5xPDXMraes8NvVD76xmpxPf8eps5Rv2gecaEczyY9kthetUnP4CTjBdAb2UV5iiN98CdU212fZcjNK4yz7"
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
