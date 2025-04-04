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
    "5xx65qngsm7M49VMcwWq3e21rMQUyPosFZKoSBnR1mQXvk8fTLCFbaMRqxXBWuUL28gkWjY4LdZrwKLSTgw3qH7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dsp9bQk6DBQBZEuEN34E4T3pYpGHj59Cjax8e6yniiJQcE5DYqefbDFsmT3PV5fZ3P5qCjGL4LCiRB7xQJrGMRP",
  "key1": "3cFB1QUzsPxwX1UZrY4XPSPN7cqvCLkXAbyu1VMsbbQ9BNzNwb5mdifoxZykQfY86im3NKcauf61abk684bXH4Vy",
  "key2": "4PJwR8Xpb8tSAKywJZbNUgMpFrcz9qQHEw1xzhDc6t6ige38Z5KhPRnPvVThXWDR3CA8Poss4JyxSAoca6igHCuP",
  "key3": "5FNzCFUQDfECpmAaPgK9eP4K33xQxmqJF97k9EXuBL85HWK9PZcqNRF9X7ramP5u3Qb8mPADptTtnuvfEu8fN5tM",
  "key4": "ozLVTodvz8dhj5EyrupoTwEfmXwYVJ55ji2hfZH5eKSUreMeG4bGTnabEHoSLWcvgcWVYZFND22j3uzQNzkUNHh",
  "key5": "2cMLQ3Ntn2mjjqATC6siP63j2sn6nbLhyhc74fCt5DMhLoT4ZgaXJNdnkaKucXoq87z238Rt3uar8TVgNvg9VZYA",
  "key6": "2NqJty896pxbpANujj6eHsN7X1PmPuxMWhBpmeKAS9BmMJoPaU4y3vJkdSGvgmBXiJAqwPiLiUoug1yUcJ4KweTb",
  "key7": "5Ud8cg8E6kNHBTdctgfdicYonSAM8hTdbAY76meJgmbdHcH4EbRDCQEd3nz3ktJWQSZcx2d9VWEZ4ZkqztDJ2eN",
  "key8": "2hq8am7ZNfZRsWeoEx4Vm5QzU8PGtjtqkzvYHRRzQygN9zT2cPH2Emx9EAfKhFp9dPRt7Cbnpn1PCCLut9C1HEHS",
  "key9": "4ejn4XcWb9KjwbmKJgPxNF1Wjru5vcpodnLQfGS9zLa8ifrfkWW3YAm9iWgzPeAw4E1Z4K5nggo1mg51ixZw4bJa",
  "key10": "4U9pihYNTg6F8dmwhNFAddGGN5FBHAZXvYkLQBhWayLQUhJej8BTAB59ezzyuvKVCj2taXkVyNcPmoawYPx6DHU5",
  "key11": "mwx5h9QahzSDLQyonqxNnrehRDNGQuoLLT1zLTEuq1izaBhYRWh3tKtHhHC5dknL8aTK6Ka5N75eyRiHaKJEBYU",
  "key12": "2Qava8NEa7Y7VnCWfb7r3JMWC4desUDVGNC976j6pmj1CXLZp89UGSqtjbSEH2mu9xqbXLgdBySafJNEYQk1HT1M",
  "key13": "iV2jbhLZALUK34Dx3wCTDZRyoEgEXuBtVoCWWBV5jDWSTJSBrZx1R6ruWixpw7aun4UvCp9d8j31ZUt3CdPWay2",
  "key14": "2MHBaEQHSRsBzb9Gzg6B2udMYiLoE5SLg8o41WRVTuqnVcs45pHYUgjZk7ti6ivbJ1pboGtcDrChh957p3gNtuzs",
  "key15": "4U9ZNxt2cxx8U7ZgBrPvWe3dwC5hh3NLKi41mpxSzMSqSHbeB1VDMo7ZsoJARMrv4J2D9aDMfo4kHXpRvMhKr5xQ",
  "key16": "3yeVM2n2AhbcLeGLsSNYhTVtBVgSs8xJoDJHuBNojJYgBURnEGBNiLa4wjtFChcAWWwLEfNgoBMRcEZjduJ82Xzm",
  "key17": "2xXSXsXccaUF5G13KtAY4eg3AEcgvG5i4fywXr8BYzCA2C7f33p2cYf6WEBwciFVjYKmgiZy6fkbKvEj8UcGe8F6",
  "key18": "3bfbDz7JFbbFbRmBeQALzSHQDmWQzjnRvh34ngJqvZeviuemSBSZeABRwZ98EW9mSXrTx986MAFPLeNPzTjfArdr",
  "key19": "42WE97r5yGp3FLjVBf5AXiPZDdZ7Gh23uEgh8P57sPop9NPb2Qj2owjrvn2tJY1YeB6a2xpWWU9htEMzLg61RHnD",
  "key20": "5y2uTNhiMX7dn2za2sHco6pCeoU3m4PaBcqPCae3Zwo5DuKNKfVZ6o38r8eEP9jz2YED7Svjunyp4jvFKDHd7k1T",
  "key21": "dKBzJe1Yrxd2XqgwB6H2SaZ8RvbZNcHJWjo63ndQf9bKZ2NdhTMj8588DYZfPfJwKk7jgmWLKeJ5pK7iqzmUwyF",
  "key22": "4THSkjgTZrEd8HQGMp1d8EZJ3Lf3gEjmTrsEcdMHhcoYqvmFJLgf8wAVKgLR6kKF4MMBzHKixdJ48UqmgBm9sF77",
  "key23": "51cwRuVaWriBtc9M1Qsnshky6HkRNohYbncRk5xskEgQCUnVSnXwF5sDbtqG9eQ7FQ6P17Ap1ZU8YN89gTGQdTCR",
  "key24": "4B4gscmq1CdACfpgsLwvAzgLa7GnXoRCV5FpGfd5QTCRYPH666gyGE1pAxFQiLeLNp7iGWH8bNzo8Pc6SdMPNcww",
  "key25": "4N5ifguDxkZQRKDNL5S5d7u98z4FbPcL9BS7E9niN4yRKrJcRdRc1DopsLZNitxdkixbigiMysRRYyLXMpGiZFts",
  "key26": "ADs5cFfZB6hZ7Ltnii9JQJ9a7nPqHP37CjnhJaLByoA6kgRJ4qZzDuwptNkriEYMHaT3x2Rtbf1L4XuUyYnV1pJ",
  "key27": "M4AYjm95AfHLqQRCqpZUx2m5bmY7EE3Kt1nnBUBKn3qYdiLvcTUjg16sdtjECTs3AdUmArVxkxLCwqiqqLgxAHR",
  "key28": "3LR6xJADZo3wxyeYFUDXw53DnH292DPpV2yVf2yXSEtoe4DfvpMbfMPAu18iUX3woVFKFfCM2FHdmNMA6gjzNzgH",
  "key29": "3dtu1zbXcgnC7zMuqcpeQJFVm5tbNJJv8o55vDbfc9mL9sjR4rMvb43xdtnVyLMWmQnUBg7EV3YjuE91N4kCDtWD",
  "key30": "52UtSUPriKWQeEq3YMCWK27nX6vDtyGmerD7o7TaqBUxCCQtXG4tFyQhokLgpYceRtGzNrXchgEDXQHnxnVCzjNy",
  "key31": "3Ef69HxUmpWS7H48yiYTuDz2m2EphzNVa4R9GvZbjWt7NBoYH9HKWA5e9SPzAYxhGxurPLMpMqipKX5SRGCYvywq",
  "key32": "2giKLy8aYU53b3EpTmUaWPZkkFbYVMBjxEdUJgZJJg4wbr9wgiVpend58bopratGddAskBuE9WQjhbPBjvEdN8fv",
  "key33": "638sCUh7M55ZWk5etNMEKHyNduk8qEr5gZrzqL5zFcTc5oUpEAp4kxAf25BqMCnaGvMfu8mVAY9bZ4DnqoKDM1TF",
  "key34": "Gefd4HxhVNWCikZcrAttNLPrpambZYZ2hQywy4Nz3KWwkFJgXDAE5VZAfwtf6S8eUdfp4j6e9eTnb1XcVCwbmnc",
  "key35": "3jqvCCJF99pPyA7cNiVeJJssDrurXwESvB3Ko3yvig7ZZB6sUWV5WqrYjE9ayRFnkjVprB2S5xJKuzVCqdFvpCsm",
  "key36": "36hvA991EhU4xA9u9X2wukMoLXxppwJutC1B6ZZhXWCHeQQ6wA5UjGNTvWSEJJr9DAGcM7TN3556TkWsAxMQR3CT",
  "key37": "2iaQnQ2rDAq8222sL3KdUFk9FsqagCgx8JLKVoLgHAvUJxbwkHvbi7nYSXJBACjaafBPrc8dLpEQeuvdhDfPeGUS",
  "key38": "4En8u5gBKB9gPbBT4xtVGj2fyh8KxbZHuNic6UXjgf2cGCYsc4A6F6U229b2eFvomA145zmyw8D8FNM5NX4XUSrY",
  "key39": "5vDvvGccjek81fJuXbmkeCDK4rSsoJKcAVXX3UHQg3oziSQWneurT29Z1ozSdxc7AJfvPHX5BQi4ApG3xrgkqkLm",
  "key40": "3TRWUrbcRATuwRxHFwtwNxpfrtLcZFE7LLKKaZ5gsJjgMusmiMMPbSzafoYyBH4TtZ8okPB6DKPeEcojWkVDeZUZ",
  "key41": "zz6ssKoCRKZ98CHV5LnNKa6rq9SnAgk5JRazoAsZsMwTP8bUsuCxEjvrzHcXCS6pNncyzAYtUX4szrifsUkKxPp"
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
