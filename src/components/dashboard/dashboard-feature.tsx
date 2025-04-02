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
    "34uJkPi8PqcYVTHMHJnFapMegtSxq5FmJFFh8wxotmamYKKDCzes5srMz7raUjKemkBa9DzM2QZSCkU6oJYaRQfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4txpFsiis4WibwormEfcZVhefSiM96oBNwAWqbHDXMvAiJB8ghj2MUmeMXMEHZScLEf3FjcuTjpQ7zmmV5bgXsyh",
  "key1": "4nSYMP5ex24uHJqARTJ2kkxqJQYJmBvZNTtFSSW3JviLFJdgwbkffs4imob8HVHsCWjNUrzuGpk3KNGJD6SeiMEi",
  "key2": "2WD2T1oXyBEv2WFnMFHDL8P6W16oqgc7LgYgXPJguaGHvd19JRmwFqGY712pjb299pZ3tkoJWtWMLRK24dLXHzXU",
  "key3": "vRq34WmJpKoBrK7WKf4iey5a6uxmcH6sJ6wYXH1CpXnsC2dev5dEvqA9yr9dizWsxCo3AoJjUyLFNHBtBS2NfeU",
  "key4": "5kGRDASpsNddaGVpf2nCJRhRmV8QyMhdG8t4TLqYS6H5Yn8cGzbXXBpYLiuBQi1pZNt3WKzYqb8fp1dUrFbuSeq7",
  "key5": "27n6zrdHFxtxeJCE98SWBGtAgrC4aTg7Nsu1BzKyEA5PZt8dgaDCPdD8vmvWC7uKGJu3R1JfGTQ3cwGipXWA71S4",
  "key6": "332Wuj63KyvwtSHWgeUfzv4xGzHeRKytAptQnYnuG19gG7ih7UA4Ug3PcyfdXckR3evSDQyASRJyRzfDNgQGsqDz",
  "key7": "4rkDK8LuNcPTmR5oeT2nDapVXZ19G7hD6f58nMC1kfdy1F4BXidNVnELLS4GRpTZYiWpkFE8RF8LSZbYhM8RkQGP",
  "key8": "62SjcCGg5DkYh2ra8pDX9mvDhJ5jc7XX5USWyWat6Pz4crKdvUGG4JKXGPvseRFUGohdHXyDtpyMNXn2wA42XBE",
  "key9": "3UobicBrLs4CY63YEgH3Z9UAe4YvYA2SVj7eANjQf2M6a2CE74SPNzrdge7S9xRXYFgN1K7US8P6sEkrqunJinNd",
  "key10": "24FqdsWgdPoT3cv35uSauGDwNeScdEybUpQ648H6H3QVGWoaXaC2rGZyW7FDeQo9bGosZCJZ2ZTKAbzZVDfauQv3",
  "key11": "Dson3wZ8RqMkrnfQ6M7u28xjKxpctjZZvHYRE31ZzKbGoieSr4n2vFhsmD2Y64Zp1oWeFHQXxmGAp2D2ETdWusL",
  "key12": "fvYYZ91Y1rNEofrqB9RRnAuprmDAo6wAGU3LWRfmUBQ7HAW3XJNXcusEB5UQud5HbHaYxkYpi5ZuAm7adn6s8YN",
  "key13": "4YyhWbzogurxTSzuiMDMWxpG6HJRUouNuxJGjNNu5Sb7kjeh1sGAMxD22PxUuFUuzAvq3eS7UjMQhVfN4S8yNKx3",
  "key14": "4Jors8RgK4qHhNHtfYBqRvftvRm9aW5t7HVE7Bv6kCtHS6QdYXFv7qN4NMk9R5ToAJytKKVJxrNGBVZBMZbueD9L",
  "key15": "4hCwRR77PrECYxkaPxL5mD9j2aAU1QvpHNQjpWxeFMxzGBwfsMZYwLpKTHKHwDmuHUArKtudPix96EZbP7aEqhbV",
  "key16": "fjtexdR9yG3xk2sM47hbc8k74DXL6pydaqAa9xzFdCBBU4QrW1VNeyfrSPm1JXboH7VH1FLs2nCRp6e3ULHuRds",
  "key17": "3z5fHo6wpJPDpS44MEA8fJnSifZ74VeLBQy529RrovoMFi4Y36SP1Pa7orCAhKFocruRQt33Qsn4WATQ2TUCgtnY",
  "key18": "2Wsqx9GuRiKPtAGwpxTqmsisSwvS249ysjBdYfTi6J97DG2WFotruHoq9uYm5HUZss78he1pgfMrVJPR3A7k2jJJ",
  "key19": "4bTJ1aEWSjM7FFaoLPC5bufRaPDeRWtKbBD3z9WAzYoPTbkn8KUwpJbXqigiQKct8h4G3s3KdwYddVDeKJaveAuu",
  "key20": "R5iDFeTdDtF9UbLYGi2FyJ9U8APNqqCccz1NUghUZmzWMBtzhzTpXQs5YSoar6oxUgtLZgarQjE18tanedPR446",
  "key21": "3F3hbgujGUetc9z7oFH9PyPZfaiq68RHzfSVp7khHZZQHaHWNsP4Hu2bdM5xTvqSiU4WNiWnMftUup1e8qW3MrRV",
  "key22": "4wdRy6fF5MzRpiP2sZ9Jqh1Js7BRPH43cUxnudZw4Hhnh2ji3dLNcUs8SUS4gq43GhV4z6nn8zgdjQEKkpkQGo5E",
  "key23": "2GekRC8aoHC6J9qXRZKxe6cfqWATdCDyfM6CBEwttRrf6e8pYseBRbMaKajarXbYBK1U8vcgNdWHsvqehKh4iNwv",
  "key24": "3BoqBjjSQvUvpGpyqW7wksn9dhEuhPLWFu8dsYF9nx4pj3zMBXN9nQ9Bcu5yofSJ4evBkoJrczLBQd3fKPTPRLdz",
  "key25": "4juYDsmQkf2SYZ2pjtthETfSGAEQP2pp3QAgVi6WGUeuawxpHiRQDWqgaohLFdEtdh1hmrNUx7Hw4kwZ2jeMVvaf",
  "key26": "3JiVtZqcsH3VB1r9zrhfEMTSvsRNyarXsZNQvVeKcCd2sDsiiZDpg1gHs2pk8yEpeHGidHXAx8sb5AJjyJkG4JDu",
  "key27": "41u1JxA7CRhUGSbACUHZFiEd4rAdfTUo4zDQ3QNYtxxXNNKmyRYGJ1fJKHY7f7JZcmmWYKPf9SkU3UVTYD6bX9UX",
  "key28": "5qNngJqKqsVUfoo9mc3sw6uJccTchzRw2A1hfK9jvm8MBAtqexATiTz6EajRuaSepcAXjAtPY58cJPt45E5jqfcT",
  "key29": "5uf7buTj6s1p3r9jBaxECNJY4DAUYYb5cwTJkHVgwPFjF6Gj5GBkTtuCyrPgkoVECF4tGk81D4HYyyn1EmCKQBUT",
  "key30": "2F6xVvwDLp89neeoeQZjyLAjMWxwdNEkGkMtUpjx8FdmQWr5kpri8VkcA5HaERmD4GyxxzgzpdHa2XveQWpmbzjf",
  "key31": "U7RDgne1Ms8FxXjSehT2cPJkKpvW7cVtuyuHhdz1vGmz8V3rzbhoex4jNJ4sKpbQzXCEp7SjbwJbFnPSmCrUHnh",
  "key32": "MXWiHLLUYRyqoWiAwR2tsEiiHTi9vpF67w5a5qP9XrvdVdKjzTBE9c19joh4vYdU9eKsVn4GEQWj37t2RRXgvNZ"
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
