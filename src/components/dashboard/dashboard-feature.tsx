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
    "4VVKUNcfAtnVu1q97vGrV77k7j7BHPzCxt4f14WLjjEGbaCad1ektgvhH5Buhd99H2xjq1veExXfXYWdQLuBFq7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QY57a6cPDNJz6iPBAXtGJrK6MLb61V9mDtUBc4xupA7msWWFXUADEAM1rv7yeiD1qjED6TNX3iuRtYwiWw4Vmmq",
  "key1": "29tbQHjZcgjMQ3uyDWY8eMTCbZMGQJ8vn4u8t5QxFZYeHtGx83ksYDXDFQPaR895mVk8EkSPEpMHWM33Z98PMZbL",
  "key2": "3F4Xw9pR4owpisrCZMjbbf4d7r64pRBSRtBCpywfcN1KLjWRDrDindoCnu1e7D2NQaD2vgVCpz2CBUudz3FREmcx",
  "key3": "4LhH5KTcFiYtc4eTb5vDoqnxAGHNJdWiyw88K45TPtu3ywiSaFNKrQau7fzmQVczwcL2X281QikMBmXyUZfWUVSo",
  "key4": "4nLdAf9MjPgJ6M79d4CR3rAJRutdKBi8ykE5wHF5VAi9EnXjm5zFgUdo8FVQuX8XvxeLBAeh4VT3j214QxFsGyRe",
  "key5": "NzKKoLipQxXRtQKR55xoJhjwBXrYtS8vgHBwf8jULZSxfo3aNSLAwF2i5VnQzJYzSKj8F67g9CnJsMHzW2665BV",
  "key6": "2Q8BVH7j8gCqEHvdEWn7LixibsA4o7Z8wg7gWZcW3XK4rxW7ntTfkFodRVaiktMyuVXesyLWjCtAvUxQftJ1Q3pa",
  "key7": "3LtUjgdiFaxbHrBZd42vG8prEbveMw3vafivkVSKZt6kCBHDTz9uimwoMPxUL6JcXPCwZvsMb7ELi8cUbMqCi5Z",
  "key8": "36X2DoCbAxrqfu3mxKLp1aJDkqiaupBMW215JZxhaKGBvhHr15BLogYZJsrVGKPn11D13BTcwDHXwCV65QukdWUQ",
  "key9": "2MVT4dz9yCxuLbySZEdHaJySnW2gU5mpCFJ63cRxjiPa4oqpmhuvWcFFitZ91AqLbXj7xPxTRFdkX1S8aam4CBA5",
  "key10": "2ZMkvGiLLY3pF8EB4NyfES8xCCEnwmkkzFjXXPXw9UFnmerT4XGvfvUa2T7Q8ENXxRsYeiYQ4dNsPjEYAydCHvgV",
  "key11": "2ERjcLVnX2trt3RnVbpT74hg7h6bj9NAzXjmAEf22dB7VJNmsjW7VvuXBjwDDCyH9Qr8HXtkiwuLaN4qDmxhPsQw",
  "key12": "4bT1WQr83tzBCe4YoXRi6ZijcKFw7JusQDh5esQte9mBAxodip7RuJDAYDfxgRFrzsgdDe2v9bsg31shjeKAxDxf",
  "key13": "4VqxVPBJ4CLzsNM9fS1xvRhazpjwQaDjywyZubRtWq6qKJZSFsBmuYRrKG81xn9NZAULYr4BxmieWRJh5ktCa5FP",
  "key14": "r8K21No6URbMBvVeKvuztNVrvzJaDy9aLqU4QAUfh6HbZqA7ExAG9kP9iotrV2wQ1qQLUJ1VEhody7WzHopp31x",
  "key15": "Pf17cREcJn78M6RxydAFFqYvGRVvNF5g4wiMMYC3LR1XuHCpasGqhwPrfi9Bpi6Y63VcLa4p63a4scmKtuW1XuN",
  "key16": "nGHpSdktHJxfCHuG55vGGHcbf72z265BHyXFoLXJn9usjzxdxP32ehjCJ3SnfDftUsiiF8KQhodfvsSyworBGk6",
  "key17": "66p8PAmV1Kvjxm5KDmLgsG387t1j6Gn7hhpSxagprCvaEPry7Bf3ErLsjM1iokUjhsYNu6tjEA6DTnZnL1BzoKnW",
  "key18": "2yjm2edjpNDrNKic5YZWe1zWkx6YYg3NVfwSii42avzs2vSyvgpjp6BPKEAqwwjBKMCtHWoVY1eLN5KksPqKB7Dt",
  "key19": "4BR7rCLaZVQzG3GErAWvTjzqUh1uaLMU7iRTnguph3o365ihg3XN9mxDic56D953rHWSRsr6mvC9QdiNASeaaemy",
  "key20": "a3p5Bx9ZyViX7xthEuJq6TDUda596jPjis7PjJJ1ne1t5tR98LmMSeHTWV9T8TSvHwZHqM2mh8ctg2BAYcWKNUd",
  "key21": "3oTWCazzCEHYD4Pi5oBkbU6u1FAfZH3vPxF2GX1pbmL1t9uL1uoSTfAHSrshJdU7P1hU6o9FKi5zwZZfoK3pBRev",
  "key22": "2Y9R2J6Gz5wHrzUi4EXxvJaK9KRF5eL6uKUixdN5c6RLGzJqAwYJ4MAjTdi5iNDB3yuhuEzvsvLAua7gkse78diR",
  "key23": "5zur1GdEH6jSiu1U4mQbKjeCScZePPBBPobNeHm9nPcApQ3oz1YknUTUPs4KP2MtaTD6BnvBu2UhRjSU9DKvJhQ7",
  "key24": "PiPnLJUAEmQ6yvxQH5fcQrsis6J8qsFuffgbJPpzS1xwiyZc7tjyWcJ7zThRpsNDAt4tqWmVmWzpVyG1AMXwimo",
  "key25": "21MAHQm1T2SqyLxiFzjvtoi7jeBUqyVe4bZVffpuXHz4q1DdZMetoyLZ1KMfBtKcVq47DfVKUmwymmqbwNEmE4vF",
  "key26": "5WcQLdoP5Pnp9b5ieJ1oR95swP822BFD36WSL471WVmKCfZai3e8bxhjx1ecT4xkGJcWqcQeTiWky47xStzSJc6y",
  "key27": "3nNiYni6WzsCVr9zQnWB7sdov9L28M12MLfeokKueJxYkKZZ6zfsd8JfHVjWLk1fk3ksTSryhQPQSgYAM8m7h32r",
  "key28": "5wWYMupn4JgUAKHmDhFoRruNo4b3U6pFQPtnsGN6vvb2iT17m6zZrH17Po5hT7sQ3bhZeqTxCRFtV3DGUZHrCifg",
  "key29": "5EJj4c1DWAdWMQqDYFJ6DYeycWa6Kdc3PNtDJbRfjuLfLXrpEEFxBobVqHQL3nGZLTfez2BLrDiNbfZtiiP6qAwH",
  "key30": "33GKxeRY38bGXTkm5a89YYhGmdcDBiFwRSzdFFcdgnFBfqYN17gW3RPgbErQ8ao7dPpbU7pZkzLWvYMoqN866CYm",
  "key31": "5Spz1eLQG8oSGfWJotTp1HLujozPJmjo1hoSybjvAt94bpu9P2JXbPpwPSEFFhWSvcMCGdg4u1KttiQ8cf1gGTKJ",
  "key32": "2ZJsZNyuK3uzSbsdv1kEoXYwr3oiAsToCMs1B1r1kLNzEfFxSMJzU28kZbiNCLtYbMAJfb5gTw1ZQSn7dpJFMDJn",
  "key33": "2wecePo3hc5zmMCnTneu26ZQ2uQtMiijhjwJM57yB3UEsvyhAzcizm7kVcL261hVCNDg67HPFfHWaxhwputUjdXx",
  "key34": "5F7G6he2WTf35HUPazTY3YxWX65szfe9CXDRn96J5hMghrzLAecWDj3WdsVuVzBcSt8qwDbgX9SLoNEYBRVr8YV7",
  "key35": "2nitEAw9AGJPA72H9uM6a4WQuYo2yn1RWFfucgJBBkHAS6Rn8RN7Zsonya3sqwsTAfifHExBzzWcNgxrEfA8ZU8d",
  "key36": "M5PYh6rTUUaawhysZouBLsARXwTtMUKajbdqCLcgvTCz2MTaRBnMhUHkRSv9uYphqw4xj7HFv2wVRJtxqpPipQD",
  "key37": "3WcNHWdYnS679uXvbCfi8XAoHwFozc1VtTC4mQSDHPG64wGHW6ncctyJW5RkcKX9mYBKGavnWqsHEh9WBJfv7aaF",
  "key38": "5fNt1qKD63UCLJ1ZCdZJKNoDioSDBsnewfEqJE7qjuj3wT9YE9NtAqLxVC8UTwdh3NwVu5RTMDv1uoqXkBjS1FGd",
  "key39": "UA1opZ2KejkweJd666cU1uhwgTPcCrNJF452ESh4N4kJmnx3uVAjb4guaJdaDqKab4ZSaujVQR6f5sSWewbzztn",
  "key40": "2fk3B9WE1mDrFvn6ox9uZ6jjaNFPvjNBb3bmTzRANQPWV1R8GhNPcMoziwCAsjkczapk2y6eJyGu6KZJeTDzuRe9",
  "key41": "48RTta2sf48KTHX9yPcYgEoV3SbUqXrMXHzMwYPZddYMP3f1tyPWREfs4bKWoZ1zntwVn5bwaE311wZfrbkbPfXB"
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
