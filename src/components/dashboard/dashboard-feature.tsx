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
    "4ZxXq1tEFHm9N86tvzVeBcXJbCfvb6PKxXCf4MNEwyUgvMHWNjwgp2E21n6nFNPnuoz2L4Wzr7NPYSewevXgccQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TRqtd1z9GmdtXSa2qH34E5ig7GcKPAozm5bRWFWeuDNhopnSf1ktW2EzK4zCMNHUiDN3ZfpLWdrjXdpCXrorUpU",
  "key1": "4xCfYhwyBctLQxmTFxvGuU1GrsbWXRskArUTEi5yZg4s9DLZM6JuwmrCEt3e8zezEsB7RoxbUc1WfYxm1vMDSdtB",
  "key2": "2rijxxcdypzYJjX9kCmQW535S5mm66q7FQ44Rvf5apKRKTGCUmS2rCu4VhbHXrRNGPCCiJ9fZph8RsqTPzW7qXiu",
  "key3": "63hU4cdjiLKy6SN8kaPCizV3KhW9aHePojWVDdn6y3h1U13Vw1XbThadSVkgyYgCbDQcZXtX4stSrb65b2if83DG",
  "key4": "419kewudu8UZGXTkrnnDf3rE2AkcY4JYZafTErzkdvnjuM2x75a7hqhVjVif2Y4YR9Kuu3ovxEH2jULKvi2aWBug",
  "key5": "4Tz5qaKEGpgk3EivW6E1H15f2GCw5mAnu6crfqR3T6BKd9UKdKbTFqVoJYJsi2BA2s4vQg9Qn8rfU7ybKN7GHfeY",
  "key6": "2UtqXGXEJ65YpSxgDdgMWCXJvHSvX5ftsH1WcFLa3Fs5vNEWKTQ29T3kftee815GKbQFz67P9FD6gZ1R3fuHcHq2",
  "key7": "3NDEgqchmpPBYbWxTj6ds2k73PET9W4MorKnVZW9zdVSQpHDfSX8M3Uh1mP6dJSdCx7zGR7fTkusuqnHUWBizF98",
  "key8": "4i7sP5Fq4nemnuKFvV6oa3T6tX6LfeaUWnwFHSdneHQaajhZq34y98ucjqfJwB4Z8mGJ9D4QpqLwxiUNbxgM1Qfo",
  "key9": "2yyBdvt4xdRY5WWu3iaCDMMzFGZEnYBQtvJkWza1PuJzwhVDKdSNw63Bmqs4RfCpDjhzBEy45RhECP9UcvCSckab",
  "key10": "BP1VLY8Q1vW7kXoDfFRuhALBnADSo1yjhhzjst7hzZEzgGgRNgGRihjB4s9YT6k2XKQFFDArkXvJMcsv5HSuo6f",
  "key11": "24ZYvK1LCMPFN3QmS9dKAMwWCb3KqiZBPALmC7hn6v5LmLhXesAZ5Dn8oLi5kkNpJLBBPAnoCwoD9Lkp3KNUevHo",
  "key12": "cHgHwtZvrV9MEj2xXmbSpctLZwqq1gJ2r8gMEgaYvqTPKY62prMW98DQbjCVrFzFDeeCxYqXQknHxUs694unJNU",
  "key13": "3ed1QRAWCyGArCk5bQRQUCmLkJXvaf2YHEXNH8etWeo8QKZqsckA82ZiR4T8YJs7GmrR38ubWjckgrZbt4eThJds",
  "key14": "3awodc3crs3vMcj5cSazo9UgNhhisgDS41FzBjXnaBxnhVfaBT1JeX3wu2Cu8NGeRHD9enpZko8Snjc56Jt9mTAe",
  "key15": "E18e9SQUJHxPVrvN9u3QTUnzhGjSg3kpW4gcpb2qmbe5pQwhXWfsz6pRgNQSN2pHFuBHVUNmsdjbvNnB9bX5yNd",
  "key16": "5x6AXJ3eqvSPYMLg7wQLDNuW1WduhNHQTbVY3Ywg3LvmAvGRNMT9rhkwhyjnWpaVyFrQ2K4sTWYbNdMyBBPjoi6M",
  "key17": "667d4MNVdEXFJoN2gwSgE9Sayzz5Wettdqi7Wca6vtnoyzxHUW45v6NSzjPuCbFJYjDgupR4oVm4U9Y3Uw2wAf59",
  "key18": "3ribP9nCqQ27waHM8piBDFePJyZgM1mZrjWR1aKXbDhGLjEUEvyMoVxtsnuiLMiqmM6GVZ69HoUYDJ3n5hWTjpvg",
  "key19": "4spJzUdiF4B283DSaqJe2BczhgDScDwN1mEKwh8qwNPKH6Sw7RcAu5gWtWa1JbmWKvv7sBN2rjUKDP5nRTnXox3a",
  "key20": "5mPB2KYd98xX24dVLMrjQZ9SQ8XvDxAxBpHkC2PsWCfQLmmDcnqsCfRKMzAraykszdNxnnqQjd3yLNgcNwn4nEJF",
  "key21": "1sQu2gmZPR5mA64TPCKGyVDzJcve4dVrVzg44Lr2VPwo92BQPs5Tos3GV9eXQYhhs9PwbgCHYgaNHFAWYzcf21z",
  "key22": "3C5jb6dFmqZoSrNZaarSPcfVAtEKjmfBh7ch2b6CnGQDZXascdU6bXzmYv1w9UUFiV8mKhUdTYbYLbTG6SCdPGMj",
  "key23": "3QUNpAvf8inoLK6HckVLka7hp1KESJUiejjGeywCsSoRfTPg2KKUkZzaq9Y8MHpK5VH39SdL4CqoWHbXW3Nqxttr",
  "key24": "5MsXGQfjFTHYXT9WtRMcrfXyASy4eFSgWgDYfDzpi2q3goxCoHLfLkqZseyaXjX8hmSLLUB3PSEafGSTS8SkdsEB",
  "key25": "4Zne4T7ik29hjFULxVrcZ2k5CPAvtWycCWUJ4J6zrdj2ANQ9Y9iWjn68KksLxjMXsjuoVoxfAaLs2BjUMjkdp3F2",
  "key26": "RqD3XhQWHsrBkGvLGQMvhJWjSqgHyVSzHebrDFDSZ4FuL2qYMEfNgCLxrT4mJpoo99KjyaYHw6ijJYAT5MmD9Cw",
  "key27": "2C4KKbmQXcvEjwjLTP8SYaWGMebynHhPRjWK4JADzBK4DfwsMFKnNQxcaLJFCHs2qbKfi8FxxMiooHQfQQU1hUmX",
  "key28": "3wbCG81r2DZDoqncaQEk2NFxu25yNvck8t7UUs8ARbyzRmsq5qEbHnDHBpsNDAe6LdC7LjRJWeAyoEJfVTMcgnJV",
  "key29": "Dej2bn1sgoxe41UjBWGEisy24NySA5bzPt2CwGSce2kbL16k7x9KJMtTsPdxzXUDs15eWNT7qX8uqxTFUxqGUBX",
  "key30": "22YJKxKtFTCVGinz7qVX2akTFjzLoP7RSX2X7PPWTm7F7txREi4jsMQkp6tgWcRmimdappboTmGJv9busKE7vA4o",
  "key31": "5PbsEYzpr3Rohdp5x6RKrBMQxqYmsWG8fyrNG8kbcKwroqrwjo4a7Wd1zZFhK7U2Y7vgvqprZnYmbiraHeo7AnAc",
  "key32": "36sJELNMascs8YzWwH4ZYEnRD6aAZqjES7TbP59y22AeQc8kcjN7HPn89jUU3bwwngVT8JrSRPepHfmGkpJnLEUP",
  "key33": "2EixqmF1CcfDCN8AFgUsFREt3PMm5WB3YGXdxqTYn2uRuF4bzgqCHAKWieskPxfPeqNGCsjkWku5f3LMMF47kJaD",
  "key34": "4hyDx2GDVPwRvAwt42v8D4s61o4DtUnTtfbUZNcfqhCBNuaEvGtGmT4Me4jg8XFvJNcffJiMhzaJnT4M99dhuBBd",
  "key35": "3Gw2BTKoeVWf846zh2YgZaJakrBiY21PQ93BuZujN4otrzCA4DXev5ggHHBu6PJm1NoSZBSw7FKWQwTqBYFpBF65",
  "key36": "2hidJeATH8jMqy6X89gV6AeJAN2YjV9SPyDu9yofk54N7TDhKoPJxmmwmFDA2axijRTWoZaC2Tzw1bxCrWAangJV",
  "key37": "39haU89wJUSDyqLmdth8hzj6WQFuGPX6YLN98c9FaBeVqu9TG74C9Y3XTcyJsZoQ1Vd7ymfgP4xhkoBQeGvi1Aag",
  "key38": "qV1gyP4SdXJs2hCsbsgi4zixdc9CXw7tZjhWewaQXSTFCciPre4MwRig3K2Bvzv6E58bkiYofiS4BQFDjVeE4Yi"
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
