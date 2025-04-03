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
    "4fWn2tZNLmeib5jm5ciCKggWhsWg4qBR2XkyKNWkizjcTtCdYUFRkK9HWheCZnRGYboiYAhNQoBrkBEcJcxH7S4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UsTYMeqEErZyGsxut4fXWoJUKL89Gar8P1JT3U69JurzZ514aHX6TL2im8BL7uiWNwJVybvFvKXRxznFoQvCVDF",
  "key1": "2QXXRg4aVDjXfunP2gpXUxneB6dnhMhmtWff3dw4p4XmNwcqv4nTBco3kVjYNbfJtMoxKzP8vKr2onCYu9ADVtCG",
  "key2": "5saXhuLFoAceKzj2jmt3ptbNBYkv5cKfg6vxJz6EhpGYhb6KAUYNfK7JiCkkDPQTgScXv4SE6kFqFCGQseCJEoRi",
  "key3": "nyw4bnkYmbuc8viohYir77mE4hzshFSrzGqTcWX5raKNHz6oV22rfEnESrzPPFbEviiCBG197hmFtv5yyDowxxZ",
  "key4": "4AiJSHQ4T4he8q3AKfHLqP6RzvMvLncXoRvNKyXctsP6pbrrXRPPfMbHHoRNMNKrrgU9uVcEsXUvQe2VPgxPa4Wc",
  "key5": "QJBGSfRgL8C3yKf2uv8T5YqmLoEwzscSppyuDv1ZUwEXs8DHg4DJpeEPXdSkz1SdNPWg3kwDVdNiLP8g8Run5oK",
  "key6": "3xukYfj2o4jv8JK84VNeMzDFgQekqqQQEHz4JbhG8ajw4fYYRsqgK4g4WXJD3wbxwJiru3E6MikrBqmhmMZoQFLn",
  "key7": "3X3kZdSVTDLwYWaC9Qqst194CYJho9R5XNkYXAV3VopCznXmKH3NPbtYGgr58zP7op6jfjqWAxfchQJ27WpFkNwa",
  "key8": "WRz2c9sMH7BwgJiE1XzrXyEzk1PqxtKpQHuZL8wPvTFjqim3G7fa7Y3DPU6tUDJzHZutxjp1qGgVdW7AyHs8bxT",
  "key9": "31UT1genQVNzVTdaWhuRMpLhi72K2mU1vHSsgVnE6kNnjcRWBsjfx8QB7LhPUSLS5sVfD2xD24hamwWFVMWhLv6e",
  "key10": "51EqyG6oqj5sGTrGCjewVmP4yHVhGxTM2HTidCkudPGS9q7X33QpqbDTY9jQfMKFt4i52jmaBjofWjy2xKKdEbH9",
  "key11": "54JA9KNVYQpw3rjkkKV56EqEWHeAXaXFTjyJu6tuWN2N1g2LqhqNZ8XvqFAQUEedNVaoyXYogvpXoKRLgnFBbAQL",
  "key12": "2TPXqvoukTmzeZA6gLgu9MBqeC15VuGNBhTppXBMT1SHmqsMkrpbGWKwqd4tJUobaHQtrSCe8dtJx5Yq7MS1Ly9k",
  "key13": "zuvPSokuTc5a1DdmS54zR7YLaXMVXefR8bsUT4WMfZdA8Z1NdRgkH5pyHddPau5CqQtyJ8sxuyj2M7TTacAHAkw",
  "key14": "EtriwPHeahdewSVpJjPGLSPHsM6Y7QPrybuccPrTpuL5krZVSSe2sczw1hfLaG7dNEsTVrdp1LtwsrEThgfjCad",
  "key15": "3Aa1DEmA8V7L7GGGSb34nnQmaGcKJ7CPSfjoVSsmfYKLSNVP1FTwGZQvaso652SEgnNVP2vRsyLMvFRu6u6px7fm",
  "key16": "5ungNtvpxm2zySbbNAE3VsKgN5wZNuZd36mD2JKcpA5q6CPjNW4oqgwiXZ8QGJqoCV1Ys6Q2YqhJpev8oB8ZjgHW",
  "key17": "4BamuWQCixSShQWS9SQ3n5jQdwB5jDn6jjQuFUMogZfUQ53EQEgUSRXpnGMnMgzeZhamMEQX8BsAUKzFZAFxz9XN",
  "key18": "2bmwJ57wfoeQpqNkhj3KYbLQfAeCTUrhPy2NSWDUyUEdJL1P2WUACiixC45qXnu8jdLTGB9GRsaUnkouL6NGvxnW",
  "key19": "3wawLeXnbXJQ85wbfNBKX8F82jY8EwsFLEepDAGyRbBH3GZzkhMJJp9fShQLFXA7GPDXpSGbQ1FFbHWege7SxkTD",
  "key20": "38GLqefh9suvYfRLjyy6Qh8jWsEKxjXsLUycGgvkTNgKyy2JycCD2tCosdueu4u837Z1cEMer1dFrq4yL5ZTqdcq",
  "key21": "3DBkeKvnWkcNkj39UUWPKxbR5AFqh8v6u5aNSfohSUVVexMP1tBUpmAS14soUxfaEvrRLmDgacZLP3QWc3oYQJey",
  "key22": "5xBbGjQQXt8jHw8PFKJY9HVRtUWDKJijp8Hniiuaz2ZJdCRXvmPRijU8xKJMkuJE7U3RKtHKHHHcznyKy9WjZN7Y",
  "key23": "YesT89kQTgqrD5kZncBFH1EBLz1cBhdcxY8BDYngtAnDgNbw8SQoKHGqvPofmEDPFW35BP5cMw9FdX5AJvwc21M",
  "key24": "5y3bbW6rKqYQBZff4EwzRVn6SeQpcN5S1VywwjdoB1ZZUBmmCJ7FABnrdtpgwLgBX2wB1VAUdoAVECjc5pFn743r",
  "key25": "25bxvH1pjjdtp5KXDZDtfUk9FVHZvYtdgPoHYi8wqaBWfhZh2MdCkLDwR5S26iVXH4GvcveNqv6ZSM5SiUF7zjjC",
  "key26": "3cvBuXQ2oTZwFGKPBDc8AeSPHKLpJdUkUZXCLrMVhXC9CCtn3jDJD1YxYWpJZJs6Xt8DvSjep9SWbDfSJaEAiNxn",
  "key27": "2WChE6pVnhcMzsxqXScAfWkRUUU1deD7uHsi99oKaRctiawwKwoMBiDRnYFAy3h4dUJP5FPo4JyPCbhxZFs1roLn",
  "key28": "5YLdKfeKhA1fAhcR6S1wLw95oP8iHaTPMBgWVvEm1v5QZ16S3UxrcKm3mj4Sv5EZabJ9LpJLEFv6canwKqCv6mYx",
  "key29": "3iQeLpafkwaWTZHv6Ai743n6mmfDHgEBbDcVJL4bW5GbJte3RMLDXEh7oAWDpZwdTd3EpP7Mbc1sTaKRxCAnqfcA",
  "key30": "DXs8b53qgn1eXLc697bLfoLPH3gY43B2RBdZanzpVftxMeBUqz5nAEoGr7eMYzavpi9BGPpxexWzbZRfQbGpsdh",
  "key31": "B8po4v2TB3kLQdzPGZxipvqz1e8yYdFBaLmghH5wXnyARpVZ3RGEqPgdtNaypkM7boYR4k1y4AZiDgCQ6JfVwSu",
  "key32": "5Jy4soMCC1Ps2CC6obfhQZGPAzmMZGUXTWpsQ91GjUNyrqmun37Rz76GrZQCoCoTx9jaMNdxfqUgPpdPUvGGSzGN",
  "key33": "2PhWybgxFRsWnYJfZ7BLtcddfYuxJ9h8g52iiJSi1SXBKJCgW1wQWDyMR2ob3TCNrXeHXtqWaSKcTbuptFemaX4W",
  "key34": "3expQGEfxuYUJFEHrHPJn2P6xMMhX5P3PYS5Zke7jbzeapoLPJdQ2SdRhTBWTPuhpWGqwiowFafWkftAnEZ9Vk9o",
  "key35": "5P4EJzAskm3Vx98PedLx4QwfcK8g7oj8JXjZsnwS1SEksebLAzETDQdNiiHnmSzcxb9jCeAajk52cxxZcDkjUyvR",
  "key36": "3KeNET3ji643nbdJr37VvwLLaKUpr5HHREj6ySuTLa6PMAwZEAvbku1bMruedu33AUGuGsjhTirmcSgzpW8uRztV",
  "key37": "2jncMtoUfR7Zzuk9fEDjvFAupzTRssBov2E53Cnuof6MSE8Sg2LSUA4v4m19kzn8Jo49F84wxkuAKf5z2hk3Gvyx",
  "key38": "4Qo7CEbd2bU5D14peCanmrAofDkoDA5Xk9nqnYVTPejKMkH4b3cbdg2XMnyPQgNQLinToVJZX7CUGRntguYyEvic",
  "key39": "4NbxjsKBPkb8gppVKxuvGgzUs4dawWiz8v14ncpx1XVctg6yMmYbC6MqGjwCKjwdHbJ3ZQQ7g2kfSsNgqD72RW1q",
  "key40": "5gQAZqvcmMcExtCSTK9LQpdyaRZUZWdMt8pkbTXmxycJU1GKxNw9ApCZpvisrg7YGCSQTUD8cybqEVvcLEZPzx5W",
  "key41": "4NG4ykMTwSnqCoWdyuArxTxU9tta3WX65XvQkFL9ZJz5Go53y7qsw3qCk7gkAUKpHNN3TvzhuzXPEiogCQ6VvUvb",
  "key42": "5gaGKLvVETxLMELcG6DEpjBUb9hpVc7Ypx39bwr5oiENacAjJopJjShNBpgHJDeyzcLs5WmKyipniBjVrTqF4YWi",
  "key43": "5tofUEQtQpKJsQwWdEfCQqb3ufVy4s98Wa5beGtxvtEoaETwdXkD8Rh8TVhN6W7NonfZjEPUG5Dstc3JyjhrHSL8",
  "key44": "2vXCniB7SiaqRLKKMEXyzYTc29Gzp6i8bu1UMBphf9byxYoPh1kUysv1fJ1SoNmbfv5nmgmsSD9AkwvobmuQn4jz",
  "key45": "3S3jrTmwEXyasWriifxKqEpLzxWfLAYh4fvka68trA8h51XWmntrFasLQWR17hNfNYCfe6Q729BMq8F7ERHMsi1g",
  "key46": "3JiubiKcPEQ4CMLjUtCxgNoUay1SvcKSmcVmTsDBZEchBzycfV7mQTTwq6LckPypu8NTYaZrFk7Uh67zj2zVD5XS",
  "key47": "571f3c2HDkvEVJASTCXCPT8dmp98p3QtkVjM3Sw7sQgZ9JH3xTwKrjtGg7Wr37vuapFC8LfhZyfVx5yuCqDFkDSx",
  "key48": "5efaDWyMbBp7jn4VXWWoseSuW6sKHRyJMuyJh2Hj714J4ScgJqh2JRnnCfcwgfEUj6nbYCLkwbikK3NMkS2JCZw1",
  "key49": "ZHEyqJ2Qdh6g8qrQAoyEq71diQjrmtrGq4LCZaH86V52X42gpATDAypjQLwaBHWwdKfsbs6Y6m9C6S9tGMi48xn"
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
