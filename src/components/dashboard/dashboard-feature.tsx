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
    "39QiSqvCnbNrPBUcvrq89kA2BWQJvxwKFcDhLJ3sW4wiGhWKyBisLzjzUGor83RsnZ3kC41A5ntUgNQY3xGWCWK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TiZE6Yd5ftjvyF7qmvmgtvn3rf67hmxRfm62wAMn4xSzzTrUd2xbQ3f2C7KHmiG5T9ZAEBrihrQLhXTbW7pTKTm",
  "key1": "64i1wxN1g965nM1qCHeAhLi7mEUqs6KRb1FNuV3T2NEKSXxLAeVbRBVuVWQgM6jJpe7e1grSysuC1jhSvWo4TnUK",
  "key2": "5YcYPsx7sV2SZoDUQdRLpJVkNssnYV9MDmHoyZNUhQ7DTjrZp12f7qMRYvKUxhij2MFBkRaK2xRyVt3ZyLUsTbt4",
  "key3": "5LpXTz491RCR77yBQRMNSnHnKLEVUAVjEDgyLWL2Mb5PVzhd3wSWiik6J77hBLrWx7CxkABtKtAEstDEDYC6Tu3R",
  "key4": "5BUDtfF67pg8MDad8QcsYdaHXW5QZHWR1qnYsofj4tuQU7QGDyNsxf2vkHGziaGse7KzQ4w94VLaU8RKa6oavrGj",
  "key5": "2NC2Dtb67YHFeiY6nJB7TQf1uCtaVpNJmMaGXrfHiup4WsZsasohS2W9gDNmmmhQS1f6Fgdfdj9reZ8Hiy2rS7N6",
  "key6": "4KfbBCJ6YfimomjvW4bskcrNhpPPtpuzhmAtse8zPef7BJD5hsE3ooVyKnJZZGvniwTK4xscf7i231waEMqiSTey",
  "key7": "3EYLgfpRpzZDhzxRdab9ZmyTBEgmMsCsnse1fEC4uTRWXYLyFrsmpaVtJZ3jHRzTyGSjzaUjA8mmHJTK9y8P5XtY",
  "key8": "4eQ3Yo5Q5uLGiinDurgmSjWcQvRfS6my6VVNzhJiuYkogr74p1et9fPEeV2jumvzNJ5e3qdZLDgrjP3MuGiDcKnE",
  "key9": "2UADzB3fy1fQ2WytaSVKRm3Ton9r1s1qNpzP5iezwbbCDPxwLSYfZjk1GJWY23J5mw534k4N2E2nD73ZsqZE1pRc",
  "key10": "4WuBJTNSsMKehcKCUV4md9yMgFnoMm8nHddugSe11QTD84WrCoT1FoDkVM7iLftawEynuFbwgzVSnL8FJovHbzGV",
  "key11": "62GJVrZLZRZ3QBiv22mENg1Ftb5ZuycNHX7QnFnQpyWYApjkCmFZ87KRGHaQgWTT4GCWDR4DKp81bxQjDtwD4cvE",
  "key12": "4jYVD8KUe4QgWVFU7r4JFxYFGsQhXNpSx8jRVot7Z2FCrMAtxT2MdXF7txkYz4j9cqkbHTG4dtdmoREzRhWYwCY4",
  "key13": "52mazocWmgNoJL9HBbyyRwfcFGHtKWihUECfEaCKABi1Yx2rwY6YKcvYEw6RaGKnzKUp9D2XutPtRMxhukpkvkgD",
  "key14": "4TtL6Gpjn9fBHekdjYHg1Xf4mapsCzZKgcPqqHaABVg554LSXdBjc2o39ZqaWngkRBPNFgtYoH9FWSG2RDVch29i",
  "key15": "28UwmYPMKgYHncacVCwPt1MaDDh6rn8KtFwsnH6onPqpxEDkYtGnrZYzKBwyHNApMX5c7wLn2s7hJUXZjwFkofG8",
  "key16": "5nnk9ogn9SWgK8rukM2EXsvmkoncgYUBwhcsBrpHo6sTeHVYDQxNDWa69M6QXMekWHp6USE6ZhFFmLiCQsPVgg3h",
  "key17": "4YDaPLahcWRtRvibdmpdrecuKTvMiswnTTyhjVrJv43nSRtb5ZEwvfDaeND74bQ47NpQdYkXhwvk6F6T47c38Drg",
  "key18": "36RxeJbTAnXGoC5z3nv7sKj5HSTcx7AiR7CDxo9mwgrUDc3uCRyTS2uqD37dUMWNwByhMsDNqQTdvV54gMA7jncc",
  "key19": "7DajXgzxfcpyaWQPaWEkSAAccE1sLfEKYuQpoxXabuy8yBjt9qewdqvCbavvJwXLtCVPhyzLGqkVRWso8VVPrAk",
  "key20": "34mWtkkw2dEzTQohPFgGQB4SMmRgLu6oG2eyyGi96AMRsKJxE8AFJZdPrHWEvA2AMwpAptFUWhzdp9hyriLQDSTV",
  "key21": "4AVFBcuyfetACi3PL9KNwAJFYJmRaTm4wu2YX9HYPbQvq6bC2R6xZwgd1hHM9cmCf79WSr67N6TxSgQU3WzKcHmg",
  "key22": "3pbrTbNernhgsHqVGpGERZ5oz2rXeifNAYTE7Geb2qHh929UmUkoQBWZpPPdE3Rxfaq2UioA7QpLLEH8PwBHynju",
  "key23": "2NoLzfF2EiZh3xkAgadfLPNTpPY76UHdCcNCcUDhvhSEgrqEakhTSQUiFV1PEcx5L9zKfM2sj6hEiteNDrrJ5zXy",
  "key24": "LAn3g43M3MQbP88ZzHdm3AQGtpUWC4BAb5Gi3LJuavKYQrmWf4NSPXZRYZcfGH7Pzw5XYuE9RRkPb8CtDYtgmKU",
  "key25": "5xnDetC55c2dJLw4cLmwnza9M7JV1tmTuiKnyFPkqG98hzWWyVP86GVjJn48L7T7iRJDEGkmaRpzESdTj9TS4cQu",
  "key26": "N7xhYnRaom9ZZUmE5tgqGb35XfngpTbaevzNXUkHs4GrEtVBdgefpb4dHLYdqCRpvkoUKZetmasNUhBxDVaWkXC",
  "key27": "2iTYyNdLLwTNPzs94vfvjwpJXcs5EU7zDQcQEschHqHwNhgdLtDzdjgCt4yNgHddpHLqqMeoBTv2ckMjKZhQ6MKz",
  "key28": "3CeCZqfeBF5p6nDUof97fdqygnZ8FCuc8pLrts6voEB89AXc2ZV486pXZ5zk3HsK4A9vT5PqgBXuCEWG6oYdPHJk",
  "key29": "5nmAMswboGiXsTFiRNRjV9pfpbBq1p6rWFgPGLXj4s2mGhP4kvBCJLYNqAKBEYFmWnSsxyybkSLdtVWVaqUQbRUE",
  "key30": "3kHWmegTq48g5fmQj2M95E4MRxJA6rrhdUoKx4DyUWyS4dvZMZ5eGs23uLBmWPS4XmN4f8ksMpCG1sG51fz9GCu2",
  "key31": "31tk2H93JPFN8KJj7Vwkpftry5bzPBm2dDiKPdHGJDG6GcrMTk3RcA1tdHrEHtgVMxwPaqMtExFxJ7oxfmFQRGep",
  "key32": "3HAVbbqz5ebobhs5KgK8TYaLew6qFW14mRPRePunK8KvGea6En1Hfri8FFhj5ekZsraj37GznW1VrwsnsQzeTWgy",
  "key33": "56JekayGWNBok9S4h28pWbWPzGpqs9fhbR7e3643sZ3eoZusGUoTSBaKdgsKvozwqZRMGPXmDWX2F8rdsuyxYL5z",
  "key34": "4CLHyeqygrHHe1cVzPJn4mL8o72iTU58RTmH9JnAmutvdvhZoEgn6hkqpRuUYLFbN6WnXjueJQvoZDPimjiLnnDV",
  "key35": "3Twno15nwRifaenH2fTJvSzLgYBX86dBDucobZEvtocRrV8K7bvfr4zWHhekGqhvKBH68nikGx5h7VAaBi79vZtf",
  "key36": "2uyEbRbCU5mdACZ3cJvFYEtAhNQ4a9HGZvfmhq71fnRjcSryYKxSmfTzM5SeUzRxgXw8EZXHGMPxAYvDPHV7yJNH",
  "key37": "4ESjLmE75UYdz7WqnHdm9MDpkcsmLdrgY5xdQSSFnWGziTwzYes45e6a4vLRcn7BXn4RoJu5rVx1UGz6hKsstd33",
  "key38": "2DrxnQtyQc8h9GP5BTTAgsMTMRkVguYDe97KXyL7vxXjFM4ikBAaSEA3jppmrad4ZWXdRmiH9sU3mLatahjfSx6e",
  "key39": "3AAUvazCFp7jzJHqRcqZdFkjJx2K6RQerD8LDmc8xqMHkamnuMj7VverKCcsLjnQooXCz6ptizTisCBtdcsdGNaP",
  "key40": "vdYN3EqsZhKKQnphD7hXXrFg7yaLbXWdY53QZhZcyTUUSugS2JHp3YSueNHpeweAvp9sxD3B2qH8eyFTxLFewat",
  "key41": "24PToxKps8XzbdYCRAhFoW58dTNVpy5EebMJu6emWrGE4SQXoR3DbBf8oBXPMUTrTr9k4KdD5EwBvazJ4UBLF8pz",
  "key42": "3scqcKhUgLcUNQwiy2XxHcVhCZe5J4aBi6Rr4zLzSQW1sdTuQhz3e6tvyAp6m6Hu9UhdXNKvHaFtRfWyK5b8qKps",
  "key43": "2pyCpq7A4Y3Zi6bbMqe4rGxZXPu2mJbotZQskpvPhj5eQcBAXce45SKqJ6RTnBPvyEuK68RjJjF1cuCbF8etgsDg",
  "key44": "3Qfu2J9N2VHoXTdTMHU8qoNC1tbtgoLF3ENHsDicGXt3r3XvYDjS9hhdBozPgsL2C8huV9m1WcsvAE67VT34p5VC",
  "key45": "3X8EES3f6M2TUM6s6GfXrNK1gQ2f7qZegcui9JekAQ4GnR7X2EToZqfW1wvXafGjjrNs6XPeMmRxDYbfyzHUkq1t",
  "key46": "ctpAaSs4kch1LCX2tDd9B6dbKjf1riFJ6pfWxppLpAqYPeZxNpiQHHGxJ4gXWNJbv1WqskzuGN6oYJfpGNxVMst"
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
