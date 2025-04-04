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
    "2ShKcbQ3kzgdtbbDLL4u7nbyEuu8RrZ4AUmzwTTHVs1AF7ToEeyUDfJpJcc5ZgvtQEa31JTwj4BqmQ4LDXdUSUgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M1swJqQv7GMwbZ7Q4ELQX5RogMNwwY7D68TNeW9HUS1cvzxbKYa8aoU5z7Y7D3YTNNdwwZpokncbBvp4ZFkahYL",
  "key1": "3GqsHGcNmeDmMTXcysNjoACmEdQXnXwyaiYo7LcAfoJJPDFURDzvS7q617shbR2FfQXKYyZqD7NhnvQdGwoUgyHM",
  "key2": "5pJpEnzdzk2vTtWMjmjofmMAYtrgDJR2sTvdqq7RxGH6aStkipidkU5boYNrNCzpSW8KqeCLdDQuVQef8cnz1XhQ",
  "key3": "TETGcmVCfgQvxunK7D3CRTTyRttAZMewv3NERi3QL1pCTSbwru6dE78M5DqYmdPqTfSDV38mdyzUUQisioc41ng",
  "key4": "5NToo4CPK2BgAMPnbSvV7bJotUHbxMWQuu4Fw8ECM4QxAoW7uoZpSizHHffxm4yQoqNyUECwYMmypn1JaWnQXif1",
  "key5": "4dzaHgjJ4kvnjBbx4MMsGKt85ULiXUeveqqiodGMfbZxw5aSPYhyBAB7cAEt5YgQ3ehcRUjqMiBXm3uzSeKrKu4L",
  "key6": "23RGmGjKMwscoBPhtzqZ3Hb4DuQT4NC24Jhue1DfqFZFHcB2QfVhQ6PMBX3zk4DQ5ja5KDVLrjm3ZAHVXdHRWdtt",
  "key7": "3fk7ry4apc63Rad4n4EzNhMBMmtaDcz2ZXJwSZ4WuHmfbeYxJ7iTkUxWgShg1Z1upYuVNc3TRumsfwtx8t3iGQsC",
  "key8": "4uq1PapTzip2HBhyohMTZdArHBuawBBzoPrGCCi8YEXocy9qgAvAeKuZDVdD9EEhGYrMnKZvyCpfaJZLchaTW7Zp",
  "key9": "3NFrtL8ePdtyR2pVjTcPqZxNBiKMCHQKzQJZusYcmdcwNNqgUnugThMNUenz9wAphi4UWmPJsn3pcU72qggQtx9f",
  "key10": "3Mu87yT1zVFGUh29VSB1Qp4uXMEBUxCz2egJGSjgFExpbrHTUzHGvy7gUTUqAo8w9BTEc2v6ksh4geiquXZqWuxQ",
  "key11": "qcimDNCGAKX9y6gAWS4CN1QeZAM76SaMNbJR9weQsadNqno8aCE7pGLf2pVuqCtnio33krnhGtGVMbEiQqGBEjj",
  "key12": "5QBBkQxBzmcwD3omWYyWLGjWtRhYJKpmo5Vtwh6ThbqGWX7xf5o7YYTVx9xKmbt1z2qY5DYDHfUHc9Kn9UAy9C7A",
  "key13": "4itQiBfTRVgfmv1Rbod1X14QgSzxuGjsPS6JA6BvnTzHePXfJKReqx6NGqTrc2EMD6MBtwfHTEpRuX2XLpmU4Tbt",
  "key14": "2F3Gjbfo5rHnrUJVgJURPjzzD1Hi7CgL7B6ajCHULeViyvUHmc52EecJ3ynshggUqfnaQFSLE6ASpWc1BvgZmZTf",
  "key15": "3xLsfeLshdkLD8ovjkZqAhSVtsj4WUR9KCVkHj3JSiRhgZUFi87qe5Key2TiQ1tfCnJUeXpCsrw5zUqAXGPWGfEH",
  "key16": "2VgeC5EzKdhRZymdT2KGrxQfAZzsmthtmfzoiNmadBfxE7HiXEcztM3J1ZzBxGwnmwwKGh7Ss8GCifqz4jFMiKvC",
  "key17": "ooK6nRLJxiRexa4MF6J6M7vJVeCrjSu8u5bwGurZNUTpAcfjNHffQswXPNDM2nXoLEup4tQW29xAQDPuNHRw19e",
  "key18": "26xrTPgKpBwCpxVLp753wPZSwsY9LRxtvHoptyiJMGmJomg3q9fGhRNo4MxhPxAg6UeM392gQSdKdBARgfqq6mBS",
  "key19": "4hsx3NXwXjRw3p8Ha3VQgqrqW1cqZ4Tz9zU1CjV4X4K3ZdpZ3ev7aNmncd2YUxLd1uK1X1i721T17TdZeRjPpgx9",
  "key20": "3bopaqmkPmJf5C9AmAbTDqTSgW9mh5rATPFn8DKc8fQAtN59KMnENLUNv14A3ASzAPRHkWspWdHGBc6ZjXZxVZvy",
  "key21": "51EzYUw8YkSfzMsTfk625VvCDzma7qp55YWKfA1QqLwwswsMj3zFZAtXZRLQEHd1Q75XQEmgugG5hDwUN9YDBfaA",
  "key22": "4zUbvKCAKWHNXfBLez7tmzhUTofkbj3wcr14A97ViFzc8WtEfj9EjCFKrYVWEbX1SUZYWorGqR1WgkxSj6P6Y4qk",
  "key23": "VsTZPii67sXtTF887N8KugUkuDP8TFHhfaZZVAhVsHnXW9wKtPuFNmW1VWCt1KiGKm7U9ND8W8418r9TAJzjLjd",
  "key24": "A7BwdVCqexTwikPPmUdZrjb1HPEYG5B4YafToKRRwrzHo9q3ZMpuA97KCG5QoUUih5hB2qykGLp3PJ3CviV7BS8",
  "key25": "5LtpxitMDHGVnXksKATkYB41seXTYj6HLpgPNbPUkrWEHW2wFUeQoExkYMfzGRQVWiE7mYbH27J7cY5gJoDBtcrQ",
  "key26": "4xtJEq3XYrr7JLRTXehLNH7ZWydULoktxoSM3xMQWd9bkzRxDPyqJqm2V4sCcWLWBo4f6jMfod4n1RGTCRZuVw2S",
  "key27": "4f6yxzFiRok8FzNBs2k7de9BjiZZ3AehEGmXNgQ6fyuLJQ7RJHbsjzR3xJvef8a7frJr835JadhuhCPKUV2XNr89",
  "key28": "5katwYFXqtbgKxGB2Uv4urPfKhWdxF3YRYqGDnz6Asaa9LVavQZzpKKUGpRVNhisnRN57ApL8qPRRsxkTj7TZtJT",
  "key29": "34DGL926gjezgxwj8K55bnyoAXL4MKKpVDWV6MUxr7JtoKDRJzNNjaL3ot8DcUrg6RrtJJXrpVB2aCXGYnLsTsFm",
  "key30": "63XALE2QA9m9H4wMYkXn9YD7Rhckg3TzXoYu7ntZoUAXHdRDUcZYpczT3bnLKUQmJNyU9GD2vCxj5u5muBpah2pg",
  "key31": "5V9bG37MwR7XvkMKPHpsNxNMhQx3T8vEXZVeB2MR2JkZmGi9R1MQWYwCjKn5bNgVFTQw3treL45uDaNmpuGB5DbH",
  "key32": "5Cm3Bxa4hv8vGSL6QcVW6nE5Bi9W6k2SZD1AzMS3vhHxuPvF8yxTQFtsj8f5s3YkfWLa6KBNLEoy9rffgEafYXL8",
  "key33": "B6LqWwRULHZTExw5Hdn3WsJBVfov7pWfM1FdiADWeLT5i32nh4aJAxyizrN5WPaQPE7wNTWKsXkGygBft4cCxF7",
  "key34": "3rZKE2APLu2sP8SrWeUgMnUkAA6uEYPWQuFJGy8us8JQYzTnki3SaZafgy6RSpyguqFZa5qVfphZBfRwrL957kut",
  "key35": "4mXgxch7c3257H5zk34FYJGTAJqpQwkYMnv4MAyKEMSJuZ6jEwifVow91ZLui7WDefR1GaGkLqH3CJd62UnDuM7A",
  "key36": "3pLTnYuPDZxJT9c8vTNZ6D7ww9bu3YLWBUr7e1qjYg2kf7uR4aUxiH8e6ydH3KDRUtNGDFmD3pdnefWy93JJDgAb",
  "key37": "5KijasnQKPuf3FQ7qScwpRGLCqNGTLvzgu433GyArqQY6Gy49Z5oiTqFVKhf4uSoJfpXEUNqDeLk1GzUZBz7YEy5",
  "key38": "Pzx2rXvETUxWnmA4H8eg9tY2WJgtbNmdQS4CVMGjp4GjS2wWLTZqTd6xHGvv4NHTtkaibbTkxKetGXLxCzDECnp",
  "key39": "5HxohrmtoCKBY6UUXLvmShUtSwKQfZvxAjdza8hXckLxaeDCfknLKh6xDaN5xD7Jy3YVMQwFYF4uA8NShAE3dCMd",
  "key40": "5UsSb39nfM1wjamvpN2MeynSmmSMsWFCjhEsPrJMMuTeduqwTma6jyQJHumUxL8pBqJ9Lex87H6byJiBjtXRvbZw",
  "key41": "36CAZWhkfgRW17k7DrdYCXuEoaHwW5qGP7WEMATLXFpp1JsHk8HM8AdDdmCAfwxse7zqP1HNte9xx7shpq9Z7QAg",
  "key42": "26ijunnXWKuuM1jfpHrZxkvFmW8NGBYGUoH4g5igAxmGydpMYW7Jn82j1YbJzzMQ7eLtpUeoWFx1oQqsxvANhprC",
  "key43": "631iq42VCZuynP6RKACLbQVbghiZHSjRiDnfGhH4oDwi9LJYGtLBKUt7UevshEWXRds19uGoScw8t8MHqR1wDVzw",
  "key44": "91h7YZx8otNGRSyoG5FanuTTsfTkwVAswzXNxmM1Fd5udC37k13P1GeJN4dCdcUqiz4zzyxP7aviDpMCKrAgvtv",
  "key45": "2sxufvC1xE4ji1Lkg4g8KJ152tM45EwCJJRH1j743savDBXd96ogTZz5u6RBd6BCkTSM7SqrmQEvibVGpgb2C712"
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
