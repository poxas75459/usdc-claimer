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
    "3mKgs23feUrjAxG84PjiUyALDTro1ryUkPXeduGT5xzai4nDVfCTcurZF5wFEJhjnUkTNC75hrCr7QF8vJrLR345"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48bUf8u9fZdyLq7xTxKenUxfkYGgitgSyXbDUKqsFZCdqtLh7JFvn97Ju56KeXXLNucLg8SRcFuVCzSXeajdiVg3",
  "key1": "5GFzYzNhzpe2hX2fcq6vyKubZC3yfBoLMGqhVCwNzn3HrF4x6rAWzaxTpxhko5abAP2eqaZ87VNRn2Kuh1wYtmjW",
  "key2": "2ruR8ixKy3J3SPBcJ88VvJuWQTsqMF4AtkGSx1acmDaZE1t6EzBdcncfUpn4JRAkBVY3dt5tuRuaewtmkbV2QKD7",
  "key3": "2k9dzTiXBKjvBZAqPUXAQxJ67Q5hxVBJjwJnJsWwhLL4kf2XyuxnGcBJt2XbCauvMkSRBT9tnyuZ91vdS9V5eopP",
  "key4": "gZoHzWWhXeBVaYhG857wSKGCLwJjWg5pn8TVfaYe3BzapUTJ2UTFZbJ3x5LgRj6EuPe9RLARiNZuP685Eqec2tr",
  "key5": "4wDsMKCoZaWXcT3zPE9pA4fB9qyusNhVZrp7VVbDhzqwuFgAX73Zymx6QF4nUtxmneaN9YV9fDFcwDnwUhRSUiub",
  "key6": "4mJeBMXJyeKQ1pmVsLDcmFfwAhMjGsN34Rk6uLSwYLrjsfmJy2sber9cY5tjjdDdNm7vwmyprABC7uBmvvgejkzy",
  "key7": "5mAJBoE9RDgqTSC7Zx5E8iVDagTDtNkgscm4wa5K4grpsC4n4qcq7EhnS2RDcMeEboXJXpZSkKHuB53XnWVJ61DV",
  "key8": "XZWa39vfHVyQnamvs37vwQyreRDinc4CJVyyT9vGsDcNoxv8kXt8bq5vexFrL8FCZCPn3LJ9rrrVSiNZkuVfksK",
  "key9": "4xyGoWv897iatU9TxR8K5KgY8f2uKtA96bWi5A2hFcU6YhFRJqhoNYSGJbWAeqUbDwCeYaqs685SZ1AB4fKyDAhQ",
  "key10": "4f2pFggENzs2XWxKLH3MGwrRokRyVETFtLCbRnrm3ZU5rhQ5FgVxzRyPHLVtK9PgrSgFDZoM2VWVie1Zia4VUYQT",
  "key11": "5PoKQWCzczHs9Vt9EeLpQJK3feLbz2xMcA85ssRwwU6ceUrSjecdFjYX5A3bkLGtjzU2gGX98KV7MHs5aorm8DXw",
  "key12": "sfpVDNQ9PoSKeAQde4pX2b9Kcpy97Jjk6PGmBvqBauk3o1aNKMzBBj4TC8ubKGQPNYNfy2SbR8TWpG7Lg3gLAxW",
  "key13": "2RkRfdrsueRj1W89yczSzTnNG1Xb87JB7KuXsy8q3ngTssz1g1emgGgF244VqdQaexq564d5cuqbaXqUbsmCwJrb",
  "key14": "QMZRcjYjE9SUkTSZChxLo5iPk6DRUuY18ocMrRCntpMkUV7sew5YE3iZ71Aj8ggZjc1UQ5p11UFYiiMAzyMiFqg",
  "key15": "3DDD76siFX7unfiaaWsk1vwvFHQiknvihodkTzK56pgyJcYcJEjt2rTdeUojPqEqc4yCn2spfWUavcAfpsqkdzxM",
  "key16": "4ErrxuEbQ8LPEeonSEXLsWoR2yMPMzPJL7U8RjC9dzZKKx4dubEKpMwe6jLFTYSfPSrh6GgCu6q25buSqokUJQQk",
  "key17": "U1Tk6PGeR3QyN39v6Q6Ro9cb7jW567U547pbsURE8PL2ioEKh4TF1waViBUYq6SX5FBv8qWuJJrsyRZ8ii5B1aE",
  "key18": "5CDrMZtsNmzYEBjzwGnH4BcPeAviX1bVnzXp2rzoeUCCq5KB6nNokC2nGcYVE6W436Y9EzZsyrZJXZmecWRRu5WJ",
  "key19": "2VdSN9ZVThHqCaTsXUUKf27W7vxZACxGM8q9GZQ1W7Bca4WkyBXiSpsYGgFKa2fBtarDSqEJygX1fzkQxZdcPo12",
  "key20": "4g7HHjBV3h1EFUS7oi5LrVpYeKvhopamhSnd6DCHkL3Pt2mrCrUKB779kTgkyd7JBcYSi2hv62c7M7k3ReEnVAfQ",
  "key21": "z7bwKeCz57j8hNdQ5q6c5nAyM4p6wVNu9fr5jtx6g9W6P3SxrRGhPLh8eMm6c6LbcokdqeDrvHeUrjZHp3M7vjP",
  "key22": "5WRFgh2obqrVyUenR8UGvkDk4Q2Lh67y5L2HLvhzNEmcMyBNvgbW6qnGpQHJQSytav3ZeFohSzFHyQ6TE5MLzUVf",
  "key23": "3fSE2SYwMeVNB3iATW2ipUnLVnrSxo3pw9XdL6ZU8NCCxW6UesKTsFJk4gq4QwsuBUVoFXqEC8harEGbsmU9E1K8",
  "key24": "5sGvQbS7MRQrWQ9LJXHxBc6NCzG34iffg9rXJJHmH4FqR3GJ2JNPqFTrMkD17EmvmHzdMMrGt8CxTHDeHjYcmuWu",
  "key25": "3AgpJYMN595AnZNdFwR72qydRbMjMrHTVXSf6BMUwCa465ZA4pVd5YuVqjMSgGKFmuQA2EvPidKWJXXfWcQaM5Fn",
  "key26": "23EPPYY4XMCaRzoXQKridqT8cu71hbkNWefhbJDZWqa4hFuBcyPJu7tukeMj67MaYexB4dKDjW4fxZCJaaSaGsum",
  "key27": "4yvBfnrxJfhNx8kzgKtseTC2n33h54LB4HtWEqeRtPW2XoFEWQCYVe9nUSGuEFP5cGQEN6YuPdmzvVsLy5NWtwTV",
  "key28": "3YwK21vVXgggD5V6fwEgueDqtV8KB8samL9dJTA89Pr1NDG4JWFn122MzxmpBNVC8fdiixD2Vd76TFnhs87CJrWK",
  "key29": "4QFxVp9gkRv3511K63tXX8ybofgVXfeXfxHH4vGnzgoDv2miNwt3eHWxwpwgiXponJ2RRm8W6bm22EsfAoeE23FM",
  "key30": "5NnkFbhphaGEK6wSDChzr6hCC7X6EXVgryuM8xjGMC6ZHMcJy8iCjPTFKc5PX4Ss2AyHspMTsY2LSH4RT7ZSSwYr",
  "key31": "5fj55ctMoVeHiircdf8Bh8pb53Njim8Dw2c8N85CuM3U8rUDwUoQnJL5jPCo3Z7BC3FMrcdFXFEF1fq7An7mzfDx",
  "key32": "Af8Z1U3ufzcfuZRNHB3E9srfyXNqevRUkbW1T4yvsrQif83vxDkWoCNf35CxECg6qaHFCTKxVzuiwkCfz3TBuKs",
  "key33": "3TG8zT7N88pX4AgRtWyaz7emfQqdh7GXKaTxBeKrvdK4Zr2aEeYgXJ3hj6CyWMsjEoHSJcgr6wHAi7KUgm8ANkXW",
  "key34": "3j3WrzgDVsP3RVa352DqvyV71vS6knBaPQZV9NccLA9BjrKzpKT64fuKMFrAqhdt46dJ1pAUyYY3UwfmWhhz5MFq",
  "key35": "3Ax29ZzVNPWEBT31rARduD35ngFEGULUJtV7tWsSQwnJRPgoNkieVfEHLHFnugy4tnVmPBvCnEDxYnucpZ93NUtM",
  "key36": "4xaVoFNr4V8QnRFvoZos8jTv6Zhso9xbMVfdCywtUQWzYDB7Eg5tsgV3hh3GYDvmF6ihADWf2CF2CED1S6PDKVJT",
  "key37": "45q2JsU1iHmnmDi4UKzcYpoudYh51q88nWT2HpGqYcCtyz3KkBRrFiGj9f28P2TdBZzd7cruJQeSh7yaGcDunECx",
  "key38": "5caCzKUuLnm4quM2gdSSHVL1yCmaD3Nbkc7SgeSZ5YfiaspZDMVcj8LLJ9YHQ7rhgKDDxbtke7sy4sqbt5ozAFcf",
  "key39": "2pZDQnTwW86occgkHU9nhk7UR66n2oT29ikrh1UhY2HA8opDQvJpmctgte2GmMDfF9dCeBviN6ML2oozh1qJRm53",
  "key40": "4xiL6CQaBao7ALgFrCSgY3mkTxKu9KxwEmugKj2C6CgpicWNZ2UyMQUqiBU3XdTyLAEKyeMte8n7veJCgvTCSF15",
  "key41": "5tqZqyB4rcr1kdK3FetbYsKvwVfjbvFW8Z7itANi98u1BXGytCNTwMEn8zRNFrSSpjcCM5eDKYvVW1paRzknS3wD",
  "key42": "3Vu1FajJ4s45gXtL7nSKQrBirezZp9J1EB1vK3KJQ538MvcAovmyyRRQff5VLq2r7v9TgwYmW4WFvMAwPUs3khx1",
  "key43": "67cExKYLKBGSUXhT2qowHYfbjJwHdT7EiCF4oDHLztWKr5y8MspmuazwAGWQdx3dNyXjxSV6osoDZEwsJnwuMEeW",
  "key44": "4LwqjZEaAvqoqsrysXeiLiPMt7JfXsYNF4FzZ5PpiLrJRf2bnyRgAKQbxzgkWWQ1BJPsaMfivhK1VggMJiHe5hB9",
  "key45": "4giKG5HxbQD54Enyjn4DYqrJXCaspHU63WzvyGNd1WKHwfFDhKcyRGGuiXhPpnPoUrena9UAXx6dh4SgVHowKH3m",
  "key46": "418tTZpbfFQaLzjNsQU8Z1byS7tayf8KiUkd8RtWbHLVCMeJ1yHQkZTmbj356hqnS9BMoTs715PknASGxGiphr9h",
  "key47": "3LwbyUdP9FQxbaNZnjSoG3j5kYUCr4JUgdEGCKeeePvqiUqU6wTkCzbg25Hr3pKadsqGhxqzuVJfhj74YpnFzgPM",
  "key48": "4aMGAZ331arifhxggjE81eg7WfSsgQNiwveArqfcJM3GHFk5yDYn4WgGjJbCraPGg4KrikooukrRvEfNXekehUef",
  "key49": "286E1UEcmyMUn7PxT32mRonTKvRjrnt1UCZ582QvTuFBPqTEAq1YKfcd7D4wjZPScRNPTMswU8uyQyLRY99pLFTU"
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
