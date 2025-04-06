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
    "m1XmaBcVuABZoa3prPsj8LKpdyuyZj9tNtjymVpRL5gVMrDxQggWiP3a7hf4i4B9qT83aRARZ5k9K1RtY83MZdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZnuBUKpqKgCG5A5nP5qUswUEWGhhaWCXSqXjzkpHVbB6aog1vW5JBmj6LZ6tnh21weuzut68joPKAx5pA1tztKc",
  "key1": "33REUMWsp7HZZScAr2SXiD3WiWabNVVHxdh1GNBeFcGXtzYA7HNPp2qV9himEZZJyMS1NkS2UDANv7NKJU11o5qv",
  "key2": "2jTKwcGDt3Y7sY1TbkDAtDZ48Q29pP4VjtdNjrJ7F3qPuKWFdYPo2YhV4VbxXjDjyWJzDPfUaCoqRRTFhPAgM1Tv",
  "key3": "4vbs81DKb89dUYcN7HsStnio6FdPCfGAPjC1fNY61NGifJu1GpGano2ymiAeTo28FK29aVa6moxVNiWMhdAgULoo",
  "key4": "XNY9v9KGiyK4GJ6tkcR3hBntvE6EiTF6KC5QDdKeCFWF9Ld97ycbLh4yiYgDwCod8D3kDRocNtgEmTXR5CDyqU4",
  "key5": "3tKSFPgFAkfBQ6UFQwXE8caoZ3rSz8Pmyq5HwEnAzmP4hQm8Rgam41pHrCoztPQ4X1SdqqbFkraAdgogrgjn4tsc",
  "key6": "3t9SPuyFEzs5Cg22U4vXJL97SsbihsZysafXimd7Qu7SAvtevbWQkJzSm2vJP2JVEq8QnrXUrcCvFsr2bTKA2q8X",
  "key7": "2owEtBNHruRLjTU1KaZFpgapa2DyL1AChqX9QCs5162LWd8SMfWGRiLim4rgAtHmXeU3gD8hUtDkWUdQxqA9MFW7",
  "key8": "4LGdVoZJAk9Ey1L2bZcn8yKoikNYs8VKY4Dgnj5ctr6zqRAGvQKz2DWEu5ZvJZqY6k2k1ytsJR5mtNm1k8SPECiZ",
  "key9": "2oVUvTwubDtQjnuVDqXahvHtp8tm1K4QLvLoLrkjSGLGD429vrdCdi81nA78d7NRx3dAZncpYN3Fb4BBLg2yhdvE",
  "key10": "3NqN5f641CEGoWUWhogkGuazgxjP1d2yWEcaDTMbTd1nt8CnaVYqLNbrbdcwmgkf86AamRfXM8NvVUwyKn5oP3vz",
  "key11": "5gnBp8YrQB7eYiAP5GBqXcVtTjbd26iqnsztFe8HyPinZPTRaFjYRHkDLAdamnZT9CtY1G53tCbSzhRg5x3zS1LL",
  "key12": "mKUZ9CbCcESVxiuuEU7PSSkn2axXzVk3YArnh9gYJ2MsGwye81zjmAiJHDowihrBrmgjeBgYwgnHC1gcRmy2KLf",
  "key13": "2KrEwvpjH2Mc4foCn2DbSGbkCRnfChaA8fQ77byTqMtXyGPbXYTJ59zsthUJBnicGxy4MfWcfWxyz9ZzwCURpNXU",
  "key14": "4aWuN6UKrido7fGg5FLusTBsEyf1qbK1m3mYuorjQLiWJUBmD2ZWdTwffyd1LSHGLNQvzPu5qYCB9AqdeRcf6MGA",
  "key15": "41GvbHyVjWdDcfhwSdmK3j1yq6Juqpq9Q5CVFEnhY6nLV6ueNMHisQuV1sPrEwob6Lp5csJG7Ezz9YvwDsuz1Xi4",
  "key16": "3jzy1EC7eij2uMjzuqVtkCQmfxug1K7Q2vZ4Xn4o8YNxCRsnoJMiDaJwBT5Lg91e1sVQWeEAHp3YPhUvWRtVyJY7",
  "key17": "3i5LnkZJtvvFhF2CzxK3JKxSfAiduihTfVTB4FfN6jgRKrYj19v7tn5YrPxMGhbTyKHMvegaJFjJJZkWQEtrmcSN",
  "key18": "5P6KqweseGG8zPEnMTxpZMZxshrRH4CjWw6HvMc7gQaSwJC2yMTAGBzH4TtEQ6yFcCyxUXzxpRdV5wenWLEXYq32",
  "key19": "4CxepujubBMDjGkMbBSjHsKBZpLBWKYtbGmXzxVBbcjQ4scjc8Rged4C6koKcdMNtZCo4jBrfkRi3smdFYTsZdDD",
  "key20": "4CHhpHv1xG258TR1CHKq82DLrzwU6DjYWnzHuLinziuWMevEiJbD9RQq8qURnQyqdbMJtc9EFtR82wrchGFa92YE",
  "key21": "8Mv4kMFm4JJznkfYAUCAywBjaZABkh9DRzPms3Yuw2yG18cDh9NDRGLVjJpQMwZumiMjnVPd94NPGnywBqWSTEP",
  "key22": "3VC5nTSMYjtxSYhFvZCBwFKjZTuSz69h5zbVjuMCGPtmepmactk2R6hynVo5vgzFKGSEouqpoii3v58c5JyiRAUr",
  "key23": "4R9cSB5KdUiqF7Qa6YmyQ8NCshTyBwShEAc5CZ3ybMQyYTjcMKiMp6mSuJitwapc1N83bjREosLxu4thb6Qr5EJD",
  "key24": "24tNJnkDZtL12AYCCfZUfEGLNNox6ShzGMhKRuqqgLgjMv5ZcB37ZQ6tTmq3qFXKUm2jaXLRWUiERQBR8zK8LvEK",
  "key25": "35v95GdAk9j8ztB6ixrFYijrRD8MK8c3iNqTeiVEysfr6C2Qj6ESZ9aHBefBrj6dXSu9AQrWNR4MueN9tuPVZPBX",
  "key26": "5bwD9LrKbderwWAWf8TGPLTC4zMH37V6tHfa4NPHW4K842RMtxsk6nuxbMxFJaufpJKkaR78k6nJJQ9ATfvGAVJH",
  "key27": "3FBRmTupYy9Nasa2HaPEwUFSs6fAxMmemVjFiucdpA1wkgt5zP73NzZoPWXyW3MVoENVZsVQvUJp3ppkKHkKzvUA",
  "key28": "5sD3xu6Srtezx3NAAac8Ve84YwDLXkBceaEPBXBGU735XyYACmYcRNLABW41WyoDxggWJhVw8y3UawqYB3yZGex1",
  "key29": "5WAHjcNWYp8SC7bunvYEiD42HQ2UKZAMUBKUMKq9PjAj8Jkm8dXqcxzcko54zhwVDdKxpRUdE2eMbhinTJ2hgB1o",
  "key30": "1mFu7SyaiWsfDSpTpTgagW4Xu2hPyN1BtVfTz4YoxsoHwqENGySVNpQVzjUspMUYyUUmE3UxhvaS635qqgrYqKu",
  "key31": "4wXiZJDqYqKZCxZ76jVJghXsrsW5fDkTxU2wUXCpEgJacoXRXWqoo6JEXKtFQb3MNoX5mTWB7k4YVi5SHcGsa9V6",
  "key32": "67DkFabSKbV6xUGecwYHV72AXAqd1z7gL85B8ws1wrkykdzsgd5iD5gymdtdkp4MPqnEwTMsUVo5EB9aejSTsXU2",
  "key33": "31HPg43qjJGySsmqeeZ9UfZ6oeVi9uMhJtFw673kMmxExMHo9fmRB1Suji3G6Zfv7YdyGokGnQkByy7aUeo3btfk",
  "key34": "2byGQN8heovKTdDX7v4CUQdRY4HYyn67XHm5T7mGDBtHaq6gwttRiyi19PmCpr1r379KsU7W3pmCSr9BtKnCbCn6",
  "key35": "D5HKXh6FyJ8W3JDJwNGSiPYBc1Zy2uddJPn42pszHmca9HYF3NjkMsMbbKq7fjU6cBorePBDjWubH1zhXMMT8YZ",
  "key36": "38dJMw2hJjvc134pRpsgHsVUKDSMnkN169Nxq9Wjp6dRGrRvpaMoRUiLC6mUadhdfWdFKXpAtVT9VYGJdsu39SsF",
  "key37": "2gxHufiYsBqLSXVBSpThgjhyjR3WSTAoPF198fNAwW33ByNHGuhM38rNCiXU7E4Xa1NFstrm1LoMwhPqgo5dXVzC",
  "key38": "2TBChoT2q78xdsjmrPCj6VpLNkaYZbH5ng7nntHEdhW6Pmo5FxBjgUAinizcjfx1vMpSorwXgKHhQy9eUW5eFGLg",
  "key39": "3Y67o1HFCDrsNPddPs5YfQvhsR6foV5CLRV3pmf3zVyVCB39Jy4kpUYPiZM4cfs8hDT7oD92x5hviMQgxtqcgZcZ"
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
