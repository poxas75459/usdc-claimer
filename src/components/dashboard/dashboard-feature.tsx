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
    "2Kriu98g4rMHybeFpFecFoj8S7yoCP3taBooSvhxLoFx3jwmr4Gy4W9bBvNHLGyDXg1y5RJYeJTRhBfroTJwoK1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V68gc8ojBGV2S4et9bhHWKqyzd8436Q5Xrt1V1r91U25ShUcBzNiMwndXvssCbakzMKufiMcWuf5sR8Dw8JABov",
  "key1": "3VKJg9yMLXSZ24KRrhdn2VjPd7xFmnEGhMawXyiLXENYfMHbNgYrywdKbqj8o6xjRkCbEJLmw6uvwVbuMUSgHiGn",
  "key2": "5bn83HGBQS8D4YCw9djQbVSGu2wh54mSPvmDLYSrKL2VMq2tMKtZnBuinPXfnZxmBGZsAv65UKx4qU5uFgdJrEfG",
  "key3": "3E4CUgEHsDUvHxcKUW6vmBtgaWmH1sqrscHepECSQQW7MAEKFdFswWmmBTVwyCiNQZMgHS88Umsv3tvGDenUbYTR",
  "key4": "5tw7VVQAw7HhhzEtfEbwJTtjVzVMSzRMNvcGrkrgY9ik2AvXxWUr1dQu1csEgNCn4bH8qprh6EmS156uXfqghysk",
  "key5": "3tf7ATCkC388MKCRVV3Qoo4rj1TUn7pDf4cEVE1QTEd1ahSrD36idXKLEcrEfWbSQu6PwkdBsEV5NDddZ19n1Vb",
  "key6": "4ttUi1JQCJzhF5E4WxjaoFpgEwBzGr2qGJDfpARfFWgcYYxdrQS5V11zoofUYih239avpmwTwAcULGKY4F3S9Hue",
  "key7": "3BirMt5ph3ivCqVexBbccDSUDNc8qn5dTBq5XPzdEx2sq1RUp3oAv1Bs3snWTfdUv6KLNA5iZK3CAFUMfs2d38HZ",
  "key8": "4KUDCp4enFUkJECPExCZXuqWwxF3PoqPvLw9MkGcSJ1QoSmiFzwrQLj6gYrUDtCHq4tVRs2phLr8GUJizC61PuW6",
  "key9": "3ojKzGLSgANmibZ6ZGcvoMLvM119ytwTra1ZZ3s8Qf5udnGkx6FYZWW9BSxnQpsdih6K7ffAz9rbujAnsED18Fzf",
  "key10": "5ftpNAq88ADQbx4ehN6Uvc4t5airrLnKGtopmVFFrUa5mCFDAekyMAXHrmeaM9fUQxBj9rZBkYbE3jybZ2KSMPvf",
  "key11": "2uUq1sU4HqVV3cPsz77kHBVh7XA2p6STaT1kWibA1ydxH7VgrjkvwNNXJwGR8HvD33p37QkC36AQjMEUSfhkriVd",
  "key12": "4J8cH3zFyASscXHdPDQmMxrZFQtXmTt13gzeTCo14Z7GPHMJ6ymMHQR4y7jvNRHuiKYQ3ifth6uh7wfNgmBiUnqX",
  "key13": "5We7paTWAKi9F7feH1SG7WY8k2cQwo8EPfECQJ7RYvGGxJH3Mo5zzdSdn1zc8aPQoWiiVyfZ3iXfSpLdV2MJybqr",
  "key14": "vkSSEMfHKrMjBW2fZ67XjexC55eYsb4orjH5Em7V1LchzcDyePDBRt26nMgXpttxhmboRRQVL63xgCQkYPCXBaN",
  "key15": "5oaFwQkojqVnwbxi2o17Box8Qk6eptFpbY8m13asXtWLnK4BgP1tzTRdAYXwpa1egsmEuy9ZFWku2gN8tBThU27V",
  "key16": "2b9se39fibCVNL6MniLCuMzcjEjDcrH8RA2ALrdscfv4aWV3RLj8pPQhFPfCmDanBYBn4peDNWAJdreSCn1HDjp3",
  "key17": "2gYig62DtCskmZyA6CQzRJcTt2D7uhEhXg92nLMU2mCgcJBAjA4zKWQACJjcihfWHyoGYDXedkNnYHkwHkURdkgQ",
  "key18": "39G8P6pGsRgBwUuGsq91fSDuhfVVxQeNHshj8j2dHWde7BYMXcvMtsFj1i9YbboZxryhAfBieeNik9UDCDBLon2a",
  "key19": "4ucU71DpyQ2N1kDmBpZGmmCMy1uKwQfCGiEcQka1hDWgEr9ZCN8pghUgSsF7eAuqKeUWeEnsXZSuHZ4kQ1CkVqse",
  "key20": "4GyHPztpTha3eNwLQUPFzQsosrPt1PAs1NcXCsS9gqSCfAVn8aAgaDXj3k6j9iU7BcnW5i1kDc3RGmqkPoxw9MjW",
  "key21": "2VKymJaQ2BNybGUVd5Jf9YciyNMJgWNshsrMzLqpegNb57SqWE3vHaE4TVaznKteXMRYjLtiwMkHvj4mdbuseku7",
  "key22": "3usqRxduLT22zDfm1u12mLQaeo7tum8T9bnqfWgqkRHrdhAF8JyyA62csN2shqj7ggUL43mXXmuCvZ4Y5yrQE74i",
  "key23": "3qv4q8imt33o8RgMjPGywCK9p6CzEsfYjPYAiWWLYfbnQqBGHSXMiw95K5tEgPVxBGHra5fJ6mxwvRndQPA1MEV5",
  "key24": "31Wrguck2BXS67HVngaPAojUgfR66Zs2eZ3YLRtvcmVrcTH5z9M4aCCixUJKhbs6BYZ1PxaEY5URMqpPeeECNugz",
  "key25": "5g5AQn7G5q2TN5ikKgQ8ZYwosKFWNpCBz22hRHubcuvxwo9emtFhQ2VhhErrSorFDY8ZEqLgSn1kTRArEBE9uPU1",
  "key26": "5KuNKiHKN8Mdv29gnaf4zjhh6XsdnoWhQQcuuA3e153WrK2w8rhiuYwiKURbSaLADBXsbxXoseMG54SGpw1FQZqo",
  "key27": "5dNTPwadaUhs1PeaCWpLThZa667C8SnexAwus6hwEJoYDVmEWrgn3upmQh5YRZBD6eCWk3jajhA7GTPGGUPpMncf",
  "key28": "zUPwXJYyioT9nmmJZUqBEeUYn2Lf7CVJc3cgHsMv3DLgipTD3qgiftz8Fo8BXkvbUfvHwxFdFHuUrRWhvvP76ah",
  "key29": "5CZmgTUExeZfyHwND2zdK2auFNG8Uth4cXQhpzdDK9iBs8XydG2nutcSbkp8ddquaogAmcb5vRjJo7vhq52vcGd3",
  "key30": "S63tkLWPZuNZkMifLYKVn1hRBDJ8rVERQg17EvCnGE6C9jusmCGLiHxk2Bax48mR2SGhN5V8MWccJcp6fWNzHcz",
  "key31": "4daYSxYLNgdghQ75UhkGdyMZxK2gqbigYhtyLRun77PPmjmmnA9NyfQwoAJP8a9k5UMesGshE2Gp3VNmYr97gRst",
  "key32": "5kRAvZYD4YRFKz8J37gUxKFqpcLEu9DwnRBC1ntLrRGSa5itzv37fRyTM8mpv6HjBTUPFEWYJSFWWCYeAQ3urPYG",
  "key33": "AAsCQ3T1YMgLuAi4BJZLveLx7odf1S35gToqfGiAiPAqX3pK44trepxhaEcpxAb6do3xSRt8ttMxctT3vHSGFiV",
  "key34": "s7CUYFLB21tG6Lu9VNbZ3GTgTgAJxF3gDgAf8zxkTkBh1qo4cJ7xXURtZmAQicpQmWBK4YDsrErgg8cf2fsj9bC",
  "key35": "4a7FdLZ3uNr2vUL3xytHEjEbRYM3AJBjM2KWRVfr7uy62uk9VKMiijq4qwHrvsa2fyR4k5r5vA68BfWbbCmz88BU",
  "key36": "5wVsfC3bzWDUzBL8caPJioPp6dchPTAYNV7Dp4fmPt2owxqcxUaQkq6xZE5pQZDJPDZju7wn2MwRSUwvyEiNwj4r",
  "key37": "3oDKBPnkyPuJsxpke3bfm29artNwt69sMcBshYsM8TGGgP2ReVmjXWVZxsGVEZGkbgnd4VkpjuvCWhniNw7D75Pa",
  "key38": "28FHQdJWS4XHUo9dW2tendCqYXHFUFjDnfFdNirZWVZtmmULYunVDv6WgAyWU77Yrb7FAnAQf1zvJUUW8PqQ48GU"
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
