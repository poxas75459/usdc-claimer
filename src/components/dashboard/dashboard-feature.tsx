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
    "5SD7ZhueTPNNTPu9aSRQd5mj4obUsfxUZRMrzB22EnpA5rdbikuTXWF1kgwWeMjrT8ELJRJjrjRCxGr3GFzxKahw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vdQcwnW44qDWJeg5S2vvymxiT9o97aKwNtAs8cDpeub7FpNx2DJW9y5iu1DZJfdfiTmuNqTCwkkQGZi4EBcYuWN",
  "key1": "58vF7cJstDXzVCYsjEgitFT8UmnZSUxj313PraSZ419grfZgWq5PvXnboEf8WyprALU6xvHq6T5P7GFFQHYWJE31",
  "key2": "27sHsKqhPx9nwec3EpJz27FqwiAV94D9wuky2toZMoyqUgq3DVQGSXR3UBXpFkjAB8afCFUenT3KZ4PXLaHbczCp",
  "key3": "Lg3K5PraK98qNXKX1iJyxoCFmXdepJzoHFAWmKxzugrxXq1kHgxNGDCZNm141WN1fhEbo3rEUB7WYmYDry3F12T",
  "key4": "4ggfKCzCxcXeTxzERzfVoFmhuXFqPwWhBAWrHbNhqmu7TJNfk5WRPQw5vSLN4mSBKWDbeNFawa2GaKb5WHmLp3tg",
  "key5": "315vXQ2rkmDka7ho4EqMGsxEh44TQNvrQHKrwqLz6phZ3HmVR2nL5jJeF1xkEN5iiDVp3LzuHjbVANhZQBwa9ZoA",
  "key6": "KVhkTtBDQTSXzkZ648V8WdpBUphBDhZ99wdzLgtJCZWT3DuGP4RnKJEHYa3edP3Z72acUttK1kvdftDLTsh3auz",
  "key7": "BMdrn6Xd5tAeH5mhfpgUA4gNQVnEw7zc3LgS7sWX9rXCSs81cewd69V1LtFZ5XwGdtRL4YXb94YAjDf78MZnaxT",
  "key8": "32LdRj18VXbRHGReVy9e1tomsmJWkaLVho138pecRERXqJzVMZDj5qxv7SHoJQbhPXJsZrGTTeYNDzhVhcxVQrkB",
  "key9": "ZejSkqXTfmrUXwz841k9dbpWLqAcNV1GWzf33Z7AuTt18FXAvVtzYQmB5bZc3zyroHcNz8EfuFansvngQz4jfyk",
  "key10": "4CeMbUvkQsrDHuFyxFZchHtbvq43KXFrHSwapvVGZR6A1SNhzedYEtB8MXJtWuB9cxYos1a6uWvAJQSGx4QnbLwJ",
  "key11": "3pB6JERvJhDHSjp668RnBhGRvtMzVHMdE47qGVh2tCfHfBh7KRrNPmqzTx17yGgV3ZN5TNieCUAzP5J5UBaptKC4",
  "key12": "2R5QWfnWwWap7xrEkV94Z7vwsg2Mcd2nfWo35EYeFnUCrCqZeafGYqTY1TU8HCCPicswAvLpLpJKFE8N6UwLP99d",
  "key13": "xrxRn4cKydMYEskhQoQP6SVkexQnjQa581NaZpMcpBvuTk8Pq7GFVjrZCvjHJAunq1fsDZKM22Sh5kCtJtnMdKa",
  "key14": "3DARF9oWKX8TPEDaKv8rTYm9t5sJJxCt2xpXWYnEvUhMAfGPjwqWAUuKU5FrZrRp3phLeqhEJXaCMjmuTX581TTf",
  "key15": "5iXX7spXe2w4rPJGT7c1wjXucfaN9k3gHAyBrfCaK7z6oPM6roALRNDdobP5iw2wLEPdsHp8qUo89C6N4nuFp6uW",
  "key16": "ZybQdmjPubFHM3uvTkjNNt1msPFj2aXLriuhcWqqeSWsKRrzP6pjYuyxRHeQ9GYniegLuMXhSXeXiARJgrQGP3q",
  "key17": "TcQj1CwpDuEmc4688aToo7gF2WASb5xYocnxbtaueGLx66VwhA17QbmNk3j2mRckcry4R72Gybn49rCXt3TmxU6",
  "key18": "XbwbQFtpjGeSLxTprCp5NHeemXLoFF5a9Ux9TQP8YNMrcVEt7MC43DRss4u2hnr1zzMqMEquWWgmyV2VnLc56BL",
  "key19": "5uiZqijonvg8ZFtoG47UapzTsT8ELp34MGtDAauUeLH7aL3nW4d4oZgqqqXK4PGEeZZF2a71cCqBqbFrCKPg4tdR",
  "key20": "53eSrjKzvAqj42d9C6x7zMJV3szMsMxDUUiFMpyu6kz1kPGjcb58MGmePQJTw69kKRmnaDvxdAi9cDWhLMvtwCMi",
  "key21": "4iphYs8FxTQanqrkMdcWV83DQWXuyfEo7SapJEwnGvHnxXEqQ29LmZdJkqeM9boggB4xQW5WxEmf2E8ic2BvfwNf",
  "key22": "32v29HcEHSEur1igAspoR1iu3pySKBDYXYtKNphdTgGDhwRm15Z5Wkg2LTvRhyZKt6okj4CgAxTYmwhTF8B8WqLw",
  "key23": "2uC5RG1sDoG1coV6b5skyH95zdDEdCjo8LHSXEbN2x17ZwdtPVDHHmyoPb6XFjDVoz1B91HFzyPNxRmArwRdx2sL",
  "key24": "2z9LpUwKx7F2F516g3dSLLDVa9tWrygk7kFAGmsZB9BwemeTrc6KTct8cLaV68SHaQXWyBboFbyMbksmdfuinfFU",
  "key25": "2Dtr5VAosKzogGb4usGuEv3SLEtg7Evdu5RSZN8T8w5NjBvWZgDzgVmxfgJG9fXkYbLqYiBWXYoM7bBwz59wDZzA",
  "key26": "5pNaFnaLNnAr8AJeUU6A9yEKsFKehcot27EAqqWoh5piHynCKgJHfdpwwzmzrzwPxSmDKjJeMqUic5PgogY8XGC6",
  "key27": "46T4tbNjxiL4L7usKeKBmy4uyKXputdrW2FMcoxFWX62k2RVTsAriGuFjFMLjZT9VnUyy7xpyDtgCvBgkZyuuBse",
  "key28": "5a8afmYAtyHxfauSBRtwWJxCuHtoHTfw6KvubxFrpk5wyi2fsWCBMnmD5uXYoMCNSphSSqTGTkPF23TNWPCeB21r",
  "key29": "4QkaZZKu8bFZmZdftonS4b3NXKHKzvxkgn1eFYBkvmzBmoxd7yrkkhFFnQPcgjNcjLgJmZZrAWTrbWiBwsf1Jjap",
  "key30": "5VJ6Q8M8bDSNMiK6dVFG4kt2cPpv8QoEVQVUpGsfRrybBuHW1Qsm7BBJoKQcLfLXLNuR6bW6jAecGhVsse9Qufbp",
  "key31": "AEb3j3JLFdqkV8zHGo8ymYEvi6a6GbhjytL4gCTnaQGbZMMBTCxAzDYVSc19zzd3scieUPCwDm3wCV571zThe2p",
  "key32": "3FTaGaEfCMEeN9k6mWotbWpWsyN5QmRTDRga6YiTcuJdYNNE3gVK3Kh7AXyv52PVxWyewuVGZDr2oVxcxbGgDodW",
  "key33": "3ezub2ErCdU4XeT9GLMm8RB6xUg7hFPHSZ49VE4HjoEhBc1U1oR6jZ1YYiseUvpsxGvH5ADeQMDkSvu8Fg8LaxtY",
  "key34": "3UrFihHzps3RXjjh1WnXvw1nksHdBWMhL59Qz7ZnHZG2zsuvLm2vnzMwe1BJ7pHqeVBnP7xtnwKNyAsfvvyRzT91",
  "key35": "5CURzh1m3kWUcM4FRzWJYFA4qU5bpGnNDmh551VesfBn8ydwyBqG9FUwF1ZWacHsgY51BPTxTT7XcUYNBNubSLcF",
  "key36": "5FRf2aerLD6hg7GyJ8goB2VHd189g5vm19FpPVCM78bQdqxMYtK8nPW7hRGZzv3sNRt1vaYMtg3r3n7J2qu856hx",
  "key37": "2TXPUgLZ3G3bRxsJeVFkXFcoQDJSWvSu2JZGamZNTCUWb7pxFbvJTCUHsXUauYq89DT6X5ncWrTP1ZopWiSn6Ass",
  "key38": "51y5L3wBPaLdCRnkycXMAiutHCCncxBmBtcEwu998fCQKfVHGnXhfUySyetGPpueFoTQFQHPCp3wFcZrDnPU2uKN",
  "key39": "3vi9Cy9e36KPEfRQxY3C2anbsaRtTorWG8ajSPDyGVAG2hU2N9ikEc3FGVzEL5VUvgyYeqRaa6zYAW5icibc8xoj",
  "key40": "HgSkFBwUFikEjLcnPy3Fr9sfK8TxEE2u5wzgLyeYx1tFZsj9PcKvPk1gdDkDhRBbhvUpWXh19WcW8DctJaNRWuR",
  "key41": "3Ca7hsaKY7Uhmjxcq3Bz42YQ2QtSP2SqZTwuHqBNnDXCGQJPaZ4o1Ld2cnyCMYAKMctDvJHbSFqnHKByXyFTMvhN",
  "key42": "3ASmHioBh5rCBiezS9bBgjGvCSJFwnsvVDVG8BPwSLgRo37YjZn9Pigg4wTj4JCABXUqD97i1EKrnWQkWrdGxV35",
  "key43": "4K5LYj6epUUjD8dyjjdNRMVpYDLXamCnzTARhRTY2B4xUgHn6NgLi8MGEN14AJyjHso5nPtbym6N2qcfvh6L5NYR",
  "key44": "3yQUUNuuJ5PtEKiNvRozrriXsFUkcPhDu3z2LnmwyFKLm1aDLpAVRZGgvFzYXMNJSReLsyAv7zoqiPS5ngEsfKtX",
  "key45": "2U1sdbrbXTTZZ8Xq9D1oU8P1kC2FCMcdC67kdjQRsSMPtS6MugVHH6MWJbJvyLGy1Lv3CHiNiD96DGmXhaVqWPV",
  "key46": "3RKTjPsPAPpVVPJC4hf7JybKwQwUD4tsVjcq5c8x1xeSyREG1YtuaFh4gtJWExoGBJeEent7kWQokq2wJhR7Y2f4"
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
