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
    "2X4Xs3wFpmYehsFtpVtLQ1PNki8D6jg8VxNf5Xfj77yuCgJavSn5V8gzero7BEc3rD6a4CZyjJxNsYPmqr6uQ33q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FP2XrK4WMCtEMeVjiRraXN6BqqUb9H1BxhRuDzaEx71EzNAbvFVjLveHhQcePHWptvAUoRVBAhaocs1eTC5eAgN",
  "key1": "5hhf8FWDQMC16fvZ429evcgK1PDdn6x9LCoakw7SiWSXJ6VCRB1rcA2Koe1T3NRUcYzA8Mja64TtYmf4PfzePkYs",
  "key2": "35qrqQJNErEbtzF1fhWcFckptgDaUsuhs85iNq6DpmWsRnVWEGEZEQhEzwma6XDgWsCQZV8iXAgByyUBFKxf9BCu",
  "key3": "582GzSvb9jPAAoNxxDxNbFjkyJWXojgjnHQc3dobFTCaUgrm4QofTnkCcZHszRL84pMMV7gJ4tLA8YUFfexEfHpx",
  "key4": "2T1PvP2qDS1U7V7oZyYQFdip8AjipY4GKKPMm21mypPDpMkRrB9pccuHs6rLqT5h6M2VjYHossxQ5awVMPVBqX2w",
  "key5": "5gjmy7CdtyxgcmisqFGZxJTpUrwPEUQ2g9B8QRY1iZtnurEj5gczK5q5pucJrVScJE9ExTjyAdp7TRZumDnRAYHJ",
  "key6": "4zcMjYStKcF53LF188ync2ceHxoijad5StRLB1eTPkr7FzgX8Pr5hWEe2xRbU8mWej526jWH9p6pz3WE4mU4uBSw",
  "key7": "vBN53tV4VmGJyQtFAe3aJ2iwd6aMjf2oUkH4rvBmSnwW5dXGJ8VeqSzWCXvv14CoSJ7e5fyjTPMAx48zDDNjsVq",
  "key8": "2CJAS9Don7EZee6c8J7RzzDN5mgo7geGB4AGGtvzPUEWcuBRJCEQL97AXwak39DYFankszcp8C5r1ZT7t4Ht2pGV",
  "key9": "4vh48rVPzwb9BQGAYvKFefpJiB1HeCRBhALF7ogi9AU3D5HLn34M1wMvHoYnoW5Pmfpf5zwrCHXmoedLqahbXZqC",
  "key10": "69xUikbXUYXbdhgb5YvQggaREprrtHg45mQatDXqYJAvE4u1msnRFxkDu9qz2Mx3FQKgzFCkcyexYZMahmyVsvu",
  "key11": "3tWMV1uA8mM8tToUTTYfd5v6xCHsEZYnBYgXwhdhWVrsLoFgwDvyER7ZEYhGQXqic9tP78Jd5rvXeNSbR4RQKkpG",
  "key12": "i5ut2oVB2QyHLf5M92ZQevQa6qJaM4i7pA9ozMATu1a9cKH8X6Xj8KYxx6WQGCRMQqQJoRTwJzNuPJR4kVDJUEF",
  "key13": "2Na56EPebrxMv76vLdTJMHpJEaKqGaisgx5jTL9Z9AKnfSHpqJuGu5QJE3ghNDVkczhzWvZCEyqbRUAKFg3a2wk7",
  "key14": "2qSBy7TEcLA13ZCDf1qC2zKKK6o8mb4R5c1GzmXMQ167YQy5LYhuH68YRrXjFKDRS7bqyo5Lx2Grv3Yy6Y6nu67t",
  "key15": "3pbgdahxMh2cahgpXNPRvUXyUEZRdpHHWfQPZDtzELBTdXuj5FraNmZ9eoGXmt6aj75UpCWcyVpFZ88rSgsJQoMt",
  "key16": "23isSd3MQXKCF3JHebMzEMRZGoJJ9Y5AFmUPapEkQnenePTLHYxyxwMMRjVmMpXSubGHaZNsppAdkHZ44cJYcbQR",
  "key17": "3RiknuhenBSLWxkpJ6ydcCZLQmE8RkKo6TPJ5HDicjkHymZMMJodwRuzConSwyu76AiBTbMZAkM3nZdhK12N3cBR",
  "key18": "Czsu2rRTR1ZHrky7otnV1zWDcwefhGNHxe72oYS1qCYh6WGppBaznSd5Xpub9hqeYZfqhHuie3aKAPfiWtQg41j",
  "key19": "52iT1dfpr3n6iD9mgC3QpAaZoniZvj4FQPEiWkU7LspRXs8svNmRe1aSADjizndXqe9yGn2EZiYkuqMtd5VbTGpX",
  "key20": "3NGcgbWGBtUyWN9uQpVMynBW34dHgkG5RsCX9oaQMzsxqsWCUCgi8XbpFEUxDSSRQNuYhE1zpahNkAsvZUngcCUz",
  "key21": "215pVPhojvFYDqNARVWnUob1J5q1XUg77yaY2dCWHK5QwWsHaoZerrTUgeZztszJfKsvoEzWZmeQNrsBqehJeRq3",
  "key22": "613ra45YiamDobQmYDkMJbb6MmJsitUiSSLNFCPeQ1Et18ku4ww5Tb2sQaFS5XFoxP52JDBr35b6uMFb5dJtLsdE",
  "key23": "4wzoPYHCthm5PbgfTCqPdYq5YPxVgRpyYd99XhhmEjLiFUUNH18bhuZZdNgJXma1coDMuckWddADKbxSwrkFU5Sm",
  "key24": "5ovdzy1uG3f6R7e6BWJK3GAYqPvCLYieBdJ32YqfDF89oFz3AtZ2mPbJe3kSAkWA1JxJcuohNjHjmv7dWcYfhJ8P",
  "key25": "47KBkeYqwPqV6BTHwyUNztCAiUvYh61e49wDmdEQkafEZtHCq3pNB2zFwLB2sqDguLMo15RGYAhXVEJTLbtHbqHa",
  "key26": "3x1mL2j15iX7n5wYFhnzA67bW2eQviwfXGx1ywieQN2kXcFvAscfdW6GMjHDH6UMthwJeFWLsgcG3xt9iAgJyxN8",
  "key27": "wATnAZC9BhVMvTJ7deWkeFVAiqrC5o5kHT66aYv7S52SyskaLM8HKVgPUDrx9xJBHiF6FEpMiEEZG1nVBapfAq6",
  "key28": "cEmpHV2NPfaWyUTYSzEY1o7PzJPUqH41tPJQFV52U1vuj23woPPkDBsBLAYVCAmXQe3zF4jKz71bN4TwizyVN9a",
  "key29": "4hcArCFiPdVpSb78Y9giagLvxHvt3S8cyPqNibaGhvnbw5s9ayGQRPQbnvwYX6iFQ9ErWFDiGpjUCxXkkSwZuEm6",
  "key30": "3EsuJYtK9kd6sbgwJD3koT9zSDTPRjk4NXWfSmADYhi14V46F1DdexHyDa9BPGfHXqQXsK1HcDcDFsXoG6jX7M5k",
  "key31": "25XfQYNq4L4pWQi5E34bXGCpG4nxEfBZKzx3AMT55QySVYTVqgE7iHgTzGQySYxv7vofzr5nbe1EMU7Qyqr4C4qh",
  "key32": "57u3GbFcH4iV7NBCHp5UUVrJXu3D5ath3Pz8GYhbd7msiq9vYTYoouxo9amn1cUSgTr2wFYaQQMEXsRo2yJzUTuo",
  "key33": "3S4NsE6z8DhmTkPdfGgrHrkmcujyPTzNbP8tdF1o12QGfHBp4Tx9G1erNw3ck8N66Zb7d9qFCVkWkySJwkZ5Kw8z",
  "key34": "828LtKkoeUc4UExwy5onmn4Asareu9zp6XtxGG2dJ3Yu3QCKGy2qJs3vJ5sfxPFtwevGkMYch4nroSdLUNceK2t",
  "key35": "4PGt8TdCVEcQPScJ9PRquVryc2mnAD4fMGYXAm4Vc35wiM3SMAssJt663kfCa5VGv1tbnaQUrrBrXf7ojYL4RMhK",
  "key36": "3Rr6KLLTqnPGKP51cL7M7sStFgaV1eWs4aLhjmBS9kLtcJzXoeUtpoJPX3DQaKWuvsXXdKwhwbdVboK7tPjBPYjm",
  "key37": "3F2Rix2aPyLfTXJHyqmLHZoAovy4HfqKmnrPDaDzSFVwV1AAjLMtynkkap4Ezr3XX4RiSFsDXfYKKPWQN7WApJFf",
  "key38": "67aZSgguu9r2es4cAG9zoLP7ixEeTcegdmSdcfeiN2XnkPatrmjMNBXSiVWkqP4h8oEGfY7SeVLrseGb25WDvS7x",
  "key39": "3pLR5i9YmcoNsgNz64T4PmsoAJLNNoQNGdVkVQC8ndw8M8VtPCRah6Eb6K2oijCwWgL1kdkn498cvLydxeHQg4zy"
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
