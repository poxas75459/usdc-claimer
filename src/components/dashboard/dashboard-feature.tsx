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
    "2jKJtyNnaH4gxobg8sqg3RrdR6ejum8oQht2Ewk632qQYxMy1gxRb8EmbpkPwvbL1gdq3C5injQ9TH4Ec6Ei1ePP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pjfKeF6NCU1pQDoDJuU88QmDGjNLyULRRGmcJxDxiaWu5QMgMy3Bfd2FNzKBDuvM2FWcp2gjACVKycBGvVd4hpW",
  "key1": "3TZphyTxKez6g1hoWy9DiUTvgf3cbYbj3z7MxXNmXvgeBhAnhJxh3cernLFweWYM9J1bxVSiQt8fedeaUFkmzVGk",
  "key2": "5WBtqNy1TuaFb4Qb6rPSKS6vWs2gDobu52i9q7iB6HmDuXc5ftyKuGzafXVtYkdimEqQisBytx75uw9xcCnnpBdb",
  "key3": "v1HZjewh34HtgH7fotCnP6HJKmz69Jy4b4pN8c4AAS97RLgQe37LjW5gMPzg9y99ACyPPySfppWtbKYou2FZxvv",
  "key4": "5gr6ff7AnSY8zTmAeTFXeWWtKvMoUqu4rnSMGtc86ME6W9cWfvcQc8cMtN3YtLUYXd5K9vBRoEEpVxBDZbU5LWXo",
  "key5": "pzVbE5uYALTPY2rzMBY8W8XMPBqXorfgwDV22gN5yA7BoCvMr3epzjPAnd13j6bpd5ncj3UHJYWAAzMgJwpdAQv",
  "key6": "3q6ZnQyGihVARiB91aS5ChmntyDQscAK6FQgSvYLAxfRNLZB33mMPQ44b3hyCU4RxwuMfBWGSsvqGXTmntMDgqQi",
  "key7": "2J2JkjCyMrRz586HiNDCcUJ6Sgkq8LE5sh7KeknQ9SotHTgt8K5SnCBa1NNZXD1DKb7hj3e4qzZczkBHHLdZBaQQ",
  "key8": "xmtUpVReg3aDk6tWgX2JW2BgTeq3jj3jL5esiNvmXQuZB8NsCuCPBYmC1CyqdQHHdPSyJuuupTPGQNjRXzxJWen",
  "key9": "3TdmUJ9Rcp61JzMXmmnXut2U83rZQxvGgeEDSjvVPTUDnWEgqaQwi3eejfcGuQym1P7FatqVdwypGCETNUahvKqo",
  "key10": "21FWMMwUZdbmiMRjDnaYUwjrsuC3qfDE8bYWKjqkgZ7qP5YeLjGo2vVopoJda39TNPuJi5f3iWbE4haegKXHKRaE",
  "key11": "4fJHvrsLN3xZpE4P4NRwf6WjhGKcFYG6PhkjMmjdVeRzR4SWBPrYn45NkHy4jfBPdKak1kXdFEMcrz25pju8Yer8",
  "key12": "KKHhB9ZYzpckxT1V4FQa6iwJ1eenta9Gk7Xqd5TbHkix6YdZSQcvExc6WWKV6R2V9mRf8xGqdt8T9P1yJKStjv8",
  "key13": "56CFmn1Zcg4LNeT64U2T3vkeeESLTeXaAR5j2tZXDpTmMSFQbgGVTt32QdMJD3UGWY5efmxqM1wXs2vCetbrq2yi",
  "key14": "Bei8QVeoNemGiHuXbS3JddKtgWr2TBiNKowvGy8VDP11J6SdMkBVDdhNLdhjuGuJUkX42G3W2QFXcvWDz7ZVBJ4",
  "key15": "64kdGA4GDXqdKazX6TuPigVzMX9oZiYFVQ39sTYmiR8a9TRWQJo4p4vojDkDx3funp93uCcDGy9dEKhkkB9cuf3j",
  "key16": "4esrKxNqh7yB3ciBvz9oxnHiRKCsybxWEnGb8zxmNp131EkaUunzFwQXkRQePY5q9JFTN2XMTWezSvAdZYXmA3w8",
  "key17": "tdHSAQ4zvTNwRrds4Fvh8GNfN9kYhkZLo9zyoVDAjjjid9MsTmDdfKy5Tf8SW67PQfgraPcsAr2TQMaXRUR15dH",
  "key18": "24T2mXMp7qEU4miSJHdh6noFUyWdDEFKnXXkXPYdos3T2ZUhf7zsHLN2QB9yfTXA2rit7i8W7RLYqPXokYLnC7s9",
  "key19": "3SRA3WpbMsSM3CZRRrbGNe8SF96nrxbfLjv5rNi6yMBVCFceFRCsJkcmSkcpWdeCSRLKxQhf6xQEBxgRwazoPD5s",
  "key20": "sKRA7L8RxkXDQ1EsjnsrC5z6koFaPDrkoExkwuhzdhMuPmnEEAqKNKcT2UkcELh2NwGRGThrPqm4VCGP5eEgvrr",
  "key21": "5P9j2Vq8hrNEN36jrY8h39EytcAMWXRHC9pGH35yiJefvy6tUDBVsnx7mKY5wyhxGEM41w6dkkf4suXTmze6eWkz",
  "key22": "TZoEyftNG7j8gLKJwSZ9qcJcS7ayC2RMYu7NtuQJopWfWay5eDDdHuZF8EvsMMuQUqEgfZvWFi2ZPJVJATatcEy",
  "key23": "2WV9rJnBgnHghmsZyHVBPwZPFrqrMsHkMkqwLXRxdRvhKC5obyPC3LZ7rWRVZZNNvAQqNNpJExZGvBNoYo4cgND8",
  "key24": "38zKk2mAzxyfZ2mBWwWxPtCaNyRvUdyjWXzBNWir7RUx4rMy5ufHZV7W8CXkqJD3Gf2WE1QVP6VdmHZRL9K8Nb1a",
  "key25": "LkkgPrndHGdaHnbpoVxix1mYWKrQMNtw6xU6JorSMEtqiWuxxXrWP3sg4Xf16EHF586HnvVVr1iQhau92bvRHTR",
  "key26": "3GDwidr2wR6JBt1wD9PiepW91nzdRXXn2zQJCX6WUnYr5sfsLgxhieSDQcb2mWZAqiZ7p6wo5QDRAuzAeVE7qD5m",
  "key27": "4TGCdwgCtWaks36g2t6d1MdbCVL7vnehXhCN5SaAL4bRd3gAVUzakCcCS9ekfxh7mLbD934a2zsZhJ376iNy1thB",
  "key28": "34V5aR3EqLcRyahGjXg48GBQsveNqBGKbATKG8LwdTw35xYYE8WQMXzsdKxzXFPrMhHrzaNod1SnRMdvJxTFPHFb",
  "key29": "3zZsf73KYPF9Pj9j4riRaEwsgfHkmcC19UvSzD5SsUBeBn5rEgFetuumfJbyxBy6rabjAxaJtrPewr7pPjCMQTNd",
  "key30": "4tqvruJ1rACZsWZUyaKXQCFZzTtEwPM85ZTynwwPRJx7SJDXB9ZzYGhR21vz3WpLFpyYebB76hc2RKFn46Zg4tCf",
  "key31": "2VLhWWjLxdHwDP612NPSiBwfdkckofkvNr4N6bsi3PhkVZfpUESyCYwcP5TqerkynpEYRVgSydmw2zp6oK76AAPN",
  "key32": "2xP3YWzp9SH1crrFN7qnL1ANKbe1BdZaUtVSVuAZmCWhApXhgnmokeAEoBgHJLHo3FQPSbJDfYGfGokZhDFnDskL",
  "key33": "3u7pVYKQa6oXYwcLn8JE1f5SN7JohtaC9ZbphHBjNRvcHrRd8JmnqnnxRrhhdgvpoRzPUZWBthqdR8ecz1sHASPb",
  "key34": "33NgzGaC44j6qHse6721DnN4wHRwYEBrH71Hf1S1gi7fEStgBXmLX9QSpZEm3JsiaEAwa2EvXT3sP8iWR6EV72ux",
  "key35": "5ei4xsHLogb2o15me1jYn8Djqj8hknkpryVY5yyzak1mfEn2ARE2nwrdbseEYVXm4JE4T5P4CBLnRmX4UFmXAwAU",
  "key36": "HVaHqMm4xrDGpLZ13LzWdpFaaa4Hmkraen4jCCadbXGLJifnNxs9dXz4WcvXriGX9gbBmd5tgffhR5kLXTNrgD5",
  "key37": "4AiajAJNbnM9nyoy3zQmd7FhPDZiFVuncFWwbDpzszdres87zgB22H9Dhneu5VcadyGoD3LLnQJ4qzETFuuwDbP3",
  "key38": "5bW6rSF74rokeV4EdkYP5RDzJeSntG6qXxe7oweCAwAA7nWUc9UQf5vYMvvQ2Ss4ySnGKboJX9y2KQt8DenyyWM5",
  "key39": "4eXz6Yn1daj3oK8czpxAFmzY21o3mWQMskhFEh1RcXqReU2BzNqAwLXkBRXDsDAYUsXTzEDqRiyy7P37B3PSaNT5",
  "key40": "5xjmCfL9frVW6AdfS9VitJoHZiAYiQ1DDB3KcCxk3aYPQQCG5E2WrdpKqQz1eG9w7vBu1VApzR1Rd2AaTvEjRmp7",
  "key41": "3zZxroR8cqzHM9RySWSrE6egxK3sLHJ3sVyxU3HzXeF4mSPcpW5en3UBrJRc18BzmJX7udMRvdRdfKL3qWwnqsnZ",
  "key42": "2MmJzyNymrgSLxZzh28muiDEpJdfpX75bZASZwdoXpeFocm9W6VtNFJdBn51qorYXofyhFbDZxPZ4LHPo7nP7ohU",
  "key43": "2sBgLN4Rt49CNgy1y47hYJkPYqcRs6G7hEWcxJ4x2Gmqus1qv95PCzsdx9c4beLSaQCr5w1FxmSrgmYDnU3igrd",
  "key44": "LbdThg6TEf2CiwX4kqVgNnUw336mZHGhEQhjiB97T6eTUfBhnymT3yEpXapBwRYpSCbVhafSP37432ZttNhUCvt"
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
