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
    "25EyFyiNFrXpwJfGdPgZ3mtM42kRLiDMC4yWhvqaNx4gGuPczLshihaPmk387si9fHpWbHBbkm54ok1sj9MWWrPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NZjGkjx1jQBGi9pBs4zeEzoVgJuW8D9iprtQmvg5K1BMhPiYbtu8vZtHRAqQotpsPyfT3BxVFg2L9KGpxvt4uog",
  "key1": "4W5Ee8iYNLWDHZbvJXKVRnfEwAPvbtvqeU2ZLbPK5m4hHfeApXnP5iabWzNtUn9S5HJzcsLnq2cBD7QJs8iFBHNn",
  "key2": "5eUQce52uvpaXB7NwEJaTroUcAza2YUKV3tCHNpsnX4vjmBSCq6HAfsexFf25MzBwyv5A3rjAzTYmwi4dfyhmsaU",
  "key3": "4x16FXB6wBkWrUQnNyrTKWe8mKpUDikt28jxc4EGyzB3HACECg8uaGVJHrNv3ssdWyTq9SBNZqhSj7bgqcEf2NEi",
  "key4": "SwTmEuPkADJBim5zjC7iFqmufkoK1PFw8APe5VsMLR9f4xsRGqV7UEQ6DQdpBrvSydw2N6BUojZvx9rHLtgDU4x",
  "key5": "2eRbe4MP6HrCaM7C1LJxoQFbEo5dqT4ze9KN1c8fosHKvBpiWDURLaC6o1bDMGdmMWsZArC3bWELnZzv14yZJFAW",
  "key6": "4BewVCeNtRem1jUHTmQ6R7N933VxJCDPBiJyqKGo7jeVHz3cREKzXJGDa8gaq5xmpqi7CW1n9XoPQSbnvXsdtJrG",
  "key7": "Z5YZwAbGniXD2WVEbr5mQKYy6TjqctQEFjXZgnLvEHxeHpSsQ6RGsxvbReapmnss1gSWaFnzzwMxPbGpdmdhmEL",
  "key8": "nqoh9LNJiaqGcQaE1WZ42BBSUX1mLd1Yz6vnSxLk9XZc12yfTDrU8YkPwN6kCY4oWyMnRmsjs595a38zir93WjC",
  "key9": "5kyPnC4xjNFJoFWszv789DEdPG6yjvrwSy8AjCmoiyyJEfYH6NCk6pyX2zr93GYPLoyuJtTwoqCxaDYzpixffpW7",
  "key10": "5HE3cCJxKWTfbX82B2fbB84v6P5pzwH9vt4DJFW74gFVK571qZXWhDmMTEzwfPQLUnuhzEW8KeYApQ4sjYqqCH6C",
  "key11": "3Ti2AXorvG1ijVhiskTy3eTGNhj4VWoNGLHtPLWyTh8pSCZritEGpEKsg3qdXLUfyvMN1nsAueK4UVKZBV6GLpd6",
  "key12": "5i32YotpUVjQifsfFUYGFJJeWjasMznDVy2stQjxEbcECjVS6qsfsnezaYwfCNuCbR8utu3Ap7n4DEq3SXXQYvHX",
  "key13": "eYWumd7t3QT9qnvVhDxgshjrtdmBSBSaExANYordXAvWdk8K7Ds77VSWtEJfh7UedZwcmuoGpS9BWu2ue4RuzN2",
  "key14": "37EMkBUbL31tZtQKLXHbaTSubhtPo5yeUhdQ8ZkYbANp3ckwkoU89KYbE9pYFRovLRe83knfUJZPFCPVxeBtpE9C",
  "key15": "4dmkGndNQsa3B8Bv59EoQFZkUosPC5ksRsrHZWkPuFm6SxZwovXXzRn6dqfmDSPdfRzxACy3KNiQ2JQDa4gSeh1n",
  "key16": "4MubsvETExPhyb7ztpySTfBuvUUMBFx8KDw8HQkYQizgP1vFSW9WdurDnZAWQURCZWMhLotVLvP7uwvXAvvoHAZr",
  "key17": "2zPQeBhehyUenGazNTqTNE4q4zN4bv91usygY4E96NYzDghj6APgFBxjKiYTPHRAB9ViHq3iZAmyS3tLcSFzWJ7A",
  "key18": "4NtsR1jDCdzZPzeVJpKZdLuiQfvSGuMWTNn8qP7kxjDZYgQAFX3Ct2nJVAHGSvdg1Mm5hnNsh1wJgd5xAKhr8dj6",
  "key19": "3CBp6PzAy8HGKJ2xgoVi2HZ9PCyTEJqVs8mgmoGkwzgDJzrjMWQtzgDVT5XhQhTKN54QHPZVz6Hxbx9dFfC1Syjg",
  "key20": "5MzBTEXs3YHYU1V7KsSgcpQgZNZVwzcLncMZkkYmLzo41nTmDbLbfrs6FE9hgtQN7Gs98d5JBcRbDoqv3EYVdL1w",
  "key21": "5qoULYEiExBRsz1a1sN4G7XmfGiZVU69RGVMj63SA14jQQ7ydf2MBadAD6sQGSiUzCP9dq91MMNJuRbQGf2DY4me",
  "key22": "4yNFB4uTEC7gD58HwFVJ9rDLqv4ykfXsRZUwhwkbAY2rBPAc4i1DvakaLN25ABbsaqksaECHdYJZZYV1RKZNBidv",
  "key23": "3LoSdswP5PYreVD8nPsnAstzbNYm9H8L9R8gcwdxKxATKd2UBUMoYuPcC91EVQyQtoBbMzBJiKmNYQ78FX8CPhZ5",
  "key24": "2SmEU2PVHs9RzAQaYT7qC7cUjNdBhxEQonF9mJLALexx6UpyUeifJuLx1pHiRur8G7JnzjC3nrh7JohyoXVREupM",
  "key25": "3QZiU1PrEQpYR7Ji22agnokQHpBgbsX4gyxQAVHa9bwK9waYMsvzYHkiUTMbD7cJJjLrRKeTY43T4kMRXXY82QZv",
  "key26": "5jSfD46NjKMy75EFCzoT3sNDnk7qMnvh8y54uPynP5tQEwT7mE7idL3sT4Ktk5UdZcuz158YnVZfBR2wCvkJNyn3",
  "key27": "4wwksigbWz7Ujwi2FDw5kDP4tkCEeXWUngVuRnmo7ttho7b55sEnQFSGUbfuLupn9ydhnPm6TXtVLbc6neQzc86v",
  "key28": "47sXf8gXBZdtn9rs8NQRwDRrydG5vZt8HMNrwzGRbGpiHhbrMgPyPmMYAzFuCkC8jhx2AZcEQJHzf6LjachBtXWQ",
  "key29": "TWYp4Bds3iqA22REHSoSACr5PQewRr92bAXtyt5KMY2Z5NFwwPWbwNMwJxHT8YBMjbDFRWPpEpCvx6FNe6HtybU",
  "key30": "4MtVJGpFRX8DuYwm9NJcGuxE8PJ4KGvnsFr5YSjBZSt7Sncm2egbaZmdvoMWF5Y48m2sqR6A1gt7dVZ6mBPCKYNr",
  "key31": "H6GqWXm4UBv7Fw2zSENyZYe4YhNiP3rmKdZPCRX4mencjiW8rKdbdUmenLkTwTUx7TLUjEmtQxuY9PfN5bzhKUk",
  "key32": "46AspBTednoGXq9wEjErLhejAGMEYkfYWJ4nXSFUQ6bXtTUPFtnExFcY3Ax4kMa9smKAAxB4TzWR6baU4mgWrBtk",
  "key33": "3niwQuZJBHEKXde56vQMpAjiyh8dy4PZrquqcUb5pUHCcYZ7QniHPoNWQkTiKLTQvqN6sdVcsypAQUBpDG2Y349J",
  "key34": "3WGKriDXMJVJAB2V5U1hiVYfzXqRzxd8Kw3fYzdvvZMsyKpCwbzB4vfZEvT4gq9KZHTbp6rRKzJZsScCiPtrCtTm",
  "key35": "5tM2GRsCrDrk9x11Xua5tGVRsFeayQAMFMSh8iPRZPEekPG9GEppqaKZCjmcVTJ63c1oZsFGmLHHFFHSv9F5L6MT",
  "key36": "3B61vG2196NZJMHnESWe3PAc3Yv9cwyB9H3u4AbEzKk5zjcBGrEddRa8M9pGR5p5fLjAwoFEFSxxrVR26PPJzzGf",
  "key37": "VyVFEXmAGpcFcy6NEfXfu7fE7EPVqNEZ6fZ7GtJw3zge4za2KaJ9YhGJsoc31e1adYEudJfdu1khhqHxfDActgQ",
  "key38": "5HL7BgCntwK9EdxjsQ5nD2ro3DV6JJaBRCpCn5AixnKrwJE7ViiC7qLc8fJXRq9pmiVrX3g3LdYggu3zrGBuSKAq",
  "key39": "5o2wqoTsVUTp9KFF8hooZexAz86ooKiQbX7V7DRqQTHoYsYqUmtjrdyzL9axUUv8SAjcnfAJxmAYaiKFAhjMofWW",
  "key40": "jVDyLwQ31Nvk7sQx1BN2NYvARHkiZNQnJW1gXwVHMAF2yaEGVAf6ubMKBwGXDtrm6n6PCfUugXaTjJeyauhWTK5",
  "key41": "3xdBQLUT3Fhs6Kpqj468pazvLETUWWxEeSJgk7iFit5Ntd4AfrnnGbaAQbBoRaBGRn3fWf9x11reJbpRadUTFmCm",
  "key42": "5Twq7EydcbEBMmpiNcTPZibSm1qEkhn6GxWuESgXMdnTc8N8r41MvDJoELy76wEVVqH3Qs8AaMUNmuERK4wetnF8",
  "key43": "2eb2x3RHF22Es4qR2oXuVQ2bMHpnLQ9jwj5o7s5JQ3EjdDoBJWuo47CdfRPSDRedUb1eBaYbphbwhKTUA1kDYS9x",
  "key44": "22vcz9xwBbeqSsw5o8jpjpBY4UmDZ3U5yFUBaqfwxBdeptMa38vLzgWbKH1QC9YaTac3Mx1c1UE5sYdpq9QjxRf9",
  "key45": "2jSGqcX58jhrQEobQ9dsuwd5Nm6kCZ2Dv6J37Jst6dHdsy5ySipHWP2owXpNnz9WDixhSZboQfMzDT1SnzyQUQR5",
  "key46": "4o4sE8jtM8Y33UGErYvsFJyRjZoAWcgvVn6QCq6WF2tusqF6WeGo4nnvaWvAapT5SN7eJ4yn8BX9123va7Jmc2wu",
  "key47": "5pNkJ3ftReDS29mo4DBWyqUMTGKaoBEUXUbuNy81bivR4Ax8FYtNF9kPtPGAvVVU9ZPVqAvFNiNfyMMuKCHy5o5P",
  "key48": "3yNQu2DhtLDXvHd4nPwCtom9UH5uFBrv18bvSZtC3t3Jrm9RcTsnuPS8z6gydVbEvVnaW1tKuQF1JWeVhtUPo2MK"
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
