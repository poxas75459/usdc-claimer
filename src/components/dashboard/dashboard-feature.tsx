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
    "2dAeoJ49QpDaJVvEKU37dfcpfMgdaTs66vnD1sC1qtzGrsnxJ64siPKb2Ncuq3SGSJMJH2cU6SPaXYikUqUKjHUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kviq1wLaNbpC2vbQta1DVMUs4REmFA2q32nuK7QRPRbBmu4EDo8KtYxKydeYTaGzEDYUsf5B6oTAVExSGcJakNA",
  "key1": "3NqZLj8QWZ7ixu42YBjFxmsu8VdwjkDwVxGrGgwVGsDoiVTjBQ9LeJSv3GureXVTEKRTYhQ5tu2c9ViJ5mEthoCf",
  "key2": "2EVjC4yHfwNcKBJynAD8bRrBT25pYyCG7iZXbGTQGVeijs1CgzZqJvQ4tenvba2vrhwTiVUXpttSZiUXXMs4VuSX",
  "key3": "5ikFGqQrHNjDivQerNqANndd6EpKTd5hgox3UPB7gx4QKX2Us8Qf6GUxRaKhsndrqwgDawyEiJcvyGtsz798rUni",
  "key4": "34kxeQY73x4Fuqw1hy9ZGeYysqFTBLT2MwMc1Q368ddYPTzavyKwVTTw9NV6Cu7LogJ64SQRrvbGjHPXMeLZNzVQ",
  "key5": "44d1uUsMkANtrXVx9BrZCxzDgTTFmhp5wRU6dBXfQ6rJWZuY3658ukJxKbDMMqAeG44a3xDvg3gEyBCauuL4pnVn",
  "key6": "4yEqAkFLfk8wNDf2Jm8ZUuBT593r69JSP39AzoHCDWoaYiGn39sLiairySh8KQZhwFhvpwzUksmy8XfgQAoEw52u",
  "key7": "2kxTaeFUojFpe2aGAUquiniMrR9di8uW4pRjeKQycrPKbM7apCBQNLedaxiVzkgb8qMqds65YDA9HC16oM3aogtC",
  "key8": "45w6sFY4fKesZheDoAYNqrpEo7D8GSEpFAbL5ycRk7ooVcUXN8F65LxpzYGaNX4BeRozi7erF1Tnsm14chQGrq6Z",
  "key9": "3DjCQvsDrghtAqBk7WuvFJKKcaGH7zEzzcPppEGZDQN6zhKXwHkosdvz6jMahprLJxgJegVn9r23Zw953vEsPivZ",
  "key10": "4yyPGjCUN2xb6QDQ2ZtLvyVRLzPaQgoYMQTq6TiXHEsXmHp8nJQjKUiyoB449x2jQJxBqSktBf3jrr5Bz74h85WB",
  "key11": "4qEbKXAEhBP4EHT9XNva6XfmFdzSzDCkf7Bj8PRPwZsab7sJWK3VYLYsACKSP89QzmJE2vfSCUxXvgFUT6fyYirz",
  "key12": "Xug3CRMv4Cr2zZ4tcbkc8cr6g4XgcmFhj8D2gZNsk4U9jX48PA7TH36sBrDkpNbTfsKkbTpq9hMV1JinPeiqztM",
  "key13": "5WAAoYrdQU1BVY4MTg4t9ThzXV1D1RaihQdfNx2NgGE4y4JrxJzAxFq6LC7wtT7wp8G1sfKGDAMjb9P5YYHNdr4d",
  "key14": "4mmwpAt22VPAJaiLj33UJ93atPhjLo75ZJdDUUaTaUa8b42GVFP2gPeDrCSGXoWGxC3WgzHsWUrtGr2ke8jVZxSr",
  "key15": "4V7NoGCWQGtY9CoGRYScNZSp9MavNtiGKLJUCXdxR9bU1EC9TxB2iWMJjRQMCCSYSjvXLLnT4hkuoGsxXbZNH6hB",
  "key16": "3ocdZRkkia8GFaLLsXxbhqf6JPxr2Z1Nw3jzZfALLcxvvSu6a7JVait48w3YXxhWJNEeBTpY6u8XgW8q3CvQBFQy",
  "key17": "2emVkCK1EF2vU34XnnbKDgQca9oeEMKqN2ZhnTeTkt1Qjm1npbGcWDb6ZGeMERbTfn5qpS67YMWpPDsnB36ihi8k",
  "key18": "3V7DrmagZtDgYCjHjm9fU3DroEK5rGGfEvxjswHzY6Vxps9hnZCMprUnJiNM6QhFsoLsyMhMtZuV4FrKwjPW6VSa",
  "key19": "4mdpyDCZNUTKo3p62Z4Aerjo33TrQd8ucfy6gswk3uvjvWb1Yt5Hc5ShmTwBz6j46bEbe6DCtaNf38hG3pNZtV6Y",
  "key20": "62RBqV4suZr9rFvFKbpeBH2zjVAUbnGfoxaYXxtaU9LEL2dk1rFZUYm1sisCQZZMu33GVDyA2Hj5HzXDJLB38TUr",
  "key21": "26kVhW39NFsiPBF6QqsFE9dQbauiKV2AdxUy4XvtZECYSANDbaz3MoRLwXXUZD1htskd8SbKAyHAnVmBkH1RrsaX",
  "key22": "26kiXpbYQSVm1RFpVKqCuuKVU9zJwrk7A3PBtkaAtzNUxD3ZNeot5BjwJPmC8YJMSHqv4iUnWNunAR68UjaRBtjq",
  "key23": "G1qTtWTfo6KhasE5fznZSi1qDXhya6bQiQF4s6LqY6AmdHYfFchts8sWSRmezVZLKyXjbmTk1bUTjhYr3WqvzX6",
  "key24": "3DWCQLhQPT2nDTTEwjkBDvvxjs2sMEAJfzhJUDFEG8jfEGkEELgrRozMJYDxRqvuzUw4r4HyNffbdt6GtxzSmnEq",
  "key25": "3e3KDjZia2qqEVWcuaST4mCigoJFjSNpn5GMHEAtwqEzpnKz3qQmpseBvvtiRKNuvrJVPFm1Rq2HBoZzSy1tCgy2",
  "key26": "38mCAeqK6Humrj8GUPcHG5Uioz8nzGWgtGdEFsPXmZSczPyEPK2N7YatwLtASU2HbH39qgBwZtsLWXNumCWK37ny",
  "key27": "5fH6DRca1LcTgF6WsqjFKGHYxtgbiAZuvwxUq8Gc986eo2ud7VR4Jz7VZ8AR9BBWfG73avg2B3wgLrqesnzCgDn7",
  "key28": "CtkBesfSWJZMyLNnAt1eQFmpJUofBkCFc9MhaLhHgJDFWuok7kTZPEDouf2GaQs42sMgaghU2gkeGnEvUPjKQvW",
  "key29": "5SL5sSHcBKyrPgeDxgLWLBhCyNtgHdaSdRu1cgdCzEXke4bKGumREQWVfb2adsxq68DUUG1CYD4PDBDMFRSStacW",
  "key30": "3WqMKHNvEG6eVciJKv6P4PVK1dy4SdVBNSahBCwzUuHgaD2oRPWpvvLAZoCTJJ1XaEA7QVPgAJSp2XPj19GFp4Wy",
  "key31": "3SkP3r4fBaVfiUzqFssmDUgQRB1FxndBDj8pvyu11hwZLKe6rMyhNoVttLJCt4ErkyLPYhUQUTaEBBTXSniuWc3h",
  "key32": "5nPcTNKDWSwEiRfjYjB5PHX2h6x3NYrXmrCrQkhANNsaSBqXtTobbDwamPRxrLoMrLu3KvzQTZeb1eudkaKZbDop",
  "key33": "SknoY1AgXnbUjCmQr82VNTN386Ea2QU6S7B25RogtmYNWumgzAuZGDdyB9JTCYP9qoipruyvHmbo2LM2Mc5D67K",
  "key34": "5ahu4trLDL1e3PM5qErScZiduxqS2vLRMEyW2kr5EkRuvBYmZexcTgoQeB55MiHGVBTgfTAxUUpovnvLJGD11EPh",
  "key35": "2vFLmrt77szJfbaToEFsb6Zq8SKLLtB2Nk1AXQyGPB8TKugatqHsLbZJ4WfKzhPx8rmkbsoDo9mpsmfebBMucQQT",
  "key36": "67cHERBE4hp7XJvFuvrohrDQPd1Coe5ZZCKzA1YMVyNQJ3LCbxcCXx2Jjex1fpRwLd5y6ck2hqeAGo2b9oYuin1T",
  "key37": "4iq8WjBB8A2cVzdN8LT1KMadGwwiAijMT5P3A9hZh4k8h7E8G3ixWNtFsHLsr7AUBkPe6mp1LD43bX4WRpXrbSMi",
  "key38": "4VBc2ugz8GyxkcAyeS8X6MiUo22g1YinXkXSVPttB4UBUZkNqmqT7GpVuc8syxpob3DhSkhu3PQeEHMERRvAEbv6",
  "key39": "28XV1Lv829PiY4phpubfj9MtrdiDkvdYT4S6xugHfZyyQw75EGBSojASF78AaqfZFUpZMpRzcinsduDP381GEF3G",
  "key40": "3dFh11mTkcHW8qqbF9RnSX1MvENi2sQzuporSiN3dUNsb5upyNFF3xecYFc67JJBtNpswLe2aHGaSkKd4VQZxELW",
  "key41": "47yfdjFR1YC9r8RR1BTaXwHr8r4F9UsbViM1CF71X1BTvWGF4mGMM7xyAp32J1ry8i8LxyH4cbJQU8GXQCUmmepX",
  "key42": "5HctBnDg25TmdaBzrkCJejZDChGbH9nvSQdhGLgureoaMwYJBZRWs8JHJCigkakDUuD2ssLPZxBpUBAF29YSC1iT",
  "key43": "3pHnaF3qaPySKoUx6XcGr85SE4sxCM4nqHqjY6su6nihrjhDmpi33QFcQgBWUDvx3nT1RkunTmPLRWSMPZsgEuJa",
  "key44": "2UWz9SVYAWgyGEaK1MAPAz7RroCd9UV4mjWvPydVoMakHj8qAsvyvuzr27PixkXMCYPTFm9tqMupfJKp6WTkT3QG",
  "key45": "NcDqtKdSWrK7eqEPetfKH5Nrqn8fsBkF3ufvdnPyhCMC1hVgXqLhgaWzrVi4PkRAnZkZ8bXohhFarB2rPFsn2nb",
  "key46": "3Gktf1TvnjgY5BHw3b46Kr5ojjSunAnqMcvLjieZUGjbbGpPui8EkwLBs9LBuWUdppBZiy67XfeSXcEfThpympoW",
  "key47": "3yLJrQMJren9HmufPLwmtLxHXWGwmkvjDUMZDm828UnQbVhgPAZsEeN5yZHk8LjfwaPDozPyxmB1RrpbkD9uqGmo",
  "key48": "3mqXD3E6jUPirPyHTQHVYtR4mf4ys4WR7iV9zXeGGu48aqAAppmztHSCVjBt4TJfkEqND2zQNsVXZ7KTSSfSLyT1"
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
