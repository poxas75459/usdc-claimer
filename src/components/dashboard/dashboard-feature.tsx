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
    "Urh1gRdTw1iZpJnxVGmhJBgtsJC8JJBRbW3RCModfWTKNik8Q13W8bgiQDLnfwXYJZFetvXgJNvXP88BVMdEdp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qo57QQmAdXRibK1MpY1JBfenYS3J3zT4H8ZRK1pM8nZbtd69NqGMgz6j8hM9JpCTh3uMiUE5C3geKPhiAtZKh74",
  "key1": "4HXdc5VFhk2s1BsoK7AdbA7bVTgmEav6vy5rzaPLvbb7yVpaNcynqpT7nVrj5ovQo3ocefUsP9pg4eGwGMWvmibH",
  "key2": "2rX5B8RCZca4p1iXVeZUdir7JWUitjsjbDsLxjZXB62zmVGptDjFSHSEh6ahMjwk5yuRXMsKTTDSiq2ScMv9G968",
  "key3": "3AnkMrPoB2RARmcUk6MV7SS41oRY3QGwNdgDs2fkNy7zTUMQMSu2Ve5YjcMrNce6bYP3aTFHS46mRgrAF93bhW72",
  "key4": "2Kd4UqJPo4CRkr12ewhizMRP9X3UTT6v8E7Kh1eTqBXPWMowQcDAny6Gb2rwd1atBa5A64qjdzY9eCDTy46L9v1r",
  "key5": "2subKsUwWa9RNqiSsJ4wnHcTGmMgg4HAPvAM2hePJDhE5xQZtsDTkUVhnt71G7B1q2XZTRww8NiEQ7Tmhbq2fvG3",
  "key6": "5jTKh2UTVWgEmv2z5srN5YNeFvHHyF8FJAgnB9JkfWRRf1WDBbrSFQRSdbsZvYGkdFhzN479KdycmcjF9cNaVV74",
  "key7": "2DRofG5pE6p3i9RnkeYysXofEG1BSz9A6rnswMX8Ak7WY2CzVQvb39cpySTQac36koYGuQqku1f5wZjDZUVYz1ot",
  "key8": "2Af1BtHPac9dtnMkXRpHTrVBhrWD7LWKQsacHEtZD9oC8SJuoyAGbZ1EZAWLJLZzkzicSkhzaFbHzbs6xN9Jpu39",
  "key9": "fYEmUBSqQsnaBWYycffdCxYg8YPgS21bowJ6Xr7qMkkgrWnWtvGmGiSLVF2KYCfdZwE7ssdqVdbk7UpkXQNSMVJ",
  "key10": "ZrWpzVWBKWZBzzz5QgtV6xG4FK5b7t1BosDsQKzZxhYdkxXZebF7wBkS6gKH2vf5eaaTZFmDVtNL1rFxktvpAxH",
  "key11": "4YFJtxiR6fu16Kgnb3CmK299U8brcZfcRHSnUbNU23hk1VuiTkBRcpGTf97UVcSrQPQvzb39joZ5XBnhVzLtCQVJ",
  "key12": "39YQwm7KTSYZDS6hnRBE6gJAZKUkU7CgFMLKnj5QH2QnBcTv8NAhZm9rqc3aogiQ9kZ4R1RWrs8Ab373GbPvp6Ee",
  "key13": "5V7nQ12fwtJs9UhV5GvV1kxdW4Z3EJXAfJdNX5CD7QUMU6C8HeWv9JMF7Mus37SjFYKbCpA1tEBZGsiPQPrhgmSf",
  "key14": "41LpnyWfNzHThrs8KRP7bngUuHuYU8NKXk5YFsuMuAeNekWhYBBq6pp4yVZESoeYC4LPynr74T48M9ovbeyCb6SQ",
  "key15": "49EBHC2AnzcvUb5W3NRCn3oC81z3BQX3CSHApnq8aaiXyUiWxEx7iHNR6iu491F6jGEADqqb2h6VMi9CLHQNU5WJ",
  "key16": "2kKaUugPMWvR4oBKmrBF8y3WXSfs4yKroysmtbhrpMnY6pJ3bm7ie9Kq58YsnixHuwS9FkC8YpZTrXukqxygiqys",
  "key17": "66JqqsoJZ31hHfEvutQDHoqyR8xA2nVChnmtQiYiFm26ym1f381q8MPcNFG52rLcxcDoeh9WbCc3oTUdjM5QeXC5",
  "key18": "4bWFjSRMVFtAEpfFwkyNw5yv6Trd94LUXUYFxJKjCEuB456yS397dmPCwUP2tUGYE4h5GKpNcAtt4CC9m7LhsJ4x",
  "key19": "3T8YE3HzPxuYjY2xNLWiSddhw5bSTezEXmEHSJYNsoUdDZR18CnX9nCZpFuLTrAiz9wSkGgc6a62xQQx9ugKgEte",
  "key20": "4Ck57hC6XjAacbAnvqzxqZrx7zU6QLfZLeXAFYEe58ypU3YHiX7U3jp7offvuj2uNiKKbgJ9kxjNCTzYqsCVncbS",
  "key21": "2GXxVUHMotWRMgucmt2ucE9czWpQjgxDFrBXWSBz9jeQVaPQiMCuUTHY6eH83JWHTMw6upbwnz9bm6oPHTX3pTBS",
  "key22": "T2EaoaZLPw7uxQJUfFRg1gFAAKSBbRfJ6H3kzEGm5VYfacraYRXbEj4J8NzNpcvgnWojVyLzN4ixkVgihuMYDEL",
  "key23": "25b6XHhyzQ9Ta2eT1dfdN2eJPt5uVqeG8oWt1khnaFNGAugXcVDBjTsnCX5HznBTTAZfEmW1KW2jvRRXz4sfvBDm",
  "key24": "5LuAmdq1kuk4ENKWBoLumXWrZA6gCJooZYrBS4JTpHdGcf8SNFkbumjJNSTPw6z97W7TExVNB9DpS7AuCQvPfchy",
  "key25": "3Zq4h5kwyoQP3m6BRbeXhkGScokhZpCJXfUMwPh2Ct4V6XfrT1VcRjkAxmwhNMYdfVqeo4Qv6tAcqqLmsRPp1h2",
  "key26": "3QrvUAJ9zyHRZCnLKE3CYpFePymtUrCRTRQRtQbSDnyWDLcHcpbLWiW8fDnhwNdgLHmAU6HMibfm87SVMN9Wph7D",
  "key27": "HSdtLPfF4pcMGbUdhE2siq8rjSWNsJtRkYd4XbBVeeSpBR1tY9HMA2bahfG4X3pZMisPKYRDkr6EuAcygYuDQqH",
  "key28": "3Ac8ok4MMyTM3W2wnUCWQwvxUsgAzmMMjqovKR81PtjYLEeVrzXnoPLaa6zDpNUAZi49XLB663orkumLrTkn9EtW",
  "key29": "3rbCojHVD3vKxoK6kkYeSLvroMZTyRayUQy7Ldgqh6KApVt9nMwS8LenadbCBgry1kmNky9A824HchwyC7pcU8S7",
  "key30": "2QGMhUA1f5V2rSYjuVssSV1BMV6BP1tC5B1kUFpiVXhtn2QsLoHJx4vfRarUoSrKv7yX5MEGV5SkhAnipsLuQhzi",
  "key31": "4N78zhvbciW5jE78NAQjhSEF5SK9MWGqHD4BR8Nq9mmGEzTSnmitgKtdgThXhWWB5mek1YXKnQsCppvcsBiwdurX",
  "key32": "5WGtgwXrGs1P1P5vG4ox4HZRcSiY5YZLNFbQG6iedhNZFvamGndof41RJ36Uc4XtimmBaDphkdee7SrSmw3nxyT3",
  "key33": "2fY5LaZDeTkrvJ8LP7nY98nJ9LzxV6aV1jxCLuiaJzNem4WJNExwd8vZn7AjBrbTFZZAxWJwFtv3j63ArxyDvkcC",
  "key34": "4siUL42nXwWNjQw8awrDydV5KhoyfbV2hPVfjpm6pJqKuSs9Naqmxanfkm1ra2WyeBiLkWtoHHV6xis2zPLx7Kkr",
  "key35": "5vfLtHJ6heEsKRnTyNLbBaJ7p437jUENm47PgppDgGE19Ncx6DWr2RhtohTPeBwd4HJtiS7M21iTuQuY4L3YXQDB",
  "key36": "2o9doPoV4z3zRDGcr8wgCNaSJQeSH7FVPFzkBFA2E7eQ38js7LTDFp1tCBBB8TgBFEiDHH4dXPTw7g1AZCwb4zBE",
  "key37": "2TWry8brcQjYeTRQxafBz2PH3yUPcWAStVvscRm168bFXW2yYVr64wo2PdJhEz562WN5FM1iJzFWyfbR9EkJJZEZ",
  "key38": "67Mvgb5ZedVupYiW3os2a9sbyFi13JVQvyQ4UGunFTs7JjxixGSLKFPAfZ8N7t9c1fKqy1iiEBwsRQXX6xgQVFQE",
  "key39": "vw1TrTaDvn8KVNowqvq1D1o2B5tSY8jTr7Shcbm2XAqHGpoqviZ9BHPrX5Aviq7PDuC5osB6PEy8KAodfskKY2k",
  "key40": "4kedcMF4LgUxmEx4557DptVFGVA6uWTYSMh2pSjVchwRZUSNc2xG3oGh7b9HQX5RUJJWf3T16QC1vG24vDyqVVA3",
  "key41": "2ic11ZkAtW8UXEm94nswmedDzquSe262XGbTn78PajqnKE33xQT2XzPjEfNpGFmMvofcRERLZfL98zdSVqqboNBk",
  "key42": "2jz36frJxmJBfM2WyZajnNh6qK8LA4RgqeRrt8QpYTrvK57M5ciNYkpqTkEEGipMbyKj9JbpiGaoje943hvw79kP",
  "key43": "3XTeNfnWiqAHQiFvHnPfnEd63fM7kV2ungCFUDb8P88f5VrRj6smrFspAqpTA5JyRdeLuSTzsg7Bthtim611d7cr",
  "key44": "3deo3nhSkHEmnczNJEVF1jrmninyvnv7n6ntTRmhx1L9gy6ayy2ATGUPinvaNzmUTFPnb3fDgkHwD6JGBsmVr59A",
  "key45": "23QZ1pFCny6tWtKUPPqeqLg3s7epE4FggeiMiWCFjpLzJjTb83cMRGgUrDEVwM3E2ZW7zWvFkhXA9wiWFmYq4zdK",
  "key46": "55MZj76ERHbPwtpYELD5YkvkpQzsgLHQgqKJb7PzUDVVchU5H4LuMLPoL2ydDDYBGfZNg6QQxfaNKgEW5XuP1RGG",
  "key47": "3cUnMLtsRu4EymB2ge6Bvka8DPnS7ZFF5K4v9GYbLzur1cMvekTvwC9QFqyyDmThpBK7xf6WivHRvSfdbs9SAN1j",
  "key48": "3W63F9aYJ3SVYnUu9RCEheL1C7rxeDRFCmvaJ668w6Y5h13fdvcCEZxG9Lzys9FExFJEB6t26RQPMzvQ1f488Jp5"
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
