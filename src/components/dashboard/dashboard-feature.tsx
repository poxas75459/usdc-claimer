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
    "64KUCu41U6uMAEggNwyr1FuB4EK81JD2wsY9qaMYyinRb7SuptpsQeJsuX4GNVPrqiXGjmqFa4nM3AQwrUQfn6Ww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nBPnRcRDpmUJTmZL6tZmyB2K55TahFVJGWFpabi4yvTyc5q5StwqWKEabHMZ4tQnLAtFGiN5caRnH47tDjBwfa3",
  "key1": "4Pn3q39Zz7rA3uzYnDoD8QrnB4LN1UiZLE7p83sQGb4L72ab3GnkTryq3DMBsE4gq7YnDSMZfjuL4UYpQD2o2Noc",
  "key2": "2pFPzHG58N6deCyUqr3DhfTbS4mbNkwMojCqsFhSg662Pfjeic1xPKyHBu5YGzp6EWqaz1f5VB1ATCfNzxCHojum",
  "key3": "2cXX47MaiUgtvYkJM8gS6nDDVofy32UFen9hUSbvaW2qCxBAzo4mEzEJEsAqrosgani7UQnATWRnym2GMsCaYi7t",
  "key4": "3wBo4drwSByns4axWFf87yc6DF3146U5oLLwfGNmKAHm1BZzCtpFKQ6VGLjGckett46VWEzFKHTjBdkeJVK1LMxE",
  "key5": "482bBA3yZ7RG5XrYD5cG9AoNyoXjzf9JPo4k2J2h2cbAPD3Q1pPSULMEXeW6NX4yrujFVVzUbRygAPkFnWd11tWi",
  "key6": "3DFRf9d1z4ixWX5onE7Wj9gNqhU6hQd7xAUqMbmrd6fsxXFGGJka3MKNpgDwXHPsV23D4k5SJhdituJAzfW4paUy",
  "key7": "33z8uH1kMqGtDy2E7JLjaoy1BXZFYarmuKuLxdzK1YKdpmJhNDp4Xxp5YWoiCEqCow5hvvtWdB67aabE8TdoDEq8",
  "key8": "3nKW1PavgfZcocyDNqsiMRnZo8kHpQpYXE6G1R9x2smrsvLwuty5Q8nZnR9orCz5ihVHv6BA5KggzU5f5hQMUXeR",
  "key9": "4ocyBUgPvvyW4Xd6QQ1dTDWKC3DdMhJcp4kMizd37z3TJjG23L22ESMtwifyEGJ2Zhj5AUaUGtShTYtWvWraEQP1",
  "key10": "324VWnPmn3rEd2FSgLCFgZjWLG4ZfxYbzQXCCAyfsKFXcvb4c7KfNKUhgNEuTbzfHk6TP1vaf4hitJCFtSMzAdoW",
  "key11": "gtExe31Wenz8cm6PFieAkPqYL2c262HH3h6T5c1FfLM9kHmf3cebjQ3dKY8Md8K9W3B8xLoqm2fG2qvHiZTuEvu",
  "key12": "CmXsfySwAvHc8CP3ZZCrMh6qLiZVRP6m4hWj4CEheGWhFfNBa2uHcexBfvHBFdjriNUiELQovcrKMKRhaMTzSp8",
  "key13": "3DJS3x9cUYPDeEGgKhdeWncoDjDBUZArytwTB3reJ11GnaJEhuw1UsEZjNpvRC6hxpBteqN8KEaCyTKRMXaWyj1E",
  "key14": "3VVMERGgzimvJJstMCyt1XDwd8AcNBNWdxbcYtADAzzMRsvvDNuBSgiN4ze9r4xSXKMvhiyXXduHwYXL3WXBoYr3",
  "key15": "5fMf4f5QozeZzX9BcAydiEadaN9T1RpNQrGBpadhFzN7DKrHDHnpdKURyNk3HcWUXAev21srMe5Bg12Q3AMK1vfL",
  "key16": "4gHWJKr75ta1GJiCg3eZ6tUDHZbxZZkyEeurn4Wx3u5PTscioz37uKoHjLaRPkSJRQTfKcUbDUhzWFLxX97QDWfg",
  "key17": "5Zvxo8ZJ8w4AMvgi9487omQoy4YHFCTqdrVmzMThKCqQJ9yfnsxKmuYodrj5ehTL4nVWbUJcDase7r6bA7zK8op2",
  "key18": "2mLhRjmdGNk5UKpJwJSrGauUo8VoFrABBuHuaytC92Kpi9MsHKALJNVogg3pBpEqZAtjKmg1FQ8c624pohRBRrGt",
  "key19": "2wD43nsNhQCHZdWtLsHWApdz8kfjmav964RnAkKW72VyGP5XSdA5yu48HUYo3B47qXCJpn7Xi5keiV6ew1GBy84",
  "key20": "wZrZWjDZV6kZ4qPj1rK7a9Q4AahLpySv9bqAH64SWBiDqmhGzLsw5Lc6px5ug8qP62KPZfR1eX7ngx14xCnRhjd",
  "key21": "21ajfcL848JnDpvnb6fJ2MWGBkHkKh7Vy2f2nPTcoErSLLmtrdmCVQZ16v65dpSUFX5CKYFSjJrY1yEQ4iRLjCn5",
  "key22": "4dLWMGhjitd7zqLtZYgqQ5FnmP7uFXity2uWPi5T4gXzuLFLWbNR71Z2h4FqxuHTSBL6qSSAaKAFhXqh6LMgnVr9",
  "key23": "4xHiFQ7vwof8JuLShBJYEJNnrDqMA12wbFitrt4ujnWwW6ks8buMtfLY3srsERUuYCJE9CtPnxzeutTEv9P2ywhL",
  "key24": "1B2GXnbuCqvqtZWETPM91dDAeXkeUkoeXN529hTatY3cPvfYWUo4bauuTE8MbR54QXfLXxv4ZTvfZTL1vcRRTHy",
  "key25": "5jYAPS4HPcLk5frfpgM6Xgwki1jM9eEKEQxghT2q9MQAqTQyHcQ5adWsc9xuPAeydrzCETgwsrEtmnjqUdv9gt5i",
  "key26": "Tr9AAv3xYCMVfUkWGQvjNMTrvrNz2fYmeBuXA3iLYkfFWASwGupNeBVFdipad4sDeT1qVuU3fb4iQ6yfttJ6ptg",
  "key27": "3as8SoTfyX7WH2XFkNhN5jXnUH5GvDcRNdR5zqgzYemjPQAeEBT2NZonQbaNE31NDDREAqvRetKxYtzD9myRZQh7",
  "key28": "4TnjrGB7LPNx7hxdAvcGrfwvUDxQiPDt78MhiW7FSAZjEQkq7xa6P7Gng3bjVDbCuAfWdEMHCiUKXSQ3e4wFzSS6",
  "key29": "gLojbUDmVtzRMZYtEXApHYArw6SWSCnSsaGTKWEzf2eVU5b3kYn1fwgZSpaTe57egkDf25iFnqS6Wi475muzNgi",
  "key30": "pKwXYFKPMW8h98WRaw3H8Xhd51BvnxdTp3L164bnw2Y9d1W4ptdNp957kppCucwrJfMmgboQ3NZ5SJ1S6H2GEqx",
  "key31": "8fdWZ4dpX4oAhnd2MyK2yhPLTvxQvZqyf89m8RgX7i9A9CNDS7i1icRj7Ppqkhvo1rrsb2qRRmkPbumPvyPQZet",
  "key32": "3qY3DN6wktQ5X6NZfL43n4wqQ3upPAXJHu36AZZ7tR1vMDGZfkwyFaFHMWG3CpvgrNwMiMBzPJN2jys1g31C7msZ",
  "key33": "3iXq4SVgqzBBRdoAWacJMnzVt9FxkfzLvQtc5kTMPEhv9F89MctgZdzABu8GdrhrVDyTvNKh3Udfx34Y5166pmyW",
  "key34": "3G3xzmR8eAeCvmy2wyPuHr7bmhLbBiUKePoyDh675JT5U39tFUqYN5gNVC7jU2D9rBxY94DNLM7uCiHhsJWZTDQa",
  "key35": "2iYo3EowLq5eBM2GNKkC2fBEBNf3tHRSG9sCe71J8mH5hH9T29nZhPqUURn64uCvoFDWsTrWcMgEJ9QyQQRjD4PC",
  "key36": "36uoz6fv2sLWfa3ucfUo7DSNHgUV7Djoe7KLdgbmuqDnZZAgXhM5pFg6nyHtbLQvj4gAcr4f1QHnjeDr9tegHUs1",
  "key37": "5EUH9bxJYWCQUG3EKdTYTLpF99nVoPaw6kdYnKdqy16hizPLMZibjUniJ76dUzJPP4P664TFxjKTi3ERNzwWyAoL",
  "key38": "5n5M6dTVnNP6J3uzAcGp9Hf9ZrsPAxu3i3aJCBYna45JEjZ5RxWDmq3FC6DbfuTg8qoH1atQ394gnHbmvyf1eH76"
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
