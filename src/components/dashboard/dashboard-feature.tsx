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
    "2GpLp21kzWjACfXXRbnLhDxzQd38ZxbnrtcrRVJ3z8MfqnGEdHSK2SDv3HLyY7gFtRBbNJgnVmH6bbWUFV4VsYtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hQUx1TxWPU5r2cUidTK85w7R7b6iz5oTZzHyktVhis7gj5yiatKbgrw7bKDA9v3JnYmZgV5aNtZP53W5BFbRttP",
  "key1": "2iPeXNkFsrY6tNz1ezE4QP3aBgeg6cUQMipTRAHcHHMMQXZMPMsguNactKiYHibMCrWHuNDVXupCi7SRfaRD53mi",
  "key2": "5YC1CUmo3nxd83WSmCrMqStEBhV9NDDmogb3yAowZbbDXfprYSqCkCKgVLZETWYCVYjqcdQ4r4N3qJr2dE3wSib2",
  "key3": "62JKaq8uZtZAMATUzYqz2TLYjsSyHVu63WPsKuFxMXyCpBwGTLMVohVnz5DX2HjoCR7fGwvhSDRQJMMiDNrvHKCB",
  "key4": "5EN8TszE6jHuRasczWiNZhPSE517KdqDJ18Nv83e1VXxZQHSxH5ZhDVSuxa4uU9wHu1zxbAoCsJ7FhqBsTSM4Aeo",
  "key5": "2FBTVybCY4H26V4Ds7ot6kCUoDr4adq5iRCXgaykuFYQLnBppUUALQmnwZtWeNqXhqaZ4hFSoBFdHMHnGJXAkscj",
  "key6": "2SrEf6ttBBvby6ruq2f81QG7UeujthtFu5s74GXtLJc1Ez7QZcLH1hMQ2evDwd6pVhtaNdPzdLQYDfSpV5xMavPq",
  "key7": "6J4UFc1fpSFrUzs7CPiqBboZBxYh5obXJMhi1zdnJvNnZos5qMRWEYMfsobCB4WxGGXh26zBCBUrneWQ2wghgDg",
  "key8": "5s9dDmyUhPLdZCU7EGwCeXafm8ydHTeuS61AM3516Nr9yRmMxKSM6T2dKHX1Zu2iTQ1zmFyXP2ifgBmeZvRuiN39",
  "key9": "5n5AuEW49f1W59EqHkdBTBdg6c3Pgj7oNAAf1nkS3AV9nxa61JMhBuYoUgmoBD83veNpLgj854RPQn16thcJ8K2b",
  "key10": "2SbzetFzmYkwHFopRHTWSwvNXEofWMKSMSvjCXPevTuGBmutRaDwW7nSFtAKtLN76fL78453aJ2rp83zimS9dqyt",
  "key11": "3S9c8X1VS7i5QynXUjkg3HYcgWzGH4Z9BhXwM56Fd4Ws6YNjARBnJkBQj5wUUavjZgZVp3GSKLMaTqVvTnenaTZH",
  "key12": "4iihT7rQoF5mh1gF9wSqj3gRgq1nwM8ftf8MmgAZMX59pW1SX5oDLeUoRJCjgi82z6EVfA5BhHepCtkiNjEeXeKf",
  "key13": "5RukQL8NVqWDBY1yigE6y69cGvVXrMfKVgLP99os6uzr5GVRYrtFa4wmZjFbmN1ENJZiih93Q2mCAAnmtWBCiLLQ",
  "key14": "t2UkrNGxhmhBr7BXGzj3bz34baZDRhDmYZi7bgvPxaeARGRwQyy4sT24f1kVcBainufXj58YM63FtKqoWRJxTLL",
  "key15": "5KNEpf3ZZemx154G2ZSfj7ouPMTKE1mANmsfcd7VUGkNaST45Vxin8gXdwqyQ5XZLyHah9iSwSaj3ivM19BAYWw6",
  "key16": "mL3FduetV3qUa5smACw7y6Qnonsd87mXGnqDRax8nT1X3xi3k6GsAMKpJjMrdYvXRZepEXaqKRT1VCFjERJn4xB",
  "key17": "5p59H5yamvBix23uzPx2esZg7DXVH2L6butz4maLJrJ9ooEmZRj24YXPKGpEb1tVaEmhjhviJ94HFTmHKie918BP",
  "key18": "3wnPtrfWXXs2j8Vksn4U7Akje18S6MADtNt15fUPYc15XxmoLSLpTTeetXmJNDTVqCqZnMZBsHjY1qcvRzoiy5cY",
  "key19": "qRq3DXdrV1WMVjg38JCxX4kM7eHrxXGLLRbRCHEC2THiqhddbtXVSyFwqBJQsq8hxNYtCKyeZa8GHkTxan8px9F",
  "key20": "GbBNJ3f2AwrEutZfQ6Rq8LAPBZaTMUXAaEsXLwRhyazVjQ2oeehsMef9Wqsqewwgpi4fWi7vw2VC1HxBQSL5i9g",
  "key21": "4DssvD7CK2qDyHJBXhqoBWwE9UbSdHFV9nvvxmyFwy1XC16GBfDAGYaySi7gfsC3UEp6pYbtWEsi1CKDYeqEM3EU",
  "key22": "43XTaRABQpfk2XSmFnhqcAxLd1ijoksvgHC4c1ACD8hg7pe3PNw3ab6MVL5gE7xvmywyk9MHZv9vkxrvfQsYmoWj",
  "key23": "34hrHg5E5j2ELVmP6VtSNZuCChLYa4ZGumxo8LrTrW4fdEvBcteJyyA8u63GCMUUEUdcg9ueu2XpY1ocs5agAhoX",
  "key24": "PzqDELVGBnn287g5zypRfdffv7zgZQcgETvfKj7yn91PJDCV4b8wbRYdK4W8tknpdGJKECSKfAMDRK536ptmH9r",
  "key25": "Zhay5TJH2TwHpqNErn5vCuinA3Xc2ZxoomhyXXEk5kx5RbJeNdQSBK2njLeooCmXnxzfNVR3fshZLiGj1mphH17",
  "key26": "PVk85jZfUQLDjxhQT17Reok8uWaKS89XZXnh4MKhMeJyYtURRM5mC7zgbh3FVpD3nZgH7CevaWsWbCiqYU1xG7e",
  "key27": "5MeBUkhTnsvYJkjxk7bDdrGoZx1FuHQxjb5chmo5HXZGxLzeemF7NfqsqkgA8tURTcJN65i2gEAsYqvnEboDHdiu",
  "key28": "5ipfik76w59vaHLuRFHte9wLmDnSQfqXPTBbg9yupypJMwaaXt8TGyxaPh2csdbmFGj45EqY1dDniDtv3e7kZ6y6",
  "key29": "5TEL87GbQepNm7mWwNsWnhabwM8yBDcdXhRRSDX6rY16V4giJL7RW7EpecgCLHaFGfynzypgCacLAnjgWiDGYnmh",
  "key30": "BxsWLrKk2pvSPuj83v65k2qra8r7xZ3BJrFHB9CLhSKxmRL1gQoykeudcBs6iGgfFFDCngqoLxysiuGkJ9DMx9W",
  "key31": "4B52N77D1WCVQAe2uiEGjswdS4mr145zNmDLQ9u4q5RXT3YTBxSm23dck5iLf2MTw549mxStcGcq7VPGgCks8D9k",
  "key32": "2dafXr5kTUGArUKxsAf5dV9h3xmyasqZHsYdvzFD85rr86rrCZorwuzMtLSRgVvZyHANcNzBZqXh9HMv9M2jwJxG",
  "key33": "htphrCbvoyw948ScEuXuF7ednbYSyBXfkD2rFvbCQCgCux1bfBN4Wm3YUJqzDX4ALno9dGtCpvBxYPQNWQT2NRu",
  "key34": "2VujUPY1p7mvvUJ3pPkFyen3QCUnhzSLTdaU7vKeCcxH6n9geaK377mYa4tD1vTkUvVQ2MrxQMrRvsG9j9MQNTyH",
  "key35": "2DPLPDd839E69rp61iFeQTLHDvHtECjVrZsXJFTTCASjaaUsCxyKitXV6BAk3vwuwzzq4uooNtYeqd5ujn5J91Np",
  "key36": "Xjk97FiAKCGKmogJ9gPZe9A7L3o1Vo7Z9fruTCetEcB2C8yowyp1RUMCf1A4AT3h5zHMvKex4sDW6H4exgUzoYm",
  "key37": "Yp2FD3DSexSPu2bn9huJ1c8gEM4tcWEKyX6v7YB8QTmi6vJ5x7Rt968niFW5SGHKcHriw4Tanu9KxFSnLZ3eipr",
  "key38": "86FhrBjuStcc9tbXAQoo7Ge37MseCZH2sDUXBWe41WyZmKerPvsbc1dzecCBZf5dZeXkM9XsSB5UYrUpV38ZmJt",
  "key39": "3XuA3X4YH9XjGQxvw2HceUPMgQq8MhntU6t9yLX9nVRg98Nq2gAPvAkjztjzLfuEk9zKHFv6aBZRr1YpuXKNDbGz"
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
