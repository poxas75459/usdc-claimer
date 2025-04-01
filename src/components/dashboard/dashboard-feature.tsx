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
    "5jMnRDXc9TK9mqXkVv8c6yajhjqXcNS4m5gmTp6tcu5vN51bD2fa7wGeQVaVmZXG3pX2oPiC5YoCbeQ3V6GaXm3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zvsw1qz7cfXSishsjKteXRuRXqMnnTESNMLVBMzw8CZ6SJVCShzpG2fmmDW7a53SQ1RhYd3oyaPJzZCKib9c6M3",
  "key1": "2CqiLnYbAHpvw2ZYY8v6gkBYNt1MEXTGmp13PpH9vZS2S4vBpvfqMH6C1uH8MJ6q1awtit8kHjaQA7nTZ8kWuwgN",
  "key2": "4k1EPXkb8YDcY7Z1XUQYN3GBAWmtdrd9s281JJuZN69Y9pogzwbRBZR6QAhaWdQCKDnnVuoZomKHMf5a1KRiamfH",
  "key3": "4JRscWxoWfwnQoYMQhSVAwxuuatKZiaRyn2zxfXTGNpJgvQU3UDa6iiZsCXxwUcrq7xthCB4pdpf2pCLMNgSdW2Q",
  "key4": "5Qtx1KuGbaS4t3a87E7KjKpCKL698cKFFTFN3NnPQdbYWg8eMyaNG65pxAGfnvcTqezFroVzm5oCnfMYgLEYSd9v",
  "key5": "2YJQHc3zUaxCBQQSKyjZyRpbmGVzR355W8Z47bNzPz8Ncby6Css6hNjZDXZLx4nJWjShEhvdZfCWfoKLADZdCP8R",
  "key6": "3cgmByJJC9gKkbndsoDQocpFu5gFuTMkKwCM137NXKGCDunnV6w2uWU2WpRRtVMrzoEmYRw34QL5sdjfiQ8ex4tu",
  "key7": "5NTCTF5CBf3cs6ip7TJoeiyeVei2djDJzMC5tfojVm2hZ5KcnR9uWrZFTP7bhe4nbMk3xGQPRMg5BnoeiBWYevnm",
  "key8": "2yKCsNWS4VUzw4v7yVjmFdSZDVXespPwA1N8V6i9Q3pxAU7M8HMTR7wHY99q59YRVh7PtrgVWtMXPZJvpRJ3brEt",
  "key9": "4VCtE94rstd2Wj6kqvXbqVgN6M4FDXxowoXYZ596H8xXNz4bkcWvUNv22Sk2oMWzvuoEFWhvXoJVtZ4FD7NUDx9z",
  "key10": "2Qowerm6nZwbxBQ2W8vVriSP5M61j19w1bAQ2acUR2iySLWWH8SM9MQvvGjXaS8pv7JmGfAh3vjxMoFC2CvjRoHs",
  "key11": "cWXwGZpMgAciaihS3VAJkvQUZcZ3BnceZ92UGowLed9yhNBrU46fnbv5h4fpYrPbBTfso7ovVWXVjvQjwCoHu3F",
  "key12": "25xcErCU4xMMe56iL6VXgpr4kCHhSQNxMpSSmbVh3fVmjJLLovywYtUWtps74CV2B555uFnu2sf1wXXsX1mbnhEk",
  "key13": "2rNfHFR9pMNWy8y7yN3HED99yt29gkvLRTxhQ4CXwUpGFpfeJHtRSZ4pjnav8on2aZKZzFg9sReFqdtBbGMYLQCh",
  "key14": "5Kw67JqhF6TwTRnHbi6F3f6RGS11WPQQ7g82Po7Ykjjwx1PKSgJTdLWbQLpRMqZpMJHTcCW8sqB6e5VjJT9aZ5Be",
  "key15": "2iLvWxneaJNPZyMx1bQQ8rHnFom2opFu1WXpGcPQiat7S8ja3SjXNGT51P4WJQNQW5uV1Rt8nNrZLbZyhR3sBFHo",
  "key16": "2g1b3L3E8vnx9vWqF1C7gN2LwvbAwnhuFkezH6uVKtmxL5xg5teztcaAXLJrcaosnkUrNvCDXfKtRLybVZr4zL2Q",
  "key17": "wPPeNXeJyu8QwF8dbNqjrvXmxpdexSYTRNtAooTyHZjSh1r1ZxE6fiE4nvCYqvaWvEqp3mcUPha2Uy13et7JGS5",
  "key18": "3kko7WF7NYYQN6kgN3nqSr9pG7BUTgWbj8d7LJyT5PBTnphpdM36pjVGpZibsFVgsR8Jzqxw512SF4g9jV76A8he",
  "key19": "4XrvasCTmEMfnxoXxFHuLdWHobhY8hH451Pwaoc3wnKamftyQqUHK1ZBiTZ1pYNi58irGT9d83WET1FaEPkYxzBt",
  "key20": "5MPb25He3FD453ksSPgnh52Boqazmwfw5VL9KyAVyfng97vdgiXfWBMaEPz5C5rYb5X1Hg3sPu3mc8NYGYdyNEwF",
  "key21": "46Jya2yJaCzHYsDzn8Zd4aYoZqNXC7JqtJspdPSweb2oKmvzWUJzRg1rUNSAt8pHjsBWZk41Rga1m7TYsoNSLREm",
  "key22": "4vYQQdnoRXBqUgFmwrKamvUjogXsWDY566Jh2V5iasm6Ru4c8v8saENPkDVsMDuGvChPBz2mrHn2SxtMaVtvacbp",
  "key23": "3LabxtH1z5iawBopXNTX6zKJijjdCyKVgHGz5YbbykdutpmnT46FechxzfnbfBuLGJPUXxrz6XiaW8vxp5MLigCz",
  "key24": "2FKK8SBfodQnCHzN6a3w2N8FyJgJtSSPT1cQrrd2s8jxZRWinMA3nMcYqfoFq8G6sS71fXtjpwh3nPjoADaC23Ea",
  "key25": "3fuCLedeRkJKyYorMvTPnQcwPRkTZPWv9CkUuYANgdkkXsnSbbavE6T1D5695Nqe9VfjhLr2TZVWrroQstSgDztN",
  "key26": "5xWoAihYRmuH5CtZ51Z1qHJzzGJbQ6rXGCayzkg7reTmrR1jceymFDaJS2dmAZ3QEkbApE8Yk5u5q3qfpJoiFxhc",
  "key27": "4e6fiKZfhh1isZEeFZ1dWTwGTzTDQEanjTttDGte7ctb42WFKLv1sBPeUqDhgANcPe34uNP9hkyZPw8o3P2ovCT1",
  "key28": "3b9rfG9Uj4Z3rqH8FDoEQcDwFB6TCFXu9QX26hyFSCBonf7XuXMRbAY2NXHhMX354tuBZomeGX4GjGA1z75UEZBG",
  "key29": "5GoznSzqcuqR2A1831vLgtFr41gCGnfmK4BJBrQW5P9rmPGkGkyE2LU6s1HLzFCsJgnE34SUMs35cpGVTCs2LV8t",
  "key30": "2xHCTmpFxDKYEUCWosLcD5wQdpqEmqSJuLMcp5zsK3Uiz3VdgcZZwJf1BZmrMhdkYWq3irDQ34kRvkPLP51k49tm",
  "key31": "5SoFPqdAXzU1B5W8ct3xcYFg5G5WtMV92WkgnqWzxiY5XYs1Soi8mxmfNcPtDrSVnqGitvV5WXHbsQSZ23CNW6GX",
  "key32": "321Ef6BhK6bzjzV11Z3nfcgTqDLMdGxKEZuoTrZwNuNkCWxQAeDAUj9dGJbQQP8we9dSA5TaMHhm2US4VzWeCgnV",
  "key33": "49WCfFvjSzThaXvj2YoMsgWUjAPeLLZmyxFBHYpuLfnjxbYaXVdhhezwdW6Hvy93cwaupYMPgcroJZ5zzorxQL7E",
  "key34": "5sM9xjS9jYKrFvNFT4R7UgE1Kcadoy8f3J4nfsbziU7w7rJ7VKY6Rzoo5a9EP4Ckjkk82Pbj3DjhZsDiX96Ne9oo",
  "key35": "5QQbM3MJQZjrsyPnzKepF1pyXNApfbpdsbDzgskeY5s1RP5qfk8ircwfFU73CzPzhWjMv2oUusnjZZCtpzzrn6Ah"
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
