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
    "2xyFoNbWqtFTqu7BjfHgg51F8YC832gk1Wr8oV9DnzqeYwVxhC6nhKJYKWGqaczfhk4ELrxwZZLyFFKd6ev8Y8oT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vy63PAktDbMkqtTxCinVXZPsBFYnWBud1ftmjRMHGNvMzPhSQhXBpTyRcwTJSsrZGkUVyYaEWcYUbaDbDnvZSc6",
  "key1": "53yvMqts5sr5VozygAxEt1bc3zwVCCsRNs8H9p7N2ioLv3MnpQNeunDQdudrE6KaEgd9TTw28m7CzZqfiRQrF22k",
  "key2": "5htmtZY7YuBSB9eWxrJa8FNVtLzaKsg9epVxa7gLH4VJAsoF3v43faQsWUWJhrUKMqTLpq9ZUx5wjo9qWxWfAh31",
  "key3": "3Qv3KrKotrw6zDyJbxJ3Pf1HvsPfLKe9kThz4KT9M97mkQtQGfJWJ9HPn8GXQxvTycEjWC3PVmAi7AgNcHDfUL63",
  "key4": "5f64fpNF9PGzvVFTgkRe2jXD4kNpCFPr6GKiFahHKF2UcoTechrxXQZ3N4yovV68WSAZUaLvGnnM8SKFZ8txqnxA",
  "key5": "PKfCciqAybpZ1TkLe6jgZSkyduURa34VT9rdCqhF5uGGuy24dwJqX88TMVY7BXzb2F4z2SCSgnmZC5aDPCDgunh",
  "key6": "2nbTU1f3EW2bLeAbZmzMhqFiPqcMzwqMfXAYwZSBoacGAnsPsZkYRQgTkmoRKd1GewJnbfjUA1nJe9NAQxoWjcZt",
  "key7": "3EZMCk3ftzf3z6y9XNw2SvSZ6Xfws7c8pZQBsXAnSYbFJNbNdAXtM9LsVf4MdUu4go8UCySxeTBxgeRENn4SSik9",
  "key8": "36GndtssVtwvinsiqAr7nMg9vXHMkhY1RXNtrXN2GLPmF5pnwUTUt2ryyhwPuUBCBMedeEHWxzqoWq4mf8CqXDNT",
  "key9": "ju6Gt81JAhscYqXdKG5jyY7mEdRTP1ur9hXKTtqnswA8TcEbdoLFtUQQnemeB1NmcENZhFJUtjZWvzYitRFsFfJ",
  "key10": "2eGyUA37QGAwRZmdLzdgdUheYD9ceVVYEVHgwcyae9fuuq87XPhLYsP3qvJo3NpryZ5R7Z7ADxjfp6frX5R864ZV",
  "key11": "v7RS6MagMVuLcRydZGt6n14j45hLvnLdwnuz72VK8i7Vd12VGVmzoxRHv3BxFUZNZQAEecEjyxFenaRjsSKcF3n",
  "key12": "28iKb498AoLms92Nc93KbSfVqwvxNxq9JrVbZBNvVymqeudgyaRjraKiLAh2Zyzv9HztUVVWzhJJ2rpwg1nspbGw",
  "key13": "4dwBvMt3nLxXFwCGiCW12MNrgsx4aqFz8F4ZtJ6miqfMbAN9KeRsmG7X6LquE5DtVUoLipCfMz6ybB4sDifiGqwg",
  "key14": "54FPg8sBmKgM42YhrMaZXXtLsTRwasog3Q2R9L7QzUUYQ19yre4bwQ1LidoNQjiwmgC1AaHA5pCFTpb1PEpNp635",
  "key15": "3d7CuCo9kEwn77eLNB5685eWoTAeAqYJAVhwssYJ8KkQUvVwXtGRxWv223iP6Er2zECFUC2FocTHJpHn4YhS2v5d",
  "key16": "2yThZKzvoN5Pe8Vaj5KnhE3da8D8cx1sJnRYJFLfvAJmByLkfKqdnCjcG9tL5pAPVa2n81JECdNvV9yhAmXSNLsC",
  "key17": "4zoB8tZJwGY3ZFrtoggUUBNXyWbRsZKNADXaRSpHSpDm4WZtD9zYSeJzkbWPBtLBBTzMsT89cGzDfGMHWct5PQEd",
  "key18": "3ooDGUhzpjT4hydxhGTwuw2QNSyBJu1mD8z15W3HQ2JGTeVadGty2EjnHQV5JUqpifnRRocbAeyZXRxRYRnSjn5X",
  "key19": "37AV7iq6CczqpmGj4pLS1QLmgQTemFVnjCTRGkoeuQzBBFKhnpzeyoDPnSexKi7BL9ofmnVJr228QLAodw3JHpq4",
  "key20": "5GHcEFPyodZBPu2KvYAe6Uieg2H6XS8DmgysRqPRAPTDjbwsjWx3yD5ns4qMz1HgwvMNfvvWSv1vQeP2KxNBuc2M",
  "key21": "3XpWWXDYMZWjrxJukaN4asvjkTkG4R8CnBcE7P7YVHahmSyW91BFKXJSCN2HE2h3BEScLBUjcm16mTCyVdeeDJE3",
  "key22": "4AQxTfiX6foZeNLfShUtcZGY47YxJD6qA5gzo3YUfHT45ChWHaQHtWEzS9YbVE48LD3NnspSss4DwBCpVA25toDo",
  "key23": "3RhFu5LHiuZzuZoBk8TMNHq4iKodGGrf6He3fZu96237uSWi74RPpkx8bqZxJfWGCLHXA6M6GJi7AofrLnzFie86",
  "key24": "2z6A2fYEvz1aqfXnvjfenFWQg2gE9TADrcjKesvJxf2pw6rqFnQqZN8RRyUVvSuhXJnYq1TVuCRqWkSHJ6N2n869",
  "key25": "2LRrptrbzzEyya53nKxVUKPRKM4xBVpJ5RYT71jjkswyHtmbeVMZBZH919R7X3ikTLBQDjrH2cerZaALSvGNxWRZ",
  "key26": "61mETcCc61DgaXAeTqwidoXN1RuTVfMW9Lu3zWCocukWMwWiDAgXdwHuTUoyEgPwKSbfSy8rhxsmGzFyut5ExQrk",
  "key27": "28XtizYDab2SeTv4Tgsv1q2b9dGmT4oZBjQTx4AoR25ad8ASNKw49eSfFUNxnFRtc6HTaMryNBGceXcokQvfbzmC",
  "key28": "3YEs5fKBEnKBSnv1eDmryfgdbJpk6tgSPBz7Ym3hPfBYkrWfbCDhDqLNKQjPiWyqHyBArw4sGzvyZYCoTzxfEhXe",
  "key29": "5qJexgkUV1RnyL2ZKMC1LveQyHT27ZDmQvWCmsL5wyPSaB1o3y6RzdGE2Z9wxRxEcsdPS6scc7MvSDWeAqwj4XZG",
  "key30": "3BFi8HFrTP3sreRDcsyCUgsh5VRpJhmSt2DA61Y7crpndJDryAAjbBpQwKbe71Fi1nE5JNF28t5zGAJvdu8RMawN",
  "key31": "oaEPyfGBVVf9JFQ4s5wbG1LcNUD5igMPLtDJConNfX9NqoTCyQjxcdph9YW1ieutZkcvrNANWA4arYqdyvLPEnG",
  "key32": "QcwXjL1jk7grEmoYjWHgke1VA1adKbXwG5xXhFdsYjYfVe8bYjfebxZdpR7goVwNt82Rs8gaMDbxv1AAXCkJ1M4",
  "key33": "2NFG7tTHZMF3A5q7DeuvPP32hxHXXfnmymCCWEi4BnSkftEVp3JomYo2zYjbqUiD1mDzr3Fhk18FgF19QAzF8Fzx",
  "key34": "2HWaFwyURQ99AraVfRf96ytqK8S4DakSTfzvQBhnPX5Scp7ThkFfQbsL6hEgdrV8sFy68QW6kc4uRcbxdxfwvaJM"
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
