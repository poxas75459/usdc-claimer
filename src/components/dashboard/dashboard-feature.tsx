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
    "5txcsT2U8HzM75vQdzXHVB2DdtLiPrHPWnQdMXuS3PCNaYz9mZyHD6onNoQVxxazTtjhKoTW82W4NLBLRiyEALVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cAd8ycwFQG8mkkpNZBYPTGSARxQNNzWjNaXQBHzPccUyfTzMACftjFAHyywoawQKHVSLF8yxdQoVQc8Tsyp79WP",
  "key1": "KRFh4FFdWnQN5bj7kPZKyxVzRRxehxqpNLgmWBZJEsyo3o829vAyp195d6HxYwBv5o7vJtytLxiyniDEaUMh5PS",
  "key2": "xrdoJNjnWqo1pG13cSLmwC8bfsoxE8hVApVKfrcQrSum24F3MgEJ8vfdTUt869SmGcGgxjvx24dV4nXZE5Uack3",
  "key3": "otL5WBx8hZwrobwvsKKhvrnAdBzVAMPsvQin5fPusFVY6fSHGxQR7ynxXng9oqjFU4mDAg21JDqbva4SEX4dn5W",
  "key4": "3cU2NDMsbmK6ogJjAKJMCFSvBzP1XGtaTRWBGrh57qDnwhnYRfko2vnRGqzXKwrGu92nUpg6hcf1Dy4DrZWJPNbv",
  "key5": "3kLXX8z12zaZmm1SaZjkYLxt7YiSuUjhZXeEFGBHX6w4nZh3iFsbg7ZoN75RD8KfjdrRWZeKhj7UvxqtsELrbCaW",
  "key6": "3KAttUnuMDmmhCPAeD68KmH1yyVtZhhxWMqJki46crNLcwzyESBN51W5t2igDZWGmfDnw8b24NxKXHkuycits1pH",
  "key7": "3v4LHqFpNn4eXmHA7NoHRcjPeMLkEgoszCoDX1aJmMJS8g5ugaXYDZXkVmz8Rr9i1bXiJExzz5ykek24gaiC66Es",
  "key8": "66Jq348mytu7WSF8hvsJU2P38Hxne4AAjPUmawCsNxmZ8qyUQFDLtJKwgzGoCiVCCj4JtMm7tffS28ASjELa9Bug",
  "key9": "4odDPjP3CsGaQqBpqR64NNxFAW7XbBweNMAsHVutbP3asquVjpGZNvVbHppekihY4XajN6xSH5YAWfg8oSoxAVvX",
  "key10": "5Yz3DERq3Amy5mzdgso3UkTDFATdftiA7M5e6HFBvnRv63WCWQBFVewZ4HahUv4EdTdpW5LotqpRXyZtHaK3zDSW",
  "key11": "4vpwjzat3KHsiUJ3Aswm1G3DPVdjPdmZDH47aBR1hd6KiWuBvevyiowr3Bh4GcqUtPBddaQveVJjxgpzR5tDWvRb",
  "key12": "wtGwCVcfp19WRLXdSjrE2eRcU9RGq5dnpxGFHCs373USWKt8WFyaukWjkKbH5Lwqpn1g3eRbRUREBeHCk2BBwfr",
  "key13": "5ToMe23mMZVDYfMrExpYqwWQ1fJwHehLNANJ2RnMLVCVtdeRs9F4GqrzWFuhBpA8aHFKdXtZwbKLjC4Pm4TsgS9H",
  "key14": "3Rmm4bpcfmr8gqoy4pXQTR7ajgf9ejN73khoqKobByUa3M7wiPbrjzPVDJgESCj6P7JZBy4cPTUjKUGMdee9eEwy",
  "key15": "4JcLXx8BZuhwGVQtKAfaC96kApETN1fdHNU1LdzFWEJMSdqrs5sGxKdyXRc9X68DCcKJNMXBvViLdBjSyZ5KqhFG",
  "key16": "2bbW68STQno1rFwJuafMS6wyaGcEcsSnJbNgqv5UkV8qerbkPT1UZdULivipmG4rSpX6X2hPhGhNprEvRLBk3D1A",
  "key17": "2DTGYZCYwr6n22MP2BRKms8ZPM4H9S1ey35M9ZGfHB8ZvExCirfZKArddaukCYvqJU4c1apSY8qThA9zWwtUf7xd",
  "key18": "3kxAqUiPMJtVeBYU1xQ96KkW2Q8eNMjncodBRYvAa5dQm84ehtV414yb4e3ZC6bU8xy6iAgWZVmPmEYBZwrLUnuE",
  "key19": "H6PVJaMU7itkP2AMkKuE3hALfZAzPByz91DZdtygqGcPsFexMMVGy82sy9dvJjk2EnJQqMbMzLnyM5pNXZzi2oS",
  "key20": "4XfCJkEt4zafWsbiUZhf1TC7pWEwypKNTbYKTfYwBeb47zDy1A4kGq9Y2xFGvYjqcasrbKJgjcfRgskiqgbCMSoS",
  "key21": "bYbbrccxof5Y2N6x36LkbA5jdRGdQcSwd1ckoFBFdNNHTtokb9LvoX5kPy1fg7gWKvR4fwYRCos5Knh8RJmom5M",
  "key22": "a3LMav6xyFCLvkqStjrKhjeFiWFcWwLYkEVP56LtVkWzwJnB2W29grF1S2KKL9TT95Ymvigboo8BfJLafGdiVoc",
  "key23": "61w79dt6u7TzK5uJmQfzVgjZAof1nKbqW1TVSLfeQbsE39RT14KAYs79uxE7NfhQP8ntjzmbmUUNH523W8aFfPVD",
  "key24": "5NuN4J6tCmth3mCGLfXfpcXMPNvkP8wmm2pJMYMZgkf8eHQqJqoZj2kyv3ESRvdSNisJpzKsmuKAwNb7jk4xAGha",
  "key25": "2KZuY9xzPxUzCUM6ZH3a7RfRUdNFXi7a7wc7jCmfUrtbRac3aCQsWv9UiRmQ6qUBuE377DvHYvuJAUQ8mDJjBSSP",
  "key26": "2DxEyGkhv7k9FYDnwaLUVd5s47vpV88nrCRsLoffZbyjAJF7ebxEtzPsJBwcJkgGgHTb4wwhUNG5S4ANbFWjjA8x",
  "key27": "3ZnWcBFb232AiARsW3iLQzEtefd87C5o6Wz4D3JJ5mAsabDAUqEZbR7pMqEKjNV6WUVaX7UPjZMjuVyZAXVFkRaj",
  "key28": "qk8rgxP6WtF9FH41rNyCbkxoi3uUqxeSk8znQeLbZe3BFSgZUCeBXrSt7888kGqu2GXczQtd12rjA5d1WmHznSh",
  "key29": "4wvSJfef9z8yTmQiuXLkPZd8nf9YLA9ZKkmQJLhMo45VdmEyeKKPDkJpZ4JPUCL6XrxiQC4dFp3ra4Tgws1kLo5k",
  "key30": "L7zPRTtq1Nf5FnDTxGdV9SowXL12WTZG9iAcjoQZYEafUZztnoPNSBXMLXZtKXdNCihSK6QbPRN58GCGH3L87jJ",
  "key31": "AiMSeigKPuoq3Vo7SeYdSgnGrncUxHAZLJZVQeajNNYLSahLwrQfucvpzbN8ybH2zNtnd36KXtHjzeKSxVhbjsz",
  "key32": "66s6Rq8d1GTquTsTTqzUjnPMCJcFaLNp8cF1Fb1LoKgGBxhGSxAzqXNu8a62ARkSUoMnUp5TZ4ExkCSLUU1MPseC",
  "key33": "3tfWFAMQmufkLhFVQVxVeJ5wVExKDKHhiJVo6D7WbA7LKHpaHfwpTxqhgXoktMEnXeNrwB9Gsvyr8bwYWVt4fYDZ",
  "key34": "3ApforxjWBASWKpgtvTA1DTvxp4q79oNzL5B8q9WFCzsHneNc7rAZAcFS1fWAGgfUysG9A8zHzBR1PqLg3eGk6z2",
  "key35": "5ZwSVcqoNU8h1m71NDWD3YqiXuBApqYLL2SwXsvuEAzhb45czsnMtzQYrVT7e1TRqK1PznRU6qJs7jCQLkS859x",
  "key36": "5AhDNL5QeTEJai6oNBh4Udc7pP9HHTZgfPPc3t5PMJdUenMB2DJDfYdmeUn3u9gJknMvRhLVyVhiqRWgdBjvDZ8r",
  "key37": "3Dh1fsnEQxMLPHAdwz1gHQpupSGcSnkYKX4juSmTWKKt2YxEyZFETgQyuQHyici35MAXvUnCH9vUJ2bHBC5kHuv1",
  "key38": "2HW5KWs6Pbg8qccXjXcsghwbqBbK4FVuTKTh7EDDC5vmNF86qaNjjq9ucVXHdbbde37enGBpGEke1yrm8r92yqvU",
  "key39": "32qt98o7ES826WRWRpR3PzcVz9JYnbaz5NMKzEk9cQhdxQnxxk2SEi5nCJhJCW2fFohmary38eqNg92HQm2YjVF6",
  "key40": "UziGY1qgNgZgCagZsD51s7jTpWm6BZjA9GmJN4UXUDS5n2kTnLV6wMAAj5ZTkP7yStrtQwgeoNrnN5Ph2Z3XpiW",
  "key41": "o7QXZdHYf6XSjXmbhkVjGuUVp414VeJTgbBxa9GUerupdLkHf1bEYFmpYee8Ba6LuxXLe25xtBio8P41JSFdTYi"
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
