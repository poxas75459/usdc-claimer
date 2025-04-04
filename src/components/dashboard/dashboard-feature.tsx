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
    "27XmhBuiEWW8FHTTDs1L7xqF3UHL4QsRS14a7iNdGrk789ZmomLhnN4CvctCk3pV4kfcu279obeYdJSvxen1SxfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v2UqqTPrkZMV98Z61UpHb7DqpxHaDvLL5sp1MdBaZw2jLZcSEmsodezeuc9ha84BJ8GHRKy1Kc44wxjuY9fqLE9",
  "key1": "4TimWf129RMDkGedSRq3LjmJ5uq8aEx6CppKeiJrEq9G7GqvL8cB2ggeQA6vgfSDcw7pr1v4ebkCBNfaxjuewDoi",
  "key2": "5NWkoMfaVUC1GTsuh7i6U63v6JCH3ekYAGhCpm9rm54qZJX1PzxLZ2RfFq2MMForJaqGCyrnC4a9TjryCsT9NrKB",
  "key3": "28pkY2E8hB5buCMaFJT1BKPjEtLYkyMpxAfv4KEPSsVsp4Qw1HvdqDjtfvL4RHQmzRwJAgkvxEnLQapZu4sRc4Q6",
  "key4": "ZrwQo673ZZQotPEuidSaxAsYiVhsWBrrSz31kifrihh3gZ4aJh2ynK9n7Cji9Dwngc6X8txsu2TRJ3RPTSQgXVp",
  "key5": "3UKzZW78TYaaE8B8HTew5uEok2npuXF2yXyP3dmmcTM8HT9MPAEp1yzhFCRBnUXhpmCWRHodMCBKS6EVF2HAQKxo",
  "key6": "NEJF9ZZH1vKsB4U1GbWbtprmiSKZDR3Sog3a23qGeFDuFmrY47hWJ9Pu6C5mPu8e5x7rFANaMq54wVxwSxV5yxL",
  "key7": "3QJQEkcjR4Fu9QY8j572Myma95XQV1WBVeBye3DjnYJYAmdcDULnAaktji39zY5w3DQwQ7QFbFDmeKtH7Ah7P8dD",
  "key8": "2ovMPmijFVjARF11rs55eYFC4qwqgniNDgnY9piUPSi7njDQahyX7TWGjzz9xJikDEqMw6XofbZG7mVMmiwaBds8",
  "key9": "5QwNb4ES3hcoPrfc8nqgMaUCdVh4wZUXJGQ33b3X8fu5YAsYACpeJFHuJwUCW6WkSedMGEafM1oECfrRRzTqYQmF",
  "key10": "34tjB9mSUGGnbhRceWWw36ehemwPkNZhj3w6i3QFFDFaTZFFn2vtapb19Sn1daEmkzr2cwoAGTahXHHwVR4wL7jg",
  "key11": "GZMa1iuH77SLyxa3ZaLkwCb7Z4Vn2Diwuh5VPCg3Rq8vLwr4sqUnzsP6LUogGSW82XLHPxSSLZNyAWcrNp25Rrr",
  "key12": "4mhZJ8LbBvGKQh5fqY7pXtRzmpXpYJP1RpTwzv6bLsStmSbE5MoE9Qwe3w4D1CYKt39bpE5gNUJtTiQKDeorGgDp",
  "key13": "Y6iiqSGjki6iQDpvDcZSHbPuNXQ3adJ8ciGgdGX4j5M1G6Zxkjc27zn7x6jLVrpFyTbmfVHS6J3ABBjXfwoogov",
  "key14": "5tCcS9BXNJeFfBTxYz6c9L5cPPcKer35vqkE7ACnPh8TbZtYqWEEBeEh5LU2J5An6aT3uW9ruEDnp3oVEidxUwdE",
  "key15": "4vTxkSiBAtHn5u4MMUnPihCDL5bQGSF7ytRTp54g7AKF1dXTRYHvSo4QcjC32BPMDwgTM826pc8p2rzt7GQqifGL",
  "key16": "4KDWpdwxSqozPEeH4gmtb36viW8LwXFKmCwqHDM9wunECM5p1NVbMqReyLFnyetuv2mfsATYNWCquaTYDrF9KWjQ",
  "key17": "2SmbBW1pTHKsAEdUBJmE1UXpm5Q5zRRrJ7PSQ4Mq89WQGuwdVLw8bBb3HiJ6AWT8EahN7uY5hoiJii3qqkBPD1on",
  "key18": "5opHpJcLuRe9eZ9VWt8AkWy8NAVJhWWvjyZea7c6qxS9hU21CEuogprwmd4EeHmaFT24TFXnAfsY8AwLPxGqwMFf",
  "key19": "4fSa2aDmfDL6GaitB6kmgGxVxg7EoFawdV5qJxtwxGEQ3phKuhD9w7sjskNh5c1k6Tfphs4X2QFcLWjMuPnzEDhU",
  "key20": "JsnV9axqJsJuUJ9EF5GPHhAiah9fDnpS9jrSPWg723Ys52Fot1KgnDMZKeTiakpJz2knvQcnEfcxpcg74LR8EKK",
  "key21": "5QDHGBjZmUpSaZHSPuGjhW2UbCN31mozgeYTFW7XmmuiJBhKLQwbdmhu9tNLZahAuATfRuBVdjxft2GvJVTHP9pF",
  "key22": "51zvpDZAWNiFYXbktMbLxAHB91BrGqbqBK1v12aF4EY2mLSHarW8S9nYnSPDQhiTXR9jYoefGBnFrcUPJxhom8Kp",
  "key23": "3TxgR72Yyo1aXAKdXjpX7ZVS9YQq3BPPRtEoHFDW5QxCxHeSBFwkEEnj7AKcztVBnKh1Avr3CvTaWZ3w1zJo5rN1",
  "key24": "39s1eeaNqUKgPd4kwPfCCTC6SG7cztZBN6qKsF3WVTeNDdsE47uFyzEaoxkYzfDBjmkFvJB3bgC5YPxHQkr9rtBT",
  "key25": "2gCkvDBKSs3fQT5wUPgxjtvL2QrRVTXw4pHgwGKf4nULgJkMrxzNeL3wYzaNr91tLjk5ycJWgWhLEBckjqvFqhjr",
  "key26": "hAuJ614Bk3w5fqGgCu9V1sJ8HEcUZ5wzQeNESe74qb7K31M8TmUqpuyMFaw1P9b7F5oAmvXMk54QeSDdNnp26sJ",
  "key27": "62Zf89u8uwnefFG2iyjUKQDjWd6J6K1vdSK2XcUt42fUjrJFPqUs3XBr9kbC6osg15uYd6ubtk7eF1DWmtHuZXWr",
  "key28": "2xEiSGaqG7tJyyanWPV75BPVnb71xTjCUHDEVeR9snBMryPwpC3kesHcsRMdHAeBbd5AgXXpVTvf8Uyr3k3ajYtu",
  "key29": "8awcAvxarZp7WSrXL6eQbNN7kA2tg6peKqGwPbvnrNJFiRmVqmTipfApLbD6mbGpm9ATLxT9yqNNxCMBRzpGxvH",
  "key30": "VJLBUKekzQZDWuWHFygzj7VbXoo2J5DTqq4zGzA4BRUr975RqMeeAAyojDko8yiu8gzRArmbgYFfwGMCA9dGwMK",
  "key31": "2XyoJqb6EAXhLW3ACPh8GjCziQypJLUj2EXkS6S3xuuJAVSnxTxSH3VfnL6csE8siUYERpqUsRQtqj6QDtWP3Vay"
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
