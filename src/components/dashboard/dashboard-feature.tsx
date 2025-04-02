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
    "3cM41oWLVzXheHiafohUhJ5a1gz8fQJAWNFQz72UeG38j1nLQDnc8P4HPGPcVUeXNa3CsmS7AtN3Ns5jyyuboUTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s8nPqw6aPhu9xX8EkvUR8gjvATtzWDs4nHqGhpMpom2n685qqQM7aqXwVNWwBXUdVN9h7wuEh3pJ4M4hL35gwNX",
  "key1": "3tF4zqm2wWouAd6h8atfrSkMPa2XZSmp4UQ9ydSWJTM68isZCn5n7n5gQrG8iLc6RDMdg48sWD33WFap4X23UDX5",
  "key2": "4HfDa9HDPzJiziYNxXfMfyrsAehdjqVEZLhGzuPn7EYY5AAeQ5PwrnG9XYqppsPiQSvahSKKgSh8NCs69XcVin1e",
  "key3": "5WikXvR4Vfr5RaW5Q4iZNM3rkiujqGEfa39a6dC4dfwTcUZkhTC3ZJAV9urjxKEo4pP19RP8E3L5Bnmhmh7XWVKW",
  "key4": "5Bwr6yBg8gheboJC8yj3v69ukajCuBtP5CGExNtKBm3ZrsQFShEkdZ4rdxYbaKowz8fczzY5d2WH6M2ZJwtwXGtX",
  "key5": "3QYqTmFdAPkTJ8oqKpHPxihsXD4u6unb55LHXDUA23LypYcbyussi89BzEiFQQuviEz1qR79hWW4wgvCgjioKyrq",
  "key6": "4eRuGdNZEoED63LATGqEjMsbBXD1MRyG6xeCG5cN39JLxGkr3q8b6Z2tha6VGRPPqF8mT21XUsxVj518EYARgj71",
  "key7": "4CDwFUbVnt7PT4DaeDzze46BvzcFKWieXUMtuCjMQh6ocPUoDkf2oE2k5LgsE8ZwitfVrAJk1exsdJLnF6z4aTNi",
  "key8": "3b7QiHp2XCj1zWzLqSz4r6VzEJdEhmGsYkgo3uASkzzT5GrK3dTyx69gAfcQ6BKmUmMDrMF57mwQHrvtykUb3Zrm",
  "key9": "5PqBYB9o3xrAvrxkwgroBpeub9BxyqqghYWveYVqsEG18ZQfPeTcnoVG4PS8YPUJsPiqEKovFeoACsdnNeRXhyUd",
  "key10": "32XyMD6zZyhWuNrfgF1vMNgAAeBXipkA5U5q7RSPXtSyPEur3ed1E2qoevSxvdTu4d4vdj8jwHHw168HtjQiEYWV",
  "key11": "3ncvPxNfomaieR4HnFPpTUa4vprFtdmGasLi6BdMNnP5GqN5vKQnBeNBjcGCC3NRNxyJwkgXonmwPrXoxmu9K6wT",
  "key12": "4WCiSeCcDK4DiJfjvrDQGcoc5WqS3gYkxE3gef3M4hpPyBCZMWHYXvouXTypEHbAU2k3E45MrQyWwn8hYMAPXLUV",
  "key13": "3eWSmouyBCZmgpZUtsbCrPUeXkAP3Y5ZUrWkdZBJGm6TasX4BxgdKoXqAv9ELh97muGNjvoa9kpbvpciFp5sqFTm",
  "key14": "3sKH2JLHguFZxreP8qUSURzViJsu6zYteLwnz2Svaqmr7gpsACeHtPtViJaZUYAH2shzx45zpDxmgcGCYwfoesrh",
  "key15": "3XfM3FTosZ5DyTmnVYtx9wHntRdhE2SLGPCwrfQraZJhEWYHtF2zBdJ8j7K6ZQLAiVamxjQmBfcVrt48ZTK2XnF8",
  "key16": "3cyc9JkRnoHQrMC8DxD8VBXryZrPpLbj6c36fa8JkwLp4FDq2h8dSxH1r1R6qi91Fr7i868UkFHTv9zWGMtxBaGU",
  "key17": "474MtNqzbUfDhtvbCdeMVZv9LU2CFKNxUiiR4vaLL7CggXYmqAniR3f6PZ2sV9cq4ZodiSETz1nKqqj8hHwtGN6U",
  "key18": "5UrAEhE93dXzZ3Tf4Zv61u5kYMNFBL25dTCQe2VmZqwcxaF6YyK7sa5Up5AbfMGuwo9HKTkmizi6SeFR68C4UVrd",
  "key19": "45LyvXEe3PnhsXvzj3iDyugxGWdAnKsbziHo2Mbn2T5S1GCHbSiuFs9gUrQduGiPQMNp7edXPgNCiXyXyczfzjjm",
  "key20": "nQ1ukJEHGH8N4pVqaucw4uuJPojmpD3tSavkVAjH8N2YvieL2EWd2FWqGnsY6TabEeAyANnAkjAE3imzMTz7diC",
  "key21": "4BxXjideF3TbeX1tcRJ6UXXhcfAiwuXwcqFmYdXqdftwiv9bJ24AshcLh7vEfjJHXcyAhojovnAMSkRBi9GiqzF6",
  "key22": "212e6s8PknKGSyVPbJtv6vYfPRX9EqWDJ2ZE771rVkMH5pNXUn7kryTvWG7dRep4xBqwkPAgH3vFDQB9vtRCswq7",
  "key23": "464QLFE2FMxh9KHupR9vXtUWv3V6kAoAfh2gKqt9QkdT2t8MEKKA9m24NunhSZppEiHVKGKwk8RTWiYmqhcprcVA",
  "key24": "33pdib9d1K6mxW3Rx8xnPf1sR4ikypbENpKkByxGPLXdRMh5q8hjcSZ8hk1dMFfhZkT44SCpDEKpsnAzYXfNdmUk",
  "key25": "5RMX5A1H2HKVq9c3xokrCnMe7Ukz6ARaK1cnacUkXF17r2wfag32knwzFa2CbYsar8uyQpj7ffZjQvJqoA83ZjCs",
  "key26": "PecoBkLFFVP8RKANL1HCtZdmiTwhy5aejDsTyhewfnt8YVJ1nocWmTtbcfBJaxZm1V7EF9t7iyJo4Ppi78nnC69",
  "key27": "39H2QtDCKHGh54ZsdpgBo4WRGqSUdYPWeEKTQmRbcwU4GBEu5vD9LxCuPvBRdNprQxZUNf1ervFicjmg3YsHboMh",
  "key28": "5QjVU2KyzcbvxRAMsiBdNnEvK5gcncnfUQyhHUjHpy7rMJkx8ndxXsiezYGQRAaqdRYHucAWxBhWcoLNrq3uzR2c",
  "key29": "2ZtuG4uXALFptxtDvuCNP5h4SER9YXSwbfu8mBq5MCvMqcQTsZ1uPdzE31B29rDQP7icxUrut4DmVyH3UyG3PnaE",
  "key30": "9ehscyYRJz79FjKSyYWoDqbNH4pZLp4R47p9gJRAJ4Mnk2bRuXzhHYsqnuQ3P2wh8jjNkfredYzgeeBT2CwpQut",
  "key31": "3oQJ5bJPzpAtji6Y2ZEhrHoeqtdwTvw1sf5J5kER5owbQvqChGco7bMWCK1NwQD37MFPwkAZxgg8w4nvtyxtmFVv",
  "key32": "5rzaqbMhUe8JASZ7Z6vPMjsXkDYe6qir8D1qgCjAk4VaYZ59PvCnPbsgZ8WQrYGajbLjaVVnLviYb85zeKzBdRGq",
  "key33": "2UFUM4asTkWN3NtDxJH2AabFGNXcSeyGgRnHp18D3JScU8Uv5KBQi99Ct88ALF4QjqLffmRvhmkkxKgqtauPGhYD",
  "key34": "23efkqPVcvqxTfnBoYkFBrTP5r8e4KarXQ26gUxUkTdihZf8zhd7KRMrNdoWv8orePw8eW1mTpZHbfLqGq3Gv5wT",
  "key35": "4Zi13T56YJXEB2iCuNmXzc4eiYLZPf7uEyczKqC1DJGhsSSsxPuHxmcQQYzMPr3117po6fdESEr2ezw4w9x1qJiF",
  "key36": "2Aiu4cGWKkFo4QdYYW2AjepXsRbhAmC5Pmpwu1Q39BrUaLsvffP4ZBE8poVH6nMbLeN376YZZB8qzKUP3jjwGXe4",
  "key37": "5gLkrorm86afiekkZzLFigwGbgTYzC83PaXXnADHENzvv9fh374w37Cg7BdBibF27pEKjqA7mkt4ntr4fEnShakr",
  "key38": "3C7CmHsUBqt4XBVJYyn5nzdrwsVWYcjAUjceNWSv1Ea7BShKcaD8NB6PyoLT2Yn7xKsjFSkfxgmF5dFBCiwuMJ9z",
  "key39": "5Qt6g4nUPV8syNH2Ww3XT6SiAURcivE1RvTj36k3CK29LcHXzYLAzFEAQD448vQocjYrTR2c4r4cPR7rCuDh9ZKR",
  "key40": "4vDJjAq7XBZEvGfiReLpyrmAvJ9jh6JMPgtSobmQpmDrxNsVEmPULzv9bfFFMqX8rW9H2J9Tw2MnsvJk1am5FJnp",
  "key41": "24R8UQACCT8sF4BdAbUvYimYYwsid1sm97osPc6exirwjFJ5hwUCp6Jb21qZFLaVYwMDXtmgDMaTS4Q6MGUvuSUV",
  "key42": "5NzHxH7A6sGLGN3JAmeWGSCz2rwmPC2iAcs2iTryz9iBkEKvD5C2BNp2sExKnPdjqwx7CkqSRZtn6FB61di5r5ou",
  "key43": "22waCnLKfQoa8B941Bs3jthdmz8VjVf5U2s7aGhjNubHVt9P1MQFtVxfgLRKGkZhCcRnPAwWdPbQEcGTGhfKSvoF",
  "key44": "2DvR2qFm9UQkfUDib7pSQWuApan4oenDCUQavTgYAxQZNAqazC4dzvPqWNJGoZqsmi7HfkxfeBjtUjTGUhWMufJQ",
  "key45": "3a9JyyiNsvafGnnaXWoFBMeBrAz7NC95g9Lq61vM9NYL6ynvbFUkGSJEPi4YZg7GJoa1YzPuWEDm97qbU5dxwkAQ",
  "key46": "83Q8SHc2r7krW14YfHTweNgBtfVem8mnByMZ9MTSg5vKE1LisY6kntUqePdYg3vUDXdtgMuu9jJcPgcxL8pVx77",
  "key47": "5vomieaZq1djQUNZU83rjuQEtVjgt8N4mYymiU7sc91xGdDkpEfeUEuGpDRR8yvvpAMttuSmSSiSkSFAAHgUYcAn"
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
