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
    "5Y3optVH9oTrT62adovesGUxAnJWYsLhPzHofYDdKGCGovHooEaQPuEfxGeMTVCwWWXcsAzntfHqPf5cAWbr3tmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vhsGbDaxcAZxJLJHnjsYHs4m2J65MdAK4xSH9fdFLCZ1i6MDDYMJu7sh52zBDN2t4eKV76hRKFbCcYqprfkKCXT",
  "key1": "63LMDhonuXe4eDrhwrnuW3sn4wiGMB6zuueWyR9eJJ47Ghwv8LUz9oNR5cvcgYqyCPPQ4kbUKzaUd2uBxdNiAFLL",
  "key2": "GVpEoz8kmawyDyFRtjyB22VwmAtmjcHQHq5UhGhrZzUaB9kim2qTi1tDdvNCjWhWV2bpTJMwLviqoYue6NoCnKC",
  "key3": "55Tvk5G2waLzwupVrQbCaXDDEU1jGs7pQTJcLnpshSZjhA31MXchQa92w7g23tm4vj3FrBot93HNkBLCyT8QADbk",
  "key4": "xTtyoDknynG5Z7RfeBmnvAiCQtsjxt82Wbur2s4XpevkF6uMYwAz5vWKUKyQL2ygrP7zWKJPxt313tEKvvaZoAZ",
  "key5": "4AUtvGDMpBCro5NxYRVapGLPT2Y41YAamjQiRZfpujuwM8yYoZCVw53kRbyUBGRssg3xzRzofCBviPPzhEmSmBgL",
  "key6": "4D7h7U248kgueUwSnkd6NwB5wkbMPXscpbRAuz56jhN6exKYUH3shpDeqm3sgtWZFCBnQzWgcuRZ9xqMfPqTxtN9",
  "key7": "39VaJWTPHnqaNGvKKsboLTbR4vyNJmQtjLVSyeUcyfHriouPTzWtqMbazbKcVzSCP2HM5MakWZfxWu8WqLnzZSV5",
  "key8": "ggJuqkix8sxwRQxpDnFV1FCC1J5RxcDfHj88YmRwwevggNmZRo8MTavxAjdMtkuQuGVmfEQLpgUh7yPy2xdvsXk",
  "key9": "4bFrXiuCNPH4MxNQUUtAs7WtiVMPyvYo53xrFTesuBbZD3zYDQVQDywukifFfisdti9gEpegDGDJuapekQuNKsSe",
  "key10": "46UBvUSUGe1uv73s9wrY7HPLWuR2MRvg4Ap1vhWSTvkJef5y32zgNW821giNBzj57eZVdGpnvxnJjtQe1GgwsfwN",
  "key11": "2N5gDkYZmpGbSw1x2qxq3ri8kXKpmX1Udpu8HTh5SUjciPzGZTM2uXreYY1hm56BHBf29zwbAtNKvXvqzmkxsqWe",
  "key12": "35eSjFQkqkWWGncw6K1S1CnEZjNJfeFK5JscauqcBu8LmnoyYfjc7rC17qqFJNLtrdL6gXHbYq72LBAP5MhoQLV6",
  "key13": "52GGSZ7CAqgTC8FqEWVou3mdTP517hVFjAfcDm9YukBpeubYxogDRpny9dQJJKQ9K1HACuDgPX6PfHMaFDqyzFon",
  "key14": "2Nz3psmADk1saBViVFNhzYfJUw9E4GDL3KfQXjvZwqGiVxABoJtXzuDi8dic5nk5JSRf5zg76qunomVLTUzekjmh",
  "key15": "4n4rif5y8yd5s9vud4ShQ76Cbak8eQGapztqn3CUtY2YjRmDhdbEzNSbmrBgzbKEiZQkeGf5L7b3LQx7mewAWf3B",
  "key16": "4hhmhFkPWAjsV9jsJV5667QTMrA4giDEwWj696vYgEE2bNkTA2e9HiXHYmvLMy9AbkWL9XPF5sbJKPgijUD8NHAV",
  "key17": "YJsPgxsGkQwJYXgNq2YwM7RCmj23BBMWG9XtGbB9DKRaVxskjTyGCsYxgunw1RUo3QKkA2x7G1ZCZnTYf91fLSJ",
  "key18": "2E8m7Qa4uj5AgeiMn2EvyXiN4Npm7Wrh2c895NcREr4dSs5QriL3qMMDxx1CYsjGVFzKb4k8bzakXPAz8y47TJs1",
  "key19": "3JA4hGN7m49FeZTEagz7UGeGckVSF2FYfqVr1xBezHjFdvjyBPJ44v9FFkUZviuM52QnJPFf5rW53td3gEpR7FSQ",
  "key20": "nRFqDAPBymWTbmXvvuwvL5w1bXmJJSP6CisFfytkQdMYauMeWpiQDeNQHvQJqNx54rPRdwF4rZTzLYfJLv8VNuz",
  "key21": "58DxrntrwA8d6gd1qh4gCveiSMVpsNrGGv7jT1qXMcGnCnx2ardxQGqvGxkFHvbGWvnKq5zjLXGiMthNUjbWEUvo",
  "key22": "k5BVqqMc9vJfA9TxNWQoUUmZvVLogx6JAbxTU8xPrdyetzU2iBsYUuuGtWhmpPV22deaaei3N94oSqfHaVPpagG",
  "key23": "3xvWjPhWKGzQVhXFoghduW9pMKSjpyQWX2iKHnzWa2TGo9zLg5H1wAGidsDMHTaeHGrm9RUY81n1QRt5mkPWDnE8",
  "key24": "2yVEuW91idcG4mbgEfdLk4Ym5HZ3ytodHQECUbo6btewGzwfBW4m2KDYrZxQQzVKratPVD3deEMZSaybkdRoCnwK",
  "key25": "4tBjcNAyQ9JFUey6WF3BddCN6ZipUFVyQwpcHuSXktcDu2agbLgWGYWs7JPMFTEYFTDYSgLZM8tfBncwmeqxiA7Z",
  "key26": "4NPxvYk3J8DwDNgETcUrdvrL4caUFQpu2h6R1WMrTbsNGmYh4KvpjLn7AVfQ7KPugpwR9hMVmWJ316rxvaUPES6S",
  "key27": "5fCCwThsDRYBKi7cf55XhtCZEx1v9npD5bCePrTJr3iLJnM5tisP4rRQ4SCeqqn73wYTxu4U5Wir6GfKhCPW7Wv1",
  "key28": "2bJdgqRyETN5oynysAWXVwrPmge7BbBWJr9yRSatAXdPSvfd6KWXGLnfNwVqmCJf8mXWgsCLrxrhCPyBzNbtZD36",
  "key29": "4vuTcYUhTbeKheYQXktoo5kUPofCGF8r1GMXszqWHRRKp4fo6qEpKxk7JtaMNUrdhQ3LL3pGCLWkXGvRxLJP8AUK",
  "key30": "4EVkom5oprvHVwoETrDeD53VhKyUxJT1Fqkdvafd2sq5uacunbTnzDdjiC4LhWXwdtAxjB8sSgboDJYcMGidjBVQ",
  "key31": "2obtgihfEWYAiVULHjbhvzo3GBhCVy3Qy8C4BimyEKmch6cfvyavszFV15MZTkdNjsd5cmBjULepM8zdjM2XDSTT",
  "key32": "QhxnoUaqL1nEiANwWcJZuSutbftsdsg9srtitMhJidNomnLe79ym3HEy9RPXbrht3xEUd6jXy68coEJ4EvZff8B",
  "key33": "4TCSpE9P772GsbNdgtsuGYBxUiPhvsaPgyqzzsDUHnbeHZBCMjNQjrLdjyo9GGvMPyGoPVj2YY3kEQ69wd8H4vMH",
  "key34": "3sFcPRRCmJqnqAzoaFixczAEkMJeyJTEXuwoV3Np5df1fggVoEfJWgQu58aRdGe4pgpNqydGJSPuYAZzUmM7Who3",
  "key35": "dN5UngEysdNqjCEgwgvE8UWf1wyyDeUM1e9UTPCiyFgFo9AzEMLWGpCqxFFSfe2ovaCdjwC2stJncGvvhaSyE5X",
  "key36": "RkMWWCymtojM3BMejHBBXrkD9URGnwAbartFkXDujycqfZ2KJt6VXToV6LpKU8i7BLsm7yKYYxTsWrCPQ4bQ6zc",
  "key37": "3exg4ps4tNcHnFEit5cCeCbirhcoAWSj8zANLE9T8jn2HDQRHGVG9qDFxL4dbJarpMmsZCiaKqmhKYc8x7L7j9w6",
  "key38": "4d27BTJpUh7mTSQyHfkoj1ZXfTNdFFTiuP76kSWo8Txajp2M1rMJ9tevURrJVEYkihbVGidoUXnhNaKYZNvaxydo",
  "key39": "3fgS6mUx4kLuHn8xwjm18cqsxkvXAg4nnnEv9DuLHiDMsimfCZgJaY6ed2AXcvzo3McBbHPhHvrezHpUCWKJXPF8",
  "key40": "24UwYi887ZQKeb9ofGtEiEPXMBpnPQAuuCSYtLoZLKVH59kmf2aA4TNh5gJJeuBd3e7LLV4wgG1LBcocKG32NbKq",
  "key41": "64f62Z39KtviSK1nKU61qUhbYpgdw43WPeWfs38vJtv8tvdnPtzwWAe3VUvjVquzF47Z9rn6u5riGt9pENZaBkgb",
  "key42": "3QvmSHBMg3phXgioq75HTawMbDwTKaiNnCH6k3h5LfDCoQyYBsh8qv5Mr8QN9k299F3i49SPqv9HQ3DbmgPdKezW",
  "key43": "3tj5URodowvGkCXwsfBDzV1u32pi6YcM54A2rBeQh7BKfumRRGdhYT3xobhwfKegVH6XCNvXGbZpxujPThfRYDDY",
  "key44": "3b3SPsnudarva5vb5TShti2d6FrSrYGMRowZprb1taenMDvh3UEJNCeXk8wMWWgpjdojsXwD1tPENjps8gT3KfmD",
  "key45": "5KSKTyR57a9zy7CemyGB3epCg6zuRrz8EvGwY77tUVJ2fSjtsTLoZxdago822ETgpBrppwthoACdVki7P4PU19ML",
  "key46": "KDTDkgte9KPTSmap49bvmsqANbFC1WMpcpHyyAAibRV5UkWHsZ161BWsNwTX9RHmUACqFiQGEUq5FWJH2ZD1Gi7",
  "key47": "49V3YVDit4C1bi4zixLw1VDq3oM4WWezG4GyoA1LtoPcjaAwSxVKGmtksdzx5QRwnLJgAQaFZ7fhJYC95Hn31YrF",
  "key48": "zZuuSSMU5RKb22Uiv8iqHsXqd2si64Ms7zs6cbiK4Zunj8nritK94Pyv3HQsfKafJ6K7dFrgS6AgECY8EeyD3eR"
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
