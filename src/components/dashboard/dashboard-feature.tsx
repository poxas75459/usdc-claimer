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
    "3fw7eLUx5tJJYtK1iCDP6BpH51gJDopgHQG2J3sEkWCJrjNWq6aYQNar1pvei91116ZiyAR1d7VWi38fFRqfURLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yksstdUGYv4u9YqT7foY8MsWNx8AFkXCwpjErAQPur6XyVVZeYfTC7YSBbqLZfCFEJegY1BeJqEgDhctr3f56dQ",
  "key1": "2rpnDafQGKpzGHrVYB8VJshmwYVDeFYnJ2iv1zrfpxgLGxLrdwhcFToqGSxDKb7hqcCcqm82gVCB6senqe2vAF2t",
  "key2": "49JGpYFJHSGViDXxr7vomy9upNXRUCiznwZrWAGy9Atgfva1B2vmotQphi7QcUpTqsvcTxMdJPX9rd9u7u4Du1mj",
  "key3": "4Z1fwx8xJSE2Z6mfnAKLCRNsmJATehvaq4F1CRgCZyKAfxufxQ2hyc4DocuCxrqegxCv4gXxLGj4zxFR1k7zGZ5G",
  "key4": "5yTbhSFWTodaKFmjzyq4W5k8joCc4Sua9dRvvp11NhqPkrr9KVftckuDv9JJJTySUMfbvyorXism4FgA18en1UUX",
  "key5": "2ruL8jvUjLFYgpLcLUGkAU2bL7aNpyxn6B7kdihfi2k6t2eYmu1CZbfMeRBS91bne4eUVm8gU9UeUsKyHrojeyoA",
  "key6": "4rKTSnj92nA3MSpUfVHy5xico5uZGJAETy4mo98ExQDAtaLtjxongDLEj1ZtCX41ZAsddwnbGmFX5PdZhDkfm4oZ",
  "key7": "5XEz6qDSo3BS7xud5LX9EfKRJgwo4Q4r4jvUyUHi5etPfBJggf7aYwvGkau76YmbdF147331xLBrjBuY3RE2bEgT",
  "key8": "4m71mjzuLnoPGjtg5rAh3Bg6Ah4dpbAHt5ZwZso34Vxaqu9ns3wfMzpfgvHfKLMWxPvHtbRMTQzXczhL9Q2FMG47",
  "key9": "4WLyCUeZaULWeeVQ8oTQhWxGQ2Ljmsg4fXg6MsVbuq1zGQojmpsjgrwrTVWAL7gz4yk9uveSaMNtuRi9mgk6eBGx",
  "key10": "3eyjf2nF5kaME7NeL5XR62HGJY51PGxyYG9wdsWi4vbjrrkkRLH2wDatEwk66ajfEGayTvEge1W7cAq5DSPqxokv",
  "key11": "58mo5xPNFBZpnvLGztiX7rtUsEZWE71yFUMvC9fiRfwEHtEdgjj8rBK2FtQezY12EUNAnDviENAu28brs93w1qLm",
  "key12": "2xE8kcUB8poMbbuhrBzxcWkN1Xb5qDTsff9W4Prf3sMzWYi3V6R2h2JMUAsSCMrDSh17nVt1HnD68UCqV8iR4KpN",
  "key13": "2H9GSwkcNRFAnF79LbnQEHY4Fq1oLVR9TWx6mvkkH8bkuSDYSxVautVUjs4cqbFKHjJMj6t3huQgecwE35oweU29",
  "key14": "2YXe8ruPPuZLEHcRd1s1kS5J4GwfQ5FXNt6igKVyB43tC5tHvnf5v2dyU77cuYLA7k1Hv7BgyoHUVzcVRgGmN4FS",
  "key15": "5CYiRBGEbjmU53YYQbhP1CEZg74Udx5KZnbrsARkHvYQcuuhjrzrBXB8pc86iTipPDP95gtcNrsvnAJiwW1ipV1W",
  "key16": "4AegjJUh62HQVspfs1QNixndG8BhXZHZKTwcmjU4s4RYPhb5P3NsGW37E8xWXFaUfG51ocU8ewM6b2RpKh9AEDse",
  "key17": "42NZoiwUFbB5CTpgKy9UHuz9UFgwv3ufoXPiv5QjD4tqY9H6FH9hooz6cqb9NsqTgmPrGECQrcyCWMHZrDsMCYwM",
  "key18": "feE2ZpsrJzHiELjdYXe2ub5LAkwdRQ79iMMQmngKCFjrgy8M57X4AftPiRG4WeCugm33kxMJPfAnoT3Rrpb5s4Z",
  "key19": "4yQexwDUnTADAwrxRgafpMZFFbK7MLE81v9G9t7gR7Bof46wXok5Q2T1tSmucVdKm3mKB96ZVpiMj9imzgn7fPJY",
  "key20": "2rHPf5vQUnWP4y2fZUxyUU3bwJNDcDdGPV84CHvx9DbkWw19yeAxJLjT2af37bpxXEwDRr7AUnJvTRb2jZtNSzCg",
  "key21": "3rtmDMD3P6nmMFqgr4oCYRRar2mRP1DPbwvgidsNg3sHJvzRKaT5JLrRnqfPm38jTzmJBJogkbxmNL2w2uCMeGDX",
  "key22": "3hWn9sLmQo7XqZjKZZBqbNuBkAvHmjSDGnw1QfVsTDAH6J57ezcJdEo5cWEQQjdvu2uNt1G3w3MmwSNv225GbtQ8",
  "key23": "3RnbMuFvs2SY6q6RJAxbohNGNS8FY6CeggHdEyY2zm4eaDiMLWFRQ57Xe9zxetmiQuEgCXoi5T6jGUDkhT7Fkt1D",
  "key24": "3AMKewWaLVTDp837eFbUD3jmSEuLV4iyNXgcfWrVG8e94mqwKuemrRTRQbvGodG4ijUNyvZqq76tY7D3DbisbfBL",
  "key25": "jCLaGxvEHvFjyeDoPUMRV3BSz4KvAEjCKxGVRAi4i8iMtcqWpZJbaidDByh7rbFg3nAvYYBSSUseqEePkRB2Fe5",
  "key26": "3ooVQNqaCwutRQQD339vXWDY7fBpKCcCtWoGpFAKwAYHfPjCz2mZC2ZwjQqCxhnBTJXJRnRc6GVR3Z1QXMkvo9eE",
  "key27": "3DByVjUTVyj3PvUjimy2ShuMfJWFQT9f4TB6DfFsS1PaqCZNkHsLZksYBsSN8cXS85YK5MkiAmvqSpfgttbWForz",
  "key28": "aJ4ttrhgTTncivxCwjHEM27g7rpR3rqKxmXxf8LdhEUSQPpReQUJ74uT6J7trvurUJcvBrEZu4TKy7aJDDxHif1",
  "key29": "2fUZ9DmxUKP6FRyKktbfsRigUDB8SSJFLtZBSeXiCPrQvxDWBskpLrwJAmWHpPeCheFM6JBt8WvD6q71B4NrK888",
  "key30": "3kHAmMbYGSQocqHptqa89iULfWZaTYb4gqpQjCkarDWy9FtLARdFKSiopcsF2M5ZS8qF5YVoQ1k7cVDY8NJNaa9f",
  "key31": "4kuBBwr6R9iszomc6Ga4eKEvgfngoKSHxFVsV98AcWCVrdYcjnvoiGf9dhCCCqe3tXsqdCbnKndGWM8EMPmydN1v",
  "key32": "2h8SXARonpJ8kEDJMNFgnUbsocHDt6399yZe4nJnfk9MwV7WXjq5f84ewhsiBVN76UPfzGy5WENHn1zpRABwMLii",
  "key33": "4hUjuhJxwbQv1Sz7WJokQLP3jg3RYdAoKrD6wQUpZ5XfThqKk6wmwSLdbeziQps4rsogyAQEUwACVwG5pmACF2xt"
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
