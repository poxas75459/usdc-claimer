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
    "2cALLnKkSEgBizJxqJC3jE9EWvBKjQN5GW1ipaN2ySpFNZQ345m6PinBxSzZL5mrRDsecYW1Sd6wJeX6Pg1fvvLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wHHPfX6YABSP1Wz21Rf48UYk1W2ufQNTs5VGPS1TQw3oQk3oyXmqd8xJrdxycTZNTUEcn8reXi4FknUp8n24gN",
  "key1": "3QmKcT26K34LbvzTLUoA6VPgida4su3iJ6b95AqC65Y87LDSXA54TQhuqXmRF8g4kbk4vr9aSySZDBieTFQKMqHn",
  "key2": "4FazWvZg1zsxn6vyYvdDLUGATVgkXUF9ThyAh7SFRHSq4R7S7jF79VjmstTCU7XbB8wPisw5QRfKyZCMw5GjSX4m",
  "key3": "55quYE9PABidwmRdxbvfEt79hRuCcj4dfVo1JGHvx4XWyapbLvEV8Ajwn4A2N9EFEJQy3PkEbTYAdpjzxqZ1BfeA",
  "key4": "3eoBn9F83BhjD27KcWsCuT9VmEQug7B2dTFtWypuj4JQnkBRf3gksFEhkKgvBU3SyuS3Ye4JRouRP12Hr5fWxctZ",
  "key5": "2pSFGbnga3PSSNKcCSZpSgQP3NJgJ1gJruNeC48dmjnzGdAyqhxnwce4wehUEX3bjqy3UdBfoBGVUP3Yzx8cZqtC",
  "key6": "2VH8Tuka9r6deSPNXtANjJuH7ejibTmByEkZnvGSMFbREVjqj37W2bwrpzD7KJhxq1fQn4cDukF27TF5VXFz8HLw",
  "key7": "5Ja9LztkFfzqYuRGX7CpHRbLzgD9Jy3NbgEEEKRqVqMwjFYjS4F34Cc963GyJBcptLgHGJSPaygqh7RPTMmomdDN",
  "key8": "5PmmpD8fhCguu2vKLq9EZdaspLVGDK6NKqGYkc1K88nNMSF78Swd6fYTRknNVZGRcrBTdXxwQGhEMJvJ39m2Ebds",
  "key9": "33tQ7CngtEjRc7VjAqRCEAngv4orGquGAhFaT8SeF6hzYYB3NWkb71UmZzcWLaPZGqWjLzganZH8ruQL7NSmycMR",
  "key10": "2jghSthbTWGnK7hPwpdLzrCvHbqJfcUPFHNJ3CY4UdaS4UZmPtS9mw8p3cHNox1keaH18a85z6yHjW9cz1TrqaQs",
  "key11": "3zHHxFkQ4MnEURQ56LRu4dRzmxfJaMv2eZPCXDgy2BTFHXhbKHDNqeqBhh78eHeKTZ6qTpo5rM41MWCbNncmVwrQ",
  "key12": "XHB4J3RirHcFaiVQz2Jw5ivv3TG4r42LnhCGBHEZFEPAHhR5R1ooNSvjWYgZ2hRZYHiy8oaBYx81dHokgbkKtEe",
  "key13": "2TuuBf3ZjxQj88eGsrEaKEoV9W2uUyyNmH1vXQ8J18UaErproSSjH5axhVa5h2qEZ8mcSzAS92ZD1ge39JdKSMfR",
  "key14": "r4TDTe18r6w29jkBd6A42LtGNLSBTeiRQjjMTCeaTtizYuw8SSut6osoemvsyvr4p7iFR8LDkjfzo8Y6D6MuMZD",
  "key15": "35BzansmgKezwX4ZxzG6sK1Sdiw5dG6gscxgECL42aBJh6jZ2YGhbq6U4yvhHgDPcJECu9T4CEQAaqgwei6uS9UJ",
  "key16": "36qicMSx2uzEZwB8sSvgSYvzVGjYMx8NBzeLUb7A8fDxD12T8euswymdbgPpCLQASses91nzyHAojBubJjtHS96r",
  "key17": "jYe3xZQm8yCBo4ABtxwPQ7A8pU3k92SWLHsKFWXn6zkwNcwpjWSooVByossFXL95S17ZQkWpQy4jJgnmx8S6aAY",
  "key18": "619bk8aH6cr4jG8LT7pr7Tg1tEv3CugbSbvgM32EY742gJTyVdWdwFVyJ2xT6SFLD8wgo4fpsmu4L7u8bJuL982h",
  "key19": "Y8zEc42a12sBQsNH883vZPYRA8hzDJVQVvvrzidrQb3vzVL6gpUrfNr4uJ6jCwRyYbkSSQ5aaoaEKkot9bEoycR",
  "key20": "2cy1KB4KMqiTohcAsrPG84xVa5QBtEmBmkdkJbtRN26GsshSGkitGwNbJc4Lm65mXFTKJMbV9SPTJMBuJjz7VdxP",
  "key21": "3GKQ5DiGiXXaMbs7Ski2LKnHr7Ha7ZqXB1prjnqJWhggGpmfMxTpzuAoo4SG7pCT3yyakKMwNGshy7xDsKo18sRx",
  "key22": "5DUbNLP1mvyB6ivggyBMjCohcoN1mG8bFMy6Hemtb2nswP2QbethKBvMjiCKQQsGDkyiHiUDxZRRAw7KnP6uRABp",
  "key23": "5HLopJtQtYJYmTm2fYARp9NkKV6EPLqio5K1SX5ZYqBs2N67vjenZ8AVDJLA4nvmSREBjskCuLQBU5FV7UdqZHgu",
  "key24": "4sAECrQgR9K6UDfFBzD7fHW72NAsebTw6kZa36AruAkn3waYHoaJi2XSbWpxSxS97VxHfnUEXKa5hpGLcfShbrBZ",
  "key25": "5YTvwMeZ38XUBacG948eJ6pHpQk9MjmjjEnM7mUwvefJjdbvLr5yU7g4Q1ArtbgeTaSw3Jt4kSpWwXCH6q1F19PL",
  "key26": "Xb5cjCYeugQcEJEsXyT9TgDtoKhhoE6bzbNmEtokMLhfp851ZjpDVQEMXDMEkXM9ED9iXDqLX6wuRhFXHNGkbe5",
  "key27": "5zxmkrkeLudRcPbso8qvF6i1pGwUJH2epMmGPCKxVdp3GtMKYXPtaXY1jUcFzW5ajmN7YZZ9UuPmdMZYoHFrWvjJ",
  "key28": "2NfWDEe2angSVbxc7xq6TpPJzTBjSGddi2cHaFr3kUFoLYivVVLvX2JBXAkkzU7da7HSqdTFiVvpgkSiWFwU4qSX",
  "key29": "qfXN3sN27XkPhf9iXbwearmjr8FnxHW3kt1mbGbSRj8qQNewESCfLDDMyQTQGfdFFA5ETv2Sou1oEFQYejLErp2",
  "key30": "4obKs83wUtt9Nhg5VJdMpfpDFNFDMAq9GydQbvzsMi2Lix7bPYtbBSy8fyE5hEFdWWju3e36zmfDkBHEChWDXCb7",
  "key31": "3ZGnX4bbcHBVwAfkUN5FPqbHZPnGukjUp574npHgM2GuQQic66NGEDdCeL1zXucQkG31mQWBMhedi71p2NiDEvDs",
  "key32": "5ojqFDFdbeLuiNiuVj1ahDgUZp9vBN11PNLCJET1QP6RhDd11cxWSUDhwsyszdNTTAq3yXEfqqgjwNjcpqqBbJSj",
  "key33": "XcMwgADsRLqTwCMAGYpQaf3aumKnAdPo2fwBeK7Fa7FGe9V3UFytTbfQ7avKrKiEuGjU8bDbx8YAnJKoBqWpRrm",
  "key34": "5Fo77486qCNPR7BX5X2C1547iKeqLGae3vkYZPvukBcwCRmfAASmKUUcwqjv43UkvnLYx6WWaYJiF58dwcFsgahW",
  "key35": "39kRGJsKmNfbBnez7dLeVU8XLyzHTZWQ5zzLsSPQJrdBCgLZMqURTTdmeZ43c3oRfxx4taDBAj52oyjjzzD8CgUb"
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
