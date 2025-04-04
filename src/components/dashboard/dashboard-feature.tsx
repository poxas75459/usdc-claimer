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
    "2Ltumb6ddsuss2GH21oNbXTcZrzAoCD167JAvi1iwwsrWR8aZphLyH6FHxUTdLjopG9fTpGDzRRJpEq9soWznGBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Symz7wqK2tZ3YXUfh3XSV9CLsSjhvXCs65sPvHbbRc57dvckaVqRJe9ruG3jjihwdJb8mjXvAwswbcEjs7LVfPE",
  "key1": "3m9G5xYzMCgKi6FA97Dn5oyFrF4rabLpYYwBQCerDDJVPmCQJWnR9mexQM53qHaKuQ6Lwcfk3KkLxLviLPj7sC6V",
  "key2": "3KTcsdGJzaTQe7JBvkqcUDCfA2hzL2oS1tfhU5BRgy21rBSS8zRNhuhtqsVgxXNNCVEFBe6LL3jKVUurJLp5dcxX",
  "key3": "2ugC6rKVJmE9MmYwP5fETd5s7XRWRZS3tKVTpbdMguAVGf22nba8quECuTYXY5un7cgFnfGpm3rkNFpVFUPuoZjE",
  "key4": "544mAv2zNFjLLj3ZkDQY6CKHYLGACVoH2AvZQevkBypvyxbjXWUksNqdNeBXrYixCbKKzYSuaF1KQmfsoeo2Zkm8",
  "key5": "NZnoLoh9BUxL5dACK89yXTM7ozsFFHrRdTmg3gqtb4MUZ8gsqPjYsemuSFw2JiEwqtbDD1WBjHzJu4EYxk4mMpz",
  "key6": "5sDSc97R3BMp1MoGrouyUZoMPaxsJAaViG5ZmLynHWg4Dcw4vpDx5Ca4KXB8bysrqxQQ2bZHTj3Q9YpQ9XX5JR5D",
  "key7": "3XfPSsxNccyNUysQswgiZmdqGeX34NJDL8hEUXD4XxCAyn8bVjrruZhxZ8VYVCcaAhhW8PJAjqga4BaxF4Q4ND9f",
  "key8": "4dYVgdLxTbcGQoQLg9LdNWA9wkfRbf7NDtE3bTy7jjG82qPPmuFPmuVtj3fXTDnZbUSFcvcbGy8VSM23pJ5Jq6sU",
  "key9": "4iWJZv2J88u8ArbZRHW1ocwTBGvfYw1NekTGMvaGZ2hdm4xsd6Gst7tF6pLMFsyRGv4iSaEwkamaFSokEBcxD2Fj",
  "key10": "2Bvm1uqLVP1wxunbFV3qtkmXa3huQ7dYWWhowBHeRA4jLPfCFAbFeieqjJiSv8YbFuhJZDYte8U3CDyZLtbu1CK9",
  "key11": "65grXNw5ueEN1EurkxrwddvSaii4rRgEyz8PkagvaqZpnx38fA98FbxUdW6LWtk6rMF1HQjR3gtFRy7n25J5Y2Jc",
  "key12": "5kcpgJxPcW1PZSis7QkhacQcMT7gpomHjuB3iDQyZB38h8vRjvawdo1LdtKAQ2u4st2RVA9sVsGaCA94iDsmdJ3Y",
  "key13": "51vcQUnpqrLHNRrnVeRJmKNxpMDzhEiBWPWuLnMxBA97dUpdFrHk2kJwdjXxhgLie8p2gsckffE1V9Z9DatupQPw",
  "key14": "33ui9H95v1NWXrpJvZUcqhdnWF6sygCQp68tXzDPPaXmZBGtNrMvxjiCqxjSoAfxhdRjKpsTqeMpkJ2zAwBcRi1J",
  "key15": "5BCcTRmZHD85tBR2Bq8cfUUYdvNH7VdbftcRuY6uRXv4ydv7S59HkpJUiEtiUw8JSdhcRzaqM87my44x9pRfNJzn",
  "key16": "L8YTpiwB5ZEsQ9i4C1cEttcaQf9yFoynapdwXV2qUsQTkGkrR2UrzgYF45v365u91a72HoMNGKNSU2d7hhEvpSX",
  "key17": "FFqTjX5qkraKr499HgGo1UAGGsEWGto9Be1PzuNLgBBrqsVWYQAtB1V5iHSaqfCtLipsDPauEydPELhKFAQGJ7Y",
  "key18": "4RKoDwnoHqp8FbqnwLEj35CqcFtVKB4ZxqPBt7pdoaNP99mLQ7f6A5cdsKi686oDcT6m6gsctJBeXnjrpav4QUuL",
  "key19": "fmDYJYrJ8MJbgcod9xWdSvJfua7sneXrJQAwoZRLSYNaPa8ZhnuAXN3zg5k94ptbNwEKCUqYFqbg3MGiKVCfRFE",
  "key20": "2hU7KWkcy4xYcvCaMShr41M8PjXe8GkpfyEeaXPi2J8ckudYkp2pn4GMTr8gQiB2KWwMhnC7ybNVJ14teLfJ4HHi",
  "key21": "4FrFE6a2aYSZUxSEGkR5vYUGMy4NRhQcy1g9i8LJgye7fF2Tc5X26kc2XKZioom6K8cxgCD6kKEHxCLxWJsxiQ2q",
  "key22": "HMwVPUB83tWiDrSUu9jc6B19iPxcvBy1tHzhhy6jzQQAg8J84a8JrJ8tfoLirhwwjo7magYwg2kiVDineLHTMe2",
  "key23": "5VkobzdjvbNTBFjXG1bfi2SH94ScMtMWepmmC8nKDBr9FNkKjdivWfb6ESLv1iXJAALNJ49kYn8Kzmf9zebX8Ds1",
  "key24": "35sQceV7rnadVsqmzATEmw3zBoRC4BWwtXoCfcxcUqSztMt5zBbYSyajweDPSCDmB3mGbdaPoJKB3upABJShUJRP",
  "key25": "4eRJ4JkKVNZV2FVc6oWkUAJrfZwM7MzA6ADU4aPqveVeGm1J9tE9nSnue3uppbThsgBqreU65HhCET2ttkKLXRV",
  "key26": "3NUCTMhtJFY2zgNyCneH2JVxot4CCTLkh7rFWP6V6J9Ay56tdhEYuW26ppy68sykzLLJJ8RHxhSRt8JFhpo3dtSg",
  "key27": "3bmmQb6h4zqUJ28eBNEZjZPDhHQWa6AD48a92sAE7meGhAVPStJuA9JjPAzbGgwFePyMpcMCw2S6dnwyp2QXDc4Y",
  "key28": "vmGYEBeKcLPGWYSyYkSEXUHYmipTPhD2W8q5eMTEzk4qn7RtprgD9NroctKMkGKCdxDZishHHY6APXqEV4aEv1A",
  "key29": "4J72dQg5S7wNfRuvtowLUzchsD26zsyVDwAJWNq3Lc4MLs7rmQJqwTBXY2xUm9zdVEE8EpijH7GUT4ntZCLP6eeH",
  "key30": "5TtRWEnkMwegiHbyTDwocb1pXh7Y6a6U3GktudzZShD7yq2kgjHq9EwRAFjUtVuWgR4NojZz7Ecz2egVCgXb1Fsr",
  "key31": "2Uc49JU7gRjYovTC7Qj6WzgeeV722bmNnrJHzYT3QJ3Np2Q3UCnNNr9kkKsRg5NbqZK52YDSRSJdkMgvCdiDQfcn",
  "key32": "5yYzdkM7Pwg16KtCGxUTPNrUwXQ56u7HUXizKQ2jrJ86ggMHQjHHTUqN6dewxby4qduVm9Fb1sR9Jn1HnvnG6Wnb",
  "key33": "2wkyvxMSVGP4fghJF32oRtZVZdccyRrZx9F5Hxc5KNR3VS4f6ndhC8rmrsjwDLTrb4MVYVWDK1jVf6dLZJZkRqK7",
  "key34": "5ZhtubHrPmjnDwbzKAeyfdPzaWEfT7tkFALoRkKZxpXXh6EY14Eh3NhW9cR2tmAr6xBCEHYvfqtwNMoh2zm4mNqo",
  "key35": "4aR5yEFMHCmapj5CyBdWqKbyyp6JP6wtAi9W5zNrV8LBbaacAYiCN6Cq4cNSF6WRhkX2duZmowadNp4vRRVyEERf",
  "key36": "5Ecf3D28NcW2oADBMER3YSjLr8pBdnCtHjVB96pSwrFuHMYhHfHnFEkkWqXikpbfCgCUrUY3Fuj6dS9UQARvTxC2",
  "key37": "5PFq62YMi3X65e2uVSDn2VQRf2b9RUwzSeHhdh67GUXFq42XmVe69rUgae24Ypr9jsypvv4fMwg87VzyjbvtAziQ",
  "key38": "5wcWonsKEAMT9wBoNHxuFcUyMRZGW7EBGMjKAFY1186Y3Bk8mrspMe6ohCkUocvCJkNbKHifgjDMhAkVpCp3YgQY",
  "key39": "JvxchqFfa38NKz7ZRdBiDwBzQakhWpSXNoysgR12iqVUCpMNuuz4zGm61Zxs7n6XJjRGooEzDEqt41a3SThepVK",
  "key40": "T8uVGhiUQJU1cCBkxGWx1LV9C737cWhf38mri63wyQbjfmYFyMbkWpw2J6hZZJXd66tCfLo77r3PSWCygwdotNJ",
  "key41": "4yZXmcFtwFBhApJcagbBjjoJLdevVmBYgAA6Cyk4HDsPrbXECsmrv9qs5AvLwz625buqDEGqUAbgxsdfQSEBeE1R",
  "key42": "4hoPyNFJ9zAC5oVgZ1YH7Qzkoj6s6pPtXB3gizGW92sLvytdFmRpa7wNGUqdH3wqBP2nNpy5bBUdXjquEoJ3UqZn",
  "key43": "3DLcDL84XN4WqqRR7RiTJkq6tigY1yVdvH2DC6yJ4tcGTcNTvaP2bG79mCW1vVu9kY6gyS8VpYESo83Pa7pvZcG",
  "key44": "5tV5FFudH2ZVuoA5SpYE2vzrvae63kNaUPpQwh37XuUgybvbTuvHeTghcJkiYs6vz558KvYpJgEqDwTT8sNF1mkC",
  "key45": "5d4cugZcX7abMDAqTrgCRTPrVdaGb1ph48YTDDtTuq58NaYxRBvoi4dJy7fyTqiNGf5b4Z2PaHYHaW4DhSQC9Vn2",
  "key46": "29RCHSVJVrWGFzCnw9xWufFbtKXGBbZtSt93fAnngZFijYJqF47yerXTBH8mwnV7vCEDBpt4N1xShhNz35UTr9CD"
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
