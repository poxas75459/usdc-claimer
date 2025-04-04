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
    "62WWPWjuQda8cDEuU8zSic3EawKbxyUuh2cJp8tTkGDCnZ7s5wHNURsdffcuXKatU7z9Hg6b7q7fhTzadB4pty1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PGV4NXtdQMLx2P9DRqsUZQxWXzwTbmjqhoNNf2ZGc2yXw7fTaB9wwwCTWnD7HnXUJtJADFZfJAYK7wHpvZMSYYK",
  "key1": "4M6Yd1D86t56qMRxWgsoBC6FDc81NjF5zGTSK3A1LXkW5KkaXyG22bnxU5yzSxjKgySmdT5UvjXVamUohk4N5iqq",
  "key2": "3kb2PEJ2LYRX4R1DUgQbP3Ng9Yzh2w581YYK6HnKHHmiS96itg7wna3UAPAtaXFRLmy3KnTLcQ1aUHmAYqyV9bmJ",
  "key3": "gSanhdFQSjuoJs6e1eEnQ9uRR1pZFFxAFf23Mg3DkGzaEhhexMcRiPBAgZoM3z2uz1Ut736nqpscKsXoeS4Jd3H",
  "key4": "2BNJvr87L1eNLMNz7srykFzXpTuyF7o1qpttH8j17ZtEnccrhYTJEhbvjhRy65WFrQLCG1MyKd8yBaP69xckWHMe",
  "key5": "mRZNCTqKRM9MgY814k3mthtZJQbTRt6RCUd7hFFtU1PnuME9G1qHsDea9sX915sRoDapHCFpvVTDVc9Z35Ga41n",
  "key6": "ghKde3DzzhVa9WuNHQwoUvwxd7CdNBkzSEuf9dL1rbcZvzAboYWWwAWxAttWkHkdBJ1pvvYNcYGHWDB6rt1UVKT",
  "key7": "3grYDQA444iPiscskjgQ5U3ZYEj4YCdMTxmNkP246b6a13dfSqKKDRvZZw1ybELXDhffxGGivDATkWSHFFepPqYQ",
  "key8": "33m9iDJzvdQ2s6D7nxWDwfmCccLHSvH1TZU7cFj6f3UiXzQEbesQNy9mkVDJPU4GQfxYEZR6ui63GPLUhb3YtATd",
  "key9": "4JU68MyRa3XGrM75BfwPutnwwxYALSbnawwVK4NUWTCnUADvUTr8Qsn9ZjFjWe5LtnWhofjTZzcwnAm49D2Bs7p3",
  "key10": "2Ljq7mpFBLy5bbcqKkzVH9AoqmKWDBzANFjEvc3VAyhWJGrxDPRf3ryBub9NKSA4vtGvJeyUVBDmCg7uVRLCk85m",
  "key11": "5FfsuYZjMJogGyxc1ZaVtWWh13JJvcCD39bRSwHhBcsnGsn6N3GVgv283ybUp8zcwYzLFRdSg4Xk5oU1ouVz4qSv",
  "key12": "3xXN1coqriX3bT39wGDLw9YXerhyTKtTL6sATCDtTdvJUsFmgVMUu6ZVo2zpkns98k3eLqRWXCu3VuxrTMX6xDmv",
  "key13": "64fiWMgbAgaHJfXjzCJhGWt9NPvPh9nngmjrTNuWfjzZyZqyHBrqCTc3BbYeSNQDRfjTRDb9aqv8zviShYHxdP9s",
  "key14": "4ihA8bk9DbaubNRCQBCEhwQk8V4sReTYKeWsZtsRKGnxBfVpuBFtcx2Ttn8ZHXbEJe5ZDJUc8iEgq9ZoEg6kuM4z",
  "key15": "2o88yFtEU2GewFqv9xeJsdzaBtTnDtHMRdmiZbRSZny4Gog8RLhmd4E8s3a9nnVXZPPuXeMFiS7R1hGwgphtEZU1",
  "key16": "2ovzyn8oj16biP8MzTYtxThMvumnUrK5cEDanznZMpgwZGWAirh6Z6HL2vwgCnfFdn22N4YpU4CJXcXUxfvs1Wve",
  "key17": "49uPFrZKvWrAfGvZHBkNwhJyhEq5KyGuvNjY6NrnkUqZfuvLTLizNexVq65Dkw3NyPxSswhkm2qWqodtFRnQy6G7",
  "key18": "2mjWKMiTeuQqVgRov2nS2mZb2YpdfFqs9XBkYuoKRAuJYVonsr4YhLvRhky7npK6h2D1EL6vKx9YoRt3tGikRasp",
  "key19": "44E3DChCm8Bfw7zMRTzVPBhuudt2JkPwwcLRCgQnetvpyMpDtzYbegTTSt6FVjP6ydWVYQptsotnYBx7EwLCNAUJ",
  "key20": "3rXMD7DBwsEufRUnLfjcszc42NhrZeDPgmhfDcY7Gom966xKhdd8kQSSkTq99hVXRL5PzuJgcSqJVMZMpK5GYnxF",
  "key21": "5M979TXK75iuh1WVe5FsKYiGZZ7x3KMMYjfseTjTWZQr3VMVzRSE12QusRFkwheFcHThWKjf9mAskpQGdYosbjku",
  "key22": "53iv1HQ7dzg6AUWRhYuq1gtwp4FA1DG9epXppzR79WN1ydqDCQhRgjfX1S1yF4VHtSBMg1Jz6DM6UGrAD4N6T4TX",
  "key23": "4aP339vLCtfaHRNmMnRf6Kefyj3L9zzDLndeyPfmu5ncXBrARrLJyNNjXJifF9GAiDj8n3KdDALhmyyXwSfjYXWL",
  "key24": "2RQ6JR7zZC6BbwX98V1KMZ6CUSRRQWeDbJSa2qb1V4BdLmUrCecSYM1yifpaowo8qEi5HsSGYALHX5dB9HyDrD2r",
  "key25": "5TSy9tRX9pXKgjQ4enJxSCsN5wrhk5ZCFDy1zLZ5Wy56GfEHBDdDjxeuVbEyXigK759UPmqJ9fA1jeMdtBTwYJLY",
  "key26": "3cGN7dSEZbC99g9bwUu4Leuee5ydAQiEYfP75t5YcTw9c9mSPSrZhDSCEQoUVx6XqHrUKAajjgk3HJaUwZhPEuUw",
  "key27": "5MeBo12kLbX5BukonwhbrRJPinBUtpVsoexJpPtyjty9RDmR2tPBZs6yESGjwCVmgs8TvA4hewAVTPmpKV5yjD9V",
  "key28": "4SvghAU6p7S8ZtJubzChUsmnhRiPWDFq5W8av2GS5RyMJxs6ZWCiidoUKT1YsTgnKNS2xWNYbpGfgjGn345Ci6M2",
  "key29": "XvNcV6ZB6jJPw1YFZSwawVBScVBmZDkHzFBuGMvVLM8dTSncMEX44cdCoG8673rzsMCQ9HMjR4MApCKnhTsWz3X",
  "key30": "5XY14tGTgdmpvGNTLe7PS13HJs5m8GPmg3ZUHcHk78ZKkqHNmnHYqX1yCNnFTG3Y4aAFdN5HJgXek2Pnud6i6WYM",
  "key31": "4jCuC4Hb1R6F7nzKA1mSsgxxUaDPfMNYbwHA6MKXfd7of8k379HinYSETzjg73x7bAtNek3KfRUrcGR4hQA8mzMH",
  "key32": "3eWcG3hKUnJez3JLRnUvV77k735646GixS9WSYjyrCg8WbGjYHNLTNc5rRycYkjTsoJPgBKJoW5nyaZoNXZKysQE",
  "key33": "3NLWXG2HyaBa8eWdvVKDENrdj7ioPK346872YkhhmpoxBhRKJ9n2rb7MYJnWRzMiRfT99hhEM3eqtLoP1PozUst4",
  "key34": "2Ds4jCyUTwormTKzuobUpZkT19hUpk6MrbkhNFZAJSWWgjHAqXckJSJrBcj2wN8geNXyibGXeHCrdGM8K6i7Ufa7",
  "key35": "3JUA22EX7GD4tZv4RtFJ7SsUcejuLzH3UswVDHdhgPHEzEVF3fzEZ2zd3JtGY67sWscfWBVnhvQXX6V5L2FwAQZ9",
  "key36": "453TPJ9tzwzmtc8e1VHQ7PdWVn4sQ1cM824pyLPPZkopoqGsBYWVGcEdejnB7xPspkaJReUs8eLeQB2LLJebYAFV",
  "key37": "5mzz7b7UyE2cz9EuzyEqVzyKWGAqJV7xfyWxgGp5JWwVs37rNghkLzwcfDQnnAAZXzSPd4qm4y8PPKWDgsLNhiZB",
  "key38": "3rd262k1GTmT56Vrxx2SXKnx7VK89S7wUH18z8hhkyBrgnqsroTTC2XFFNSH3FAL2f2RsUh2ajJeRF8zMkpm5ccF",
  "key39": "2h23UCr2ofJpQk8oUSxhSdwfVoZgjWChPcokVAM9Jwe2cnHELgahMnNyo6i8THBcfP7p2rp7A1tBQXap2GakBSve",
  "key40": "wsypSUkYEVbcCwmMQ6QRKMFPmWZgVY4u42bjrwgaLHDfCiFJfdDgsH1YXkqZCd3NUNmxuX5cBLTeU6yQKtXHUuz",
  "key41": "2oqbMXveoRhd5FJkGZizQQPW3VBk1uNbRWU9Qjc666v2YfXYucDAJ2T84YXuaorrZqFRe4HPBgJhJh5ojuEHfEkp",
  "key42": "JEZRyHpfdSxJioGbRNcNgYCM5pBzBAC95ehAehPmbF9w5eGRKtWkCtWhus59GgdrMuSFeZWDVpqFMW1y5ZF4Zrx",
  "key43": "2UchrWgn4iiVy2GSeWxo2jJXMU8dxenbKXkgTRYgPfS4xQvQgjaQY3Lxh6Q8L4Y3ojgvVsFbzmyHut6EZ6YzkD3J",
  "key44": "3yaGfrNQNq7AZm7T6cSw5aDMY1B8rWaLQGVTZD3BMFcZT3ESvW4gQp8Wa9PpXjbVwxwKYEf7FqBL3sVkHGb3L4bW",
  "key45": "2NcbkLdQnziyczmJVcUifZ3rEbESLKmC3j3Txs2v8pFhjexE8BkKFXCzMfaLEURH91TeMCvoWfATjvYXeKsicAUN"
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
