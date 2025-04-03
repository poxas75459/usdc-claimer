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
    "4YUHdtZbVAjC7M8hn6UFr6RxP9K4SgCVksWtoDRJJ2FcjqxCtdJoCp1ZRs43UwfdCiBwdN9PZQHeHsfTJUgc7e55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xeWk5mgkV3kzVeJyoqQHfSLNYY618UdbbbUGqu28pAtXuG2n1HmH5kPFY2QL3jUkziL9rCjT6YmRBJkRFxAD2yb",
  "key1": "ZZZF4qsTTNrGuTi9AMPoDg8tkQ6WFX2fKcq9SaQqyqyKbNduotvMzCTcJGXuPM4CyAt1WSEQBrzTVtMeLPB5wWu",
  "key2": "2NTwJA9fwisBRftcJsutNzZgipsubgAv2qKesNu3gMk75R5GNceyDMwXrfFXHCAjvmrjn4HWaHLiUEgba8w5afCQ",
  "key3": "2hjbpJpAuiMg7ehBumkLvn1ZnDtcb78jUaxVzVeLmxMzzvWxbp45BNRqVv8rJZbPPS9cSoMF6rACRrfXcqVdGAgY",
  "key4": "4Bz1i3ALT3cnUWBR4FuqUbPfUDguwnRtjAPzg5Rd4Uku5npxTPsDed7TfGUvwD9okRBx93p1iuVTRsoMWJQpFnzH",
  "key5": "2XuZP9yQHLWiFvqHT1WMQTmyrZuqrQPeRc1FDSMhnaHkgibXHVCyR8J8UrAqqH8YaKaExmGXuSnX7wokDsQ6wxPK",
  "key6": "4kacKhTzZuCYLccHAda749o92Brfws3PecNNicsT6Tswc7TdzCnUkPdYX1ecVpkFTjL83HvAKMPnvdeEfDUjpebk",
  "key7": "3kBC52W13iiLbq8rXvKanpRPHTvDT828xpR4PAJkGcBr8T3DXdpFa598BvgCJNQjx1TFwz9McWrxjNUSH5bMhzLi",
  "key8": "3xviYpoWuaJFqKQLPU2ikyBdb7TE6dn82pdifv4qmPJQo5FDtjNEgitbM9341i41bxZrXTUTkh7aRx5KjuFv8jDK",
  "key9": "3pVULT4eAoze13Thuaj6wqmuxmxMB57GW2Y39DKyjHH8LEPL6WU3uh8cQwigkdkeq4i1HCa4TGQf1BPqm2VzRfK8",
  "key10": "39uSvUcBVVx3cNftKrqkhTgff6DECnhfc2XjsNZT2dyBLi3s3ZxuZMJimcvNkqLkWL9hpJB4xcNgkzhxSkL4fn4C",
  "key11": "7yW5cv6TBFR6nQi7evtTxTwaaXqPjJzjV3GVho7Zn9GCW5ZXLWv66YpEpEqH19EXP1273H13eeR1Xm29Y28zCNk",
  "key12": "3ePY5gbLb9ZmWY7aRdELzz5hUmjkLDu4ZiU1ET2YW2k6oXmm7LP3vPv1UEQZLTcY7HWfYjFuZxRj7zsZTkJrawV2",
  "key13": "WdNHtMAKfBkRwfguoTdoirwBS9vxiLbT1VUT3ad24SSXreLck9JFGFAD7wcbm83jupX2RdZNy689njFH9EKZ6df",
  "key14": "Vdi1dAN8wiWu6SqdcP3Rw18KsE6rtShoGgnngQhayoQLgk3JfyXzvnVQTiotDu7eCbXbSBsomA6jv8CjqdCwB1D",
  "key15": "5DAvZ1D1XK37yoqNGTqPLzjGX3EZLKFqQLVT6yZwR2pxM58VVXppry4tnaAY72h1UxKfVSYmQ1Yab718C6JqhFHE",
  "key16": "2V2Je76EVFuWSoYiCHL7UiuYNJHbYzcwavHTzR48mvckJELYcJpx51VXJqAcvdwakoy2i67Vtv9pqqJWSQopsicM",
  "key17": "58LiKGCVRAsNNCi7nUFcA239DgGMbQpPUjvR9UDCd1hpRp5ME4SDddzZYnXP95akUSyjKyCbB2VykTU9wM74yU4L",
  "key18": "3X5fJJKC1CRQBwUFc147Md5w8eJRP2GAu9UH1SQyeUc9W9j8attLAZZ8zPVCtW3QWar3ivo18kny3gXPQLD53mZ7",
  "key19": "4gYRd1PpJnJUGNSxh27Yv8mS7VimrQnQymffRYj7LWyyanSanpVwr5wzXjgCDYDCXQ4eFAKQjFGutPAtDhb8tGpS",
  "key20": "47aUXTdsxFsV3qGKeKZLTE93Sb32yfycYEwGzY3eyyD6b3oUocTP33mijoCDjcqzz6yGfeaoKXPyNxVNmDoBSKvE",
  "key21": "2m3YFKoqMX2KnSdt1csJrwrE5ofr4do227xKkNmj3cByN68v4RxxEA5a7RVcCKWAkjawco1vatoGAJY4QHiBf4AR",
  "key22": "4W3rzWkJnaSWNqeCM5Ln3ga9DyzFMQf2jtP9DFdYcLAB6QtEdQw1qzGpZJr48JoM6BhCAWaZzmhkj99QQZwgXoYh",
  "key23": "yeGvTZgXXW2oWZpbD28ygMaQsMY45LErdbZCsCDUtWRiqJyxskh5hMWrGzCnKWCFQuExXEdMw47Zh44DhseBJ4o",
  "key24": "Rp2u6dgV2eAuJvNGnUfxRmAkB1BYFycuut1nFQMKUYzb1fXpm9vkdsdmFd4vdXTscFTx8rmTjBdCrb8679DZM6L",
  "key25": "5SX6eMNF6RxKF9647Kp64qrFw4pgjaDK1tveQwMizRKegG6TzBoNAX1RRTWCzqXfVwofSydassRVxY5JkmA5za4t",
  "key26": "3AwD1Dm5wZnTVSV4zpKFYAq5TprEfwrufPQjdLLgeqHtrheyvvbSixzFB7ATu4ja2ScBgUz2KzeaYvasLjLD9djb",
  "key27": "3Mens3wAvp2hnyX375YWDhvmq3TqBLQKar9cwxbgcfL5g2WFkbda2jmjsdKTiRbJtqD7qFYDyhQ6B9C92qMvKq7h",
  "key28": "3bUWv9rHq12YW7fH86ev1mCfmCEk5TLDKhtB5Yr8iuEeLvExYeQMfn4SnUrcuyt4XrxVfCZVL9yer22VU8SBSQio",
  "key29": "4sbWaw62XBCpJu47Zy5fPMP5SGbFtND4NuYsvNgdtQfWjaB6kqbhQT3Y29X5chPJbzVr5FkCc3xyYMa8VSK1cdtK",
  "key30": "qvYFQtuZPmwdRmx4NV5WY68epRmTenWsDYMJegQ66H1ckmTWHprox3Rk4znuAScgYCc5xZoggYtuXrXpLgfEFfG",
  "key31": "41KH9kW5h11Qrs1h9MYC1XrHWvL4FbSfTSx6cVTQprgEyWRW7P2B2usN183dJwwg4eqNXUNWdhWewiGB3gyZUjrz",
  "key32": "iojM9GJ4S3wbHTRqVrw1ZW6mDCNAPWqABAQFYr2qBsFNMx1cMqF6m4zb7zgu2fSc1Uso69mCeiBMeCc1G6qjUBX",
  "key33": "4UKvAMP1AH4Q7MUjnFuCQmrXE1gxjfaKmfCmigeTAk7aLonk4s2rQVa4fR5WDyeiniv7YsSj9q5283U9ybrPA9A4",
  "key34": "4YUUSXB1hv7gGa81NQphMqwe4vynzgve48Avn5rf4xMPjMTbGmnSnhz2sKyrCXGJaYR6JJ2q3GjwUvGjdCM3rfGt",
  "key35": "5YX1qhAP2kaWtSoSHjAG9voQVw5NJgcAUcGa1XRVx81QYHHVVsRWesudtKsRbvn1ZuEyq6Dw7ZBJ42FvvGLMJNvF",
  "key36": "35PqP4WEDxwH93So32tYW6qzhUkFi1kMwZ8eHyCMBNmEiN2yt5EPrzKqg7eMZgTeZqgMzRtnBcVHeg3k1nKCfy7R",
  "key37": "2Cwwkcihds4DfaMsW66sp521ByLmdG3FbBkqsQGLD422S7AMnSGE64VN2f7H3BgmKRFmMeibb33kpvZcWWkCeXqw",
  "key38": "9MAzXc8LpVL8jjbkRJ8KWNyY8dH2Avqg3nsDDBAQkAjGpUuNZLXq43Dukpx7boGrF37W5Z122TYCxe5NSoQnq5H",
  "key39": "2QfmWDgWaW6VnUyD1AsNYQ6kdAkrSUtLH9ynnrdryAYw9s9CXg2uMQTVbdqVRHAuMxJT7GYPCa5Ju75qS2guZRst",
  "key40": "9Yjvf58aLqW57YAgASTY5E5Da7A7P2kARuzTYFHThyZjzM1PJ83q78abDJ9FRotUCB9sfizSRModEGms3QoxLDV",
  "key41": "2HuS2J8mEyBAFnXF5ZibrN37Tmg3ECAGVbSv79Y66kfZaP8Yyfo7nFcvYbjMeDZ68wiLSUobC264rXovwZgMfCQR",
  "key42": "56ni4Qijt4y3iwZRQ5sNo9qTksrWaHLkqJkydUnCSwxoUREV6n4QG8WmMvwunjdEkprYwoBs3HAthM2ni66c2U9P",
  "key43": "388rjGtQQPgB5nDUvVLNEgii94YNJRLLWxxb3VsLzT5TASQqNqq29e7sFj3mqgac6iTUoAsp89uPXdgzDkgZX46x",
  "key44": "2MMqLbqECnFmGUADkC5661nDuzrWmroMxMkRLrS86aXPBmsaPgRGPmEgsMTyacJsez77usZsjnt7sDpNNz3BVLyt",
  "key45": "572EXVPw7LooicN27vdLWSHrPTpsx45ca1ZL3ESrK7SFkKZb2pqnZq9trkgyJb3v8TATuxG47ksPaAiS3CLvr1KH",
  "key46": "5s6veZh6CbaiMRHPEfKM8sPDyG91nsMG3esReH9cmQargv7ic3mBCD6QPuSGxeXwkVErVEGuB5jpd4ShmVjWjCin",
  "key47": "2Q8RyFLwPAhgr4NF2x5YebAo519k8A8ZfAiPLvD7fzJvAxStA5CyF3xWra9oURANX12hYAKPRjMbqfrU7yzMkNZD",
  "key48": "3cKgcGR9herrgXPPPTTMPBX3Xo3deGg3sWjkscYT1rMTMsuXk553AdHefPQk94pvt9KYRqeHzahpGqFkh5hEwvCZ"
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
