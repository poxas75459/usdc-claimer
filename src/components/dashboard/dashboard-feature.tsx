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
    "4z8JDPGuxY5DXSkVucHce4cyFZ5jGJMeu6BhFu9nHWiMMoHmjN7AVsYydq14nG6gCDJFAHvepKdtCvaebhySWsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55aXoJqmby9N18seSYnmgVZhxf1LeC8yvQJQByDo4prrUwCTh2ccmjNQ89C3LEj5Gkx7Axs9ewnASRLPqpGtjPmu",
  "key1": "2XweK66gZDZD7BGs4jTaUzXKc6YYwTQTwmGSuZfphbZ2gp2TbCoRNydKkjDeRciygSriGw72osLcax7d74jH7R6C",
  "key2": "5EY61BvDJjN5cxhNkWkEQEeuSaYmhKwgA6N1Ux6rQmQdgnxUZncVKRwrBk8jemMAA3BK5CMMaGYCXyDKbr8FArP5",
  "key3": "5Q51iiB88ieec1QaoZWUckEu97uYqXAuhAgTPnMkxhMdypn5qYRXZ6oyCv2H4ynHSDXgqyLfFP8gKLRWTDoYg9JV",
  "key4": "5ReqfPyqAL4hReuYg8m6qsbCXMWwroFFcg4BNTVH9xvNXsNe3BkGiayKV7F2fPVUqBUEdkGKLQwvVDjktjFkJ9zw",
  "key5": "4nTaMGJ4DMpcPopBJC38djdMyetkPYUWKSCqB2XpQwCMmauRBfYXYPV9s2PdvkBaCWDAXAiyfPnBKbqjzmT9BWmC",
  "key6": "3kQnNy7REeiEmExTHhT4RX33hvBs2zpKJWjvL7yqqxDaDdhexDGK57KVWou7F8zdZNs8Nx7inrjptJWHmnnipZpa",
  "key7": "abqjmqHVrUC13egCmTVKbBwn1NM4qhdi8pMmwFFuSKQmAWaQMZtf15aFahfJ2JYX1LaKWN9VAJWeDsWeC2fLn8J",
  "key8": "5y2zPYdMrucjaexr1uDZUeYi5t79PSkL6Eoo4NV1SUE3xQcEFhXJqoiENM8LPJYsx9FPcRZN7KAS9KnAag5sUTie",
  "key9": "4JjJXhYDEWJTQPWcow5uThvnhCpRHXE1SJDxYj4Rz2f7qkTK553sPf6m2aR4ub1cLenv6r35oTBEux7fkDn4AjpC",
  "key10": "4yoZUS7i3W7WBw1QoEJ3RUoS2TUGYS2aTM7VwhXXxtu79XqYauoLttRYaKGernhvJR24ai8rDCEdrf9FxJRBiiBE",
  "key11": "2MhoFgfmrhBrYvKfYYrD1mMjACfG1do57LE12S9kW8y4qU8SQRA5WMHyAcvqLsJodEE6AHmqRBUq3CiYqN1zvetj",
  "key12": "2v4kT5ftr3Fi6WUJaYG9uLcpD9Vs9ZSXMSgCyuqnYV9pYL4zjkQ8KxrRkZHLkXjznDP6wHtdtwtciq87i59krdjR",
  "key13": "5feW6zz3eLmrQVc1NUAPPhxyJjG16QrhPJUdrEnJNESgCZcBcZ5nq14NfFfrtyLvCRVPzkH3givKZ3srkdSErY4N",
  "key14": "61B8o9891r7ssYmo8kE9BE2XWkuVKZ6dgpnLiExMFy6GEEwxsLRNDq61TQ89LtvVo27cgeBN7V6nFboasoKAXC65",
  "key15": "3E1cMD2HtkFfz5omETkxd9G3YFqwFdBBWkd7WRwwuTG4cyfJijfZ56Jm13FM6keLLPwET8aCXYpFv13RyoqFMptm",
  "key16": "4XdDBVX2BtEqykrNSg37aCJgKGmWrMDtrd3gNcFS12ThW9WzcWLf4vbQnAnU1cDG4baaVhpiAzfr4TbXigyUf8Tr",
  "key17": "3XNPKNJeFAyNuU7gaUM3DSvqaEoW8GjpKWDaik3HzmFXvkebZ7BDezGR9NNj2SHdnYvBPZjycRHE4H2Ly5PXzJnD",
  "key18": "3WZEUf3tKZne3XQmzNDrV9n1gZrJaf4MyVMd49pXtAxfQQKEPgmGuHSM41uNZBCRtWCYKgjBrW5ewAXX3nQCDt3t",
  "key19": "66ctjCj6cNhkcFFrEBW3WVtP77qPxK6psDm2dDQmFPEayHacvZrT4ahGki33773o1aiUZ8xGz7RWWga55xty2Xgk",
  "key20": "UZZ712t7XvMWVke5YQiyuefo8n17KWJS1aFc9kt18uXas5VLtJ7bEwXzpVWgH9dJheDmg2qbemoR7czuYJeoqNa",
  "key21": "42X6NTrDz8Vijkm6cvWZ8HJscigXYvR85Z4LF5szvTjGL6Z9McN7rxfzLiWa3iMpyWtBRnauYe1gf7LBnyrK6Nm9",
  "key22": "2EkFBp7Ty2AqgKsnY5VdnAbPRMyhcDsoXTf3BAUJdsA96Q8B9UbQSwoVxyPde3FKD94ifBWytMgzTK5i8zgp4z9e",
  "key23": "4KxPgcerctPyFgDA3Fpaoynb9B6EHjFcdv94B5dW2vb4WseE7kafUX9eGbffKHiH1uEkUmRPAziytAxKYs8xFEA1",
  "key24": "5i5gnCt8KYj6CvHqD6iyAVVrqL3D3qjs6kCfTiiq9XmdVu9Fpvzviq5qh7AgpMmLC4BLB4iZwLMHG8wrBEz4psJT",
  "key25": "2wM8HH4UaofvmLADaqhWBWFqCvvUevph3zThFyUoxQ6MjdoxZELt37dQrJRFKdGXn2zr3gw8ig9V6WRVknVGYd5y",
  "key26": "2W8YV5XiRBugRwMxxrawonhLt8TQWb69Lf38QUjsf2pQzF5KyGFYTWPoqeynxNNqiQBkkDUeR3iCnbnooBBnXQSB",
  "key27": "3Zv2GLnTm3pcez88RuWsP8JpRMfpGYEuqRu7q62SMP6tTaQ83ADauCd7MeL8HtN9cTb3ZP29RwiaqNBwYhYQpedK",
  "key28": "4Xd872y1hYmG76neeJgte1po1ntDqDPgZTvFKDzfBBt6hDVznYZtSoeSfSXsxJbSCyKsNjcHGkU4tFrwmkfVSGKS",
  "key29": "4jRvJzGmqWcDVxxbhsBExsKbnuYQNBmxQ4tEmnxFZ4jgE9yeiuchsA5YtVRmDi4VWNFYBhTRyVCYC7dw91Ra17Eu",
  "key30": "4ngbC8XNLoa73SLNncz9SFdFyrGgij8UvHzekZ1w6FHXorkFaALEpJRwtRMJpX8y6v3kjPNmtRwiMiX6pQV2W4Ew",
  "key31": "3mhBaUgUdHLKKEYuTghoey51Cr8Tc33aNk7RCqiYHiddLCj4DtHoFJiaYrsTQnNpQZEGW4skjbWnDk6xiPpBQSgg",
  "key32": "4xKGpvQ5m7cfq5ftZX9LPrEtAM82RVWkZN7g6dZ9YkTjqX2RN9rCbMDb53aPf9tGJaQY7h6qwD7Vezub2JSgM9z2",
  "key33": "L5TosU6fzNQJPHR1sVjrKwxoy7KpH23mMH3XWHz53akcy5BK3YvPNtm4KwQQ5QCEFhnmAGw5QdADWxVFqpSupcr",
  "key34": "61cx673H6aEAKCeN56kRX41HXJpRN1LhM2A8ohtst8d9baVGBEdBM4dPDAgVN9hJvkRJU54UhdJS5x4FNWfU6Pbj",
  "key35": "3PxPEEsaK9eb4DKh3ZgyK7vDoUDyiVu2XDEUEozgpTzzPqAtky7wPDVzMUNTV7wWx3WEFhyXdu6KGvj4xvvFHJeE",
  "key36": "1V1W3Kdd3tNgRTrp1uCmz8bYBqLC1GSq1rXutrvcPQeVApmFcneCp1UacHRSq7NRye3QczohWw2RN4Agvd3DLWA"
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
