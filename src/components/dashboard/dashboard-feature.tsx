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
    "2LuuvG1rMfj6JnxryRBniBx3pc1ZnouzhykVcFAe6Nu967EcC1BApqyioF6459KenbopDvdJyKm5RTb8JjQ8YZeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46AESojQjPnfYy2jfgPer4x9uhXUsWpeXKq3PEbdwxKZiPtnvtgdj2ByT7PSFFewd37cqAHVXiB8ndFu67SswZ82",
  "key1": "53Da1Jgmq2vSjna1F3snKfEntKL6JmnrJgNcD24ApQD3TLxQzc2Tn52wMG2LdCA5o8rU176PWq8vtz25bsK4La9i",
  "key2": "61sXBsCjxw4P77pirka7RgRoJM88QTyxZrn4jBXX5TEBvCrFeHueQL5QWqdj7Qo5iPCexH2iNrqDE7JnS5rgnVGu",
  "key3": "4K2rUNMQyYQtFv5zNjaksWseS6ceV52dRSTDkV2QCPVcXZhYbyvuCQyUPrkdhBkA8Yhfv2kD81y9wn83d6vGcK2x",
  "key4": "5F19i1i5ZEveF1pbc9rH8SkPrwBg9VSKmhRwZxYQRL7TJ4qpw76UU7cuuUQrzYzn819paXJL8hmG7215Ksd1jvHw",
  "key5": "5hHy1ALmsYEVPcQhoMTG8rZKwb2R29yH6RyvxJTyJJtdp4QxAbQQAbsfUKasBvp4f2pK1Pb1Qh9VCDHRzfgcr86Q",
  "key6": "36ZUwZix9HtyEkrwzzJKsddpCFcYmXmGHyttuVAEXqozVPcaHWX3NkgWUbhc1vqR8BaDp89hFu2yjfzZsGNXve1f",
  "key7": "3inYnRMnWyXeDutTCg435EkRJqydMgj9a7Y2q5Pt8mBEAkRmBjzb5rrGWpjQnFudxfBfFbvXXZfdLBMUQ9TWXu86",
  "key8": "4uVAeT6J7PvDseKQNUBAm5SZEzM4Ti3bmesWHRYsoCqe3wqxNFedna4esFokYTf4MNYoN1N8sExL3kzyiTtDvFXL",
  "key9": "3YhJb4L4enWCQMsYTwWSq7TCakSG824B7j6WkdYwAiiT1hCYKvA5zGjwYw1EJtpkcd3x7x18sYVoaiyCj1rmpLZn",
  "key10": "4vrnb2w7daACTPbVAESgXjpT2aG1PqT6ktcTumksB4in3nQni6ojmDBKaiPkeLJJvEvfrBYKDnufxfzVXrHyFsye",
  "key11": "4tDmXkUdctdosGD8nDRdMkUPkS7kS4XQtBjfX2YvZpfA833XwMDu1StdkVHrsxFcjK4TyGFUyBaWkhZ2CCAb5up1",
  "key12": "36oJ1HNmChw1B9NifmgaHzDaq1gNF55xqkx6eYQLuSgQUPrZMoAcGA2Tne7sq3koPh2GvcZHwzrUcGTaoVWmCgno",
  "key13": "2DqiLUuU672fxiD4rbzaTBsw55mTHD3GRzCnCuZ3djS7QAhWq7N3zw9HT84ozLT7fc2RsWP9DPk2NUd83onmZvPs",
  "key14": "48iFVH9BpgAkKRaNRZuiQHYL2A6hJLt223jdY2mAo7EVey7ngYUsHUDbiKzc66ba3JQi7wseLjrXtUA1z8MeK9ip",
  "key15": "2hw4jEQqgrery9YZfh54rzc6Tj5dLoSdeXRUycyZWpnoEody7wbzbt88NfgUoD4U7kT1CbRwyCENAvQSUofniU6r",
  "key16": "4XBvaWRYB9cwNUW8DPFGhDJh79B4ej8Px2p9ggjm5D4SV6VRw8dsgqdw14x8HdeW63j9PJKaBoEhTYa4b3o7rzfa",
  "key17": "2Y9Trqz6b6AjfwwW76UfvxzuDZLuj5LjuHeHvQfA3v4WH7Yiojjt6UtqPyEeAfJo9XePgZtixs4iETmo4ZcHeJYC",
  "key18": "4DyaBA1tXuJBJvKjkZv8TVvoEs1bEN6WUfmzVPzFqiLrCx7Vg1Yfsb32jHQMWBzEUqxbyAKC5zH2MYQCShEUTRnb",
  "key19": "4kjT2qHj2pegFpSRwtWudeLowt8XEMqvsEJAtKCLEHhBZudmoW8zPTm6YnHDuQsJjMLYxx26aLHehYbfohqmfiqb",
  "key20": "5gsbaTczRKhFBVo56Ufwey99WXap6ksnHRbYpvXX6poPtnWuduRCGqJ5Qtss5fcv3fv136sKxhrgVxe3vQ91Fd6H",
  "key21": "4oqN71NaZh5YcvdgTiFsnhJkNdoFBzWu8w5YZLkD6eeymDGcUevb4ynn3ApkbZsRKm91MCXo51E5qFUdEjAQboHi",
  "key22": "4CgcxQY4MpY8sXrBEdsVZAZs1xFE378zdXAviexQUnZYqrhMEB5zXGw1aFwhzyWeXTswA3QCcaYVbrQER16SFttM",
  "key23": "3EWSUr5h8daxERuPzhvXBySK3ZAHhtWu8Q6hgR3EmujBuXthuS1Vyib6QMwEx2XiftQjpo4azdKGyC9A2NVP5x3d",
  "key24": "56ZBRxxzDrpPj2iEiMf6RDkPzYRjHz7Fg42kF9P6Xzsxws8ydaicNkeeVteksHfscSPj8eMnNbHGmcnzzybAuAP3",
  "key25": "5ahDgqsMZyXznfDwoWoC1qAVMtxsHAsPVoC4Z2BCEwmJyNx6YR2fuF5ZqBezjVHgqyVamVnmYqFxu8geHHmHnYCW",
  "key26": "3BBd2gozuJw3mVtAA1WJf56XjRNTS1F6z6NHgHfusXydXa5xTrkxr2jQijeT64hfWeGTBnRteyyuFH8harGZc4Hg",
  "key27": "44PCAN5f7xdS6xQaR7jf5KsRJyfEmfM46twyvqWGkGnSdzcGQ8yhxWDgVnQwPtrb8nE5D6AWU1UZThz2HyCjKwmM",
  "key28": "yVwKx4oBV3kT6m8pgq8FXNkyrBoPfychgJPhdUeR35qxd7xfPVhmDpzUKZkvjF7NMB2X86QwyqjT6mbfjCU3UnE",
  "key29": "5Uehazpjj2zHkEV52dMFZMUrySkZTUyKTDhZGdBVMF5bzTsdW7Le4NCjTygVGNAk5Uc6pcrGrXibijGqzkpX6wLt",
  "key30": "34mKfjCi1AUphsm8Eh4KcgWoy3CXhEtaHNHaWLuYZV1otbnApnhSR38TctoHNptq5MHq6iR8yBNqD2tPtrJWSjwp",
  "key31": "2MG8ybxqsemyqt46idB9omfokccFEy7ZcveogGb5CmqCQN9D4Xb6BfMrXoYbXvUha6T4oKx6RLEYH8GZK5fWxez3",
  "key32": "2Y9wNcr3knbBMuHtRmuTkJg4XdYJkmcNobyh2Kk4XmTeSmww2LeMv3eMiQAPwgUq33D2EHmPtbYivEF5fB2MnxSR",
  "key33": "2ft7jjsmx8NxPzNxvCgTxBJaiZP3TdP26JKRy4iJ6ncFyKrxug7tSahGLvTizF2tXukNP4oKqMRBdCca4nk8d2mA",
  "key34": "3G1BQzscZiXn7tJorVNVszxdNYCRMxqE6whsBXQnqvPq6XETwCSFCFSanadZinz6nXUnTk3v3QnMBuvQfkGNNyqt",
  "key35": "bFszTRTNrMm27U62CZA9T5htCHoPwNnpnopPtHhj8d4hLq8Vr2FSaKucMjkkTZM3q3r9m4zLyaiMM8qkAZThqvp",
  "key36": "3ytSES7RKbSa2douhhUuSZXSkpLMxXJKdMMRK1WqdTwtB3cXifknxYqSR8z4ER11MP7VzieeCPvzfpFMgpWXfsZz",
  "key37": "yiuj6TzkvYCNBy2SDHvSE2oXY7mWzf8kJu5o95oBXSN42oBrN8mjfKin67V5ZA1kYVcNZWQ32SzVyjV9vGi98QN",
  "key38": "4yrFhN8Xxc8iZA3d1QbGuspKudNAbxob64zGxdsTNCsAx4fNMSxqDprT5n3cZCXgmJ82X4t6zRRwjwgFrEiJCKR2",
  "key39": "2TFzep2cqWvaFawBg2q3UDQ6Mnri7V6sg3FsRRZxKx3Awojb5REW1nBQPcYMR88beKj3SCP6mXWSJtZuZ6B3H4kG",
  "key40": "4AmvixPQbJjoNHQnqzXrAXmdDNhsdkD5YBsMRENzhLXw6BkkUuAbDWNZWXtevcT4SYkKpa6kmG7KzaDAmzqqbd5n",
  "key41": "3toDh1NAp8d7Hr95fY11WwPwmeUX33JWD9GAkuPExTKyH25QSDpEnFGhyfJqg9PsgcCNmds2C22LA4KGNbdGncaw",
  "key42": "33GPPm1Yp4FQtF2nM8omtaWdfhYyRmZgWPAnoSHPSZEPt6ha1VrjZ5NVtNUJJ5mLGmN23qAFpg1a55F8Aac18Lus"
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
