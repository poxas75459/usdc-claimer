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
    "2kf7SkqETBkD3FjWDgAeMuxZ8fWyiNQ8bTxmUELsAtzu2bu5dXUYeC2rpfERtrJKRed7X6y67Ubc6dbPcwAd9dsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DZTTEMinNvNvDy6BopAJUNCbN2VbRsrc2KUJAPTQe3Fc5ZZuuoHeUYafkUBf5jJLUukaMySrmpCk2AHHMMKnfPU",
  "key1": "3uvzH5WP7FzZyKK1EZDGT88XuDxi7nbCES86hMFCerEY7Y1fonqWECmmbfZ7Z62d2rSAxs4sQysngV8b5x9GkD5w",
  "key2": "pnFZjihs6U3gfdXjcGWESfxwbCDScsE9BGZVFqahAs9wK9Rii4u4Ssvx16wdUBHpVBCPqxPGkhsvGs1C77SKATs",
  "key3": "4fmHU3fZsRopEBAi8qnzUtVHUVzy1c8biLfpDZmHmpSaS2dGNGxCrzfVfkVm2AeD28p27mVgmBwi1Fr6CRTVFQYm",
  "key4": "4oYgSs9aFbauJCiBRcWSamF9DCG2oyeNNUis13pnTEbECXDpaasR4ypbFNS1grEew4wrgyRdQJKoWY61ifua3Sqh",
  "key5": "2SmqxBan5oJ4WwHVuKuKMRiDNk878cVVqPQfzegsKSRe3LJu7yCzkb34QgqyyEdgvKBF8axDdJBGiFfi6PXKoWii",
  "key6": "2HNd1p8mK6TFd6bRqhhVXErR1uzHfxcX3EsZ4iRS1MtTknCR5ZCAMUzrmHoEsV1FT1TADupDiMLXyF2aAZCaYFWY",
  "key7": "7hA5DvEcWoYMMV2gFEvNMftpPmXzcCTrD8BfLeeS8EYMNsxMeJpihRNq7wCM6TX9HL2jXXftRkscERkWLWDn57h",
  "key8": "3HKk2gTaGhVUdVat5QuZfZUcGApiBGFSaJ6v4zJkSAT3MYvegiN9ZpZH9LQcAZXqig3rYncNZVH8Do4eH49LkgbQ",
  "key9": "37ewNgfg7YSeGYbX7cpqL9Rt2hac2AHU8FV2Jzd6u4uXvjQoAjvH6e1yxEdq8FL5qmk2q4A62o763oHDYbWg5cM7",
  "key10": "63sR9SdwymNbxk9FoUcX9XFB9ruGfVdbrE7dbnQPx3kAWDofgKeKX3JYWJYUtaHPuDLkxGrFqyGKZ1nYz18rZo8A",
  "key11": "31R6Cbi3DzyKCc7nHgqjgg931Y46iuSh6imirCYDDMayJiPDjdWMZcedGPpdtKRz33qyXD963GWkBigx8j32jSuq",
  "key12": "3cv9ogAexhVHMkouqueykxsKpc2kym8fuLB81TTadBoQMnqb4ALxpuyunwKcSTY8n2a76VPtTvNzzBUgLCsw5Ka2",
  "key13": "65GpjP4kRotA3GDYcF6WmMRfkB3TczD9UiyahWzahT2DY3WK9TQTBrqigGJF5aCvTSsL7duyX8ncFg91FvGBCNbJ",
  "key14": "46t28kuqnBxqsNpykQLB8zwHUY787z5NMb3WydJ3Y7vVdmcn9w5dqosAyhiHpD6KASCMhtEmG5donEte1jdzuTZN",
  "key15": "uRmSYv9cMRwNPrspHHGi9xVJ3chsasTP5emKgViG7tb5LLYzuz9YPutELh7Hm8soRjq8UCumUq5CFYznvLpZ3KN",
  "key16": "4jmHYArfsFndwbbgXmGeRHLhZhk2561SNyPR6WY6NUbSfL6yfa3gUvdtBfvhJA5LTeGybqyvJtBQyuG1qm8KYvBb",
  "key17": "53nxopQ4csSU3aSW5gVdGqCnb8LKJ42ddmnynS41TRVg7N7KLy8E4oFvqL2PY6kx8evvfE1rBnQ6Tu4SEFN3N9Cp",
  "key18": "sgi9ko9przkXqvKCtpVVb9RC5YhLtxs5UoxitwnFFA4nwDHoxLJgNiZgJBmR7YzysvjXLDcn5UxmKUkMPLb6Q5t",
  "key19": "52YxeBvG1ocM94ts6eddB1fTPTu6Zf6UcM8p9RartePVg8prTqEaJPsicF2ZED5J1BX3z37NaFndxUe7QtDf4AZq",
  "key20": "23zr2nNCnnHscAVqzHpV7TSRhfBFKCLsoBthgBwGhZqyBNronLGkUoH5ZJNTsSZGz1QBBUdFXWgUiNQzv4Y16g3E",
  "key21": "4C6NAS7h6zTbgLjMBSVPVMu1QEjWYC2YzX3pnAY4BnpPtvmRhArJ6HUpMgFBwpAKMFFKKJJKFViUCAyZ7bVR32TS",
  "key22": "52RDMPcLBZFCgRivcRLcHDSdurFC3L7kSk4XRMeX8eh34fyNb2ZumkEkf5ro9xmRvyidQv2SQFyeG5y3rXAp6tqT",
  "key23": "5pK9XtUR29FtiSxwF8T91p6KnKV9dt3xNaeAdPs8ZCu9QZ6E5npB5rezVMtX76DNVVe1mEadtEZ1rWykZes24N6o",
  "key24": "3xucRr65UJPKM74D5cDJmFFojh3rWBmqHgytaPKJRK1JgxxsRQws4ZfzgZSUM6EMsks7FXeVfcY5LnmWkMsWA1Vi",
  "key25": "2MVBQJ8eGRE9KKUEMcFNfRSB7GHnC5RCzVdEVXR5JxNEg84Ep4wtEw1LYcWiPUE353DstwXAkQxJjSc4Q3v9yDqk",
  "key26": "2kWGtdadaRCnTUiEJPreRmC1PigAHqa6332pHMmunbfDSYLeMgJcjb3RUG6UuD9u1hDs9oq2DL6HsCfPXCibY8ip",
  "key27": "J1FCCcwwctDmitzfqSVqX2e5kb7N1dQesaXrCDQZhvUQry9HZv3bi6d5RDj41TuCNUjGeAHXW6qP2Vk1U8qJJRL",
  "key28": "521MaYQTbqqpWzyx4UmuZAuEVcrPpZZZoR65jWuEsYhXEv7C2H3t5PioAXfQLgH22PXMXG7hpo2rvxjAxh3WffmP",
  "key29": "2vRcknX4nCvkSC1jVeLAwHJYBhyHcuwFXGuTk4952HUijNfC4QZi2XDW7EuH3Kf2EvQ6qSrkKfZyoxzZYa1AvmHL",
  "key30": "4wfPj4b6hv2Mmrji9vz7oLenhr3xmpTAq8foJAgMNKbcZbzGW2nfppUsVEevwx5kSguPHWYimYc2hgTLnd26FoZU",
  "key31": "5DG3N3bgkUkKftu7EkaSTCAKVTUyEP4q2tJ1NWb7LALvbeXAziqCoFTXt6BbuyV3kR5s4Qtfs5ZwRvLYRTC6HPSR",
  "key32": "3FtUeTfhsBvVnChEF2fcfdd5bZo4eHVhQhi4eapiJKq2v6fPw7McMSQ5mWX16JjTR4atuotCttfzw69KPDzfnu6S",
  "key33": "58tGHoxYzBRA5LPBBzfFdzSL9CHQE1TXcgThy4Y5kE9LNPS3YrC7RVZye8y2CM92giW3GvxshQPbZsNJf41pRfSk",
  "key34": "38GJ7xjyG4jyq17pTJ5GcPhWoq5bjuMtyUSTk4tdN1yhDKxuXMR4C2tS1vExAzgYpeyDZajK2AAU5FjttUXNqKbu",
  "key35": "4hznX9mbPRVNtz6CBbPBqTH4GBkdyw7C3yisrnuEjRzTzUwtMQUNpbsVLhRvP9AaTYPw35A132fxdt6geBvKVhjH",
  "key36": "2puRkbtrFzgkEUPAFjbqd3RGThmNPXBfHexGiGqq2K7shKfFc4T7RayveUN2douL7WjaAP8zHV6Vb25YqqZk912D",
  "key37": "ksTuaGDsCNLQaDXyCNeyjyXkmNH73v1qbnqhVzzsJQ92WjxZ1bgSbZdb9CRhNgHEd7P4S2QwsjjnWfKipB6pD7W",
  "key38": "5R5Vneip63vt11etnRQFFG3dc1QdVKnvqE52vEzejRCPDAc63MwiYNt2NQzK4wDhF5jwLfnrxpRR6fujrkSWN4xW",
  "key39": "5dmSmJs5mfA1MCFUp6JsfLSHcDouerCcnaDmQ7wRQgNJ4oPvoSB579tXWJBvw8Rn2hSZqfAjjev9AhCCnb5toa1q",
  "key40": "4QzqZjDq6URRs6wRzWwZJEgbMxqVDEZNN8LYgUEUFGRpHxDXun2kagoHfVTBQN3DT2QXmwpigNWSPeteT1df6giw",
  "key41": "2dv6Fin6mqVg3csme8BZZk5vg5TynN7WniBuFLnWwmBLAR2935PLgBHeyE1MjH3tGPHgyoiNMe1QTmnb6LbaY96Z",
  "key42": "NPxagxEZqN66YPnBHLWXHnuN7vKedVDwhLtAkuaf5FPPeWqziz94jwcBN4Bn9hEqt487Eq3TgbFeVvHQsiX3PfC",
  "key43": "61KT4uJLgyUzaypagCGzeUeFpLCPYzhAfPt2kXDQAF4FUT4NCsqeWLd7brEqNwbh6XX6sS65H99ekEaLcqd2ubX9",
  "key44": "1fcgNJftJbJSZqxkDaPY11njLise7W6kKb3yb6CYjJbqaCFaqDYqa7RXBHE8Gvu61PeY2hHKh7JCnMVgjzUgtZ3",
  "key45": "35QHQmQhW6xwLUWWyBTaQXzovJFQpygqwFcYgemUyNRoriVYHFvzRHa6davFVjJ5pLodd1umz4PWfWsbmiRqvBDJ",
  "key46": "yAebJ1ycJQe6ChEYFCLV1TK7CKEYtxXHxha1H4isfXTX5LTjQvFmuhERPhfubwuiAVQWcVT8gMs6mCitKoEhJkd",
  "key47": "5QPreQmT1pmoyx5rEGaTpirrSLCuEPvigYP3yjFjGm8S6XThWTAU3SBYrJ8NCQqESxKGVmACzcrNTAb4udJPHDRg",
  "key48": "7oqYwhSzuT7QUZ98LrXBMsKynvpb4uzincUFYVaQ4Gg5cYzHASqCoxaaqq3U54YMcCPTJHwvqmvAW5Yew9UHbLM"
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
