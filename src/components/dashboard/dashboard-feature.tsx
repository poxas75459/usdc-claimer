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
    "27Bg4pAqzdXsFCyKPjr69CTWLQe77mj94WmtL32ttfneUYQZgoUp1UhvqkZqkb7MAWJ4Aoja1bd4PNC1mRZh2U2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2717np78evQbqUdjgDWMRELyWxKE3ycsB18rjdfuLvZh3VsyGKrPUeCRoqujFcxkw47zC87atJxVXSwW8mzCts3F",
  "key1": "2zMDKZ6exwnVUPYnmZVDkiryCZbnKKYyZurVDzqePzGTUJiVZEUyqb3tEWqSjaZx2hZzTLGmgGKjdrtKf6xUenMh",
  "key2": "3nSeVjyNUDk9MNHg93cwV7gakbSndE4EyftYSinQjEMhDtp4Vka1Cn1yY47VfQNZER8P8qvABc26hTyXi8Q5bina",
  "key3": "3u3uenzhXvRdejf6HobC8DEfqsFq4LEXHfkNLEhMPPemuK1eNCTBJa3ab3DzhLpGgmu1ZbjvVfp7HTLSL2ATvCxY",
  "key4": "3hipcGXHUXerTqppUgRXDoqPz1xdk4YLm6MQb4knDyYpzbZaecN2LoPN5VjmNaSNF13vu2W2MHaEXxnCBT3SLHWD",
  "key5": "4QCQSM9GLk1ogmrFBEVJTD2ZDp5RW7go29XxgMwZsC9Yu2AETWd86jnRyEwqJ93F2pmaSsAUxc7xzDCpaSuSEZtN",
  "key6": "2n8wkSu5hnELMUdPc6uzXHEJ2dHztC5gX5gZBbBdYokjP9pB7utoLE5CHsano64FuciSKV9ihEFAtCjw1DWa3E1x",
  "key7": "34DPwxqoU2KFzL7BvoQfth6LJGLGJ3NnSGq5tunBuhq4gcC6o24cS5MSjr9Lkn1DVpLDHLqKRkZzM46vTc2DNqka",
  "key8": "3yr378SQzdsUBtgM7UhXGXWFryBcKPV4KRSQzRWRf1vto4nbkis3v9CN1Tqnu53xnTZbcuHyPh3Aqp2bKs383wEN",
  "key9": "4qpP5Xtx46H5UNxdKxqUJt6d9oVdAZt2wiZVbhb47QDJCo5v7v6fNbJebGzw4xxS7ysuXbyBdfqk9eMhupvQmyaL",
  "key10": "3gSMoocmmiCTQMvxZ72bn1wTBbzLpktZe7FF2Fz51JJdccvvkHwZ2HRA8jCGL3GxBzvbGYd9LgELkTbPBd6ui8Xg",
  "key11": "LAK1aTVffGLmFARXGhFUbiLjpBqFYvKJmycqoP5X1m8Ztk39w6JMAYCyMpgGEdTq9R12kqjeRgVykQER57a836B",
  "key12": "665sBiQhsWUTJrTBVCYN6m3LvcwYW2uEQ1QVrEdWBmXiGzVtLD6PrLrZyjmMrquax2N4zQUTDYB8YM92AKnRkYYv",
  "key13": "q5oitSHAtwRynh6FYasxxtUtv64TMgEtvocdsbbxxzmsXXTwG5rhvnCJyoKWSviYTKfzkgAn7gLaAFgL8zwZ9op",
  "key14": "5qp8DXgSE2G1y4jhaGwRRmMBuEzELHpyuD8HmdU5Vdzz6W36smPrGg8YwUvw5QPnE8ca6J9tdbD5YZqsbAZpKb8W",
  "key15": "4yXZyS2NafrLbmhanWAbAFMBnkQFMAXeQco3HKPhpVWSyU6Ykp6otvJLZEXabm7uf5XbaNe71qTULpw7u2wmDFRM",
  "key16": "DfmLqhjRvUxTkMra97R1Fed3AS1v5DMMXud7PqULsWNeeGDaPvSm1FKaNb5ngDW2MAsJGaLRRAiQsNp2QyRsDmV",
  "key17": "3N79mJZVSZpyTKGoHp3r4p2RJJt8FGiNyY1ANddyMg8rTb2WMqx3hXbAj9AMTKShERuhK4VWausYPR3D7a44UZTz",
  "key18": "4s4T423CuBhbcn5NnGGTaRQqT6QagfkBR2xuYB179ei4wiUycSwX7wfYk35g8QcNWX4qLkvjmMA3HAUk1q55pCi6",
  "key19": "5B4xEX6J8k6kDAMqswZcDBjL1Ee71wUthtNpUsejmrsg6Uz577tpyeipw4dxN7nqBy3mxRAe6gCCeX2MPx2kcECM",
  "key20": "5QY1Y5Dw7TebLN7ymXwQtViAYJvyxMGxPNzKJqKU25VuXmYYxECVuia5wVngA2JN1pGCXMUQkVjRacvZQUaKMBwg",
  "key21": "51sbubMRM6zAF3fvgGF7DkQpGEAXGvJzHDvdWchfjxLdjYk616uvedK5aMD2jNPubFC9b5GWuPfokFavfpQyn5ie",
  "key22": "4jRPmW1pph8pFPLYSLyedTUD515suZybCNbShY8tWKiA64pMntgsNSr1n6Camtm1S6x8HZR5L9j8UkzvcXbV4dW4",
  "key23": "27xoMFEPjnnvoF4KaETsm9wnMQYtkQVqaB9b8j6Psekf6PrNc4qKeHBRj4vz2DQbZp3QCAd1UgJTCNypvz9yeKyX",
  "key24": "3YA7NxdzCTHnZLXhqr7BRQwwaHeMHTXXJWk9XK7Hat9KJXvi7g17wxaKfeAq4BEUXEutqvGL1ktewg43X21LWxot",
  "key25": "5DQg6x699k2YjkcrR7zxPBBbwC7NCbcxm8Pqhe97ZW7DjuuSK5yrEN6DXsbVryEzEtYnW3Dviqkvmg2AT4efYfC5",
  "key26": "2A2HQCdmRnKbkCUc54baQ54AzUEttbcur2VJtikzeWVDWuBXpz3XeULkcdn71ZQWeou4qJJN5NCfdvauUW11Sg7t",
  "key27": "3BzJfMfR6kVZsQmWqrYa7oyUof5koxbQwRsx4eR3fcEQxpaQECDBDMC5EYY6dJK2bizyZpBUNt75tCHcRnd7xybD",
  "key28": "sAje4j9pHScFXVxmzsMHpWrnkU4Qc1TFuVwmYJcDqwqWyNZ5sgAjWg1eBy8UZgJyQGWUxA5RzyZA8PRJKQnqmVv",
  "key29": "4AiE7oroLwRYUW2Eq8f6hd2jMb1RVjcASmT7eHQenWyp73TJEnH2F6DrLqJx7hWmFfGtF9SXYhbmtPCyWPPJ7X4e",
  "key30": "5TnS3i7E5BsB67K3sWGVtMqwyX3HUAu9gUwnPMD54SAkpnYDaprFxmvpHmCNiUT7my9uB7ELDm65pXnBq7nCfsAn",
  "key31": "5pQqpBZec3rUpS5ATLdqYmjmXH8mrJME2fqx58NeNLLshAvCNzCKM4LjdB5xvZp3MoFK5T5iQL1wLGrHDPTfGJVW",
  "key32": "2Qqs12kyi2XYf8ooDxprki2aGES5bKt56rySp81mQuzzEPBBTGUz4RDGoLc1M9EXrhB4j98FiTHhwnMnNU9Ra5cH",
  "key33": "iTpz5Yn7KuTnSbDVvXYDkgNnDoBU5v5q919YH6AbFvmgFBXmiiCbHxNHWAtMTpEp4G9pC21GptAJfDbhH96U34T",
  "key34": "tJfvdvRJuPac83shp2HGLxVzAtXsu6fQyKdtpGYvujQWGCsksHGf2b6jH5ar9zW3fViEP6Xb2HNyuEgKxvU2Mgk",
  "key35": "2eiKy5M6DvXhbyC9p6vsDsWKo8CdqLZNe6wsaB25UKx8Kzcewc97gSjnG54v6H43aDstYAuVZudMR4AbQGRXH435",
  "key36": "5dCTxJgNzgZ6qJsXMbcC74TZwCbWeXsbTiCvcSd9nPyFysP7zU2Dr58wDrvHbBEvdxfHYiW9fkDBBqqnBK5xrKtG",
  "key37": "2iWxvMLep1suRTjY39Bi2HTfsekQm6qknu6hyMcMawr5gcRsKVEJpRzPKAr6HioUPyREaQoB64jX3CyW9dob8DKn",
  "key38": "2i81afrMFdtudf682CQFkXLyNa2FAm7x7U5DLLDgKwm2isQAeWyPU8EffnGQjP6dLj91xFADiAmZEaQ8d9UBuQuQ",
  "key39": "412QQRmrGDNW5sxHegQutA9V1KWBBJ1F2zGZnGGJMVveXhtcmfBjywLJ2qrnxr4WTFSMmYkd38nLVWfFwAVBQ7NT",
  "key40": "3J152aLuiMSHi1HweJwyTSkGEJ5qWbE1t65z1P8gaNRb8pLR9JRHj3eoarmGW5C9ahXjFiS6B3QsJpWuFYSPYaQ7",
  "key41": "5mVpWzUZBQUceHmgSkiD4h21DW4Vcj5bYGuSrAnGbeQv2GzgExdz5Uvxk85HTexGNYquCFeq3K9WwvwR8aQqgeyW",
  "key42": "N2zdhHR9aJ3vNZzKj4Wov6XAVDekky8Gc61XEVdKKf6g2w41weGfne5RfZPzuVmGD57oergpqfNnS7q4hbDfs9Y",
  "key43": "65qieahYBzbfKkjRHPs3aUPa1muJzkwkep6fsJPuFkANp78HRFrMokg25wADZRcX2G6XPmhStA9tM1haeeRmqnFD",
  "key44": "2dDhMu3NSFezRphAT75oP8ebrErnQ9GgZRMhLJkkjrmHNj9W9wr2N9FZFBW8AHUvU5uSwdnACuvr1acggKhTJiwm",
  "key45": "5Uv6c5PdNWhNNc9zSr9yPa2idEGcndYh6nD8tWmo5ds4Zzn7AGGyoHtxZbT1xSWiirkJzEA39AnZaxnYcEKtgPVs",
  "key46": "4EKeynUsS2ZXScWjGbS2mVQfGjbT3YVYAVT8QvvP7gfo7i2SWKgtLRwwCtPgG4fBU7qqmig2xXdzVXayQ26sorrq",
  "key47": "5JffqPKKcQKwnpz9v3UdUpkpfRHmBXzVtUJ2AkE62SExsysw8Y8ZDfWJVQcFKv7NGvUHijrppwahfWVsFGYmhV3i",
  "key48": "5zxK5BwC6zcKSJcuFNzXSZD7U3Ue3qpKW3iBK6v4a9MGmKaicbtmLTdWhKbyXshY9Dc134PDC4R5G5J9byXfYWmd",
  "key49": "5hEnjUW2z6SWjGgp3ChQS236kU3aP9onJ8ykPriFRY3kaCBu5qyy2fikK7ZnHaAEPdiyLiCq318C9RFTpnH68Ssm"
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
