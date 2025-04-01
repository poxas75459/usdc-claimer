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
    "38iXZdgJiZk6ZAk5dXSfu891LjkUTgaWSjmKNAj1s6qQ6GKWSD71Uc1E8sCJzHcczRwLkF4HB4Xz99TGXNSoctYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gd2HkoARZgHgEU3FXpq2oT9FbD26peu8Ri8xbrkgWE6ihpfnwenwJfYfLeaEky8DSN1X3kdvyCSFDwEspXJUvDu",
  "key1": "2vSSV7kWxfjCGuoQiz7PfFq1QEDGNQdVtAFHRcQuVeHVkzFdVt5soUzQ9Ug9d6TNRgJgJGKRifwPUnkHXzs6j7Bt",
  "key2": "3YnZNnN65V1ybvJ5gRMmdMCFETXy2vWSy8UUEzh44LYxpUfxe9R1akcoieXFnZyncbCnCa1zTx5h9iHUfRFxZX69",
  "key3": "4anLCvy7eM2nmUSh6tE3XxHjJXhPMgJGadtBeGoqa3m8PM49YKQm4dCKNzoyNELtTnifRiWKuYr83hvw2XR5VHKF",
  "key4": "2XjuyEMipajEZwX931NU3okysV6LjhNhKZdcSWodrQyxGxwvQz3caQsmFmuvanH9kcvthXdHwiQ5FWD21FvWULkg",
  "key5": "aKGMxtGHLxSZCn62UyJXdbbvzJGgocH372p9ppfajSZDNTuArvTenT2F3cYykkwB4ZVxiHpyNxaBrMrGzYu2VNB",
  "key6": "2jzCXxvpeYN8bN7DBjQ1jBj9UvG1nYFaBLDby2mkaA7WNj2TDvVjLD2jgsJ99H3XqM1gU2BA7G1R2U5AxMk1qbvF",
  "key7": "5fUd9GYt2zHuDa8tL2y3mgJyXJC1XH1M4Yy7XeVL1fHr23pU6bUMsQo3pRWKJ9izMjRwAioLTVVqquq3W5vqg6iC",
  "key8": "TKQHGvUuCJDjqMqoFBhpozBBNxspwtnx2UMfdTJjEhwRRwPkHuscwwqHJ4UvscsEJQthstY3Dd32RDxUn7Pkk2H",
  "key9": "2V1aqwhkvJrB6Q9dr5xSsgN9PU2uAcSsrwcAGEUNtFbyx1TREREcPwUYVwkdJR1SEUJ1F4JNcXnWKgocdwEEcrQW",
  "key10": "39WJCX8ssUmXyKFUssHtPJ3rp7Za388XP9uWC7XbGVGsjqM4Lt31GWznjoJpnCWjhGarfBkEdkHHECREhJ1mucka",
  "key11": "4bLXtfEZ8GhVKpngCMM1RBLS5QoJ2HrF72WdBjvvhmYBf4JanVtp7mFDTMQn1hQhHBumFVjhXTRA8ZarLGc8CnEL",
  "key12": "4eQx28iCsdDznJ5oC9uzFb4i1F65csUMZCRYcdkMKLmQu6KyTS8PFETntPGHnmtk6B8mqsXpVn1CK37apW1zndyx",
  "key13": "3Sjirb9KfJ3eyehzgvEcnAF3WA84GuszCuy4nDawWDJAJmxFZZcbXbRYMWZ8u7vYEhwJPXLZSnYzEDMcSNWns1vm",
  "key14": "2RgKMgcui5zH72M3Zf9fxYeCbYWv2j3ZcmNB8T6KYqahSCUgdzfMCbJpat2mpmRFShFJaAn6cL64oDCDjpTvFZ5E",
  "key15": "LKXwCB8Tdvaz73BWdsM6fZVz9FHRyHwq2vQi5PZxPY9eS4zovJRR29m33Fb4VTDXR7g5UMQsyFr4x7fy5oD3aaX",
  "key16": "4ncov4kCdUMXcWCCijeRuTGRSJaAS5rsnZY31JcvexZLEb7CotpHYDazNb2BYN1HAQ3kJ4kQDweD1dHMpLfJTx1Z",
  "key17": "5hEZrHJyaZyn9sBbsgagYxadeGrs3J89B9TTJfm6gTPjSY6BSaooyTQrmcgavZB2NQgDmb6CLnCuvs7m36SeG8WZ",
  "key18": "3KzqX1JQooMgiKGGUBzEDi5VTU5ZJAMZjVu1bD3APLyQX1qiBrCbHtNScZu4jFWQeqiujQ2N3p9PiMPjFf9DxyMA",
  "key19": "4jT293Gm5XGkeb4SpAPzkrXsAwr594eFGXZkvXfXkhUMZXmYgXDuCwcpfq43r9CiDWtDgsppfhKFiMYJpfFmTD7B",
  "key20": "3zMmuuteXNm91Me1qMdSAyWsYfSL25MhaxsTmfusV624reDekVe5djJEeHPKAquriR9bVVCgR2uEgDXt35p8c367",
  "key21": "4mg6B9YdjJNmdGTbVYLdcbXy1NyBr8AKERUxdHiC5qwPbYqmHgS2i8PGrfS2dDXPbDZ5Eun9XgKBpAX3RtVmKPJp",
  "key22": "5N5xW3eVxs585skRFYfhVkTL831XsAxsnT7Sys9smdd7Wvf9yThCryjpkD2Cj7baY14yVzvxoxVqjtecvwTVQ8na",
  "key23": "2nXoSdumdyqfktNJaeyxu5xEXDB82XeN7RtJDvg2aij9HbhY3wywhVjxSesw8o59NxEVm7a8aJvzrVL3g5bT3154",
  "key24": "4whV7K6HqNo5CruVdvBqanxEAfh7yWQ5R9XyhF5rWuFjWfthzeV2DqbXuBx42n1VKpmtsjjmB1Mm8ehgRhc5ZnqG",
  "key25": "2Tpg4Pba9pU9GQygCeSUK5pTNMdcEwJduoowL6YdHYEdxH3XBUGGKoBzaHRAH3ngTDbFiv86wDThrrZG7KBVwNth",
  "key26": "41TgnMCkeikSqd3GiNUiSWVGvcE7Ja8iUXQsQLJYycN37QqmjWxtDm5um4bJA4FJkjLPsq5hHitGsnt8hrfkbWQ4",
  "key27": "5PrRrZBrYDPefv1yUb6GANmx2AaYuyquGLeEmvLNrL8DwXky9CmQAj5hDKkCUXnubNg4KNucma8TWM8iU5jPrrfB",
  "key28": "xvMgfj4Us1XefrYDbe2VSeZ2ZxiSNHGLRiZhMxTfBg1Zu2Xec4BcsqbA4dUZp4Wrz9SP59uDtWYYgHjSCm7qS3A",
  "key29": "3oK9Z78hMzCztDeHU5Rh4TMDrYb3weZZjGQ85DKyLs6xPZPNfxhBM4zrh4xGDoUrq5rb4Ex71FNdFZ2DLv7pv5oC",
  "key30": "625g82GM7U4nkRGvPyYPfmuqsPj5UcjBwGwi9eMzk5Z6DCkh5j3B71w8xRuBzBA6y396msawrh7Tryn3RmZuNrvh",
  "key31": "3muoSEn5yKBYsNFcyTXxZ9hKMBE1WRzuWjggKC7CeoMwhM7u3nqFT2MFYii7AgnT9uZJzDDoxxA5GjnZ9XzjubHM",
  "key32": "5YCmY8frt2RFgGCT5bVukJkVN4qbdxuoeQ1rZLWmFZiEDrCdzg9qJz8rmwPo3A55rCodzNAhdcseoyg7jcceDxf5",
  "key33": "5W7eY6CTx7UixTKZiezL9MJaHSExayJWWSdcuV94wD56jscjDZKFfSvjWps8bHJniUHVv3TtCF98BDYw2MQ85jLi"
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
