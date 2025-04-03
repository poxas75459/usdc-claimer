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
    "5FF6dmJfvfN36x6pBJ2SiPQz2wsiCBHnvMKuE88v41u3AA9vekngBwuTghZGLiAKS9wT3E5BomZwLnWds53sQZQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GhGe3Pf4g1KJXx2rNiLo5bUvEHfZxerxoAuwbXn8329nWVbBAcc5jv7rbnS3sDbQraZxiCcWXSwPf7ZYE8hT1sn",
  "key1": "3Kgp7yh6epZF9rvzk4UM69xjjwZ3cRvjhysdKYDaFZayRaJwekW4xCch4gXgtxgVg3xNoYkVsf38uHCED6f31vBM",
  "key2": "63fb1ofHg8RG7iCZwrhNgMceEunmyyZYECT4d8r8DNTTa5gMHJWArrSmc8NAsL99yoSLbewzQAfN69qEr1aprRM6",
  "key3": "yVucmhZqEZKZaffRPsEq6pDtFD8q95FKvZAz792bSqeVy3FqTfbSuJPCaXUcjW2CKATA34fWLdzTiBoXtTqV5YR",
  "key4": "3281fXTKiErQqFEdz52UCL1K8zNNBe8ejx72184zthr4MREaxzQNuJ4PxLNKNRr4W96F3V378DG7spa9LZoHcdtu",
  "key5": "3ngY21WD5rnMfLZQAZV3T5qg4PrVUwqQ6ywWr1LwuixNu8H1kjEQdLo6kZ1sCCnJXHpiCsrqQ3qWfggMUM7bsGoL",
  "key6": "5mNmFBm1SrGPUY94XmrXNs9cbwgcEz7xG3fR3Nqcq5Vy7AqMmK9dx984RNgFyePznUgxP55VT9Etydh3BDfW6Dw2",
  "key7": "4wAoUpL6256EcEDcFrg4r1nYKJVNnAXPovmGYmbsczismZZm1AE1NAJNSwM4QiixBcwqjzHjersndzLAkCa2SeMt",
  "key8": "2CTdWCVPVW2vkzb7qVrpU1tUggdCPwpWRtMfHVi8bkcAAyJLQd3zgMPp9xLesoDFrgGvW7T63mQJPh2eqrwfbmtU",
  "key9": "PjBStKW7p5L37hPUm4dAo6aLAFuqyzsQA3d5yJZE96B36HiyPcFTVr9qrhemxXsffim8VcpH9MebD2xtXcqfjkk",
  "key10": "4UtzbVg9BWT7SjtP55eEqc2F1hRj7LQjzmwFXpHaMr68CUy9thAY4LL4ovyppGFNuC4NisaxW5MpwEki78oPxxuL",
  "key11": "3neH7ZVspqy7Z53zTBJxsJnjcJ1vz5rvDswyFRFe9zXBtNqu9SBiKM8Ymhy92WjPMNSoQxVhSsPsTYXC7XBAWhW9",
  "key12": "j7mfLEhb8x9uG786R2ZWxfhrHFx6RpRyWnurFpwECSinGLy4FB2rB3NzEQKJoCJbvBTphBnmyhhCawp6w47ZjWc",
  "key13": "55mUeucRDzuQRSN9R6YukMimd7evsbJP7P6LyVGiEBXbfoXZtfRenmZ8XA6GViYPjdWjxAyvacQBKvEKPEcPkDnR",
  "key14": "3fzq1vAo8ZV8UXSCJq89XAB8fJa6ukSbkzQsy9NQqN1269CZoaPNWxVRfUJH3KKgKf8eiXk28XpQMVhDReCiiLPJ",
  "key15": "3g4NrAGyigKgNnjZQX8SFESHJG3DZW1HxhfdYdEbq7hRr6CMRMoKf1Kx4FVh8Ewh9nf6a2Jij6qD2raBEV5aYb3V",
  "key16": "2WssvKa7ckqq4GcFVbYXFQPeAyJnFpoSzFCyeo7mzAmSWwfmk75n1BHAZt9CLH2ZNurKVBeNZKYXskxLjn6bZMas",
  "key17": "4vZZepCNf7k21f6HwnjjXjL5kazckonx7W3ke3jxaHZF4p11hJTDHHTmu6h7Tyij5dsRvjNoy7EiEazuHgBewdBs",
  "key18": "4rMJnFQLoyJxHiWaDiPULFDSDvoi2AnhKdtcmFrmSzPhJYXTpa3U69JuQrDUtLTajbEWz8XyjH7yzcNmv99kgYLU",
  "key19": "2Ef5kmWtkWdmXgTsBf1eLk76KbYNghAdN5TGAHEQqhbn4TUt9uHB5mvEiJvtpGseTJiNgPMnVguM5yk1zWn5cS7y",
  "key20": "67XiHwKX1Njy85NNtGcHogEgmtbyd1oeot3YpTya3osz4ycgfwoJymXcgJE6sLCX7GW1Diq8NT5zdVriddvx4FEG",
  "key21": "46nnELuTrMQAoTrDFnSabaRUB646fNvPXV9BVpyeybCFtvnEdo9V8u9pjhmJHinV88wenuK4sL29NA9mMA77H9Cq",
  "key22": "33pujxHdRyWtQopSXjnyiHoLQ9tK2mMpLwor96ie97E2uK1tyqi3yT9kFA1s8NWjiARYDaMvzAAGPo66uFj2kDeW",
  "key23": "5EWun4NNeahXLKNgoTsWVMPJskzXenMtXvLMTQdoeVy8E68SpyZYwa3LqE5fsqASQNxSSq4j2p39p6Hq3S1Senoy",
  "key24": "tDSgbiN3hckrCJQi5GJX3wC2KMrLXsjjgjeT7o7KYQ99PCCHkFaGcJAePAXo6yNCTHyZx3xMCR5cFyPSoRSHt3p",
  "key25": "53FXmy8RMBgWkNwYHdqhfHRbUdRXu6yv1ep1Ps1xCk3wrcAUMVFDJGFFG6bXrA2eUa5j3MUWVyPMEbqmHZtfWCEE",
  "key26": "2HErZy43LusTZTSBPN4aKwkeE5MwU8rjfFKneEwNnCki4rL54FNPAQWBaf6M7mqETo36F1spttPvUxqu8QPGGFnq",
  "key27": "21VhsE78g83S4z9vGUq5KNjCkYgYYag7YVynBCZ9VGu3Hh8DrJq5AgaG2HduUQtvjbqWwa8XnkbgNFa5YVm2JFi8",
  "key28": "aRY7h3AmkPJ6XprGNXWXKNTF6hwNmYASUBQHnqkoE1nwakuLSMpsoVGnDrsCkAdW7iuHwabRkXubATFpGneMxgf",
  "key29": "4eKxcfYtWGsHMszu1vYw7hz8SvXMb4qXoqGGMAgfNENuXWhECiERgv4yi2xjAtTcpWPLirs94TqkuhAjf5mSsAfM",
  "key30": "2YWP11cd6foBYLn5ZSkfXvP9UcyxPjszADwuHuTT9SM8JV77v5Jzcop3zNMVX9vd959maCEobUJ6dzEgDfUcHDXo",
  "key31": "PR6xRuhZuRZRZie8jETHjRqUkAGpu7HpKU4E4jfwzD7SfeANYAsPFFhV8Nnx6ZhSLtAYkDaZukJd9D2fcgpNZjB",
  "key32": "51BvknHyiJcHiDDJvUCSnE4vuSmHdVfyAT6VrzHoMXBZaAEpB4Mfm9yk8q7jSJtXYUAad8vhkpeoCV4HDb7VhY9x",
  "key33": "4mDyesjxRv4yt5R4s9ZVqghip6nJSUrYBjvrug4pU2CVk7nppNE3kVb1QLJY6ne1p5ZUhvynh6chLGStNr6BxbZf",
  "key34": "2TWe1VQbDAtwP6aPpUR1AHFgu8cAuLqwosXcEYsvuZXUxLKVYWhvc4TbL2zrgPJpPWNTsAb8qumrpQxoQuW9wbTN",
  "key35": "3VwYTGJeszxwTZvtp7wjVhG6nz1y8iSvijbdbKVLoBTRmDXruANf3WyANUZGtBGrCXfAMBZCqzS9DAYo8jTAXdQg",
  "key36": "9YWoKEgceYAArzazFxwd65AkVn51KFzdqwtnjTqfmJR4p1qHQcrcvFW4Dc5RfKA7e8aPsnb6JaWfEnS2Mmssn5o",
  "key37": "2Jb6dJh8Tr1zHUGNqYxQbNBdKC7LSx8soX1o3ETCM1zagQ7hb2jp1XTbXgaBrU6ChZMqXUuEmTRuEfhwaVuWQoCH",
  "key38": "2zFFurZK8Z5bDko4Uw6V2bHuCSDJFKypQd61Ca55EtTELNsUHYtnNMdvfmJWQZ5jXiaJp8gtxFPPr6ydbeiFKGsE"
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
