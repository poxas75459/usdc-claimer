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
    "3LWdxStf1vS3mkwq5iWtE4nLiqEC1DLEuBZEPZF4cUxPDVfWkBeVTdDbY2BkntcdxCadHmuk9vdxr18Vo9k1Q2gF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ynMvzyj5QihtpHvGBC7zMijJxxNssZx6avZiSfjxH9LG6iyjFJiezMoUqum5d5yfniCPU26b23YDEUJjSKXKMhM",
  "key1": "41cYLDihgjV9VNnBMfyr2bFUXo3SAkeMuKkPj6z4YVvVhfF2JU3ZdN9Fey6jrRjWUrinhzpx3yrHpCUZPWCazw56",
  "key2": "39Z5uUy6qdCJxS9gDxwDzqspMAH8PrzBPM4QLEoAaveFhkoy39WA8RYYmGcHUm5FyWzBq9umGG67YQuJXktAiXH1",
  "key3": "3Vymjr3AYk5oAR1G8jxoM8TQRNXiu9cuncje9SoJUvEgCC5LtWXkSUSRM1kbcDp13UB1GHPnFAfcpVA5inZF4Rrp",
  "key4": "3SyUmmd1XG5TDqCUAvb7kjMYed8gCK2aw2SPcTtoqKpLLdWycvQquYAX1VatE7ECB2tLNp7ZpvoBFPkaLfNNDLmd",
  "key5": "2i9yozbhx7zyuS1mVWYYfoswCpk1ivYhnDVYe1m1QFENLv3DphjyTFf8pvoDUAJeZPoJx3uPVCNTDnZ24CBtGzMj",
  "key6": "fwo3cA5gwTWy1hnzz8MrvDr4PLmy2o3zLuJBCnCQRsGd4CnZ7Ca7sQ1cV7taHVzTfyZFzeBU1ydQaAtqadPkYoP",
  "key7": "31a3DRPPisAfAZwmomHWKdYxhZWZxrFrniLrcNFRPcRK1JpcvFctBbyqE5Wsr3oR8woiZfbTwfySyrC5qMrjrzog",
  "key8": "eb1mwWdbQA77fiMdFHwk7AKqTZDou2MNwmV5CJ5QX2fRGqrohiCVgkeXAJCnU35xvmfJhmkEDSiZzFJYixmZQoH",
  "key9": "553J4udEMTLVacEZDVo4iyQQcmNDAVz6Pgy3Ai846D7LzwNJqfChK1q5qEyGkk5Qd6GuCzaFwqcoSeJ4oLFbs3pm",
  "key10": "cfT4UWCosRna37bMbWJxndPUGjUYnrSqQwB2WWMi32KpoFLG2CdZvybB1KLpRixy9Reb941Luhq8Trfj4eso6Xt",
  "key11": "5KAMCHX59Ps6gVKS4Teem9QuSZ3sxpn4xGAxskcqZC97WFQCUkTBJVKJhQYZXeLjba9fjKimeAEbWyqjkzLvSHKb",
  "key12": "uiaVy1sdtTPk7nXzTVVZmNXycWMHhiARAacsZ5uFFGiTwxtVnCiUbAaPEpr7Ga7fjZ2NzPSV3dbQiLVzLDEkwkS",
  "key13": "Sg9e2zz4Y1nbZZB6gfpyvXDK21wiwx9et6ChQedsEzCzAqAmFJcbgzJFkECvC4iP4tqchZQ4L98rZTgkUvcNbWs",
  "key14": "2w7fwRvHXEMkTBf8Q43ZNNNAGPvSi8nYYEfgnqA4qNQjrjwPLEhsUTW3UAMdk7h8B6FfF1341SgFmY3mBgsxm9KW",
  "key15": "64KjohbeG5XhnjAQA6GjudMXyGzjVCzePBGDebuNREb2QiGVDM44tkSxx1G3F2Sv1AaLUj1tEdxZ7ys9dMP6Z9NP",
  "key16": "PzbTJfwQaTWYxWop4AjHdTtbFCH2NVdfx26K42jZy2zW64y2LCshAbxALDk4ZKXsasK2xeBoFUJydmnCotPji8G",
  "key17": "DpJBQAKQKYJBck7zCZLAwbgtCWL7gjCW8V1WdxqsmrdfwBf9Kbwo6xZDyKP89ULSib9Ui4FmrLQtaphnvXduPru",
  "key18": "3oRk3bnaAqL3jicwK9yw2mQLni6sZvbAKWTRHhfuFoLXVX1Zaoxi8Fv8kR7ZzC6vp3YF6LbWd4oM9m7zyzpiMV5n",
  "key19": "3TtDkjbobeH9Evuh2c7msesA6TcHUAg5Hh3vcrjMmiMrDXqsvX9YXayAiW4eKvvgZUaGnZxw4J8jtGaGo272n393",
  "key20": "S8aBXGCHPnPu2VbUYJRfXXhWLmgd1MuxXxTFKaK6n5tjeHJ5gyahupuiW9Uch6BeSVJisjnhfy9enLdxQhebfFi",
  "key21": "4pquMshqhmzHkK9Zhfke9ZmbpbRcQio4vaWG2PhbEjSBdZgSFAmQBa45VpiY2xC7xa8SAbLwbKUdAYSTjFYQp4YV",
  "key22": "3kuhQ3AD57ZY25mW6tDHnzuMagaG58rg5CgukTpqjLFqTdVj8p3Ce53WqDf2X8e81hUsx4hMiobsmfnhmXG1vNjH",
  "key23": "njgrYXZCFeFHmDK8gcFbip1QQJGj5cJ4GP6Hv6QwzLbY55UKJKPeufAtT4eT8e6xC1fo4d5EUjtUEQpeVLia1Gu",
  "key24": "qWL227LPREtEeByAgYoj2MoPj1df1AhzobrVtjSx8TyrBUWDZPRk5AxQfuDM79hq21kkoDNtJdKbAEqRfKhNUFy",
  "key25": "4wUJZLWd1F95LRWFfbegujgFyqbFSgrud2uHHmkwB3i7fUwFAtktrXAkvypjqD57NbfaqVZG4Rbb5Lrsu1gzwVD4",
  "key26": "5CTLtjS6JaY31NXKKbmoMd1idoypVuCDUitXrdsjTMHjPThnnLEJK9csU4KDUGWQfHb6PeunLYHBDoxyR2nZSXpm",
  "key27": "4GKTcRh3MtqeRtZnR6L6cRQQqojQmd6Hx1kYw1TTEJKEhciJ6m99HNWc82X9UYhbj7yfKbo2GynrDWxew9b3dS7Q",
  "key28": "5CDa11afsWHBnngw1XZfGRfvrLXw9puYZfohugW7kryyet6m4c36TQqm9pUGTAseUFsrqtugmHHKu4wMr6356rqF",
  "key29": "5QoySmS2iiVfTPbtK1T5RK4XHWseeDA8ThYSCZ1dJvy7YJ1xbWTV668yc1wQWNtV5C4wtzHTPcUUVJtodSSPNku",
  "key30": "5CwJTEZunrucAi5Hr64uks2dUmtZ1Q1SrYPpExdx8QUSovAD4aFWx4ie1PfeHaRB1hEVopVdSMJEmmmHoLU34jUJ",
  "key31": "41sTmZSK3mQqXoqp6w41oAQv41tB6AAA56gqgDaRmPBMWerV6gQUUYQvQmp2WvrnGctinGaytqdD7takXvDeaKZT",
  "key32": "5c34PgZMSHuiLEGSfsVkVjHJt2VM788Fe633JHG56WtT7kZhruvSUGDwbj1LpUrd6Mz9Pj3PxpLCiqE7WcTYh5BQ",
  "key33": "4PKCNixgGECGFSUZmoxYt1Y6nxGEzGQeQwTSgjEAamz59UgCFxv2FJfuFLBC8c8vBmsPRiDmKhFwQwriXbpN6Fnw",
  "key34": "3BY8ATDbeex5cTETCgffvTkP2CGVJtJXnEx5bhpXxspKNAzpf1S9d79w5ZzjmQeXr4sCB7wdnDL5t4QELuuEsjf8",
  "key35": "2hhy2G2dpEe8DSFh8xKr26G12ahQRbDYEQGKUJFvuz3APpuuAQobrzCgV2qv2uM12xuDTM35M578yFQD3fFCDNoe",
  "key36": "2i5j2WKKzRdSw3mvoV8auBeiCWCbUpVcudqcFPC14BtNtL9SGaysrCjoZ6jauVydvDSZeRimgeqJtMgYyx2Kd3ne",
  "key37": "2vP9pfPe5vomrCUmePpH4Bxp6dpMuBVRJdfbHd4bNZNh1PcTgjtzNszaTCJJYjAXqtdKp6wk7o1z7VAb49dKfBFN",
  "key38": "3SUkqSJBomexNAcMG54ztt2pPqWz37vHh1ambXQgxxCuVfemfZ3ggH5uz3nyJeTgmxuVdEe4iezLa1WuFQyYEHT6",
  "key39": "4mV2tuQcUdzECaVhr4CSB8fmELH6Fw4BpzobSmAtM4kNrzezN7ie3sUALg8GmByFrimZWREJFW5jZ55HmqERkdCv",
  "key40": "2pBBBchgmzR4TpYSjG8BgoiLdHrCod1hAgf6kvpVg3HQHka93We2964mxr9WeupKsbE2B2YuG4TMWAP184v9oxFQ",
  "key41": "2yaW3RN4b4ARyTsAvqXBnh246M3YcR1zo6mxvr9f8iv6tzuSX3STnYXvjrZBR8tRjp1MBDBcJpMewDgNfKjtqzxL",
  "key42": "2MsVHrpycWAWPmuJ74wE5eE8uM94FbxrL5XaqRByWbVVcDbVCmH5oAt6TdrgDr1U6JDiTPSADF6bZAivhFKHfJDQ",
  "key43": "5te6Z72NDM3qmAbgQqnbbHscvAc7ceGcvaa16XX2c59remNDQW9ssRHTmctpk7hKrNg8rdnih49iW45y1ebc3Cvz"
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
