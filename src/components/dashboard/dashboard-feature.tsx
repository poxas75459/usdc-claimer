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
    "4F3YahCdY7CP5E4Ag8D3Ss3JaUHLLpgfkejTDzKSrKxW9UakYcnr3ff25dWWRiVynHpvLELiyiGDMpugnrvVPzwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26jgtCq6zVybF59VJ9UPSbdc2Xyc8nKEYNFGKY3yjMzcV7nz3RKgn1MdeVUmqMBF4s4oKrJHDPYAjifjg6VkQhXK",
  "key1": "4k9Qdh5J1Y1QQKHxZ11N9zhuRGJNZz65WNZjRvEsraYFABchANhiSG1AMeL48XQrYVsv9odY6Df6TiDAsspM1mMU",
  "key2": "4yU1D15k9uiNQu9JkheBC7ZDDJTaGng7LALNjbGv8AnHsLw29SYpWNhcs6ihS843rLiTB8CG2wfa3Mowo8STLA3i",
  "key3": "gCeHnYsFeCcPhbhB9TVLhnzdKXMM6edJbMJpPMzr2TeG8CiijopcQyLXcWZAjv5Ta1AKK6RjojpW1VK2WHed8GK",
  "key4": "2J1hjVYDgBGsqiAh7QvCCjeFwFi5vpu3vG33k3W78jZ5Sn3nwTo2PTXySjuurjfqhEzs33QoqqsPY15BXuAQPRoX",
  "key5": "4Hjev8a4CecABTsrvfD14VTjoVfDRob8FumtjrwLomUjeAk91hcpy3U52mQFujcEUcXaqp76TqtLjVMjcY2yn7HG",
  "key6": "2TBkDrtu7kqh6BCKEUxBmtgaGLMydayZHqbSqMTz2Qc3sETZQyTptTHAYpiLgBUydEpKbbxLZiqiBPHrZnTwKyPC",
  "key7": "48ChGcCJyyvUE6BJDp5DEMG54DM4zijc8CYUZn9FPUJcJLA7MpkBWLoCY8midF15LR4ywJYqLdAa4wRZD4JPnryu",
  "key8": "2FpQK2HF1ncat6C6TFCE8sQGAeAEKK3z6gRxJd1HtoZr17kxC5F8bqSit9Zp1vDaSYrXMrGZvhSRf9Z3BmtxprbT",
  "key9": "2fWJM3uswW1yk8f6em3nWuVdALE9SuPCXJq546iuMnqpYzbeAJgfjrYXzM6vszxCHJaZdcocEPLD4cdQFvhwjEDv",
  "key10": "2bn6B9UvqvS5XTNoxjGs61ZNdMTCt14v3GXmoFh4bQ6jaspiWoNZzkZy7ZieS3PLP6yRjdmktF6hLztEYBenb5qG",
  "key11": "28Bmi3utGxExaSRuMDqC8nRnkZkbNgVBH1yteKh1N3jip1hq8BKcR4nm4Cu63884jrDfvYEQ4isAsbkNxrEUZz48",
  "key12": "5RxeJTfvWUQoVn3n7NVbrG7yRN7aytrkRyurfX5Pe9DjGeA6XMZypj3SrCeNboZYF7YRLEdCghrPme9JHxBDNTgh",
  "key13": "3a2dffoVbQpXAxctajL5M4NAanr2sHztRgNY1iDAfjuhoiEohS5HUXv1wucGbNcrgAqjdm4vxoee5Feyvtk2h7jY",
  "key14": "4uKsBTATY97ep42XKKoZaCQWkYnhDK1rAUa5UrZ4Mv3wYjRkGLTJZE7Yd2W9ZzatHigogu2oRc62ViNjUSDkPT2f",
  "key15": "e1pnCouRdXPXh2gKUN5AZdctBnj81qBofmSanMtUT4zNEz8ovewdNxoEa2FGV3B3smAx1gRGCZhZZq5x8Y5d3AP",
  "key16": "4xkx3X2ocMq9xnbUNnqj2tWzQcjoNMemsQbHS3uR8TP1Z2uBLTg8dTtE4nz7qCthhrXbzr7vrQ3RfuRQYTj4X3P7",
  "key17": "3dmxQFURip2aXco6NuQ8oj5pKgX2WfPVQE2nVdZky92RMyWMTick4n9tgaXsaEnSCZvz8UAqjXkpPt2XHJUxguhc",
  "key18": "4qS4e56t5UfqyRvZYvV8fHYFMbAJsLaE8gwwLopbpL7sCN4srQLrAiN7cqUMGMSgdRqYjTpxfu8A9o3BK7HFs2zE",
  "key19": "2n4rJ73m84dMoJrk7hjYg9SJoLx2LHTmAWtsrgJcFnavHSwh4ayWu1mcCRWuCXu8iKGdWrpNo1R39X2R12jUw2XJ",
  "key20": "Dd3Bq1KiYLNLhaNKDfwZBNMfTsexpQey99v5njLnAUmyqroq5NQ9QXo5NWJovqMrjWtt6FmPMTqQBrFMNnVitRh",
  "key21": "7WK4wV8PhasUwNsUuFG7wNr7ukcWLRWE2Yov1KYLVHxYfr1NcWrjdeq9aGXcSKBd7UW9jKo3b9vkHKLd4FnxU5u",
  "key22": "bWKou7hW3BwKsGfuxrNAmDFJ5VuVSd2dSiWnUKhRk3i7D89AoSCcqsz1KUFkzCfXBLwxiUetPvaDgqhDctfLZCv",
  "key23": "5PqgVKQwn4NxMLj3kiGMQ3iizyv96fKY5mihWqkKtwZKuXjy8MSKRUK3V7a8kaK8pumtukPqgynUDRQiKRKUdPkd",
  "key24": "1eWuNkpud3WcuT9nWGWF5EnTybu4nAf8FthNwrkQX3we9sU6uamNLGTGRsKy9TvppFW6zcqD8C5c92T7M6VTzkS",
  "key25": "URpxZQnFYBzCHYyxU8q7dxvmiy4ag2UH3Xhv14xhythdnZ9Gwg9JQJ1TnEBhTdYxbgR2jUxG6DL9cmaqhoA9fDL",
  "key26": "44qqcfB8D1poHFvsCXcWp5iZx5oaZRHC86RR3jPGAvcyZcni1kFhx5ns8JPPkLHyMKxWVJVRCv4GoiRPKJy5nDok",
  "key27": "5PxhvSw6hcVGvjHpKosKH2n6h1AWK6MgXeYcQRG3cnNf8FmLjKPMf1RTPZoQQ3waoGgRsftgLtmGyzQotEoVa8Mc",
  "key28": "3P32RU1e4xYzyFgQUXhaciWSgBYqEEF3DFVhqaPA9YRjDAqQpeA676s2JNAyZBPi3uCyB1rQrTRJxAHoVHLNMrhK",
  "key29": "3rJMjU6m926LZRNEnH6TvYdB5qWsidBBgUczzmP52NpHgQUMxH55MnidQnDRMSZFuS7DFQJJeeeoBHYNvYGFq8Zy",
  "key30": "3QtqpGt9wGWKBaPZDhH4FRCwN97J1M3CjVw2DMQLhcCiMfVz3wFyeqDXXAUFF2AB9mYkYnV698zPbCKZGAj5xa6d",
  "key31": "3jobR5RZrZD6D8g287di63noGTcxYMBsXJwFYot45tAi4nv3xZqA7iBupVMTcjRWhdy3UWvJ7Be7TuwSKmYjKbST",
  "key32": "f8wWfLYSocFTT4Skwo4pXLKtA65k74ZNLHLbsnchDsDmH629agAJsAH9tbQDTer31qogQ5G5ebkAGNfPUZ1fFrv",
  "key33": "5CnqX7uCq9LHf1gVJukarTjFXh6XqbDkgNuYgxSqtA2SCrSWGSEYxp5x7sQYGnqM2EVqRjrjn6hkWJh7mrbpH83i",
  "key34": "2Tta6jN7Zf3ggbfAxTCJDtPrrSaXAUSNmaZYLQbypcEtjSELpDUVb6Vf3GLaXkWUmMCcBZiVFdPB7bV9WmqZ5Drr",
  "key35": "4ZKBcwRygiYY2Ed5ojhjqHrJNTab2qWBUfaHmxw7cH2E5dMfLEepyd4wzo18iiDTio2pHk4VNQ1CxAETrbKRMAn1",
  "key36": "cqn1Hgw1ftkXwABwn4mfXCUR1VXnRC2PLukYwFtSEshHqjC2xp8Excu2cC8vm5F76UutNd4T2d8Ahi7tuUWxax4",
  "key37": "2qf55f9Nmzu38b2UWMcAhJ3sgWVdhBPkANErQZ3aAQjt9soRKyEy19oZMHA2nLSxyNHVWGQDw4mwKUqFNcRsNVyh",
  "key38": "2iVJvy3eQhsQadZ5QSFTJevWFyab2WQru4nVoSHzutyzcoTf5rKh3ofmKddqBwPKKaviCz5Ck9FgnYUWsU8tvxTq",
  "key39": "49QJRQZG7uaJczamLPfzmwFWoPMQvhLJRafpULCyHrHivx9yx1NsaUeyFRroHVkeT2NUeKo82sQGWcxwd6oxJRVs",
  "key40": "3Y35A7xSgeoDFwk7fufNuiHhTXCeiYfBpg7cNw3Wuew6XmCHiysxcpzbJZdhPyouP5KjHPpX8pMdKye7zwJS1ash",
  "key41": "3ZDAa6XhqumaLoWCTCkRAXP5RwGuhZgUzKusyhdfhoejcTi6dXhsTGv1hYhyFH4MoYxRdwAD51kPbW3RUMhr3HW1",
  "key42": "3KRms6RWU637V92iqcBiyG7GacjhQ3RdFvoJFcDuASjRTt9fqcU8q5meJnec3oRbuydqXRJRnMzjkEjgx4L8kaR7",
  "key43": "8XJnhpZzgHcNwF1E4GxyZJjnmDT3sFsFokLszype7hQJEk4ws2mnnkp3KW4qDH8nk5uXUmDfTrPpUZVYDxe4Hw3",
  "key44": "3AgYz2yu9zZUZt9Pfh4qg7VSmH23iEx7GFa88Q45BHtpgqhDzWicEEYMGsDdJ8ei31ycHjbT3EVxnLVU1fnqNvUK",
  "key45": "4GFZ9Qwmj2Ap3PfPCw4cPhEEZJwth9HyyTwcT3deenfj58KXRV17T3CmHSQTVPPUm2BDfEaResaNGWKD69pMXH5Y",
  "key46": "3JAwz59XghD2KTVxs9dGwLsmr4yV7RBvPrQ2qz8wYJKTmsPxNFYL5MBgj9PKs43LdUwssoVi1kukDWV37w13owrt",
  "key47": "5DhRPdgwmVVNSZwoMfBkF4qwjynMiELk37Xwbeuj4ZVetbfCLNESRVCdcsx36sCtPwHegCrejtB2hMUTyQKgBZXQ"
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
