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
    "4F8tbZE4PJBSMK92KxoDLASU5UocjfCErXGXYFEzV5LSu77SZapP5uLwytyGuZaNKtWbqBxKYrAumQLcwgkB4669"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26ZCzeUHZ9LPmMLZf6utJKKKcNFNqkYNAFc9PQ9PayYopuDahXNamfuZyMjXZNC7bPTk2e3GzALhK2ggyfKfrYVe",
  "key1": "3TXPDXyaWYeQZmL6CuBXMTMVdzajcWUYRaN7NbG1zyyVLejnjeKPHughkuG3CHf1WQ1Ucy9UTpGkwkLi5wdrNk5L",
  "key2": "i4pdkphvVEhrNbRdbeie6Xb6ykwxkWSCsGEp7MksP4cARDdsfJwPtd4KS3cpsSgLABhr5p4XCzGSqe9Mdn91JZS",
  "key3": "wQ8Hxcch82WbhDKn65PNxpruV4EEVE4kWnfNtddban5MeHVsoBzW3sdaEonqXVbKyuQzA8ZaG5g6sxDo6XKNSHJ",
  "key4": "2FJabw99EMVqg5BCaQaKc6TptfzTkCs6t61icpqeyVz65txJXRQsJoEv2TJqc6GcPYZ9beU2i3KEyYmpYqnxN38o",
  "key5": "5N5SFVedMHfZTXG7M3eyfJjgq1KSCwWWU8aQBzvPzemEUBx8sHBhDs9Bf6gfWkzMKVjKYzptey3Nbqp9Q8NGdZaH",
  "key6": "5rtTapnBja7XHF3jzFgnF8WPKDz6KafECkLWeWwzorZRCrwXKdnUVogoVTLphiND4rQFTsnG3eTGhmQZfG4GbSYT",
  "key7": "5kMxxKqkxGWxS7HWJZxL8QuCFBxpnPb8YFTJeYSW8riM8AdAvJBmryqgQ4GE9YwDrT4ARh7F4mo5V9wVbFsM4YL6",
  "key8": "5JzyH2hyeEfa6FPe1sohe9yU6cvzEH2NBeNTvMKCexapWcwHamqkGiBT6M7hjQabkEK9CDQnphieRs7VQW9zqhwz",
  "key9": "2MpuYCJkJ3eXupfqSEfJmWFz8fP8VYiZX5rJ8844GRyoMTHAeTxyWPdh7bqU3eX3BCjus1mzf7oNfvrJEqRSe4SG",
  "key10": "5ZVzc3XxFnaEx1o7wzNPBxskNk4HDd75KZ8p2CCapCWCyBgqqNCbPspJxx1waKL6TEAUZCRwCnX3znyfj1LJDiuk",
  "key11": "3edMh1SFuomEfhYjMSqy4Yiiix89GFMe1GgF6cuStMranLEGJvdsMWznZ5SzLjpysetKvPK5rJLQyMLJkpDXm9QW",
  "key12": "2dUh76wiivJ9mtswNtkdKVP9v7UexqwYnTYEdbXhqQvhCr64GX23swVFCSD1URVwb42FMmKUHsRYyo7gr1qfQ24X",
  "key13": "44RYTmvw5sLbh5CxhX5PACYA6nkW4u2neMsur795YqGrtV6jdChtVJXT8V1ZPRoUfUN9Q1eZMGo4SwQeJMoAuqNd",
  "key14": "32Xh8cUHcX2jh2mvjuYvKMZLdEKH9XHih51sqF6mHPenNS5NnMZwAQvVEuC2HXYAiFBcyAuWS8QTEg51BgtyexRi",
  "key15": "4AXDoYsR6KDJfrCHppdamziNU6cw3yhEJJr2JA4DX7LaeuaiBCM3Lho4io5pxADHPR8JB8GJYEotepCx9PomHi2b",
  "key16": "4BK4bvz2oC9sheu4dmfFXw6Y1FqLdZYoYF7PbcWHoSDX5RzcFFtaKYNEPygimnAtbXUaxy9ZeX4eGh11doiLPZGt",
  "key17": "4Uvjt2Es5XjUngcJVswRypzA7noRGsCgkkWGebK81RqxTQLTqXnh8pxfcUFYM5nPAc1d2dnr4YAc2mTdCkpxhZVZ",
  "key18": "qE9YGrVASPkwnUJaWSaBbWR4urpZ13V8Tm6nxzY5Dta3HUazntEgyK4ZgGToY1hEXKeCuu3t866Gb46g4564Hpy",
  "key19": "2pTe3zVK3MQmsVVLyXNXnsKXGWV5LCcKcKtb6qEuqEpr8GtuMCr7H57VKim8f6Cf7MnpjyEbydPydLBo5rkSTzHp",
  "key20": "5KDTMp8ZyCihToTUrmUVXeqX1SjHZe38nCVoeovzUaco45RzWtK9jpHMamViSuborBvyMra6nraf9BUwScNJVAVX",
  "key21": "36V7mLzVMSZex1RGw94LhmTHt8XZoZDqp4znowKX9aGWJ9GA9joY8b32ndnLZTJ69Wv66cFro9rYDkxHs62p7zmD",
  "key22": "5ogpCrXt8CabQnN1ZPHHHuWHeW9cQjVVnRMUYuKw614eq7Ta7nsBZsgu4SJztgVPVcs1668e7RaqSwgtxMBd2VKT",
  "key23": "3RXzxEA2uBuuwGEuZyPsCCg2jxzaedYh9AbntHfQngu6zPc8KhNfhuQQLyDs8Wvw2VkPFK37P2rFjPmStC2SwYdr",
  "key24": "4wJPEaDhRThSUhfKJa1B8SwyZNeE72CqSjMBZoKfdZJWm9EcMMafBvnRPphdFKLRYuDLrZNtjAu5SSVm3FLSu6Mj",
  "key25": "374A3GCwEepjEbJvmfECfedhnWBzV6y8zF9YzspDeLAxkFCrkWf7fWZ5EAk8tDC2RdFZEK1TqMCHPfCqu51A4tSY",
  "key26": "5jK3sETovJj5GcwEd3875KZqBHP91H8g1TL9JQwfoN6ECWAAzdTQgHRofvZdFVybEseoF6CWm1bpWXtkLaurjihd",
  "key27": "5G6EFaRk4d8NRJkfHUZsYW86cigCJn1bUcwVydweDcCnLHwdnoNB5SsX7s89G1QuotxLmHE97hA8sVdmDf2VEtsn",
  "key28": "2AUsVTb1Stn4hBDss3r1VdqprTs2PMo4wzhEYerkneuNf4M8xMB9MDu1r2da5XNk3TSffvinjtHftTczJuvCpxoZ",
  "key29": "2VfeeGbuCwbd5dDTHJCMijMm2ZcwVKpBdDcfkX5TCV2ZHH7PERC7Pgw3KWEhoeynpMCiFhwmT5bcxfdVuas8UVb8",
  "key30": "QVP5ZXymr5WXWrSyRSMCiNkAaD4XrZQ1VMjqv7AGDXfeZ4i1EN5Ef3ZeGQboc7mcFVqGosHStHXzk74STyYK89M",
  "key31": "49zcvJMnWUeidfe5bn1pZ6f72TqE5Q4t7KqAkQ5XTKDYBJ3395wr46AvvzeTfkpqxcBqk9L5BdAKMsUeX5WMBi1L",
  "key32": "5JEbrzfqHXWMjnddszw3wRwrHoAEn2nCtswTcTKbekdCgMWfQ8Bx2PUqz8jLAdxttaiSwn9L9xDpJEDfKEwpF3Bf",
  "key33": "PSU1CByfUNUAsQuBSTPrjBocnyToNt8fNTAx2yuEWhmwguvVR1QJTz6w1SJxiUErsawDZK7Wa2RP35R8NjmAqX2",
  "key34": "2WKg6J5CWtBrcoLghMLRHJqL1CRbHC4vzfU1J745KyeQ2KWMdQES25t8FjFe45B3dZuu5jymKqmkjrcnHWRndmFr",
  "key35": "45GsYbGxHaD692VppTkjuQukVcioUkiX2myjSYGarsvSaq1LBMfrJkXzQmDSJZ2SefUeVD64jWVepCEiDxBGaEw8",
  "key36": "5BqEwaAKpEfZp2faEZixjrJqs99tPgTzCERZ44UGwBpMcLaqZ3nuE15X5sebV8w5Mwp6wwYGgfrzekGQTGcAEwyW",
  "key37": "PfLW4WLiNSz5sJ6tP64eX2DtKRM4PmZRY48Lju2KDkMViAQ6tNjtUYDiTn4TD53GabUf8Tf1JmzPqdMYr4WxnSb",
  "key38": "3vMo1z62aDDVje7pZZXbrn9rGJeA9RiVfJj8eMgtxJjVFGzzJXTZZKCwAEu3ZCdvzqxzbPx96bDA6Gn3kKPReiCE"
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
