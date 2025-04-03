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
    "Mah6MkSURM8qXC7rwpPGF5eqvm2cf4xRNe6KxbLyCLDdonQw5RkhoLjD5ja1dSuzqyAWiPPYJLr7wTmwhqX3bSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2evBChhA1YsEE69HoxK9WJPMMSBvwvM3RAj1VYzWE4sd3pDF5xbe1mZHaezEebRGvMnguT4sWj4wk4fHwcse4VF7",
  "key1": "3ASQSc5P6KYZUy8AgDCMbbCsffwzaXPwW829gAZ2dEd3iVWryTsDtFroCnKaB83jEaBJayvLsx11vrUF2vv8Hty4",
  "key2": "5JZUGcHtodDMdFtjKdoTwDKfYM3SawQYUdTUnh5LBPBPd72dZJzFReRtr4a4rCpTaiWKcz1cW8Y79cumcTCy8jxc",
  "key3": "3ak4kLN5SHEAZP43LDy4r8rsXBUfXLNyukwHj1PzfkUtgPcCi9FZy1v5ZWR2EmnbE92AfxPkhq67dUqpETx4DaKb",
  "key4": "2gi68XVR75WouuaH2YB5XsDo77kJtqmZoKwJujo16ZJ6EGWGgzaWAuaA2f8kPLUBU62uXqKSWniM4WfMjuZGxQDK",
  "key5": "YV9muJXyGB5gWSJ3WAecRrZkZf2ndcR4xihzCDJLG1MF1i1huFaxEe7sDqa4FhEitPgNCd2TF3f3LHDbxcJVzKt",
  "key6": "4BZBzmHMBVR2cmRpghzqzdjqA6aAS76EnWqnYFW7cWWaQcTi6dCJzSymGorgB5Lo43th1mYFjUgwiV4yi5jjbUW3",
  "key7": "2utSRYp1NBhd2avYfNC75bD8H8Nfa8D9NMJRdf593ohh1zyBDhyRQmcM5jZ1S9Yvanv9L6t9JsLGYGGAkXraLQLH",
  "key8": "beR3KKLNsJ1D3UWZuQNahG6MyDoaCvBQU1akDfRJi8315mgd2PjP7ai37yFNJHS1khkDd6ZCVBBiuLxEbvXKnqH",
  "key9": "3LgY4k53nzZWH3FFwiKatD5eKTqooduDF7cZ29SRKN6Jp3zWqoExekbnokNvZqMp3kAAuw1kBZCAgD9fsH2DZk1f",
  "key10": "5TCoKq8hXWdBfUvUZB4NUd3xEXuLQ97CwttATwcRo5if3KGwYUdhst4VPFL4xtZANNyqRDRTbyUmL77icNanAwHw",
  "key11": "2Y2tacetJRoDo6QWq3WTyxyVBgf4yhuKMN8hyk1JxSE2ahYDk1fmjt5K8mPPDbGzyVNUNnPasCAa1FubwSu8z3VQ",
  "key12": "LhTCsMSwZaW8S4z4JBE4ChHTm8gv3Zrcrci9YaPp7na1Luy4WpNcGwLJoudHdiRv2XZg6UBTX5DRZ54Ws5mzgBf",
  "key13": "5rvjqY4VYSQgxWrhAv5S3Tam8Ftivy3HXvzjY4AzEq3hWVzqyussPt3ha187bzGYSj9f76bP1QVCh9jGN6WV2oLG",
  "key14": "uZ8uz5drtYyHmoSU6yGc8ry7cFBPSycjoeMiFm1hHS5ShRGcZTMnGmeaD8EArn1egeT3T448SMfxytmsWKuGY4Y",
  "key15": "8d7UUUhXq7tWMCqsWBvyi1wip5noF6rD32bJLgT2mzHpxrVCaYBzrKChGoM4GxfUJA95tSR2Ne44x2KgXWRSb7R",
  "key16": "7C6iPyx4PC5d6fDGoJQnU4SWLFbaGiJkM1rn6ET8bzdxRhAjxaHXR8eoqL8u27kDuDoVpLRtQxTAMv7tr28EjSp",
  "key17": "qC4taAJU2NjEcJLNUoAsiaypEYTVZhVPddtzAspfr4GPhFnBwsNZ7drgaikcum2MCMRGstpVGPKocZCNnAqCcD3",
  "key18": "4E6uSrhNqLUof4D1c1UvNL2YPM3Wi7nvZug9yb41GKzMqEunYSthikHw96esEvmRPtwmgkK9ewnWJaB22fcRnCUu",
  "key19": "TUJhr9Nfgr5qvAcy31KgB8pHYsZ1pYL2XGod5CZA91nECbsZp3XaVpFJXV76XoqWYvGvJ5ygDyHXpe5gDgiqG3H",
  "key20": "4MDaubmD6Ng9XrHxQjj6vAxGawsEWRAVZtzmrxUSSdJbxnPg8kQC3XXTVpmRRimTdS5Yym9Wmh2wp7Ru2wydwF14",
  "key21": "4ggG3inKEjPvNcmfHpDdJtSgYNocuJuuViDhuB155PMnbcXFrSPepvv5ZqnaHY7H7MHRereevabLDP2aZvZV4NdD",
  "key22": "3QW3mZc1ey5KXqnABmEefWmCLzfHWw4RkZTW1FWyiK4LHPigq4Zo53tcrCPRqR68q2bTse5575Nug5ogSX6PZUj7",
  "key23": "3ytxFticA6GJz5HsBZeThVV33X9eyzguHSEFwnSxvmAzUX3g3W8dKX4G5DMG3mdn1PvCcUjDiKPXgzTwgWLuAYFY",
  "key24": "3rXcrAsctiiUn3WJ3qyP5LADAex9yXHktUgdc92Hwnq3y7n9wsYxF8HaQcc1fUaUDKUVMJgHen15WHC2Xekb7fnj",
  "key25": "3fznEchhEKyTsPKQecrAryhFzQwFT2V1BAJpBtEhHzzDhPUAQWeswAxrgsAr23Pobteq6N3iS2h2HBU3Ru4KBM9F",
  "key26": "2vK4T9x715ny58Aa5WN82s1RECb4QoW6J36S5TLda1PwtWyMqxz3NkY9E9vmDvJBT4frbwXgFv3uGnyBopciGLhh",
  "key27": "4obYcswa5BA3dBbHB7yqVzYiDQ25VBHNqsdT4JLHtCWKe9Mup1wzP1eAiQuq31ffg2mPUPFbkAGhr4YG8kv346n2",
  "key28": "2weGSRMNPgXcXcDJ4sdciUaydaMUGzMTseFaLn9VJ2Moiieaq2X2QfyMad2pY947i8e2jb2pcKJu7xqeWgiLaKhZ",
  "key29": "5G35kGN8XQHcE6vEMCdvVUE5E3sUPbxr3Scx5MaVpXG98RUn6hXXnZkCNGuJsbsnDsZ6HK315ZEjutS8uR3nbM49",
  "key30": "2g1YPPCgKkEPCX4QGZSHzScyPKFXpuWcb8S8uVgojfNiwLgBDHKsWUcvepZHbqQpQNz1S3pqBLSYGjxmAEy5TC6d",
  "key31": "61oaMmGfRuuAF7Hg8qt7eTQopzSMFsbyPUQACMSgHgWSgUwh7mtBxYPuUGycAfzApe6nsVmBe5f5PWwYhNCNyXB3",
  "key32": "2HsQyffjqLKbpe773NXmH8Y5N4U9HLjD1hq5n9MTNuWfVw92T9dFDuYuA32EnX3nW4UeHY1Coe6UeY7gdw3nJscN",
  "key33": "5jsLD6qHCLtpKzJaQpXhVUrV6CDD8cLwh3ZBFfGiwC2PCuqSYBkGQzfN8LywBb8kTS8rLV3Yzh2xFyV5DL8z7VGd",
  "key34": "3qg88J32JumYh1tD5KeFcWvKcFJhgqsP3R3bPKv6ZwzmVP21X3mpQMhM9uMKyPTvD9tNrFp9b3svdPyaZgdJceTn",
  "key35": "2YaW74VEZg4YwRXbhMCmgLkTc1CftRwi2vJ3BXKtXP3xmLTU1iUZ3BjTrF5pKVniCvYz4PSnZmY4oLkikDFJugqg",
  "key36": "3Xn8qWGCiukdbAQZeQFd1ThQedHkksow53Zk2jUd3KcrUbnxExBqjeKoxeJbVKKjUnBowiauYRdTEDVRFKb78waL",
  "key37": "5aPyoYcuDcZMxRkcxFPQGZ1UJCyAoE4Hqkt74URSYarRUPS7F1zPimk9jTegHPraqbLVatxSFBr78KT7oTPdjzv",
  "key38": "3f2TsvhV9WZxwhmiQPBd9yhxcJ6kwyTsCVryVWkDCXe4VyXCTw3u95YLvmEz6cGa3vVw48tzXs8R4ZAVPRdrQGnD",
  "key39": "3HebNeAQTnqGAiM2cpiWGWWNKCMWpVV9cZts6VT1PevjSb1evcrJEWJBiY61J5kNHb6nuuwfWByZW1MiYeq2qg6v",
  "key40": "5sbqH1qZn5sF6LCSvx5MkBj7yRiKD6m6GDKKdqEuf7ASanVFJYdW1uF76yoQ7RS45Vz892rD2K4oQMmK4peaqn2L",
  "key41": "3ZAcmY51F39o32c225Buzv7e3aDb8FBJoXJW7gKSqXBCR3BufA2654EbKpCJgauVxU61F2UTGNEwQ5UeswSW1Djs",
  "key42": "4qpER4gbJKRDuCkiRGKZda6SmcrZ1rHQYGrozbnc4gDhPPFtLiYm4QjMNV9P61BimeoEm6xvAKsxV4Cp1ByddFjm",
  "key43": "41zJnPX1fQ4ncwkpvFmxVHeVV89kB6sF4DSzBqmMmE7b2VufTwtZk3PN6de5oc4PZUJWqcqYWhfWKnWeiRLPeWKs",
  "key44": "M9bZBNwTUmkqWSxatt4P49eUdBapDhrjpwFot2eiq1pSsUdN5VycdAYPeKK9HbZNC9ZofkBP8cqgNoEwPvxivD4"
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
