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
    "5Ncm6Vw1UskSfYkio3DLsiA6qdE7Z9jxCjNvcu3ZcCjE4LZ7JCwKpnT57xZbFgbYEQ8VQmYKMTbFDGoDpWFQa5Tj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WXh9sWC443B1JzR2MWdU927PzziM9BF3kQwf2JPfve6CNWcWDjdyBWmDYZNhAjg4pDGUtcAabdfzaQmjunDqCTh",
  "key1": "45GvwcNgwpjoK9RfV19xUkKmcBYWhmH9ZUpo2wJ93rT62P3GqmN2U2cfbJzELyX81u635fe68tu6SdGv9sgASNU2",
  "key2": "5kGCYBVWut5FH3M8DqvBNhRMSpKPeCF4Ym8j2zm7pchfMPUYEeVfpgHs5CRbiaEoKEppJxwhpgJepHgyKfTDf63P",
  "key3": "3VUfRRZ8G9EmFFoU4kYZLM3H3Uf8hnhgZjpLM7wgEi9QAG4X66jBqDNqWBUUhMo3XfJ15vEbQbrH6WoQM6qtm2Eh",
  "key4": "4hwdjtHMuShgusnhHBL2dfVz38PLtyK32TRvTkRSasevdJxtqu43m3CfXPytoZF5BFiPAfMe59QqMPVQ4UYJx7Bu",
  "key5": "2Wjr1DEnr5N4bLovg3vtVZmpA5SdDCQnFkMeAcBzq3QKAy1Db1xWLr2up2nQsRgN9NcYv2V86ZwjTkZSEkWYDnk9",
  "key6": "3DPJDan4w5Ydmsa72WGmjaMcbVuc4F81RRkAciZZfzfTH3NmS8mirudTSjL1aL1ZnD3fTSm8YHifsfZ9betBgyAy",
  "key7": "jVpneEWKbXEPnR3uABSqrqFczfMEDmNDoRMf8akwzpcbegoiWzxprC3DqBCgkDZ4LedY759UB5yzxoN24eDTy4v",
  "key8": "3yrxn6BdicPkWmfPRJFvBoy1tQ526PtPM1yBY3XcMYeFkMQg8oT45HEUV7ixjac58aKLRZ7JhWaHDdxDrsWYrYcS",
  "key9": "8svsAHMpjfYuydUeCUBHkwuUB9vHNhpgd9HdtNnrnrXzNZR25DXW3JwByGP7xFEqoaTdQzQEu2rK1iSjqfdu5XA",
  "key10": "3Pnq1HLsFTAQPTPQpytKpgCb3fN1TEFod72LN9pjCAzN2sqbqdfZ3yW5A4vKkTwtRX4PRB2jdw5CD5irDfxskBws",
  "key11": "2sAkrzxrf5rEQCVVKReUDET3XT1bYyAEYws9mj2c79F4VeL1rtiKo8gSh6BU6hfXJ1kVKsaaG49VfnWpxxqVKcsc",
  "key12": "3SunzPdDz1bQ3LXpak7DhFRyLG11R1zoxPsLP4H2BxGUdwvWu8mMJBib26XNEkDwhjRqX553YyQF3Ag9vkZfVhMz",
  "key13": "cnWxg8QrkiCJu1anKcyEPRwErM3SLorwXZnCVozfU2gnX6gSF9aGjXkE5zoPdu1teyiUJTCiH4gy4Wwx2KBWVH6",
  "key14": "rbZD6QuYcv25Jt4H8GLbwH9fP923sqbgKCpBZrKpHqjxcc2UrUwCrUPERxosuoAeSBK2FyyyTyd2KspnuP51Lty",
  "key15": "5x86GUjeS4ujPcwoxhDNvs1fbf5V46YmZHjGqQwLE21tHRwYF7cnDM5VeSkNEZafBydT4vDDBsgMv3CcVwb9HU9B",
  "key16": "5jVMYqPH5Utcp5UHN4FVTCgXqCHErvWZoMqNsAJtZkdBE2tmqt4SKJFVK6nVk3gJBojbVJbHw8Hzv7NeBAZV3Tuv",
  "key17": "ktVpePJgyV817rAWYVwvbSeoYcSPfSc7KP64tYFsLDGned8jSpGZY6mX3TkzUk34NLBHYiujFLZBZQDDS9xDAgc",
  "key18": "2Pr3XNChwnVjP4bh9Deny12XNPQEVE8fgH8hARNu6wAD87y9DyLgFpbtkZjpbv3iM1DpEgCUTvfwQ6onrNA7zkoM",
  "key19": "5NNN3prcP1Bzim2Pe1iZS2qYoFtaFC1dbYsbCMKEFLoxYDD5Dfojdd2aZybsihx1kfLDZpH3gmASTBDtQFQFFVkr",
  "key20": "4smbPNVa6217CejfPbZjEG6uyE7i56t7oPdVZ7Rke7SBqSxhqW54fSDc4gdRvhqLNLibGfZBnqRbiv1NrrQ43RUF",
  "key21": "3avg1PfAw4sj4vk91YAfQDPBsmtCNk1dUgtk2GuZDxrNo8Z4r7RT1ndLAoaJBmBgU88CBwqHwmDz9y9R5HCp78yk",
  "key22": "2LGy4KFFHvVaPCh7rL2f7hdF5fSxkdyghTgJXdhwC198nn5dbnBGskHa5jM42EEgRY9aky3okgMW2bjsjZgoRLCP",
  "key23": "36ZfVQ1E63PhdLFE4C9Ae9dnqCJLQWpG3ZM3Ct5PDWt1DrmR1x1uroZPXCFBQDbBJnDP5b3TVpnzjbL2xyVS2wvh",
  "key24": "2zNv1eUkT8bWuhUc5Y5epM4zbJR7kJXPA9Mx7gwm8V68g7z14VpzRVEtYGWvM8j1ygfWWEwMevtJPm79zhGZZHcY",
  "key25": "2rEFcGjbvtrbioKBsng22AVKEhj2VXyUfpTKuvn1YEFmsQ6atS3MJJbC8B7HtXYz3J2DftKpDm2JsrQGTBtMEVEZ",
  "key26": "44hcNN5nu7rB5Pgmy7UCoCf178zkAgY8cqXEN5gxDzaV2gcKZn3up6rYXd5QqNaVNvZ2XhY3ornLZUvDqFGp6BSW",
  "key27": "2yMpJVDVzrdhvJXiABkVU3CpTvDadmiDBnNMRvE2yiNmP7ouwhg8CcbTZG6AK8N1yx2xB5m1GLnPapndXrayDSLy",
  "key28": "YCeMuL9SafxuYB6ZLqwi2BxtGE8DRLt6vHezv9sbqewc6ptQdQeNT2hieJPKXD5iMuwd5TuhQHqirwWLdv4NnZv",
  "key29": "3JBLiCiqLQyEuYNhZqiUB4XHCAAz5MXDwAeMEwomMp9VAXNqs9w2dSv89sypntCTUFXwtfJSfmX5dESxJHCrn7ZF",
  "key30": "4bQcuNyARJwSuuKZKEUhiG9c1kQaojP82ErbDGBnbtUjMxq93GZgS1mrTiJaQ6Wnrg8pg2ckVnh8C1Fp4KUfa5bw",
  "key31": "3e41HhGGD6JsXqXTib3AnqmyY1hMf2bv3yJBs4RF432PyqVSW6i4RyV9j5ocHJGwc4xTWFrpVYivtpb96aWk1VPq",
  "key32": "4o3a4y3c9EDaMXBCy5RKAhsiCRVSjoKyW1rWpN2K5wmAp7i9YeTD7i7TvDFKs4ey57M6CLWc463QgqZdVYFLDeLw",
  "key33": "3a46qqhyh9ZnndYpDJxYkvQJFGQCVj27HkESk2ocF4CJx7DimaEQF11R5cn2aKrCVN2Bbf1BEm6ksXNLfR2Kshta",
  "key34": "2dyg1h6pN43nJkYfCByoMfTYVX35Xtkx3Bh3XSeh8aA6VUJvhaRSVEpyg4hXCzWikDaSgNzp8YnkJZXDawPBXXNj",
  "key35": "2wMM5vBQCprsg8iyMGQe9f3vbQhYM2Vi41zqLVoVR764p42oYPUdrHqEWE8WcwY3wmfT7tArMe8e12qxv6kokCFQ",
  "key36": "5hRzcvsuC8NrWxVH3kzH6chd2FR4EACiQrPigSuHybXGipxFWXLqwixJLV3H5NBfsDggoSq6SfwQYpqLftsHodAm",
  "key37": "udtnfgsquNEbak4WoDwWA66fPArLpYhtKXwnsUUGdQ1ePVmTdF46ojJcjuobqTJKzU3Q8fVwwBga5FG2TRtsK4y",
  "key38": "2j9VmrJDywfwdkyD3ZJaoZEfdZeY9uTyVGTtYqXtNb7DPeXRFbievLoWJeufmdpqxPSEqgbPagJYMrg89PDWe9Vu",
  "key39": "daKCooj12EWiUr8DX5rz4vzkY5AaCFdARHApMdTgTEa6WfQmjyAHMvCrF28rwBRRSwFTpbX78xJsmPFQt7xGMkR",
  "key40": "5cRTVDmY6mEoJWJZcmF6iRzFrrGRTFcdQRftmH5xneyp6Re5tV5ZfWhLDrpstVHz9DUmwtzMzUdjbd72GdELziMn",
  "key41": "2jQrzQTsuZDy7msbsASm2XrPwMUVJ8zfBaG6WgtQpk8VtyJdctk9KgJxCbBcqFiGSCLwtZhMiUAhN7mgmriVSZr9",
  "key42": "3XyhrbEuqkhiksotmCy6BDuBsYUj62s6F3jKr395Guc1Q5Hv9MCPQMsuyRZeeJM73CZEu5mbo8a3MGHsbi9ywVf2"
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
