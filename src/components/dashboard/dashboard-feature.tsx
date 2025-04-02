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
    "526RoGsog3ZdboTMZDcVDshTMVnrB7EifPLHpUNEqU7L3mWF1GGWK16i85xPhwDi969HrNnbcCYdpmvfMh8f6g4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DJgmBe3eKsvLVpxyhRdfREjQFLe3YDiwJBhCJkkb97L3esBG2Ymh8M8kTF9XaBWHzVZtuXrZsi2skpMYcxA869k",
  "key1": "4mRXwqTr139LtJdPNtY9YTSnZc5uXtMEjBKvLnbA5DqCLxqG1k3nV2AGa76agSUZSQYiajdaqax3TN7rudWMMDrj",
  "key2": "3ZwojuuXJczDQwCyQL8iNRLDqdmqR7Mn2bd9PjaWdDFFjLBV3MddcME6FkdqrXX9UYSdw2dUkp5ToATm78Fki5aV",
  "key3": "Lybmudv8EhzXxhTMnnk3K2mmAhi9LDhLiijXVpfzrV1rJWdQEfYGbrP6R4Xyav5xabGvVPqJjeYxhzpCAJ7te44",
  "key4": "657xtLw96vtEkx22uW5ij42VEyK4xc9usMo9LHY8eTXt4VejnMfgQoSG8B6fdMvL9zoFRZ1QzBqF9tf5FKvNwU3k",
  "key5": "7mXBi3wWVyE7PkiUPyrh5P4ANvaeqKVWVVLVqEmouRj9Ges7xPCHWrwXYsp6VeZMMEKPhfUCitaWvENvaFGV5qa",
  "key6": "5QVDfGpXzqR5dJZ5L7b4oib2LUGmBiu67w7xkoqKnD4Q4K5p2hSVv8myrZKdhVxJtqqtmbQ3rbNjSQveE5nqmDTL",
  "key7": "57FUDdSGqp6LrYaQwDgeAwd4Y9gvLgSXc1NwBTWaKY2J6XRADJQChseeVJR9bjtSMD7abJM3daqooPc8tugfAYNV",
  "key8": "4yyR75PkbV5Jg5yKaJEMSLzsVtNvrxXnTjioMPEpV8MxvfWS2m9eN1ngboT2NMKcsNBLzp6cGDPXayzRD8sjaEo9",
  "key9": "4zTVUY5he7UJQMNYz9pkCizH3Fi8ipEYo4jvKKp5VtEt1NRuJSJ1LVW4cpiUUe1goSHA6f39xs5ReQ9Qb54bmdA4",
  "key10": "39qgs7nwdmqrupBWp8nGrw3ZQQNSzSp9ZAKKx62t1nqUGMUkoyHQwBzbb3fmAAmj4iztw46FG9m1ZbjoVdiBMFQA",
  "key11": "53SCbwuXhp7xXPbYDxFCeyB19KH2YNRxikKyPAaKC18oPmUbSp1oMc3Yxd1t19vre2xgTUXexMc4t1szUkkUuSEY",
  "key12": "5ckh9yw7T2Y8QqN9pA8MbALpdBFNxmco7Qu6fuJizidJEVCzmj6G5dMNJ8tAVeanChat3BDahpVQws9hDQiFS3TC",
  "key13": "5LrwpMoh2ax8Tim4GjSBza8Nn5RoU12mdhptSo4vewjdR9Y1ZxS8qc1QLWuFjfZt6dUgp1JjZEA8pxfRE5awT6SJ",
  "key14": "5ttGJSh2bGwKWcqHpsfPi6zq58fLyeFCBJngxLPYpeZMqKV9QUHCfV9mtqjTNf4H2QAWzQuqc3MwSGf9gogQAjGJ",
  "key15": "5ctP2BxshrP6cEifi77UXK8J3YEFKjaUt1M2am8ooFXwSmkDYuDgbkFMCevjSkqjD5SsGUT9FpPfhSrWtKtW1qvo",
  "key16": "3pzzR64LVpnTNPSNb53em9tKRdD3YtMsnyTnqrCJgq6ZVWtmKFV36s5C2Jg41Mv2c2wEKrFmFFJNTMpZF2rMKUrD",
  "key17": "3vPwMrT5RyjTJGFLb9wFiztaVncaiUsfmn57NyX7DzrtiDq779DxqMwtA9A5nqGGf5LGcMimMZVFNTkmVT7w5ggU",
  "key18": "2uq5j5ZCUZcb7Gf78ZYKt38tW16UoPuMxEFKcgJpz1rqt88ANSyAL3MjRVzmbBq3zDWPdNHR9tyEEdGZWZwNByDA",
  "key19": "2WgwRJfkvYzZA43jERFtYYysfQ2uSZA2qusHrSQMtFTqBvPP1QtC1s3jyykCXATB3RjLGBrKjx7E3qc95vYLmqrw",
  "key20": "5RnJGWDYf5ag8VLu9XehykaoMLzvkDmuSzPbfyFwFN9SuohygwS6THwe4V37cW6n4L7rVRi4ZB6Fze9FVWhfVWpB",
  "key21": "21GEhGe32t3nHjzLXHp4kHybwWxWri64feo1ostx9gKj3ksvZhct9jb9fzsRw9dp4rqXmHHymD3ufcNPUmmvfSeA",
  "key22": "5wCssKRwcXjvpxPiNebj7SVqUW1JQTchpNw4Rug55Bqni1pyd6PefwJFvvCnPnZAKFs6yWYRBeMUbio63b3h7uBr",
  "key23": "3gHJLd6LsBXW9m5twJ6Dr9ZbdLF6WJNXDswnjeMDffbY2XgRccg5Jm6FRTiiNZmqaw8NaGbSJevKTYPu5CnvjsaZ",
  "key24": "4XgPSKqjt219b29q5Cbr8cvk1ZV3PyQTCddfeUZ7HbftDAHFVLGgMzshzymdQ7zeV3GkY2i7QYbq6xXoZ5sSiUty",
  "key25": "5F3QP8Ahp5fV13zoqrWzRKy9nqhWGv3cqhvR5w5kVWNpZzEDNQAeRYVUJwS43zpXLr8bhAAyKitjwxJactSVngnM",
  "key26": "4jJjRYr1JdxQaMSM35XZFNKuGAzmSFsV4Xf7U6C5XL6AQAEKwKyYm8iF9AZscEopUKqWvDmcnGKUB5rBoiKe9M88",
  "key27": "4K3XCJ47k8HCjRfRsYg1Ft9W94TbEDY8nMzfdrPZgh3SsAp71VUxEhs9V9q85DxXaur9TzhudMB7iQMbPqDePx1B",
  "key28": "2vDpifdahVRDGFteM5QmugWjFTVKXX9hF6psujPKnPnkdA9DQmW4MVxGWWWCyMS9HEZaC1bSFQEB11Yzye1qFpGv",
  "key29": "2Qs9QDeyqXFxnjhARqwxdPaqGD8UhfhPYUJ2P2cgms29sMEKjr7dGxvRX7Xdghh2CHcWrm2oKqywqmG2toLL61si",
  "key30": "5URtavV7qSZTtzNtNFtd3uiwfaaF8yHuLynyhurUpuVp2DKf9ReoEZbFsNbcpvUqfo3YANHsuyn3RBrMMZqSmayf",
  "key31": "64M18oVBHMWaJpdp6XTQGeN42GEZ86NYQzCiJGSqWotWiSzkY5h7JVjd9DckC9ojkhSmgg9u3SE5AE9t7jRBrQGp",
  "key32": "47PXdwNUrxSqzbPoGoRwZ1DKapcWFMzNKkcqPmCrnmcL72V7gQiqghyWo9CcJy2TaKhsxEnp1MSDZVXxSBxFQbPg",
  "key33": "3gbcPGWG4vEoZjofWT2tF9jFqg9yHQfCSqD6yvrnYemFsnvyvT3G7t4G77ckTEigQRQhCkyEypB6az46EbkxTG6K",
  "key34": "3rdm4hBsMmsmd2ZVKdaXBqPXszSUj9io5emipB5ECUDedmTEeT8JJzm69jDhz4FYUd4Cx7KBdyi97FLsWGN3h93e",
  "key35": "3yi8GWXDahkhw8MQvt3pV5YSJQZcUtEg8Zwv1JcsZuJYzxhcdd4F26VuxvgWvEdyGSmQaprd2N8V8DWL93rgtsXm",
  "key36": "BeEmnj5jSsMU4uZpMsXEsJjme53nxj4adoP3Z9xN1XPdk9UWn7Ekq8ZhsUjfH9raT8UJRdtEN5W2LACMcDhxNXQ",
  "key37": "366g2ZySg6QbhnKtz11iCCdV9RU9DKz21DLuQ76uDNj7aHnjojZdq393UnuWGuaBqyKjACd9NwzCCF56RFcxJxAL",
  "key38": "5Gy3kGcSSUoN4rGFJWvdY4MzaQRYgeYLrauMKEBTmvS4uVztv4oGv7eTLkpumDEUqozdZ9qHMUZumu6KGm52cHRE",
  "key39": "Wbx63NVNBixgUG1k4h7nXNUeToLv2Gckpwsz7u1pQMAH3GKCSETLXC92287eJF2mBSvh6o14eVPXdqm8wXzknoz",
  "key40": "3p4e9KFDzXwLnfnW4cJDr7jzcmtk9XWenKBb71wu6MvU96LXkSeeK4QevWThovxCQecceneuuyFZMJh28Eavgzoj",
  "key41": "3YX8VUqqDaFoF5QFCJAt7QcVbMwVWK3SHmM94T1gFEH1vtbfT679mwx72V1uZESM5Fxh3N2LK37XfXhMn55ep9Q",
  "key42": "4wGFY1thsget7VWbyUaCZPmmYV22uEeFdJuktCwkwSqF3vdEEeaeVsdFLyrHYB9XM81T2eTNbkguDFtMe652CJVa",
  "key43": "2qvcgHpzcmZkEMtLfw7HgfRJZodtwHCbtQfLsRxSGh1q72QyX1JpbSrb99jxyYWcufnDkGNumt4pGFM2SzcdK9pX",
  "key44": "4seyb7Zt2Z4w4DEqzqKrzuYgGn2Q7NeAWmdZqBh6JsQBA1xkvamaxQQELk4DA3xaw4gZAJ1mAP4nwNpTbFM3LRvM",
  "key45": "nSTb2pMsPXcusSdPhVUVtRvBpDDnUBF1yFvepBYF8CouMQcrPd1gKJ3YSr6bBm74D1P74SiqSsrYv5gKxrqbK7R",
  "key46": "3Vw9ntBiesde9qagrnvt4J8GnmSUKMV2XzbHLd6hzam1B2TU7ZmCovSXeSNud3CF1i8XBJF98kpmyY1dJqEQDgxn",
  "key47": "LezDXccWCp9FkyGKxNSoy4WtPyCa2WpjAHck8HtLzdekptaGhFnTRcTK8wbSiAhY4E9viHcF6YLMjxJMcV8wx6U",
  "key48": "2U7BiqKQe6jyRjcqdLiJPRfEgVGNop4E6xUYu2JcGzDknzDQtD6eK7EHBcTZckcVjcTUnZx6BCZUkuZG8dYnq95K",
  "key49": "2Ezs7akRAtUH8iZPgxpzATWjZBozLJQptgRpwN1bCe7TtDmA4gBetrFKEJtCPD6YkiTeMWwMxYBvzEB7yahV6Ync"
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
