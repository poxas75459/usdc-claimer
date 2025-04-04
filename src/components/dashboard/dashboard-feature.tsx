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
    "i6McZWaG1NmNG8YBvySg3NU87r7YkAGsvwbJ4mrLGjD3aamCXspV6obFpPM9AsChKEADi84BghhdQogybE7zRt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PMyrbaHHWkpT4GDrrXJxekiD4ftj7p3rcvwKf8T6xguyqiJFwY83H65P3Tp1SVPEZTiELyJiZR8ETQwDZhtav8V",
  "key1": "3m5Xaw8GQaSvbyt17LboCzZrSKJyvQ7n94rDrDJ1xG3qPqRePUKBpRE4jG3YXhJAeSxXEpmJM7QpTb5WXQwTvvah",
  "key2": "3dbXLH8uD5wmPxKfLucZCgphd3oPuE9WFDwraFZzFVCJ6WdAWrs2KxRXhWEZ156MSUkQmfqQqtaHGU3hczKmZSc1",
  "key3": "zFHaSVLHrrN8vnakBGnhsdNBtoVqTK4xuczDr79YNiuyNDuL9b31QLzzovUNMgcPSB2cbvJKQ8MUZdnJgp1mSGp",
  "key4": "2JX9Stgvxy8Ampne9D6SrTbPn29zmKJWcXqY7d85FVxLHPx9hfMeSDiYJBujTEKuTtwTnc42npGVyRgcALX8s1kS",
  "key5": "3L6QVej65enkozELVc7yXC3PKQErt5K6tw8GFHYhAATfWF73nRFvDoyKZAFezitxTepjJmPkZ115AJQt7yw5Kgxj",
  "key6": "5mHdBfUq4ViYUecGT2qv4jDbUtn1suEgiPQkP1N3ETaSEzvbPpBFT9p4VZ6H9xecPnTB775jSEJnGP93fHU7M9am",
  "key7": "4ZjiLuErV4m3CjhNR4Jb1ZEXc29XDGBYPThrvubaqzSV3Y16MxHjRW9p6ngq7qewdj2kfAQGTDdhKoDU1Bqa8MxJ",
  "key8": "4UKW1pgSudV9XCBcLmQLUGpxkwHXSWk2zGikFybBeJksKtcgi5qGjfBz5gjnyDdyHZ9xK7zM7iQqVx9hn5gYyDtH",
  "key9": "5VLLQwuMhnyzSADmMbPsk9mH1wTbB5Nz7XfxT3Nn5YdYgdgYU7c1gx7Q9qMankTirbcMk8RvjvpoTu1eNGwCav5L",
  "key10": "3DTrVgpHyyNj4SBMJioAuVg66ojsx1F1NZgwKrKWz2mBHuqKok4ZJh2c88dE1xhaKKZJ3LyRtQQkCNu8g5Vc6m1J",
  "key11": "2tBghqCyS2w9p7GZXz7Zv8DfogAwFVp9eFUfcTbno8ZR1RrDGjVDG2MTcNasmuWnjc4Zu4pvx42m463NTsQ7Fp8o",
  "key12": "4VXxiwGbidjWgJq2GxVotsewXwNk3FzQujqrqbp6iySm2RdwPi62dif75SAifxYrRyHhMUDXB48gmiNoRBKvxtct",
  "key13": "uM6CLFTDWJYL3yjnEFKvfr5JrnUvWqXnnBAxNk53x1esNSu8F5yVbUCgbE4pLyWjCgK6NTCFfCmSougRY4KEvLR",
  "key14": "5aoQuTFLBNZGBVyGUJtFmvfcu6xpcdYjoeSbDugqQ7ugEGNqGFLKW2fEHZZZUuKKfVC1qE8hkGEnqXFAfD959FsE",
  "key15": "5FGn5R2HpZ78KyXyyqcFAVPUuPThpQY7BpfaJFjm8f29c5qkn7V2ApvVWjBUNkfQuxuG2omBa31R1Fkk8kJBJceB",
  "key16": "4HopzMFBXhZQJ9KGxPQDEv7nbzQ9wMZujBs8dwwYggt43QizhwCBgA9mfbQecs51TjxknoULiT2JEpYDGWMKsPwb",
  "key17": "4B1TJPS6wMKpZz14T7BKn2xzgNrnQGnYdyrLewL8ppcfYURksetm4bF4DD8QeovhsHWJaKJPdCeKT5qoE4PRcaJZ",
  "key18": "2ZKmCEECCmbFRmXy8TDAthFhkDWoJMHShK72M4tGVePuuHTPwjdW68RHFD3RToJyU2Z6nUMRB1fwxNtkT8sHYZBs",
  "key19": "2TX4x1aL4Qo3GarvTrK1knggCRc8BhiscZCJyPkcQSk4ettbuee2odmnut14euLQC5PbX5bwJyB54ooufyMA16ic",
  "key20": "4sLLGgtJduszDKkmijXyoNrWvsLmifHHUNA2LGfpQk4q8D2ZQY8nGkZbNtMVBidCxeAbEHszUxpsNExNsBj1K8QC",
  "key21": "QaET6yConjwNNmHZKz86NmNh2au7zZQCH6qKpi6RwyJr6WcwP4yLqY6RHsG44hrSv45JJYXDuyGxGqaAEgy3qHc",
  "key22": "3iDgXESyzX6JUoM8L8FrAeNbftmV7w7fd9fTMzLRUgj1qgG2YibAZAkjY4Aj4GfVgLTjUyxJTNRtLQoU1rbxn1LX",
  "key23": "3BM4YAvygFYL6gR2fo3MLW3NXPgGCgJuQfkXj45sXeefiuJQCx8rdudjd6kDncZnfTtKVaT3S1Y5pc1ocCk4xPrJ",
  "key24": "2wsbLLpQKNtHydYUNZznTnPoHwK3Y5K4uZyfAEcdedJkfKqLtu9M9dDBH2EvwpMMpoFBQhprC4PqfdHwF1q4qHQE",
  "key25": "46xwpAqBHd9inJkPw7m7p27E2cWjuUm6heciy6F7rSFqQXKSPbDoDU9B2izC3W5W399jhgUK4Q9NNrLjD6nMgj7P",
  "key26": "4Wji13moTCUQMu31bcZizJHVfkvNDsksBaBP8stwBCZpZWzikEip6GYmoX5XHH1yv8sV1kTmg6HeGS9qfUUnDnaS",
  "key27": "5RXZi1bW2qMNQQsdkboJUC2kBBmqPvuKHpfufPpxdv4a472qfg2QAVUZ3mWf4FjHwR6GLremQRRLHgrtcp2MAd51",
  "key28": "3Q2jgz8ves4BsF8ShWThqYZKYTCZWPHrvqeK8QznFtichzPkhSMHn3hCSCUZckUcZV8GvAU5a8wv4VwbYaoqi49a",
  "key29": "4qHdASmY2er5aqD1veUzfb2r3vy2g1PaMVvS6xTGGobEz3STScajzaCsicifqmaesskk9G4iXJLWbDnjR6GsvkMp",
  "key30": "425BxArqS6hEtqBVDt3RhDG9BGqMvr8SSyq3LksRVeJ28kXJDfFeSAB8xS1HpUwY342x3UkHDhdz3Qx6oagQM8n4",
  "key31": "MjwZZd29YfQYcmFcUvPcuxBTdohqVAGUtHsULoJmZGcbEXW186ncrqDLRhAAvJEcemi1r9Vy792mmf4Nhfxf3sT",
  "key32": "wBkwpUG2wHdZxNTD2t1WUqmM98t8jWapFhCtDMk3864AyxTKh6RF1pwAe1LhDG2XiS8UjyyMbtWtYN2oGnGK4os",
  "key33": "63CQWBAEkbc5tMbmxFvgbBimEL7VsXeSdUqfWqBvCLoTyPwmPW9yo8VKsdUpHbNnWpnqovKGFG96S9BKXpCFoxfT",
  "key34": "5yT9nC8JsC8DsNNEnYubGWEbo8wEY2goJz6Tdx3srt3zHPKVeUEDWVuC5tkRCLCEpJXB3JetvAMvphz1ao3zkqqc",
  "key35": "3qmP7izomtvtCVMGVT7vfD5H32GDL6GMuGRskPdma8UWLZUkQNSgXuQsZUXvkUqaD3CYgpG546t9awDYgB1RxDpp"
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
