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
    "46VXTFNdgYsXhzMuNWpeDuYTbxFGe1a19eXp4YwevpxpUxKEwrKGzSoTeUPhsm7bEZiqPTLr5d6BAsxyueQ9sRw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XuyWkUwq3KE1YMYBmE6dum7orKDYzcpbLojT4Tg1DDweFo8M4RY2otwd847rDcCV5dCQL7Cwm2wq5QWvynaX9wD",
  "key1": "3j3DWVXxJLL6Vgr8SBAzp2rFUq49u9TxxRXVjaiFzyqJ7zxj13XysDhqGPWDDHG3vK5BSudUQAtW5NNUAz53xXGT",
  "key2": "4Ukwg1iK3eYNLtddFCtV7UhQDq3fD7d8PoSXNRWfSukD6t9ZhzuZA4j7GU2cTAhZxtjdSnihHYdACba1JmfC69C1",
  "key3": "47TqD4YjE51p45d3zXuNpvzxxn5Dm2Y1egTNfsqFqyFcsryB1L6uBBZ3Tp45rA9icRDzZT2v951enyENShJFcciE",
  "key4": "54o4wStxXd2gEHG7zUGjvUAcN5eYFVkHJBx3VrkZDLVniGy11Q29qvtW6Hj92Y34A2pbGUb4KRnZRW276QqQcgjz",
  "key5": "smdRecpDUeqfepr6VbVAPzyNrghFdCZqyM6iXDUr74enJzVRQ8zmWfgcSufmyn2CNPjH1duAH2mZvDgn9L2XrPh",
  "key6": "3dcNtLRMwTobxGMsMGx8XMAGPcLFnUwDT3Bt1NsDcneujGv4uZL3H1grdbYox6FxVNDLXBAiFVZeZrMqnQeApBca",
  "key7": "2jecxqB7FrjVDfy1SALmTM5w2EYA4W5K5fb6BzWoBhSQ7qKe5ozg69Syrp1dVxghroRAAmfT2NUK4rTitNncsa9v",
  "key8": "gHvzR57EgigSJeyCxoLVDZUB16TyX787xdHovjE13AeJkWfg1KBVj3wV9cXZgR4P84XgFpsh8sLRBv8XQV83GPS",
  "key9": "5wQLJBYPwAraKv9MwBZ4zsm82ns1wsGsSyZPdS4kKMsRjBPwKN18xtv7fqgTFME3ouGw7cbUchmHhKDU1VXfFC5G",
  "key10": "4hrACUrhYCrZzRPn3S6e7EUJ6CFJboqUJR2siA8TyzLTWpGCahbAyBLKWTiu4MjTxUyD774a5FQkgoReG2eCtNEq",
  "key11": "34DEBcf9cDrJaYGhE8ayYCeW4QyYPj9y8f8s99233hAfqnBeHzKc89NkqDjpB4crEJzDGX3ZHKMZmjzGWeqokmnF",
  "key12": "TAnXQQcq8YdqryjAsXVY2KNMt3nMMreTHfUq9ZYafocid6i4HWfBgnyJFmzP6Xj9RESQ5nVpmVSwBPv2esq2GMw",
  "key13": "51zUUmkjx46cm61KhfTSwReTxnU8tBEX92Tm1ePThckG7rZPjPVdmxEH2NwbeWK6HWA8FURfD3xj6MkWDNR4jc3T",
  "key14": "5ZXRnZd2D4dAWh6mDyiNMnmjJ4P7AmDWkSidmWQpuFJ66Hx5NUGpFtKNUgmcVWdY2wcWA17buYxS3FiAmEjFz6yC",
  "key15": "2DyrfRYp1njF2bjL4zj6MoJXz275JoNmgMzP99W77KpwsoqeUUt27VJHXCZT4kv89fSbD8jFELRPQLu77h7LJN8H",
  "key16": "2cP9GUMf45J1Msojev9d4bx1FoYRzMdeXnrrDjahukcYc2fWj1ebsFPpXVA2RJYuvd1p3w4HLVMp8di8xMS2EGpN",
  "key17": "2kKBicYtbqb9HK2iGaQETGtkD5TuGieeo98Xm4jrW4jpqWLM6c1Ks8mzejQ6WA3EmoX7w6Qp83c4wCNJ9yDbMo7S",
  "key18": "3zZZ9tMXujvUt86ovBCXHqHJWYXPoHHZjB8KFykY8P1tbtcKbstb6NLsYTnuMTfbpba4DPRsH1yWG6G46qGJzaJm",
  "key19": "3N839SZhGQcoQgYaceX2oq1GpJYQqGMfhgU53q5KZWamcLqhHfaMsuoz2ZbfXGfgwk4onbRcJ2ZmGgVFLr5V1LG",
  "key20": "5sPiUXnisR1azRcKrLUR1PB32rWhJNZvHiKEUagfn7Bt7XyV2jWSioUShZpNciv6ZrHNhyFg3BMvRKnEWmiqh2Cw",
  "key21": "cRhVdUb4HYtuqBzxVjutJ8ss4i25sHFu6hkZPjUJe9XtksYEwXAP8xwgBvWREo3pLS5ZHJeSayeh7ox1Jhu52u3",
  "key22": "3HBVhkEaEkoTV614LP48uAQBPfvHfYL2yskbz6SQNfTsGnszPuqKEgnXS7Xc1BZRb9ND22T2Q8Bu4AkEJZd79Qu6",
  "key23": "3RsWzVU5purEHXRWdpCsxqfcAaUC7P3YbAyCw6i8u85xR8HGbDhHpyMVQXEJZHFFYBi43zTN2T6FqEC6kdF154gV",
  "key24": "2qqxFa8n3rVmyKfGyb6UbgUUepQ6WRhNwoLxVoTuofXmbHnx92Q1EBeyuUeZquYEwfvwGYtwkswoR3p7wc31vhKi",
  "key25": "AwhfcckUhLnTJoXKsVwhWBB1BeJF3PASJTDG8PrYeR8yHRTQhHYz8sBbpXzEjQLSiCWUm5aUCPUDVnTEZKexxjf",
  "key26": "5nq7bSHtSaiyMZUBxCYf3DxfdqwJBQieTV2aqBQH6xC37uS1ck9iKw5qNdVubLFfLGW1YeiANweGLR2gPJSAm2A4",
  "key27": "4BdHNwM4H9aDYeBifuFovKSy5YTDTceLcpfr7Atey3p2yTEFEWrUz3Kbg2ewCvnpoFoNvbL1gXoeLSK23WewP4fJ",
  "key28": "sDpQmnuwvw4rXBugfwEp4YGnK6BgY51a7dEhWY4ZAHiurVJPTJ4Bfnt2kaQtwsdtYFarnSy6ZmYzEUg8eZSGsyC",
  "key29": "2XrRFodroAyVJyDyVooy8zDAyza496y9agkKiwazufrWA3dnqpEEhCd6pqAbZtbSsG7bRFt8hVxEAD163rjv5hdk",
  "key30": "44HWrjECtuBq4DKERRzoYBQe44W9RAj33fN4CqpyEt8eS1cdKUhsXtVq3sE72jPxjB7LC8r8HysbALYZA1T1pNha",
  "key31": "3iXn2fC9XoQ4ffCwYVxKMan7EHa1uZKW7paf9UwCAwc5j4o2iTQvSXKv5LWLZwhwsW4iazb727kMKRicZpyPXsZP",
  "key32": "3PmstoWNLhXuSJmtZTNqjhx1V9s6mEnFhw6ip4YRrH2ENCX76zg6ZP4uZYH5pNsu1bNr4aEGyPf3VtCgKb2HSxPU",
  "key33": "4NYcuF13RFhNX9v9Y4pZ7XAakb81AM5qQuGHmxh9HmTVyxdXZktWN1FS9GRe8kYsregSP9mJxiZA2eZuTaZk3ZNr",
  "key34": "3zkVLD1S4AFgJLkMQwFjKbHSYTw5rmHNtZ7n6sgiSGrEAmdom4QncG7s4a3N8QoUFwHfEXWwW5d2uvYbVEnRSo7s",
  "key35": "4ubcBvsozvAidhA1CWVf1WehyQQ29U5hHQ7XmRktjYs1zXjn8yJaTTfAh51GwhiCZTQurQ99UeEXzkT6pQHcmeKH",
  "key36": "5dogrZwzg8Ughg4s69jKPSd3tVHrC1f5iF2u8KqXkjRSkxdgbsKSEWmRjGNhRt4Ga5foy4UzK8aQHqmN5xMubrTM",
  "key37": "4ELbT9pnkenRbK8kmq7FE2NTooCyY6ppen93mCR999DUSMeSY54XWyxDA3Dgaoj4AkNuw87iuDe6tNCMq79edjWB",
  "key38": "4L1h5c9nDdEwXJNwEENkZseqHhzYAxZGdXkaj1sXNeSRXerEYKTaGNngTt7TcMMiKEWJdzJW7LuPKzTeR9RMNFfs",
  "key39": "5zVeNyQ8PHjJZqyxBxP3VTbRegmNY2VcD8PofLbPbhEV4KQvc4m884XVyEtJbkMx35KK1RcsdDAtFksfpfYbntY9",
  "key40": "64YQjkVaVZQh6mwLxaxDEKvdT7EyKUUTN7oteKCM9eBxpRkNhqpdZqeUQgX9jdgSVX9wLqb4bF9dDrToTEY1Mvur",
  "key41": "4tvb7WCZATAUZDcrMfexnnBvT65pTccM6ddJb5HAytZUUnnnHQQUQxdZiwqWkJwStZj9i52LPGaB5mKrnEJdsuyE",
  "key42": "x8Nf1FCkG1yGDqFo4C1tq9VxNNdniUNMs1sbguptxuWsURLnx4NDAcUewd7kxL1wwxhgYseGMwQ3wf8VUcKXoye"
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
