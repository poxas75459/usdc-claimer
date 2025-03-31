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
    "5zvXnzVZcFbC4RtP4knurfQAcCzvgd9FrGykYPEKKQ1bUh7o4AF4AWFezqAkPUJaBRJJCCtS7ixN2xTZtB4APyQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DLRKFG5DJ11ftdgKh2jUbingtfP4V7aWFpTYm4cjuZ8e57uxnR29r2yheHj5hN2rxvWr2mPRXErfQKs4ihR4skE",
  "key1": "3azQdzBuoHtQ7dzTsVmroYPTUPsSVURQnyWm2ynJRxZddLftGFVMNxXQsdSo1PJ4nAGptmLdY3zNKhFVtDCApP5N",
  "key2": "pdfJf8SexV2MQcjpYyg8qzDzWWpjxJCwz22nYvxcg4cbk91akDT39UcvrZEzCiAe4TeJWLBZeWkWHisk15wo1sL",
  "key3": "d1SwHbWDVqBqJvYMQAYpU2FX7n4ftc8ZiXGejjHLMH34xEEhM4F18tocLqsCipRUgCDA2Y7XmmFj6sttwXKVzss",
  "key4": "2b1dgmW4af3Yjp6CuNfo1Ph7PjGhqWoQ1dxhLqdGWkqYcjB8xcR6yukXrdCMjRW1zW2H81pfo5bZhgJNjS8tcVhB",
  "key5": "fXf9nSeLt9fE2ZLJQJUWiTcMA5sgZLqnsL347sdv7iPLmCBL9uq6ynzLb7Hypzyhu1SfZgtXBLQ96FR3FREhFux",
  "key6": "2jSuYDbBhiWJ3xGpDmBPPiMzKQZKa8W1Q2XApTYQMUn5JaoKyha82Uecd4wypxvM3rFdumA6aqnrMrGSeoGt1TBH",
  "key7": "4rPhkrBUNReAHt7E2JTy8aKv2WvXDQPsqZXiBXnmrMQ3mz1Tcq18XqE9FjEctqEgsYDGBJNdWWeRvnirbb7epf1S",
  "key8": "4KPQaRKsVskPQZJqkgpmMiYz8LDqGjXaN1weeShsdubydVStQjE18xVBhDfJhFuKhcDMzbnDC5EBqeuASJBf13yK",
  "key9": "3CoSYquggnahUp7FEjdcbD77Dbhg2eVLxd8vUesUFUVk4eEsj1dXBsgigsPyYnREJru3Xq1iP93Wq1ZZwyZcpUEz",
  "key10": "9YCVK7iuvCY2mrhLHhA1Se1L9VwB3gsvM8M3WypPgjG2aQvQnxdYBMVh1vq41b3uAL1sZAEYi99ePUW9maRbsDD",
  "key11": "5HEuQK72q5JjVFPaB2v5HdN5Q9soHwnsTpjpj296SHc9stwXpqp5JSMHkdTBokzxZENmr77QB1MwwFDhg21iAy54",
  "key12": "oVhmKopM8ha3LYFxgyNbaQJoGgoRAYXNTRav6EGJZkx7RPhAcmGUKdRrrLdiTauNFQBnYY9E1afuxm2NKQVPkAd",
  "key13": "3rcVEGi2WKHvWRm9Lbx3Vn7aeviQWPFHQtCGxtRaFVjdGex4BgpyxJoZeBZfA13tc4344VWfLyovvETNczL9mu8R",
  "key14": "3j1i5JR8mNbthmcaUkB7fnwsrcUxMyLBcTPbnn88gWgb6FmrTBwNxVfUTQDafT94zYdCWBmwzSwXH8WcGe5qQx26",
  "key15": "59vUxMd4NpQsgiYuGLarsWTAWecxXnMCPNVGwy2SE6WELdzqViJCXob5Pi1faDUBEyAHfwfDByN8CMf4SrkCbu6V",
  "key16": "39NFkVuwnrqHsB4LJL5Bie6vVVegWpp2SYEb8XXtMFm3crDpvspmsgcuYCvSxqwTgaqrAYKnXfsa54SiUt93fB6Z",
  "key17": "4FgLS1YaJFCZsSZqexkiMwEftBBoBJ2j5dPTo7hh2SuFeGDaaXmiNh6mPsSF5ri9G5pZLotAD8EZHLiSyPkTKaZL",
  "key18": "5yfCHUrcEokw6v9aDixak6s3CEJBYD8QTRasEyhZusUesntype8yRUKvoRxAfgkNN7u5nbsCyAH6TA5mFCbN2f3U",
  "key19": "3DyQENhKAuyx6RqJbn7T4pijfLtsqGJMoctcwy2kqGpk1qFTQN5i2YAoWT9fYqb11Q2RbkLtSAsb3wUDDrTFFi6x",
  "key20": "4oi1L559iAdRxoUqLdKKTQxqSJbeWJKrcoLYHoDvPrqrcY7D6Au2CUUqeqRJp9tJnEwYrm2qC4kjFyoKDxvZyzoh",
  "key21": "5zgpD6JbVGqYnE3hXte61CsS5tir4cedk7SyzxY8Z4jFBrphnpp4vHTanh9nrcntcMzmiJ8ntf562A5pRHBpotnf",
  "key22": "2zvxnQ38pD6xBtJyjnJdB1kW7sHMTwcfWQZVovsmrMd6jpbnUYnsEmfJZpF7G1tPH74J2cQNLfYLPQxLRgNMEu9B",
  "key23": "zV8tkDFSpUkdMwfGXKm4AtQASSf3E15WSKY7asSwJ5zkywk6mKwyTjUoAVjv3zTZyftjHXQKfhKavABviZDhi3a",
  "key24": "4FmEctfkk44Er3zGoYzDG1o7v51TR461sYgH1rXbBYnuD7DZX2oGkLqUKsgpLXAbQfTZJo3j73TspuKsJ3KXG7uC",
  "key25": "2xU9N96RLcB2XnGyJpV5PTYSBN4gP1yCvG7duEQAzHxzW8JU9vwss5r1v34Gy3vtNFmHr1SdJqo34uYcyX1CuPuU",
  "key26": "5eE8CQyR2Y2DhmiPFczUYg7WabuwBg8wDuBkDYLytXGcT2TsQf3uhPBR3uVbxT31VMsKxHi8mnceXDAJEmcEUsjf",
  "key27": "3nGopyyuS2jUcLLwog9oduFDRD6W7kDx2cdpEwrd3abH6W7JRJeHYzmyFwLDxXC5hbL3c3H4hVUrVnLbYh53nUmM",
  "key28": "5wG6B72s9f8L4JVcHvDtpHaG4rasT4TjrUuJeTHfupLFHhCTEyTTeqbKzQunJczovmyvr2ihKEJK2Y18Uuwy9WY1",
  "key29": "3bMVZtuNmyMMiMNNPRG61itptV9rBy8xkmxidN8RNhZ3hgRYhYZB41ikR8nEGrx4p6EyPyNEteqhaF7ucZN3oZ27",
  "key30": "5bGVhckbEMQwmHuJ1iwbK7Bz2L7yzWcQfVctdmHgfCyBhscm8waJQs6jiWzviCFweZpEBAt4NXTfpqHu4cYyxnWS",
  "key31": "2Qy6WFnDtNHSPUr4zBEEyvJzpxwTVeGV9S1yVVpbyuGWR7xfGwqsDa1oYREqS43gcW62v19cZKZpWUV3Vxsm3aHU",
  "key32": "3xgHTfB9PL1KzZkbGuv75NLiMj4hcZEKWmw2ScNUWdYrt8yksUzYaZdDK56LhUVdZGd9pqVuSCow1SwaVGDfeTi1",
  "key33": "2ym1paTtmgqQUjwYr6a4WifR8y79XcQqwUGWZ2z24rLkKJYZ2YgyaMBA12TS2aFQUpeBoALCZr4Xq4KqP492YdTr",
  "key34": "5B7rZV9JzUwwxKuv2AGib6r3VTyEStmMWaBJtXsDoLjLmZZS8RxH5LuhMSKHwW1QS2LMJ6jAcgfmnCq5qBGEz6pS",
  "key35": "2Fo5Rkf7iw7tPEcx1ZuZ2iNKr17ngmhY9ocf989pSKo1EebjMJThTHXhTp1ckDoPH2tKECAzzU8JrTYACYGFXmZ5",
  "key36": "2tAPsgcAyCGxPEkDiaHmQwiyvi27gWvPohwwSzVsEL9qqrQmDffcZJb4EtikQ5VGCiKwCvSdLJCc5DCwwqrcCBB8",
  "key37": "2ZxK4guDvSM7rkoXMdr2Geozv9poQEAekbqKcVMMR9a4sjCiuPJRQ6KcrETHgmEW66AGN3Pnyn52mgt3gzEoARZ4",
  "key38": "4Amip5big7mgjzDhXi3xycd4DTBCrstRhszzH7pASUyQvfjf6oyDBvGFbxJHDePw9ctkzjpVonCZU3ZuoC4W6cz8",
  "key39": "7RJRabfs3qdF6RvBkpfupt3h7qVakpEKBfWxpKCzBSEiZLvD3ndu9jfXzERrMjLxVbqgLhMd7RyhSyC4B8fGZpG",
  "key40": "3gSuybZwQS6KbjjgAzgoGR9AoUMFccuLtGdkkF5Pg3eQ9KHRLqnUhHQ9WAyCpvGAx47jtTgm7do4yoXecWV5Vopr",
  "key41": "2nhpzoFGw742iBgAt7ubpw5ne3ujKgFJh3ePp6UJgZEccLABWjeAwWeGi1kUr8rAUKe92qm4sqq83dSTXALQtANC",
  "key42": "shpqPojp3GcugMyd1P9VA8iPVATg92S4NAQQRMPLUmkC8BhC4nMdMgZD2HPoHCnhRkC2iNjPLRrk5zV11Mgf7Jw",
  "key43": "4AYWoEzVYq6K5dwLLB95DSHXy1fhFeKAA3VqW2WnPbnEAmU2bXi1TkeJ8BgSFRWnGhWmVJZsNZhQGhkQwxoAYcvZ",
  "key44": "5cGvssX64wwJ4hVssfKHLTDod6d1tpp7uFmQq41aDWtzRK34yThpQKGxhfZA7XEm2y1ftyLAAjUpvs7a3vuWzpJJ",
  "key45": "5HdJCqzDfRR9pQjCjfW5M5Es4pGgxdp1J8un2dWMrGk1jxhkjXhcndPSb4c81cqiWgQMstndJtaDpUcLFhSiBWye",
  "key46": "2u6VsXGt7MAYdcSY2LTro9GxkuBQGfjGaUhTGWGYAv5jAH3Ec2C96kDUKZ4ECn3J2uyG57bm2t8phLB9V6qp48dC",
  "key47": "5YpyibfQyZ6RRQUjvXXera7hVUmzXDvhSEkwXSpmbcgetbpEX4DG8JRc92ujswnaXGzU3iqP4PK97ztd6K29HDir"
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
