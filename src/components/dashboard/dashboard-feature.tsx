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
    "4qtCKLieiSmYq6Ek5Mm46k35AAHBnhFygKYGwNaPQMwk6pB6gf8Fs3PbC6xJHCcxArkDEdTB6UHAk7Tsdu915NRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u6uiTyyTF9fWDujG3aQ1VD6ws2o2TaY5VV8tJGPWhkAnTk3UvTeUAmP4eo3U87mJzSPWQW6C1DXnCF4qMD6vE89",
  "key1": "24byjqKhaRZAVjxsmTiDvusDGdo5euaEaEFurhSZhHeGnuvMgwwhyKngGtzRfZXmeMPAFr5iNJHRP9JtAbTx1TQ8",
  "key2": "662SmHAETBgSfhVhZ7A2vn5p1ihjikSDh6ypa73QMEgbPq9QS3vt8uTBKbAptMkzDS2WrC65R67vSrMCDKhttjy6",
  "key3": "5qGwGYStEso72B84QnusSoPY8e5LRrx2LpkuUvcB9nV7TgdggBC1q9y86FU7m22X7ydsHGUsiKMDD3rNNiLhbnbV",
  "key4": "okCim3ZroX2ydWtthMbt8eEyDLTM1g214ytBnLir6fc1RuYrC3EP8xqAtFvKf87vz8FHtpUwTYLCzHuNuDqf9Sd",
  "key5": "5PpGtzRCD7juvtV7PgRcqAhtNTid5zeA4AS9VKDPEwhHCZ32kKT2WcsXGSpaowr2ZcPdkJNGHDykYQaRaDWUozV9",
  "key6": "5G4ML7f5kQwDf9z6jn5sLsHtsBAfBZCezEAYiDubfaiPZVCGE5uXuVmD4psTZfnLTRvKxvfp2ksrCc77jfDyTYpk",
  "key7": "PD1CUrz3Vx56NbaGDrv6iz3X2nsqaJzPLRxmzsQmqPfSKq5tQ3i9eUjaefhnyEGjMXa1frDHf66LbJNS9XdTfaa",
  "key8": "2X411DmW1gXR2f8iqgvaNMHuXT9geZbqsSAZSjoMRYLUsn2fbN2i5qKEWayKziomnm4e4eueRWd5QDK78Z2jeQQ5",
  "key9": "49nif1yvUFy4X6453fxjxNJWjo1odAGTREfCzheHm4KGYax2UUo7MJYcWQQHrLr7Kn1YpWy9YZwPmom7QGfAEVmM",
  "key10": "63wUtJMqTiujmBT1mNnKc2JxUszb9iUU5VGTr5JYX2LdQSKRqjr5M7a6fcV1eAoom7DPFjkW9GMiogNA1Ydv1SbL",
  "key11": "2PHLhaKYP2k2PFqGXLYCZWH4UQmBc8bypTMPudgMgRYwEo54TdtGzJBwwoCMTvQTGuR2faUddxxcuL4FHAdcYtZC",
  "key12": "5dHebvqjVeyFpnbYXcbcZr17JibCN47t1dmihMAY3uPsa8hVXrtMV9vJTsmZLt3DAnUqxiaCwiZnAHv7ovNDwVNn",
  "key13": "51yds7UHFfLmuTNfrFhHyYsGw7noUAQgEWZgVQs8y29R8FvhHSW2ETnn3un99WNeSXVeJwkYiANukhQf7Vy5QewA",
  "key14": "5gLqfHFSQa9wXdCfG4uiTwTRUEBq5gY8Q7HhnRtgXvoaD6CuREPMQaDYFBexYnrzJ2xu9W7RWTroa8GCCuS86MX6",
  "key15": "5xsBqXgR1SkkpZGfcMebuXENMpmfyinHQzF2accsh9VzURgwtbhpmwq5yW1gpBY9jHU5yWree4PQasiwrwy6znzR",
  "key16": "ea42736hzdoCvUrWc9HXb3NKaf4nEAokxPtmNwdyJ453HnW1DmhayeybChguV4H55BtYEyCPVmS42sgHmJutgrf",
  "key17": "2E2uYuVpdb9vEeeohziGfjZWNpAK4GqLF8Mt9oJs8ejgxAjrX8BqTqL1jwdzQN6EerbzvJDHc7NirouHxKKPdJMU",
  "key18": "3w3xzzxLUBJPc56irKaGKvwaurrFv2XTw2sfwXSsojxQ2BN7Ruuh2hVKXVaMnzzNJtBcwRrhmXpU77VhMvuKZzRA",
  "key19": "2Fty3Fekwf2gdMXpUc2oqwLfKQv5rpgEVJVpZ4YTw8XhS7sDfdccqNUgk4wRv1CmXvR9JZv6E62qkkEXvKnfse6k",
  "key20": "rPmeoCw2ppy6icqGg3j2BMSVcGoh79qVWkbrhCbX5Bh1yzS4PyYzPqVQvcKYZxvCGii4rAJaKZynLsh4VSJhqZs",
  "key21": "vBGgxVccEg6UjpK364tqTSL43szzQB6kEHsWiSAWo7XRQ5L5dqCzzcWKjXX7Ns62degiNQkPEWw4YgTznyb5bzA",
  "key22": "JgFaMJsuZ9XUk3WKveqEWxvuLAtwuyJPS1is3KrcDkisbrHLBZzESib4VRpW4GZUgMu3X5pf5dzj6qqvWquWnkj",
  "key23": "3UWykeoBVtwZ4xnkTkcsMMXmocjmVHkSc7HrtNBPJ9XqPkVoVfgrnjmt2SectoZt81vbowqw5M9NcprAdKvrcJoK",
  "key24": "5USXBAWfrK9My2HhRzENtU4ajFEdhBRS55rv7NvuQkfgMNJepvQafFF562ZEzrxHA4jZ8xefMd2puZu6QSqYkJTZ",
  "key25": "391sqiUhcDwg8nQ4KxH3xxo2ayUVaZRTNodtyLXkzrA8YoUHQCVazLaPxQ2RH6yxHmC7rcQTppxEr63VwnSVm94i",
  "key26": "3X3DKNbgAuVdjQ4DcNmgh4gkc2j5YZaE1GPZWU4Jq7b7vF3eT111i6A3KadSZcaY5jcQpKGyTfPX5zgUfxLthZdh",
  "key27": "5taLiFnvk8uH3bjTU7uDEJtGfDpDorrCX6TdVZwJhJVXofFQYBE4ispGMNctp7nuCKxFXVE7MjDuDixGbtKrYtCc",
  "key28": "2gvMsz16aTi312umM117rAbJ16yi5WCKRyzcvoguFCrc3cm44dHeXuetJS78zFWCq99VEvmNYyNVz43usR2KQjet",
  "key29": "4NTBtkX5Nu1mASJr1fUTKXLVbgJP3Ji1B3jW2cz8iZn8joTK1oCfeSKma3miHMCiXdVgDWG55BZL8Aj35PdQsnym",
  "key30": "4QC7oMVsTLXAzeJNd8sbA41uvzz6H8xeCtXXid3ZCQjoLwqrABPPNZArAjjHQoqCKFf2ai9VxxDupd1X55kCYFNK",
  "key31": "5fwGEEGBJm7yqSWasuBUnBWTJbgYNWmxq88qMiDoLRp5EGhweoxKfeqQFBs8iqYvN8DiPgdPmYqgTdeQp1f64rQ3",
  "key32": "pk9q1ANjdDyDZp93RthdD1sfdt3gYdumazrPmTePQHRFzxw5DyX4ru2qxZ1sxg3C9VwdTHbHNCb6SpVZwrdVuMQ",
  "key33": "yzsXpA3hpwGh52L35zxZbChrRFUn7AmPKmggaxQWgNkyx9FKbc85tn2FxhPPEE6zr8tbPGVKTiBny8VaiEDiPYo",
  "key34": "cCwwAjmwVgJjEnFCdzSgLsQ51R3iBEaFqj6h6q1reF2TEZkf9gxm7e6kU3tUb7SHvr1hDWzA24pFn6KK5QSchtH",
  "key35": "2v8YRf6XbhJP2J9vPf8Rue5M94HMFduy5nAjzWcwXL8Huv2evSnfoMNcPpfk18S9dBrwTXxXKeHNCR56hbiX5RPT",
  "key36": "2CAhzm8vN1E9NgwzHFCG37hd6xFACFBeqa5zeTc3i2beYtZD8FtL3zZ299vXnio1iUfUDgrLnTvp1td2mRJySNMj",
  "key37": "3x6ks8TxWWNWWURtPwQUjwy7uiL9w9X9566QDVbDFscv5xXiAck5V9qBE2HyZhu346f4ABxVykRYkG4Q2XtnoN68",
  "key38": "2i2jLJpyy4KQQsrfuCq2g7fkQYWy88UthtHjgu1dVB7PZdu5skFBw2JLF5prA4Uu1E3CvupZbYpwpQMDQHLYNNrG",
  "key39": "5LuaRNDQojPPiRLjXWdEtM5KNXSyHPFuj5G5Ff33QZnVE9k3fvLcXaAqsnL67AbmvqD1fFGcwCyqgSYEG7b2R1DC",
  "key40": "2hHPpvC5nkcj7pPqt3XtfLxNDGj2qubzx5yfPdryXkRqPZrbmstP1owt9VE3rxtxGRJWCRyAnDeFoBxTPztJfRYU",
  "key41": "2czpPqJS7THEaaehbCipMTFNsCnLzvPfzmbN3KsPXeN1fGwQ9AcF23A5QfDXsd8AnLZCnuTHKuXR5YgG3vLKLgRt",
  "key42": "3Zsb8Qo34Ss74yrka5ZX6wbM8DHr5ucCFHA1zS8P2v1YWJ7VmGkpE5vxBsbydHE9V2rryNwcUVeJxJMxjphMb5uC",
  "key43": "3nVjLEbcJcT9FVw1YcJyYuCcn7MxkYEdBpa1tq9Lxp71D81znfqz3ttrCUDcwigQBV11DwsPyd8kEyvzn4e4KCbq",
  "key44": "3fkA5m2KcgwgcCZPvqKTgBtduBmCUbErSv559FypYj82UksKF94zkHxXWhxLh2WyCT4Nw2AtLKEUHYhVWs7kvpMU",
  "key45": "2gS1KJqbU44xaBNGAKd5fAQgLNzcSZk7pAs2ixvq7Wkuq42QPyM9n9iwLW8TebmBZbs9yj9Se4svotN42W4na6y7",
  "key46": "4Wu31y9PXsdAiqkcT9sSMjArQ2NjyCkXVf8ViE2CouogEiAN8FD3pixSPnvnKFMgbf7Z8eSrq26mreTA3PJ12sEf"
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
