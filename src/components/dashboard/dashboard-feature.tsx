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
    "2qxYX1EexB3KUowaBFq94kWY1GSwDTv6RiFMjwj92Vky3dVU5ve1qRXP8LFiYpMzqnvHthaGe119ZjtfreXbc897"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JP7cjoTnjxj4zGw1L6Thos92RkPuMKt9qFbqRnUWtFAwds1QE1ifqVunUivH6iz1KbTGD6npGusx1HotXy5QUue",
  "key1": "2TBNqDvmVKg2oYuj4Yy2sGirKpsrWWw1ezdVfohW5eMNohBAp7Y6oHcHkeEQ5rr8vPSdiEJBL9pVMxphg73xF6Yc",
  "key2": "3y5mHA7wojFqThJbqPinYVjLbtke3Y2Jw3pCqSVENQEw7PLXiwXhML1qxR6aAWMLft5KZgt247sEokt7hs8aQv8w",
  "key3": "5dwhWcswiYjPSukQnet1vPXK1NBub3APZu2MrcLYQaPTEyuotZQtBiQByPYPcnamgbgwdZKHVFHAfLtzauscxZLc",
  "key4": "23azYHicH8uPyzPFR6VWAvjEtaJtsqkqGjgX3bRTi9PW4JeERCM4ERJbdTC22AM4ChNd4K9LyVHwj5kEb7CsjKLz",
  "key5": "2sX6YnyejoEPEko6bDHnnwosvQLi92nBREi56mL1FgBeCpK2TE1aSDhuCGksszjgm1hhxZ2cCMcNYiMYkXuj7yfm",
  "key6": "4UqURtFXthUg4ZEomWUx8hDgpaH2VNjrDtArFY97ftenUfn2XJvn6ZDfhyukvyYFHsqTDceR1uveXK6bL721XYiM",
  "key7": "54RmXAYfM7LwrT3YooVBxHWNrkyLQ3hvcsEjq5B5auGcYZxs19JHyvGNrJgCoona9c8ttpCtRYcvRnEERrEXQchP",
  "key8": "5DDscQXctMchg1b944GAas2tqnwJGLjQC9zTSctrupC8Z43uMXsnfPRPx1QbbLShFFEqP3Rqur57Cr8hvKJ4CWiC",
  "key9": "4sGjVm284Gf5xy77rQmGPYu6wwrsAA57varK6nWpk6KnarwW1roBxFSH3MZcHrxiuDTSeLLUGm4narRSuAgpvUwh",
  "key10": "5x4pGB2yybF2iK91ZmWC8ZKo3kzzDsJ9Em4GrkSq3ihENC6PgRZTTu9sMsud4dx5cHrsBM5yhKGTgjEUzQ1ffFa6",
  "key11": "2uiDqFoM64MSmeXMQHJAqey9ixNERFmgmYUCBdGxJoZ4BHhpq3e3LMG5nNKCHsCxRB6SC8caYpdEHw7MeFAiw4Fr",
  "key12": "3ucVxLsv25vn5RJFy9gB3gz6rnzp2aXq1Xj9XG9kyAN4Ba9MNiddUbraLaeCK7N8xKt3uSG9a3yeB6QXYmgw8mv9",
  "key13": "4RYvyh7GuFh7VbtLdK14mjgE1jR7if1opRTgUgYcH2GSQ8e5QeYCdXhsmzQmZueAkBdcUK4PeLgkTMYSTyaRCaZv",
  "key14": "2fzFJjsgaAWcpsLMFUkPe48ZUwb1TuUNfSgpwQC5exQCBMriYxSMbz7r25WBEHfFrpNMkAdGefkNWJnNyapxfYMj",
  "key15": "665P9iYSaX3CAiZz5Zb8PbHdF5RtxcqqcaD27GLMoJJU32Z2YH6Vr5BqYVsZsqsTPjMr2BwhenRmBYRvq5YhNynM",
  "key16": "2KngRPx5AdwGiuUK7jnRubUGPAZNHmdYDvLDortYDAL6cciToRwqTcJDcxkEN38pRd9AHHdeWwP1oTCLryrAaUjH",
  "key17": "2z58usKtNz6EZP8KVyk3xKDTa1uqyYCezxNuxXtUQvbpmve6sW4YiEgPzRckwcrg4m7b3RwpLCSQHNZbhTZB6Ta5",
  "key18": "5Rzbnc4ksbx565qDG4BNBxWTT6mgzZq4S2rg9c6PJqf8quVWUMaymdcyPpu8u2xb8UX9emweWxQ6iaor8MTmRLoW",
  "key19": "2DZQX8FJqtCkoDPJvRR1iBD5QH8F4sKWBxvGJs1iTzT6TpUkZo8uvpkNzinjLaREhMzSQwSZ9g7SWtWXTswuyMbf",
  "key20": "4P4vmRBi2o7muJiwe8K6hdqFVU9NbcCrT2w9Dp8DvBz6NpRN7zsto1UFTHXyVkMLiEhtrw1gmA1uLrn6js6Vfpji",
  "key21": "axQkXYSz9RYRFZYVmRkPSARAuPsTjuaLTEG3hYdxg2Sd292JUN12DWq8oD2FEUsiUnSSYEGS38SkJzR5U4W14cZ",
  "key22": "YyMMDvLA8miWUepLKidrGm1D1DYzzddBP8oBgEt7rLgWFph4aJd2QJGrSjZS31ZgHCm5BjuJxU1net9XFRjH9UA",
  "key23": "51WtfFQnXAkDkfjMGnWKLHCrhrvwf9bP4eh9nsiutNEitY1em3J1SSswp1jp2xhTvjpW8w5VUhkhr655ZaL5TEE6",
  "key24": "4z3zUNtbDnowdQNMYXFtQndsqmtbE12xKuUJzN9kdZUT8ce15TRmAUqE28szQEYsopbf1iuT3f3UnSXHYw93vfVi",
  "key25": "5MMaUKJbzWH7UcsCY8xjzjMsWMfdUs2vSYTwe34vNedSSgtdNbMQTVfqwwBtbuRWYGz52L8g6Fpu3HULpTSAzza9",
  "key26": "3ymnSkQRgnCCdoo7FVnTpJRLUihd4B3Sq6FwLh4mgcHa9UM3uq2t7XMy7995QFT4R17gFWzuVw4UtcpM5M1i7x2X",
  "key27": "5kK4JYrCopJiKpwzMNaj63VVGeH59oaqMHJCxciHfTDCZ3LLtdeWx2Y6Ypo8RW3mf6AcNoJc86NBCzE9KoxLrfSC",
  "key28": "53hs5WtuSg6aNqhoGP8E4ZPyr6PyKkoWNHjA5q8aEczmsJczuSiGN9gJaFyAFxqCp3y8jeVrnRg3yg9fsD3ogYBc",
  "key29": "227B4DEioX3Qf5v2zFyAFLS3x7gdRwq1SbobFNDyAoGNPMffoeBRLAKfyfsyum8v2vAMF2hmhZyjBpXhpPkJ4bLe",
  "key30": "28WzcxNWCCPyYtkkLFnYaVKznD1YRtdJs814hsWLfEiizJm91zg5rZK6zJ9NRuoapA56dpQGYNu4M69gy1HS62Er",
  "key31": "4zLUuZ9QDDsj3XqRXgGFcKNa1MARzSheRRiTWcYsTFJxrAeTAQcbghF37GEeZ2FBJXvJhU6P5AUaFT9tFdx7nAgW",
  "key32": "P9fq3EAxfs2hKGmoEv42pTeHwawjvcdunLcRwaBuS55JgBRHKNHXAvpmv7fzSbCMUkDMaFNuPoc8vpHX9FaRQy8",
  "key33": "3ZamfGGspU7hLtjBKbiRG1UQ3mPYR55fNPf6X4YvSEeanXUQGb7pPQyk7e1iB2ZgufhVTcvg2bPkEArveaQDm66W",
  "key34": "2ZyyXJTptDauX28dP5M9CHgamwZPUQJWjFSa3m5YNTH3Be3Y9tVwDPmPAWVnqnM1ydP4q5Y86XHvKqT7diZJu2Sa",
  "key35": "2fzhiNHQ4MeUSwCuSP7bumoat9SQyhN7madBZPdjnLA4tRbEmUbxRRSmgxd4RWeh7tJoeojxuqFgzJtJuec346gN",
  "key36": "5cxgzKvwNkMjUw7GufeqA7FAqJZYh9XAqvreQtnSEXzjwG45g23tZQ17o3ZWzS8URtrDNTMoBFDdHh3WsLknYc1h",
  "key37": "4kctfwQymCApFvsoCxDE3iC5aD2xtwBMErjmKVzu7u43CXXvimUHGtRck6hh6K41kDFQuKvtyYX1urqjAnn7Tjur",
  "key38": "4hoYev5VRgJnMRtEnN1KFpVL3ckYf6VgVhnUXzpU9NSz3gfiVAYmNrNxdZCjGxEDuybHYCcsCB9EVo75SJfUbTMQ"
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
