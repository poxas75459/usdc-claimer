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
    "5PnkPsv5xRYy5GvhYVJcSZNbHXwEhqLontk4fZYR3jxSAe4X8b6q7fTRZFJ8ckuirygHFsp8Py2vA4wT1NySdWQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XBwoEDj9zhj9cekEdKEsU6qrEAS2qu6kGu2ZULA4vuw3SwZyeNjDfCjLj37cVTWah3zhFk24UeZ58nKFSd22wBQ",
  "key1": "2QcASw9AKEvKU9PzHgGG679HD7NPUbLHbDLXP1T3LUcRohqdsWstqhW3f6cPDGaPrUDaiQF5HjL6mEToTd1iGuSG",
  "key2": "63T6oqZrMdKVECYjKh7NgaE8ZSLvqP4NCnMPNxnqrv3KDeiDK9SCNpoTLXUvaG4u9JaDo6D9cneXJvtgms5Jrgid",
  "key3": "1LLeFpt5i1ybKms6nDADXPB1cNBNsmYT7gCMcGzetvPtYi6KY1GeApf6H1AbfY8jaxKfs7HWEhGthFQm326EuEz",
  "key4": "3dpvfCNRjzS49NG3tKr27R8ZgXZu74gd3W1gbU8MZ5FiyCsoTHEmCfdnMXaFwc1eEQTKNUZkz51yrTFZUonPEve",
  "key5": "5NDwWXaH2TxLy1n5UKnEHXwfAmXwBi6Z7CR291wM3e8FdJ5PjUThnnRPgBBg4qvZ5zMPJqCv858jpcPyua3jTgiP",
  "key6": "5SF7bZQ54nNa4uJpntBobUNcd13BphbNubBQpYpajz9ysBPiQ9y3HwZkmq3zz6yWjvfDVaNi9bLdNRsLxHXpcDWS",
  "key7": "2s2UDnSA5ZXAmvs8S9Pxs9pGGCreCaYPahqgLVZ3b2bJxuyfyYVCJ9J2u3sKDg9GsS6QbPbbxwezJ6y9Dd2RAS7u",
  "key8": "KKRtHLEgh8GXcg8Tc6U9meKbc5nVBBNDN8s1gX8sGtTShy9rCKb33wGcAGFZmHjLzBQyp8hLoip7y8oWeJm2WpG",
  "key9": "3nzCXqgHheEbP7QSgQAcF7bmzbdikZ2XnyCBZrhGw75DZFp7apH5YpuMxvoxQ7Qs9bZfiNUNZ3bMBzDc3B8b1R6n",
  "key10": "5fB4wrHxz8nzPZVrNjY66SbpDAYtEwaTqNVERrzbfiXvRvA75bNvAa1oqKgoMfbPcoiJnxHwwZDY8nHnGed1fWYq",
  "key11": "3XYnqpbJMNT9VjFFajsZEApjty2KnuuTZAkTuNp12TuReP5VPtZDQoqvgQJGmNi2tunUHF5NKA4GWojJz3U4on3E",
  "key12": "CR6RXpLKhrMoNKAxHCr5xNbzX49NzYAUz3Bwtjhxt5vstmMHHcKaJqDApkkRHJgdPAh7e5Bsnaed8Wevoha5SBi",
  "key13": "2nFpE6FechAn5yyGEzJBykdjD9VQzFxbJiTV8QGD6ynwQ5dxRCAqWefQeRbGtXwf2EupAXL6kGsVDAYobe8e3hbV",
  "key14": "m4QsdCFUH8QCP5G7rssU7ZQv2yrTWy8VE6jLz6PCZav9VJrX4sJRDybpd6Y9Mi8nDXEmEoVCaBy8biu1VYE9wuC",
  "key15": "43sDa5zRsjKs2vsPFzPwPWiq2ksTNyqqipibmL24P321L4VfntUREGy744Xrm1pjt2uzxh9GFfrgTdgJBCWyCQ6F",
  "key16": "xf3jcZUFb3AWSnvuoPZHU8e9q9mofgZkjmsB1m666BVaxq3A5yUp5xLGHasXGQYkcuwUshqVdrtYd2pkXb2hgwz",
  "key17": "3eCLY6eqmFxfAstva9db8ckgFS3Zbb4enaR4DmQX9iiQFPhmFZDsdjFX7vKV5reZ72Dq34v61m6rq2jbGKi3DMR2",
  "key18": "EUbPg8j8SpuzamrqD8r3UFz2XVHYztYVMzAqBoSwsZoRmujDLAiMEBnhFpCDL1hMhNDvfgbDTpRXDh8uCaGP8j1",
  "key19": "4EkKxdhEWhUeota86hAFECH5yEu6c1PXt6sDH4jDSWJ3HJwz51P6hPXdLzZyvWPc9asmUg4B9TbXgG5uu2TAcDv3",
  "key20": "3GiVCV6bNVjQdiCTdp6RpFxUrj83BMQeQhMMnutqcPbgmMVi78VWEie45Y8YFwfi8rExhf6d44ynUJvwt69NETWS",
  "key21": "4wWJMFzW8mggF1x3i8uKSu3oiQyC1e6CEXedxXZke1wP7Tku1jSYMCA2A31HWYZdA4ie6EyqUneiqA7Z2FarW3T9",
  "key22": "2axNayUAeSUtT5eVBQpF75LyujUvkWWGSZd9L7EU5mzTFkfu53CFp9WUoy2LjTXwKCREzsY7uhoSetYDwXDG4BU7",
  "key23": "SZHu4gGfmAhxtNVbr8S6TNig7dmPe3jNSKsf3i6JNqfJjhNz8PFPEZ8gsAJSsQUVboMsLm3ZxnZhjUu6kcJbVWc",
  "key24": "2dcrWEKzBHyGkbN5b7d9zdNEWvjWcx6MajQ7DdAVGqw6CMNZ58u4eDsyhaHnD6GfcSP6GscZ6ShksCkmdEENuyRn",
  "key25": "5D1vP6BtKqDvGe6nF6N9naXHh4SgPhRJsez6zZk7hrdYAaUhCeQA4cXpxGzZzu24xcoFXTBTXQuSLx6pMKATRy1C",
  "key26": "3n81YD2RRLR4virdq7ckahGNM3wzRiyBFxdT3iB5dKTcx6vvcR8N4WPY12jjcTF9dJu2bo2o88MZ7rxgPE4JjDWr",
  "key27": "499PoAiLe5J7KBjwHYavXWiQZ5Sx8RFCDnAXsBHqoUm3i7SESGNaqnqYqTZJ8TvoXS73PJMUxmjqaS14JqXY9Qea",
  "key28": "2k7T9KV89zLZ9yWZp3E9kneAf111zWvRLhUN6Ayy2C9XGxCLr7DnrXmufN4gcr3ZmfLtBE6EmyZrMaAn7wEbHkWn",
  "key29": "4ERiB3gd3UC6ZaTuL642ty59Ync6VEEcgjGNLV6AMBQBrkuYcb87hUJ2TkxtWc8aqWXJmwaHVQM7BtkF9gupB84m",
  "key30": "5bDFFykVH6dCG2JWEnS9Sm7h4xg8L7qS29ciSXB22yfZNppUCzRjn3YYeQ7UXMHmoufAjgMjaxatf7jXhzo9fUSF",
  "key31": "CxMDnyRR5HKt6WVNjTLgovguvrQB3yRBYL83pK9ky9cqAbxHzKgBPsqtjFxgSaRB7PYN9DTqWRZFs5orJsut6i6",
  "key32": "5VuVg8xFEuxogNgiZAJA7HnEVNvjegRSA3Ri1KV6coQNMTHLZg3hV3t1uqyQYByRCBWs8KChGgk6e1CUQ9z8SruL",
  "key33": "GVfKSzWyTaxRqWCz9vEh4eQRgHrRXvHhnDXww1zoVHjhGotfJ9mSDAbptSyfrpd1L8rcp4zbf3js6VnR9Uo5Fzi",
  "key34": "7P5Qw33zk1D9M9iWrh6UKzQFLjcs9NJW4xEzVghzkQUmpbwKocoGETe1QvrfEc3r8KJTfAH1bjEQwsFg7L3mrQj",
  "key35": "3kmZGcNx9uCULHQBwVB1c2v4uVQExPgEqP2kDTMPXyZbu3Fopu5VhCJvsKoQYLE1xRYiQEPVT7b3Jz9MoAcDZKki",
  "key36": "4Gf2iFnwKTuqR1AwqDeJJcSUjsbWtD3dVmcoUS6MsVF9tP5RqaxCMNk9kokWk5qCH9tPSbeyei5WAqXK9pPJvTCC",
  "key37": "5arBimZiRtB3QcehNEJ1aQ5BTnrtNubMvC6P1S8UpHnXrorPsakcxTCT6pqnD5LqvnMS7KANdbSgirqYyGZkUZcr",
  "key38": "2Rmt5vx8iiJatVgBQ6rm4RrNMJD4G9kkEKa1uZbmEpRWB2pzQgqbYHafjU2ypUSGSbyLb3kaku9SqnA9Pu6RorYL",
  "key39": "2iah4aK7zVK46DZP3Qmr4GyVipnxvUdDdpYJhZVWaxgTA2HAja5yxYrTqUNm4etVuFfDD7yLKKi2L136nXDmtysW",
  "key40": "3f2ww9Lguh4U9WZc9tfJhtQwDpDueXcovDKjAT9Rz51Rhz4GA1TLG7YYNQzUUdsGbmN6WeoiukR1BgyMciCyuPZs",
  "key41": "ZkFRHbkykE5Cz4BSJALRGkfeEk3JgCLRVUGGjUYhhAu8AtV136RsRKmuHCBXghyE5g6PGGKDXexFQPsi4Wfqb8q",
  "key42": "58Kzz54UosBe1H25pWkmwhenX3s3fj6K3dUfKjhcfs6g1xx4zXFi9bthwFrChTrnjrgLH8TD8ZPFjDMijXtNQA1f",
  "key43": "4F8TF2anCBZiz5w7fVyZB4NeuyvGAX8VG2fD4HrJwFGqEgnANCSUYYkHMAVtqHiwxKV9nk7kqX8NMmAdw9ifzVG4"
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
