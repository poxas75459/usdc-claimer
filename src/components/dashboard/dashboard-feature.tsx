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
    "BixZwe2QhjrNasy8fxxA3UytuameiecRgcLqFHwSMoGqH3JXDC2rTo4SvzsYMZNgagzH1d1j9ZWGvdsvuWeDRqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58yhbkX8Dtq3wzki4ZmmDHRAPpoVP35wSLPJt5o2hcMseBovQ6cdFau8wPoGtWo33v99t8bQvFSK7CRzvS93zPmV",
  "key1": "4hX2XtFdkxyvebUEPAdBS73K1xRVViSps6jtgtz5MZpGNYdhcVGjgpnww7AJ4VUcBQ1BuETXfwz2WoJxp2jPpCvp",
  "key2": "4xUaxFDt2WQ6J1k8PD8EkQHDfPHbPt3J7uBpgcGd5Bj8QiTjMud7xbvAtWWeWTo4LUXMg7U3fHU6AzccXAh8mfX9",
  "key3": "5X3qJ48TXdBW4V51yuHq7kFSwiQ7hU8m21LgU7vudutcmjmaxpSH2pnaNNKdu521C5J74s6k8kFaXrP1bUTi1FdF",
  "key4": "cwsMYkAH2PYkLd4byB8pAER297ZtyPC4zH9BP3HX6kaDdi1chw4jQFgQFLZg6RaAfAA19nEGbx6ectaL4a6nTND",
  "key5": "5XxPDi6PQsrG7VwLs35cEDcMHEHTxo2kudm6mnQonJQk7Ynz1YgbQRgZBHwM5di1t1NJfoC5v6hThhwc2ZnjRGg8",
  "key6": "5YZoA9efCn3ugtgCwyLMzFvpxdkBxJVEQn2AGWfVkufbzWNsGVYDeAspp6kLQiPNjSYj7Y9MBtyYuybsEw3m4Rdr",
  "key7": "55tHEK7BVQkPH5AGT7BWMbigowZbcQtZ2KmQ3dC7RZB6gJBj5xU7aYNCsTTqJBHMzNsTWQdopPwc6dCpJKvxx4AS",
  "key8": "65r9qYDan6GSW16nXn6mXkY5RsCq9e4KWWXXFKT6XuKR9sd48MJgfSkrG6hdrErThEnU7qsxcWCL4iipLsm7eiE8",
  "key9": "334khPNjLUGNzaRjhmAM1yVijXWzPURdz57y3eUH9MkLKSQmi9XhksEp61qXeS1HSqa94xF8xgM5j1qBAA8cT9QF",
  "key10": "VUrzCKCSH9oRUaPiC3m5pnUj9uyAfoHpGcppgmkiNE4N6LC911hDaDUMgWBu8UxvA9vCycR92mY8Lqp7sfZrL66",
  "key11": "4mkBBtuw3xahQmwHYzj4oFQ1vCDNrTUPJdt8fJiHFpAs9xxjEy3mBW5YCEWz7TxeiuC3B49cciyNNs73NsW5MXtM",
  "key12": "2Rjd3wMuKDe6frEjXFMwwZssU85ZWV63BZewdxthyjj2YL7pUpKhYrbVdNjpTNmYH1nVpGn3qQuqworibc6gjyw6",
  "key13": "4iPLdrFiJ1t5y3hYsKiD8JM8867wHF5xjfqA4TqVTduP7KtrLTL5TTr7gvuDiPei1yQ5BPLj4yxhSyT8ZX1JQVHE",
  "key14": "57tMKQTHRRoWA6xw2cb1SAgYiuxwdbSXdxrp1ZzzJ1ZDiK5BbzAYsFRFXSAsyA7XnMusy3sGA2M8F9oHZub5Muzh",
  "key15": "jsuQYVqWU6bzmJy88mE5GpsNsScWYxhqGdip87vXXX4aAdahCCy8LNdQ3vjS1W59zjWfsPYoANJ2SX99EsCWojP",
  "key16": "2idB2NZ4gZbZ16JvZ4pzMGP4YxY9GGiKaSMGY5ATGSLEbsekQwg9YUr5jkZEE8cxpXJwVZDkLvDqjBQuLaaugbtm",
  "key17": "3dfRePn5E5m6vWGC3aPnwbujeVHZXd4H7qoo9eXiktopsShnH1LZdR8GzBr25cKfNPU6Mb1hV8hVUqzBZejXfKW7",
  "key18": "4b227inaXRQomf3yiyA3dL6qCjbx62TC3WNmdXNAw6UuuPYEUVCTa8fu8dT8BJBnUt9MWKGhxcHfWEJR7d2XjK28",
  "key19": "M1ay6vRW4HtFEZSw3UyBojKpqZEB3aGR97oThzrjssmecW4Cnswd6Uh4ZugT9MQTC3485V8vpuxo3u69F3tEF8o",
  "key20": "5HFBtf9zsYUpt4kL2Qp3es7e3g3381x4sFm7LPJveiYNUB9Lt4Pu4s7gascTk9MZfFRCqY3ugJ3dQZTVnvWSk6Ao",
  "key21": "3ZPb5c9akGQk8adi1GziT36o63oJBGszwxUnj5tpusRYcCFWr1fD1cGpnHrtX2MdVsoMVznapoqRaMQDXbkHHoec",
  "key22": "36vsyMnyXxbaSNz2wH4Nsp8hru1EAu3EsJTRHib3RKPBUT8c1RDADrTqqVz74Sk1Pjdi1LGTS6DMjZDW7YAr3DEr",
  "key23": "5jp4z6sjK8DpWQ1HyXxLF2AHLdVcqrPzawa7smG4uv226dWpRLuRov98BxX9a48CYEwkFPyZMvxUF88EoEqRu6Hz",
  "key24": "5FGzYh45QZPx4uAqB75rPFSrhXG4AKTXcd9qd5ssobcRCQABwwQNmH7XBtFsUxXdjBUTkR4opfVnRTQhAMN1kZLt",
  "key25": "2YGYLBU2717X7yqo2usVGpAbrZU98nyx3DR886xYrWzmKXjbyDBYoxwvrvnrywc3wP7zfgCAGeCChsoF4qjKgZSU",
  "key26": "f9qj3Yv2ekGg36XfGqGKSooWmmsSoUzKyZfUTsXBhmoHqF4a2jiuwoHAwnwRorojxBE8pYWfHG4RJ75Lb15Znt2",
  "key27": "24VC6GyoFZ72BqFPCLkrjzED7kiMgHuvu86QE46Yorxvmc5oZrGcdE6ZdDqR6eaZqn1hr1K9Dq4NiniRnBnoaccu",
  "key28": "3fYwic7BmnYKf685u9zgfdnBGq39SM3yBvn8C4GrGNVFgS5hQND3AQqhUxFo82GYUyhQwcPHJXtyJFYbw8EV6uRP",
  "key29": "4PNxbQAjiEmBEbMLBM1bm8i6tKzt9NNf2Xvvw9eDB2AGYZfAbhPx3iNhgFVN76v2n4wB2rH7adgoMKm5RMueNmic",
  "key30": "3AgxBUm9oCjnCpcjh6ApjXNqGMDjoHGawbrjxo1ok3z6N9r9SkL2XRCCKXq6EDLLNjbT3pTayvCmpiKdfS9fkPjF",
  "key31": "26jF65RDkafJXuU2qQcq7szMppZ9yEfzRax69tj93uDrNuPJkL7uD5aYS9azZpDRegFmxTkzeaEJcFBWQXmmhPct",
  "key32": "452FAbk2xBCABi6BkGGiESNCsusRWGVjAvhRyx7fTfYg8Bx13SbjNxuSWXwbYnoiA63vrPqQkgegKpB7VL9T89uX",
  "key33": "5tBKjwcKbMyEJJ8UFv19tJYVyqdVLmb14u9tQKoQwxAixVRx7XNMPFnbg1Jqaugtm3429t75UhkrhoRHPeazwKSG",
  "key34": "4Hw9HqfjgTTZqfYaF8EDNjVVXDtmtoUg4ykVxBB9pZbN7nSLWNEzfZ3vdPrMf2JYMG2agdHA5zbkRKjQb6dvypnx",
  "key35": "4VyGuD7X8UBuFDF2RBDaiYwhw9v3yxSNjgLYBRWKCHTrXhnQ4iZ45KKsa6fDnrmfEWTUHv6pUjnt35zbXcZzsLzn",
  "key36": "Qw2FPo8oPLG6Nei4Yt5C8PT5SGtjhdrPuA5caGf2QUCSdR4rWBNfGa5XqPMwgok7ndxPpYXAgygZKNiWTr1N1CL",
  "key37": "3NrzFr4iVps4zzCTaD2RRR9iyRwFXwi3zFqcP2H13pB4uQV11oWzD4M5o3KmR7HQReDPxk4HCjgVVZF4pqUbChB7"
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
