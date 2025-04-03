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
    "4ec7XmEE5e1G2Q4nu5U5pbFTmtVjbT8oHxL664pp2cPZnTCnMUYVthj1xZi6VyfPXZ1LEuUmkd4EFJMQM7Qa18wf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LirNcv8m9D2xudtYwQJELVnteBrVJG24YXd81Zzcs5SFzT4pBmiTNDpsufF8RjKwho819YfZNEkLu8K5JGEkPWK",
  "key1": "4ZBbueLsC3WPf8GHRLUZSvwpcSScnQVHmrXoJqmy3fX6JMRNQQvZ8wCa1veENftXKDGqApiYB11tsbRmxBMTAqiD",
  "key2": "2Kr1J9h7ZeZtnzbv37fUo1uqY4yywnyaS3e19dkdzCvDRZ4pmW2nWnLoYvZjweEfsBnAwhXdGaR1u4xVMt1qSYzz",
  "key3": "zY9PgYi5zqYY3LoHp5CT2Ch3Zd68McnTbL3Qr3qamURYdGax8r6xtukizskqjnJf7mCJZg9p8CQFQ1MHbBwrBUe",
  "key4": "335i4fMFzmpP8wmhSYZcibzJDZsZbnrRaZFmqwjLnH5wfc3Gi4CqUZcTPH3EnZaccYPSvd3LbchgCCpiGFeMZF71",
  "key5": "SpGPr2xM25rxYQPbR4AspvngDT7uUNMWJGRN5YQUgoMPpva42PyQmMA3jU3WYEBro3UZkoLYQn5795Zq6uETSj3",
  "key6": "5mgsXskVxCa1Njq9mk6v2uVMGCSyofdTbgFf77tg5P1dwjqWHMcy1zWzNTdTiCwErnWvMrYwXCmEVXLk5jDk53Lg",
  "key7": "55NcPsmSrkfQx5Wm4uSXJDqyTHA3Mh3JdGzRnLGxMQzdLv4PcYWY7d3Pv4PpgaJc1Q62EMDgbtEyPzgPE5zmer2J",
  "key8": "3JRgFwJ8dk52dfuA6tN5Tduxmns4WoTn2W39GyrY1JXZug9XTwB2N8SX44sEWTHNBR7jattGah6rVgQf2DR45dKt",
  "key9": "5srhMc89A7a1iaNS4Aoap9vmsbf4wTRT7ATLuAoV5Lk1oUQkyz63NWu6o5t4smzpi1BJ3SEGA6p62DueKaxqBB9g",
  "key10": "5umAcSDEiqdmtn7eDS7WMzAegSWrPtB96QHEAkYH3HWhGRdDhG871UeoFwuio3pZvvVDBvLgT4eesm5kXGuTxFbe",
  "key11": "5eioWT8KiLTqcjMBDQMu4p1F1iAY5ac6XkUWC1zw34mjk9z5m3VFNyYNQ1SXwKHMHKJyvMY57VurMPzCYwEeRQC6",
  "key12": "F5e5WhF6Hv7kk1PishTHnFkP6LctGNYgZmaYoXLEBKnDsqjbBQuFUgrqPZJ7GXLeqQYQX72aybeCofV5GDGZk1F",
  "key13": "65setHMdre3nySrRntiSgRGe1y3dZbgnJ8JBk3yUVNXykrkvkZ1Qj266E7MsfmiibSFN53YPBhfqnRpcJAHStCkt",
  "key14": "5sQz6j7guMNFFovE1JEAWLvaitpWGgjGHviKHxLDjDswMzUSS4vVPyF9po51CWdGWCjUimWmJiNTp6ezsJhmuPt7",
  "key15": "53d2HRuFNcETskfpD9iZS9EnTXAAuPFZr3P2UHyH5bVq6DLcd2dK24um5KSrvPVpkHoGihJGCBJwoiWtKr7bKGKy",
  "key16": "4655VtWsikWdReV494NNANux9PLeAPpbV5246Z3rbbtoUCYE6VABaDDK8iTmv1WWJ9pf3s13VNDavY9rSYcmgRK",
  "key17": "53R2tGmohoqTSkxegqoAQoti4CYwEx4XiG2JwbhvKRpfsQiUamYCeNv4HGZw1QGUTN6oE4jNxusDytxgmiAbtZSG",
  "key18": "YeWWob1GfKMTV9fPb4Q5k4MwH6vLA6qK6KgDKxDuKM5tthfJvnSa7F5Pwoq7LtKZudAWmxLKbKphgggQassX9gW",
  "key19": "2WfRggwVVdVwRPZeNwKgKUm7UUqXfonX6CkraTimC4eLmwjxa8j14HwbzgLPQfihaZPvDaf7wZPBCJUQwXFNZvex",
  "key20": "5851kPymt6ea72RBUDTEh74osjNoHAtpr1EVqx1XmaiyYEXEs3u7TLWeLHpRyrY62iposoT8VbjA6NSw9g94txfX",
  "key21": "36C6Yrg9us2DG21mbyem15R3MvGSRKyqQi9Lr3DetLmDPfk5LiVTFGQA3TFPHUWSwjhsD37zb7gK7Sg3goA89kpt",
  "key22": "Cxje1b4KbRS39m8PMbA3DQg3A2h6vYNXhb3PoaeAoo4uBm4pupht4seQXNgTCys4gGma7mNR2xfvSqSLvAKuRv5",
  "key23": "4tYWb3PxyJ3WFp5m1MueGfkaKA8kkSae8khUhUPvZdKFkWQhb1XxNjebkLzazHD2wQDHHULoLFQ3zkB6wjBwbZHH",
  "key24": "2zcPum6srHLxEKjt1Nf2dENudtrmgdTkTxmrThLQoczYq4j2ozBXFKVvxXbFXAPBPCc5gijf6cc7XyNpd6tWe9xr",
  "key25": "uc2Xy7R15Q2TkAteNdCRwq1P8dr9huaStDQN7XWWGGRDJc5CAAKfCSHkvX7w2pNtwiBwRE58XhVkBFaWT3XaPDQ",
  "key26": "2ciB7XvbK6FRrhZkPppvRohXL9yBMpMHEwAJ43Vi5BE2eMV1fRXNkv4BXSMt49v3JWfZpqnmYkVn7jXJHjsLWibb",
  "key27": "498UgNE2DBTwMBiAGDDrmhdTfQgFveC46ijBUSsJbGsAW5BWmLnjgGj7sMQx5jrgdhbB5KXGSokU2Ubf43syeb81",
  "key28": "45GEuUDiPrxNK6A2gtRYrZc3E5VBpdgPZdxXJMdX7f25AZSu8LawkBvo9hEnAEHgiW51MhwweVF7NiJfP498qR7J",
  "key29": "2mZPnKrUaZ5VzBnHCYmm2jDKVGAYHP3vkx4SQLkwRY9QxTQ38L1n2Ee3YWcMBieNMA5PsGeK2ueEakH1mnchVgAs",
  "key30": "2nxTyYBuaKtZzg5NbYB22BRGhtUh6SbEj32ftGFuYEq3fAtHd1tpWxjYX36EBzDgcjU3V9QbcM4qRFFhNrDUN4Zb",
  "key31": "ccdnknzeBGP6vdiK66fh5SAfEr7N7Vt9qqcMukWhBQDBTg8J5YRuZVgbLNmjkB4HWgCVky8sVRkrTwJsF9owAUq",
  "key32": "CVmMV67SybUdQLKvuwVsQJnBzbvnW9RAvANf8YGyKonqP6qe5mA6UKQTRv2YLefeqdPSPfXwrZbEVQJEbfRve8N",
  "key33": "3sDnzqTmaQThG5nf7SvpZMoyc2hyhdCkqnK2LZHFq9PVADQqh4a2KiBGv7EPPtXgZK3jX4NgCz8up55i1xnHRwE2",
  "key34": "2LMtkE1KGVgJARehanmgxGra7bNTuiBnw3fDkEJCnSQQaShVArUAnw8PCvas43DFzYJS3zZ6zieh8VxZqDmhwZdo",
  "key35": "E2q6gKS4xqNdx9kanZ6Fpd5FoTpvH3UfhKvqnRZunZprjBtx7WTk7EsCP3moUwgYXniuaoyN5B3skervVgfsC1f",
  "key36": "xnr4cr49jnaJkyQJAxCswmL7Mky1r8hZYtmedPZX9PDYfa5ivjaHAViLg6M5YSFnekoJWdEw9PjgFdEdDwZQcBt",
  "key37": "4eNNGmwAZijqKfCMJjoMkeoNqipTqEUnDxXiPxp9xbjmuuYuGcBzDaFzR8VKULZ7wFN9KhM9uQGMbH8PDjChSvqN",
  "key38": "SKYxPzZFtHvtxYWWLaPUYFdBMcGccK96HGD4tr8ikdeb1gC6pPQ8N4ACd9m5jbovcJeQEk4dop17HPSQ2WBAmGe",
  "key39": "8rYLaJP1TrpJYwbgaHzkW6ZhpfSmbRJYzcgugktLTVty5gkDuZFDgLQy1wkf9PindntkshHgXcPcP5Eoe8ZTb6w",
  "key40": "2jPjHYCX4h9FtsFrSohwFjoKC7LjpKu9uk3WubqmD5ZBsFpn8sgPdagDVG9vqRdNUdbmVbTvAA7jHASJoP1BZ6ZH",
  "key41": "62xUR5it3ZnCuKBCPxyeiXhdgQsJ6B4gpMXrN7XfNnHn6bqJSvsvMQKdgQkWUhfAvmVG7RzxRCmQZDGPXcmPk7qS",
  "key42": "26kJi2iiMzgxJua6uyFcEVcp6cXwkxkx1YcMPcyxedbtDUnWjefeogUnf7CeSVSSVD3NLYneNgjUdAey71YoC3Fh",
  "key43": "3Bu57cqbvR6NADcTh7eBU75Pcrmcbxu65Mfbrv3EfYRPns98LbGrB645nzPMQvF9pjG9UHCNMuPp7EhUebinDjqx",
  "key44": "5GXkvqBzEtJwzi8fZYYtRAdg66oboJcxH7N6FJy16is31pGs7FAHLFQdHDJyCeQebY4W35dACH63oC1ALryEdE11",
  "key45": "3Ptxw53p4h39JNAvUBRYYhqvLtk4nZaW5qyVYfVLTYhtWKh8EBQyjwL66oEXiDEzis78ssEBai7vncA3sk83kT6T",
  "key46": "3MXvLccfmKcLiTqMtwRj6EYJ2VUsEtyXNCn5GKxu1wAQ6L5qzB9Bk6jraDmZi3SkoGnnorSMrt9FeLJtA6gevNNN",
  "key47": "3rYzgX3fdJL1txg2nQfAvfJBjXTNf7LTwKBtdtQiCmciRtcFc7uAy6X8tTArUz24DRpXabyiDFAu67sLPG8fWAie",
  "key48": "58CUK5xxUDEck59CbsiPEVaemLWyQ5kGPujGsFsXYrvXZ5NmGKe6E6Upsfogh4aZaKWRAmcz2AbAe7UJmF6VYdEF"
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
