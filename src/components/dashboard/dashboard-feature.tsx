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
    "4DtHL8nNS31ga4XtBugSbhrcsvv3GveQG7CbZEDaNbv9gou6Bt2BVyLFv18BfPvDbDs2YgJLZ4HCK5m2eFKJVd15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CcKutdAt3kh7ZhpSu28GjTif5YKpRcTQqzw1GvZm6ZkdmpRp3LdTqX9dQovkZEyCRKD5Q654pRPovTVsGZ5uVo",
  "key1": "52NsDkHkafHUs9homAK5dRGYybF6WN8ppvUKdYDQpmUB1aS7wqZrKVpVPkPSuzgfA6dMRE4TPrRFNayWnx76zMmP",
  "key2": "2mXdxB5pmYLN9h3vRuH6dxKDVtgvM5bHqir7AhR8xEgrpCdSjKd5pfo8EzJP8c4WgNUM8y41bN54BpwcLaFJeBWR",
  "key3": "5pn3MxFhGC66RGbE8NwF9Xo1ouuLaVd3fUuV54b6KyWBCfd45PbL95UPTszPNXSF58PbiChKcmF6mu4wTnkA1vkb",
  "key4": "4oPkWh5cshhH1Y5ZCJC1AW5VmAXnwiXSmNrPurRugbzSVtcdhYdXYjSohXcUvYQay1hAgavv9JPLaucF165rBnyy",
  "key5": "2f98aqJXSoPkqRMU1bcQpui33CuFLmMFyowzgoJ6wGiEnauzS6jpcQeC3SGa7E28hMpW1yrMLXJcnVphejW9TurD",
  "key6": "kPfJL8YkuGxCuHkCTfNvQicNmmWQ2hFHpKRQFKiJqVzq4MfP5JEqBcSiVWPnqfsgyC3uHaXVmZfwRQz1cmm4B8g",
  "key7": "26q43zoacYKSaAZYxtyZWpWWeLnGk5W23rz3MskZL3xS2KgxZE5a1vVSWkeKWGmiBB9qhPcyvENfDUY873BF8afS",
  "key8": "YBJF9wj7zb8dWGtVt4WXWXKRXNK95f6DXkevWPRta8HMNv22WiMiCKzyZTBRfjHdczREo8jPVSwgt7iFjLvBTNf",
  "key9": "2MmnkJKqRcTXagbKCCtvfyhobWJvZUzByhvqTsJqu49bj4pvDraoEjD8kJ1HsDtkxyhd7sBikRxVt97ZLL9YPwYw",
  "key10": "5wr2WdWTWoq9uyP9RUpKRXPHgfR6iV6mkWxAcgqP5nytRsVRYWYMC1Z2fgMypTy7gbpRyw3MRHZPBHHeTSbAZoQJ",
  "key11": "2eyfU8r8jtALAtRUnNxfKrsXk2f8bowVDD53dPgezDvgaK51YBhYF3SVX7Qju6nvzAPEK5NMLnyX73YZ55Z7YgXA",
  "key12": "3fhCQzFzwSTKsQJkoRqybwFhAQjALAQbeV5V9LLnb2qpRgFiaS4HWRK5qNSTYpBX3Z3Y4q5YGcL2R4NgiJhsT4PT",
  "key13": "6PbPnDb61bs8PCGzzKdKgXMy2oBPt8wp8Q5vghpd7v5Vy19cro6qDFvVrKkZ6m66WHWgQY4CkwEYdRozZ87exa3",
  "key14": "4RsUMYQkH2gFpt9BP55cqXstMzwJwSVkWQoMPFQd6AT9obf7nWsFZ4HjLxs6sjBhoWgdpDFdDoH7gW4GxEHAMwTo",
  "key15": "3uPf7gd63juJNyt4C1HoZgReN8Dk2dga8oy7N7gZFgpg7TR5z9QDioGeypXA88MofdEqF9R5c5RsxMww2gDyctrv",
  "key16": "3bTE4iJU6zPqniq5fjv1Nhxj3kbVKhfP7X6WfRhrcabN2NSFWVzPJfsjkWxSHPHAoWZAj1d8PYsGMj5iJhKKaJp7",
  "key17": "3yCrn5dbr6pUyBi6wHLKDkHsSsXiS8UDMgB3M9tBN4bRwZPTHjp4Pb5U1fMHteArM6GSQBZJCusvKQW8fT5LoQoy",
  "key18": "3YV3sZ6pwcBsbZ6emtN67fhJPnRdeSsrVMQMkvxv32jPU8fr6mf66e5vzCr4oGjKTdcQfRgnBDNNNUoN8obPVqV2",
  "key19": "4FcbxsWwU5ay7gtr5LJsFDWY2tBeMwsUcPtSEoKbffVyJyYm1NKa5sDpHsUtVc8HTCjoWqekCLdu87zXa5vmVvuw",
  "key20": "3rLGvRcnEzobXH7H5LyTNppuTygu7WhWJF87LBUFmrR4CFwPzz7W28WV7edpsabY61F7VNmguwuceZsR5cm8pyn2",
  "key21": "59deHvrZVKdAPi6oGSSuyAJKBomqGM3wqDKsN6gqGiaKKLoeTD4Evvhu2FPFuMLaL49LjJXhBf2MuWYVp7VkfP5R",
  "key22": "thM3QgvUuhJAA3hZPQFVeKpiC5GVXMenE6hsdKSzUfa9fWuyzgLyTXW4F4c9krQ5u8WzfKPp149eheksYjBD3tJ",
  "key23": "Qjm6CLjiaVdhAQKJCdDfEKk9u3vYWiEjNmLnUE4z2jwQMrVjLdhvQuXFUBkWLugrQ9cU4QwoZtah8rG5u8YJjoy",
  "key24": "NkhjLUZjKYpF46JZt6uB27sP5zdFEDPc5grX132ozLJg1jPQK2ktxhraswkANsGsrTr2xXoZdsLjLgbdUTjrdTv",
  "key25": "3jQusH5gJp67vv4bZnZ5ZkEhqtHYd1CnmbY8rYeN6PGi4gPyRqNUpDubDxhsZxByPDKEm9RbRngtcEzTvfDdAM1Q",
  "key26": "5pE6AyGbKzXXmGEBkxviEq5noHb6qF62K1fwd5V1CKeEFq61SrpLoz33MRnZXhzDeqfQosze9WrggMTEyTBmtjy8",
  "key27": "4SBeFV6aV9KhjuLgbXoeVnof2aAdaDvX1PLT8aPHzTRMGEKaeU7P8R7Qg9XmAoBpFD1U9G5R5oD4HfNesNyuHYvp",
  "key28": "5tw6MTbkZrMqfRHrPsptnq8219vHk7vbA1Q5Rwzy1vrvNHKGhc1Y3Dg2ejVDouJLYsYjZZTpYY22EX71E7hG9kLh",
  "key29": "3Uwsr1jqz6ApowGZNMdffQphQenwwqzkFZDWyfD9kf1ZwNFzHhR4hgtyGZm2gNvmwYPhXgfmVgJL3q6XKo9oLJTj",
  "key30": "23xdLVDfVB9zqSL7keKHM88yaU1uaVft4dnHrmMdXomgM5LseGRDkazE8sUBofthg8FnSqZZpmQBvNRD9RFetC21",
  "key31": "EKkcor74Cvm56fkmQHFeow5uajiFLaEWyjq7fHD7L26fPNqJrapqcrPJZ2Trm6Eq4vkJnbLCmCh6RdTGSB7TkZV",
  "key32": "3tFbLFXEwgzaA7hVYNx6DF9mi5ULPzAGmYF9zUsGXbPSj57YhvnTkLAApjQda9RN9r5JC1fDnCLsLP9UweqNY5th",
  "key33": "3X4NhKbKXvu4HUB1V4NPkFAdFbY4vqJijeKwc61ZheAVMs5XPxaS1bEPaEoQS8TTbV2HxjGuXjV9yxvuf7sSSnHS",
  "key34": "5ujvVTWMTJvSkxUxuXdTzDuHkZpHxN4KFoGuhksFuv4ARZgrqA3Uu6xZUxYpA7bfgCQzHcPUgyheNt3Na448hZbg",
  "key35": "66amNEAeV2QVHSqGKs3wJhUJ8JkjD25uHBuY9DjQ8ZMbMifvfAcb4V4xt11g4MZt7pt8BbT4Z7XeFzS4pUTB5kZL",
  "key36": "5DsBsg3keD4USLH7iq8KaNcWVtaG9oWeKX2FpRgvavX2shpa6kTrMEcDTN66CLBHHrK4BhDvUk7TYHZVqL2MFDGq",
  "key37": "2S1QE2Qdg3LdFgxYpFycs4RbLdcLRSFjt792PMXTNzrXC9NrXjuMEfTq6uAdPMincrBGe8v9zJ7VuU2tePabQuty",
  "key38": "eWYiJnDUb6eXc78xwn5SqshorYKKyk5uKeEQ1JcuzLvj5tXnR5Qx4mGAu484DW1b6NVDKPAGzktc6K4UicFvx67",
  "key39": "65jMF1wqtAT6gDL1R5nRkALGMUKMqVBv6st3E9SJ4gEmnqtgztbewUZ5Kp9LMXLUzJqoGPgcmq5PMthWzcaz8FjM",
  "key40": "3diXPLe2NfiqKcbmJV8SRoHKV4wxuM57j8xuiXLQWVLzS963ToWsiHy4N8jF8DMFB7kgu8w5MtaaE34QVC9gzq2J",
  "key41": "2XJHTzJNHtnJcBHa5J8yYCAVejHuZnqLesRojgsPGm6APm1ocBQ5TdbnjNooQUikXQUp7kSGsBdrfR63N7Z5Zt51",
  "key42": "2PwyVhCykUkdBnnqAXASkAxDF2sNCXFoXijnF1LcsDwbNiRBEWgqav4eVztigkvP4hg3AZYA7fyNgP7VZcwHnSod",
  "key43": "3CGHCBnaAdBShFmAfFiUYZVKwCZq4Zp7fGsT7bwhaT5zCHmAjDopYhv88aVYaYzpTvR5rjsXZTPh4yy4ULrfph11",
  "key44": "3B8T823yWYFbbx5B73E9ZMV4q6pY4EgVJHFydNHorzAAR1B86pRvMZa37WpQU8VVeZu6yQtVciHM7oTJfg2Wc29w",
  "key45": "5Hem3utFhumVmvuy2eWHggXozBKB3wT1159YWAUvoCKGBZxAnMMdva38E9kfYGaGWHW7jMC8cTGieruQfkCJT2bw",
  "key46": "5nfpKdiQLgbR9SUszDUDfiM9knMtePch84GmjSuWuZNeGr4k96Xetosxjga3J2iLZTjqdqncZNmcftB5mZcqzDdv",
  "key47": "PiYpBmmDJDzBDUJWHvNJLAgHwCRHsyiDHNWUpnDQYddx2WyEjEWhaQCPVK4VuNeZKgpvyA8haAiQwJYvmJL42vH",
  "key48": "3qTzp3b6ohwMHLCEwopUvSMHXe654TXAePteQjLtH5JNwCcfet1fV8fbY9gspizy91FeJ7xqXsSTfn9JjM2DP4oK"
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
