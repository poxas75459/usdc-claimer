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
    "3qhAErub7MdifDRa8TRkJyRyhgC8qXkBdGqWoA7Vfqqeo7F8ko557yktv8kVH4h6aAwWHmC1SbPbBp7rDTKdjZev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bNSQju5n96VEr8vykFP9wpniDbqjW5Gj88gQDNb1ttuZufCvmSdT39Y3wVWRtTsscXT1NuhP8Pw5qgsVuPb8UaA",
  "key1": "5KvLRoJnowwiMeLn38XtSXVL4vJgAucoormLMzSwQUe6tq6m8nNPHkq1SN9K5DCXnfgTGio9Rs5r77q6hKRcdqKc",
  "key2": "4VmPm2DzRiswN6idzffTEKDzG4FuCFjXHi9813J2zNtWBGr7F67rqwfK4Kcs5yCWTPTt5Z9Y8if5LwC9dTJxSv27",
  "key3": "5cDNhiSamowXZb7wmJbwsgSda7szA6jPB6As3egxWEuWEPPCYScFqDWcPRDJ4rMnphnhG2muzXpTgM5ZJzuXDQXP",
  "key4": "3acaa7HW3FHF4EpkQUH3AtJcvLDeQEetaBzC674c8ibLeSqeSECDAaiDFVF5G8oBUmh2SVguN4fUUkt71g8eppXG",
  "key5": "2e5m8Dva6n91EjL8vYZYcdEkstz1UKSXrSgcHy4vYKZa5dUxHRqYoeZe44c9goFJgrJXdnFefs6rm17ZLPSbrFLe",
  "key6": "3gCGarsRo6kB835aJzedkNRjyjiFdd7zUtSbWFCAk3XR3NRXqiHCtMyE1Fyh7tBmXBgPuayp99sCP9WD8Vd6ekin",
  "key7": "5oUvqNvBXxKuNk2h36hFNuCH58k6vzto4Le2UGcwszdgRRG54AbGevXJEfpX15C5KoCiYfsjszxmnwuAFffZGej5",
  "key8": "2WE4VJggf2WBprkAq6kAELsS7bWZWuGsH8ctvrpuHdJoGn3CpWhnVfuMBwmFLn4wVVRf1uycZMPsHegczgboxZiC",
  "key9": "FcuZxnmSrQujZXJqGvXCrLfjzYoEGnqeau71ut3JNRjAAjzxey33u3pkzPwgpxAzUiKgESSqURXU1zNYLDzaCmf",
  "key10": "5tDwCe1NHwGD1qC5c31rF4zjzCXPiGQJN3VBEyfycgtT7HPefigE82K6ZHVXfMohxGDCQjoGyEKF1sGdreaNLYZU",
  "key11": "41C65FkAnWafGwoNLX6wn1HnsFfQUp3Pb7hd9i9eT8bRYecjmndDckafvJaeyw7VHAgXoLyLCLxwAhqUMoR6ukqR",
  "key12": "2hba6ZeM9JTuzSAWAYHAkkN5A6wVteemmKxM8pEBV5Dp2rsUBNZCdc5q8bdfFndHGWYqSkhD5kbdK757jXBvSYYV",
  "key13": "5wxbzFYECLfm8Xoa5mSpYE8iuyNUGCGqjRi1cDNgwpPYELS1STjMjenvWme7FjZmpmeVqjrWsa3S8rHzV7ikfSsW",
  "key14": "5vfJiVutGJznLTUzaEN2DA8oTTzQLcPJmE2dJCsN2eHFhTq1WaoF4BwjRAnSdVbmUJ9C4yGckjNN9dGx458Ki2em",
  "key15": "2vCZq2VtcrkrK3MVkbn2vTXWTNDQXDGvrP28Ai5vsPzU2mDVwZUZcfWqxZVDZ7KGsTsutoecjYGappocu5SW1ydx",
  "key16": "MqJsf4kS3qhWjtpYQKqUd15YXLpTnzcYU6vKGEZwemN6dWbA4pw2FQAGD2CPyBYkZRM2wdxuvHveG6WpXbCchni",
  "key17": "4YxL3oqHLWHM4yoG5CQunRfed1kuSESMsDfdVhHHUxZM9pz22DCV3krxecDLqixGYnuTZ3AsKtYJeNdocHY5StQp",
  "key18": "2xmxupM1iLXy9hvR2gRTTZCMBekWaJzq5fmkJsgQvThAACryW3M2PXoyvR8otv5LsFXzjx1fkQ61bBPYXSqY2UQR",
  "key19": "3KCJ21D2znTWpCM5KFfB5fDBSCQJY16qtP9Dzyrw9d78DoNWTUcJoYmTrmdUSxJ67QdX5E91zzJwDWzaZtm3NS7C",
  "key20": "48GSauKo939edvRsw56qfko3ZTyB9mHywUmJnuWUxQWuwg4vM9Bf3BBbPVFEFhJ6HKovXenUqCDQeRXfkUeTc4p6",
  "key21": "4grvCJ9fiXhu2aRhVoawfoKauE7VyRh5BjQP3wDfa3hp39ogBUwJ83REJfnHk5E4sPjGUgpva97yRceoPhqDCaD8",
  "key22": "28g2YJ2ErE3dsWAZ7NdU36XDtoSoSG9Bfgs2E4bnhrXS6B8E1bDXoc9Aof2FTYfKmHTdsRMDprmpm8onrJbA2Uz6",
  "key23": "ABhdaXao46mEdUdrzhm61mpUFpaFBzVaBfYYDpUBQNhYSWMtB3yXsGYyK1E5Uz7Qn5Zq9LYgDD9SjQvfLWeKSHS",
  "key24": "BXC5jCDt3FTmRDvk15ZosobwaUKJgAThuc6NtySsA5Jm6svxQijiSZu47kJuk5VYvZkkJhArMJBfqCARe7NwZgn",
  "key25": "3BVbdDLM8723CQjtExY3SvBV4dFmg5adVxCNZjbYh473bXzFzVgtfWqeFNFe9SYNSxLprjmZuHy6HxGPXBaj8MDG",
  "key26": "vMzmiaiqAh2QDX8rTtXWWDzgpn2E9NWjhybqpaF5LMGwQSRQP51k3xp87Q29q1nWmuv9J9gQgo5HVRSKMhBFsbh",
  "key27": "3CcJyzGR6JVcTA3MyrHyFmYeZLxreZEipcQzi4NFag83H3uwPqhVhdwTdFZnzFVsHzqrF1LSPgxgx8n5Bvtdb735",
  "key28": "UFp28sgW6MaJkj8gPUs9CxV6xepzK2v7xssLDGJc6Ho5iXngWaqLxCnrqV6hzLYPx1LRmLXLhVM8DtSTcmDw9wS",
  "key29": "3N1MNdJD2G83RJfyRRPvQX2M3FfqHa4Re4cxuq75oRuqMP65ob5p586ydW5iFNRDwWnH7ybk28MS3T51HqrkgJR6",
  "key30": "2M6HhSs4N42Kua137fL9225XxdYKrwRm6RNpqNftqxXQWJZNKDtLFuzH45Ajzm37eGi7nvTgxHY92Yh78s8X3CYP",
  "key31": "xCnoxQW6fWJZyp31RxRxL4RYSpKVyG6RA436Ba87Pth2nXs8iZac5zAwaQRWq2FJFBhzNB7xRVVrdT38uDVhYBo",
  "key32": "4vrujSKtpjfC4sHGm78bfJeCmoUnqXhx88QNaZe7YwSYGv8TJ9rjFWJixXkQAbSv23qCSPApdh1vEE15B2UeqiAy",
  "key33": "4GGvWMBDXVGcd9HMdFbPpWBH4pRJ5RH3VSqckaRhLwxhJL23rcb6UMnNVwuNQzmqhy7ZHgaM4GPsYWYtGWg9NC6c",
  "key34": "533mhcwF4Xdp9tWhx29Kdpbs4Fo2brRcotfNwx9X3MnLs8xZT6AM5WGXLA2ysyuW6ibfNphU7VkSY8ttFusbeMVr",
  "key35": "5u5JyJ9aK16Y5Unq693zLvrXQ5Q5tysQ3bias6R5rx9q6f8DxbNNECL2w37PYaN7Z2KBjCSGArwFknhkLU9Ee4La",
  "key36": "5sE9kw3DJH1mZcwbNPeQt4bSxV3bLchAK82ppRspf36Fe2WsEvpV62owGRYEST2yrsaULnvHpRfMq1bYXQMnm8jz",
  "key37": "3arxEYJvRfuytnQksYw1XPkbq8zrtQbxzHqFuBagmtqhkDy7zGRdbyjathhqyyBbLByDstMQwjBvwH2DdggUGA2h",
  "key38": "XCcApDJZQfiucjwBrrjdjVTGiNLuFVg2geZADa6tUZi6ArRz8aDPkV2wyB76bzBKHv7SpWhsDsvakW5GTjT9XA1",
  "key39": "5E8r5ydktLp7o9TpkCh9B4gdZd92MX1RbnS1uFWJ9TbMfMJ59pHXPdGZeLehLriYzqxrBQpbBtCdnY83N7YGMRZL",
  "key40": "4E8AWQqbZSS56YjXXvz2BzUgPEK8XEgooqqHFUpktStJTt9SCQhUN6T1ibaoko3Sbf9yeZEYRL9eaaBhvGiaB2vs",
  "key41": "3HTY5U7jL94M11nDyPo2mXgqH3CyKsabMpTkYTdxtZnZFTSUbMRR2PNoCNEkmQPjoJrXfw4Pf9xQcn7jaDixLkCZ",
  "key42": "4aD71fq9P7ZMmoge6baBg7shwM5kf3nybhkfoUS3mbrwvbCSjqEtr92tmk47wVkhKmTEWrtTZ5NMSmNWxmxq1GeG"
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
