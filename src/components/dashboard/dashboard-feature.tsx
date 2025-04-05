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
    "5Cix7uV6K9R5g3Xmx6jD2AwrDfE12AUzGxsNEk7keNEjFhVd7LtkRoKi3ES95mV4dH47BWV8zeB9iX23drBTX1LN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aXKaKm3h3yTwJMYpc4h9nF5Zo3kFFijannNKL4SZQ7HNQEkxcHSygoVEqVp3d25q8uj2i5kz1z2NP6A3BmxyLxN",
  "key1": "4W8vqicATVLUVPV9zNWEqh2Qjz2DSnHxhkrtYtc8pEyXWToAsULigyGMqPgmbUdwuYK71dYByuC9Gx3RZRedN968",
  "key2": "4Hpx1rgNEQAUQmCdZEWXT2w5VLoWqdcfLDfGTnw4KCqsAqtXVyb2xNPAmDa3HkR21UFEE4rWrWdW4L1QV5Lvdzvn",
  "key3": "2SJ9o44p1vUm4yjd3ZbG4WTREGvoqZ4PDgff8yXmHj3a6jF9skKHkkk41ug5tBYrKGZ4z6DeBfTxYgagzBHeTKeb",
  "key4": "2pyKMFdSbuq9A5zqWEkwwhqSKRnW3MQtHUrg9WwSRTqt586qQbSMW7ruWMEnxWpfTDxowLwpV4qj4kP66vVT6JtG",
  "key5": "31xmLDWDK1e1bytL5jcvPLp81vDtNQCngy46aYgCRT3iwgjcrJtKoioFjSEBLG12TjVna1cjiGU54v1Booo57ADL",
  "key6": "34x4bx1Ji9i2xpms9K8xT6oJvE7L4v1xE4dDGnpfA7jW1YKJnvkAVD9eshDPk8F8LpxKkrXNfLW6XeSJhLmjJu8A",
  "key7": "3pZbTpjxe9UXYtjZTXWRPMd9VByKa3fevvuKTKmKsnUVF4xMomTAv7PFtB8YnHn7uBNRLDRVpKjmMfuFBL3rW36w",
  "key8": "2knVs7WvfgWrE1px8aAdtLHY4eQxvrThLTEXnPbYEMuS1xDK7KtBmULYPPTEiYMYYb9dVW9S5BM6k7TSaNhXoYyS",
  "key9": "4CRFLVuZH1VhqSx3xSwkxryJQ7V5NmJCryJC6J4VTHWENvBcWWnpJrvseFZegaG6gFBGgpxBdQSfykgvKjGPjRi9",
  "key10": "3c9bRR3H1LKDtLrVrKDtDSFVbfQ6vbSjSvmzrY3iZt1RGVidQPNENNXaMZDZWVCo23dZEXJr9fjyZ3RVdGHw8CQB",
  "key11": "2KwovN5qxargwKkJxx3zc8B4BCjBRWrediMKsFhsdFEShvwPibkE9XZ9PBUqtgvCp2qwvxGWHbMDPMJYeRjTddGp",
  "key12": "2TyLLAZnmBmrb4nrUCnChR79BF21VKhnF6xvbyjn8gkM3u638oN6dg8TXsYSjt6rY1vU3JQd4JqKDnyD9Puw1vrh",
  "key13": "5VJ7BUgv5ujt8zAjhvfj8VU2MtPpkBtFYMWgftVS9kYsHpMQzJiLJC5A12JJ4KfW1LiyTX7AQLyogfBBFe5jGG1w",
  "key14": "5YkPVYJZtqb57VrNMATiP3fe5wVKppfCwF1fJmEt4pgeNyqMbCorMoU3zAoQypvEg76z8d7CXyUbcYgiYEWpc24z",
  "key15": "3ubWpJ8LB1XoRxD1yp92TMVPwEVBjqxFGqeG1sD2kKVFgHax4iRza9znL8FSuUJXbaXYQyD9A2jzyXZcWnaMjMUt",
  "key16": "5HDAvGq1L4X6AyuhL7Rt4yqn5Y1hFi2xG41QMb6DGb8MSLGHysZ6v52kY5CKzXc9EQ2KXZKEWtH6QcyVWfdCPkKM",
  "key17": "u1FS2arFUxCBMdT5w3nrQJEQJRnVJ1b3KKgLniWEmRdeHXMhqV77UYGNxxiyidTRfwWq1CrfC4C27z4A8oMeTXB",
  "key18": "PgZRuRosgnQEUUDeFYk6wAJYSaGkNTgAHC9jvzW7CDNo4tMYt55x34gjePEy9NP4b8fasXZNGdH7ysVu5dWxsJA",
  "key19": "5m1aMhncUny1wmCoZTWppV6vmd69b8bdaa4wrT3zwq8FAXTo1yHBY48xRoCY5iFrwZUwnbtKiJc7FYV9WkJGRqAa",
  "key20": "5TpnobwDx6Mnt13fbWdXNQcvJMxv14SZBagz6J2ikqm8FzAf9NZ1aqC4kV4nBxYLAEc2V6iFeXLZjP33sVYAjKc",
  "key21": "5iVJBH8ebeajDALdafzPgo24D32Ns4VqwAv7oFJh1xa3Mfx73enHt76n7ghz5MhRQGDy7jrWnCJTzW8CknCBHt86",
  "key22": "AjBjkjt66uKt97z1cuGXJwv1npJs2Qrjv7xnLBE4STRhDnf8VMSx3GvZ1We6nJfP4tPkGSotBdGzRqKA7SnVTT6",
  "key23": "2QBuNgBHe1EnBnpwfjniDKrtjBQvLnjR8vZ4g9a1iJ3wW7AQgbFKGdMRAPj6V27oeWWkgcRt8oVTiAG7y1q2PVK1",
  "key24": "3bN6qQmw4YZQiDZDBYCgcswiJQVUoZSbmXddeya1yGf6h266uz2FH3TZ9cePUYKU5BApM7eiZQigzJfMfrDX6rmZ",
  "key25": "4BtzKzvDoUuLWUvuEf2TdJNXpdUQ684h9knwvjDYJHmoTvhXKm4yUfihkngKzuo9cKUhMBzXPtfcvhP37n5mo4jL",
  "key26": "4h9AsyzmQPnBV5Tc8gWP9m7LSoTLzV6Lyo8GMx2ZxCGZx5Hp4aLRWqmeKauszgFhbeyvHWXvDGD2Zgzyu78cKBvr",
  "key27": "3PRo1DbbAr34QHgsa1tPGPc6keTW9Pkf3KE3RmKFQkA4xfPgTE3EdpaHhfQCPSYdNDH6oKpJsk1YPCaS1BypKWs8",
  "key28": "fPYFoEKbiLp2mnmGCqKvEoyJWceQMxeAUKm7dj79jF8NMH9YDgNKMdUDi6DPLwn6k1sxeEZaHps1vCncY9VepjY",
  "key29": "4WXBfRjSenBkNvnQkZdDaLRtDECxz3duvNgLEj8vxYo4K3azFr2ubowDg8M4Mr59EnjhmtG9r7jwRbBKvPEud6Pv",
  "key30": "2RihuNhVNo19xyvNroCgvNrhAxt2LBHixFeqFaPQrQou4qXt3NWkoRzyHFktWa3eRF596Wvv79CcDLDFsgKwN5Yn",
  "key31": "4jHZAAzG6RFRx19WcqcfcJRykQHt6u1vftpayedFhuctXHPe36MMmCkgnonTALoSdYYV4vmFp2nxeZHm1uabCnPH",
  "key32": "2uPA6fLqD4NX6iTTEYwwR9LTjYhmT7pu3VCF1Pp7WrQcQ3U6eVMABTWg5dN5L1EV5RrNnEMRUiSxRZ2ghLwZLQbS",
  "key33": "eNXAj6quRhTYHrDWVgVsGT1jcKdasxGaihoTL1t3BAx5MrS1pckp7JeSt9urNemvCe5pSvZiJTNK4b21vJQuLp7",
  "key34": "5z6VBC9W1zyQtnr6tUwafQNvzKYcKLmrknezhxDF4NkcpkMpmtrs2Bbg5Dx38txuR6JH9BHsSJPAxz2iSogk53TN"
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
