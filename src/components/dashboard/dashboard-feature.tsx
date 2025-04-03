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
    "2UWkPC4dBqcj7v5Aeh2SNB7g2nSr1gv23wZdWuYqSKt2VY3hTJ34k9L8L79PZkamCDECJxMMD71cFm9PAmzfc5fm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tW1pqzud3WiEWM7X46sToy54gimweNJCa3BMHLRojkC2t9BcFQuWf7b2kRqrVcVvx6PVQZedpy9hTuL4EHGSuZk",
  "key1": "5xmmW973BAwtfw4QM9Ht95iw9EG9WWuJm86VGEwpWB6q7PSFU2aoDra5nF5mErLDVYFR51GNZhJazWHiMYHnk3Nf",
  "key2": "5cAxhZubFct6kdx7qTHyMAcE3qS7EdY2hKmL8RfHaVRrN9Utr8VvZucxG6jq1T3dseEyy9wx88b3k8SZSuC6o4cJ",
  "key3": "EieYDbjRiN62enA3Q7z7zgiBHmUnJfqAxFzR4QL6b7zPrkuEiPVvExbgJK8iWU1eSEcVLTYHbxJchDJLYrrcRbh",
  "key4": "3dDkuWmFxanSB2nEmNNnSFDXPFn7N7HERmvKNzQNw7FXBCpbyRgc3dic7xEGZd7KYhR4eSfe1BhCfKcP6L8z9pHG",
  "key5": "4dAySEsrpAyHFmJ46AFNmWEsvfvin3kyqr7VtmXWiB9nUyF5tNjG5p68XDZH54F5vs9NhDJfMRD8apFEBpM6wPCE",
  "key6": "54TVazTpRHbU7pdHnXhKJq2Rv3heDdnSCjyGcY258d51e1dTRK1rP1fKEZ9SuTQzaxYpUC9vfjoBgz3yXQrwvWJq",
  "key7": "RWKvD18rw5LUbJ4Bfud1rbHG4RApAAsX81T3N4y4Pi3To74ggJaJjvhcbvjAYepa1E8uRBLznH5LmH6pqSMQr1L",
  "key8": "63ZE4UaUARetXYLzGxMrD8ABnJiJQ1NKLW5jGr88PgKYXdmiAg7VyrXbYJTy8N9HzZF6fmKDNcsJpAXmyvHG5UVV",
  "key9": "4xEtWKRgbDQ9xspgYbGqzkNKFezD9PUzt4JoVXqQwnK6ESkqMa5gyXjhSJ8SBSdaNXKZZHekzUhEj7opFnjGF1Hn",
  "key10": "58PuaFpNz1bUSvyYJ4ru7vjdJq7aXfUUepgQktGUWgss1N3MfiAcN1gw1X2xNbErXxpH1DnyEmppX5UHsrkXSqo1",
  "key11": "3bSQziX659xmtxsij5tcqNgnapiZQQmh3rbgRXRYUBp1NgGcwrQGiiCH34CosH583PSmcnbX8VV7Gp7H9zbeqKYP",
  "key12": "34eACNti81FksJpSusZZ7GRHjHP1kpagXkAqdA4GFptEeQBcYQKsjQzuGRiPFEhz96vg73PtHYq1bgm3ayRoYtk7",
  "key13": "KxLfXCUStJuvgEdsmpswffemp4TX4Fvg4uoLHjCuew2QBLjsN7eefF9Y48wVMFEvkRUKfKAo38c8peSaTopRJv8",
  "key14": "23q7RBqdAQCYu4qpPfVZaw4EyndWCqoKqHwTF2zPDUDwVou3kBDanWoaYDNa3WNQoYj46op2Kdaj3H8mCTCE1v9s",
  "key15": "59twksQi8CLR5LP5b296r9R1g5PbZBAtRKeW66yJokkoQiAUQPAMk5LcthfqDZzSQzekVDruUtnadgoDLnpxjjEr",
  "key16": "3Tk2VwkjpQY1LxiFShau266QbRdMFVPPbWbz7QKukQJ3ayYVXQAs7JedFXiKx8AgCKNnhgKRMSMv3fdHND6huyP",
  "key17": "S51QGviiSUuAqfwVqG7VH6QJwmXMYe4uJ26yr6f9dWZvwoSmdAR78fC2o9NvJQFqmvHaefKxQyDUSAnGaSVTdLk",
  "key18": "3jEd7sSs2rYfNPwbuWC369iBP29VX1bPph2DhfSkUEJQ19diKMNbBDGG5q3pBafQTzW44EHP25h4H2yd43qgDwx5",
  "key19": "5qAUkCxyCBRJ9EVpmKtbcb1oYpc1BznUiTUoKu79XzyH1bK3fJAStUMRhqzNLAu1KLfHtSsnWodewcQEYx4xwg2W",
  "key20": "5Mkr3yMzAeJs6LnH8wzi4HPcmL4xPdtk2iEEAL59r8x7znNcsdiSwyG8xorULegFCGK6LJdHFcKtvz4XUcMcqBvX",
  "key21": "55MHCHLDdVu43p9eDEy2ovGwFMaXgBvFDMY88pLq6ShdFomWht59ys6Zhu5eUeFr4BTR1Nfb7Ajs5yCyMHcqJDCL",
  "key22": "2z9MY7bzRnh4v8VA62srKTtjSL2fVNdRRqci3tNkz2Kp1RGK2Fms6Pp4Q5LHpXgXMnCLmSsPXyUAE936FiqVBy5D",
  "key23": "5AjFnk1yN5r284F5PV1pHth2n14gRBKGWNnccw5nkNsjvQwMC9Zr3utFfALK3zvBKAP9gqwUiijGyvT7SZ3CJBSS",
  "key24": "66D2qLvkPEgA58fFnsMMQdnj6q7m1hQoLvrFQaKxfGEXh9Ar1G8jtRcdbVyy5hf9JQ4X7D1947wYxnsgAecv53vs",
  "key25": "3D3cmo8H5171HQXo7mcyySrGvfs9sXsosiYCQmXWqJFMx9enfH3kSGHzq22nuoc8KbkkDLN5k6M2pLEbmK6Snp6",
  "key26": "5aMcpT6zTStLodGkV6o54r1wGepLgxcdLvKai3Mxr8ZPnMWuXTvhRfeCFQFd2NAFnRn2y9AVmRSL7CbyQevcAC9Z",
  "key27": "2VCkvxj2FpSy2YxzC1VAVoiT8jtwq6KayzAcswtRbsq5hViYx1AA7gnE2cZUQJ3ohRoKksQyXmC69KFtRo88N4VT",
  "key28": "3MqmUhedTPmSu6umqcDNVZgcpP7WF5A3UkbHGbWZ44v2qby67mdzPMauXp4zrxhtbofSZcsSJGDcAqqU8VPovxDL",
  "key29": "55P4aDHiuSm88XhgaM2HDKXp9ruV3wfe4oZnAcf6rbAGKvMMDSo8XtEkgBXAXVUcM94qFjVJa8An4YD4bXfPVdqL",
  "key30": "PExFzC6qbiszntjG5TdX27ZiraE4ZVE71cDmETQNakBmS1Vu9nyYHUydxkwiMT7acWq5AYE2YQEbKZtxEfhK4Wm",
  "key31": "2Edp6SUChaL4CzZ3kf73WcEu2MGKKEp17K3BX1tP6A6xHwAg6pJpAD9rEchUjZEyipcGHviADA9mzZtzaM5xrfXA",
  "key32": "2uD3F7QvCurmiLgfYz5GTeWscNUZ4hFq1KypkQX7KEhfKZWzLDrBDRJh2j2YbVPpKKN8thLMebPAEZRohrY17Qc",
  "key33": "3U4Kojuk7NcodqFsWD881fVoWm7S93GY3ijdg8zZvB3j4JowdrkQ3VBh5bJnK8i9MzMm9CwA95PDL5u6MVpGFWDF",
  "key34": "5XFUDq98qdHLJdA45bSVUtY2fsamtaFvuhep81Tb1FYz3yf5Tx9q6KtPC96Sa9DCMVjHnYacnyyvQPsJ3GzUJ3a7",
  "key35": "5LSre2KZ42BYAL3ivtGJCZnwNwonDzSMgRgupTxSyoaUgAmtVR7bE2oC9C5q5oq2QmSVpofEuz5FbhbbvzkUpdVp",
  "key36": "3eBHzJhVjuwooEZP12khzQh9c7KNurAJZQj5Kf21RfHtSmhbCj13jLJJC9hfjeQSWsxAKKrFCF1mccXNSfVYLBnz",
  "key37": "67Wt2Fg7ru1ao9QhNRVoPKWUGWRzzrS3Aw65prCngemZS3feeyJj7GgrsR6xvptU7zkBPQ8YVRFwGDqExLPNHRE3",
  "key38": "z7BdtDaqxY8NEgXxwVHD5uBdBTu5BW34XFvqubujpMLaxH1tZeRe3ZwxvsNSwsg5ub6rpzgDQ3ZYXvS1BbZMSv4",
  "key39": "5ktmJg3PkcrtW9fJwkuDAEJBnkfuZdRg3PFKzHsM2E6FJB4QAqKaoj6ugFYkDn7RnfmM8TpZxFokGSYmjYJfzLUQ",
  "key40": "51oreQJ4Mz3etenKZ8eVYin4TJnJYoCCKDLrhv9btmKimbG2ETFvMEUkNyfNmKHqdEQUQVnCbw2jWLhFe751gaTA",
  "key41": "4MLccUK7rbjmHj7UHKqJP5W6tMwSMBf98nutpszYcT545eRzxawm7h47nx3XA9FJ6JhhUaPg2WVqeABFfRN4fXjE",
  "key42": "3uv2eAHjZroDPBr8DDMnbRramDbhMiJXeMtXZp82SnjVyTCrvV1C1vqQ8t9TgDdurg54MC1KNWGoAyoD6iMLLqYE",
  "key43": "BgBfiKy4NfGB1yTves6trTrTxQDZDFWSrSx8SAPgreczwS5E5P6kGr7g7b3ZNDhYzJkGSfxXBZxYt4kGkEPW4jA",
  "key44": "4RsYvo1REfBtCYbmAYG49B5a1kGmPiapAZy6jJfFuagAiVcJm1WYAdwqv4pHDUc66Djb5LQL4rWWuBQuvTUb2EWc",
  "key45": "3PeyLAx1Jmwc2i8hRpYwya6ZRP6CmhcTKU7B1RokoniFS9KSoL5yyPU9522KmECQpjhswvmzx5ht9ZDtSaoYfY7x",
  "key46": "4M5aYiwYAk2kTFVG2sZ6RhwE3tbWfL8c1TTcUJzK2Nvjuga1T3RxwSPEcmvByWkV4hepev923zmibefgawn37TfU"
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
