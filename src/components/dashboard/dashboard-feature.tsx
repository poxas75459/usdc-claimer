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
    "5vSSrepYtGc5jZZQDhySVfDdRF1MonV8hSLWiDnPhWt32mqbPEqpzomxtZk42UunntGU28mgQzo2wvE4cFU38B3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vwC36FU4xKXLQHNVvssLL87wmUY7pqrMQWzsVqsvGujSZgDXfLxzSPP88MZPh7ABF3Hb7DtaAYoogWo6ZUMUecm",
  "key1": "4WsBb8REkHi5TyDEjYAG7iDRyNeR42mnyyLVjfJiUitfnZhA3i3mxPKgpaJixBqGafAu9ZieJ3QZGb4GVwvgyMbc",
  "key2": "2QYpPCRjaWnL7D1NjN57JjX8EKdMQS4FzZfxgB8mCVREJ7zSNqo7T8EQNeLMcz1pHnzv3bVh59CgTL5uuZtWTts3",
  "key3": "2w7LKGtQKpxV4RJUw5j2uAgFYqwhpWd7hGhQRkk4mZhte1tz2ZqcUqAFELKt5x74PzVRaNR9psMPZcWz6tjELaoY",
  "key4": "5EZLFvgfc1g7rVve42pcs1jbAz8tkR29QZryRFA1FVjGedrqTEMHfd9HymBi5UFekgHpkenVchtWCNTRxrynnPbT",
  "key5": "2A1UGgpfGPGkn58ACES8WQXySgwgFPrZAMvDvNwE8WySu4DFT4nW6sV5M6PeGZMCtFGctBUHWFDZvxtCDgik8ko7",
  "key6": "2Ay283SAc1NkpXcaWdKzvg9mjppMTqqrqAMD3hURWosbiSwsYjgSQFNw9wWFLUknPq1WQGgmaPXrY4eEzNwpzHxz",
  "key7": "EJav1oUV5FHEwgEYPKRKthqGTbpadaVUQhHF1xwQX51UjqJWL1BWizVQLaWTaqZ9NnrDbVzaTi1eyQm8JmKeEo4",
  "key8": "3aF94YFaLP2fnDiWUiXY2xT9Ug3PmahyHdhDXTgwXe6DtNy9RCUvMDUtfMXVKNTX2jcLUqsyc51Y2biBTXQAvLoN",
  "key9": "BnybSCgJqy7ZpYgQ12BeEsyiocXNsnWSHHSTjCZ9WwGNhzJkWPuHCACSE8hqyvoBzm2P2VqFjpY2wNjUEbpjhaJ",
  "key10": "5YCYbYE3KPHtkrC47VXSYL36ZbzUFxJz4meiFnn7kBgXFtkxQZNhcPwRcg6gFfgqyi5WJEKTGLwzjBiGY8Ah3x17",
  "key11": "5nCajKmNywjWnBdgbfPQvPHomU2G1Dr2ZfQisY8Z1WeF6uoerjBSwdaJVGj2FEfSxBm6UUQZbducPavNKJvESYrB",
  "key12": "3pe2TE3rohoxY3UrZgKKwRTwYQGykVb7s1LTCoFRryKmUsMqPSX3D7UgxKvy9FtrfCRL41gTg8HvR9ANZKv75ALd",
  "key13": "tx3tXMyhaAghM8BxW9SWP1f19TgXjAmATuA1QAKsmTnN9WUkbGCd7EGeyBtpE7x5MBaXWZE8iCbbsx8V84uuFZA",
  "key14": "38m9QJWJ4DKn3q1oZFv4S4xJxGhGFgUF6DKahRj6jMbo3pWE9vgyT14iTDNRFGkTF5QERaQp4Ad98NB9zU4SaciN",
  "key15": "2jPNUjeBbmRZbTzcHgPZWqyMKFA8CSn5VCyVPD7oUEpcRS4uvrBwxsD21HD1YFdEwyeKvTpH7KdMcowWL4b8dbcC",
  "key16": "5B2E63JcAZXMhp486gt73LEL4P2aCGAwqupoLeX3GoTDvZYVZjGiXR54RdTbpaodBvTTW7sn5HzaC3sMMPVMnMLG",
  "key17": "5sqqZ5c8Mx9DU9rZQmx73v7D7Hmn3sTed2Qg5Laj5h7Ypvv3FbPG7VAdUprDArbd3w3u4RBdNRuoHBGcKdwzVH1L",
  "key18": "6jY6HV2K6nPci5Kq4iv1gJ7mt1DZ6tYAdZ1KXEGRJF4zwPY6w7Lnvcgxiqyb5CjAo7iNhxQB2ivisbf2qK2yxsN",
  "key19": "4cNvG5vSvgSpQAV2eNbL4rHQ1fdcCnarfZqgLcuUptiE7FT2xiapQoqbwgywrMia3pnFywHmPsdZ15fH2oLeZ2iU",
  "key20": "3LzLtmCPf692aPBQ8xUBGNvWMJK5zKvw7uCZ6bsVEw4WKgJ6EuYhvVyyiENMq4wy4kLQhUYf345bZQco5bX1xTB4",
  "key21": "5CwsN7Paanhd81QWqhSLEU73apszcTxpEmFznXkNZVuDJnL8ivVZFJLrycGHktn8nCbhz8B9PYudFZZfWbxx2xN6",
  "key22": "4vmedqUhu2A9eUt78Go84xJUn7WQuXDtxg13nkFgsJqh9VWBqoDinbkZTauKmDMdbtG5nPz5kDmXQuvpkf3CZ9WF",
  "key23": "4wkk5o2R63wDh2eF6TwmzZdK1JXoSvXkEMnvshHtCuZwX7GtNaxM6BAkL15REGijFFXP9P9HfwNe5Wrpppwcoyn8",
  "key24": "FN4ifiFgZExh5XBkQWjFPweNFUGpUcxnGgAswGVofm39nseSmMP42SR5F6G5msbo8nGk3hLuSLz5BzKSE3kp2rH",
  "key25": "3poRUH1A8kJZKsCtRdGHjRzA1wsJPU73Yug2Zbi5qoygLassyp6VfgguP2KH8oBWrh8Fg24c9881UTTGaWGB3CS6",
  "key26": "617nv26da9iEYro7UsmkAjx1VgkxUQUJJPoy8hVdGSvj1ZBDKWnp81isqwrFSPfXjLDYVQKrPq4jCVG6fLEsU7ad",
  "key27": "48USibw2NCFcky8sPuWBNwvM7GCog3dCRYXN7FHu3nkVHNs95jCTAsVfQWvg9cXA9ZPmze4TybLQCu6ALC1vdC2s",
  "key28": "47RCQ3eBdtAYAwC3tZPMg2oibXkeVZtkgYtCoEbGn4nLvFB2pntSLjJdyXgDUBBeqUYnW7HX4YxEjM5DTtWYjWpq",
  "key29": "4Cjq54ZhRtVM3GsrxvVij9CWVqRp1qXQuKM5eVDfeG4K5j9nJEgR1AX5hEzKCfWKw84FN3A1vzLguLeZhKz7896S",
  "key30": "yk8bBsMRhagy3mQR37MMWvgP31EVVX6ikiMPFRpT7oYg9E7UZbRpfUM3Ej5ocZPUAcHWub93xw5saqxQCHRNDA2",
  "key31": "4rGANrGtz1WFCQt8veJ71hgaWttwGsCC99w6YmBqBXoBAcap1BquvZDddomJH1Vv8rWFJvdsgwKEYC8YRrAvfxP1"
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
