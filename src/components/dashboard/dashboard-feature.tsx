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
    "4YAHq8V22A6x6C6d7Kut1vEwHe7mmcJq9BKjgkhokxxnDrNn6SGAprmyPDtwmwry7CLYRK7gcYhhMYeJ3zYzJZ2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66xYxMBVj7wVYdxqtGiDAyujvnLAf3Rf2XRb8hRkMUJS81Sp3vXyqUa5nSv2dGiJSzQ2522cTFwvVq5CjxR18JKk",
  "key1": "31xn2iLbrH5F8LNY4x6Yx1im6fAic1LCicy4CFq22nvor5d3TLaR7YVGeKqPu9eQQ8sxiz2kAzzXvS1Ghj8JNSvX",
  "key2": "C8dG7GZyEpxFdWcbeZmM44sye6bufbfxxvbS1a1ppwZsrsDBMfUbckLpeDUTHKjh7MCq9ntmbYxfqNm31CzdV1p",
  "key3": "3ysi98j1HLnnwePdULpKUBmuAHd5X7f6t5QbV8xomYj6G7y9mdyqFcVdMUtwsTXFaVwuHgiDhpBTH9uNZQFiZLzs",
  "key4": "5KcJKdh3aJtBtNZZvQ1WBJb4s4eNYhTR6H2QPRqHQrsvtKL7HftD4LoSWSChQhoqGpY6T6X5Bry5yzGqAzt1h92C",
  "key5": "3cGcZe88dUKmXKgf9mhJekFodUKvxcETk8VACeZS15ZfENbFu7an61dj8fwPMpyWRMNdkZUKxTBjSQLVskpjPSE1",
  "key6": "57eMtqnbFkrAfum1BejhoAsMSKiRrrEYwY5M2sdB6A5RVfYHVx2rqpUeSJvSjPaiUf8D5qqM7uQXo9CkEKgGKsHj",
  "key7": "4ekhwaBnm4yukQtUKVPkVSASPvUckLUpnVsJ4t9phQB73PNRjLjUqbsZhJTCB9dNT8yLkzzMghaZcbK1Xf5wts36",
  "key8": "5xJxg8PeUQ5Hdv8e2CaPsGE6DHgwhVTETpaL9LFk715LmVKdgyTogJuxR1B9ziiDY2LoqWU2Da434wBRB4bwf6rJ",
  "key9": "2QbxK4sYfsCj7rA1A9YGP1HW5YYSLk6osju5spvdkNU8B3kA3a2WUvyHUd7iznPotmGERNrbbiBqiyckssNkiw5T",
  "key10": "2SfyHH4k8V8EdCDuv6qwjhDpcBmxcrRnPKtScXHjt83fTgfi1wvngpswYPSTei1DrdY3N1rCge3mb2JW6RnnTdxv",
  "key11": "v1yVaQ5B7zdkRqfapWioSZZYaW9XY7D2ymYbN2ZtNZnBtE452DaYubkqESPYqrsEeKSFQrQ7qLQr6Qzf7Xg6hsH",
  "key12": "2tuB8hE5gXtY4ZCfbm9t4qCqkWK76wxXmRGXVqdTHFNs5rapuP7cmVhKT5x5px8i17B4sG3UVdiaZQAiE4m62Yy3",
  "key13": "4FaXsYor5AJebHA7r6NGkU2QL9eRcmQPrLdLtYJhEwj515HZFoQT6Numndsa5tHdQyGiEirddi51uGxXvaHq3hm4",
  "key14": "5Lj3HsQcWiyeMbz4DCSVDJDUco91e4Q2j3xTxij2QxdVVTqM8nsU7HxesoYm1zeoMeW7K6iHdMQbdW6gGq45Xp5T",
  "key15": "4HssidMMJUUPz3UN2d2jBQuDnYZbSp2M4WCNSdJ4beqQJ4cSdehdrj7vq92PXpcJDhPsXjdp8GdpUpKpCUt1F1bh",
  "key16": "Wz7XKwHSghvmPNcqNSa5ygTZo2AyBRdDk4N9dKyWoVXywYG5N6cf493QYEDKVN5xvjERJ7suyxgrWMdLyefRWAR",
  "key17": "3wurBFQcgGcCzSoE9Th5Cd29fWqf7EBnxkVa3qPnutP2Masp5BHzWV98Hf2iwAWJi4Y1w5YkUPho6b7LciNXqvfM",
  "key18": "4RCT8c8YY4T7gujKqT4PAu5rXsG4A92CKt3iCsKgVsDqE5bLMwi92gr2ai77xaSG1uDnkUZnMxWq5ni6DUdWcCL8",
  "key19": "4rqHRJowXExbJva5zJUDAQFd3Q6dDhTUmX4BpaCasD5ArZaN7TScRPTREsUWeNB18NGFUQY7F4WiwvdnKyXRmw3n",
  "key20": "29BBtHhoQtdBf8YTpkAe9WnBoCViuY8PT9c7KyhtRdwhdJZAJ8oFPeMSECKT64SSLEC5jS44cp1HLBm2AUaLMU87",
  "key21": "kTTWJRqKdKoyDYy1UKmgET1tpX31gmPWGovMA9CgAQe9aWh1ZkijpwTc3LetZWTzwjsecd3vePdfdEDsokBFPwt",
  "key22": "3W7VGUFxkZhDi4VZRPNM8S7PAcDHFV6SpyTGebr2zN8uikrfTd9CVbn9YXhUDhxfejX5Q9iEXRpS9Txb91YHG5We",
  "key23": "mJEcmLcaSh4L89JqjkNQT2759kFASQbnNU8TY117EKPSszK3fXfZakkFT2KXbAAEQnmctSQyPz2rFtp31HVzZxv",
  "key24": "kMxna3HuJScVJMYt3J98fsHxVcwHvPZZUf1m5Ez5C6AcfR2S1yKkZoT9EtzQiVXhppgHXPXS5kt85ZuCCug2XGK",
  "key25": "5As2iGTvR5o8UeiE7frFh3dBTLCPTaLayTmhi61C4abZKaTQuoi5MZVSbhfW1PfM6gVHKocVZPiaBgjguP66srvB",
  "key26": "cTH38HM5o1FFEetrxmsS2MDemVtJdvCAs9r8knfuJgzRLJ1KR2rF6tvG4ixKoLdpCLQLhhbNZpANp187GSsQHCF",
  "key27": "3qVCZ9SXyVebGaEgwMydN6WEvdwvcdwCU3Kv15xKV2vyFvaT9XZNdHQA3sB3wu3xy4C9sMCLwMgTgYrBG7oaEw1Q",
  "key28": "5cTy8Tn9omDhMYaPdpcm17ZxVUpsEDZ3tanEbWS2C2u5KTWh2QvDpwcPUx4S9kRDXVHHiD1uqDq1Z6jJeE9xDHjy",
  "key29": "3pzZfcATSfX3WT8k7w4wVoehmRFxmt9q7c4DSpN2mwYaS2ijVZyWtY5VscjWt944hRSw3ivYJf7wHUvwSV1KKbi4",
  "key30": "w2367mtjmtUftN1Yb7hBfRvuh65XKpzCJBKGHe9tPdoLqdt4WqjCoj5WBXXU4ii2V3BXbrwv24VS9mFicx2W61g",
  "key31": "KkRu5uFnQSYJiFjp3bCRcibcNBoom8c7CsjQJDtmE9uA42o9HjGTu13KNaneg3zRe2HcHbHfJXj591BtoDkGBGS",
  "key32": "4MXsZyXakPEtLyN9zL6ixqUvbZEYNfRA9X7qPBynLkAezyGCnG162Spnpm643diZz6bEe9YAeSdxkQxrv5FQ3nKM",
  "key33": "2ibtaBzAja2sQafvQsPXb1neDWckuwpH8B8M17hgbPFRRMLq22SSRv5HSKQBTpefnXZEeBDLsCDLb3PbidZAeWpW",
  "key34": "4HerqHLCy8ddGTpqQ1H7dZHxTHKcZ3QTs5chTefSPjKsoWeFHiF1cVowQ51qU6pbSbBDoHYsrpgMwQ4qt5qXuYb1",
  "key35": "2XygZM6HsroZLhj7tbwrpd5q9XhBJeQe97qj3AM85crvfdgH8WzWWF9eHLPXLtPtR7DPFGeqf2cfwX55LJ6RY2ai",
  "key36": "5Dd4KcS2KjZwaFWVG16nghdyr9NYgga9XXRyxkU8gBCGJBGTnikvizW1ZjSVv81tSkADo4enpajpH13CvxbK2zT5",
  "key37": "JaLm6c4YExT9WNhYEGmby4sPjfGkJhDFzxJ2hAWUuPHfWhvcdjYmRqWwxjZQHHpnfKo3mTK3K7BedFPpnbZDSV6",
  "key38": "47p3woL9EnC9pNFzkSaqGHhvr8uirBA6s8MwH68vrbnH49X6JPUqhEbXZuzwJe2syfNmosPHwyxUHbW8RPocUgxw",
  "key39": "War8Ha7qY2SXQrKM8xrsdufcJAYmCLLQQqsVB7UN8kx79t9QdgDn7DdG1skfkffGNn3h8PYLx2Yoh2JGssQdyg1",
  "key40": "2ZVr5NnPYLqMfEoxYjqGWP2vej1GMLkLBJzCJPVFPbD4XkpAXySDem5KFESoSxXmCBjLmyVNdaEj9myohcVme3sG"
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
