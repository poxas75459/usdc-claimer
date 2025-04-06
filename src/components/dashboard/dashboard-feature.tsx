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
    "3eKProrGtpbZfnBUjGtngi2T8JWMomHkit3MCocyyVKRsCwUJBdTL183LN9fy8RppW3gtLFYNuLvrdmNtAW51odC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VUtEbthAWRF5ZcxpWG1RM6VW8Kj9V6ozCAvKdUbEHAKey3Mk7L3JebbSx44QADZqZsuUyzXhPFxT6wv7N7o3D7k",
  "key1": "3TvH8yh3WqmQwj6WYB9v8CVhHcqB7ibjVEBkGKE3pW9jregPwmrKjEwq2RFqtkUUjxNFpMeQKxQVFpfn4QbHWUpN",
  "key2": "3y3AqNR9o2aZHy6GJyNgb32Z3L6aBxD3mQMyKabsuTeXeaCjLX3umZtPd3wNWiJ2MHdTwjbrqz8WzBTWwAnLNvRR",
  "key3": "2zu2qU7toM6cQa5Q5PsLSHqmg3KjaAJLPXAKH5QXHprgd5MFBsu9yGAVWYo3gZJ2VT8iLow4x1ckAgu28zMc5pss",
  "key4": "hzqP24potfDmivBq7p4fCAR5m3KZATxHUPXEvtFcLtdfUtcohbRKnVPPoBDNuxSeQMoArnddD9bBUneV3i2hTUV",
  "key5": "yLT8CtVvMeLQiLhVQAg35mjSMZ9pnkSL4PqHBLKRgLTpuRVHKmFEFCYc7h2CTgfPqsPEeRiHVb9xe46MmauA6Ep",
  "key6": "2LYApDrGUePvqknQoFSCRuoQDmDeyJR536afBjJLW7HSZMzorMBv4MUrNz9NKYmrsxSGDeuBZwKapu1UfW6G4wFe",
  "key7": "2n1hw2bzH7sYvnFyJycH5SzzCZRzPRnBSVWVDeRGCR19vAzJhZc6zB65oBQbTwcPAPCty69nF9YQ2JinK8v6keKP",
  "key8": "38AyX8eWPDJzaUmipAF9q4BW7PhcACTy1aV8KydQRnGspqL5e1fwwdaJR19gmvdyvm8R5DUNNN9BqRu6MqAb7kQh",
  "key9": "4kT2u4p5wQEQpsav2yRhWyUncQMEWLz8LV5WXSYwxc4DX4pKDzffJu2dsEQqVYKHoya2UCabEACbsFEWMiMVscMf",
  "key10": "5sSESUejWiUuxVixjtGH2FA46Am2y3hXidPgb1fytBuqs3moJFtg7wkrGCc6K89BUF9k5tBBEsV7xTiwxBECuGSR",
  "key11": "4iWdUFqoxF5v6TmhLVUC4ra49nVyXCqzUnL9gmB6eFiQLW78HiFf2LzkEDySWr7SKcsM9UUTBKp33M4W6h4URhRy",
  "key12": "2CRKqvi7E9McEavpkKf7H9NPPDm541J1YDhEpJfyVYRvheSfaRTMTpKW4Hhe4usA6vpHpBAJiWq67CKMjYukfeWe",
  "key13": "2fkszCbdVrHjUMiLQukyHKo7dMEpWUn141zZ4n8Yb9KgvFGf3x5QU99Hvhnub2WTNzuUNVUd3x4hMKGJtfrRB3s1",
  "key14": "5qkiKupnoYWWoADTE6qGMgYh26qkk4GBmLxLwuun8rUct16TaMU4yWifKxj8xFabFdTrVwpkzzbKLdcHDYK6EsxL",
  "key15": "2pKJjL7qyZzmL5X9Nrqzyq1KbnrEh2vKJiL5Foaw2FZesatmgbE7PiPRAcu8ekVa1HAZ1uEPUDkH6sdT6VW57Qq2",
  "key16": "3bdW3VYL9wosonMoNHLtgc4YAErozc1J9aY3eHiuKCWJR5ryMUmhYjGczHP39BnfCcFZXX1P7hLyFKbeg9gDXjCT",
  "key17": "5GZKNxpFAYXqaDG4aSXAN9vg7yGM1A5346gv3zVNr8M6vNUJxg3WauVzwLrdsXftoVs65yU4hwA83v8ZkJgaxPXc",
  "key18": "Bh7SJJnaopuxEwy8zRDx2EEs2AisDmTDLNR5JKuhzXiYju2xZtoP7pY3BxT81qvK3UAhs97QozP41xTLPHU3SWW",
  "key19": "LrUWYYbpuZM8WhuGtpy9W5CpAAwDTuohq7on1cAz5TYAPu1qHHwnSAT7pheBpWYFSuvBMwQ3ve2yRkDMNhb529o",
  "key20": "5pVHAzLUS3JrhVrUSPrWHUTt8ryQfUbuDgpJGpGsis7MWkLT1vm8QtwdrTrdZnju24bYDboYbNcXmjSMNR1XBBQU",
  "key21": "Xw24yiKuvwkHPMLLEC3oKkDpfAPprCKtKkdcA8aSxSEhm4wCWY1d7bGdLYdEzwdd2Zf2KUrURXvtJcYapZzRNNn",
  "key22": "3WNskKGLaUjHtBuoGwjtLNufVG4i68VEhUj7xTF4AZS46pbnM8MvNGBEL8tU4QDfdtkHQERRXPbSXaL3jAxvNUDL",
  "key23": "22UDLHxp5pGiZ8sJ1KbgAYAvDtxhESMkFNuaKu2wQF4cgshQAyR1s3x2T8WoAbZFqnszByLpaKm5Q3fg5acos1ZN",
  "key24": "3pWayaWW29HpzinophXyLVy1k65AghjohC1R4a1xu4HaEfqpT79DwNPbBtNTZyu66rw4utEtKJe1Pmb54QPgrPie",
  "key25": "4oDYS7y5y98w7QYR7mgZPFM3nzSumb31CQQiU9dSA3t3YtJtjfoWmoQghWqKAEewq5gpiSrNWYDEkp72kBmY6h9q",
  "key26": "1Ns86UDjSdkvi6dg64CrjHmyqWFBnS9ZB4whQBU2Z4ydKUMvrnEqeLRkAL8Ty49iJFqNPNKxeQwbQBZMTaK6XB3",
  "key27": "QddJCosERP4aVZyw887YpZ1H13hF52KSV1pHqBvTUb1HiCF2wPKC1Tnh541wG6QeC7LTNoVutFUSXxdBbZQ5aAn",
  "key28": "3SirT9i3XCNWBFkMCZ5qWzh33HHbihpGGpnBoav7kHdNLKjj3DiLx27P8r9Fgh3J5Qezc5eAYSacEC3T6GyxNK2e",
  "key29": "3vqkzo4p9jMggL7dTh6i6tZKdpsW2mAigbHRAQzYj9UkVdSjutAGkWezoFGqC11aLtPLnuQ4fJ82nfecW1DRSNT7",
  "key30": "4jCJ6fqYkUwsQFvAZ9V9vUKhj5ryW3MWgfQPscPM1kQATNMPFV4sFP4tEzM2psxY1bPzUEJgKHD2jQVaxsocyknQ",
  "key31": "2evgRqyQSj9HPHyG3gqnPabbk2VS3JFtbNvvFCdTE45dPnFnjq4sGLs2rZ9QKapvRTJEnm9njwTZCfsmjj99qQne",
  "key32": "2bZCW4yGecfi2JzRNm6w7dpY1yhf18Haa4JxtNSWXcPzVd2BZpmaUhDZHxFZrPjesZ5nBrysbRNwxJkW9mFAjee1",
  "key33": "33KAkkvK5kyDdhJG4DJZCHKGfw23szMMeiB7EH8EUNW3fNkmRjSRSrE7D59E1jVtS8ETyEwC37tQtAaNYVnBY18x",
  "key34": "4ydDSbEXbquTnhscRZ6i3sZm4iDnsgtsrhn2m3cqvtZVjxPdG872Kwt8QC3C7gugkQXKLvn3BMj4rskXj6qkNJez",
  "key35": "5Cbkk9gaT3h6KHVxYZ2xgCf4c2WKzATbfzbc7kLvqJ63v1FBDQ4wshPMY77j73QcdxsvJZWAqNXb7AY1NwU2ayWT",
  "key36": "XpZFCXfmXEwbDTo3i3WRja34xPqYrNDXr62Q2neMMgkTLqvNoSf1aDya5L8Y2tk9DMVohTwMfo1DuUZqsFtNG62",
  "key37": "3ipFkTsq7vrCaJK2J9ErTNfcHY7XNm4gWe18L6MaUcKx5BNYHJucZ3Dz673PwRzF3QsW8nHxiwyr4geQQw5D6ArW",
  "key38": "4treEP11ZWo4LJ1Hm9mGMGKcuNjT5TPnnCy4dwk1AWms1yoP6LZBv1Q1HWyS7FCm1BWe2GVJVUQyQYxYdZPgWNnL",
  "key39": "4ggiKVkLwTdhpbYYuVFEtXUFeDmYbntU6biVLYxQhtYx35R2JgJCjjYNUxuf9xHcEq15vGYHG39tCnSvuGsVPuWR",
  "key40": "5MqRrtHVr4JDvdHLKQ1JyMyv2qBxy5Yhw2GkRXiomqQ8XSVquXvif4thW6WZmEScmXTL2KHCPmb3XhVKPz3d9TA4",
  "key41": "5KQmd5iw2T7wRKtX6rLtYd4iZyTfoacHf29mPJvu5bBsB7VjM3kpUhxwKMEwDcqV9BnccuggN2VQAYYVsvpZWVoR"
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
