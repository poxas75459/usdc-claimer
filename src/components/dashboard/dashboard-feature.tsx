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
    "4q6qdoxuD7yhizHrVzRe2x1WGy8LPiUx5PdaBm5bKVxs4QXooY8G7PWVdEzZQENivyk5uu5ZfbYxZM8SykyqKB72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fnZwC5uxQrtsWGCMuAF4EWQvmDTpmyorKHGti9UXwWXFGo3YXhZGfBKRPJCTWthDV7rwSE283fhyFAJdodJA7EZ",
  "key1": "qDpZ6u4jLEFJT6AqH6XdUdmxCRWGP8hZxqqcT8gRG4zVF6BDH7949JT9brf69xCkSzCV7zK2831dLf9WWDVYK3S",
  "key2": "4Tgi6XpNfFnzyQjrnSw8qgkPCc2r29uqzeDvAfiUKB2jZtpWpKEasDggBFetv5R5uXCSaGTDTBk2vce81Qr7QZqD",
  "key3": "5mjnxT7DcXdQFUm6tCsopC9WcHHKGohqaZGcm5xcVjzmUtpkd2hD1DBuaPrT2hMzxffCYiEQ34VujGpNFLJd9MGy",
  "key4": "3qS9AL4x4YyQEiqXDtHre6MuXjbVyG79rmxHBkTE8u1hspjzMg3d8gsLGPuYovAAc3qAXakn2W9yhUVMSyAHfLQJ",
  "key5": "2nvunmZjsF3QmiNLeLmGq5zhDexx9h8LjftanidQ4eNUCLGrtN8XZEaFPdZ76Z2o22Prrjqz5SpR26h6GZXudNmZ",
  "key6": "3fsDWhv5azrryHnitwotpa6AVwvwPmax1T2iBZswQgzr4pJdQkcPFqGBgVxLizLcjLjqpJA8JC2L5vji29D9nRsL",
  "key7": "5QAV6UdYHM6JsQ5uUhnwMVQ85yMobp4V8GxPiZ6cYg8jYPAtmHo7qQ2nGhLxoPFxgydYddsYbkj82qmsNTDQkTK8",
  "key8": "3sC4vW6TmKrjSKouvJg1U8po9bYhB5WEcujSsMccDJcbqQa64KAGxJLPuTgLzbLMUTetr28acmSQWvEuwzeJx7vd",
  "key9": "fZ2GTHM1uoHkRxwVfjoyxuqWFB9AnAxovdsHf868ysnyEpu5NYWk9gCMLr89vozJy2k8CLRb5TjxZdspDFVP6b9",
  "key10": "4PY9omqVFXdYuMe6Jh8wBLRR7AuTxAnos4ePKzwaETKu649qr3EU3iFERafPsM5dskzC6o9GdKEaE8M5fR35c5SK",
  "key11": "4Fi2qEhzrQrvTNvWPCMtWhr7QMAptvPvMaB8KgJYGciVngkMteABW4p881nwLaNvP8Y5nRE7UMd6cN8DZ8uESvRN",
  "key12": "2DQvpA7B9ExXUYa3fMNzzaJcbmwfaeumpUmb4j4Z8pdvsaKSSP6mcq3UxBtgY2cKt8gXY1i9usqJEMmxFTzTqTHa",
  "key13": "5psU6nWiVNxcosjG1yX7TDNAjsgjByaJA582QcyCVjtYuCK2FzpWwLGtPmSNqBYDHasASPK2Z4W16kpyMzVw1CVt",
  "key14": "5orbM4a5w5Y3xWP7SJ6775DoJPMUgtJn2NF7Q5EyBH7FmqnREAYDZUFjgSAxaDHkMn8r3dzQUbRauAuXqvgC5XcS",
  "key15": "1LDvSTYiZbPVL7X7Qw4sWsv8XGZbaiVoHqErDrvQSbiKyVtzmeugTyE3VnSEMxghqWpYqYKcJvn8MZrvEbJXY5m",
  "key16": "5Ac8cgKdkxmjAiYLZLxxkrMLMiENJ3FnwiuzJDK5Y3EB7hsoF9ufWbbRMqcXP9L9QpRmG5UyhRMnAuoephYdTpxA",
  "key17": "2icKLxT7q7VRcVuKqtvQhtzhyrw4f73sDFpsDUAjE7mBxqBXgVbCNhs3SXycbnkyL3QrvxT5KgV1EafNgZ89D9zh",
  "key18": "2HausrF8KjywvTCbX7s4FrPDPQyExsktw9W1H7qtBk1Fxiogobg6QTm2sm34KUiZD516LLF2St3NFpt2P4bR5cZ2",
  "key19": "4eNTHASGtFYyYtYY6X4JEa6qMQGDCZJwMUqaZo7ZszWZVUQ4Ub3Nngnoj6Ec2YezNWxbwH2grLhfWNqFipvcPBnX",
  "key20": "41hScm3JC9Pm2yfD1wYmbrHZcx7m19ymr7BNm1pGyu7J3naYeMDrGE3ZZwpHFhRu5NsQEgJYSxXEiyu9UhCt3S9m",
  "key21": "9EukmviHmEULaoWZg3cbimm7YNTB8GEBVmZysZf9L47FcvjLYVoVyrVrjS9qco423GZHjPWTrbNKL583aV5aYSv",
  "key22": "2iCFpThM8v8tZ665fkencb9Sv6t8rBwj8pwYfmhYHvvX7Y6ABeHw6UWANqLhun9rU92sqBMB7dRmAQVeXH1FD6yX",
  "key23": "5w7PRvKAfxxmqkGPZ7qTwCjV6MvhGjDbxTdpRnFT7CL1erDRLbyBpfm26RBcufH4ZeLDbzS1kitP137n7jyMW35S",
  "key24": "BXvcsMYFa8LWQhQCuLgD5cfDftz7vEam9rHigWAGvyrc6rb4aF82tcFkkeivP8NyvwMiB7ydTo3Q7BeptZwNHJr",
  "key25": "NKakkDT62tS1t4WVELjL85qpgRxuGzg9a2yFnCqbu1Pr3CAkQCdpVJag8MXM9Ag7GEuzLRTgn5XXTCTuxyDFVNr",
  "key26": "5BuyLM5VAj9U6J1WvF6v7UugyMmeGsmJ8ct7vn1PZqEq1WbQw3HGrPnaVQdJ1VQr4HqyeSqvJtfekWtBCmLekxYj",
  "key27": "3tZbcWxXMwu5yxDyTsgqaXRLrHz2eDH3f1GMSQKB94VUEA9onpiapLhfStgiNWEKyuqQubQhSa6KpDTcFqWJ5wkA",
  "key28": "4B8f8WSZRwq73qm8YvM99hmEjS6KJv7K2BqNAYrSXVmbNkFLaEhSjn6LzUxj7mDwEd3nTGdBUaid786BcvAXZEPT",
  "key29": "4bkiuGoTEk6WYz55rZzvyP3L61jELygKF7xqW4nTZ6HeA7cy9VUr2K38uxALyvbzRe6kuqLhJJgmB8BHQbGz36JU",
  "key30": "CfJPZFFVfGFUP4KTBWyEAGpgL2316hn554ydRgCbW7JZ9LkZGLkPpZxyMUpt9PjDF1KV8QdHeazG5u5w7oycjAs",
  "key31": "4dkJkK7UdKDbsBvSkLo8VEfSDVJ2Mnmbjmhgkvt3hv1DX8ojyWP35KWcZTJHZ7LNZ2BBZZhaBCAzCADnnGCfw5CV",
  "key32": "125ijuD6YUo8Knp8JXL9gwjwdia3pXP9MqRrcDDu2RJXNEmS3oTYP2B1N8UsBdsxcNnFsoaFdQQNAYUPjrnbCC93",
  "key33": "2SYgaVVMg7G3v5VHtifRY6LW6bh2s8Mn3rTRk9Zu5eiGhUEebHoHgPZJKRLHd5SqsrBj69ugVz8Q6brwJDLHUjRL",
  "key34": "f2zEsmkrrTqKdJ7jrocs1FV7UqFTzsJDeTjnCea8eNQXs27Y45nwRFPZse9iRYUmDJLoxGv6nrKC3m4N7J5AZdC",
  "key35": "3yiY1vzXoGLX495zAZ9k1ck753ma6bKcFrny6yWZrvHd858ZAhkAjpMfSFFoaTYFaU6BrsqbfSiKrCpGe5tYwLzc"
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
