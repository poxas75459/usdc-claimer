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
    "yRo6RGD4VwZGVcqDq932btCwFnWn3EN3Dyj9exKamq7JDaVMnxwZNqJeR96FQ327G4bBsYCS78Wz2csvaLePLWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q6d2RvbwLGRVKLGBLyhEMJmaQYxxg1XyGzfqDfwU35ygg3TTCv8ciA2BhxswZiTcCAivU9AvJ7MwE5fX86tbwVK",
  "key1": "3gg1vg2vzr8NPhtFgX5G1vMDqtUYQyEBRxUypsoJRLcniGVievgcjHhHypRgRomAKVvm29dWcZXeACoGSEZXGxpp",
  "key2": "3mK4gLciJFzy1GiEUJbfSaGCKB8Cgnyk52TZ5Ywimc2iRhXKLxZGnFmj4BR32xqmccHXbG8mKtFDwFmCCx2Kquq5",
  "key3": "2hf4i96y8umCTzwn7YcDxjkZNgoi7kiHD4aHmTaDb8dcjbtaMZF3DJzUoo2WWnLGAT9spWiY1KjRcFtrTUsYkcaM",
  "key4": "2jE6SsRBikprD1q6bGXeD7jqyrUD6L6P9fPkBRXxAwW4VfgVCRSwxcWnVnDvHFmBSnXByFHTE6BC9HkQAaWDcvfD",
  "key5": "5eUibu4PrM9zieVeyQwiw2EPw92GaoqDkB2CJBgZcz3HKgz9QamBeeKmWYx5wfqke8iJAjDbeXrxdZmtfPGLpYHJ",
  "key6": "2owhFzX7euakb58JTzEPpvofXx7KxiguHEPmBL7wrDfhVFP31rRpviTepS7oJY25pspfMmCe1MaxvSus3qWmwJgP",
  "key7": "3tUAARffvUWbDsWyVhZFRwbeUDQKagtyWbrhfh8Lqubptx6CpuR3Rq1QitgToZvkJLGdaFaWZC947wtKUAX6EtY9",
  "key8": "4HiFioUNA8D7LpNKDEEdVHVkv4KZFgnyfpr45eEwDcoyAaA868KCvzcXKUdDGDnRwT8Zae3BUKUjzL4WKHRV9oNS",
  "key9": "Y6jfLw1R5aemUsBbB5mHCbEEotNYNjmqeGsvGbz6JiH34pZdJiPgmL7VoLZBTa5ok2DP4592DuJRC4bEic9Kq4x",
  "key10": "5NVwnMRoPikmDMnf93wWGj5NncTU3rjDxBYwPNLcx9rH2N8ABXdDdTHnMjqhvGbsNYJ17G1fogULA8gJn97KUt56",
  "key11": "34XPQtH1nCUUkRwsPdePUE2hkoqg38aQPQbn77bSNsYDKn1H7VB8orHWj37pwTiJXEpx7gBpX1EDJdJ9DGJN7ZUT",
  "key12": "4GcqmD6t1UJWTEph32zHf9287qUdWDC46g2qVT9tZr7aEruto3nPbTjLFNQWABuK1NChho4cPirZDZ3aULqnobcH",
  "key13": "4SwvVmqGqFBnxXt8hL4BPdbtMqRNdLNqvFvPVm8YkkbXiSi7WjBd7RteBgE6GvF4bgC2Vgo77ueMb9MVtoCNcVQ4",
  "key14": "4N5ytHNrd5hyeGTVy1YzoHdtzFCnFBhhVpMhe4rvN2DygJ5aoW32wxJTeSnpzcYqWdQAFWJMSykFvUZN8qtpVxso",
  "key15": "3BPBQVStyT1VqMnTHXVDcR8tE8pqtTt892JsfDAzxwJCyxbAPgeR6F2hQDTQYKQ7uEExJ2S9XyAuEUkZyeJKodFW",
  "key16": "2ByEbuppnf4afZzdi8ooQELjfNgoG37bApmJceCbxEAMWMvUeQQa871evQb1oRWr9Rt43nwYGU8rdyNpm83WX4F6",
  "key17": "A1fZy8Z2nQahBNzVNkUZT621MY3oSLve1nVSUxwyDE2gP95Ze9YghVx75hTgwPdrA2nxbCg5A3kL63efXfmKMDi",
  "key18": "5ASbXF9koqddpPj9QMsUhtRTgsTdqFxGvS24152af7MAZavBbLgA1x3NzamczXWv2Ajdoi51LaPD3p2WWQHX3G2Y",
  "key19": "56L5iruU1o9XfqWsvcNMRMzdK2BF7pbs8rLRFtRpfTrNDKUZAuVJhkDjVDVSbCQwo6mt3FYH74SjV7kpAuCJkhhH",
  "key20": "3EYFyWBJSUji4ZUbWmFgScEysosdH5uB2W19abGxCnjYxo2nxpG6FZHT31kAPJXDR261bmToFwiJNyw5ndDUNSiv",
  "key21": "4PGwBgWPXmB5oPyvoHqzq4T8Y6Ai8UNv7qCN4y8mWbdnPEQULTc6TwBiP94FRh3QaG37hwhTWcadmjhKGnzHTgjd",
  "key22": "e69Yzod2idQEDP7As1AFLR8bGuThUCFaR8kdcWPUZxoMJsYs1chnSuTWZZQc9W2uZJoUHTCfqns6CWeupYhvbN8",
  "key23": "2GqkmJZssBFKZdo9TtM3xvZMoMNg78bVYTsRBegr9rJ1FVu91k77duZHBAGmbd1vURHA1iiiLGd1ajsA9H9H9Jpn",
  "key24": "2UvE4AZTHwT7yT2xE4VSV3xZwnMMZB2ona4pexnGEL67ZAbWetRx8ZU3fRvCsrmgF6EpsFAXgUoqJhumV6tRowiN",
  "key25": "3MYZ6aYYsGyog8BYuoHxEQyjVCdZMuSgaaEHoA3bQZnpqP37AoWVB9bDTfpM9z6LTqcjLKyMKNDg52eAMztdDyCp",
  "key26": "8btAuq77jGY9nUefMJWud4aNzVniEER4mQPJvyJVtLvuq5aU9CyYhbVaWwoxZHtpGo9YCSLnWJn5S84AccUxVF4",
  "key27": "2XohPqKgroWdkRaoKgRoEPGdgtRhcYQaVdEu83YjEbKz37JZQ3pKKfNLYiJ2BYVjCp7Bb5F7UKtFLStwyfGZ8fm",
  "key28": "4jhP6NKriLWozeg2hXxXabviax9DdgbDJUWtnNgeL2Kcv5ssCtnrV8vnTyJAfjYtjXhd4dfLYYVdKiSpHyCmtiQT",
  "key29": "LCxbZnL6jqCsBEvVaAcctYqB7hPfjZZeXpsXBTPz9qvQ9n4A6RpWrh3ZbV637a5Cw1biXF6a9wRLhvZhdhw2q8w",
  "key30": "5Z13NnPgbDo54kPnv36craa9RPZSmmAdmdszoj4GJWqBJ47uznQMP97aRHPmBFCAZcXFdpERRhMonwvyjcCXm9dn",
  "key31": "2cGBpeWXVasD9FbxAdAZuSL1sXsEumHm1CbLUyh9Sbs8T5cpTFnUoUTyEPk2S8Jb6uygMXiSKPATmJtnerZaikQb",
  "key32": "66fZRm3DNLF81XQ1jwyBzpv69rzLtqxrqn9BAfECZts4tMym3SGXfCTytvY8jmLRaEV7ycMcHrNon5SVmcjio3wX",
  "key33": "5LXZAxK8BrFzf8RdXxY5Xv9FN96sq5VVdyyeK9nY4t7j1PZqDZUjs53KpPvGVEGoJLhspNoBAgYucx6kYsXV59cH",
  "key34": "4GXgLb2PtbnDecf1GTVSeHLd8WsqgBASjtSnGbyqQK4uVFovfTdRd317UFR4RYbSccThgL7wnZzyznRpPnjQzgkS",
  "key35": "JZqYSDH4NcPrD2LYRSd6jiwFSrWiJDp7N1vedkCW6oX8r8waq9xZbs1yR8MxqsXs5MJ525vjnQNEoE5RQLLR9HW",
  "key36": "b9dZ3KrH5VtC1awoapDp21vQ8cuq65xdBrttCJfH4f3QMiavaaAHVXxuuUrAEkirKVqgHDfhMSP7k3Do1TyMyRy",
  "key37": "485TonZHzY5mSBpLMq8oSnkCQfYZR2SQJUM6Ctrkw1doGF8enWyj3kY8bvv1yofp9ty5WGFWDqbZLFfTV6nMYouK",
  "key38": "5jYA4WQ9C6B13a8LEXGAgWEp4eqVzveCq9qKQUq6RhyDjycvuizriR5x5qSXzdyjivVPfrcxKiJo86Sf8BMj4vX",
  "key39": "4qwYkTvMcP1K37fq5EdGtKJaeoHBteeTmobr6j3SyLD4EmoJnTwdH3hS8XvHHciMSRDPiribjcUie7MXkRgwNoCR",
  "key40": "2dPbZcLuJdjbcbRPixbWtkrJgcvfQNbD371SXrHRUvPDcusmAsf2zkNZ9xrDnnFDftpt8ci2YP8GKe58z3ERVkfv",
  "key41": "2eSQSTpxxGgAeML3yd4SoXRwczKgSZApkLb4Ta9dngEHwFmJMEezZZDsDeDdCvbX6v8vJ1R6MB6tUSJFnfNfaGjR",
  "key42": "2FdHKRSt1aNiitk7DoSxjoRj5FAG2EA3twQjszsrdEpMsGmfepjkYSTu61bJpvr25vsiTohpokJhnQcH94n4mnXy"
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
