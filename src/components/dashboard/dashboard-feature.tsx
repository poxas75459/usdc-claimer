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
    "3j6ptVWNtLsVUrd9GARPENY8pN1SiM8kLznQ8xh7bRqmiFCAmC4qSqcksHeGYkrz37uK5Z8goKwoTAmuyxhY4Qj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X732RUSetzgJTv4UPSRZugEhrFq9DGJKKgS9W5mTesDifMfffDEcX4Ayw6jt6NgFik87Gb1jPD4QG8pZd9iDAFg",
  "key1": "2Ko8445t6fgmNpfdrqVz2H6yWGQ3AL9wuAsUzjAkUsGRwGbww386X9qDYVE6vKSUgW2qrobjeLX1txJ9HqxkVgRe",
  "key2": "63isB6TquKcCp1Wyf4FuHL6gKpb8ZjiVyrFYZ8k67RnsicMxjCGcGUDpj5pr3n5vz3G8ZXk5nLUoBiQomdt8cNgq",
  "key3": "aFQikweL88RZi64XrFbHPJ5feKRk26b7RtdKdGk8aaR4pKPhLJ6zKk3U2p9HRmaUimjUtVpGz72pAAyf96TgjBN",
  "key4": "3WbMkGCi5Qn3t7A4swbj9z3rve16H1wmwR45NRUbB9Tme9uM6ksujjx9QPTTHc7u2pTNHXSCjopCxMLeevnibxxz",
  "key5": "4y7TbVzpufEVqaLKfp99XGTJ6TDa9QD7kgKEt6xpZ1As3QX17wHdUDnfMrxMQS3Z35mYadW6uvfRU96vNnJpHhpA",
  "key6": "4EVTatsJNUuG55tgHVE64rcmi5ntQtmQpo1WtPhRz42VFb6Nm3MQSdxYQrAKrXQqQxWQUXU7LjCjxLNgfA8rDCZJ",
  "key7": "KsXZxRa5iPSw8zhCdgHNSf7z7KfY3EMVa5E3EwUnXegq119ppLDWw7RAQHE8Ln4ArDsrwmh5pYgFagZfwfJEMsv",
  "key8": "5TQLHYgkyBnoyDP3g2sW3uZXJj5r4g6sNyH9ym5Ct2HnduNoC4hUsRijjgPmbP87Suu6E6kHahWJqFywV9pbRo63",
  "key9": "bpA34LUigWeMFBd3eiY2Sez8CCMz8AiASyQ4w9WAuSryHiQNpNd2C66LbrdiTo2iY8EhNFuxFJhj6gxA7BiFMWj",
  "key10": "bHqfLHv7DjAVMziPs7jcSsKgcfHRZjUswJLFQ3Pj2sd3XsapkwVLjLNoQ4tQk5SbC2Qd3LSickd84beVhRGHDYJ",
  "key11": "3EaR1EPek7dQpajFLto8TokoVrZk53oGPEpQqBZGHhk1HnZeSSs4JgAe9EYBwgcZyQ3NVAcchjZsWczamDHgUU5T",
  "key12": "3zJYba8nQZoqjDWpU9Bz2uJdcKHSVMPhQcuLjgTwceN8mw8CFNmodZoQYqQfFG4nkH3y6DsLaPKCcXpmy4PDUjR4",
  "key13": "124TaDVwtAq3ATHQxR47SFgGecb1p8e7Yaru9szYsPXCNQ83MVYCsEBuDufBuL9nYjPrLU8myJJh8Evdu45SXoSt",
  "key14": "544x2EWMh4EJtmL3C6tUuGLyx49wgbjoHuEbqrob5RzwQpqVkG1DUpqtUPNxAY7vx4ouEX2TBTkUxe66manrBdYB",
  "key15": "5WPWuDRqh1P1APWivJnoRCYkwoN1FpPL7ovLkDS8VYd4a32jNDxAubeuceZNBw5XFpCS3CysS4Y6JCWZPohezrZJ",
  "key16": "3NbmPrCL24U4BNt1MHG1VibbPMe3uaDKrcMMKHe2iCmfEBxFfod764SxmAtM8VsAEGhD7HpYezHWnmQSmvLNvDvz",
  "key17": "k6dmyym2wNPKp4eY1YmU4twQcw5ZqPR6JrXEAagLe51B6CDDY72Eg4Zum85TpZt32VUjpEiK8aiVj1SdR9mBCP7",
  "key18": "3BRFXAFa9wwhoqqd8p71ERneF25U5QNfW3bqftteWymSEQsJThuvs4sPbQHS2GN1pbWagAnGQxcQdM11gXqhTZpy",
  "key19": "BYuujLE79Cq1VCpTFuLKMCbwDBdd3pTQdMiEHqfWP8a2mJqBhrAvvjH5Dm8V3ACYBFu2VnWmqQpuL6jH2MbGDUU",
  "key20": "2pP8zNnEjKexG7S2Uu4UYUqKLozn8y3A5EJdUdZwBZ6zKbhZYeLtBBmnxngPEM2vGjjnW7toQ5ofZ7GGyf9JLZsD",
  "key21": "2J8cf1y5pNoRkY4xmpwvtEmNBYjvAVGQLnP29mnGJ1YzbgdtQVosVAvw7iYTgfmtx6uFrJx1n7Cjd3qpmzYQvUqq",
  "key22": "4vg6VKD6xyYss4gW4vFQoZ2oNuqS9UAuve9jwfqdWsmsa85euL7dU2Dcc9vEdM3mkGJjT4MZPxySgzd3rp1PVx96",
  "key23": "5smv6xDt3fy5zqE53KjwtAze2iwkzqnXdNDFfa6AW2WD6nHFzBE32PtHNSD5ffAippkMb2y3DwP4w9ZbwKgMUctg",
  "key24": "5vZG5PfwdU47q4KhmWU9zzTNEXchoBD8vRmjep71pDdtQzmfPsfsaxQsu2hHgcVGQ2HfL1FsEiNawYPV8B3Pg6pA",
  "key25": "3Qvhoj9YZ94uVJDN9TMUDAmytQryDozKZYkXa8R4GLkx8g4kVRQ13EQ5LX6gEvuSAxiRUVbsf52F6RxqqjwEXeqT",
  "key26": "8zQg7HE24TcyGZU3mrwCbJ2NGV8om3JMjebf5TXVeZKmfogCcP9aavhwvG19wfXueU4j4XWe4Jsp7tkhRzt3t8K",
  "key27": "DwX1qALZtrTQxD4RFNRg1iDFuX4mJ6pNDRDLhFFas4rX9DxKXghRaCxZBCydmsJPqwRQK8T67aPQYhP8MGuXB4x",
  "key28": "25fNHTvECy1U3vB9y4p8pgEmvjufNpKL584yJEXYvuKczazSA8J8we1ZAHB3a3XZniBC55K8GaBd5mKZqE3R8T69",
  "key29": "5pwnXGSN8iNKf7CaSFY48hD43G53oa8hH79M4vsjibwmhT8CT47hY3T1beML3ehFrk7yGQMZCfQzxr28GbPdwBv1",
  "key30": "3RpBqeFbSx4aGjGB8wNKsPDTAUV5dPfVb44jWQtS2yaE1V2r3BKzxhJUz6F6anh3XQbFAs4guvpLjwZcef2bLPhh",
  "key31": "5incKwB3ync3umMmetycoNt8AamQWckpZB7Rggp3bwtf9ovPMq5KCabH8dXWUPoUDcQRdU2vSr93KL9d62f5NBci",
  "key32": "iyBrhmottVaQ1YkBKhLXY88EsE49UEkWRqVMF57e2T8kpk28coz8YNmRjVRP9dUgGUFPrcJaBjiAPPCHATMVsSk",
  "key33": "2fksXu5aUKAayn5qUriGU3dTQddF9PC6bkptVb9G8xhLyPsutqk31TcRZjn7o7tW4hZ6yxzfj1wTAZwS9YHQhLTr",
  "key34": "3yBtCm2aTcCa8TUzrYZCf1nyHytxpfJkQubuiXpqYkBmgmp2ELwhezruSzciSLs6zK1BkPhxFJRCLR3YKKFt7yXL",
  "key35": "28BPqjFHLBMp5BESoMXcBDrbuh7HYMQ3N81q599ZgKEcA6mLVXeENtPHxqYUChJmXzdueUAdf3bo3wVhAdxVF2Nw",
  "key36": "5XRswHyF7ZZ6w1K4nrbU3UmfAJiQ4uAuG4sjZj4cWACH7cZWonPpKXHBNjJT8APewSJp9XwrWQvJxZ1ABhVcLLmN",
  "key37": "29Eubo5T9JWh1mwHPBPhKLf7zaGyw31wNLWPvTEfrDmxWZSKcdV9EHHFv2eVwYMGy3cTfPk5UtqsoDntD3LhNaFV",
  "key38": "guqLniiF7gWp6krWsuMaw6RiyyhrEccPTXpRhb6oL53L8ax7trRGdiN3iS1M4k7hsQbVMZf8cMDhwiDfxKKQUhh",
  "key39": "4KU4xYNQTxEsQxvEdwtUM8b9sZ1j6zx4wBxdt58mENWrFhLgjdasz8YrKXzSjeKgpsFusrqmn8APr6UR8uN6u9yY",
  "key40": "4jfT6A5L3y6FRU4cTLNHHv3pHP6eujssFUBvzs9R4mB4bWSFxt1Fcv8e2i4gG1VxvLaatSxMXiiiBJyqwtfvaiNi",
  "key41": "2bSihTLWfQbnsWcBEzFXcEei5UNEpbt6EmojF4TqrFq4c8KRvYcMNiHXrNTed92Z3UmSvzGf3Rqiwev4B5T49cUM",
  "key42": "4597Zo4ChwNwcHXFzVPjvMw6pBJokzjpkMNyjDKpfuG6xdtRjVjqXdAjYcjkFsSwaye5cUKzrB1QavgThkf1pgFc"
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
