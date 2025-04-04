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
    "3KNtyR6xoRCVxunDMx7jr52wbQSWUA1YMfZMdins8cvP94VdJLis1EWbeDB8Gfv5soKNQPes5tjRB5csuocj4ggm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xrbfo63n9TB3fWrfj5dUjxMFNdKZRwDFx3NQKLFsBoc6ajYFSjiGtuokyinPTjJv1wYq6ARNJdFLuN8GaZEFuKJ",
  "key1": "25vRajMxfXHV2FPsJ6EMQqd18sqpw3YNbpiUu9AGuZHNo9tdYaZRnrA3sKHnW8cF4QFBXEPx2vPEfU4Ag47zmiNS",
  "key2": "2d976Eg4DyM8JdXRUCbWEn3WdWjnVLQKgq63nk8YDmj84bjXwr8i8BwYNZvWe4hPGaLQoTzppc1GmLzy86eoRuZc",
  "key3": "5AUkdoNJ8MZQskdfe2gSSYAPp9v4ycvX6GQovMJygv1VjhnjAyGzgVqXxpJZDU5vrx7aYTG617uCHcq63mYnh8W",
  "key4": "4XaKbXFkefktiKXJ14HaraFxFTLjccAHmNbuK1xFGeJxFuAvYtjb5f2CVkUbp5xm92c8X65sA3cPsqdXa5b5kS6F",
  "key5": "3JhqFrWSRXh339Hbz1YMpqF8Dfpufj1ggRV4LUEYmGDvS34UkRoCagfK8jSU3SHDeijU8cUmtiL3hRAbfqQnpcqa",
  "key6": "57spqMrnPtRRqsE1juVacZRca5njeFmx4xhLqyDkfFHvV2gNH9smv9QWz64KnTP9k3vFLdPR8t9599Fx9HNWuq6r",
  "key7": "2wUjqY7v3PYDESEiSc6Vr9DSAFjkuK4a5zBeotd82qvf2AKw1hV8GZunWWLaNyN2yaQ3pXazNt13Y83CKcM3DP9d",
  "key8": "3zJMA3g8XNbt3mNpqVUuUaHzbNdAMYLxeKXeFi2mGwi4w6WNsE4eTojRcZA7pKqg5Yh6fQ7Evuw6V9xv5Ev9zxLa",
  "key9": "WMXUhWrLddNnvBhgrHJEUmkrW6ctJQVu4oiXWULXX46hFjh6rA3B8rGY1bzgPnzZbeHCW2axTEHTZMdLag2YDoD",
  "key10": "pJWgCyUvTrhiRS1GNQuuRfFHtZGeC8iavA9WBba78AmGgfrRk6mcqPo3smkDRA2ZnnPXqh1WwW2n1YZMx59Y1SU",
  "key11": "43Px81MCWoUzLsJz45GV881CXduPXUvzJVQ5zRo7zPqMKDAaCqqqm3y5kDChcvBtQwWw4Hb9rvxiVLsekUMHDDCC",
  "key12": "37NApP5jJKNzYMW7SzF9tpcg82CB9EF7MUhY8gt89apBZmzm7X8pkp1ExHDyQh1frbxmZBrFLtdzUzTSTYKbLaVS",
  "key13": "4TX7v3HZoURFVF1xXsnkoCewb6wRbEiamZAhnMCuntm3w3cBgzJJuyoAF6iE6yT2tCDbYWC6nyZUfvZqWvuPN2v6",
  "key14": "4JyG4QNKk513EXiYHXiJ26XR8AdjLsh7jys5eGuTV8NKqJDm3tK9YFzj3DGY55zYPQHTBESWqvwLZ3JDghnLkkKE",
  "key15": "5AP2KemuRQkFp9rQkZTA2e6oxBe1jeAZQoVRHVXWBaAxaRbG34hm6KJjgNatpxSVPAqpRu4quvM8p5KmMctRkwv",
  "key16": "it3LsbxKweCVL6Tkgor6gdFEVwJHLGbJekcu5ia5rniXnnKbKRvgpXCutP2wAqhyRZvDTQ6RSkGEgF1XV2kitYS",
  "key17": "5jbhM36ZqriJmZFkiAtmGbGSs8tNFHreNCzQXXo6XFL39YVsrk3aiaMtq48mrhJiWfPfgboCvrqd26zjK3oiARpB",
  "key18": "5nTBET9gWe1qTfRfgSLiHkh25BNciXsxrwkWBBAbHqe23V5c4wXHqDKHGFLCgAikWkLW3aB6uLxKKCzohGZ12wsm",
  "key19": "441uHXVosyFMKxxLXBXCHfEXzh8r5JmvttJef854jy1GNjdwjv9KPFSeNk7guDUQNsobPsEi98vyfAbWEzRsPH2S",
  "key20": "215bucCUPApJ7j2zCteW9Jfq2xGxRsojE2YjAxghL5qG6NqNadnFt98T41YDpLosoDTDTjX2tgjUd5q2Dm6Qy9ov",
  "key21": "2f7q2Q29gR2ZfWrtxhwL7FPtWtMZ3u3mU1WFE7Ay5r2NNhVWnAFJXS3nLdPHy3eQFxAtyEjgYdJQNrAmcJbvSPn1",
  "key22": "5Q72aL6QHv1WW38u9yLJ4pfy1yKd8TzofgduiDs2wUAuVtb2ySo9Evri7P8s3Xgw4sZ3yUt1rKiJ4aHLZkK1f9X4",
  "key23": "iDAdQ8U1w6qjtsBon5LqRmKTVkfHmFQm1vJAFC1JNfe23BhjvfjdxhT2V8ysmbQvQgEMeg6dbF8ftHc9upyvdTj",
  "key24": "55zBqxXjDhqFXmqSBnemMon8UxrD2SzKoL89zG4hUPeAt6PBHmaDuFgammbbb1dk3T61vr2WpMm7HDgcLsTy3VNG",
  "key25": "3YprnWqMoJcWvdANhq77upiYsBurWkY61kuqYkDzkB6VbchzBHv7N6dee1e1euhfzZv2HiUfMZ3HGH1HxomghjNR",
  "key26": "AawPvtfRkNmZTU5VhGnjjWRzhhGxWdCYsK9pF4Bs7a9Fq3QWyFFBzTbfwK6G7Bx652U8rN3BUUji3SuMjsB34oQ",
  "key27": "5vXDufkhEBES7c5Y2iPeE1SJqA6uGqFcd7mQq6VRAQfJjVKCumMjrGLDdSnWt3dJU3azFyyXgDRh58ZGQhXQuZ9u",
  "key28": "92kJ19xfJP39VTSkNEMXYNziTBFsoLbQzdPCBVTq7cR6Z5NRoA9Q7UuZPzVFKj543uvb5UhMysoT3WvnhhCfv3K",
  "key29": "5K2oVaudwUAkWCTqkiuDdFXCBhDiZJzKKtobs6UWLXct8HhnXyehtYe5tq1wEZWUceK3UunZqcEHwtKgnQyzDo2F",
  "key30": "2eBXoQPWqj3CeLZ3H77ge8iBtTcXWQYqehtAmcA5s1qE4AqAwZ5hPkvMMpVi1XAucKRTJU3o28K8CWkP8nRkFWKw",
  "key31": "2UBTdXXewDRoFuePZvTmzerHYez1cR6hQrRKetq2hoUnfizk6UUwnE6SSiDFrqdrsj5KeWoxxPDi1K2sZeRoQi2",
  "key32": "4QZ42J6PPB3WU4w9wDJ3AGKPp59Wu5VVteu8XoF77AYujQfzfBAQe95D8y117XGCtkHfkhx9LrANwzBir3azV79j",
  "key33": "57X1jt3dy8rExqPiHBak9nfuQoNrUNiU9CVmDUYSzwGB65HBohiakNr8H7HmBSMm2CVEC67D5dd9tqmuu1HrgEQd",
  "key34": "D5PiVy2X1w9NQk52CK8u98tbF968hdb5ajJHTYnF36iyKoRmcZrsZuhCMPnzuH8ZSBdjfkE8m1YH8w4zV1iNfCU",
  "key35": "5ywGGSfJurpyDKHgcgMeX5snzPqCuFxig958VThG2JcWC7bZwrk62ATwFTUZt43sJjk4nQwNukycxuR1aMxq1qdy",
  "key36": "52JZdejjgA5Sjync3SD8x7P21Ueuy9gJGvB1GxHtLWLxRxvJjP2ZwfD5DQizrDqVHf7xRRXWdpRpQUBBS9idQ1cJ"
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
