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
    "3Uek36cVfh7Mkww9umyQv355kc9HVDPgtcth2hhQdWm98ukHmUWH1EDmzrSDHUqTZEbnywmh51HgrdJ16UgDZijr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kxrhJbieDY6XjRhSTX6cBrkR2d6xcisiP4yLEZueKfemBbCivCDZK8MWQfK5rYis6HBHuEct24P4bP37hxYWw6V",
  "key1": "5gJTegqzBdptmoRwESdxZqTbXFpeFVLS494yjGnbjz1gStSH3y87toV3BgyoDNRGWrDSpxwaiPmdcDqv8K5QDx3g",
  "key2": "aqo7NCu4Zvy1RgHy3X9G6xtS6YB1pAteBj3JjBdziyW55dqhUzzSMVWWxadRdwsCheXZz5MB3cypsVkEaBUaiMH",
  "key3": "4rtTGCxxSbfZCmezvJ7Xnw5wmCTwpiX6QFd6RQcPLdjiiKLNKRcqGcKmWvHxUJ7cCrr4KDimuyDV8MA1yTj6Uufy",
  "key4": "5p6SDZtMkCi64KEmLYKAXQChMzLQM5riwDtvXLzXkdZPJbFD7f8Pf667ZPcCBEm4Ldn9GCKN9ncAzCWqxzotFHAU",
  "key5": "5Y4YENB8bY8nELuCkydEJ7ZVw2dkL4UwMcJyZccY4gFdHv16fuhE3YQdCdUMH3MpoP7FJ9PH7QAbR2ARnP6BRgDM",
  "key6": "2VCYJGc7Tpjep537Fn2NRoUGf9SMUi9yctqn1tEWquqMBd9RUwuXZdFcRHFfJuJyeXbD8iPeKt49DWRr5Hrc3gwi",
  "key7": "vS9y59ac1YX5eDgJRSsXJdgb7wzKYV9BRs4zSBkAg94fFY3gz5nkQ8NWFsFLsHZ9BTyESK3ooyFTRdXifXBP7Jj",
  "key8": "3HERLZQxNLjGFSv2cyVgktRZLKpxjgpMvkmGrx9qTQpdc5jfp6JAgEWCg5RMrxwUFnwPEgDSqffafub942VSM6fk",
  "key9": "5hH6ufpUGPd77WKN3V3gyw9aYjh6qHu5Nua4Gfm9WjwLHhsd7jvsdBbNMXCoMqBQHGFfKRw1mEBmzgwdkrzxiLQW",
  "key10": "3PTz1fjQqA7LtGeYrz7voZDDtkvuNB73Xk84a86M9fEC2DvEkZkfjyCoiTZrLxyCeGE8XC2q6MpfoDe3K9hGU5tG",
  "key11": "34AjiV32MfAXXBPVKWgi49SwkNcdhzhFr4R8L8HZ7BdBiqLbaiLFryhA5HGikeFAR7wwNPWyY49bqSCi7FNzVK2w",
  "key12": "GD2ifxMpVNt5o8cgemWi2iRjZnjFoMfpyDqeQ4w9h3hCimebvZvB1gbByHgnD4GpMBrJfvgzhoXcVgqdfXvzcTF",
  "key13": "5uRvajV56CDe78u6EMWNDtZeGkYJyk8fDCXVs8NNU2wgBNHtUcc8SsAArp9axn7HYAf8BzvWPAmYSJQmckPaU2fk",
  "key14": "5EbdntF7gGRKm3NemMHZfry6ZAXFeu8GSQN5xazHcxWZhdTGR9mSt63fyxJqFTJoBbm47SvkjSBvemqcExeuk2Sa",
  "key15": "J78eP7WWekJGZ5jtpUSnpSr6Tz4vV9u5o4c6m7QgxoUd91mbCJvAmKDfvSqJYXLdTLC4UoBnCxbMobTpHwcuDAE",
  "key16": "5T4SZBS9nShfzRrgTgFmQN4i6U1J2vpyWz2zTG9SLpgyYwNCqAFLLShZYVgpgVL11kDb3bpRxe832VdafYoExYk1",
  "key17": "313nMfbjbAcjAzXj83TTpjoKgLuJZE1NPf4aTB5btbFs9beHFBoGKqbsRewMDZu7GeNsgjKDk3FJvsm4Xskn9gr2",
  "key18": "2Rdrgbxu67x9H2Y47CJN8itTDUYvnwHaAE88N7GqriDxkENkd4DgA9q2RsHhuhJPVCC391X7PdvmywAxdzv396qf",
  "key19": "4xdfQsEggh9uis2ipHaoiEqon3JyR6TjMqPN2LbSioXabdzrb1fCv7es5ef9LPp4ddfHobT87ATCjZEjxFxtnWWq",
  "key20": "4Tc44xxaAKMwspDhM9vWutFmaJa5qrqCjKvD3ycnfCDYP6ECyTmqR9f3HyY8Du5uwxbrpTK24KmUh6ERz11k6ABT",
  "key21": "2u3wUcyQRXUFQPVh9mgzQian4dPT3B2YSS3oEJdtKNNjDsDgHHWn3KidWdSbHLV5QTuwzWkYqrepmKHwUkMPU88g",
  "key22": "58o7ZxEHzmEJGNMwhmNcX6Cm1QRuMmQE5Exu6ws4d9svGme4NJN6vAMuJHv8kyU11chJCzpqDUZ6KWDxHey6uRfm",
  "key23": "4qcBwtZbAswSYxw3uRMA1cAz2KbALzQ7gWq7PqKbdGenZgmYWPsQHdtwMyLgVTqZJt8xNQjHA6Y7GHQdqrxPbEgd",
  "key24": "v33Fncwi12y2nVAmCXfZG4ztXvCey7rugtyvcooGZWoxAHQiQDkk1CFGPPuSF1N5YS5eLMx8Pm677g5CTTk7CmE",
  "key25": "4QqJom7auU5TvVYDHSYpzp1gwe1oe8JvQQpJEGwqrtiPFneorNgenTanvNZ63vSonHgQGGJQiESMPxh3AF5kqB43",
  "key26": "56yd6wTed9uZ6gSrUeb4E9h4zkVokrLhxhMr69J5SadFosdF3CHxh8VaGwfaauMFTD7YmMQFrWbLehJ51XSXgBvJ",
  "key27": "3wjF1dVVjdSo2BLGgvKuTLmsiUwzDsHQsYKJx8biWA7nG4gpnJqLZwbxHw7igv5SkchsN3Z99ZHB51D5yq6JEVx9",
  "key28": "3gy8neoqPKv9DQP99pdJ2BNd8eNNqZij1fuq7caoT9LtboxqNm14PG3AfkX5ikQLyUQ5SuCE43ZeR2f6PjbEiE5h",
  "key29": "5Mw6KuQRTPNBYjkMYFTUNCg9y9Ka7B5cY4jLCV4opYPpcmgeWD7UgWXmBnbWu9SfiMYh9LrzyRsy9KvskNSgADUp",
  "key30": "2MNYgg94ZU5qiqs5vVNDNGwdR4S2hKWdVx9FRzy3piE8jcxsJUyZXnTuLmMwPZ64FuySa7egEkb5RV5KPyBrMp9C",
  "key31": "5RM4QrqwaafFzVbwaqwJARdYhJKRs8ugUoGqwSMmfWyM3ieuA2LTL99H4whqixeBT53MNgw4c3tSUqPcRYYvMg5d",
  "key32": "4hzn3pN3oPbZd52LTWL71UinjGiKQTHncss1jcKDH39e6FadZfsH3WveNZ6LaKU9VS8tyUCYDNu5AS7CpXGLqb5D",
  "key33": "3yyvaqvT8boqfCafNH133uAUnSkuc21XYKCxYfcpgoMf62JzFGcwQG1os9DZx3XTP8LvXFUwmARijrytgQUHfU8Q",
  "key34": "jkNxgGVs3RbF5mouxSuWMcSrL7La4MKCWaLen4EXxnCgFxvAcC7CKWbB91fXc7dme7EpFZRdxi8LEMijKtMx9bt",
  "key35": "ouo7aj31buPn42nEwPNLMtY7SqqYGZX8KTNNDdLg1UWqtQ8NL4effTsV27xKKcTfagBAiGLUKchXTFGNq7Schx3",
  "key36": "2GEXm6Wvv74vikaqwk7t7LPfx5rZCSiFxr12mVWphzTJyqUKXp1arJsWYya7Dzp1kYcSuSPZSiCNshtckEg97HLQ",
  "key37": "5xQpfUc4Ra4xoVL3HJRBhxTe5ZvZGLeGChPS7S8C5ChFCBNrrXVLoN42jWsbWpnVP6UGZyWeuxmEm2GSbUWqALcV",
  "key38": "2pBPBtapDCZQUxfN3T1vReJp9yZj2wjdkGyexEEc6AV2dvsBDwAbzii9omkAciMmXRBGFv8dGHfcaXC2swmLhZKx",
  "key39": "326owXBrXVSRWJVSZ5AwMQGiPnsePBBZnYeESFwVouL5Psbk3DEi2xkNdyiaye6y5hnG7jEo4mV4nmRxJjdCr1vs",
  "key40": "aUJHDnFmJgqUHTqRmYAHkKnAm8K6zb9oUM7epJ2XrCNP2pQcSDuUWy3tkzMsCjgkyUBhFM9mGpTxwmHSFhvzjpB",
  "key41": "4anyVcXkiLQ75wKQGNuJdaiNzK7S1R3SE39WA29bKNjNjfpzn3cLjkckz1gKk3MLEt9Z9kPuLeEWor9YhUPKaZsv",
  "key42": "3vbvyok2HFExeGuWXmJPGhD4ZBWAmqg5XCjJvDxEvWSCKtbiUYinegWn7mFgtSyVxnKBfwBQBTvkCtxyS72mgaPV",
  "key43": "5KHcPmuesAME8jTXnYLghwRpH6ucgxTUUj6MCrt3z9Lk4mkMN1L1utMoR1WWifFoBBuS55dcsjiMGbAsB4r2aZK3",
  "key44": "54z2vGBxRh3hVCLeyEJ7JPuaMt5yjcHoMEzpJdqtWxKEEPvMu3p26SxENxt4oEZMXafrGrJBCMjutemFYB4NxpEi",
  "key45": "4ik3WggGkBA7BqFXMT5Ts6GD8wNjDDrNHByT2yNMSBxBsPeetAwYg38M5q6muGyjg1mAS5X7sdE4vf2zc8Z1PdN7",
  "key46": "5QfU7ERuda2mKQhrET4TDvp77yehpd5HYx756agS2KkkNUFJeH6azRxfyFdS7edkXmWu6abNuGwCaoyDbRexKLuR"
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
