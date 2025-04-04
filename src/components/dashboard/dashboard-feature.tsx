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
    "NSdDKzB71PXtrDqhcqS8ZaeY989jpgtrKw44ob8xLW5EHsLCP2XrJRN9r8MhbPKXjjExvoLyRTqe3i3udf1G97B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XTkt11dFzzJ4dwaPaQbCShuUAxW4Q6s78HSrwyT2Dv61ksXjTsosteidQ6EurW7mp38PYaAF8M8ku5AFTBseJ6j",
  "key1": "pR5w8odW6Lm4mRdhZDUy2hXQHneyDnQkgWjojLTnRu61cZsYHwhhGCnkoGAQrWDe8aTE9hVRBM2Z6cE3txGWBZa",
  "key2": "4J93coK2WZasFBqDK6DkHfF6yP4TQ4qNs3GQ9xJo9nk8EVbbJazZeRTWdGUKDUB7YizfqFkAV9edTvwYYLYJUiFn",
  "key3": "5K9kAk6hZxmXAeVLch82xNCo253khMiS6QPPMVMW64rAiPNXDU81Z82cdxPnzDHpLsWW9LawAmz2GBmxzn5Mpnap",
  "key4": "4NAxP2yh2fE8zGZvWxaupvSNQLcnCsN8iScEtRquAq9pxXi7xAdZ9gDunjpzcbmpM1nb6XwHaFwGU8sUShFhV7ji",
  "key5": "DG79LFrYCtaKeMSjLjGcvsrjcqrMG9dEzD6WnPDcU1vpAKteHrHjcoUyUAB6uAVriCmmm5eLcuMbk5JU8G8fwcx",
  "key6": "4kBjXETVBZSue1fYUxUJSwj3KV4kUTZsobX4zLohVMLUbVQwfbY7hQ3XzkBM5QSTbzhAHZzbMFpNUv1Y6iWMvnyW",
  "key7": "3fV8Ug7fUFAsnV7F4RqATUKa1Zujcrtb29mi4r6RR9qHWua3kEUSNfdCv4vwx3UEE4SR7uwyWfUVyZVvEdQGEi9h",
  "key8": "5r997kraZdtXnxhfKsR5MhkkCQqFZEUtzWM9nDDVBNervaTX1G795ihgn19yjvSNDWwggAdLFT6zo3YvDnc53Z9c",
  "key9": "FndbWQ6ibNUieSF3wb2CT2fPyr8XibM67qroe9qYSgUHXs3S6vf9enFfqr2X18WLFRKLBHRgVt7aqgm1hgrFvYv",
  "key10": "4rGUgKLWURMeFxHZ7h1gZ4EM8tGnMQQduHqK2EfJJCgygrmXVxFyMp73yJVoXAtG7GpfAXc8MrJiezKj5i2HU7Ju",
  "key11": "2sQtDJpR8vFZReJNB2drc69JseHD2TyDAJtVdarEnneVzDkjK53J9pWSVTJn68ubqJkfakp693b5Jt1NDpQpT1Mp",
  "key12": "4QsNeZc3KMThgWGwsqADffWtyPHuxDLnnxhzYzKr1v15Exk5K89fbyJTeLTPeqkC3rNsXSYn31mN8Ed5qy4rJXYY",
  "key13": "55Yk78UAF2nHZYozh6Jtz4va3ud2V38PMm9XwfcjmXWbWsSfWhcdzzHmgbE1pKvGg25e8sQpftRYegGZ84cyTFZE",
  "key14": "4yrhvzFPZFnP2DcwzHfAcGGihdci5Fwa22w7DtrYAUAJvveHpEx2HY3FoqQwm2Dqwg1uXKf43i69jvViRhZFjmhE",
  "key15": "4PkZpTFhwQmtRdAnRazSE1A8VwwhaSxXq81QiGPHKg9cM7kofd5Vg9uUWEpRcMT8TMHhagqeLf6Qayoo8WiR4mnt",
  "key16": "4VLh58bLGUfx7LSdA1Jqx4DcM57pU5bTGo8DzWxZbJhfpdfgGsr35CYaU6yFPSZM3WXHYcAyUq3NmvksgykPWShp",
  "key17": "4WQRVXC1GSqmTF8ow6nEDErHzuX3bShzMoqgBy2AvVRuf6hdLfcxgrvxVKE7c87QZABhgVjjbLvTiqWXLBoG165p",
  "key18": "onNTtUtVi6mJCzdhxixReMG1hjudru6bY8JB8X7wc1zbRa5p37f4Cwqqs7k9HYQyCTc934Vw9dNLDiG2yrJzXf6",
  "key19": "YqyggTqmcEPniwqPy7KKa8jvavzDzXCXqdXAeY5eM8AWbPZEjgcNo3VWDGtsgiRNFMjCKsa3zkP4XJ1ykifcnvy",
  "key20": "3gdAcimUWwEUwCaMpUYCQbsoyLLmKBLotCUtGAYS2Ndx2jVDjSwr5hSQ6wv2GErGbJGytPV5niUiPEM1hPMVKkoc",
  "key21": "42c1ihthme55BorJrjRbpjztDnrrtPkeFjz6XkVrRfbRgMU3gED6jBvsn5ihhdUnCV42aUBG56XGHh3DEaKvArv2",
  "key22": "5xvbQAwDPhAHV233SxrP3P3dKhR5SfPiSFMx43eVLXXdJ6ZDwCZrR7sgVqMC8ThUsTguawTJMkEkbrSYrrTrbpC8",
  "key23": "5oAzyNorM5Cy1YpFJP5xyPX5AEvFzLYS6VhE2X9Pbg3Drbd9BTbtk6sDDL3aGjzjMCRhmKnHwyVvfRMZvT3LATNM",
  "key24": "4KqU9MbfWQg1kZSS5TZmwNeUsxk6sLT94jPYthS2rnNvzfdHAByAsyKTQp2mdgXGKLmtmnzF7zrqZFWVtTcpxaU4",
  "key25": "3zA7kD1UHHtaXFonSjz7vxWH3wj9KpSQS8eFqacGUCHfAL3gKxFU5BDECGgku4KS9NMBqCW6xmqEv5VTSNVv2r5X",
  "key26": "2YBMcDdtSri2BnwWvJHxbPkLFUzMHsP8SYKU8GLi7EftFGWxJPH48bGQmE5YEJXbc9kJnR3zdZa9GcxcR5uJit67",
  "key27": "3VVjAUZ8xrhyzoomNpbHLZQJD6SNN9tGzYHfr7QuWTHV2hbbVsVULu6KzdtSa5qSa3GqzRWk83QartXP8t1xuT5P",
  "key28": "4SedmU7ifHPsAz9YwhKVct7Wk8s7j95MxJsVuxe49CVBvE6VqqRRnwkY5Te8fE76w36JdQ9d6FmjznS4JFp4zzWb",
  "key29": "64CeKswWMJ7DkTmhVJopjo7upXpdg2jzfVN1UyfGsC8Kj9pNKWQjQYSyfxox9wnb5hM37qu79moAmdhgBRfFcfYm",
  "key30": "52PogUHCAdadWcmeSNpyy5xoDoZG3QNnHEMva4xnLQaQqPktb2NCn2AHbYC3eiTv6t8vwA3yScuzbkDFPxcRsyeY",
  "key31": "X8ktwjtWf364z1CuFUoYT2XpWuqyn7JkEb9sfGoj91esayaGjCUfsth8P58PAtwGyYDPEjqwftQ3BvwgVwtiGJ8",
  "key32": "2bTcgdS57bJZXahPSZhBxeiH4wCBEL8Ru1naqnSmC5ye9wuc5XqPnR8hcTjh7DMAkQzpkehSabf5sgLPTPYatvCh",
  "key33": "4ZEYQGM7M6jCBiu5ryHvrLX4KuQ3ofJRR7XyDBAhvCTWEh6R1gNdHcpw24z4MzZqSMJdTw8B3874p1fF9t5Afka6",
  "key34": "5F6b2nipAxsSsYZtLnVLQHHkFPwSuR5L2ticPHgDknZC26jeLYWrmk8UpVizJUUqDvCaVydJJfSosUMh2BWuoAuk",
  "key35": "3Hvt89cYZ28rc8tVgVgsGZBY7m2m3CKLzSkDxmibDE69GfzbT4mXRyzcktTLUCyGGqh2rzzHZQLHWPGQApMYQJPj",
  "key36": "aQd8BHZVkj86QVktCpjq7i112vZ38wikDxRGmaF89NMumr3ngM4nchVuzcj3oj4PNbVR97nt9ER7NM29dhz4Qnn",
  "key37": "5tXbb4b3WUgQ4muKG4SF5aaNW3zb15vYVqKR7fTkTEjtFbVWZJqbsPTJpcGiCezsKxrs4qvsS5r5tg99RnBDPYpi",
  "key38": "35HK5rCiLDcFUjeXt3cBXhJ7KuSDfLo8NwdxoWjLp9u2rSVtu97oYMn9b9DN1UugHRXg5CYmZxZoZCcfB5NTHGKy",
  "key39": "2ZEk3uvcFc5t2MxiEE94acfexUXyi7KRpJk3EqR3pN838E2um8HW3k8E8WEic4KvEFGTk8e5qVTYDpS7urt3ko6S",
  "key40": "2E3tCC2hWcYMYsSdxW6QRfXbBURy4Q6R3SbwmrB46RgMtRbmriVaTK8oVtTUEb5mQaCa7aGQ6pbMTM5UY5VFa8xW",
  "key41": "2owYa69wMDbJkxAkfTS1Zxnm1jtfqrvw3JBCXFYP3QMNWMFsR8QvmrY4pTfxpkYHWcTfCbiwk3FZ9UcB2RjNmh6p",
  "key42": "4NSuKoL1Jjs5TxaA6DFfuqNwx5LMq4q5BxiY7571tjg2zC14PimPmJp6236mJryNuFfR98Gre66uStfi5qS5MbKV",
  "key43": "443PqEr1wweMQE4ZbbtiaxGtN2ULes62wbVb7urjxUQQDzZhzmzH9T5kN81KwTn4a4dJmDqXtoo2mpzyw3teXASA",
  "key44": "4F2pmMHDPXGraC4guh5uikEjuRWTKyFsS5mHTYZroAj6zByzzTYs6QuchT3N8KPWsXEMM5eDb6He5r2CZvpMSVDg",
  "key45": "4ZRejrQp2mN2s2NHaALNbQJDkzxH23xkJL4qkMmZ2dNDjxKqVVQFEtB9AQLAo4zzSsNjsZ5Ywz835Abc5hHLbVsG"
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
