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
    "2Nj3NkhawHMrVWjMLcS2DFj4JHxFLNvNGqpgeHPXyk3eenfAdQY2EVpk4SZapWyECVwsSG4qsfHzGt6W3xUbNj7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UkEfrXhgmQmbSMJVsNnx2SFtD9XHFvvy8aV2PkErNJ6gTjGmD3tbsgcXrBiesNAS7zVL7ah2Lu3iM7f7nVoFMH2",
  "key1": "5yadW15TSRAiJkJGaZah4NnRb17eotg28ScAda7dGwEUppHnnHEQpxKzFVtoD2yv5e5Q6UZqDkRmCGoimeZSQNjf",
  "key2": "3ARuW8JkZ8acmK4Cbm7GVBth7U2uzTWfzcTYmfeEqZZzydmyJ6pnPdG6qdb3XeNP4MAXtnNHjrTFfXjmCfrwB3nr",
  "key3": "DvzGGcAAM6tXizLVYjiN5ryPnqgq2JTsCvfXYMaPYZ5KKBrksrfQDaoumPVxb2NGLYQzNaTTcxmFXUzpa1d8KmU",
  "key4": "5AkT4zb44Bma4Nep4yM2uKuo7hJdnUntsX4c2gbCTPPHXLc1JiJUWVzirDyHCwecJbjEwSPJQA4yuLSn69ab24Tc",
  "key5": "392Ls8Cwe2mys9g9eYKrnoevSw6x5g4D6RKtiZWtp4CD875AuXcbnt7vJJgyyE6FDNyShRsMzvjJpBk7shddKTFr",
  "key6": "2z1ATYi18Kz3gjXiVJXQ63RqUCezukUeqR8rcAVqycnyPtSPgrZx8W2wgkTFZUbpaCQ6qG6T3NHyXMo1bgHz7fXE",
  "key7": "4h8B77FW6hhjzmE4EYxJWL8n3ndZecbmeHtAGE9Lbq9Nsm5RsMgKo8nRdTYZaFcEyvV8fXw4qJtvDf4duzv2pgYB",
  "key8": "3aZfdUUTwTzSYacgUWHCgvidM23F8zvo7PtfvTrjz5iFVSWSdjT5Hxebg4c9wGvZS2h61JFFbkYsasYBGvMaCkY3",
  "key9": "29WYbJ1RVjax2wUPZYJBtasUp3Z9Nw3QjBsPBSC18p1q1swCf4PHBB7j7qpSj78Ji4iWmVCHW7TY4ECJ9hifJ5gz",
  "key10": "2BxK9EcWzexZr3c72NWgeiuiFKRoe43qrVFKeoUE2EYwcuW8AdgA4V7AtydbTiNn3sVcuzTuJy8fLFvF3URARPFn",
  "key11": "3wfqensR4tJByYSXiXcLVLUqnbKuvpod9NAyx9HcriXcmFQVjjVy7WtJ1KGVbD5PfyFWvSh2QKVKFZUPicntE3BM",
  "key12": "2M7UHvB5zgbBKJysgVPBHiV1jxLy16y9LaaAkWTcBz8rPcy8yd24hLcfSnoHUPp3kENR5Sb8Tfm7zJYn9Cq42qgz",
  "key13": "4R9Trxh5H5pPAGoLL7mftjCf3VqrbrYak3d112nxgK5RpGnwd4wWTpG9crYMDnWa6YgGWL8JLb9DHdQHDMHX5z38",
  "key14": "3xxyEqxTQq4DocdkhnDLfev3hw2trvKWYLYCjLsqCkk7oVP4t3bnS6KHCuseWAGsWEWYfiEHTBTGNZtYJ6JvBa91",
  "key15": "2a5LLjFpKKW43tu6vJeBrPpxMkAUc9pJThSDLnFu7Jv5KaoSRhwMci8DaT9hzmSGPQ5JGFYRAi7mNK3Hu6udgcPr",
  "key16": "3yoogtd2vZRbbiY3HRW2AMjf3rcBnVQoCEif8xt9a2PT7Ckj8aY7KwVcQTxLDY64tPaX4YBFBHzJTi4ptXEL9DWa",
  "key17": "5HnYfTHpgf8VwyHV8dk9gtkgoTTbRCgqF6TztJu8BnHHJgBEHdr6NDcoJkzbKHYqLHy11ro62wkyps95XNHwzUbW",
  "key18": "3caeebR84UW43xKga45j9nupmzrK2tgRdbMAtxf4e9A2H4CLWxGREkyEED2w2FA8saYyM5KCEB2BjW2ouFSH8eqk",
  "key19": "kgymq1PrJXkUpNiVi9nxXfDkRYHpF4d8urMnwxoxLFQxa2YnaxsVome5daUmaGk78hh95i3QN1oyC3vbMEGs8gK",
  "key20": "3gefyiEFyrqxPm4yoKdgnbuEPy7LXgyZBdouYYYS3VkePVHQXvuHRY4QqsihvrL6pfmMDCU9TTDb5TPqi7SKAjKU",
  "key21": "5RL7LfUHyM1okTA6hWTMMfawXcfEmJ73tNwN3zziMvK2nBmsmiyYbj5582VWyvDAFNRYGpJBRRgt4ecizQ1FniuT",
  "key22": "VU7hksRSiMtCLbncsKQCSXTxVp72pMA8arPQDJ61XmxHdsKiNWFCZGbT16dNj5X2SzzbVtSYP6YuLwa7LACaFyt",
  "key23": "62pH8M1cTG2p31AvaVon7XEXukqc3dX4ZKD5UkrFofneUwwcKkHNGZ1vRANjzmSTLjFaeNo7dVkFfaCkqBtvRsXN",
  "key24": "5qBJyLJuyjkpnWHyM8m5pNx8dazbpen5nZ2TL17rsATg2Nxkyi5VvhsxX7KEK9UBczLdejYgwcyCSrsaP8zzmfFq",
  "key25": "21jqQ3F7FvdN94gbTxTnHomL3qbVWTtnYeyiwiRv2HZGdVCekVT3iGhqhpWtMdDUzYaAwqwpHQBZQqc6wdY7DdxT",
  "key26": "5E8REq7sje8qamXkd6eJVkvRenyLzU2sTSYNwNLuV8KUxeizryfB7n9wcJjdoGobxAc45isy6XRitXiSSEGsJvDC",
  "key27": "3wXyiUpPheu7YePdhNe4NZZ6hqMEASdz7ELoTESxpryHBQjvx386rCMVxyr8iYD75VMGhmqnadnbEsoccuvsj55x",
  "key28": "2ZLUxaqbKgfabGBSAomb8vakRYPwMKZwKcVBFsBADbTAJsRobmMCcuAFBHmbR5pYxT3NFVt7jmHCi1saiRuuLFSY",
  "key29": "z39EUY7oGSRuNzCkBDW8pK7kJ3DGABma33F2hWo6jgRT2W5gA95fjCgwU5jFAiipwpUcznwBesFyvnFAVy4D79H",
  "key30": "2hKdyMqWsBKkLVbnhRV9bpm8JWi7YMtDNVv7MxhTNnxQqgGvGPyVoMpKXqnsR7TmTih632gw23yMMDRHGvnQy4A",
  "key31": "arqZkNeqBuRTtszY3csWjjnKxGdLRRRg24ta78nBxZRctwW8C46yvJFaHGukztHRHGeTHjhUzZc68jE3P7XMj8R",
  "key32": "2p9dP32oVfAhjrQ5UzwtAY4i45mPosn3WZvJd3maGHfUeGNnjxYVYKrTJbCLUMHkH334ry4oRh1VnwMBSjbTNVuG",
  "key33": "28XES7JnYn2N8C2JPqCNKQ85Y4zFtn6F3C7dQYpHHEGfcfYAzbj3C2BBv4Am5XaPdbfaRTtNfZdEreBqTCdWEsDm",
  "key34": "2sowsCfsFimxnLFFf6BkmWxSaaY6BqnsaBjNDuWbueLWM7T6AsXegqoPBEL2gk8Sx3m7Qo2cwRVjN6RxoSJFf7oZ",
  "key35": "3U1hgzSgxZtn7MmieSEWkm71MhPm8UWxaUrpzSyen94bYcv9VRJfHPzBiLVYUMz3RDXQpWyrBByknWprzJkrusNB",
  "key36": "ZPxN34R5jLbgosuMb515P1UGGRvkn3oETU7o31Cp5T8Xcn3fBKPWNaZYnekYBNtCnTEg7AeWoBRfxYMhRJVbMgh",
  "key37": "T5Uf6XywgnqyDahrhWtBopm5kfeHvmxzYSAvApx9KoVmjnagEvw5q5QrFZLmR956dzxsVok5PJZEjsg43h5mjg2",
  "key38": "2Q7P1BtCaapXpCAKBGbLhsjkD7thjU5k7TZAArz91h38XwJHNXMPPuHtHRpyqSM1c3fgK3frxWfSeUQKu68JzxEL",
  "key39": "5rziKacPnVWRo44NasA19L1vCMM3QZPZVzwjkwe1VEZoa27Hsw9GRP9LXgVRjiwgJoScHpH8JZCeBHgV9CtZ4rqU",
  "key40": "4Dr6g7s48JJCvrSk4w2GB5p3npPpTo3VxJK7QDzaY9wuGtrDhA2KQXz8Vxqs4dtURqhUEUGbuCeXZ9xVuan26SyV",
  "key41": "UoqV1c34HNWprGrSfKQbMsJib7S5GgQeM56ihmviZoVEn1wEY7bhfF2qUZBQ9CC7gGUkmQDGk16zMsBDStBBbHu",
  "key42": "4WDoyjQfey6DzdbWbjnyyeSub7EpHzrSUpjbgBVTr3HFgZa3x9hivEkdj1gQ5QWM1L6yrUudaTAC2vyZSTgLw2Vf",
  "key43": "nFjVV33wdumKX9P8ts8THPnbfedXekgMfr6VW9CcTughjwFR79Bgknrm6CRy6fAt7RCybEyUJxtff5DThSHHvUi",
  "key44": "5thhH3KG1HZG2eVeQ7U8WoQo8b9GvyZT3jewES6FpeJwMdtHfNTxkc1MChUBu5x63cptQENmPRmWMGsKThgDYo9S",
  "key45": "3HUSuf6J8bYdfYT1eZWGpgyJ5T36NXWfwHoSHgNkPMU8yXAAMcTRTkVVhBQMFpQ1vddoqtTcwncAqn8xDcwKwopE",
  "key46": "2JGPmeknSMgVNN1ePtz7gi9d5rA8vqReSKwJRA45T1MWMdwS88ro6cGuH1ZSreWGYjcPBzeaDkGyLBN1m4hELpeY",
  "key47": "5LTnCv5JDueyRzVeK9DJcN7teFH1Ln86MQqgQ5Tn9z8TH2hSqjTQwmCqdzvp6TJxraEPSKbn3xfcgcrLQvVZg55e",
  "key48": "3F8TGJUhs27MuioDKgxekUmmDmF8UowHvzS7387xTuMKaywhvfXhQV9oEjj6kA7qMmXzb6kTbG6Dtst8krgVTfHN",
  "key49": "3FVEVY9j6zZACnRHLdeY7kqUp8vfiUHqjsGVrk7ZJWNJ8zDLavNaqJpMBU4XthL7mTwbQikXV84d7SnRRvdVGdAL"
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
