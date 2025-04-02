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
    "YEWJouMeseceNZFGsMbF8fk7dDk5kz9QsmECu5oap3FvZqxH1fUR1JfPo5dYUMfzWdMightNdFVo4mp6RwTm2Yp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sGRKvQyaBBZGhhAVGhaVf3WgkKRQv8oDWU2DuF3p41L5keVz8pxhuHCZ86xQjSse1Mu9dFkYfvi1NWfg1gFit6s",
  "key1": "42NTqq8KhEdd3GtAfgkfwmj3dyiUUAbGa4H6bKjosTn1BqHZAfSNBqiuw5e6G4fgX47B2mb9Tn7yEm2meYrBuk6o",
  "key2": "5FZrFuYPzdoUyUeBWuyscv6v8xXSea72dey4aXGo6ZwnnLcUXhtGje69Ba7LjGN9iNuBeFTiqsDoWR1oa5zTuDiW",
  "key3": "2NZdP7yBg2ZCcKgWGUbMPfhtgyBjUzhDrrvZU8Dvgd3Exvr7hhSSEd4YRR3xj12CiAhoWTNq9BrqTvr454ZPEYew",
  "key4": "49Dc23toLescbyepYyEkGHxTuEkiSjR5W7tyPJFBu4BjFuYbmbZoChRWc64Js16BwXsFD9xqpV2gv3if66JQLcRx",
  "key5": "cHQjRfVwGiueXTggFjZKzAjKA2satfqYKEARVWqhef1JaB7pz6ukfedAKCqjrkg1Hx23Kb2rA6G1Byb6jmUDZup",
  "key6": "4iM8cYSuUQpnQagNFwdiN8D6dQPobTpPaxZ6266Z48dtDxzQv6tL4XUHgxaWNTw9MnJntmLuHM7pvzVfmX3KQnSC",
  "key7": "59XnjCT6jZ4zkjinhGEq4ppjtFztgA41yZqPX6HSYkWYzYMLPigECTLRn4mMxWsBAM1G4eeppuwVR9c568d3j9T7",
  "key8": "3wxtp5Kv1LHcnHDjZ5B5q8aQ64H9iLuhvpgg1c1iLikfdYu2ovpbssUGpuyMxo7kYqMk4mYAG2jCxMJ9EuV7GRQo",
  "key9": "4Nog4qTEBfx7QY4SMdUwshAhRzz79Jx7pBhbSQTurnyT6xvwvGgTpczsN2Z3kBKrFeLKZcdWBqyERjpfZJeHf1Ts",
  "key10": "5ToLt1jE2Bp3caTaKoxwChLM7LaHR7V9VveppwqwGmbvGCWNovE4WPPCFpNaSY7NZTCEV3spqBjvwoS7PFhb527q",
  "key11": "66bGsvwkNCBt5fdefVb9oRyhsXZd5YjfYD1PLPgSMm7xUiCXgTzuqTzhpoC19ybk8CegCFiyttBWvtP9aVHKzpvi",
  "key12": "4KRwHRqoimJseHyCGaTutg9TkuAG61DHkHb38mLinGCSpuzSEnEG49kmsY4ZgJoep1gYD1z8G5rWLVMqa4RxAtQ4",
  "key13": "2aRZe7DmUU5KkKwNwnUDT46D539v8bmWsDApzKx97w9hk2W5qhdVNuACdktmUBZFXh6Ya2PKanSqbzAQJTV2BbZT",
  "key14": "42jgkrjfe2qYkBPZTqHuBxDgMjvzZD2CEhvK69HMcRuxLFsfAk3QYck2CxL4Pv55N8bxCJkQwoBzrkiPezPKuqUm",
  "key15": "5FD1nbqdiauVvdnX5TAtsBLz3icK1cXS3j9Xi5Hcyu14MxM3CZQta7mQWq7VfBafUYHp8PxSjcxm1PFnJr6Tcsmu",
  "key16": "q7u1tQXXeLs8aYZ6X24Y1kAD8fvL9mptJrLV4N1d8QyG6LHjQP2d3ty6p8yKSZE3W4gvBdRw4mPyoPEphruEwCf",
  "key17": "4txAVjLRq1pToRFK2d7zRVwHBvnZ91vxxhW4pi7JpDX2zSy1ot1nAnbiZmjPHZJz1uPBzeetpMW5rdDJdPTskeiY",
  "key18": "PQWTLp9wnSXhfeg7CGoUqZhYjfDat5RAcbfqzonkqDsa9TESWaFcUgqCi3KyMqNqPbFGvLQuVkZyFsn6StSMbbT",
  "key19": "23Swberem1cRFy1SCuXntxJT98CohjjuvHWKnAGrqExkbX2jRs4zjb6CSraToE7n3QeSzrYSLsxFpmCQPcBGR9ih",
  "key20": "4j58MUSsoa3tcVRVgjWZ3sLpLUPWsL92UCDVYDjdabgucD3nBm73eFgZPdM5LRPbaLr94C37ywjxptyvuSreazVh",
  "key21": "33j7zB572mebiSZgKf79vskRo5TBzBDWaCp5PniUv5cQBeiN1HUkkx7a6bYJ1X4VajbfZuU5uZj8XLuYgsCKEK4f",
  "key22": "3YvquqxNFy3t3iMeXaYUvmGMpT82JxB1SyN1nNM7SMRvPjtzDVksX1qZf1mcMjhin6aAa2QmFkB6PBxTxLjjdDar",
  "key23": "2aF5RJ56KFLa7wjpr4wSf4T8f8CEziM9W4t42XTrwD64Jb91gitvwJcy6erS8evqi2fkE4mNQRraPJgBhxmkP7fc",
  "key24": "61Cr3BgqAVpWV4McSVgr8ZaPJ8G5nQeuWkraqKN7LAMiF2KP1dzfxNexHEJDSefVYaCALjmr7hfHAaWN9pvtjmTb",
  "key25": "BL2bzbYo5uWJ6GVVC3vEFfRacDsq1QDZFHmzqYpT79U9k6BhCVJukGkGagvvnPNQKtFwcAAuh5VhFa1jbqBt2aU",
  "key26": "LHxTAPv2QFkKZn6Kvkj1HFAcCY4Gd27MkEpfDLqpRRbLow9vRNYf7s8tgcLWDDDgPttGR6HY2VFhwjcVUEyVW14",
  "key27": "5LhUnjx1xiNSUj29dB3M2HCbgNPDXpLmE2vdFue1uh1hL2FKFxQDe93TLfH8nknuGJrTGTfUd9hHrfWDfzouaf5s",
  "key28": "4L93QTYMNZFo2PQqDFmG6VSBm2wwCPu5j55SCyLinydkVfHfEhntUFQYXngxysuNHK6YGfEuYoHuJbSYkmA8mpBq",
  "key29": "3WragSttRs5nUFRFQsokaW7WXZqvBoCYVtrqTTy7ggyx1YisJ3SRLJtXM9w9Su8J66PGW7ZR9dhnq38eNoLzUt6h",
  "key30": "4rpQdrLc4WMBbiNJQNUXdE38jaceXKK8oyHGEAHWwPYuxBurocbADhqk5pxbpiPCrUWziJrrehjJCdEZ34UvUJoq",
  "key31": "5n2At3qcg5jhkvmHF8TB7oVgphFH2zHhLqhxkt47LRqiqmkWNVEYnKkqVEi3a3RJMnwuK8PZKYRoPp3DaqWG7C3X",
  "key32": "dPUwk3QsBWYuaTxhPevFJFSmjoQH4u7DQqHA99m8B9QUwMLL6EQ24XdsAvdGvzLWi4zfGR9jrGQSwzwahijpi8J",
  "key33": "3YkEuJ1bP3QL5yAzCvyZRfjtVcnnmp2YMjF8wdBWFQFGR8gyWgrfgNZUYDDVvuE931kmC542ZtwoPR1YMHAgC8Es",
  "key34": "42FcXTh7AypxM9dTodLYHMjZqtdpGSGFizZ8bcSCiEFbHRS28Emxe1Dy5B3qyYKTpKXKNQv7ZjchfxtNCjW2LLpz",
  "key35": "4wp8v1zJSWfrS6kwRgRMgarUWv2znC36Ds5Nidrg4jNftPUTECqK7VfNnMdQQoVcNs4C5drzBDk2K8vrHqSE7XuW",
  "key36": "a5VaJZztyWX89tJ5meg5fCdLnfHomtuF6ekspscBj1do2gRgS9vtbrZhYodrcgxmC36RMvxLt7MpHmm6cnNqsTW",
  "key37": "g7rP9tXA7d5kCG2sYekWxkT1Hna8E4cQcWUYet1hWGVqPmiSC5EHopDGfGuuZqY2chRDKzD61VjEyuNGMBHqgff",
  "key38": "3HDJzEaeXfTdtgdADpt7rp8zvjWwuY3PUj9NYxRM5onZCqUCQf9kDf4Tvkh7g1AVh56fJpNGZbmkN11JUdRrWTyc",
  "key39": "38gijXYEJxBMTLaHffebxFPy6Gq7XKvsuvJtC4gs99E6QAc5bjL9mSAUJL8VS1fn31rBV64z4uowoEXcYia8ybJJ",
  "key40": "2ibB21KyGbhKcBMeUHYJ5xCXz6jo3ExS6ZQYv3AVMAnt3zaLiFMuEHb7aCdXjpLpmDBUr6EUByyZNWrBrjEG5mvS",
  "key41": "3qdMQ6XKPs7EK7jR6cjJu4ahzWFNHNZkcAdASHPjAiCUhGPCfQUckYj2hPZpjiG14wyVFJtdkRZsqS18kThzw1Xj",
  "key42": "wZpqKCx2LMaxyMdBkNmzayYpjZAkeJEL4HnaQP4hJD5PejFhNrMsbBf3SXpjA9mjLWrV6U2g6Sv3u6jHTmp46cG",
  "key43": "5ourEDAtJsrktZrqQzwtwGCvA5Cf5kaQrRrxvrHSGQ5ZUzf2vYiN3BeYwRmnctLjnyGFR3fQZ4hZLMHX6PNKdLs8",
  "key44": "3Fesb3ZByDbmaHYmGKz7efoQd7xV1sb1staHqBarvjodFNcv4MtYhp35tjxb1pj3ECw5MAzXVkhtR7EyJ2YgXJPc",
  "key45": "2eBWJsA11ora3mBjDC28mpaaXBnEK5KWLrn8GuoVsLpou7LwXsq44MkyL8bk67p8k4R7AGbBXTiCKGDVT7nMsFh6",
  "key46": "2KUXmADQQjEZXUcB7AeAsYWbszuUUE6fiqp4ogyZrk6FjALAFHWnjx1pGqRUbrRCKarZYa7Xf7XVGUsLFiaoMgkw",
  "key47": "4Xp1NRUuaED92NHs5DevDcTYphGVQHTP5mBSCcm3fxBiFyQxre9qjycwFZbtUoSMbjEqua2K99Kv9GmC9DRHfacc"
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
