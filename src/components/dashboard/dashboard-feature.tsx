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
    "3nutnFcdBNzazNDAZC4Tmcq9WhjoxYiQjgsS94K5mhBuBBqBcacHconC45rVqKnb684gPB3sdwUwmjeJpxy1Mfa8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zio5U4VSqtMaGEMfmgEMSdDRMgpnD18zgeAijt42egLKjrCHFgXD4p7ownZm3ykwrTeiqx71Qv58s3BKh7MhGAQ",
  "key1": "5EzGiWk2wszwtiykeUviTHbGNMCoY4Q9SQvytLja57cmqQH2yAuB8kdr3W5HicvLc6W5LYgdeMWisEjhieHjzS9T",
  "key2": "5sDCYJpWuwVbtXVwvij6fsGf7nVwFaEbc32sMA1J3U4GrytMUyFGhfjz1ndhLYKqcSv4y89uDMjoDqpZGdqW4UUK",
  "key3": "55kvjxbKMDKYTBHt9WhSPofMRiFmJ3td1QzNnuYAo6Te1vdn9RqUYDpjRT8xgyxKn2Nm1MSFiaeUotbuSMvuF687",
  "key4": "wvzbhf5igVN37yWemVivzFc1SzFJS9J4tqUQFEAVJ5udovsn9KtXpECMZd98WFt9nTesETaghLvV3hVpXQoYXuB",
  "key5": "4UtbjY7UZcQ9u9TE4kCmPY7QTaN7AmE8aJZBsDNfGhPPuLrzgcdJCUv1zFEdMmFDPv1aoeGBvKBPgSCY6cTd2jtz",
  "key6": "qUHWDPdYMEwxVQWke8SxfJz6mJhVgbFJ88ywQsL4goBrSC9xdyESXc95M2r3KftyJz5DqNe7RPRFD2wbf2GZFf9",
  "key7": "5J35nc75aSMbWEu6bDH7gfKybiuojMrzhVZnDHVrSfatha6jj1j58nfEeDbxVTcZTxycwdyb6KTbxav3X9M5Azvd",
  "key8": "26wKqJKoqRQMgg14yoTu3HU5xA64F8ZYM3stxyhG3kCSRSfVm7r2fLM5FrU9K7mUpyw4F4RbzKH9VwYuAj8h5b4t",
  "key9": "3XqSnARUZGYHrz4LBT39LfNGzg3Hn2f6GezGsfMgCsU9S4qCprzSeo588Yw3xZdax4SwkjoryLayPdFtcSj9ecey",
  "key10": "5jL2E1fBWY838EsjLLBjByivRwAycuF9msh4FmJBPsYmEzzXBmM1j9WNktZcdoh71FCS9C68rvF6hQH6cCdusqvM",
  "key11": "3SyjLiFDsRFE47cM3uPkQo9XsxzNnsEvmwYKTBDo9FqsSRQ4xCbrRSJJrheNbov93NTkiVFTAw4QnE2qFKzQW8Jd",
  "key12": "3z9zPN4zqffDGaakuNcpzv93gL7EqDkMcdTrRzKukc5TVrsaWPjRmK3tbxik61CqXu2UYP7qSDs3YoHePN6LzTF9",
  "key13": "wWUaPXyWeuJxKK8cyiBUwEgwgzKxaca1RYZv9jWtygCwxnXUgJmvEMK9coJZgsjzzr5ENGcRnfziaMKxVNzBw7d",
  "key14": "Xrqa67sBNzbQsxVDQ4doiN84PzBeBsDZRv7dMQNbCCe9X9CEmEnY8sjcVNbHcLkGx9bAJ4aL5HgQ59s8tBRckWV",
  "key15": "5aHSdVuU51WRJQettzv2WEH2gmrsf94ev2Y5wgx9Qhnhin3vnpYq9NYKy24NZsqnYvs8qJdWGPXhSp8V9x6Y9iwM",
  "key16": "3267RxTLe2jPTLTZ4ZPqAGW55wgzbvvufcrhuTgcqeCcLYYjd4jTTcarop8PahcQpxn7gqAsW2oNTjLkXtyYEem2",
  "key17": "3mzE3itE6ZXvqmi5Fn8fpdeAbaDBsaP654JCaJmDNgUYBzS61xJGu3eoNkedrhSFhMdEqL2yRxeovewvoBoR4kNL",
  "key18": "377VUxwN3u4aif1aCW6cdVXQ2oTVUjF4cwaS8XubWsV1dprDGyRRsjk1AyEFVk34sjM4MGfpAtYB3LpDFZNv4Rwn",
  "key19": "4tpSP9roja4kyqnYMrbKyN2CYLvKXSbZQSNLHpmRHWhANZeQ9Vs3N7cRHVVwmePaywGAbP1M1YrUHjpt8Zhg2eP7",
  "key20": "5dpP9gnN63YbRdEgswdMgU2rADFsRazrkxSWYM4pgbzwiMZzSU3KuYvM3aVVxtcwGFET3VU8rvVDJSR8A1j1VGQ5",
  "key21": "5ADb5GJUdpm1e7Zt9UiNZa2jXANM1va7Hau3NwanPKXs7aYyRUF9SC3z347z2nPkyETdm5HDY1h4bWrKMcvVVjfK",
  "key22": "2dg7wH1wyzVyoF67rG27PpNSH5FdSRCjNERJ3P9g6sJNbQaXDJpahXBsjJ5nEb3Cu2q36a2zGcMngYteVMqZeqKC",
  "key23": "3EJjzte42MNoY2dJEjCtwk5oPdCLKqfqBSbvQX2dfdfoVZe4CmiFQdT6UU8Rvusc2Tfd3P3gUuQdkcmh7YjXy5fG",
  "key24": "3i4oZeEfbzMBcpYGGo4MV6pn6VaLtQbdUrirqzEEwphNd4KCLEjX6pC3C1JmGhrFCiEpfQz35QgEJf3dibCNAPBG",
  "key25": "u9kXeX3vC7wzKQTa8rhPHUJZbphCHqSXtvC6oaFZ5PLbpRz3oqfh6sed436hb7JTVYnBHit7vjKwiMw4BZf6RNW",
  "key26": "4YeBn86QRiN1ay2upHTpKrri7BCi1xbquCA2VcCmAHFjuSYfAi85D2fir5PwpLJbdx51195nMzupoqPPaEAnhpzc",
  "key27": "4SMCyGBgadHo53vVPqXcLyNCWmMqpTGKdToM48LpHDkGiUBKFcouVg2svcAQXkfoURNaQwUW4F4x9rVVfpWkKsU",
  "key28": "3Cf8bW7xf3pzZnqm6eRxixeqJiEe6yLdsjGrVRwCyBtFEniwkznAviqEdusZ9yTUcy8FXcFF2NzFBy5kitYHeouF",
  "key29": "4XWin3NYbz46YyZHmwDNRjQjbfofwjDtC5nj1s94r6AkcKLrWxZv1u3ymyHELRJMYYvbMAv5ZcG1S3XSV89xfi4L",
  "key30": "345NFbJREBvmERtXrgQv26nFXqiRu7uXzU9ZiWUFxZTm87S3ZERe824V6Vc4bWvuo9Htd3U4K2RLDE2paSQtMtV",
  "key31": "76bCw9ywadRCSKJ7u9sst6YzrmcTrBewJN43mxzdtcz39DzASWv8q5BkxDgvq76GnA1RbcRqhEJz2ipMVCacwRN",
  "key32": "54VNWpQjMuKHautECuW9eVsiBTAUrSBgidKPEBdP2xYQty3aV31mHAGM1VaSF5Cd7X5j88GsyRwbCpz8yjJgf3yr",
  "key33": "JfdUXoQkCfXFwxaUeubftUNvuhRhJg3LJLY68aLHWnVzS1KpE5H5GTVeVjBS2Y4F8HLBjLM57gc2EiqQtjABUZB",
  "key34": "4rPyY8tf8coTCZCogwuEHCSQoKz9VCXRQWdsQQH7oWyTjibSHbKqWM51tvwX9jNwiaw4qXiPJtuokUDgC4eMKkbS",
  "key35": "etZsh9ebm9P9g278nkKpq4tZTbhmSo3ip9wvekJewcUXgg4nwSZV2EzQwgUcWpd9kutGkhVwgWqarbzeGDdfuXc",
  "key36": "WiNSkqTax6egofFdKuZr2VrTX4FcQpQ79Hwiq6yruV3dsrobkUwPXiVVmyPCh6yXZsbaJgSJjnHKkhBHFhdDRng",
  "key37": "39tB9vsKz2fPg4AkxKhPyLpq5xD1DoqMMQNGEcdSEmfmGhcSWCZkfXrMiMjT8RMz71keNJ2CGrhKjFRv5z2qS6E",
  "key38": "2WfNfw7Q4EuiDkB1oxr35z23z3P4QPtrHGV2uvxZTA8CnUDSESmc5aLkpcyc9chf8cDQhNS4sVXLpVCzpVtQjrjR",
  "key39": "4H2HBxuWCmrEZtFHEp995Kn1jDLi94iZmKxtjH2BYaXVtkyo8jLB4hqGcJfsK8UqFdjoEZAeZ3HwZoS1TmEDFcor",
  "key40": "36XgPZU8H4k1ECThtV5riRfiHCsz2B2YtpjHBCczV4onfbSzZRUfKQVd2gJmm6d9qYhy6udFG1LEMVsZP8e5BV9d",
  "key41": "3JLzWTsDddCrET9pw4EuBzMuZUFGqANzJSEU31ofktj2XTypsdyQ8AdU6ZJMEZ8UB2qgm2bLN56gnnahSuri51Ct",
  "key42": "4cwGuBdm6pk7rCETsWQ6n6zgGrsz4mAw4cty3Rv3paz5WMc9vwZ3vZ34N1Y8R8CSfg2bJCWf3CYPGZM1Xc2rferJ",
  "key43": "5gYP6RioPBHiQb83kYh3C9zvJVorYATfJxcFeKJ7vbTejY9gM6mVrBvtjbuuJKUeAd4P7prXHr1KAZYvugF1fUkz",
  "key44": "2JR3bL8wFzh57C9tUr8qGXUXV2iBsNBSfmq5An9Ex5277p9Cdq6dXcFqk6xzwW5DKTsrwPVWyuyThPDWbJXjMduE",
  "key45": "3AxDbTbStSAjSwuhG85T2snpoyHSqE5MYyVscR3gVFuZSoJP4ea7oMNhyqQ1LJeCz6CYDpqUEi9k5U8q6uUDgQtC",
  "key46": "s5u4fQKptdR3SLqEH94pwptweWgoq5zpEJ4AzLbJw7E6uUW4gYqvckrkZdkq2oQrUnoWXgyMeH9JiFbYaRzkaYP",
  "key47": "5o9hvVDQYmkW3B6NRZiJc2jmggiPWbN3T7ud2wc3GmoWnSuBNsD41uFT3WBdXzj2mDpLySVKgPzqbpc7cszH7Vga"
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
