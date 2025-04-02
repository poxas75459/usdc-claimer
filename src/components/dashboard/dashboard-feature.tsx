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
    "2Zeor9a6GoxQQAAnSZ766fRdQTEp6KvSjSNyNMyUKmVt6vPDJQUqRmbXU6qTBx4HonzE3FUiGtiLYkPDfjuNF5Ki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kK72iDTAgTwXAmTDp89tdrNAS4uSG8h8DoSh2kny7qfCEP6mFRf6FBEbEB4HSzRAABtUDoFaGFmpmBVSE5eVNom",
  "key1": "585Yr2QvQwmdurLVsBnRutjjt4C4qj8Zm2sHuWkNvrWCKcCpvN2fidEUEKmdieBiDuHYpMfQjsGeq2AAFg7CSz1i",
  "key2": "5ozAr6uTySN4rdfPnUUAmMwMdjrUe6PFNsJRhJXPKipswuUr5M3qkjKvNfMtJRi9A5f7wnnGb8e6qZSNUCRQ2fZQ",
  "key3": "5yiB4Ee2u6GMGm3VvYqR6hU3edcdipavqCkixSLwQ9SkbucLfWtsBSEHCFP7k59iLBfEPrQyY2rB5cMoMxX3h8A4",
  "key4": "4jkJkTdCw8TZFtnZ9M6P9k46gzi1qttgR7nVs4CsFCKZV8RxiGUQbjgaYVXNs3QxJhbc8T65Kv82s7PgXPnM324Y",
  "key5": "5qXUB8Teu6oiy88roeYq2p5wATcqa8AaWwqKkG1gK9CARGpERW2cZjszTp8pbBKFMifUGJU2Lxs42tkZDmXjUfAs",
  "key6": "57MPT5GkxxsPwJsbDYP8Fg7W2enBEBLgq9iJBA4Rsy7qkEAg9WRToSdzmmfBvJB4fpxaLCA3g1nMhbgFHhznAyci",
  "key7": "5SaXFYUpQBnf4SMJAoUssvUR1N6LuszZY1eq7aSq1BBHN7FDPKDAsm4HLzLoCsw9mnaoU7qK8Pm7yua8KZCUV33s",
  "key8": "3hRoZcdnV6Vc23wj7mP3L9NP6MSb4Dr8Fi16FWTgNP3B6iinaei62vAGkHVpHpf1H3JK8SX6HZQnFQ2vU2QZd17B",
  "key9": "4wzd6chu4va5cZDhiRePWJ2wNN5LYpHieRm9rKbYuiNZtuf5SEAUqxpiW3pfikEbdSaRHK7ch71boMSFwLffcPKY",
  "key10": "2zdFu1D9xiiqZDdqTcSDP1yoMigtNzy5YRg4ghjaAWCFr8M8WN22Za25F8dYbdzpiWcB1nRUVc7cMYq93DD7RneH",
  "key11": "2Pohj3aiGxhQcaUT27D5fKnU1BNQPkJgoDAutzPsJJPCcaRH4UNSefRShLB89qLt5FLV3MRUeqPRQwMuoxz6M6Ms",
  "key12": "2GzoXW1GZznWFaoKTvf21r21Uh8pWrmVe5C8BAQbBHAoRRGVhKDDT1oYnnseGb2FraaxzNdJiC7j46aFLA1bwcWn",
  "key13": "23JvJaxWuK9qdQCzbq1jsCU2BDTF84pcb2T76GR5wnPjYitiyrUHqGYcx92sL55aCfo7gNXpK1xphAwGKCStdoko",
  "key14": "2QR4A248hU3qgxiRLZJix4teamJkUqvvUyVb47CE3eNSDUJNhWvUB1Qh26zmXzW4rbCDsf1gTZ8fgMdV8nNYK2Rm",
  "key15": "4cDhT5TBQ8hJTZvBWwM4yjoFJfx1UTkChhW7nBUMTzbvjFA2YzY8ov5nppetV6QuvNQNEjQ8zVcdr4SBnKwLW9Uv",
  "key16": "4k5m8htJdLk5a9b6Both2ThDDQPDLSFF1z9qHFZzczNr2CG9M6tq5fbRoz2NsUgEKTCbpAvksijNsF2BeCa31gfX",
  "key17": "33Bou2iNtq5MR7egodubrZYuEeZnUv2YaqDp7NxfxyuFUtHhNgiEs5dEoHsJqs8BzxSfB9GYswCczUKVzTbqs5qh",
  "key18": "q4y1HJxgn5SmwiMAxfur1NVQ2UboiugtTfQbrd6Ej62Tcti8opBtvSDr8aw3GGdpnTszcYrhG1i13YEPKLAK2Xz",
  "key19": "3DLdT2vkaxdeWxt4RdLXLAJMHrEqAEFmdgp3EzsUetAGpoMEN346gvsobwURH4LHoj9iGj1AAzMAfVEvNJdAbQEN",
  "key20": "2J3gX73MAqxhdNvk6nHAzoNen5gKa2MgRzZP9221q5ZSd3UHr8NyYwa8amwY7Q8ZPMarTWsAvG7jrpdYVE3YPvm2",
  "key21": "2pDBgv8ojR9nDibwxMAzuQF3DVtgTWCksiBsTrJfs4Y9t6jWtUUUtcok2jt8EdifnpyuML6cghB8VJEnWqQv4L8S",
  "key22": "5CRryrPEgSiME1twyz6SDuLs49QfHxoABYg7Mu11PXHkBE5BasAEUCsxz9nSpfmyikAvLfNJhS7uWiQE3mfLwEFX",
  "key23": "4fXXG4B74dmjHKQJkaiG59tXXcT4oq1in4YKcxTL2hWHvKCnDbjUUHMwmbwCLvLjG5dixSapckuRSqjShfY1FAZ4",
  "key24": "xdUuhR1mTYmEhwQXMuihzEDgjjRGSMP9YAvUiMGATc63uSrsfCgg7mJ866wSi9rCCJrqJ765G7MY57yoAuPt9FN",
  "key25": "3PgbJBL5mATzRXoigxrB4jL2HAViicjvwvdJVAC4QMeyYvWATef2bx82P5PReHyMHH9bM9d2KxiYiUuzah2NEoLj",
  "key26": "4aWQqc1yD3ESSx5oJP1SkGcgcGYzZhrfuRh5J2YguHJcsX4Hj5Cu1wp7ugL2U5nLazXJNrLFcrJc4wmV6VYDB6sx",
  "key27": "3Upo94TwXJ5Rh8Atcu71GrfhFFELdpCcrYh3VHKzN5Qkx4YhhwKYi4uTp2HeUhjW3hU2fzpcf17YZCc6MMHD5eXR",
  "key28": "4UfvAyqV8YdSx5rD2kzFyd2EBES7ULKcU9viKoEjTfRg95tLTfdmenePWra3ekGHv16uHH4jgLcNzEWns2KF7ZHe",
  "key29": "3PrQ8McmeBUxp8xGzTpu1KFacHbi3RrfShEi4k9QFHbqD4dab8wYAZjLZo9nH6hZneGeWF3Tb86gHadF2pok8QHJ",
  "key30": "41KKDgZjewLBcwEeeKTzH3fiJCuvTTB8Je19VjBoupy6D2y16juBcUbC5bJbjiq4w5e5fiwzbfcFyrtahVYHCU8Q",
  "key31": "ohT6Y3C2QaXFW5vrvYARNmJhxyoUNbTkDmMmP4WEbBTJ58AGHT5W2VtEdfoqyVYwKGE95Tavnygt2oab3CaTD9P",
  "key32": "4BqWQyNa2y1TpUi21gZU4wn5QW7ZXp4pig7fNvxeqFUU6hnVwTEqDKeVMDBNHTmifXgeY3VAJRD6SuCBdZPXtHDd",
  "key33": "24JHZx9TiUFV4GQZuHEALp6BjzrQTBHPNzi7MgYShhirrbjCEToPDEdTcNjCP4Aoc98FnzAXcuLMXB8Kj6DtTjsB",
  "key34": "3ZToRBMbByUfYAqaS54MgBCoDdmzJMsefLGgHegmrszavf26PRNbMJ8uuq5nR6Z2iMJGmPPDn6wdWLHqCmVU1fbn",
  "key35": "5WZsv2CuF86X7At9sSXmTdAjNMmy69vXUvbtJcUzq6KLaKKL4N66bxJimrwTnqoqvN7FnLpb6EHPJug84j1DH5Xk",
  "key36": "2Z75KMKar7eSuJdxW3HowUGYWs26DyPZsypeAmtojbEKH3UTKU68gpuikz9A3Zbys7EqBFNLaic7cfs1djpoa47T",
  "key37": "3SQNSiAkaDGLJArjjcxYrepFMaGibmsVuTeurzsSY7FSo6rxjEPT2mUrWkTePVpUvYuReuRrM3XfMKVhLmCK6AJ7",
  "key38": "FMQ8VC4dXPj5KtRQZQUddaV1zMFsQfnS5TUKdauJtFB19fuB7obAfAPxSzQ8pZmzeg7BoF3o4HaNXgA9v3U1GkG",
  "key39": "2ftH8oAVQaY8qL25K46WqsrLHmob2qxUgMoB58JfyDPvG6j1KyrB8Rq6hADKErc2dcsNJt5Ygy9fv51VcncR5KP9",
  "key40": "6sfMUxXu8Ptf3emsdfppSiv3qXMqweM5K2HhgsHyjWHXJjFmwFZfarmnSRRPPWrU3Xzw2Tj2yHKWGBxUcQfDJd2"
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
