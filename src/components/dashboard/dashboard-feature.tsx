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
    "4NPn9Z6p8HjkhMBu9MJ8L1Uyb6VmStqE8BTzqujDFK1syeSrex5J82XKyPgjpsRPLv7MRL5BCCKGGLG6uoyMLuVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AunxzFnsCz7jse2xLNGGjHpCLEUdGshKQw85BkrkpgqjJ5DfqHfFKWcSvTkLPVovpT6vGLCM9nnx3YkVEXMFxHe",
  "key1": "3vjVgNnvBiKCf6pbfZzZRCAhGTNyQvH2GWTkVh3L7SzLbmNjBzCqEmNd2ecDHzWfEwtLZFmb4ek4zuU3hfwDfDY8",
  "key2": "3qrmb1a6AULiSfDc1AVhiQhHb5qs9xgU7yu6eSWptbhmFVjmoJeztnAt5R7zkKro88XKgppn7gmGPkzJseyeZXUJ",
  "key3": "2hStwkJVipPZdHDvwwFNWPug2eK6GMbQYaM4tQrp6xSsKZpTWgVd3dGpPdcDheGnCkpmeB55TAXxgyy3WyPecZTd",
  "key4": "2wYvXUs8bJKj1N7Ky6yHKd3hK6MLF5HZS6tdvMgdFoxAEiAaQmxXRo4W7CksT4W9vXdE6cFRZ1if4t95Jen27GRD",
  "key5": "5XocYraDyC9KyLgBds7otdmTzV3faKsfkW2B4fbTHz5eYoKkPSf7D4RsMgoGm8joLAd7DwVE9rnf24fQQXjjCUH8",
  "key6": "QpsDVkMxEpVfehVRoGJWRzFRsQ1TWgnKRNYsGpBYSLhPPbdDpo2ypA4Dvh4z6YXB75U5EFW8cqvRFCQ9FwtydQP",
  "key7": "iyUhpHrgGpqMgaGSSQwYbE22fwRQ1qCAh7GwEtTvrB94AjGmDWATN7gEjBu2TWGudUfmJiFFHUe9cmj7PC6HxvS",
  "key8": "2f8mjKjGt2kB2UcbnisZvmZqGQHtYPcytLoLj97EUeU3wCYS3zAPPkmj1UgBae4tk3dkV5gwFHCZhxtsx1vgFk3",
  "key9": "pQ9vXSTzzQDcZogcbgNcJ7Ti7wktrp4dMZRjDApTmNNpxTJhY8y76BVUtVagDmrkDoHtM7GzEBdGJZ3nv7mGS5N",
  "key10": "4E8GmorQNLS9qzKK6NhNo8QD954b3bTVJEhXH6WJqrWzzY6eVJwYWnMCNTpFAHfBdA7GR17aEuwdEjqyGmMmneKd",
  "key11": "76LqBXQhp2WU3iUbHPoroTyqWWu4HLJ5BSZ1Pp6KzwpnGMHq3iR2prGqfqwW7Zf7hcDXUwVo4ffPvK9tgowRLpi",
  "key12": "48TpaRY6C86DwPs2RR9ejNDUFqbsDtervhgmM8yMZLqRWgJ2YW15zVMBAYi2dEVksBTA8L6kum7u6Vb1tTXfB5WU",
  "key13": "2ANWowUag1DL7FKybyd4isdAU4k44yMS1k9QC65L16amGZTNrD3bWyRJAiqM2YWRaxUjg6hmJZTsC1s7ZTaPaVxq",
  "key14": "mFgqEtZqT1xFUWXNHF1V12Ba6WAH4a2NzHaJ1Fk6yoS59ZRu6NYX79yCji67Wyum3ete35qYhzszxvyE7Acu8Ny",
  "key15": "8PhLfEdkytHVrUywame6EdNqSSh2grM55zCHhASYMJqonkgPxjaAh5nr1cPgJM8P67AJroVR1UU6B9pWj7Edrfj",
  "key16": "2BykQsNmGdaNPqXmXFQ9FZfbzXuc9hnrxzvypP5VmTTh65EEgLWC7giqqhEdi26VJV1mvURGQKk4tMJUKEJLprfz",
  "key17": "9JUoUbo4mCX3Qs34ZkJHoUFa7p1ZtfSPHEDXkcyQscf2ue4uRNAnDiHs1E9S5DZM6NfffDcHykT3cdYuo3PncLh",
  "key18": "4MPrVBaqDbRqDmPYpz9PtkT3knT7L3A6GACGcPGBpvtQXcyyWTzC9JJWahjKNo8ZBmpQFvN54ajjxRtwVQfUzh7Z",
  "key19": "k6KLtABmvx1BTYWqtXtJFbUQzpfU2txtjMYT6uYJHnv4kjCuY2QjED9oUTiAALfCmEatda2ry3B9oFJgSWZNxmA",
  "key20": "3kkZUFHkhAEcy6KhvK68Lsam7xczTXBxnwUiN8ZAV148UDjJ4mFy4dbfJBqkJFyRy8zfjKrhx9KWL7KcQSjxPQmw",
  "key21": "5GUEJKJySP6cy7z4iA4zfpdMS7cJUcJeLMkEWj7KLQuJ3cSGYoMvLR5MC5Env2zHidAaNDVmCCjxDNmJqciTSSHY",
  "key22": "feEvSEzdadPB8avHN6Db5UPJtUEgnLz4PT8iMaHxEH8cNJ1h6892J6TpcyRYMKjN2kX2HK74Gt9SggiaSz4e23F",
  "key23": "85tqGm7dX5jQstBWeCymJaMyC8GVeoFiLMGjKw12XeakgLSBYmiFiKHoQ2cWXWxhey2MTGe3unHmQj4U5hmPLBC",
  "key24": "5fgsPNY66cipVe3SjMX2zdf4ivvPPWKGFoZtWxWn2nRax4RwKD82wP8gpr824QCmyRYnoCKRwU3naTEadQYsibLR",
  "key25": "668Kty37iiMHrJkpE7x7noYUhCW5GLZwsLTsMFVvZgnmR78cGdSnyYgv9sGVrLqjNDKPwucJ691GisMZJ9wAXfVz",
  "key26": "5MS54fa6N2qGux2Rkqt7jnFt5F3hXw9ozgof9KQs2xcsEKjD6hurrYz5pfTPDyexXADYnCN55qT2VpqCKwSwmR9U",
  "key27": "3E7WUEcnozKfQMnThK9yYZHr8NwXCfesPByXKWcTAKeKVMkY9yADWVZGxhxdSQRYtCc58x6BMpQUsu62chX8q7rQ",
  "key28": "4p1sZMNBkDHkqXhsNkwKChMxNhi8Nj2axf3e7RLZSY85ox9dWTL2fpiALvnoAUnccT2vHuD2LbBwzhfp4Y2Jwuev",
  "key29": "5y7R9VU8sN36MpThCAkGSmnJtAV5L7trdnfnRme3xnWRuDt3Wnu7BkFZZTNFjov4eTTdvz1wBEKWpDM8NhbzVasE",
  "key30": "4VCB8kmSbdnLrcqzAmCLp2YFGSvPp3nXwCKfjwMBAnwmD3bPhLFPjKjcYHRqMzpgpXizb25oUfVCv7afvsC8x2yh",
  "key31": "3riEJ9W3EDrHfkpzZmjPE8Y8VyaUPRsotN3GtEwGEZPj5FWksWjkrkpHVdCrbf8FtCEZzRawVyW8tvSUrN6kH7b9",
  "key32": "2aiV1LGKq1oJ6oAEHzmc53Y9C5765EGbi1n1AX456UXiVd6GxnfaDbCCuNvfDQNKRJ1oyaeZ4qCjWyQrLJVXGH9u",
  "key33": "3fvFRtuBd7yCGM2dFawhac3rzWTvNE1mPEbgySPqjEpAGHRKYQU5FCXxUAWjJbxhMwVphnukXR75gKnMobunYoY",
  "key34": "2JvwEHWvXPdmyQwbvg52hFUnzVo6CrULeTRmx9yrqmD5Pi6kvzJdtQnco9j39qeaDJYkrsiexP96bc6xrBPjsy4e"
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
