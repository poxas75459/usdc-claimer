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
    "kvAyrFv8oghz4jYA3EozpcoMq9pGGmgiurb5P67e6F6s72yxL1QRFCRKB7gd7Uq2f7xm58kmKJmCZ52K4q9YBxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2485agQCDoGtJJKNGr3AGk3aVUWpzRssNdr4fi32Drcj9saRiZ53gQ98fNHaFtJQzL8hYRgupy1BQxXocosHYyFX",
  "key1": "4KqkuYfBihMdEvQWyApNZKq5Xc2F2eCYqu7BrGYi8Wem6ePxfEWb6mKqyLb8KE5cjnZXV9z4xhymgQ8emH3jqmgQ",
  "key2": "2tnxkSCpvKSDT4YNMNc8zj5TVnZ1LNYTgE98UfsmkJUShhmJ1mEnn9ZVxdhCXVmdgyd6F2F4WRxpdYvXRZxVQz1P",
  "key3": "5ju6Z6ErGP9PgdZoVLDeEmMgt8jwzg1hP3fQZSSG2T5c1NgfxtC2bqzaqzgTnZePqoWTReEn3NkXDwYxdGaqxhrd",
  "key4": "udYQBN2sMum7zCf8ZZ22Xiw6WpSB3Gk6gtrHiQy45KS8J6Pqo2H32oChKv5beAGkT8k1cfSCnUrt6aHa57dnjf2",
  "key5": "3rFE9exTzPqc8ieRJF8RhswjHxE9Eots2L8UdT7zyWdveoQNid2pRGXzyGLmfNyLxa7GkN46ewHGt8d7pLDvYQUJ",
  "key6": "AQH27JKgygRSUA13aaRHR6r1QsFRMdd1vhR7U8nri81GZdEEjAi2auq32wASrqEZMqhs1nWHAKBkfFx2iBGdxPK",
  "key7": "3vyApytpNHv8C2Sk62rawMxzAVaL4XUpuvn1Z5ZN7MiRJC366Wb2WfdWCoieDE6DEoTrteoexWm83CG33bEFSN1a",
  "key8": "3VwRw3moHjYiAf5zpGHgwFSsBpYvsp3rqZYqZFNCvAeNuER5Z6LfQffMZrc1rse1Be4K5CZdgNFXosY9AsyJm9kA",
  "key9": "2pmWzDE7KT6gFnB6nPFGtwJQoqL2hpKLXCXRznHNcVFVKz9e6LtkU9Hn8HFUmwhf19FwfL9aHWyZuEdCHbmfs24g",
  "key10": "58427TVuGLaV6gY5XMHuKdsUws7ZdRCK58NAGXPJkAf354ncDHNQ2CuiUv6u35ZN5qMY8rJQySQWcTQhXwZSLUwH",
  "key11": "2WfBqgp6bbn2ZQu6AfbEzSuXzWBMYJUz8jhzg7UTFAz2ivHTarsvWhqraf1wP9zCMgm5drCZPfzAm2dGEgv5ceYR",
  "key12": "5Hd9hFZP2mjkV6wbDh6AyckjytjRp3YnDLipgLbxcirchUvUzn5E4PzWXp71REZZ4TFMAPmkY3WMV5ze15Fm1JrE",
  "key13": "31XJ7nEQHkir79XqByYLzyj73o1qKFLMfmgPnmw4d355fGBbbuwP368iiZ5XzyYMgGkF1TqhtPgzxn8WwVX4zUUM",
  "key14": "3WK7sBs5D5BAPmTCk8TqhzmhjL4CWoyYECwAde2u6knNMLH5MkroGWnRUXKnkrq59mEbtD5iiGwYFBpHfN9G4XfF",
  "key15": "5Lxr2kXLRqK9HpfSrYnjAdGm1YWG4pwBB89d8xfvYzDtK6WZeWGqHbcGi9CK4PVRsaxs8X4hqqT4gZJvLQo8sWAW",
  "key16": "5NHaKs6Vg2C58B9wKYhvRA7mWUiEDt7i4RvzfBgJPUxufXTD8HQrCSZog5WZJUXvYkfXLFZhZGD7mA3sW3iLDrm5",
  "key17": "4EoCTZdxdiUqRLC43zxVEKM7ouGPaPV2bhvocDdxCyG5iXCXSTGADZxVtRgMhdRVEKP8PoqGdxceWxEhJizhLvWQ",
  "key18": "4UcboxWAe3cEDykLJjibYJh6ymphe5wC1Q1rDA6wU5FT3ciRp34J1csTs4Aiv9tt4nsGc6TEH2srxFghj9UNFYVV",
  "key19": "5yTwsCqCTh2A7xgJAZtie5hXDQ5qMj1ag7RwEn6Ffd7WLjch111UH7VjfCfRFsncKew88hu9r8GBm8vG1ZdnoDrh",
  "key20": "set3UNUKVGZBmA9KZacKepAPbhAsDVdb7z4HGrgf82PXp4hfkJATeyzSXL8zFGpADqa28hQ1pogGnWQ9jekpH4u",
  "key21": "21rT9yLuv6pGQvyYNYkus4qT57mFDaNFB8nmT51wx8ALuKngivV5f2vojSuA4nDqjTbgDE4UVFPAUTYfqpqU7USJ",
  "key22": "5arapDJUcnzhE24QEJP2kBexg76g6dpWAQ9LHa5U38rjDuGtjwMsPo7a8Wmzb8dCBpbQJzTPqkormH87RDsTrdfu",
  "key23": "4G3GpKB2ZaJMLB6j2sKvu6Kqct8TZH2ffxV7UTA9FGR6WHp4pwNc16nAoJmeGU8Cd8hJ99fMK8xWPsBqSeYvYdvg",
  "key24": "5jiQU1V3z6F91ybEoD6PwvEhZmaypZh2bAoGzJyemX1T64knwV2xADt9pynfqE5PMpPkx8wEBjmJhwnkH92nVBbU",
  "key25": "3wDtTqQwVMPZy3Tauxu7uj2Yo96AD6McqXCoHsfG3PqvZMfcwWVApbUgsFBQFpK8A8Au61QLQNmhgFTbETYhE53z",
  "key26": "5mZGMptjgFVW2r14K3NFKbnA6kxRExkYDGHwhuLkUdbpCJi96rsuBWs9Mpn4jwB1pvekFjaCPXcBrA4PaPP3BDoF",
  "key27": "46gz5o9bn1sa7xBbPp7XKSFBkoWLNanQCuL4MqV1Zj5mBoiqumizFoRvsxTu3XePbPFAHs5xott6LFy78AoZtgLD",
  "key28": "uGSFX24wszwdwXUV1LPf7JpQt1tXzRPKvxVnUzDKngAa5Y92cDYN8swkX5GhWmfu8BQtYUy9chk5JqP31GRvYWk",
  "key29": "4B96EJtVvqzxBFHHXp1JhmYMxkHsjX2etERyPjbLovhfdM8MpeoF6ckN6g8Us2QQ4waGCjcVi2pXFC2WFEbrjVFo",
  "key30": "4vs3XvAkiK113wZuJwiM6MYxZzCZEUqdVjYD7YpZ6PBvSsiYbuLVAQQHzJSvpKpiUPAJhnYo2RL1LfRCXP3gHSnk",
  "key31": "eZ6xyghECnyLWNJCeA3TRYKEGonPHNmz8UYL8NpWVHXKvnYoFRYmqoziqRuPBtdt5VNkh2WdnRRKBGMH7vj7vce",
  "key32": "5ANqqKgY1rvXvhrveSVh4DzGptUCj1nob8Y36uBtfskd4x6JnmfJY4XDv8FYVw4unmxwbmKEng6k7LmHepqp7AkJ",
  "key33": "4knqtmwLXjUdooAK5RYgXqU1gfCuTxJERLQYMbgz6xbgz5KgeXkJFMPHrFMrx4kyh8XP34ZBXXg4Jm6ME8HNZShJ",
  "key34": "fwKQHNz1rxmbbZU5aL95tgs5Cngqosuf7L7PSmgmm3C3Z8aWfHGEwkHk4Q6MunPSnW1YH41s3u94M3qoDiCaLGV",
  "key35": "42S3HpvBQAUsZpEJVoYNFnKGwt5FEzS3KmwPGbu5qiZP1MnQthyt1xG6rVb1uccZJtpiAsXeDPHY5bEhN9yhMNfM",
  "key36": "4Yk6MVvS3h4QEFishBj9CutzdGKGQ1eLAcBcNfWCmnjT3uyDWfrz1wz6qrUt4LR966ST1DTNDGD5WRoE2dCb2ngq",
  "key37": "66uFVEka6wRiFU6iDzwZfLgFcWUz3avx9WNdf9GayELGNo73Y4cRFkFBniM3M7UPjLg3ukG2JGmntqxoMiPYaiKv",
  "key38": "2GH5E1GA7zkDS2WFEi8F6wt1EsB4aXW1Tg8X1v3CZ7Bw55gxVMnWCX1Vz4D6nE2dk6o8XguNGeoRJrRkSMyCrNM8",
  "key39": "4Qe7wjm93agB9FgnKPmW5V1rfFVnVpfjirSTMHp4v4UDgK5rHTwreWtiuVrgSAZAK2CNdEuCva94BNQzotqcH6k4",
  "key40": "3QLnCPyirB1sQYTAba6BjncZo9d4TGtLnPgGpRnH6sZEMpfa6ePTja5b54ZtMkc3G5VB3KhEdtZFcENGinA1Ggp",
  "key41": "2c65KA2vuUjDKFZxg1qKdPbhEunJydoCkoAqcLMnL7G7T47vyQp25N1Ycxh3agtxfPfPATu62J87FAoEQ4U3CpiE",
  "key42": "396jCEJDp9i3Ja5HuDJW5d7yRzx9yTMKs8F9Pfo9rjhshPgGrvty7KVkPPPYxr6tZwFMyVy5yun282GtnPzdRHRN",
  "key43": "2aBZ95MSLo8bkejKzB8VinFbiJJsucQbCnHNVGQ3o9Exn21wif6xA7AM5rk2uNS7uS2JESFmKwmTXoFMXXjmQ1p7",
  "key44": "4XipeNFXpQfe5ry7CgZgz63AAFGXjNHRFELoY2HFgyeo7GK4HGR8zrWxBrBhqWY7DzVLdmiChjY6T9AeXFdmndae",
  "key45": "5aqrNjnCw71iiY42hLb2K3zjoDsrprGkx7GGnK9dyGk871yBK7esqxiiFCst4xuR5BEitpXNWUuvZmZURqdb38Gn",
  "key46": "3BZfL11sBhD3gPrx2eVadjTBoi6dTEaLzQbMk4YA1Mq4hMZgc98g7mGoALqTvCHHaZbTkGC22yqxXrKTZN397NuN",
  "key47": "5sonJcWbBp8ML6x8nUDMJf3uYE9uGxd3Hcz2ewrdHjCbfnPPKCmSNr5THuBD3wS9mqbTmPyt2oZcxatbtA7sZNuC",
  "key48": "3fpPsLx2RmjhjjYDfHkSg47KAhFtxnneyV1wipYY14xL8ummku3bwekZQ14pycqaBTk5aMMmgtdsqQniidZtQ2Ut",
  "key49": "4guS2dgYNiCWWwg1SG9hZWBsSJDcfn45CD3zi9ykUKd54oCp3upsh8JW1inZNESSJzxPkyfy5E3U61VAXPNia7UJ"
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
