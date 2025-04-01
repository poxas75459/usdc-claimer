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
    "5LrEKCxPW3wGZNM66ZxmyVEDA11g4HYBsmd65zHPawekRh1KJCAZVveqTV1a4YxvfVD2wwqUzh7yi64dvvK184CA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38Mcg2TeBtjwUN3rxBrwDFDhbmKcPZPHemTHQEoHLvTaKyxDjVcFnnxc6FhQeL7ydKMzCFgB6VWgNhwUGg9WFpNN",
  "key1": "5aYUhRcZtH7DQGPXN8aVcUXWT2zz9TeTC7ej2ocrJh6uk1hzFoqUCtALxMKww4emaXJ4iEo8Fd9yYFKUNj6ds29j",
  "key2": "2M3EijjFY8au6Joapov7VnfUh2myepoE1gWbvgdKJPDr4vHf9ZMBkUzrHGd3MNQ4FwUP5h3DSG3PWq2yxGJjPEBS",
  "key3": "4oALqMjfseTz2SaEcza1PHGZfQCHF6DoufdA2mKbCLdjTjhoedxvnvkCVAAqHfEa9vQjGZgUdDpLFn53RYoTcLPv",
  "key4": "2je24nG7L2PBLdwc44swfKkThrh5Q11AKSvmuL99gM7UR5L5yj5P9c53DXB7Cp8szaTDJmhw8UwWkQPtaEbq5cKe",
  "key5": "4CG2Zng42Mxed12cgCcEvHRMKp6ZD27sbMFR54b9XVZS4AGXcywY7u7xBXVfdRyhhohCe3W6azdT3EdDjAShVZU6",
  "key6": "5ZKiXfxeJiJYzAysV4rsV6Qhy9xsUd5VENQefCspf8uYFwgzqBv3LCftYAaJxGbRCGN6GMk32MFrujRXAjGhLB4s",
  "key7": "3GWqppcNyXrMifPWmrDD8U9vy89k8VmPy8XD6cSnhNA7ibpDwefLn1zPszHoHVCYGoNm9uFAwJnG8Rqwrz4LR4VU",
  "key8": "3n9V2NJjf1RdRWokZfknU1NjjiHyUCvgA47DJ6GRoMdnXyCVvpDNhBNCeP8rEzW6PSTKLd4PhdnBXN3hHgPWui3z",
  "key9": "5ZejcDKB8egt9B1VUroj78ELBfgKYJhRm1cFm2e2kjTJUnnkFfg5Fjsij43R7GDZRxpTB9sjvxQVFmsmZWCCwikQ",
  "key10": "4qhnbR6pUKNGbyboSwdB6KT3UUpVZxUg2oL9CyDNRF3r8dikTBsWbkF6Mnksdh1ax9mdSyQUSsLq7zJUjjPqrFM7",
  "key11": "2y8Q7K1Xrg2kSTPpyZ57tFTSfz3zmFoSpN6pV5RmoxATXQiGx4a22nRMZNbf2zzqprd6ziCrQJEUXsye5b7hFXhf",
  "key12": "5kW85Kcd3faYwVtWcLzNtGNCYUxY2Szo2RL36bs9XVGJnCqJVWKaFH2ZntQqzbffQi9TYbxSJ3qRDrDzVK7TBSeD",
  "key13": "5XyqN5BwDbC97fSgq969D8XXHiufMRS6cBePoQt9Z79JwgXMuHRx8jRaG5jwYsYM7e9DZy8ziz8vS9HkmyXZuxpp",
  "key14": "xs77LAZFrhneF1nv69jjDAxix49AG6Z7g4XKy9sA8zPS3BgAcPWoKEqg68kXJbYGxxdb2QY2jxM4EHG52w37Eyt",
  "key15": "37DktGsJcQWtT2GchoyzSq9TrbybZgvvsxsajBTrrtS588tEZsoN7u2pYvrY7rKAHsRFAAs6P18uHzbJ3qpVV1P8",
  "key16": "666Azj59JvLuMaQA5mPx56XUdHmbNDLz46W6ZTnuN7FAKSQaooBWTuUuuDCjv5VfqMj7CX2gS9cAPs81pxqL91Pu",
  "key17": "3knHSnXWcsprTYdEkWYLAJBv658Sk5AJV6DXdZzarsgrLRMMic982KjwNoWfQqXPw1J5U5tgxf7V9ciVijQzXCbR",
  "key18": "qSabD7YLZWpeuSYYJqnDEL2AMcYxgiBfMCmUrqPrBxqEjNJc16qBTKi3dB9p616oSe87yGzcibvVYUkbJYPPD25",
  "key19": "4YiqhsRdfGKtZGmCAooU8GuKSPbt9XTnMpdeqd4zpBdMgePFRt3RzqFu3mgU85qAwf5L1k7H7KMQsNwvUfFwGUR9",
  "key20": "2G8rB6ADjJ5hZjNmvX9rfzYB4M1EPgZ3Vph1Yriq2n7pfR9qaDEhwswJ7yarqgAbAG75kFyouPSU4426nYnArpYd",
  "key21": "2zwxkaVDhXgsStn1FoZzf3d4K3Ccw4nMz2pVrVANTMw8KRj6nt136BQgvHPWypap749ux2QothKzZ75aMrvVHnpY",
  "key22": "ZwfoJWWgDWgGq1h7xf5hpWhHzzKZaKG7g6C5Brm7s8dzC5MZFmUVAzHeE3bhPskShU1MDthb7W2GM8DCeRrihrg",
  "key23": "4CEYutjEmbJ8Fe37RUmh4P1z1Ce6tfujXovTaFq4a7kxhetAVX5q5zWp2ha38K2U2CN7Nz6tZNdUxbddTPDKRtPo",
  "key24": "BkcwXo8dB3mDU53qcV7Qpv2zQmZYUvK8kwLCG4w5Kmshcike5Ygwn1QCoEoEiL1bNgdqbeKKEU5uPGo2yuthbHL",
  "key25": "4wtGpjWMUHBZ54cCcvmcj9oYePcFzvncfJNgbqXC24HMmpCQh4tc5BCE2PGSrKGiiyFH1kMQPGEVmJqCVwzpciGd",
  "key26": "2157uqWcPj4oFMuArTPuY3QpdvSYTSkuHfEzp3xbHKCfoayNWYLG57hXRH8Uu33nGLhp9q3p3Z3o1zzyLjQQsd6Y",
  "key27": "4TtZNGtg6KC9wnqRyRrNVWHpkh4QbKeGUPvX45JnraKug1jcnWHQg4MGeSZMzMC7fdE4nYPrCFBA9gsVJh26Sarp",
  "key28": "qF16shEZspXivsc74166frXM3pewN7Nk99WEv4gY7yn81ipc73cd2ALVWTHRJba82WqJSu8R6d72p8WnzWKRtu4",
  "key29": "564CzjqJWfUX2q9n7qkzHUFb9yJgBNKc8MdbGDsR4beVD48p361Urtc1vyZbLoAtmXsMqp9a3ShqKL1LQyMfeaKw",
  "key30": "tuARdHkyES3HQM5aJoMWTDPfMuzZiFSjWZNT44yFxTqsb8CfGeicLhcpfJMVSq1U1rw9p1kL1UyaxUQ6NrSbvS4",
  "key31": "2SNEziUpk6E3jqhduLb4r1wAxFigYTK37qZhvcVrjwG9epQirYgHftFRKcCwemy4KKHpUiGWLZrwmWHSeHy15RqP",
  "key32": "3QCEZXe9CLLgzCYomRWcSH7UGfJfWyfsUrUEuYRKfPk6TDDaLZF8jdH7s25Hxk562jrd6oYQXJydgRaXE7W7pyKQ",
  "key33": "1ta9QgMctbSQrzmYCCzPnn7RWHqCezUhcKVZbKQJgNLXnxB1UXNMm759a1YnEWJ9WfwnV3KPPLxu4bSCZK6p2ZU",
  "key34": "otRjdAsuKHadyvSonikhUNJQoAP3KTv7ntABeGiMomwgpS12yZjm1Fb6AAvsz2eB9m4VmFBiJBYJVRreMmKBgv8",
  "key35": "4KxsL2aMoHormfsiDjy6qzzMtjrkJjfAStsp1cCyuhMB9rpGssKJZbfSyRk6ALYc9A6oXEiFMZF11CsCiG1BQZ9C",
  "key36": "55EZVs5XvjixkLeVQHW9NiZniNoZ7fWjsTHiqSXUUqdHVvL7dLeSnWuor1h2PUFQBtFBhCmPqbb1QnpZFjCyjcr6",
  "key37": "4UQbAVc1zL2MWSD74TSeGTNtqyKYxceWRsQRnX8ti5rWgQXnTxNTPab2byMeg8R7q5gMQBrwUYhBorBmkkkj6D5S",
  "key38": "5T7ARgQtq17xsDg21ZKShaGUji6vPAoS3wiji5czNZ3QZQGYbQmPsYYAMQtguJJ4TEKVM1VC6XmTLfT918emP7Ro",
  "key39": "4NkerX5YmPWotiUiVgvtxtjLBHqQ7cxGpoiMunAdde5Z2RgfygK7cE9MXeE5YjRGB7RDEczndLyzugCmiFzAkK6J",
  "key40": "43afYqTeT4XHdLo3PBGCeJLNpdbDHKwLySykEu9cdUrMJD6xbdhZUZJh3EuQxSgcMj7JYxf1gP6hMop2KkK8XnvR",
  "key41": "2N3eiJEyJiJM6M72PVWmZ7ggc4GE4fc1RHyZNHdzP6un9oRyZ6yDWHtQpUGJYdM3qVUwyFSpqeKMswrpAbbY4vk4",
  "key42": "tfGwJFRy9UExo31Zm187N6NMcQgG9v5T1W6M7nhShSmtFNYV1irqeKbAiP6VcALMCW7nDdQESuDDFVXXA7h6tVB"
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
