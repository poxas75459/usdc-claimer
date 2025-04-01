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
    "49FH7YRwyqpnqaX1MFh368qUBCJcpnfszqExuGhXPwZk6WQgj8hVjv7WYKEqNhxDgJ9LQ4cSx6X4STXCYRsVu1Ja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eWwLorGJGRfuVWmtS6Q4pMNemHiNY8VYbmM6NLYxiDWuAh6rd4BTZsCvRmbAyy6MsonPTvdZP21J8vQFG1Mb6MB",
  "key1": "29KNQgfWXDLLpwHFP7TKJzqQPN6MQoJC5crSsVUoAzu5DQxnwsyvdgDc9KrgpT4Ax2iXuByDyFGoTDcbx2V5zgx6",
  "key2": "26ZqLQBzrzEAZVLU4obhJjbLpyJtxkwbyqmuEpy8RaKYXGhoa6cvkx7mnszxwvjAVDJvSimvFJ9yP3fzro263ax4",
  "key3": "2gi5yJH5Q6Accj7yfj2fMfxA3XpQKoNtvunLhp6oWBmaqFawA41cPRNqjVqHKk3FYM8oqtfDeP3tHwTpk5UaXXBi",
  "key4": "23zmT1nMAPZqqGK8mwEngsA4hP3KC6WXpGexBzGSgqsJ7WQ4gKGatqFkHV9wVnMpaZBvxbAzWxkC1VXDiH6rizjz",
  "key5": "4eLAxG6N7cWs7Z25Yry3xZR1o3gShhVBGe7C55G6fFAVXDUmZxdsjWELdgo39TPiFSeycFatJQhzUL2BsudVomhD",
  "key6": "5y5HfPPjBvKfgxa5nXpsoJZepbJppniNtHNptjpSWcC1ycRVokwpHvr8WEZcvVW5by1NSfjJsXzk9xuiY66NfDFR",
  "key7": "2SA4PmhgbXafjKLwsTnkcM4yMktcTFXwuKym2y1VQhxhDDMtmu4ir6zfUHEPHabCCwrQw7azEE93RBfXGCS3a37U",
  "key8": "n7qDTeCyuUocSPpsq3FUXofUZePitNgxwvu9KmJWd5G9yEF5pGLhUp8sJFaYVX9UZjVvx3wAQqeEqhJRvDGcpV8",
  "key9": "4gSMPafqsQBmqKRbpfhNfS8EVq9qqQeR17YnW4vkhUboZQEkTgHDnaFKDJdVoq9cbNpNNDHetYvDTHUNVyJzqxLd",
  "key10": "3FCp5wWvqfRjjkPsBHga6sU1y1XjfeAssVp3kwn3Ef83WRCUPzDsC6J4AGFdAs24C9iX8DbWF3vJ494kpjq6dJYQ",
  "key11": "eP277y4tixWdqmZZDYSojM7NFizGrzxUE26VnmEVAoVnTdQVe4m7vjcTwjemCaH8bBsT5NWyBMtLbZfRomGXtgf",
  "key12": "2vFJrEbKeQuVmfAZxCpn9YscRSFCiQUvM5YqsHCpbgoU8vsoYVoA7PVamxS9FvJ1reokRqRTWQjae562o6wouyV6",
  "key13": "5hKvxafNT3qPFdbKwU9uoSWVMYUPUGQ9J7M2iJDaaLmmbrh9M5DG8YiRU6Mse9NmxnDXhqv9jA62jiy1vSkvj9r8",
  "key14": "31n15BkAutsSXKpFZa7o96PCvV81LVc8J2k4NfnAuMSvCmV2VppgGYCrTtunKBvymu38hGvE6gpBbgwdh8qQ9HW1",
  "key15": "beei93kCXjAvwYn7j5ZJcqhzjDF9DbqiYsQf8SZoTf6mcgWucXX2Vj7i2iMVrdkptkQjGAwYbx5J5mjVKSxeQ1o",
  "key16": "4g5kopr4CipKAr2TZEiFxBw57vYrTLmhEkiH7Yh2ebpkQrtbrnMr28h4Pm6o8ZJBUWQG61rLKvyPzyuuXyYQ5C5Z",
  "key17": "3ABTnUsAfm4brs1bxa8ZqL3X7q7DLiCt78DFhMCtF5AGVWjaPJjtTXCtps8DdZVHEe8DRi2kPxq1enJKDMW6NCJL",
  "key18": "3uzMLMKvdtYU5CUzcDwohvPr3hshUrzGryBpEBGy2mvpqN8aGEBmX6GuC24rfXoHncNToyGY5gqVuUJFPBAddgkm",
  "key19": "24qGcBtDXNp5dpTbFVQ3jFtAi54UZjrZdTGwmMwJGEXgWCCZXezrZ5YDYtkyL3B3Su1qDaHp9DU8AYfpw7Gu8EuF",
  "key20": "3cEFzu8GjR4P4We1AN426diVgTK2FAnq1qMW4tviXqnoGp1PitKqJqaT4zYJFkcgd7U8bXYjX8KWfgdaHYSmwWH9",
  "key21": "3ERLXh3twowuRsw8Cjw7BDeZSuwY8zCggjXAroVb8kMe99HLBYXjVNfmM8TpdUVFdXNyWwd7RiRfTcJauzfgYRHT",
  "key22": "2GFEFcKLW2voxLRkojVjpjHKdew362AMMgTTni18jUYHPkGtdCP41c6RtFMV4mKgBxeeRNFh9CR9MTAkYWi1c8eg",
  "key23": "5QMP86F43azGT6tjPjtBMtZRrVFhuYbV47BEFw9GYt1rBrZXsjyYFtyzwfeehXMDFhqMcFdZYBgNBq6qcTvv8bsJ",
  "key24": "P9Fw4FGsuGCDWRdWTxHpwTY85YXAKEj546wUmYSnn9iaR2hpCNyQWQg78Z7AwfPo87KtuzgEr7YvHsAZNw9ChPi",
  "key25": "2Rngvd5DD8c8RJ8A2GJvXaXzGuTMLX2hp9o8dSiEFLVvk4jftT3meFLgdfvk45L8S46B8scqdJ4WyAfZVYMcx4jX",
  "key26": "4QBgr9WcbnRoFDLSYvxdW6nucAfQjoAwFw58sscibachS84or8mYTiHsRvF7hf6HzRNnyTEqyDXHb91rx2meH9ha",
  "key27": "Xjud4M1CCsLwCtixZ4NVSWZdc1s6AAz7FWXSoCre4BKgYScAHHhgH4AFFGt6GKEZHWmASD6oTqRc6BF6eQAms8n",
  "key28": "3BGeKGbnWzaFDJZv4b7TaYBxMY1YDwf3vmG1DbeVcos8tzpnz5cujgWtEmHSvucxD3UqZXUgNn8i6mKLFUW61ufB",
  "key29": "4JxNQ1knEoAHTdBqPFQizC6n7ppniiva3135imcE6teQnme7irDs4Q6Wtt1Hsi4xUt9QnFJzsoVa4Cc5EAxA9W2n",
  "key30": "uVr9KmFnVUfams1RoDNQP3bKuooHZQowsk7LZgCoa9QahHNTRxKnKvQckMF9tHLGy56nwyfUtLKyPRM3gPmhX7T",
  "key31": "4uEDj5z64SSiUJaB9PGGBHbfZX1xih1vGujcUHdMmmfU6uATqCENBdUYZqU2nmx2iNtYgYgRmJWRtNuzhHJCuzkr",
  "key32": "64Zeznaw2T3hxd4gBgvWR396V7QUKcNcN9hFf8Z7sxQKENQ8fNe68vt9Ve8xTvTgiyGmdPRF7pvD9bj4sDVdqANb",
  "key33": "4uwdWeiRK59L8Wrc8hgJL1ZT58f4FcXzMx8LMR9gbMwJY9RtSjX7R8in8Kty2XWpb98LCfaRUT3U9ptkiYhH4sm5",
  "key34": "2ZiaKyQ17o23k8wcneyavEPPKzv6oh1BWpKAeqF6W82QK4D9w3dM9Nb5bbP6kFyuaViK6gHAVqgF6S9CLrYdUCPj",
  "key35": "2pK5UU6HDJJVFyUYpTLAVWSfxWbJrczvpyEKueeB5mwKUNAHxo5a91qvnBYGcqVU5TdSp8UoGvq6E4nnbwL6C6a5",
  "key36": "34FTPeD48kvAibbz8szzesQDo51pMH8GsZgczoTihKRE22fFPsmVniiEtpVm1i6AFBquuEXbC6shsiEUcdFqDYjK",
  "key37": "5YraQEn3cmH5ZNGChiJ6JefxhqCFbWZkUpf9qj8ZBxmjwhwauTDGULZ2seDdFh8GVos7uV5iyeL3XG4VW8PwS71H",
  "key38": "3aA85zMwdN8PPTWNmBKRgXAcqGEEnYjY3f8AFaSkUvDRwH2iKLWEugzr3WHKAcyscx6igkLjqceFTwP3Cbv7LZ6W",
  "key39": "5QCgwXAApwQNeq7tXGERAuEfWkZpgvbxtZdrmA2KMarcMfwzAovxy8ySmUBC4ohYne1pPnBtG6b5nhP3avV3UETm",
  "key40": "5MMvcPriEcnFVSKrXY6kMRyqkpf1UcPikpSdLCLuvGSvHYJtcDKUNgjwVhdMTXXMxg2W9jwf8XvzRiBaZ8FTB2vy",
  "key41": "4CogDoWiHJPYRronjvfFrLKRqeiKfj5h2RvmWvMxGtBgxM3BU2JkxNEBWCM8mqz18U1oQuXPMKgP2AoYeEQSWcF7",
  "key42": "3HqG1YorzkfLKqgkgqGYAhh8bMneHn7kVmanRRE54qsSqSAErNjmzW2oCHL7EMKv98HqmU5N9K3eQgZZVoJBRUmX",
  "key43": "5m7G2dVwHJUuYyWwe1fxM7YD82B5eA4GzU2fQukaAJbjQDrjBaUDGrm6mBGdtLUNStmGughEBAFqarYXRDAkES5Y",
  "key44": "61CiJk3BnZgmE5SWA93gLeiMX22gKxf5JUyrvam479xEmpQAk9rEx8EKRz5WxwqJjr3EmvGsV8rXBpLi18wJrXmj",
  "key45": "498XdXZpcGNKkXzF9mjEJTgjsGsUzk22gHXb46Kqw2zHDG6EHHuhMsy8ngSEJAGro2c45VtfujHN49S5CUwH4zPu",
  "key46": "4gjHuGG9PU32VzjT83fjK4UKFpMwRbUvxHAnzELGj3U1A233ZgGQ6Ce1F4Tcszdf4YM51ku8CLQaCPBwoPbaqCgL"
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
