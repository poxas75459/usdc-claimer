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
    "San7XBGqBAxq3cxj7aGKzxwHx2qvNrpUjdw3Bm6vkDPAz8A4XgnVh9gYcGNWhVSTju94H3Gr7tabSwqUEeRq8z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9PQhe2c1ZnPQ9n62Aepiou9r56s4t1YR7cG3yH9kWRTRV8v8Q2CDgQMNJQSNdgK8vdzwDURJzv8tKnMJWPdwW8n",
  "key1": "2cfxBquAJjmfVKSNYRFjbLvzgGTSa1Yqmmeokrpiec7pW9HCkiGBZkHcwtgxLwt659MQTy1gCfLrWCVRN2Ahp7CF",
  "key2": "4FS2iuSDvagnimk8n86cM4aKoTEaXiRnRJZVAprUFRV6Q4vjxqAMNRXvopEe21gGMYN17qSaKYZjPuF9i7fwJ5rV",
  "key3": "5eyco1whC9vZ4NPcQ4RCqraQmGiENvA83YkfUSseRNKBxC2wqGMUVTvfjP9W5K7HdVrzZYRDsYERP1Cgtja8pCFS",
  "key4": "5b2Ne1Ekgq7q8CbiSbWm5FWgyoF9yCuxxAMorCMDSLxAPGjqDg2NDLMk5nQjgcJRb3pv54gkfwcj9Hk1ctYa4zc8",
  "key5": "3jHpgvB495hCAiPXztduvz53L7SMSbH5ByxhbogtW9X3zCFFoFYVxiAnW68puThynjd9mnih9BCwDmDAmTNR7pGA",
  "key6": "5rKS8oCHt1nLp1ucwBU3LjAHftuc951SwcA4ED8J7V7RxG8Etw5y1v1Zz1GQ1EZMGjoAHj4BQjdV9C17PuCXvnfa",
  "key7": "2Tstx3NCU7UWqW6hxPxfzvCA6r1axE4WtjSLeGeFCHKU8aXreJFmKJeDLpZPwaNAAxjtEHRL3K4LQNVxBg3K3Yuz",
  "key8": "3GVMhocWMHvxtTszWy1Xgndfy9GDs72SS6gEGh8C8BWSKTfxZ9nEoFFF4vQZXZ5w73vYS2H4zPt5yQnvF1EEQYpo",
  "key9": "5CbDVWsf2nKkVfbmEuJXY97PJMigXGmwnHy1uMdBfnVqMQfyPyDCutSPjhSfL4wXMntqLKuXGcFkj88QxFcDtyXF",
  "key10": "27U3RZbrfy5rELV4suzj55eDJSwtB5xd5mWu7UB91uWHZWUWRSfFXQb5wZH9Z29m58J76Cgq8LaJLQW2iF1YRQXN",
  "key11": "2sWoUL2w9cxFhKcxzG3MdxTJKpn1UU8d1R63rf7JZoXXrZvGZagUUKwd1F5SpvekJZi15VygG5K4eSkdModXXoPg",
  "key12": "3JcyoXCn6pGZXsnJwjFJJpWvfaa6hTscfgqkxMiWFqoTUwe4erG5Rop6tjN5t5gZBE9jyaTA2kYzQ4rTu9WgXQGj",
  "key13": "5Epgkz5gRwB8TRBw6iVKbvxeToizKskSBswB4QUeUD3oZhvo69RtWjehD5MwQHVEVopEt9nR141Zef4Wyj4gDFSA",
  "key14": "4M6NWRvQVNUh5VYBLwQthsijemFneo46tWq8fVYRoGQMxnjLHsGTRJgdJzXbavM1wiMZh4TmRcf77z7JrwghdZAt",
  "key15": "3EAUs37R4L3EQj7sZZPad9CmoLSQ5c7v9wvuUXFwnj8XzurPxRzG3tfTDbieNSUSwuVo88Gtec1Qq4HSy3EP1YGG",
  "key16": "zupN8JC5NbwCgWpXyVYbgx1mDzydnZPfu5kuzwrWoq4RJA9Nn49odvNbpQqb252aykvwSdr3Z5ZRwcXyrkfTZQ7",
  "key17": "5tducnSNPD7hhQfyfqPgPyhs6xHyrpgvX6BgXD89cRDcu491ARPH7d5i6NqmGeanYieK2PjJGJHoTcMvMsUWUr9W",
  "key18": "4eAtCq94c2bNvj8HX28D1vLKeTCsw93sPGJ7DTNcCGnk8ornJgjuYzhBYGNDbDw3KDptohVqyBb7kqHFmJBrZXJF",
  "key19": "5bNSinpSKHa6oBgJwQeqpeaNY57C1rDtemYD3N2SiQzGrE4j6rohHVkDCj4bz5ZQ6QbG1v2tWSWTs5EsHPnUgz15",
  "key20": "4oC53V9KnX587x4q274UqJJstdJHuTSEjfXZDNcq252UqH2EP2h6uRk4nXvM6PvTM3MA8Uuj4uwDd2oJHhfskfth",
  "key21": "5Z8ZimU1NazWRXt99qXp1XDACSFiYrEvCZQn928sBjLQs8GVfQv6aAyTBCtVAC7mbAdgPs26wAP6WcZoH4XyMdLb",
  "key22": "585ChRqQqcW43KNCkxZvkLm9KmQJna4MXS6NKYYSQnPGP39JH6zGZV5Db6qwMu14TSzenYzuYS9M8W5PHbFsnT1A",
  "key23": "2F9Lj6pVgJTTnAj2ptW3VfZEBjgD649yWeqv5MUoSDqf7AyYUVBCvk8iq6cY11bM2svouWMcZ4F8fZgAQxEzkg6s",
  "key24": "359M1xTa9hHVnwNePdDDhVoK1RPDD8Hxbj3kwuzMc2jMVTix7tpRdGjkcE2uv97izGsp4d9q2LovFW9YowBEBsYX",
  "key25": "Jfxj9ix6jEbRkmKmrcLqz1mcjbLZC9PBKYZRXgYcq1dYhk9N42aEQnqS5JHQE5wh7VQaDbbS3M7w2fo4FHmFCA2",
  "key26": "5hDzNaCZX8CNzcYK7UHeP48hpRHzfMd5ExnG8mRsiwuanb4i86tjEUnjeReWnRPAohzCe5hCAf7gDdeXbCouSbQ3",
  "key27": "4DfeGypomSWq2XsetiCvnhV3ChvfBLQaFdH7Mq59wB5Fjud8LTg71HWVyfzfiTYkYzUtKk3rnCU384Eye21jALrr",
  "key28": "ybieKaqvUkHy19GmRMmVRXRptqihyTqZNUYeyyrAqdLSgxfruJkP9tu179sQpkJjFifbsp9DSEF47XspjQ9ipX6",
  "key29": "4gGtEmV18Rs9JBzMPXGR1i9i7EK14pNhTrvhfgZn89fvrDKxBsCVWNKnM4JdYmvwwTf9Q3GudJYhFSvFNduG8NFP",
  "key30": "2vkhTVEyv767uE8XypBokXLbbeUjhs5EuVxFATr5rLYeZEjG4ofhSFjL3NDcvrvdoTpuqUZQLJYxnBqP2g4K8adv",
  "key31": "5YcCq2cKmq5tGD8juV5A5HCYjHab1YnzKU5T6Py6M2ZwKqDGKRf7aTy2RJgkWyfF1y3oibBWVGvUxpGTbssNo6Gx",
  "key32": "3oNUJf2e54tG5ARPdY97PUSwjMPkhgccCJpnYB9K8YXMQAimQPJYYHyX7g4zJZzChfJueU932chZ4D83sEQDjAuM",
  "key33": "3MK7BADMyBdmfsfSZhp4Yjuo9nptqTip63DgSTrsNTPkVYFNi2JSXarjohaSWeoaWEZZ1PXmroYjFJzvzWK1Lphj",
  "key34": "2YeibEeyibW1U9wC3tF8ZMMkLFKvpnUio2TVHUsaTcYrtT4MHzBttvgMswhCduVvThYFmunwLZUJkFpNduXtRkp9",
  "key35": "4YB9BSG95HPUqmG6nqtZCumY7NPCiGxonpRQGT4m7yNK4xGbPEHTbPSxhzo3e9MzMTXztx1ePjwADGnvJ2KykZ8S",
  "key36": "2JXyh1JRN3yXoyUeDrLAwK78oUxgkbSWyYKGKUqAbHLeEWMfk8ixJzBeF2o8gS8TJq3Vs2skgSBxKiLjcVreM5Ru"
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
