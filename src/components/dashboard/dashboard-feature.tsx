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
    "3iGrU24RHXVo5JUCJhA9rtis3qRj9eK4vWBJc1H7QHzKbYQh8L7aSNGMYz24M3ivKrTZhpjKGJYq3hEJJmdSceSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GrgrFdUiVuz2nEUSCTNYN5SqgGLFvCCrSa6R8GVmxgaLUT4txbv7usuES3SY7iNrKGsRtohWwqL2YRc1TWfqi3c",
  "key1": "2jMdXvuJejG1x2JALyx6cMXiPj78KmwhF8QC3eHVXxfFK9sSV2VWZuwKDw6BxjMQF4TEqwFPxc2CTS2vZY9Z6Bmc",
  "key2": "4sNiJU4ZZFDFdtJeDvgmMEmxDExULinA42tqDxL64zd7nAHiY3DoqAiupBxrzaZvsRL8HcYQUwBQ1NbLASeFXe1s",
  "key3": "4xoB39hYLefATeuoN64xccT9ezeSKWzmhEGLBeevfZPBWjzJYA1sRsP7Hsh8vjMy2mn5YHrBBkUd9dX5P6jDY9aM",
  "key4": "2yxRc7GZXdSb7cmSgFPLyYi188bURwvisqXvaaxR44crxd3gVH79UYtapEnV72FmNjVHYEEJwPEWFkhYm5aEhADz",
  "key5": "417fEgPobFZGcGDKAQP2S8qHCY67255yKNAjHw2hEiwHNtYXhDx38PnUwTQaYuS1NgJoT89S4jLWiTA3iPj4RefB",
  "key6": "41HKNNhLtSoSMA1SZCoPVj1nGYaudrKQRP2YbstHbSNzuJi7jrgBJvMc3J45RuCpyZttCQffF1qpJ44o6MnoNxR5",
  "key7": "FNnhT722Sjax9aPqiKbSBVhRoiWkojkDCLUm6eG7YUXr7GqVYJQFL5fYcUE3yB1SghwEBXYVbTLu8hNGgTQHM3e",
  "key8": "2BjvwNHq9g18KuYvwjvG2qdNWwqsL5u3ZMGv3LCGfcuo752zo6o8tyY7PxoH6VyFygqbHiVioTeAFraWDpLdWdXQ",
  "key9": "4iVj99F2c19qCxC8qkhVAZUhzaspt5UbFZBL9vvCfzhZ66pM7Kmo9GGKg8BVFKaSUYePuprK7itTQ7pcpXg7Q19N",
  "key10": "5sdWmGbboLmz4CbPoPnCE1zJpUeTn8Q7mLJXMMXGU89B1NZkysJgrgnFozYbb5gMYXCsX6rApudEx8ydS3QQZn5N",
  "key11": "4RVhb3sUcNtxiJkXrCxmp9zyCNjEHsjLqu1UeAGtbJhwq3zo75q3JG2DUaj3LGubbrbu3afa1TuPJbEtmweF4qUM",
  "key12": "4BcK66tL4WVophanDCcZg24ySGZkvFjsGUrCMaMDh84uMJDXpyBUZZVgmTEcffGguWz343EbpqNgT8SythmucEDW",
  "key13": "3S9CiB3hbx7wdh5SwkTw7ThrymTgey3xyQEgMpCRtXb6xAG8QSKm89sRH8qPvai8jw3pRdQZp3YhSt5bChrfjt7t",
  "key14": "4ZJtEnXgnBaj38rgq7bKm2REg46o7QCgzLjoGH6srX2x78aP3ZhAks2QAJFxTeJWi4epkm7WYKVbp6ZaW9gTjdPP",
  "key15": "3oKuA8iYgGE1CiuVayTbKaEBLpAib3BFxo7WjEYs2WqwqW7NafMmcKo1SknpT7wAYs414unhm93m41SKNQZxJfBK",
  "key16": "5b2LDiLHb3dtDbaBUmjRKqsTC1b4QaR9pQ6V87mu7An47GEGKrxh3TdiAQhjfrJsfBRVYEkEvtWT1GQ8eL1UvTYc",
  "key17": "5u4Es6H6Bx3TqNpfBiwMjg7TXUdG6nJmE9frdy1gX3EviaLW1FoHEXqzWoWdHACDDcZtua6G75cjLttfn7hwQUAw",
  "key18": "4b5cWg8hif4shnYHGfwgMw3x1pFxBEc2bwgvFNCHbwq8RiFsUU3MTvnGr4bAGWAGgcuoRretGYy4cJmkUzev7opR",
  "key19": "5LxWdRsSn8wze4YseKw8vgCHGbZxXLi23G2nGJNBVvrckPA53SDcEncwxsWjNEE2pXitUGwJPrdZe4giBFTnB3Yf",
  "key20": "3CGQ9ufo3X1kU4sEQjpEJwFVnNphWZYh3LoarAFdg5VpsZxfn3v9MWpcr3aGeud9jCmxujLYkaCAMywtF1dnggL3",
  "key21": "4fsyV65uKHWcJJuddwaGznHxCoEReN1D1deekg9LCQeFGZvqU4zVBRyQgHoCd7RQQCTFERRoB9RVkcftnsBsWuzy",
  "key22": "4kX6g6rNgi9faPLmWqMZvSqH6qTed3C5CBSEFdwQPeR8xGSknwTYmeWvdvmHFrfVPEe7F1gYexw9YNVHh42CHTHi",
  "key23": "3QJhUrFAmAiMM42M39ztSU4DRLt6rU2xvseKeHQtuwyhL5s9jYAUz6ytR6Vxp3yj3ov47e3oxdZ66nGm6PQQN6rh",
  "key24": "4XhkTTc5SXWugH2Do7FUyw2wnNqmXzpLC4FqUggDeHP7aQLDQzdqEAYatnoS2J7YAHDJ3F22AK6caMzDWPXsH855",
  "key25": "3mX67aFJEeuSq3RxkrVdMijJXTcJmhSuoxnanPc1bgrAewAPeXDMaFLeHuLkbA2JihHcH4av73GX7tr1aw3C1Ze1",
  "key26": "2DkHykcqhRpsfKzCWDxNVwnPsF1ssKN74EVeobfcjiiv4dYZd6xQM9D1Pj9tHyEiAWJtCnfboJ4v9GQibhMq2Eap",
  "key27": "3coDrRyx8zLibzgwHujfvbTtYgspZj2xQyCdDapaRveryiRJRJhEDed9BbjS9HerzH5E6TbAoxo3fieV1VTuAyjN",
  "key28": "3aNk1m4eb3AwAccuyD3Sn6HVan8E9zhCEBcvJ9uJ9CPi34WsXFAdBT6LFV7e9f8zHcPbptahcKuzVUYqsCGR8GiP",
  "key29": "3AydCRTd23VwCc9HEMGdcjdzim4qUKJ9B3Z2UZoNn6BzMGPpuFP8nmYsQ9Gxn5hdAaXVoPBzVQE4A1u8p9F8La33",
  "key30": "5j4Rwa3xspbSStjxWeqJBZTrDxB16391ntmZowYYQCfsd2A5m2Er8UHzZ7tkgH6Ya2oMvu5QQP5S8fjEvCzEzLYZ",
  "key31": "3YQrYnyDixsLXZCMRSAytqAUdPp65pHAW6dcvuBfVzUhWpthQst1QKtRnwjvc21dXR6fzauCopeGt3zBnAJo2pGz",
  "key32": "4EbzbnbnUkjLmDkf1wc74k24LZqzWDF9mhnHMq3cWxjD6uSKyhLUC7b2pAQzWRzbXXmZ6MYfyTUrLHZa3ap657yj",
  "key33": "3B5xBaXSvhrAandBWJRqEmZ9K1ZPP8bMq5YSHxMggBfM89GmwPqdXXQnPnBQeAf5sxWtzNewiUzf5wHsAtRCmEeJ",
  "key34": "3kxZy85Vw2z9cNJ7iDWQ5hpGeMxbgPFjnjehU9i5i1ZzMBZnpyomYnf9PXMfRoGUaPAFeTbm29QyYf19NJg1nVAo",
  "key35": "65npJKEJXzfa36nk3PwE5Mr5HnojsjTNXSCewDR96ATEo1r3CffbMUe8QbL5LsHM44aHB7AiWwidXynLDbdAUtNU",
  "key36": "44oZiygvgL3BrG3NsBeMpabcW7QsSYbBAy6jSNnurd3Xo65hJWThF5CxJRfFD21BemKPaSrWx5Wt1ypjVmbAKUpS",
  "key37": "3i6vPaonqS7MLpFV3QLgwXk8ocE4BKLLeR5yqktmhNvoqFDAd5WWCRmPVkCPiGi4RzLR9dQfBryDjWgiu93c4n7e",
  "key38": "3dXTFHXf7UhdoynfcQc5oP8cePTtgWBdJucH1mfF49avek4Ld9u8KgwtugJhnzgtfdsU3jSNfG3pvsAhMqCRwE6g",
  "key39": "4HJUfyLgz8kB8PskUHiWuBkmd5vojARdsqq8xSwnmARayxhusxa39QoPjpXKzVC9krHisemzafchBWymYKWWJzz9",
  "key40": "4jV6YNPCCuLKomoCrASDub31fgUbVx1bx5NumDDV3vWQVVq33RPhjBZ2BjqbeFkW4Lu5EqgAjneCbbeXEecXndH6",
  "key41": "3MikZSYVgz7nkFGjcDEnWesyvU5cniXuQ6kb5JLwmie7uBeEVzz4sa8syYSuDfXoBTmZk21eyZcvmBMKf7DLax4z",
  "key42": "22FnmnUphiu4G7hpySig11YTYsQT8jEXxMDM8FK36WiuZrFgmaTF7vgDCe7tzrmJv2e8GPuVoFwMQfCiz2MEs5ib",
  "key43": "2sf1n2izAvckLJcUurcBg16knrwzJFwTXd7zLcJd7MQNzhCNg5FWQRYgnGYfY1i8Z9cr35ce1Xt1K1CGXxVLKUDw"
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
