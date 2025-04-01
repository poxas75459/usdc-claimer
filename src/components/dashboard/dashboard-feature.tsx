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
    "5pSvLzwUvkto5fx9hMhy2APA1Q41YeHiLetbDpU7UfSMRgmkUDicuEtNo5mPSz2C2HXkNee7eFCV74ux7KoqGdwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hbgMvdo9oKCUYiidDNAMG5vtgGgAPF9aQVtFf6M6dMLBM62iJR3UnzYaSHfsSMPu62oyVdrb4RpE7wqky4errwU",
  "key1": "bswwGf2fwjW5C7ma5PFrxU4kV75R9GXhzs1U4ZKhzZaMnm9jJEhUdZzdrtqSwg3vzULkRXTvSrMt2v45hcbFjaz",
  "key2": "5eomrJwBVv8DpusjCZ5G5vEjzJ2AgL8AWWuXaK1T8ARQLycNmsuMut2wgnxC8kjdVLZAUKJsJ71mtazzJtvwqrWs",
  "key3": "3B4Cto19u4tMH8Px1JGDr1XEHaHo5R3MSDiZG1YoBwvwFVVDz4oXrmuHrrc1StRsPnbNPtEg8AFGXjutWALbGp1o",
  "key4": "3ByCXUcC9o8Cyeu2QKjYJCPTFgTcfQgPT5P4m565pyBYyGrWZMfNHM8ab5g1neX4BrBtnY7m456AuUMU1a9PHaoC",
  "key5": "jhZXcp2qcgTvahN5oyh4RotiXnLEtNfufpui6oz4CAuRoRnu2eqY7wCqveJdnG3DDyhBifjPjz7iFipYQDcWQoq",
  "key6": "3MH3Puz85qmxdK16NLqEUc8Q4gtYDHcjuMtVFfthNuE9B9fNkxnS8CoZD4zqXBBcuDRy9m399jSSPR7HJzyCNv9k",
  "key7": "3MQYcQYCu2dPuA1STryMSV31xMYnxcpAoT2YEUGiMjJzHYuPz13mEPveyEsWiNNFUcx3meB8nk3X4Mf3nUeZJev1",
  "key8": "5y1dtS6AYpK4VmpBWSknevqve9s9RXPDnqFCEZEDPYAQ3q4t1j6RPVetXA9vXexU9XFZhUnKNUMEfHWanBCKgXgX",
  "key9": "3JHjbrmbnpzxnkBR24sdmFXm8gbgK2tpuRsTDfHy1PoUYvAoFti8MrK9rJLZh7tdeLnuaaxGM5TCpQvHLFRBs5VV",
  "key10": "53VF8sdkwrtPxFiPtX3P3vuRdRLyYhUJKWaUVzQ8GmGZqWZeuMjCZQfAKdJES5i8HLn5nFhHMC4hRrpcdnRJ7ULD",
  "key11": "hBMVYgUhBTyzxLbcumEWMXwGx4oYrR6GCHHXL3oFLas7YBXVMw3tRBV8cm59sxYX9fgVLUyNA1bPx95rp637Dis",
  "key12": "2oX1aDAf95GNBxU4CQ5sUfkxuEJPv6Z335Gd71UjtC6JcpRenAEXHoejrNo6JRh5cQhvw7ft1TLXmqhaMmNAXipP",
  "key13": "65sran3YeoGkFRkQAaNTRJ9jegNJzcjBpxyM1d7nXoe9aCXq9rSiKzjGQnuaiwU2vUjR8kKVwht4hy4pG6bn5YCP",
  "key14": "5KYDT1eBqkS77EPZqSL3Yr3tEKG4us4UPFvmaS1WdbBQNLLLsRPSXUEpwDq5ybUa4YfGx7rGxmJ8QuAxbx8nPW5E",
  "key15": "4UWFYUNx8zyRgGyZ9XFGUrrTeXq2j7aykZn8iiDLL2dTTg12yBYvL2C8Qiwv34nqCPSFfqVQm48rPVAzT89T1DHC",
  "key16": "i6kMNNnKSt9BqMt39uvAWzDHFFrpuv1Xqb6M25Nfx6h45HnxyziP5Rb5jfQx2uRX9G7eXSbVVzm1egxKoV9nQBS",
  "key17": "3Hyoc63MXi6TurNKCRRCN76uW5xsBtZx5dnuMk6aoqGLnZLvXdXgSfsDgVyyC8bLaNVxQJ7JxWKU3YFFh3Jwob8E",
  "key18": "Bwuk1nqA31sBEcwRYppn1SDS3aMqr8qu9PVhHoCpTpbhoo46DaHzeUUTufUhjbYLehNFTwsUpgy5sDBEhDHPiRB",
  "key19": "5ftknDg3tWd1Fu3ZyzzEJvETKTAiSMPuSvD82Nyd1sBGsb6D8Kqie8j4q6DpfAwZSUEEARUKn8qm4orBibrsoGRz",
  "key20": "4cuXfJa7FbAjbyKgUCL7B2b3qCZPqbYFPAZAGstxoDiB9NTefdax8knXhY7TPMEALGbahNua3YBq4k9xsRry2NBn",
  "key21": "2kpcZ6Xp2VPqxUcma1Uzw2EvzRcn7Hz9g3MBSPcMvA8G6MWrYQ5YvoFUDZfssh1TZo1YE3JEW9b7wfmM3AoaJpXY",
  "key22": "FXePjSvA7n2v9najkiWxzLRdwSv4ATARTECkdedaj3UtRxesaxZaMHzqdVft4F8ey7okVmkokBU5bU85cksyUDh",
  "key23": "5XH1TaVQq7QQc1rGoC2N5n4W9J9bWmZ1SCKXJT3xhG8pUTkHi3H9JKPxEXVgCWsUdJoL7BMP2bw2XAueypjrN43z",
  "key24": "3Xe2kvx1GrQ9QWniTptDGLUAcat5aVyPEUGPwdPWErAw2nYo2F6GHQXX62mZyigzGE7nj1FA2LreSmTmFj2zJ8uK",
  "key25": "31cUycpTgxQrAcW4UuJz16ejBtPiAwjJzKBfatxxQN3nRb8f6vEmHfewTwno8Waf4Lebut4vkAvroetMoANsYQo1",
  "key26": "2kd9bePLgCQpkFZNqHZ8AxuNQB1kK2jaziu7cNVNykagb5H2kGJ3Vg9gTkYevb39TFPiK3e98jrps3b4qQ2Pj9Ms",
  "key27": "26rsLQ1tgkt7BK8S2VSCSiQAuJ2WyRDbzUoEwHexLDDxwTYkJmuLDoeKcFS14GLzHcYs1yxPV4gxacgb3XdAUkRJ",
  "key28": "2vZTuWThyoE5YApx5fQkntpAw5QqnUVSC1bpQN1wgccN2Cf8fb4KjJCMNxTbV1bwVpPVJd3Nhhj8T9BMttVMmssx",
  "key29": "3ao6T7ZvmH4DQPYqodRV7bJ1MsF2Ry4qx4QyuqdFumvG2bR4AyZh7WSVk8SdoqxkYXDwCW78oyMFoh4PLSjAFS2J",
  "key30": "46ZuLgqPs6KsJ4Z3MoxH9qrQxfa5prAF9vJx9vsMSUgYhbpWtKfP8iGZSqD5Huq14L8ZGEkmUTYYzN1PH1PfXkc5",
  "key31": "qq9mrUYQYpweLUSQmtA4WiMW67fG7AySAwPG8znukrwkcgaLA5ACHcis2wte9Y7iyN3nGsZjA539ha62z4UNpge",
  "key32": "exMbQu7JyeDGiYREzTJ2SQXbx4qnMmSgS2VsZzTLwKz6nP8CusSZBE9VVXK5eCdEy1mxDsCKEPD9ZSqwcexkmSi",
  "key33": "5MXvkv8ZXFArPAxAk57aAm9azZyri8T98MhNB6EA2mNkq6GdmPWaGGArXYLLqfGP2vawXZTTeWTAMCmF8PFoQyom",
  "key34": "5MkszJjg3R5of8AZgsZ4aWxkKQPh5s8PKGdMgwVjuw5n9C8SVUo5A3YMMGZZEshnH7MgUwyxGAwZjmWCkhwXmrNB",
  "key35": "3CCz1Liez1VSQP2e1PjvdoTfa2AoQ94mcTnu9EtiAKKiho7fMRhsnepfhBaKD3MWmmzU38fmfzwueD7Af96BMo6t",
  "key36": "5j365EABHgm2WpYPMQE2pXjYKbwjvHdaRcC3pPacyfj1UcWgCQVWme5ywuGfBXn2vJcPNsJ9JkBSL7cBGW7jWA4f",
  "key37": "w2ebAYzpvUtxcaRLR3EDCafnRGHcyCn9JGQXeKcb68HkdPrAdzJ82Pr9zcpYJ417tBnewCmBS2jzs7ecZL8wbGc",
  "key38": "ArJkNAhYsyBzRSQM9qbGDpVzP4qbk5dRheNRGxusRRFemLdf7NnuFTmJPL7hwh5QETE22GLC82NbtoxmS5GMYmB",
  "key39": "FP3N4gaxsQUCqEMikZApwdw8vg1AuzhTiVUAXzruCnwuqhYaZHat6DVP4SEhkBmWK1KUaZvoPx53vxeTpERsSzB",
  "key40": "4d2prwxBqHwrhFkTcPTfnvAALmyqGerpS3T2sv8doj1y5So28WWkqf2hFFDkciAwPhzXDiK8DKmWoyGFuMdUz399",
  "key41": "3ZdXtWLRoxyaZdCUmN6PS8NJDniJURjQc4CVZmsnE3AKpDJ4anstVmkrk5DVjzdyQVQ1etL8ag7nfLepEAig4fGy",
  "key42": "2SXE8UGYqRRUPGhoeoK3JM11ntMk7eE5nm5Y6pTe1GVKi6ZRf2QtP1Zy5qGaE6EUWLcbkySn2SeWGsroShxED1CM",
  "key43": "3kCDTkq5CjsKeUkeuhUkw5Nu7aNUCEauenCkeRN1PQi3EGoP3LKztDvoDrQgVw9pjYMDpiLyXSjw9Br6JRSqDLMr",
  "key44": "U3npUB7AcwAYAGRhNNWw5X3nCgFMxDDtPfGQF841BL9gTA4j6aN8ksAEJ9119T6eYUhmF6aLtHKhZgyALwxzxNL",
  "key45": "7bGFktbCRyQtVZoPgvWGsfSFuZJVd2abdx8iFoqBFyi1Up3Zvxu9x6mqg5XvAuu63CPoyKpV1kjmawD3t8LswCS",
  "key46": "4ULs3Lzq4VeyeULe7dMbUqLtaedZaoE9oPs5a7xqDQRozrrgSfbmhoVuLNoXEMwbVaqxRAWXR24PLxivapzkZfeD",
  "key47": "4o97HoRm81H41YULb8CjMzN8Fw2BiDD8zPiHqpKHLD1H7ToFwyeg59q2dGAbaE6TZpT8AUHbjcxC2RbhKgtfpBcW"
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
