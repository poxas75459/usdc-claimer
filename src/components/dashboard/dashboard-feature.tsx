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
    "5vk5h5ZKMmWtWTFGKPbUpZy4Zzxcb5bMTHs4QG2cTEW52XJYScEmKKGZDNVmzFcFL7ZevosWJepM7jXPREtJY3te"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mfRrm499QeYGqEwFKF4u73uuBvA5XMFY9ewbiN2dYukP3QcBYkWhQXgym8eecB1RNcMe56Yz4SYVDhRZK8gp6MX",
  "key1": "gEThqkXcDCRY1hThpSwte9fcQopwktj9FdExatm1bF6xCRJvZUFPkEGpTuWV524hZHaoGtnJzbNkdZmn2HuTZn7",
  "key2": "2AtSQnprzhjFwzKPCuWbQMw9QafgZg57EWugB49Joocy4Drqzce3mgNzSyybGVyZqg2Kh4xZDTXyPAGXikvk9ApW",
  "key3": "3ReGfPFcqY15AGHh4MxRWPBHz3xazia4FofkgcDbtcV2gfX1XV8F516qZ3cQfgTh3SMopkqWMw71K7dSUprMKA2D",
  "key4": "YHmsgdj7doT5CGAAdv8e5Hg2KAZMQGjsABJVDgy8LKcQ6L3PBa1tRdiXakBiDbWPbBQqJFsTLxiiakKUgu8q8i6",
  "key5": "5HswgeZViQU4VPCxeHXf76Hh449teETaJjcFtAbaGH9QFyCPyUdE7xMPVNdnJYa1LJdDndVvrASieu114gJHaXA2",
  "key6": "2TpxXAXCRXK24pMP3iGxUF4NbR34EuVHcnQuFT4QA4w891tNwDPr4hY9CUB7nW5hoY7aVqHrSD6LxS327qqmKupD",
  "key7": "3bgEV7BDqgoZoEB4uCG7T5wY7sxmo6P4Zqfx9x1TrjM863WoY62QV1huS6NM6V7aJP9CTFFfTqVnMfncYNY57YWy",
  "key8": "2zL1BESTAGw8TzjwX7Mt3Qdi4XoMNquBphHehVaKWGJnNJqUCg9TftcQKSusMPtJHHybnvTMw4WnauRYwVXS2dU6",
  "key9": "2T55zP86kz97xvoPbKp5SQGuk73jZwp738jxBMEcsjarbo6piYbFBs6W8gYULwGCcSThK6R5W8EnyySp1x6i2ky8",
  "key10": "GZtB8XDAzrPJYCYaK9dPHEKBJD7VPC9FFgqX8VpJ2Marpgx9qzVyrQ9m5pTkusFdJPPiWoGfQPwUsAYets6E3jk",
  "key11": "24oEvrrmz8TUszhpMMTzaQ2Mgd5FDVVa5bfpNpvzfNekUWhS12aRjb6vbva6ZNoUfQEASAXK4nB93f2c9fAGzwJ7",
  "key12": "24X5nfcSx4E3QzrEXipjgWfVucsifDhZpS56VPgWwn3esFhtj9yLmbCQbpiVxHvU2m8c1LkLf9V32c5hNiXthEf6",
  "key13": "28s4MbnkdqXzNtFtjPEGSCaaHd5ZcqzL16VjoxC5Cwe6jyUxHonnmhS8DEnAWnSUe4dTk4pct9mw6mot27dYiUy7",
  "key14": "3a5WmUPS38bTvs3GXi7G6n56MpSxcjze4GGcY57cozg3cov6mYonCYC5EG1a6uUrNZTvLWHkHSxSK1DQnn9P5D5d",
  "key15": "34YRVtPMjoiKVJbFQgZk1w6zt5yGpvXnZnsfDEfRKpoFHii3xSrKdmWgwEqbY1AH4AjLMXoxU1NTh7A8Yg7LTYBP",
  "key16": "3hbkusYYHKLMd58xhgLiVkvLimUhG6N29fS3cJcwz1CkHQB8Y78NTbjxLnPZ4zEKedgzmD4cqCWLvARdKrU6Cm7z",
  "key17": "5tbGAGiY6VvdhG1dmbogDYHvnxJQx8nujUG2rpiSQuJQake82pXZGjTcB6zap3ByM7XAmtBAJiDq3UvdKggRaPNz",
  "key18": "2JnNdQP5pTFhiGZ6x7ArhHeqESSmnyJfna7QYgP7vZqtN29qUhqimzzpUKZZc9eUKsr9v7MCTEJvJcsU1rVtvuy2",
  "key19": "Uk4ae8txSys2HoLC5Dr5bjMjyx6Lc3p8vU4JyD2hoCieZVHXEmTzfw4QT7KQoKvmTbMjrMk8jmhAjWeb6JvW2Xr",
  "key20": "4FVg6w5U3fj39Vxc2GEboHgwZZhZrGQqSyWmJuVLz63DFQZ9WFtmYLEUjVRmf3bmJtG7T4KGg1UnPDWohzyzhYUh",
  "key21": "2277ncxcE4qGuUQQzLQT4zH2rdMMvAsp1PNWQcf3pQzvYAsYrhUHQgbpEDeMx6rWiMQt2vkCaxVfyFY6WPVFTMwx",
  "key22": "61rh2dxCKrZDcNsjfQBUMWQdaY4XWkzwi59XbNFjougSa28MfSSUvL98AUKAtz2QvrhPYN1QABz1gQYnoNBuT85N",
  "key23": "36HcqF2HwGWYVrLKcJsG3JhGaDtRgsW3smmjadqxkBaJynqWRrAcbSzcsYpTqCTWH8VPX8aNJJFYAvpCqrCeJoFw",
  "key24": "5FBbxcKr9tfkFwhEgYYdWVhVRvY6GFESMFt7WeZfXTcYw4pWtzJDLW3tdHk7vXx1NqL6BW77mJBujfgjiSWPHoBU",
  "key25": "kTvEobdgQsY6dWooCqBXv3U5xFeZdzfumvQpkCwT9QgkziQLtjLmo8RikvmRVRToegz1zVdpHaY583JPXnu9CvV",
  "key26": "5vZaxzwYUJVznX8p6hRruXz3J39ZhWrzUR7DNwuG1ajbsZ1jgNWwC6m5ZAmkqgtD7SPRtNqbujV9rZpaJneMUzhC",
  "key27": "2N7vWim9rmH2rMdKg33M3x6zbQwWwmjxGtghFkAEzhqnV8tZA3cxgSUyqc8LsuPLQHHbCXxvLRgD6FNqb9QDrD7E",
  "key28": "Gk87hihtHjqE8mp7hrquai9Ab22y7c6zfwBh1zNLENHNEZ6ou9VM2wPCG3f1DmNFYKzEo2Qwg87kPKuVYDSWuat",
  "key29": "wHwvcmbCEKZTKEksGCxUNEzpnTgBejqGu1k4ssfzQoQ63xLKWJP6mbTQJ8BpzKtoB5izjsaRJnyeEYDwYREdAzL",
  "key30": "5ZdXUFg6ivxyBNYZCqmz9gWe2YPx3sxTnDiwSMs8BTvF57pBjCmh5FpRTk6Yt38M7DJ2pvR9CjM1JvS6khQhTBNW",
  "key31": "4xjipcUdEwUR2RyxFvxXKJbReqdcniMkmFTKyzzpqUdZESSSWgwTVuKkpbYTxe3bAagVn6kNCJGgVcYVu5rqfoMN",
  "key32": "3Li59djJTt8t7X1jSJHciRtxiwmu9YhmcG9tPGGNof8iXuUm8iWXNiKEwWHrma5eXwYZpLz3PQuVhmLau4BQNRtf",
  "key33": "5X1HAzCAgvHC7vd3avzCfo3waoLjM9SqAAXBKRq6nqssgzwq7EgLzcC7qSjbcB55BzTi4gyyJZc3W8Rd8PBzsuKW",
  "key34": "3dWso9SiMZT8vx3akrsKTeKhTpxfKiCuY3CqEn4eQq2kRv3PA4WPbP8DZcPv3oaNArUKNSYAMy8CF9tSxkDe3kkg",
  "key35": "3dqt65pfiKeWyQeARpUsPRXzQbsAKJ5p7rHa3vkbyZ5skACwTEKA32Dyp2e9d5CKoS86yyVehyMza55gfa8QGZsH",
  "key36": "2pv6fwWgMuqNS1EKptSMbepH6cMmnxMXyFGui6gpZV4ZQuyw4osvJuYm4Z4cyrq5KUaaoKa6V5F3sk2YdwrJHofn",
  "key37": "2Gcsd83S3c2x6KLGGduqWmXYsxuQPEm16QCMmp6BonxRJfo7imsdQkqNPfy93riKGq443Gtd5XFgftECEZzkwwKL",
  "key38": "3YGdTY4e24ZHpVsVh5kEAcRUxPQAt7Fax3HCi1mQKurG1aioVwYJa7YETj3WYCincEF8R4g9EnG8aAA1Ujp2URkn",
  "key39": "3nVB2jbT3VZC5G5iDBSzbR9qSak7C57ykca1c6cY9891JwReCcq65WURduwk3oDdmBG1UkuxvAAm8emT6x9M6vT9",
  "key40": "3ofXVThwVNLRrnDdAQJXmfYW4SVLmNwNp5GHL1xFCtqJfW34SFhBYDL8mHjAPVxo3kafdgc3QWhmEASRehKDf6Vu",
  "key41": "4Thw7DeDffq9BfXVfnwFY2qLLVrgMJiXMKT2Hz53PQJBfkhMBxa4bTdDzRooXY8GkUqhSj1UD9JGcxmtMmUuQ2DK",
  "key42": "5fWS36N55emck1sybLM8hvjghmom9EHiq8mWN1EFhhPihGErRTKivFw9ff3PycVMUZnxjML3gKJDGBofC89q3ZyN",
  "key43": "5G8o62T9YZZvwLeDoJT4qRRnB8tt72uvayVN2pj2VdVNAJrPUZ1evyVebCfd1FhBuPkZbMGFbHgGZSXKHV18C9EZ",
  "key44": "2QRvwxWjWTcMPJwLdTZdsDc6xKS3xcVadFEdnaNSmp6gdN5h7LFxyY3h7U9wJpDZ2VyB8P2jLNC8g5gJKJ3ycA6s",
  "key45": "2s76TJqa3Vaa6o7tDn4zZKYzVh2KaRc6oP3w2oL27Vs1XcjLRDpgyxre4eKEdMy7H2L2r5BJAQ7ydDmqHmmhkMY3",
  "key46": "BXyTF3YRv7ZwPjBRyPKQGX9vxnx3ovx6SVMT3TTTKzFgnhpv4fSbPFmbfM2r1zAh1djJYVC5uJ8ruA8JE13qatS",
  "key47": "2B78uALVLPwm5qcVgaih3rKneM5E224W4UvGjXK6CteWk3ofbfEotsRiT4cvuYo8S5WYLisoMVVF5Lg3MXQef8Xa",
  "key48": "5ELfRLN2obrcVycnZT2TkfEvbYG8WRjYUqQtneMji3Eh22ZkLm2mxDtysVemuq5MHPdPyLaonVkXk9vDeroc4dn5"
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
