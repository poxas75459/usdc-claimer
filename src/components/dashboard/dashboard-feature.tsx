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
    "D8bVJJ5J6J83rRLLW8JA7rwTmh4yiX9kS6QaX89EgfpFCWTPuL7zMEX8xGHjfuqrchwLYYvzkg59RhnzbxY9E5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LcQ9edmQBbR4685KT3mwbcqeqNTMVpEaS6niHW9C2zx3vbezna5T9nBoLoAr7sJatzAyxK42baY1oNUW6TSnQNW",
  "key1": "4W2gBAsBErqUC7RJQobfnE7voLnbHjhxnftRwFcjzE23eML6gYo8tEzxVWH12pcYxMMLFvASvZP7LyzpgrZVME3w",
  "key2": "Fm3PW6pDJmdSmRNGzxYs4zrfPnMVLJdUXu3Ryj8GURor9LuEP32YA9X7iVN8A4yZpyYVKADsfZ4JF5B8RMsa8eA",
  "key3": "2os9uZBSEXHCtcA6Q3uNrt5YmA7BHgkhzJDWcZPZsm85v4Xzqm3fowWJABpb9WJkbw1dKtzgXt9gFt8hfQea8eYV",
  "key4": "5Ey9TbVnKUfWpvjs8xP2JJ74shFdbkduVSuEc9g2gJcKiak914DSfHreefechTVQWJRsXCdpDFk7pAWPx1Aipw7W",
  "key5": "5GC1s9aTh55R13E1y6bprMrdfkz6D2PGKT6cAw1og8t16FeAESv1NAHQy5q7WYoeyccvCUKMbcKai7QAfZt5j4hH",
  "key6": "5sJHbG1QM5HLZPK9j6EQ1Yw8n92k9jMuA144YBo8cm1N48p6txWeXFS9dGSbbu5QtaUxMPfGCL4KjqmtktoKsP5K",
  "key7": "66t1sX4wvcB3qJPxFh5A28kM2cVSGSq9TSTgZJ2BVJeneMMuwSJfJymhxqhUMa5uMhqm2nXrfb7sbTwVYYijsmzx",
  "key8": "4BfUfTJwkHxP6tNti5sLjaCvEAMi8UArtP4exL2Thi6dunNp2AeXLM8rjQAjA1oRNZuuQR9VBAV83okv2ci6n786",
  "key9": "PSEbpHBHX28Tn7axUaXosznYr9sUwJoJSFtJNRWadEv2RQw7ZNBAqx8i2LTxphzRBkwMTyS43DUZMNszVQ5SQhj",
  "key10": "21zc7Fzpp1qLKLxtEYXZf6nZDRSmDyaaBKYGATyZ6nkbm6VTzJJ2XP7jqj3ARHGVcdMEQy9B1vg5caNwaWLukFPu",
  "key11": "3yPCGStdA9VMrSxKeViL24wZaJJoSjCNd5iRVkS6CFgUCMCcmxAod4FXcJd7AhW9nFPmSRftRWwCCh4rv7bBBVVt",
  "key12": "5MbEnxTn7rGDyJ7Dt4mMsbYZuj2aeQWt9iVWUyxyoru6DsYm3UMm5FKUNsgc2azrRstn2n1aHuMdqdpvwn7sYJPE",
  "key13": "Tz85SnA3kRQtHmt7NqfE4SjxRp922b9EynaHUgXKrM4xrEVFHZD6aBccXHYy7tNU7g9SrtKL4RMRbF8yUXCnJHK",
  "key14": "3QQWF5VhU9DPGdm3fqYY52xeHe3ekPFJpRKaQbm7X8EenuwK1d2Lv3ZdzUsyFnWMTkK4RyBKXAUaYKj66NTxQ3V",
  "key15": "32DtHaRPHoYSV9X5p8vtdfTZ6Sg7UpVyL9CtCdAZ22HoEca5gZUs2okJXDCUSLfjEGyrQP1nBW9BmAfHxtKmyJyw",
  "key16": "5STZxPYTSvHSvFQVS4xT9kLoHcNHX8s2ndco2MVZUkdmxiHpZdN8uj7N3chLQWkTfkzWcfiYxahgjQyHbSXRXEkN",
  "key17": "2X9rguApX4o9BpWXHxb1YfV2JJwyoLGYmwoZGfzF6Wo9PMmAE3kTHrLEkhFi7PTU7CcgbdqU2jNxJputW1bTWv9s",
  "key18": "4aLLDo2sBJvmnaoE9KEnqd8RfL5gji6emmzzExTDoK1GUR4FgzRUk8zkLke9Xd1N8ZQTQnNhVMTcaL2FbeRdk4NR",
  "key19": "4H4pbaWgBSyPv3v2Tdozxpmv8Kvi9zoYqT3dafLkUW5Fno15vu9Y3GPMWHvwVewtTb6P6gWhtenLqKBvhR6m1tiW",
  "key20": "5M8hUSrrRBsdiEx4BQEpcjd7y7yPEWk4y945praNCSQErfufzPqF1ojXo5svG2Vc8rae9AiEYAfQU7moqWqhTuSJ",
  "key21": "5ntHroFBV8fxRi82WM8NJf68AU6b3LaE3UnnsWAF8yYBhxqcmvM8NvCLozsrRntkiMb8eAo35SPLhM95dxUbnvot",
  "key22": "2EjkpFYF2hPNe7euvtTGfvQs43gffnvYdBFMPzKPNohSryjfmEw2FTHe8yZTNwuGruDmCEa43QwG42dtQ3MT7nYG",
  "key23": "5Qz3vY5obFHx4mMXXNM1n1c8PEZvU1mxkG5NP74KaoUSmk3o6gm8rydBes5Bo5zMtXuWthVKvmjgQ9Wd89kAtdCc",
  "key24": "5zNXdPeU85qNj5KkNNyKVPGkNUDaRtEUyB5ReFpbVyVqRJM94xwf6Hp1hpa5vQfzbByeAyM7jsG4giJK2gZCzS9x",
  "key25": "5Je51g9JniWid6pWhzb5mVbVmo2LAimBA5GZpecbkuP3HEQKbJVa5XB9EjQgi7Lrj3NVyEaVvf2addMAKx5bhPmz",
  "key26": "D9nuujGbGJXexj2DxoBBCuThD8tULfg2tfoaspBuV3QdjkQDMdhACU9t5tr6xqGH32ukzrjQaFPBUzfeZdVccyL",
  "key27": "5MZ3x9UNd1que2Pf13GGEjormjXKeh9TJL2YDiVRrdWLRxHT3CraUZUG4bW6qryWkz6iXcaDx6JtB3avJwkjyUu",
  "key28": "615x1pCEGRuzU3ooe7FjkR3iyZwTv71MyHS3FSnUunAVqTHB7uboG6dVr9EVEtaSvMtKvqEZfnGLcqLFsGnXKtFH",
  "key29": "3oyD2K9cWrxzRY4QBqqpW45ca9enwrTRNW9YUMWAQPJBTC3K5tycdyhobyahZrGr9z8wYAFaGFZR6bUo2cGVBopk",
  "key30": "osyzKHGFUgi8pKG1jVr3WX44ngmuZMDFRgfbDrX6thsoh1ZZVfQhd9MQNNdpFM1xNitLgMg62w9RXtCqXaJJdKx",
  "key31": "2hAsX7M3pXgVY2dwExrPskcy6HYNdRQQinurdnkobnCWc5npTpks7LQCpuPBDPfrLHhWr2bmoU9MDt1DHFi9WwJA",
  "key32": "49d5w2gxvBzLSXYQwqzqdmP915QwxS3QfX1jxjZMiiy3ZccvvDGzYQpCu7jA1o5EaviLtyfYBHSQVEfziDZaHNjr",
  "key33": "65ZVaaLZ5LP9kkESWvEua8LPLP3dKJb7aqAgMMePkRm7Vk1WNUSuJzYmjJTdbvevVJT9zCFwQAknHjD8gscv5tMr",
  "key34": "3NbkHa428fpzf1UsUuMjAKB1qwE2Z2V31yJvi9oFbcGZDQsAz9ayoMBeFU5sPfuhupFaaARWsj3RJk2FVNQSLsQF",
  "key35": "5TjvuRjnzWevwDStk2i9hnN3ASrH26HmDxLPvSZWQsDyE8krNEcMpMnLQpHdK8Jcvg7c1aAdSqM9kiyew9WBkDC9",
  "key36": "3vPeRnk9fapCJLC85mnostDRx2Usi5E1yNZfNB6vgmJKveSrUquUEB2dwKCGfs5DYxmukVygx9vSrzZnUXYBHdCE",
  "key37": "2MpLWciVYLqNxMoqU4DT8LPGM58XKsbugoxjA6HdMVuT97Wzcp5YwJd8xiEFHju4UBa1qgc5WKWVJYoperuQYogv",
  "key38": "HHA1FshYhcj52jE3Xbb9uoV8kXa6scgB2W73jWopUTJPmQyq4ok9eFt1mnNBT1buU7pWWKcVT8k6Y7PHXNGskii",
  "key39": "2HQpjN23SrkXBDtUgrfamn2EnAKqTKiQChB5uFBjpZ2yGEmRnJmie2NJGp5AMe7ubVDPfFft5YF6nSEH9XfEqFMJ",
  "key40": "4J4giPGL2hQEof3aRkpB8FKL67CsHKUuWBaXB1ZdBhxv9LLutVzVPCXttP9dm7scVAakJDgaEKN3UT2wB18TdWw8",
  "key41": "4Dihmwx1QA9i57UiQn4S8uMwWV6fXXbYdGbbVEca4AFHL7EdknW8Gzats9LQzH836auJqTtsGx3pCdFWfhTtdjHf",
  "key42": "zNnFogg3RTmAdPEn53rnWKjarzmXGZQTTrt2nZBms5nVMvuakyMpYVpRqNWnR4jRsW9TXbNZE62SJSSZVxVGb7X",
  "key43": "4FoymxXJe56K3E6wirDQ7FXiGG9KKFACGtxET3DJTZmvror62FQnBjyEfTaY1qwWNBDpRbQTzWprSHuEoAbiyDvf",
  "key44": "2H72Exq8b6BJb3eYMJ82sYcbeCUWgLKbRe4KZ3dgeguJEsp3Lmz375gtcUYYKeTmhBumjjy7KnbiNfQ33h2nTR48",
  "key45": "3MMx6UaD1EnU2oPXADNEDB37bf8bbFHkcf8MFk8EcbdDo8Dfc1GxGk8DKwuF5eDK4ZufGfjFQTHk5TZDFpmVG2Ea"
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
