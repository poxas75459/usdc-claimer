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
    "5L51YiYmfU1nigXB94YQvVj2nVuZPMcMSkcDqJ4Q3hGnJNeNuNXBBhvKNvYQnqKrhauSYDJJRxDP5E9u74g79fxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CQ5YiMaKWtbWBisT6HWfS4Gj45t3Ree417EfhZthM1gUi6VERaQep5UPo6JwttAWzfEVHXp9dtZ87MKrBGUZBHW",
  "key1": "pYibcyVfqAXxfxQdSmXsmt6NSKtHmWDFouJMy6qSU41Yz4EmpT23gLBeNSEAireC3WZDbBvzS46fepWMEDE7R34",
  "key2": "3DzN4sP8h7tn7uWMemNPM2WntNaRwRTyg7zwJe6P9bsHBsoQh4SivdbvSZWqgxRSt6Lc4yXW2FMcajwp9U2skbPa",
  "key3": "4AkwZerSb6QvQj8FQEoJV6FHkqerQSnpzcjDeaGZWgsVorZdtkcTf73qGHfWXDGGCZdVdoFwf3HfSpEYB5rtNR9e",
  "key4": "3NnGeGFbwq3yJ43943ieXiVEoHD9pAiuynroanNeW4ph31QzQ63uotiKkveCJqfhmPMVd7EVcPn2p2yZFNqjS9Q3",
  "key5": "M7JKsc8o4SZeWvDsckkbz4FzxFiFmi1ZT1BHLWPFddKZnz2joZTmgSCNp4AUYGmyeexQb1uNL1uUKesg4vuXwwk",
  "key6": "5rJHEqNQgLZaXWpQdbXXAFKJT4Ja5vNFjRDMgCRrA1qBb4YwZnaFKXwjtQwHZY3QrtqKXf4qjhRoz1Lik4j7AdeF",
  "key7": "5j2Kgxh9TcVri9YtgXeN7s7Gskh5HxKRLt28VcxSAyzonHXPGTRMnc7wyfAqBaeCASWHNApLR1Gyf62Gph8Fv1wg",
  "key8": "4JPQeeBbYK2BsqiopD6mMLQUBLbzYVZDZLSdxWCnNLwNJUo4PeEzCwR1N6JZkU8mKr7nZyYqWY7CkWWstreCzvNW",
  "key9": "34zLDqWonsX2QXQqiKCMZmi3Z15XLSwtu4zY1h3fFcnSbJvYDi3bQrsg1Yafe7g3xLQxKV4zuA2RURdaNXb7GDXV",
  "key10": "VZKAy38RWybY1d3JX97u6GhK63kUiNZ274h8UqsThpjaxS5mybBj5HchdcbCpjkZq3fwUV3C1EV7KzXeTjmSA2P",
  "key11": "5UW5uXxRqL18PbZ3dU6pprA8FsSecwejWMcwPg7jnnTjmuty8ibG68NkD1zSKEajTqTcbSvNMxbQ7HxYwzVLH2B8",
  "key12": "4m6gJJXMpib8GgKZA6rxJ1fifax4PRp4q1FpPpDmhcY5YtM5sxhUWPg4MWPoYu3yrW5LMYq729fuVwtGvd3ZGTYM",
  "key13": "5bCAm6JRkDF7BwkBq64AB4M7y2H176Ev3U1Sob1F3aKDWqbSxmzZkN8NLzmL2BQrvo1WAqMxdLkt5RrGSEBf7vBG",
  "key14": "EvWXpaVUsyHm4rFWG4d8e5gPpvJx1jToCGEvnsG5p7kQhXGPAXK7aEyBW47cc6StBR7jqKR5QTaHYcXyk7hSTEh",
  "key15": "3XTCzYm4uEaH7cVAQqX4PQ6thLUQWdvUjACRRhgyDo77XEY5UuseiDSwrynQZApHPNMkwMFHN4D9XH1TWEkgLQXh",
  "key16": "3C7jCjaBsyWaX2RBUVXFkreVEJd34E8TSmKuKD7oj4nUYx5eCH41onPUaTVM3f2yatAWF6cS7AYCYnWxxP4FaTyj",
  "key17": "4fUBJnqfCtsqF2ypkP44smniw9hE673jTsVH8oXL6BDDgSSrbsf2xw7wSLmpeHPsRWgTh8bybEKkjCfXTrHGHq5z",
  "key18": "3AqFMnQaKPuEqzPhNXgqzGQFPyhKfWNEqJcD1eBJYddD9nR2wqXKK45cT3C8B4qgWgKHd8UanyE74AMxRxUnG14n",
  "key19": "tyCt1wogRexZu6AXhjirKEhVEReBdCz2oHLFyU6NV4w69i8UdkhLZTFPyAB7e3Cwi5rMBQnTbHq6tVr3WWX2ax1",
  "key20": "5DvuTk3wqbMCWZSmsr88ThCD1dNn9UsW36pmF8QqoWbwePPqHbSP2YQX2PMC49AVA62NCQ83Jz1oKe4LkvgUcUNd",
  "key21": "37XDUEWdHsM8b3NVuy3qNMvUrFu63HRx2q8gG9ooMVJp4wfRjL65Jafc615WucfhZyhVuwcFryQjWiYKk2Dyq7ti",
  "key22": "4Fq8svagLUiaxeuahqTUWBP6p2wBscLxNeYnoBRGx984Bcx2J7sVZk9DT53XXUTmcfhkjXS9NeoJqbbVsLzspreG",
  "key23": "2r5NRWbL5oD9YVZvmCD2WKCD25xeeEXeS6JdXNLo6sbhrYmbDsNr3WyRQsM7kUWvj9htqpiosxoNWesb7Mss1quZ",
  "key24": "4NKeAtZSRCJbEnya9yEhCnXc9rouUZTnYxhqjkKgK8iAHqyPTDWbRcbjtMhnXfJzDawstTjyBXAvvF1cqPWkHX6S",
  "key25": "4Qbep8vVDyAh6okfhvWkrntuSBcKxvZBcxd9MH7iGvvzQQcQor4P29MXeUrs4gBiKBUA5G7Xe9Jn472yyH3YNeJU",
  "key26": "2kweJzDhzsLniBP9G6tYNiZcCysBdZvtBBh9pjTpcDe8c1Dg5Y4FpZTjPv6ZTpD6H3GTF2AoFmhUrcbHX23J5Bgv",
  "key27": "BxSRH5cEWpwjX4B3htzwaSGVSN1rRcHR4tLUpaxUHnQJinveDN5Z36XRv7fs31zLD2k2FPtvKquL6A96ixtuE1p",
  "key28": "3fCTeoifrzpLB4LBaTjMWZcN86nRE6DHMV6dLi8gDVwbbz9F9Zbikh4vF3XrTK68eMTrCrfxMunXZiSFLphTmbbv",
  "key29": "4QMHx6qT84suqhH7GwM3vaFnFeDMKkM8AVnRtixjEi5AciwbPFP2WLSzVg6E3Bm3MjgCmXTZd2obSPPmYGXYZxyV",
  "key30": "5uV56yqW47MZ6MfXsKedptyW7KFyTm5eHtJnTP1CKmSjtEPAJz7EyudKotT9zTqLKNzxBEyKis24J6q1pucbxhPk",
  "key31": "5HusmKhHkqbiApbbhnhzaVuWXoYeArCQVVyGPZgm8Vfbw27eAPeKwwamnezXYuevXgKFzfTYzvkV5qctceW49NhZ",
  "key32": "5MYKhQgRNq4zt5PB8MN6WhdD53yjkTdcgSKVws7SeEEP9ppDKTKBzzAtxU1LjkyBtsUPsrFDB6i6TuSvEgMhGERA",
  "key33": "1YXkr6aTLpn5MN5dxAm8YKKXTJT33PZpvaUKhfxPyWqQ6Zx3k66aydPGWGi9kozqKsh41ac885NpwatQ7QH3EZU",
  "key34": "JZKEa9AYzR38opnb2SGKXvBJQ4297Nx5sbtrRXviE5QYx63MMCimuXPLpJSV6GueEX4FGhnVMDXyxfiqP4EzzZZ",
  "key35": "4c7FFa3noKNJKCfMrrVbWWASGcGrsgUrgQTRizVjx9acH4Wh7Xrz4WddHRLLDq7ZSWMwrWRrhdKXz1YVuUemN6zv",
  "key36": "598WKbazDNHLpSy7gpFBQpRQ126SV3oxohqMLMjixQenVo5yyn5pVgCb5iqbsBUmoQyByzqm1AfCzQ7A7DGohxom",
  "key37": "2JxoV6rJog6kTqbJYW9X3vx2UJFw9kvVjjaUEiZUvsp6PDtBLFhMiCu7HYVX91qg4cuKmQA193tio7PQUmnfBCpc",
  "key38": "5AASiWMcpFVowEFm4BkucdoUi7PMwXZG1cK5h7QCcB89uW4ZoVrtyRQXF8xMDmswYiWy1owy5vdjPN3Puctv8VM4",
  "key39": "GrA7gUdtZqf35Hi8JAcszkyr44Y5ddeRCbfUYi95bNqhSuvy94hXfb5njYEVAGfQBMNUhDNmhkSij2BizWbRuUn",
  "key40": "5skZ5ge2dbMXUAjVCZcbqDsoPDsNMX5VPMUGspHLg3Ti9v5FvUjjRpPXtVGgc2162cZ67wNuv3ajU4vEkTEqJcp1",
  "key41": "GgddE83D6ak8pGkSXKfABASSwNysbKU5XHRdyiLdyneHmsrX3rAPM3LTRBUyzagdrGynPqFVeKfos9rinzpTgFV",
  "key42": "3145vsATQtkvXhibnggC9PA2dNKwy8DMU2VCQBjxXMPd1T3cryqWyq9RLCuKMM17sBmwR8Ej7m7px3uPvWV45fTR"
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
