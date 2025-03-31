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
    "88pFSWacbwssgWN7reb6R87itVU65Z8t1JAYZVTtAmvkVntXQjMaSjfecR3VoPEEzK1m5vqt1mVFqUzP5x3EGPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vEiTi1VDHv5g2cDRTzcV3MbkxWUtSvMuCSoLnMXf29wu5QWRJ2UCbZD8tK6qVPX1jqbPcK1FLQH9TB4JJKJLX3o",
  "key1": "2uMTdZT3kmknZFL7nKNwWZRz3yeriz5PKSHS1rS4C48PjQmxvaTyY64BwuQpkE9ibHeLejbYnwotuSdKmtjokxCH",
  "key2": "V9Ux7YBRHnV3QXi5Mwv1ijDr7utUN8Li1svHRT2fpv1A3KgweCRGafadJrK85yeu7SRgiL6x4FeihaHxqRjpoRa",
  "key3": "3v8fArT724cpkZb2kh1zqYMAavArxCznCfhB4c9dbQu9ZVy9SnxSUQVC3m1WvgnZvYSg9Y3q6AkMgzUYgGLBMrgr",
  "key4": "YB86tpWNXNmcKBDQiWsEUDSuQe4koKkb4L57K5DcQuWNjreZWWV3wJ9mqCeT66pyed2zWHCYUurt25QrK2cRU8h",
  "key5": "32F4w949ZAdBat4TSe6kcFhFxuPXpG66bARseGZTFnmy8whrNnBxz1gR3kTPmnS9s8hP56bnLhTKk4hLsXxKLGVP",
  "key6": "Z2f7enFpEycCchYE9QTi49JdrLKzW53YZnAt94K3hUmGKh6tnSPxQ1X4oPLhLQzr7CAoqG3QNJwYtecPAu8wfq5",
  "key7": "5LwDHFHywsTwNeUojBeFPmD5oHf3ZECLD8swVDB1LiERzpn24Bp5mL5jA3TqbF9GoRcRq31X5nkQ1d8Nf9Yymjg",
  "key8": "3iVEZXbPzFD7PgwCLjyBCiNKNhaiC4rBufmcff2RM4EyNAMEcSCpbFF6xMVehF8qshn55UXrpuADUDusy6H9bhA4",
  "key9": "664pGmeo2TBXBPPp1JDSsJqyf4Nt9Lu8mFou3QU5anbaZa4stXtpTjN9B8y8Q8xsVTB4ypWWpDoCsdK52PWM5sSo",
  "key10": "2g9viC5JNAu6maxDML8t4u1Z7U7zpyPT7w8ugL1u9p3Pc9b9m6PtCcCq81xgryrV9KLAqevPbTsAuQB88ydtepM",
  "key11": "anz2GcWN7ktRth8nGeFNwxGvoAnYtQUMV5cZsaAdKEWtgXWH6QfFZmExcmqyHfN33TYzLRPFYqGCFdNFNLUXRxo",
  "key12": "NoVGreLbtgBYaSYeypDkBfvgyi9y6QZ98vBwT3uoLBPQptWJNuVdapM2AMLpjMxmvmszpqzqeBapRoE9kcLXwbb",
  "key13": "3FX78yqvJuNHtyJryGZcQrPXccH7HcikmBL2np2dmVnFm4eBLB8gzfYvXFbYMJT4Xg22Xs4conwpvrpEoof8amBD",
  "key14": "LtBF4KgDVjn1phpbH25P69BGs3eguz8wHTiWATK5GSuJN1V5mVCze5nxvid25JkBKWK7TWCy27iaXRZytzoPAb4",
  "key15": "21qsBnsvXSg5s1jCp53m72bGWnimfeb2x1JysCQ3NKqoEQB1JEU3vDWrn2hV3LWogTa9P2vvwPTtnMsYNWjShjGF",
  "key16": "4Mkz8UvJHktNE874YrLrhMzd7QJR8gJy3XoogcykHEzUw5f7joQakgJ9L7Beim647tqbduMvsPd3wJEd69rn2FN3",
  "key17": "4mExQXXiDaCvzJpFeS26PdaWSn7GAes2i2Z14y2oaZxbuquiahTAv4NxX6jMyjdGD1wnZxJ5Y8kLE3dTfGh4kz3E",
  "key18": "54WHqfhmzSTTWT5EJp5N4XJEW8FQZJR2oFjg9SZd5ekFYsP7Ggi9STdWp9wBQ9e7pkwYzZ32zBk9uJKBUknC6dX",
  "key19": "4AuRJWW1ub5aCrVk726fUZWmVL83HXJUcHCndbd6CEqDLR3nezy5GBHvSCAtgeVq9HNoLZUDpz4FgJeTzeh9F3JD",
  "key20": "3eoTjvUVmJoirBC18wdPWqAKW8eiTUKxyJvaCZpmuwWiY7aJESoFQ4zUTi2VNjvjEzvT9abHmU7RBpiDPcW8cZGt",
  "key21": "4yXvrEw75Nvchor7YkAGXtd2aDUMn9ypzaS4EVVyiYD6B1wcDDAc8gQVFuEg5KewwWjvQ3Boempsudz9bXkxJfZ6",
  "key22": "5t5dieCpHjYX9xww3LWBg2c2w84iTSvR3cAqCYdugqoaJX6YUjnVvRGy6aYVq9akH3UeVSB6APnWDzBtihbxTWRD",
  "key23": "cD6AXgKqXwejgicYfR3ZSHrZT8pG6nbuFTADfzbAoSkfexaVgv3EDpo1PCyQnSFWJrLqhHP6MwxvcMEh6qnG2bH",
  "key24": "vPpiDmjEZJ4bEwpMWuseE83PxMpW6Swq67Aas5N2HtcVHq44F4kHWhSoTtP4FvxoGSF1oJV5sbRMQzT1a7gQpeM",
  "key25": "22CpPMVePwVyTe3q4APzpXquimAW3P8bwRnM73wj8b3W5hqnqo8RbPjM6rjjsa9pSU1yUEtnimmpcuR8US72TxQN",
  "key26": "67KAqgzKt5HaoB8zHYmDPbE3zxcYRnKs9VVFhqurVnmZLUx3zhQMRSymNxURcL4nnNypEwjhy19Vhog9Y1t9wc8a",
  "key27": "3tY9SV27XHNZv8vEfKuf1Z8MjXKWpJdcjvLiQcX69JKBnAdfRtm2nWoLqPyNfPCaaGtRzf56nU18aQWK14VQ543P",
  "key28": "mD9QWqXsegt3PdJ7i7HAwhgCYwtJ8fyqeyhJJu78e1iJaXeN9yA1F8GC9NwwF8AZkcrzE6KUZJNR6JnUpazvCaX",
  "key29": "5VTN1qjni16gDkPdaQMevBWrkyw4vHHDKKAhbKJvakUSw4fvgFMzXNSZXxkfMo5yRmoQwZnu8LbDT5nN1VfKs2ZV",
  "key30": "59rKxjgJ2vatsDxPyoYru3FLKqK6trr7GKonVM5GcsZH3jSJU4FsJdckF8MtPsdfC2LqaVzRoGvCorZ9ShyZT28w",
  "key31": "28PSYz3esajpSs6WVvYhR1VANxs6XCfXA1LUMvMFGqxmTMe2SkQiUoKm8TJGXPN8sdizgMauQ9jjtmcAzkUHnF8C",
  "key32": "4wnxL1kSsTKTnQ5R3aTt19QyHvPN9Mh7xhjK7ZRypte45ZaAUmCdm2vqNR9i7iyistKqhqLngRS7bvwXfmeHeGZf",
  "key33": "2QukYhkzLTBbviViPp3FRDxczBQDrYX2m2ZSxsRwzxKZ1e1H59DmbMsEbMmhDLm6z2dNHS3VcZi6aQHszkqe2FQ4",
  "key34": "N5v2dnZ3M7xqM5r5JgrESYedvZZsQxN8WHpZzX4ZoSUMCDFY8VYY8kV3RsJPuvDFqDNWR7z2SZmYxhwWreVrWsy",
  "key35": "3L2HdZ2p6dXyDZzaUa179vzYTe5GBP4gKxnnEhdPP6EmEcJjqHLhg69MDAsv1wRLkjG8s21RHdCkNJuvHH93dDA6",
  "key36": "3nSPhoKVUwKWouqWmZHnvire5EKfyAYfxQYNZg1df3sxowuTxZmLifn6SmX6gtMZNi8PJpqJopnuj7kv73j9ZYyM",
  "key37": "4fixGB8freiTn85sCxsdftYGwQhxpAehHjoaeCFhZufZNGgkmpYT2Zu6ruYQWzmKebcDxgwpiW4ZscsqvLpFkVuW",
  "key38": "RNhJ2wn5uD1u6jwLvr8d8oEtJViZ63PoK3VXmvTXBamJ8biZeDptiY7hMX3GXEyBdKdtpuFzMnf88fKvFDeyWEi",
  "key39": "5D7xMjKQSSDsYn6q4f7hgAo2rDt3AkUfwFBB3enD47hprnqFsNhwmJ8D52NiHgpGpYtseDQztY7N8n7mz73XaKtJ"
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
