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
    "S8vMtJ6JKqNJB1i6waKLe7QZotxdsg8NAgxSC6Fa1QcMWk1VqrtbbAuQFj9BnVJD9E3p399JHJZQ4NnbpKSrrpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b4wbMMJ5ggEcRLGdtEcR4AbsgxGE38y7a7PnfLmU1gFQHTeEf4jTz8Py3guYZkPcBgwaPkmeAPewR1cRgH3Taag",
  "key1": "28mg61a7Ncw7B5DDwz1tXUCZRUWSeuGVGDT9EobQcD5XtocK43zNZdqkrAvSePagCw6QGDZ4gCuSfaVxedeMbxVe",
  "key2": "3p94RFSBr3Hs54r74QnzX7pBiw2Z49LENScpfXxA9PZoXD6n1Li9PCB1k1QiJaTcHtm2wmdF4P9q2ANKAZ5gAqq8",
  "key3": "3ZnGUreFrYAU1jZZPvKDNyp8jy3TUii7bxM6GmC9LJiKVQEj3XvUywZmB1kCD5RxVCtNx69fq5tJHR7CEeMp2adX",
  "key4": "3NTrgfJvyaeLDdm4x142AgFR95irWP7SXWs1QdERtSBJwuteN7rUJxpu5trWew5VXTTjbuGUEXVZmocq4FJXn2Q8",
  "key5": "2tgmrXudnceuHXuYRonZbKtfVqDCo5EBwAEYWiSsUziECqnQvEXXrxoE5yL7GHVJDL6B5w2U88ffAUA2AVZykENr",
  "key6": "2N1h8KPFZHDDg3daaNLdQgknd3cHJgS6f6HeaYa4WgfPATcvvVbckcXDb7QRVa11XFp18xY7GqXsiyQqRAA3FaQF",
  "key7": "5z1MZ9JnLtnMBweDoGVroyVx7Nr61G7aHiY2ZzYXs8GSe91drKVv7CrNTiHRv3aeXfKLnezMeSeSP9mAV9QFTaZC",
  "key8": "4bEpHs2WdkSziNTRHy3KS6quKJHjjakLFF72qFr3fANYrFtmRvBG93SgWSaRT5iZxc4sHMLFkRjBTmbAMgLV5tJE",
  "key9": "46ZCupiiHcbtqPGwbjzmmz5ze8NScaSabg9mPBxHr9jjbzPSFWf9Deb5x1uPbqMZmPKPD6jyhBCDYNztLbC526gS",
  "key10": "126SY5Rv1RFjqs3tXYdRbVuhaZSahfLVQ95C2KyYMfgPW9MKcsSSzBbPXxFT8Ng6N3DxsrekFayj27sybxzfspG9",
  "key11": "4HyUq2j8nHvSWBpmdv9AwhhRTan6xAwpXTuwbwequDnuXPwjwXwr5bRSicWXmDjcDmw155ENJ9tmpPN1Bo982V29",
  "key12": "5YJFnsCgJb6pYmmp23oUgCeyfQF9S7QYzcrGZeyi352MHQPYoMFkAM9Utr1nS9KqweaJtLa6qdxXRN2rfj2Lxpip",
  "key13": "4gao8TPCmLUtzYJHuDVw5FYar8MVFNwRfNWtYCi6WZjCSER3qiNUhtLCz3GutBP3sBVBZJkpHBo6ZucBss6s927b",
  "key14": "2dpBRTFyg1NFuistLNAcuUNX6GqzdukZcFChgwCzewzSLCHW2wQpwT2XD6Lc6CnrBpyWWpRTQ7iqdoJiUqX84yh4",
  "key15": "2V4FbRdhAr5E8vqUdWKZjQh7j7D1BCsPQN8AjKsydnYvrYDawu4tTKgP9dFk4DoPzaDvhDzC2CGrXnN6VcucgjLj",
  "key16": "4QKB2w77RhbLGP2wcow8bSaswRYxYBQ8XxzwnE9rDL2xU4BcbZr9i1UygHAaAP3ZftdK5arS3kXFJF6XCTPYQJKT",
  "key17": "5d14q3xrDHTEjz9VeCDM9dWDdrfS5PvBixd8eNik7thgY8kxvxYhrZzt7KfwSQaCU8eNWuhkFMU5X2E89yeCT78S",
  "key18": "svPUQdqjCJ76MHaDgDi3JzGSL1rv896oxwyZPAxLXckSd9BCozQEHqbvoMh2SBaYKDx148mtRag2t8YbsrauEkf",
  "key19": "xmRNxT9ZCCG5CLHbAety3sYJEgnUGr94UdPy5ufjmwc2ckGdrqNzzqf5e5yRF9znx6mNUaUkGxCEyL8BZs5ncd9",
  "key20": "5odLJ2renB8aaYfkkdzYDBDj7xXhH6u23UjT68xxpA5HFpkVxkZNmxeb58VB8Y4Wdhu71MGpojHHQcH8sX6w89DD",
  "key21": "jVwkVER2xkvqbH5UG8TEGBWZdCyRNgU7DrRBXXC9Kw1QSewmBrmXvA64BDDwUjPgneAKVcqFKUE8JsHDAsPjeBG",
  "key22": "44aCGLt7CqDoayDem5jLS9HcfqsfSqrHq7hrCPgRZNqwbrnWekiwLUUpnVcARCfnFBzXahyGgQ5rmoZMpm94Esrf",
  "key23": "P6FbFt3wkjHDgaJ4bEj8SkM7m7We34Y7dWQyna5LYKt7xLpHFPK7YyTQdqCVijciDjdjQz76HymkyXag25Edfu7",
  "key24": "22KaeMFkmLVWacP5K5hKzJTdMxfLkZ84ZSTdvxM1TRez59z9hut5hzyCNUJhPh6FRdKaKchrxMEwJ4QCo3EABSux",
  "key25": "pu52RASwSTrAehovhg7sx4w81wAYFqjyFy9z5TmvfjhwWyeKj4fdTEtBQMmQewN3Q1wNuA5P4JDEuEm4iJe7Hip",
  "key26": "5HWAeVVK2oYcnKg5X9HPqh1bnYVECWAFkoTMtoEAwKZZ7jn8U3YPQrkmjD5QmMKnTn9AMrn19TuDAe1x2GAiJNpj",
  "key27": "4QcAHScTPQEPQ6d7eqd58TBPE6cmcQk34aqnVZQGutQF2QtPZZyo9igLga4m4GSMBtFXuZ5VyPaCbm6PhjcBoYP9",
  "key28": "4JXLGvvvbJBtQ6PHSpPgR4rUuootciu4ozgmR8RUvk6Q74jiDxkxRFmdqP71V1zs4kwAUdXfGn4pgHCZCvXSENa8",
  "key29": "2Rx7VAe7CpX2EsMyuzwtC7TCgPBVQmcEX2xPha2y2G4CqGzwLoJE7LnfYFddkUNwfG1sZUT1B4a2kRC3i9dsTP59",
  "key30": "2psbfTDxx1xL8qUrxye6cWQuJKhxbnLagZUDCeTqXf2spbybgHzxskrEjuSxBvqdLfdeKxuvFCXtJZSmCNAWj3ww",
  "key31": "4t1kLyvydmZ8MP5rTVugP6UZ4KKUErfXh65zoUJtjQtYyEjQARPzJpMEQuLuts5GsCdCnGmw8s31AGNdBLEtMLUa",
  "key32": "3cYgig5bbWgFPXjyS4pJu7DHPC469SJDvunx2Kaia1hmHSUpbQ1WrXg4jJR7ZLLwnkizGsbVmYNLMJ52X6bKk1ut",
  "key33": "3dkXsGp5sKPCvsTEZNAL4D13WByv97HtMXxyq4qBbAEzNDNgGTYkBMvX1PTGpg8NRd7x4RqfuMcJwFkSLURwY3vG",
  "key34": "3XsNZ2N4nDh7CTGtH8hpV6s1fScWM59V24NKYKMGXmwBb38nRjBoaPTShnRJ2vYAFPBGf6g6iF5aHbWmXUHUJEDL",
  "key35": "2tLjGE6HV9ee8vLNkBkyWqb7wRCiZidKuSGhx91PTzScYqyren1k3MXWJYnKPTtQ6HuFPJhJ3jd8J35VW6CZcqY6",
  "key36": "4dVkG4ZEtHQXpHQSMN8Sag93RXdR7WKddhwWqXe77caZ6HGuRZhH9wRyRf7otoQuaaQh2nNiEhmqGWpjKF1afihg",
  "key37": "4csrWDZiSV31oLCtLr61UWHqvRgKi7eLzbPohk6xeZA9KkkbVXReXHVUvxbPxNtbotodu1CXsz4tpHKtKg6GFmEK",
  "key38": "5mgQpsD5PG4JbWFEJcqErZRt9SyZzdp5ETMsX4Y4BVnv8BiRaDBJXiXYodQfGZSRQJt1bwMP8D2GtH7hcqnaoDE",
  "key39": "2588z9A1wAPXf2ppf4QFSp6dsn7wuuxnsewQNxXEQymvqFYLpPMu2gDMQAUbnRBvo5argNucuodf8qZj8bzq5HcN",
  "key40": "24DEsPECPKvcBueLBJRRS3VLuhgcd1ZsakEqDWwrPhmiSkdzPZdXpikSCDbbWfR21yV1dgLHNwCzgYKXb7NhdfHL",
  "key41": "5pXiktXe5rCcZ8uxofpoUDLKYML7d6wtUjnEGg6YXtDL143JyFSTAL8CB6pnEz89TTzAGFNwWJZHSqjJvFGUq4AT",
  "key42": "3t1B5om3Gqcjg8sMEFFPUjBjNvgBnkvw72fjsAUjurexzHvhTnnUuWbjPyYNNpbiD8BZALy47hSbC4Un2NxcndXL",
  "key43": "4cpdp3QrqKPnUd43GZuTAnWiS64xC3VY6a5Wrai1DhRNq4TWu5Pu57Wq9TLiLiS8Zten3PAy9BAnGdB85YqtewH",
  "key44": "3X9tqZBJUEGHTGxCQZgeUBVXCE4YC3xmVohCW1SQ37VqQcShQkMPwCD9HBbqfecYcQQUDuRbZLr7BfCiJ7ShSk5e",
  "key45": "5hUFicUARoMLNJ51H5nr4bZJsUqnTZzRjXDSgaTh5EgUCb24LtEVpfewAiEGJorFjgjb3ps1Nz8Pdkf4k1wDpW48"
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
