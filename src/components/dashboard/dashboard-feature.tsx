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
    "55voR2C7xFK3Xgbez2khpYWum3sgpHhVaK5mHVghcVFLajELuLu7yRHGTupNkH2ggH786hhi21zy1PKssCM2cY9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ohdtdzsN4wgAFp6Qnb7EkQ8s5P7Cxmssx45Xoe3xsVw8z3j9KKPvD7nXkCJ3uFec3J6J3t8ZTggm8ZiHZxEw81a",
  "key1": "5WwKrMe4rHxPM89jct2ujQFHsaxQoe1e3LTU9grBKagJUsFNSw6vv2oXmK2eQhm86BtGdWDumDkutN8JMJQfi7Se",
  "key2": "4HXLrfVyLnq4tBZHSZ8PJErdtitzJqzdT34SpG4xtt9mFN8iX19s8YwHwhpVnyNed1zaEhhj2ahpKNdQoisUciN7",
  "key3": "4nEU76sNxiWWnxEesp5EvUtdp3uNPyjFP3z54izPqdMBxP7zqBUvEcEJTZosgjWusb6hnDvAqDW5WerLTLkNWruS",
  "key4": "54xr3sUqSeniVNTp573dkpxJg54BM274YbsD3c6VUiaDYmjQLS9ctqVLmvN48awSXNAzvBdzMrexr3E98vuXnryP",
  "key5": "q1qTLeuba8XDyn5g81QAdLtsvsBkF7FhaLbvbDtFdQyU4em3vDaaFpRLduM4HT1wUpsrZywojM9oBNbo8tW4gHE",
  "key6": "3frPLDfeofKaq65Zhzq7YzsY9xPekttzcejkvJwNBa95rzAKHok5DFDDDangbkTRpYDRL3twEPRF8xpaUqvQia9Y",
  "key7": "rL8XDhPiLQchi71cuGf8ktSHAnBo1nNX1E8peKSgThiukkbAiDqKoq9hSdVagX1mnLcaXsp2pGUBPzkNjobgjJM",
  "key8": "4q76X9iVZ8bGjeR1NHkzi6FqVSTAQ2BHcHqk642TNsoiAMGbjvcGVQK2Cf76d7yHCUyCrFNBkyoj6MpzSytBXogm",
  "key9": "3mAY8TRfXWKKSwA23SFcdU1fhQvjJaQgZqvKAa1yJ2Nf5C4bhV9PPEHbyBpSLGxTvzPYzzZ3XL6k7aUta5MzcFvn",
  "key10": "gNcNzok3M4A1g22cm8iMxp1PVDvCuFJk6MeaTW5KMn1YTqsKwie3iUZt5gsPsc7qGogS6ioKpF4WgLKPqadth9j",
  "key11": "28nbFR4Yk4jmPW13vDooMygrKqDUopRmnZyoQ2wBKEDes2a4AUXhBgxFFpGTxRSMLqTUU3tHLsCjDjdJvpZeuuQS",
  "key12": "3bQQDDU8w267Ak5J86dLd8FCZrYfLafSyZDW3WYiDVu8p8VrjVafVnUY14GeKf8nQQyz3FtZcean1WiRqrg28q8q",
  "key13": "5WPpqacFezN5LquCsD8SxeJ3P8nTMjvdY1ujXA9K7oNoSLfnSKxDRD8YUqvnnemkNhzMhRNWrsCZbSRL3D8ngzEA",
  "key14": "57HLMtpjBAUxtBRJgyxiSeBKFa6xe9dyxCUjSwAsMRaU9bhqoDYuoXLn2QGZkcxn18RqV4HP2KvdiM1t7L9udGjt",
  "key15": "46MTMhv5jx7BNnFtEDpEjGjSjKgRumDXYN3g3r6Tk6KRHVhPfCDw58CLsPTmMrGCybyBSH2XpfLroPYuztngpkSR",
  "key16": "2DoG9Au932x5YNzdVcRSdeUtLJG2tgqDBKZDpcAwHY2GZ1MHuy5tt2ztuEvm8kLZVtdgg3YXm2STPHqMVTr25RM",
  "key17": "yiz9ihom79NVoZ5PAD5h2iGSp8NM5pKasTUc2FAmSQyho5RiGuTNFViCf83XtX916xXFBsooSYycX2G7jibr5Kj",
  "key18": "2MGj9HDRaSYiASzoNtGseTMcYwVz7ns4mUa8YUauHQvk6BXQ8mGgEkYCop2U4MT3qkkKoGepLsDbBukxWEo4ETRm",
  "key19": "2BRZprmh8sGznvb3NNdjx7p5EQ8cRN9kmY1YbWGA9b7fZpPbJVhMWDAFJncmX3LLUiQ93tpuayQWosq1fVCncqu8",
  "key20": "5hU1Pe9W3iQE6CM75UUdEGKmnGJRGM8emnYUcx1HbLDm8GBnw3xMCV3gfUvW2X5rxiXTG1vxdvjrtoSJBE5vTVLx",
  "key21": "53SbPgXMHFHeRMCapLQt5PdGoXm9y6DuMxNJQphKGSDz53ktwvSwEkFVEQZUNeR2igDgkCM6xGwcvUmD6Yt4Q8ZZ",
  "key22": "3n7mm4S2XDoPT5TbupJ2APA7csQitahW9d1yvChKkCqNyj2hUiVDhy1guEfTpvfKv35bJhGEBYs912uk7idKKWTU",
  "key23": "4omRfkk3PCNWbaHnB2XwsXKqntzwsoTC3S5pcc2GJQNHoJj5YEtV9eAQ7p3EnqW7StvnwuGP1aWr8AVwtdcYgXVG",
  "key24": "4cZxgmob2M126pFcDssCcE17wgwpqfGX6tePqoQRoawZLH5mt9ZrRiPLj9HSRDqppcsSXybhVeVfeU3gF9HrqdB7",
  "key25": "5tTY7NTUnqtThggWzv6M5VfMjtURZECbi8W1GAJ9VgRXfJ7QZHicCmdbeJ8oCu2Ngz92e8DQhxYjRt5fidW6Rhd7",
  "key26": "4cUM7ifFCkwbpNxyPWqmeLaoPGYH3PZai7PXyKAMiJC2mpi7GMxpAPhobcKZSLApgDuQ38eh8BnHX8rsW6K8caER",
  "key27": "2Gzgxfw5YDvCd8EWKCSv54bVJbtsBRjywp8aoRwGH31VMGCAe8WxcBaYvf84Z4gqphBhHChNov8HMVcoN8ug3S8k",
  "key28": "5vWyRmgU8ece6Gtc1cek4FDSJPHF6QyuWdmy1C7fTHGC7qTKhpZPygBCTxt8CD3fMgp5YYupBYQBYM81fNqdSTfJ",
  "key29": "2HszdVQtCbBbZ3ammdwJMAEFnsNfwwEYu8syXvyBsAdA3jyjZZCsqMMMJzNEVHhYnc6PYNCfNpxf5V7M8oRukfBr",
  "key30": "64sAqkU33ybLqwdttDmt4sP8JRdkTnW5c6HWfToPxhXTSe7bE2vbigNmTtGqodkH2WJyveAWXqWM91zhHZPd1edy",
  "key31": "aq8RY3iKxrxRe1WjBsBKnpRetQ5jWJStH1YLYHXSGcMzckweHjJB9oviN65sPGmiGLRf33gNDPqseTquAK2PYrT",
  "key32": "2NvWihAAf1QsqvymjdDpPRrGJfRChdeorM3pbY9rCjdFKRhhgxrpTo2G6WGNReZyHCQRPUixwUYPiqxcLqMZ3nmM"
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
