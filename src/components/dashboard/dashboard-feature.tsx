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
    "3SoL2eQPxrvv9Y7x2TSJuAbHHGiFnt8WekkFC3KgrLH52bhMe2TBo5u9gXwvmkVaQfJHkQj9jKox2HdpYQKzabjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G7U3Gs4WqDmnt6TNC9nsnoKVZ4xTNBqnfJimhFJDYxUK18n39dpJZDiPUDriCHRpDktp8aLPmMu6MyXZ32mnMWy",
  "key1": "4R6nPEfYqcfn9VzqA2xeJ66G7vSmCcKKUCKEfErFYkhUbqcq4jG2e4XwM15G3WjiBjQTSZeSa3JrZ77two7RMhBm",
  "key2": "49gCAtcbZ7vsFnJZuSQY7fvjcSp5vVNndsSz15H1yX896Pij9JcVoTdJjtFD7jphtpHs91H9RvsgdD7rAjKrFxmd",
  "key3": "4rKwFVKSbsxrLx6ooWWJU9R4ak3TEtkjZVrYZa6J7P3Ya6Qu7b1ZcPyquFbC517N1d3zuXoZaAk9bWpkxgxWUpy9",
  "key4": "2QhoKKjJDNQQXLJ5aRmMgg2szCQKyGU4BxmNYKVWtXDvoq2mji6o1Pxm9oe1NAtiWdBie8KJz2vbuux1mVPQ26m2",
  "key5": "3GrL1AEaUJGrhGAraPRyZ39fGHWbjaENZUYF3MVNQTEhXPcpPnJA3QgQw2993hgkJvTayQQvGHmUE3TuPKfszkhr",
  "key6": "29sjUT77Uz5k11fke3CHHGn3f4qrSFCQrBxP5ucvjnkgH2HD6hhHnzMWJ6DfVbQ9sDbnqT2S9EYV9Fm1oAV6RoXK",
  "key7": "5YfDbAjnnvAtVywBjgTypPfRMdX3YxZ7EdrMhNMseAa8rHV6wkfMwnMF3CqzsYbzN7zoWqX9MKV45sz3725ydSQg",
  "key8": "2HDtfgRsd4CdznUA6Lr1du8KgB97hnfRZsmpeZjao6PqC2snDFXjqUH7Kj9bNSJMTS13cRcLz5oLp2So4unFxNzh",
  "key9": "5aML1DeQPJMSUcj54t1k6jrZDmvcfFQ4gQfqaVtMPyb1ePJZvuJojntvjzDiKdQsmpJ9JfYXWUpGpSqmdgyL9fsB",
  "key10": "4ezvUfHUib9YkYE9iA3x4wxENYNUCbxFBoyfjQYAHiKewGaaCHHTFb6skrCboYmppJ3EQiXSmmj35UYDouabsEb5",
  "key11": "iufLkfwr8cyy7ZbQs2UXZpS45Wrkehugvyj6AdgR1nMQQTtpvZfSa13D3MXNm9y3XFeFj1ei2vzU56WbtpozrKK",
  "key12": "67FqxJ5A7HcgMM389X6YKc7LqjpCZLt8JKYPa4hNd3s98brmf6RuSQTYZBveUnaW5rdLfS2EPyF5RkjkpEU6fvYB",
  "key13": "3Kqu6Uuxkkvy3hDts5Yt1tz5Jy2YVHZpxt3ubYhTsAajoPH1Leau6XNFyfVrUXW8BjEiQtb3ufMj6cx4U5RKAy3E",
  "key14": "4i17bQUv2mMtxhRULoWEgh9WA5361h47MtwLU3ofdr2ebxvtFsg3iscCFoxmMssxtK4eR9AfvThZkCfeptLQSxoy",
  "key15": "33HGXGPyW4sm7pYjsrA3MXobjWgAsFPr8vVWabv7kDsD267rs5Jb7n9jFSdgRf8wuVrE8d69thj2a8qfLMvGDwao",
  "key16": "5qvWyzyn5HAev85fwoid49UPmUsy2M1EUYFiRyjyvd7ZUVJwRp4risT6E2UduPyR4Z4bmiMfLC1n9aC7YdRVx85u",
  "key17": "cfRLLh57omeFg4YDJ9J3csyG7UnNswqfR9h9SeFmfFB6QfrWBycgssBFAyn1TB3VV4C6zRRcf3J7kS4QyJwhtEg",
  "key18": "121GypYxaUijCd8TKzTGcv8SrcnjbLJm4tyCFmy4nYTAfo5JNEGazznq2bdW4JtcKZkMiB7V4gBVYa8X2jPnGTcy",
  "key19": "4LUbqXEYQ6kLstSihPFwvAsBCucsSmy157nqicqZCEPWnAkyT2GYdTtnZrhvNygDoTw21vdWS2UnWG1gzMDCAtzQ",
  "key20": "4JRRTpXUPbKJszGboXfyX9TjQxKLM4RJXfVRnyLWB8VjE3fB6Mvx2ukvgYY9qrfApwMFpyb7DoGGzunJQp9Y5ceW",
  "key21": "5bTs8pkK4y1cnmJX4fnxJYZnQLrTKVJyAshnMXKKfTby2pKfYTDosTBwNJFX6qVeNhYr9NYxN1dvuCFAZUTD748T",
  "key22": "4aoL8NpcMEpEbCwHXBEEKyFmXGNWjMUdzT8Lk9LeFE7BBfyLNkEZgHoNhcG55phz1i1Vmq8fzWXeS8u2tbYeVXDC",
  "key23": "2EKAmpLAHjS8tbj2bPVjrv7RSnFHR5WBHUTodwWULaortJRoxsQvxZ1Lexa8wVFrhoGWb6qzDHvaZo9mKYwoRqgo",
  "key24": "4NfRFwmRE3SnZEycdi2Cmp1U4UKtJdkSa3LEf7bn5csRLZYE4XKse4i6wKNnJ5WFfrVFbc5AU7scVo2DbVgniiJr",
  "key25": "2vBGM4cjpvH6truGEr9CChCn6rjHg4z9FogrUhxvmqf97YfcRvYLf24wVHwQMvFjwSCMf7iqbBQtzwUQCH6vUuYd",
  "key26": "4REC5wkzD4XKkqdBo8ubLFxu1i6CXsLXvQaWjCcYYG2JCST2gGUEcX5athwJMmGEXqg5XvuXpXMLjN3swwrnXAnR",
  "key27": "5Cc2T6qsF111KSsu1Pmbqx7yaA6kxDoD1mTzYtuYKik34j2w2L5bJDrafQ44ufdW6k6k9L4wx4k8n7jsE2ESniWr",
  "key28": "dmtNsPJ2EMG37dNGrmc6E1kdA3btNNXiZ5SWXSCBQ6JgMrPc5TGsANHABTNNyR9YSk7SsU7NwvzcZW9RCsC4V7s",
  "key29": "2ukwwAHMoukLEraCEPdvbAPqx5KQivukbR12LzUkhYpPZ2KF19jH9SkijSMh7pywfZDgWSRnrDNTjwzexkbKGcAT",
  "key30": "5nW4McctLGdMGJtPqgnvCQ6egzAz7agurJYWiLAGKgWHqNw56CvgVCPEV3hPS42ZtgxLPynzQfA44HcmWiD3aMjg",
  "key31": "2ZTDdzV17jgWhb9NdbVTdJQM3JRey7SnJPwjvXykeV5L2XZfrdb2PJXXpMgJH8s8g9bDdyj8SdSAMCftaev5PEc4",
  "key32": "36PPgS1fdmAXxvZnq7rHZsbUSWEWT4zda2msy6fZsa1AS2zxa58m1EfUM3Qqmb4gJ7q4Mfroje8tRXkRgMKRsRXk",
  "key33": "2j3V2dAWLQt1frdbggkoVWbevu2M5HJBfGfNnUxEBv3vAahLKA7fSbtHV3fTCNrA5wVx32FrvLnAzWdQrDmw3Kuz",
  "key34": "Zabh1xnVrHV8ALvgqPXm9C4BLG2orSSyY6wHKpozpZnbegPrK5ztLa3YzudTHfbVvc6XVB2hT44h9xiMjhGKXH5",
  "key35": "5NMhH1PifpWWn46pHN6DHGryoN3kqHKBuwcRxTbdWhwzhZ4XtS8H2aKkr96JoP1TVRvT6EoZThEyq4uc2QvfybFQ",
  "key36": "7AJ2uAfkqv1tXfScwW2W5z5CdAtUE7jiiehfDMYmCHx91GYCeg2XMCCW7HwNKjuew6zzskWTf1vCy4E8E3xPc3q"
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
