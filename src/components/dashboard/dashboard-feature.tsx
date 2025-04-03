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
    "2VPD72EjkLEFBZspJBLUu8nPXk9rUJWvnFrtjYBsv3FQhYFMRNwAqHjSDhTsMKgFdryE7TFsYZPVTkxELAhKf56z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FABub4n3FRm28AvG3MDsczwjeL6fqBhi6bj8KpbSFT2sTAP8AYx9EspiukQ8k76sy4zpUE2fYJXa5TXH9prc4R5",
  "key1": "R6ezrd4bFo52tyh9bQrBDGEY5QyKhzFvSnJ2oyCjwXcuAzyxJswz1xQHGphRx53uQ1zHRHy3ZgT2gz586KCxJPy",
  "key2": "GNvR7EKyjEZ4NuZDuGw4PSsujQeqBnKjJnwEFE2q8DX1Gpcrb24MUDCswAXpD2VdgPZGPcf3vqqZHYFaR5mqenj",
  "key3": "5m15rUxuYmVyxJ3mEzF3kNbNV7QMeyz2HbSP1VK5NdWsfgj7tc92DywWmixrrfrFMCqWYVq8XM1nZNXnekJDbtKV",
  "key4": "2DDiRmEwqLMd5of8t4rosoeLrgePcbHk2NsB2a6aCYtFGAzjJ1BcC2buRfWjv2NUknT4XqSdvUCKrz966xJUkfY4",
  "key5": "4h6rmL6EfEpRyyC4Dgk2GBQ6FufsYG86pboM1FXaw3MVtJU5UBZAWB8EUYKXyawCaawtTuCg28uYJj5jMNkNsMoZ",
  "key6": "3wPixeCVkNd7wb9uwnZa6aoaKapvV63Tc6eVyW7vNG9ZNN26r6FGo1EvfWcwZ3Ey3ennU4LVat9eDJQSXy6BDyZg",
  "key7": "2Nw4ELU2BTSFRnGJj6JobvQVgZ7bFjdtYZchFZpnHh6zcY1yVhysAjKxZpnbyLgU5Aauht7dy8jE6GeFvHx6yHVj",
  "key8": "5UoN5eBjSrT25Gfbqwk6CVUyURj6wNMMkcGdGWaSJdTbhpH9U96BNZqbDSFDtiJwKNqAWw5tsMc7VqSJNAFMqUg8",
  "key9": "QbrT5TJmkGaQwQbh56UFaGWNKVm8xauUiaxVFntmaMnvQgqQTT4cEEezT5wd7sAq9EEVFJX6SdFTa5NXtpH8vcN",
  "key10": "zus3eqj6AAjk8yZncmBmjsqDrYEzJ3iFE6tNmQjDMgNgFMR2wZKK2JXNi335rKgEAeCuGUw1mMznfSJwWbavEYx",
  "key11": "3rzc5EowmUDVoJotyw59zkpNDehxm3AwguSqHTdUXr7jtCJzU4cikGpJ3ABbaiJAaMeHAoT8qYRqDuw1TExTEhVa",
  "key12": "39s287tgxRNzNTBTFER1oX5JYBGiAFwChXw8ZEPYB93tPMG6mxgpEya7a8qKkFrVMSXpVRyTyy2y2cBtdEwoNjeN",
  "key13": "3MrmadL4juedr1JDatb51j6N8hnb2KzzvVUwDNp736xgJ1uD5BoPua1WoA84FE17vBQsjAW9CZqLLe4pFSJDkXZe",
  "key14": "2jA5AVkjsQcP89b6ZbtFJCr1Q8xCMLdHMf8KCvY7KSrS1muxek8EiuuQcXKhBiesY4Wk1ws16Qj7zZseMxmSrWwJ",
  "key15": "3cHCpy3LpTMgYecNGeEyAHQxTTBkchXJYY9zdfL2S1YaKTHE3odjUz7m6TCtKwBnj8r7S2Q2hKhSRZQR9VRPXmHp",
  "key16": "5x3r8QX3h6hQ2VPBdQn3idgy4PyqcKs8kk6R6iBiZQx3THjsysVdD65epxcAjNYyhyV4nzrhZpdRtJBmFjDAD76R",
  "key17": "3y1MMop7CjPMnT3LEPzXbU5PLLnB6Xzdy2P47uKcALAfmu27cvLzxTait92bM47UuSHfBcaz5sy1GQarfYAGEWSf",
  "key18": "5ACpWzGWu9Yjz4KfeSz2J2irA9BdwmcDdkZjhQEB64c3tcQffZdBSyvq2DXbxMVQBFE7qU16pnX7g5YawaR8UwMk",
  "key19": "4fwUSbnqZr6jSAYnaJq6qsKBVj6UBH32dUoGiABJDQmbLmdLeJFPBfymdDC2Tx5gv5BGpbJE74cxHMLTy6HH26E7",
  "key20": "3VAHQmi5tSjwzBVv9Jc39ixEVXCyVzSgXoVUysFjwgLfEJcj238FgP76L7SEBPg4hU4R8ww9FQHGAuCZiaYo4mVo",
  "key21": "2Z2WriDsTdg29FE5jARmtKD6Sf2P8tptw9RnUyaRSeRVR8i7boMYVctq7wSvzgswseDDpL29JWQs3yp33mp2fEsr",
  "key22": "5kBWhCbjAtnyg1xLW8qSXTqjXB5MJfSqVQTMRqZm5iwbjpdz9u9y9Xa84GwnZygwFTkTTmgQfrV38bGpuiDDAwib",
  "key23": "4xgytZ1idaGGwJx1iwzXw524A8DhhKAQxf3Cu3WH8o6aarQpdRfosrNTmUy5wxc9Pb7DFEwUzcQErBLJ6czr9iLV",
  "key24": "4ukAVbjXaB4TBiMytqv57VHETTfUMLGyyFaTZbVvjD1RdVWPnCARaMjGym3B12zVJQjwHYsKwVxJovC3VxkZeH4i",
  "key25": "4cgoCA5KEnkFBbQpAkKrTAiz5nnfUKCRsV9BrhUkMYNuWA6qjxc22UMbPqQHzcygRAoDeyG1udagwzvJdvt3pZit",
  "key26": "rji6HKcj7DHNobqsHdiNjBYQNHce54LVsAASx7QEPD5mQXtwsNWNeD5wEc4qNhaCEFyR1wzV81F7CPrCrVtV8Cz",
  "key27": "5JUu7VDjjrCQSPCMyfkGHzeE3wKj1kBC8naQsE5DWVGur2dckBNzMTWpchdrVPtm2vrnvqkydUFhNyKeDBRnM73u",
  "key28": "5gjmokPdbizje5sxEy6tGwXb1BhcDp3o7SciJAWBLfAi5pyb97t6AL9W4hNRhZzbpBS7ZxCXN2vjBDaxdQz1pPjx",
  "key29": "rEQEkjE2uHg4UuZ6zYCqGHeTirWJxiqLmvkTkKuJiVjy82xLw7YXtRu2KEmBDG4FqNGCXfhs7XanYPEBpNZJmGy",
  "key30": "3NXz7fgRHw41jS5jwfQJcAj6mvimwuc8yC8vm85beDrjcRbUWgVkUmTgACaLtcsSFeR37SYTxPUN7X9GyQ5tpVfK",
  "key31": "4WoNdLtr9jsk2hpQQd1yduurDqH6Cg3Y8XVFju8dmH2RgXZciWGsqHjsynstMAdLK1tu3P2cJ8hAVj7Bi5ocV2Bj",
  "key32": "38xZKy4DPgV426SxLxswgp3C9QVdq1fmRafauUJMQVUZYw8oSKLgCXHk93iYktTQG575SKRPqKcKYb9z48qjc3zH",
  "key33": "5Agi9KTEPmRS787SXWZ2qeKgm7E3KHo1bgCUHyQqHcnerotKDXrSDT5pSVsTWZ5z8F2nETZimkepBn4jFxP4W9zg",
  "key34": "5kd5yFxFA8ZFMAc1fw5Vj9k1JvPzJc4VmcFGgWkds8AKwWy7PfEcBBDQ9N4MGaCbzyGdPdwarTjEGwEWcw312RYe"
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
