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
    "3vRsBdC6GMxLNB9oUG7QSHRD3yichNCWG7DpfrtetcW5v6fu1HcyxHSfxBDJkyaobHjkDNxjUKZMYABELdivJQtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5az5qdMcquvjkBvXNevZpLfsC1KhgsZjxhsBy2DeT3yqPwCsfcDa1xk9pi1mRvdi4s8KGAcz7M3J6wqhbH6TysZD",
  "key1": "4Thd2oiKGjcohvmfkk1nPqrG8u79TWptLrj1sE1FpPCCZqhv3KBasRQWCw3DzB4z8aMHV7ZkAS4xvRojUrbRKG5c",
  "key2": "4TFxGKfUBpznnGt9TdPtrKnTgsXwk2qP1RSwAoup1vWtcKcinrrV5BmXEfbPCkMGEyFkPhLU4LX4kGLxkAYLn48L",
  "key3": "5zessKoisYP9M5H9NFcMXxDCseU4NdXsrThWm3qdb87uQLUnDB2t8bC2wqRNbWWrL2EqWDs8TnokuNHGFURubmDm",
  "key4": "Nk1baQMi3QzfYe3K3NGj3RjBwkx4DVmAvdSAyFbjYjPmAeV7ubsEXBgfcnbtqcuWAcAZ5vKytkcpRoUgTU3jgVw",
  "key5": "26HLvFZ3gTtR9wJbs3qspSYe41MnrCrubQeWnaTqrRxLgNQhLc5DQsgBDCBmn1h93XBvBRH6j8r12mXmEAPRNcE1",
  "key6": "4dfMGMbKbuEcAP34LLgV5VUEZvHD15jkxJdBFHrNJMcRWy8MtTpng4X1UzhSo6evKSvc5rDaZAAdtdHL57xNHe6e",
  "key7": "489kv7Q5itVp3aAXNcJiNC2UxCeePpiCYpFGzxdUCihRQX4xjbVCN9XRUKxYdnGfynookdsn7Y51pkhcgqCdUqas",
  "key8": "we3CDmX6MiUd1gZah8yHFmgEPGD5xhb3baVWWcbyvLkRCyCY93FUZ45wMx17B7EiceVKCjxQU58BcwWCJHwJthk",
  "key9": "4NrQETJLd9zMj8vtG3ZeJm2bJuZqkBJuxsjSsx5RTWm6Guhs3P8kywetWxdyVUkYCRXT6bQyQLDGm4FMzLLSiiUs",
  "key10": "36xD8UeMSw4kaqX4DzSWKa8PGxp8dvBuVjuWJhK7BzTKuLr9N44WEpZUKaYAvciB1x4gYEdrz83gNxwBpLcVCLj5",
  "key11": "2aedCKAKQT8mSYomyLFBDhecTsNwpmjYLGPLJLnKp6YqrZ7STy26KGvSzGkKkbveioZm3KqU1MGH4nzWaiLU4DnS",
  "key12": "TdWv9LW3kEzz6EmVKzpVBWirNSek2SBaTE77JBVMd4EzqrM3za8ufzMnLdPUDy2tXDauXfgwWYW5fKqCh26K6Ju",
  "key13": "533cXhP29GYm9LnQp4ZLqjzzncX86v8aLDx73MGAA2vbNrtPovJmMd3i9557k5R2ysapiTJX4x65Txt2zE2uiYJZ",
  "key14": "5isG89H12W382DCMygxYAHfyfwQk7kCJMP6PsJtZXHpZNCTMbpeTt43ecTE5yrMLd6xXDsvxpAEqcSh7o8M26hTi",
  "key15": "5WSnCu87xUHo9E1DrQiTaDtKXntBwR3bSzVVav52b8aJvv5p4gwRDmYg1rHMenGEkPfG1nsvvXraGH67Ae1HBp4y",
  "key16": "5yHz2eQKGzogjL7saDwD8cxUHiVcLvjvTTxiueoDHaAtqLt9krrcodWZg4dsZwNkkxoHPkVcC4pRQJKhmg6Jquwd",
  "key17": "2zUKi48GBkLudDkZpweMMWJGFjUVWkkbEuJ16e6yQ3CHDtUL1oRsAxywHeSXa7y8CobAy5p38WSjB1DcZY5145pc",
  "key18": "5j817xDmmmK9tcaJAjVpyyPtyWjqXAt6zKWm8qjfVQnZXQ4JfgGpxSPrfnFf2pZVYLDUAEgyYhU456NzqizHbhtz",
  "key19": "5CUZV2vLDTnZagYzemT4AYra9MukZ3nAuB6ErLieS7PKzU2ZTR5BGzH2hr7WUwchKnqhkBc2mumTZ3DpmEheE6L5",
  "key20": "3BHSNwqvMTLgxYP7gr4fETVDzuYv6vz2oYRybcAT9oYo6mxULBYkWf8grKjj8DsW8akpBBe69bTxeV3PYZe2efcu",
  "key21": "3tAdssJ2SExnLHWrSiiB6AtcbozuwGw6LcDJHXzGzoRwAgHe2y8vV6oqegUcLMxBmo2i1prVDsF3c7WwLcwsQrmi",
  "key22": "3RAnZ8hrNbpaPASRAwsqMKQ8CTsyiPuf5LXpZtj4NDdP7Q7jnG5LKAEz29pdjNUXE5o6TYHQtoL478aXKzHBbdbt",
  "key23": "4AsHaoSErppVrfaSP1F9UqsNHtgzbmeLEjGxbrUKLyswdGPKsWDfW2hXrSpZvGJ5u1T2Zh1hAcvdrSUk1FrvxT62",
  "key24": "4Qy88enWr9Nf2Yivrhc31gxA3MP54gHM4aSBnGinLtMkj1EtDNct1RV2F2WwQcQKS7yj6XrDieDfSD59Dyxyk2sa",
  "key25": "48gToAvTf5ReLrWbXRoUWMFSroUxBKWRYC1nW8ArxQA192Q6ZeujBgbeiK1MWTkzGDssMpx8VKF433wQSSaJ2ZjX",
  "key26": "4yQQHPi27pzbCnjRQB9BcVvNm5SXSPXtWgDCxra6jPhuj4dqgpLvJTjpt4gKTZfagT3Toa35vQUgY4LJkmrevEPm",
  "key27": "52veiqMPmWDAV6HAe62NWMHuqRf8T1uwBHUoNAJcaVyHcisAuGWGbadFCTSfrhK1PDxsba8hEtcVAznHDjy2LXAN",
  "key28": "3m2e7wCKq3BLo46y4Hv48bLbNjv6uQvrQ6YX2tkYYzzk1vDAGmQMLq28VkD7BM62Ubw2bFAbBszjLhxFiGYYKfCQ",
  "key29": "2TyfD6KXS1zbikJxA7EZKaidT8S75Wvo92ZZo5vuCFxePV7dGLWt6Vg49syrK8TJYeszFqHtyKb1VBxYeYYFKQBq",
  "key30": "3zMGiKpuChmS14Tk8dcNbw6TMrSs7f182gQonztjwu3j5TKJ3UwwNxW4NMpAEYUJGViL6gyhpyjxgDrioQLJrnvs",
  "key31": "t85aSco7u5KHaMnSH4tqqyQAByDkdKbz9zttRK759qUyG5R3bD3JycWnWSdaqpscJ3cpxibXy9PXKsij3PsZUJB",
  "key32": "dgomKDvMP1h9wmLYeTuEZ9Bz7CmtRJm8CgHDB5rGiffgiM6dKNDi8dUxRE24bCz5ppFVWQHrVAB3yZ5dP69QxvG",
  "key33": "uYSjnHs4Q1SumrHbNcV9Qiusq1TaLX8F25L7P35vFMHhPZfKpdhJcF7etXfvGKyDi6NaT3MyPTcSXFM6G7jrVDZ",
  "key34": "4gf9Vk4CKWEg9k8TFC8sbVRx9AMvKF4rNwj84o3BPK2WCrJs7LdJtMFH2fELWNCCdoKMiMJ53HXqWQcFmE8Cw7Eq",
  "key35": "hH1oKatsn4BfCdRfbYivTMNunPjxF1Eh7Zpdyk4cFx2tu7imXmHcHc2uu6kuGecDQ2zi3PNG8rEjDBYfu7492Ve",
  "key36": "2aQjYvMuQnXRqsqMkWWkLpEUrgXyt771rUc56LR77j3DEuKDkGYs2yw5uSpmznHJcCcCZrAHJUonypFdfPrPi55H"
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
