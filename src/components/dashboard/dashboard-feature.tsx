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
    "3ExkVgEWVf4ZQ2Jsk7uMSJKTuaqKvxmK2eDXtVZr25bw2kV88LiTTGR1WxDZGV8Bj7y9a3Si54HmVMrAzKmPws5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58DeikzwfYHrj5FzeXzz8pbyNSdM4h1F5vS5ARqrxrfVib6wJM6nZArnmzRVNDHyfuFCKMYjNbFFh3nL3czPkzbe",
  "key1": "5aV7cqAqnDr1j8TdEmAV1zXZEGg7YARAdVXPiS6qFyQvFJPZVhHSaByYaG8ymvCbESwnm63dNFFLX32n7psFbk2S",
  "key2": "5C5XFFkJsrZT3aziNpmDGRLv1RstzbXJQBPT239jJ5ssBzmu3D2GZBCHN7a9peMaQ7PwVzKG3F4ceHCHpwgs7Xy4",
  "key3": "3zdZ6JNPiKwciBs3M8ZNeaFeFLxh1pj1DKQSn4JhStELAA4fRNvzMNwyqo1Re9zYMdPG8YQ7wWhGUGTbJN6AQTxv",
  "key4": "4Us9H9QP7q3aBzq7xwgkJQeL8Nc9hpkpSBLwkHc7Ho3RPSfxN4RCqCMmEbM96eyzPmUFxBq41jMSjCyniBMuQ6Bz",
  "key5": "5qRNqVcmtSqLczWH9DHL2NrB2a1mauqNc1AcbwkbobTaqGjqKWykQYDRDCBaK5crTRyJAjN4LkhmPma34h4MACy2",
  "key6": "2G3WifEbMi5n7tatHZKhPHrBW2NfobKMZAZd57Kuz3ezkbBoScqadECZRpF5UcLTE79tmnGDdkhhX9WQeckRwBVE",
  "key7": "3AzMfiKU4Q2FF2e5JfJZeqoFi4xJp8RE6ZhGkYJDVrvn5hmSWY1nm7H73NPQpzhsgnJcDoDjrHt3ZGEFKvJBxdTK",
  "key8": "4RYFDKc7LQhEFiEH3ZqPFp7yzorgLkHQBW5JYwGNmCg4WufQCMCVNpstJaVUH3GzTYK4wNFWXQJdMqk1XrmKWViM",
  "key9": "Y2MsnX8RRBSgSyoWCVZEvt5jx4zsoXgFmwrUtkzpUEY4M1Wea1Ao72mEPt4xs81hpn5xMPKh4Lndc4YBJQgRERM",
  "key10": "5a4dkwW9KE93vW8iWu9yLfRcNNqAFMEdSEhpBS5fb22czCUfYEbfGRhxxJvGoxXdfnHsyVQ8qtG4nTHreJ5VJkPq",
  "key11": "4RzHgCDctrMsJXGxLmPB4geiSsuRPrPd81wqjfQVdq79AeFLBGtMD2SpUhGVD4q29zUvDex7yTjXMVNqUGGbbWQo",
  "key12": "5DtEzyYVdyHgG5dLrJdh7wixrt7ZiY1z2odNCzgV55dkUCN7xSXG5EuoKjeQPY3SPC9712BUbhecSJcnk78AZgNC",
  "key13": "5uML2MzbGYtTPn9GRfUoxwrNSieRSzAaETrNE8shMmY26woqa9y3QPu2Rk3aCKDVZ692gFxNuDVKqVSwU3vCAGGM",
  "key14": "28Zge2mb2fDBetDYX1znupcUpZru1ZBoXYcXwBT4hvnHGvWz4DxnCSQksZPL4dX5qNUJg87fVb436C3CVf76pnZF",
  "key15": "eDsvEyEmhXhqzedMvSkgXDkCFQcYwL1rDRCSzFXGHhw4G56emEAq1Tq44yapS9VTMHmeJmDuPWp1XnS6XttUnyK",
  "key16": "uaWRMcwK64SW2VjxgKcY9yDFrWjTKYmFyGU68ohHX9PrwZxZCjWSdsN5MancX7RKGpKKQhmH7gHDe2pD2CqpnjX",
  "key17": "3QEn7iEfwfGbpibe7PYuiNjBB4HhA29h1huVkkpoBzpKmKf7Yvt3fJCw8otpddLP2tm6UZoA2Ex6rUEgDz8AryPa",
  "key18": "4ycZ3aZQqSvg6sywdNLMgsug8y8B8wRJb8LVKpCwXQmv6GszWtXqMcnDGQ6bErN6rebECb3apJBjhCHQidvdaFAN",
  "key19": "2VcKnZKRYRotnHfckgJ7NpFa6GGSZRjVwJDJXgnF9FQNAMCR8jgutUtQhDuXU8YraytY4NHydaL8ebU2LBqQpY6Q",
  "key20": "43ruzBnNiB4AiyfV8qL74h1C8k9JMGQT8x6vA3R2vtia7Q8qGNy8nDWS8z3vtCbSJazRVLB27Yvv8u8JCC6Pb49K",
  "key21": "4oiPjVv5W9yoSTPkwR9GF7tsPD6c5eE3jWwA4uoBsHAxnpC2tvxvWVHmPT6iYcbfW5yUzRt45avEnzr7YDuytxhs",
  "key22": "XXkgwn9YZUHvuDYfRpAWua7wxFPrnTTHxZVcPJiVUj63yF82sKZys2zU9iP93p41McnGqFHYprU1SYjXHJStSQv",
  "key23": "7u435v117fqTv5tDhpjrJXEVygbVC2uukB99hT7xzEri3995GZDwcfp4akxAykShtCbZ6sh4kwDxE44Mb4xJRe8",
  "key24": "54HsMNrabExZH6ubrdcqXNMcpPux4qSC7X3nLsv9PnfJCE7qfh9YYk8gfdkXnDi37CPK6gxhiQWVDmyDk2e7AyLV",
  "key25": "3g91YWMofCCcjQYKxd78R6HYhzrZQCUGLNE7f33f4oGPhntmLG6ofqX8QzU8syyz7KgNeoxJTq3avNUXgYyVPgTB",
  "key26": "2apbKVm5UR4rets66s9xraCHC16cCRrior2RaCsy8yUg2ieC3ZmmUZjjCUgZoYssuYKbzeKVG76e4sDJ6eNh2zMu",
  "key27": "JwXaSKghZDXNeaLRZ6cmSdN5ZSr3WtPnA8GEZsgVPm3K6HeGswPKPQsMhEHANdEzUHrJABq3PwiJPx5NxS9p7BP",
  "key28": "4M4DSJ4xprhyZwDvPCiRBAhwg1tsnDa1L7J1oRuc6xdk3rrohANo2BsHJsKc6oSEMoLgtMKYiaEaDVqNghdrpYdW",
  "key29": "58mtL4bZWMjfL8gcoHpJjFhD9S9svpoKERJ1GisZvxd9zjD58YdYyt9v7F88U57Fz47TGhkzzn3afKLkPxeYG56f",
  "key30": "4bX2YrPEYdNRxTrnZGfnPwsHwfTqiCDrPjnAifK7UPmkBBuUDNXRswxycx5XpBph5E5EBPiofZ4LAtMWyBtur9Sb",
  "key31": "61JN1gqcARNFVaQQdFtemtYnWNpqjuCDAprxHrW3t2H8W6bjxZn2QQqeT3uNrUszDPEFF32kcucCCRR6dN2KHWy3",
  "key32": "3cKSkxcJ9JGjSbmqEY6WYJrmnSxVdb5JaeC5SWihfE52Qnoz6E2wp5GKmfRU5D2xrLe8KriEkuxVeBkJ6aT513bJ",
  "key33": "wYZF3uU8edrjrdJchrZ2Kzhmz1B3GDcsZXTqh24wAXxNBeDpHLPJrStKTMackQaAPMp7YRwj2DxwzHxK947agaB",
  "key34": "2UJAw98wnUhDFoRNrXPimGEfoSSWTnFSVjU5EZEhrHEy7Af5vkkyodrkNqWTbudgK2pfhhphJAP6bcSRbfRuqART",
  "key35": "4dfsBYnd7RLFTgDZ8tMSiq9Fm3bJiNfLCCjQAoLFFjsybcnbQf4F2wTtZBmwi7Mkqo52vsVk2VhSEWgwficUFiCx",
  "key36": "5VKVvVm2YeX69oWN4B7PjSKay59HhF5LTB9QS7Nk1U1WfTg5E7XSk7vsp4Bxv5HwATyutrS24wT6J2fcsGnyuMR3",
  "key37": "5nvQHgqHZRwUnDfNBXSZFc9BGHVZARB4k67CCBCdqVsKXrPBkzQxBmPimBuuEjEKd9HQ3JgvpKH18XBrpYD8oyPm",
  "key38": "4R4gujSyf3kNeFL7CdKHbRDecMbWqPL7rHngBmbgwPSPHtKetiT2J9GidiPAxjnroyL3Z29vM4udB7fNh3Y5Sg7b",
  "key39": "5Yj4axkKPkSFT4Vf72QS4LTDPg24uueCS4YTKBSquvSSZWakaE3nhJA8NdiH6NhgSkmjHDbrst8YU3xqTQubbwFs",
  "key40": "4JG4kvmV2rXDq2wR9PwSG9axtBEtm2vtfWaCNdSaRTvmTEov12kqirPsBu15dwZjdsgQJQhygATxzU5HU4h2CmZN",
  "key41": "3YRGVc51UYGnH5PoDLfjzSTu4GTyFDwdhRdpAcRkASuBHGt1ZB3chwSgV923UULwMYL6zG4VfDs6S1r5KH3AKXVP",
  "key42": "4M3EDi2CcSqweHAAMkjwkJvGH6vAkzrJFngoW72TZaFgxq1zh8sM19eamq15Ciw6yf5NTA1KrJaBWPG1bL9jC6J7",
  "key43": "4MyTuq3XCkrZrWppiteqjvtrW2JgdmFXWqkGBQzJVXgADuZzfUJ5rPXyY7gaGuVeRtPeQhxNdE5gA9mv6Ny8dvu3",
  "key44": "5SjDndVoonSjsNN3nuKrfPnKWGtZeZyn7wwinroDtp4zKx3QYETGJTsH86UM56VJBUm18ZAbnE4qK5kK6KYRiF8E",
  "key45": "4EQS3qmo5TjaapHEoo1uvDJ6Yny9v7yXoxU9S8VJ4JSYeXgs8HE5C1qXhaF1aKT9TZaHDf6LUEDUdb38Tog5EKSz"
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
