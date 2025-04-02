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
    "3LUsHvUjeFnZWsefSYAQs4ggnGDLkBH4fWLLfXGq58ZN2P4i37yDLV4rtwkgpXDc6B5EthCVEmfa1sW7vytqtNGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s7SRuoVrXpCbgeK8gmRLnz5G8prHcb23rEX4xdaK8E9mgu8rwNASrgUGygSMqRiCdPEbyw5UeQyuFzV4QFXR4a1",
  "key1": "2aKk6g4FTAx7tc5LhNxkJFhHhYHXeL3fAyfVUaEVTAUbwk6SrPmAeJEVRfXvvH36Tr5YTmFhQBV3xqmQ3b1WXo5x",
  "key2": "5dsaffMzNyd83oEZEhphKZzV5SFHEk9fWxgaa5h6BC6otF2sMJp9nEbRH92cQqnJujP6XiNTyiQQYMjAdUXnrPr4",
  "key3": "5y7TdCNX4Kg5YWR6xurhuwg8VkFZvzH8tcdrK64XCKneXFMa4UXGDiqaP9Ks2GfLKhNbjySVejKnStVKV3XwWdrZ",
  "key4": "3jSEecaQ4HLJjXXZ9BKXCUtRTErjfWwTpkHTV5QBYA3MVVoGrjN3X2YaRS5DbC54usNXLn58dExm3SrvLKRyBy7D",
  "key5": "AQGu6vDwdARiCvvY7TK7PS4aNWcDRGscGz7mXCRmydNVeYqhBUeV1Cr2dSJBQMMiDYBDH6bB2vX6yzHYryyoNF8",
  "key6": "2W33qPGRGnDexYfKirhU8oDk79PxFFPJeGxqLx68N1pgtGHzLSD3q2mvcEEcRRsJDqqRqB8ABthAGR3eMouvQkgR",
  "key7": "63HQftLJQqakACKmXiXikBk5YWyEF9Z9CBa9ANZvPaeg7rkraprk7jijDH4ESVVAU8ZkGpHAuV3KQiKvGJ2D29AL",
  "key8": "3kXZbr9JDKXrjXKMffgA2oBu6nFXqRbpCthCVLGC8UHM1TRB4ntswTMyQpvbYChmXtjX1os8vQYqmVGC4xx3dqyM",
  "key9": "pCb3C2WWUTWi8YfNTzyVNGFpxdZ6b7P8xDwURAwhqb2dwarR1q9k1riuQHvrwr9cgCdPdTCkNsiE7P7X63c2QcN",
  "key10": "2VxqggisXqVegyvDLJJGPQjieykrXJG9NFUGYmE5jBiRyVynpMo56ZBpDqDmS8RZ8N8xHJCpdeLmTfspePEWKuaW",
  "key11": "FsvwjGZMLZehCRWzZvTpXMBkUAr7UFdhSUQCzAr23eRAj5AWDzcZaVNxdsWrMSB1SiZNXtCuZTqsdAgWhn48veX",
  "key12": "XWEchZ9MHNvZMoMenSoT682GfvDDfsWYNG5ZygJVonCLw4w4w9PjyEdC48zk2mCBViq6bymvKdA2v4SVXPNDFSY",
  "key13": "bH8GLwRnKrt7hHtCKpn6tAzodSde3mXs21MC6zdnPe6bXYecWZQoiuq9yGFtBMJ5ZdZ45rugvpmYb4qN2Pmw9w2",
  "key14": "32nYFodQH6oyVXv25rguKZCnjUXcrdf59PYQpHz33EXG15sLgXR1jAGKSXDK8DDYGbWceBoVcqC8QmAiuNpQH573",
  "key15": "DtMUVZSZXgSBNiX1LAHkVuxcZThsWGtqcwfPexddtaLY7kFishBRkpQoeZFnnUNntr9SAwu1Wyx7D4eChCkdhR9",
  "key16": "55saCKDRf4xTa4fpZzrvAXVLavq7NvCkpMC5QH9qKCt1aYfVCTqrwDoojiAcuG5VfiTsFj2iLiMdG2FPW982jwBA",
  "key17": "31LXJTwBb7rJ3LW6iSMcRjzvZyYMSaLuUkCiC6ZUvHGGpxucHMPjMWGjVFvTAcjnFjZG4NDiYGLSJ4czezLPZQw7",
  "key18": "v48ivdDhn53gZmkGyjZzEYWQuUrngoUMxybYsATQE5HBUosMSrfpocWhgyBLJjuGKkvWfhNXPDMK8aKHMEMBTyy",
  "key19": "2KRD6Vu7H6rrKHzLYa9A862fdhtqtxxnUhYApK9ujSLcUcGN8Aa5myVu4X25FPhYHZVrddTMSp6guq7UKie8oy2S",
  "key20": "5X1AtaMSi9HJKnK8LmtGn9fyhwfVPZr9GzqhuXEdUfZuztbRbLkG6mcqBYfyMdzJmZrzMiivikbghyewSgr2uEP3",
  "key21": "x6i5yyxLpnczosPV2L6ZeJHZcxNs6xkrxH96GpdQ3NHAnSsdTXEmPnaJSFYhEzwsczwe3MHfaSFbEiqqH7Bg7mC",
  "key22": "XfMHMP4AEyBogGg7efAw3zVtAboSxbhwAkeuayVS4wqB8Sai2bZoFQKxeMRprq9CfVGtzT2sAE8MuVBJ1M7qFL5",
  "key23": "mTZVewfHAG9ecxmEH7tN5xY8AaNY6DqFMYx5wPdJkUeCLnRtYGGLSmjxFxN6WRZvBUWqAfX28x4AyTn2VkwnL26",
  "key24": "3kMw6TmeCDk6pFKHUciQsWAsQWVzmdkr5oVYAnAsjnPSiHfnADzAZPENiT3RYX9vUVATtegD8ANzeJ34JXs3qo6g",
  "key25": "5EcnSRhqb5wqSqQRm4Nk6gkDLcA3VkiAWZT1hNBDAPC3Jm6xeWEwZjbAw1HAfAes9zcqc7AkmsnoTDrSzpj5EMK",
  "key26": "5dWTTg9FetK6LBtxoxQHEHx74awhXth7wi4M1oZsjXVHwiNwXkLD2sqtG99rGPkyaLL7w8puGv11tc765V8Mh3Ve",
  "key27": "4Y8VBhR7BbzE1cep7vjJ5qQjHxHRH2ya8Bx46vnpcPJ7ycMTQ6hhSkiG8Gdi9axnBj4YqPy2A9tdbfpTm8XqBmGY",
  "key28": "5C8V6kJgnd71vLdcV23ZavmKmqVkANLsB9Pe51CSRCxSrRrZ5MfxUfz27nFE8BKLQKjoyMtKRgY9U3hm11tSyw1o",
  "key29": "4kBHbocs9ahD8XHazdcZivwSb1eB6EeLpgp7b6kKPdmTxUcrpUTEZjPxsqZeE7zvkbzPLfsQXZPFWz3iZFGh2atH",
  "key30": "2sB7g7TxDfBKJji2oPxSzesesjUfmrvbWkGeXKRkaf6eQ3QfK41M8uGBwim8KpjyY61uBR4dFcVNKeLNcfbrJGU7",
  "key31": "41mTdsa7ikhm97ZauXCCazhRvhbscb3BKvVYtbL3G7rA8sFKpWZS8BDasKNtPbrYHoXr44DRhFfDsseahis1RJTf",
  "key32": "3pb8Gqinsvbv8mAY9DdsSQSQEAPzVhLuifJFepmh8XAYLdpF5dvYNbeuS4HnSa23ftxpoFBtJE72ddPirs6BL5Nc",
  "key33": "3dP6HJxo7QsXo2te8d2wGEvxu85XrLrSsAP8SB1wNcCT2ersnsbuYFiaf2ypqGTpenzT9n5eJiLUasP3JyGW9NtC",
  "key34": "4QHFPPPUmywBobBVBZtTwzmYG62YQi992FP9d2gGKJuuhjJJrWgaUCmyvNjy94FF6ehLdzR2mbR47Ah8Vi1kVVqz",
  "key35": "5fUFmhynjo48qe9Ntvx9VKxLXmaTFrPs2kJgAkoAfxR35hgHo7JAgNVpazZXEm2a4GdNYZsQUmRSLoYW49F7VXfL",
  "key36": "48WGci2e12zUFHchRrT1vYk1pBqFzc8JY8Pej82qyxUXtf2SGaV94J8umkb1mKwntKgjxSx3siahTs2BZG6eEpKp",
  "key37": "3rvvWgV821nyGHqsoHFVJoDyX53YZAneNeGsXau2Z4U8fRCUVekYZb6dZehbe6LU7iawfEnmAumvkbm6rduxZktz",
  "key38": "3uApe5hiRysG7x8ntfHBNW3nQtHnY7J1nmnaqTPEgcnmkQ6VKTKJCxN55CUNX7pqM9dJdL5za92ZnkiMaQ77BYRd",
  "key39": "4HVUUsYoBgtmewVgJ2AvfxHBwmx7fS15BELHtSKKbctbZBiZKnm23Jq6GjbA85f1J1LVA3msztBicbYeCHNf7Pq8",
  "key40": "nUL2qtSzdwy88NFx7WZUy8mDsznvTBT6m9GQmXSsxFpVhYaePvAHEEkek7YvPJR6Rq8zQV7qFwRBTk4eLnPCUhc",
  "key41": "2NBcvF23nCvE3rtW2w4L2N6LFZ4gzYTpWd1ziSMnQAspCJHyJzsbhEh9iG83jG6WhHyyZzeKKHgdVEgiyHV5WxTv",
  "key42": "2e1GN3wSjpQeEh4D5u1jsFTWeCjtWsoKqvtFi6oq8S6TcxwBTNsZTgBxE6e45gkq8e82oSABAsGJQFWYhJtdbbsA",
  "key43": "jcxU6ZG8zwohzdMx8gW1cGyFeK7LRrxh62Lutr7TwgFJxbRjsbU9ir5Pgoc16fi3eG9CivtPbP2YxWVrx4H2zzc"
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
