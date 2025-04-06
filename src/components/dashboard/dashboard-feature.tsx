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
    "2nkpV4bp2TZBtRTkAQm7Y2PTixVtV8f6J2hLKD5wv755XJbq8AM53ovXgE2ZeuY3u6GLYRz53kEg2qx2PzYoXDjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bCKxDnKMKvLikQY2aSz2z5EmCuXnHnKqQfdGPAVM8bnouzuJZU7GjpiW6qSro5cqYTgs56Zc5wE6XipVmEYFdzz",
  "key1": "9kMTWgd99mZYHiSoXCay5MEMmebEmeo8Kfee4a3zVsRUg87J9z5cW7Z9viiUDLeB4NyZ9qXdCygsU6RwDxors3m",
  "key2": "66AXJR9qgqGKSfHZWikpPV6DEJgu9WgFD416zhzPi4mLbQqtokST6RioU686rfjNoNM4rsGhFPUtQs9iRXA4hWKn",
  "key3": "LWXnWu4njwckPLuP94UEga67VYaNEJwANJsNyZ1Q5WycpaRjjgJZp386u9hVsj8DGAweGrusaAWHuuT5bqRC4WW",
  "key4": "2z8BL6ZS9iZk8QBs2rVRcY52CTh5qF3yp9rSpVntY7RrHmrVDsjd2oLx72W19iWty38goiAydBxEjb8Vw2QEARsM",
  "key5": "5poRzd53FKVM7X9kvNBZqGkJCVctEJgQpgxUFdLUrvtAPASCjhuEgiCUhb6tcru1ZAmzh9GtXv6XrCLgRH8ntRko",
  "key6": "53d4QAiBnp8geF5387Qx2qvY6fdrCFLm3zYrYPCiGHEDLaJtSrw1gXFfeUkK2AVVMeLggJVFeGNe9mLymMvyzDuP",
  "key7": "489FgygskuBEqToT9cThQNMdvMvBcBSXcRPy43Mh9hy1cerkE1BF3SZBB6zySbmUmVbAv6ppiY1MPFTTwGCKZiJ1",
  "key8": "fjpz7NshBu9qbR5748RH2FDx74aPseGK8nTnoEAinG11U4sgvf1E68bBs3H3TqWC1ThYH2J4SsepCvAEvoH5yQN",
  "key9": "3CM4BF84qtNASgTU39w8W6cn42Bsfy4uR1NQnF8sgww7ytefhymDTRA9kC5Szr8Yec239mkkV7QioFEgEN5ixeDS",
  "key10": "4Lsdvjx1kVYrurqeyCQCXPepcrwcfD7QJJw2Ef1HsViuNzJ4p6gFj7wenY7Po7eZDff6ASTJm1PiWYPoJJxz21v9",
  "key11": "4dFkqA8K1Wek7DDTUDEJ7qNJfBGwSJ23USdJCj84YELnJEosfT4bQZAxuVK3LG3aEAUebWz2W4jq56voW5TVKUQf",
  "key12": "29posg3nnBGPs1Zf95MQ3eWr3akzkgHV7se8vt1e2AM1UYzBPqEe1SFrLsg3vRTY5FoHoEqgGvaiG89q2BGMwa5K",
  "key13": "3V595mCpkW9UAFLV3UpuYYHWG9iBJPBocvKhkKeTWG6hWfVB3qYXwBEwHLaW3fKFctEQ8uPUL7Qnxi3qsoR4nrmN",
  "key14": "4MBHwz84A8USTjk58EcUqhcj1btwBSodrbB5jUyQpUTGqPKQpnLAtNY2pHCV72ZW7J9TRx3HJzAx6MYCypbi9kD7",
  "key15": "64W2MG8Boi8RHRS3kAKqKr3mufbDvHqwWApPGNRStCvWsc8EHx7TCgya138y8Kt1Z1XEQvqP5pkuHCqu1VKsugV",
  "key16": "5K48WHRSPW55y3pnVvZcfxnJjxLieus38Tmjwf34uaD6Lbw6c86h51vzQ13M5wTTbMoJ4ggLR4SQxw4mtBk5XgV7",
  "key17": "tpuwYzNYvDjvfHn7hkY3SqiUwyUhiF1oBgsr7ggeGcybYeLWEMvt2AcMRDyZAFUSz5GAMTJT5xFhtvic4sEdC5b",
  "key18": "3xryQVitCta3ygGEjjsFGWp59pHNrcDydHu8fxEGLnyZjf21D2qGYjoBG3sLjQPHPRukWtpDRcwUsY1iAuqMYoJq",
  "key19": "3s4pV7WCefUZwTBN5hM9XQ6hFeNYKz6rr9FdA9zsSxM9hzLAQa8kx4chXFsjWxjuJzG3L3bfVzXgtYqfZRgD6Ar7",
  "key20": "ZE7oMApfRn8DsTB8g2kHivf2X99DCBiQxUCgCSf9wis9fUXSpZ9skZPePzGajmLXDGB2uNmjLs6J5V6DDyM9TfF",
  "key21": "3c8Go7BwbvUQ2dXsDrchQD7XFHiZMtcUvgNdUuXRaUiQ8Jek5v3vGbxJ8xKndGYbMCTzS91XWmgS7kfgASYHFcdF",
  "key22": "5iggmSrADCxTSxM9Fpa4o5dVgRuf34hyKDAms3tCQ4D4NSCQ8kYBy4vha4SmmAS8TcrUQSth7R5ZhreXTNQ1nzt5",
  "key23": "2jHmhHzgHY2yHLmF54di7HGxu4ChU7S2yazBRkG8vUBNkd7DbvPHwWCUChPn3Yngcb3kXtM2MaoXvfXhRDPeNfPP",
  "key24": "4LT2gy9ruHbNnDViqrd5KVsxTvpQaNsE2KLzpdsffKAyszzwWcPK8f5dTZYJquKcQAE9ap6hCmXYMTYGU4329S5h",
  "key25": "4qG8MJiqgGqXmcJoeH4bduTDthxc5MsFb4wcbi7NK1UyEeuH1wKv88LwCwxaUrWnXjSyQ8nP1eEC5MArnaJQc6dG",
  "key26": "2UKkowb7T7MKotNbbNTtYUDZKq2QbQuh35edSJMzGmvXDFt8t6E1geT5TzS5hiLG88pT5dMG3H7wQDY7JVNLRh2v",
  "key27": "SqztArGJWLGiQSLRHdgshwhy7BjyASVZm52PPiVYXxzMJpXCBFDBT5trfhVFky7c5t9FCHbJ5WJvqDFUet4kFVj",
  "key28": "54HdfbneMPcY9p8K1ibRDt4rVXQHGRXsC67JCqc3shK9SUWxSA5DLym5CCKwFPGQYRBByemQHGHZNBBC944pLETa",
  "key29": "2Av6UBsgLLPWV2Lqt9HovM3JwJUfh2CknB9SHBP8ftTUx72fff43SXXWCfvZiLYCobccdR3bEZ9JfRTMh183ADdb",
  "key30": "2AxGf276r3gszPmYqTjEmnZ5b1i3oYeghuF1LhF4SgcXSbx4Lbcb9wzPcFoR4N9WZzpMLExa26cJrqPxbCZnrvVk",
  "key31": "59KZjrag7V51P3kss4XN97ic2GbDBabXUhi8UMpYYhGa54mHB4X83u2PLohU2NDPPDLNitf6socpjg9qj5hhdso8",
  "key32": "2G34WuUgd3Nfgy5pVbHiShkaTsbTxhC42QDGDfxUWKhh3EQoATfGkkLeCfLvKVSkMLeSvh7G1RcE32RTaQL3yJMs",
  "key33": "tnoeRe84R7Y77UBgwpFespxgcDMgS9Gm2qKeiqzSgmgageLSBGshxiqyQ4eo8Esw3DMLYc19qiW5XEosHVBwUCC",
  "key34": "4xgt7GFDX5EA9vbm6ndvqyBd1FHVe5bwUKW2bV9SxHGwAVEtzPEvuSbi8B7M8NjV7UdbDEhwJXTzS7fnyw4TsXFg",
  "key35": "3k6ZVDLihsvmiaeqgMPsixRz2oeKTdwVZAbBqDfKAeV9xm3zDCkFCh17icfzACNf9TSJ5tiij4kDV9Nv444pse2Y",
  "key36": "4KDKmHCtsNqjWGzt8zhRXFyCaCuwafR8BcwasmM1kG1CqbNcttYxWmCbKm8Wu645EkYq2HEkKrncc6Ey67vcbUfY",
  "key37": "3dK2RQhVsXAUdw3WYZmocypgpwqEJrhm5ENd6w6LAD4FodwGyoV1TiMUYW1FX1pAVdm5hygYSGWz2axFMjU42Cwr",
  "key38": "2WU83km72oHMURupGUoNTk3NXRV3hxurRxM6Eexpfn58fULszbN9aFxAxHQvKW2qt82qq8ojWJMXiQnZ6Sk8t5Dm",
  "key39": "qYbh718ZfJaVCbpyQVTfjaDhTimph8vWkeeod2qPoAcNkgvbSaVarh2n1DtGVqYcFdCbvUuVdw31kTPjpK2oJkR",
  "key40": "2ZR7FfGuoXb7Y9L6NH8GMvX11rQmHHcVrszUw7KmCzQiN5jrFdSPf5q62V2tDxdai4tSmqKaRgBRBUnfynGLChyp",
  "key41": "2dojueKBzykevhrdTC1pixH3H7Xq2uprLsWMdviXQ9duKCkSQcJFq2v7NbDAQDjk3z8N3jwwZo4XH42tgDYc9JHp",
  "key42": "61pj74aKDsGbe5tS6P5VW8EyMo4uFHXQd86JgarUMXQZoEkbqhcEM1wA3apWBVu2QYraQUWofPuXoQfu4zsJkHHv",
  "key43": "39y1q9DZsL9H3hwoHYMoU8G1TwB1jPPyqWfnWdQX6T8ez8Q2W9TXxxrgZyTCUrdwNkYGo6zaLZzkPL9XwjE34efn",
  "key44": "3SFCHYfCP81AT4J8wLyhKp1PvcGSJPsBMaaeCThVBDvs4NzRTu3f7PEDFK9xWsUomqyp84qhnbfpHkBkbaa5aeh9",
  "key45": "45v5f4dtwizvJV6Kdy1kuA5YC84aSU31YeZwMNpKgbyBjJRFu1mvUDwpDx3hSWL2k88TC4oU9SoSBFxzSEHpL8vy",
  "key46": "4RKeTBizjhh44QX5KtuYF4jZCyDKEugReYE7t3zggLMMTACvKERSA5LazH5MZRg6mq8mMyDWMb8CY2YUB3yuyj6c",
  "key47": "snnNtkRo9n7hjU9Jtdmz8qH7LwWfbpL6iQTg5uKHBKgT89Q2Mrbgmq332LavtXbEoGAAHKcsdWYeMCZaapfYMqp",
  "key48": "5mH2ccbUZ1nHLGYQUGgcVSbQU66DecESXJrat6AucZEbBPW7ogXWdjDyPioVeGvnmqxdg31mnNPaX8Foeb3oCzBb"
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
