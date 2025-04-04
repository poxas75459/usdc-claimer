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
    "k72z4NyiGkzQVn4zx25boJ71fFm9mSNf1sBmQwmsAypBjzrojYcLM9ichyyEXzeJCKp3TNZfGF9ASRKNUZosceN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GS2n8PWGCMUDgcQSE6TNQmcb3KSa3bvA6nGqyJwHejp6xaraUDweGmjJDJsvqQhShXEZWHL1GX6CnNdbukhYeMR",
  "key1": "KiNZ72GCU6UzCdX7oz6QEmjxptcPDjRphJ6MtUsKrXDvcp3fCLpGmSV2DyUuGBRrCRXqigBJmMTUHiisTnLRXdq",
  "key2": "5SzuY2N3NyYhpb6YkHiNywoTJL1kK5JdT1Gzd2wHAQW3LZfwjYiqu4qRHkzR4F3QyyB6mFA2Nps3yZ1xUkiFeRpR",
  "key3": "2UAk42HpLmCxbUF45YHBP82LriwXtTa8sbBURnVQUFxTBHdNaxMsK153WUkCUrkZCZbkAAsrC7VUDsJzHuCC7m5B",
  "key4": "3mr7X5jJBDYTAodSfvbPTbPJq83yaDh8wxamfJ4Do283zTFuJiDe2XcwbQrbkY9HFjhByeag6YN5Ac52Nsn39UCb",
  "key5": "2XkZXcK9kG21tBcy1SfjW5iDZAs17t7Xdte1neZyWz7FcZGEbafWZ9mkKSt8EKsM9CeKxSUoyFs7EztpJHH2BfZr",
  "key6": "Y1w26jTst38vtJ7wKtsmSHGkcB1sSTvPVzLPwJJcUu4SFuQqeq5ErMJpSwjoDBvCCrswgEpm9F5UqrdqfJinZVs",
  "key7": "2nST5WtdM5YdkQ8LPf4trSc9ogFXS7QxCscGaKy7pHQrNXk7srXbgjKXCAPNib4DXA9ZMHPmELqU9MSbbns8S5pD",
  "key8": "2i6aQFc1QvF5JNoEks5q3eShpw76Gwy5B5mn4Ep5fApCHFLm3xEk63SAzCgdWxksQLusKhWXvokQGgd3tkyn5wTx",
  "key9": "5RzczD4kfqpWA1vMFhbMfdwx73nPrhs2av2sSDWfGBVaBP4KYjrMiMrhZ3eM9Vsuq3MgrTGEAsbqkc4qQLxyE81f",
  "key10": "x2PShcqmP5pNqeU17a7qsHGWvW9zc7Hxx79M2WrdCANPaAswycy2QU9ah4H1SHayg7gD7oacUsQDmhJNiAUjgYo",
  "key11": "3oRmHszNhkax5o2RsvG9oHmH2Wtvu2hfxhNqxcm7MsF7EhWQTzJXSEkAZkU44nZLPffDyH5jrbPE8WAYxgVoTRNg",
  "key12": "3SLirFaxZYUcXTVTdeN6EpC3ZntQQKGk4sqXLcQV7RE7v8TrBxwBwrJA2hL7va7eZuXa55t5rxJgoK6rchHmqttZ",
  "key13": "4kmJFBpGvayZBXdU6A6RjekfbsjVZbNUarkVhRS1wnhjRH5kw39qZr8pXjNhEyDGf8aWaBsP8PYe2uPWQJzmXU8j",
  "key14": "uKjefHNh4mgGwVmPhVpZML3wXHUDYrtKfFL1AqdsLYC2EAWobBzF1GTR4SMw3B11ZU222q22tukJqSqz1BaG9GP",
  "key15": "3bpzmZcGREdUZQU9zXGTcbDeqRxGExr8C8KEdM4YLgfb3RvTPf53wKRD17TzXg2WLPmMWcD2RUZeQ8WUHzEsc6vn",
  "key16": "5vKdoeh7fk39CpVEBKGBnS4J7AMcbbhTBLnr5z7Yk5rJtmapNyXvytB5RdC5DBoFKSGUVsoxc9z5ZpwjKJzCn8aX",
  "key17": "2Av3GYe8RDAHtXKc7CfvY4zGEwoK5BauHRcLY3tRnZhkKsNwTaFBJ1Uv2djMysC1cjUwSpeuVepYdAdeaPe9NssJ",
  "key18": "4suAe3LUS6YvL5YuXWp5ueeKdGgerwVzjQm9P37ZTEDN8X9EKQ2HHt7BN681ZuZAJ5ah2SmewdBrvenYs1GWtFhu",
  "key19": "2NYSak4NTzPx5wc8bVxbyHeqJYCefk8shCSvJrLKM5RHxTfsXyP7fAF8bnkZhCthqw2cWjpnnKtdfT6s53v29fKT",
  "key20": "BWuiHzwH4XPnwurThu3BK3ptrMTFv9h9NRBP3VJkcVz5tVH2jWrzTVajtFPS6x5z7mC5iKPBDGXbfrTfZhDCZMe",
  "key21": "278TVbcuuypAfsZon7CEKPRfwjKsb4yx2WBf7BLrhKFMkdJoJu381AJF5CxrwfjxvC8umnpnc1BVz58QAB3dEuNt",
  "key22": "2rHtR6FiNLcjdU7ETYr5MgJu24frSPNvyuU1XqViA2J5avG557zysNSHbbCg6urVXWB9dJXCDWDLNFWamaB2g7kA",
  "key23": "5qwpEpoqQe9mq23NDby4H84idFoDJBS1g8goqTffS3foh1D8ZknVHLn18dEYM9fMiavcgmDTmcGBqnH7oWxxgWsn",
  "key24": "UZVi3zTYty7HtSdZ6xK6v5guACT2s9G2Ks8XDi67U3EGjsTMJE6eaWhN9y6d6Xwui8vLMEt6dHg9oV6eowd3rVn",
  "key25": "npJ2KCUwXSVT9kcBYhGvMJbqD1aPqNi1u42RXuviFPFrGPvaJpxXgWBbr1PF9YVSdTpWc7XesekfLFBt8xeqmKj",
  "key26": "62ZfqH8fi1znUocGn5x9EXhYYDCHEgVeaZDCuZ6i78fBgDbSyMbjUew6N6MpB4basTH5Zqxp1xyAiH8sy6SGcZic",
  "key27": "3Gt9S1ztx41yEqm4WBDRqNo4eHtnRmVGKGLGoTfgUFsHsjmSZEx4Kqdwv8497o2qrNdRKqJbLWgP9zXN1BkYWqK3",
  "key28": "29vjnhWRDqN71mfF76yGoRMMsePWzZSrY5SJBVQQPpnKDFDtJtkPyfWKYC6LHQbXHWB5Q4SPrmcjW73qQjGCS8hz",
  "key29": "3NR95Qcm2SioKFMmNd2cxfN4VZttyhJNTcgE8VfpQysaBWVrDcCE5BFLYmJydKW7PYvfEQghWG1WQAg8HKusWdMJ",
  "key30": "5x3VBmVJV3Bm2ScqYxB3PgYQEj5vZYd3YGmqHdvxtGp6Tcmo7gfP9wnWoWbf1xChAwSNGP3JZRm9SSYH1L7fzYJN",
  "key31": "3pwhxsQqhEoUijh9WL4ox9cA7uy159mgqYtTXUfS6Z7sy4Q1YZpZMy43HRVpmjpcRTK5vSwXVBrdKtVv4KSu4WQv",
  "key32": "3hP3ntFwzCBQQTiNPyLc59JiuyNC9rUhqDwaTapNB5mMqkpb12L2hbFDmUyNf4XwM9aiD1tUpM8K7rXDutdjUuLW",
  "key33": "3HUGEVhZZqeiDfW2kDhfy2zH4TT1t3AEFAE5QpqYQhKdo5nTrTRpybBHQtZ7i52UqP61CfMoFghezqfPYc4Pna1x",
  "key34": "25jSmc3jZFAHDWesZtEbHUmmXPsbxsfccoEquY5offMYD1xF3kcs9AYui3prLWRhHvE7JKUyrydFFF4BsKHgVXPq"
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
