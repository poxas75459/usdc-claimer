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
    "3ZBsGMBqeDey8WXuXN4fjYqEvwMCDGZk5pDyzi91wkjxGmMmQTnhYQxuPE43ySsycNgxGHADBDRBW4PDSrHcZFJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d11wUXJxiWjWjmEVf6K8LibmKTiHWx3Jz6HYGVjZ3W7gWH6aPw2FqHuwUWsRQPRZeuGd8j1sjd5k85XGd16EjhZ",
  "key1": "z9UKsD5tuxw9SdVxnk2ipfpZjS6eb634Hg1qpDW281LvrMmWtJEPHdFkcnxcT62t9fKcspMxwBxDgyQ9AtKktP6",
  "key2": "5fHhtdVcGwi7ggrzQRsW2i8UZhwGc9AZvydYwkK2souPHvTdHTzEfivpzjK4odksxbaJYDWmeQkWqZrkBiLw3m8j",
  "key3": "QXiVA6h7LYpYM2WiTDjxcaMvRare14eWRSqKosnvgeDiAt7vEuLRDkRQW5s9jYdifRYi5aVMQvmFXsbuc2cpQKW",
  "key4": "2vutfVYetLyVHvDWnEduaugenMkR8ZzQPvR1LYP8oJfbtfjCvMYpnVZd4R6oAaZKoHTbbrn3v1tjcRsrv6b97Tjx",
  "key5": "63RaMMYYdieaQmBsLPYvNGqjzrXw2AWUy97sFv5raXeydXYZbD9EmALeZNiDvMhRGXz2SJZFejduAu3WBNVNPhb5",
  "key6": "GPNwq3bedcjkswNLh8dLZpscR9oYsMDQM7iYUbEy7TmfJd84oJkgugYHJRcNBTUZk8xfngLmVLkYbe5qFtnBNkp",
  "key7": "2voEMJcBEUXsWgbRPrsFFxWv69ghuurc4dfpuusoe8nAFWYPBaVZjrczvzvbBnnYj1mLEcfgwDdYhv2gcVk5R8s7",
  "key8": "9MnJjWsZWRmLLjQGUaYKmis7MRHb7WWD4zuKfY6HTRjuod6mVdviNxt6doczRgmHnrFSexXkaTY6yFh5JL3ozkF",
  "key9": "3gysipWGQEgHwQUR4swz4FJFveinSmuaWcJ4w7Hnde3dZFhNpsRbzFzVt3uAd3j8eCzevYMZRxdVBLfrAm3wmxGf",
  "key10": "64kzLFvhkfeR5CCiQRSaNUm2H4q5uYEJQT3TRiKi8iK1ZzbktoET9DzuNNgoeGg5TCSH3BR1RxFGEvFV8YGLfG6G",
  "key11": "4xHc8PVx6LDUhJRc5Xq5Nsgknp4n8quuDCjSMn99WkJ28DkXMSSiJmmsLQMD36SNZyPoYWMspYj8gKHXrTiSaRKP",
  "key12": "7Vm8C878KoiWkKQ7SubJhLMTtXSGWcMbgf434tysQKDhHMmkrVup243jgm2oYehRFSsTkhz3iiQpxqzzbDq3YVw",
  "key13": "hfL65pJUvNx4dnXMsZLYSv5wxWz2RMR7Cm1thVVUR4zvJB9v3pgSJrznhwbeqBL81igUMQiSaJvQf3YmDVRYVe5",
  "key14": "3o21zetVMFoXdYiABQAEwzuVz8ZqH8FwRoNWaMv8BwvAoF9ZnRcWkdZ7KEibxQpGKppAkj17GMCAbaUrjmu1tHQF",
  "key15": "3nPQKRma29z5vzBZVXyeE1cEasz3ed7hd4TwNXWgyHj8ZoG2i5vUdnnJnSfaTq6SUjERLeeHorqH1zinQEQbZx6M",
  "key16": "5CgSBF5oAq8sCXiRpwvZPdNj5fFwdEzminP4CzasaJKynQRS2a6WJpdGybFX7REiwMJoMTktzVYqqTkwTf92TEaJ",
  "key17": "3z53Ujh254VtqVei2k2PFRYwcBx7WcYQofXQiNM3fHJqVv6vZnoNyF3PYp7VdwR24Swf2yAWSQ3Uob5LdA5QXkyU",
  "key18": "2dicH5ki9gERxUrXkcaJropqzNjPbmQvBrCQEBYCvgycjTYvQX5CKwgZb5ktXt7teYM4NpHoMwzEwDSTpfcTF1Kx",
  "key19": "fA4pjfwVu521gp24XAhpqNtWaPCzXoDrdUavNh7R9LsKSPmms3tT2WrgrF8YJhMoVNRu4Yh664na6zAYJYEEve4",
  "key20": "41iUMe6xX4aNqqfqtmifFL3SkTKi9KeF6wHvmd7yz5uUSvgd7oeMZQckvFVksKYHdugmyMTi6sS1zpe2gSRJBmrL",
  "key21": "2ace75Jgqir3dJWfR5TKHpGJRt3FrcyqQjUqx6K33uFQJ6hyHp4ZQV6DoqUHxV6ZMSbp8pRoZKaocGFSzGBa4joN",
  "key22": "65kAFfw51rF14kYt2n892hjThT8itiF5NnxgZZ3myAaSdCrFWctqcQcFfydf4NoFQQCkqze4eT1sUsJ5h1iQkD69",
  "key23": "4JCYKBTmXwpzpb8d68P6bmGCt1rWgEwZJ1Jc4XbkKyPxnLRbZ2zfryVWxiiJqiL8RL1gVNaJffBWhayENuRVMKbW",
  "key24": "63oh4DzqdSWXtbgKw1UHo2vL5sUpZ6eieKVenbTs4iT3tfmiW8cQcV5qPctqv79mBTLHe22UxdTm3H6Peku8DHnJ",
  "key25": "2jHb85dKyJhm5g1wwVEdNSKDm7CUmeuavx9xanDcSDsFMbEnZxGEQG6Kansk6dN8ATiwPFnn21TSPBjA5AP2W4qr",
  "key26": "3aoCdPk3EEfvGoNRiBp7bhETs3QwUQRZzVo5XhzRqBeEVvTGDkh1pW12g23e4bQKo1ngZYNZ575PQZYArBG6CFnU",
  "key27": "2Uat7J2z8yJEXHi3SPCpf1noGx9wxA3rY8bLURZh2SFkqz2aPDemq41nNS8vs9dkuarLPb8erV19bF3tMbnnwDeK",
  "key28": "4oeSbVephPurdZYPaU6xsQtU4Eh1TM2E29b8MQfv3MyQ18qqHBqB9vq3Pv4UzqQWFVQw2vUwK2iJeRRwy3j2K2JU",
  "key29": "3VxArKt53GuN6NKcnFfVvzH1i6bqMKhEmKEkEVVq58pZBF8VKcpZAfjsnedS6TVA9BX3Y62RtThGTd1WGMpwETo1",
  "key30": "f9rpPFsMRhuwqarKXp3FafgbaJb8iYDA8GdSEpQZKHQ9rwZh5Zw6hYaGZbAP7vWFFHgMPjvhsKkgnEX9pBYttEP",
  "key31": "3gUjtwGbQ3QYjrFcmJLwyLu5mNrBxqFtssPak1hudXUZx8Hq5PjGLQeTCtdnezDJAcBk9Xvoky7kbjFoDX5d6fGg",
  "key32": "3p5VGyYK7USF3GauhdK98YB2BepuBkuPqddxVXk7GDR7LBs51uiAuNd4dRkNmPh1F2tzAd5JJ6rbtQgLFwceLjWz",
  "key33": "3VRnmt37TqeC7xBGy5utdrki15uPQ9moUjXdiLy3xEd6d7LquSJqm3RUyLFmAujETWWTRYeMue32YomXxcWEb8G9",
  "key34": "3og1gU4niojP1Jn61qQY3yx76wWbPBkxosoDz8kkz4Wwg8216df69fu9j6D76y22LmjXXeiyjSLAECs6cB3CbPuw",
  "key35": "5GF3mmxh415wWHcgUhc1sAdVrqyYcicNDBqtS6QXhyQhNFnooSy6tZCssbVVo87HxtqYNuZ7FhmQPMsbbiZk1UBD",
  "key36": "3xCEZhGom8Aa6g2Xk5QV5ATUYNhgm4RR1SsemVFpAxEtLHsqT8dWxrzArUzVJD6V8cpBQqo2KzcAo8KbSobFaKCj",
  "key37": "2o566iXF9K1F7dPxpTbAjugJSr7L372p9nyKaKXvJFYESpZ8N6Z3LfQBMcMFKk1BFktx6aEeshdnVKugGCeiSvao",
  "key38": "GUbajerg5J7NNLfsaMyTB5FtB5X7rUA5XKhtVhE8deVJtMHKoix2DDSaSEJ9SndsxAv3SYLuA15ctjxrJ7ZNzRu",
  "key39": "2DStkKq7WGLmWXeEiXEU4hgQXjqRGgr6m8riPNbDATFf1DFm5BNSXChwdBJ3xZQs5UtHKWGHA2jor4Nm1PCVJrew",
  "key40": "upEQqHaS57YcaNBhG62TbgLnGCVrNiqZUq9z65re923Fn6KkvJisiiSeAkjh2riGH4j4wAiofzhRy2e4nCXfDov",
  "key41": "59Qns7HXfkMeuE1B74g9W8RcaVKSHEVp2iKjyHdCa1NCRmjpBpuXB5QTnNHvvttu8iNYxQkZAEgqtrka7fpkxWRb",
  "key42": "Z6hZ7jbRH7DJfpfgFYgkS2nER816crxFPEXyvQPpPSbKt3WuaTGvD1hVfP5A8DyAs8FsmgxYjSzRq4ySPtdFixg"
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
