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
    "2u8KcKDNVUrTWfffDhxJuGJZ5ViZa8ZiEJqX8LHiXvpTBpZLEgyTKm5Tjec1BiS9hLJo9JWtRfBTCMcXuNGcQ23o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UfwSSr9Be58TNMqLG6mdwiNRYSNaQQ7RVWPJRT4nqf7pqvQ7rX8fQwSgNLrMLogAaaSLYqc1VUZjjbY7fWXykbp",
  "key1": "3DEd4pFLDk8TQiXtrNybnnZiRFwBYzEAkmzDFbd8gYHApyLdZ1HKVAQa9j26javFp2n3smyZWcmEJWJcKnGXzU9U",
  "key2": "aQJWFi5dXaXvimr6XkjdUgXcsAz2F4bFuG8jS2qHKTwKK2HvggsNuqy9SreGHkaNQT84TaMixtT2ZmKV6qaCyB2",
  "key3": "5Ue9Pbdz9EGmqK22TPcQSDsqrqsLXqNbqv6QV9b9Jzqa6ELwpnnepPtz7o3WfoKtAcF4KPyXxbEnHjY2y6xCWon8",
  "key4": "2uHdj9EfbzxAJrBYiHzgjYA6m24LFRQ9HroPHWdQwHcEovMtyWK117L6PJzBxLCxXxiyZiZHQQpoV1boTRGbtiQt",
  "key5": "49uNrwny7TZfe5nzmc12Rx3LRWNU3nqSEppzFUMnwks3NPdUAnWYfZSagtHKyE9ihK6kRWbsLYfsXBaVYyWPR2qL",
  "key6": "386TmwK95ynipJ9axk4fUsVrmbMcAMU3bKtH2syKcjgQpsZq5N5n8ZMcPnBxWBfxV1Yk45t28A7WE8fud5X2uWVM",
  "key7": "22GKBkA6YPUne5dXBKVThzCx6Tnu16JvmbxDDcgwQW8suuLgF5nZWmT7kf6BHvZ9BeZ7RyvpKNx9RXKXiTxZirYg",
  "key8": "661ZqrW2Ypvb8fa62MsZLSxqbE86dHNpG7NBHH8i4ZxfWVdUjwjaEvfR4CQFiTvjCX5gBmctEgDV7dgj1FepTao3",
  "key9": "5d4iow7UJZ6XhVREeVap4Gm8qwDWEdo58h12yKwohxVCw5HbsMzqCgxeGS1n8Fo7LoNmvuHsrmhZGb9B4z1H57G3",
  "key10": "2Pp7nEPyFaEufzE8WS16ywSxrVaGyZ7bp1FUmmTJRFDQUiA4XjEHKGmsnh3e7rNAMAUBf55PFneWqCvcRyjtC2MX",
  "key11": "MXvCfcxbYvfYGqNqSKHeacEDj2ByQ2V8GNsV9NnwPHtUpqot2pnk8PmrMsN8hikpgo5JwoGML4a6d4KgTEreocy",
  "key12": "2dFAmgnFq6ZNHfx48S9FD2h2JatJ5ZSABuRPbQfAwUmf2XrvVuv4x7pE7QCSoFRLHCMs1d8xkiRccj5JRnKqnn9y",
  "key13": "4oKbF7YfKKszsDhVYTjFp6vzDDXdD2F2mFyn1oLBrWdVeRUAkR43V9qptsXStNJPqbYSPS399AsMXSiHYyrShXAw",
  "key14": "XtVg5kg4ZJ61rvdLXT3QfjtW1x4B2DEDKs1gu1uRg9WSioVdLsDULrNn7ZvhPqoTHdCZfRot1WfykpSDmfkTbic",
  "key15": "dLXLqWnb2YQjFSodHKT35E1Lgbct4HLhpMPsBDKFgW2uTHeUTD9UMR6x1RVKkEwSiXeGV3wsQaSGWbcuQZoCwBJ",
  "key16": "3LmCM2zxu2jnbYGbZ68XNkRxscCsTqXifiBRxYmWSPs9UQnNufZaMhD3a9WtDfCFZ7D9yYEiDVUMC45AZPMuXn1B",
  "key17": "5BeGRqKZKsug8oxi2g4D5otmBdspXZfpdkM1fdesMFtC43ciSqsh2RTRV77cDGmHmDWpFS8UZ5e8YLje1X3tyyBP",
  "key18": "1fPEzKkuZMZyUuXewgeZGE8XBUv4mB1HJjGnEJxxGb8aYfn2oZF9ZmWFRUsjUw2RDNDnEP2bsd1WdTgkyrZFjkB",
  "key19": "57HoJR8zPwbRfLGdbxLoUZUXzZDBDq3jwUpkJD9fkqaJAk4ZPAHMBxaDmR8FCPD7XdDpSyE8LWQHMRZFGXfypRH1",
  "key20": "5XMnFCyT3vmwsDqABd893TdFHRzUXZkv5g6hTvF6PSYYzeppnNkNuzay2KM34NCio1nXuL2ZTJFK8nqj3xWbmAmw",
  "key21": "4CRVRdZ8wZNAzybxk7LnPbjKchkSDkVZoZeM6fC3UH9cmatdHyqNBGWY23Ktdk8SkQqRfoqggVgmYEETN2zQzFjU",
  "key22": "5udHSe6rcReZkoHZJKAJchgsnHAgH9jXx4rbMgB7uvPujdhJGHGz79nuRCfzCsKHLpxfp57B8dSD3qDZz6eLt7n",
  "key23": "3X9BMTKbyh8odVJrRQ9qfn5petyWRcqqmGD85vStxKYAFUzU2az1MaGQ7CFvEBp4oN37XzSuWZon3AwwXXQ3T66D",
  "key24": "4hct6DKZiXfMYHi8KDfX9X5ZwEm6egkTW7TRbzYSf8deRLur5QGeXsn7C6rAM5qVSnqmLdZpmRET5ANZhkoFx3xr",
  "key25": "5rMPZEb7vt6U4CmyBA7z419PQm4xPGoQDes3AKNH1BKENhyoomPzXPqo7nbJsv3ziBuYxJqy7JJxSiAkEswYRwwA",
  "key26": "2ZRxayiDs9dKu1EANjtyKWviSj7BAi6zbdmmMfFamJicDeX95NMYDu9ivHJyrj9jzT7ED1tKy76hHEjCKWGAtZPM",
  "key27": "53v5HyuwJj8k6ZyuwK7Xj1pQHeQpbdQa6S642u2zRT39Lyu1rmistXbJ99Z8epRsmD5rDGGTkCyNhBizjKmLQBgg",
  "key28": "5Ye8M86f4xn8RXLTqeVaxqjbWK7sqyrqE5isy9vPPB3kepgBG5hLshEfJCgGmnP8UTYbM7ogvMdEyvzuAB7senJn",
  "key29": "2YkWFpiRQKjsF475aeQj1CZDTrP92Pph3BD4voZ2mzN5kJbv6BeuPkKc8WJb5MGbypanRiN5oWy3gD3KjsN97T4b",
  "key30": "57iDVLi3FAhwkxvUBSgQ2WzjKSLZRLWjknefJWCGxUST5N55CbWT1mCcJLxpUQwag4cgC2apMp2kabHzg7M6xLQj",
  "key31": "3ttYq58g5ZP2Y2WUF1LNXyKcVRLNyZS5PfQWrQEoQXDRxm1ZqTB4nD8PU42DbEADjLCYRb1Zj7bKxwX15uAj7pVW",
  "key32": "3P7kjTKRqKcidhyDq4PPkYArY4YRW3BcwcZQNKv843cj857usg5RRpJ3ckGpF6PtPWJgKvXU53Kdrt7xef54uepg",
  "key33": "MSmaPYd2M4rw7SA2JxTdshAxMhEX35PF8yaf3fG5diQyAUn7ZKYRAvW1vBHMorbjzLj3HWRVq4adSZaMgVniVKV",
  "key34": "4947pPnvgMn2tZ2UxcEn4SHUFxhQ3Vxys3WHyo9jNQLFxr9qQqupCaZtMnK28KrAQfGwxAyQwEgdFcjbqnJeWTDx",
  "key35": "rjUPXVrR9E87RCtyLezobo5fKBa32cLhS3RGFFqfRuzfswLz43q1DH16YpZPugeujdVUGwHqyXQCqhBB69KvBbg",
  "key36": "64YdMBV9YH6GvzQ3q9rMZcvMzscR7StQ7efcjgpS6ocXZ54FKmfuWxYeT716UaLc6hrYmQoRxEMGMFy6xXvfDXe6",
  "key37": "5rbmcwf4JzLx4DQEz81zMNoCrrxPF2VZg2SRe7pYRFb88GdZTgNkeequqtXzFQhMBTtzHBvZY5skQZx5RdCyoAuG",
  "key38": "39JHK1jt4fBZNZQWu4fJX8QEckQWJHa8kYccLPLVAmQpKuMwc81eLzFYYL74JrjZCFhKDCik2barJJWzZH1snAzo",
  "key39": "48Swd7zQT2ptF2949jMv3SograQs1XTYAftxaU7qcRzGr7r4UK6F6MzssjmccJN5bgvdndHG6tDeY2sW5XotLNkW",
  "key40": "Zmm4z9TdGbmMx2cMpB1MmAqkdc7SEhb9ySFnd2yemD63ZcbR6dU5rZdHXJW64ViZ568dnEQBMHXyBzz3VrExhxa"
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
