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
    "4SUGRmGPEF84sSGvaKs424bjQ9FGTBG71MUjvW5aiU9yacC93Aan7wcTsAADUajyycUfvcD2WGS6ExaC6gfHd3vd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SfN7uyzWsoUDwnqtGFE2ifYXzRwysc5YvpWu6xQLWnYxLL91ipCwvJBSF9NvdogVXvcsZtiNLT6dr5ng926Mz6J",
  "key1": "4E3N4yHdSkNqAK4nwPnm3D1NY3ufnccCuvoMmXRo4nnTwKwLFro4bkQGRWY5DvkXvzo2yPNuWiAJUWxB7idGnQMd",
  "key2": "5STt5TT73H85WnHxRuouNkwCYRCQwmsD76yznLHprSjnCoZkFWDvKoz1VqeC8CdPDMxqnasAgBw9Jeq34yJxjoRT",
  "key3": "5MPpeg4gaexD9ruSdMTHVyyTVh29QfDyj3PV9SePG6FJjJm4WCuA65Bc4tbs2QiF4Gsm4ygpF64pbumwhNwuRfkt",
  "key4": "4LuVVpoXhvK8XFkQeMDNk62STjgLkwSbSjpc4s9xLRyLtGbChi1sFqLNSSDLj3AsJuwSSnbtvC1fURrPfD8riCWi",
  "key5": "R9DviDLj2X4QXG7fy3RPDD4Ai8AQYTYFe8rBeDHCTuEojZmYH5jVCmt2MPL5uGwBvTv7faneQLQa4wj3VfnsLFs",
  "key6": "2q1DcQNz9y6gFLgToFPk2ZcMCzqSs5tSdxw9prC92YrbxRhRKuQDPBakH4G1K5uAjUunK9kY7o9Xc4PTixdbn9kQ",
  "key7": "3juJQLaMjHN1Pvsdyea7LPxRmac6rGtVAnTte7oKGoY8Xo6YvGUNWgcjLbkjwLCANp24oGKpLFWDsDZrjjsyzeYP",
  "key8": "23TAZ9G1MLB4HnjjdvuRyb4zPaMSFqcQY1jxWG1mrmUKh7UQ7WPemRDvvcoTJgaV4VFwtrW68EDy8bbuaLs2NCf9",
  "key9": "2jXvtMbnoeP6qBt94s2NGjFmFjdN4Quzssvs7fxSujLyyzyvV9D4xHvz4AYmak1dPsneYSMmjynHYbpdbHRR9cJX",
  "key10": "3bboLHyw2egcnt85kgwBWbyc4c39mFQAkwn6QfgJB4b3QCcC6FRcSdA6tVQNAMQqBGy1daN82jKzNqMVBQyDkCeL",
  "key11": "3V1prb9Hcp8KfUa68q7vXzQDmTNZxfTsNhaTDCHDfnAu1fLKatMJG6Fcmi8sPkEZASFCMvkuQ7yyeQ1DrhqP5ntN",
  "key12": "3q7HosSx8PDdphVuhsL7XfRYe7gP9XJnPKNNKqEh2xCMgJkE7JMGciAaL6SHQSpcm2gYdqMpTgoZEQRqDjwCJref",
  "key13": "1VrjAmQXaZ5Rk7PAg6MNQpHe8gcEJs1CVMx1KgHEdSidwKpsNeknitb6i8HpJyARqq74uEQkDXkYY57F1T4yitY",
  "key14": "2emtpGB9km4t84nLaUrbqwdGdb6rchM2wPbM3pHVpFxUTbauhgeigXbfkjm94eNEA9nvWLpJkstj4V4N2kyQKH4d",
  "key15": "5gsvzm8ixhT2SnNYyUjPo1GDJKXLnfkcRjcMtY8TrkJRVUaVK2cf36hdZNHhgiSimgqhZtUcVBdBU6F1Pb81XmRZ",
  "key16": "4yJssTUnTmsyp7MUknnF3GWJhmUyFtoaPV1jNCnTAHwovMwmy8aPamGN87vDd7Sz1zBNVQh5vdpWM8T4gLeYAyK2",
  "key17": "4Ewm6QxeRe9BtGov3CP6V6UXico9FVULgjq7sSegitgHzP4wBnpi8Dz9cEBR2adfdK8WJv23V8yATSmfdh1CniEy",
  "key18": "49qnyK9L4Q6G4cYNXSvQVRS3XK7418Fh6B4TFWo7SkG4z33SwG9NBR36vJoq2iESCar1tKUnWwkHRhFsW1yMqUmn",
  "key19": "3Boj2kf5EHpWFCmVTttH2AGxhxG8bLoUaNfjCYHfLbAsDWscapuo2CQzUn7UWd9rZagQAsaJF3kEEqHyuZ2wPx8w",
  "key20": "3kpLWzpCJKwEQEuqajkRUxyXXbAUKyytKMW9jgBhS8FcPW9V1ierhjA7TGtZon2nfgov3eNv2HU4e4CiZXDaKK2A",
  "key21": "3Y1hi3h6A6QVCe1KmfGmyYBezoc3AUxgjJx6zygdA1NfMxWZG3DQ95DyJJsUbeE3PkHL4CS5QXUU1SxGxAXpZdch",
  "key22": "4e4PjN78zncv5EpQjQ6L6Fk26PRvLxktg3mwYNXJS7K6E4Kvg6jmoEWVhoNrZjZ7WncHrxBKZwzWwqG7i3M4pYdq",
  "key23": "9eTgckZvpX4uqSpLPqmzvue4eQAstGNNWwfELtUmvwntJqVcmNTnYMZE9p4x3YyFeBsxBYfSgzjdy5scGYHRKCQ",
  "key24": "2AcGsbTLvTobZJxxRLLJftdKYXexG2Gwu4d32Wk6dvmQVYCQGwnMmgP8UNmyzgHzTpeAUREeyhQEQz1mzt2UvzYQ",
  "key25": "56VShw9SqhbyAJ44ATKEEkgRDYKDx8Cq7NxY6bjyvmBrztdoPSCegFfDnSVHh9eqAx5CYwundg5tcW6F4eap6FZn",
  "key26": "2NyZWikfvAgD6neJSomUM5dHJuH1ZEAinykyQhd7wQUvDprJVVnbhm5EhRHTmKpxUxyn7HfVwqAyScRDZueCYTpM",
  "key27": "3cezZCZXZC19z9H2cpwsP9QUeDJcqD6JWNWCxz2MewGfAjSMnhzEj6JAWgERLzPsr6WE2GiozpRs4dzZLt5dkkbh",
  "key28": "4CfWAByzm64igBFkhgq1bsoQ1CcQyWfTyZgJTrGbg7NfJRKdMLf3Mm9PmQA9HtigDZtTPf2B1Yb4n1EWcHMNhzCV",
  "key29": "URGReVay9mJLNFEuyAdDp8YfNHeynVxh7iGQKCCejm6PM46PgnwL4C6YvAV6M9vGQsJjUN2zXZEdVGmFY22Qn7m",
  "key30": "2j6gkPy6dFqYM7SxRvGY3uDGof64d1JF1VfzCJuTQtUtG75FuvsR9QtftTdKgZFzQMQ5yqhgsaZdtjjQ7B6HfrYn",
  "key31": "3ur4xpDB7G6fmUKCVDFL83TenpTDdVQy3LvcWc8hkRfNgyJnXw4Lz8wkqXozkAAG72Vwsd3cpY9yg24mc8ECKzuj",
  "key32": "2fahWaSbEGdZaWWDnEE9MzRiWUe4cvg9MbyQ6ddAwS64VpSz9AqqGZj5WR33yuwnVKetEiVBf6CmrwJHxdx6Evs2",
  "key33": "42V32MiSNtWSiQz7b8ze59SRbQvKSeSCLvhd5hnZNjyvcMhypimfzdaYUcyjMvGKYXeYTRsNDzsrJJZ5EA21UyVS",
  "key34": "id71frnaQ5TAojeAdkne1aH8z242ihy4odKFzaMTSgaCSkS6Brt7bmXtn47WoHTQeNTHPTSr7XPZj6Qoe1Zq94z",
  "key35": "oeay6tchT4xM3vMmmceTE57cmjEJEW9cw5x2SYSmBZ4J7By3E9Er4wuUhFbdJmaDV7gevWnfwgeap7czLZGyuwF",
  "key36": "39a7jVi981bUNeyXgvmErh721L9maUzrnDdMbKkKKnQ9UfVru12J2zrjEpV5SjBJuBd1aB8vvN5kNXUaWKj9uKH3"
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
