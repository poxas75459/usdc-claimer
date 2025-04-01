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
    "7xFcmLsKfmGWobinJrJU9syK5PPCrVsw5tJEFS9uH2zBKue6gG4LpobF6x38Fx84sX4SSahThacAopKuwW73Jfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JWceF8YDt4tiM4eLXC6XBmeReF8uXoySYKCtV3VHqJaTWc6zxSHPeZVXeFXehfK9QZMgbdzuuey1tFZGNM39AfG",
  "key1": "4zjv4GRfLBCXX4G7chDBDi34FBVETVJe1J3mpBGqryyMhP8Xt2iSMeyjxGXuWY7jhVwmhphD5VWSi4dekFhRQPeM",
  "key2": "3bEWNmTX7jd8p7k6ykCmp2qgX5MRmW3m5Mtyj3tqcjQ37Ad3NigXzU6yEymcASo4a1jLeEufYB7UVuHRY14a7Hi",
  "key3": "rvoVDK3T69XaPvPhQWavZesRLifYRZFo3xp7NY8s6UMopwFjpUh1g4bdMzQhohp6PFa3r6a6Z4v3n7csdL91Z1q",
  "key4": "4Azk1QP1i9z36UJN2wB3pDGoW9ScHeaPnh2tg4a5bRBCL9EUDSVEqAcJj87wpwGrcA5zmmUeGQEamqsPGiidN4Xt",
  "key5": "2tMbPxMsqkfV1LaWmK9dFiATGpbRSnkqgkvUsqer1otpwR4yg1wzmXz4aY7TpzcgHDi9Tas46GeENf8aZ9vY1a9w",
  "key6": "4fBpWDQKZk1rdHFUX5UXXgTmAoANe1DyiFdRKfiKAgDYTb31FcE29tnPojhsSJKy9quvwYT6i6xR8UWuhEKP4taD",
  "key7": "2evTx6fAwhNKk2Lp871dj2MPQjhBkdXDQp3c8BciPb5ERizZsp67sAZTVPHWgfJmuAha9YPaFQEXjLsmwJYpsxgv",
  "key8": "4zgdZpCRMPs2uQPvHdh5xbjkK6zJ3Gr6CAtJ2X7NeoZUVhp5JcZgcnrrMHZf5KnTPCuvKSr1iRyrrJQzHuVMdzAg",
  "key9": "28dQWcF9wY5BGukWh2Hsp6deyF31ebe1aaPxuqybBBMBpGN9rwHbHDjVRtjoUkN1H6DXbJCcQxwsti6DFyTpxERx",
  "key10": "2RFzKLzvGamgg3NoQU2B71N5HjqcfTKqLLSKgwVgrfZU1Z3tR651zZKhmYipp6iYzuPuf7ZGZ5xS8NiN1YAdMBMR",
  "key11": "2FymzujCvPU6tgVRUmbNzTJPNZ8yY1uEGLZN2W4iuJnFh6hkxYkf5LA9Axjjfce73VDpERiiyt6nMwcMB2QXDG9r",
  "key12": "5igczsVMt31V9e1hyzKCRHEbZgstkGWtKQBct1Rtvxje4ozo4d3Um78L6JNWBSh3HKEBSiB9ip3BzUgfuN37kdQD",
  "key13": "3pwPmAEeMTw1U39fYwsJVgKJ8gi3nsPWC9NknkopunFKcziEDzZnCCFMnhhDTFuFczUmCg9Ce6Kj6gkaYwwJBizc",
  "key14": "4cPXs3c92y7ezt3skSZJx1JpzAS1EMNyRC6bPEmDQXGM5bi6FXU9hXiXQiqxukjCq9NLkD3Axvepb2x8ESkd6aVc",
  "key15": "43xvEb92MML2AicBsQ5ctJkJ74PhLYtNn1Ajz8cFb4evQZJ9qhcV6GAdhicbcysbSLeQcSmbzZN54McnRZwoCkDD",
  "key16": "4q5jvPgFUz1qs42Fwy8nvE5KGKWir6S2xVcZgmtoZ1r3fAP31Hw13J1ehkexFWZwgBQQd2pu1GMvRotQybRNWbpu",
  "key17": "4ohrfQfECp6wkgiqBLEbGxXYBnTTpufyDLnUehFa6P9xXX4cJt59JBmd3eDSc888kz6HwWVP39PhUBLePou7xW8d",
  "key18": "3mHffA1GvotacuAqmigLgSWQHwpjY8YTYQm46NLphNBWmMSxdZcgyePhShjSj9xFpoA2qgVU8yomxET8JP6fBhPg",
  "key19": "4nVEtimGsoxFYUeoYk2G1i8wMatBuFYJvYUaVwMeuFzi9vXTKsk4qfdP3EiUZjWzoT5TJBobR3zeZ6bqaiYuyXnt",
  "key20": "5VGBqvdHVc4xdt2jnhqjM4kUo1CV5z9uxtrb7w33G5yRbgGm7MMMv9Q89ixrjmbuiE71bRdKRRsMiJSACP4nEtQw",
  "key21": "3uBRFqAgPHNB4gNmYYHhxBrmDVNQ6NfEyTV2s42roKrGdSQUPwMtBPYotNj5REbWXBAUqEhhtPxdwE2tfcHqLvZV",
  "key22": "2evENkjVXRSuKufo16U1y4dQBTuNU4wiWGYtCcTgrN4PsNCZdvsqnBchRa6JXrYiTCU6wUbZWN1wNBtgD3PZ6uJh",
  "key23": "3NdQtS5KxzQrkNDgqMgqK6p8nUtVCy1Xrv99L94cGhAEu2dK2iePs2idaAjZ2c918KZ592h46dp8DdnPJkRJRheb",
  "key24": "2K2SAegPoSZfxY298mcdmAoRSFPG4B2s1ArS2nfUR6Y4gXigxmn1RRamkLxJtx458BihhL7GJ9mn7nRw3327w9mV",
  "key25": "3hqxv2oWLqPewvEUjztFxx29bD134UmxMgCnZuDwEAxrKuuBa3A2F6bk4t5sKn5nHSPZPqm3fxx37bXb24daw1Ab",
  "key26": "2YARYCSyr3mTUrAeQw3CGHQpWREUUA5DXf859wUwSz2Ahe5fNBkdkSeCLAYeWDrgw6UXyyxtwE1oqgMqkE8ZQuzP",
  "key27": "3Cryo7EvSjC7Y8WzfwGS5ChUxpru5utNWs5PPvt26u1oXk38kdnQXuqEBSSYEPBSHPrTiN6aLeiAy5iSAeUrtJKn",
  "key28": "31xinKqrAZLYnL6TcpE5WFhTJrwEbvnfpuLZCL5DEwPTVKhooyfSZFBRWGTxvgisX6WrJpDGNnreF8FQ7cXNUJAj",
  "key29": "3dqSgymyVUoTZbhFRU8zoocawB63EmxJQmseeyw751G1h8SfMK1mKpnJp3HeF8PyirPQavsDpuzUHg6cz1MX9mYY",
  "key30": "3SdMfuDHAn3JCbExRQY8rsvzbyGtMQDywwRMkjk5q17NPnFCgvZxUvTCPasUEMDiBH1XmE5hKsqJtatWhs71SJhi",
  "key31": "45UjQSkzJzHaAkrFTeUgFYPfWigfWXJzwHfAy9VQvhLTp43Ro3nyRPWQQKMpFaqoogLLCnhFeNfBqY8oi6zE2Hha",
  "key32": "3zDztkW6kZfVtPzmYnTVdbkg6tEu6zh5JbXEp99wJsNkPkzgqtxRmfJTT7sgNBMaCM4SrVrF7ogdNo7fae8tYmHv",
  "key33": "34sM5nsy5W2iBBLmeT19Bmbb99e5RdRGShnHvhWxCFCxciLZpwq8bD21SGDXbxPfWs9RfuUQwNM6QQQFdqGkqhyv",
  "key34": "DpDzXh8sunEdMx3k17gpSWVHX2BgrHS1Wcua8rhqZMwKN2Ef6pqppPxmHXkFuTD3gj9NJsvgJYEPh5wto8iZBLB",
  "key35": "3DvLvNQHuiHxRdKn1vTxSbbxqcTqpozBB27PN4KtwXyQcHN2bCGMJJM17ey5aT8XGnZWFietXYRLLmNRK4P1uedP",
  "key36": "5DidF8fBNpDhp7eNJwWjCmLHcVvDCGQYXFPpqnwMZeEUKecPfoGXHDioV3T5zhapVKEFbyxhCdGw5i27kmJPic2G",
  "key37": "3LPqaR6AgcdY32btf4zEzgpyjvSSKMzgeBTAu1BMjHG5V8GoXjcSwzGR4pAo1iJ2myAstZQ4FJLBTRBMw3KorV1c",
  "key38": "44CPgX5asm8X9vSxUYd4bTs6tm1D2LaVCEsfTsNb8w7ZHGmvFarDPjmYHf9GTXDmzjGAdo4R6UQSfsHPUT7Sgyyw",
  "key39": "4yYxjCFGMwcZ64xzmZDB78BNSpDgnScMV8tQ72rPfLmAVSckv4WTmReeSapmPsGrqwgEPQGGstXrn5RNatWgSExR",
  "key40": "5gP3dXFBZmi683aKD2rJuAdrQi2AodSFcGhqTwxjE9NNt5Ad1dqWjHSAg7aBgs7y85cLozPduNAntjv9YE52HjUJ",
  "key41": "5xdxKBsDRYBvB9Jc7j2EmrCAQujdAj6ZbwyEgqqpdYSn4xDgCaFYsyZvdjvSUrsyuwdE8sMrERULSp14HSJF8oV8",
  "key42": "5x9HD7ZscfVFuWZ3a7iuPK1wPr4T82mUX46eKG6GyTcAQdBnhnQjZ2reQiuLmfe98iHGQ1jdrD5kxJ8ZE8G2cBbK",
  "key43": "3qmYeiN2XQBeQ9uqNwU36PwNvUbyXTpBLBPPCqvSCmERLHWQJuKDeALBh13GYCv49QvDj6sD6Jw9DSKeXoZtL1oa",
  "key44": "2dNoV4rLpRwYoWfeawCmuLT1VWnyYYqkRjLxUmdWDcfBit1x2WZD5G5J7mBaeFLPgZ65YwhF5iT27RvNMZqPSVau",
  "key45": "3YYCd7T19yBcRGDaFcyxmtiDjbgW9GR1wb3tqVWewDaciqRjtAdSPVHc8cMP7dG4WDRciJvYpRj7gCJia2djhsS8"
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
